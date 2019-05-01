<template>
  <button :style="style">{{ title }}</button>
</template>
<script>
export default {
  name: 'dc_button',
  data() {
    return {
      style: this.blueStyle,
      blueStyle: {
        backgroundColor: '#002367'
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true,
      default: "dc_button"
    }
  },
  methods: {
    emitClick() {
      this.$emit('dc_button_click')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

