<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="z-index: 3;background: url(../../static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />

			<div class="main-content">
				<h2 style="text-align: center; margin-bottom: 20px;">會員等級</h2>
				<div class="info-card"
					style="max-width: 768px;margin: 0 auto 20px auto;border: 1px solid #ddd;border-radius: 8px;padding: 20px;">
					<h3>VIP 1<span
							style="border: 1px solid white; border-radius: 5px; padding: 2px 8px; font-size: 12px; margin-left: 10px;">當前</span>
					</h3>
					<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
						<div style="text-align: left;">
							<h4>存款: 50.00</h4>
							<h4>獎金: 20</h4>
							<h4>佣金率: 1%</h4>
							<h4>每日訂單: 30</h4>
						</div>
						<div style="text-align: right;"><img src="static/image/fz/vip1.png" alt="VIP 1"
								style="width: 100px; height: auto;"></div>
					</div>
				</div>
				<div class="info-card"
					style="max-width: 768px;margin: 0 auto 20px auto;border: 1px solid #ddd;border-radius: 8px;padding: 20px;">
					<h3>VIP 2</h3>
					<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
						<div style="text-align: left;">
							<h4>存款: 1000.00</h4>
							<h4>獎金: 100</h4>
							<h4>佣金率: 1.5%</h4>
							<h4>每日訂單: 35</h4>
						</div>
						<div style="text-align: right;"><img src="static/image/fz/vip2.png" alt="VIP 2"
								style="width: 100px; height: auto;"></div>
					</div>
				</div>
				<div class="info-card"
					style="max-width: 768px;margin: 0 auto 20px auto;border: 1px solid #ddd;border-radius: 8px;padding: 20px;">
					<h3>VIP 3</h3>
					<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
						<div style="text-align: left;">
							<h4>存款: 5000.00</h4>
							<h4>獎金: 300</h4>
							<h4>佣金率: 2%</h4>
							<h4>每日訂單: 40</h4>
						</div>
						<div style="text-align: right;"><img src="static/image/fz/vip3.png" alt="VIP 3"
								style="width: 100px; height: auto;"></div>
					</div>
				</div>
				<div class="info-card"
					style="max-width: 768px;margin: 0 auto 20px auto;border: 1px solid #ddd;border-radius: 8px;padding: 20px;">
					<h3>VIP 4</h3>
					<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
						<div style="text-align: left;">
							<h4>存款: 10000.00</h4>
							<h4>獎金: 1000</h4>
							<h4>佣金率: 3%</h4>
							<h4>每日訂單: 45</h4>
						</div>
						<div style="text-align: right;"><img src="static/image/fz/vip4.png" alt="VIP 4"
								style="width: 100px; height: auto;"></div>
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
		padding: 40rpx;
	}

	.info-card {
		background-color: rgba(0, 0, 0, 0.6);
		padding: 20px;
		border-radius: 10px;
		margin-bottom: 20px;
		text-align: center;

		h3 {
			margin: 0 0 5px 0;
			font-size: 18px;
		}
	}
</style>