
<script>
	
	export default {
		// #ifdef H5
		onLaunch: function() {
			this.show()
			this.$router.beforeEach((to, from, next) => {
				this.hide(next)
			})
			this.$router.afterEach(() => {
				setTimeout(this.show, 50)
			})
		},
		methods: {
			hide(callback) {
			const uniPage = document.querySelector('uni-page')
			if (!uniPage) {
				callback && callback()
				return
			}
			const classList = uniPage.classList
			classList.add('animation-before', 'animation-leave')
			classList.remove('animation-show')
			setTimeout(() => {
				classList.remove('animation-before', 'animation-leave')
				callback && callback()
			}, 200)
		},
		show() {
			const uniPage = document.querySelector('uni-page')
			if (!uniPage) return
			const classList = uniPage.classList
			classList.add('animation-before')
			setTimeout(() => {
				classList.add('animation-enter', 'animation-after', 'animation-show')
				setTimeout(() => {
					classList.remove('animation-before', 'animation-after', 'animation-enter')
				}, 200)
			}, 20)
		}
		},
		// #endif
	}
</script>
