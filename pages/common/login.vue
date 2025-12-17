<template>
	<view class="Body loign">
		<view class="PageBox">
			<view class="header_bg">
				<view style="text-align: right; font-size: 16px; padding: 5px;">
					<view class="van_row">
						<!-- @click="open" -->
						<view class="" style="text-align: left;background-color:#ffff" > 
							<!-- <u-icon name="download" color="#222" size="32rpx"></u-icon>
							<text>{{i18n.common5[6]}}</text> -->
						</view>
						<view class="van-col " 
						@tap="dumprun('/pages/setting/language')"
						>
							{{i18n.language}}
						</view>
					</view>
				</view>
			</view>
			<view class="login_logo">
				<image src="@/static/image/logo.png" mode="widthFix" 
				style="width: 300rpx; border-radius: 20rpx;">
				</image>
				<!-- <text>NYBAK</text> -->
			</view>
			<view class="loginpanel" style="height: calc(100% - 330rpx);">
				<view style="padding-top: 20px;">
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
					<view class="input van-cell van-cell--borderless van-cell--large van-field">
						<view class="van-field__left-icon">
							<!-- <i class="van-icon van-icon-manager"></i> -->
							<u-icon name="email" color="#666" size="38rpx"></u-icon>
						</view>
						<view class="van-cell__value van-cell__value--alone van-field__value">
							<view class="van-field__body">
								<input type="text" autocomplete="off" v-model="user_string"
									:placeholder="i18n.login.placeholder[0]" class="van-field__control">
							</view>
						</view>
					</view>
					<view class="input van-cell van-cell--borderless van-cell--large van-field">
						<view class="van-field__left-icon" style="margin-top: 20rpx;">
							<i class="van-icon">
								<!-- <image src="../../static/image/news/pwd.png" class="van-icon__image"></image> -->
								<u-icon name="lock" color="#666" size="38rpx"></u-icon>
							</i>
						</view>
						<view class="van-cell__value van-cell__value--alone van-field__value">
							<view class="van-field__body">
								<input type="password" autocomplete="off" v-model="password"
									:placeholder="i18n.login.placeholder[1]" class="van-field__control">
								<!-- <view class="van-field__right-icon"> -->
									<!-- <i class="van-icon van-icon-closed-eye"></i> -->
								<!-- </view> -->
							</view>
						</view>
					</view>
					<view style="text-align: right; margin-top: 20px; margin-right: 20px; color: #222;"
					@tap="dumprun('/pages/setting/change-password')"
					>
						<text>{{i18n.login.default[2]}}</text>
					</view>
				</view>
				<view style="padding: 10px 0px; text-align: center;">
					<p class="btn" @click="login">{{i18n.login.label[1]}}</p>
					<view class="foo">
						{{i18n.login.default[0]}} | <text class="href"
							@click="dumprun('/pages/common/register')">{{i18n.login.default[1]}}</text>
					</view>
				</view>
			<!-- 	<view id="Service" @click="dumprun('/pages/index/serviceCenter')">
					<image src="../../static/image/news/customer.png" mode="widthFix"></image>
					{{i18n.common[0]}}
				</view> -->
			</view>
		</view>
		<!-- 选择语言的popup -->
		<u-popup v-model="showLanguage" mode="bottom" length="60%" :title="i18n.selectLang"
			contentBackgroundColor="white">
			<view class="popup-list">
				<view class="popup-list-item" v-for="item in langs" :key="item.value" :class="{active : item.selected}" @click="setLang(item)">
					<text>{{item.name}}</text>
				</view>
			</view>
		</u-popup>

	</view>
</template>
<script>
	import langslist from "@/common/data.js"
	export default {
		data() {
			return {
				password: uni.getStorageSync('loginPassword') || '',
				user_string: uni.getStorageSync('loginAccount') || '',
				showLanguage: false,
				langs: langslist,
				rememberPassword: uni.getStorageSync('rememberPassword') || false,
				google_code: ''
			};
		},
		onLoad() {
			// console.log(this.$store.state.lang);
			// console.log(JSON.stringify(this.$t("common")));
			
			// const _this = this
			// uni.setNavigationBarTitle({
			// 	title: _this.$t("common.login")
			// })
		},
		onShow() {
			this.setDefaultLang()
			this.$u.api.index.shoujia().then(res => {
				uni.setStorageSync('shoujia', res.data.shoujia)
			})
		},
		computed: {
			i18n() {
				return this.$t("common")
			},
			// setting() {
			// 	return this.$t("setting")
			// }
		},
		methods: {
			setDefaultLang() {
				let langsData = this.langs.map(el => {
					el.selected = false
					return el
				})
				// var langsData = this.langs;
				const lang = this.$store.state.lang || 'eng'
				const has = langsData.findIndex(item => item.value == lang)
				langsData[has].selected = true
				this.langs = langsData
			},
			open() { 
				this.$u.api.index.downurl().then(res => {
					window.location.href = res.data;
				})
			},
			dumprun(url) {
				// this.$u.api.setting.getUserStatus(this.ciaddress).then(res => {
				// if (res.code == 0) {
				// 	this.getApprove()
				// } else {
				uni.navigateTo({
					url
				})
				// }
				// })
			},
			//设置语言
			setLang(item) {
				let langs = this.langs.map(el => {
					el.selected = false
					if (el.value == item.value) el.selected = true
					return el
				})
				this.langs = langs
				this._i18n.locale = item.value
				this.lang = item
				uni.setStorageSync('lang', item.value);
				this.$store.commit('setLangyan', item.value);

				setTimeout(() => {
					this.showLanguage = false
				}, 200)
			},
			login() {
				let {
					user_string,
					password,
				} = this
				// user_string = user_string.trim()
				if (!user_string) {
					this.$utils.showToast(this.i18n.login.placeholder[0])
					return false
				}
				if (!password) {
					this.$utils.showToast(this.i18n.login.placeholder[1])
					return false
				}
				this.$u.api.index.login(
					user_string,
					password
				).then(res => {
					//登陆成功，延时1.2s跳转
					this.$utils.showToast(this.i18n.login.label[0])
					//如果勾选了记住密码，则储存
					if (this.rememberPassword) {
						uni.setStorageSync('loginAccount', user_string)
						uni.setStorageSync('loginPassword', password)
					} else {
						uni.removeStorageSync('loginAccount')
						uni.removeStorageSync('loginPassword')
					}
					uni.setStorageSync('token', res.data.userinfo.token)
					setTimeout(() => {
						uni.reLaunch({
							url: "/pages/index/index"
						})
					}, 1200)
				})
			},
			rememberPasswordFunc() {
				this.rememberPassword = !this.rememberPassword
				uni.setStorageSync('rememberPassword', this.rememberPassword)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.loign{
		.PageBox{
			background-color: #e6f8f3;
			height: auto;
			.header_bg{
				background-color: #fff;
				
				.van_row{
					padding: 0 30rpx;
					display: flex;
					font-size: 28rpx;
					color: #222;
					font-weight: 700;
					justify-content: space-between;
					& > view:nth-child(1){
						padding: 10rpx 20rpx;
						background-color: #f4f4f4;
						border-radius: 30rpx;
						& > text{
							margin-left: 10rpx;
						}
					}
					& > view:nth-child(2){
						display: flex;
						align-items: center;
					}
				}
			}
		}
		.login_logo{
			margin: 100rpx 0 20rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 65rpx;
			color: #666;
			font-weight: 700;
			& > text {
				margin-left: 20rpx;
			}
		}
		
		.btn{
			width: 91%;
			height: 90rpx;
			line-height: 70rpx;
			color: #222;
			font-size: 30rpx;
			background-color: #f7ce46;
		}
		.foo{
			color: #000;
			& > text {
				color: #000;
			}
		}
		
		.van-field__left-icon{
			margin-top: 28rpx;
		}
		
		.van-cell--borderless.input{
			padding-left: 40rpx;
			width: 87%;
			height: 90rpx;
		}
	}
	
	
	// 弹出层列表
	.popup-list {
		.popup-list-item {
			height: 96rpx;
			line-height: 96rpx;
			padding: 0 30rpx;
			@extend .font-size-32;
			position: relative;
			display: flex;
			align-items: center;

			&:before {
				content: "";
				position: absolute;
				left: 30rpx;
				right: 30rpx;
				bottom: 0;
				height: 2rpx;
				background-color: #efefef;
			}

			&.active {
				background-color: #f2f6ff;

				&:after {
					content: "";
					width: 36rpx;
					height: 20rpx;
					background-image: url('./../../static/image/icon/select.png');
					background-size: cover;
					position: absolute;
					right: 80rpx;
					top: 50%;
					margin-top: -10rpx;
				}
			}
		}
	}
</style>