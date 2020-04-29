<template>
  <div :class="['ha-back-default', 'ha-back', bgColorClass]">
    <img class="ha-back-img-default ha-back-img" :src="src" @click="back">
    <div class="ha-back-title-container-default ha-back-title-container">
      <div class="ha-back-title-default ha-back-title">{{ title }}</div>
    </div>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'
import backSvg from '@icons/back.svg'

export default {
  name: 'ha-back',
  mixins: [colorMixin],
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      src: backSvg
    }
  },
  methods: {
    back() {
      this.$emit('back')
    }
  }
}
</script>
<style lang="scss" scoped>
.ha-back-default {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: solid 1px #ddd;
}
.ha-back-img-default {
  width: 15%;
  height: 100%;
  border-right: solid 1px #ddd;
  cursor: pointer;
}
.ha-back-title-container-default {
  display: flex;
  width: 85%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.ha-back-title-default {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

