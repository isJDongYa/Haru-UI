<template>
  <ha-rectangle :width="width" :height="height" :coor="coor">
    <ha-card :color="['grey', 'white', 'lightGrey']"  width="100%" height="100%">

    </ha-card>
  </ha-rectangle>
</template>
<script>

// import coorMixin from '@mixins/coorMixin'
// import colorMixin from '@mixins/colorMixin'
// import stylePropMixin from '@mixins/stylePropMixin'
// import whMixin from '@mixins/whMixin'

import '@containers/ha-rectangle'
import '@containers/ha-card'

export default {
  name:'ha-scroll',
  //mixins: [coorMixin, colorMixin, stylePropMixin, whMixin],
  
}
</script>
<style lang="scss" scoped>

</style>


