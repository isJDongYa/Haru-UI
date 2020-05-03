<template>
  <div ref="customChart" class="ha-custom-chart-default ha-custom-chart"></div>
</template>
<script>
import ECharts from 'echarts'

export default {
  name: 'ha-custom-chart',
  props: {
    theme: {
      type: String,
      required: false,
      default: 'shine'
    },
    option: {
      type: Object,
      required: true
    },
    setChart: {
      type: Function,
      required: false,
      default: function(Chart) {
        return false
      } 
    }
  },
  data() {
    return {
      myCustomChart: null
    }
  },
  watch: {
    option() {
      this.myCustomChart.setOption(this.option)
    }
  },
  mounted() { 
    this.myCustomChart = ECharts.init(this.$refs.customChart, this.theme, {renderer: 'svg'}) 
    this.myCustomChart.setOption(this.option)

    this.setChart(this.myCustomChart)
  }
}
</script>
<style lang="scss" scoped>
.ha-custom-chart-default {
  width: 100%;
  height: 100%;
}
</style>