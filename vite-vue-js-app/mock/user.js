
const tokens = {
    yuzhilin: {
        token: 'admin-token',
        userPassword: '123456'
    }
}
const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin',
    },
}
export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: config => {
            const { username, password } = config.body
            const { token, userPassword } = tokens[username]
            // mock error
            if (!token) {
                return {
                    code: 204,
                    message: 'Account and password are incorrect.'
                }
            }
            if (password === userPassword) {
                return {
                    code: 200,
                    message: '登陆成功',
                    data: token
                }
            }
            return {
                code: 401,
                message: '密码错误',
            }

        }
    },
    {
        url: '/api/user/logout',
        method: 'post',
        response: () => {
            return {
                code: 200,
                message: '登出成功',
                data: ['aa', 'bb']
            }
        }
    },
]