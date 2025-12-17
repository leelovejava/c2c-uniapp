<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(../../static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="main-content"><!-- 页面标题 -->
				<div class="page-header">
					<h1>規則和條例</h1>
					<p>平台指南和交易信息</p>
				</div><!-- 卡片容器 -->
				<div class="cards-container"><!-- 基本规则卡片 -->
					<div class="info-card rules-card">
						<div class="icon"><i class="fas fa-gavel"></i></div>
						<h4>基本規則</h4>
						<ul>
							<li><span class="rule-number">1</span>每個賬戶僅使用一個手機號碼註冊。</li>
							<li><span class="rule-number">2</span>根據FinCEN法規，每位用戶必須在賬戶中至少擁有$100才能執行訂單。</li>
							<li><span class="rule-number">3</span>每個任務組組多包含0-4個限價單，每個限價單內最多包含2次兌換單（即1單兌換2次）.
								每組任務僅允許執行1個包含2次兌換的任務.</li>
							<li><span class="rule-number">4</span>超過一定存款金額的賬戶將自動升級為SVIP會員。升級會員每輪可完成40個訂單。</li>
						</ul>
					</div><!-- 平台运营规则卡片 -->
					<div class="info-card rules-card">
						<div class="icon"><i class="fas fa-clock"></i></div>
						<h4>平台運營</h4>
						<ul>
							<li><span class="rule-number">6</span>平台每日 10:00 至 23:00 開放。會員只能在這些時間內下單。</li>
							<li><span class="rule-number">7</span>如果您的賬戶被第三方濫用，請立即聯繫客服。</li>
							<li><span class="rule-number">8</span>提取超過$30000需要事先通知客服。</li>
							<li><span class="rule-number">9</span>信用分數每日晚上22:30後更新。信用分數低於95分時無法提現。</li>
						</ul>
					</div><!-- 订单类型卡片 -->
					<div class="info-card order-types-card">
						<div class="icon"><i class="fas fa-chart-line"></i></div>
						<h4>訂單類型</h4>
						<h4>Market Order</h4>
						<p>外匯平台用戶接受當前市場最佳可用匯率並立即完成兌換。系統根據會員賬戶的可用餘額自動分配訂單。此訂單類型的佣金為訂單金額的1%。</p>
						<h4>Limit Order</h4>
						<p>外匯平台用戶可以設定目標匯率。一旦市場匯率達到指定值，系統會自動匹配並執行兌換。這些訂單通常超過代理商當前的賬戶餘額，但提供更高的回報潛力。此訂單類型的佣金為訂單金額的5%-60%。
						</p>
					</div><!-- 礼品包卡片 -->
					<div class="info-card order-types-card">
						<div class="icon"><i class="fas fa-gift"></i></div>
						<h4>Gift Package</h4>
						<p>禮品包是為我們尊貴會員提供的專屬優惠。它包含一個隨機訂單，與限價訂單或我們合作夥伴慷慨提供的現金相關聯。此特別優惠適用於在賬戶中累積一定金額的會員。禮品包每輪僅提供0-4次。</p>
						<p>禮品包旨在獎勵我們忠誠的社區並增強您與我們的體驗。達到此門檻不僅可以讓您獲得有吸引力的獎勵，還可以讓您成為享有額外福利的專屬群體的一部分。</p>
					</div><!-- 存款规则卡片 -->
					<div class="info-card deposits-withdrawals-card">
						<div class="icon"><i class="fas fa-credit-card"></i></div>
						<h4>Deposits</h4>
						<p>所有存款必須通過平台的在線客服協調。將資金轉入客服指定的賬戶後，請提交付款憑證以確保及時處理。</p>
						<p>為避免延誤，請在每次交易前直接在平台上確認您的賬戶詳情，因為這些可能會定期更改。如果您在存款過程中遇到任何問題，請立即聯繫客服。</p>
					</div><!-- 提款规则卡片 -->
					<div class="info-card deposits-withdrawals-card">
						<div class="icon"><i class="fas fa-money-bill-wave"></i></div>
						<h4>Withdrawals</h4>
						<p>會員只能在完成所有指定的日常任務後申請提現。在滿足平台提現條件的情況下，可以提取在平台上賺取的資金。在申請提現之前，請確保您的平台賬戶包含有效的錢包地址。</p>
						<p><strong>注意:</strong>每日10:00 至 23:00 可進行提現。</p>
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
		padding: 20px;

		.page-header {
			text-align: center;
			margin-bottom: 20px;

			h1 {
				font-size: 40rpx;
				font-weight: 700;
				margin: 0;
				color: #fff;
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
			}

			p {
				font-size: 32rpx;
				margin-top: 8px;
				opacity: 0.9;
				color: #e0e0e0;
			}
		}
		
		.cards-container {
		    display: grid;
		    grid-template-columns: 1fr;
		    gap: 10px;
		    margin-bottom: 20px;
			
			.info-card {
			    background: rgba(0, 0, 0, 0.6);
			    backdrop-filter: blur(10px);
			    border: 1px solid rgba(255, 255, 255, 0.1);
			    border-radius: 15px;
			    padding: 25px;
			    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
			    transition: all 0.3s ease;
			    position: relative;
			    overflow: hidden;
				p {
				    font-size: 28rpx;
				    line-height: 1.6;
				    color: rgba(255, 255, 255, 0.85);
				    margin: 0 0 12px 0;
				}
				&::before {
				    content: '';
				    position: absolute;
				    top: 0;
				    left: 0;
				    right: 0;
				    height: 3px;
				    background: linear-gradient(90deg, #4a90e2, #357abd);
				}
				h4 {
				    font-size: 1.4rem;
				    font-weight: 600;
				    margin: 0 0 12px 0;
				    color: #fff;
				    display: flex;
				    align-items: center;
				    gap: 10px;
					&::before {
					    content: '';
					    width: 4px;
					    height: 20px;
					    background: linear-gradient(45deg, #4a90e2, #357abd);
					    border-radius: 2px;
					}
				}
				 ul {
				    list-style: none;
				    padding: 0;
				    margin: 15px 0;
					li {
					    padding: 8px 0;
					    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
					    position: relative;
					    padding-left: 30px;
					    color: rgba(255, 255, 255, 0.9);
						&::before {
						    content: '✓';
						    position: absolute;
						    left: 0;
						    color: #4a90e2;
						    font-weight: bold;
						    font-size: 1.2rem;
						}
					}
				}
				.rule-number {
				    display: inline-block;
				    background: linear-gradient(45deg, #4a90e2, #357abd);
				    color: white;
				    width: 30px;
				    height: 30px;
				    border-radius: 50%;
				    text-align: center;
				    line-height: 30px;
				    font-weight: bold;
				    margin-right: 10px;
				    font-size: 14px;
				}
				
			}
		}


	}
</style>