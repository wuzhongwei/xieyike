<template>
	<view class="app">
		<head-info
			:user="user"
			v-model="title"
		></head-info>
		<view class="card">
			<view class="card-title_c">c 做工</view>
			<view class="card-c">
				<view class="card-c-title">c1 缝线</view>
				<input type="text" value="" class="card-c-inp" placeholder="内容待添加" />
			</view>
			<view class="card-c">
				<view class="card-c-title">c2 胶水</view>
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
