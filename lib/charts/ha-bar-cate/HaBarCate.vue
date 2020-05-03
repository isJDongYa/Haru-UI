<template>
  <div ref="barChart" class="ha-bar-chart-default ha-bar-chart"></div>
</template>
<script>
import ECharts from 'echarts'

export default {
  name: 'ha-bar-cate',
  props: {
    title: {
      type: String,
      required: false,
      default: 'category-bar-chart'
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
      default: 'shadow'
    },
    hor: {
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
      myBarChart: null
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
          type: 'bar'
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
            magicType: {type: ['stack']},
            saveAsImage: {},
          },
          orien: 'vertical'
        },
        [this.hor?'yAxis':'xAxis']: {
          name: this.xAxis.name,
          data: this.xAxis.data,
          type: 'category',
        },
       [!this.hor?'yAxis':'xAxis']: {
          name: this.yAxis,
          type: 'value'
        },
        series: this.computedSeries
        }
      }
  },
  watch: {
    computedOption() {
      this.myBarChart.setOption(this.computedOption)
    }
  },
  mounted() { 
    this.myBarChart = ECharts.init(this.$refs.barChart, this.theme, {renderer: 'svg'}) 
    this.myBarChart.setOption(this.computedOption)
    this.setChart(this.myBarChart)
  }
}
</script>
<style lang="scss" scoped>
.ha-bar-chart-default {
  width: 100%;
  height: 100%;
}
</style>