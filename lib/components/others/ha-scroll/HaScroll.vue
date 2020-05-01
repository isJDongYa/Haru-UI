<template>
  <div class="ha-scroll-default ha-scroll">
    <div ref="scrollContent" class="ha-scroll-content-default ha-scroll-content" @mouseenter="contentClick"  @click="contentClick">
      <slot></slot>
    </div>
    <!-- 垂直滚动条 -->
    <div class="ha-scroll-bar-container-vertical-default ha-scroll-bar-container-vertical" v-show="barVeConShow">
      <div  ref="barVe" 
            :class="['ha-scroll-bar-default-vertical', 'ha-scroll-bar-vertical', bgColorClass[0]]" 
            :style="`height:${barVeHeight}%;top:${barVeTop}%;`"
            v-show="barVeShow"
      ></div>
    </div>
    <!-- 水平滚动条 -->
    <div class="ha-scroll-bar-container-horizontal-default ha-scroll-bar-container-horizontal" v-show="barHoConShow">
      <div  ref="barHo" 
            :class="['ha-scroll-bar-horizontal-default', 'ha-scroll-bar-horizontal', bgColorClass[1]]" 
            :style="`width:${barHoWidth}%;left:${barHoLeft}%;`"
            v-show="barHoShow"
      ></div>
    </div>

    <div  
    class="ha-scroll-to-container-default ha-scroll-to-container"
    :style="`height:${toTorBHeight}px;line-height:${toTorBHeight}px`"
    v-if="toBottom||toTop"
    >
      <div  :class="['ha-scroll-toBottom-default', 'ha-scroll-toBottom', bgColorClass[2]]" 
            v-if="toBottom"
            v-show="toBottomShow"
            :style="`height:${toTorBHeight}px;line-height:${toTorBHeight}px`"
            @click="toBottomClick"
      >
      <div>底部</div>
      </div>
      <div  :class="['ha-scroll-toTop-default', 'ha-scroll-toTop', bgColorClass[3]]" 
            v-if="toTop" 
            v-show="toTopShow"
            :style="`height:${toTorBHeight}px;line-height:${toTorBHeight}px`" 
            @click="toTopClick"
      >
        <div>顶部</div>
      </div>
    </div>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'

export default {
  name:'ha-scroll',
  mixins: [colorMixin],
  data() {
    return {
      scrollContent: null,
      scrollContentScrollHeight: 0,

      barVeConShow: false,
      barVe: null,
      barVeTop: 0,
      barVeHeight: 0,
      barVeTopTemp: 0,
      barVeShow: false,
      mouseDownY: 0,

      barHoConShow: false,
      barHo: null,
      barHoLeft: 0,
      barHoWidth: 0,
      barHoLeftTemp: 0,
      barHoShow: false,
      mouseDownX: 0,

      keyDown: null,

      toTorBHeight: 0,
      toTopShow: false,
      toTSTemp: false,
      toBottomShow: false,
      toBSTemp: false,

      mouseWheelVe: null,
      mouseDownVe: null,
      mouseWheelHo: null,
      mouseDownHo: null,
      mouseKeydownDoc: null,
      mouseKeyupDoc: null,
      mousemoveConPar: null,
      mouseleaveConPar: null,
    }
  },
  props: {
    toBottom: {
      type: Boolean,
      required: false,
      default: false
    },
    toTop: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  watch: {
    barVeTop() {
      if(this.barVeTop>0) {
        this.toTopShow = true
      } else {
        this.toTopShow = false
      }
      
      if(this.barVeTop<100-this.barVeHeight) {
        this.toBottomShow = true
      } else {
        this.toBottomShow = false
      }

      this.toTSTemp = this.toTopShow
      this.toBSTemp = this.toBottomShow
    },
    scrollContentScrollHeight() { // 如果滚动高度变化,重新初始化滚动条
      this.haScrollInit()
    }
  },
  methods: {
    contentClick() {  // 监控发生在scrollContent的鼠标进入事件,更新滚动高度
      this.scrollContentScrollHeight = this.scrollContent.scrollHeight    
    },
    toTopClick() {
      this.barVeTop = -1
      this.scrollContent.scrollTop = 0
      this.barVeTopTemp = this.barVeTop
    },
    toBottomClick() {
      this.barVeTop = 100 - this.barVeHeight + 1
      this.scrollContent.scrollTop = (this.barVeTop/100)*this.scrollContent.scrollHeight
      this.barVeTopTemp = this.barVeTop
    },
    contentHover(vm) {
      let timer
      return function() {
        if(vm.barVe) vm.barVeShow = true
        if(vm.barHo) vm.barHoShow = true
        vm.toTopShow = vm.toTSTemp
        vm.toBottomShow = vm.toBSTemp
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          if(vm.barVe) vm.barVeShow = false
          if(vm.barHo) vm.barHoShow = false
          if(vm.toTopShow) vm.toTopShow = false
          if(vm.toBottomShow) vm.toBottomShow = false
        }, 3000)
      }
    },
    contentLeave(vm) {
      return function() {
        if(vm.barVe) vm.barVeShow = false
        if(vm.barHo) vm.barHoShow = false
        vm.toTopShow = false
        vm.toBottomShow = false
      }
    },
    contentMouseWheel(vm) { 
      return function(e) {
        e.stopPropagation()
        e.preventDefault()
        
        if(!vm.keyDown) {
          const wheelY = e.wheelDeltaY || -e.detail // 兼容firefox
          if(wheelY<0) { // 向下滚动
            if(vm.barVeTop<(101-vm.barVeHeight)) {
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
        e.stopPropagation()
        e.preventDefault()
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
        vm.scrollContent.parentNode.style.userSelect = 'none'  // 禁止拖动时选中文字

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
        vm.scrollContent.parentNode.style.userSelect = 'text'  // 恢复选中文字效果

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
        vm.scrollContent.parentNode.style.userSelect = 'none'  // 拖动时禁止选中文字

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
        vm.scrollContent.parentNode.style.userSelect = 'text'  // 恢复选中文字效果

        vm.barHoLeftTemp =  vm.barHoLeft // 缓存水平滚动条的Left

        document.removeEventListener('mousemove', fun)
      }
    },
    haScrollInit() {

      this.toTorBHeight = this.$refs.scrollContent.offsetHeight*0.05
      let mousewheel = navigator.userAgent.indexOf('Firefox') > -1 ? 'DOMMouseScroll' : 'mousewheel' // 兼容firefox
      
      // 如果内容高度大于可见高度
      if(this.scrollContent.scrollHeight > this.scrollContent.offsetHeight) {
        this.barVeConShow = true
        this.barVe = this.$refs.barVe
        this.toBottomShow = true
        this.toBSTemp = true
        this.barVeHeight = Math.floor((this.scrollContent.offsetHeight / this.scrollContent.scrollHeight) * 100) + 1

        // 将this作为dataBus
        this.mouseWheelVe = this.contentMouseWheel(this)
        this.mouseDownVe = this.barVeMouseDown(this)

        this.scrollContent.addEventListener(mousewheel,this.mouseWheelVe)
        this.barVe.addEventListener('mousedown', this.mouseDownVe)
      } else {
        if(this.mouseWheelVe) this.scrollContent.removeEventListener(mousewheel, this.mouseWheelVe)
        if(this.mouseDownVe) this.barVe.removeEventListener('mousedown', this.mouseDownVe)
        this.barVeConShow = false
        this.barVe = null
      }

      // 如果内容宽度大于可见宽度
      if(this.scrollContent.scrollWidth > this.scrollContent.offsetWidth + 1) {
        
        
        
        this.barHoConShow = true
        this.barHo = this.$refs.barHo
        this.barHoWidth = Math.floor((this.scrollContent.offsetWidth / this.scrollContent.scrollWidth) * 100) + 1
        
        this.mouseWheelHo = this.contentHoScroll(this)
        this.mouseDownHo = this.barHoMouseDown(this)
        this.mouseKeydownDoc = this.contentKeyDown(this)
        this.mouseKeyupDoc = this.contentKeyUp(this)

        // 将this作为dataBus
        this.scrollContent.addEventListener(mousewheel, this.mouseWheelHo)
        this.barHo.addEventListener('mousedown', this.mouseDownHo)

        document.addEventListener('keydown',this. mouseKeydownDoc)
        document.addEventListener('keyup',this. mouseKeyupDoc)
      } else {
        if(this.mouseWheelHo) this.scrollContent.removeEventListener(mousewheel, this.mouseWheelHo)
        if(this.mouseDownHo) this.barHo.removeEventListener('mousedown', this.mouseDownHo)
        if(this.mouseKeydownDoc) document.removeEventListener('keydown', this.mouseKeydownDoc)
        if(this.mouseKeyupDoc) document.removeEventListener('keyup', this.mouseKeyupDoc)
        this.barHoConShow = false
        this.barHo = null
      }

      // 如果有滚动条
      if(this.barVe || this.barHo) {
        this.mousemoveConPar = this.contentHover(this)
        this.mouseleaveConPar = this.contentLeave(this)

        // 将this作为dataBus
        this.scrollContent.parentNode.addEventListener('mousemove', this.mousemoveConPar)
        this.scrollContent.parentNode.addEventListener('mouseleave', this.mouseleaveConPar)
      } else {
        if(this.mousemoveConPar) this.scrollContent.parentNode.removeEventListener('mousemove', this.mousemoveConPar)
        if(this.mouseleaveConPar) this.scrollContent.parentNode.removeEventListener('mouseleave', this.mouseleaveConPar)
      }
    }
  },
  mounted() {
    this.scrollContent = this.$refs.scrollContent
    this.scrollContentScrollHeight = this.$refs.scrollContent.scrollHeight
    this.haScrollInit()   
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
  border-radius: 4px;
}
.ha-scroll-toBottom-default {
  position: absolute;
  text-align: center;
  cursor: pointer;
  user-select: none;
  width: 50%;
  max-width: 100px;
  min-width: 50px;
  left: 0;
  bottom: 0;
}
.ha-scroll-toTop-default {
  position: absolute;
  text-align: center;
  cursor: pointer;
  user-select: none;
  width: 50%;
  max-width: 100px;
  min-width: 50px;
  right: 0;
  bottom: 0;
}
.ha-scroll-to-container-default {
  position: absolute;
  width: 5%;
  max-width: 200px;
  min-width: 100px;
  right: 4%;
  bottom: 4%;
}

</style>


