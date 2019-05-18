<template>
    <ha-rectangle :width="width" :height="correctHeight(26, '+')" :coor="coor">
      <table class="ha-table-base-default ha-table-base" :style="`width:${width};height:${height};${getStyleStr}`">
        <caption :class="['ha-table-base-caption-default', haColor[2], 'ha-table-base-caption']">{{ datas[0] }}</caption>
        <tbody> 
          <tr :class="[haColor[0]]">
            <th v-for="(item, index) in datas[1]" :key="index">{{ item }}</th>
          </tr>
          <tr :class="[haColor[1]]" v-for="(data, index) in datas" :key="index" v-show="index&&index!==1&&index!==datas.length-1">
            <td class="ha-table-base-td-default" v-for="(item, index) in data" :key="index">{{ item }}</td>
          </tr>
        </tbody>
          <tr :class="[haColor[3]]">
            <td :colspan="datas[2].length">
              <ul>
                <li v-for="(item, index) in datas[datas.length-1]" :key="index">{{ item }}</li>
              </ul>
            </td>
          </tr>
      </table>
    </ha-rectangle>
</template>
<script>
import coorMixin from '@mixins/coorMixin'
import whMixin from '@mixins/whMixin'
import colorMixin from '@mixins/colorMixin'
import '@containers/ha-rectangle'
import stylePropMixin from '@mixins/stylePropMixin'

export default {
  name: 'ha-table-base',
  mixins: [coorMixin, whMixin, colorMixin, stylePropMixin],
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
    grid() {
      return [this.data[1].length, this.data[2].length]
    }
  }
}
</script>
<style lang="scss" scoped>
  .ha-table-base-default {
    box-sizing: border-box;
    padding:  0px;
    margin: 0px;
    color: #212121;
  }
  .ha-table-base-caption-default{
    font-size: 20px;
    font-weight:600;
  }
  .ha-table-base-td-default {
    text-align: center;
  }
</style>

