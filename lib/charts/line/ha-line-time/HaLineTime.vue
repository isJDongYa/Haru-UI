<template>
  <div ref="lineChart" class="ha-line-chart-default ha-line-chart"></div>
</template>
<script>
import ECharts from 'echarts'

export default {
  name: 'ha-line-time',
  props: {
    title: {
      type: String,
      required: false,
      default: 'time-line-chart'
    },
    theme: {
      type: String,
      required: false,
      default: 'shine'
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
        function randomData() { //产生随机数据
          const data = []
          let randomNum = Math.random() * 1000
          let oneDay = 24 * 3600 * 1000
          let now = +new Date(1998, 7, 31)
          for(let i=0;i<100;i++) {
            now = new Date(+now + oneDay);
            randomNum = randomNum + Math.random() * 21 - 10;
            data.push({
              value: [
                [now.getFullYear(), now.getMonth(), now.getDate()].join('/'),
                Math.round(randomNum)
              ]
            })
          }
          return data
        }       
        return [
          {
            name: 'legend1',
            data: randomData()
          },
          {
            name: 'legend2',
            data: randomData()
          }
        ]
      }
    }
  },
  data() {
    return {
      myLineChart: null,
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
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          
        })
      })
      return series
    },
    computedOption() {
      return {
        title: {
          text: this.title
        },
        textStyle: {
          fontFamily: 'Microsoft YaHei'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false
          }
        },
        legend: {
          data: this.legend
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          }
        },
        xAxis: {
          name: 't',
          type: 'time',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
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
  }
}
</script>
<style lang="scss" scoped>
.ha-line-chart-default {
  width: 100%;
  height: 100%;
}
</style>