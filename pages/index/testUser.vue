<template>
	<view class="app">
		<view class="user">
			<view class="l">
				<view class="l-title">测评者</view>
				<view class="time">测评10次·共12小时</view>
			</view>
			<view class="r">
				<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
			</view>
		</view>
		<view class="title">测评标题测评标题测评标题测评标题测评</view>
		<view class="msg">鞋款名鞋款名</view>
		<view class="card mt40">
			<view class="card-title">
				<view class="f18">测评者信息</view>
				<view class="uni-icon uni-icon-closeempty"></view>
			</view>
			<view class="card-item">
				<view class="label">性别</view>
				<view class="value">男</view>
			</view>
			<view class="card-item">
				<view class="label">年龄</view>
				<view class="value">32</view>
			</view>
			<view class="card-item">
				<view class="label">身高</view>
				<view class="value">162cm</view>
			</view>
			<view class="card-item">
				<view class="label">体重</view>
				<view class="value">722</view>
			</view>
			<view class="card-item">
				<view class="label">脚型</view>
				<view class="value">点击查看</view>
			</view>
			<view class="card-item">
				<view class="label">身体机能</view>
				<view class="value">一直保持运动</view>
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
			color: #fff;
			font-size: r(16);
			padding: 0 r(25);
			margin-top: r(10);
		}
		.card {
			background-color: #fff;
			border-radius: 0px r(30) 0px 0px;
			padding: 0 r(25);
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
