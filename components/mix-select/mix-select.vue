<template>
	<uni-popup ref="popup" type="bottom">
		<view class="content">
			<view class="title">
				<view class="title-wrap">
					<view class="left">
						<text class="uni-icon uni-icon-arrowleft"></text>
						<text>{{title}}</text>
					</view>
					<view class="right" @click="close()">确认</view>
				</view>
			</view>
			<view class="max-h">
				<slot></slot>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			title: {
				type: String,
				default: '标题'
			}
		},
		methods: {
			open(){
				this.$refs.popup.open();
			},
			close(){
				this.$refs.popup.close();
			}
		}
	}
</script>

<style scoped lang="scss">
	.max-h {
		overflow-y: auto;
		max-height: r(500);
	}
	.content{
		background-color: #fff;
		border-radius: 0 r(30) 0 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom); 
		position: relative;
		.title {
			padding: r(10) r(20) 0 r(10);
			.title-wrap {
				border-bottom: solid r(1) #eee;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 0 r(10) 0;
			}
			.left {
				display: flex;
				align-items: center;
				font-size: r(18);
				color: #101010;
			}
			.right {
				color: #F4080C;
				font-size: r(16);
			}
		}
	}
</style>
