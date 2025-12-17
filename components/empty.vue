<template>
	<view class="empty" v-if="showEmpty">
		<image class="img" :src="require('@/static/image/news/empty.png')"></image>
		<text>{{promptText}}</text>
	</view>
</template>

<script>
	export default {
		name:"empty",
		props: {
		  promptText: {
		    type: String,
		    default: ''
		  },
		  showEmpty:{
			type: Boolean,
			default: false
		  }
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.empty{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	.img{
		width: 180rpx;
		height: 120rpx;
	}
	& > text {
		margin-top: 20rpx;
		font-weight: 700;
		color: #999;
	}
}
</style>