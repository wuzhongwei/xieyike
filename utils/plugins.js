import Vue from 'vue'
let baseUrl = 'http://47.98.126.64:8655'

Vue.prototype.$toast = (title, duration = 1500) => uni.showToast({
	icon: 'none',
	title,
	duration
})
Vue.prototype.$router = (url) => uni.navigateTo({
	url: '/pages' + url,
	animationType:"slide-in-left", // 跳转动画
	animationDuration: 800
})
Vue.prototype.$switchTab = (url) => uni.switchTab({
	url: '/pages' + url
})
Vue.prototype.$relaunch = (url) => uni.reLaunch({
	url: '/pages' + url
})
Vue.prototype.$http = (options) => {
	uni.showLoading()
	try{
		let p = new Promise((resolve, reject) => {
			let res = uni.request({
				...options,
				url: baseUrl + options.url
			}).then(([error, {data}]) => {
				if (data.code === '0000') {
					resolve(data)
				} else {
					uni.showToast({
					    title: data.message,
						icon: 'none'
					});
				}
			}).catch((error) => {
				console.log('error', error)
			})
		})
		return p
	} catch(e) {
		return e
	} finally{
		uni.hideLoading()
	}
}
