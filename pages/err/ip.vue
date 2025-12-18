<template>
    <view class="ip">
        <image class="bg" src="/static/ip.png" mode="" />
        <view class="text01">IP限制访问</view>
        <view class="text02">防止网站内容被抄袭</view>
        <view class="text03">客户咨询、询单更准确 避免国内同行的探价</view>
    </view>
</template>

<script>
export default {
    name: "HaogeIp",

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.err,
.bg {
    width: 100%;
    height: 100vh;
}
.text01 {
    position: fixed;
    font-size: 68rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 95rpx;
    letter-spacing: 11rpx;
    top: 280rpx;
    left: 174rpx;
}
.text02 {
    font-size: 42rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 59rpx;
    letter-spacing: 10rpx;
    top: 426rpx;
    left: 149rpx;
    position: fixed;
}
.text03 {
    width: 430rpx;
    height: 96rpx;
    font-size: 30rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 48rpx;
    letter-spacing: 10rpx;
    text-shadow: 0px 10rpx 20rpx rgba(0, 0, 0, 0.38);
    top: 640rpx;
    left: 160rpx;
    position: fixed;
}
</style>