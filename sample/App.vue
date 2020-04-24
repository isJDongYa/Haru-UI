<template>
  <div id="mainApp">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    
    cancelClick() {
      this.show = false
    },
    openMaskClick() {
      this.show = true
    },
    notify() {
      this.$haru.notify(this, {
        msg: '这是一个haru UI的通知'+(++this.i),
        duration: 3000,
        location: 'topRight',
        bgColor: 'lightBlue',
        icon: require('@icons/信息.svg')
      })
    },
    numCounter() {
      this.timer = setInterval(() => {
        this.num++
        if(this.num === 9) clearInterval(this.timer)
      }, 1000)
    }
  },
  mounted() {
    this.numCounter()
  },
  data() {
    return {
      timer: null,
      num: 0,
      
      i: 0,
      show: false,
    }
  }
}
</script>
<style lang="scss" scoped>
 #mainApp {
   width: 100%;
   height: 100%;
 }
</style>
