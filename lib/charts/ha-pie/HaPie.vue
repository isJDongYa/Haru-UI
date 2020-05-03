<template>
  <div ref="pieChart" class="ha-pie-chart-default ha-pie-chart"></div>
</template>
<script>
import ECharts from 'echarts'

export default {
  name: 'ha-pie',
  props: {
    title: {
      type: String,
      required: false,
      default: 'pie-chart'
    },
    theme: {
      type: String,
      required: false,
      default: 'shine'
    },
    roseType: {
      type: String,
      required: false,
      default: undefined
    },
    itemColor: {
      type: String,
      required: false,
      default: undefined
    },
    setChart: {
      type: Function,
      required: false,
      default: function(Chart) {
        return false
      } 
    },
    series: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: 'legend1',
          data: [
              {value: 335, name: 'name1'},
              {value: 110, name: 'name2'},
              {value: 203, name: 'name3'},
              {value: 275, name: 'name4'},
              {value: 400, name: 'name5'}
          ].sort(function (a, b) { return (a.value - b.value) })
        }
      }
    }
  },
  data() {
    return {
      myPieChart: null
    }
  },
  computed: {
    computedSeries() {
      const series = []
      const data = {
        name: this.series.name,
        data: this.series.data,
        type: 'pie',
        roseType: this.roseType,
      }
      if(this.itemColor) {
        data.itemStyle = {
          color: 'red',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      series.push(data)
    
      return series
    },
    computedOption() {
      const option = {
        title: {
          text: this.title,
          left: 'center'
        },
        textStyle: {
          fontFamily: 'Microsoft YaHei'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          feature: {  
            saveAsImage: {},
          }
        },
        series: this.computedSeries
        }

      if(this.itemColor) {
        option.visualMap = {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        }
      }

      return option
    }
  },
  watch: {
    computedOption() {
      this.myPieChart.setOption(this.computedOption)
    }
  },
  mounted() { 
    this.myPieChart = ECharts.init(this.$refs.pieChart, this.theme, {renderer: 'svg'}) 
    this.myPieChart.setOption(this.computedOption)
    this.setChart(this.myPieChart)
  }
}
</script>
<style lang="scss" scoped>
.ha-pie-chart-default {
  width: 100%;
  height: 100%;
}
</style>