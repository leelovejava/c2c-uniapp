<template>
	<view class="err">
		<image class="bg2a" src="/static/err.png" mode="" />
		<view class="text2a">{{ text }}</view>
		<view class="btn2a" v-if="!type" @click="reconnect">Reconnect</view>
	</view>
</template>

<script>
	export default {
		name: "HaogeErr",
		data() {
			return {
				text: "Please Open with wallet!",
				type: null,
			};
		},

		onLoad(e) {
			if (e.text) {
				this.text = e.text;
				this.type = e.type;
			}
			console.log(e);
		},

		methods: {
			async reconnect() {
				let _this = this
				let inviteCode = uni.getStorageSync("inviteCode")
				let deviceId = await _this.wallet.connect(_this);
				if (!deviceId) {
					uni.reLaunch({
						url: "/pages/err/err",
					});
				}
				let res = await this.$u.api.index.login(this.wallet.address, inviteCode);
				if (res.code == 1) {
					this.$u.route('/')
					uni.setStorageSync('token', res.data.userinfo.token)
					return true
				}

			},
		},
	};
</script>

<style lang="scss" scoped>
	.err,
	.bg2a {
		width: 100%;
		height: 100vh;
	}

	.text2a {
		position: fixed;
		top: 50%;
		width: 100%;
		text-align: center;
		height: 42rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #ffffff;
		line-height: 42rpx;
		letter-spacing: 5rpx;
		text-shadow: 0px 21rpx 22rpx rgba(0, 0, 0, 0.38);
	}

	.btn2a {
		line-height: 1.5;
		position: fixed;
		top: 55%;
		text-align: center;
		height: 42rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #ffffff;
		line-height: 48rpx;
		letter-spacing: 5rpx;
		text-shadow: 0px 21rpx 22rpx rgba(0, 0, 0, 0.38);
		width: 230rpx;
		height: 58rpx;
		background: #746BE8;
		border-radius: 10rpx;
		left: 50%;
		margin-left: -115rpx;
	}
</style>