<template>
	<view class="Body bind_account">
		<view class="Site PageBox">
			<view class="van-nav-bar van-nav-bar--fixed">
				<view class="van-nav-bar__content">
					<view class="van-nav-bar__left" @click="back">
						<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
					</view>
					<view class="van-nav-bar__title van-ellipsis">{{common.bind[0]}}</view>
					<view>
					</view>
				</view>
			</view>

			<view class="bind_list">
				<view class="bind_item">
					<text>{{common.bind[1]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.guojia" 
					:placeholder="`${common.bind[15]}${common.bind[1]}`"
						class="van-field__control">
				</view>
			</view>

			<view class="bind_list" style="margin: 30rpx 0;">


				<view class="bind_item">
					<text>{{common.bind[2]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.bank_name" 
					:placeholder="`${common.bind[15]}${common.bind[2]}`" 
						class="van-field__control">
				</view>

				<view class="bind_item">
					<text>{{common.bind[3]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.card_no" 
					:placeholder="`${common.bind[15]}${common.bind[3]}`"
						class="van-field__control">
				</view>

				<view class="bind_item">
					<text>{{common.bind[4]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.name" 
					:placeholder="`${common.bind[15]}${common.bind[4]}`"
						class="van-field__control">
				</view>

				<view class="bind_item">
					<text>{{common.bind[5]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.mingzi"
					 :placeholder="`${common.bind[15]}${common.bind[5]}`"
						class="van-field__control">
				</view>

				<view class="bind_item">
					<text>{{common.bind[6]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.xingshi" 
					:placeholder="`${common.bind[15]}${common.bind[6]}`" 
						class="van-field__control">
				</view>
			</view>

			<view class="bind_list">
				<view class="bind_item">
					<text>{{common.bind[7]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.dizhis"
					:placeholder="`${common.bind[15]}${common.bind[7]}`"
						class="van-field__control">
				</view>
				<view class="bind_item">
					<text>{{common.bind[8]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.youbian"
					:placeholder="`${common.bind[15]}${common.bind[8]}`" 
						class="van-field__control">
				</view>
				<view class="bind_item">
					<text>{{common.bind[9]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.citys" 
					:placeholder="`${common.bind[15]}${common.bind[9]}`"
						class="van-field__control">
				</view>
				<view class="bind_item">
					<text>{{common.bind[10]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.zhou" 
					:placeholder="`${common.bind[15]}${common.bind[10]}`"
						class="van-field__control">
				</view>
				<view class="bind_item">
					<text>{{common.bind[11]}}</text>
					<input type="text" autocomplete="off" v-model="bindForm.mobile" 
					:placeholder="`${common.bind[15]}${common.bind[11]}`"
						class="van-field__control">
				</view>

			</view>

			<view class="bind_tips">
				<text>{{common.bind[12]}}</text>
				<text>{{common.bind[13]}}</text>
			</view>

			<view class="bind_btn" @tap="bindBtn" v-show="isBindBtn">
				{{common.bind[14]}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow: false,
				isBindBtn: false,
				bindForm: {
					guojia: '',
					bank_name: '',
					card_no: '',
					name: '',
					mingzi: '',
					xingshi: '',
					dizhis: '',
					youbian: '',
					citys: '',
					zhou: '',
					mobile: '',
				},
				token: uni.getStorageSync('token')
			};
		},
		onLoad() {
			this.isBind()
		},

		methods: {
			dumprun(url) {
				uni.navigateTo({
					url
				})
			},

			back() {
				uni.navigateBack(-1)
			},

			bindBtn() {
				if (this.isValid()) {
					this.$u.api.setting.bindAccount(this.token, this.bindForm).then(res => {
						if(res.code == 1){
							uni.showToast({
								title: this.common.bind[17],
								icon: 'none'
							});
							uni.navigateBack(-1)
						}
					})
				}

			},

			isValid() {
				for (const field in this.bindForm) {
					if (this.bindForm[field].trim() === '') {
						uni.showToast({
							title: this.common.bind[16],
							icon: 'none'
						});
						return false;
					}
				}
				return true;
			},
			
			// 查看是否有绑定
			isBind(){
				this.$u.api.setting.isBind(this.token).then(res => {
					if(res.code ==  1){
						this.isBindBtn = false
						for (const key in res.data) {
						  if (this.bindForm.hasOwnProperty(key)) {
						    this.bindForm[key] = res.data[key];
						  }
						}
					}
				}).catch(() => {
					 this.isBindBtn = true
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
		color: #bbb !important;
	}
	
	.PageBox {
		color: #635327;
		padding-top: 40px;
		height: auto;
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
		padding: 17rpx 0;
		background-color: #191c23
	}

	.van-cell__title {
		color: #e7e7e7
	}



	.bind_account {
		padding: 30rpx;
		height: auto;
		background-color: #fefaf0;

		.bind_list {
			background-color: #fff;
			border-radius: 10rpx;

			.bind_item {
				padding: 0 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #222;
				height: 76rpx;

				&>text {
					flex-shrink: 0;
				}

				.van-field__control {
					text-align: right;
				}
			}
		}

		.bind_tips {
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			color: #222;

			&>text:last-child {
				color: #ed742e;
			}
		}

		.bind_btn {
			margin: 30rpx 60rpx 0 60rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 70rpx;
			background-color: #f8ce47;
		}
		
		
	}
</style>