<template>
	<view class="u-alert-tips" v-if="show" :class="[
		!show ? 'u-close-alert-tips': '',
		type ? 'u-alert-tips--bg--' + type + '-light' : '',
		type ? 'u-alert-tips--border--' + type + '-disabled' : '',
	]" :style="{
		backgroundColor: bgColor,
		borderColor: borderColor
	}">
		<view class="u-icon-wrap">
			<u-icon v-if="showIcon" :name="uIcon" :size="description ? 40 : 32" class="u-icon" :color="uIconType" :custom-style="iconStyle"></u-icon>
		</view>
		<view class="u-alert-content" @tap.stop="click">
			<view class="u-alert-title" :style="[uTitleStyle]">
				{{title}}
			</view>
			<view v-if="description" class="u-alert-desc" :style="[descStyle]">
				{{description}}
			</view>
		</view>
		<view class="u-icon-wrap">
			<u-icon @click="close" v-if="closeAble && !closeText" hoverClass="u-type-error-hover-color" name="close" color="#c0c4cc"
			 :size="22" class="u-close-icon" :style="{
				top: description ? '18rpx' : '24rpx'
			}"></u-icon>
		</view>
		<text v-if="closeAble && closeText" class="u-close-text" :style="{
			top: description ? '18rpx' : '24rpx'
		}">{{closeText}}</text>
	</view>
</template>

<script>
	export default {
		name: 'u-alert-tips',
		props: {
			// 显示文字
			title: {
				type: String,
				default: ''
			},
			// 主题，success/warning/info/error
			type: {
				type: String,
				default: 'warning'
			},
			// 辅助性文字
			description: {
				type: String,
				default: ''
			},
			// 是否可关闭
			closeAble: {
				type: Boolean,
				default: false
			},
			// 关闭按钮自定义文本
			closeText: {
				type: String,
				default: ''
			},
			// 是否显示图标
			showIcon: {
				type: Boolean,
				default: false
			},
			// 文字颜色，如果定义了color值，icon会失效
			color: {
				type: String,
				default: ''
			},
			// 背景颜色
			bgColor: {
				type: String,
				default: ''
			},
			// 边框颜色
			borderColor: {
				type: String,
				default: ''
			},
			// 是否显示
			show: {
				type: Boolean,
				default: true
			},
			// 左边显示的icon
			icon: {
				type: String,
				default: ''
			},
			// icon的样式
			iconStyle: {
				type: Object,
				default() {
					return {}
				}
			},
			// 标题的样式
			titleStyle: {
				type: Object,
				default() {
					return {}
				}
			},
			// 描述文字的样式
			descStyle: {
				type: Object,
				default() {
					return {}
				}
			},
		},
		data() {
			return {
			}
		},
		computed: {
			uTitleStyle() {
				let style = {};
				// 如果有描述文字的话，标题进行加粗
				style.fontWeight = this.description ? 500 : 'normal';
				// 将用户传入样式对象和style合并，传入的优先级比style高，同属性会被覆盖
				return this.$u.deepMerge(style, this.titleStyle);
			},
			uIcon() {
				// 如果有设置icon名称就使用，否则根据type主题，推定一个默认的图标
				return this.icon ? this.icon : this.$u.type2icon(this.type);
			},
			uIconType() {
				// 如果有设置图标的样式，优先使用，没有的话，则用type的样式
				return Object.keys(this.iconStyle).length ? '' : this.type;
			}
		},
		methods: {
			// 点击内容
			click() {
				this.$emit('click');
			},
			// 点击关闭按钮
			close() {
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-alert-tips {
		@include vue-flex;
		align-items: center;
		padding: 16rpx 30rpx;
		border-radius: 8rpx;
		position: relative;
		transition: all 0.3s linear;
		border: 1px solid #fff;
		
		&--bg--primary-light {
			background-color: $u-type-primary-light;
		}
		
		&--bg--info-light {
			background-color: $u-type-info-light;
		}
		
		&--bg--success-light {
			background-color: $u-type-success-light;
		}
		
		&--bg--warning-light {
			background-color: $u-type-warning-light;
		}
		
		&--bg--error-light {
			background-color: $u-type-error-light;
		}
		
		&--border--primary-disabled {
			border-color: $u-type-primary-disabled;
		}
		
		&--border--success-disabled {
			border-color: $u-type-success-disabled;
		}
		
		&--border--error-disabled {
			border-color: $u-type-error-disabled;
		}
		
		&--border--warning-disabled {
			border-color: $u-type-warning-disabled;
		}
		
		&--border--info-disabled {
			border-color: $u-type-info-disabled;
		}
	}

	.u-close-alert-tips {
		opacity: 0;
		visibility: hidden;
	}

	.u-icon {
		margin-right: 16rpx;
	}

	.u-alert-title {
		font-size: 28rpx;
		color: $u-main-color;
	}

	.u-alert-desc {
		font-size: 26rpx;
		text-align: left;
		color: $u-content-color;
	}

	.u-close-icon {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}

	.u-close-hover {
		color: red;
	}
	
	.u-close-text {
		font-size: 24rpx;
		color: $u-tips-color;
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		line-height: 1;
	}
</style>
