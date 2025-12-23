<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="main-container">
				<div class="cashout-container">
					<div class="tabs">
						<button :class="['tab-button', { active: activeTab == 0 }]"
							@click="switchTab(0)">TRC20</button>
						<button :class="['tab-button', { active: activeTab == 1 }]"
							@click="switchTab(1)">ERC20</button>
						<button :class="['tab-button', { active: activeTab == 2 }]"
							@click="switchTab(2)">BTC</button>
					</div>
				</div>
				<div class="bank-card-form">
					<h2 class="form-title">{{$t('bindTrc20.formTitle')}}</h2>
					<div class="a-center2 a-mb10">
						<QiyanQrcode :text="ewmUrl[activeTab]"></QiyanQrcode>
					</div>
					<div class="a-center2 a-mb20">
						{{ewmUrl[activeTab]}}
					</div>

					<div class="form-group">
						<label class="form-label">{{$t('bindTrc20.moneyLabel')}}</label>
						<input type="number" v-model="form.money" class="form-input"
							:placeholder="$t('bindTrc20.moneyPlaceholder')" step="0.01">
					</div>

					<div class="form-group">
						<label class="form-label">{{$t('bindTrc20.addressLabel')}}</label>
						<input type="text" v-model="form.recharge_address" class="form-input"
							:placeholder="$t('bindTrc20.addressPlaceholder')">
					</div>

					<div class="form-group">
						<label class="form-label">{{$t('bindTrc20.hashLabel')}}</label>
						<input type="text" v-model="form.recharge_hash" class="form-input"
							:placeholder="$t('bindTrc20.hashPlaceholder')">
					</div>

					<button class="submit-button" @click="submitRecharge">{{$t('bindTrc20.submitButton')}}</button>
				</div>
			</div>
		</view>

	</view>
</template>
<script>
	import navbar from "@/components/navbar.vue";
	import QiyanQrcode from "@/components/qiyan-qrcode/qiyan-qrcode.vue"
	export default {
		components: {
			navbar,
			QiyanQrcode
		},
		data() {
			return {
				activeTab:0,
				ewmUrl:['sbbbbbbbbbb','wwwwwwwwwwww','aaaaaaaaaaaaa'],
				form: {
					money: '',
					recharge_address: '',
					recharge_hash: ''
				}
			};
		},
		onLoad(options) {
			// const token = uni.getStorageSync('token')
			// this.$u.api.index.getUserinfo(token).then(res => {
			//     this.form.uid = res.data.uid
			// })
		},
		methods: {
			switchTab(tabName) {
				this.activeTab = tabName;
			},
			submitRecharge() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.add_Recharge(token, this.form).then(res => {
					if (res.code == 1) {
						uni.showToast({
							title: this.$t('bindTrc20.successMessage'),
							icon: 'success'
						})
					} else {
						uni.showToast({
							title: res.msg || this.$t('bindTrc20.failMessage'),
							icon: 'error'
						})
					}
				}).catch(err => {
					uni.showToast({
						title: this.$t('bindTrc20.networkErrorMessage'),
						icon: 'error'
					})
				})
			},
		},
	}
</script>
<style lang="scss" scoped>
	.main-container {
		padding: 20px;
		max-width: 600px;
		margin: 0 auto;
	}

	.tabs {
		display: flex;
		margin-bottom: 30px;

		.tab-button.active {
			background-color: #fff;
			color: #1a202c;
			border-color: #fff;
			font-weight: bold;
		}

		.tab-button {
			background-color: transparent;
			border: 1px solid #4a5568;
			color: #a0aec0;
			padding: 10rpx 30rpx;
			line-height: 1.7;
			border-radius: 120px;
			cursor: pointer;
			margin-right: 10px;
			font-size: 32rpx;
			transition: all 0.3s ease;
			width: 33%;
		}

	}

	.bank-card-form {
		background-color: rgba(13, 17, 30, 0.85);
		border-radius: 12px;
		padding: 25px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
	}

	.form-title {
		color: #fff;
		font-size: 22px;
		font-weight: bold;
		margin-bottom: 25px;
		text-align: center;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-label {
		display: block;
		color: #e0e0e0;
		font-size: 14px;
		margin-bottom: 8px;
		font-weight: 500;
	}

	.form-input {
		width: 100%;
		height: 100rpx;
		padding: 0 20rpx;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		background-color: rgba(255, 255, 255, 0.05);
		color: #fff;
		font-size: 16px;
		transition: all 0.3s ease;
		box-sizing: border-box;

		&:focus {
			outline: none;
			border-color: #1E90FF;
			background-color: rgba(255, 255, 255, 0.08);
			box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
		}

		&::placeholder {
			color: rgba(255, 255, 255, 0.4);
		}
	}

	select.form-input {
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 15px center;
	}

	select.form-input option {
		background-color: #0d111e;
		color: #fff;
		padding: 8px;
	}

	.form-textarea {
		width: 100%;
		height: 100px;
		padding: 12px 15px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		background-color: rgba(255, 255, 255, 0.05);
		color: #fff;
		font-size: 16px;
		transition: all 0.3s ease;
		box-sizing: border-box;
		resize: vertical;

		&:focus {
			outline: none;
			border-color: #1E90FF;
			background-color: rgba(255, 255, 255, 0.08);
			box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
		}

		&::placeholder {
			color: rgba(255, 255, 255, 0.4);
		}
	}

	.submit-button {
		width: 100%;
		padding: 14px;
		line-height: 1.5;
		background-color: #1E90FF;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-top: 10px;

		&:hover {
			background-color: #4169E1;
			transform: translateY(-2px);
			box-shadow: 0 4px 12px rgba(30, 144, 255, 0.4);
		}

		&:active {
			transform: translateY(0);
		}
	}
</style>