<template>
	<view class="list-item">
		<view class="list-l">
			<view class="list-head">
				<!-- <image class="list-head__l" :src="2" mode=""></image> -->
				<view class="list-head__r">
					<view class="list-user">2222</view>
					<view class="list-time">测评10次·共12小时</view>
				</view>
			</view>
			<view class="list-body xnk-multi-ellipsis--l2">3333</view>
			<view class="foot">4444</view>
		</view>
		<view class="list-r">
			<!-- <image class="img" :src="1" mode=""></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: "mix-index-item",
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.list-item {
		border: solid 1px #EEEEEE;
		border: 1px solid rgba(238, 238, 238, 100);
		border-radius: r(20);
		display: flex;
		justify-content: space-between;
		margin-bottom: r(17);

		.list-l {
			padding: r(18) r(7) 0 r(18);
		}

		.list-r {
			.img {
				width: r(134);
				height: 100%;
				border-radius: r(20);
			}
		}
	}

	.list-head {
		display: flex;

		.list-head__l {
			width: r(45);
			height: r(45);
			margin-right: r(14);
			border-radius: r(10);
			background-color: #eee;
		}

		.list-user {
			color: #333333;
			font-size: 14px;
		}

		.list-time {
			color: #D0CFCF;
			font-size: 12px;
		}
	}

	.list-body {
		color: #333333;
		font-size: 16px;
	}

	.foot {
		color: #B5B5B5;
		font-size: 14px;
	}
</style>
