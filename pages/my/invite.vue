<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="promote-wrpa" >
				<div class="user" style="display: block;text-align: center;">
					<div id="qrcode" class="ewm qr">
						1222
					</div>
					<div>
						<h3>{{$t('invite.inviteCodeLabel')}}</h3>
						<h4 onclick="copy_txt('64WMV7')">64WMV7</h4>
					</div>
				</div>

				<div class="copy" style="display: flex; align-items: center; justify-content: center;cursor: pointer;"
					onclick="copy_txt('https://www.currencyexch.top/index/user/register/invite_code/64WMV7/lang/zh-cn.html')">
					{{$t('invite.copyInviteLink')}}
				</div>
			</div>
		</view>

	</view>
</template>
<script>
	import navbar from "@/components/navbar.vue";
	export default {
		components: {
			navbar // 键值对简写，等价于 Navbar: Navbar
		},
		data() {
			return {
				showLanguage: false,
			};
		},
		onLoad(options) {

		},
		onShow() {

		},
		methods: {
			getNocar() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.get_noc(token).then(res => {
					let lang = this.$store.state.lang
					this.news = [res.data[lang]]
				})
			},
		},
	}
</script>
<style lang="scss" scoped>
	.promote-wrpa {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 280px;
		max-width: 90vw;
		padding: 30px 20px;
		margin: 0;
		right: auto;
		bottom: auto;

		.user {
			margin-bottom: 25px;
		}

		#qrcode {
			background: white;
			padding: 15px;
			border-radius: 15px;
			margin: 0 auto 20px;
			display: inline-block;
			box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		}

		h3 {
			color: #ffffff;
			font-size: 18px;
			margin: 15px 0 10px 0;
			font-weight: 600;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		}

		h4 {
			background: rgba(255, 255, 255, 0.1);
			color: #64ffda;
			padding: 12px 20px;
			border-radius: 25px;
			margin: 10px 0;
			cursor: pointer;
			transition: all 0.3s ease;
			border: 1px solid rgba(100, 255, 218, 0.3);
			font-size: 16px;
			font-weight: 500;
			letter-spacing: 1px;
		}

		.copy {
			background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
			color: white;
			padding: 15px 25px;
			border-radius: 25px;
			cursor: pointer;
			transition: all 0.3s ease;
			font-size: 16px;
			font-weight: 600;
			margin-top: 20px;
			box-shadow: 0 6px 12px rgba(102, 126, 234, 0.3);
			border: none;
		}

	}
</style>