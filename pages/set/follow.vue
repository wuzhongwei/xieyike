<template>
	<view class="page-index">
		<view class="list">
			<view class="list-item">
				<view class="l mr18">
					<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
				</view>
				<view class="r">
					<view class="text">
						<text class="t1">测评者</text>
						<text class="t2 boy">
						</text>
						<text class="t2 girl">
						</text>
					</view>
					<view class="address">海南 海口</view>
				</view>
				<view class="btn-r">
					<view class="forward"><text class="uni-icon uni-icon-forward"></text></view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="popup-wrap">
				<view class="popup-wrap_item">编辑</view>
				<view class="popup-wrap_item">删除</view>
				<view class="popup-wrap_item" @click="closeHandle">取消</view>
			</view>
		</uni-popup>
		<page-pagination :total="page.total" :pageSize="page.pageSize" :currentPage="page.currentPage" @change="change">
		</page-pagination>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [2, 3, 4, 5],
				page: {
					total: 88,
					pageSize: 10,
					currentPage: 1
				}
			}
		},
		onLoad() {},
		methods: {
			closeHandle() {
				this.$refs.popup.close()
			},
			clickBtnHandle(item) {
				this.$refs.popup.open()
			},
			change(currentPage) {
				this.page.currentPage = currentPage;
				console.log("页码改变了", "当前页：" + currentPage);
			},
		}
	}
</script>

<style lang="scss">
	.page-index {
		.list {
			padding: 0 r(15);
			margin-top: r(40);
			margin-bottom: r(40);
		}
		.list-wrap {
			background-color: #E3E2E2;
			border-radius: r(20);
			.title {
				line-height: r(57);
				color: #4A4A4A;
				font-size: r(16);
				padding: 0 r(29);
			}
			.bod {
				font-weight: bold;
				margin-right: r(10);
			}
		}
		.list-item {
			border-radius: r(20);
			box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.4);
			border: 1px solid rgba(255, 255, 255, 100);
			padding: r(18);
			display: flex;
			.img {
				width: r(60);
				height: r(60);
			}
			.mr18 {
				margin-right: r(18);
			}
			.text {
				font-size: r(16);
				color: #333;
			}
			.t2 {
				width: r(15);
				height: r(15);
			}
			.address {
				color: #9A9A9A;
				font-size: r(12);
			}
			.boy {
				background-image: url(../../static/boy.png);
				width: r(15);
				height: r(15);
				background-size: 100%;
				background-repeat: no-repeat;
				display: inline-block;
				margin-left: r(7);
			}
			.girl {
				background-image: url(../../static/girl.png);
				width: r(15);
				height: r(15);
				background-size: 100%;
				background-repeat: no-repeat;
				display: inline-block;
				margin-left: r(7);
			}
			.btn-r {
				flex: 1;
				position: relative;
				.forward {
					position: absolute;
					width: r(30);
					height: r(30);
					background-color: #ddd;
					right: r(16);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>
