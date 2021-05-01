<template>
	<view class="app">
		<view class="play"></view>
		<view class="tabs-body-item">
			<view class="tabs-body__h">
				<view class="tabs-body__title">进攻</view>
				<view class="tabs-body__c">1. 急停跳投</view>
			</view>
			<view class="tabs-body__f xnk-ellipsis">急停跳投的简介文字描述急停跳投的简···</view>
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

<style scoped lang='scss'>
	.app {
		.play {
			height: r(255);
			background-color: #ddd;
		}
		.tabs-body-item {
			height: r(75);
			margin-bottom: r(18);
			padding: r(13) r(20);
		}
		.tabs-body__h {
			margin-bottom: r(10);
			display: flex;
			.tabs-body__title {
				line-height: r(20);
				height: r(20);
				border-radius: r(5);
				background-color: #FD0303;
				text-align: center;
				display: block;
				margin-right: r(9);
				width: r(35);
				color: #fff;
			}
		}
		.tabs-body__f {
			font-size: r(16);
			color: #B7B5B5;
		}
		.tabs-body__c {
			color: #101010;
			font-size: r(16);
			line-height: r(20);
			font-weight: bold;
		}
	}
</style>
