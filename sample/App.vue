<template>
  <div id="mainApp">
    <router-view></router-view>
    <!-- <ha-scroll :toBottom="true" :toTop="true" :color="['green', 'red', 'blue', 'yellow']">
      <ha-rectangle height='100%' width='100%'>
        <ha-coordinater :grid="[[1180, 50, 50], [580, 25, 50]]"> -->
          <!-- <ha-file :coor="[[[6,8], [30,30]], [[5,3], [15, 40]]]" color="blue" :styleProp="{ border: 'solid 1px #ddd' }"></ha-file> -->
            <!-- <ha-menu-vertical  :bgColor="['purple', 'grey']" :menuList="menuList"  :singleOpen="true" :coor="[[[1,10], [5,42]], [[1,6], [4,45]]]"></ha-menu-vertical> -->
            <!-- <ha-menu-horizontal :z="100" :bgColor="['black', 'grey']" :menuList="menuList" :singleOpen="true" :coor="[[[1,1], [49,3]], [[1,1], [24, 3]]]"></ha-menu-horizontal>  -->
            <!-- <ha-rectangle :coor="[[[4,5], [42,42]], [[3,3], [19, 44]]]" hover="shadow" :styleProp="styleProp">
              <ha-coordinater :grid="[[1180, 50, 50]]">
                <ha-rectangle :coor="[[[10,10], [5, 15]]]" hover="shadow">
                  <ha-tooltip bgColor="red" location="bottom" tip="这是一个H这是一个H这是一个H这是一个H这是一个H这是一个H这是一个H这是一个H">
                    <ha-letter letter="H" :capital="true" fontColor="blue" :haShow="1180"></ha-letter>
                  </ha-tooltip>
                </ha-rectangle>
                <ha-rectangle :coor="[[[14,10], [5, 15]]]">
                  <ha-letter letter="a" :capital="false" fontColor="yellow"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[18,10], [5, 15]]]">
                  <ha-letter letter="r" :capital="false" fontColor="green"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[22,10], [5, 15]]]">
                  <ha-letter letter="u" :capital="false" fontColor="red"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[28,10], [5, 15]]]">
                  <ha-letter letter="U" :capital="true" fontColor="orange"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[32,10], [5, 15]]]">
                  <ha-letter letter="I" :capital="true" fontColor="purple"></ha-letter>
                </ha-rectangle>
                <ha-rectangle :coor="[[[22,28], [3, 2]]]" hover="shadow">
                  <ha-button bgColor="blue" title="开始" @click="$router.push('/haru/home')"></ha-button>
                </ha-rectangle>
               
              </ha-coordinater>
            </ha-rectangle> -->
            <!-- <ha-button title="打开mask" :coor="[[[33,19], [3,2]]]" @click="openMaskClick"></ha-button>-->
            <!-- <ha-button title="通知" :coor="[[[33,22], [2,2]]]" @click="notify"></ha-button>  -->
          
    
          <!-- <ha-table :haShow="1180" type="advance" @pageError="show=true" :bgColor="['black', 'green', 'lightGrey']" :colNoShow="['列9', '列三']" :datas="datas" :coor="[[[10,11], [20,25]], [[6,11], [18, 20]]]" :perPage="8"></ha-table> -->
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
          
 
        <!-- </ha-coordinater>
      </ha-rectangle>
    </ha-scroll>
    <ha-mask :show.sync="show" :duration="3000" :clickHide="true"> -->
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
        <!-- 
      </ha-coordinater> -->
    <!-- </ha-mask> -->
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    
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
  data() {
    return {
      timer: null,
      num: 0,
      
      i: 0,
      show: false,
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
