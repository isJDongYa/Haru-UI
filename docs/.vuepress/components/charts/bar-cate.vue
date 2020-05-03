<template>
  <ha-bar-cate :hor="true"></ha-bar-cate>
</template>
<script>
import HaBarCate from '@charts/bar/ha-bar-cate/HaBarCate.vue'

export default {
  components: {
    [HaBarCate.name]: HaBarCate
  }
}
</script>