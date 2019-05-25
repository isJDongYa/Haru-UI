<template>
    <ha-rectangle :width="width" :height="height" :coor="coor">
      <ha-card :color="[haColor[0], 'white', haColor[1]]" width="100%" height="100%" type="Ver"  :hcfHeight="['20%', '75%', '5%']">
        <div slot="header" class="ha-table-advance-header-default ha-table-advance-header">
          222
        </div>
        <ha-scroll :color="['grey', 'grey', 'lightGrey', 'lightGrey']" :toBottom="true" :toTop="true" slot="content">
          <div></div>
        </ha-scroll>
        <!-- <div slot="footer" class="ha-table-advance-footer-default ha-table-advance-footer"> -->
        <ha-button color='yellow' title="确认" height="100%" slot="footer"></ha-button>
        <ha-button color='blue' title="取消" height="100%" slot="footer"></ha-button>
        <ha-button color='red' title="取消" height="100%" slot="footer"></ha-button>
        <ha-button color='grey' title="设置" height="100%" slot="footer"></ha-button>
        <!-- </div> -->
      </ha-card>
    </ha-rectangle>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from '@mixins/whMixin'
import colorMixin from '@mixins/colorMixin'
import '@containers/ha-rectangle'
import stylePropMixin from '@mixins/stylePropMixin'

import '@containers/ha-rectangle'
import '@containers/ha-card'

export default {
  name: 'ha-table-advance',
  mixins: [coorMixin, whMixin, colorMixin, stylePropMixin],
  data() {
    return {
      
    }
  },
  props: {
    datas: {
      type: Array,
      required: false,
      default: () => {
        return [
          'ha-table-base-head',  //thead
          ['列一','列二','列三','列四'], // 表头，
          [0,0,0,0], 
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          ['ha-table-base-foot'],  //脚注
        ]
      }
    }
  },
  computed: {
    tableHeight() {
      if(this.table) {
        return this.table.parentNode.offsetHeight - this.table.firstChild.offsetHeight
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .ha-table-advance-header-default {
    padding:  0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 20px;
    font-weight:600;
  }
  .ha-table-advance-content-default {
    box-sizing: border-box;
    padding:  0px;
    margin: 0px;
    width: 100%;
    height: 100%;
  }
  .ha-table-advance-footer-default{
    // width: 100%;
    // height: 100%;
  }
  .ha-table-advance-td-default {
    text-align: center;
  }
</style>

