<template>
  <ha-coordinater :grid="[[1180, 50, 50]]">
    
    <ha-card :bgColor="['blue', 'blue', 'blue']" :coor="[[[15,10], [15,20]]]">
      <p>这个card容器的定位由包裹它的坐标器提供的坐标系决定</p>
    </ha-card>
  </ha-coordinater>
</template>

