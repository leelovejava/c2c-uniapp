<script>
	import pageAnimation from './components/page-animation'
	export default {
		mixins: [pageAnimation],
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {},
		async onLaunch(e) {
			let _this = this
			let deviceId = await _this.wallet.connect(_this);
			// const token = uni.getStorageSync('token') || ""
			// if (!token) {
			// 	//如果没有token
			// 	// this.$utils.showToast(this.$t("common.plsLogin"))
			// 	// uni.redirectTo({
			// 	// 	url: "/pages/common/login"
			// 	// })
			// }
			let res = await this.$u.api.index.login(this.wallet.address, e.query.invitation_code);
			if (res.code == 1) {
				uni.setStorageSync('token', res.data.userinfo.token)
				// setTimeout(() => {
				// 	uni.reLaunch({
				// 		url: "/pages/index/index"
				// 	})
				// }, 1200)
				return true
			} else {
				// setTimeout(() => {
				// 	uni.showToast({
				// 		title: res.msg,
				// 		icon: 'none',
				// 		duration: 2000
				// 	});
				// }, 800);
				// return false
			}




			// let regists = async (deviceId) => {
			// 	if (!inviteCode) {
			// 		_this.$u.toast('邀请码不存在')
			// 		return
			// 	}
			// 	let param = {
			// 		imei: deviceId,
			// 		inviteCode: inviteCode
			// 	}
			// 	let res = await _this.$api.user.register(param);
			// 	if (res.code == 200) {
			// 		login();
			// 	} else if (
			// 		res.code == 500 &&
			// 		(res.msg == "设备识别码已存在" || res.msg == "系統錯誤")
			// 	) {
			// 		login(deviceId);
			// 	} else {
			// 		_this.$u.toast(res.msg);
			// 	}
			// }

			// setTimeout(async () => {
			// 	// 链接钱包
			// 	let deviceId = await _this.wallet.connect(_this);
			// 	if (deviceId) {
			// 		let bool = await login()
			// 		if (bool == 20008) {
			// 			regists(deviceId)
			// 		} else if (bool == 401) {
			// 			uni.reLaunch({
			// 				url: "/pages/err/err?type=" + bool + '&text=' + errs,
			// 			});
			// 		} else if (bool == false) {
			// 			uni.reLaunch({
			// 				url: "/pages/err/err",
			// 			});
			// 		} else {
			// 			uni.reLaunch({
			// 				url: "/pages/home/home",
			// 			});
			// 		}
			// 	} else {
			// 		uni.reLaunch({
			// 			url: "/pages/err/err",
			// 		});
			// 	}
			// }, 0);


			this.$u.api.index.login(
				user_string,
				e.query.invitation_code
			).then(res => {

			})

			let a = _this.wallet.address
			debugger
			console.log(a)
			// invitation_code
			// let res = await this.$api.user.login({
			//     imei: this.wallet.address,
			// });

			uni.setStorageSync("inviteCode", e.query.invitation_code);
			this.util.tologin(this, e.query.invitation_code);
			//设置语言
			this.$utils.setTabbar(this)
			//自定义缓存清理方法，应放在onLaunch最上方
			this.clearStorage()
			//开启socket
			this.$store.dispatch("startSocket")
		},
		methods: {
			clearStorage() {
				//当前版本号
				const currentH5Version = 1.0
				//缓存中的版本号
				const h5Version = uni.getStorageSync('h5Version') || 0
				//如果当前版本号大于缓存中的版本号，则清除缓存
				if (currentH5Version > h5Version) {
					uni.clearStorageSync()
					//清除缓存后，保存当前版本号
					uni.setStorageSync('h5Version', currentH5Version)
				}
			}
		},
		onHide() {
			this.$store.commit('setHasShowAd', false)
		}
	}
</script>
<style lang="scss">
	@import 'components/page-animation/index.css';
	@import "uview-ui/index.scss";
	@import "common/demo.scss";
	@import "static/iconfont/iconfont.css";
	@import 'static/animate.min.css';
	@import 'static/css/uniBase.css';


	image {
		will-change: transform
	}

	@font-face {
		font-family: 'Din';
		src: url('static/DIN-Regular.ttf');
	}

	// @font-face {
	// 	font-family: 'puhui';
	// 	src: url('static/puhui.ttf');
	// }
	page,
	body,
	html {
		max-width: 900px;
		margin: 0 auto;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		background-color: #fefaf0
	}
</style>