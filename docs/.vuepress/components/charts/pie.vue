<template>
  <ha-pie theme="dark" roseType="radius" itemColor="red"></ha-pie>
</template>
<script>
import HaPie from '@charts/ha-pie/HaPie.vue'

export default {
  components: {
    [HaPie.name]: HaPie
  }
}
</script>