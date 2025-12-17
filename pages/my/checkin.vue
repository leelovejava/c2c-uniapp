<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="z-index: 3;background: url(../../static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />

			<div class="top-buttons-container">
				<div class="top-status-btn disabled" id="top-checkin-btn">完成2輪訂單後可簽到</div>
			</div>


			<div id="main-content"
				style="display: block; margin: 20px auto 0; width: 100%; max-width: 600px; align-self: center; justify-self: center; box-sizing: border-box;">
				<!-- 签到奖励卡片 -->
				<div class="rewards-grid">
					<div class="reward-card" data-day="1">
						<div class="check-mark">✓</div>
						<div>1天</div>
						<div class="amount">20 USD</div>
					</div>
					<div class="reward-card" data-day="2">
						<div class="check-mark">✓</div>
						<div>2天</div>
						<div class="amount">30 USD</div>
					</div>
					<div class="reward-card" data-day="3">
						<div class="check-mark">✓</div>
						<div>3天</div>
						<div class="amount amount-with-bg" style="color: red;font-size: 16px;">40 USD</div>
					</div>
					<div class="reward-card" data-day="4">
						<div class="check-mark">✓</div>
						<div>4天</div>
						<div class="amount">50 USD</div>
					</div>
					<div class="reward-card special-reward" data-day="5" style="grid-column: span 2 !important;">
						<div class="check-mark">✓</div>
						<div class="special-text">
							<div class="reward-title">5天</div>
							<div class="reward-desc" style="font-size: 16px;">連續簽到5天即可解鎖更高額的工作獎金。</div>
						</div>
						<div class="special-right" style="overflow: hidden;">
							<div class="gift-wrap" style="max-width: 100%; margin-left: auto; box-sizing: border-box;">
								<span class="gift-icon" style="max-width: 100%;"></span>
								<div class="amount-overlay"><span class="amount-number">200</span><span
										class="currency-unit">USD</span></div>
							</div>
						</div>
					</div>
				</div>
				<div class="rules-card">
					<h3>簽到規則</h3>
					<ol>
						<li>1. 每天完成2輪訂單後，您可以簽到領取當天對應的獎勵。</li>
						<li>2. 如果您在一天內沒有完成2輪訂單，您將無法簽到，您的簽到狀態將在第二天重置。如果您在第二天完成2輪訂單，您仍然可以獲得簽到獎勵。</li>
						<li>3. 如果您連續簽到5天，您可以解鎖額外獎勵，其中包括薪酬更高的工作。</li>
						<li>4. 簽到獎勵需要聯繫客服領取.</li>
					</ol>
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
	.top-buttons-container {
		text-align: center;
		padding: 15px 20px;
		margin-bottom: 20px;
	}

	.top-status-btn.disabled {
		color: #ff4444 !important;
		background: none !important;
	}

	.top-status-btn {
		background: #1E90FF;
		border: none;
		color: #fff;
		font-size: 16px;
		padding: 8px 15px;
		margin: 0 5px;
		cursor: default;
		border-radius: 15px;
		display: inline-block;
	}

	.rewards-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 15px;
		margin-bottom: 30px;
		padding-left: 15px;
		padding-right: 15px;
	}

	.reward-card.special-reward {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		gap: 12px;


		.gift-wrap {
			position: relative;
			display: inline-block;

			.amount-overlay {
				position: absolute;
				inset: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				pointer-events: none;
				text-align: center;

				.amount-number {
					font-size: 22px;
					font-weight: 700;
					color: #fff;
					text-shadow: 0 2px 6px rgba(0, 0, 0, .45);
					line-height: 1.1;
				}

				.currency-unit {
					margin-top: 2px;
					font-size: 12px;
					color: #fff;
					opacity: .9;
					text-shadow: 0 2px 6px rgba(0, 0, 0, .45);
					line-height: 1.1;
				}
			}
		}

		.special-right {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		.reward-title {
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 8px;
		}

		.reward-desc {
			font-size: 12px;
			color: #CBD5E0;
			line-height: 1.4;
			margin-bottom: 15px;
		}

		.gift-icon {
			background: url(/static/image/fz/check_gift3.png) no-repeat center center;
			background-size: contain;
			width: 30px;
			height: 30px;
			display: inline-block;
		}
	}

	.reward-card {
		background-color: #0D1A2E;
		border: 1px solid #4a5568;
		border-radius: 10px;
		padding: 15px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 120px;
		position: relative;

		.check-mark {
			position: absolute;
			top: 8px;
			right: 8px;
			width: 20px;
			height: 20px;
			background-color: #ff4444;
			border-radius: 50%;
			display: none;
			align-items: center;
			justify-content: center;
			font-size: 12px;
			color: white;
			font-weight: bold;
		}

		.amount {
			background-color: #1a233a;
			border-radius: 50%;
			width: 60px;
			height: 60px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 18px;
			font-weight: bold;
			margin-top: 10px;
		}

		@media (max-width: 768px) {
			.amount-with-bg {
				white-space: normal;
				line-height: 1.2 !important;
				height: auto !important;
				text-align: center;
			}
		}

		.amount-with-bg {
			display: inline-block;
			background-image: url(/static/image/fz/check_gift2.png);
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			padding: 6px 12px;
			box-sizing: border-box;
		}

		@media (max-width: 768px) {
			.special-right .gift-icon {
				display: block;
				width: min(18vw, 180px);
				height: min(18vw, 180px);
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
				flex: none;
				flex-grow: 0;
				flex-shrink: 0;
				flex-basis: auto;
			}
		}

		.special-right .gift-wrap .gift-icon {
			display: block;
			width: 120px;
			height: 120px;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
		}
	}

	.rules-card {
		background-color: #0D1A2E;
		border: 1px solid #4a5568;
		border-radius: 10px;
		padding: 20px;

		h3 {
			font-size: 18px;
			margin-top: 0;
			margin-bottom: 15px;
		}

		ul,
		li {
			padding: 0;
			margin: 0;
			list-style: none;
		}
		ol{
			padding: 0;
		}
	}
</style>