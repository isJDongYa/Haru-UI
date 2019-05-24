<template>
  <div class="ha-scroll-default ha-scroll">
    <div ref="scrollContent" class="ha-scroll-content-default ha-scroll-content">
      <slot></slot>
    </div>
    <div class="ha-scroll-bar-container-vertical-default ha-scroll-bar-container-vertical">
      <div ref="barVe" class="ha-scroll-bar-default-vertical ha-scroll-bar-vertical" 
      :style="`height:${barVeHeight}%;top:${barVeTop}%;`"
      v-show="barVeShow"
      ></div>
    </div>
    <div class="ha-scroll-bar-container-horizontal-default ha-scroll-bar-container-horizontal">
      <div ref="barHo" class="ha-scroll-bar-horizontal-default ha-scroll-bar-horizontal" 
      :style="`width:${barHoWidth}%;left:${barHoLeft}%;`"
      v-show="barHoShow"
      ></div>
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
      scrollContent: null,
      barVe: null,
      barVeTop: 0,
      barVeHeight: 0,
      barVeTopTemp: 0,
      barVeShow: false,
      mouseDownY: 0,
      barHo: null,
      barHoLeft: 0,
      barHoWidth: 0,
      barHoLeftTemp: 0,
      barHoShow: false,
      mouseDownX: 0,
      keyDown: null,
    }
  },
  methods: {
    contentHover(vm) {
      let timer
      return function() {
        if(vm.barVe) vm.barVeShow = true
        if(vm.barHo) vm.barHoShow = true
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
           if(vm.barVe) vm.barVeShow = false
           if(vm.barHo) vm.barHoShow = false
        }, 3000)
      }
    },
    contentLeave(vm) {
      return function() {
        if(vm.barVe) vm.barVeShow = false
        if(vm.barHo) vm.barHoShow = false
      }
    },
    contentMouseWheel(vm) { 
      return function(e) {
        if(!vm.keyDown) {
          const wheelY = e.wheelDeltaY || -e.detail // 兼容firefox
          if(wheelY<0) { // 向下滚动
            if(vm.barVeTop<(100-vm.barVeHeight)) {
              vm.barVeHeight = Math.floor((vm.scrollContent.offsetHeight / vm.scrollContent.scrollHeight) * 100) + 1 // 每次滚动时需要设置新高度, 防止滚动导致的内容高度变化
              vm.barVeTop++
              vm.barVeTopTemp = vm.barVeTop
              vm.scrollContent.scrollTop = (vm.barVeTop/100)*vm.scrollContent.scrollHeight
            }
          } 
          if(wheelY>0) { // 向上滚动
            if(vm.barVeTop>0) {
              vm.barVeHeight = Math.floor((vm.scrollContent.offsetHeight / vm.scrollContent.scrollHeight) * 100) + 1 // 每次滚动时需要设置新高度, 防止滚动导致的内容高度变化
              vm.barVeTopTemp = vm.barVeTop
              vm.barVeTop--
              vm.scrollContent.scrollTop = (vm.barVeTop/100)*vm.scrollContent.scrollHeight
            }
          }
        }
      }
    },
    contentKeyDown(vm) {
      return function(e) {
        if( e.key === 'Shift') {
        vm.keyDown = e.key
        }
      }
    },
    contentKeyUp(vm) {
      return function(e) {
        vm.keyDown = null
      }
    },
    contentHoScroll(vm) {
      return function(e) {
        if(vm.keyDown) {
          const wheelY = e.wheelDeltaY || -e.detail // 兼容firefox
          if(wheelY<0) { // 向右滚动
            if(vm.barHoLeft<(100-vm.barHoWidth)) {
              vm.barHoWidth = Math.floor((vm.scrollContent.offsetWidth/ vm.scrollContent.scrollWidth) * 100) + 1 // 每次滚动时需要设置新高度, 防止滚动导致的内容高度变化
              vm.barHoLeft++
              vm.barHoLeftTemp = vm.barHoLeft
              vm.scrollContent.scrollLeft = (vm.barHoLeft/100)*vm.scrollContent.scrollWidth
            }
          } 
          if(wheelY>0) { // 向左滚动
            if(vm.barHoLeft>0) {
              vm.barHoWidth = Math.floor((vm.scrollContent.offsetWidth / vm.scrollContent.scrollWidth) * 100) + 1 // 每次滚动时需要设置新高度, 防止滚动导致的内容高度变化
              vm.barHoLetTemp = vm.barHoLeft
              vm.barHoLeft--
              vm.scrollContent.scrollLeft = (vm.barHoLeft/100)*vm.scrollContent.scrollWidth
            }
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
        vm.scrollContent.style.userSelect = 'none'  // 禁止拖动时选中文字

        const distanceY = e.clientY - vm.mouseDownY
        const bt = vm.barVeTopTemp + (distanceY / vm.scrollContent.offsetHeight) * 100
        if(bt>=-1 && bt<=(100-vm.barVeHeight+1)){
          vm.barVeTop = bt
          vm.scrollContent.scrollTop = (vm.barVeTop/100)*vm.scrollContent.scrollHeight
        }
      }
    },
    barVeMouseUp(vm, fun) {
      return function() {
        vm.scrollContent.style.userSelect = 'text'  // 恢复选中文字效果

        vm.barVeTopTemp =  vm.barVeTop // 缓存垂直滚动条当前Top

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
        vm.scrollContent.style.userSelect = 'none'  // 禁止拖动时选中文字

        const distanceX = e.clientX - vm.mouseDownX
        const bh = vm.barHoLeftTemp + (distanceX / vm.scrollContent.offsetWidth) * 100
        if(bh>=-1 && bh<=(100-vm.barHoWidth+1)) {
          vm.barHoLeft = bh
          vm.scrollContent.scrollLeft = bh / 100 * vm.scrollContent.scrollWidth
        }
      }
    },
    barHoMouseUp(vm, fun) {
      return function() {
        vm.scrollContent.style.userSelect = 'text'  // 恢复选中文字效果

        vm.barHoLeftTemp =  vm.barHoLeft // 缓存水平滚动条的Left

        document.removeEventListener('mousemove', fun)
      }
    }
  },
  mounted() {
    this.scrollContent = this.$refs.scrollContent

    // 如果内容高度大于可见高度
    if(this.scrollContent.scrollHeight > this.scrollContent.offsetHeight) {
      this.barVe = this.$refs.barVe
      this.barVeHeight = Math.floor((this.scrollContent.offsetHeight / this.scrollContent.scrollHeight) * 100) + 1

      // 将this作为dataBus
      this.scrollContent.addEventListener('DOMMouseScroll', this.contentMouseWheel(this)) // 兼容firefox
      this.scrollContent.addEventListener('mousewheel', this.contentMouseWheel(this))
      this.barVe.addEventListener('mousedown', this.barVeMouseDown(this))
    }
    
    // 如果内容宽度大于可见宽度
    if(this.scrollContent.scrollWidth > this.scrollContent.offsetWidth) {
      this.barHo = this.$refs.barHo
      this.barHoWidth = Math.floor((this.scrollContent.offsetWidth / this.scrollContent.scrollWidth) * 100) + 1
      
      // 将this作为dataBus
      this.scrollContent.addEventListener('DOMMouseScroll', this.contentHoScroll(this)) // 兼容firefox
      this.scrollContent.addEventListener('mousewheel', this.contentHoScroll(this))
      this.barHo.addEventListener('mousedown', this.barHoMouseDown(this))
      document.addEventListener('keydown', this.contentKeyDown(this))
      document.addEventListener('keyup', this.contentKeyUp(this))
    }

    // 如果有滚动条
    if(this.barVe || this.barHo) {
      // 将this作为dataBus
      this.scrollContent.parentNode.addEventListener('mousemove', this.contentHover(this))
      this.scrollContent.parentNode.addEventListener('mouseleave', this.contentLeave(this))
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
}
.ha-scroll-bar-horizontal-default {
  position: absolute;
  height: 100%;
  width: 200px;
  background: #bbb;
  border-radius: 4px;
}
</style>


