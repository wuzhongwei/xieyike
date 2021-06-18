<template>
	<view class="app">
		<view class="cell">
			<text class="tit fill">头像</text>
			<view class="avatar-wrap" @click="chooseImage">
				<image class="avatar" :src="tempAvatar || icon || '/static/icon/default-avatar.png'"
					mode="aspectFill"></image>
			</view>
		</view>
		<view class="cell b-b">
			<text class="tit fill">用户名</text>
			<input class="input" v-model="name" type="text" maxlength="8" placeholder="请输入用户名"
				placeholder-class="placeholder">
		</view>
		<view class="cell b-b">
			<text class="tit fill">性别</text>
			<view class="checkbox center" @click="changeGender(1)">
				<text v-if="sex == 1" class="mix-icon icon-xuanzhong"></text>
				<text v-else class="mix-icon icon-yk_yuanquan"></text>
				<text>男</text>
			</view>
			<view class="checkbox center" @click="changeGender(0)">
				<text v-if="sex == 0" class="mix-icon icon-xuanzhong"></text>
				<text v-else class="mix-icon icon-yk_yuanquan"></text>
				<text>女</text>
			</view>
		</view>
		<view class="cell b-b">
			<text class="tit fill">所在地</text>
			<picker mode='region' @change="onchange">
				<view>{{cityStr}}</view>
			</picker>
		</view>
		<view class="cell b-b">
			<text class="tit fill">生日</text>
			<picker mode="date" :value="birthday" @change="bindDateChange">
				<view class="uni-input">{{birthday}}</view>
			</picker>
		</view>
		<view class="mix-btn-content" @click="confirm">保存资料</view>
		<!-- <mix-button ref="confirmBtn" text="保存资料" marginTop="80rpx" @onConfirm="confirm"></mix-button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				tempAvatar: '',
				cityStr: '请选择地区',
				icon: '',
				name: '',
				sex: '1',
				address: '',
				birthday: '请选择日期'
			}
		},
		computed: {
			curUserInfo() {
				return this.$store.state.userInfo
			}
		},
		onLoad() {
			const {
				baseUser={}
			} = this.curUserInfo;
			this.id = baseUser.id
			this.icon = baseUser.icon
			this.name = baseUser.name
			this.sex = baseUser.sex
			this.address = baseUser.address
			this.cityStr = baseUser.address
			this.birthday = this.formatDate(baseUser.birthday)
		},
		methods: {
			doubleNum (num) {
				return num < 10 ? '0' + num : num
			},
			formatDate (date) {
				if (!date) return ''
				let d = new Date(date)
				return `${d.getFullYear()}-${this.doubleNum(d.getMonth() + 1)}-${this.doubleNum(d.getDate())}` 
			},
			bindDateChange (e) {
				this.birthday = e.detail.value
				console.log(e.detail.value)
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			onchange(e) {
				const value = e.detail.value
				this.cityStr = value.join(' ')
				this.address = this.cityStr
			},
			//提交修改
			async confirm() {
				const {
					icon,
					name,
					sex,
					address,
					birthday
				} = this
				// if (!icon) {
				// 	this.$util.msg('请上传头像');
				// 	return;
				// }
				// if (!name) {
				// 	this.$util.msg('请输入您的昵称');
				// 	return;
				// }
				// if (!sex) {
				// 	this.$util.msg('请选择您的性别');
				// 	return;
				// }
				// if (!address) {
				// 	this.$util.msg('请选择地区');
				// 	return;
				// }
				// if (!birthday) {
				// 	this.$util.msg('请选择出生日期');
				// 	return;
				// }
				const res = await this.$http({
					url: `/baseUser/v1.0/patchUpdate/${this.id}`,
					method: 'post',
					data: {
						icon: icon,
						name: name,
						sex: sex,
						address: address,
						birthday: birthday
					}
				},{msg: true})
				
				if (res.code === '0000') {
					this.$util.msg('更新成功');
					
					setTimeout(() => {
						this.$store.dispatch('getUserInfo'); //刷新用户信息
						uni.navigateBack();
					}, 1000)
				}
			},
			//选择头像
			chooseImage() {
				uni.chooseImage({
					count: 1,
					success: res => {
						uni.navigateTo({
							url: `./cutImage/cut?src=${res.tempFilePaths[0]}`
						});
					}
				});
			},
			//裁剪回调
			async setAvatar(filePath) {
				this.tempAvatar = filePath;
				console.log('filePath', filePath)
				const result = await uni.uploadFile({
					url: 'http://47.98.126.64:8655/common/v1.0/upload',
					filePath: filePath,
					name: 'file'
				})
				let data = JSON.parse(result[1].data)
				if (data.code === '0000') {
					this.icon = data.data
				} else {
					this.$util.msg('上传失败');
				}
				
			},
			//修改性别
			changeGender(gender) {
				this.sex = gender
			}
		}
	}
</script>

<style scoped lang="scss">
	.app {
		padding-top: 16rpx;
	}
	.uni-input {
		padding: 0;
	}
	.mix-btn-content {
		margin-top: r(30);
	}
	.cell {
		display: flex;
		align-items: center;
		min-height: 110rpx;
		padding: 0 40rpx;

		&:first-child {
			margin-bottom: 10rpx;
		}

		&:after {
			left: 40rpx;
			right: 40rpx;
			border-color: #d8d8d8;
		}

		.tit {
			font-size: 30rpx;
			color: #333;
		}

		.avatar-wrap {
			width: 120rpx;
			height: 120rpx;
			position: relative;
			border-radius: 100rpx;
			overflow: hidden;

			.avatar {
				width: 100%;
				height: 100%;
				border-radius: 100rpx;
			}

			.progress {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 100rpx;
				height: 100rpx;
				box-shadow: rgba(0, 0, 0, .6) 0px 0px 0px 2005px;
				border-radius: 100rpx;
				transition: .5s;
				opacity: 0;

				&.no-transtion {
					transition: 0s;
				}

				&.show {
					opacity: 1;
				}
			}
		}

		.input {
			flex: 1;
			text-align: right;
			font-size: 28rpx;
			color: #333;
		}

		switch {
			margin: 0;
			transform: scale(0.8) translateX(10rpx);
			transform-origin: center right;
		}

		.tip {
			margin-left: 20rpx;
			font-size: 28rpx;
			color: #999;
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
	}
</style>
