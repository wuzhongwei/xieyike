<template>
	<view class="app">
		<view class="cell row b-b">
			<text class="tit">绑定手机</text>
			<text>1322222222</text>
		</view>
		<view class="cell row b-b">
			<text class="tit">微信绑定</text>
			<view>
				未绑定<text class="uni-icon uni-icon-arrowright"></text>
			</view>
		</view>
		<view class="cell row b-b" @click="navTo('/pages/auth/payPassword')">
			<text class="tit">修改密码</text>
			<text class="uni-icon uni-icon-arrowright"></text>
		</view>
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
