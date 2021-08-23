import axios from 'axios'
import { ElMessage } from 'element-plus'
function getSession(key) {
	let json = window.sessionStorage.getItem(key)
	return json
}

export const PATH_URL = import.meta.env.VITE_API_URL

// 配置新建一个 axios 实例
const service = axios.create({
	baseURL: PATH_URL,
	timeout: 50000,
	headers: { 'Content-Type': 'application/json' }
})

// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		if (getSession('token')) {
			config.headers.common['Authorization'] = `${getSession('token')}`
		}
		return config
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

//添加响应拦截器
service.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => {
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时')
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误')
		} else {
			ElMessage.error(error.message)
		}
		return Promise.reject(error)
	}
)

export default service
