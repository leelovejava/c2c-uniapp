<template>
	<view class="Body details">
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
			
			<view class="details">
					<rich-text :nodes="content"></rich-text>
			</view>
			
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return { 
				content: '',
			};
		},
		onLoad({id}) {
			this.getInfDetails(id)
		},

		methods: {
			getInfDetails(id) {
				this.$u.api.index.infDetails(id).then(res => {
					this.content = res.data.content
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
	
	
	
	.details{
		padding: 30rpx;
		background-color: #fefaf0;
		
	}
</style>