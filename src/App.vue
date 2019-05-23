<template>
  <div id="mainApp">
    <ha-scroll>
      <ha-rectangle height='3000px' width='3000px'>
        <ha-coordinater :grid="[[1180, 50, 50], [580, 25, 50]]">
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
            <ha-menu-vertical :color="['primary', 'lightPrimary']" :menuList="menuList" :styleProp="styleProp"  :singleOpen="false" :coor="[[[1,1], [6,50]], [[1,1], [4,50]]]">
              <ha-avatar :url="imgSrc" color='darkPrimary' width="100px" height="100px"></ha-avatar>
            </ha-menu-vertical>
            <ha-menu-horizontal :color="['primary', 'lightPrimary']" :menuList="menuList" :styleProp="styleProp"  :singleOpen="true" :coor="[[[15,1], [50,4]], [[8,1], [50, 3]]]">
              <!-- <ha-avatar :url="imgSrc" color='darkPrimary' width="100px" height="100px"></ha-avatar> -->
            </ha-menu-horizontal>
            <!-- <ha-button title="primary"  :coor="[[[33,19], [3,2]]]"></ha-button> -->
            <ha-button title="darkPrimary" color='darkPrimary' :coor="[[[55,19], [3,2]], [[2,32], [3, 2]]]" :styleProp="btnStyle" hover="shadow"></ha-button>
          <!-- <ha-avatar :url="imgSrc" color='darkPrimary' :coor="[[[36,19], [2,3]], [[2,32], [2, 3]]]"></ha-avatar> -->
          <!-- <ha-button title="lightPrimary" color='lightPrimary' :coor="[[[39,19], [3,2]]]"></ha-button>
          <ha-button title="lightPrimary" color='accentPrimary' :coor="[[[42,19], [3,2]]]"></ha-button>
          <ha-button color='red' title="red" :coor="[[[33,22], [3,2]]]"></ha-button>
          <ha-button color='lightRed' title="lightRed" :coor="[[[36,22], [3,2]]]"></ha-button>
          <ha-button color='darkRed' title="darkRed" :coor="[[[39,22], [3,2]]]"></ha-button>
          <ha-button color='accentRed' title="accentRed" :coor="[[[42,22], [3,2]]]"></ha-button>
          <ha-button color='grey' title="grey" :coor="[[[33,25], [3,2]]]"></ha-button>
          <ha-button color='lightGrey' title="lightGrey" :coor="[[[36,25], [3,2]]]"></ha-button>
          <ha-button color='darkGrey' title="darkGrey" :coor="[[[39,25], [3,2]]]"></ha-button>
          <ha-button color='accentGrey' title="accentGrey" :coor="[[[42,25], [3,2]]]"></ha-button>
          <ha-button color='yellow' title="yellow" :coor="[[[33,28], [3,2]]]"></ha-button>
          <ha-button color='blue' title="blue" :coor="[[[33,31], [3,2]]]"></ha-button>
          <ha-button color='white' title="white" :coor="[[[33,34], [3,2]]]" :styleProp="btnStyle"></ha-button>
          <ha-button color='black' title="black" :coor="[[[36,34], [3,2]]]"></ha-button> -->
          <!-- <ha-table-base :color="['accentPrimary', 'lightPrimary', 'accentPrimary', 'lightPrimary']" :datas="datas" :coor="[[[12,11], [25,20]], [[6,11], [18, 20]]]"></ha-table-base> -->
          <!-- <ha-card :color="['grey', 'white', 'lightGrey']" :coor="[[[10,18], [10,18]]]" :styleProp="btnStyle" hover="shadow" :hcfHeight="['20%', '70%', '10%']">
            <span slot="header">卡片</span>
            <ha-button color='blue' title="确认" slot="footer" width="60px" height="28px"></ha-button>
            <ha-button color='darkRed' title="取消" slot="footer" width="60px" height="28px"></ha-button>
          </ha-card> -->
        </ha-coordinater>
      </ha-rectangle>
    </ha-scroll>
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
        'border': 'solid 0px #ddd',
        'border-radius': '4px'
      },
      styleProp: {
        margin: '0px 0 0px 0px',
        borderRadius: '4px'
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
