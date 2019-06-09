<template>
  <ha-rectangle :z="z" :width="width" :height="height" :coor="coor" :styleProp="styleProp"  overflow='visible' :hover="hover">
    <ha-menu-list-horizontal :menuList="menuList" :fontColor="fontColor" :bgColor="bgColor" :singleOpen="singleOpen">
      <slot></slot>
    </ha-menu-list-horizontal>
  </ha-rectangle>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import whMixin from '@mixins/whMixin'
import zMixin from '@mixins/zMixin'
import hoverMixin from '@mixins/hoverMixin'

import singleOpenMixin from '@mixins/singleOpenMixin'

import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaMenuListHorizontal from './ha-menu-list-horizontal'

export default {
  name: 'ha-menu-horizontal',
  mixins: [coorMixin, colorMixin, stylePropMixin, singleOpenMixin, whMixin, zMixin, hoverMixin],
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
