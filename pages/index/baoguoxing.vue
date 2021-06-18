<template>
	<view class="app">
		<head-info
			:user="user"
			v-model="title"
		></head-info>
		<view class="card">
			<view class="card-title_c">d 包裹性</view>
			<view class="card-c">
				<view class="card-c-title">d1 前掌鞋面包裹性</view>
				<input type="text" value="" class="card-c-inp" placeholder="内容待添加" />
			</view>
			<view class="card-c">
				<view class="card-c-title">d2 中掌鞋面包裹性</view>
				<input type="text" value="" class="card-c-inp" placeholder="内容待添加" />
			</view>
			<view class="card-c">
				<view class="card-c-title">d3 后掌鞋面包裹性</view>
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
