<template>
	<view class="content">
		<view class="mix-list-cell" :class="border" @click="onClick" hover-class="cell-hover"  :hover-stay-time="50">
			<view class="icon-wrap">
				<text
					v-if="icon"
					class="uni-icon"
					:style="[{
						color: iconColor,
					}]"
					:class="icon"
				></text>
			</view>
			<text class="cell-tit clamp">{{ title }}</text>
			<text v-if="tips" class="cell-tip">{{ tips }}</text>
			<text class="cell-more mix-icon"
				:class="typeList[navigateType]"
			></text>
		</view>
	</view>
</template>
 
<script>
	/**
	 *  简单封装了下， 应用范围比较狭窄，可以在此基础上进行扩展使用
	 *  比如加入image， iconSize可控等
	 */
	export default {
		data() {
			return {
				typeList: {
					left: 'icon-zuo',
					right: 'icon-you',
					up: 'icon-shang',
					down: 'icon-xia'
				},
			}
		},
		props: {
			icon: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '标题'
			},
			tips: {
				type: String,
				default: ''
			},
			tipsColor: {
				type: String,
				default: '#999'
			},
			navigateType: {
				type: String,
				default: 'right'
			},
			border: {
				type: String,
				default: 'b-b'
			},
			hoverClass: {
				type: String,
				default: 'cell-hover'
			},
			iconColor: {
				type: String,
				default: '#fff'
			}
		},
		methods: {
			onClick(){
				this.$emit('onClick');
			}
		},
	}
</script>

<style scoped lang='scss'>
	.mix-list-cell{
		display:flex;
		align-items: center;
		padding: 0 24rpx;
		position:relative;
		height: r(85);
		
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b{
			&:after{
				left: 30rpx;
				border-color: #E3E2E2;
			}
		}
		.cell-icon{
			align-self: center;
			width: 60rpx;
			font-size: 38rpx;
		}
		.cell-more{
			align-self: center;
			font-size: 24rpx;
			color: #999;
			margin-left: 16rpx;
		}
		.cell-tit{
			flex: 1;
			font-size: r(18);
			color: #333;
			margin-right:10rpx;
		}
		.cell-tip{
			font-size: r(14);
			background-color: #F4080C;
			border-radius: r(100);
			color: #fff;
			height: r(20);
			line-height: r(20);
			padding: 0 r(6);
		}
		.icon-wrap {
			background-color: #F4080C;
			width: r(50);
			height: r(50);
			border-radius: r(20);
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: r(18);
			.uni-icon {
				color: #fff;
			}
		}
	}
</style>
