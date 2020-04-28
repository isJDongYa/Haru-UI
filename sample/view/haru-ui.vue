<template>
  <ha-coordinater :grid="[[1180, 51, 51]]">
    <ha-menu-horizontal :z="100" :bgColor="['bgc-blue', 'bgc-blue']" :menuList="menuList" :singleOpen="true" :coor="[[[1,1], [50,3]], [[1,1], [24, 3]]]"></ha-menu-horizontal>
    <ha-rectangle :coor="[[[4,8],[43, 39]]]" :styleProp="{ border: 'solid 1px #ddd' }">
      <router-view></router-view>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
export default {
  data() {
    return {
      menuList: {
        title: false,
        menuList: [
          {
            title: '坐标器',
            route: '/haru-ui'
          },
          {
            title: '容器',
            route: '/haru-ui/containers'
          },
          {
            title: '填充物',
            route: '/haru-ui/stuffings'
          },
          {
            title: '物料',
            route: '/haru-ui/materials'
          },
          {
            title: '其他',
            route: '/haru-ui/others'
          },
        ]
      }
    }
  }
}
</script>