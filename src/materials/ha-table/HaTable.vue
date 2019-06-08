<template>
    <ha-card  
      :width="width" :height="height" :coor="coor" 
      :bgColor="[haColor[0], 'white', 'white']"  
      type="Ver"  
      :hcfHeight="selfHcfHeight"
      :hover="hover"
      :z="z"
    >
      
      <!-- 表头 -->
      <table class="ha-table-advance-content-table-default ha-table-advance-content-table" v-show="!set" slot="header">
        <tr :class="haColor[0]">
          <td class="ha-table-advance-content-td-default ha-table-advance-content-td" v-for="(item, itemIndex) in headShow" :key="itemIndex">{{ item }}</td>
        </tr>
      </table>

      <!--  内容 -->
      <ha-scroll slot="content" :bgColor="['grey', 'grey']" v-show="!set">
        <table class="ha-table-advance-content-table-default ha-table-advance-content-table">
          <tr 
          :class="[{[haColor[1]]: Array.isArray(row)&&rowIndex%2===0, [haColor[2]]: Array.isArray(row)&&rowIndex%2!==0 }, getColorClass(row.bgColor)]" 
          v-for="(row, rowIndex) in dataShow " 
          :key="rowIndex"
          >
            <td 
            :class="['ha-table-advance-content-td-default', 'ha-table-advance-content-td', getColorClass(item&&item.bgColor)]" 
            v-for="(item, itemIndex) in Array.isArray(row)?row:row.row" :key="itemIndex"
            >
              {{ typeof item === 'object' ? item.data : item }}
            </td>
            <td 
            class="ha-table-advance-content-td-default ha-table-advance-content-td" 
            v-for="(d, i) in (headShow.length-(Array.isArray(row) ? row.length : row.row.length))" 
            :key="i+(Array.isArray(row)?row.length: row.row.length)"
            >
            </td>
          </tr>
        </table>
      </ha-scroll>

      <!-- 控制 -->
      <ha-page :page="Math.floor(datas.rows.length/perPage)+1" slot="footer" v-if="type==='advance'" v-show="!set" @pageChange="gotoPage" @pageError="alert"></ha-page>
      <ha-button bgColor='white' height="100%" :icon="iconSet" slot="footer" v-if="type==='advance'" @click="setTable" v-show="!set"></ha-button>

      <!-- 设置 -->
      <ha-scroll :toBottom='true' :toTop="true" :bgColor="['grey','grey','grey','grey']" slot="content" v-show="set" v-if="type==='advance'">
        <div class="ha-table-advance-set-check-container-default ha-table-advance-set-check-container" v-for="(h, i) in datas.head" :key="i">
          <ha-check bgColor='green' :styleProp="{marginTop: '2px' }" :content="h" :isCheck="headShow.indexOf(h)>-1" @checked="checkHead"></ha-check>
        </div>
      </ha-scroll>
      <ha-back bgColor="white" height="100%" title="请设置需要展示的列" slot="header" @back="backTable" v-show="set" v-if="type==='advance'"></ha-back>
    
    </ha-card>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from '@mixins/whMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'
import hoverMixin from '@mixins/hoverMixin'
import zMixin from '@mixins/zMixin'

import HaCard from '@containers/ha-card/HaCard.vue'
import HaPage from '@stuffings/ha-page/HaPage.vue'
import HaScroll from '@stuffings/ha-scroll/HaScroll.vue'
import HaCheck from '@stuffings/ha-check/HaCheck.vue'
import HaBack from '@stuffings/ha-back/HaBack.vue'

export default {
  name: 'ha-table',
  mixins: [coorMixin, whMixin, colorMixin, stylePropMixin, hoverMixin, zMixin],
  components: {
    'ha-card': HaCard,
    'ha-check': HaCheck,
    'ha-scroll': HaScroll,
    'ha-page': HaPage,
    'ha-back': HaBack
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'base',
      validator: function(val) {
        switch(val) {
          case'base': return true
          case'advance': return true
          default: return false
        }
      }
    },
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
          rows: [
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
  data() {
    return {
      selfHcfHeight: this.type === 'base' ? ['15%', '85%', '0%'] : ['15%', '80%', '5%'],
      colNoShowData: this.colNoShow,
      page: 0,
      set: false,
      nextDisabled: false,
      lastDisabled: true,
      iconSet: require('@icons/设置.svg'),
      iconReturn: require('@icons/返回.svg'),
    }
  },
  computed: {
    dataOfPage() {
      if(this.type === 'advance') {
        const start = this.page*this.perPage
        const end = this.page*this.perPage + this.perPage
        let dataTemp = this.datas.rows.slice(start, end)
        if(dataTemp.length < this.perPage) { // 如果每页的实际行数小于设置的行数
          let arr1 = Array(this.datas.head.length) // 得到每行的单元格数量跟表头单元格数量一致的数组,并赋值为空
          let arr2 = Array(this.perPage - dataTemp.length) // 得到需要补齐的行的数组
          for(let i=0; i<arr2.length; i++) {
            arr2[i] = arr1 
          }
          dataTemp = dataTemp.concat(arr2) // 将每一页的行数补齐
        }
        return  dataTemp
      } else {
        return this.datas.rows
      }
    },
    headShow() {
      if(this.type === 'advance') {
        if(this.colNoShowData.length === 0) {
          return [...this.datas.head]
        } else {
          let headTemp = [...this.datas.head]
          this.colNoShowData.forEach( c => {
            headTemp.splice(headTemp.indexOf(c), 1)
          })
          return headTemp
        }
      } else {
        return this.datas.head
      }
    },
    dataShow() {
      if(this.type === 'advance') {
        let headTemp = [...this.datas.head]
        let dataTemp = this.dataOfPage.map(row => { //拷贝数据
          if(Array.isArray(row)) {
            return row.map( e => {
              return typeof e === 'object' ? { data: e.data, bgColor: e.bgColor } : e
            })
          } else {
            return {
              bgColor: row.bgColor,
              row: row.row.map( e => {
                return typeof e === 'object' ? { data: e.data, bgColor: e.bgColor } : e
            })
            }
          }
        })
        this.colNoShowData.forEach( c => {
            dataTemp.forEach( d => {
              d = Array.isArray(d) ? d : d.row
              d.splice(headTemp.indexOf(c), 1)
            })
            headTemp.splice(headTemp.indexOf(c), 1)
          })
        return dataTemp
      } else {
        return this.dataOfPage
      }
    }
  },
  methods: {
    alert(p) {
      this.$emit('pageError', p)
    },
    gotoPage(p) {
      this.page = p - 1
    },
    setTable() {
      this.selfHcfHeight = ['15%', '85%', '0%']
      this.set = true
    },
    backTable() {
      this.selfHcfHeight = ['15%', '80%', '5%']
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
    width: 10%;
    height: 40px;
  }
  .ha-table-advance-set-check-container {
    display: inline-block;
    width: 48%;
    height: 5%;
    margin: 5px 0;
    margin-left: 2%;
  }
</style>

