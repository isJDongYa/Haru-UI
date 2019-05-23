<template>
  <div class="ha-scroll-default ha-scroll">
    <div :id="contentID" class="ha-scroll-content-default ha-scroll-content">
      <slot></slot>
    </div>
    <div class="ha-scroll-bar-container-default ha-scroll-bar-container">
      <div :id="barID" class="ha-scroll-bar-default ha-scroll-bar" :style="`height:${barHeight}%;top:${barTop}%;`"></div>
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
      contentID: genNonDuplicateID(5),
      barID: genNonDuplicateID(5),
      s: null,
      b: null,
      sOfsHeight: 0,
      barTop: 0,
      barHeight: 0,
      barTopTemp: 0,
      mouseDownY: 0,
      isScrollByBar: false,
    }
  },
  methods: {
    contentScroll(vm) { 
      return function(e) {
        const wheelY = e.wheelDeltaY || -e.detail // 兼容firefox
        //console.log(wheelY)
        if(wheelY<0) { // 向下滚动
          if(vm.barTop<(100-vm.barHeight)) {
            vm.barHeight = Math.floor((vm.s.offsetHeight / vm.s.scrollHeight) * 100) + 1 // 每次滚动时需要设置新高度, 防止滚动导致的内容高度变化
            vm.barTop++
            vm.s.scrollTop = (vm.barTop/100)*vm.s.scrollHeight
            if(!vm.isScrollByBar) { // 如果不是由滚动条拖动的
              vm.barTopTemp = vm.barTop
            }
          }
        } 
        if(wheelY>0) { // 向上滚动
          if(vm.barTop>0) {
            vm.barHeight = Math.floor((vm.s.offsetHeight / vm.s.scrollHeight) * 100) + 1 // 每次滚动时需要设置新高度, 防止滚动导致的内容高度变化
            vm.barTop--
            vm.s.scrollTop = (vm.barTop/100)*vm.s.scrollHeight
            if(!vm.isScrollByBar) { // 如果不是由滚动条拖动的
              vm.barTopTemp = vm.barTop
            }
          }
        }
      }
    },
    barMouseDown(vm) {
      return function(e) {
        vm.mouseDownY = e.clientY
        const bmm = vm.barMouseMove(vm)
        document.addEventListener('mousemove', bmm)
        document.addEventListener('mouseup', vm.barMouseUp(vm, bmm))
      }
    },
    barMouseMove(vm) {
      return function bmm(e) {

        const body = document.querySelector('body') 
        body.style.userSelect = 'none'  // 禁止拖动时选中文字

        const distance = e.clientY - vm.mouseDownY
        const bt = vm.barTopTemp + (distance / vm.sOfsHeight) * 100
        console.log(bt)
        if(bt>=-1 && bt<=(100-vm.barHeight+1)){
          vm.barTop = bt
          e.wheelDeltaY = distance 
          vm.isScrollByBar = true
          vm.contentScroll(vm)(e)
          vm.isScrollByBar = false
        }
      }
    },
    barMouseUp(vm, fun) {
      return function() {

        const body = document.querySelector('body') 
        body.style.userSelect = 'text'  // 恢复选中文字效果

        vm.barTopTemp =  vm.barTop
        document.removeEventListener('mousemove', fun)
      }
    }
  },
  mounted() {
    const s = document.querySelector(`#${this.contentID}`)
    const b = document.querySelector(`#${this.barID}`)
    this.s = s
    this.b = b
    this.sOfsHeight = s.offsetHeight
    this.barHeight = Math.floor((s.offsetHeight / s.scrollHeight) * 100) + 1

    // 将this作为dataBus
    this.s.addEventListener('DOMMouseScroll', this.contentScroll(this)) // 兼容firefox
    this.s.addEventListener('mousewheel', this.contentScroll(this))
    this.b.addEventListener('mousedown', this.barMouseDown(this))
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
  width: 100%;
  height: 100%;
  padding-right: 0%;
  overflow-y: hidden;
  overflow-x: hidden;
}
.ha-scroll-bar-container-default {
  position: absolute;
  width: 8px;
  height: 100%;
  right: 0;
}
.ha-scroll-bar-default {
  position: absolute;
  width: 100%;
  border-radius: 4px;
  background: #DDD;
  cursor: pointer;
}
</style>


