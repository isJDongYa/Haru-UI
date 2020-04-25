# 0. 全局

## 0.1 颜色

- 简介：

  - 名为fontColor的prop所代表的颜色值

  ```js
  wihte: '#ffffff',
  black: '#000000',
  green: '#8BC34A',
  lightGreen: '#DCEDC8',
  darkGreen: '#689F38',
  accentGreen: '#4CAF50',
  blue: '#03A9F4',
  lightBlue: '#B3E5FC',
  darkBlue: '#0288D1',
  accentBlue: '#448AFF',
  red: '#F44336',
  lightRed: '#FFCDD2',
  darkRed: '#D32F2F',
  accentRed: '#FF4081',
  yellow: '#FFEB3B',
  lightYellow: '#FFF9C4',
  darkYellow: '#FBC02D',
  accentYellow: '#FF9800',
  orange: '#FF9800',
  lightOrange: '#FFE0B2',
  darkOrange: '#F57C00',
  accentOrange: '#FFC107',
  purple: '#9C27B0',
  lightPurple: '#E1BEE7',
  darkPurple: '#7B1FA2',
  accentPurple: '#7C4DFF',
  grey: '#9E9E9E',
  lightGrey: '#F5F5F5',
  darkGrey: '#616161',
  accentGrey: '#607D8B'
  ```
  
  - bgColor所代表的类名
  
  ```js
  wihte: 'ha-color-white',
  black: 'ha-color-black',
  green: 'ha-color-green',
  lightGreen: 'ha-color-lightGreen',
  darkGreen: 'ha-color-darkGreen',
  accentGreen: 'ha-color-accentGreen',
  blue: 'ha-color-blue',
  lightBlue: 'ha-color-lightBlue',
  darkBlue: 'ha-color-darkBlue',
  accentBlue: 'ha-color-accentBlue',
  red: 'ha-color-red',
  lightRed: 'ha-color-lightRed',
  darkRed: 'ha-color-darkRed',
  accentRed: 'ha-color-accentRed',
  yellow: 'ha-color-yellow',
  lightYellow: 'ha-color-lightYellow',
  darkYellow: 'ha-color-darkYellow',
  accentYellow: 'ha-color-accentYellow',
  orange: 'ha-color-orange',
  lightOrange: 'ha-color-lightOrange',
  darkOrange: 'ha-color-darkOrange',
  accentOrange: 'ha-color-accentOrange',
  purple: 'ha-color-purple',
  lightPurple: 'ha-color-lightPurple',
  darkPurple: 'ha-color-darkPurple',
  accentPurple: 'ha-color-accentPurple',
  grey: 'ha-color-grey',
  lightGrey: 'ha-color-lightGrey',
  darkGrey: 'ha-color-darkGrey',
  accentGrey: 'ha-color-accentGrey'
  ```

  - 这些颜色来自[Material Palette](www.materialpalette.com)

- 内部原理

  > 如果是名为bgColor的prop, 则会在相应位置设置该elememt的类名
  > 如果是名为fontColor的prop, 则会设置相应的elememt的名为color的style为对应的16进制颜色值

- 自定义颜色

  > 如果是名为bgColor的prop, 请在相应的位置传入自定义类名, 并在css文件中对该类名进行背景颜色的设置
  > 如果是名为fontColor的prop, 请直接在相应的位置传入自定义的以#开头的16进制颜色值

## 0.2 图标

- TODO 