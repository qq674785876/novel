import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import OneClass from '@/views/OneClass'
import Magazine from '@/views/Magazine'
import BookDetails from '@/views/BookDetails'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: '首页',
                keepAlive: true
            }
        },
        {
            path: '/OneClass',
            name: 'OneClass',
            component: OneClass,
            meta: {
                title: '分类',
                keepAlive: true
            }
        },
        {
            path: '/Magazine',
            name: 'Magazine',
            component: Magazine,
            meta: {
                title: '杂志',
                keepAlive: true
            }
        },
        {
            path: '/BookDetails',
            name: 'BookDetails',
            component: BookDetails,
            meta: {
                title: '',
                keepAlive: true
            }
        }
    ]
})