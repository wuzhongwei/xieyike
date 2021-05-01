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
		<view class="banner"></view>
		<view class="body">
			<view class="left">
				<view class="left-item">测评者信息</view>
				<view class="left-item">测评相关信息</view>
				<view class="left-item">篮球打法</view>
				<view class="left-item">评论（99）</view>
			</view>
			<view class="right">
				<view class="p1">a.脚感磨合</view>
				<view class="p2">a1.第一次穿着脚感描述</view>
				<view class="p3">Reebok锐步是世界知名健身运动品牌,提供专业运动健身鞋服及配件,以及经典休闲系列,相信健身运动能够从身体、心智和社交上为人们的生活带来积极的转变,成为更好的自己。</view>
				<view class="tr">
					<view class="ty"><text class="text">100</text><text class="zan"></text></view>
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
		.zan {
			background-image: url(../../static/zan.png);
			background-repeat: no-repeat;
			background-size: 100%;
			width: r(18);
			height: r(18);
			margin-left: r(5);
		}
		.text {
			color: #A29F9F;
			font-size: r(14);
		}
		.tr {
			.ty {
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
		}
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
		.banner {
			height: r(270);
			background-color: #ccc;
		}
		.body {
			border-radius: 0px r(30) 0px 0px;
			background-color: #fff;
			display: flex;
			.left {
				background-color: #FD0303;
				width: r(70);
				.left-item {
					color: #fff;
					font-size: r(14);
					padding: 0 r(14);
					text-align: center;
					height: r(70);
					display: flex;
					align-items: center;
					border-bottom: solid 1px rgba(255,255,255,.4);
				}
			}
			.right {
				padding: r(28) r(32);
				.p1 {
					color: #101010;
					font-size: r(18);
					font-weight: bold;
					margin-bottom: r(10);
				}
				.p2 {
					color: #515050;
					font-size: r(16);
					font-weight: bold;
					margin-bottom: r(5);
				}
				.p3 {
					color: #A29F9F;
					font-size: r(14);
					text-indent: 2em;
				}
			}
		}
	}
</style>
