<template>
  <ha-coordinater :grid="[[1180, 51, 51]]">
    <ha-rectangle :coor="[[[8,10], [8,8]]]" hover="shadow" :styleProp="{ border: 'solid 1px #ddd' }">
      这段文字由ha-rectangle包裹
    </ha-rectangle>

    <ha-card :bgColor="['blue', 'blue', 'blue']" :coor="[[[20,10], [15,20]]]">
      <p>这段文字由ha-card包裹</p>
    </ha-card>
  </ha-coordinater>
</template>
