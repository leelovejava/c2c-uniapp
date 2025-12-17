<template>
	<view class="Body">
		<div class="Main Site" style="overflow: visible;">
			
			<div class="PageBox">
				<div class="van-nav-bar van-nav-bar--fixed">
					<div class="van-nav-bar__content">
						<div class="van-nav-bar__left" @click="back">
							<u-icon name="arrow-left" color="#222" size="32rpx"></u-icon>
						</div>
						<div class="van-nav-bar__title van-ellipsis">{{common.fundRecord.default[2]}}</div>
					</div>
				</div>
				<div class="ScrollBox">
					<div class="tool">
						<table style="text-align: center; width: 100%;color: #222;">
							<tr>
								<td style="font-size: 26rpx;"> {{common.hall.default[1]}}(USDT)</td>
							</tr>
							<tr style="font-size: 32rpx; font-weight: 700;">
								<td> {{userinfo.money}} </td>
							</tr>
							<tr>
								<td style="font-size: 30rpx;"> ≈ </td>
							</tr>
							<tr style="font-size: 32rpx; font-weight: 700;">
								<td> {{(userinfo.money * shijia).toFixed(2)}} EUR </td>
							</tr>
						</table>
					</div>
					
					<div class="van-tabs van-tabs--line">
						<!-- van-tabs__wrap--scrollable -->
						<div class="van-tabs__wrap">
							<div role="tablist" class="van-tabs__nav van-tabs__nav--line van-tabs__nav--complete"
								style="border-color: #0076fa;">
							<!-- 	<div role="tab" class="van-tab" @click="qies(0)"
									:class="xuanz == 0 ? 'van-tab--active' : ''"
									:style="xuanz == 0 ? 'color: #0076fa' : 'color: rgb(204, 204, 204);'"><span
										class="van-tab__text">
										<div class="activeTab">
											<p style="font-size: 15px;">{{common.home4[3]}}</p>
										</div>
									</span></div> -->
									
								<div role="tab" class="van-tab" @click="qies(1)"
									:class="fundForm.stat == 1 ? 'van-tab--active' : ''"
									:style="fundForm.stat == 1 ? 'color: #0076fa' : 'color: rgb(204, 204, 204);'"><span
										class="van-tab__text">
										<div class="">
											<p style="font-size: 16px;">{{common.fundRecord.tabs[0]}}</p>
										</div>
									</span>
								</div>
								
								<div role="tab" class="van-tab" @click="qies(2)"
									:class="fundForm.stat == 2 ? 'van-tab--active' : ''"
									:style="fundForm.stat == 2 ? 'color: #0076fa' : 'color: rgb(204, 204, 204);'"><span
										class="van-tab__text">
										<div class="">
											<p style="font-size: 16px;">{{common.fundRecord.tabs[1]}}</p>
										</div>
									</span></div>
								<div class="van-tabs__line"
									style="background-color: #0076fa; transform: translateX(70.5px) translateX(-50%); transition-duration: 0.3s;">
								</div>
							</div>
						</div>
						<div class="van-tabs__content"><!----><!----><!----></div>
					</div>


					<div class="van-pull-refresh" v-if="false">
						<div class="van-pull-refresh__track" style="transition-duration: 0ms;">
							<div class="van-pull-refresh__head"></div>
							<div role="feed" class="van-list">
								<div v-if="list.length > 0">
									<div class="FundItem van-cell" v-for="item in list">
										<div class="icon tag0"></div>
										<div class="van-cell__title">
											<div><span class="dan" style="color: #222;">
													{{common.hall.list[0]}}: {{item.mainum}} USDT
												</span><span
													style="color: #222;">{{item.addtime_text}}</span>
											</div>
											<div><span class=""
													style="color: rgb(15, 203, 129);">
													{{common.hall.list[3]}}
													</span><span
													style="color: rgb(204, 204, 204);">{{common.task3[2]}}</span></div>
										</div>
									</div>
								</div>
								<view v-else>
									<div class="van-list__finished-text">{{common.vanPull[0]}}</div>
									<div class="van-list__placeholder"></div>
								</view>
							</div>
						</div>
					</div>



					<div class="van-pull-refresh">
						<div class="van-pull-refresh__track" style="transition-duration: 0ms;">
							<div class="van-pull-refresh__head"></div>
							<div role="feed" class="van-list">
								<div v-if="fundLit.length > 0">
									<div class="FundItem van-cell" v-for="item in fundLit">
										<div class="icon tag2"></div>
										<div class="van-cell__title">
											<div><span class="dan" style="color: rgb(204, 204, 204);"></span><span
													data-v-656ee234=""></span>
													<span class="dan"
													style="color: #222; margin-bottom: 10rpx">{{item.memo}}</span>
													
													<span
													style="color: #999;">{{item.createtime_text}}</span>
											</div>
											<div><!----><span class="money" 
											:style="{color: fundForm.stat == 1 ? '#00cf78': '#ff3434', 'font-weight': '700'}">
											<text v-if="fundForm.stat == 1">+</text>
											<!-- <text v-else>-</text> -->
											{{item.money}}</span><span></span>
											</div>
										</div>
									</div>
								</div>
								<view v-else>
									<div class="van-list__finished-text">{{common.vanPull[0]}}</div>
									<div class="van-list__placeholder"></div>
								</view>
							</div>
						</div>
						 
						<!-- <div class="van-pull-refresh__track" style="transition-duration: 0ms;">
							<div class="van-pull-refresh__head"></div>
							<div role="feed" class="van-list Empty">
								<div></div>
								<div class="van-list__finished-text">{{common.vanPull[0]}}</div>
								<div class="van-list__placeholder"></div>
							</div>
						</div> -->
					</div>


					<div class="van-pull-refresh" v-if="xuanz == 2">
						<div class="van-pull-refresh__track" style="transition-duration: 0ms;">
							<div class="van-pull-refresh__head"></div>
							<div role="feed" class="van-list">
								<div v-if="tix.length > 0">
									<div class="FundItem van-cell" v-for="item in tix">
										<div class="icon tag2"></div>
										<div class="van-cell__title">
											<div><span class="dan" style="color: rgb(204, 204, 204);"></span><span
													data-v-656ee234=""></span><span class="dan"
													style="color: #222; margin-bottom: 10rpx">TN{{item.addtime}}</span><span
													style="color: #999;">{{item.addtime_text}}</span>
											</div>
											<div><!----><span class="money">-{{item.money}} USDT</span><span></span>
											</div>
										</div>
									</div>
								</div>
								<view v-else>
									<div class="van-list__finished-text">{{common.vanPull[0]}}</div>
									<div class="van-list__placeholder"></div>
								</view>
								

							</div>
						</div>
						<!-- <div class="van-pull-refresh__track" style="transition-duration: 0ms;">
							<div class="van-pull-refresh__head"></div>
							<div role="feed" class="van-list Empty">
								<div></div>
								<div class="van-list__finished-text">{{common.vanPull[0]}}</div>
								<div class="van-list__placeholder"></div>
							</div>
						</div> -->
					</div>


				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow: false,
				userinfo: [],
				xuanz: 1,
				list: [],
				chong: [],
				tix: [],
				shijia: '',
				fundForm: {
					// 1  收入  2  支出
					stat: 1,
					page: 1,
					list: 999
				},
				fundLit: []
			};
		},
		onLoad(options) {
			const {
				id
			} = options
			this.id = id
			this.getuserinfo()
			this.getlist()
			
			this.revenueExpenditure()
			
			// this.getchong()
			// this.gettix()
			this.$u.api.index.shoujia().then(res => {
				this.shijia = res.data.shoujia
			})
		},
		onShow() {

		},
		methods: {
			
			revenueExpenditure() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.revenueExpenditure(token, this.fundForm).then(res => {
					if(res.code == 1){
						this.fundLit = res.data
					}
				})
			},
			
			
			getlist() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.getdtrecod(token).then(res => {
					this.list = res.data
				})
			},
			
			getchong() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.recharge_list(token).then(res => {
					this.chong = res.data
				})
			},
			gettix() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.withdraw_list(token).then(res => {
					this.tix = res.data
				})
			},
			getuserinfo() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.getUserinfo(token).then(res => {
					this.userinfo = res.data
				})
			},
			qies(data) { 
				this.fundLit = []
				this.fundForm.stat = data
				this.revenueExpenditure()
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
		},
		computed: {
			common() {
				return this.$t("common")
			},
		}
	}
</script>

<style>
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
		background-color: #fefaf0;
	}

	.ScrollBox .van-tabs__nav {
		background: #fefaf0;
	}

	.ScrollBox .van-tab {
		height: 55px;
		background: #fefaf0;
		padding: 0
	}
	
	.Site .van-nav-bar{
		background-color: #fdfaf1;
	}

	.van-nav-bar .van-nav-bar__title {
		color: #222
	}

	.van-nav-bar .van-nav-bar__arrow {
		color: #b5b5b5
	}

	.PageBox .van-tabs__line {
		height: 0
	}

	.van-pull-refresh {
		min-height: calc(100vh - 90px)
	}

	.PageBox .tool:before {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: -80%
	}

	.Empty .van-list__finished-text:before {
		content: "";
		height: 8rem;
		display: block;
		background: url(../../static/image/news/no_data.png) no-repeat center 0;
		background-size: contain;
		margin-top: 40%;
		opacity: .3
	}

	/* .tool {
		width: 95%;
		border-radius: 10px;
		color: #e7e7e7;
		background-color: #0076fa;
		height: 120px;
		overflow: hidden;
		z-index: 99;
		padding: 0 5px;
		display: flex;
		align-items: center;
		margin-left: 10px;
		margin-top: 10px;
		padding: 20px
	} */

	.tool {
		height: 200rpx;
		border-radius: 10px;
		color: #222;
		background-color: #f7ce46;
		overflow: hidden;
		z-index: 99;
		/* padding: 0 5px; */
		display: flex;
		align-items: center;
		margin: 10px 5px;
		/* margin-left: 5px;
		margin-top: 10px;
		margin-bottom: 10px;
		padding: 10px */
	}

	.van-cell__title {
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		font-size: 20rpx;
	}

	.van-cell__title div {
		display: flex;
		flex-direction: column
	}

	.van-cell__title div:nth-child(2) {
		align-items: flex-end
	}

	.FundItem {
		background-color: #fff;
		margin-top: 12rpx;
		color: #222;
	}

	.van-tab__pane {
		width: 98%
	}

	.PageBox .van-tab__text {
		width: 260rpx;
		color: #aaa;
		text-align: center;
		font-size: 30rpx
	}

	.PageBox .van-tabs__wrap {
		border-radius: 10px;
		height: 60px
	}

	.PageBox .van-tab :first-of-type div {
		background-color: #fff;
		padding: 5px;
		padding-left: 0;
		border: 1px solid;
		border-radius: 10px;
		color: #222;
		border: none;
		height: 100rpx;
		line-height: 90rpx;
	}

	.PageBox .van-tab--active :first-of-type div,
	.PageBox .van-tab--active :first-of-type div div {
		background-color: #f0d060;
		border-radius: 10px;
		color: #222;
		border: none;
	}

	.myhead {
		position: fixed;
		top: 0;
		font-size: 18px;
		color: #000;
		background: #fff;
		width: 100%;
		height: 46px;
		line-height: 46px;
		text-align: center
	}
</style>