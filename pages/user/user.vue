<template>
	<view class="app">
		<view class="banner">
			<view class="follow-fans">1000 关注 | 1000 粉丝</view>
			<view class="cell-f">
				<view class="cell-f-item">
					<view>10</view>
					<view>我的测评</view>
				</view>
				<view class="cell-f-item">
					<view>10</view>
					<view>被订阅数</view>
				</view>
				<view class="cell-f-item">
					<view>10</view>
					<view>阅读数</view>
				</view>
			</view>
		</view>
		<view class="wrap">
			<view class="pd10">
				<view class="wrap-h">
					<text class="f20">0898sneaker</text>
					<text class="follow">关注</text>
				</view>
				<view class="wrap-address">
					海南 海口
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
						<view class="num">100</view>
						<view class="text">全部</view>
					</view>
					<view class="wrap-content__item">
						<view class="num">100</view>
						<view class="text">测评</view>
					</view>
					<view class="wrap-content__item">
						<view class="num">100</view>
						<view class="text">推荐</view>
					</view>
					<view class="wrap-content__item">
						<view class="num">100</view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.banner {
		height: r(375);
		background-color: #ddd;
	}
	.follow-fans {
		text-align: right;
		color: #fff;
		font-size: r(16);
		padding: r(27) r(16) 0 0;
	}
	.cell-f {
		display: flex;
		margin-top: r(200);
		.cell-f-item {
			color: #fff;
			flex: 1;
			text-align: center;
		}
	}
	.wrap {
		border-radius: r(30) r(30) 0px 0px;
		padding: r(27) 0;
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
