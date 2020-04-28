<template>
  <ha-rectangle  height="500px" border="1px solid #eaecef" hover="shadow">
    <slot></slot>
  </ha-rectangle>
</template>
<script>

import HaReactangle from '@containers/ha-rectangle/HaRectangle'

export default {
  components:{
    [HaReactangle.name]: HaReactangle,
  }
}
</script>
