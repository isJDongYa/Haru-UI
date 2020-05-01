# 0. 全局

## 0.1 颜色

- 名为fillColor的prop的可选值

|可选值  |相应的16进制颜色值|可选值  |相应的16进制颜色值|
|-------|:--------:|:--------:|:--------|
|green|#8BC34A|red|#F44336|
|lightGreen|#DCEDC8|lightRed|#FFCDD2|
|darkGreen|#689F38|darkRed|#D32F2F|
|accentGreen|#4CAF50|accentRed|#FF4081|
|blue|#03A9F4|yellow|#FFEB3B|
|lightBlue|#B3E5FC|lightYellow|#FFF9C4|
|darkBlue|#0288D1|darkYellow|#FBC02D|
|accentBlue|#448AFF|accentYellow|#FF9800|

|可选值  |相应的16进制颜色值|可选值  |相应的16进制颜色值|
|-------|:--------:|:--------:|:--------|
|orange|#FF9800|grey|#9E9E9E|
|lightOrange|#FFE0B2|lightGrey|#F5F5F5|
|darkOrange|#F57C00|darkGrey|#616161|
|accentOrange|#FFC107|accentGrey|#607D8B|
|purple|#9C27B0|wihte|#fff|
|lightPurple|#E1BEE7|black|#000|
|darkPurple|#7B1FA2|
|accentPurple|#7C4DFF|

- 名为bgColor的prop的可选值

|可选值  |相应的背景颜色值|相应的字体颜色值|
|-------|:--------:|:--------|
|bgc-green|#8BC34A|#fff|
|bgc-lightGreen|#DCEDC8|#fff|
|bgc-darkGreen|#689F38|#212121|
|bgc-accentGreen|#4CAF50|#fff|
|bgc-blue|#03A9F4|#fff|
|bgc-lightBlue|#B3E5FC|#000|
|bgc-darkBlue|#0288D1|#fff|
|bgc-accentBlue|#448AFF|#fff|
|red|#F44336|#fff|
|lightRed|#FFCDD2|#000|
|darkRed|#D32F2F|#fff|
|accentRed|#FF4081|#fff|
|yellow|#FFEB3B|#000|
|lightYellow|#FFF9C4|#000|
|darkYellow|#FBC02D|#000|
|accentYellow|#FF9800|#fff|
|orange|#FF9800|#000|
|lightOrange|#FFE0B2|#000|
|darkOrange|#F57C00|#fff|
|accentOrange|#FFC107|#fff|
|purple|#9C27B0|#fff|
|lightPurple|#E1BEE7|#000|
|darkPurple|#7B1FA2|#fff|
|accentPurple|#7C4DFF|#fff|
|grey|#9E9E9E|#000|
|lightGrey|#F5F5F5|#000|
|darkGrey|#616161|#fff|
|accentGrey|#607D8B|#fff|
|wihte|#fff|#000|
|black|#000|#fff|


- 这些颜色来自[Material Palette](https://www.materialpalette.com)

- **内部原理**
  
  1. 如果是名为fillColor的prop, 则会设置相应的element的名为color的style为对应的16进制颜色值
  2. 如果是名为bgColor的prop, 则会在相应位置设置该element的类名

- **自定义颜色**

  1. 如果是名为fillColor的prop, 请直接在相应的位置传入自定义的以#开头的16进制颜色值
  2. 如果是名为bgColor的prop, 请在相应的位置传入自定义类名, 并在css文件中对该类名进行背景颜色的设置

## 0.2 图标

### 使用方法：

1. 先导入：

```js
import { HaIcons } from 'haru-ui' // 先导入
```

2. 然后在需要使用图标的地方应用`HaIcons['图标名称']`, 例如在通知组件中：

```js {6}
this.$haru.notify(this, {
  msg: '这是一个haru UI的通知',
  duration: 300000,
  location: 'topRight',
  bgColor: 'bgc-lightBlue',
  icon: HaIcons['address']
})
```

3. 图标名称如下所示：

<doc-result height="800px">
  <ha-icons></ha-icons>
</doc-result>