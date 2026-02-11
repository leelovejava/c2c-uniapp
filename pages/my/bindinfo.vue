<template>
  <view class="">
    <view class="a-pr a-crfff"
          style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
      <navbar/>
      <div class="main-content">
        <!-- 统一的认证卡片 -->
        <div class="auth-card">
          <!-- 卡片标题和描述 -->
          <view class="auth-header">
            <view class="auth-title">{{ $t('common.certification.title') }}</view>
            <view class="auth-desc">{{ $t('common.certification.subtitle') }}</view>
          </view>
          
          <!-- 状态标签 -->
          <!-- 已实名状态 -->
          <view v-if="authStatus === 1" class="auth-success-content">
            <view class="auth-status success">
              {{ $t('common.certification.statusSuccess') }}
            </view>

            <view class="success-row">
              <view class="success-check">
                <u-icon name="checkmark" color="#35d06f" size="54"></u-icon>
              </view>

              <view class="success-text">
                <view class="auth-result">
                  {{ $t('common.certification.successTitle') }}
                </view>
                <view class="auth-note">
                  {{ $t('common.certification.successSubtitle') }}
                </view>
              </view>
            </view>
          </view>

          <!-- 审核中状态 -->
          <view v-else-if="authStatus === 2" class="auth-pending-content">
            <view class="auth-status pending">
              {{ $t('common.certification.statusPending') }}
            </view>

            <view class="success-row">
              <view class="success-check pending">
                <u-icon name="time" color="#FFC107" size="54"></u-icon>
              </view>

              <view class="success-text">
                <view class="auth-result">
                  {{ $t('common.certification.pendingTitle') }}
                </view>
                <view class="auth-note">
                  {{ $t('common.certification.pendingSubtitle') }}
                </view>
              </view>
            </view>
          </view>


          <!-- 未实名状态 - 表单 -->
          <view v-else class="auth-form">
            <!-- 真实姓名输入 -->
            <div class="form-item">
              <label>{{ $t('common.certification.nameLabel') }}</label>
              <input type="text" v-model="realname" :placeholder="$t('common.certification.namePlaceholder')"
                     class="form-input">
            </div>

            <!-- 邮箱输入 -->
            <div class="form-item">
              <label>{{ $t('common.certification.emailLabel') }}</label>
              <input type="email" v-model="email" :placeholder="$t('common.certification.emailPlaceholder')"
                     class="form-input">
            </div>

            <!-- 手机号输入 -->
            <div class="form-item">
              <label>{{ $t('common.certification.phoneLabel') }}</label>
              <input type="tel" v-model="phone" :placeholder="$t('common.certification.phonePlaceholder')"
                     class="form-input">
            </div>

            <!-- 身份证正面上传 -->
            <div class="form-item">
              <label class="upload-label">{{ $t('common.certification.idCardFrontLabel') }}</label>
              <div class="upload-area">
                <u-upload 
                  :fileList="fileList" 
                  @on-success="okopen" 
                  multiple 
                  :maxCount="1"
                  :uploadText="$t('common.certification.idCardFrontPlaceholder')" 
                  width="50vw"
                  action="https://api.ofxdex.xyz/api/index/upload"
                  :form-data="{ token: token }"
                ></u-upload>
              </div>
            </div>

            <!-- 身份证反面上传 -->
            <div class="form-item">
              <label class="upload-label">{{ $t('common.certification.idCardBackLabel') }}</label>
              <div class="upload-area">
                <u-upload 
                  :fileList="fileList1" 
                  @on-success="okopen1" 
                  multiple 
                  :maxCount="1"
                  :uploadText="$t('common.certification.idCardBackPlaceholder')" 
                  width="50vw"
                  action="https://api.ofxdex.xyz/api/index/upload"
                  :form-data="{ token: token }"
                ></u-upload>
              </div>
            </div>
          </view>

          <!-- 提交按钮 (仅在未实名状态显示) -->
          <div v-if="authStatus === 0" class="button-area">
            <button
                @click="tijiao"
                class="submit-button"
                :disabled="!realname || !email || !phone || !fileurl || !fileurl1"
            >
              {{ $t('common.certification.submitButton') }}
            </button>
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
      authStatus: 0, // 0: 未实名, 1: 已实名, 2: 审核中
      realname: '',
      email: '',
      phone: '',
      fileList: [],
      fileurl: '',
      fileList1: [],
      fileurl1: '',
      token: ''
    }
  },
  onLoad() {
    this.token = uni.getStorageSync('token')
    this.checkAuthStatus()
  },
  methods: {
    // 检查实名状态
    checkAuthStatus() {
      const token = uni.getStorageSync('token')
      this.$u.api.index.is_verified(token).then(res => {
        // 即使 code 不是 200，只要有 data.status，就设置 authStatus
        if (res.data && res.data.status !== undefined) {
          this.authStatus = res.data.status
        } else {
          this.$utils.showToast(res.msg)
        }
      })
    },
    // 上传成功回调
    okopen(data) {
      this.$utils.showToast(this.$t('common.upload')[2])
      this.fileurl = data.data.url
    },
    okopen1(data) {
      this.$utils.showToast(this.$t('common.upload')[2])
      this.fileurl1 = data.data.url
    },
    // 提交实名信息
    tijiao() {
      if (!this.realname) {
        this.$utils.showToast(this.$t('common.certification.namePlaceholder'))
        return
      }
      if (!this.email) {
        this.$utils.showToast(this.$t('common.certification.emailPlaceholder'))
        return
      }
      if (!this.phone) {
        this.$utils.showToast(this.$t('common.certification.phonePlaceholder'))
        return
      }
      if (!this.fileurl) {
        this.$utils.showToast(this.$t('common.certification.idCardFrontPlaceholder'))
        return
      }
      if (!this.fileurl1) {
        this.$utils.showToast(this.$t('common.certification.idCardBackPlaceholder'))
        return
      }

      const token = uni.getStorageSync('token')
      const data = {
        name: this.realname,
        email: this.email,
        phone: this.phone,
        front: this.fileurl,
        reverse_side: this.fileurl1
      }

      this.$u.api.index.bind_real(token, data).then(res => {
        this.$utils.showToast(res.msg)
        if (res.code === 200) {
          // 提交成功后，设置为审核中状态
          this.authStatus = 2
        }
      })
    },
    // 返回
    back() {
      uni.switchTab({
        url: '/pages/index/index'
      })
    }
  }
}
</script>

<style>
/* 主容器样式 */
.main-content {
  width: 100%;
  box-sizing: border-box;
  padding: 40rpx 24rpx;

  display: flex;
  justify-content: center;
}

/* 认证卡片样式 - 参考界面风格 */
.auth-card {
  width: 100%;
  max-width: 680rpx;
  box-sizing: border-box;
  border-radius: 22rpx;
  padding: 54rpx 40rpx 44rpx;

  background: rgba(20, 26, 40, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 16rpx 40rpx rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  overflow: hidden;
}


/* 卡片标题和描述 */
.auth-header {
  margin-bottom: 40rpx;
}

.auth-title {
  font-size: 34rpx;
  font-weight: 800;
  letter-spacing: 4rpx;
  margin-bottom: 16rpx;
  line-height: 1.2;
}

.auth-desc {
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 22rpx;
  line-height: 1.45;
}

/* 状态标签 - 参考界面风格 */
.auth-status {
  display: inline-block;
  padding: 15rpx 40rpx;
  border-radius: 50rpx;
  font-size: 24rpx;
  font-weight: bold;
  margin-bottom: 40rpx;
  text-transform: uppercase;
  letter-spacing: 2rpx;
}

.auth-status.success {
  background-color: rgba(76, 175, 80, 0.3);
  color: #4CAF50;
  border: 1px solid #4CAF50;
}

.auth-status.pending {
  background-color: rgba(255, 193, 7, 0.2);
  color: #FFC107;
  border: 2px solid #FFC107;
  box-shadow: 0 0 15rpx rgba(255, 193, 7, 0.5);
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 165, 0, 0.2));
}

/* 已实名和审核中状态内容 */
.auth-success-content,
.auth-pending-content {
  margin-top: 20rpx;
}

.auth-icon {
  margin-bottom: 30rpx;
}

.auth-result {
  font-size: 28rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15rpx;
}

.auth-note {
  font-size: 20rpx;
  color: #aaa;
  line-height: 1.5;
}

/* 表单样式 - 参考界面风格 */
.auth-form {
  margin-top: 20rpx;
}

.form-item {
  margin-bottom: 26rpx;
}

.form-item label {
  color: rgba(255, 255, 255, 0.72);
  font-size: 24rpx;
  margin-bottom: 12rpx;
}

/* 表单输入框 - 参考界面风格 */
.form-input {
  width: 100%;
  height: 92rpx;
  padding: 0 26rpx;
  background: rgba(45, 52, 68, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12rpx;
  color: #fff;
  font-size: 26rpx;
  box-shadow: none;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.35);
  font-size: 24rpx;
}

/* 上传区域样式 */
.upload-area {
  margin-top: 12rpx;
}

/* 覆盖 u-upload 添加按钮的样式（白块） */
.u-upload .u-add-wrap {
  background: #ffffff !important;
  border-radius: 14rpx !important;
  border: 0 !important;
  box-shadow: 0 8rpx 18rpx rgba(0,0,0,0.18);
  overflow: hidden;
}

/* +号 */
.u-upload .u-add-btn {
  color: rgba(0,0,0,0.35) !important;
}

/* “Please upload ...” 文案 */
.u-upload .u-add-tips {
  color: rgba(0,0,0,0.55) !important;
  font-size: 22rpx !important;
  margin-top: 16rpx !important;
  padding: 0 18rpx;
  text-align: center;
  line-height: 1.3;
}

/* 预览缩略图圆角更贴近 */
.u-upload .u-list-item,
.u-upload .u-preview-image {
  border-radius: 14rpx !important;
}

.upload-label {
  margin-bottom: 12rpx;
  font-weight: 600;
}

/* 按钮区域样式 */
.button-area {
  margin-top: 34rpx;
}

/* 提交按钮 - 参考界面风格 */
.submit-button {
  width: 100%;
  height: 96rpx;
  line-height: 96rpx;
  border-radius: 16rpx;
  font-size: 28rpx;
  font-weight: 700;
  letter-spacing: 2rpx;
  text-transform: none;

  background: linear-gradient(90deg, #3aa0ff, #1c6dff);
  color: #fff;
  border: none;

  box-shadow: 0 12rpx 28rpx rgba(28,109,255,0.45);
  transition: all 0.3s ease;
}


.submit-button:hover {
  background-color: #0056b3;
  box-shadow: 0 6rpx 20rpx rgba(0, 118, 250, 0.7), 0 0 25rpx rgba(0, 118, 250, 0.4);
}

.submit-button:disabled {
  background: linear-gradient(90deg, #2f86ff, #1a6dff);
  color: #ffffff;
  opacity: 0.6;
  box-shadow: 0 10rpx 24rpx rgba(43, 124, 255, 0.25);
}

/* 成功区：不要再居中一列 */
.auth-success-content{
  margin-top: 20rpx;
  text-align: center;
}


/* 绿色胶囊：靠左 + 扁平一点 */
.auth-status.success{
  display: inline-flex;
  align-items: center;
  padding: 14rpx 34rpx;
  border-radius: 999rpx;
  font-size: 22rpx;
  font-weight: 800;
  letter-spacing: 2rpx;

  background: rgba(46, 204, 113, 0.18);
  border: 1px solid rgba(46, 204, 113, 0.45);
  color: #35d06f;

  margin: 18rpx 0 26rpx;
}

/* 左勾 + 右文案 */
.success-row{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18rpx;
}

/* 左侧圆勾（大圈） */
.success-check{
  margin-top: 18rpx;
}

/* 右侧文本 */
.success-text .auth-result{
  text-align: center;
}

.success-text .auth-note{
  text-align: center;
}

.success-check.pending{
  border-color: rgba(255,193,7,0.65);
  background: rgba(255,193,7,0.10);
}

.auth-header{
  text-align: center;
}
.auth-title{
  text-align: center;
  font-size: 38rpx;
  font-weight: 800;
  letter-spacing: 2rpx;
}
.auth-desc{
  text-align: center;
}

</style>