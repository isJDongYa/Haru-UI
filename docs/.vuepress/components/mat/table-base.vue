<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-table 
      :coor="[[[1,1], [50, 50]]]" 
      :hcHeght="['15%', '85%']"
      :bgColor="['bgc-white', 'bgc-lightGrey', 'bgc-white']" 
      :datas="datas"
    ></ha-table>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/HaCoordinater.vue'
import HaTable from '@materials/ha-table/HaTable.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaTable.name]: HaTable
  },
  data() {
    return {
      datas: {
         head:  ['列一','列二','列三','列四', '列5','列6','列7','列8','列9'], // 表头，
         rows: [ 
           {
             bgColor: 'bgc-lightBlue', // 设置该行颜色
             row: ['这行的颜色是lightBlue',2,3,4,5,6,7,8,9]
           }, 
           {
             bgColor: 'bgc-red',// 设置该行颜色
             row: [{
               data: '黄色格子',
               bgColor: 'bgc-yellow'// 设置该单元格颜色
             },
             2,3,4,'这行的颜色是yellow']
           }, 
           [1,2], 
           [1,2,3,4,5], 
           [{
             data: '蓝色格子',
             bgColor: 'bgc-blue'
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
           [0,0,0,0]
         ]
       }
    }
  }
}
</script>