<template>
  <ha-card
  :width="width" :height="height" :coor="coor" 
  :color="[selfColor, selfColor, 'white']"  
  type="Ver"  
  :hcfHeight="hcfHeight"
  :hover="hover"
  >
    <div class="ha-input-default ha-input" slot="header">
      <label class="ha-input-lable-default ha-input-lable" :for="name">
        <div class="ha-input-lable-lable-default ha-input-lable-lable">{{ lable }}</div>
      </label>
      <input class="ha-input-input-default ha-input-input" :name="name" :type="type" v-model="value" @blur="checkVal">
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

import HaCard from '@containers/ha-card/HaCard.vue'

export default {
  name: 'ha-input',
  mixins: [coorMixin, whMixin, colorMixin],
  components: {
    'ha-card': HaCard
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'
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
    hover: {
      type: String,
      required: false,
      default: ''
    },
    checkFun: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      value: '',
      hcfHeight: ['60%', '40%', '0%'],
      checkObj: {
        msg: '',
        isError: false,
        isCorrect: false,
      },
    }
  },
  computed: {
    selfColor() {
      if(this.checkObj.isError) return this.haColor[2]
      if(this.checkObj.isCorrect) return this.haColor[1]
      return this.haColor[0]
    }
  },
  methods: {
    checkVal() {
      this.checkObj = this.checkFun(this.value) 
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


