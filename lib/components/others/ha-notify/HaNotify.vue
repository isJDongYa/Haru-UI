<template>
  <div :class="['ha-notify-default', 'ha-notify', bgColorClass]" :style="locationComputed">
    <img class="ha-notify-icon-default ha-notify-icon" :src="icon">
    <span>{{ msg }}</span>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin.js'

export default {
  name: 'ha-notify',
  mixins: [colorMixin],
  props: {
    msg: {
      type: String,
      required: false,
      default: 'A notification of Haru UI'
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    location: {
       type: String,
      required: false,
      default: 'topRight',
      validator: (val) => {
        return  val === 'topRight' ||
                val === 'bottomRight' ||
                val === 'topLeft' ||
                val === 'bottomLeft' ||
                val === 'topMiddle' ||
                val === 'bottomMiddle'
      }
    },
  },
  computed: {
    locationComputed() {
      if(this.location === 'topRight') {
        return {top: '5px', right: '10px'}
      }
      if(this.location === 'bottomRight') {
        return {bottom: '5px', right: '10px'}
      }
      if(this.location === 'topLeft') {
        return {top: '5px', left: '10px'}
      }
      if(this.location === 'bottomLeft') {
        return {bottom: '5px', left: '10px'}
      }
      if(this.location === 'topMiddle') {
        return {top: '5px', left: 0, right: 0, margin: 'auto'}
      }
      if(this.location === 'bottomMiddle') {
        return {bottom: '5px', left: 0, right: 0, margin: 'auto'}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ha-notify-default {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 6%;
  min-height: 50px;
  max-height: 200px;
  min-width: 100px;
  max-width: 300px;
}

.ha-notify-icon-default {
  height: 30%;
  width: 10%;
}
</style>


