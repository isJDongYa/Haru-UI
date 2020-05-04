<template>
  <ha-rectangle 
    :z="$attrs['z']" :width="$attrs['width']" 
    :height="$attrs['height']" :coor="$attrs['coor']" 
    :hover="$attrs['hover']" :haShow="$attrs['haShow']"
    :border="$attrs['border']" :padding="$attrs['padding']"
    :radius="$attrs['radius']"
  >
    <ha-menu-list-vertical  
      :menuList="$attrs['menuList']" :bgColor="$attrs['bgColor']" 
      :singleOpen="$attrs['singleOpen']"
    >
      <slot></slot>
    </ha-menu-list-vertical>
  </ha-rectangle>
</template>
<script>

import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaMenuListVertical from './ha-menu-list-vertical'

export default {
  name: 'ha-menu-ver',
  components: {
    'ha-rectangle': HaRectangle,
    'ha-menu-list-vertical': HaMenuListVertical
  }
}
</script>
<style lang="scss" scoped>

</style>
