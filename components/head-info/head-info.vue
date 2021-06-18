<template>
	<view>
		<view class="isBg">
			<view class="isBg-f" v-if="isBackground">
				<view class="isBg-f-l"> <text class="uni-icon uni-icon-camera f22"></text> 添加图片</view>
				<view class="isBg-f-r">0/0</view>
			</view>
		</view>
		<view class="user">
			<view class="l">
				<view class="l-title">{{user.name}}</view>
				<view class="time">测评{{user.frequencyMin}}次·共{{user.durationMin}}小时</view>
			</view>
			<view class="r">
				<image class="img" :src="user.icon" mode=""></image>
			</view>
		</view>
		<view class="title" v-if="!isBackground">
			<input @input="change" :value="mTitle" type="text" placeholder="请填写标题" placeholder-style="color:#fff" />
		</view>
		<view class="msg" v-if="!isBackground">{{user.shoeName}}</view>
	</view>
</template>
<script>
	export default {
		props: {
			user: {
				type: Object
			},
			value: {
				type: String
			},
			isBackground: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				mTitle: this.value
			}
		},
		methods: {
			change (e) {
				this.$emit('input', e.target.value)
			}
		}
	}
</script>
<style lang="scss">
	.isBg {
		// background-image: url(https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg);
		background-repeat: no-repeat;
		height: r(204);
		background-size: cover;
		position: relative;
	}
	.isBg-f {
		position: absolute;
		bottom: r(10);
		width: 100%;
		color: #fff;
	}
	.isBg-f-l {
		flex: 1;
		justify-content: center;
		display: flex;
		align-items: center;
		.f22 {
			margin-right: r(10);
		}
	}
	.isBg-f-r {
		position: absolute;
		right: r(30);
		top: 0;
	}
	.user {
		display: flex;
		position: absolute;
		right: r(25);
		top: r(10);
		.l {
			text-align: right;
			color: #fff;
		}
		.img {
			width: r(40);
			height: r(40);
			border-radius: r(10);
			border: r(2) solid #fff;
			margin-left: r(10);
		}
	}
	.title {
		padding: 0 r(25);
		font-size: r(26);
		line-height: r(36);
		color: #fff;
		position: absolute;
		left: r(27);
		top: r(93);
	}
	.msg {
		color: #fff;
		font-size: r(16);
		padding: 0 r(25);
		position: absolute;
		top: r(144);
		left: r(27);
	}
</style>
