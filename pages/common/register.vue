<template>
	<view class="Body">
		<view class="PageBox">
			<view class="van-nav-bar van-nav-bar--fixed">
				<view class="van-nav-bar__content" style="background-color: #fcfaf5;">
					<view class="van-nav-bar__left" @click="back">
						<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
					</view>
					<view class="van-nav-bar__title van-ellipsis">{{i18n.register2[7]}}</view>
					<view>
					</view>
				</view>
			</view>

			<view class="ScrollBoxre loginpanel">
				<!-- <view class="regType" v-if="regtype == 1">
					<h2>{{i18n.register2[0]}}</h2>
					<view style="margin: 0px auto; text-align: right; width: 50%;">
						<button type="button" @click="regtype = 2" class="van-button van-button--default van-button--mini"
							style="font-size: 20px; color: rgb(255, 255, 255); background: rgb(19, 23, 26); border-color: rgb(19, 23, 26);">
							<view class="van-button__content">
								<span class="van-button__text">{{i18n.register2[1]}}</span>
							</view>
						</button>
					</view>
				</view>
				<view class="regType" v-if="regtype == 2">
					<button type="button" @click="regtype = 1" class="van-button van-button--default van-button--mini"
						style="font-size: 20px; color: rgb(255, 255, 255); background: rgb(19, 23, 26); border-color: rgb(19, 23, 26);">
						<view class="van-button__content">
							<span class="van-button__text">{{i18n.register2[0]}}</span>
						</view>
					</button>
					<view style="margin: 0px auto; text-align: right; width: 50%;">
						<h2>{{i18n.register2[1]}}</h2>
					</view>
				</view> -->

				<view class="reg_logo">
					<image src="@/static/image/logo.png" mode="widthFix" style="width: 230rpx; border-radius: 20rpx;">
					</image>
					<!-- <text>NYBAK</text> -->
				</view>

				<view class="reg_method">
					<view :class="regtype == 1 && 'curr_reg'" @tap="regtype = 1">{{i18n.register2[0]}}</view>
					<view :class="regtype == 2 && 'curr_reg'" @tap="regtype = 2">{{i18n.register2[1]}}</view>
				</view>

				<view class="van-cell van-field" style="height: 0px; width: 0px; padding: 0px; position: absolute;">
					<view class="van-cell__value van-cell__value--alone van-field__value">
						<view class="van-field__body">
							<input type="text" autocomplete="off" class="van-field__control">
						</view>
					</view>
				</view>
				<view class="van-cell van-field" style="height: 0px; width: 0px; padding: 0px; position: absolute;">
					<view class="van-cell__value van-cell__value--alone van-field__value">
						<view class="van-field__body">
							<input type="password" autocomplete="off" class="van-field__control">
						</view>
					</view>
				</view>


				<view class="van-cell van-cell--borderless van-field" v-if="regtype == 1">
					<view class="van-field__left-icon" style="color: #222; font-size: 28rpx;">
						{{i18n.register2[0]}}
					</view>
					<view class="van-cell__value van-cell__value--alone van-field__value">
						<view class="van-field__body">
							<view class="van-field__control van-field__control--custom">
								<input :placeholder="i18n.register.placeholder[0]" v-model="usestring"
									style="border: 0px; flex: 1 1 0%; width: 100px; background: transparent;">
							</view>
						</view>
					</view>
				</view>
				<view class="van-cell van-cell--borderless van-field" v-if="regtype == 2">
					<view class="van-field__left-icon" style="color: #222; font-size: 28rpx;">
						<!-- {{i18n.register2[6]}} -->
					</view>
					<view class="van-cell__value van-cell__value--alone van-field__value">
						<view class="van-field__body">
							<view class="van-field__control van-field__control--custom" style="width: 100%;">
								<view class="van-dropdown-menu">
									<view class="van-dropdown-menu__bar">
										<view class="van-dropdown-menu__item">
											<span class="van-dropdown-menu__title">
												<view class="van-ellipsis" style="color: #222;">
										<!-- 			<text style="margin-right: 10rpx;">{{area_name}}</text>
													<text>{{area_code}}</text> -->
													
													<text style="margin-right: 10rpx;">Spain</text>
													<text>+852</text>
												</view>
											</span>
										</view>
									</view>
									<view class="van-dropdown-item van-dropdown-item--down"
										style="top: 0px; display: none;">

									</view>
								</view>
								<input type="tel" :placeholder="i18n.register2[2]" v-model="usestring"
									style="border: 0px; flex: 1 1 0%; width: 100px; background: transparent;">
							</view>
						</view>
					</view>
				</view>
				<view class="van-cell van-cell--borderless van-field">
					<view class="van-field__left-icon" style="color: #222; font-size: 28rpx;">
						{{i18n.register2[5]}}
					</view>
					<view class="van-cell__value van-cell__value--alone van-field__value">
						<view class="van-field__body">
							<input type="tel" v-model="code" inputmode="numeric" autocomplete="off"
								:placeholder="i18n.register.placeholder[1]" class="van-field__control">
							<view class="van-field__button">
								<button type="button" @click="huoqu"
									class="van-button van-button--default van-button--mini van-button--round"
									style="color: #222; background: #f7ce46; border-color: #f7ce46; border-radius: 6rpx; font-size: 22rpx; width: 160rpx; height: 60rpx;">
									<view class="van-button__content"><span class="van-button__text"
											v-if="!hasSend">{{i18n.register.text[2]}}</span><span
											class="van-button__text" v-else>{{seconds}}s</span></view>
								</button>
							</view>
						</view>
					</view>
				</view>
				<view class="van-cell van-cell--borderless van-field">
					<view class="van-field__left-icon" style="color: #222; font-size: 28rpx;">
						{{i18n.register2[4]}}
					</view>
					<view class="van-cell__value van-cell__value--alone van-field__value">
						<view class="van-field__body">
							<view class="van-field__control van-field__control--custom">
								<input type="password" :placeholder="i18n.register.placeholder[2]" v-model="password"
									style="border: 0px; flex: 1 1 0%; width: 100px; background: transparent;">
							</view>
						</view>
					</view>
				</view>
				<!-- 	<view class="van-cell van-cell--borderless van-field">
					<view class="van-field__left-icon">
						<view class="van-field__left-icon" style="color: #222; font-size: 28rpx;">
							{{i18n.register2[4]}}
						</view>
					</view>
					<view class="van-cell__value van-cell__value--alone van-field__value">
						<view class="van-field__body">
							<view class="van-field__control van-field__control--custom">
								<input type="password" :placeholder="i18n.register.placeholder[3]" v-model="re_password"
									style="border: 0px; flex: 1 1 0%; width: 100px; background: transparent;">
							</view>
						</view>
					</view>
				</view> -->
				<view class="van-cell van-cell--borderless van-field">
					<view class="van-field__left-icon" style="color: #222; font-size: 28rpx;">
						{{i18n.register2[3]}}
					</view>
					<view class="van-cell__value van-cell__value--alone van-field__value">
						<view class="van-field__body">
							<view class="van-field__control van-field__control--custom">
								<input type="text" :placeholder="i18n.register.placeholder[4]" v-model="invitecode"
									style="border: 0px; flex: 1 1 0%; width: 100px; background: transparent;">
							</view>
						</view>
					</view>
				</view>

				<view style="padding: 40rpx 20rpx 0 20rpx; text-align: center;">
					<p class="btn" @click="reg">{{i18n.register.text[4]}}</p>
					<text class="href" @click="dumprun('/pages/common/register')">{{i18n.register.label[2]}}</text>
				</view>
				
				<view style="display: flex; justify-content: center; margin-top: 20rpx; font-size: 22rpx;"
				@tap="dumprun('/pages/common/login')"
				>
					<text>{{i18n.register.label[1]}}</text>
				</view>
				<!-- 	<view id="Service" @click="dumprun('/pages/index/serviceCenter')">
					<image src="../../static/image/news/customer.png" mode="widthFix"></image>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				regtype: 1,
				area_code: null,
				area_name: null,
				usestring: '',
				password: '',
				re_password: "",
				invitecode: "",
				code: "",
				// 是否已发送验证码
				hasSend: false,
				seconds: 120,
				secondsInterval: null,
			};
		},
		onLoad(options) {
			const {
				pid
			} = options
			this.invitecode = pid

		},
		onShow() {
			// this.area_code = uni.getStorageSync('area_code') || '+351'
			this.area_code = '+852'
			this.area_name = uni.getStorageSync('name_en') || 'Portugal'
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
			reg() {
				let {
					regtype,
					usestring,
					code,
					invitecode,
					password,
					re_password,
					i18n,
					area_code
				} = this
				//判断密码
				if (password.length < 6) {
					this.$utils.showToast(this.i18n.register.placeholder[8])
					return false
				}
				//判断两次密码是否一致
				// if (password != re_password) {
				// 	this.$utils.showToast(this.i18n.register.placeholder[5])
				// 	return false
				// }
				if (this.regtype == 2) {
					usestring = area_code + '' + usestring
				}
				this.$u.api.index.register(
					usestring,
					password,
					invitecode,
					code
				).then(res => {
					this.$utils.showToast(res.msg)
					// 跳转至登录页面
					setTimeout(() => {
						uni.redirectTo({
							url: '/pages/common/login'
						})
					}, 300)
				})
			},
			//发送验证码
			huoqu() {
				// 设置节流,防止频繁点击
				this.$u.throttle(() => {
					const {
						regtype,
						usestring,
						area_code,
						hasSend,
						i18n
					} = this
					let mobile = ''
					if (hasSend) return
					//如果是手机
					if (regtype == 2) {
						if (!this.$u.test.number(usestring) || !usestring) {
							this.$utils.showToast(this.i18n.register.placeholder[7])
							return false
						}
					} else {
						//如果是邮箱
						if (!this.$u.test.email(usestring) || !usestring) {
							this.$utils.showToast(this.i18n.register.placeholder[7])
							return false
						}
					}
					if (regtype == 2) {
						mobile = area_code + '' + usestring
					} else {
						mobile = usestring
					}
					//发送接口
					this.$u.api.index.send_email_mobile(mobile).then(res => {
						this.$utils.showToast(res.msg)
						//倒计时
						this.hasSend = true
						this.secondsInterval = setInterval(() => {
							this.seconds = this.seconds - 1
							if (this.seconds == 0) {
								clearInterval(this.secondsInterval)
								this.hasSend = false
								this.seconds = 120
							}
						}, 1000)
					})
				}, 1000)
			},
			dumprun(url) {
				uni.navigateTo({
					url
				})
			},
		},
		computed: {
			i18n() {
				return this.$t("common")
			},
		}
	}
</script>

<style>
	.PageBox {
		color: #635327;
		padding: 0;
		height: auto;
		background-color: #fcfaf4
	}

	.regType {
		margin: 20px;
		margin-top: 0;
		width: 90%;
		margin-bottom: 0;
		color: #0076fa;
		display: flex;
		padding: 10px
	}

	.van-dropdown-menu .van-dropdown-menu__bar {
		height: auto;
		box-shadow: none;
		background: transparent
	}

	.van-dropdown-menu .van-dropdown-menu__title {
		padding: 0 10px 0 0;
		margin-right: 10px;
		color: #d7d7d7
	}

	.van-field .van-dropdown-menu>>>.van-dropdown-item__content ul li {
		padding: 0 15px;
		height: 254px !important;
		color: #eee
	}

	.van-dropdown-menu .van-dropdown-item__content ul li {
		padding: 4px 0;
		width: 100%;
		font-size: 14px;
		background-color: #191c23;
		color: #eee
	}

	.van-dropdown-menu .van-dropdown-item__content ul li.on {
		color: #eee
	}

	.van-dropdown-menu .van-dropdown-item__content ul li span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}

	.van-dropdown-menu .van-dropdown-item__content ul li+li {
		color: #333
	}

	.BrowserTips {
		background-color: rgba(0, 0, 0, .8);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		text-align: right;
		z-index: 99999
	}

	.van-nav-bar .van-nav-bar__text {
		color: #999
	}

	.slidercaptcha .card-body {
		padding: 1rem
	}

	.slidercaptcha canvas:first-child {
		border-radius: 4px;
		border: 1px solid #e6e8eb
	}

	.slidercaptcha.card .card-header {
		background-image: none;
		background-color: rgba(0, 0, 0, .03)
	}

	.refreshIcon {
		top: -54px
	}

	.href {
		color: #b5b5b5
	}

	.header_bg {
		width: 100%;
		z-index: 0
	}

	.register_title {
		font-size: 27px;
		color: #f46926;
		z-index: 10;
		padding-top: 210px;
		padding-left: 50px;
		font-family: Alibaba
	}

	.logo {
		width: 100%;
		font-size: 25px;
		color: #fff;
		text-align: left;
		margin-top: 30px;
		margin-left: 30px
	}

	.loginpanel {
		min-height: 580px;
		height: auto;
		background-size: cover;
		width: 100%;
		padding-bottom: 30px
	}

	.logo image {
		margin: 20px auto;
		text-align: center;
		width: 200px
	}

	.van-form {
		padding: 0 35px
	}

	.van-cell--borderless {
		padding: 20rpx;
		width: 90%;
		background-color: #fff;
		border-radius: 5px;
		overflow: hidden;
		color: #fff;
		margin-left: 30px;
	}

	.van-cell--borderless .van-icon {
		font-size: 25px !important;
		color: #fff !important;
		margin-top: 8px
	}

	.van-cell--borderless .van-field__right-icon .van-icon-closed-eye {
		font-size: 21px !important;
		color: #fff !important;
		margin-right: -10px
	}

	.van-button--danger {
		max-width: 200px;
		margin: auto;
		font-family: Alibaba;
		font-size: 15px !important;
		font-weight: 700;
		background: linear-gradient(90deg, #fff, #fff);
		color: #ccc;
		border-radius: 1.2rem;
		height: 46px
	}

	.van-cell--borderless .van-field__right-icon .van-icon-eye {
		font-size: 18px !important;
		color: #fff !important;
		margin-right: -10px
	}

	.van-cell--borderless .van-field__control {
		color: #fff !important;
		padding-left: 4px;
		text-align: right;
	}

	.van-nav-bar .van-nav-bar__text {
		color: #333;
		font-size: 15px;
		font-family: Alibaba;
		position: relative
	}

	.Site .van-nav-bar .van-icon {
		color: #333
	}

	.van-search__content {
		padding: 0
	}

	.van-search__content .van-cell {
		margin: 0;
		padding-left: 15px
	}

	.PageBox .van-overlay {
		background-color: transparent
	}

	.goLo a {
		color: #fe889d
	}

	.PageBox .van-popup ul>li {
		font-size: 17px !important;
		display: flex;
		justify-content: space-between
	}

	.PageBox .van-popup .van-search__action view {
		width: 22px;
		display: flex;
		align-items: center
	}

	.van-search__content .van-cell {
		height: 35px;
		border-radius: 1rem
	}

	.van-search__content .van-icon {
		display: none
	}

	.van-search {
		padding: 20px 0 6px
	}

	.PageBox .van-search__action view image {
		width: 100%
	}

	.van-cell .van-field__control::-webkit-input-placeholder,
	.van-cell .van-field__control>input::-webkit-input-placeholder {
		color: #939393 !important;
		font-size: 19px;
		font-family: Alibaba
	}

	.van-cell .van-field__control::-moz-placeholder,
	.van-cell .van-field__control>input::-moz-placeholder {
		color: #939393 !important;
		font-size: 19px;
		font-family: Alibaba
	}

	.van-cell .van-field__control:-ms-input-placeholder,
	.van-cell .van-field__control>input::-ms-input-placeholder {
		color: #939393 !important;
		font-size: 18px;
		font-family: Alibaba
	}

	.van-cell .van-cell__value,
	.van-cell .van-dropdown-menu,
	.van-cell .van-field__body,
	.van-cell .van-field__control,
	.van-cell input {
		height: 100%;
	}

	.van-cell input {
		color: #fff !important;
		padding-left: 7px !important;
		height: 100%;
		font-size: 18px
	}

	.van-cell .van-ellipsis {
		font-size: 18px;
		line-height: 45px;
		color: #fff
	}

	.van-cell .van-dropdown-menu__title:after {
		background-size: 100% 100%;
		width: 9px;
		height: 5px;
		border: none;
		transform: rotate(0deg);
		top: 62%;
		right: -7px
	}

	.goLo {
		text-align: left;
		color: #4e51bf;
		margin-top: 20px;
		font-size: 15px;
		font-family: Alibaba
	}

	.van-nav-bar .van-nav-bar__text:after {
		content: "";
		position: absolute;
		background-size: 100% 100%;
		width: 9px;
		height: 5px;
		top: 9px;
		right: -15px
	}

	.Site .van-nav-bar__right {
		padding-right: 40px
	}

	.van-cell .van-field__button .van-button--info {
		background-color: #ccc;
		border: none
	}

	.PageBox text:link {
		color: #635327
	}

	.btn {
		width: 90%;
		padding: 30rpx 80rpx;
		border-radius: 5px;
		background-color: #fcd34b;
		color: #222;
		font-size: 18px;
		text-align: center;
		margin: 15px 30px 30px
	}

	.reg_method {
		margin-bottom: 80rpx;
		display: flex;
		justify-content: space-around;

		&>view {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 300rpx;
			height: 70rpx;
			background-color: #fff;
			cursor: pointer;
		}

		.curr_reg {
			background-color: #f7ce46;
		}
	}

	.reg_logo {
		margin: 140rpx 0 60rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 65rpx;
		color: #666;
		font-weight: 700;

		&>text {
			margin-left: 20rpx;
		}
	}
</style>