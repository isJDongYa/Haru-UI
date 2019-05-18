<template>
  <div id="mainApp">
    <ha-rectangle height='99%' width='100%'>
      <ha-coordinater :grid="[50, 50]">
        <!-- 
        <ha-button title="primary"></ha-button>
        <ha-button color='darkPrimary' title="darkPrimary" :coor="[10,10]"></ha-button>
        <ha-button color='lightPrimary' title="lightPrimary" :coor="[70,20]"></ha-button>
        <ha-button color='accentPrimary' title="accentPrimary" :coor="[60,50]"></ha-button>
         -->
        <!-- <ha-button title="primary"></ha-button>
          <ha-button color='darkPrimary' title="darkPrimary" :coor="[2,2]"></ha-button>
          <ha-button color='lightPrimary' title="lightPrimary" :coor="[10,10]"></ha-button>
          <ha-button color='accentPrimary' title="accentPrimary" :coor="[60,50]"></ha-button> -->
        <!-- <ha-menu-vertical :color="['primary', 'lightPrimary']" width="220px" height="800px"  :menuList="menuList" :styleProp="styleProp"  :singleOpen="false" :coor="[[1,1], [5,50]]">
          <img :src='imgSrc' style="width:50%;height:100%;">
        </ha-menu-vertical> -->
        <ha-menu-horizontal :color="['primary', 'lightPrimary']" :menuList="menuList" :styleProp="styleProp"  :singleOpen="false" :coor="[[1,1], [5,50]]">
          <img :src='imgSrc' style="width:100%;height:100%;">
        </ha-menu-horizontal>
        <ha-button title="primary"  :coor="[[33,19], [3,2]]"></ha-button>
        <ha-button title="darkPrimary" color='darkPrimary' :coor="[[36,19], [3,2]]"></ha-button>
        <ha-button title="lightPrimary" color='lightPrimary' :coor="[[39,19], [3,2]]"></ha-button>
        <ha-button title="lightPrimary" color='accentPrimary' :coor="[[42,19], [3,2]]"></ha-button>
        <ha-button color='red' title="red" :coor="[[33,22], [3,2]]"></ha-button>
        <ha-button color='lightRed' title="lightRed" :coor="[[36,22], [3,2]]"></ha-button>
        <ha-button color='darkRed' title="darkRed" :coor="[[39,22], [3,2]]"></ha-button>
        <ha-button color='accentRed' title="accentRed" :coor="[[42,22], [3,2]]"></ha-button>
        <ha-button color='grey' title="grey" :coor="[[33,25], [3,2]]"></ha-button>
        <ha-button color='lightGrey' title="lightGrey" :coor="[[36,25], [3,2]]"></ha-button>
        <ha-button color='darkGrey' title="darkGrey" :coor="[[39,25], [3,2]]"></ha-button>
        <ha-button color='accentGrey' title="accentGrey" :coor="[[42,25], [3,2]]"></ha-button>
        <ha-button color='yellow' title="yellow" :coor="[[33,28], [3,2]]"></ha-button>
        <ha-button color='blue' title="blue" :coor="[[33,31], [3,2]]"></ha-button>
        <ha-button color='white' title="white" :coor="[[33,34], [3,2]]" :styleProp="btnStyle"></ha-button>
        <ha-button color='black' title="black" :coor="[[36,34], [3,2]]"></ha-button>
        <ha-table-base :color="['accentRed', 'lightRed', 'accentRed', 'lightGrey']" :datas="datas" :coor="[[10,18], [15,20]]"></ha-table-base>
        <!-- <ha-card :color="['grey', 'white', 'lightGrey']" :coor="[10,18]" width="380px" height="320px">
          <span slot="head">卡片</span>
          <ha-button color='blue' title="确认" slot="foot" width="60px" height="28px"></ha-button>
          <ha-button color='darkRed' title="取消" slot="foot" width="60px" height="28px"></ha-button>
        </ha-card> -->
      </ha-coordinater>
    </ha-rectangle>
    
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      imgSrc: require('@imgs/scauLogo.jpg'),
      datas: [
          '表格标题',  //thead
          ['列一','列二','列三','列四', '列5'], // 表头，
          [1,2,3,4,5], 
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          ['脚注',0,0,0,1,2],  //脚注
      ],
      btnStyle: {
        'border': 'solid 1px #ddd',
        'border-radius': '50%'
      },
      styleProp: {
        margin: '0 0 2px 2px',
        borderRadius: '0px'
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
          }
        ]
      },
    }
  }
}
</script>
<style lang="scss" scoped>
 #mainApp {
   width: 100%;
   height: 100%;
 }
</style>
