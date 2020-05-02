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
          name: 'xAxisName',
          data: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7']
        }
      }
    },
    yAxis: {
      type: String,
      required: false,
      default: 'yAxisName'
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
          type: 'line'
        })
      })
      return series
    }
  },
  mounted() { 
    this.myLineChart = ECharts.init(this.$refs.lineChart, this.theme)

    let option = {
    title: {
      text: this.title
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: this.legend
    },
    grid: {
      left: '3%',
      right: '100px',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        restore: {},
        dataView: {readOnly: true},
        magicType: {type: ['line', 'bar', 'stack', 'tiled']},
        saveAsImage: {},
      }
    },
    xAxis: {
      name: this.xAxis.name,
      data: this.xAxis.data,
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      name: this.yAxis,
      type: 'value'
    },
    series: this.computedSeries
  }

    this.myLineChart.setOption(option)
  }
}
</script>
<style lang="scss" scoped>
.ha-line-chart-default {
  width: 100%;
  height: 100%;
}
</style>