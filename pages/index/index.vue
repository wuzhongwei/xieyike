<template>
	<view class="page-index">
		<view class="search-wapper">
			<view class="search-block">
				<input type="text" value="" class="search-input" placeholder="鞋凝客" />
				<icon class="" type="search" size="16"/>
			</view>
		</view>
		<view class="list">
			<navigator url="/pages/details/details" v-for="item in list" :key="item.id">
				<view class="list-item">
					<view class="list-l">
						<view class="list-head">
							<image class="list-head__l" :src="item.evaluationUserImg" mode=""></image>
							<view class="list-head__r">
								<view class="list-user">{{item.userName}}</view>
								<view class="list-time">测评10次·共12小时</view>
							</view>
						</view>
						<view class="list-body xnk-multi-ellipsis--l2">{{item.title}}</view>
						<view class="foot">{{item.introduction}}</view>
					</view>
					<view class="list-r">
						<image class="img" :src="item.evaluationImgUrl" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				pageNo: 20
			}
		},
		onLoad() {
			this.$http({
				url: '/evaluation/list',
				data: {
					evaluationStatus: 0,
					pageNo: this.pageNo
				}
			}).then((data) => {
				this.list = data.list
				console.log('1dd', data)
			})
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	.page-index {
		.search-wapper {
			padding: 0 r(10);
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			box-sizing: border-box;
			z-index: 2;
		}
		.search-block {
			background-color: #eaeaea;
			display: flex;
			padding: r(5) r(10);
			align-items: center;
		}
		.search-input {
			font-size: 16px;
			flex: 1;
		}
		.list {
			padding: 0 r(15);
			margin-top: r(40);
		}
		.list-item {
			border: solid 1px #EEEEEE;
			border: 1px solid rgba(238, 238, 238, 100);
			border-radius: r(20);
			display: flex;
			justify-content: space-between;
			margin-bottom: r(17);
			.list-l {
				padding: r(18) r(7) 0 r(18);
			}
			.list-r {
				.img {
					width: r(134);
					height: 100%;
					border-radius: r(20);
				}
			}
		}
		.list-head {
			display: flex;
			.list-head__l {
				width: r(45);
				height: r(45);
				margin-right: r(14);
				border-radius: r(10);
				background-color: #eee;
			}
			.list-user {
				color: #333333;
				font-size: 14px;
			}
			.list-time {
				color: #D0CFCF;
				font-size: 12px;
			}
		}
		.list-body {
			color: #333333;
			font-size: 16px;
		}
		.foot {
			color: #B5B5B5;
			font-size: 14px;
		}
	}
</style>
