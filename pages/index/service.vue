<template>
	<view class="Body service">
		<view class="Site PageBox">
			<view class="van-nav-bar van-nav-bar--fixed">
				<view class="van-nav-bar__content">
					<view class="van-nav-bar__left" @click="back">
						<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
					</view>
					<view class="van-nav-bar__title van-ellipsis">{{common.home.menu[1]}}</view>
					<view>
					</view>
				</view>
			</view>
			
			<view class="service_list">
				<view class="service_item" @tap="dumprun(`/pages/index/details?id=${item.id}`)"
				v-for="(item,index) in list"
				:key="item.id"
				>
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
			};
		},
		onLoad() {
			this.getInformation()
		},
		methods: {
			getInformation() {
				this.$u.api.index.get_Information().then(res => {
					this.list = res.data
				})
			},

			dumprun(url) {
				uni.navigateTo({
					url
				})
			},
			
			back(){
				uni.navigateBack(-1)
			}
		},
		computed: {
			common() {
				return this.$t("common")
			},
		}
	}
</script>

<style scoped lang="scss">
	.ScrollBox {
		padding: 0 !important;
	}

	.Site .van-nav-bar .van-icon {
		font-size: 1.5rem !important;
		color: #bbb !important;
	}

	.PageBox {
		color: #635327;
		padding-top: 40px;
		background-color: #fefaf0 !important;
	}

	.van-nav-bar {
		background-color: #fefaf0 !important;
	}

	.van-nav-bar .van-nav-bar__title {
		color: #222;
		font-weight: 700
	}

	.ScrollBox {
		background-color: #fefaf0;
	}

	.van-cell {
		padding: 17px 0;
		background-color: #191c23
	}

	.van-cell__title {
		color: #e7e7e7
	}
	
	
	
	.service{
		padding: 30rpx;
		background-color: #fefaf0;
		.service_list{
			.service_item{
				margin-bottom: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #222;
				height: 100rpx;
				border-radius: 12rpx;
				background-color: #f7ce46;
			}
		}
	}
</style>