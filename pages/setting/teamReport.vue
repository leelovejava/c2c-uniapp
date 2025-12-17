<template>
	<view class=" team">
		<div class="Site" style="overflow: visible;">
			 
			<div class="Site PageBox">
				<div class="van-nav-bar van-nav-bar--fixed">
					<div class="van-nav-bar__content">
						<div class="van-nav-bar__left" @click="back">
							<u-icon name="arrow-left" color="#222" size="32rpx"></u-icon>
						</div>
						<div class="van-nav-bar__title van-ellipsis">{{common.teamReport.default[0]}}</div>
					<!-- 	<div class="van-nav-bar__right">
							<div><button
									class="van-button van-button--default van-button--min"
									  @click="dumprun('/pages/setting/share')" 
									style="width: 100px; height: 26px; color: rgb(255, 255, 255); background: #0076fa; border-color: #0076fa;">
									<div class="van-button__content"><span
											class="van-button__text"><span>{{common.common7[5]}}</span></span></div>
								</button></div>
						</div> -->
					</div>
				</div>
				<!-- <div style="display: flex;"> -->
					<!-- <div class="Menu2item1">
						<div style="color: rgb(204, 204, 204);">{{common.common7[6]}} </div>
						<div style="color: rgb(231, 231, 231);"> {{list.subordinate_num}} </div>
					</div> -->
				<!-- 	<div class="Menu2item1">
						<div style="color: rgb(204, 204, 204);">{{common.common7[7]}} </div>
						<div style="color: rgb(231, 231, 231);"> {{list.subordinate_num}} </div>
					</div> -->
				<!-- </div> -->
				<view class="team_card">
					<text>{{common.teamReport.default[1]}}</text>
					<text>{{teamData.subordinate_num}}</text>
				</view>
				
				<view class="team_list">
					<view class="team_list_item"   
					v-for="item in teamData.list" :key="item.id">
						{{item.id}} - {{item.username}}
					</view>
					
					<empty :promptText="common.empty[0]" :showEmpty="teamData.list && teamData.list.length == 0" />
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
				teamData:[]
			};
		},
		onLoad(options) {
			const {
				id
			} = options
			this.id = id
			this.getlist()
		},
		onShow() {
	
		},
		methods: {
			getlist(){
				const token = uni.getStorageSync('token')
				this.$u.api.index.team_list(token).then(res => {
					this.teamData = res.data
				})
			},
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
		},
		computed: {
			common() {
				return this.$t("common")
			},
		}
	}
</script>

<style scoped lang="scss">
	.Site .van-nav-bar .van-icon {
	    font-size: 1.5rem !important;
	    color: #bbb !important;
	}
	.PageBox {
		color: #635327;
	    padding-top: 40px;
		background-color: #fefaf0
	}

	.van-nav-bar {
		background-color: #fefaf0;
	}

	.van-nav-bar .van-nav-bar__title {
		color: #222;
		font-weight: 700
	}

	.Menu2item1 {
		margin-top: 10px;
		background-color: #191c23;
		line-height: 25px;
		margin-left: 10px;
		width: 48%;
		text-align: center;
		padding: 10px
	}

	.ScrollBox {
		background-color: #fefaf0;
	}
	
	.team{
		padding: 30rpx;
		background-color: #fdfaf1;
		.van-nav-bar{
			background-color: #fdfaf1;
		}
		.team_card{
			padding: 20rpx 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			height: 180rpx;
			border-radius: 12rpx;
			background: url('../../static/image/news/team_card.png') 100% / 100% no-repeat;
			& > text:nth-child(2){
				font-size: 38rpx;
				font-weight: 700;
			}
		}
		
		.team_list{
			min-height: 800rpx;
			.team_list_item {
				margin-top: 20rpx;
				padding: 30rpx;
				color: #222;
				background-color: #fff;
				border-radius: 10rpx;
			}
		}
	}
</style>