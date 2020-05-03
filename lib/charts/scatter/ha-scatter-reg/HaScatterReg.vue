<template>
  <div ref="scatterChart" class="ha-scatter-chart-default ha-scatter-chart"></div>
</template>
<script>
import ECharts from 'echarts'
import ecStat from 'echarts-stat'

export default {
  name: 'ha-scatter-reg',
  props: {
    title: {
      type: String,
      required: false,
      default: 'scatter-reg-chart'
    },
    theme: {
      type: String,
      required: false,
      default: 'shine'
    },
    regMethod: {
      type: String,
      required: false,
      default: 'linear'
    },
    order: {
      type: Number,
      required: false,
      default: 1
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
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
          ]
        }
      }
    }
  },
  data() {
    return {
      myScatterChart: null
    }
  },
  computed: {
    computedSeries() {
      const myRegression = ecStat.regression(this.regMethod, this.series.data,this.order)

      myRegression.points.sort(function(a, b) {
          return a[0] - b[0];
      })

      const ser = []
      const data1 = {
        name: this.series.name,
        data: this.series.data,
        type: 'scatter'
      }

      const data2 = {
        name: 'reg-line',
        type: 'line',
        showSymbol: false,
        data: myRegression.points,
        markPoint: {
          itemStyle: {
            color: 'transparent'
          },
          label: {
            show: true,
            position: 'left',
            formatter: myRegression.expression,
            color: '#333',
            fontSize: 14
          },
          data: [{
              coord: myRegression.points[myRegression.points.length - 1]
          }]
        }
      }

      ser.push(data1)
      ser.push(data2)
      
      return ser
    },
    computedOption() {
      return {
        title: {
          text: this.title,
          left: 'center'
        },
        textStyle: {
          fontFamily: 'Microsoft YaHei'
        },
        xAxis: {},
        yAxis: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          feature: {  
            saveAsImage: {},
          }
        },
        series: this.computedSeries
      }
    }
  },
  watch: {
    computedOption() {
      this.myScatterChart.setOption(this.computedOption)
    }
  },
  mounted() { 
    this.myScatterChart = ECharts.init(this.$refs.scatterChart, this.theme, {renderer: 'svg'})    
    this.myScatterChart.setOption(this.computedOption)
    this.setChart(this.myScatterChart)
  }
}
</script>
<style lang="scss" scoped>
.ha-scatter-chart-default {
  width: 100%;
  height: 100%;
}
</style>