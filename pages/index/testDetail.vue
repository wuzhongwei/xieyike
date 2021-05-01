<template>
	<view class="app">
		<view class="header">
			<view class="left">
				<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
			</view>
			<view class="right">
				<view class="title">测评者</view>
				<view class="body">测评10次·共12小时</view>
			</view>
		</view>
		<view class="content">测评标题测评标题测评标题测评标题测评</view>
		<view class="msg">鞋款名鞋款名</view>
		<view class="time">2020.07.19 21:01 </view>
		<view class="f-fixed">
			<view class="f-item">阅读测评详情</view>
			<view class="f-item">
				<image class="img follow" src="../../static/follow.png" mode=""></image>
			</view>
			<view class="f-item">
				<image class="img share" src="../../static/share.png" mode=""></image>
			</view>
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
		padding: r(50) r(25);
		.header {
			display: flex;
		}
		.left {
			.img {
				width: r(65);
				height: r(65);
				border-radius: r(10);
				border: r(2) solid #fff;
			}
			margin-right: r(10);
		}
		.right {
			flex: 1;
			font-size: r(16);
			.title {
				margin-bottom: r(10);
			}
		}
		.content {
			font-size: r(26);
			margin: r(20) 0 r(10);
			line-height: r(36);
		}
		.msg {
			color: #B5B5B5;
			font-size: r(16);
		}
		.time {
			color: #B5B5B5;
			font-size: r(14);
		}
		.f-fixed {
			position: fixed;
			bottom: r(30);
			left: 0;
			width: 100%;
			padding: 0 r(25);
			display: flex;
			.f-item {
				border-radius: r(10);
				background-color: rgba(255,255,255, .48);
				text-align: center;
				width: r(45);
				height: r(45);
				margin-left: r(20);
				color: #fff;
			}
			.f-item:nth-child(1) {
				margin-left: 0;
				flex: 1;
			}
		}
		.f-item {
			display: flex;
			align-items: center;
			justify-content: center;
			.img {
				width: r(24);
				height: r(24);
			}
			.follow {
				
			}
		}
		
	}
</style>
