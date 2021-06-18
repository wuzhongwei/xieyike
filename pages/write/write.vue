<template>
	<view class="app">
		<view class="user">
			<view class="l">
				<view class="l-title">测评者</view>
				<view class="time">测评10次·共12小时</view>
			</view>
			<view class="r">
				<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
			</view>
		</view>
		<view class="title">测评标题测评标题测评标题测评标题测评</view>
		<view class="msg">鞋款名鞋款名</view>
		<view class="card mt40">
			<view class="card-title">
				<view class="f18">测评者信息</view>
				<view class="uni-icon uni-icon-closeempty"></view>
			</view>
			<view class="card-item">
				<view class="label">性别</view>
				<view class="checkbox center" @click="changeGender(1)">
					<text v-if="gender == 1" class="mix-icon icon-xuanzhong"></text>
					<text v-else class="mix-icon icon-yk_yuanquan"></text>
					<text>男</text>
				</view>
				<view class="checkbox center" @click="changeGender(2)">
					<text v-if="gender == 2" class="mix-icon icon-xuanzhong"></text>
					<text v-else class="mix-icon icon-yk_yuanquan"></text>
					<text>女</text>
				</view>
			</view>
			<view class="card-item">
				<view class="label">年龄</view>
				<view class="value">
					<picker mode="date">
						<view class="uni-input">{{3213}}</view>
					</picker>
				</view>
			</view>
			<view class="card-item">
				<view class="label">身高</view>
				<view class="value">
					<input type="text" value="" placeholder="请输入身高" />
				</view>
			</view>
			<view class="card-item">
				<view class="label">体重</view>
				<view class="value">722</view>
			</view>
			<view class="card-item">
				<view class="label">脚型</view>
				<view class="value">点击查看</view>
			</view>
			<view class="card-item">
				<view class="label">身体机能</view>
				<view class="value">一直保持运动</view>
			</view>
		</view>
		<mix-select title="身高">
			<view class="wrap">
				<view class="inp-wrap">
					<input class="val" type="text">
					<text>cm</text>
				</view>
			</view>
		</mix-select>
		<mix-select title="体重">
			<view class="wrap">
				<view class="inp-wrap">
					<input class="val" type="text">
					<text>kg</text>
				</view>
			</view>
		</mix-select>
		<mix-select title="脚型">
			<view class="jiaoxing-wrap">
				<view class="jiaoxing">
					<view class="label">
						<view class="p1">1.双脚俯视&脚围测量。</view>
						<view class="p2">查看示例图</view>
					</view>
					<view class="value">
						<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
					</view>
				</view>
				<view class="jiaoxing">
					<view class="label">
						<view class="p1">1.双脚俯视&脚围测量。</view>
						<view class="p2">查看示例图</view>
					</view>
					<view class="value">
						<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
					</view>
				</view>
				<view class="jiaoxing">
					<view class="label">
						<view class="p1">1.双脚俯视&脚围测量。</view>
						<view class="p2">查看示例图</view>
					</view>
					<view class="value">
						<image class="img" src="https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg" mode=""></image>
					</view>
				</view>
			</view>
		</mix-select>
		<mix-select title="身体机能">
			<view class="jn-wrap">
				<view class="jn-item">本次测评，最佳运动状态</view>
				<view class="jn-item">本次测评，最佳运动状态</view>
				<view class="jn-item">本次测评，最佳运动状态</view>
				<view class="jn-item">本次测评，最佳运动状态</view>
			</view>
		</mix-select>
		<mix-select title="鞋款">
			<view class="wrap">
				<view class="inp-wrap">
					<input class="val" type="text">
				</view>
				<view class="msg-content">*请填入鞋款名或货号，管理员将归类整理；无法提供鞋款名或货号可以为空。</view>
			</view>
		</mix-select>
		<mix-select title="尺码">
			<view class="wrap">
				<view class="inp-wrap">
					<input class="val" type="text">
					<text>mm</text>
				</view>
			</view>
		</mix-select>
		<mix-select ref="mixSelect" title="袜子">
			<view class="wrap">
				<view class="msg-content">*上传测评时所穿袜子的内里细节图，支持发布多双袜子，填写袜子厚度，袜子的文字描述可以选填。</view>
				<view class="chooseImage">
					<view class="avatar-wrap">
						<text class="uni-icon uni-icon-camera"></text>
					</view>
				</view>
				<view>
					<input type="text" value="" placeholder="点击填写文字描述" />
				</view>
			</view>
		</mix-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: '',
				nianl: '',
				gender: 1
			}
		},
		onLoad() {
			this.$refs.mixSelect.open()
		},
		methods: {
			changeGender () {}
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
		.chooseImage {
			margin: r(37) 0 r(30);
		}
		.avatar-wrap {
			border-radius: r(20);
			box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.4);
			height: r(90);
			width: r(90);
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.msg-content {
			color: #FBB313;
			font-size: r(16);
			text-align: left;
		}
		.jn-wrap {
			padding: r(30) r(48);
		}
		.jn-item {
			border-radius: r(100);
			background-color: #E3E2E2;
			line-height: r(45);
			text-align: center;
			margin-bottom: r(22);
			color: #4A4A4A;
			font-size: r(16);
		}
		.jiaoxing-wrap {
			padding: r(24);
		}
		.jiaoxing {
			display: flex;
			justify-content: space-between;
			margin-bottom: r(22);
			.label,.value,.img {
				width: r(152);
				height: r(152);
				border-radius: r(20);
			}
			.label {
				background-color: #E3E2E2;
				padding: r(20);
				.p1 {
					color: #101010;
					font-size: r(18);
				}
				.p2 {
					color: #939292;
					font-size: r(16);
				}
			}
		}
		.checkbox {
			padding: 12rpx 0 12rpx 40rpx;
			font-size: 28rpx;
			color: #333;
		
			.mix-icon {
				margin-right: 12rpx;
				font-size: 36rpx;
				color: #ccc;
			}
		
			.icon-xuanzhong {
				color: $base-color;
			}
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
			margin-top: r(80);
			padding: 0 r(25);
			font-size: r(26);
			line-height: r(36);
			color: #fff;
		}
		.msg {
			color: #fff;
			font-size: r(16);
			padding: 0 r(25);
			margin-top: r(10);
		}
		.card {
			background-color: #fff;
			border-radius: 0px r(30) 0px 0px;
			padding: 0 r(25);
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
				.label {
					flex: 1;
				}
				
			}
		}
		.mt40 {
			margin-top: r(40);
		}
		.wrap {
			padding: r(28) r(26);
			.inp-wrap {
				border-radius: r(100);
				background-color: #E3E2E2;
				border: 1px solid #fff;
				height: r(45);
				padding: r(10) r(20);
				display: flex;
				align-items: center;
				.val {
					height: 100%;
					flex: 1;
				}
			}
		}
	}
</style>
