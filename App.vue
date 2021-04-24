<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: e=> {
					this.initSize(e);
				}
			})
			console.log('App Launch')
		},
		methods: {
			/**
			 * 存储设备信息 参考colorUI
			 * @param {Object} 
			 */
			initSize(e){
				const systemInfo = e;
				let navigationBarHeight;
				let custom = {};
				// #ifndef MP
				custom = {height: 36,width: 88};
				navigationBarHeight = 44;
				// #endif
				// #ifdef MP-WEIXIN
				custom = wx.getMenuButtonBoundingClientRect();
				console.log('e.statusBarHeight', e.statusBarHeight, custom.bottom, custom.top)
				navigationBarHeight = custom.bottom + custom.top;
				// #endif	
				systemInfo.custom = custom;
				systemInfo.navigationBarHeight = navigationBarHeight;
				Vue.prototype.systemInfo = systemInfo;
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import './common/css/uni.css';
	@import './common/css/common.css';
	@import './common/css/icon.css';
	/*每个页面公共css */  
	.uni-icon-arrowright {
		color: #B5B5B5;
		font-size: 30rpx;
	}
</style>
