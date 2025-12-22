<template>
	<view class="">
		<view class="a-pr a-crfff" style="min-height: 100vh; z-index: 3;">
			<navbar />
			<div class="main-content">
				<h1 class="records-title">{{ i18n.order.recordsTitle }}</h1>
				<div class="records-tabs"><button :class="['tab-link', { active: activeTab === 'all' }]"
						@click="switchTab('all')" data-status="all">{{ i18n.order.tabs.all }}</button><button
						:class="['tab-link', { active: activeTab === 'pending' }]" @click="switchTab('pending')"
						data-status="5">{{ i18n.order.tabs.pending }}</button><button :class="['tab-link', { active: activeTab === 'completed' }]"
						@click="switchTab('completed')" data-status="1">{{ i18n.order.tabs.completed }}</button><button
						:class="['tab-link', { active: activeTab === 'limit_order' }]" @click="switchTab('limit_order')"
						data-type="limit_order">{{ i18n.order.tabs.limitOrder }}</button></div>
				<div class="order-list">
					<div v-for="item in list" :key="item.id" class="order-item">
						<div class="order-header">
							<span class="order-date">{{ item.create_time }}</span>
							<div class="order-status">
								<span
									:class="['status-tag', { 'status-completed': item.status === '1', 'status-pending': item.status === '5' }]">
									{{ item.status === '1' ? i18n.order.status.completed : item.status === '5' ? i18n.order.status.pending : i18n.order.status.processing }}
								</span>
							</div>
						</div>
						<div class="order-body">
							<div class="order-meta">
								<p class="order-id">{{ i18n.order.details.orderId }}: {{ item.order_no }}</p>
								<p class="order-type">{{ i18n.order.details.orderType }}: {{ item.order_type }}</p>
							</div>
							<div class="exchange-info">
								<div class="currencies">
									<img :src="'https://flagcdn.com/' + getCountryCode(item.from) + '.svg'">
									<img src="h5/static/image/fz/huhuan.png" style="width: 45rpx;height: 40rpx;">
									<img :src="'https://flagcdn.com/' + getCountryCode(item.to) + '.svg'">
								</div>
								<div class="amount-info"><span class="amount">{{ item.exchange_amount }} {{ item.from
										}}</span></div>
							</div>
							<div class="exchange-details">
								<div class="detail-row"><span>{{ i18n.order.details.exchangeCurrency }}</span><span>{{ item.exchange_currency }} {{ item.to
										}}</span></div>
								<div class="detail-row"><span>{{ i18n.order.details.exchangeEarnings }}</span><span>{{ item.exchange_earnings }} {{ item.from
										}}</span></div>
								<div class="detail-row"><span>{{ i18n.order.details.expectedReturn }}</span><span>{{ item.expected_return }} {{ item.to
										}}</span></div>
							</div>
						</div>
					</div>
				</div>
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
			form: {
				status: 1,
				page: 0,
			},
			list: [],
		};
	},
	computed: {
		i18n() {
			return this.$t("common")
		}
	},
	onLoad(options) {
		this.init()
	},
	onShow() {

	},
	onReachBottom() {
		this.init()
	},
	methods: {
		init() {
			this.form.page++
			const token = uni.getStorageSync('token')
			this.$u.api.setting.exchanglist(token, this.form).then(res => {
				for(let item of res.data.list || []){
					this.list.push(item)
				}
			})
		},
		switchTab(tabName) {
			this.activeTab = tabName;
			// 这里可以添加根据标签切换加载不同数据的逻辑
			console.log('切换到标签:', tabName);
		},
		// 获取货币对应的国家代码
		getCountryCode(currency) {
			// 简单的货币代码到国家代码的映射
			const currencyMap = {
				'USD': 'us',
				'UAH': 'ua',
				'LYD': 'ly',
				'HKD': 'hk',
				'SGD': 'sg',
				'TWD': 'tw',
				'EUR': 'eu',
				'AUD': 'au'
				// 可以根据需要添加更多货币映射
			};
			return currencyMap[currency] || 'us'; // 默认返回美元的国家代码
		}
	},
}
</script>
<style lang="scss" scoped>
.main-content {
	padding: 20px;

	.records-title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.records-tabs {
		display: flex;
		gap: 10px;
		margin-bottom: 20px;

		.tab-link.active {
			background-color: #1E90FF;
			color: black;
		}

		.tab-link {
			line-height: 1.6;
			background-color: transparent;
			color: white;
			border: 1px solid #1E90FF;
			padding: 4px 8px;
			border-radius: 10px;
			cursor: pointer;
			font-size: 14px;
		}
	}

	.order-list {
		display: flex;
		flex-direction: column;
		gap: 20px;

		.order-item {
			background-color: #0D1A2E;
			border-radius: 10px;
			padding: 20px;
			border: 1px solid rgba(255, 255, 255, 0.1);

			.order-header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 15px;

				.order-date {
					font-size: 14px;
					color: #ccc;
				}

				.order-status {
					display: flex;
					align-items: center;
					gap: 10px;
				}

				.status-tag {
					padding: 4px 12px;
					border-radius: 15px;
					font-size: 12px;
					font-weight: bold;
				}

				.status-completed {
					border: 1px solid #4CAF50;
					color: #4CAF50;
				}

			}
		}

		.order-body {
			.order-meta {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 15px;
			}

			.order-id {
				font-size: 14px;
				color: #ccc;
				margin: 0;
			}

			.order-type {
				font-size: 14px;
				color: #E53935;
				margin: 0;
			}

			.exchange-info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20px;

				.currencies {
					display: flex;
					align-items: center;
					gap: 10px;

					img {
						width: 50px;
						height: 32px;
						border-radius: 10%;
					}
				}

				.amount-info {
					text-align: right;

					.amount {
						font-size: 22px;
						font-weight: bold;
						display: block;
					}
				}

				.fa-exchange-alt {
					font-size: 20px;
				}
			}

			.exchange-details {
				.detail-row {
					display: flex;
					justify-content: space-between;
					padding: 10px 0;
					border-top: 1px solid rgba(255, 255, 255, 0.1);
					font-size: 14px;

					span:first-child {
						color: #ccc;
					}
				}
			}

		}

	}


}
</style>