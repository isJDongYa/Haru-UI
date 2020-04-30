<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <!-- 第一行 -->
    <ha-rectangle :coor="[[[9,10], [8, 5]]]">
      <ha-button title="点击发送通知" bgColor="bgc-blue" @click="click1"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[20,10], [8, 5]]]">
      <ha-button title="点击发送通知" bgColor="bgc-red" @click="click2"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[31,10], [8, 5]]]">
      <ha-button title="点击发送通知" bgColor="bgc-green" @click="click3"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[9,20], [8, 5]]]">
      <ha-button title="点击发送通知" bgColor="bgc-yellow" @click="click4"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[20,20], [8, 5]]]">
      <ha-button title="点击发送通知" bgColor="bgc-orange" @click="click5"></ha-button>
    </ha-rectangle>
    <ha-rectangle :coor="[[[31,20], [8, 5]]]">
      <ha-button title="点击发送通知" bgColor="bgc-purple" @click="click6"></ha-button>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaButton from '@stuffings/ha-button/HaButton.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaButton.name]: HaButton
  },
  methods: {
    click1() {
      this.$haru.notify(this, {
      msg: '这是一个haru UI的通知', 
      duration: 4000, 
      location: 'topLeft', 
      bgColor: 'bgc-blue',
      icon: require('@icons/信息.svg') 
      })
    },
    click2() {
      this.$haru.notify(this, {
      msg: '这是一个haru UI的通知', 
      duration: 4000, 
      location: 'topMiddle', 
      bgColor: 'bgc-red',
      icon: require('@icons/信息.svg') 
      })
    },
    click3() {
      this.$haru.notify(this, {
      msg: '这是一个haru UI的通知', 
      duration: 4000, 
      location: 'topRight', 
      bgColor: 'bgc-green',
      icon: require('@icons/信息.svg') 
      })
    },
    click4() {
      this.$haru.notify(this, {
      msg: '这是一个haru UI的通知', 
      duration: 4000, 
      location: 'bottomLeft', 
      bgColor: 'bgc-yellow',
      icon: require('@icons/信息.svg') 
      })
    },
    click5() {
      this.$haru.notify(this, {
      msg: '这是一个haru UI的通知', 
      duration: 4000, 
      location: 'bottomMiddle', 
      bgColor: 'bgc-orange',
      icon: require('@icons/信息.svg') 
      })
    },
    click6() {
      this.$haru.notify(this, {
      msg: '这是一个haru UI的通知', 
      duration: 4000, 
      location: 'bottomRight', 
      bgColor: 'bgc-purple',
      icon: require('@icons/信息.svg') 
      })
    },
  }
}
</script>