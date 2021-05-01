<template>
	<view class="app">
		<view class="card mt40">
			<view class="card-title">
				<view class="f18">袜子</view>
				<view class="uni-icon uni-icon-closeempty"></view>
			</view>
			<view class="wazi">
				<view class="wazi-item">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
				<view class="wazi-item">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
				<view class="wazi-item">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
				<view class="wazi-item">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
				<view class="wazi-item">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
				<view class="wazi-item">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
			</view>
			<view class="msg">厚袜子，运动毛巾袜。</view>
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
		.wazi {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.wazi-item {
				margin-bottom: r(18);
			}
			.img {
				width: r(90);
				height: r(90);
				border-radius: r(20);
				box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.4);
			}
		}
		.msg {
			font-size: r(16);
			font-weight: bold;
		}
		.card {
			background-color: #fff;
			border-radius: 0px r(30) 0px 0px;
			padding: 0 r(25) r(30);
			.card-title {
				color: #101010;
				font-size: r(18);
				display: flex;
				justify-content: space-between;
				padding: r(19) 0;
				border-bottom: solid 1px #eee;
				margin-bottom: r(30);
			}
			.f18 {
				font-size: r(18);
				font-weight: bold;
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
