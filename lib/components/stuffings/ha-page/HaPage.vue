<template>
  <div class="ha-page-container-default ha-page-container">
    <div class="ha-page-left-default ha-page-left">
      <img class="ha-page-left-up-default ha-page-left-up" :src="upImg" @click="upClick">
      <div class="ha-page-left-num-container-default ha-page-left-num-container">
        <div 
        class="ha-page-left-num-default ha-page-left-num" 
        :style="{color: isPage === p ? 'blue' : '' }" 
        v-for="(p, i) in (page>5?leftPage:page)" :key="i"
        @click="numClick(p)"
        >
          {{ p }}
        </div>
        <div v-if="dotShow">...</div>
        <div 
        class="ha-page-left-num-default ha-page-left-num" 
        :style="{color: isPage === p ? 'blue' : '' }" 
        v-show="page>5"
        v-for="p in (page>5?[page-2,page-1, page]:0)" :key="p"
        @click="numClick(p)"
        >
          {{ p }}
        </div>
      </div>
      <img class="ha-page-left-down-default ha-page-left-down" :src="downImg" @click="downClick">
    </div>
    <div class="ha-page-right-default ha-page-right">
      <div class="ha-page-right-total-default ha-page-right-total">共 {{ page }} 页</div>
      <div class="ha-page-right-goto-default ha-page-right-goto">
        <input class="ha-page-right-goto-input-default ha-page-right-goto-input" v-model="inputPage">
        <div class="ha-page-right-goto-go-default ha-page-right-goto-go" @click="gotoPage">确定</div>
      </div>
    </div>
  </div>
</template>
<script>

import _lastOne from '@icons/back.svg'
import _nextOne from '@icons/nextone.svg'

export default {
  name: 'ha-page',
  props: {
    page: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data() {
    return {
      isPage: 1,
      leftPage: [1,2,3],
      dotShow: this.page>6,
      inputPage: undefined,
      upImg: _lastOne,
      downImg: _nextOne
    }
  },
  watch: {
    isPage() {
      if(this.isPage+2<=this.page-3) {
        for(let i=0;i<3;i++) {
          this.leftPage[i] = i + this.isPage
        }
      } else {
        this.leftPage = [this.page-5, this.page-4, this.page-3]
      }
      if(this.isPage+2>=this.page-3){
        this.dotShow = false
      } else {
        this.dotShow = true
      }
      this.$emit('pageChange', this.isPage)
    }
  },
  methods: {
    upClick() {
      if(this.isPage>1) {
        this.isPage--
      }
    },
    downClick() {
      if(this.isPage<this.page) {
        this.isPage++
      }
    },
    numClick(p) {
      this.isPage = p
    },
    gotoPage() {
      let n = Number(this.inputPage)
      if(n>0 && n<=this.page) {
        this.isPage = n
      } else {
        this.$emit('pageError', n)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ha-page-container-default {
  display: flex;
  width: 100%;
  height: 100%;
}
.ha-page-left-default {
  display: flex;
  width: 50%;
  height: 100%;
}
.ha-page-left-up-default {
  display: flex;
  width: 20%;
  height: 100%;
  cursor: pointer;
}
.ha-page-left-num-container-default {
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.ha-page-left-num-default {
  cursor: pointer;
}
.ha-page-left-down-default {
  display: flex;
  width: 20%;
  height: 100%;
  cursor: pointer;
}
.ha-page-right-default {
  display: flex;
  width: 50%;
  height: 100%;
  .ha-page-right-total-default {
    display: flex;
    width: 40%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
  }
  .ha-page-right-goto-default {
    display: flex;
    width: 60%;
    height: 100%;
    align-items: center;
    .ha-page-right-goto-input-default {
      width: 50%;
      height: 60%;
    }
    .ha-page-right-goto-go-default {
      display: flex;
      width: 50%;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
    }
  }
}
</style>


