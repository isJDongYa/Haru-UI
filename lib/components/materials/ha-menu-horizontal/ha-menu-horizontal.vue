<template>
  <ha-rectangle 
    :z="$attrs['z']" :width="$attrs['width']" 
    :height="$attrs['height']" :coor="$attrs['coor']"  
    overflow='visible' :hover="$attrs['hover']" 
    :haShow="$attrs['haShow']" :border="$attrs['border']" 
    :padding="$attrs['padding']"
    :radius="$attrs['radius']"
    >
    <ha-menu-list-horizontal 
      :menuList="$attrs['menuList']" :bgColor="$attrs['bgColor']" 
      :singleOpen="$attrs['singleOpen']"
    >
      <slot></slot>
    </ha-menu-list-horizontal>
  </ha-rectangle>
</template>
<script>

import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaMenuListHorizontal from './ha-menu-list-horizontal'

export default {
  name: 'ha-menu-horizontal',
  components: {
    'ha-rectangle': HaRectangle,
    'ha-menu-list-horizontal': HaMenuListHorizontal
  }
}
</script>
<style lang="scss" scoped>

</style>
