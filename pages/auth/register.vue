<template>
	<view class="reg-bg">
		<view class="reg-title">注册</view>
		<view class="reg-msg">你好，欢迎来到鞋凝客！</view>
		<view class="yixieke-form-item">
			<view class="header">用户名</view>
			<view class="input-row">
				<input 
					class="input-row-item" 
					placeholder="点击填写" 
					type="text" 
					v-model="from.name"
				/>
			</view>
		</view>
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
		<view class="mix-btn-content" @click="register">注册</view>
		<view class="login" @click="login">登录</view>
		
	</view>
</template>

<script>
	// import {rulephone} from '@/utils/utils.js'
	const sendStr = '发送验证码'
	const num = 60
	export default {
		data() {
			return {
				sendStr,
				num: 0,
				isSend: true,
				from: {
					name: '',
					phone: '',
					verifyCode: '',
					source: '1'
				}
			}
		},
		methods: {
			login () {
				uni.redirectTo({
					url: '/pages/auth/login'
				})
			},
			send () {
				if (!this.isSend) return
				if (!this.from.phone) {
					uni.showToast({
					    title: '手机号不能为空',
						icon: 'none'
					});
					return
				}
				// if (!rulephone.test(this.from.phone)) {
				// 	uni.showToast({
				// 	    title: '请输入正确的手机号',
				// 		icon: 'none'
				// 	});
				// 	return
				// }
				this.$http({
					url: `/common/v1.0/getVerifyCode/${this.from.phone}`,
					data: {
						verifyCodeType: 'register'
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
						uni.showToast({
						    title: data.message,
							icon: 'none'
						});
					}
				})
			},
			register () {
				if (!this.from.name) {
					uni.showToast({
					    title: '用户姓名不能为空',
						icon: 'none'
					});
					return
				}
				if (!this.from.phone) {
					uni.showToast({
					    title: '手机号不能为空',
						icon: 'none'
					});
					return
				}
				if (!this.from.verifyCode) {
					uni.showToast({
					    title: '验证码不能为空',
						icon: 'none'
					});
					return
				}
				this.$http({
					url: `/baseUser/v1.0/register`,
					method: 'post',
					data: {
						...this.from
					}
				}).then((data) => {
					if (data.code === '0000') {
						uni.showToast({
						    title: '注册成功'
						});
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
		margin-top: r(28/2);
		margin-bottom: r(24);
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
		color: #fff;
		font-size: 16px;
		text-align: right;
	}
	.register {
		color: #FD0303;
		text-align: center;
		margin-top: r(20);
		display: block;
		font-size: r(20);
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
