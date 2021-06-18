<template>
	<view>
		<view class="list">
			<view class="list-item">
				<view class="l mr18">
					<view class="l-l">
						<image class="img"
							src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg"
							mode=""></image>
					</view>
					<view class="l-r">
						<view class="h">用户A</view>
						<view class="c xnk-multi-ellipsis--l2">谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢</view>
						<view class="f">回复了你的评论 2020-09-06</view>
					</view>
				</view>
				<view class="r">
					<image class="r-img"
						src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg"
						mode=""></image>
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
	.list {
		padding: 0 r(15);
		margin-top: r(40);
		margin-bottom: r(40);
	}

	.list-item {
		border-radius: r(20);
		box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 100);
		padding: r(18);
		display: flex;

		.l {
			display: flex;
			
			.l-l {
				margin-right: r(10);
				.img {
					width: r(45);
					height: r(45);
					border-radius: r(10);
				}
			}
			.l-r {
				.h {
					color: #333333;
					font-size: r(14);
					font-weight: bold;
				}
				.c {
					color: #4A4A4A;
					font-size: r(16);
					line-height: r(20);
				}
				.f {
					color: #9A9A9A;
					font-size: r(12);
				}
			}
		}
		.r {
			
			.r-img {
				width: r(75);
				height: r(102);
				border-radius: r(20);
			}
		}

		.mr18 {
			margin-right: r(18);
		}
	}
</style>
