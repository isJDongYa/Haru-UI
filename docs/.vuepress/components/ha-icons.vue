<template>
  <ha-scroll :bgColor="['bgc-grey', 'bgc-white']">
    <div class="icon-con-con">
      <div class="icon-con" v-for="(val, i) in iconsSrc">
        <img :src="icons[val]" class="iconImg">
        <div class="icon-name">{{ val }}</div>
      </div>
    </div>
  </ha-scroll>
</template>
<script>
import HaScroll from '@others/ha-scroll/HaScroll.vue'

import HaIcons from '@icons'

export default {
  components: {
    [HaScroll.name]: HaScroll
  },
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
  width: 100px;
  height: 100px;
}
.icon-con-con {
  width: 100%;
  height: 2000px;
  margin: 0;
  padding: 0;
}
.icon-con {
  width: 100px;
  height: 130px;
  float: left;
}
.icon-name {
  height: auto;
  width: 100px;
  text-align: center;
  line-height: 30px;
}
</style>