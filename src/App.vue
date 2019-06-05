<template>
  <div id="mainApp">
    <ha-scroll :toBottom="true" :toTop="true" :color="['primary', 'red', 'blue', 'yellow']">
      <ha-rectangle height='100%' width='100%'>
        <ha-coordinater :grid="[[1180, 50, 50], [580, 25, 50]]">
            <!-- <ha-avatar :url="imgSrc" color='darkPrimary' :coor="[[[1,1], [5,9]], [[1,1], [4,5]]]"></ha-avatar>
            <ha-menu-vertical :fontColor="['blue', 'accentBlue']" :color="['white', 'white']" :menuList="menuList" :styleProp="styleProp"  :singleOpen="true" :coor="[[[1,10 ], [5,42]], [[1,6], [4,45]]]">
              <ha-avatar :url="imgSrc" color='darkPrimary' width="100px" height="100px"></ha-avatar>
            </ha-menu-vertical>
            <ha-menu-horizontal :z="100" :fontColor="['blue', 'accentBlue']" :color="['', '']" :menuList="menuList" :styleProp="styleProp"  :singleOpen="true" :coor="[[[6,1], [44,3]], [[5,6], [44, 3]]]">
              <ha-avatar :url="imgSrc" color='darkPrimary' width="30%" height="70%"></ha-avatar>
            </ha-menu-horizontal> -->
            <ha-rectangle :coor="[[[6,8], [5,8]], [[5,3], [5, 15]]]">
              <ha-number :num="0" color="green"></ha-number>
            </ha-rectangle>
            <!-- <ha-rectangle :coor="[[[12,8], [5,8]], [[10,3], [5, 15]]]">
              <ha-number :num="num" color="green"></ha-number>
            </ha-rectangle>
            <ha-rectangle :coor="[[[18,8], [5,8]], [[15,3], [5, 15]]]">
              <ha-number :num="2" color="red" :dot="true"></ha-number>
            </ha-rectangle>
            <ha-rectangle :coor="[[[6,17], [5,8]], [[5,19], [5, 15]]]">
              <ha-number :num="3" color="yellow" :dot="true"></ha-number>
            </ha-rectangle>
            <ha-rectangle :coor="[[[12,17], [5,8]], [[10,19], [5, 15]]]">
              <ha-number :num="4" color="yellow"></ha-number>
            </ha-rectangle>
            <ha-rectangle :coor="[[[18,17], [5,8]], [[15,19], [5, 15]]]">
              <ha-letter letter="G" :capital="true" color="lightRed"></ha-letter>
            </ha-rectangle> -->
            <!-- <ha-button title="打开mask" :coor="[[[33,19], [3,2]]]" @click="openMaskClick"></ha-button>-->
            <!-- <ha-button title="通知" :coor="[[[33,22], [2,2]]]" @click="notify"></ha-button>  -->
            <!-- <ha-button title="darkPrimary" color='darkPrimary' :coor="[[[55,19], [3,2]], [[2,32], [3, 2]]]" :styleProp="btnStyle" hover="shadow"></ha-button> -->
            
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
          <!-- <ha-table-base :color="['accentPrimary', 'lightPrimary', 'accentPrimary', 'lightPrimary']" :datas="datas" :coor="[[[10,11], [20,25]], [[6,11], [18, 20]]]"></ha-table-base> -->
          <!-- <ha-table-advance @pageError="show=true" :color="['primary', 'white', 'lightGrey']" :colNoShow="['列一', '列三']" :datas="datas" :coor="[[[10,11], [20,30]], [[6,11], [18, 20]]]" :perPage="10"></ha-table-advance> -->
          <!-- <ha-card :color="['blue', 'blue', 'black']" :coor="[[[10,18], [10,18]]]" :styleProp="btnStyle" hover="shadow" :lmrWidth="['20%', '60%', '20%']" type="Hor">
            <span slot="left">卡片</span>
            <div slot="right" style="width:100%;height:100%">
              <ha-card :color="['blue', 'blue', 'blue']" width="100%" height="100%" type="Ver"  :hcfHeight="['20%', '80%', '0%']">
                <div slot="header" style="width:100%;height:100%">
                  <ha-button color='primary' title="确认" width="100%" height="30px" @click="notify" ></ha-button>
                  <ha-button color='darkRed' title="取消" width="100%" height="30px"></ha-button>
                </div>
              </ha-card>
            </div>
            <span slot="header">卡片</span>
            <div style="text-indent:2em;">
              <p>这里是ha-card的content区域,所有的元素都会被居中</p>
              <p>这里是ha-card的content区域,所有的元素都会被居中</p>
              <p>这里是ha-card的content区域,所有的元素都会被居中</p>
              <p>这里是ha-card的content区域,所有的元素都会被居中</p>
            </div>
            <ha-button color='blue' title="确认" slot="footer" width="60px" height="28px"></ha-button>
            <ha-button color='darkRed' title="取消" slot="footer" width="60px" height="28px"></ha-button>
          </ha-card> -->
          <!-- <ha-input type="text" name="input" v-model="inputVal"  :checkFun="checkFun" lable="输入框:" color="black" :coor="[[[10,18], [8,3]]]"></ha-input> -->
 
        </ha-coordinater>
      </ha-rectangle>
    </ha-scroll>
    <ha-mask :show.sync="show" :duration="3000" :clickHide="true">
      <!-- <ha-coordinater :grid="[[1180, 50, 50]]"> -->
        <!-- <ha-card :color="['lightRed', 'lightRed', 'lightRed']" :coor="[[[20,18], [10,16]]]" :styleProp="btnStyle" hover="shadow" :hcfHeight="['20%', '70%', '10%']">
          <span slot="header">弹窗</span>
          <ha-mask position="absolute" :show.sync="show" :duration="2000">
            <ha-button color='darkRed' title="取消" width="60px" height="28px" @click="cancelClick"></ha-button>
          </ha-mask>
          <ha-avatar :url="imgSrc" color='darkPrimary' width="100%" height="100%"></ha-avatar>
          <ha-button color='blue' title="确认" slot="footer" width="60px" height="28px" @click="openMaskClick"></ha-button>
          <ha-button color='darkRed' title="取消" slot="footer" width="60px" height="28px" @click="cancelClick"></ha-button>
        </ha-card> -->
        <!-- <ha-button title="关闭mask" color="red" :coor="[[[25,19], [3,2]]]" @click="cancelClick"></ha-button> -->
        <!-- <ha-table-base :color="['accentPrimary', 'lightPrimary', 'accentPrimary', 'lightPrimary']" :datas="datas" :coor="[[[5,11], [38,50]], [[6,11], [18, 20]]]"></ha-table-base>
      </ha-coordinater> -->
    </ha-mask>
  </div>
</template>
<script>
import { setInterval, clearInterval } from 'timers';
export default {
  name: 'app',
  methods: {
    checkFun(val) {
      if(!val) {
        return {
          msg: '输入值不能为空',
          color: 'red'
        }
      } else {
        return {
          msg: '输入值不为空,正确',
          color: 'green'
        }
      }
    },
    cancelClick() {
      this.show = false
    },
    openMaskClick() {
      this.show = true
    },
    notify() {
      this.$haru.notify(this, {
        msg: '这是一个haru UI的通知'+(++this.i),
        duration: 3000,
        location: 'topRight',
        color: 'lightBlue',
        icon: require('@icons/信息.svg')
      })
    },
    numCounter() {
      this.timer = setInterval(() => {
        this.num++
        if(this.num === 9) clearInterval(this.timer)
      }, 1000)
    }
  },
  mounted() {
    this.numCounter()
  },
  watch: {
    
  },
  data() {
    return {
      timer: null,
      num: 0,
      inputVal: '',
      i: 0,
      show: false,
      imgSrc: require('@imgs/scauLogo.jpg'),
      datas: {
        title: '表格标题',  //thead
        head:  ['列一','列二','列三','列四', '列5','列6','列7','列8','列9'], // 表头，
        data: [
          [1,2,3,4,5,6,7,8,9], 
          [1,2,3,4,5], 
          [1,2,3,4,5], 
          [1,2,3,4,5], 
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
          [0,0,0,0],
          [0,0,0,0]
        ],
        foot: ['脚注',0,0,0,1,2],  //脚注
      },
      btnStyle: {
        'border': 'solid 0px #ddd',
        'border-radius': '4px'
      },
      styleProp: {
        borderRight: 'solid 1px #ddd',
        margin: '0px 0 0px 0px',
        borderRadius: '0px'
      },
      
      menuList: {
        menuTitle: false,
        route: '/home',
        menuList: [
          {
            groupId: '1',
            menuTitle: 'Start',
            icon: require('@icons/菜单.svg'),
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
                    icon: require('@icons/首页.svg')
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
  }
}
</script>
<style lang="scss" scoped>
 #mainApp {
   width: 100%;
   height: 100%;
 }
</style>
