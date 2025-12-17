<template>
	<view class="Body">
		<div class="Main Site" style="overflow: visible;">
			<div class="PageBox">
				<div class="van-nav-bar van-nav-bar--fixed">
					<div class="van-nav-bar__content">
						<div class="van-nav-bar__left" @click="back">
							<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
						</div>
						<div class="van-nav-bar__title van-ellipsis">{{common.withdrawlist[0]}}</div>
					</div>
				</div>
				
				<view class="withdraw_list">
					<view class="items" v-for="item in list" :key="item.id">
						<view>
							<text style="color: #222;">提现</text>
							<text style="color: #ea4940;">-{{item.money}}</text>
						</view>
						<view style="font-size: 24rpx; margin-top: 20rpx;">
							<text>{{item.addtime_text}}</text>
							<text style="color: #5ecc80;">{{stat(item.stat)}}</text>
						</view>
					</view>
					
					<empty :promptText="common.empty[0]" :showEmpty="list.length == 0" />
				</view>
				
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow: false,
				list: [],
				form: {
					page: 1,
					list: 999
				}
			};
		},
		onLoad(options) {
			this.getWithdrawList()
		},
		methods: {
			back() {
				const pages = getCurrentPages();
				if (pages.length === 2) {
					uni.navigateBack({
						delta: 1
					});
				} else if (pages.length === 1) {
					uni.switchTab({
						url: '/pages/index/index',
					})
				} else {
					uni.navigateBack({
						delta: 1
					});
				}
			},
			dumprun(url) {
				uni.navigateTo({
					url
				})
			},
			
			getWithdrawList(){
				const token = uni.getStorageSync('token');
				this.$u.api.index.withdraw_list(token, this.form).then(res => {
					if(res.code == 1){
						console.log(res.data)
						this.list = res.data
					}
				})
			}
		},
		computed: {
			common() {
				return this.$t("common")
			},
			stat(){
				return (type) => {
					if(type == 0){
						return '正在审核'
					} else if (type == 1){
						return '已同意'
					 }else {
						return '已拒绝'
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.PageBox {
	    overflow: auto;
	    padding-top: 40px;
	    background-color: #fcfaf4 !important
	}
	
	.van-nav-bar {
	    background-color: #fcfaf5 !important;
	}
	
	.van-nav-bar .van-nav-bar__title {
	    color: #222
	}
	
	.van-nav-bar .van-nav-bar__arrow {
	    color: #b5b5b5
	}
	
	.PageBox .bgc {
	    width: 100%;
	    height: 46px;
	    position: fixed;
	    top: 0;
	    z-index: 200
	}
	
	.PageBox .panel {
	    width: 95%;
	    margin-left: 10px;
	    margin-top: 10px;
	    color: #000
	}
	
	.FundItem {
	    margin-top: 10px;
	    background-color: #191c23;
	    border-radius: 10px
	}
	
	.topTitle {
	    position: absolute;
	    max-width: 70%;
	    font-size: 18px;
	    color: #ccc;
	    background-color: transparent;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	    z-index: 9999;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    display: block
	}
	
	.PageBox .mytable {
	    background-color: #fff;
	    width: 91%;
	    margin: 0 auto;
	    margin-top: 6px;
	    font-size: 18px
	}
	
	.PageBox table {
	    width: 100%;
	    border: none;
	    border-collapse: collapse
	}
	
	.PageBox th:first-child {
	    background-color: #b3b5fc;
	    font-weight: 600;
	    font-size: 13px;
	    border: none;
	    height: 33px;
	    width: 26%
	}
	
	.PageBox th:nth-child(2) {
	    background-color: #b3b5fc;
	    font-weight: 600;
	    font-size: 13px;
	    border: none;
	    height: 33px;
	    width: 24%px
	}
	
	.PageBox th:nth-child(3) {
	    background-color: #b3b5fc;
	    font-weight: 600;
	    font-size: 13px;
	    border: none;
	    height: 33px;
	    width: 24%
	}
	
	.PageBox th:nth-child(4) {
	    background-color: #b3b5fc;
	    font-weight: 600;
	    font-size: 13px;
	    border: none;
	    height: 33px;
	    width: 26%
	}
	
	.PageBox th {
	    border-right: 1px solid #fff!important
	}
	
	.PageBox table tr td {
	    font-size: 11px;
	    color: #626262;
	    padding: 8px 0;
	    text-align: center;
	    border: none;
	    border-right: 1px solid #fff!important
	}
	
	table tbody tr:nth-child(odd) {
	    background: #eff0f2
	}
	
	table tbody tr:nth-child(2n) {
	    background: #e1e1f9
	}

	.withdraw_list{
		margin: 20rpx;
		.items{
			padding: 20rpx;
			background-color: #fff;
			border-radius: 12rpx;
			& > view {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>