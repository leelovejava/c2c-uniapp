 

<template>
	<view class="language_page">
		<view class="van-nav-bar van-nav-bar--fixed">
			<view class="van-nav-bar__content">
				<view class="van-nav-bar__left" @click="back">
				<u-icon name="arrow-left" color="#fff" size="28rpx"></u-icon>
			</view>
				<view class="van-nav-bar__title van-ellipsis">{{common.language}}</view>
				<view>
				</view>
			</view>
		</view>
		<view style="height: 40rpx;">
			
		</view>
		<view class="list">
			<view class="items" 
				v-for="item in langs"
				:key="item.value"
				@tap="setLangyanBtn(item)"
				>
				<text>{{item.name}}</text>
				<u-icon name="arrow-right" color="#fff" size="28rpx"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import langslist from "@/common/data.js"
	export default {
		data() {
			return {
				langs: langslist,
			};
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			//设置语言
			setLangyanBtn(item) {
				let langs = this.langs.map(el => {
					el.selected = false
					if (el.value == item.value) el.selected = true
					return el
				})
				this.langs = langs
				this._i18n.locale = item.value
				this.lang = item
				uni.setStorageSync('lang', item.value);
				this.$store.commit('setLangyan', item.value);
				uni.navigateBack()
			},
		} ,
		computed: {
			common() {
				return this.$t("common")
			},
		}
	}
</script>

<style lang="scss" scoped>
.language_page{
	padding-top: 70rpx;
	background-color: rgba(0, 0, 0, 0.8);
	min-height: 100vh;
	
	.van-nav-bar{
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	.van-nav-bar__title{
		color: #fff;
	}
	
	.list{
		.items{
			margin-bottom: 10rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10rpx 30rpx;
			height: 100rpx;
			background-color: rgba(255, 255, 255, 0.1);
			color: #fff;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			
			text{
				color: #fff;
			}
		}
	}
}
</style>

