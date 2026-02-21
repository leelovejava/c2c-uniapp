<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="main-container">
				<div class="cashout-container">
					<div class="tabs">
						<button :class="['tab-button', { active: activeTab == 0 }]"
							@click="switchTab(0)">ERC20</button>
            <button :class="['tab-button', { active: activeTab == 1 }]"
                    @click="switchTab(1)">TRC20</button>
						<button :class="['tab-button', { active: activeTab == 2 }]"
							@click="switchTab(2)">BTC</button>
					</div>
				</div>
				<div class="bank-card-form">
					<h2 class="form-title">{{$t('bindTrc20.formTitle')}}</h2>
					<div class="a-center2 a-mb10">
						<QiyanQrcode :text="ewmUrl[activeTab]"></QiyanQrcode>
					</div>

          <!--复制-->
          <div class="a-center2 a-mb20 a-flex" style="gap:10px; align-items:center;">
            <span style="word-break: break-all; flex:1;">{{ ewmUrl[activeTab] }}</span>
            <button class="copy-btn" @click="copyAddress(ewmUrl[activeTab])">
              {{$t('common.navbar.copy')}}
            </button>
          </div>


          <div class="form-group">
						<label class="form-label">{{$t('bindTrc20.moneyLabel')}}</label>
						<input type="number" v-model="form.money" class="form-input"
							:placeholder="$t('bindTrc20.moneyPlaceholder')" step="0.01">
					</div>

					<div class="form-group">
						<label class="form-label">{{$t('bindTrc20.imageLabel')}}</label>
						<view class="upload-container" @click="chooseImage">
							<image v-if="form.image" :src="form.image" mode="aspectFit" class="preview-image"></image>
							<view v-else class="upload-placeholder">
								<text class="upload-icon">+</text>
								<text>{{$t('bindTrc20.imagePlaceholder')}}</text>
							</view>
							<view v-if="form.image" class="delete-btn" @click.stop="deleteImage">
								<text class="delete-icon">×</text>
							</view>
						</view>
					</div>

					<button class="submit-button" @click="submitRecharge">{{$t('bindTrc20.submitButton')}}</button>
				</div>
			</div>
		</view>

	</view>
</template>
<script>
	import navbar from "@/components/navbar.vue";
	import QiyanQrcode from "@/components/qiyan-qrcode/qiyan-qrcode.vue"
	export default {
		components: {
			navbar,
			QiyanQrcode
		},
		data() {
			return {
				activeTab:0,
				ewmUrl:['0xCd321F4de742014D99136ac6D61695b282F462a6','TDXk2ZWrMUW7NX6K39Tj6tBDUPCZdupZS6','bc1p49vp4v72xr62r646kl4fz2xxtngj84rejyq6nmrpdweazrfzzndsvxttvu'],
				form: {
					money: '',
					image: ''
				}
			};
		},
		onLoad(options) {
			// const token = uni.getStorageSync('token')
			// this.$u.api.index.getUserinfo(token).then(res => {
			//     this.form.uid = res.data.uid
			// })
		},
		methods: {
			copyAddress(text) {
				uni.setClipboardData({
				data: text,
				success: () => {
					uni.showToast({
					// 复制成功
					title: this.$t('common.navbar.copySuccess'),
					icon: 'success'
					});
				},
				fail: () => {
					uni.showToast({
					// 复制失败
					title: this.$t('common.navbar.copyFailed'),
					icon: 'error'
					});
				}
				});
			},
			switchTab(tabName) {
				this.activeTab = tabName;
			},
			chooseImage() {
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					count: 1,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]
						const token = uni.getStorageSync('token')
						uni.uploadFile({
							url: this.$store.state.baseDomain + '/api/index/upload',
							filePath: tempFilePaths,
							header: {
								'token': token
							},
							success: (res) => {
								res.data = JSON.parse(res.data)
								if (res.data.code == 1) {
									this.form.image = this.$store.state.baseDomain + res.data.data.url
								}
							},
							fail: (err) => {
								console.log(err)
							}
						})
					}
				})
			},
			deleteImage() {
				this.form.image = ''
			},
			submitRecharge() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.add_Recharge(token, this.form).then(res => {
					if (res.code == 1) {
						uni.showToast({
							title: this.$t('bindTrc20.successMessage'),
							icon: 'success'
						})

						// ✅ 重置表单
						this.form.money = '';
						this.form.image = '';
					} else {
						uni.showToast({
							title: res.msg || this.$t('bindTrc20.failMessage'),
							icon: 'error'
						})
					}
				}).catch(err => {
					uni.showToast({
						title: this.$t('bindTrc20.networkErrorMessage'),
						icon: 'error'
					})
				})
			},
		},
	}
</script>
<style lang="scss" scoped>
	.main-container {
		padding: 20px;
		max-width: 600px;
		margin: 0 auto;
	}

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
			padding: 10rpx 30rpx;
			line-height: 1.7;
			border-radius: 120px;
			cursor: pointer;
			margin-right: 10px;
			font-size: 32rpx;
			transition: all 0.3s ease;
			width: 33%;
		}

	}

	.bank-card-form {
		background-color: rgba(13, 17, 30, 0.85);
		border-radius: 12px;
		padding: 25px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
	}

	.form-title {
		color: #fff;
		font-size: 22px;
		font-weight: bold;
		margin-bottom: 25px;
		text-align: center;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-label {
		display: block;
		color: #e0e0e0;
		font-size: 14px;
		margin-bottom: 8px;
		font-weight: 500;
	}

	.form-input {
		width: 100%;
		height: 100rpx;
		padding: 0 20rpx;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		background-color: rgba(255, 255, 255, 0.05);
		color: #fff;
		font-size: 16px;
		transition: all 0.3s ease;
		box-sizing: border-box;

		&:focus {
			outline: none;
			border-color: #1E90FF;
			background-color: rgba(255, 255, 255, 0.08);
			box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
		}

		&::placeholder {
			color: rgba(255, 255, 255, 0.4);
		}
	}

	select.form-input {
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 15px center;
	}

	select.form-input option {
		background-color: #0d111e;
		color: #fff;
		padding: 8px;
	}

	.form-textarea {
		width: 100%;
		height: 100px;
		padding: 12px 15px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		background-color: rgba(255, 255, 255, 0.05);
		color: #fff;
		font-size: 16px;
		transition: all 0.3s ease;
		box-sizing: border-box;
		resize: vertical;

		&:focus {
			outline: none;
			border-color: #1E90FF;
			background-color: rgba(255, 255, 255, 0.08);
			box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
		}

		&::placeholder {
			color: rgba(255, 255, 255, 0.4);
		}
	}

	.submit-button {
		width: 100%;
		padding: 14px;
		line-height: 1.5;
		background-color: #1E90FF;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-top: 10px;

		&:hover {
			background-color: #4169E1;
			transform: translateY(-2px);
			box-shadow: 0 4px 12px rgba(30, 144, 255, 0.4);
		}

		&:active {
			transform: translateY(0);
		}
	}
  .copy-btn {
    background: rgba(30,144,255,0.18);
    color: #1E90FF;
    border: 1px solid rgba(30,144,255,0.6);
    padding: 8rpx 26rpx;
    border-radius: 16rpx;
    font-size: 26rpx;
    backdrop-filter: blur(6px);
    box-shadow: 0 0 10px rgba(30,144,255,0.35);
    transition: all 0.25s ease;
  }

  .copy-btn:active {
    transform: scale(0.96);
    opacity: 0.7;
  }

  .copy-btn.copied {
    border-color: #00ffa2;
    color: #00ffa2;
    background: rgba(0,255,162,0.22);
    box-shadow: 0 0 14px rgba(0,255,162,0.6);
  }

  .upload-container {
    width: 100%;
    height: 200rpx;
    border: 1px dashed rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.05);
    cursor: pointer;
    position: relative;
  }

  .upload-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a0aec0;
  }

  .upload-icon {
    font-size: 40rpx;
    margin-bottom: 8rpx;
  }

  .preview-image {
    width: 100%;
    height: 200rpx;
    border-radius: 8px;
  }

  .delete-btn {
    position: absolute;
    top: -10rpx;
    right: -10rpx;
    width: 40rpx;
    height: 40rpx;
    background-color: #ff4d4f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete-icon {
    color: #fff;
    font-size: 28rpx;
    font-weight: bold;
  }
</style>