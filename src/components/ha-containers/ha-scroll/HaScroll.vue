<template>
  <div class="ha-scroll-default ha-scroll">
    <div  :id="id" class="ha-scroll-content-default ha-scroll-content">
      <slot></slot>
    </div>
    <div class="ha-scroll-bar-container-default ha-scroll-bar-container">
      <div class="ha-scroll-bar-default ha-scroll-bar" :style="`height:${barHeight}%;top:${barTop}%;`"></div>
    </div>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'

import genNonDuplicateID from '@utils/genNonDuplicateID'

export default {
  name:'ha-scroll',
  mixins: [colorMixin],
  data() {
    return {
      id: genNonDuplicateID(5),
      contentOffsetHeight: 0,
      contentScrollHeight: 0,
      contentScrollTop: 0
    }
  },
  methods: {
    onScroll(e) {
      this.contentScrollTop = e.target.scrollTop
    }
  },
  computed: {
    barTop() {
        const ratio = Math.floor((this.contentScrollTop / this.contentScrollHeight) * 100)
        return ratio
    },
    barHeight() {
      const ratio = Math.floor((this.contentOffsetHeight / this.contentScrollHeight) * 100) + 1
      return ratio
    }
  },
  mounted() {
    const s = document.querySelector(`#${this.id}`)
    this.contentOffsetHeight = s.offsetHeight
    this.contentScrollHeight = s.scrollHeight
    s.onscroll = this.onScroll
  }

}
</script>
<style lang="scss" scoped>
.ha-scroll-default {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.ha-scroll-content-default {
  box-sizing: content-box;
  position: absolute;
  width: 102%;
  height: 100%;
  padding-right: 2%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.ha-scroll-bar-container-default {
  position: absolute;
  width: 10px;
  height: 100%;
  right: 0;
  background: #111
}
.ha-scroll-bar-default {
  position: absolute;
  width: 100%;
  background: red;
  cursor: pointer;
}
</style>


