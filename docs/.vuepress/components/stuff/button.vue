<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <!-- 第一行 -->
    <ha-rectangle :coor="[[[9,10], [6, 4]]]">
      <ha-button title="蓝色按钮" bgColor="bgc-blue"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[16,10], [6, 4]]]">
      <ha-button title="红色按钮" bgColor="bgc-red"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[23,10], [6, 4]]]">
      <ha-button title="绿色按钮" bgColor="bgc-green"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[30,10], [6, 4]]]">
      <ha-button title="黄色按钮" bgColor="bgc-yellow"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[37,10], [6, 4]]]">
      <ha-button title="橘色按钮" bgColor="bgc-orange"></ha-button>
    </ha-rectangle>
    <!-- 第二行 -->
    <ha-rectangle :coor="[[[9,19], [6, 4]]]" radius="5px">
      <ha-button title="圆角按钮" bgColor="bgc-blue"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[17,18], [6, 6]]]" radius="50%">
      <ha-button title="圆形按钮" bgColor="bgc-red"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[24,18], [8, 6]]]">
      <ha-button title="大按钮" bgColor="bgc-green"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[33,19], [4, 3]]]">
      <ha-button title="小按钮" bgColor="bgc-yellow"></ha-button>
    </ha-rectangle>
    <!-- 第三行 -->
    <ha-rectangle :coor="[[[9,28], [6, 4]]]">
      <ha-button title="禁用按钮" bgColor="bgc-orange" :disabled="true"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[17,28], [14, 8]]]" radius="10px">
      <ha-button title="两倍字体" bgColor="bgc-blue" fontSize="2em"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[32,28], [6, 4]]]" radius="10px">
      <ha-button title="0.5倍字体" bgColor="bgc-blue" fontSize="0.5em"></ha-button>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaButton from '@stuffings/ha-button/HaButton.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaButton.name]: HaButton
  }
}
</script>