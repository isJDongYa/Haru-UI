<template>
  <div ref="lineChart" class="ha-line-chart-default ha-line-chart"></div>
</template>
<script>
import ECharts from 'echarts'

export default {
  name: 'ha-line-cate',
  props: {
    title: {
      type: String,
      required: false,
      default: 'category-line-chart'
    },
    theme: {
      type: String,
      required: false,
      default: 'shine'
    },
    xAxis: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: 'xName',
          data: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7']
        }
      }
    },
    yAxis: {
      type: String,
      required: false,
      default: 'yName'
    },
    pType: {
      type: String,
      required: false,
      default: 'line'
    },
    smooth: {
      type: Boolean,
      required: false,
      default: false
    },
    setChart: {
      type: Function,
      required: false,
      default: function(Chart) {
        return false
      } 
    },
    series: {
      type: Array,
      required: false,
      default: () => {
        return [
          {
            name: 'legend1',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'legend2',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'legend3',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
    }
  },
  data() {
    return {
      myLineChart: null
    }
  },
  computed: {
    legend() {
      const l = []
      this.series.forEach(s => {
        l.push(s.name)
      })
      return l
    },
    computedSeries() {
      const series = []
      this.series.forEach( s => {
        series.push({
          name: s.name,
          data: s.data,
          smooth: this.smooth,
          type: 'line'
        })
      })
      return series
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: this.pType
          }
        },
        legend: {
          data: this.legend,
          bottom: 3,
        },
        toolbox: {
          feature: {
            restore: {},
            magicType: {type: ['line', 'bar', 'stack']},
            saveAsImage: {},
          },
          orient: 'vertical',
        },
        xAxis: {
          name: this.xAxis.name,
          data: this.xAxis.data,
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          name: this.yAxis,
          type: 'value'
        },
        series: this.computedSeries
        }
      }
  },
  watch: {
    computedOption() {
      this.myLineChart.setOption(this.computedOption)
    }
  },
  mounted() { 
    this.myLineChart = ECharts.init(this.$refs.lineChart, this.theme, {renderer: 'svg'}) 
    this.myLineChart.setOption(this.computedOption)
    this.setChart(this.myLineChart)
  }
}
</script>
<style lang="scss" scoped>
.ha-line-chart-default {
  width: 100%;
  height: 100%;
}
</style>