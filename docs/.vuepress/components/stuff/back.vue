<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[5,5], [40, 5]]]">
      <ha-back title="这是蓝色的`<ha-back>`组件" bgColor="bgc-blue"></ha-back>
    </ha-rectangle>
    <ha-rectangle :coor="[[[5,13], [40, 5]]]">
      <ha-back title="这是红色的`<ha-back>`组件" bgColor="bgc-red"></ha-back>
    </ha-rectangle>
    <ha-rectangle :coor="[[[5,21], [40, 5]]]">
      <ha-back title="这是绿色的`<ha-back>`组件" bgColor="bgc-green"></ha-back>
    </ha-rectangle>
    <ha-rectangle :coor="[[[5,29], [40, 5]]]">
      <ha-back title="这是黄色的`<ha-back>`组件" bgColor="bgc-yellow"></ha-back>
    </ha-rectangle>
    <ha-rectangle :coor="[[[5,37], [40, 5]]]">
      <ha-back title="这是紫色的`<ha-back>`组件" bgColor="bgc-purple"></ha-back>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaBack from '@stuffings/ha-back/HaBack.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaBack.name]: HaBack
  }
}
</script>