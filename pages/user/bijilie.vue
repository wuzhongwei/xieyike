<template>
	<view class="app">
		<!-- <view class="tabs">
			<view class="tabs-item on">
				<view class="tabs-num">0</view>
				<view class="tabs-text">进行</view>
			</view>
			<view class="tabs-item">
				<view class="tabs-num">0</view>
				<view class="tabs-text">达成</view>
			</view>
		</view> -->
		<view class="biji-item" v-if="false">
			<view class="biji-item-content">
				<view class="title">NIKE LEBRON 16</view>
				<view class="time">0次·0小时</view>
				<view class="foot">
					<text>2020.07.09更新</text>
					<text>查看笔记本</text>
				</view>
			</view>
		</view>
		<view class="biji-item" @click="add">
			<view class="biji-item-wrap"><text class="uni-icon uni-icon-plus"></text><text>新增鞋款笔记本</text></view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="popup-wrap">
				<view class="popup-title">填写鞋款名创建笔记本</view>
				<uni-easyinput type="text" v-model="shoeName" placeholder="点击填写" />
				<view class="mix-btn-content mt20" @click="save">提交</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shoeName: ''
			}
		},
		onLoad () {
			// this.$refs.popup.open()
		},
		methods: {
			add () {
				this.$refs.popup.open()
			},
			save () {
				this.$http({
					url: `/evaluationNoteList/v1.0/save`,
					method: 'post',
					data: {
						shoeName: this.shoeName
					}
				}, {msg: true}).then((data) => {
					if (data.code === '0000') {
						uni.navigateTo({
							url: `/pages/user/bijiDetail?id=${data.data}`
						})
					}
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.app {
		padding: 0 r(27);
	}
	.popup-title {
		text-align: center;
		font-size: r(20);
		margin-bottom: r(27);
	}
	.mt20 {
		margin-top: r(20);
	}
	.tabs {
		display: flex;
		justify-content: center;
		margin-bottom: r(43);
		.tabs-item {
			text-align: center;
			padding: 0 r(30);
			color: #9A9A9A;
		}
		.tabs-num {
			font-size: r(12);
		}
		.tabs-text {
			font-size: r(16);
			position: relative;
		}
		.on.tabs-item {
			.tabs-text {
				&:after {
					content: '';
					width: r(6);
					height: r(6);
					border-radius: 50%;
					position: absolute;
					left: 50%;
					bottom: r(-10);
					transform: translate(-50%);
					background-color: #F4080C;
				}
			}
			color: #F4080C;
			font-weight: bold;
		}
	}
	.biji-item {
		border-radius: r(10);
		box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(221, 217, 217, 100);
		min-height: r(95);
		font-size: r(14);
		margin-bottom: r(22);
		display: flex;
		.biji-item-wrap {
			display: flex;
			align-items: center;
			color: #797979;
			justify-content: center;
			flex: 1;
			.uni-icon-plus {
				margin-right: r(8);
			}
		}
		.biji-item-content {
			padding: r(10) r(20) 0;
			flex: 1;
		}
		.title {
			color: #101010;
			font-size: r(16);
		}
		.time {
			color: #797979;
			font-size: r(14);
		}
		.foot {
			display: flex;
			justify-content: space-between;
			color: #939191;
			margin-top: r(5);
		}
	}
</style>


