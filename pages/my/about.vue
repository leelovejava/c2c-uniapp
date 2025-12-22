<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="main-content">
				<!-- 页面标题 -->
				<div class="page-header">
					<h1>{{$t('about.title')}}</h1>
				</div>
				<!-- 卡片容器 -->
				<div class="cards-container">
					<!-- 主要介绍卡片 -->
					<div class="info-card hero-card a-tc">
						<p>{{$t('about.companyDescription')}}</p>
					</div>
					
					<!-- 全球网络卡片 -->
					<div class="info-card">
						<h3>{{$t('about.globalNetworkTitle')}}</h3>
						<p>{{$t('about.globalNetworkDesc')}}</p>
					</div>
					
					<!-- 监管优势卡片 -->
					<div class="info-card">
						<h3>{{$t('about.regulatoryAdvantageTitle')}}</h3>
						<p>{{$t('about.regulatoryAdvantageDesc')}}</p>
					</div>
					
					<!-- 公司治理卡片 -->
					<div class="info-card">
						<h3>{{$t('about.corporateGovernanceTitle')}}</h3>
						<p>{{$t('about.corporateGovernanceDesc1')}}</p>
						<p>{{$t('about.corporateGovernanceDesc2')}}</p>
					</div>
					
					<!-- 上市状态卡片 -->
					<div class="info-card">
						<h3>{{$t('about.listingStatusTitle')}}</h3>
						<p>{{$t('about.listingStatusDesc')}}</p>
					</div>
					
					<!-- DEX:OFX说明卡片 -->
					<div class="info-card">
						<h3>{{$t('about.aboutDexOfxTitle')}}</h3>
						<p>{{$t('about.aboutDexOfxDesc1')}}</p>
						<p>{{$t('about.aboutDexOfxDesc2')}}</p>
						<p>{{$t('about.aboutDexOfxDesc3')}}</p>
						<p>{{$t('about.aboutDexOfxDesc4')}}</p>
						<p>{{$t('about.aboutDexOfxDesc5')}}</p>
						<p>{{$t('about.aboutDexOfxDesc6')}}</p>
					</div>
					
					<!-- 总部地址卡片 -->
					<div class="info-card">
						<h3>{{$t('about.headquartersTitle')}}</h3>
						<p>{{$t('about.headquartersDesc')}}</p>
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
				showLanguage: false,
			};
		},
		onLoad(options) {

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