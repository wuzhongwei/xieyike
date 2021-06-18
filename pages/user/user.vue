<template>
	<view class="app">
		<view class="banner">
			<image class="u-bg" :src="userInfo.baseUser.icon"></image>
			<view class="follow-fans">
				<template v-if="userInfo.hasOwnProperty('followNumber')">{{userInfo.followNumber}} 关注 | {{userInfo.fansNumber}} 粉丝</template>
			</view>
			<view class="cell-f">
				<view class="cell-f-item">
					<view class="h30">{{userInfo.evaluationNumber}}</view>
					<view>我的测评</view>
				</view>
				<view class="cell-f-item">
					<view class="h30">{{userInfo.subscribeNumber}}</view>
					<view>被订阅数</view>
				</view>
				<view class="cell-f-item">
					<view class="h30">{{userInfo.readingExperience}}</view>
					<view>阅读数</view>
				</view>
			</view>
		</view>
		<view class="wrap">
			<view class="pd10">
				<view class="wrap-h">
					<text class="f20">{{userInfo.baseUser.name}}</text>
					<text class="follow">关注</text>
				</view>
				<view class="wrap-address">
					{{userInfo.baseUser.address}}
				</view>
				<view class="wrap-f">
					<view class="wrap-f-item">更多资料</view>
					<view class="wrap-f-item">测评者信息</view>
					<view class="wrap-f-item">篮球打法</view>
				</view>
			</view>
			<view class="wrap-content">
				<view class="wrap-content-h">
					<view class="wrap-content__item">
						<view class="num">{{userInfo.wholeEvaluationNumber}}</view>
						<view class="text">全部</view>
					</view>
					<view class="wrap-content__item">
						<view class="num">{{userInfo.wholeEvaluationNumber}}</view>
						<view class="text">测评</view>
					</view>
					<view class="wrap-content__item">
						<view class="num">{{userInfo.recommendEvaluationNumber}}</view>
						<view class="text">推荐</view>
					</view>
					<view class="wrap-content__item">
						<view class="num">{{userInfo.praiseEvaluationNumber}}</view>
						<view class="text">点赞</view>
					</view>
				</view>
				<view class="wrap-content-b">
					<mix-index-item></mix-index-item>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
				}
			}
		},
		computed: {
			curUserInfo() {
				return this.$store.state.userInfo
			}
		},
		onShow() {
			this.userInfo = this.curUserInfo
			this.init()
		},
		methods: {
			init() {
				this.$http({
					url: '/baseUser/v1.0/personalCenter',
					method: 'get',
					data: {
						userId: this.userInfo.baseUser.id
					}
				}).then(({data}) => {
					this.userInfo = data
					console.log('data', data)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.banner {
		
		background-color: #ddd;
		position: relative;
		overflow: hidden;
		padding-top: calc(var(--status-bar-height) + 52rpx);
		padding-bottom: 6rpx;
	}
	.h30 {
		height: r(20);
	}
	.u-bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: r(370);
	}

	.follow-fans {
		text-align: right;
		color: #fff;
		font-size: r(16);
		padding: r(27) r(16) 0 0;
		height: r(60);
		position: relative;
		// background-color: #ddd;
	}

	.cell-f {
		display: flex;
		position: relative;
		margin-bottom: r(20);
		margin-top: r(140);
		.cell-f-item {
			color: #fff;
			flex: 1;
			text-align: center;
		}
	}

	.wrap {
		border-radius: r(30) r(30) 0px 0px;
		padding: r(27) 0 0;
		overflow: hidden;

		.wrap-h {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.f20 {
			color: #515050;
			font-size: r(20);
		}

		.follow {
			color: #515050;
			font-size: r(16);
			line-height: r(35);
			border-radius: r(35/2);
			width: r(75);
			text-align: center;
			border: r(1) solid #515050;
		}

		.wrap-address {
			color: #B9B9B9;
			font-size: r(14);
		}

		.wrap-f {
			display: flex;
			justify-content: space-between;
			margin-top: r(30);

			.wrap-f-item {
				color: #FD0303;
				font-size: r(16);
			}
		}
	}

	.pd10 {
		padding: 0 r(32);
	}

	.wrap-content {
		border-radius: r(30) r(30) 0px 0px;
		background-color: #FD0303;
		margin-top: r(26);
		padding-bottom: r(50);

		.wrap-content-h {
			display: flex;
			justify-content: space-between;
			padding: r(16) r(29);
		}

		.wrap-content__item {
			text-align: center;
			color: #fff;
		}

		.num {
			height: r(20);
			font-size: r(12);
		}

		.text {
			font-size: r(18);
		}
	}

	.wrap-content-b {
		padding: 0 r(14);
	}
</style>
