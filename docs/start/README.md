# Haru UI

_**一个实验性质的组件库**_

![头图](../assets/imgs/Haru-UI.png)

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
npm install haru-ui
```

- 全局

```js
import Haru from 'haru-ui'

Vue.use(Haru)
```

- 单个组件

> 尚未完善所以不提供单组件引入, 如有需要请自己拷贝源码.

## 注意

> 本组件库未经严格测试, 只作为为实验"坐标系统"的概念在前端中的应用所产生的组件库,如果要使用请自行测试.同时有bug的话也欢迎提交issues

---

## TODO

1. 完善颜色管理
2. 提供单组件引入
3. 完善文档