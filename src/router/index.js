import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import OneClass from '@/views/OneClass'
import TwoClass from '@/views/TwoClass'
import Magazine from '@/views/Magazine'
import BookDetails from '@/views/BookDetails'
import Search from '@/views/Search'
import UserCenter from '@/views/UserCenter'
import BuyMember from '@/views/BuyMember'
import MailSet from '@/views/MailSet'
import Feedback from '@/views/Feedback'
import InviteCodeActive from '@/views/InviteCodeActive'
import PushRecord from '@/views/PushRecord'
import PushDetails from '@/views/PushDetails'
import MagazineDetails from '@/views/MagazineDetails'

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
            path: '/TwoClass',
            name: 'TwoClass',
            component: TwoClass,
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
        },
        {
            path: '/MagazineDetails',
            name: 'MagazineDetails',
            component: MagazineDetails,
            meta: {
                title: '',
                keepAlive: true
            }
        },
        {
            path: '/Search',
            name: 'Search',
            component: Search,
            meta: {
                title: '搜索',
                keepAlive: true
            }
        },
        {
            path: '/UserCenter',
            name: 'UserCenter',
            component: UserCenter,
            meta: {
                title: '个人中心',
                keepAlive: true
            }
        },
        {
            path: '/BuyMember',
            name: 'BuyMember',
            component: BuyMember,
            meta: {
                title: '购买会员',
                keepAlive: true
            }
        },
        {
            path: '/MailSet',
            name: 'MailSet',
            component: MailSet,
            meta: {
                title: '邮箱设置',
                keepAlive: true
            }
        },
        {
            path: '/Feedback',
            name: 'Feedback',
            component: Feedback,
            meta: {
                title: '反馈',
                keepAlive: true
            }
        },
        {
            path: '/InviteCodeActive',
            name: 'InviteCodeActive',
            component: InviteCodeActive,
            meta: {
                title: '邀请码激活',
                keepAlive: true
            }
        },
        {
            path: '/PushRecord',
            name: 'PushRecord',
            component: PushRecord,
            meta: {
                title: '推送记录',
                keepAlive: true
            }
        },
        {
            path: '/PushDetails',
            name: 'PushDetails',
            component: PushDetails,
            meta: {
                title: '推送状态',
                keepAlive: true
            }
        }
    ]
})