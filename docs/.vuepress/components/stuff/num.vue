<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[5,12], [7, 20]]]">
      <ha-number :num="2" :capital="true" fillColor="blue"></ha-number>
    </ha-rectangle>
    <ha-rectangle :coor="[[[12,12], [7, 20]]]">
      <ha-number :num="0" fillColor="yellow"></ha-number>
    </ha-rectangle>
    <ha-rectangle :coor="[[[19,12], [7, 20]]]">
      <ha-number :num="2" fillColor="green"></ha-number>
    </ha-rectangle>
    <ha-rectangle :coor="[[[26,12], [7, 20]]]">
      <ha-number :num="0" fillColor="red" :dot="true"></ha-number>
    </ha-rectangle>
    <ha-rectangle :coor="[[[33,12], [7, 20]]]">
      <ha-number :num="0" fillColor="purple"></ha-number>
    </ha-rectangle>
    <ha-rectangle :coor="[[[40,12], [7, 20]]]">
      <ha-number :num="4" fillColor="orange"></ha-number>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaNumber from '@stuffings/ha-number/HaNumber.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaNumber.name]: HaNumber
  }
}
</script>