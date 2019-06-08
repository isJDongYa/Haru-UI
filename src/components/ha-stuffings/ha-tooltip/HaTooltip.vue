<template>
  <div class="ha-tooltip-default ha-tooltip">
    <slot></slot>
    <div class="ha-tooltip-text-default ha-tooltip-text"></div>
  </div>
</template>
<script>
export default {
  name: 'ha-tooltip',
}
</script>
<style lang="scss" scoped>
.ha-tooltip-default {
  position: relative;
  width: 100%;
  height: 100%;
}

.ha-tooltip-text-default {
  
}
</style>
