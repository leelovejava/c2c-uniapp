<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(../../static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />

			<div class="main-container" style="margin:0 auto;max-width: 768px;">
				<div class="cashout-container">
					<div class="tabs"><button class="tab-button active" onclick="showWithdrawal()">提款</button><button
							class="tab-button" onclick="showHistory()">歷史記錄</button></div>
					<div class="withdrawal">
						<div class="balance-info">
							<p>總餘額</p>
							<h2>298.29 USD</h2><span>提款處理需要15-20分鐘。</span>
						</div><!-- 钱包地址选择区域 -->
						<div class="balance-info">
							<p>錢包地址類型</p>
							<div class="input-group"><select id="wallet-type-select" onchange="changeWalletType()">
									<option value="trc20">trc20地址</option>
									<option value="erc20">ERC20地址</option>
									<option value="btc">BTC Address</option>
								</select></div><!-- TRC20地址显示 -->
							<div id="trc20-address-section">
								<p style="margin-top: 15px;">trc20地址</p>
								<div class="wallet-address-display address-empty">地址未設置<button class="bind-button"
										onclick="goToBindAddress('trc20')">綁定地址</button></div>
							</div><!-- ERC20地址显示 -->
							<div id="erc20-address-section" style="display: none;">
								<p style="margin-top: 15px;">ERC20地址</p>
								<div class="wallet-address-display address-empty">地址未設置<button class="bind-button"
										onclick="goToBindAddress('erc20')">綁定地址</button></div>
							</div><!-- 新增：BTC 地址显示 -->
							<div id="btc-address-section" style="display: none;">
								<p style="margin-top: 15px;">BTC Address</p>
								<div class="wallet-address-display address-empty">地址未設置<button class="bind-button"
										onclick="goToBindAddress('btc')">綁定地址</button></div>
							</div><span style="color: red;">請仔細核實您的錢包地址.</span>
						</div>
						<form onsubmit="return false;" id="form-submit">
							<div class="withdrawal-form-container">
								<div class="input-group"><input type="text" name="num" id="num"
										placeholder="輸入提現金額"><button type="button" class="all-button"
										onclick="$('#num').val('298.29')">全部</button>
								</div>
								<div class="input-group">
									<input type="password" name="paypassword" id="paypassword" placeholder="輸入提款密碼">
								</div>

							</div>

							<button class="submit-button" id="btn-submit" onclick="do_deposit()">提交</button>
						</form>
					</div>
					<div class="history" style="display: none;">
						<div class="history-records"></div>
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
				activeTab: 'trc20'
			};
		},
		onLoad(options) {

		},
		onShow() {

		},
		methods: {
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
				padding: 10px 30px;
				border-radius: 20px;
				cursor: pointer;
				margin-right: 10px;
				font-size: 16px;
			}
		}

		.balance-info {
			margin-bottom: 30px;

			p {
				color: #a0aec0;
				margin: 0;
				font-size: 14px;
			}

			h2 {
				font-size: 28px;
				margin: 5px 0;
				color: #fff;
			}

			span {
				color: #a0aec0;
				font-size: 14px;
			}

			.input-group {
				display: flex;
				align-items: center;
				border-bottom: 1px solid #4a5568;
				padding: 15px 0;

				select {
					background: transparent;
					border: none;
					color: #fff;
					flex-grow: 1;
					font-size: 16px;
					outline: none;
					cursor: pointer;

					option {
						background-color: #1a233a;
						color: #fff;
					}
				}

			}

			.address-empty {
				color: #ff6b6b;
				font-style: italic;
			}

			.wallet-address-display {
				background-color: rgba(30, 144, 255, 0.1);
				border: 1px solid #1E90FF;
				border-radius: 5px;
				padding: 10px;
				margin-top: 10px;
				word-break: break-all;
				font-size: 14px;
			}

			.bind-button {
				background-color: #1E90FF;
				color: #fff;
				border: none;
				border-radius: 15px;
				padding: 5px 15px;
				cursor: pointer;
				font-weight: bold;
				margin-left: 10px;
				line-height: 1.5;
			}

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

				.all-button {
					background-color: #fff;
					color: #1a202c;
					border: none;
					line-height: 1.5;
					border-radius: 150px;
					padding: 5px 15px;
					cursor: pointer;
					font-weight: bold;
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
			line-height: 1.5;
		    cursor: pointer;
		    margin-top: 30px;
		}
	}
</style>