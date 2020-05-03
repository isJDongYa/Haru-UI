<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[1, 1],[50, 50]]]">
      <ha-line-cate :order="2" regMethod="polynomial"></ha-line-cate>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: 'Customized Pie',
          left: 'center'
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
              colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 274, name: '联盟广告'},
              {value: 235, name: '视频广告'},
              {value: 400, name: '搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            
            itemStyle: {
              color: '#c23531',
            }
          }
        ]
      }
    }
  }
}
</script>
