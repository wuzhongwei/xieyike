<template>
	<view class="app">
		<view class="card mt40">
			<view class="card-title">
				<view class="f18">脚型</view>
				<view class="uni-icon uni-icon-closeempty"></view>
			</view>
			<view class="jiaoxing">
				<view class="label">
					<view class="p1">1.双脚俯视&脚围测量。</view>
					<view class="p2">查看示例图</view>
				</view>
				<view class="value">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
			</view>
			<view class="jiaoxing">
				<view class="label">
					<view class="p1">1.双脚俯视&脚围测量。</view>
					<view class="p2">查看示例图</view>
				</view>
				<view class="value">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
			</view>
			<view class="jiaoxing">
				<view class="label">
					<view class="p1">1.双脚俯视&脚围测量。</view>
					<view class="p2">查看示例图</view>
				</view>
				<view class="value">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
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
		.jiaoxing {
			display: flex;
			justify-content: space-between;
			margin-bottom: r(22);
			.label,.value,.img {
				width: r(152);
				height: r(152);
				border-radius: r(20);
			}
			.label {
				background-color: #E3E2E2;
				padding: r(20);
				.p1 {
					color: #101010;
					font-size: r(18);
				}
				.p2 {
					color: #939292;
					font-size: r(16);
				}
			}
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
