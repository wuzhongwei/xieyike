<template>
	<view class="nav-footer">
		<view class="nav" @click="showDrawer">导航</view>
		<view class="nav" @click="next">{{page === lastPage ? '提交' : '下一步'}}</view>
		<uni-drawer :width="width" ref="showRight" mode="right" :mask-click="false" class="mark">
			<view class="flex-ac-jsb nav-title pd20"><text>导航</text><text @click="closeDrawer" class="uni-icon uni-icon-closeempty"></text></view>
			<scroll-view class="scroll-Y" style="height: 100%;" scroll-y="true">
				<view class="pd20">
					<view 
						class="item-nav" 
						v-for="(item, index) in list" 
						:key="index"
						@click="jump(item)"
					>{{ item.name }}</view>
				</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>
<script>
	export default {
		name: 'nav-footer',
		data() {
			return {
				width: uni.getSystemInfoSync().screenWidth,
				page: '',
				lastPage: '',
				list: [
					{
						name: '测评者数据',
						url: '/pages/index/testUser'
					},
					{
						name: '测评相关信息',
						url: '/pages/index/testUser1'
					},
					{
						name: '篮球打法',
						url: '/pages/index/dafa'
					},
					{
						name: '脚感磨合',
						url: '/pages/index/jiaoganmohe'
					},
					{
						name: '外观设计',
						url: '/pages/index/waiguansheji'
					},
					{
						name: '做工',
						url: '/pages/index/zuogong'
					},
					{
						name: '包裹性',
						url: '/pages/index/baoguoxing'
					},
					{
						name: '支撑性',
						url: '/pages/index/zhichenxing'
					},
					{
						name: '灵活性',
						url: '/pages/index/linghuaxing'
					},
					{
						name: '透气性',
						url: '/pages/index/touqixing'
					},
					{
						name: '抓地力',
						url: '/pages/index/zhuadili'
					},
					{
						name: '耐磨性',
						url: '/pages/index/naimoxing'
					},
					{
						name: '缓震性',
						url: '/pages/index/huanzhenxing'
					},
					{
						name: '总结',
						url: '/pages/index/zongjie'
					}
				]
			}
		},
		methods: {
			next () {
				this.list.forEach((item, index) => {
					if (item.url === this.page && this.page !== this.lastPage) {
						this.jump(this.list[index + 1])
					}
				})
				if (this.page === this.lastPage) {
					this.$http({
						url: `/evaluation/v1.0/save`,
						method: 'post',
						data: {
							evaluationNoteListId: '',
							...this.$store.state.testAdmin
						}
					}).then((data) => {
						
					})
				}
			},
			jump (item) {
				uni.redirectTo({
					url: item.url
				})
			},
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			}
		},
		mounted () {
			var pages = getCurrentPages();
			var page = '/'+ (pages[pages.length - 1]).route;
			this.page = page
			this.lastPage = this.list[this.list.length - 1].url
		}
	}
</script>
<style lang="scss">
	.scroll-Y {
		padding-bottom: r(50);
	}
	.pd20 {
		padding: 0 r(20);
	}
	.item-nav {
		line-height: r(60);
		height: r(60);
		border-bottom: solid 1px #EEE;
		font-size: r(16);
	}
	.nav-title {
		color: #101010;
		font-size: r(18);
		height: r(40);
	}
	.nav-footer {
		position: fixed;
		bottom: r(33);
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		z-index: 100;
		.nav {
			line-height: r(45);
			border-radius: r(10);
			background-color: #fff;
			text-align: center;
			box-shadow: 0px r(2) r(6) 0px rgba(0, 0, 0, 0.19);
			border: 1px solid rgba(227, 226, 226, 100);
		}

		.nav:nth-child(1) {
			width: r(78);
			margin-right: r(10);
		}

		.nav:nth-child(2) {
			width: r(223);
		}
	}
</style>
