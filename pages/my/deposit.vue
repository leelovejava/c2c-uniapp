<template>
  <view class="">
    <view class="a-pr a-crfff"
          style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
      <navbar />

      <div class="main-container" style="margin:0 auto;max-width: 768px;">
        <div class="cashout-container">
          <div class="tabs">
            <button :class="['tab-button', { active: activeTab === 'withdrawal' }]"
                    @click="switchTab('withdrawal')">
              {{ $t('deposit.withdrawal') }}
            </button>
            <button :class="['tab-button', { active: activeTab === 'history' }]"
                    @click="switchTab('history')">
              {{ $t('deposit.history') }}
            </button>
          </div>

          <div v-show="activeTab === 'withdrawal'" class="withdrawal">
            <div class="section-card">
              <h3 class="section-title">{{ $t('deposit.withdrawal') }}{{ $t('common.wallet.default.12') }}</h3>

              <div class="input-group" style="flex-direction:column; align-items:flex-start;">
                <span>{{ $t('bankCardList.countryLabel') }}：<strong>EUR</strong></span>
                <span class="description-text" style="margin-top:8px; font-size:14px; color:red; line-height:1.4;">
                  {{ $t('deposit.currencyDescription') }}<br/>
                </span>
              </div>

              <div class="input-group">
                {{ $t('common.wallet.default.8') }}：{{ ktxjine }}
              </div>
              <div class="input-group">
                <input type="text" v-model="formData.money" :placeholder="$t('deposit.enterWithdrawalAmount')" class="amount-input">
              </div>

              <div class="input-group">
                <input type="text" v-model="formData.account_name" class="form-input" :placeholder="$t('bankCardList.accountNamePlaceholder')">
              </div>

              <div class="input-group">
                <input type="text" v-model="formData.account_number" class="form-input" :placeholder="$t('bankCardList.accountNumberPlaceholder')">
              </div>

              <div class="input-group">
                <input type="text" v-model="formData.bank_name" class="form-input" :placeholder="$t('bankCardList.bankNamePlaceholder')">
              </div>

              <div class="input-group">
                <input type="text" v-model="formData.routing_number" class="form-input" :placeholder="$t('bankCardList.routingNumberPlaceholder')">
              </div>

              <div class="input-group">
                <input type="text" v-model="formData.swift_code" class="form-input" :placeholder="$t('bankCardList.swiftCodePlaceholder')">
              </div>

              <div class="input-group">
                <textarea v-model="formData.bank_address" class="form-textarea" :placeholder="$t('bankCardList.bankAddressPlaceholder')"></textarea>
              </div>

            </div>
            <button class="submit-button" id="btn-submit" @click="submitWithdrawal">{{ $t('deposit.submit') }}</button>
          </div>

          <div v-show="activeTab === 'history'" class="history">
            <div class="history-records">
              <div v-for="(record, index) in historyRecords" :key="index" class="history-record">
                <div class="record-details">
                  <div class="record-row a-mb10">
                    <span class="label a-mr10">{{ $t('common.userTaskRecord.3') }}:</span>
                    <span class="value">{{ formatDate(record.addtime) }}</span>
                  </div>
                  <div class="record-row a-mb10">
                    <span class="label a-mr10">{{ $t('common.user.default.15') }}:</span>
                    <span class="value">{{ record.money }} </span>
                  </div>
                  <div class="record-row a-mb10">
                    <span class="label a-mr10">{{ $t('common.wallet.default.11') }}:</span>
                    <span class="value" :class="getStatusClass(record.stat)">{{ getStatusText(record.stat) }}</span>
                  </div>

                  <div v-if="record.type === 'bank' && record.bank_json" class="record-row">
                    <span class="label a-mr10">{{ $t('common.bindAccount.fields.2') }}:</span>
                    <span class="value">{{ record.bank_json.account_number }}</span>
                  </div>
                  <div v-if="record.type === 'wallet' && record.wallet_json" class="record-row">
                    <span class="label a-mr10">{{ $t('common.bindAccount.fields.5') }}:</span>
                    <span class="value">{{ record.bank_json.account_number }}</span>
                  </div>
                </div>
              </div>
            </div>
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
    navbar
  },
  data() {
    return {
      showLanguage: false,
      activeTab: 'withdrawal',
      formData: {
        money: '',
        // 固定欧元
        currency: 'eur',
        account_name: '',
        account_number: '',
        bank_name: '',
        country: '',
        routing_number: '',
        swift_code: '',
        bank_address: ''
      },
      userinfo: {},
      historyRecords: [],
      // 可提现金额
      ktxjine: 0,
    };
  },
  onLoad(options) {
    this.getUserInfo();
    this.getWithdrawalHistory();
    this.changeCurrency() //可提现的金额
  },
  onShow() {

  },
  methods: {
    // usd美元,eur欧元,cad加元,sgd新加坡元,chf瑞士,gbp英镑
    changeCurrency() {
      const currency = this.formData.currency

      // userinfo 还没加载完成时兜底
      if (!this.userinfo || !currency) {
        this.ktxjine = 0
        return
      }

      // 根据币种动态取余额，如 userinfo.usd / userinfo.eur
      const amount = this.userinfo[currency]

      this.ktxjine = Number(amount || 0)
    },
    getUserInfo() {
      const token = uni.getStorageSync('token');
      this.$u.api.index.getUserinfo(token).then(res => {
        this.userinfo = res.data;
      });
    },
    getWithdrawalHistory() {
      const token = uni.getStorageSync('token');
      this.$u.api.index.withdraw_list(token, {}).then(res => {
        if (res.code == 1) {
          this.historyRecords = res.data;
          for (let i in this.historyRecords) {
            let a = JSON.parse(this.historyRecords[i].bank_json);
            this.historyRecords[i].bank_json = a;
          }
        }
      });
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    formatDate(dateString) {
      // 处理时间戳或日期字符串
      if (!dateString) return '';
      dateString = dateString * 1000
      // 如果是数字字符串，认为是时间戳
      if (/^\d+$/.test(dateString)) {
        const date = new Date(parseInt(dateString));
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }

      // 如果包含空格，分割获取日期部分
      if (dateString.includes(' ')) {
        return dateString.split(' ')[0];
      }

      return dateString;
    },
    submitWithdrawal() {
      // 表单验证
      if (!this.formData.money) {
        uni.showToast({
          title: this.$t('common.deposit.enterWithdrawalAmount'),
          icon: 'none'
        });
        return;
      }

      // 调用提现API
      const token = uni.getStorageSync('token');
      this.$u.api.index.apply_withdrawal(token, this.formData).then(res => {
        if (res.code == 1) {
          uni.showToast({
            title: res.msg,
            icon: 'success'
          });
          // 重置表单
          this.formData.money = '';
          // 刷新用户信息和历史记录
          this.getUserInfo();
          this.getWithdrawalHistory();
        } else {
          uni.showToast({
            title: res.msg,
            icon: 'none'
          });
        }
      }).catch(err => {
        uni.showToast({
          title: this.$t('common.deposit.withdrawalFailed'),
          icon: 'none'
        });
      });
    },
    getStatusClass(stat) {
      stat-=0
      switch (stat) {
        case 0: return 'status-pending';
        case 1: return 'status-success';
        case 2: return 'status-rejected';
        case 3: return 'status-processing';
        default: return '';
      }
    },
    getStatusText(stat) {
      stat-=0
      switch (stat) {
        case 0: return this.$t('withdrawalStatus.pending');
        case 1: return this.$t('withdrawalStatus.success');
        case 2: return this.$t('withdrawalStatus.rejected');
        case 3: return this.$t('withdrawalStatus.processing');
        default: return '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cashout-container {
  padding: 20px;
  color: #fff;
  background: linear-gradient(180deg, rgba(13, 17, 30, 0.9) 0%, rgba(13, 17, 30, 0.95) 100%);
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  min-height: calc(100vh - 50px);
  border-radius: 20px 20px 0 0;
}

.cashout-container .tabs {
  display: flex;
  margin-bottom: 25px;
  background: rgba(26, 35, 58, 0.7);
  border-radius: 15px;
  padding: 5px;
}

.cashout-container .tabs .tab-button {
  flex: 1;
  background: transparent;
  border: none;
  color: #a0aec0;
  padding: 12px 0;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cashout-container .tabs .tab-button.active {
  background: linear-gradient(135deg, #1E90FF 0%, #0a5bc4 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(30, 144, 255, 0.4);
}

.cashout-container .section-card {
  background: rgba(26, 35, 58, 0.7);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cashout-container .section-card .section-title {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 15px 0;
}

.cashout-container .input-group {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #4a5568;
  padding: 15px 0;
}

.cashout-container .input-group input {
  background: transparent;
  border: none;
  color: #fff;
  flex-grow: 1;
  font-size: 16px;
  outline: none;
}

.cashout-container .input-group input::placeholder {
  color: #a0aec0;
}

.cashout-container .input-group select {
  background: transparent;
  border: none;
  color: #fff;
  flex-grow: 1;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  padding: 10px 0;
}

.cashout-container .input-group select option {
  background-color: #1a233a;
  color: #fff;
}

.cashout-container .submit-button {
  background: linear-gradient(135deg, #1E90FF 0%, #0a5bc4 100%);
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 16px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 6px 20px rgba(30, 144, 255, 0.4);
  transition: all 0.3s ease;
}

.cashout-container .history .history-record {
  background: rgba(26, 35, 58, 0.7);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* 提现状态样式 */
.status-pending {
  color: #FF9800; /* 橙色表示待审核 */
}

.status-success {
  color: #4CAF50; /* 绿色表示已打款 */
}

.status-rejected {
  color: #F44336; /* 红色表示已拒绝 */
}

.status-processing {
  color: #2196F3; /* 蓝色表示打款中 */
}
</style>