import Vue from 'vue'
import App from './App'
import i18n from './i18n/i18n'
import store from './store/index'
import http from './utils/https'
// import status from './components/status.vue'

Vue.config.productionTip = false
Vue.prototype.request = http
Vue.prototype.$store = store

// 全局注册组件
// Vue.component('page-status',status)

App.mpType = 'app'

const app = new Vue({
	store,
	i18n,
    ...App
})
app.$mount()
