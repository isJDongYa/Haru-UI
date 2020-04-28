<template>
  <ha-rectangle :z="$attrs['z']" :width="$attrs['width']" :height="$attrs['height']" :coor="$attrs['coor']" :hover="$attrs['hover']" :haShow="$attrs['haShow']">
    <ha-menu-list-vertical :fontColor="fontColor" :menuList="menuList" :bgColor="bgColor" :singleOpen="singleOpen">
      <slot></slot>
    </ha-menu-list-vertical>
  </ha-rectangle>
</template>
<script>


import singleOpenMixin from '@mixins/singleOpenMixin'

import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaMenuListVertical from './ha-menu-list-vertical'

export default {
  name: 'ha-menu-vertical',
  mixins: [singleOpenMixin],
  components: {
    'ha0rectangle': HaRectangle,
    'ha-menu-list-vertical': HaMenuListVertical
  },
  props: {
    menuList: {
      type: Object,
      required: false,
      default: () => {
        return {
        //   menuTitle: 'ha-menu-vertical-title',
        //   menuList: [
        //     {
        //       groupId: '1',
        //       menuTitle: 'groupTitle',
        //       menuList: [
        //         {
        //           groupId: '2',
        //           menuTitle: 'g2',
        //           menuList: [
        //             {
        //               title: 'list1',
        //               route: '/list1',
        //               icon: require('@icons/信息.svg')
        //             },
        //             {
        //               title: 'list1',
        //               route: '/list1'
        //             },
        //             {
        //               title: 'list1',
        //               route: '/list1'
        //             },
        //             {
        //               title: 'list1',
        //               route: '/list1'
        //             },
        //           ] 
        //         },
        //         {
        //           groupId: '3',
        //           menuTitle: 'g3',
        //           menuList: [
        //             {
        //               title: 'list1',
        //               route: '/list1'
        //             },
        //             {
        //               title: 'list1',
        //               route: '/list1'
        //             },
        //             {
        //               title: 'list1',
        //               route: '/list1'
        //             },
        //             {
        //               title: 'list1',
        //               route: '/list1'
        //             },
        //           ] 
        //         }
        //       ]
        //     }
        //   ]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
