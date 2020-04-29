<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[9,10], [7, 20]]]">
      <ha-letter letter="H" :capital="true" fillColor="blue"></ha-letter>
    </ha-rectangle>
    <ha-rectangle :coor="[[[18,10], [7, 20]]]">
      <ha-letter letter="a" fillColor="yellow"></ha-letter>
    </ha-rectangle>
    <ha-rectangle :coor="[[[27,10], [7, 20]]]">
      <ha-letter letter="r" fillColor="green"></ha-letter>
    </ha-rectangle>
    <ha-rectangle :coor="[[[36,10], [7, 20]]]">
      <ha-letter letter="u" fillColor="red"></ha-letter>
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