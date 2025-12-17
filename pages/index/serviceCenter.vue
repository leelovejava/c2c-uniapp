<template>
	<view class="Body">
		<view class="Site PageBox">
			<view class="van-nav-bar van-nav-bar--fixed">
				<view class="van-nav-bar__content">
					<view class="van-nav-bar__left" @click="back">
					<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
							</view>
					<view class="van-nav-bar__title van-ellipsis">{{common.serviceCenter[7]}}</view>
				</view>
			</view>

			<view class="ScrollBox">
 
				<view class="kefu_con">
						<image class="img" :showLoading="true" :src="require('@/static/image/news/kefu.png')"
						></image>
						
						<text class="kefu_text">{{common.serviceCenter[8]}}</text>
						
						<view class="kefu_btn" @tap="toPath">
							{{common.serviceCenter[9]}}
						</view>
				</view>
			</view>
		</view>
		
		<view class="announcement_popup" @tap="announcementPop=false" v-if="announcementPop">
			<view class="pop_content" @tap.stop>
				<view class="int_tit">
					<!-- {{common.home.noticeTitle}} -->
					{{announcementContent.title}}
				</view>
				<scroll-view  scroll-y="true" class="ann_scroll_Y" >
					<rich-text :nodes="announcementContent.content"> </rich-text>
				</scroll-view>
				<view class="int_btn" @tap="announcementPop=false" >
					<view>{{common.common[3]}}</view>
					<view>{{common.busAuth2[1]}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				announcementPop: true,
				announcementContent: {}
			};
		},
		onLoad() {
			this.getPlaDetail()
		},
		methods: {
			back() {
				const pages = getCurrentPages();
				if (pages.length === 2) {
					uni.navigateBack({
						delta: 1
					});
				} else if (pages.length === 1) {
					uni.switchTab({
						url: '/pages/index/index',
					})
				} else {
					uni.navigateBack({
						delta: 1
					});
				}
			},
			dumprun(url) {
				this.$u.api.index.getkf().then(res => {
					if (url == 1) {
						window.location.href = res.data.kefu
					} else if (url == 2) {
						window.location.href = res.data.telegram
					} else {
						window.location.href = res.data.zalo
					}
				})
			},
			
			// 获取弹窗公告
			getPlaDetail() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.shang_ann(token, 1).then(res => { 
					if(res.code == 1){
						this.announcementPop = true
						this.announcementContent = res.data
						console.log(res.data)
					}
				})
			},
			
			toPath(){
				this.$u.api.index.getkf().then(res => {
					// if (url == 1) {
						window.location.href = res.data.kefu
					// } else if (url == 2) {
					// 	window.location.href = res.data.telegram
					// } else {
					// 	window.location.href = res.data.zalo
					// }
				})
				// window.location.href = 'https://overthecounter.top/kefu.php'
			}
		},
		computed: {
			common() {
				return this.$t("common")
			},
		}
	}
</script>

<style scoped lang="scss">
	.ScrollBox {
		padding: 0 !important;
	}

	.Site .van-nav-bar .van-icon {
		font-size: 1.5rem !important;
		color: #bbb !important;
	}

	.PageBox {
		color: #635327;
		padding-top: 40px;
		background-color: #fcfaf4
	}

	.van-nav-bar {
		background-color: #fcfaf5 !important
	}

	.van-nav-bar .van-nav-bar__title {
		color: #222;
		font-weight: 700
	}

	.ScrollBox {
		width: 100%;
		height: 100%;
		background-color: #fcfaf4
	}

	.ScrollBox .van-grid-item__content {
		/* padding: 10px !important;
		display: flex;
		color: #ccc; */
		background-color: #fefaf0;
	}

	.QRCode {
		margin-left: 10px;
		height: 230px
	}
	
	.kefu_con{
		margin-top: 100rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		.img{
			width: 300rpx;
			height: 320rpx;
		}
		.kefu_text{
			margin: 40rpx 0 100rpx 0;
		}
		.kefu_btn{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100rpx;
			width: 80%;
			border-radius: 12rpx;
			color: #222;
			background-color: #f7ce46;
		}
	}
	
	.announcement_popup {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1000;
		background-color: rgba(0, 0, 0, 0.5);
	
		.pop_content {
			position: relative;
			padding: 30rpx;
			height: 720rpx;
			width: 540rpx;
			background-color: #fff;
			border-radius: 12rpx;
			color: #222;
	
			.int_tit {
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 30rpx;
				font-weight: 700;
				color: #222;
			}
			
			.ann_scroll_Y{
				height: 500rpx;
			}
	
			.int_btn {
				display: flex;
				justify-content: space-around;
			
				& > view {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 60rpx;
					width: 220rpx;
					font-size: 24rpx;
					background-color: #f5f5f5;
					border: 1px solid #999;
					border-radius: 10rpx;
				}
				& > view:last-child{
					background-color: #f7ce46;
					border-color: #f7ce46;
				}
			}
		}
	}
</style>