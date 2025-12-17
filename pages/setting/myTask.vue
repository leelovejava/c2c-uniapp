<template>
	<view class="Body">
		<div class="Site PageBox">
			<!-- <div style="margin-top: -40px; margin-bottom: 10px;">
				<div style="text-align: center; display: block; margin: 0px auto;">
					<button
						class="van-button van-button--default van-button--normal van-button--plain"
						style="height: 35px; border-color: rgb(245, 199, 58);"
						@click="qiea(0)"
						:style="xuanz == 0 ? 'color: rgb(245, 199, 58);background: rgb(245, 199, 58)' : 'color: rgb(255, 255, 255)'">
						<div class="van-button__content"><span
								class="van-button__text"><span
									style="color: rgb(0, 0, 0);">{{common.task.tabs[1]}}</span></span></div>
					</button>
					<button class="van-button van-button--default van-button--normal"
						style="height: 35px; border-color: rgb(245, 199, 58);"
						@click="qiea(1)"
						:style="xuanz == 1 ? 'color: rgb(245, 199, 58);background: rgb(245, 199, 58)' : 'color: rgb(255, 255, 255)'">
						<div class="van-button__content"><span
								class="van-button__text"><span
									style="color: rgb(0, 0, 0);">{{common.task.tabs[3]}}</span></span></div>
					</button>
				</div>
			</div> -->
			<div class="van-nav-bar van-nav-bar--fixed">
				<div class="van-nav-bar__content" style="background-color: #fefaf0;">
					<div class="van-nav-bar__title van-ellipsis" style="color: #222;">{{common.task.default[0]}}</div>
				</div>
			</div>
			<div class="ScrollBox">
				<div class="van-tabs van-tabs--line" z-index="99" icon-size="">
					<div class="van-tabs__wrap" style="height: 80rpx;">
						<div role="tablist" class="van-tabs__nav van-tabs__nav--line" style="background: #fff;">
							
							<div class="van-tab"
							@click="qieb(-1)" 
								:class="[taskForm.status == -1 && 'curr_tabs']">
								<span class="van-tab__text van-tab__text--ellipsis">{{common.task.default[11]}}</span>
							</div>
							<div class="van-tab" 
							@click="qieb(0)" 
								:class="[taskForm.status == 0 && 'curr_tabs']">
								<span class="van-tab__text van-tab__text--ellipsis">{{common.task.default[8]}}</span>
							</div>
							
							<div class="van-tab"
							@click="qieb(1)" 
								:class="[taskForm.status == 1 && 'curr_tabs']">
								<span class="van-tab__text van-tab__text--ellipsis">{{common.task.default[9]}}</span>
							</div>
							
							<div class="van-tab"
							@click="qieb(2)" 
								:class="[taskForm.status == 2 && 'curr_tabs']">
								<span class="van-tab__text van-tab__text--ellipsis">{{common.task.default[10]}}</span>
							</div>
						</div>
					</div>
					<div class="van-tabs__content"><!----><!----><!----></div>
				</div>
				<div class="van-pull-refresh">
					<div class="van-pull-refresh__track" style="transition-duration: 0ms; height: auto;">
						<div class="van-pull-refresh__head"></div>
						<div class="FundItem van-cell van-cell--borderless" v-for="item in taskList">
							<div class="van-cell__value van-cell__value--alone">
								<div class="task_list">
									<div class="task_item">
										<text style="color: #999;">
											{{common.task.default[1]}}:
										</text>
										<text>{{item.orders}}</text>
									</div>

									<div class="task_item">
										<text style="color: #999;">{{common.task.default[2]}}:</text>
										<text>{{item.username}}</text>
									</div>
									<div class="task_item">
										<text style="color: #999;">{{common.task.default[3]}}:</text>
										<text>{{item.shuliang}}</text>
									</div>
									<div class="task_item">
										<text style="color: #999;">{{common.task.default[4]}}:</text>
										<text>{{item.danjia}}</text>
									</div>
									<div class="task_item">
										<text style="color: #999;">{{common.task.default[5]}}:</text>
										<text>{{item.money}}</text>
									</div>
									<div class="task_item">
										<text style="color: #999;">{{common.task.default[6]}}:</text>
										<text :style="item.status==2?'color:red':item.status==3?'color:#0089ffeb':'color:green'">{{status(item.status)}}</text>
									</div>
									<div class="task_item">
										<text style="color: #999;">{{common.task.default[7]}}:</text>
										<text>{{item.addtime_text}}</text>
									</div>
								</div>
							</div>
						</div>
						 
						<empty :promptText="common.empty[0]" :showEmpty="taskList.length == 0" />
						<div class="van-list__placeholder"></div>

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
				isshow: false,
				zhuangtai: 0,
				taskList: [], 
				taskForm: {
					status : -1,
					page: 1,
					list: 999
				}
			};
		},
		onLoad(options) {
		
			this.getTaskList()
		},
		
		onShow() {

		},
		methods: {
			getTaskList() {
				const token = uni.getStorageSync('token')
					this.$u.api.index.getdtrecod(token, this.taskForm).then(res => {
						this.taskList = res.data
					})
			},
			qieb(index) {
				this.taskForm.status = index
				this.getTaskList()
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
			status(){
				return (type) => {
					if(type == 0){
						return this.common.task.default[8]
					}else if (type == 1){
						return this.common.task.default[9]
					}else{
						return this.common.task.default[10]
					}
				}
			}
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
		padding-top: 55px;
		background-color: #fdfaf1;
	}

	.van-nav-bar {
		background-color: #fdfaf1 !important;
	}

	.van-nav-bar .van-nav-bar__title {
		color: #222;
		font-weight: 700;
	}

	.van-nav-bar .van-nav-bar__arrow {
		color: #b5b5b5
	}

	.van-cell__title.record>p {
		margin-bottom: 5px
	}

	.van-tabs__nav {
		background-color: #8c60f1
	}

	.van-cell {
		margin-top: 5px;
		color: #aaa
	}

	.linkinfo {
		margin-left: -5px;
		text-indent: 5px
	}

	.linkinfo a:link {
		color: #ff8a00
	}

	.van-pull-refresh {
		min-height: calc(100vh - 90px)
	}

	.TaskItem {
		padding: 20px 10px;
		box-shadow: 0 0 3px #ccc
	}

	.TaskItem .van-cell__title {
		line-height: 25px
	}

	.item_title h4 {
		font-size: 13px;
		font-family: emoji
	}

	.FundItem {
		background-color: #fff;
		border-radius: 8px
	}

	.TaskItem .va .TaskItem .van-cell__value {
		overflow: visible
	}

	.van-list {
		overflow: hidden
	}

	.van-list .mygrid {
		padding: 0
	}

	.van-list .icon a {
		width: 2.6rem;
		height: 2.6rem
	}

	.Site .van-tabs__nav {
		background: #fffaef
	}

	.TaskItem .post>p,
	.TaskItem .record>p {
		color: #444;
		font-size: 12px;
		font-family: emoji;
		margin-top: 5px
	}

	.item_title {
		margin-bottom: 15px;
		display: flex;
		flex-wrap: wrap
	}

	.goPage {
		margin-top: 15px !important
	}

	.goPage a {
		color: #4e51bf !important
	}

	.ScrollBox .van-cell__value {
		margin-top: -3px
	}

	.ScrollBox .van-uploader__upload {
		background-color: #e3e6f2;
		border-radius: 4px
	}

	.ScrollBox .uploader_img .van-icon:before {
		display: none
	}

	.van-grid-item__content {
		padding: 10px !important;
		display: flex;
		background-color: #191c23
	}

	.ScrollBox .uploader_img .van-icon {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAsCAYAAADM1FBZAAADDUlEQVRogd3aTagVdRjH8c8Zbze8RQZx9SopvSwye1nIpRIUicBVtZBKQkySInRTUSS4iUTaBLloWUlK9KoGIb1YCUEFQQuhVBBpkWAktkjIulba4jkHx7lzzsyZc5sz+YW7mP/L839+M/+X5/mf29r90SEpFuERLMNctDSHP/Aj9mEPznUqRlKNnsU2XF6ra/2xXLzk77BGiJK0KzfjJc0WkGYSX2IB8SVuFl8gzV84Xq9fhVyBeanna8WLXzuCx108rfZjLU7V5l55VuNNzG4/r8HTCe5INfob6zRTAOzF66nnWZhMcFWq8HecrNOrChzJPF+d5DZrNuezBSN5rYbEKFbiepzAAZwp07EpIpaKA+y6VNnPYn1+UdS5CdNpLj5xsQCYjw9xU5GBJoh4AuNd6sbwZJGBJoi4raD+1iIDTRBRdCb9WmSgCSLeKqh/r8hAE0R8ha1d6nbgnSIDTdlin8c3eBQ34Cfh/O4yncuKaGEVHmgPcrw9wL4+ne3Fp+2/vikj4hq8gXsz5evxPh7D6SqDzxRFa2JczNmsgA4P4lvTD6pa6SViVJyYiwtsLBbz+faZcqpfeol4EXeVtDMfn2PJwB5VoNuaWIan+rQ1js9EJHqsgi834j6xcZzEBzjUs0ebPBEjeFVkTf2yQESdK8Q2WYZ52C5SzfTMeAEv4zk5OUSavOm0AbeUdCCPRfgYc0q0XYnv8XCOL4m4RnpNwQvNdrxMvIFBWSLyg16DrxaXEt0i2A4b8EqvBlkRY5goMFqWe3oMfj/eFjtgGTZiS7fK/zp22ohNmbI79SegwzYhfhp1BIDbXdiqJ8SuM1bBTgu75KzXOkSMinB6Au+KM6Uqc0z/srVFsQvxg4jDBmXaTX2d+cRMCMilCUnRwFwyIpqS3VUmUS1GahQJpobtxKAkODtsJwZkKsHRYXsxIIcTcYr+XzmII4nIo/cP2ZkqnMMzxJo4j4fw9TA96pMpkWcc4MJh9xvuFtfopfLaIXFGJFuT2NkpbGX+LaLDleLHjybxJ37BP9mKfwG37XP02t2knwAAAABJRU5ErkJggg==) no-repeat;
		width: 17px;
		height: 17px;
		background-size: 100%
	}

	.TaskItem .van-button {
		width: 73px !important
	}

	.van-uploader .van-uploader__input-wrapper button {
		width: 65px;
		padding: 5px 0;
		border-radius: 10px;
		height: auto;
		font-size: 13px;
		background: #4e51bf
	}

	.van-uploader {
		margin-top: 30px
	}

	.orderList {
		width: 100%;
		height: auto;
		background: transparent;
		margin-bottom: 15px
	}

	.order {
		width: 100%;
		height: 115px;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
		border-radius: 10px;
		display: flex;
		padding: 10px;
		background: #8c60f1
	}

	.orderLeft {
		flex-grow: 1;
		border-right: 1.5px solid #af9bf4;
		padding-right: 10px
	}

	.orderLeft>img {
		display: block;
		width: 45px;
		height: 45px;
		margin: 22.5px auto;
		border-radius: 50%;
		background: #fff;
		padding: 10px;
		box-sizing: content-box
	}

	.orderRight {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-grow: 5;
		padding-left: 10px
	}

	.orderRight>button {
		height: 55px;
		border-radius: 5px;
		border: none
	}

	.task_list {
		.task_item {
			color: #000000;
			display: flex;
			align-items: center;
			height: 55rpx;
			justify-content: space-between;
			font-size: 26rpx;
		}
	}

	.curr_tabs {
		font-weight: 700;
		color: #000;
		font-size: 28rpx;

		&::before {
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);
			content: '';
			width: 40rpx;
			height: 4rpx;
			background-color: #f8d86a;
		}
	}
</style>