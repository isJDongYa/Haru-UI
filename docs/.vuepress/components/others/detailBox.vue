<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[19,19], [12, 12]]]">
      <ha-detailBox>
        <ha-button title="鼠标进入显示详情" bgColor="bgc-blue"></ha-button>
      </ha-detailBox>
      <ha-card 
        width="300px" height="300px" 
        :bgColor="['bgc-red','bgc-lightBlue']" 
        data-detail-box="detailBox" 
      >
        这是一个detailBox
      </ha-card>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaCard from '@containers/ha-card/HaCard.vue'
import HaButton from '@stuffings/ha-button/HaButton.vue'
import HaDetailBox from '@others/ha-detailBox/HaDetailBox.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaButton.name]: HaButton,
    [HaCard.name]: HaCard,
    [HaDetailBox.name]: HaDetailBox
  }
}
</script>