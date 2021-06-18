<template>
	<view class="app">
		<view class="nike">{{details.shoeName}}</view>
		<view class="con-num">
			<view class="con-num__v1">
				<view class="v1-h">{{details.frequencyMin}}</view>
				<view class="v1-f">{{details.frequencyMinCondition}}</view>
			</view>
			<view class="con-num__v1">
				<view class="v1-h">{{details.durationMin}}</view>
				<view class="v1-f">{{details.durationMinCondition}}</view>
			</view>
		</view>
		<view 
			class="mix-btn-content" 
			v-if="details.frequencyMin >= 10 && details.durationMin >= 30"
			@click="fabuTest"
		>发布测试</view>
		<view class="time-line" v-if="!list.length">
			内容待添加
			<!-- 按发布时间旧到新排列 -->
		</view>
<!-- 		<view class="add-content"></view> -->
		
		<template v-if="list.length">
			<view 
				class="biji-item" 
				v-for="(item, index) in list" 
				:key="index"
				@click="handle(item)"
			>
				<view class="title"><text>{{item.title}}</text> <text>{{item.duration}}小时</text></view>
				<view class="time">{{item.updateTime}}</view>
			</view>
		</template>
		<view class="add-yuan uni-icon uni-icon-plus" @click="addBiji"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				details: {},
				list: []
			}
		},
		onLoad (opt) {
			this.id = opt.id
		},
		onShow () {
			this.getListData() // 列表
			this.detailsHandle() // 笔记次数
		},
		methods: {
			fabuTest () {
				uni.navigateTo({
					url: `/pages/index/testUser?id=${this.id}`
				})
			},
			handle (item) {
				uni.setStorageSync('evaluationNoteDetails', JSON.stringify(item))
				uni.navigateTo({
					url: `/pages/user/ceateTest?id=${item.id}&patchUpdate=1`
				})
			},
			formatContent (content) {
				let objCon = JSON.parse(content)
				return objCon.content
			},
			addBiji () {
				uni.removeStorageSync('evaluationNoteDetails')
				uni.navigateTo({
					url: `/pages/user/ceateTest?id=${this.id}`
				})
			},
			getListData () {
				this.$http({
					url: `/evaluationNote/v1.0/evaluationNotes`,
					method: 'GET',
					data: {
						evaluationNoteListId: this.id
					}
				}, {msg: true}).then((data) => {
					if (data.code === '0000') {
						this.list = data.data.list
					}
				})
			},
			detailsHandle () {
				this.$http({
					url: `/evaluationNoteList/v1.0/getEvaluationNoteList/${this.id}`,
					method: 'GET'
				}, {msg: true}).then((data) => {
					if (data.code === '0000') {
						uni.setStorageSync('getEvaluationNoteList', data.data);
						this.details = data.data
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.add-yuan {
		position: fixed;
		right: r(18);
		bottom: r(18);
		font-size: r(60);
		color: #B5B5B5;
	}
	.app {
		padding: 0 r(27);
	}
	.add-content {
		color: #ccc;
		font-size: r(16);
		text-align: center;
	}
	.time-line {
		color: #B3B0B0;
		border-top: solid 1px #DDD9D9;
		padding-top: r(20);
		text-align: center;
		margin-top: r(20);
		margin-bottom: r(20);
	}
	.nike {
		color: #403F3F;
		font-size: r(18);
	}
	.mix-btn-content {
		margin-top: r(23);
		margin-bottom: r(20);
	}
	.con-num {
		display: flex;
		margin-top: r(22);
		margin-bottom: r(10);
		.con-num__v1 {
			flex: 1;
			text-align: center;
		}
		.v1-h {
			// color: #FD0303;
			font-size: r(28);
		}
		.v1-f {
			color: #403F3F;
			font-size: r(14);
			margin-top: r(17);
		}
	}
	.biji-item {
		border-radius: r(10);
		box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(221, 217, 217, 100);
		padding: r(13) r(20);
		font-size: r(14);
		margin-bottom: r(22);
		.title {
			color: #101010;
			display: flex;
			justify-content: space-between;
		}
		.time {
			color: #939191;
		}
	}
</style>
