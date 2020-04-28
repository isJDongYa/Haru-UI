<template>
  <ha-rectangle :z="$attrs['z']" :width="$attrs['width']" :height="$attrs['height']" :coor="$attrs['coor']"  overflow='visible' :hover="$attrs['hover']" :haShow="$attrs['haShow']">
    <ha-menu-list-horizontal :menuList="menuList" :fColor="$attrs['fColor']" :bgColor="$attrs['bgColor']" :singleOpen="$attrs['singleOpen']">
      <slot></slot>
    </ha-menu-list-horizontal>
  </ha-rectangle>
</template>
<script>

import singleOpenMixin from '@mixins/singleOpenMixin'

import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaMenuListHorizontal from './ha-menu-list-horizontal'

export default {
  name: 'ha-menu-horizontal',
  mixins: [singleOpenMixin],
  components: {
    'ha0rectangle': HaRectangle,
    'ha-menu-list-horizontal': HaMenuListHorizontal
  },
  props: {
    menuList: {
      type: Object,
      required: false,
      default: () => {
        return {
          // menuTitle: 'ha-menu-horizontal-title',
          // route: '/home',
          // menuList: [
          //   {
          //     groupId: '1',
          //     menuTitle: 'groupTitle',
          //     menuList: [
          //       {
          //         groupId: '2',
          //         menuTitle: 'g2',
          //         menuList: [
          //           {
          //             title: 'list1',
          //             route: '/list1'
          //           },
          //           {
          //             title: 'list1',
          //             route: '/list1'
          //           },
          //           {
          //             title: 'list1',
          //             route: '/list1'
          //           },
          //           {
          //             title: 'list1',
          //             route: '/list1'
          //           },
          //         ] 
          //       },
          //       {
          //         groupId: '3',
          //         menuTitle: 'g3',
          //         menuList: [
          //           {
          //             title: 'list1',
          //             route: '/list1'
          //           },
          //           {
          //             title: 'list1',
          //             route: '/list1'
          //           },
          //           {
          //             title: 'list1',
          //             route: '/list1'
          //           },
          //           {
          //             title: 'list1',
          //             route: '/list1'
          //           },
          //         ] 
          //       }
          //     ]
          //   }
          // ]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
