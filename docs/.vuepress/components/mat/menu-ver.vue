<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-menu-ver 
      :coor="[[[15,1], [16, 50]]]" 
      :bgColor="['bgc-blue', 'bgc-lightBlue']" 
      :menuList="menuList"
    ></ha-menu-ver>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/ha-coordinater/HaCoordinater.vue'
import HaMenuVer from '@materials/ha-menu-ver/HaMenuVer.vue'

import HaIcons from '@icons'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaMenuVer.name]: HaMenuVer
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
                    route: '/materials/#_4-1-ha-menu-ver',
                    icon: HaIcons['message_white']
                  },
                  { // 这里是item
                    title: 'item', 
                    route: '/materials/#_4-1-ha-menu-ver',
                    icon: HaIcons['message_white']
                  },
                  { // 这里是item
                    title: 'item',
                    route: '/materials/#_4-1-ha-menu-ver',
                  },
                  { // 这里是item
                    title: 'item',
                    route: '/materials/#_4-1-ha-menu-ver',
                  },
                ] 
              },
              { // 第三层菜单
                groupId: '3',
                menuTitle: 'g3',
                icon: HaIcons['message_white'],
                menuList: [
                  { // 这里是item
                    title: 'item',
                    route: '/materials/#_4-1-ha-menu-ver',
                  },
                  { // 这里是item
                    title: 'item',
                    route: '/materials/#_4-1-ha-menu-ver',
                  },
                  { // 这里是item
                    title: 'item',
                    route: '/materials/#_4-1-ha-menu-ver',
                  },
                  { // 这里是item
                    title: 'item',
                    route: '/materials/#_4-1-ha-menu-ver',
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
</script>