<template>
	<view class="Body">
		<div class="Main Site" style="overflow: visible;">
			<!-- <div class="van-nav-bar van-nav-bar--fixed">
				<div class="van-nav-bar__content">
					<div class="van-nav-bar__left"><i
							class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i></div>
					<div class="van-nav-bar__title van-ellipsis"></div>
				</div>
			</div> -->
			<div class="PageBox">
				<div class="van-nav-bar van-nav-bar--fixed">
					<div class="van-nav-bar__content">
						<div class="van-nav-bar__left" @click="back">
							<u-icon name="arrow-left" color="#222" size="28rpx"></u-icon>
						</div>
						<div class="van-nav-bar__title van-ellipsis">{{common.userInfo.default[0]}}</div>
					</div>
				</div>
				<div class="ScrollBox">
					<div>
						<form class="mt15 van-form">
							<div class="van-cell van-cell--center van-cell--large"
							@tap="uploadAvatar"
							>
								<div class="van-cell__title"><span>{{common.userInfo.default[1]}}</span></div>
								<div class="van-cell__value">
									<div class="userFace">
										<img :src="userinfo.avatar">
										<i class="van-icon van-icon-arrow van-cell__right-icon"></i>
									</div>
								</div>
							</div>
							<div role="button" tabindex="0"
								class="van-cell van-cell--clickable van-cell--center van-cell--large">
								<div class="van-cell__title"><span>{{common.userInfo.default[15]}}</span></div>
								<div class="van-cell van-field" style="width: 300rpx;">
									<div class="van-cell__value van-cell__value--alone van-field__value">
										<div class="van-field__body2"><input type="text" :placeholder="common.userInfo.default[8]"
												class="van-field__control" :value="nickname" v-model="nickname"></div>
									</div>
								</div>
							</div>
							<!-- <div class="van-cell van-cell--center van-cell--large">
								<div class="van-cell__title"><span>{{common.userInfo.default[2]}}</span></div>
								<div class="van-cell__value"><span>{{userinfo.username}}</span>
								</div>
							</div> -->
							<div class="van-cell van-cell--center van-cell--large">
								<div class="van-cell__title"><span>{{common.userInfo.default[3]}}</span>
								</div>
								<div class="van-cell__value" style="font-size: 26rpx; padding-right: 30rpx">{{userinfo.username}}</div>
								<!-- <div class="van-cell van-field" style="width: 300rpx;">
									<div class="van-cell__value van-cell__value--alone van-field__value">
										<div class="van-field__body2"><input type="text" :placeholder="common.userInfo.default[8]"
												class="van-field__control" :value="username" v-model="username"></div>
									</div>
								</div> -->
							</div>
							<div role="button" tabindex="0"
								class="van-cell van-cell--clickable van-cell--center van-cell--large"
								@tap="dumprun('/pages/setting/change-password')"
								>
								<div class="van-cell__title"><span>{{common.userInfo.default[10]}}</span>
								</div>
								<div class="van-cell__value"  
								>
								<!-- <span>{{common.userInfo.default[8]}}</span> -->
								</div>
								<i
									class="van-icon van-icon-arrow van-cell__right-icon"></i>
							</div>
							
							<div class="van-cell van-cell--center van-cell--large"
							@tap="dumprun('/pages/setting/language')"
							>
								<div class="van-cell__title"><span>{{common.userInfo.default[17]}}</span></div>
								<div class="van-cell__value"><span> 
								<!-- {{lang}} -->
								{{common.language}}
								</span>
								<i class="van-icon van-icon-arrow van-cell__right-icon"></i>
								</div>
							</div>
						</form>
					</div>
					<div style="text-align: center; margin-top: 20px;" @click="tijiao">
						<p class="btn">{{common.userInfo.default[12]}}</p>
					</div>
				</div><!----><!---->
			</div>
		</div>
		<!-- <u-popup v-model="isshow" mode="bottom" length="66%" contentBackgroundColor="#999">
			<view class="popup-list">
				<div role="button" tabindex="0"
					class="van-cell van-cell--clickable van-cell--center van-cell--large">
					<div class="van-cell__title"><span>{{common.userInfo.default[6]}}</span></div>
					<div class="van-cell van-field" style="width: 150px;">
						<div class="van-cell__value van-cell__value--alone van-field__value">
							<div class="van-field__body2"><input type="text" :placeholder="common.userInfo.default[8]"
									class="van-field__control" :value="password" v-model="password"></div>
						</div>
					</div>
				</div>
				<div style="text-align: center; margin-top: 20px;" @click="gaimi">
					<p class="btn">{{common.userInfo.default[12]}}</p>
				</div>
			</view>
		</u-popup> -->
	</view>
</template>

<script>
	import langslist from "@/common/data.js"
	export default {
		data() {
			return {
				isshow: false,
				userinfo:[],
				nickname:'',
				password:'',
				username: '',
				langs: langslist,
				userForm: {
					nickname: '',	
					avatar: ''
				}
			};
		},
		onShow() {
			this.setDefaultLang()
		},
		onLoad(options) {
			const {
				id
			} = options
			this.id = id
			this.getuserinfo()
		}, 
		methods: {
			gaimi(){
				const token = uni.getStorageSync('token')
				this.$u.api.index.change_pwd(token,this.password).then(res => {
					this.$utils.showToast('success')
					this.isshow = false
				})
			},
			tijiao(){
				const token = uni.getStorageSync('token')
				this.$u.api.index.upUserinfo(token,this.userForm).then(res => {
					this.$utils.showToast('success')
					setTimeout(() => {
						this.back()
					}, 1000)
				})
			},
			getuserinfo(){
				const token = uni.getStorageSync('token')
				this.$u.api.index.getUserinfo(token).then(res => {
					this.userinfo = res.data
					this.nickname = res.data.nickname
					this.username = res.data.username
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
			
			
			setDefaultLang() {
				let langsData = this.langs.map(el => {
					el.selected = false
					return el
				})
				// var langsData = this.langs;
				const lang = this.$store.state.lang || 'eng'
				const has = langsData.findIndex(item => item.value == lang)
				langsData[has].selected = true
				this.langs = langsData
			},
			
			// 头像上传
			uploadAvatar(){
				let _this = this
				  uni.chooseImage({
					sourceType: ['camera', 'album'],
				    count: 1, // 最多可选的图片数量
				    success: (res) => {
				      const tempFilePaths = res.tempFilePaths[0]
					  uni.uploadFile({
					    url: 'https://overthecounter.top/upload', // 服务器接口地址
					    filePath: tempFilePaths,
					    success: (res) => {
					      res.data = JSON.parse(res.data)
						  if(res.data.code == 1){
							  _this.userForm.avatar = res.data.data.fullurl
						  }
					    },
					    fail: (err) => {
					      // 上传失败的处理逻辑
					      console.log(err)
					    }
					  })
				    }
				  })
			},
			 
		},
		computed: {
			common() {
				return this.$t("common")
			},
			lang(){
				return uni.getStorageSync('lang') || 'zhn'
			}
		}
	}
</script>

<style>
	.PageBox {
	    color: #222;
		padding-top: 40px;
	    background-color: #fefaf0
	}
	
	.van-nav-bar {
	    background-color: #fefaf0;
	}
	
	.van-nav-bar .van-nav-bar__title {
	    color: #222
	}
	
	.van-nav-bar .van-nav-bar__arrow {
	    color: #b5b5b5
	}
	
	.van-cell__left-icon {
	    width: 24px;
	    height: 24px;
	    margin-right: 10px
	}
	
	.van-icon__image {
	    width: 100%;
	    height: 100%
	}
	
	.van-cell__title {
	    font-size: 14px;
	    color: #000
	}
	
	.ScrollBox {
	    padding: 0 0;
	    color: #222;
	}
	
	.ScrollBox .van-cell {
	    border-bottom: 4px solid #fdfaf1;
	    background-color: #fff
	}
	
	.ScrollBox .van-cell:after {
	    display: none
	}
	
	.ScrollBox .van-cell__title {
	    font-size: 22rpx;
	    font-family: Alibaba;
	    font-weight: 400;
	    color: #222;
	}
	
	.ScrollBox .van-cell__value {
	    display: flex;
	    color: #222;
	    justify-content: flex-end
	}
	
	.ScrollBox .userFace {
		display: flex;
		align-items: center;
	    overflow: hidden
	}
	
	.ScrollBox .userFace img {
		margin-right: 20rpx;
	    width: 75rpx;
	    height: 75rpx;
		border-radius: 45%;
	}
	
	.ScrollBox .isTrue {
	    color: #333;
	    padding-right: 20px
	}
	
	.van-cell:nth-child(4) .van-cell__left-icon img {
	    transform: scale(1.1)
	}
	
	.ScrollBox .van-cell__value {
	    font-size: 15px
	}
	
	.btn {
	    width: 85%;
	    padding: 10px 50px;
	    border-radius: 20px;
	    background-color: #0076fa;
	    color: #fff;
	    font-size: 18px;
	    text-align: center;
	    margin: 15px 30px 10px
	}
	.van-field__body2{
		
	}
</style>