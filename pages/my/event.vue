<template>
  <view class="">
    <view class="a-pr a-crfff"
          style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
      <navbar />
      <div class="main-content">
<!--        <img src="static/image/fz/1_usd.png" alt="Event Image 1" class="responsive-image">-->

        <div class="page-bg">
          <!-- 顶部星星横幅 -->
          <img src="static/image/fz/event/deposit_reward.png" class="banner-img" mode="widthFix" />

          <!-- 标题 -->
          <view class="title-box">
            <text class="title-text">Deposit reward</text>
          </view>

          <!-- 表格 -->
          <view class="table-box">
            <view class="table-header">
              <text class="header-item">DEPOSIT</text>
              <text class="header-item">REWARD</text>
            </view>

            <view class="table-row" v-for="(item, index) in rewardList" :key="index">
              <text class="row-item">${{ item.deposit }}</text>
              <text class="row-item">${{ item.bonus }}</text>
            </view>
          </view>

          <!-- 底部规则 -->
          <view class="rule-box">
            <text class="rule-text">Any deposit bonus can only be claimed once per day.</text>
          </view>

          <!-- 礼物图：靠右 -->
          <img src="static/image/fz/event/gift.png" class="gift-img" mode="widthFix" />
        </div>

        <img src="static/image/fz/2new.png" alt="Event Image 2" class="responsive-image">
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
      rewardList: [],
      showLanguage: false,
    };
  },
  onLoad(options) {
    this.init()
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
    init() {
      const token = uni.getStorageSync('token')
      this.$u.api.setting.get_vip_level(token).then(res => {
        this.rewardList = (res.data || []).map(item => ({
          ...item
        }))
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.main-content {
  padding: 20px;
  .responsive-image {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    margin-top: 1rem;
  }
}
.page-bg {
  min-height: 100vh;
  background: #020205;
  color: #fff;
  position: relative;
  z-index: 3;
}


.page-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
      radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 18px 18px;
  opacity: 0.10;
  pointer-events: none;
}

.table-box {
  width: 92%;
  margin: 0 auto;
  border: 2px solid rgba(255,255,255,0.75); /* 白色外框 */
  border-radius: 18px;
  overflow: hidden;
  background: rgba(0,0,0,0.25); /* 表格内轻微透明黑 */
}

.title-text {
  font-size: 40px;
  font-weight: 800;
  color: #ffb400;
  letter-spacing: 0.5px;
}

.title-box {
  text-align: center;
  margin: 6px 0 18px;
}

.main-content {
  padding: 30px 20px;
}

/* 星星横幅图（deposit_reward.png） */
.banner-img {
  width: 70%;
  display: block;
  margin: 6px auto 10px;
}

/* 表格样式保持不变 */
.table-box {
  width: 90%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,180,0,0.6);
}

.table-header {
  display: flex;
  padding: 14px 0;
  border-bottom: 2px solid rgba(255,255,255,0.45);
}

.header-item {
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #f6cf4b;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 200;
}

.table-row {
  display: flex;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,180,0,0.2);
}

.table-row:last-child {
  border-bottom: none;
}

/* 中间竖线 */
.header-item:first-child,
.row-item:first-child {
  border-right: 2px solid rgba(255,255,255,0.35);
}

.row-item {
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
}

/* 规则文本 */
.rule-box {
  text-align: center;
  margin-top: 24px;
  padding: 0 10px;
}
.rule-text {
  font-size: 18px;
  color: #ffffff;
  opacity: 0.95;
}

/* 礼物图 */
.gift-img {
  width: 140px;
  display: block;
  margin-top: 18px;
  margin-left: auto;   /* 靠右 */
  margin-right: 10px;  /* 右边留一点空 */
}
</style>