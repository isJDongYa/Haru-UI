<template>
  <ha-coordinater :grid="[[1180, 51, 51]]">
    <ha-card :coor="[[[2,2],[5,5]]]" :hcfHeight="['30%','70%', '0%']">
      <span slot="header">这是ha-button</span>
      <ha-button bgColor="yellow" title="button"></ha-button>
    </ha-card>
  </ha-coordinater>
</template>
