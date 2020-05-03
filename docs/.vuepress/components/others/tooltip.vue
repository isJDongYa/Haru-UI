<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[9,19], [12, 12]]]">
      <ha-tooltip 
        tip="这是一个top tip" 
        :wait="2000" 
        location="top" 
        bgColor="bgc-red">
        <ha-button title="鼠标放置2秒显示tip" bgColor="bgc-blue"></ha-button>
      </ha-tooltip>
    </ha-rectangle>
    <ha-rectangle :coor="[[[29,19], [12, 12]]]">
      <ha-tooltip 
        tip="这是一个bottom tip" 
        :wait="3000" 
        location="bottom" 
        bgColor="bgc-red">
        <ha-button title="鼠标放置3秒显示tip" bgColor="bgc-yellow"></ha-button>
      </ha-tooltip>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaButton from '@stuffings/ha-button/HaButton.vue'
import HaTooltip from '@others/ha-tooltip/HaTooltip.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaButton.name]: HaButton,
    [HaTooltip.name]: HaTooltip
  }
}
</script>