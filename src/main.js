// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import App from './App'
import router from './router'
// 全局引入Toast
import './components/Toast/toast.css';
import Toast from './components/Toast/index';
//全局引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//路由动画
import Navigation from 'vue-navigation'
Vue.use(Navigation, { router })

Vue.use(ElementUI);
Vue.use(Toast, {
    duration: 3000,
});

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs

//main.js里面的代码
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面meta */
    if (to.meta.content) {
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        meta.content = to.meta.content;
        head[0].appendChild(meta)
    }
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})