<template>
	<view class="">
		<view class="a-pr" style="z-index: 3;">
			<navbar />

			<view class="a-p15 a-crfff">
				<div class="main-content" style="max-width: 750px;margin: 0 auto;">
					<h2 style="margin: 16px 0 8px; font-size: 24px; font-weight: 900;">{{ $t('common.index.title') }}
					</h2>
					<p class="intro-paragraph"
						style="margin: 0 0 16px; font-size: 20px; line-height: 1.6; font-weight: 600;">
						{{ $t('common.index.subtitle') }}
					</p>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						{{ $t('common.index.intro') }}
					</p>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">
						{{ $t('common.index.suitableUsersTitle') }}
					</p>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						{{ $t('common.index.suitableUsersIntro') }}
					</p>
					<ul style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li v-for="(user, index) in $t('common.index.suitableUsers')" :key="index">{{ user }}</li>
					</ul>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">
						{{ $t('common.index.coreFeaturesTitle') }}
					</p>
					<ol style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li v-for="(feature, index) in $t('common.index.coreFeatures')" :key="index">
							<strong>{{ feature.title }}</strong><br>
							{{ feature.content }}<br>
							<template v-if="feature.supportedCurrenciesTitle">
								{{ feature.supportedCurrenciesTitle }}
								<ul style="margin: 5px 0 15px; padding-left: 20px;">
									<li v-for="(currency, idx) in feature.supportedCurrencies" :key="idx">{{ currency }}
									</li>
								</ul>
							</template>
							<template v-if="feature.transferTime">
								<span v-for="(time, idx) in feature.transferTime" :key="idx">{{ time }}<br></span>
							</template>
						</li>
					</ol>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">
						{{ $t('common.index.exchangeProcessTitle') }}
					</p>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						{{ $t('common.index.exchangeProcessIntro') }}
					</p>
					<ul style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li v-for="(process, index) in $t('common.index.exchangeProcess')" :key="index">
							<strong>{{ process.title }}</strong><br>
							<span v-for="(step, idx) in process.steps" :key="idx">{{ step }}<br></span>
						</li>
					</ul>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">
						{{ $t('common.index.whyCantBuyTitle') }}
					</p>
					<ul style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li v-for="(reason, index) in $t('common.index.whyCantBuyReasons')" :key="index">{{ reason }}
						</li>
					</ul>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						{{ $t('common.index.valueProposition') }}
					</p>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">
						{{ $t('common.index.safetyTitle') }}
					</p>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						{{ $t('common.index.safetyIntro') }}
					</p>
					<ul style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li v-for="(feature, index) in $t('common.index.safetyFeatures')" :key="index">{{ feature }}
						</li>
					</ul>
					<div class="grid-container" style="padding-top: 50px; cursor: pointer;"
						@click="$u.route('/pages/my/exchange')">
						<div class="grid-item">
							<img src="static/image/fz/europe.png">
								<span>{{ $t('common.index.regions.europe') }}</span>
						</div>
						<div class="grid-item">
							<img src="static/image/fz/unitedstate.png"
								:alt="$t('common.index.regions.unitedStates')">
								<span>{{ $t('common.index.regions.unitedStates') }}</span>
						</div>
						<div class="grid-item">
							<img src="static/image/fz/canada.png"
								:alt="$t('common.index.regions.canada')">
								<span>{{ $t('common.index.regions.canada') }}</span>
						</div>
						<div class="grid-item">
							<img src="static/image/fz/singapore.png"
								:alt="$t('common.index.regions.singapore')">
								<span>{{ $t('common.index.regions.singapore') }}</span>
						</div>
						<div class="grid-item">
							<img src="static/image/fz/switzerland.png"
								:alt="$t('common.index.regions.switzerland')">
								<span>{{ $t('common.index.regions.switzerland') }}</span>
						</div>
						<div class="grid-item">
							<img src="static/image/fz/unitedkingdom.png"
								:alt="$t('common.index.regions.unitedKingdom')"><span>
								{{ $t('common.index.regions.unitedKingdom') }}</span>
						</div>
					</div>
					<div class="info-card">
						<div class="icon"><i class="fas fa-paper-plane"></i></div>
						<h3>{{ $t('common.index.infoCards[0].title') }}</h3>
						<p>{{ $t('common.index.infoCards[0].description') }}</p>
					</div>
					<div class="info-card">
						<div class="icon"><i class="fas fa-clock"></i></div>
						<h3>{{ $t('common.index.infoCards[1].title') }}</h3>
						<p>{{ $t('common.index.infoCards[1].description') }}</p>
					</div>
					<div class="info-card">
						<div class="icon"><i class="fas fa-lock"></i></div>
						<h3>{{ $t('common.index.infoCards[2].title') }}</h3>
						<p>{{ $t('common.index.infoCards[2].description') }}</p>
					</div>
				</div>
			</view>
		</view>
		<view class="a-pf a-w" style="top: 0;left: 0;height: 100vh;z-index: 0;z-index: 1; ">
			<video class="a-w a-h" objectFit="cover" src="https://pub-f83e37bae9b949e58842d2a37ee3a701.r2.dev/ea1.mp4"
				:controls="false" :show-center-play-btn="false" :show-play-btn="false" :show-fullscreen-btn="false"
				:enable-progress-gesture="false" autoplay loop muted></video>
		</view>



		<!-- 用户站内信 弹窗 -->
		<u-popup v-model="showAnnouncement" mode="center" border-radius="12" width="80%">
			<u-icon name="close" class="close-btn" @click="showAnnouncement = false" size="30"></u-icon>
			<scroll-view class="" style="height: 600rpx;">
				<view class="popup-content">
					<h3>{{ latest.title }}</h3>
					<u-parse :html="latest.content"></u-parse>

          <!-- 确认按钮 -->
          <u-button
              type="primary"
              style="margin-top: 30rpx;"
              @click="confirmAnnouncement"
          >
            我已知晓
          </u-button>
				</view>
			</scroll-view>
		</u-popup>

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
        // 是否显示 用户站内信
				showAnnouncement: false,
				latest: {
          id: 0
        },
			};
		},
		onLoad(options) {
			uni.hideTabBar();
			const token = uni.getStorageSync('token')
			this.$u.api.index.announcement_latest(token).then(res => {
				this.latest = res.data
				if (res.data.title) {
					this.showAnnouncement = true
				}
			})
		},
		onShow() {

		},
		methods: {
			// 获取首页公告
			getNocar() {
				const token = uni.getStorageSync('token')
				this.$u.api.index.get_noc(token).then(res => {
					let lang = this.$store.state.lang
					this.news = [res.data[lang]]
				})
			},
      // 标记 用户站内信为已读
      confirmAnnouncement() {
        if (!this.latest || !this.latest.id) {
          this.showAnnouncement = false
          return
        }

        const token = uni.getStorageSync('token')

        this.$u.api.index.announcement_read(token, this.latest.id).then(res => {
          // 成功后关闭弹窗
          this.showAnnouncement = false
          this.latest = {}
        }).catch(() => {
          // 就算失败，也别卡用户
          this.showAnnouncement = false
        })
      },

      // 右上角关闭（也视为已读）
      closeAnnouncement() {
        this.confirmAnnouncement()
      }
		},
		computed: {
			common() {
				return this.$t("common")
			}
		},
		onHide() {
			clearInterval(this.intervalId); // 在组件销毁前清除定时器
		},
		watch: {
			//当语言发生变化时
			'$store.state.lang'(val) {
				const {
					i18n
				} = this
				this.$utils.setTabbar(this)
				this.setDefaultLang()
				this.homeNav.forEach(item => {
					item.name = i18n[item.title]
				})
			}
		},
		filters: {
			sort2Icon(sort) {
				switch (sort) {
					case 'none':
						return require('static/image/icon/sort.png');
						break;
					case 'up':
						return require('static/image/icon/sort-up.png');
						break;
					case 'down':
						return require('static/image/icon/sort-down.png');
						break;
				}
			},
		},
	}
</script>
<style lang="scss" scoped>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
		margin-bottom: 30px;

		.grid-item {
			background-color: #000;
			padding: 20px;
			text-align: left;
			border-radius: 10px;
			color: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			border: 1px solid rgba(255, 255, 255, 0.2);

			img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				margin-right: 15px;
			}
		}
	}

	.info-card {
		padding: 20px;
		border-radius: 10px;
		text-align: center;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
	}

	.info-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		z-index: -1;
	}

	.info-card h3 {
		margin: 0 0 5px 0;
		font-size: 18px;
	}

	.info-card p {
		margin: 0;
		font-size: 14px;
		color: #ccc;
	}
</style>
<style lang="scss" scoped>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
		margin-bottom: 30px;

		.grid-item {
			background-color: #000;
			padding: 20px;
			text-align: left;
			border-radius: 10px;
			color: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			border: 1px solid rgba(255, 255, 255, 0.2);

			img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				margin-right: 15px;
			}
		}
	}

	.info-card {
		padding: 20px;
		border-radius: 10px;
		text-align: center;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
	}

	.info-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		z-index: -1;
	}

	.info-card h3 {
		margin: 0 0 5px 0;
		font-size: 18px;
	}

	.info-card p {
		margin: 0;
		font-size: 14px;
		color: #ccc;
	}

	/* 公告弹窗样式 */
	.popup-content {
		padding: 30px;
		color: #333;
		position: relative;
		text-align: center;
	}

	.close-btn {
		position: absolute;
		top: 15px;
		right: 20px;
		color: #999;
		z-index: 666;
	}

	.popup-content h3 {
		margin: 0 0 20px 0;
		font-size: 20px;
		color: #333;
	}

	.popup-content p {
		margin: 10px 0;
		font-size: 14px;
		line-height: 1.6;
		color: #666;
	}

	.popup-date {
		margin-top: 20px;
		font-size: 12px;
		color: #999;
	}
</style>