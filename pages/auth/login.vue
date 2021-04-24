<template>
	<view class="reg-bg">
		<view class="reg-title">登录</view>
		<view class="reg-msg">你好，欢迎来到鞋凝客！</view>
		<view class="yixieke-form-item">
			<view class="header">手机号</view>
			<view class="input-row">
				<input 
					class="input-row-item" 
					placeholder="点击填写" 
					type="number" 
					maxlength="11" 
					v-model="from.phone" 
				 />
			</view>
		</view>
		<view class="yixieke-form-item">
			<view class="header">验证码</view>
			<view class="input-row">
				<input class="input-row-item" 
					placeholder="点击填写" 
					v-model="from.verifyCode"
				 />
				<text class="yanzma" @click="send()">{{num <= 0 ? sendStr : num}}</text>
			</view>
		</view>
		<view class="mix-btn-content" @click="login">登录</view>
		<view class="register" @click="register">注册</view>
		<button class="other-wrapper" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" >
			<view class="item column center">
				<image class="icon" src="/static/icon/login-wx.png"></image>
				<view>微信权限登录</view>
			</view>
		</button>
		
	</view>
</template>

<script>
	import {checkStr} from '@/common/js/util'
	const sendStr = '发送验证码'
	const num = 60
	export default {
		data() {
			return {
				sendStr,
				num: 0,
				isSend: true,
				from: {
					phone: '13120867076',
					verifyCode: '',
					source: '1'
				}
			}
		},
		methods: {
			getPhoneNumber (e) {
				var that = this;
				uni.login({ //微信官方登录方法
					 provider: 'weixin',
			         success: function (res) {//登录成功，拿到第三方平台code
						const {encryptedData, iv} = e.detail
						that.$http({
							url: `/baseUser/v1.0/appletLogin`,
							method: 'post',
							data: {
								code: res.code,
								encryptedData: encryptedData,
								iv: iv
							}
						}, {msg: true}).then(({data}) => {
							that.loginSuccessCallBack(data);
						})
						
			         }
			     })
			},
			loginSuccessCallBack(data){
				this.$util.msg('登陆成功');
				this.$store.commit('setToken', data);
				setTimeout(()=>{
					uni.navigateBack();
				}, 1000)
			},
			register () {
				uni.navigateTo({
					url: '/pages/auth/register'
				})
			},
			send () {
				if (!this.isSend) return
				if(!checkStr(this.from.phone, 'mobile')){
					this.$util.msg('请输入正确的手机号码');
					return;
				}
				this.$http({
					url: `/common/v1.0/getVerifyCode/${this.from.phone}`,
					data: {
						verifyCodeType: 'login'
					}
				}).then((data) => {
					if (data.data) {
						this.isSend = false
						this.num = 60
						this.timer = setInterval(() => {
							this.num = this.num - 1
							if (this.num <= 0) {
								this.num = 0
								this.sendStr = sendStr
								this.isSend = true
								clearInterval(this.timer)
							}
						}, 1000)
						this.$util.msg(data.message);
					}
				})
			},
			login () {
				if(!checkStr(this.from.phone, 'mobile')){
					this.$util.msg('请输入正确的手机号码');
					return;
				}
				if(!this.from.verifyCode){
					this.$util.msg('请输入验证码');
					return;
				}
				this.$http({
					url: `/baseUser/v1.0/login`,
					method: 'post',
					data: {
						...this.from
					}
				}).then((data) => {
					if (data.code === '0000') {
						this.loginSuccessCallBack(data.data);
					}
				})
			}
		}
	}
</script>
<style>
	page {
		/* height: 100vh; */
		background-color: #ddd;
	}
</style>
<style lang="scss" scoped>
	.other-wrapper {
		.icon {
			width: 90rpx;
			height: 90rpx;
			margin: 0 24rpx 16rpx;
		}
		.item {
			color: #fff;
			font-size: r(16);
		}
	}
	.wx-login {
		text-align: center;
		color: #fff;
		font-size: r(16);
	}
	.reg-bg {
		background-color: #ddd;
		padding-top: r(50);
		padding: r(60) r(34) 0;
	}
	.reg-title {
		font-size: r(36);
		color: #fff;
		line-height: r(36);
	}
	.reg-msg {
		color: #fff;
		font-size: r(16);
		margin-top: r(48/2);
		margin-bottom: r(54);
	}
	.yixieke-form-item {
		margin-bottom: r(20);
		.header {
			color:#fff;
			font-size: 16px;
		}
		.input-row {
			width: 100%;
			height: r(45);
			border-radius: r(100);
			border: 1px solid rgba(255, 255, 255, 100);
			position: relative;
			.input-row-item {
				outline: none;
				-webkit-appearance: none;
				background-image: none;
				width: 100%;
				padding: 0 r(20);
				height: r(45);
				line-height: r(45);
				display: block;
				box-sizing: border-box;
			}
		}
	}
	.login {
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    width: 610rpx;
		    height: 88rpx;
		    margin: 0 auto;
		    font-size: 32rpx;
		    color: #fff;
		    border-radius: 100rpx;
		    background-color: #ff536f;
		    position: relative;
	}
	.register {
		color: #fff;
		font-size: 16px;
		text-align: right;
	}
	.yanzma {
		position: absolute;
		right: r(20);
		top: 50%;
		transform: translateY(-50%);
		color: #fff;
		z-index: 10;
	}
</style>
