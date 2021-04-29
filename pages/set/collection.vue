<template>
	<view class="page-index">
		<view class="list">
			<mix-index-item
				v-for="(item, index) in list"
				:key="index"
				@clickBtnHandle="clickBtnHandle"
				isBtnIcon
			></mix-index-item>
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
				list: [2,3,4,5],
				page: {
					total: 88,
					pageSize: 10,
					currentPage: 1
				}
			}
		},
		onLoad() {},
		methods: {
			closeHandle () {
				this.$refs.popup.close()
			},
			clickBtnHandle (item) {
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
		}

	}
</style>
