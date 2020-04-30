<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[21,20], [8, 5]]]">
      <ha-button 
        title="点击打开mask" 
        bgColor="bgc-blue" 
        @click="changeShow"
      ></ha-button>
    </ha-rectangle>

    <!-- ha-mask 组件 -->
    <ha-mask 
      :show.sync="show" 
      position="absolute" 
      :clickHide="false" 
      :duration="0"
    >
      <ha-coordinater :grid="[[0, 50, 50]]">
        <ha-rectangle :coor="[[[21,20], [8, 5]]]">
          <ha-button 
            title="点击关闭mask" 
            bgColor="bgc-yellow" 
            @click="changeShow"
          ></ha-button>
        </ha-rectangle>
      </ha-coordinater>
    </ha-mask>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaButton from '@stuffings/ha-button/HaButton.vue'
import HaMask from '@others/ha-mask/HaMask.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaButton.name]: HaButton,
    [HaMask.name]: HaMask
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    changeShow() {
      this.show = !this.show
    }
  }
}
</script>