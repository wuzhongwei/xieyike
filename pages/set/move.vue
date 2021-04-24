<template>
	<view class="app">
		<view class="cell row b-b" @click="navTo('/pages/set/userInfoUpdate')">
			<text class="tit">个人资料</text>
			<text class="uni-icon uni-icon-arrowright"></text>
		</view>
		<view class="cell row b-b" @click="navTo('/pages/set/userInfo')">
			<text class="tit">账号与安全</text>
			<text class="uni-icon uni-icon-arrowright"></text>
		</view>
		<view class="cell row b-b" @click="navTo('/pages/set/userInfo')">
			<text class="tit">检查版本</text>
			<text class="uni-icon uni-icon-arrowright"></text>
		</view>
		<view class="cell row b-b" @click="navTo('/pages/set/about')">
			<text class="tit">关于我们</text>
			<text class="uni-icon uni-icon-arrowright"></text>
		</view>
		<view class="mix-btn-content" @click="showConfirm('mixModal')">退出登录</view>
		<mix-modal ref="mixModal" title="提示" text="您确定要退出登录吗" @onConfirm="outlogin"></mix-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad () {
		},
		methods: {
			async outlogin () {
				const res = await this.$http({
					url: `/login/authc/v1.0/logout`,
					method: 'get',
				}, {msg: true});
				this.$util.msg('您已退出登录');
				this.$store.commit('logout');
				setTimeout(()=>{
					uni.navigateBack();
				}, 1000)
			},
		}
	}
</script>

<style scoped lang="scss">
	.app {
		padding: r(40) r(25);
	}
	.cell {
		border-radius: r(30);
		background-color: #fff;
		border: 1px solid #bbb;
		padding: 0 24px;
		line-height: r(50);
		height: r(50);
		display: flex;
		justify-content: space-between;
	}
	.row {
		margin-bottom: 17px;
	}
</style>
