<!--VIP页面-->
<template>
  <view class="">
    <view class="a-pr a-crfff"
          style="z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
      <navbar/>
      <div class="main-content">
        <h2 style="text-align: center; margin-bottom: 20px;">{{ $t('vip.title') }}</h2>
        <!-- VIP 等级列表 -->
        <div
            class="info-card"
            v-for="item in vipList"
            :key="item.vip_level"
            style="max-width: 768px;margin: 0 auto 20px auto;border: 1px solid #ddd;border-radius: 8px;padding: 20px;"
        >
          <h3>
            VIP {{ item.vip_level }}

            <!-- 当前等级标识 -->
            <span
                v-if="isCurrentVip(item)"
                style="border: 1px solid white; border-radius: 5px; padding: 2px 8px; font-size: 12px; margin-left: 10px;"
            >
              {{ $t('vip.current') }}
            </span>
          </h3>

          <div style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
            <div style="text-align: center;">
              <img
                  :src="`static/image/fz/vip${item.vip_level}.png`"
                  :alt="`VIP ${item.vip_level}`"
                  style="width: 100px; height: auto;"
              >
            </div>
          </div>
        </div>
        <!-- VIP 等级说明（通用规则） -->
        <div class="info-card vip-description"
             style="max-width: 768px;margin: 0 auto 40px auto;border: 1px solid #ddd;border-radius: 8px;padding: 20px;">

          <view style="text-align: left; white-space: pre-line; line-height: 1.7; font-size: 14px;">
            {{ $t('vip.description') }}
          </view>
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
      vipList: [],   // 👈 VIP 等级列表
      userinfo: {}   // 👈 用户信息
    };
  },
  onLoad(options) {
    this.getUserInfo()
    this.init()
  },
  onShow() {

  },
  methods: {
    getNocar() {
      const token = uni.getStorageSync('token');
      this.$u.api.index.get_noc(token).then(res => {
        let lang = this.$store.state.lang;
        this.news = [res.data[lang]];
      });
    },
    init() {
      const token = uni.getStorageSync('token')
      this.$u.api.setting.get_vip_level(token).then(res => {
        this.vipList = (res.data || []).map(item => ({
          ...item,
          vip_level: Number(item.vip_level)
        }))
      })
    },
    getUserInfo() {
      const token = uni.getStorageSync('token')
      this.$u.api.index.getUserinfo(token).then(res => {
        this.userinfo = res.data || {}
        this.userinfo.level = Number(this.userinfo.level || 0)
      })
    },
    isCurrentVip(item) {
      return this.userinfo.level > 0 &&
          this.userinfo.level === item.vip_level
    }
  },
}
</script>
<style lang="scss" scoped>
.main-content {
  padding: 40rpx;
}

.info-card {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;

  h3 {
    margin: 0 0 5px 0;
    font-size: 18px;
  }
}

.vip-description {
  background-color: rgba(0, 0, 0, 0.35);
  /* 比 VIP 卡片浅 */
  border: 1px dashed rgba(255, 255, 255, 0.25);
  /* 规则感 */
  font-size: 13px;
  color: #e0e0e0;
}
</style>