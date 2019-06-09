<template>
  <div class="ha-check-container-default ha-check-container">
    <div :class="['ha-check-color-rec-default', 'ha-check-color-rec', {[haColor]: isCheckData}]"  @click="check"></div>
    <div class="ha-check-msg-rec-default ha-check-msg-rec">
      <div class="ha-check-msg-default ha-check-msg">{{ content }}</div>
    </div>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'

export default {
  name: 'ha-check',
  mixins: [colorMixin],
  props: {
    content: {
      type: String,
      required: false,
      default: ''
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
  watch: {
    isCheck() {
      this.isCheckData = this.isCheck
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
  align-items: center;
  width: auto;
  height: 100%;
  width: 100%;
}
.ha-check-color-rec-default {
  cursor: pointer;
  border: 1px solid #ddd;
  height: 100%;
  width: 20%;
  max-width: 40px;
  max-height: 40px;
}
.ha-check-msg-rec-default {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 80%;
  padding-left: 10px;
  line-height: 40px;
}

.ha-check-msg-default {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

