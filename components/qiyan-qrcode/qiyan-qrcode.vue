<template>
	<canvas @click="onClick()" :style="{ width: `${size}px`, height: `${size}px` }" :canvas-id="id" :id="id" type="2d" :hidpi="false"></canvas>
</template>

<script>
/**
 * Qrcode 显示二维码
 * @description 二维码生成的组件
 * @property {String} id 多个时需设置不同id
 * @property {String} text 二维码内容
 * @property {Number} size 二维码大小
 * @property {String} background 背景颜色
 * @property {String} foreground 二维码颜色
 * @property {String} logo 中间logo资源
 * @property {String} logoSize logo大小
 * @property {Boolean} logoRound logo圆角
 * 
 * @event {Function} click 点击 Qrcode 触发事件
 * @example <QiyanQrcode text="321"></QiyanQrcode>
 */
import drawQrcode from "./utils.js";
let canvasObj = {};
export default {
	name: 'QiyanQrcode',
	emits: ['click'],
	props: {
		id: {
			type: String,
			default: "qrCanvas",
		},
		text: {
			type: String,
			default: "",
		},
		size: {
			type: Number,
			default: 200,
		},
		background: {
			type: String,
			default: "#ffffff",
		},
		foreground: {
			type: String,
			default: "#000000",
		},
		logo: {
			type: String,
			default: "",
		},
		logoSize: {
			type: Number,
			default: 60,
		},
		logoRound: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		text(nVal) {
			if (nVal) {
				this.draw();
			} else {
				console.error('qrcode text is null');
			}
		}
	},
	mounted() {
		this.$nextTick(() => {
			let _this = this;
			// #ifdef H5
			const canvas = document.getElementById(this.id).childNodes[0]
			canvasObj[this.id] = canvas;
			_this.draw();
			// #endif
			// #ifndef H5
			const query = uni.createSelectorQuery().in(this);
			query.select("#" + this.id).fields({
						node: true,
						size: true,
					},
					(data) => {
						canvasObj[this.id] = data.node;
						_this.draw();
					}
				)
				.exec();
			// #endif
		})
	},
	beforeUnmount() {
		delete canvasObj[this.id];
	},
	methods: {
		draw() {
			if (this.text && canvasObj[this.id]) {
				let canvas = canvasObj[this.id];
				const drawText = (imageResource) => {
					let image = {};
					if (imageResource) {
						image = {
							imageResource,
							width: this.logoSize,
							height: this.logoSize,
							round: this.logoRound
						}
					}
					drawQrcode({
						canvas,
						canvasId: this.id,
						width: this.size,
						height: this.size,
						padding: 0,
						background: this.background,
						foreground: this.foreground,
						text: this.text,
						image
					});
				}

				setTimeout(() => {
					if (this.logo) {
						let img;
						// #ifdef H5
						img = new Image();
						// #endif
						// #ifndef H5
						img = canvas.createImage();
						// #endif
						img.src = this.logo;
						img.onload = () => {
							drawText(img);
						}
					} else {
						drawText();
					}
				}, 100);
			}
		},
		onClick() {
			this.$emit('click');
		},
	}
}
</script>