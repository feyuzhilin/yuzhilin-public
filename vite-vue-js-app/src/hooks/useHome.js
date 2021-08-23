import { reactive } from "vue"
import axios from '../plugins/axios'
export default function () {
    let pageData = reactive({
        loading: true,
        data: []
    })
    const refresh = ()=>{
        pageData.loading = true
        axios.get(`/api/article/list`).then(res => {
            if (res.code === 200) {
                setTimeout(() => { //模拟网络慢
                    pageData.loading = false
                    pageData.data = res.data.items
                }, 1000);
            }
        })
    }
    refresh()
    return {
        pageData,
        refresh
    }
}