import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../pages/Chat'
import Login from '../pages/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Chat',
            component: Chat
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ],
    mode: 'history',
})