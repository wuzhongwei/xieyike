import Vue from 'vue'
import App from './App'
import store from './store'
import {
	msg,
	isLogin,
	debounce,
	throttle,
	prePage,
	date
} from '@/common/js/util'
import mixin from './common/mixin/mixin'
Vue.mixin(mixin) 
Vue.prototype.$util = {
	msg,
	isLogin,
	debounce,
	throttle,
	prePage,
	date
}
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
