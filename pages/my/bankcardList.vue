<template>
    <view class="">
        <view class="a-pr a-crfff"
            style="min-height: 100vh; z-index: 3;background: url(static/image/fz/bg.jpg) no-repeat;background-size: 100% 100%;">
            <navbar />
            <div class="main-container">
                <div class="bank-card-form">
                    <h2 class="form-title">{{$t('bankCardList.formTitle')}}</h2>

                    <div class="form-group">
                        <label class="form-label">{{$t('bankCardList.accountNameLabel')}}</label>
                        <input type="text" v-model="form.account_name" class="form-input" :placeholder="$t('bankCardList.accountNamePlaceholder')">
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{$t('bankCardList.accountNumberLabel')}}</label>
                        <input type="text" v-model="form.account_number" class="form-input" :placeholder="$t('bankCardList.accountNumberPlaceholder')">
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{$t('bankCardList.bankNameLabel')}}</label>
                        <input type="text" v-model="form.bank_name" class="form-input" :placeholder="$t('bankCardList.bankNamePlaceholder')">
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{$t('bankCardList.countryLabel')}}</label>
                        <select v-model="form.country" class="form-input">
                            <option value="">{{$t('bankCardList.countryPlaceholder')}}</option>
                            <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{$t('bankCardList.routingNumberLabel')}}</label>
                        <input type="text" v-model="form.routing_number" class="form-input" :placeholder="$t('bankCardList.routingNumberPlaceholder')">
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{$t('bankCardList.swiftCodeLabel')}}</label>
                        <input type="text" v-model="form.swift_code" class="form-input" :placeholder="$t('bankCardList.swiftCodePlaceholder')">
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{$t('bankCardList.bankAddressLabel')}}</label>
                        <textarea v-model="form.bank_address" class="form-textarea" :placeholder="$t('bankCardList.bankAddressPlaceholder')"></textarea>
                    </div>

                    <button class="submit-button" @click="submitBankInfo">{{$t('bankCardList.submitButtonText')}}</button>
                </div>
            </div>
        </view>

    </view>
</template>
<script>
import navbar from "@/components/navbar.vue";
export default {
    components: {
        navbar // 键值对简写，等价于 Navbar: Navbar
    },
    data() {
        return {
            type: 0,
            form: {
                account_name: '',
                account_number: '',
                bank_name: '',
                country: '',
                routing_number: '',
                swift_code: '',
                bank_address: ''
            },
            countries: [
                'United States',
                'Canada',
                'United Kingdom',
                'Germany',
                'France',
                'Italy',
                'Spain',
                'Australia',
                'Japan',
                'China',
                'India',
                'Brazil',
                'Russia',
                'South Korea',
                'Singapore',
                'Hong Kong',
                'Switzerland',
                'Netherlands',
                'Belgium',
                'Sweden'
            ]
        };
    },
    onLoad(options) {
        const token = uni.getStorageSync('token')
        this.$u.api.index.getUserinfo(token).then(res => {
            this.form.uid = res.data.uid
        })
    },
    onShow() {
        this.isBind()
    },
    methods: {
        isBind() {
            const token = uni.getStorageSync('token')
            this.$u.api.setting.isBind(token).then(res => {
                if (res.code == 1) {
                    this.form = res.data
                    this.form.bank_id = res.data.id
                    this.type = 1
                }
            })
        },
        getNocar() {
            const token = uni.getStorageSync('token')
            this.$u.api.index.get_noc(token).then(res => {
                let lang = this.$store.state.lang
                this.news = [res.data[lang]]
            })

        },
        submitBankInfo() {
            const token = uni.getStorageSync('token')
            if (this.type == 0) {
                this.$u.api.setting.bind_bank2(token, this.form).then(res => {
                    if (res.code == 200) {
                        uni.showToast({
                            title: this.$t('bankCardList.bindSuccess'),
                            icon: 'success'
                        })
                    }
                })
            } else {
                this.$u.api.setting.update_bank(token, this.form).then(res => {
                    if (res.code == 200) {
                        uni.showToast({
                            title: this.$t('bankCardList.updateSuccess'),
                            icon: 'success'
                        })
                    }
                })
            }

        },
    },
}
</script>
<style lang="scss" scoped>
.main-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.bank-card-form {
    background-color: rgba(13, 17, 30, 0.85);
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.form-title {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 25px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    color: #e0e0e0;
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 500;
}

.form-input {
    width: 100%;
    height: 100rpx;
    padding: 0 20rpx;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #1E90FF;
        background-color: rgba(255, 255, 255, 0.08);
        box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }
}

select.form-input {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
}

select.form-input option {
    background-color: #0d111e;
    color: #fff;
    padding: 8px;
}

.form-textarea {
    width: 100%;
    height: 100px;
    padding: 12px 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;
    resize: vertical;

    &:focus {
        outline: none;
        border-color: #1E90FF;
        background-color: rgba(255, 255, 255, 0.08);
        box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }
}

.submit-button {
    width: 100%;
    padding: 14px;
    line-height: 1.5;
    background-color: #1E90FF;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;

    &:hover {
        background-color: #4169E1;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(30, 144, 255, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
}
</style>