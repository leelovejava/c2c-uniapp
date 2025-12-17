<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(../../static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />

			<div class="main-container">
				<div class="cashout-container"><!-- 选项卡导航 -->
					<div class="tabs"><button :class="['tab-button', { active: activeTab === 'trc20' }]"
							@click="switchTab('trc20')">TRC20</button><button
							:class="['tab-button', { active: activeTab === 'erc20' }]"
							@click="switchTab('erc20')">ERC20</button><button
							:class="['tab-button', { active: activeTab === 'btc' }]"
							@click="switchTab('btc')">BTC</button></div>
					<div :class="['tab-content', { active: activeTab === 'trc20' }]" id="trc20-tab">
						<div class="balance-info">
							<h3>TRC20地址</h3>
						</div>
						<div class="withdrawal-form-container">
							<div class="input-group">
								<input type="text" v-model="form.address"
									placeholder="請輸入TRC20地址"></div>

							<!-- <div class="input-group">
								<input type="text" name="trc20_confirm" id="trc20_confirm"
									placeholder="Please enter it again">
							</div> -->
							<!-- <span style="color: red;">請仔細核實您的錢包地址.</span>
							<div class="input-group transaction-password-group"><input type="password" name="pwd2"
									id="pwd2_trc20" placeholder="请输入交易密码"></div> -->
						</div>
						<button class="submit-button" @click="subaddRecharge">提交</button>
					</div>
					<div :class="['tab-content', { active: activeTab === 'erc20' }]" id="erc20-tab">
						<div class="balance-info">
							<h3>ERC20地址</h3>
						</div>
						<form onsubmit="return false;" id="form-erc20">
							<div class="withdrawal-form-container">
								<div class="input-group"><input type="text" name="erc20" id="erc20" value=""
										placeholder="請輸入ERC20地址"></div>
								<div class="input-group"><input type="text" name="erc20_confirm" id="erc20_confirm"
										placeholder="Please enter it again"></div><span
									style="color: red;">請仔細核實您的錢包地址.</span><!-- 提现密码字段，未绑定时显示 -->
								<div class="input-group transaction-password-group"><input type="password" name="pwd2"
										id="pwd2_erc20" placeholder="请输入交易密码"></div>
							</div><button class="submit-button" id="btn-submit-erc20">提交</button>
						</form>
					</div>
					<div :class="['tab-content', { active: activeTab === 'btc' }]" id="btc-tab">
						<div class="balance-info">
							<h3>BTC address</h3>
						</div>
						<form onsubmit="return false;" id="form-btc">
							<div class="withdrawal-form-container">
								<div class="input-group"><input type="text" name="btc" id="btc" value=""
										placeholder="Please enter the BTC address"></div>
								<div class="input-group"><input type="text" name="btc_confirm" id="btc_confirm"
										placeholder="Please enter it again"></div><span
									style="color: red;">請仔細核實您的錢包地址.</span><!-- 提现密码字段，未绑定时显示 -->
								<div class="input-group transaction-password-group"><input type="password" name="pwd2"
										id="pwd2_btc" placeholder="请输入交易密码"></div>
							</div><button class="submit-button" @click="subaddRecharge">提交</button>
						</form>
					</div>
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
			activeTab: 'trc20',
			form: {
				address: '',
			}
		};
	},
	onLoad(options) {

	},
	onShow() {
		this.isBind()
	},
	methods: {
		subaddRecharge() {
			const token = uni.getStorageSync('token')
			// 	walletinfo: (token) => vm.$u.post("/wallet/info", {token}),
			// walletadd: (token) => vm.$u.post("/wallet/add", {token}),
			// walletedit: (token) => vm.$u.post("/wallet/edit", {token}),
			this.$u.api.setting.walletadd(token,this.form).then(res => {
				if (res.code == 1) {
					this.isBindBtn = false
					for (const key in res.data) {
						if (this.bindForm.hasOwnProperty(key)) {
							this.bindForm[key] = res.data[key];
						}
					}
				}
			}).catch(() => {
				this.isBindBtn = true
			})
		},
		isBind() {
			const token = uni.getStorageSync('token')
			this.$u.api.setting.walletinfo(token).then(res => {
				if (res.code == 1) {
					
				}
			}).catch(() => {
				this.isBindBtn = true
			})
		},
		switchTab(tabName) {
			this.activeTab = tabName;
		},
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
.cashout-container {
	padding: 20px;
	color: #fff;
	background-color: #0d111e;
	font-family: sans-serif;
	min-height: calc(100vh - 50px);

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

	.tab-content {
		display: none;

		&.active {
			display: block;
		}
	}

	.balance-info {
		margin-bottom: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.withdrawal-form-container {
		background-color: #1a233a;
		border-radius: 10px;
		padding: 10px 20px;

		.input-group {
			display: flex;
			align-items: center;
			border-bottom: 1px solid #4a5568;
			padding: 15px 0;

			input {
				background: transparent;
				border: none;
				color: #fff;
				flex-grow: 1;
				font-size: 16px;
				outline: none;
			}
		}
	}

	.submit-button {
		background-color: #1E90FF;
		color: #1a202c;
		border: none;
		border-radius: 10px;
		padding: 15px;
		width: 100%;
		font-size: 18px;
		font-weight: bold;
		cursor: pointer;
		margin-top: 30px;
		line-height: 1.4;
	}
}
</style>