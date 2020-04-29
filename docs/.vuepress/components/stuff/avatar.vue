<template>
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-rectangle :coor="[[[5,16], [40, 16]]]">
      <ha-avatar url="/haru-ui.png" alt="一张图片"></ha-avatar>
    </ha-rectangle>
  </ha-coordinater>
</template>
<script>
import HaCoordinater from '@coordinater/HaCoordinater.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaAvatar from '@stuffings/ha-avatar/HaAvatar.vue'

export default {
  components: {
    [HaCoordinater.name]: HaCoordinater,
    [HaRectangle.name]: HaRectangle,
    [HaAvatar.name]: HaAvatar
  }
}
</script>