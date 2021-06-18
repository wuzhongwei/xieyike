<template>
	<view class="app">
		<view class="card mt40">
			<view class="card-title">
				<view class="f18 flex-center">
					<view class="uni-icon uni-icon-arrowleft" @click="back"></view>
					<text>袜子</text>
				</view>
	<!-- 			<view class="ok f16" @click="ok">确认</view> -->
			</view>
			<view class="msg f16">
				*上传测评时所穿袜子的内里细节图，支持发布多双袜子，填写袜子厚度，袜子的文字描述可以选填。
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
				<view class="value flex-jus-center" @click="updateImage(index)">
					<image v-if="item.footType" class="img" :src="item.footType" mode=""></image>
					<text v-else class="uni-icon uni-icon-camera"></text>
				</view>
			</view>
			<view class="mt40">
				<input type="text" value="" placeholder="点击填写文字描述" />
			</view>
			<view class="mt100">
				<view class="mix-btn-content">提交</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title: '1.双脚俯视&脚围测量。',
						footType: ''
					},
					{
						title: '2.脚底沾水印纸看足弓法&脚长和脚宽测量。',
						footType: ''
					},
					{
						title: '3.脚内侧，测量足弓高度和脚背高度。',
						footType: ''
					}
				]
			}
		},
		onLoad() {
		},
		methods: {
			updateImage(index) {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						this.$uploadFile({
							url: '/common/v1.0/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							success: (data) => {
								if (data.code === '0000') {
									this.list[index].footType = data.data
									// this.content.images.push(data.data)
								}
							}
						})
					}
				});
			},
			ok () {
				uni.setStorageSync('jiaoxing', this.list)
				this.back()
			},
			back () {
				uni.navigateBack()
			}
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
		.value {
			box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.4);
			border: 1px solid rgba(255, 255, 255, 100);
			width: r(90);
			height: r(90);
			border-radius: r(20);
		}
		.ok {
			color: #F4080C;
		}
		.msg {
			color: #FBB313;
		}
		.jiaoxing {
			display: flex;
			justify-content: space-between;
			margin-bottom: r(22);
			.label,.value,.img {
				width: r(152);
				height: r(152);
				border-radius: r(20);
			}
			.value {
				background-color: #E3E2E2;
			}
			.label {
				background-color: #E3E2E2;
				padding: r(20);
				.p1 {
					color: #101010;
					font-size: r(16);
				}
				.p2 {
					color: #FD0303;
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
		.img-wrap {
			.img-item {
				
			}
		}
	}
</style>
