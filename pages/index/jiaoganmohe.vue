<template>
	<view class="app">
		<head-info
			:user="user"
			v-model="title"
		></head-info>
		<view class="card">
			<view class="card-title">a 脚感磨合</view>
			<view class="card-c">
				<view class="card-c-title">a1 第一次穿着脚感描述</view>
				<input type="text" value="" class="card-c-inp" placeholder="内容待添加" />
			</view>
			<view class="card-c">
				<view class="card-c-title">a2 脚感磨合所用时间和磨合后的脚感描述</view>
				<input type="text" value="" class="card-c-inp" placeholder="内容待添加" />
			</view>
		</view>
		<nav-footer></nav-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				sex: '',
				user: {}
			}
		},
		onShow() {
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
			changeGender () {
				
			},
			addfootHandle () {
				uni.navigateTo({
					url: `/pages/index/jiaoxing`
				})
			},
			addDafaHandle () {
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
		
		.card {
			background-color: #fff;
			border-radius: 0px r(30) 0px 0px;
			padding: 0 r(25);
			padding-bottom: r(100);
			.card-title {
				color: #101010;
				font-size: r(18);
				padding: r(28) 0 r(23);
			}
			.card-c {
				.card-c-title {
					color: #515050;
					font-size: r(16);
					margin-bottom: r(13);
				}
			}
			.f18 {
				font-size: r(18);
			}
			.card-item {
				padding: r(19) 0;
				display: flex;
				justify-content: space-between;
				.label,.value {
					font-size: r(16);
				}
				
			}
		}
		.mt40 {
			margin-top: r(40);
		}
	}
</style>
