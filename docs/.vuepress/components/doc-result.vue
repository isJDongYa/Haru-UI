<template>
  <ha-rectangle  :height="height" border="1px solid #eaecef" hover="shadow">
    <slot></slot>
  </ha-rectangle>
</template>
<script>

import HaReactangle from '@containers/ha-rectangle/HaRectangle'

export default {
  components:{
    [HaReactangle.name]: HaReactangle,
  },
  props: {
    height:{
      type: String,
      required: false,
      default: '500px'
    }
  }
}
</script>
