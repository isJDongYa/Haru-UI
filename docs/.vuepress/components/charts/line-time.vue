<template>
  <ha-line-time></ha-line-time>
</template>
<script>
import HaLineTime from '@charts/ha-line-time/HaLineTime.vue'

export default {
  components: {
    [HaLineTime.name]: HaLineTime
  }
}
</script>