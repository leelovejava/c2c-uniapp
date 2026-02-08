<template>
  <view class="hall">
    <!-- 顶部导航 -->
    <view class="top-nav">
      <view class="back-button" @click="back">&lt;</view>
      <view class="nav-title">Trading Market</view>
      <view class="records-button" @click="dumprun('/pages/my/order')">
        <button>Records</button>
      </view>
    </view>

    <!-- 列表 -->
    <view class="order-list">
      <view
        class="order-item"
        v-for="item in list"
        :key="item.id"
      >
        <!-- header -->
        <view class="order-header">
          <view>
            <view class="order-email">
              {{ maskEmail(item.username) }}
            </view>
            <view class="order-limit">
              Quota : {{ item.mine }}-{{ item.maxe }}
            </view>
          </view>
          <view
            class="sell-button"
            @click="dakai(item)"
          >
            Sell
          </view>
        </view>

        <!-- body -->
        <view class="order-body">
          <view>
            <view class="value">{{ item.shengyu }}</view>
            <view class="label">Unfilled(USDT)</view>
          </view>
          <view class="right">
            <view class="value">{{ item.danjia }}</view>
            <view class="label">Price(EUR)</view>
          </view>
        </view>
      </view>

      <view v-if="list.length === 0" class="empty-state">
        No more data
      </view>
    </view>

    <!-- 确认弹窗 -->
	<div class="confirm-modal" v-if="isshow">
	<div class="confirm-box">
		<div class="confirm-title">Confirm Exchange</div>
		<div class="confirm-text">
		Are you sure you want to exchange this order?
		</div>
		<div class="confirm-actions">
		<div class="btn cancel" @click="isshow = false">Cancel</div>
		<div class="btn ok" @click="chushou">Confirm</div>
		</div>
	</div>
	</div>
	<!-- 确认弹窗 -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isshow: false,
      currency: 'eur',
      orderid: '',
      danjia: '',
      mine: '',
      maxe: '',
      ushu: '',
      sellForm: {
        page: 1,
        list: 999,
        status: 2
      }
    }
  },

  onLoad() {
    this.getlist()
  },

  methods: {
    maskEmail(email) {
      if (!email) return ''
      const [name, domain] = email.split('@')
      if (!domain) return email
      return name.slice(0, 4) + '****@' + domain
    },

    dakai(item) {
      this.orderid = item.id
      this.danjia = item.danjia
      this.mine = item.mine
      this.maxe = item.maxe
      this.ushu = ''
      this.isshow = true
    },

    getlist() {
      const token = uni.getStorageSync('token')
      this.$u.api.index.mSell(token, this.sellForm).then(res => {
        if (res.code === 1) {
          this.list = res.data
        }
      })
    },

    chushou() {
      const token = uni.getStorageSync('token')
      this.$u.api.setting.exchangeswap(token, {
        order_id: this.orderid,
        currency: 'eur'
      }).then(res => {
        if (res.code === 1) {
          uni.showToast({
            title: 'Exchange successful',
            icon: 'success'
          })
          this.isshow = false
          this.getlist()
        } else {
          uni.showToast({
            title: res.msg,
            icon: 'none'
          })
        }
      })
    },

    back() {
      uni.navigateBack({ delta: 1 })
    },

    dumprun(url) {
      uni.navigateTo({ url })
    }
  }
}
</script>

<style scoped lang="scss">
.hall {
  min-height: 100vh;
  background: #000;
  color: #fff;
}

/* 顶部 */
.top-nav {
  display: flex;
  align-items: center;
  padding: 24rpx;
}

.back-button {
  width: 60rpx;
  font-size: 32rpx;
  font-weight: bold;
}

.nav-title {
  flex: 1;
  text-align: center;
  font-size: 28rpx;
  font-weight: 700;
}

.records-button button {
  background: #f7ce46;
  border-radius: 10rpx;
  padding: 8rpx 18rpx;
  font-size: 22rpx;
}

/* 列表 */
.order-list {
  padding: 16rpx;
}

.order-item {
  background: linear-gradient(180deg, #1c2636, #151d2b);
  border-radius: 14rpx;
  padding: 24rpx;
  margin-bottom: 16rpx;
}

.order-header {
  display: flex;
  justify-content: space-between;
}

.order-email {
  font-size: 26rpx;
  font-weight: 600;
}

.order-limit {
  font-size: 20rpx;
  color: #ff7a45;
  margin-top: 6rpx;
}

.sell-button {
  height: 56rpx;
  width: 96rpx;

  display: flex;
  align-items: center;      // 垂直居中
  justify-content: center;  // 水平居中

  padding: 0;               // ⭐关键：清掉 padding
  font-size: 22rpx;
  font-weight: 600;

  color: #38c172;
  background: #eafff2;

  border-radius: 8rpx;
  border: 1px solid #c9f2da;

  line-height: 1;           // ⭐避免文字被 line-height 拉偏
}


/* body */
.order-body {
  display: flex;
  justify-content: space-between;
  margin-top: 20rpx;
}

.value {
  font-size: 30rpx;
  font-weight: 700;
}

.label {
  font-size: 18rpx;
  color: #9aa4b2;
}

.right {
  text-align: right;
}

/* 弹窗遮罩 */
.confirm-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

/* 弹窗主体 */
.confirm-box {
  width: 80%;
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;   // ⭐非常关键
  color: #000;
}

/* 标题 */
.confirm-title {
  padding: 32rpx 24rpx 16rpx;
  font-size: 30rpx;
  font-weight: 600;
  text-align: center;
}

/* 文本内容 */
.confirm-text {
  padding: 0 32rpx 28rpx;
  font-size: 24rpx;
  line-height: 36rpx;
  color: #8c8c8c;
  text-align: center;
  word-break: break-word;
}

/* 按钮区域 */
.confirm-actions {
  display: flex;
  border-top: 1px solid #e5e5e5;
}

/* 按钮通用 */
.confirm-actions .btn {
  flex: 1;
  height: 88rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 28rpx;
  font-weight: 500;
}

/* 取消 */
.confirm-actions .cancel {
  color: #333;
  border-right: 1px solid #e5e5e5;
}

/* 确认 */
.confirm-actions .ok {
  color: #007aff;   // ⭐iOS 蓝
  font-weight: 600;
}

</style>
