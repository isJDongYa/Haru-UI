<template>
    <ha-card  
      :width="$attrs['width']" :height="$attrs['height']" 
      :coor="$attrs['coor']"  :hover="$attrs['hover']" 
      :z="$attrs['z']" :haShow="$attrs['haShow']"
      :radius="$attrs['radius']" :border="$attrs['border']"
      :padding="$attrs['padding']"
      :hcfHeight="[...hcHeight, '0%']"
    >
      
      <!-- 表头 -->
      <div slot="header" :class="[bgColorClass[0], 'ha-table-head-default', 'ha-table-head']">
        <div
          class="ha-table-head-td-default ha-table-head-td" 
          v-for="(item, itemIndex) in datas.head" :key="itemIndex" ref="headItem"
        >
          {{ item }}
        </div>
      </div> 

       <!-- 内容 -->
      <ha-scroll slot="content" :bgColor="['bgc-grey', 'bgc-grey']">
        <div class="ha-table-content-default ha-table-content">
          <div 
          :class="[
            {
              [bgColorClass[1]]: Array.isArray(row)&&rowIndex%2===0, 
              [bgColorClass[2]]: Array.isArray(row)&&rowIndex%2!==0, 
              [getBgColorClass(typeof row ==='object'&&row.bgColor)]:typeof row ==='object'&&row.bgColor
            },
            'ha-table-tr-default ha-table-tr'
          ]" 
          v-for="(row, rowIndex) in datas.rows " 
          :key="rowIndex"
          >
            <div 
              :class="
                [
                  'ha-table-td-default', 
                  'ha-table-td', 
                  {
                    [getBgColorClass(typeof item ==='object'&&item.bgColor)]:typeof item ==='object'&&item.bgColor
                  } 
                ]" 
              v-for="(item, itemIndex) in Array.isArray(row)?row:row.row" 
              :key="itemIndex"
            >
              {{ typeof item === 'object' ? item.data : item }}
            </div>

            <!-- 补充空格子 -->
            <div 
              class="ha-table-td-default ha-table-td" 
              v-for="(d, i) in (datas.head.length-(Array.isArray(row) ? row.length : row.row.length))" 
              :key="i+(Array.isArray(row)?row.length: row.row.length)"
            >
            </div>
          </div>
        </div>
      </ha-scroll>
    </ha-card>
</template>
<script>
import HaCard from '@containers/ha-card/HaCard.vue'
import HaScroll from '@others/ha-scroll/HaScroll.vue'

import colorMixin from '@mixins/colorMixin.js'

export default {
  name: 'ha-table',
  mixins: [colorMixin],
  components: {
    [HaCard.name]: HaCard,
    [HaScroll.name]: HaScroll,
  },
  props: {
    hcHeight: {
      type: Array,
      required: false,
      default: () => {
        return ['15%', '85%']
      }
    },
    datas: {
      type: Object,
      required: false,
      default: () => {
        return {
          head: ['列一','列二','列三','列四'], // 表头，
          rows: [
            [0,0,0,0], 
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
          ]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ha-table-head-default {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #ddd;
}
.ha-table-head-td-default {
  flex: 1;
  display: flex ;
  justify-content: center;
  align-items: center;
  height: 100%;
  &:nth-child(n+2) {
    border-left: solid 1px #ddd;
  }
}
.ha-table-content-default {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.ha-table-td-default {
  flex: 1;
  display: flex ;
  justify-content: center;
  align-items: center;
  &:nth-child(n+2) {
    border-left: solid 1px #ddd;
  }
}
.ha-table-tr-default {
  display: flex;
  width: 100%;
  &:nth-last-child(n+2) {
    border-bottom: solid 1px #ddd;
  }
}
</style>

