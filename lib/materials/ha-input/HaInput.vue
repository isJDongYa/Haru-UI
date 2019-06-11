<template>
  <ha-card
  :width="width" :height="height" 
  :coor="coor" 
  :bgColor="[checkObj.bgColor, checkObj.bgColor, 'white']"  
  :hover="hover"
  :z="z"
  :styleProp="styleProp"
  :haShow="$attrs['haShow']"

  type="Ver"  
  :hcfHeight="hcfHeight"
  >
    <div class="ha-input-default ha-input" slot="header">
      <label class="ha-input-lable-default ha-input-lable" :for="name">
        <div class="ha-input-lable-lable-default ha-input-lable-lable">{{ lable }}</div>
      </label>
      <input class="ha-input-input-default ha-input-input" :name="name" :type="type" :value="value" @input="handleInput" @blur="checkVal">
    </div>
    <div class="ha-input-error-default ha-input-error" slot="content">
      {{ checkObj.msg }}
    </div>
  </ha-card>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from '@mixins/whMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import hoverMixin from '@mixins/hoverMixin'
import zMixin from '@mixins/zMixin'

import HaCard from '@containers/ha-card/HaCard.vue'

export default {
  name: 'ha-input',
  mixins: [coorMixin, whMixin, colorMixin, stylePropMixin, hoverMixin, zMixin],
  components: {
    'ha-card': HaCard
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: function(val) {
        if(val === 'file') {
          return false
        } else {
          return true
        }
      }
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    lable: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    checkFun: {
      type: Function,
      required: false,
      default: function(val) {
        return {
          msg: '',
          bgColor: this.bgColor
        }
      }
    }
  },
  data() {
    return {
      hcfHeight: ['60%', '40%', '0%'],
      checkObj: {
        msg: '',
        bgColor: this.bgColor
      },
    }
  },
  methods: {
    checkVal() {
      this.checkObj = this.checkFun(this.value) 
    },
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  },
  mounted() {
    this.checkObj.color = this.haColor
  }
}
</script>
<style lang="scss" scoped>
.ha-input-default {
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.ha-input-lable-default {
  display: flex;
  width: 25%;
  height: 75%;
  justify-content: flex-start;
  align-items: center;
  .ha-input-lable-lable-default {
    display: inline-block;
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.ha-input-input-default {
  box-sizing: border-box;
  display: flex;
  width: 70%;
  height: 75%;
  font: 1em sans-serif;
  border: 1px solid #ddd;
  outline: none;
}
.ha-input-error-default {
  display: flex;
  width: 80%;
  justify-content: center;
}
</style>


