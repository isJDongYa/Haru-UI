<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-menu-horizontal 
      :coor="[[[8,15], [32, 5]]]" 
      :bgColor="['bgc-blue', 'bgc-lightBlue']" 
      :menuList="menuList"
    ></ha-menu-horizontal>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaMenuHorizontal from '@materials/ha-menu-horizontal/ha-menu-horizontal.vue'

import HaIcons from '@icons'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaMenuHorizontal.name]: HaMenuHorizontal
  },
  data() {
    return {
      menuList:{ // 第一层菜单
        menuTitle: 'menu-title', 
        menuList: [
          { // 第二层菜单
            groupId: '1', // 必需，该组件以此判断是否为“group”
            menuTitle: 'groupTitle', 
            icon: HaIcons['message_white'],
            menuList: [
              { // 第三层菜单
                groupId: '2', 
                menuTitle: 'g2', 
                menuList: [
                  { // 这里是item
                    title: 'item', // 必需， 该组件以此判断是否为“item”
                    route: '/materials/#_4-2-ha-menu-horizontal',
                    icon: HaIcons['message_white']
                  },
                  { // 这里是item
                    title: 'item', 
                    route: '/materials/#_4-2-ha-menu-horizontal',
                    icon: HaIcons['message_white']
                  },
                  { // 这里是item
                    title: 'item',
                    route: '/materials/#_4-2-ha-menu-horizontal',
                  },
                  { // 这里是item
                    title: 'item',
                    route: '/materials/#_4-2-ha-menu-horizontal',
                  },
                ] 
              }
            ]
          },
          { // 第三层菜单
            groupId: '3',
            menuTitle: 'g3',
            icon: HaIcons['message_white'],
            menuList: [
              { // 这里是item
                title: 'item',
                route: '/materials/#_4-2-ha-menu-horizontal',
              },
              { // 这里是item
                title: 'item',
                route: '/materials/#_4-2-ha-menu-horizontal',
              },
              { // 这里是item
                title: 'item',
                route: '/materials/#_4-2-ha-menu-horizontal',
              },
              { // 这里是item
                title: 'item',
                route: '/materials/#_4-2-ha-menu-horizontal',
              },
            ] 
          }
        ]
      }
    }
  }
}
</script>