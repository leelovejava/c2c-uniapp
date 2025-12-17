<template>
	<view class="interest_list">
		<view class="van-nav-bar van-nav-bar--fixed">
			<view class="van-nav-bar__content">
				<view class="van-nav-bar__left" @click="back">
					<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
				</view>
				<view class="van-nav-bar__title van-ellipsis">{{common.user.default[7]}}</view>
				<view>
				</view>
			</view>
		</view>
		
		<view class="list">
			<view class="items" v-for="item in finasList" :key="item.id">
				<view class="it_top">
					<view>
						<text>{{common.user.default[16]}}:</text>
						<text style="font-weight: 700; color: #222; font-size: 32rpx;">
							{{item.moneys}}
						</text>
					</view>
					<view>
						{{common.user.default[17]}}: {{item.endtime_text}}
					</view>
				</view>
				<view class="it_foo">
					<text>{{common.user.default[18]}}： {{item.fenbi}}</text>
					<text>{{common.user.default[19]}}: {{item.days}} {{common.user.default[20]}}</text>
				</view>
			</view>
			
			<empty :promptText="common.empty[0]" :showEmpty="finasList.length == 0" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				finasList: []
			};
		},
		computed: {
			common() {
				return this.$t("common")
			},
		},
		onLoad() {
			this.getfinas()
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			getfinas() {
				const token = uni.getStorageSync('token')
				this.$u.api.setting.getfinas(token).then(res => {
					this.finasList = res.data 
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.interest_list{
	padding-top: 70rpx;
	.van-nav-bar{
		background-color: #fcfaf3;
	}
	
	.list{
		.items{
			margin-bottom: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 10rpx 30rpx;
			height: 120rpx;
			background-color: #fff;
			.it_top{
				display: flex;
				justify-content: space-between;
				& > view:last-child{
					color: #ed742e;
					font-size: 22rpx;
				}
			}
			.it_foo{
				display: flex;
				justify-content: space-between;
			}
		}
	}
}
</style>
