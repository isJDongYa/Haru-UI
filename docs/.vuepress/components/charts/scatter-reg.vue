<template>
  <ha-scatter-reg :order="2" regMethod="polynomial"></ha-scatter-reg>
</template>
<script>
import HaScatterReg from '@charts/ha-scatter-reg/HaScatterReg.vue'

export default {
  components: {
    [HaScatterReg.name]: HaScatterReg
  }
}
</script>