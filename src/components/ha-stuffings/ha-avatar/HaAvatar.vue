<template>
    <div :class="['ha-avatar-default', haColor, 'ha-avatar']">
      <img :src="url" :alt="alt" class="ha-avatar-img-default ha-avatar-img">
    </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'

export default {
  name: 'ha-button',
  mixins: [colorMixin],
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
    alt: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .ha-avatar-default, .ha-avatar-img-default {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
