<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[19,19], [12, 12]]]">
      <ha-detailbox>
        <ha-button title="鼠标进入显示详情" bgColor="bgc-blue"></ha-button>
      </ha-detailbox>
      <ha-card 
        width="300px" height="300px" 
        :bgColor="['bgc-red','bgc-lightBlue']" 
        data-detailbox="detailbox" 
      >
        这是一个detailbox
      </ha-card>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaCard from '@containers/ha-card/HaCard.vue'
import HaButton from '@stuffings/ha-button/HaButton.vue'
import HaDetailbox from '@others/ha-detailbox/HaDetailbox.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaButton.name]: HaButton,
    [HaCard.name]: HaCard,
    [HaDetailbox.name]: HaDetailbox
  }
}
</script>