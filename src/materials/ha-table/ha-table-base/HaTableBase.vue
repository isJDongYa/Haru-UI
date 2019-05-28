<template>
    <ha-rectangle :width="width" :height="height" :coor="coor">
      <ha-scroll :color="['grey', 'grey', 'lightGrey', 'lightGrey']" :toBottom="true" :toTop="true">
        <table ref="table" class="ha-table-base-default ha-table-base" :style="`width:${width};height:${tableHeight}px;${getStyleStr}`">
          <caption :class="['ha-table-base-caption-default', haColor[2], 'ha-table-base-caption']" v-if="datas.head">{{ datas.title }}</caption>
          <tbody> 
            <tr :class="[haColor[0]]">
              <th v-for="(item, index) in datas.head" :key="index">{{ item }}</th>
            </tr>
            <tr :class="[haColor[1]]" v-for="(row, rowIndex) in datas.data" :key="rowIndex">
              <td class="ha-table-base-td-default" v-for="(item, itemIndex) in row" :key="itemIndex">{{ item }}</td>
              <td class="ha-table-base-td-default" v-for="(d, i) in (datas.head.length-row.length)" :key="i+row.length"></td>
            </tr>
          </tbody>
            <tr :class="[haColor[3]]" v-if="datas.foot">
              <td :colspan="datas.head.length">
                <ul>
                  <li v-for="(item, index) in datas.foot" :key="index">{{ item }}</li>
                </ul>
              </td>
            </tr>
        </table>
      </ha-scroll>
    </ha-rectangle>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from '@mixins/whMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'

import Vue from 'vue'
import HaRectangle from '@containers/ha-rectangle'
Vue.use(HaRectangle)

export default {
  name: 'ha-table-base',
  mixins: [coorMixin, whMixin, colorMixin, stylePropMixin],
  data() {
    return {
      table: null
    }
  },
  props: {
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
    tableHeight() {
      if(this.table) {
        return this.table.parentNode.offsetHeight - this.table.firstChild.offsetHeight
      }
    }
  },
  mounted() {
    this.table = this.$refs.table
  }
}
</script>
<style lang="scss" scoped>
  .ha-table-base-default {
    box-sizing: border-box;
    padding:  0px;
    margin: 0px;
    border-collapse: collapse; 
  }
  .ha-table-base-caption-default{
    font-size: 20px;
    font-weight:600;

  }
  .ha-table-base-td-default {
    text-align: center;
  }
</style>

