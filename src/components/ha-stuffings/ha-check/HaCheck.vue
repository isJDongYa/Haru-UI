<template>
  <div class="ha-check-container-default ha-check-container" :style="getStyleStr">
    <div :class="['ha-check-color-rec-default', 'ha-check-color-rec', {[haColor]: isCheckData}]"  @click="check"></div>
    <div class="ha-check-msg-rec-default ha-check-msg-rec">{{ content }}</div>
  </div>
</template>
<script>
import whMixin from '@mixins/whMixin'
import colorMixin from '@mixins/colorMixin'
import stylePropMixin from '@mixins/stylePropMixin'

export default {
  name: 'ha-check',
  mixins: [colorMixin, whMixin, stylePropMixin],
  props: {
    content: {
      type: String,
      required: false,
      default: 'ha-check'
    },
    isCheck: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      isCheckData: this.isCheck
    }
  },
  methods: {
    check() {
      this.isCheckData = !this.isCheckData
      this.$emit('checked', {isCheck: this.isCheckData, content: this.content})
    }
  }

}
</script>
<style lang="scss" scoped>
.ha-check-container-default {
  display: flex;
  width: auto;
  height: 40px;
  padding-left: 10px;
}
.ha-check-color-rec-default {
  flex: 2;
  cursor: pointer;
  border: 1px solid #ddd;
  max-width: 40px;
  max-height: 40px;
}
.ha-check-msg-rec-default {
  flex: 7;
  padding-left: 10px;
  line-height: 40px;
}
</style>

