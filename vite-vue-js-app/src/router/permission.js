
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

export function initPermission(router) {
    router.beforeEach((to, from, next) => {
        NProgress.start()
        const hasToken = sessionStorage.getItem('token')
        if (hasToken) {

            if (to.path === '/login') {
                next({ path: '/' })
                NProgress.done()

            } else {
                next()
                NProgress.done()

            }

        } else {
            if (whiteList.indexOf(to.path) !== -1) {
                next()
            } else {
                next(`/login?redirect=${to.path}`)
                NProgress.done()

            }
        }
    })

    router.afterEach(() => {
        NProgress.done()
    })
}