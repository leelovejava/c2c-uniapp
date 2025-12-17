 <template>
 	<view class="change_password">
 		<view class="van-nav-bar van-nav-bar--fixed">
 			<view class="van-nav-bar__content">
 				<view class="van-nav-bar__left" @click="back">
 					<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
 				</view>
 				<view class="van-nav-bar__title van-ellipsis">{{common.userInfo.default[10]}}</view>
 				<view>
 				</view>
 			</view>
 		</view>

 		<view class="list">
 			<view class="items">
 				<text>{{common.userInfo.label[0]}}</text>
 				<input type="text" autocomplete="off" v-model="passForm.ol_password"
 					:placeholder="common.userInfo.placeholder[0]" class="van-field__control">
 			</view>

 			<view class="items">
 				<text>{{common.userInfo.label[1]}}</text>
 				<input type="text" autocomplete="off" v-model="passForm.password"
 					:placeholder="common.userInfo.placeholder[1]" class="van-field__control">
 			</view>

 			<view class="items">
 				<text>{{common.userInfo.label[2]}}</text>
 				<input type="text" autocomplete="off" v-model="passForm.password2"
 					:placeholder="common.userInfo.placeholder[2]" class="van-field__control">
 			</view>
 		</view>

 		<view class="btn" @tap="btn">
 			{{common.userInfo.default[12]}}
 		</view>
 	</view>
 </template>

 <script>
 	export default {
 		data() {
 			return {
 				passForm: {
 					ol_password: '',
 					password: '',
 					password2: '',
 				}
 			};
 		},
 		computed: {
 			common() {
 				return this.$t("common")
 			},
 		},
 		methods: {
 			back() {
 				uni.navigateBack()
 			},

 			btn() {
 				const token = uni.getStorageSync('token')
 				this.$u.api.setting.change_pwd(token, this.passForm).then((res) => {
 					if (res.code == 1) {
 						this.$utils.showToast(this.common.userInfo.label[7])
 						setTimeout(() => {
 							uni.setStorageSync('token', '')
 							uni.redirectTo({
 								url: "/pages/common/login"
 							})
 						}, 1000)
 					}
 				})
 			}
 		}
 	}
 </script>

 <style lang="scss" scoped>
 	.change_password {
 		position: relative;
 		height: 100%;
 		padding-top: 70rpx;

 		.van-nav-bar {
 			background-color: #fcfaf3;
 		}

 		.list {
 			margin: 20rpx;
 			background-color: #fff;
 			border-radius: 10rpx;

 			.items {
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

 		.btn {
 			position: absolute;
 			bottom: 8%;
 			left: 0;
 			width: 90%;
 			display: flex;
 			justify-content: center;
 			align-items: center;
 			height: 80rpx;
 			color: #222;
 			border-radius: 12rpx;
 			background-color: #f7ce46;
 		}
 	}
 </style>