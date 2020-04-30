<template>
  <ha-card
  :width="$attrs['width']" :height="$attrs['height']" 
  :coor="$attrs['coor']" 
  :bgColor="[checkObj.bgColor, checkObj.bgColor, 'bgc-white']"  
  :hover="$attrs['hover']"
  :z="$attrs['z']"
  :haShow="$attrs['haShow']"
  :border="$attrs['border']"
  :padding="$attrs['padding']"
  :radius="$attrs['radius']"
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

import HaCard from '@containers/ha-card/HaCard.vue'
import colorMixin  from '@mixins/colorMixin.js'

export default {
  name: 'ha-input',
  mixins: [colorMixin],
  components: {
    'ha-card': HaCard
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: function(val) {
        const typeArr = ['text','number','password', 'date', 'color']
        if(typeArr.indexOf(val) === -1) {
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
          msg: undefined,
          bgColor: this.bgColor
        }
      }
    }
  },
  data() {
    return {
      hcfHeight: ['60%', '40%', '0%'],
      checkObj: {
        msg: undefined,
        bgColor: this.bgColor
      }
    }
  },
  methods: {
    checkVal() {
      this.checkObj = this.checkFun(this.value)
    },
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
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


