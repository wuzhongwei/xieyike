<template>
	<view class="app">
		<view class="warp">
			<view class="ceil">
				<view class="d1"><text class="t1">测评者</text> <text class="t2">推荐了你的整篇测评</text></view>
			</view>
			<mix-index-item></mix-index-item>
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
.app {
	padding: 0 r(15);
	.warp {
		border: solid 1px #eee;
		border-radius: r(20);
		.ceil {
			padding: r(18) r(29);
			.d1 {
				font-size: r(16);
			}
			.t1 {
				color: #4A4A4A;
				font-size: r(16);
				font-weight: bold;
				margin-right: r(10);
			}
			.d2,.d3 {
				color: #9A9A9A;
				font-size: r(16);
			}
		}
	}
}
</style>
