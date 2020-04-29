<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[5,20], [12, 10]]]" border="solid 1px">
      <ha-check :isCheck="false" content="蓝色的check" bgColor="bgc-blue"></ha-check>
    </ha-rectangle>
    <ha-rectangle :coor="[[[19,20], [12, 10]]]" border="solid 1px">
      <ha-check :isCheck="true" content="红色的check" bgColor="bgc-red"></ha-check>
    </ha-rectangle>
    <ha-rectangle :coor="[[[33,20], [12, 10]]]" border="solid 1px">
      <ha-check :isCheck="true" content="黄色的check" bgColor="bgc-yellow"></ha-check>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaCheck from '@stuffings/ha-check/HaCheck.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaCheck.name]: HaCheck
  }
}
</script>