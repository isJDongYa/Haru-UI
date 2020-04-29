<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[5,12], [7, 20]]]">
      <ha-letter letter="L" :capital="true" fillColor="blue"></ha-letter>
    </ha-rectangle>
    <ha-rectangle :coor="[[[12,12], [7, 20]]]">
      <ha-letter letter="e" fillColor="yellow"></ha-letter>
    </ha-rectangle>
    <ha-rectangle :coor="[[[19,12], [7, 20]]]">
      <ha-letter letter="t" fillColor="green"></ha-letter>
    </ha-rectangle>
    <ha-rectangle :coor="[[[26,12], [7, 20]]]">
      <ha-letter letter="t" fillColor="red"></ha-letter>
    </ha-rectangle>
    <ha-rectangle :coor="[[[33,12], [7, 20]]]">
      <ha-letter letter="e" fillColor="purple"></ha-letter>
    </ha-rectangle>
    <ha-rectangle :coor="[[[40,12], [7, 20]]]">
      <ha-letter letter="r" fillColor="orange"></ha-letter>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaLetter from '@stuffings/ha-letter/HaLetter.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaLetter.name]: HaLetter
  }
}
</script>