import Vue from 'vue'
import Router from 'vue-router'

import Test from '@/components/test/test'
import TestLogin from '@/components/test/login'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'

// import Layout from '@/views/layouts/Layout'
//用户
import UserList from '@/views/user/List'
import UserDetail from '@/views/user/Detail'

//系统
import SystemAdminList from '@/views/system/admin/List'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        //用户模块
        {
            path: '/user/list',
            name: 'UserList',
            component: UserList
        },
        {
            path: '/user/detail/:id',
            name: 'UserDetail',
            component: UserDetail
        },

        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/test/login',
            name: 'TestLogin',
            component: TestLogin
        },

        //系统模块
        {
            path: '/system/admin',
            name: 'SystemAdminList',
            component: SystemAdminList
        },

        // {
        //     path: '/layout',
        //     name: 'Layout',
        //     component: Layout
        // },
    ]
})
