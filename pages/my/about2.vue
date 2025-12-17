<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(../../static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="main-content"><!-- 页面标题 -->
				<div class="page-header">
					<h1>關於我們</h1>
					<p class="a-f28">Founded in 2001, OFX is a multinational financial technology company focusing on global capital transfer and foreign exchange services. The company comes from a clear concept: to provide better, fairer and more efficient cross-border capital solutions for global customers. Since its establishment, OFX has served more than 1 million customers, supported 50+ currencies, covered more than 170 countries and markets, and handled more than 1.48 trillion US dollars in accumulated funds.

Global network layout: It has offices in London, Dublin, Sydney, Auckland, Hong Kong, Singapore, Toronto and San Francisco, with more than 700 employees worldwide, and has a solid operating network and localization service capabilities.

Strong regulatory advantage: it is supervised by more than 50 regulatory agencies around the world and follows strict financial auditing and compliance standards. Since listing, there has been no regulatory punishment or law enforcement action, and the risk management ability is sound.</p>
				</div><!-- 卡片容器 -->
				<div class="cards-container"><!-- 主要介绍卡片 -->
					<div class="info-card hero-card a-tc">
						<div class="icon">
							<image mode="widthFix" style="width:80rpx"
								src="/static/image/fz/www.currencyexch.top_index_support_about(iPhone SE).png"></image>
						</div>
						<h3>Corporate governance and management</h3>
						<p>Founded in 2001, OFX is a multinational financial technology company focusing on global capital transfer and foreign exchange services. The company comes from a clear concept: to provide better, fairer and more efficient cross-border capital solutions for global customers. Since its establishment, OFX has served more than 1 million customers, supported 50+ currencies, covered more than 170 countries and markets, and handled more than 1.48 trillion US dollars in accumulated funds.

Global network layout: It has offices in London, Dublin, Sydney, Auckland, Hong Kong, Singapore, Toronto and San Francisco, with more than 700 employees worldwide, and has a solid operating network and localization service capabilities.

Strong regulatory advantage: it is supervised by more than 50 regulatory agencies around the world and follows strict financial auditing and compliance standards. Since listing, there has been no regulatory punishment or law enforcement action, and the risk management ability is sound.
						</p>
					</div><!-- 使命卡片 -->
					<div class="info-card mission-card">
						<div class="icon">
							<image mode="widthFix" style="width:80rpx"
								src="/static/image/fz/www.currencyexch.top_index_support_about(iPhone SE) (1).png"></image>
						</div>
						<h4>我們的使命</h4>
						<p>我們致力於提供最新和可靠的貨幣信息，以及安全、用戶友好的服務，讓每個人都能更輕鬆、更便捷地進行貨幣兌換。</p>
					</div><!-- 特色功能卡片 -->
					<div class="info-card features-card">
						<div class="icon">
							<image mode="widthFix" style="width:80rpx"
								src="/static/image/fz/www.currencyexch.top_index_support_about(iPhone SE) (2).png"></image>
						</div>
						<h4>為什麼選擇我們？</h4>
						<p>我們的平台通過以下方式提供快速便捷的貨幣兌換：</p>
						<ul>
							<li>實時匯率查詢</li>
							<li>安全的在線交易</li>
							<li>低交易費用</li>
							<li>可靠的資金保護</li>
						</ul>
					</div>
					<div class="info-card features-card">
						<div class="icon">
							<image mode="widthFix" style="width:80rpx"
								src="/static/image/fz/www.currencyexch.top_index_support_about(iPhone SE) (2).png"></image>
						</div>
						<p>作為Euronet Worldwide（納斯達克：EEFT）的一部分，我們經營著世界上最大的兌換和匯款業務之一。我們的目標很簡單：提供最可靠、最易用的兌換和匯款服務。</p>
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
			navbar // 键值对简写，等价于 Navbar: Navbar
		},
		data() {
			return {
				showLanguage: false,
			};
		},
		onLoad(options) {

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
		},
	}
</script>
<style lang="scss" scoped>
	.main-content {
		padding: 20rpx;

		.page-header {
			padding: 10px 5px;
			text-align: center;
			margin-bottom: 20px;
		}

		.page-header h1 {
			font-size: 2rem;
		}


		.info-card ul li::before {
			content: '✓';
			position: absolute;
			left: 0;
			color: #4a90e2;
			font-weight: bold;
			font-size: 1.2rem;
		}

		.info-card {
			margin: 0 5px;
			padding: 15px;
			grid-column: 1 / -1;
			background: rgba(0, 0, 0, 0.7);
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 15px;
			padding: 25px;
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
			transition: all 0.3s ease;
			position: relative;
			overflow: hidden;
			margin-bottom: 40rpx;

			ul {
				list-style: none;
				padding: 0;
				margin: 15px 0;
			}

			ul li {
				padding: 8px 0;
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				position: relative;
				padding-left: 30px;
				color: rgba(255, 255, 255, 0.9);
			}

			.icon {
				margin-bottom: 15px;
				text-align: center;
			}

			h3 {
				font-size: 46rpx;
				font-weight: 600;
				margin: 0 0 15px 0;
				color: #fff;
				text-align: center;
			}
			h4 {
				font-weight: 600;
				margin: 0 0 12px 0;
				color: #fff;
				display: flex;
				align-items: center;
				gap: 10px;
			}
			
			

			p {
				font-size: 35rpx;
				line-height: 1.6;
				color: rgba(255, 255, 255, 0.85);
				margin: 0 0 12px 0;
			}
		}

		.info-card::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 3px;
			background: linear-gradient(90deg, #4a90e2, #357abd);
		}


	}
</style>