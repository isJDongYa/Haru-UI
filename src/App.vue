<template>
  <div id="mainApp">
    <ha-scroll :toBottom="true" :toTop="true" :color="['primary', 'red', 'blue', 'yellow']">
      <ha-rectangle height='100%' width='100%'>
        <ha-coordinater :grid="[[1180, 50, 50], [580, 25, 50]]">
          <!-- <ha-file :coor="[[[6,8], [30,30]], [[5,3], [15, 40]]]" color="blue" :styleProp="{ border: 'solid 1px #ddd' }"></ha-file> -->
            <!-- <ha-menu-vertical  :bgColor="['black', 'grey']" :menuList="menuList"  :singleOpen="true" :coor="[[[1,10], [5,42]], [[1,6], [4,45]]]"></ha-menu-vertical> -->
            <!-- <ha-menu-horizontal :z="100" :fontColor="['blue', 'accentBlue']" :color="['', '']" :menuList="menuList" :singleOpen="true" :coor="[[[6,1], [44,3]], [[6,1], [19, 3]]]">
             
            </ha-menu-horizontal>  -->
            <ha-rectangle :coor="[[[4,4], [42,42]], [[3,3], [19, 44]]]" hover="shadow" :styleProp="styleProp">
              <ha-coordinater :grid="[[1180, 50, 50]]">
                <ha-rectangle :coor="[[[10,10], [5, 15]]]" hover="shadow">
                  <ha-tooltip bgColor="red" location="bottom" tip="这是一个H这是一个H这是一个H这是一个H这是一个H这是一个H这是一个H这是一个H">
                    <ha-letter letter="H" :capital="true" fontColor="blue"></ha-letter>
                  </ha-tooltip>
                </ha-rectangle>
                <ha-rectangle :coor="[[[14,10], [5, 15]]]"  hover="shadow">
                  <ha-letter letter="a" :capital="false" fontColor="yellow"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[18,10], [5, 15]]]"  hover="shadow">
                  <ha-letter letter="r" :capital="false" fontColor="green"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[22,10], [5, 15]]]">
                  <ha-letter letter="u" :capital="false" fontColor="red"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[28,10], [5, 15]]]">
                  <ha-letter letter="U" :capital="true" fontColor="black"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[32,10], [5, 15]]]">
                  <ha-letter letter="I" :capital="true" fontColor="accentBlue"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[22,28], [3, 2]]]" hover="shadow">
                  <ha-button bgColor="green"  title="开始" @click="notify"></ha-button>
                </ha-rectangle>
                <!-- <ha-rectangle :coor="[[[3,2], [5,9]]]" hover="shadow">
                  <ha-avatar :url="imgSrc" color='darkPrimary'></ha-avatar>
                </ha-rectangle> -->
               
              </ha-coordinater>
            </ha-rectangle>
            <!-- <ha-button title="打开mask" :coor="[[[33,19], [3,2]]]" @click="openMaskClick"></ha-button>-->
            <!-- <ha-button title="通知" :coor="[[[33,22], [2,2]]]" @click="notify"></ha-button>  -->
          
          <!-- <ha-table-base :bgColor="['black', 'white', 'lightGrey', 'lightGrey']" :datas="datas" :coor="[[[10,11], [20,25]], [[6,11], [18, 20]]]"></ha-table-base> -->
          <!-- <ha-table type="advance" @pageError="show=true" :bgColor="['black', 'green', 'lightGrey']" :colNoShow="['列9', '列三']" :datas="datas" :coor="[[[10,11], [20,25]], [[6,11], [18, 20]]]" :perPage="8"></ha-table> -->
          <!-- <ha-card :bgColor="['blue', 'blue', 'black']" :coor="[[[10,18], [10,18]]]" :styleProp="btnStyle" hover="shadow" :lmrWidth="['20%', '60%', '20%']" type="Hor">
            <span slot="left">卡片</span>
            <div slot="right" style="width:100%;height:100%">
              <ha-card :bgColor="['blue', 'blue', 'blue']" width="100%" height="100%" type="Ver"  :hcfHeight="['20%', '80%', '0%']">
                <div slot="header" style="width:100%;height:100%">
                  <ha-button bgColor='green' title="确认" width="100%" height="30px" @click="notify" ></ha-button>
                  <ha-button bgColor='darkRed' title="取消" width="100%" height="30px"></ha-button>
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
export default {
  name: 'app',
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
        bgColor: 'lightBlue',
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
        ],
        foot: ['脚注',0,0,0,1,2],  //脚注
      },
      btnStyle: {
        'border': 'solid 0px #ddd',
        'border-radius': '4px'
      },
      styleProp: {
        border: 'solid 1px #ddd',
        margin: '0px 0 0px 0px',
        borderRadius: '20px'
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
