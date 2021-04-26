<template>
	<view class="page-index">
		<view class="list">
			<mix-index-item></mix-index-item>
			<mix-index-item></mix-index-item>
		</view>
		<page-pagination :total="page.total" :pageSize="page.pageSize" :currentPage="page.currentPage" @change="change">
		</page-pagination>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page: {
					total: 88,
					pageSize: 10,
					currentPage: 1
				}
			}
		},
		onLoad() {},
		methods: {
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
