<template>
	<view class="app">
		<head-info :user="user" v-model="title"></head-info>
		<view class="card">
			<view class="card-title">
				<view class="f18">测评相关信息</view>
			</view>
			<view class="card-item">
				<view class="label">鞋类型</view>
				<view class="value flex">
					<text>篮球鞋</text>
				</view>
			</view>
			<view class="card-item">
				<view class="label">品牌</view>
				<view class="value flex">
					<input class="inp" type="text" placeholder="内容待添加">
				</view>
			</view>
			<view class="card-item">
				<view class="label">鞋款</view>
				<view class="value">
					<input class="inp" type="text" placeholder="请输入鞋款">
				</view>
			</view>
			<view class="card-item">
				<view class="label">尺码</view>
				<view class="value color3">
					<input class="inp" type="text" placeholder="请输入尺码(mm)">
				</view>
			</view>
			<view class="card-item">
				<view class="label">测试袜子</view>
				<view class="value color3">内容待添加</view>
			</view>
			<view class="card-item">
				<view class="label">测试场地</view>
				<view class="value color3">内容待添加</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="popup-wrap card">
				<view class="card-title b-none">
					<view class="f18 flex-center">
						<view class="uni-icon uni-icon-arrowleft" @click="back"></view>
						鞋款
					</view>
					<view class="f14" @click="submit">确认</view>
				</view>
				<uni-easyinput type="text" v-model="shoeName" placeholder="点击填写" />
				<view class="msg f16 mt20">*请填入鞋款名或货号，管理员将归类整理；
无法提供鞋款名或货号可以为空。
</view>
			</view>
		</uni-popup>
		<nav-footer></nav-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				user: {},
				shoeName: ''
			}
		},
		onShow() {
			this.$refs.popup.open()
			let user = uni.getStorageSync('baseUser')
			let getEvaluationNoteList = uni.getStorageSync('getEvaluationNoteList')
			this.user = {
				name: user.name,
				icon: user.icon,
				shoeName: getEvaluationNoteList.shoeName,
				frequencyMin: getEvaluationNoteList.frequencyMin,
				durationMin: getEvaluationNoteList.durationMin
			}
		},
		methods: {
			back () {},
			open() {
				this.$refs.popup.open()
			},
			/**
			 * 点击取消按钮触发
			 * @param {Object} done
			 */
			close() {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
				// ...
				this.$refs.popup.close()
			},
			/**
			 * 点击确认按钮触发
			 * @param {Object} done
			 * @param {Object} value
			 */
			confirm(value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 close 才会关闭对话框
				// ...
				this.$refs.popup.close()
			},
			changeGender() {

			},
			addfootHandle() {
				uni.navigateTo({
					url: `/pages/index/jiaoxing`
				})
			},
			addDafaHandle() {
				uni.navigateTo({
					url: `/pages/index/dafa`
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: #ddd;
	}
</style>
<style scoped lang='scss'>
	.app {
		.popup-title {
			text-align: center;
			font-size: r(20);
			margin-bottom: r(27);
		}
		.mt20 {
			margin-top: r(20);
		}
		.color3 {
			color: #CCC;
		}

		.checkbox {
			padding: 12rpx 0 12rpx 40rpx;
			font-size: 28rpx;
			color: #333;

			.mix-icon {
				margin-right: 12rpx;
				font-size: 36rpx;
				color: #ccc;
			}

			.icon-xuanzhong {
				color: $base-color;
			}
		}

		.flex {
			display: flex;
			align-items: center;
		}

		.inp {
			text-align: right;
		}

		.footer {
			position: fixed;
			bottom: r(33);
			left: 0;
			width: 100%;
			display: flex;
			justify-content: center;

			.nav {
				line-height: r(45);
				border-radius: r(10);
				background-color: #fff;
				text-align: center;
				box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.19);
				border: 1px solid rgba(227, 226, 226, 100);
			}

			.nav:nth-child(1) {
				width: r(78);
				margin-right: r(10);
			}

			.nav:nth-child(2) {
				width: r(223);
			}
		}

		.user {
			display: flex;
			position: absolute;
			right: r(25);
			top: r(10);

			.l {
				text-align: right;
				color: #fff;
			}

			.img {
				width: r(40);
				height: r(40);
				border-radius: r(10);
				border: r(2) solid #fff;
				margin-left: r(10);
			}
		}

		.title {
			margin-top: r(80);
			padding: 0 r(25);
			font-size: r(26);
			line-height: r(36);
			color: #fff;
		}
		.msg {
			color: #FBB313;
			text-align: center;
		}

		.card {
			background-color: #fff;
			border-radius: 0px r(30) 0px 0px;
			padding: 0 r(25);
			padding-bottom: r(100);

			.card-title {
				color: #101010;
				font-size: r(18);
				display: flex;
				justify-content: space-between;
				padding: r(19) 0;
				border-bottom: solid 1px #eee;
			}

			.f18 {
				font-size: r(18);
			}

			.card-item {
				padding: r(19) 0;
				display: flex;
				justify-content: space-between;

				.label {
					flex: 0 0 r(200);
				}

				.label,
				.value {
					font-size: r(16);
				}

			}
			.b-none {
				border-bottom: 0;
			}
		}

		.mt40 {
			margin-top: r(40);
		}
	}
</style>
