<template>
	<view>
		<uni-indexed-list :options="list" :showSelect="true" @click="bindClick"></uni-indexed-list>
	</view>
</template>

<script>
	// list: [{
	// 				"letter": "A",
	// 				"data": [
	// 					"阿克苏机场",
	// 					"阿拉山口机场",
	// 					"阿勒泰机场",
	// 					"阿里昆莎机场",
	// 					"安庆天柱山机场",
	// 					"澳门国际机场"
	// 				]
	// 			}]
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			bindClick(val) {
				console.log('val', val)
			},
			formatIndexlist(list) {
				let arr = []
				let obj = {}
				for (let i = 0; i < list.length; i++) {
					let item = list[i]
					if (!item.englishName) continue
					let initials = item.englishName.substring(0, 1).toLocaleUpperCase()
					if (!obj[initials]) { // A: []
						obj[initials] = []
					} else {
						obj[initials].push(item.name)
					}
				}
				for (let attr in obj) {
					arr.push({
						letter: attr,
						data: obj[attr],
						id: 22
					})
				}
				return arr
			},
			getList() {
				this.$http({
					url: `/brand/v1.0/brands`,
					method: 'get'
				}).then((data) => {
					if (data.code === '0000') {
						this.list = this.formatIndexlist(data.data.list)
					}
				})
			}
		}
	}
</script>

<style>

</style>
