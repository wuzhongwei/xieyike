<template>
	<view class="app">
		<head-info
			:user="user"
			v-model="title"
		></head-info>
		<view class="card">
			<view class="card-title_c">j 缓震性</view>
			<view class="card-c">
				<view class="card-c-title">j1 根据您的打法介绍您对缓震的需求</view>
				<input type="text" value="" class="card-c-inp" placeholder="内容待添加" />
			</view>
			<view class="card-c">
				<view class="card-c-title">j2 前掌缓震性</view>
				<input type="text" value="" class="card-c-inp" placeholder="内容待添加" />
			</view>
			<view class="card-c">
				<view class="card-c-title">j3 后掌缓震性</view>
				<input type="text" value="" class="card-c-inp" placeholder="内容待添加" />
			</view>
		</view>
		<nav-footer></nav-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				sex: '',
				user: {}
			}
		},
		onShow() {
			let user = uni.getStorageSync('baseUser')
			console.log(user)
			let getEvaluationNoteList = uni.getStorageSync('getEvaluationNoteList')
			this.user = {
				name: user.name,
				icon: user.icon,
				shoeName: getEvaluationNoteList.shoeName,
				frequencyMin: getEvaluationNoteList.frequencyMin,
				durationMin: getEvaluationNoteList.durationMin
			}
		},
		methods: {
			changeGender () {
				
			},
			addfootHandle () {
				uni.navigateTo({
					url: `/pages/index/jiaoxing`
				})
			},
			addDafaHandle () {
				uni.navigateTo({
					url: `/pages/index/dafa`
				})
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
	.app {}
</style>
