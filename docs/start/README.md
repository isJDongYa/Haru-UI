# Haru UI

_**一个实验性质的组件库**_

![头图](../assets/imgs/haru-ui.png)

## 简介及特点

- 名为“Haru UI”的组件库
- 实现了类似"坐标系统"的坐标器
- 使用grid和flex布局实现自适应
- 颜色可高度自定义
- 物料 = 容器 + 填充物
- 应用 = 坐标系 + 容器 + 填充物 = 坐标系 + 物料

---

## 安装

```js
npm install haru-ui --save
```

- **全局**

```js
import Haru from 'haru-ui'

Vue.use(Haru)
```

:::warning 注意
全局引入并不会引入HaIcons, 要使用，请参照[HaIcons](../main/README.md#_0-2-图标)
:::

- **单组件引入**

```js
import 'haru-ui/style' //导入样式表

import { HaCoordinater } from 'haru-ui' // 导入各个组件，可选组件名如下表所示

Vue.use(HaCoordinater)
```
|组件名|组件名|组件名|
|-------:|:-------:|:-------|
|[HaCoordinater](../coordinater/README.md#_1-1-ha-coordinater)|[HaRectangle](../containers/README.md#_2-1-ha-rectangle)|[HaCard](../containers/README.md#_2-2-ha-card)|
|[HaButton](../stuffings/README.md#_3-1-ha-button)|[HaAvatar](../stuffings/README.md#_3-4-ha-avatar)|[HaCheck](../stuffings/README.md#_3-7-ha-check)|
|[HaNumber](../stuffings/README.md#_3-2-ha-number)|[HaLetter](../stuffings/README.md#_3-3-ha-letter)|[HaBack](../stuffings/README.md#_3-5-ha-back)|
|[HaPage](../stuffings/README.md#_3-6-ha-page)|[HaTable](../materials/README.md#_4-4-ha-table)|[HaMenuVertical](../materials/README.md#_4-1-ha-menu-vertical)|
|[HaMenuHorizontal](../materials/README.md#_4-2-ha-menu-horizontal)|[HaInput](../materials/README.md#_4-3-ha-input)|[HaNotify](../others/README.md#_5-5-haru-notify)|
|[HaTooltip](../others/README.md#_5-3-ha-tooltip)|[HaScroll](../others/README.md#_5-2-ha-scroll)|[HaMask](../others/README.md#_5-1-ha-mask)|
|[HaDetailBox](../others/README.md#_5-4-ha-detailbox)|

- **特别的，还有:** 
  1. [**HaIcons**](../main/README.md#_0-2-图标)
  2. [**HaCharts**](../charts/README.md)

::: warning 注意

本组件库未经严格测试, 只作为为实验"坐标系统"的概念在前端中的应用所产生的组件库,如果要使用请自行测试.同时有bug的话也欢迎提交[issues](https://github.com/HydrousDelta/Haru-UI/issues)

:::
---
