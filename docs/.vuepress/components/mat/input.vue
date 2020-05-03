<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-input 
      :coor="[[[4,2], [42, 8]]]" 
      lable="text输入框："
      name="input"
      type='text'
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-blue" 
      :checkFun="checkFun1"
      v-model="value1"
    ></ha-input>
    <ha-input 
      :coor="[[[4,11], [42, 8]]]" 
      lable="密码："
      name="input"
      type="password"
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-yellow" 
      :checkFun="checkFun2"
      v-model="value2"
    ></ha-input>
    <ha-input 
      :coor="[[[4,20], [42, 8]]]" 
      lable="数字："
      name="input"
      type="number"
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-orange" 
      :checkFun="checkFun3"
      v-model="value3"
    ></ha-input>
    <ha-input 
      :coor="[[[4,29], [42, 8]]]" 
      lable="日期："
      name="input"
      type="date"
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-purple" 
      :checkFun="checkFun4"
      v-model="value4"
    ></ha-input>
    <ha-input 
      :coor="[[[4,38], [42, 8]]]" 
      lable="颜色："
      name="input"
      type="color"
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-grey" 
      :checkFun="checkFun5"
      v-model="value5"
    ></ha-input>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaInput from '@materials/ha-input/HaInput.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaInput.name]: HaInput
  },
  data() {
    return {
      value1: undefined,
      value2: undefined,
      value3: undefined,
      value4: undefined,
      value5: undefined
    }
  },
  methods: {
    checkFun1(val) {
      if(val!=='text') {
        return {
          msg: '不是text',
          bgColor: 'bgc-red'
        }
      }else {
        return {
          msg: '是text',
          bgColor: 'bgc-green'
        }
      }
    },
    checkFun2(val) {
      if(val!=='1234') {
        return {
          msg: '错误！密码是1234',
          bgColor: 'bgc-red'
        }
      }else {
        return {
          msg: '正确！密码是1234',
          bgColor: 'bgc-green'
        }
      }
    },
    checkFun3(val) {
      if(val!=='123456') {
        return {
          msg: '错误!不是123456',
          bgColor: 'bgc-red'
        }
      }else {
        return {
          msg: '正确！是123456',
          bgColor: 'bgc-green'
        }
      }
    },
    checkFun4(val) {
      if(val!=='2020-05-20') {
        return {
          msg: '错误！日期是2020-5-20',
          bgColor: 'bgc-red'
        }
      }else {
        return {
          msg: '正确！日期是2020-5-20',
          bgColor: 'bgc-green'
        }
      }
    },
    checkFun5(val) {
      return {
        msg: '选择的颜色为' + val,
        bgColor: 'bgc-grey'
      }
    },
  } 
}
</script>