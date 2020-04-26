<template>
  <ha-rectangle  height="500px" :styleProp="styleProp" hover="shadow">
    <slot></slot>
  </ha-rectangle>
</template>
<script>

import HaReactangle from '@containers/ha-rectangle/HaRectangle'

export default {
  components:{
    [HaReactangle.name]: HaReactangle,
  },
  data() {
    return {
      styleProp: {
        'border': '1px solid #eaecef'
      }
    }
  }
}
</script>
