<template>
	<view class="app">
		<view class="card mt40">
			<view class="card-title">
				<view class="f18 flex-center">
					<view class="uni-icon uni-icon-arrowleft" @click="back"></view>
					篮球打法(选填)
				</view>
				<view class="uni-icon uni-icon-plus" @click="addDafaHandle"></view>
			</view>
			<view class="dafa f16">打法数量：{{list.length}}</view>
			<!-- <view class="tabs">
				<view class="tabs-item on">全部</view>
				<view class="tabs-item on">进攻</view>
				<view class="tabs-item">防守</view>
				<view class="tabs-item">其他</view>
			</view> -->
			<view class="tabs-body">
				<view 
					class="tabs-body-item" 
					v-for="(item, index) in list"
					:key="index"
				>
					<view class="tabs-body__h">
						<view class="tabs-body__title">{{formatTypes(item.type)}}</view>
						<view class="tabs-body__c">{{item.title}}</view>
					</view>
					<view class="tabs-body__f xnk-ellipsis">{{item.infoDesc}}</view>
				</view>
			</view>
		</view>
		<nav-footer @callBack="callBack"></nav-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				types: []
			}
		},
		onLoad() {
			this.getTypes()
		},
		onShow () {
			this.getList()
		},
		methods: {
			callBack () {
				
			},
			back () {
				uni.navigateBack()
			},
			addDafaHandle () {
				uni.navigateTo({
					url: `/pages/index/addDafa`
				})
			},
			formatTypes (type) {
				let arr = this.types.filter(item => item.key == type)
				return arr.length > 0 ? arr[0].value :[]
			},
			getList () {
				this.$http({
					url: `/basketballStrategy/v1.0/basketballStrategys`,
					method: 'get'
				}).then((data) => {
					if (data.code === '0000') {
						this.list = data.data.list
					}
				})
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
		.dafa {
			color: #B7B5B5;
			margin: r(13) 0;
		}
		.tabs {
			display: flex;
			margin-bottom: r(28);
			.tabs-item {
				color: #8A8A8A;
				line-height: r(35);
				width: r(65);
				text-align: center;
				flex: 1;
			}
			.tabs-item.on {
				border-radius: r(100);
				background-color: #eee;				
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
			padding: 0 r(25) r(60);
			.card-title {
				color: #101010;
				font-size: r(18);
				display: flex;
				justify-content: space-between;
				padding: r(19) 0;
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
