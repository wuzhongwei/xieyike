<template>
	<view class="app">
		<view :style="{ height: statusBarHeight }"></view>
		<view class="my-edit wrap">
			<text class="my-text">我的</text>
			<view @click="navTo('/pages/user/bijilie', {login: true})" class="border" v-if="hasLogin"><text class="my-icon"></text></view>
		</view>
		<view class="my-hello wrap"><view class="t1">{{hasLogin ? '你好，' : '请登录'}}</view><view class="t2">{{userInfo.baseUser.name}}</view></view>
		<view 
			class="my-avatar" 
			:style="{top: parseInt(statusBarHeight) + 90 + 'px'}"
			
		>
			<view class="avatar-btn" @click="navTo('/pages/user/user', {login: true})"></view>
			<image @click="navTo('/pages/set/userInfoUpdate', {login: true})" class="avatar" :src="userInfo.baseUser.icon || '/static/icon/default-avatar.png'" mode="scaleToFill"></image>
		</view>
		<view class="my-body">
			<view class="my-body-wrap">
				<view class="my-body-item" @click="navTo('/pages/set/readExperience', {login: true})">
					<text>阅读经验</text>
					<text class="ml10">{{userInfo.readingExperience}}</text>
				</view>
				<view class="my-body-item" @click="navTo('/pages/set/mytest', {login: true})">
					<text>我的测评</text>
					<text class="ml10">{{userInfo.evaluationNumber}}</text>
				</view>
				<view class="my-body-item" @click="navTo('/pages/set/subscribe', {login: true})">
					<text>被订阅数</text>
					<text class="ml10">{{userInfo.subscribeNumber}}</text>
				</view>
			</view>
			<view class="new-dynamic" @click="navTo('/pages/set/newDynamic', {login: true})">最新动态</view>
		</view>
		<view class="my-foot">
			<view class="my-cell" @click="navTo('/pages/set/follow', {login: true})">
				<text class="text">关注的人</text>
				<text class="icon-arrow uni-icon uni-icon-arrowright"></text>
			</view>
			<view class="my-cell" @click="navTo('/pages/set/collection', {login: true})">
				<text class="text">收藏夹</text>
				<text class="icon-arrow uni-icon uni-icon-arrowright"></text>
			</view>
			<view class="my-cell" @click="navTo('/pages/set/drafts', {login: true})">
				<text class="text">草稿箱</text>
				<text class="icon-arrow uni-icon uni-icon-arrowright"></text>
			</view>
			<view class="my-cell" @click="navTo('/pages/set/move', {login: true})">
				<text class="text">更多</text>
				<text class="icon-arrow uni-icon uni-icon-arrowright"></text>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="popup-wrap">
				<view class="popup-title">测评鞋款名</view>
				<uni-easyinput type="text" v-model="testVal" placeholder="点击填写" />
				<view class="mix-btn-content mt20">提交</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'
	
	var statusBarHeight = uni.getMenuButtonBoundingClientRect().height + uni.getSystemInfoSync().statusBarHeight + 10 + 'px'
	export default {
		data() {
			return {
				testVal: '',
				statusBarHeight: statusBarHeight
			}
		},
		computed: {
			...mapState(['userInfo']),
			...mapGetters(['hasLogin'])
		},
		onShow() {
			this.getInfo()
			// this.$refs.popup.open()
		},
		methods: {
			getInfo () {
				this.$http({
					url: `/baseUser/v1.0/getMyInfo`,
					method: 'get'
				}, {isShowLoading: false}).then(({data}) => {
					this.$store.commit('setStateAttr', {
						key: 'userInfo',
						val: data
					})
					this.$store.commit('setToken', data.baseUser)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.mt20 {
		margin-top: r(20);
	}
	.app{
		overflow: hidden;
		position: relative;
		// padding-top: calc(var(--status-bar-height) + 72rpx);	
		.my-text {
			color: #797979;
			font-size: r(26);
			line-height: r(37);
		}
		.my-edit {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.border {
			border: solid 1px #bbb;
			width: r(50);
			height: r(50);
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.my-icon {
			background-image: url(../../static/my-edit.png);
			background-repeat: no-repeat;
			background-size: contain;
			width: r(24);
			height: r(24);
			display: block;
		}
		.wrap {
			padding: 0 r(23);
		}
		.my-hello {
			color: #B5B5B5;
			margin-bottom: r(369);
			.t1, .t2 {
				font-size: r(20);
				line-height: r(37);
			}
		}
		.my-avatar {
			position: absolute;
			top: r(129);
			right: r(-110);
			.avatar {
				width: r(339);
				height: r(339);
				border-radius: 50%;
				background-color: #ddd;
			}
			.avatar-btn {
				width: r(50);
				height: r(50);
				background: url(../../static/my.png) no-repeat;
				background-size: 100%;
				position: absolute;
				top: r(227);
			}
		}
		.my-body {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.my-body-item {
				border-radius: 0 r(30) r(30) 0;
				border: 1px solid #bbb;
				text-align: center;
				line-height: r(50);
				width: r(173);
				margin-bottom: r(13);
				text {
					font-size: r(14);
				}
				.ml10 {
					margin-left: r(28);
				}
			}
			.my-body-item:last-child {
				margin-bottom: 0;
			}
			.new-dynamic {
				width: r(136);
				line-height: r(113);
				border-radius: r(100) 0 0 r(100);
				text-align: center;
				border: 1px solid #bbb;
			}
		}
		.my-foot {
			padding: 0 r(25);
			margin-top: r(56);
			.my-cell {
				height: r(50);
				border-radius: r(30);
				background-color: #eee;
				padding: 0 r(25);
				margin-bottom: r(17);
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.icon-arrow {
				font-size: r(16);
			}
		}
	}
	.popup-title {
		text-align: center;
		font-size: r(20);
		margin-bottom: r(27);
	}
</style>
