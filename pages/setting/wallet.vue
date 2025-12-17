<template>
	<view class="wallet">
		<div class="van-nav-bar van-nav-bar--fixed">
			<div class="van-nav-bar__content">
				<div class="van-nav-bar__title van-ellipsis">{{common.wallet.default[0]}}</div>
				<div class="van-nav-bar__left" @tap="retuPage">
					<u-icon name="arrow-left" color="#222" size="32rpx"></u-icon>
				</div>
			</div>
		</div>
		
		<view class="wallet_tab">
			<view class="fl">
				<text>
					{{common.wallet.default[8]}}(USDT)
				</text>	
				<text>
					{{userinfo.money}}
				</text>	
			</view>
			<view class="fr"
			@tap="dumprun('/pages/setting/mixrecharge')"
			>
				{{common.wallet.default[1]}}
			</view>	
		</view>	
		
		<view class="wallet_list">
			<view class="wallet_item" 
			>
				<text>{{common.wallet.default[5]}}(USDT)</text>
				<text>+{{userinfo.Recharge_money }}</text>
			</view>	
			
			<view class="wallet_item"
			>
				<text>{{common.wallet.default[6]}}(USDT)</text>
				<text>+{{userinfo.interest_wallet }}</text>
			</view>	
			
			<view class="wallet_item"
			>
				<text>{{common.wallet.default[7]}}(USDT)</text>
				<text>+{{userinfo.sell_money}}</text>
			</view>	
			
			<!-- <empty :promptText="common.empty[0]" :showEmpty="accountList.length == 0" /> -->
		</view>		
	</view>	
</template>

<script>
	export default {
		data(){
			return {
				userinfo: {},
				accountForm: {
					page: 1,
					list: 999
				}
			}
		},
		onShow() {
			// this.getAccountList()
			this.getuserinfo()
		},
		computed: {
			common() {
				return this.$t("common")
			},
		},
		methods: {
			retuPage(){
				uni.navigateBack(-1)
			},
			dumprun(url) {
				uni.navigateTo({
					url
				})
			},
			
			getAccountList(){
				const token = uni.getStorageSync('token');
				this.$u.api.index.revenueExpenditure(token, this.accountForm).then(res => {
					if(res.code == 1){
						console.log(res.data)
						this.accountList = res.data
					}
				})
			},
			
			getuserinfo(){
				const token = uni.getStorageSync('token')
				this.$u.api.index.getUserinfo(token).then(res => {
					this.userinfo = res.data
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wallet{
		padding-top: 80rpx;
		background-color: #fcfaf3;
		.van-nav-bar__content{
			background-color: #fefaf0 !important;
		}
		.wallet_tab{
			display: flex;
			align-items: center;
			margin: 0 30rpx;
			padding: 20rpx;
			height: 140rpx;
			border-radius: 16rpx;
			background-color: #f7ce46;
			
			.fl{
				flex: 1;
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				& > text:nth-child(2){
					font-size: 32rpx;
					font-weight: 700;
				}
			}
			.fr{
				padding: 0 50rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #f7ce46;
				height: 70rpx;
				background-color: #3b3b3b;
				border-radius: 12rpx;
			}
		}
		
		.wallet_list{
			margin-top: 20rpx;
			.wallet_item{
				padding: 0 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;
				height: 100rpx;
				font-weight: 700;
				background-color: #fff;
				& > text:last-child {
					color: #ed742e;
				}
			}
		}
	}
</style>