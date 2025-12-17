<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(../../static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="main-content">
				<!-- 页面标题 -->
				<div class="page-header">
					<h1>關於我們</h1>
				</div>
				<!-- 卡片容器 -->
				<div class="cards-container">
					<!-- 主要介绍卡片 -->
					<div class="info-card hero-card a-tc">
						<div class="icon">
							<image mode="widthFix" style="width:80rpx"
								src="/static/image/fz/www.currencyexch.top_index_support_about(iPhone SE).png"></image>
						</div>
						<p>Founded in 2001, OFX is a multinational financial technology company focusing on global capital transfer and foreign exchange services. The company comes from a clear concept: to provide better, fairer and more efficient cross-border capital solutions for global customers. Since its establishment, OFX has served more than 1 million customers, supported 50+ currencies, covered more than 170 countries and markets, and handled more than 1.48 trillion US dollars in accumulated funds.</p>
					</div>
					
					<!-- 全球网络卡片 -->
					<div class="info-card">
						<h3>Global network layout</h3>
						<p>It has offices in London, Dublin, Sydney, Auckland, Hong Kong, Singapore, Toronto and San Francisco, with more than 700 employees worldwide, and has a solid operating network and localization service capabilities.</p>
					</div>
					
					<!-- 监管优势卡片 -->
					<div class="info-card">
						<h3>Strong regulatory advantage</h3>
						<p>It is supervised by more than 50 regulatory agencies around the world and follows strict financial auditing and compliance standards. Since listing, there has been no regulatory punishment or law enforcement action, and the risk management ability is sound.</p>
					</div>
					
					<!-- 公司治理卡片 -->
					<div class="info-card">
						<h3>Corporate governance and management</h3>
						<p>The board of directors is composed of business leaders with rich experience in banking, finance and technology to ensure a sound corporate governance structure.</p>
						<p>The management team is composed of senior executives from major international banks, payment service providers and technology companies, led by CEO Skander Malcolm, and continues to promote OFX's strategic expansion and digital innovation.</p>
					</div>
					
					<!-- 上市状态卡片 -->
					<div class="info-card">
						<h3>Listing status and industry attributes</h3>
						<p>OFX was listed on the Australian Stock Exchange (ASX) in 2013 (stock code: OFX) and classified as "Diversified Financials". The company maintains strong competitiveness in the cross-border financial technology industry with a stable compliance framework, international layout and sustainable profit model.</p>
					</div>
					
					<!-- DEX:OFX说明卡片 -->
					<div class="info-card">
						<h3>About "DEX:OFX"</h3>
						<p>Since March 10th, 2023, some financial information platforms have displayed the label "DEX:OFX".</p>
						<p>It must be clarified that:</p>
						<p>"Dex: OFX" is not an actual transaction code.<br>
						It is a cross-market mapping identifier that is automatically generated during the system update on some data platforms.</p>
						<p>The identifier was generated as part of internal system testing to verify the platform's ability to correctly associate company information in different markets. Therefore, the label is only used for data indexing and testing purposes, and does not mean that OFX is listed on DEX or any other exchange.</p>
						<p>The only official valid list of OFX is:<br>
						Australian Stock Exchange (ASX)<br>
						Stock code: OFX</p>
						<p>All other identifiers (including "DEX:OFX") are system-generated mapping entries, which are not used for actual transactions and only provide better services for users.</p>
					</div>
					
					<!-- 总部地址卡片 -->
					<div class="info-card">
						<h3>OFX Group headquarters address</h3>
						<p>Level 19, 60 Margaret Street, Sydney NSW 2000, Australia</p>
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