import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'

// import Layout from '@/views/layouts/Layout'
import UserList from '@/views/user/List'

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

        {
            path: '/user/list',
            name: 'UserList',
            component: UserList
        },

        // {
        //     path: '/layout',
        //     name: 'Layout',
        //     component: Layout
        // },
    ]
})
