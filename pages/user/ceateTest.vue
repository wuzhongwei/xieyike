<template>
	<view class="app">
		<view class="header">
			<view class="v1">第{{getEvaluationNoteList.frequencyMin + 1}}次测试</view>
			<view class="v1-r" @click="submit">完成</view>
		</view>
		<view class="inp">
			<view class="l">本次测试用时</view>
			<view class="r">
				<input v-model="duration" class="inp-text" type="text" value="" placeholder="点击填写" />
				<text class="text-time">小时</text>
			</view>
		</view>
		<view class="wrap-time">
			<text class="uni-icon uni-icon-image" @click="updateImage"></text>
			<text>{{testTime}}</text>
		</view>
		<view class="images">
			<view class="images-item" v-for="(item, index) in content.images" :key="index">
				<view class="uni-icon uni-icon-closeempty" @click="remove(index)"></view>
				<image class="images-img" :src="item" mode=""></image>
			</view>
		</view>
		<view class="input-text">
			<textarea v-model="content.content" class="tian" placeholder="点击填写文字内容" />
		</view>

		<!-- <view class="images-con">         笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容。</view> -->
	</view>
</template>

<script>
	import jyfParser from '@/components/jyf-parser/jyf-parser.vue'
	export default {
		components: {
			jyfParser
		},
		data() {
			return {
				getEvaluationNoteList: {},
				evaluationNoteListId: '',
				duration: '',
				isUpdate: '',
				content: {
					images: [],
					content: ''
				},
				testTime: ''
			}
		},
		onLoad(opt) {
			this.evaluationNoteListId = opt.id
			this.isUpdate = opt.patchUpdate
		},
		onShow () {
			let evaluationNoteDetails = uni.getStorageSync('evaluationNoteDetails')
			if (evaluationNoteDetails) {
				evaluationNoteDetails = JSON.parse(evaluationNoteDetails)
				this.duration = evaluationNoteDetails.duration
				this.content = JSON.parse(evaluationNoteDetails.content)
			}
			this.getEvaluationNoteList = uni.getStorageSync('getEvaluationNoteList');
			
			this.testTime = this.getDateStr()
		},
		methods: {
			remove(_index) {
				this.content.images = this.content.images.filter((item, index) => {
					return index !== _index
				})
			},
			updateImage() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						this.$uploadFile({
							url: '/common/v1.0/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							success: (data) => {
								if (data.code === '0000') {
									this.content.images.push(data.data)
								}
							}
						})
					}
				});
			},
			getDateStr() {
				let date = new Date()
				return `${date.getFullYear()}.${this.getDouble(date.getMonth() + 1)}.${this.getDouble(date.getDate())} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
			},
			getDouble(num) {
				return num < 10 ? '0' + num : num
			},
			formatDate(tiem) {
				let arr = tiem.split(' ')
				arr[0] = arr[0].split('.').join('-')
				return arr.join(' ')
			},
			submit() {
				let params = {
					content: JSON.stringify(this.content),
					duration: this.duration,
					testTime: this.formatDate(this.testTime)
				}
				params = this.isUpdate ? {
					...params,
					id: this.evaluationNoteListId
				} : {
					...params,
					evaluationNoteListId: this.evaluationNoteListId,
				}
				this.$http({
					url: this.isUpdate ? `/evaluationNote/v1.0/patchUpdate/${this.evaluationNoteListId}` :
						`/evaluationNote/v1.0/save`,
					method: 'post',
					data: params
				}, {
					msg: true
				}).then((data) => {
					if (data.code === '0000') {
						this.$util.msg(this.isUpdate ? '更新成功' : '添加成功');
						setTimeout(() => {
							if (this.isUpdate) {
								uni.navigateBack()
							} else {
								uni.navigateTo({
									url: `/pages/user/bijiDetail?id=${this.evaluationNoteListId}`
								})
							}
						}, 1000)
					}

				})
			}
		}
	}
</script>

<style scoped lang="scss">
	#editor {
		width: 100%;
		height: 300px;
		background-color: #CCCCCC;
	}

	.app {
		padding: 0 r(23);
	}

	.header {
		display: flex;
		justify-content: space-between;
		margin-bottom: r(20);

		.v1 {
			color: #101010;
			font-size: r(18);
		}

		.v1-r {
			font-size: r(18);
			color: #B5B5B5;
		}
	}

	.wrap-time {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: r(15) 0;
		border-bottom: solid 1px #DDD9D9;
		margin-bottom: r(24);
		color: #939191;
	}

	.inp {
		border-radius: 10px;
		background-color: #fff;
		border: 1px solid #bbb;
		display: flex;
		padding: r(11) r(20);

		.l,
		.r {
			flex: 1;
		}

		.l {
			border-right: solid 1px #BBB;
		}

		.r {
			display: flex;

			.inp-text {
				padding: 0 r(10);
				box-sizing: border-box;
				text-align: center;
			}
		}

		.text-time {
			flex: 0 0 r(30);
			display: flex;
			align-items: center;
		}
	}

	.input-text {
		margin-bottom: r(20);

		.tian {
			font-size: r(16);
			line-height: r(30);
			width: 100%;
		}
	}

	.images {
		display: flex;
		flex-wrap: wrap;

		.images-item {
			margin: 0 r(14) r(14) 0;
			box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.4);
			position: relative;

			.uni-icon-closeempty {
				position: absolute;
				right: 0;
				top: 0;
				font-size: r(24);
			}
		}

		.images-item:nth-of-type(4n) {
			margin-right: 0;
		}

		.images-img {
			width: r(72);
			height: r(72);
		}

	}
</style>
