<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="main-content">
				<div class="page-header">
					<h1>{{$t('faqs.pageHeader.title')}}</h1>
					<p>{{$t('faqs.pageHeader.description')}}</p>
				</div>
				<div class="cards-container">
					<div class="info-card rules-card">
						<div class="icon"><i class="fas fa-gavel"></i></div>
						<h4>{{$t('faqs.basicRules.title')}}</h4>
						<ul>
							<li v-for="(rule, index) in $t('faqs.basicRules.rules')" :key="index"><span class="rule-number">{{index + 1}}</span>{{rule}}</li>
						</ul>
					</div>
					<div class="info-card order-types-card">
						<div class="icon"><i class="fas fa-chart-line"></i></div>
						<h4>{{$t('faqs.orderTypes.title')}}</h4>
						<h4>{{$t('faqs.orderTypes.marketOrder.title')}}</h4>
						<p>{{$t('faqs.orderTypes.marketOrder.description')}}</p>
					</div>
					<div class="info-card order-types-card">
						<div class="icon"><i class="fas fa-gift"></i></div>
						<h4>{{$t('faqs.giftPackage.title')}}</h4>
						<p v-for="(desc, index) in $t('faqs.giftPackage.description')" :key="index">{{desc}}</p>
					</div>

          <div class="info-card">
            <div class="icon"><i class="fas fa-credit-card"></i></div>
            <h4>Customer service time description</h4>
            <p>Since OFX provides services to users all over the world, customer service will provide online support from 10: 00–11: 00 Pacific Time (PT) in order to respond to the consulting needs of various regions more efficiently. </p>
            <p>Thank you for your patience and cooperation.</p>
          </div>

          <div class="info-card">
            <div class="icon"><i class="fas fa-credit-card"></i></div>
            <p>OFX will launch recharge activities from time to time to help users manage funds more efficiently.</p>
            <p>In order to give back to users' long-term support, OFX platform will launch recharge activities from time to time to provide users with more flexibility and preferential space in the use of funds and cross-border transactions. Such activities are usually open in stages or in limited time, and the specific rules will be adjusted according to market conditions and platform arrangements.</p>
            <p>During the activity, after the qualified users complete the recharge operation, they have the opportunity to get a certain percentage of the gift amount or related rewards for the subsequent fund operation or transaction arrangement. This can not only effectively improve the efficiency of capital use, but also bring users a more cost-effective experience.</p>
            <p>Features of the event include:</p>
            <p>Open from time to time: the activity time is flexible and not fixed for a long time, so you need to pay attention to the official notice.</p>
            <p>The participation method is simple: usually you only need to complete the specified recharge conditions.</p>
            <p>Clear reward form: transparent content and rules of use.</p>
            <p>Suitable for different users' needs: whether it is daily capital turnover or cross-border use, it can bring certain convenience</p>
            <p>It should be noted that the specific proportion, upper limit and usage mode of each recharge activity may be different. Users should carefully read the description of the current activity before participating to ensure that they meet the requirements and plan the fund arrangement reasonably.</p>
            <p>OFX hopes to provide users with more practical feedback and improve the overall experience by launching recharge activities from time to time under the premise of compliance and safety. It is recommended to pay attention to the official channel announcements and keep abreast of the latest activity information so as not to miss the relevant benefits.</p>
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