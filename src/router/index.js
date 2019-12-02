import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../pages/Chat'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import firebase from 'firebase/app';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Chat',
            component: Chat,
            beforeEnter: (to, from, next) => {
                if (!firebase.auth().currentUser){
                    next('/login')
                }else{
                    next();
                }
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: "*",
            name: 'pagenotfound',
            component: PageNotFound
        },
    ],
    mode: 'history',
})