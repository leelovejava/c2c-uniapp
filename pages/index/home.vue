<template>
    <view class="">
        <view class="a-pr" style="z-index: 3;">
            <view class="a-p15 a-crfff">
                <view class="a-mb20" style="display: flex; justify-content: flex-end; align-items: center;">
                    <view class="language-switcher">
                        <view class="dropdown-toggle a-rowc" @tap="$u.route('/pages/setting/language')">
                            <view class="a-mr3">
                                {{ i18n.language }}
                            </view>
                            <u-icon name="arrow-down-fill" color="#fff" size="16"></u-icon>
                        </view>
                    </view>
                </view>
                <view class="hero-content">
                    <h1>{{ i18n.home.hero.title }}</h1>
                    <p class="subtitle">{{ i18n.home.hero.subtitle }}</p>
                    <p class="description">{{ i18n.home.hero.description }}</p>
                    <p class="credentials">{{ i18n.home.hero.credentials1 }}</p>
                    <p class="credentials">{{ i18n.home.hero.credentials2 }}</p>
                    <button class="get-started-btn" @click="$u.route('/pages/index/index')">{{ i18n.home.hero.button }}</button>
                </view>

            </view>
        </view>
        <view class="a-pf a-w" style="top: 0;left: 0;height: 100vh;z-index: 0;z-index: 1; ">
            <video class="a-w a-h" objectFit="cover" src="/static/image/fz/ea1.mp4" :controls="false"
                :show-center-play-btn="false" :show-play-btn="false" :show-fullscreen-btn="false"
                :enable-progress-gesture="false" autoplay loop muted></video>
        </view>



        <!-- 公告弹窗 -->
        <u-popup v-model="showAnnouncement" mode="center" border-radius="12" width="80%">
            <u-icon name="close" class="close-btn" @click="showAnnouncement = false" size="30"></u-icon>
            <scroll-view class="" style="height: 600rpx;">
                <view class="popup-content">
                    <h3>{{ latest.title }}</h3>
                    <u-parse :html="latest.content"></u-parse>
                </view>
            </scroll-view>
        </u-popup>

    </view>
</template>
<script>
export default {
    computed: {
        i18n() {
            return this.$t("common")
        },
    },
    data() {
        return {
            showLanguage: false,
            showAnnouncement: false,
            latest: {},
        };
    },
    onLoad(options) {
        uni.hideTabBar();
        const token = uni.getStorageSync('token')
        // this.$u.api.index.announcement_latest(token).then(res => {
        // 	this.latest = res.data
        // 	if (res.data.title) {
        // 		this.showAnnouncement = true
        // 	}
        // })
    },
    onShow() {

    },
    methods: {
        // 获取首页公告

    },
    onHide() {
        clearInterval(this.intervalId); // 在组件销毁前清除定时器
    },
}
</script>
<style lang="scss" scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 30px;

    .grid-item {
        background-color: #000;
        padding: 20px;
        text-align: left;
        border-radius: 10px;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid rgba(255, 255, 255, 0.2);

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 15px;
        }
    }
}

.info-card {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    z-index: -1;
}

.info-card h3 {
    margin: 0 0 5px 0;
    font-size: 18px;
}

.info-card p {
    margin: 0;
    font-size: 14px;
    color: #ccc;
}

/* 公告弹窗样式 */
.popup-content {
    padding: 30px;
    color: #333;
    position: relative;
    text-align: center;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    color: #999;
    z-index: 666;
}

.popup-content h3 {
    margin: 0 0 20px 0;
    font-size: 20px;
    color: #333;
}

.popup-content p {
    margin: 10px 0;
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

.popup-date {
    margin-top: 20px;
    font-size: 12px;
    color: #999;
}

/* Hero section styles */
.hero-content {
    text-align: center;
    color: white;
    padding: 0 20px;
    max-width: 800px;
}

.hero-content h1 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-content .subtitle {
    font-size: 24px;
    margin-bottom: 20px;
    opacity: 0.9;
}

.hero-content .description {
    font-size: 18px;
    margin-bottom: 25px;
    opacity: 0.9;
    line-height: 1.5;
}

.hero-content .credentials {
    font-size: 16px;
    margin-bottom: 10px;
    opacity: 0.8;
}

.hero-content .get-started-btn {
    display: inline-block;
    background-color: white;
    color: black;
    font-size: 18px;
    font-weight: bold;
    padding: 15px 35px;
    border: none;
    border-radius: 50px;
    margin-top: 30px;
    cursor: pointer;
    line-height: 1.5;
}

.hero-content .get-started-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Responsive styles */
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 36px;
    }

    .hero-content .subtitle {
        font-size: 20px;
    }

    .hero-content .description {
        font-size: 16px;
    }

    .hero-content .credentials {
        font-size: 14px;
    }

    .hero-content .get-started-btn {
        font-size: 16px;
        padding: 12px 30px;
    }
}
</style>