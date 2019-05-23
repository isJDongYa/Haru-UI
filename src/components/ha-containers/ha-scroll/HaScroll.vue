<template>
  <div class="ha-scroll-default ha-scroll">
    <div :id="contentID" ref="scrollContent" class="ha-scroll-content-default ha-scroll-content">
      <slot></slot>
    </div>
    <div class="ha-scroll-bar-container-vertical-default ha-scroll-bar-container-vertical">
      <div :id="barVeID" ref="BarVe" class="ha-scroll-bar-default-vertical ha-scroll-bar-vertical" :style="`height:${barVeHeight}%;top:${barVeTop}%;`"></div>
    </div>
    <div class="ha-scroll-bar-container-horizontal-default ha-scroll-bar-container-horizontal">
      <div :id="barHoID" ref="BarHo" class="ha-scroll-bar-horizontal-default ha-scroll-bar-horizontal" :style="`width:${barHoWidth}%;left:${barHoLeft}%;`"></div>
    </div>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'

import genNonDuplicateID from '@utils/genNonDuplicateID'
import { setTimeout, clearTimeout } from 'timers';

export default {
  name:'ha-scroll',
  mixins: [colorMixin],
  data() {
    return {
      contentID: genNonDuplicateID(5),
      scrollCentent: null,
      sOfsHeight: 0,
      sOfsWidth: 0,
      barVe: null,
      barVeTop: 0,
      barVeHeight: 0,
      barVeTopTemp: 0,
      barVeID: genNonDuplicateID(5),
      mouseDownY: 0,
      barHo: null,
      barHoLeft: 0,
      barHoWidth: 0,
      barHoLeftTemp: 0,
      barHoID: genNonDuplicateID(5),
      mouseDownX: 0,
      isScrollByBar: false,
    }
  },
  methods: {
    contentHover(vm) {
      let timer
      return function() {
        if(vm.barVe) vm.barVe.style.visibility = 'visible'
        if(vm.barHo) vm.barHo.style.visibility = 'visible'
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
           if(vm.barVe) vm.barVe.style.visibility = 'hidden'
           if(vm.barHo) vm.barHo.style.visibility = 'hidden'
        }, 3000)
      }
    },
    contentLeave(vm) {
      return function() {
        if(vm.barVe) vm.barVe.style.visibility = 'hidden'
        if(vm.barHo) vm.barHo.style.visibility = 'hidden'
      }
    },
    contentScroll(vm) { 
      return function(e) {
        const wheelY = e.wheelDeltaY || -e.detail // 兼容firefox
        if(wheelY<0) { // 向下滚动
          if(vm.barVeTop<(100-vm.barVeHeight)) {
            vm.barVeHeight = Math.floor((vm.scrollCentent.offsetHeight / vm.scrollCentent.scrollHeight) * 100) + 1 // 每次滚动时需要设置新高度, 防止滚动导致的内容高度变化
            if(!vm.isScrollByBar) { // 如果不是由滚动条拖动的
              vm.barVeTop++
              vm.barVeTopTemp = vm.barVeTop
            }
            vm.scrollCentent.scrollTop = (vm.barVeTop/100)*vm.scrollCentent.scrollHeight
          }
        } 
        if(wheelY>0) { // 向上滚动
          if(vm.barVeTop>0) {
            vm.barVeHeight = Math.floor((vm.scrollCentent.offsetHeight / vm.scrollCentent.scrollHeight) * 100) + 1 // 每次滚动时需要设置新高度, 防止滚动导致的内容高度变化
            if(!vm.isScrollByBar) { // 如果不是由滚动条拖动的
              vm.barVeTopTemp = vm.barVeTop
              vm.barVeTop--
            }
            vm.scrollCentent.scrollTop = (vm.barVeTop/100)*vm.scrollCentent.scrollHeight
          }
        }
      }
    },
    barVeMouseDown(vm) {
      return function(e) {
        vm.mouseDownY = e.clientY
        const bvmm = vm.barVeMouseMove(vm)
        document.addEventListener('mousemove', bvmm)
        document.addEventListener('mouseup', vm.barVeMouseUp(vm, bvmm))
      }
    },
    barVeMouseMove(vm) {
      return function bvmm(e) {

        const body = document.querySelector('body') 
        body.style.userSelect = 'none'  // 禁止拖动时选中文字

        const distanceY = e.clientY - vm.mouseDownY
        const bt = vm.barVeTopTemp + (distanceY / vm.sOfsHeight) * 100
        if(bt>=-1 && bt<=(100-vm.barVeHeight+1)){
          vm.barVeTop = bt
          e.wheelDeltaY = distanceY 
          vm.isScrollByBar = true
          vm.contentScroll(vm)(e)
          vm.isScrollByBar = false
        }
      }
    },
    barVeMouseUp(vm, fun) {
      return function() {

        const body = document.querySelector('body') 
        body.style.userSelect = 'text'  // 恢复选中文字效果

        vm.barVeTopTemp =  vm.barVeTop
        document.removeEventListener('mousemove', fun)
      }
    },
    barHoMouseDown(vm) {
      return function(e) {
        vm.mouseDownX = e.clientX
        const bhmm = vm.barHoMouseMove(vm)
        document.addEventListener('mousemove', bhmm)
        document.addEventListener('mouseup', vm.barHoMouseUp(vm, bhmm))
      }
    },
    barHoMouseMove(vm) {
      return function bhmm(e) {
        const body = document.querySelector('body') 
        body.style.userSelect = 'none'  // 禁止拖动时选中文字

        const distanceX = e.clientX - vm.mouseDownX
        const bh = vm.barHoLeftTemp + (distanceX / vm.sOfsWidth) * 100
        if(bh>=-1 && bh<=(100-vm.barHoWidth+1)) {
          vm.barHoLeft = bh
          vm.scrollCentent.scrollLeft = bh / 100 * vm.scrollCentent.scrollWidth
        }
      }
    },
    barHoMouseUp(vm, fun) {
      return function() {

        const body = document.querySelector('body') 
        body.style.userSelect = 'text'  // 恢复选中文字效果

        vm.barHoLeftTemp =  vm.barHoLeft
        document.removeEventListener('mousemove', fun)
      }
    },
    contentKeyDown(vm) {
      console.log(vm)
      return function(e) {
        const key = e.key
        if(key === 'Shift') {
          console.log(e.key)
          vm.scrollCentent.addEventListener('mousewheel', vm.contentHoScroll(vm))
        }
      }
    },
    contentHoScroll(vm) {
      
    }
  },
  mounted() {
    const scrollCentent = document.querySelector(`#${this.contentID}`)
    this.scrollCentent = scrollCentent

    // 如果内容高度大于可见高度
    if(scrollCentent.scrollHeight > scrollCentent.offsetHeight) {
      const barVe = document.querySelector(`#${this.barVeID}`)
      this.barVe = barVe
      this.sOfsHeight = scrollCentent.offsetHeight
      this.barVeHeight = Math.floor((this.sOfsHeight / scrollCentent.scrollHeight) * 100) + 1

      // 将this作为dataBus
      this.scrollCentent.addEventListener('DOMMouseScroll', this.contentScroll(this)) // 兼容firefox
      this.scrollCentent.addEventListener('mousewheel', this.contentScroll(this))
      this.barVe.addEventListener('mousedown', this.barVeMouseDown(this))
    }
    
    // 如果内容宽度大于可见宽度
    if(scrollCentent.scrollWidth > scrollCentent.offsetWidth) {
      const barHo = document.querySelector(`#${this.barHoID}`)
      this.barHo = barHo
      this.sOfsWidth = scrollCentent.offsetWidth
      this.barHoWidth = Math.floor((this.sOfsWidth / scrollCentent.scrollWidth) * 100) + 1
      
      // 将this作为dataBus
      document.addEventListener('keydown', this.contentKeyDown(this))
      this.barHo.addEventListener('mousedown', this.barHoMouseDown(this))
    }

    // 如果有滚动条
    if(this.barVe || this.barHo) {
      // 将this作为dataBus
      this.scrollCentent.parentNode.addEventListener('mousemove', this.contentHover(this))
      this.scrollCentent.parentNode.addEventListener('mouseleave', this.contentLeave(this))
    }
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
.ha-scroll-bar-container-vertical-default {
  position: absolute;
  width: 1%;
  min-width: 8px;
  max-width: 15px;
  height: 100%;
  right: 2px;
  visibility: hidden;
}
.ha-scroll-bar-default-vertical {
  position: absolute;
  width: 100%;
  border-radius: 4px;
  background: #bbb;
  cursor: pointer;
}
.ha-scroll-bar-container-horizontal-default {
  position: absolute;
  width: 100%;
  height: 2%;
  min-height: 8px;
  max-height: 15px;
  bottom: 2px;
  visibility: hidden;
}
.ha-scroll-bar-horizontal-default {
  position: absolute;
  height: 100%;
  width: 200px;
  background: #bbb;
  border-radius: 4px;
}
</style>


