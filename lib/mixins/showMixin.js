export default {
  data () {
    return {
      haShow: true,
      flushListener: null
    }
  },
  methods: {
    getWinWidth() {
      const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      return winWidth
    },
    flushShow(vm) {
      return function() {
        if(vm.$attrs['haShow']) {
          let showWidth = vm.$attrs['haShow']
          let winWidth = vm.getWinWidth()
          if(winWidth < showWidth) {
            vm.haShow = false
          } else {
            vm.haShow = true
          }
        }
      }
    }
  },
  mounted() {
    this.flushListener = this.flushShow(this)
    this.flushListener()
    window.addEventListener('resize', this.flushListener)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.flushListener)
  }
}