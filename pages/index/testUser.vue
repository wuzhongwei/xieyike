<template>
	<view class="app">
		<head-info :user="user" v-model="title"></head-info>
		<view class="card">
			<view class="card-title">
				<view class="f18">测评者信息</view>
				<!-- <view class="uni-icon uni-icon-closeempty"></view> -->
			</view>
			<view class="card-item">
				<view class="label">性别</view>
				<view class="value flex">
					<view class="checkbox center" @click="changeGender(1)">
						<text v-if="testAdmin.gender == 1" class="mix-icon icon-xuanzhong"></text>
						<text v-else class="mix-icon icon-yk_yuanquan"></text>
						<text>男</text>
					</view>
					<view class="checkbox center" @click="changeGender(0)">
						<text v-if="testAdmin.gender == 0" class="mix-icon icon-xuanzhong"></text>
						<text v-else class="mix-icon icon-yk_yuanquan"></text>
						<text>女</text>
					</view>
				</view>
			</view>
			<view class="card-item">
				<view class="label">年龄</view>
				<view class="value flex">
					<input :value="testAdmin.age" @input="updateTestAdmin('age', $event.target.value)" class="inp"
						type="text" placeholder="请输入年龄(岁)">
				</view>
			</view>
			<view class="card-item">
				<view class="label">身高</view>
				<view class="value flex">
					<input class="inp" type="text" placeholder="请输入身高(cm)" :value="testAdmin.height"
						@input="updateTestAdmin('height', $event.target.value)">
				</view>
			</view>
			<view class="card-item">
				<view class="label">体重</view>
				<view class="value">
					<input class="inp" type="text" placeholder="请输入体重(kg)" :value="testAdmin.weight"
						@input="updateTestAdmin('weight', $event.target.value)">
				</view>
			</view>
			<view class="card-item">
				<view class="label">脚型</view>
				<view class="value" @click="addfootHandle">
					<input 
						class="inp" 
						type="text" 
						placeholder="内容待添加" 
						:value="testAdmin.footType ? '点击查看': ''"
						disabled
					>
				</view>
			</view>
			<view class="card-item">
				<view class="label">篮球打法(选填)</view>
				<view class="value color3" @click="addDafaHandle">内容待添加</view>
			</view>
		</view>
		<nav-footer></nav-footer>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				user: {}
			}
		},
		computed: {
			...mapState(['testAdmin'])
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
			changeGender(val) {
				this.updateTestAdmin('gender', val)
			},
			updateTestAdmin(name, val) {
				this.$store.commit('setStateAttr', {
					key: 'testAdmin',
					val: {
						[name]: val
					}
				});
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

				.label,
				.value {
					font-size: r(16);
				}

			}
		}

		.mt40 {
			margin-top: r(40);
		}
	}
</style>
