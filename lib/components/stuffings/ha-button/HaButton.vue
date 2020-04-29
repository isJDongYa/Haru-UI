<template>
  <div class="ha-btn-container-default ha-btn-container">
    <button :class="[bgColorClass, 'ha-btn-default', 'ha-btn']" @click="click" :style="{ fontSize }">
      <img class="ha-btn-icon-default ha-btn-icon" :src="icon" v-if="icon">
      <span v-if="title">{{ title }}</span>
    </button>
    <div class="ha-btn-disabled-default ha-btn-disabled" v-show="disabled"></div>
  </div>
</template>
<script>
import colorMixin from '@mixins/colorMixin'

export default {
  name: 'ha-button',
  mixins: [colorMixin],
  props: {
   icon: {
      type: String,
      required: false,
      default: undefined
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    fontSize: {
      type: String,
      required: false,
      default: undefined
    }
  },
  methods: {
    click() {
      if(!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .ha-btn-container-default {
    width: 100%;
    height: 100%;
  }
  .ha-btn-default {
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    border-style: none;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  .ha-btn-disabled-default {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(170, 170, 170, 0.7);
    top: 0;
    left: 0;
  }
  
  .ha-btn-icon-default {
    display: inline-block;
    width: 20%;
    height: 60%;
  }
</style>

