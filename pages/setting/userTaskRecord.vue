<template>
	<view class="">
		<div class=" Site" style="overflow: visible;">
			<div class="van-nav-bar van-nav-bar--fixed">
				<div class="van-nav-bar__content">
					<div class="van-nav-bar__left"><i
							class="van-icon van-icon-arrow-left van-nav-bar__arrow"><!----></i></div>
					<div class="van-nav-bar__title van-ellipsis"></div>
				</div>
			</div>
			<div class="PageBox">
				<div class="van-nav-bar van-nav-bar--fixed">
					<div class="van-nav-bar__content">
						<div class="van-nav-bar__left" @click="back">
							<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
						</div>
						<div class="van-nav-bar__title van-ellipsis">{{common.setting[0]}}</div>
						<!-- <div class="van-nav-bar__right" @click="dumprun('/pages/setting/withdrawalCenter')"><i class="van-icon"><img
									src="../../static/image/news/task00.png" class="van-icon__image"></i></div> -->
					</div>
				</div>
				<div class="bg">
					<div class="panel">

						<view class="record_nav">
							<view :class="['nav_items',  taskForm.status == 0 && 'curr_item']" @tap="changeStatus(0)">
								{{common.setting[1]}}
							</view>
							<view :class="['nav_items',  taskForm.status == 1 && 'curr_item']" @tap="changeStatus(1)">
								{{common.setting[2]}}
							</view>
						</view>

						<view class="record_list" v-if="taskList.length">
							<view class="sell_items" v-for="item in taskList">
								<view class="sell_con">
									<view>
										<text>{{item.shuliang}}</text>
										<text>{{common.hall.list[0]}}(USDT)</text>
									</view>
									<view>
										<text>{{item.shengyu}}</text>
										<text>{{common.hall.list[2]}}(USDT)</text>
									</view>
									<view>
										<text>{{item.danjia}}</text>
										<text>{{common.hall.list[1]}}(USDT)</text>
									</view>
								</view>
								<view class="sell_foo">
									<view>{{item.addtime_text}}</view>
									<view
									:style="{color: colors[status(item.status)]}"
									>{{status(item.status)}}</view>
								</view>

							</view>

						</view>

						<div class="van-list__finished-text" v-else>{{common.vanPull[0]}}</div>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				taskList: [],
				taskForm: {
					page: 1,
					status: 0,
					list: 999
				},
				colors: ['#333', '#00cf78' , '#f29b69']
			};
		},
		onLoad() {
			this.getorders()

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

			getorders() {
				const token = uni.getStorageSync('token')

				this.$u.api.index.getorders(token, this.taskForm).then(res => {
					if (res.code == 1) {
						this.taskList = res.data
					}
				})
			},

			changeStatus(index) {
				this.taskForm.status = index
				this.taskList = []
				this.getorders()
			}
		},
		computed: {
			common() {
				return this.$t("common")
			},
			status(){
				return (ind) => {
					if(ind == 0){
						return this.common.task.default[8]
					}else if (ind == 1){
						return this.common.task.default[9]
					}else if (ind == 2){
						return this.common.task.default[10]
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Site .van-nav-bar .van-icon {
		font-size: 1.5rem !important;
		color: #bbb !important;
	}

	.PageBox {
		overflow: auto;
		padding-top: 40px;
		background-color: #fcfaf4
	}

	.van-nav-bar {
		background-color: #fefaf0 !important;
	}

	.van-nav-bar .van-nav-bar__title {
		color: #222;
		font-weight: 700
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
		background-color: #fcfaf4
	}

	.PageBox .van-grid-item__content {
		padding: 10px !important;
		display: flex;
		color: #ccc;
		background-color: #fcfaf5;
	}

	.topTitle {
		position: absolute;
		max-width: 70%;
		font-size: 18px;
		color: #fff;
		background-color: transparent;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 9999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block
	}

	.PageBox .mytable {
		background-color: #191c23;
		width: 98%;
		margin: 5px auto;
		margin-top: 6px;
		font-size: 18px;
		margin-bottom: 10px
	}

	.PageBox table {
		width: 100%
	}

	.PageBox th:first-child {
		background-color: #b3b5fc;
		font-weight: 600;
		font-size: 13px;
		border: none;
		height: 33px;
		width: 26%
	}

	.PageBox th {
		border-right: 1px solid #fff !important
	}

	.PageBox table tr td {
		font-size: 11px;
		color: #626262;
		padding: 8px 0;
		text-align: center;
		border: none
	}

	table tbody tr:nth-child(odd) {
		background: #eff0f2
	}

	table tbody tr:nth-child(2n) {
		background: #e1e1f9
	}

	.record_nav {
		display: flex;
		justify-content: space-around;

		.nav_items {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80rpx;
			width: 300rpx;
			color: #222;
			border-radius: 12rpx;
			background-color: #fff;
		}

		.curr_item {
			background-color: #f7ce46;
		}
	}

	.record_list {

		.sell_items {
			padding: 20rpx;
			background-color: #fff;
			width: 100%;
			text-align: left;
			color: #222;
			font-size: 15px;
			margin-bottom: 10px;
			line-height: 22px;
			margin-top: 10px;
			border-radius: 10px;


			.sell_con {
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;

				&>view {
					display: flex;
					align-items: center;
					flex-direction: column;
					color: #666;

					&>text:first-child {
						margin-bottom: 10rpx;
						font-weight: 700;
						color: #222;
						font-size: 26rpx;
					}
				}
			}

			.sell_foo {
				padding: 0 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 40rpx;
				font-size: 22rpx;
			}
		}
	}
</style>