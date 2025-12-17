<template>
	<view class="Body hall" style="width:100%; min-height: 100%;">
		<div class="Site PageBox" style="width:100%; min-height: 100%; height: auto;">
			<div class="van-nav-bar van-nav-bar--fixed">
				<div class="van-nav-bar__content">
					<div class="van-nav-bar__title van-ellipsis">{{common.hall.default[0]}}</div>
					<div class="van-nav-bar__right" @click="dumprun('/pages/setting/userTaskRecord')"><i
							class="van-icon"><img src="../../static/image/news/task00.png" class="van-icon__image"></i>
					</div>
				</div>
			</div>
			<div class="tool">
				<table style="text-align: center; width: 100%; ">
					<tr>
						<td style="text-align: center;">
							<div style="font-size: 26rpx"> {{common.buy.label[0]}}</div>
						</td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<div style="font-size: 38rpx; font-weight: 700; padding: 20rpx 0;">{{userinfo.money}}</div>
						</td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<div style="font-size: 26rpx"> {{common.hall.default[8]}}:USDT</div>
						</td>
					</tr>
					<!-- <tr> -->
					<!-- <td colspan="2" style="text-align: left;"> 
						<div style="margin-top: 10px; text-align: center;"><button
									class="van-button van-button--default van-button--min"
									@click="dumprun('/pages/index/buy')"
									style="width: 120px; height: 32px;border-radius: 20px; color: rgb(255, 255, 255); background: #0076fa;border: 1px solid #ebedf0;">

									<div class="van-button__content"><span class="van-button__text"><span
												style="font-size: 13px; color: rgb(255, 255, 255);">
												{{common.hall.default[2]}}</span></span></div>
								</button>
								<button class="van-button van-button--default van-button--min"
									@click="dumprun('/pages/index/sell')"
									style="width: 120px; height: 32px; border-radius: 20px; color: rgb(255, 255, 255); background: rgb(240, 184, 13); border-color: rgb(240, 184, 13);">
									<div class="van-button__content"><span class="van-button__text"><span
												style="font-size: 13px; color: rgb(0, 0, 0);"> {{common.hall.default[3]}}</span></span></div>
								</button>
							</div> 
					 </td> 
					 </tr> -->
				</table>
			</div>


			<view class="hall_business">
				<view>
					<u-icon :name="require('@/static/image/news/mai.png')" size="40rpx" @click="dumprun('/pages/index/buy')"> </u-icon>
					<text @click="dumprun('/pages/index/buy')">{{common.hall.default[2]}}</text>
				</view>

				<view>
					<u-icon :name="require('@/static/image/news/mai2.png')" size="40rpx"  @click="dumprun('/pages/index/sell')"></u-icon>
					<text @click="dumprun('/pages/index/sell')">{{common.hall.default[3]}}</text>
				</view>
			</view>





			<view class="rolling_purchase_data">
				<swiper class="rolling_swiper" circular :autoplay="true" :vertical="true" :interval="2000">
					<swiper-item v-for="item in secondsInterval" :key="item.amount">
						<view class="swiper_items">
							<img :src="item.header" class="robotheader">
							<view> {{rolist.username}}
								{{common.hall.default[9]}}
								{{item.amount}}USDT {{item.time}}{{common.common5[1]}}{{common.common5[2]}}
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>





			<div class="title01">
				<div class="van-grid" style="padding-left: 5px;">
					<div class="van-grid-item" style="flex-basis: 50%; padding-right: 5px;">
						<div class="van-grid-item__content van-grid-item__content--center"><button @click="qieh(1)"
								class="van-button van-button--default van-button--normal"
								:class="sellForm.status == 1 ? '' : 'tt3'"
								style="color: #222; border-color: #fff; width: 100%; height: 80rpx;"
								:style="sellForm.status == 1 ? 'background: #f7ce46' : 'background: #fff'">
								<div class="van-button__content"><span class="van-button__text"><span
											class="tt3">{{common.hall.default[6]}}</span></span>
								</div>
							</button></div>
					</div>
					<div class="van-grid-item" style="flex-basis: 50%; padding-right: 5px;">
						<div class="van-grid-item__content van-grid-item__content--center"><button @click="qieh(2)"
								class="van-button van-button--default van-button--normal"
								:class="sellForm.status == 2 ? '' : 'tt3'"
								style="color: #222; border-color: #fff; width: 100%; height: 80rpx;"
								:style="sellForm.status == 2 ? 'background: #f7ce46' : 'background: #fff'">
								<div class="van-button__content"><span class="van-button__text"><span class="">
											{{common.hall.default[7]}}</span></span>
								</div>
							</button></div>
					</div>
				</div>
			</div>
			<div class="records" style="height: auto;">
				<div class="van-pull-refresh">
					<div class="van-pull-refresh__track" style="transition-duration: 0ms; height: auto;">
						<div class="van-pull-refresh__head"></div>
						<div role="feed" class="van-list" aria-busy="true">

							<div class="records" v-if="sellForm.status == 1" v-for="item in list">
								<!-- <table class="sellitem">
									<tr>
										<td style="color: rgb(255, 255, 255); width: 50%;">
											{{item.username}}
										</td>
										<td> {{common.hall.list[0]}} {{item.shuliang}} USDT</td>
									</tr>
									<tr>
										<td> {{common.hall.list[1]}} {{item.danjia}}</td>
										<td> {{common.hall.list[2]}} {{item.shengyu}} USDT</td>
									</tr>
									<tr>
										<td></td>
										<td style="text-align: right;"></td>
									</tr>
								</table> -->
								<view class="sell_items">
									<view class="sell_top">
										<view class="fl">
											<view style="display: flex; align-items: center;">
												<img :src="item.avatar" class="robotheader">
												<!-- <u-avatar :src="item.avatar" size="22rpx"></u-avatar> -->
												<text
													style="margin-left: 20rpx; font-size: 24rpx; font-weight: 700;">{{item.username}}</text>
											</view>
										</view>
										<view class="fr" @click="dakai(item.id,item.danjia)" v-if="userinfo.is_sj == 1"
											style="border-color: #b9e9c8; color: #b9e9c8; background-color: #eefaf3;">
											<view>{{common.hall.default[9]}}</view>
										</view>
									</view>
									<view class="sell_con">
										<view>
											<text>{{item.shuliang}}</text>
											<text>{{common.hall.list[0]}}(USDT)</text>
										</view>
										<view>
											<text>{{item.shengyu}}</text>
											<text>{{common.hall.list[2]}}(USDT)</text>
										</view>
										<view>
											<text>{{item.danjia}}</text>
											<text>{{common.hall.list[1]}}(EUR)</text>
										</view>
									</view>
								</view>
							</div>
							<ad-interactive v-else></ad-interactive>

							<div class="records" style="width: 100%;" 
							v-if="sellForm.status == 2"
							v-for="item in list">

								<view class="sell_items">
									<view class="sell_top">
										<view class="fl">
											<view>
												<u-avatar :src="item.avatar" size="22rpx"></u-avatar>
												<text>{{item.username}}</text>
											</view>
											<text>{{common.hall.list[6]}} ：{{item.mine}}-{{item.maxe}}</text>
										</view>
										<view class="fr" @click="dakai(item.id,item.danjia)">
											<view>{{common.hall.default[10]}}</view>
										</view>
									</view>
									<view class="sell_con">
										<view>
											<text>{{item.shuliang}}</text>
											<text>{{common.hall.list[0]}}(USDT)</text>
										</view>
										<view>
											<text>{{item.shengyu}}</text>
											<text>{{common.hall.list[2]}}(USDT)</text>
										</view>
										<view>
											<text>{{item.danjia}}</text>
											<text>{{common.hall.list[1]}}(EUR)</text>
										</view>
									</view>
								</view>
							</div>


							<!-- <empty :promptText="common.empty[0]" :showEmpty="list.length == 0" /> -->

							<div class="van-list__finished-text">{{common.vanPull[0]}}</div>
							<div class="van-list__placeholder"></div>
						</div>

						<div role="dialog" :aria-labelledby="common.hall.list[3]" class="van-dialog"
							style="z-index: 2007;" v-if="isshow">
							<div class="van-dialog__header">{{common.hall.list[3]}}</div>
							<div class="van-dialog__content">
								<div style="width: 90%; margin-top: 10px; margin-bottom: 30px;">
									<div class="van-cell van-field"
										style="margin-left: 20px; height: 80rpx; background-color: #f5f5f5;">
										<div class="van-cell__value van-cell__value--alone van-field__value">
											<div class="van-field__body"><input type="text"
													:placeholder="common.hall.list[4]" class="van-field__control"
													v-model="ushu" style="background-color: #f5f5f5;"></div>
										</div>
									</div>
									<div style="margin-left: 30px; margin-top: 10px; font-size: 24rpx;">
										{{common.hall.list[5]}}:
										<text style="color: #ed742e;">{{(ushu*shijia).toFixed(2)}} EUR</text>
									</div>
								</div>
							</div>
							<div class="van-hairline--top van-dialog__footer"><button @click="isshow = false"
									class="van-button van-button--default van-button--large van-dialog__cancel">
									<div class="van-button__content"><span
											class="van-button__text">{{common.common[3]}}</span></div>
								</button><button @click="chushou"
									class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left">
									<div class="van-button__content">
										<span class="van-button__text">{{common.common[2]}}</span>
									</div>
								</button></div>
						</div>

					</div>
					<!-- <div style="height: 200000px;"></div> -->
				</div>

			</div>
		</div>
		<div style="height: 100px;"></div>
	</view>



</template>

<script>
	export default {
		data() {
			return {
				isshow: false,
				ushu: '',
				list: [],
				userinfo: [],
				rolist: [],
				rolist1: [],
				rolist2: [],
				secondsInterval: [],
				seconds: 15,
				shijia: '',
				danjia: '',
				orderid: '',
				sellForm: {
					page: 1,
					list: 999,
					status: 1
				}
			};
		},
		onLoad(options) {
			const {
				id
			} = options
			this.id = id
			this.getlist()
			this.getrobot()
			let that = this
			this.$u.api.index.shoujia().then(res => {
				that.shijia = res.data.shoujia
			})

		},
		onShow() {
			this.getuserinfo()

			const token = uni.getStorageSync('token')
			// this.$u.api.index.isotcsell(token).then(res => {
			// 	if (res.msg == 'weigui') {
			// 		this.dumprun('/pages/index/busauth?shumu=' + res.data)
			// 	} else if (res.msg == 'jutishi') {
			// 		this.dumprun('/pages/setting/bindinfo')
			// 	} else {

			// 	}
			// })

			this.substring();
		},
		methods: {

			substring() {
				// 2、js截取某个字符串前面的内容：
				var str = "hardnosed@gmail.com";
				str = str.match(/(\S*)@/)[1];
				console.log(str); //结果aaabbbcccdddeee

				// 3、js截取某个字符串后面的内容：
				var str = "hardnosed@gmail.com";
				str = str.match(/@(\S*)/)[1];
				console.log(str); //结果bbbcccdddeeefff

			},

			dakai(id, danjia) {
				this.orderid = id
				this.danjia = danjia
				this.shijia = danjia
				this.isshow = true
			},
			getuserinfo() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.getUserinfo(token).then(res => {
					this.userinfo = res.data
				})
			},
			getrobot() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.robot(token).then(res => {
					this.secondsInterval = res.data
				})
			},
			getlist() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.mSell(token, this.sellForm).then(res => {
					if (res.code == 1) {
						this.list = res.data
					}
				})


				// if (this.xtype == 1) {
				// 	this.$u.api.index.datings(token).then(res => {
				// 		this.list = res.data
				// 	})
				// } else {
				// 	this.$u.api.index.dating(token, 1).then(res => {
				// 		this.list = res.data
				// 	})
				// }
			},
			qieh(data) {
				this.list = []
				this.sellForm.status = data
				this.getlist()
			},
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
			chushou() {
				let that = this
				// const token = uni.getStorageSync('token')
				// this.$u.api.index.isups(token).then(res => {
				// 	if(res.data == 1){
				that.chus()
				// 	}else{
				// 		that.$utils.showToast(this.common.busAuth2[5])
				// 	}
				// })
			},
			chus() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.otcsell(token, this.orderid, this.ushu, this.danjia).then(res => {
					this.$utils.showToast('success')
					this.isshow = false
					this.getuserinfo()
				})
			},
			dumprun(url) {
				// if (url == '/pages/index/buy') {
				let that = this
				const token = uni.getStorageSync('token')
				this.$u.api.index.isups(token).then(res => {
					if(res.data == 1){
						uni.navigateTo({
							url
						})
					}else{
				that.$utils.showToast(this.common.busAuth2[5])
					}
				})
				// } else {
				// uni.navigateTo({
				// 	url
				// })
				// }
			},
		},
		computed: {
			common() {
				return this.$t("common")
			},
		}
	}
</script>

<style scoped lang="scss">
	.PageBox {
		color: #635327;
		padding-top: 40px;
		background-color: #fefaf0
	}

	.head {
		margin-top: 0 !important;
	}

	.van-nav-bar {
		background-color: #fdfaf1 !important;
	}

	.van-nav-bar .van-nav-bar__title {
		color: #222;
		font-weight: 700
	}

	.robotheader {
		font-size: 19px;
		border-radius: 50%;
		background: pink;
		overflow: hidden;
		width: 42px;
		height: 42px
	}

	.van-icon__image {
		width: 45rpx !important;
	}

	.href {
		color: #ad890c
	}

	.records {
		background: #fefaf0;
		width: 100%;
		margin: auto;
		border-radius: 10px;
		color: #9b9b9b;
		margin-bottom: 10px;
	}

	.Content img {
		max-width: 100%
	}

	.van-cell__title {
		font-size: 14px;
		color: #000
	}

	.itemDesc {
		border: 2px solid #0076fa;
		width: 36px;
		height: 36px;
		font-size: 12px;
		margin-left: 120px;
		text-align: center;
		background-color: #fefaf0;
		color: #fff;
		border-radius: 50%
	}

	.PageBox .van-grid-item__content {
		padding: 10px !important;
		display: flex;
		color: #ccc;
		background-color: #fdfaf1;
	}

	.PageBox .van-grid-item__text {
		color: #ccc
	}

	.PageBox .van-dialog {
		background-color: #fff;
		color: #aaa;
		width: 550rpx;
		height: 400rpx;

		.van-dialog__header {
			height: 60rpx;
			color: #222;
			font-size: 32rpx;
			font-weight: 700;
		}

		.van-dialog__content {
			margin: 40rpx 0 80rpx 0;
		}
	}

	.PageBox .van-dialog__confirm {
		margin: 0 20rpx;
		background-color: #5ecc80;
		color: #fff;
		height: 70rpx;
	}

	.van-dialog .van-cell {
		background: #353c4a;
		color: #fff
	}

	.van-dialog .van-field__control {
		background-color: #353c4a;
		color: #fff
	}

	.PageBox .van-dialog__cancel {
		background-color: #f5f5f5;
		margin: 0 20rpx;
		color: #999;
		height: 70rpx;
	}

	.title00 {
		background: #fdead9;
		width: 95%;
		color: #000;
		margin: auto;
		font-weight: 700;
		line-height: 40px;
		text-align: center
	}

	.MyHeader {
		font-size: 19px;
		border-radius: 50%;
		background: pink;
		overflow: hidden;
		width: 52px;
		height: 52px
	}

	.MyHeader img {
		width: 100%
	}

	.title01 {
		background: #fefaf0;
		width: 95%;
		color: #000;
		margin: auto;
		font-weight: 700;
		line-height: 40px;
		text-align: center;
		margin-bottom: 10px
	}

	.sellitem,
	.sell_items {
		background-color: #fff;
		width: 100%;
		text-align: left;
		color: #222;
		font-size: 15px;
		margin-bottom: 10px;
		line-height: 22px;
		margin-top: 10px;
		border-radius: 10px
	}

	.sell_items {
		padding: 20rpx;

		.sell_top {
			display: flex;

			.fl {
				flex: 1;

				&>text:last-child {
					color: #ed742e;
				}
			}

			.fr {
				&>view {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 60rpx;
					width: 120rpx;
					color: #5ecc80;
					border-radius: 6rpx;
					border: 1px solid #5ecc80;
					background-color: #effaf2;
				}
			}
		}

		.sell_con {
			display: flex;
			justify-content: space-between;
			margin-top: 20rpx;

			&>view {
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #666;

				&>text:first-child {
					margin-bottom: 10rpx;
					font-weight: 700;
					color: #222;
					font-size: 26rpx;
				}
			}
		}
	}


	.ScrollBox .van-cell {
		padding: 20px 5px;
		border-bottom: 1px solid #d9d9d9
	}

	.ScrollBox .van-cell:last-child {
		border-bottom: 0 solid #d9d9d9
	}

	.ScrollBox .van-cell:after {
		display: none
	}

	.ScrollBox .van-icon-chat-o:before {
		content: "";
		border-radius: 50%;
		background: #fdfaf1;
		width: 8px;
		height: 8px
	}

	.ScrollBox .van-icon-chat-o {
		display: flex;
		align-items: center;
		justify-content: center
	}

	.ScrollBox .van-cell__title {
		font-size: 16px;
		font-family: ui-serif
	}

	.ScrollBox h3 {
		font-size: 1.05rem;
		font-family: emoji
	}

	.van-cell .van-icon {
		font-size: 18px;
		color: #333
	}

	.hallswipe {
		/* width: 96%; */
		/* margin-left: 6px; */
		margin: 5px;
		padding: 15px;
		height: 60px;
		z-index: 50;
		/* margin-top: 5px;
		margin-bottom: 5px; */
		color: #ccc;
		background-color: #191c23
			/* background-color: antiquewhite; */
	}

	.ScrollBox .van-tab :first-of-type div {
		background-color: #000;
		padding: 5px;
		border: 1px solid;
		border-radius: 20px;
		color: #fff
	}

	.ScrollBox .van-tab--active :first-of-type div,
	.ScrollBox .van-tab--active :first-of-type div div {
		background-color: #f5c73a;
		padding: 5px;
		border-radius: 20px;
		color: #000
	}

	.PageBox .van-popup__close-icon--top-right {
		color: #333;
		top: 20px;
		right: 20px
	}

	.PageBox .Content {
		margin-top: 40px;
		padding: 0 20px
	}

	.PageBox .Content p {
		font-size: 13px;
		line-height: 1.7;
		font-family: vant-icon;
		font-weight: 400;
		color: #666
	}



	.hall {
		padding: 20rpx;
		background-color: #fdfaf1;

		.tool {
			height: 200rpx;
			border-radius: 10px;
			color: #fff;
			background-color: #f7ce46;
			overflow: hidden;
			display: flex;
			align-items: center;
			margin: 10px 5px;

			&::before {
				display: block;
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: -80%
			}

		}

		.hall_business {
			display: flex;
			align-items: center;
			height: 100rpx;
			justify-content: space-between;

			&>view {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #fff;
				width: 300rpx;
				height: 70rpx;
				border-radius: 12rpx;

				&>text {
					margin-left: 20rpx;
				}
			}
		}

	}

	.rolling_purchase_data {
		margin: 20rpx 0 40rpx 0;
		height: 100rpx;
		border: 1px solid #f7ce46;
		border-radius: 6rpx;

		.rolling_swiper {
			height: 100%;

			.swiper_items {
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				height: 100%;

				&>view {
					margin-left: 20rpx;
					display: flex;
				}
			}
		}
	}
</style>