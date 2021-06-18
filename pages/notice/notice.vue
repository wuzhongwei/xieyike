<template>
	<view class="app">
		<view class="notice">
			<mix-list-cell 
				:tips="commentNumber" 
				icon="uni-icon-chat" 
				title="评论" 
				@onClick="navTo('/pages/notice/pinlun', {login: true})">
			</mix-list-cell>
			<mix-list-cell 
				:tips="praiseNumber" 
				icon="uni-icon-zan" 
				title="点赞" 
				@onClick="navTo('/pages/notice/dianzan', {login: true})">
			</mix-list-cell>
			<mix-list-cell 
				:tips="systemNumber"
				icon="uni-icon-xin" 
				title="系统消息" 
				@onClick="navTo('/pages/notice/xitong', {login: true})"
			></mix-list-cell>
			<!-- <mix-list-cell icon="uni-icon-xin" title="推荐" @onClick="navTo('/pages/wallet/index', {login: true})"></mix-list-cell>
			<mix-list-cell icon="uni-icon-person-filled" title="粉丝" @onClick="navTo('/pages/wallet/index', {login: true})"></mix-list-cell> -->
		</view>
		<view class="uni-icon uni-icon-hand"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentNumber: '', // 评论消息未读数量
				praiseNumber: '', // 点赞消息未读数量
				fansNumber: '', // 新增粉丝消息未读数量
				systemNumber: '' // 系统消息未读数量
			}
		},
		onShow () {
			this.init()
		},
		methods: {
			init () {
				this.$http({
					url: `/message/v1.0/getCount`,
					method: 'get'
				}, {msg: true}).then(({data}) => {
					this.commentNumber = data.commentNumber
					this.praiseNumber = data.praiseNumber
					this.fansNumber = data.fansNumber
					this.systemNumber = data.systemNumber
					console.log('data', data)
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.box {
		background-color: red;
	}
</style>
