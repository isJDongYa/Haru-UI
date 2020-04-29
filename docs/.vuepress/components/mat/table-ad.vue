<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-table 
      :coor="[[[1,1], [50, 50]]]" 
      :bgColor="['bgc-blue', 'bgc-white', 'bgc-grey']" 
      type="advance"
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
             bgColor: 'blue', // 设置该行颜色,如果名为`type`的prop值为'base', 此项无效
             row: [1,'这是ha-table的一个单元格',3,4,5,6,7,8,9]
           }, 
           {
             bgColor: 'red',// 设置该行颜色,如果名为`type`的prop值为base, 此项r无效
             row: [{
               data: 1,
               bgColor: 'yellow'// 设置该单元格颜色,如果名为`type`的prop值为base, 此项无效
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
         ]
       }
    }
  }
}
</script>