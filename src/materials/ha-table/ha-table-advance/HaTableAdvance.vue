<template>
    <ha-card  
      :width="width" :height="height" :coor="coor" 
      :color="color"  
      type="Ver"  
      :hcfHeight="selfHcfHeight"
      hover="shadow"
    >
      <div slot="header" class="ha-table-advance-header-default ha-table-advance-header" v-show="!set">
        {{ datas.title }}
      </div>
      <table class="ha-table-advance-content-table-default ha-table-advance-content-table" slot="content" v-show="!set">
        <tr>
           <td class="ha-table-advance-content-td-default ha-table-advance-content-td" v-for="(item, itemIndex) in headShow" :key="itemIndex">{{ item }}</td>
        </tr>
        <tr v-for="(row, rowIndex) in dataShow" :key="rowIndex">
          <td class="ha-table-advance-content-td-default ha-table-advance-content-td" v-for="(item, itemIndex) in row" :key="itemIndex">{{ item }}</td>
          <td class="ha-table-advance-content-td-default ha-table-advance-content-td" v-for="(d, i) in (headShow.length-row.length)" :key="i+row.length"></td>
        </tr>
      </table>
      <ha-button color='blue' title="上一页" :disabled="lastDisabled" height="100%" slot="footer"  @click="lastPage" v-show="!set"></ha-button>
      <ha-button color='red' title="下一页" :disabled="nextDisabled" height="100%" slot="footer" @click="nextPage" v-show="!set"></ha-button>
      <ha-button color='grey' height="100%" :icon="iconSet" slot="footer" @click="setTable" v-show="!set"></ha-button>


      <ha-card type="Hor" :lmrWidth="['0%', '70%', '30%']" class="ha-table-advance-set-default ha-table-advance-set" slot="content" v-show="set">
        <ha-scroll :toBottom='true' :toTop="true">
          <ha-check color='primary' :styleProp="{marginTop: '2px' }" :content="h" v-for="(h, i) in datas.head" :key="i" :isCheck="headShow.indexOf(h)>-1" @checked="checkHead"></ha-check>
        </ha-scroll>
        <ha-button :color="haColor[3]" height="100%" slot="right" :icon="iconReturn" @click="backTable" v-show="set"></ha-button>
      </ha-card>
      
    </ha-card>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from '@mixins/whMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'

import HaCard from '@containers/ha-card/HaCard.vue'
import HaScroll from '@containers/ha-scroll/HaScroll.vue'
import HaCheck from '@stuffings/ha-check/HaCheck.vue'

export default {
  name: 'ha-table-advance',
  mixins: [coorMixin, whMixin, colorMixin, stylePropMixin],
  components: {
    'ha-card': HaCard,
    'ha-check': HaCheck,
    'ha-scroll': HaScroll
  },
  data() {
    return {
      selfHcfHeight: ['10%', '85%', '5%'],
      colNoShowData: this.colNoShow,
      page: 0,
      set: false,
      nextDisabled: false,
      lastDisabled: true,
      iconSet: require('@icons/设置.svg'),
      iconReturn: require('@icons/返回.svg'),
    }
  },
  mounted() {console.log(this.haColor[3])},
  props: {
    perPage: {
      type: Number,
      required: false,
      default: 10
    },
    colNoShow: {
      type: Array,
      required: false,
      default: []
    },
    datas: {
      type: Object,
      required: false,
      default: () => {
        return {
          title: 'ha-table-base-head',  //thead
          head: ['列一','列二','列三','列四'], // 表头，
          data: [
            [0,0,0,0], 
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
          ],
          foot:['ha-table-base-foot'],  //脚注
        }
      }
    }
  },
  computed: {
    dataOfPage() {
      const start = this.page*this.perPage
      const end = this.page*this.perPage + this.perPage
      let dataTemp = this.datas.data.slice(start, end)
      if(dataTemp.length < this.perPage) {
         let arr1 = new Array(this.datas.head.length)
         let arr2 = new Array(this.perPage - dataTemp.length)
         for(let i=0; i<arr2.length; i++) {
           arr2[i] = arr1
         }
        dataTemp = dataTemp.concat(arr2)
      }
      return  dataTemp
    },
    headShow() {
      if(this.colNoShow.length === 0) return this.datas.head
      else {
        let headTemp = [...this.datas.head]
        this.colNoShowData.forEach( c => {
          headTemp.splice(headTemp.indexOf(c), 1)
        })
        return headTemp
      }
    },
    dataShow() {
      let headTemp = [...this.datas.head]
      let dataTemp = this.dataOfPage.map(ds => {
        return ds.map( d => d)
      })
      this.colNoShowData.forEach( c => {
          dataTemp.forEach( d => {
            d.splice(headTemp.indexOf(c), 1)
          })
          headTemp.splice(headTemp.indexOf(c), 1)
        })
      return dataTemp
    },

  },
  methods: {
    lastPage() {
      if(this.page !== 0) {
        this.page--
        this.nextDisabled = false
      }
      if(this.page === 0) {
        this.lastDisabled = true
      }
    },
    nextPage() {
      if((this.page+1)*this.perPage <= this.datas.data.length) {
        this.page++
        this.lastDisabled = false
      } 
      if((this.page+1)*this.perPage >= this.datas.data.length) {
        this.nextDisabled = true
      }
    },
    setTable() {
      this.selfHcfHeight = ['0%', '100%', '0%']
      this.set = true
    },
    backTable() {
      this.selfHcfHeight = ['10%', '85%', '5%']
      this.set = false
    },
    checkHead(checkObj) {
      if(checkObj.isCheck) {
        this.colNoShowData.splice(this.colNoShowData.indexOf(checkObj.content), 1)
      } else {
        this.colNoShowData.push(checkObj.content)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .ha-table-advance-header-default {
    font-size: 20px;
    font-weight:600;
  }
  .ha-table-advance-content-table-default {
    box-sizing: border-box;
    padding:  0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    border-collapse: collapse;     
  }

  .ha-table-advance-content-td-default {
    text-align: center;
    box-sizing: content-box;
    // border: solid 1px #aaa
  }
  
  .ha-table-advance-set-default{
    // box-sizing: border-box;
    // width: 100%;
    // height: 100%;
    // border: 1px solid #ddd;
  }
  .ha-table-advance-set-check-container {
    display: inline-block;
    width: 50%;
    // max-width: 200px;
    height: auto;
    margin: 0 25%;
  }
</style>

