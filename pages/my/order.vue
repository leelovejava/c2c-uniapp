<template>
	<view class="">
		<view class="a-pr a-crfff" style="min-height: 100vh; z-index: 3;">
			<navbar />
			<div class="main-content">
<!--				<h1 class="records-title">{{ i18n.order.recordsTitle }}</h1>-->
        <view class="market-header">
          <img class="back-icon" src="static/image/icon/back.png" @click="back()" />
          <text class="title-text">{{ i18n.order.recordsTitle }}</text>
        </view>
				<div class="records-tabs"><button :class="['tab-link', { active: activeTab === 'all' }]"
						@click="switchTab('all')" data-status="''">{{ i18n.order.tabs.all }}</button><button
						:class="['tab-link', { active: activeTab === 'pending' }]" @click="switchTab('pending')"
						data-status="5">{{ i18n.order.tabs.pending }}</button><button :class="['tab-link', { active: activeTab === 'completed' }]"
						@click="switchTab('completed')" data-status="1">{{ i18n.order.tabs.completed }}</button><button
													:class="['tab-link', { active: activeTab === 'reviewFailed' }]" @click="switchTab('reviewFailed')"
													data-status="6">{{ i18n.order.tabs.reviewFailed }}</button></div>
				<div class="order-list">
					<div v-for="item in list" :key="item.id" class="order-item">
						<div class="order-header">
							<span class="order-date">{{ item.create_time }}</span>
							<div class="order-status">
								<span :class="['status-tag', { 'status-completed': item.status === '1', 'status-pending': item.status === '5', 'status-failed': item.status === '6' }]">
									{{ item.status === '1' ? i18n.order.status.completed : (item.status === '5' ? i18n.order.status.pending : (item.status === '6' ? i18n.order.status.reviewFailed : i18n.order.status.processing)) }}
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
									<img src="static/image/fz/huhuan.png" style="width: 45rpx;height: 40rpx;">
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
				status: '',
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
				this.activeTab = tabName
			  // 1. 设定 status
			  if (tabName === 'pending') {
			    this.form.status = 5;
			  } else if (tabName === 'completed') {
			    this.form.status = 1;
			  } else if (tabName === 'all') {
			    this.form.status = '';
			  } else if (tabName === 'reviewFailed') {
			    this.form.status = 6;
			  }

			  // 2. 重置分页和列表
			  this.form.page = 0;
			  this.list = [];

			  // 3. 重新加载数据
			  this.init();
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
		},
    back() {
      const pages = getCurrentPages();
      if (pages.length === 2) {
        uni.navigateBack({
          delta: 1
        });
      } else if (pages.length === 1) {
        uni.reLaunch({
          url: '/pages/index/index'
        });
      } else {
        uni.navigateBack({
          delta: 1
        });
      }
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


  .market-header {
    width: 100%;
    height: 88rpx;
    background: #000;
    top: 44rpx;
    left: 0;
    z-index: 1000;
  }

  .back-icon {
    width: 40rpx;
    height: 40rpx;
    position: absolute;
    left: 24rpx;
    filter: brightness(0) invert(1);
  }

  .title-text {
    font-size: 32rpx;
    font-weight: bold;
    color: #fff;
    margin-left: 100rpx;
  }

}
</style>