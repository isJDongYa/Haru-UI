<template>
  <div class="icon-con-con">
    <div class="icon-con" v-for="(val, i) in iconsSrc">
      <img :src="icons[val]" class="iconImg">
      <div class="icon-name">{{ val }}</div>
    </div>
  </div>
</template>
<script>

import HaIcons from '@icons'

export default {
  data() {
    return {
      icons: {},
      iconsSrc: []
    }
  },
  mounted() {
    this.icons = HaIcons
    this.iconsSrc = Object.keys(HaIcons)
  }
}
</script>
<style scoped>
.iconImg {
  width: 140px;
  height: 130px;
}
.icon-con-con {
  width: 100%;
  height: 2000px;
  margin: 0;
  padding: 0;
}
.icon-con {
  width: 140px;
  height: 160px;
  float: left;
}
.icon-name {
  height: auto;
  width: 140px;
  text-align: center;
  line-height: 30px;
}
</style>