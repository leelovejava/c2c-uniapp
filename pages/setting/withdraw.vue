<template>
	<view class="Body">
		<div class="Main Site" style="overflow: visible;">

			<div class="PageBox">
				<div class="van-nav-bar van-nav-bar--fixed">
					<div class="van-nav-bar__content">
						<div class="van-nav-bar__left" @click="back">
							<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
						</div>
						<div class="van-nav-bar__title van-ellipsis">{{common.wallet.default[2]}}</div>
						<div class="van-nav-bar__right" @click="dumprun('/pages/setting/withdrawlist')"><i
								class="van-icon"><img src="../../static/image/news/task00.png"
									class="van-icon__image"></i></div>
					</div>
				</div>

				<!-- <div class="box"> -->
					<!-- <div> -->
						<!-- <div class="van-cell van-field" style="display: none;">
							<div class="van-cell__title van-field__label"><span>{{common.bindAccount.fields[3]}}</span>
							</div>
							<div class="van-cell__value van-field__value">
								<div class="van-field__body2"><input type="text"
										:placeholder="common.bindAccount.placeholder[3]" class="van-field__control"
										:value="bank_name" v-model="bank_name"></div>
							</div>
						</div>
						<div class="van-cell van-field" style="display: none;">
							<div class="van-cell__title van-field__label"><span>{{common.bindAccount.fields[0]}}</span>
							</div>
							<div class="van-cell__value van-field__value">
								<div class="van-field__body2"><input type="text"
										:placeholder="common.bindAccount.placeholder[0]" class="van-field__control"
										:value="name" v-model="name"></div>
							</div>
						</div>
						<div class="van-cell van-field" style="display: none;">
							<div class="van-cell__title van-field__label"><span>{{common.bindAccount.fields[2]}}</span>
							</div>
							<div class="van-cell__value van-field__value">
								<div class="van-field__body2"><input type="text"
										:placeholder="common.bindAccount.placeholder[2]" class="van-field__control"
										:value="card_no" v-model="card_no"></div>
							</div>
						</div> -->



					<!-- 	<div class="van-cell van-field">
							<div class="van-cell__title van-field__label"><span>{{common.withdraw[0]}}</span>
							</div>
							<div class="van-cell__value van-field__value">
								<div class="van-field__body2"><input type="text" :placeholder="common.withdraw[4]"
										class="van-field__control" v-model="form.bank_name" disabled="true"></div>
							</div>
						</div>
						<div class="van-cell van-field">
							<div class="van-cell__title van-field__label"><span>{{common.withdraw[1]}}</span>
							</div>
							<div class="van-cell__value van-field__value">
								<div class="van-field__body2"><input type="text" :placeholder="common.withdraw[5]"
										class="van-field__control" v-model="form.card_no" disabled="true"></div>
							</div>
						</div> -->

					<!-- 	<div class="van-cell van-field">
							<div class="van-cell__title van-field__label"><span>{{common.withdraw[2]}}</span>
							</div>
							<div class="van-cell__value van-field__value">
								<div class="van-field__body2"><input type="text" :placeholder="common.withdraw[6]"
										class="van-field__control" v-model="form.name" disabled="true"></div>
							</div>
						</div> -->

					<!-- </div> -->

				<!-- </div> -->
				<div class="box" style="margin-top: 40rpx;">
					<div class="van-cell van-field">
						<div class="van-cell__title van-field__label"><span>{{common.withdraw[3]}}</span>
						</div>
						<div class="van-cell__value van-field__value">
							<div class="van-field__body2"><input type="text" :placeholder="common.withdraw[7]"
									class="van-field__control" v-model="money"></div>
						</div>
					</div>
				</div>
				<div style="text-align: center; margin-top: 100px;" @click="tijiao">
					<p class="btn">{{common.recharge.default[4]}}</p>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow: false,
				userinfo: [],
				bank_deposit: '',
				jine: '',
				bili: '',
				moneytype: 'CHN',
				lang: 'eng',
				money: '',
				form: {
					// bank_name: '',
					// card_no: '',
					name: '',
					money: '',
					// bank_id: ''
				}
			};
		},
		onLoad(options) {
			// const {
			// 	id
			// } = options
			// this.id = id
			this.moneytype = options.moneytype || 'CHN';
			this.lang = this.$store.state.lang || 'eng';
			this.$u.api.index.shoujia().then(res => {
				this.bili = res.data.shoujia
			})

		},
		onShow() {
			this.getuserinfo()
		},
		methods: {
			// 提现
			tijiao() { 
				const token = uni.getStorageSync('token');
				this.$u.api.index.apply_withdrawal(token, this.money).then(res => {
					if(res.code == 1){
						this.$utils.showToast(res.msg)
						setTimeout(() => {
							this.back()
						}, 1000)
					}
				
				})


			},
			allin() {
				this.jine = this.userinfo.balance_revered
			},
			getuserinfo() {
				const token = uni.getStorageSync('token');
				this.$u.api.index.getUserinfo(token).then(res => {
					this.userinfo = res.data;
					if (res.data.bank.length == 0) {
						this.dumprun('/pages/setting/bindAccount')
					} else {
						// this.bank_name = res.data.bank[0].bank_name
						// this.name = res.data.bank[0].name
						// this.card_no = res.data.bank[0].card_no
						// this.bank_deposit = res.data.bank[0].bank_deposit

						this.$set(this.form, 'bank_name', res.data.bank[0].bank_name)
						this.$set(this.form, 'card_no', res.data.bank[0].card_no)
						this.$set(this.form, 'name', res.data.bank[0].name)
						// this.$set(this.form, 'bank_id', res.data.bank[0].id)

					}
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
	.PageBox {
		color: #635327;
		padding-top: 40px;
		background-color: #fcfaf4;
	}

	.van-nav-bar {
		background-color: #fcfaf5 !important;
	}

	.van-nav-bar .van-nav-bar__arrow,
	.van-nav-bar .van-nav-bar__title {
		color: #222;
	}

	.PageBox .van-cell {
		background-color: #fff;
	}

	.PageBox .van-cell .van-cell__title {
		font-size: 15px;
		font-weight: 700;
		color: #ccc
	}

	.PageBox .box {
		width: 95%;
		padding: 10px 0 10px 10px;
		font-size: 16px;
		margin-top: 5px;
		border-radius: 10px;
		margin-left: 10px;
		background-color: #fff;
		color: #555
	}

	.box {
		.van-field__control {
			text-align: right;
		}

		.van-field {
			border: none;
		}

		.van-field__label {
			color: #222 !important;
		}
	}

	p {
		width: 80px
	}

	.btn {
		width: 86%;
		padding: 20px 50px;
		border-radius: 12rpx;
		background-color: #f7ce46;
		color: #000;
		font-size: 26rpx;
		text-align: center;
		margin: 15px 30px 30px
	}

	.van-field__body2 {}
</style>