<template>
  <ha-line-time></ha-line-time>
</template>
<script>
import HaLineTime from '@charts/line/ha-line-time/HaLineTime.vue'

export default {
  components: {
    [HaLineTime.name]: HaLineTime
  }
}
</script>