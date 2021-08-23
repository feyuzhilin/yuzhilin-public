import { createRouter, createWebHistory } from 'vue-router'
import {initPermission} from './permission'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Index.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '../views/pages/dashboard.vue'),
        },
        {
          path: '/component',
          name: 'component',
          component: () => import(/* webpackChunkName: "login" */ '../views/pages/Component.vue')
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import(/* webpackChunkName: "login" */ '../views/pages/Setting.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
  ]
})
initPermission(router)
export default router