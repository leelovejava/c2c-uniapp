<template>
	<view class="">
		<view class="a-pr a-crfff"
			style="min-height: 100vh; z-index: 3;background: url(../../static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
			<navbar />
			<div class="support-container"><img src="../../static/image/fz/kfbg.png" alt="客服代表">
				<h2>聯繫我們</h2>
				<p>客服時間：每日上午10:00 – 晚上11:00</p><a
					href="https://cs.onlinecs.sbs/index/index/home?visiter_id=6589657826&amp;visiter_name=&amp;avatar=&amp;groupid=0&amp;business_id=28"
					class="support-button">OFX 支援團隊</a>
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
	.support-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 40px 20px;
		color: white;
		height: calc(100vh - 70px);

		img {
			width: 80%;
			max-width: 300px;
			height: auto;
			margin-bottom: 20px;
		}

		h2 {
			font-size: 24px;
			margin: 0 0 10px 0;
		}

		p {
			font-size: 16px;
			color: #ccc;
			margin: 0 0 20px 0;
		}

		.support-button {
			background-color: white;
			color: black;
			border: none;
			padding: 15px 30px;
			border-radius: 25px;
			font-size: 16px;
			font-weight: bold;
			cursor: pointer;
			text-decoration: none;
		}
	}
</style>