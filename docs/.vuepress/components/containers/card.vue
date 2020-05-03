<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-card 
      :coor="[[[5,5], [40, 40]]]" type="Ver" 
      :hcfHeight="['20%','60%', '20%']" 
      :bgColor="['bgc-red', 'bgc-yellow', 'bgc-blue']"
    >
      <div slot="header">这里是header</div>
      <div slot="content">这里是content</div>
      <div slot="footer">这里是footer</div>
    </ha-card>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaCard from '@containers/ha-card/HaCard.vue'
import HaLetter from '@stuffings/ha-letter/HaLetter.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaCard.name]: HaCard,
    [HaLetter.name]: HaLetter
  }
}
</script>