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
				<image src="@/static/image/fz/logo3.png" mode="widthFix" 
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
								<input type="text" autocomplete="off" v-model="usestring"
									:placeholder="i18n.register.placeholder[0]" class="van-field__control">
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
									:placeholder="i18n.register.placeholder[2]" class="van-field__control">
							</view>
						</view>
					</view>
					<!---邀请码-->
					<view class="input van-cell van-cell--borderless van-cell--large van-field">
						<view class="van-field__left-icon" style="margin-top: 20rpx;">
							<u-icon name="account" color="#666" size="38rpx"></u-icon>
						</view>
						<view class="van-cell__value van-cell__value--alone van-field__value">
							<view class="van-field__body">
								<input type="text" autocomplete="off" v-model="invitation_code"
									:placeholder="i18n.register.placeholder[4]" class="van-field__control">
							</view>
						</view>
					</view>
				</view>
				<view style="padding: 10px 0px; text-align: center;">
					<p class="btn" @click="reg">{{i18n.register.text[4]}}</p>
					<view class="foo">
						{{i18n.register.label[0]}} | <text class="href"
							@click="dumprun('/pages/common/login')">{{i18n.register.label[1]}}</text>
					</view>
				</view>
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
				usestring: '',
				password: '',
				invitation_code: '',
				showLanguage: false,
				langs: langslist,
			};
		},
		onShow() {
			this.setDefaultLang()
		},
		computed: {
			i18n() {
				return this.$t("common")
			},
		},
		methods: {
			setDefaultLang() {
				let langsData = this.langs.map(el => {
					el.selected = false
					return el
				})
				const lang = this.$store.state.lang || 'eng'
				const has = langsData.findIndex(item => item.value == lang)
				langsData[has].selected = true
				this.langs = langsData
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
			reg() {
				let {
					usestring,
					password,
					invitation_code,
				} = this
				//判断密码
				if (password.length < 6) {
					this.$utils.showToast(this.i18n.register.placeholder[8])
					return false
				}
				//判断邀请码
				if (!invitation_code) {
					this.$utils.showToast(this.i18n.register.placeholder[4])
					return false
				}
				this.$u.api.index.register(
					usestring,
					password,
					invitation_code,
					""
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
			dumprun(url) {
				uni.navigateTo({
					url
				})
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Body {
		background-color: #121212;
		background-image: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
		height: 100vh;
		overflow: hidden;
	}
	
	.loign{
		.PageBox{
			background-color: #121212;
			height: 100vh;
			.header_bg{
				background-color: #121212;
				
				.van_row{
					padding: 40rpx 30rpx 0;
					display: flex;
					font-size: 28rpx;
					color: #fff;
					font-weight: 700;
					justify-content: flex-end;
					& > view:nth-child(1){
						display: none;
					}
					& > view:nth-child(2){
						display: flex;
						align-items: center;
						background-color: rgba(255, 255, 255, 0.1);
						padding: 10rpx 20rpx;
						border-radius: 30rpx;
					}
				}
			}
		}
		.login_logo{
			margin: 120rpx 0 60rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 65rpx;
			color: #fff;
			font-weight: 700;
			& > text {
				margin-left: 20rpx;
			}
		}
		
		.btn{
			width: 91%;
			height: 90rpx;
			line-height: 90rpx;
			color: #121212;
			font-size: 30rpx;
			background-color: #fff;
			border-radius: 45rpx;
			font-weight: 700;
			margin: 40rpx auto 20rpx;
			box-shadow: 0 2rpx 10rpx rgba(255, 255, 255, 0.2);
		}
		.foo{
			color: #aaa;
			& > text {
				color: #fff;
				text-decoration: underline;
			}
		}
		
		.van-field__left-icon{
			margin-top: 0;
			color: #fff !important;
			display: flex;
			align-items: center;
		}
		
		.van-field__body {
			display: flex;
			align-items: center;
			height: 100%;
		}
		
		.van-cell--borderless.input{
			padding-left: 40rpx;
			width: 87%;
			height: 90rpx;
			background-color: rgba(255, 255, 255, 0.1);
			border-radius: 45rpx;
			margin: 20rpx auto;
			box-shadow: 0 2rpx 5rpx rgba(0, 0, 0, 0.3);
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		
		.van-field__value {
			flex: 1;
			padding-left: 20rpx;
			min-width: 0;
		}
		
		.van-field__control {
			color: #fff !important;
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		
		.van-field__control::-webkit-input-placeholder {
			color: rgba(255, 255, 255, 0.5) !important;
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