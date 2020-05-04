<template>
  <ha-scroll :toBottom="true" :toTop="true" :bgColor="['bgc-green', 'bgc-red', 'bgc-blue', 'bgc-yellow']">
      <ha-rectangle height='100%' width='100%'>
        <ha-coordinater :grid="[[1180, 50, 50], [580, 25, 50]]">
          <ha-rectangle :coor="[[[4,5], [42,42]], [[3,3], [19, 44]]]" hover="shadow">
            <ha-coordinater :grid="[[1180, 50, 50]]">
              <ha-rectangle :coor="[[[10,10], [5, 15]]]" hover="shadow">
                <ha-tooltip bgColor="bgc-red" location="bottom" tip="这是一个H" :wait="1000">
                  <ha-letter letter="H" :capital="true" fillColor="blue" :haShow="1180" :glowTube="false"></ha-letter>
                </ha-tooltip>
              </ha-rectangle>
              <ha-rectangle :coor="[[[14,10], [5, 15]]]">
                <ha-detailbox>
                  <ha-letter letter="a" :capital="false" fillColor="yellow"></ha-letter>
                </ha-detailbox>
                <ha-card width="200px" height="200px" :bgColor="['bgc-red','bgc-lightBlue']" data-detail-box="detailBox" letter="a" fillColor="blue">
                  这是一个ha-detailBox
                </ha-card>
              </ha-rectangle>
              <ha-rectangle :coor="[[[18,10], [5, 15]]]">
                <ha-letter letter="r" :capital="false" fillColor="green"></ha-letter>
              </ha-rectangle>
              <ha-rectangle :coor="[[[22,10], [5, 15]]]">
                <ha-letter letter="u" :capital="false" fillColor="red"></ha-letter>
              </ha-rectangle>
              <ha-rectangle :coor="[[[28,10], [5, 15]]]">
                <ha-letter letter="U" :capital="true" fillColor="orange"></ha-letter>
              </ha-rectangle>
              <ha-rectangle :coor="[[[32,10], [5, 15]]]">
                <ha-letter letter="I" :capital="true" fillColor="purple"></ha-letter>
              </ha-rectangle>
              <ha-rectangle :coor="[[[22,28], [3, 2]]]" hover="shadow">
                <ha-button bgColor="bgc-blue" title="开始" @click="click"></ha-button>
              </ha-rectangle>
            </ha-coordinater>
          </ha-rectangle>
        </ha-coordinater>
      </ha-rectangle>
  </ha-scroll> 
</template>
<script>

import HaIcons from '@icons'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    click() {
      this.$haru.notify(this, {
        msg: '这是一个haru UI的通知',
        duration: 3000,
        location: 'topRight',
        bgColor: 'bgc-lightBlue',
        icon: HaIcons['address']
      })
      this.$router.push('/haru-ui')
    }
  }
}
</script>
