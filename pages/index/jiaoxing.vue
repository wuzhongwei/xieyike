<template>
	<view class="app">
		<view class="card mt40">
			<view class="card-title">
				<view class="f18 flex-center">
					<view class="uni-icon uni-icon-arrowleft" @click="back"></view>
					<text>脚型</text>
				</view>
				<view class="ok f16" @click="ok">确认</view>
			</view>
			<view 
				class="jiaoxing"
				v-for="(item, index) in list"
				:key="index"
			>
				<view class="label">
					<view class="p1">{{item.title}}</view>
					<view class="p2">查看示例图</view>
				</view>
				<view class="value flex-jus-center" @click="updateImage(index)">
					<image v-if="item.footType" class="img" :src="item.footType" mode=""></image>
					<text v-else class="uni-icon uni-icon-camera"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
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
		computed: {
			...mapState(['testAdmin'])
		},
		onShow() {
			this.list = this.formatImgs(this.testAdmin.footType) || this.list
		},
		methods: {
			formatImgs (str) {
				if (!str) return
				let arr = str.split(',')
				return this.list.map((item, index) => {
					item.footType = arr[index]
					return item
				})
			},
			updateTestAdmin(name, val) {
				this.$store.commit('setStateAttr', {
					key: 'testAdmin',
					val: {
						[name]: val
					}
				});
			},
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
								}
							}
						})
					}
				});
			},
			ok () {
				if (!this.list.some(item => item.footType)) {
					this.$util.msg('请输入脚型');
					return
				}
				let str = this.list.map(item => {
					return item.footType
				}).join(',')
				this.updateTestAdmin('footType', str)
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
		.ok {
			color: #F4080C;
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
	}
</style>
