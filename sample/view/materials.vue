<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <!-- <ha-card :coor="[[[2,2],[15,10]]]" :hcfHeight="['30%','70%', '0%']">
      <span slot="header">这是ha-input</span>
      <ha-input type="text" name="input" v-model="inputVal"  :checkFun="checkFun" lable="输入框:" bgColor="black"></ha-input>
    </ha-card> -->
    <ha-table 
      :coor="[[[1,1], [50, 50]]]" 
      :bgColor="['bgc-blue', 'bgc-white', 'bgc-grey']" 
      type="base"
      :datas="datas"
    ></ha-table>
  </ha-coordinater>
</template>
<script>
export default {
  data() {
    return {
      inputVal: '',
      datas: {
        head:  ['列一','列二','列三','列四', '列5','列6','列7','列8','列9'], // 表头，
        rows: [
          {
            bgColor: 'blue',
            row: [1,'这是ha-table的一个单元格',3,4,5,6,7,8,9]
          }, 
          {
            bgColor: 'red',
            row: [{
              data: 1,
              bgColor: 'yellow'
            },2,3,4,5]
          }, 
          [1,2,3,4,5], 
          [1,2,3,4,5], 
          [{
            data: 0,
            bgColor: 'blue'
          },0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]
        ]
      },
      
      menuList: {
        menuTitle: false,
        route: '/home',
        menuList: [
          {
            groupId: '1',
            menuTitle: 'Start',
            menuList: [
              {
                groupId: '2',
                menuTitle: 'Color',
                menuList: [
                  {
                    title: 'Primary',
                    route: '/home/color/primary'
                  },
                  {
                    title: 'lightPrimary',
                    route: '/home/color/lightprimary'
                  },
                  {
                    title: 'darkPrimary',
                    route: '/home/color/darkprimary'
                  },
                  {
                    title: 'accentPrimary',
                    route: '/home/color/accentprimary'
                  }
                ]
              },
              {
                title: 'Coordinater',
                route: '/home/coordinater'
              },
              {
                groupId: '3',
                menuTitle: 'Components',
                menuList: [
                  {
                    groupId: '4',
                    menuTitle: 'containers',
                    menuList: [
                      {
                        title: 'Rectangle',
                        route: '/hone/components/containers/rectangle'
                      },
                    ] 
                  },
                  {
                    groupId: '5',
                    menuTitle: 'Stuffings',
                    menuList: [
                      {
                        title: 'Button',
                        route: '/hone/components/stuffings/button'
                      },
                    ] 
                  }
                ] 
              }
            ]
          },
          {
            groupId: '11',
            menuTitle: 'groupTitle',
            menuList: [
              {
                groupId: '22',
                menuTitle: 'g2',
                menuList: [
                  {
                    title: 'list1',
                    route: '/list1',
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
              },
              {
                groupId: '33',
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
          },
          {
            groupId: '111',
            menuTitle: 'groupTitle',
            menuList: [
              {
                groupId: '222',
                menuTitle: 'g2',
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
              },
              {
                groupId: '333',
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
          },
          {
            groupId: '112',
            menuTitle: 'groupTitle',
          },
          {
            groupId: '1122',
            menuTitle: 'groupTitle',
          },
        ]
      },
    }
  },
  methods: {
    checkFun(val) {
      if(!val) {
        return {
          msg: '输入值不能为空',
          bgColor: 'red'
        }
      } else {
        return {
          msg: '输入值不为空,正确',
          bgColor: 'green'
        }
      }
    },
  }
}
</script>
