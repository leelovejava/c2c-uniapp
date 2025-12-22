<template>
	<view class="certification-container">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />

			<view class="certification-content">
				<view class="certification-card">
					<view class="card-header">
						<text class="header-title">{{ $t('common.certification.title') }}</text>
						<text class="header-subtitle">{{ $t('common.certification.subtitle') }}</text>
					</view>

					<!-- 认证状态显示 -->
					<view v-if="verificationStatus !== null" class="verification-status">
						<view class="status-badge" :class="getStatusClass()">
							{{ getStatusText() }}
						</view>
					</view>

					<!-- 审核成功时显示成功信息 -->
					<view v-if="verificationStatus === 1" class="success-message">
						<view class="success-icon">✓</view>
						<text class="success-text">{{ $t('common.certification.successTitle') }}</text>
						<text class="success-subtext">{{ $t('common.certification.successSubtitle') }}</text>
					</view>

					<!-- 审核中或审核失败时显示表单 -->
					<view class="certification-form" v-else>
						<view class="form-group">
							<label class="form-label">{{ $t('common.certification.nameLabel') }}</label>
							<input type="text" v-model="formData.name" class="form-input"
								:placeholder="$t('common.certification.namePlaceholder')" required>
						</view>

						<view class="form-group">
							<label class="form-label">{{ $t('common.certification.emailLabel') }}</label>
							<input type="email" v-model="formData.email" class="form-input"
								:placeholder="$t('common.certification.emailPlaceholder')" required>
						</view>

						<view class="form-group">
							<label class="form-label">{{ $t('common.certification.phoneLabel') }}</label>
							<input type="tel" v-model="formData.phone" class="form-input"
								:placeholder="$t('common.certification.phonePlaceholder')" required>
						</view>

						<view class="submit-section">
							<button type="submit" class="submit-button"
								@click="submitCertification">{{ $t('common.certification.submitButton') }}</button>
						</view>
					</view>
				</view>
			</view>
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
				formData: {
					name: '',
					email: '',
					phone: ''
				},
				verificationStatus: null // 实名认证状态: 0-审核中, 1-审核成功, 2-审核失败, null-未获取
			};
		},
		onLoad() {
			// 页面加载时获取实名认证状态
			this.init();
		},
		methods: {
			init() {
				const token = uni.getStorageSync('token');
				this.$u.api.index.is_verified(token).then(res => {
					if (res.code === 1 && res.data) {
						this.verificationStatus = res.data.status;
					}
				}).catch(err => {
					console.error('获取实名认证状态失败:', err);
				});
			},
			getStatusText() {
				switch (this.verificationStatus) {
					case 0:
						return this.$t('common.certification.statusPending');
					case 1:
						return this.$t('common.certification.statusSuccess');
					case 2:
						return this.$t('common.certification.statusFailed');
					default:
						return '';
				}
			},
			getStatusClass() {
				switch (this.verificationStatus) {
					case 0:
						return 'status-pending';
					case 1:
						return 'status-success';
					case 2:
						return 'status-failed';
					default:
						return '';
				}
			},
			submitCertification() {
				// 表单验证
				if (!this.formData.name || !this.formData.email || !this.formData.phone) {
					this.$utils.showToast('请填写所有必填字段');
					return;
				}

				// 邮箱格式验证
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(this.formData.email)) {
					this.$utils.showToast('请输入有效的邮箱地址');
					return;
				}

				// 电话号码验证（简单验证）
				const phoneRegex = /^1[3-9]\d{9}$/;
				if (!phoneRegex.test(this.formData.phone)) {
					this.$utils.showToast('请输入有效的电话号码');
					return;
				}

				// 提交数据到 api/user/bind_real
				const token = uni.getStorageSync('token');
				this.$u.api.index.bind_real(
					token,
					this.formData.name,
					this.formData.email,
					this.formData.phone
				).then(res => {
					this.$utils.showToast(res.msg);
					if (res.code === 1) {
						// 提交成功后更新状态为审核中
						this.verificationStatus = 0;
						// 1.5秒后返回上一页
						setTimeout(() => {
							// uni.navigateBack();
						}, 1500);
					}
				}).catch(err => {
					this.$utils.showToast('提交失败，请重试');
				});
			},
			back() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.certification-container {
		width: 100%;
		min-height: 100vh;
	}

	.certification-content {
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 100px);
		box-sizing: border-box;
	}

	.certification-card {
		width: 100%;
		max-width: 500px;
		background: rgba(26, 35, 58, 0.85);
		border-radius: 20px;
		padding: 30px 25px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		margin: 20px;
	}

	.card-header {
		text-align: center;
		margin-bottom: 30px;
	}

	.card-header .header-title {
		display: block;
		color: #fff;
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	.card-header .header-subtitle {
		display: block;
		color: rgba(255, 255, 255, 0.7);
		font-size: 16px;
	}

	.verification-status {
		text-align: center;
		margin-bottom: 20px;
	}

	.status-badge {
		display: inline-block;
		padding: 8px 20px;
		border-radius: 20px;
		font-weight: 600;
		font-size: 16px;
	}

	.status-pending {
		background-color: rgba(255, 193, 7, 0.2);
		color: #ffc107;
		border: 1px solid rgba(255, 193, 7, 0.5);
	}

	.status-success {
		background-color: rgba(40, 167, 69, 0.2);
		color: #28a745;
		border: 1px solid rgba(40, 167, 69, 0.5);
	}

	.status-failed {
		background-color: rgba(220, 53, 69, 0.2);
		color: #dc3545;
		border: 1px solid rgba(220, 53, 69, 0.5);
	}

	.success-message {
		text-align: center;
		padding: 30px 20px;
	}

	.success-icon {
		font-size: 48px;
		color: #28a745;
		margin-bottom: 15px;
	}

	.success-text {
		display: block;
		color: #fff;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 10px;
	}

	.success-subtext {
		display: block;
		color: rgba(255, 255, 255, 0.7);
		font-size: 16px;
	}

	.certification-form {
		width: 100%;
	}

	.form-group {
		margin-bottom: 25px;
	}

	.form-group:last-child {
		margin-bottom: 0;
	}

	.form-label {
		display: block;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 10px;
		font-weight: 500;
	}

	.form-input {
		width: 100%;
		padding: 0px 20px;
		height: 50px;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		color: white;
		font-size: 16px;
		box-sizing: border-box;
		transition: all 0.3s ease;
		caret-color: white;
	}

	.form-input::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	.form-input:focus {
		outline: none;
		border-color: #1E90FF;
		background: rgba(30, 144, 255, 0.2);
		box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.2);
	}

	.submit-section {
		margin-top: 30px;
	}

	.submit-button {
		line-height: 1.2;
		width: 100%;
		padding: 18px;
		border-radius: 12px;
		background: linear-gradient(135deg, #1E90FF, #0a5bc4);
		border: none;
		color: white;
		font-size: 18px;
		font-weight: 600;
		text-align: center;
		cursor: pointer;
		box-shadow: 0 6px 20px rgba(30, 144, 255, 0.4);
		transition: all 0.3s ease;
	}

	.submit-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(30, 144, 255, 0.5);
	}

	.submit-button:active {
		transform: translateY(0);
	}
</style>