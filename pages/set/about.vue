<template>
	<view class="content">
		
		<view class="logo-wrapper">
			<image class="logo" src="/static/logo.png"></image>
			<text class="version">鞋凝客</text>
		</view>

		<view class="list-cell b-b" @click="navToAgreementDetail(1)">
			<view class="cell-tit">
				<view>访问鞋凝客官网</view>
				<view class="txt">www.xienk.com</view>
			</view>
			<text class="uni-icon uni-icon-arrowright"></text>
		</view>
		<view class="list-cell" @click="navToAgreementDetail(2)">
			<view class="cell-tit">
				<view class="flex-sb">
					客服电话
				</view>
				<view class="txt">13518800000</view>
			</view>
			<view @click="setClipboardData">
				<text class="hs">复制</text>
				<text class="uni-icon uni-icon-arrowright"></text>
			</view>
		</view>
		
		<view class="bus center fix-bot">
			<!-- <image class="icon" src="/static/logo-b-w.png"></image> -->
			<text>鞋凝客提供技术支持</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: ''
			}
		},
		onLoad() {
		},
		methods: {
			setClipboardData () {
				uni.setClipboardData({
				    data: 'hello',
				    success: function () {
				        console.log('success');
				    }
				});
			},
			navToAgreementDetail(type){
				this.navTo('/pages/public/article?param=' + JSON.stringify({
					module: 'article',
					operation: 'getAgreement',
					data: {
						type
					}
				}))
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #f8f8f8;
	}
</style>
<style scoped lang='scss'>
	.flex-sb {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.hs {
		color: #B5B5B5;
	}
	.txt {
		padding: r(2) 0;
		color: #B5B5B5;
	}
	.logo-wrapper{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 320rpx;
		
		.logo{
			width: 140rpx;
			height: 140rpx;
			background-color: #fff;
			border-radius: 16rpx;
		}
		.version{
			font-size: 24rpx;
			color: #888;
			margin-top: 26rpx;
			
		}
	}
	.list-cell{
		display: flex;
		align-items: center;
		padding: 0 40rpx;
		width: 100%;
		position:relative;
		background: #fff;
		justify-content: center;
		
		&.b-b:after{
			left: 40rpx;
		}
		.icon-you{
			font-size: 24rpx;
			color: #999;
			margin-left: 10rpx;
		}
		.cell-tit{
			flex: 1;
			font-size: 30rpx;
			color: #333;
			margin-right:10rpx;
		}
	}
	.bus{
		display: flex;
		justify-content: center;
		font-size: 26rpx;
		color: #999;
		position: absolute;
		left: 0;
		bottom: 60rpx;
		width: 100%;
		
		.icon{
			width: 40rpx;
			height: 40rpx;
			margin-right: 10rpx;
		}
	}
</style>
