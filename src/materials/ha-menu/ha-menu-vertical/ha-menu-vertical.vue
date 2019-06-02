<template>
  <ha-rectangle :width="width" :height="height" :coor="coor">
    <ha-menu-list-vertical :menuList="menuList" :color="color" :styleProp="styleProp" :singleOpen="singleOpen">
      <slot></slot>
    </ha-menu-list-vertical>
  </ha-rectangle>
</template>
<script>
import HaMenuListVertical from './ha-menu-list-vertical'
import coorMixin from '@mixins/coorMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import singleOpenMixin from '@mixins/singleOpenMixin'
import whMixin from '@mixins/whMixin'

import Vue from 'vue'
import HaRectangle from '@containers/ha-rectangle'
Vue.use(HaRectangle)

export default {
  name: 'ha-menu-vertical',
  mixins: [coorMixin, colorMixin, stylePropMixin, singleOpenMixin, whMixin],
  components: {
    'ha-menu-list-vertical': HaMenuListVertical
  },
  props: {
    menuList: {
      type: Object,
      required: false,
      default: () => {
        return {
          menuTitle: 'ha-menu-vertical-title',
          menuList: [
            {
              groupId: '1',
              menuTitle: 'groupTitle',
              menuList: [
                {
                  groupId: '2',
                  menuTitle: 'g2',
                  menuList: [
                    {
                      title: 'list1',
                      route: '/list1',
                      icon: require('@icons/信息.svg')
                    },
                    {
                      title: 'list1',
                      route: '/list1'
                    },
                    {
                      title: 'list1',
                      route: '/list1'
                    },
                    {
                      title: 'list1',
                      route: '/list1'
                    },
                  ] 
                },
                {
                  groupId: '3',
                  menuTitle: 'g3',
                  menuList: [
                    {
                      title: 'list1',
                      route: '/list1'
                    },
                    {
                      title: 'list1',
                      route: '/list1'
                    },
                    {
                      title: 'list1',
                      route: '/list1'
                    },
                    {
                      title: 'list1',
                      route: '/list1'
                    },
                  ] 
                }
              ]
            }
          ]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
