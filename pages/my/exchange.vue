<template>
	<view class="">
		<view class="a-pr a-crfff" style="min-height: 100vh; z-index: 3;">
			<navbar />
			<div class="main-content">
				<div class="info-card" style="color: white;">
					<div class="info-item"><span>{{ $t('common.exchange.infoCard.totalOrders') }}</span>
						<span>
							{{ exchangeinfo.today_orders }}
						</span>
					</div>
					<div class="info-item"><span>{{ $t('common.exchange.infoCard.totalProfit') }}</span><span>
							{{ exchangeinfo.expected_profit }}
							USD</span>
					</div>
					<div class="info-item"><span class="info-label">{{ $t('common.exchange.infoCard.totalBalance') }}</span>
						<div class="balance-container">
							<span class="balance-amount">
								{{ exchangeinfo.balance }}
							</span>
							<span class="currency-unit">USD</span>
						</div>
					</div>
					
					<div class="info-item">
						<span>{{ $t('common.exchange.infoCard.processing') }}</span>
						<span>
							{{ exchangeinfo.expected_profit }} USD
						</span>
					</div>
					<div class="orders">
						{{ $t('common.exchange.infoCard.orders') }} ({{ exchangeinfo.today_orders }}/{{ exchangeinfo.daily_limit }})
					</div>
          <div class="info-item">
            <span>{{ $t('common.exchange.infoCard.selectCurrency') || 'Select Currency' }}</span>
            <select class="wallet-select" v-model="form.to_currency">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="SGD">SGD</option>
              <option value="CHF">CHF</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
					<div class="actions">
						<button class="exchange-btn"
							style="font-size: 14px; width: calc(50% - 16px); margin: 0 8px; box-sizing: border-box; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 calc(50% - 16px); transform: translateX(-28px);"
							@click="qrdh">{{ $t('common.exchange.infoCard.confirmExchange') }}</button>
						<view @click="$u.route('/pages/my/order')" class="records-link">{{ $t('common.exchange.infoCard.records') }}</view>
					</div>
				</div>
			</div>

			<div class="modal" v-if="showModal">
				<div class="modal-content">
					<div class="progress-stepper">
						<div v-for="(step, index) in $t('common.exchange.modal.steps')" :key="index" class="step active" :id="'step-' + (index + 1)">
							<div class="step-dot"></div>
							<div class="step-label">{{ step }}</div>
							<div v-if="index < $t('common.exchange.modal.steps').length - 1" class="progress-line"></div>
						</div>
					</div>
					<div class="main-progress-bar">
						<u-line-progress active-color="#4CAF50" height="20" :percent="100"
								:show-percent="false"></u-line-progress>
					</div>
					<div class="progress-percentage">{{ $t('common.exchange.modal.percentage') }}</div>
					<div class="currency-exchange">
						<div class="currency">
							<img :src="'https://flagcdn.com/'+processString(swap.from)+'.svg'" alt="USD" id="fromCurrencyFlag">
							<div id="fromCurrencyCode">
								{{swap.from}}
							</div>
						</div>
						<div class="exchange-icon">
							↔
						</div>
						LYD
						<div class="currency">
							<img :src="'https://flagcdn.com/'+processString(swap.to)+'.svg'" alt="Waiting..." id="toCurrencyFlag">
							<div id="toCurrencyCode">{{swap.to}}</div>
						</div>
					</div>
					<div class="order-details">
						<div class="info-item">
							<span>{{ $t('common.exchange.modal.exchangedCurrency') }}</span>
							<span id="exchangedCurrency">
							{{swap.exchange_currency}}
							</span>
						</div>
						<div class="info-item">
							<span>{{ $t('common.exchange.modal.exchangedRate') }}</span>
							<span id="exchangedRate">
							{{swap.exchange_rate}}
							</span>
						</div>
						<div class="info-item">
							<span>{{ $t('common.exchange.modal.exchangedAmount') }}</span>
							<span id="exchangedAmount">
							{{swap.exchange_amount}}
						</span></div>
						<div class="info-item"><span>{{ $t('common.exchange.modal.exchangeEarnings') }}</span><span id="exchangeEarnings">
							{{swap.exchange_earnings}}
						</span>
						</div>
						<div class="info-item"><span>{{ $t('common.exchange.modal.orderType') }}</span>
							<span id="order_type">
							{{swap.order_type}}
						</span>
					</div>
						<div class="info-item"><span>Expected Return</span><span id="expectedReturn">
							{{swap.expected_return}}
						</span></div>
					</div>
					<button class="close-btn" @click="showModal = false">{{ $t('common.exchange.modal.close') }}</button>
				</div>
			</div>


			<div v-if="loading"
				style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:10010;background:rgba(0,0,0,0.35);">
				<div style="color:#fff; font-size:16px; font-weight:700;">Loading...</div>
			</div>

		</view>
		<view class="a-pf a-w" style="top: 0;left: 0;height: 100vh;z-index: 0;z-index: 1; ">
			<video class="a-w a-h" objectFit="cover" src="static/image/fz/ea1.mp4"
				:controls="false" :show-center-play-btn="false" :show-play-btn="false" :show-fullscreen-btn="false"
				:enable-progress-gesture="false" autoplay loop muted></video>
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
			activeTab: 'all',
			loading: false,
			showModal: false,
			swap:{},
			exchangeinfo: {},
      form: {
        to_currency: 'USD' // ✅ 默认 USD
      }
		};
	},
	onLoad(e) {
		this.init()
	},
	onShow() {

	},
	methods: {
		// 字符串处理函数：大写转小写并去掉最后一位字符
		processString(str) {
			if (!str || typeof str !== 'string' || str.length === 0) {
				return '';
			}
			// 转换为小写并去掉最后一位字符
			return str.toLowerCase().slice(0, -1);
		},

		init() {
			const token = uni.getStorageSync('token')
			this.$u.api.setting.exchangeinfo(token, this.form).then(res => {
				this.exchangeinfo = res.data
			})
		},
		qrdh() {
			const token = uni.getStorageSync('token')
			this.loading = true
      // 兑换
			this.$u.api.setting.exchangeswap(token, this.form).then(res => {
				this.swap = res.data
				this.showModal = true
				this.loading = false
			}).catch(() => {
				this.loading = false
			})
		},
		switchTab(tabName) {
			this.activeTab = tabName;
		}
	},
}
</script>
<style lang="scss" scoped>
.main-content {
	padding: 10px 20px;
	display: flex;
	justify-content: center;
	align-items: center;

	.info-card {
		background-color: rgba(13, 26, 46, 0.8);
		padding: 30px;
		border-radius: 15px;
		width: 100%;
		max-width: 400px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	.info-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 15px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);

		span i {
			margin-right: 10px;
			color: #4CAF50;
		}
	}

	.orders {
		text-align: center;
		margin: 20px 0;
		font-size: 16px;
		color: #ccc;
	}

	.actions {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.exchange-btn {
		background-color: #1E90FF;
		color: white;
		border: none;
		padding: 10px 40px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
		margin-top: 10px;
		line-height: 1.5;
	}

	.records-link {
		color: white;
		text-decoration: none;
		font-size: 16px;
	}

}


.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;
	width: 100%;
	max-width: 500px;
	min-width: 300px;
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	padding: 20px;

	.modal-content {
		background-color: #222;
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #888;
    width: 80%;
		max-width: 400px;
		border-radius: 10px;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	}

	.progress-stepper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
		padding: 0 10px;

		.step {
			text-align: center;
			flex-grow: 1;
			position: relative;

			.step-label {
				font-size: 12px;
				color: #aaa;
			}

			.step-dot {
				width: 12px;
				height: 12px;
				background-color: #555;
				border-radius: 50%;
				display: inline-block;
				margin-bottom: 5px;
				transition: background-color 0.3s;
			}

			&.active .step-dot {
				background-color: #4CAF50;
			}


			&.active .step-label {
				color: white;
			}

			&:first-child .progress-line {
				left: 50%;
			}


			.progress-line {
				position: absolute;
				height: 2px;
				background-color: #555;
				top: 6px;
				left: 50%;
				right: -50%;
				z-index: -1;
			}



		}
	}

	.main-progress-bar {
		width: 100%;
		background-color: #555;
		border-radius: 5px;
		height: 10px;
		margin-bottom: 10px;
	}

	.main-progress {
		width: 0%;
		height: 100%;
		background-color: #4CAF50;
		border-radius: 5px;
		transition: width 1s linear;
	}

	.progress-percentage {
		text-align: center;
		margin-bottom: 20px;
		font-size: 14px;
	}

	.currency-exchange {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 20px;
	}

	.currency {
		text-align: center;

		img {
			width: 70px;
			height: 50px;
			border-radius: 10%;
		}
	}

	.exchange-icon {
		font-size: 24px;
	}

	.info-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0;
		width: 100%;
	}

	.order-details {
		.info-item {
			border-bottom: 1px solid #444;
		}
	}

	.close-btn {
		background-color: #555;
		color: white;
		border: none;
		padding: 10px 30px;
		border-radius: 20px;
		display: block;
		margin: 20px auto 0;
		cursor: pointer;
		line-height: 1.5;
	}

  .wallet-select {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 14px;
    outline: none;

    option {
      color: #000;
    }
  }
}
</style>