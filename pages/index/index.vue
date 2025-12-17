<template>
	<view class="">
		<view class="a-pr" style="z-index: 3;">
			<navbar />

			<view class="a-p15 a-crfff">
				<div class="main-content" style="max-width: 750px;margin: 0 auto;">
					<h2 style="margin: 16px 0 8px; font-size: 24px; font-weight: 900;">DEX:OFX</h2>
					<p class="intro-paragraph"
						style="margin: 0 0 16px; font-size: 20px; line-height: 1.6; font-weight: 600;">USDT is converted
						into legal tender</p>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						For users in many areas, it is a common problem that they can't easily buy USDT (stable
						currency) due to limited payment channels, bank restrictions, local supervision, or lack of
						compliance exchanges. DEX:OFX provides a safe, compliant and highly liquid way to help users
						smoothly convert digital assets into local legal tender.
					</p>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">First, which
						users are suitable?</p>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						DEX:OFX's legal currency exchange mechanism is especially suitable for the following groups:
					</p>
					<ul style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li>Local banks prohibit or restrict the purchase of cryptocurrencies.</li>
						<li>Credit/debit cards cannot purchase USDT on the exchange.</li>
						<li>The local exchange lacks USDT liquidity.</li>
						<li>Want to avoid complicated KYC or high formalities.</li>
						<li>Want to quickly convert digital assets into local legal tender (EUR, CAD ,USD ,SGD, CHF,
							etc.).</li>
					</ul>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">Second, DEX: the
						core function of OFX</p>
					<ol style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li><strong>USDT → French currency exchange</strong><br>
							Users can transfer USDT to the designated wallet address of DEX:OFX, and the system will
							automatically convert it into designated legal tender according to the real-time exchange
							rate, and complete the transfer through the cooperative financial network.<br>
							Supported legal tender includes (but is not limited to):
							<ul style="margin: 5px 0 15px; padding-left: 20px;">
								<li>USD dollars</li>
								<li>HKD</li>
								<li>SGD SGD</li>
								<li>TWD nt $</li>
								<li>EUR euro</li>
								<li>AUD Australian dollar</li>
							</ul>
						</li>
						<li><strong>No exchange account is required.</strong><br>
							There is no need for centralized exchanges such as coinbase-crypto.com.<br>
							Lower the threshold, especially for users who can't register for the exchange.
						</li>
						<li><strong>Global cross-border receipt capacity</strong><br>
							Relying on OFX's global cross-border payment network, we can achieve fast payment;<br>
							Transfer in the same country: same day or 1 working day<br>
							International remittance: 1-3 working days<br>
							(depending on the regional bank)
						</li>
						<li><strong>Transparent exchange rate and low handling fee.</strong><br>
							The exchange adopts real-time market price, and the fee is fixed and transparent, so as to
							avoid hiding the handling fee.
						</li>
					</ol>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">III. Example of
						Exchange Process</p>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						The following is the general exchange process (which can be adjusted according to your business
						needs):
					</p>
					<ul style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li><strong>Submit an exchange application</strong><br>
							The user selects the legal tender, amount and receiving bank.<br>
							The system generates the USDT collection address (TRC20 or ERC20).<br>
							User transfers to USDT or other cryptocurrency.
						</li>
						<li><strong>DEX:OFX performs exchange</strong><br>
							The system converts the exchange price into the required legal tender in real time.
						</li>
						<li><strong>Legal tender to account</strong><br>
							Remittance to user account through international financial network or local banking system.
						</li>
					</ul>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">4. Why can't
						many people buy USDT?</p>
					<ul style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li>The bank does not allow the category of "cryptocurrency transaction"</li>
						<li>Credit card companies block encrypted purchases.</li>
						<li>Local regulatory restrictions</li>
						<li>The exchange requires a high KYC</li>
						<li>Exchange withdrawal fees are high.</li>
						<li>There is no stable currency distribution channel in the local area.</li>
						<li>Some countries do not have legal encryption exchanges.</li>
					</ul>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						Dex: The value of OFX is to help these people cross financial barriers and use French currency
						directly.
					</p>
					<p style="margin: 16px 0 8px; font-size: 20px; line-height: 1.6; font-weight: 600;">V. Safety and
						supervision (focusing on increasing trust)</p>
					<p style="margin: 6px 0; font-size: 16px; line-height: 1.8;">
						Based on the concept of OFX system, it emphasizes supervision, compliance and transparent
						process.
					</p>
					<ul style="margin: 10px 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.8;">
						<li>All capital flows have been audited by AML and KYC.</li>
						<li>The user's receiving bank needs to be verified.</li>
						<li>The whole process can be traced and audited.</li>
					</ul>
					<div class="grid-container" style="padding-top: 50px; cursor: pointer;"
						onclick="window.location.href='/index/exchange/'">
						<div class="grid-item"><img src="https://www.currencyexch.top/statics/new/img/europe.png"
								alt="歐洲"><span>歐洲</span></div>
						<div class="grid-item"><img src="https://www.currencyexch.top/statics/new/img/unitedstate.png"
								alt="美國"><span>美國</span></div>
						<div class="grid-item"><img src="https://www.currencyexch.top/statics/new/img/canada.png"
								alt="加拿大"><span>加拿大</span></div>
						<div class="grid-item"><img src="https://www.currencyexch.top/statics/new/img/singapore.png"
								alt="新加坡"><span>新加坡</span></div>
						<div class="grid-item"><img src="https://www.currencyexch.top/statics/new/img/switzerland.png"
								alt="瑞士"><span>瑞士</span></div>
						<div class="grid-item"><img src="https://www.currencyexch.top/statics/new/img/unitedkingdom.png"
								alt="英國"><span>英國</span></div>
					</div>
					<div class="info-card">
						<div class="icon"><i class="fas fa-paper-plane"></i></div>
						<h3>易於使用</h3>
						<p>在線兌換超過150個國家的貨幣</p>
					</div>
					<div class="info-card">
						<div class="icon"><i class="fas fa-clock"></i></div>
						<h3>快速、可靠的轉賬</h3>
						<p>即時兌換實時市場匯率</p>
					</div>
					<div class="info-card">
						<div class="icon"><i class="fas fa-lock"></i></div>
						<h3>值得信賴且安全</h3>
						<p>經授權監管的P2P機構</p>
					</div>
				</div>
			</view>
		</view>
		<view class="a-pf a-w" style="top: 0;left: 0;height: 100vh;z-index: 0;z-index: 1; ">
			<video class="a-w a-h" objectFit="cover" src="https://pub-f83e37bae9b949e58842d2a37ee3a701.r2.dev/ea1.mp4"
				:controls="false" :show-center-play-btn="false" :show-play-btn="false" :show-fullscreen-btn="false"
				:enable-progress-gesture="false" autoplay loop muted></video>
		</view>



		<!-- 公告弹窗 -->
		<u-popup v-model="showAnnouncement" mode="center" border-radius="12" width="80%">
				<u-icon name="close" class="close-btn" @click="showAnnouncement = false" size="30"></u-icon>
				<scroll-view class="" style="height: 600rpx;">
					<view class="popup-content">
						<h3>{{ latest.title }}</h3>
						<u-parse :html="latest.content"></u-parse>
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
			showAnnouncement: false,
			latest: {},
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