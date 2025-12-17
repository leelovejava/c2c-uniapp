<template>
	<view class="Body">
		<div class="Main Site" style="overflow: visible;"><!---->
			<div class="PageBox">
				<div class="ScrollBox">
					<div class="header_bg">
						<div style="color: #222; font-size: 16px; padding: 5px; text-align: center;"><span
								style="padding: 10px; font-weight: bold;">{{common.user.default[0]}}</span></div>
						<div style="margin-top: 5px;margin-bottom: 15px;">
							<div class="Mine_box" style="padding-top: 10px;padding-bottom: 10px;margin: 0 10px;">

								<div class="MyHeader">
									<img :src="userinfo.avatar" class="head">
								</div>

								<div style="margin-top: 0px; margin-left: 10px; display: flex; flex: 1; align-items: center;"
									@click="dumprun('/pages/setting/info')">
									<div class="userName" style="flex: 1;">
										<div style="font-size: 18px;">{{userinfo.username}}</div>
										<div  style="margin-top: 15rpx;">
											<text
												style="color: #e7712d; font-size: 28rpx; margin-right: 20rpx;">V{{userinfo.level}}</text>

											<view 
												@tap.stop="dumprun('/pages/index/busauth')"
												class="van-button van-button--default van-button--min"
												style="padding: 0 20rpx; height: 48rpx; line-height: 48rpx; color: #222; background: #f7ce46;">
												{{common.serviceCenter[7]}}
											</view>
										</div>

										<div style="font-size: 15px; color: rgb(152, 160, 171); display: none;">
											{{common.user.default[2]}}:<span
												style="color: rgb(231, 231, 231);">{{userinfo.code}}</span><i
												class="copy-qb van-icon"
												style="margin-left: 10px; font-size: 18px;"><img
													src="../../static/image/news/copy.png"
													class="van-icon__image"><!----></i>
										</div>
									</div>

									<div style="margin: 5px auto 0px; text-align: center;">
										<u-icon name="arrow-right" color="#222" size="32rpx"></u-icon>
									</div>
								</div>
							</div>
						</div>

						<div class="tool00">
							<!-- <div style="width: 95%; font-size: 18px;"> -->
							<div class="item">
								<div style="width: 500px; display: flex; flex-direction: column;">
									<text style="color: #858585;">{{common.sell.label[0]}}</text>
									<text style="font-weight: 700; color: #60542e;">
										{{userinfo.money}}2
									</text>
								</div>
								<div>
									<button @click="dumprun('/pages/setting/mixrecharge')"
										class="van-button van-button--default van-button--min"
										style="min-width: 140rpx;">
										<div class="van-button__content"><span class="van-button__text"><span
													style="font-size: 28rpx; color: #f7ce46;">
													{{common.wallet.default[1]}}</span></span></div>
									</button>
								</div>
							</div>


							<div class="item">
								<div style="width: 500px; display: flex; flex-direction: column;">
									<text style="color: #858585;">
										{{common.user.default[4]}}(EUR)
									</text>
									<span style="font-weight: bold; color: #60542e;"> {{userinfo.balance_revered}}
									</span>
								</div>
								<div>
									<button @click="dumprun('/pages/setting/withdraw')"
										class="van-button van-button--default van-button--min"
										style="border-color: #ed7631; background-color: #fefaf6; min-width: 140rpx;">
										<div class="van-button__content"><span class="van-button__text"><span
													style="font-size: 28rpx; color: #ed7631;">
													{{common.wallet.default[2]}}</span></span></div>
									</button>
								</div>
							</div>


							<div class="item">
								<div style="width: 500px; display: flex; flex-direction: column;">
									<text style="color: #858585;">
										{{common.user.default[7]}}(EUR)
									</text>
									<span style="font-weight: bold; color: #60542e;"> {{userinfo.interest_wallet }}
									</span>
								</div>
								<div>
									<button @click="dumprun('/pages/setting/interest')"
										class="van-button van-button--default van-button--min"
										style="border-color: #999; background-color: #eee; min-width: 140rpx;">
										<div class="van-button__content"><span class="van-button__text">
												<span style="font-size: 28rpx; color: #222;">
													{{common.user.default[11]}}</span>

											</span></div>
									</button>
								</div>
							</div>

							<div class="item">
								<div style=" flex: 1; display: flex; flex-direction: column; align-items: center;">
									<text style="color: #858585;">
										{{common.user.default[8]}}(EUR)
									</text>
									<span style="font-weight: bold; color: #60542e;"> {{userinfo.interest_all }} </span>
								</div>

							<!-- 	<div style="width: 50%; display: flex; flex-direction: column;">
										<text style="color: #858585;">
										{{common.user.default[4]}}(EUR)
									</text
								</div> -->

								<div style="  flex: 1; display: flex; flex-direction: column; align-items: center;">
									<text style="color: #858585;">
										{{common.user.default[9]}}(USDT)
									</text>
									<span style="font-weight: bold; color: #60542e;"> {{userinfo.Recharge_money}}
									</span>
								</div>

							<!-- 	<div style="  flex: 1;  display: flex; flex-direction: column; align-items: center;">
									<text style="color: #858585;">
										{{common.user.default[10]}}(EUR)
									</text>
									<span style="font-weight: bold; color: #60542e;"> {{userinfo.sell_money}} </span>
								</div> -->
							</div>


							<!-- </div> -->
						</div>
						<!-- <div class="tool02">
							<div class="Menu top2 van-grid">
								<div class="van-grid-item" style="flex-basis: 50%;">
									<div
										class="van-grid-item__content van-grid-item__content--vertical van-grid-item__content--center">
										<div class="van-cell van-cell--center van-cell--borderless">
											<div class="van-cell__title"><span
													data-v-0b400d45="">6938.000</span>
												<div class="van-cell__label">{{common.recharge.info[0]}}(USDT)</div>
											</div>
										</div>
									</div>
								</div>
								<div class="van-grid-item" style="flex-basis: 50%;">
									<div
										class="van-grid-item__content van-grid-item__content--vertical van-grid-item__content--center">
										<div class="van-cell van-cell--center van-cell--borderless">
											<div class="van-cell__title"><span
													data-v-0b400d45="">0.000</span>
												<div class="van-cell__label">{{common.wallet.default[11]}}(GBP)</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> -->
						
						<view class="tool02 use_list">
							<view class="use_item" @click="dumprun('/pages/setting/wallet')">
								<img 
									src="../../static/image/news/fund.png" class="van-icon__image" >
								<text>{{common.user.menu[0]}}</text>
								<i class="van-icon van-icon-arrow van-cell__right-icon" />
							</view>
							
							<view class="use_item" @click="dumprun('/pages/setting/teamReport')">
								<img 
									src="../../static/image/news/fund.png" class="van-icon__image" >
								<text>{{common.user.menu[1]}}</text>
								<i class="van-icon van-icon-arrow van-cell__right-icon" />
							</view>
							
							<view class="use_item" @click="dumprun('/pages/setting/bindinfo')">
								<img 
									src="../../static/image/news/fund.png" class="van-icon__image" >
								<text>{{common.common4[0]}}</text>
								<i class="van-icon van-icon-arrow van-cell__right-icon" />
							</view>
							
							<view class="use_item" @click="dumprun('/pages/setting/bindAccount')">
								<img 
									src="../../static/image/news/fund.png" class="van-icon__image" >
								<text>{{common.user.menu[2]}}</text>
								<i class="van-icon van-icon-arrow van-cell__right-icon" />
							</view>
							
							<view class="use_item" @click="dumprun('/pages/setting/fundRecord')">
								<img 
									src="../../static/image/news/fund.png" class="van-icon__image" >
								<text>{{common.user.menu[3]}}</text>
								<i class="van-icon van-icon-arrow van-cell__right-icon" />
							</view>
							
							<view class="use_item" @tap="showInterest=true">
								<img 
									src="../../static/image/news/fund.png" class="van-icon__image" >
								<text>{{common.user.default[7]}}</text>
								<i class="van-icon van-icon-arrow van-cell__right-icon" />
							</view>
							
							<view class="use_item" @click="loginout">
								<img 
									src="../../static/image/news/fund.png" class="van-icon__image" >
								<text>{{common.user.default[3]}}</text>
								<i class="van-icon van-icon-arrow van-cell__right-icon" />
							</view>
						</view>
						
						
						<div class="tool02" v-if="false">
							<div role="button" tabindex="0" @click="dumprun('/pages/setting/wallet')"
								class="van-cell van-cell--clickable van-cell--center van-cell--large"><i
									class="van-icon van-cell__left-icon"><img style="width: 100%;height: 100%"
										src="../../static/image/news/fund.png" class="van-icon__image"><!----></i>
								<div class="van-cell__title"><span>{{common.user.menu[0]}}</span>
								</div><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
							</div>
							<div role="button" tabindex="0" @click="dumprun('/pages/setting/teamReport')"
								class="van-cell van-cell--clickable van-cell--center van-cell--large"><i
									class="van-icon van-cell__left-icon"><img style="width: 100%;height: 100%"
										src="../../static/image/news/team.png" class="van-icon__image"><!----></i>
								<div class="van-cell__title"><span>{{common.user.menu[1]}}</span>
								</div><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
							</div>
							<div role="button" tabindex="0" @click="dumprun('/pages/setting/bindAccount')"
								class="van-cell van-cell--clickable van-cell--center van-cell--large"><i
									class="van-icon van-cell__left-icon"><img style="width: 100%;height: 100%"
										src="../../static/image/news/bind.png" class="van-icon__image"><!----></i>
								<div class="van-cell__title"><span>{{common.user.menu[2]}}</span>
								</div><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
							</div>



							<div role="button" tabindex="0" @click="dumprun('/pages/setting/fundRecord')"
								class="van-cell van-cell--clickable van-cell--center van-cell--large"><i
									class="van-icon van-cell__left-icon"><img style="width: 100%;height: 100%"
										src="../../static/image/news/account.png" class="van-icon__image"><!----></i>
								<div class="van-cell__title"><span>{{common.user.menu[3]}}</span>
								</div><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
							</div>



							<div role="button" tabindex="0" @tap="showInterest=true"
								class="van-cell van-cell--clickable van-cell--center van-cell--large"><i
									class="van-icon van-cell__left-icon"><img style="width: 100%;height: 100%"
										src="../../static/image/news/qianbao.png" class="van-icon__image"><!----></i>
								<div class="van-cell__title"><span>{{common.user.default[7]}}</span>
								</div><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
							</div>



							<div role="button" tabindex="0" @click="loginout"
								class="van-cell van-cell--clickable van-cell--center van-cell--large"><i
									class="van-icon van-cell__left-icon"><img style="width: 100%;height: 100%"
										src="../../static/image/news/exit.png" class="van-icon__image"><!----></i>
								<div class="van-cell__title"><span>{{common.user.default[3]}}</span>
								</div><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
							</div>
						</div>

						<div style="height: 40px;"></div>
					</div>
				</div>

			</div>
		</div>


		<view class="interest_popup" @tap="showInterest=false;  finaData.moneys = '';" v-if="showInterest">
			<view class="pop_content" @tap.stop>
				<view class="int_tit">{{common.user.default[7]}}</view>

				<view class="int_list">
					<view :class="['int_item', item.id == finaData.fid && 'int_curr_item']"
						v-for="(item,index) in finaList" :key="item.id" @tap="finaData.fid = item.id">
						{{item.title_zh}}
					</view>
				</view>

				<view class="int_input">
					<input type="text" autocomplete="off" v-model="finaData.moneys"
						:placeholder="common.user.default[12]" class="van-field__control">
				</view>

				<view class="int_btn" >
					<view @tap=" finaData.moneys = ''; showInterest=false;">{{common.user.default[13]}}</view>
					<view @tap="setfinaBtn">{{common.user.default[14]}}</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow: false,
				userinfo: [],
				bili: '',
				isreal: 0,
				showInterest: false,

				user_string: '',

				finaList: [],
				finaData: {
					moneys: '',
					fid: ''
				}
			};
		},
		onLoad(options) {
			const {
				id
			} = options
			this.id = id

			this.getfina()
		},
		onShow() {
			this.getuserinfo()
			this.$u.api.index.shoujia().then(res => {
				this.bili = res.data.shoujia
			})
			const token = uni.getStorageSync('token')
			this.$u.api.index.is_verified(token).then(res => {
				if (res.data.status == 1) {
					this.isreal = 1
				} else {
					this.isreal = 0
				}
			})
		},
		methods: {
			getuserinfo() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.getUserinfo(token).then(res => {
					this.userinfo = res.data
				})
			},
			loginout() {
				this.showLanguage = false
				uni.setStorageSync('token', '')
				this.$utils.showToast('succès')
				setTimeout(() => {
					uni.redirectTo({
						url: "/pages/common/login"
					})
				}, 1200)
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

			dumprun(url) {
				uni.navigateTo({
					url
				})
			},

			getfina() {
				const token = uni.getStorageSync('token')
				this.$u.api.setting.getfina(token).then(res => {
					this.finaList = res.data
					this.finaData.fid = res.data[0].id
				})
			},

			setfinaBtn() {
				if (!this.finaData.fid || !this.finaData.moneys) return
				const token = uni.getStorageSync('token')
				this.$u.api.setting.setfina(token, this.finaData).then(res => {
					if (res.code == 1) {
						this.showInterest = false
						uni.showToast({
							title: this.common.user.default[15],
							icon: 'none'
						});
						this.finaData = {
							moneys: '',
							fid: ''
						}
					}
				})

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

	.PageBox {
		color: #e7e7e7;
		padding: 0;
		background-color: #fefaf0
	}

	.van-nav-bar {
		background-color: #191c23
	}

	.header_bg {
		width: 100%;
		top: 0;
		z-index: 0;
		height: 300px
	}

	.MyHeader {
		font-size: 16px;
		border-radius: 50%;
		background: pink;
		overflow: hidden;
		width: 120rpx;
		height: 120rpx
	}

	.head {
		margin-top: 0 !important;
	}

	.MyHeader img {
		width: 100%;
	}

	.Mine_box {
		padding: 2px;
		overflow: hidden;
		/* margin-left: 10px; */
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	.Menu2item1 {
		background-color: #191c23;
		line-height: 20px;
		margin-left: 10px;
		width: 48%;
		text-align: center;
		padding: 5px;
		padding-bottom: 0
	}

	.MyHeaderStatus {
		width: -webkit-max-content;
		width: -moz-max-content;
		width: max-content;
		padding: 0 7px;
		margin-top: 5px;
		margin-left: 10px;
		font-size: 12px;
		border-radius: 20px;
		background: #f3c13a;
		color: #fff;
		line-height: 25px;
		display: flex;
		text-align: center
	}

	.user_vip {
		width: 44px;
		height: 19px;
		background: url(data:image/png;base64,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) no-repeat;
		background-size: 100% 100%;
		margin-left: 13px;
		color: #4e51bf;
		font-style: italic;
		text-align: center;
		line-height: 19px;
		padding-right: 5px;
		margin: 5px 0 9px 13px;
		font-weight: 700
	}

	.MyHeaderStatus .MyHeaderStatus_radius {
		width: 8px;
		height: 8px;
		background: #ff93a4;
		border-radius: 50%;
		display: inline-flex;
		margin-right: 2px
	}

	.userName {
		/* width: 260px; */
		width: 230px;
		font-size: 32rpx;
		color: #222;
		font-family: emoji;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap
	}

	.tool00 {
		box-shadow: 0 1px 3px hsla(0, 0%, 85.9%, .8588235294117647);
		padding: 0 20rpx;
		margin-top: 20px;

		.item {
			margin-bottom: 20rpx;
			display: flex;
			align-items: center;
			padding: 10rpx 20rpx;
			background-color: #fff;
			border-radius: 10rpx;

			.van-button {
				padding: 0 20rpx;
				background-color: #fefbee;
				border-color: #f7ce46;
				color: #f7ce46;
			}
		}
	}

	/* 
	.tool00,
	.tool01 {
		border-radius: 10px;
		background-color: #fff;
		overflow: hidden;
		z-index: 99;
		align-items: center;
		margin: 0 10px;
	} */

	.tool01 {
		color: #aaa;
		padding: 0 5px;
		margin-top: 10px;
		padding: 10px
	}

	.tool02 {
		width: 95%;
		border-radius: 10px;
		background-color: #fff;
		overflow: hidden;
		z-index: 99;
		color: #60542e;
		padding: 0 5px;
		align-items: center;
		margin-left: 10px;
		margin-top: 10px;
		padding: 10px;
	}
	

	.tool02 .van-cell {
		padding: 17px 0;
		color: #60542e;
		background-color: #fff
	}

	.close img {
		width: 36px;
		margin-top: 20px
	}

	.UserInfo .info0 {
		margin-top: -255px;
		z-index: 10;
		background: transparent none repeat scroll 0 0
	}

	.UserInfo .info {
		margin-top: -185px;
		z-index: 10;
		color: #fff;
		z-index: 3;
		background: transparent none repeat scroll 0 0;
		position: relative;
		padding: 10px 16px 6px 20px
	}

	.tool02 .van-cell__title {
		color: #60542e;
		font-size: 26rpx;
	}

	.UserInfo .info .van-cell__title {
		font-size: 12px
	}

	.UserInfo .info .van-cell__label {
		font-size: 14px;
		background: transparent none repeat scroll 0 0
	}

	.UserInfo .info .van-cell__value {
		flex: none;
		line-height: 1.3;
		background: transparent none repeat scroll 0 0
	}

	.UserInfo .info .van-cell__value a {
		text-align: center;
		display: block
	}

	.mygrid {
		padding: 5px 10px
	}

	.PageBox .van-dialog {
		background-color: #191c23;
		color: #aaa
	}

	.PageBox .van-dialog__confirm {
		background-color: #191c23;
		color: #13c465
	}

	.van-dialog .van-cell {
		background: #353c4a;
		color: #fff
	}

	.PageBox .van-dialog__cancel {
		background-color: #191c23;
		color: #ccc
	}

	.mygridvalue {
		color: #fff0cd
	}

	.top3 .van-grid-item__content {
		padding: 8px 8px 12px !important
	}

	.top2 {
		padding: 0 20px
	}

	.top2 .van-cell__title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center
	}

	.top2 .van-cell__title>span {
		font-size: 17px
	}

	.top2 .van-cell__title .van-cell__label {
		padding: 0 0;
		color: #ababab;
		font-size: 12px
	}

	.top3 .van-grid-item {
		width: 30%
	}

	.top3 .van-icon img {
		width: 31px;
		height: 31px
	}

	.top3 .van-grid-item__text {
		font-size: 13px;
		color: #fff;
		font-family: Alibaba;
		font-weight: 400;
		margin-top: 5px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
		text-align: center
	}

	.top4 {
		padding: 0 15px
	}

	.top4 .van-cell {
		display: flex;
		justify-content: center;
		padding: 7px 16px
	}

	.top4 .van-cell .van-cell__title {
		flex: inherit;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.top4_box {
		width: 100%;
		display: flex;
		justify-content: center
	}

	.top4_box .van-cell {
		background: #4e51bf;
		border-radius: 10px;
		padding: 0 15px;
		margin: 0 auto;
		width: -webkit-max-content;
		width: -moz-max-content;
		width: max-content;
		margin-bottom: 15px !important;
		margin-top: 15px !important
	}

	.top4_box .van-cell__title span {
		color: #fff !important;
		font-size: 13px !important
	}

	.top4 .van-cell__title span {
		font-size: 13px;
		color: #fff;
		font-family: Alibaba;
		font-weight: 400
	}

	.top4 .van-grid-item {
		border-bottom: 1px solid #d9d9d9;
		margin-bottom: 15px
	}

	.top4 .border_none {
		border-bottom: none;
		margin-bottom: 0
	}

	.top4 .padding_0 .van-cell {
		padding: 10px 0
	}

	.Menu {
		margin-top: 5px;
		line-height: 18px;
		font-size: 13px
	}

	.Menu .van-cell {
		padding: 0 0
	}

	.Menu .van-cell,
	.Menu .van-cell__label {
		color: #fff;
		font-size: 18px;
		text-align: center
	}

	.Menu .van-grid-item__content {
		background: transparent none repeat scroll 0 0;
		padding: 16px 0
	}

	.van-cell__right-icon {
		font-size: 32rpx;
		color: #222;
	}


	.van-icon__image {
		width: 80rpx !important;
	}


	.interest_popup {
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
			padding: 30rpx;
			height: 760rpx;
			width: 600rpx;
			background-color: #fff;
			border-radius: 12rpx;
			color: #222;

			.int_tit {
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-weight: 700;
			}

			.int_list {
				height: 400rpx;

				.int_item {
					margin-bottom: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 80rpx;
					border-radius: 12rpx;
					background-color: #f5f5f5;
				}

				.int_curr_item {
					background-color: #f7ce46;
				}
			}

			.int_input {
				.van-field__control {
					padding: 0 20rpx;
					height: 80rpx;
					border-radius: 8rpx;
					font-size: 28rpx;
					background-color: #f5f5f5;
				}
			}

			.int_btn {
				margin-top: 60rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 100rpx;

				&>view {
					display: flex;
					justify-content: center;
					align-items: center;
					color: #222;
					width: 240rpx;
					height: 60rpx;
					border-radius: 12rpx;
				}

				&>view:nth-child(1) {
					color: #999;
					background-color: #f5f5f5;
					border: 1px solid #999;
				}

				&>view:nth-child(2) {
					background-color: #f7ce46;
				}
			}
		}
	}
	
	.use_list{
		.use_item{
			display: flex;
			align-items: center;
			height: 100rpx;
			.van-icon__image {
				width: 80rpx;
			}
			& > text { 
				flex: 1;
			}
		}
	}
</style>