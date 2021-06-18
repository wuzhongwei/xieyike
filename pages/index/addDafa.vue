<template>
	<view class="app">
		<view class="card mt40">
			<view class="card-title">
				<view class="f18 flex-center">
					<view class="uni-icon uni-icon-arrowleft" @click="back"></view>
					添加-篮球打法
				</view>
				<view class="f14" @click="submit">提交</view>
			</view>
			<view class="flex-jus-center h255 br-line" @click="updateImage">
				<image v-if="photos" class="img" :src="photos" mode=""></image>
				<text v-else class="uni-icon uni-icon-camera"></text>
			</view>
			<view class="wrap">
				<view class="tabs">
					<view 
						class="tabs-item"
						v-for="(item, index) in types"
						:key="index"
						@click="tabsHandles(item, index)"
						:class="{
							on: active === index
						}"
					>{{item.value}}</view>
				</view>
				<input class="inp-title" type="text" v-model="title" placeholder="点击填写打法标题" />
				<input class="inp-msg" type="text" v-model="infoDesc" placeholder="点击填写打法描述" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: '',
				type: '',
				title: '',
				infoDesc: '',
				photos: '',
				types: []
			}
		},
		onLoad() {
			this.getTypes()
		},
		methods: {
			submit () {
				this.$http({
					url: `/basketballStrategy/v1.0/save`,
					method: 'post',
					data: {
						type: this.type,
						title: this.title,
						photos: this.photos,
						infoDesc: this.infoDesc
					}
				}).then((data) => {
					if (data.code === '0000') {
						this.$util.msg('添加成功');
						setTimeout(() => {
							uni.navigateBack()
						}, 1000)
					}
					
				})
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
									this.photos = data.data
									// this.list[index].footType = data.data
									// this.content.images.push(data.data)
								}
							}
						})
					}
				});
			},
			tabsHandles (item, index) {
				this.type = item.key
				this.active = index
			},
			getTypes () {
				this.$http({
					url: `/common/v1.0/dcits/BasketballStrategyTypeEnum`,
					method: 'get'
				}, {msg: true}).then((data) => {
					if (data.code === '0000') {
						this.types = data.data
					}
					
				})
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
		.inp-title {
			font-size: r(18);
		}
		.inp-msg {
			font-size: r(16);
			margin-top: r(33);
		}
		.wrap {
			padding: r(25);
		}
		.br-line {
			border-bottom: solid 1px #E3E2E2;
		}
		.tabs {
			display: flex;
			margin-bottom: r(28);
			.tabs-item {
				color: #8A8A8A;
				line-height: r(35);
				width: r(65);
				text-align: center;
				background-color: #F6F7F7;
				margin-right: r(15);
			}
			.tabs-item.on {
				background-color: #F4080C;
				color: #fff;
			}
		}
		.tabs-body {
			.tabs-body-item {
				border-radius: r(15);
				border: 1px solid #bbb;
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
		.card {
			background-color: #fff;
			border-radius: 0px r(30) 0px 0px;
			/* padding: 0 r(25) r(30); */
			.card-title {
				color: #101010;
				font-size: r(18);
				display: flex;
				justify-content: space-between;
				padding: r(19) r(25);
				border-bottom: solid 1px #eee;
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
