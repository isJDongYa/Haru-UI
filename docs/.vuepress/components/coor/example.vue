<template>
    <ha-coordinater :grid="[[1180, 50, 50], [580, 25, 50]]">
      <ha-rectangle :coor="[[[6,8], [5,8]], [[5,3], [5, 15]]]">
        <ha-number :num="0" fillColor="green"></ha-number>
      </ha-rectangle>
    </ha-coordinater>   
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater'
import HaReactangle from '@containers/ha-rectangle/HaRectangle'
import HaNumber from '@stuffings/ha-number/HaNumber' 
  
export default {
  components:{
    [HaCoordinater.name]: HaCoordinater,
    [HaReactangle.name]: HaReactangle,
    [HaNumber.name]: HaNumber
  }
}
</script>