<template>
	<view class="navbar">
		<view class="menu-btn" @click="leftShow=true,getuserinfo()">☰ MENU</view>
		<view class="logo">
			<image src="/static/image/fz/logo3.png" mode="widthFix"
				style="width:100px;object-fit:contain;vertical-align:middle;">
			</image>
		</view>
		<view class="language-switcher">
			<view class="dropdown">
				<view class="dropdown-toggle a-rowC" @tap="$u.route('/pages/setting/language')">
					<view class="a-mr3">
						{{i18n.language}}
					</view>
					<u-icon name="arrow-down-fill" color="#fff" size="16"></u-icon>
				</view>
			</view>
		</view>

		<u-popup v-model="leftShow" mode="left" length="80%" zIndex="55" border-radius="0" :mask="false"
			:mask-close-able="false">
			<scroll-view scroll-y="true" style="height:100vh;background-color: #0D1A2E;">
				<view class="a-crfff" style="height: 100%;">
					<view class="a-pr" style="padding: 30rpx 20rpx;">
						<view class="a-rowC a-mb20">
							<view class="a-mr10">
								<image src="/static/image/fz/txo.png" mode="widthFix" style="width: 120rpx;">
								</image>
							</view>
							<view>
								<!-- <view class="a-rowC a-mb5">
									<view class="a-mr10 a-fw a-f28">
										+6589598444
									</view>
									<view class="a-tc a-f24 a-borr5 a-crfff"
										style="background: #1E90FF;padding:4rpx 16rpx;">
										设定
									</view>
								</view> -->
								<view class="a-rowC a-mb5" style="color: #ccc;">
									<view class="a-mr10 a-f28">
										UID:{{userinfo.uid}} {{userinfo.level}}
									</view>
								</view>
								<view class="a-rowC" style="color: #ccc;">
									<view class="a-mr10 a-f28">
										{{ $t('common.navbar.inviteCode') }}: {{userinfo.code}}
									</view>
									<view class="a-tc a-f24 a-borr5 a-crfff"
										style="background: #1E90FF;padding:4rpx 16rpx;" @click="copyInviteCode">
										{{ $t('common.navbar.copy') }}
									</view>
								</view>
							</view>
						</view>
						<view style="position: absolute;right:10rpx;top: 30rpx;">
							<u-icon name="close" color="#fff" size="34" @click="leftShow=false"></u-icon>
						</view>
						<view class="a-mb15">
							<view class="a-between a-mb3">
								<view>
									{{ $t('common.navbar.creditScore') }}
								</view>
								<view>
									{{userinfo.credit_score-0}}%
								</view>
							</view>
							<u-line-progress active-color="#4CAF50" height="20" :percent="userinfo.credit_score-0"
								:show-percent="false"></u-line-progress>
						</view>
						<view class="a-mb15">
						
							<view class="currency-grid">
								<view class="currency-item">
									<span class="currency-value">{{ userinfo.eur || '0.00' }} EUR</span>
								</view>
								<view class="currency-item">
									<span class="currency-value">{{ userinfo.money || '0.00' }} USD</span>
								</view>
								<view class="currency-item">
									<span class="currency-value">{{ userinfo.cad || '0.00' }} CAD</span>
								</view>
								<view class="currency-item">
									<span class="currency-value">{{ userinfo.sgd || '0.00' }} SGD</span>
								</view>
								<view class="currency-item">
									<span class="currency-value">{{ userinfo.chf || '0.00' }} CHF</span>
								</view>
								<view class="currency-item">
									<span class="currency-value">{{ userinfo.gbp || '0.00' }} GBP</span>
								</view>
							</view>
							<view class="a-center2">
								<view style="background:#1E90FF;" class="a-f32 a-p10 a-w80p a-tc a-borr5"
									@tap="$u.route('/pages/my/exchange')">
									{{ $t('common.navbar.currencyExchange') }}
								</view>
							</view>
						</view>
						<view class="">
							<u-grid :col="3" :border="false">
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/vip')">
									<image src="/static/image/fz/hydj.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.memberLevel') }}</view>
								</u-grid-item>
								<!-- <u-grid-item bg-color="none" @click="$u.route('/pages/my/checkin')">
									<image src="/static/image/fz/mrqd.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">每日签到</view>
								</u-grid-item> -->
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/event')">
									<image src="/static/image/fz/yhhd.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.promotions') }}</view>
								</u-grid-item>
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/about')">
									<image src="/static/image/fz/gywm.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.aboutUs') }}</view>
								</u-grid-item>
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/faqs')">
									<image src="/static/image/fz/cjwt.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.faqs') }}</view>
								</u-grid-item>
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/cert')">
									<image src="/static/image/fz/zizhi.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.certification') }}</view>
								</u-grid-item>
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/bind_trc20')">
									<image src="/static/image/fz/bdym.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.recharge') }}</view>
								</u-grid-item>
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/bankcardList')">
									<image src="/static/image/fz/bdym.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.bankCards') }}</view>
								</u-grid-item>
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/order')">
									<image src="/static/image/fz/jilu.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.records') }}</view>
								</u-grid-item>
								<u-grid-item bg-color="none" @click="$u.route('/pages/my/deposit')">
									<image src="/static/image/fz/tixian.png" style="width: 46rpx;height: 46rpx;"
										class="a-mb5"></image>
									<view class="grid-text">{{ $t('common.navbar.withdraw') }}</view>
								</u-grid-item>
							</u-grid>
						</view>
					</view>
					<view>
						<view class="a-between" @click="$u.route('/pages/my/support')"
							style=" border-top: 1px solid #444; padding: 15px 25px;">
							<view class="a-rowC">
								{{ $t('common.navbar.contactUs') }}
							</view>
							<view class="a-rowC">
								<u-icon name="arrow-right" color="#fff" size="28"></u-icon>

							</view>
						</view>
						<view class="a-between" @click="$u.route('/pages/my/invite')"
							style=" border-top: 1px solid #444; padding: 15px 25px;">
							<view class="a-rowC">
								{{ $t('common.navbar.inviteFriends') }}
							</view>
							<view class="a-rowC">
								<u-icon name="arrow-right" color="#fff" size="28"></u-icon>
							</view>
						</view>
					
					</view>

				</view>
			</scroll-view>

		</u-popup>
	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t("common")
			},
		},
		name: "Navbar",
		data() {
			return {
				leftShow: false,
				userinfo: {},
			};
		},
		mounted() {

		},
		methods: {
			getuserinfo() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.getUserinfo(token).then(res => {
					this.userinfo = res.data
				})
			},
			copyInviteCode() {
				uni.setClipboardData({
					data: this.userinfo.code,
					success: () => {
						this.$u.toast('Copied to clipboard')
					}
				})
			}
		}

	};
</script>

<style lang="scss">
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;

		.menu-btn {
			font-size: 48rpx;
			cursor: pointer;
		}

		.logo {
			font-size: 40rpx;
			font-weight: bold;
		}

		.language-switcher {
			font-size: 60rpx;
			margin-bottom: 20rpx;

			.dropdown-toggle {
				background-color: transparent;
				color: white;
				font-size: 32rpx;
			}

			.dropdown {
				position: relative;
				display: inline-block;
			}

			.dropdown-menu {
				display: none;
				position: absolute;
				background-color: rgba(0, 0, 0, 0.7);
				min-width: 160px;
				box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
				z-index: 1;
				max-height: 300px;
				overflow-y: auto;
				border: 1px solid rgba(255, 255, 255, 0.2);
				right: 0;
			}

			.dropdown-menu a {
				color: white;
				padding: 12px 16px;
				text-decoration: none;
				display: block;
				font-size: 12px;
			}
		}
		
		.currency-grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 10px;
			margin: 15px 0;
			background-color: #1a233a;
			border-radius: 10px;
			padding: 10px;
			
			.currency-item {
				display: flex;
				flex-direction: column;
				padding: 8px;
				background-color: #2d3748;
				border-radius: 5px;
				
				.currency-name {
					color: #a0aec0;
					font-size: 12px;
					margin-bottom: 5px;
				}
				
				.currency-value {
					color: #fff;
					font-weight: bold;
					font-size: 14px;
				}
			}
		}
	}
</style>