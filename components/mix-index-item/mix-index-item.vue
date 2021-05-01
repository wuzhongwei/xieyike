<template>
	<view class="list-item" @click="$emit('click')">
		<view class="list-l">
			<view class="list-head">
				<image class="list-head__l"
					src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg"
					mode=""></image>
				<view class="list-head__r">
					<view class="list-user">2222</view>
					<view class="list-time">测评10次·共12小时</view>
				</view>
			</view>
			<view class="list-body xnk-multi-ellipsis--l2">dasd撒旦撒旦大苏打撒旦撒旦大苏打撒旦撒旦</view>
			<view class="foot">4444</view>
		</view>
		<view class="list-r">
			<view v-if="isBtnIcon" class="btn" @click="btnHandle">
				<text class="uni-icon uni-icon-forward"></text>
			</view>
			<image class="img"
				src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode="">
			</image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "mix-index-item",
		props: {
			isBtnIcon: {
				type: Boolean,
				default: false
			},
			items: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			closeHandle () {
				// this.$refs.popup.close()
			},
			btnHandle() {
				// this.$refs.popup.open()
				this.$emit('clickBtnHandle', this.items)
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="scss">
	.btn {
		position: absolute;
		width: r(30);
		height: r(30);
		background-color: #ddd;
		right: r(16);
		top: r(16);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.list-item {
		border: solid 1px #EEEEEE;
		border: 1px solid rgba(238, 238, 238, 100);
		border-radius: r(20);
		display: flex;
		justify-content: space-between;
		margin-bottom: r(17);
		background-color: #fff;
		.list-l {
			padding: r(18) r(7) 0 r(18);
		}

		.list-r {
			position: relative;

			.img {
				width: r(134);
				height: r(170);
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
			font-size: r(14);
		}

		.list-time {
			color: #D0CFCF;
			font-size: r(12);
		}
	}

	.list-body {
		color: #333;
		font-size: r(16);
		line-height: r(20);
		margin-top: r(5);
		margin-bottom: r(10);
	}

	.foot {
		color: #B5B5B5;
		font-size: r(14);
	}
</style>
