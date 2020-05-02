---
sidebar: auto
---

# 图表
 
- 声明：

  1. 这些图表依赖于[**ECharts**](https://www.echartsjs.com)
  2. 理论上支持[**ECharts**](https://www.echartsjs.com)的所有图表
  3. 此组件库的目的在于快速提供常见的图表，免于从零开始的各种配置麻烦
  4. 支持自定义，请参照[自定义图表](./README.md#自定义图表)

- 使用：

  1.如果还没有下载`haru-ui`, 请使用以下语句安装：

  ```js
  npm install haru-ui --save
  ```

  2. 引入：

  - 引入全部图表
  ```js
  import { HaChart } from 'haru-ui'

  Vue.use(HaChart)
  ```
  - 引入单个图表
  ```js
  import { 图表组件名 } from 'haru-ui' // 图表组件名如下表所示

  Vue.use(图表组件名)
  ```

  - 可选图表组件名：

  |图表组件名|图表组件名|图表组件名|
  |----:|:----:|:----|:----|
  |HaLineCate||||

  3. 使用：

  ```html
  <使用容器包裹，例如ha-rectangle> 
    <ha-line-cate 传入prop></ha-line-cate>
  </ha-rectangle>
  ```

  :::warning 注意：
  所有图表组件的默认宽高都为`100%`，使用时请包裹一个具有实际宽高的容器
  :::

## &lt;ha-line-cate>

- 简介：

  简单的类目折线图

- props:
  
  - title

    1. 图表名称
    2. 类型为`String`
    3. 默认值为`'category-line-chart'`

  - theme

    1. 图表的主题
    2. 类型为`String`
    3. 默认为`'shine'`
    4. 使用主题， 参加[**使用主题**](./README.md#使用主题)
  
  - xAxis

    1. x轴的标签
    2. 类型为`Object`
    3. 此对象的默认值及示例如下：

    ```js
    {
      name: 'xAxisName',
      data: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7']
    }
    ```

  - series

    1. 所要展示的折线数组
    2. 类型为`Array`
    3. 默认为`[]`
    4. 这个数组的`length`表示折线的数量
    5. 这个数组的每个成员为一个对象
    6. 此对象表示每条折线
    7. 此对象的示例如下：
   
    ```js
    {
      name: 'x1', //折线的name
      data: [120, 132, 101, 134, 90, 230, 210] //折线的数据
    },
    ```

    8. 该数组默认值为：
    
    ```js
    [
      {
        name: 'legend1',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'legend2',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'legend3',
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ]
    ```
- 实例：
  
代码：
```html
<ha-line-cate></ha-line-cate>
```

结果：
<doc-result>
  <charts-line-cate></charts-line-cate>
</doc-result>

<!-- ## &lt;ha-bar-chart>

- 简介：

  简单的柱状图

- props:

## &lt;ha-pie-chart>

- 简介：

  简单的饼图

- props:

## &lt;ha-scatter-chart>

- 简介：

  简单的散点图

- props: -->

## 使用主题

:::tip 提示
默认主题为`shine`
:::

### 官方主题

[**官方默认主题**](https://www.echartsjs.com/zh/download-theme.html)已下载内置，使用如下：

1. 引入主题文件:
  
```js
import 'haru-ui/charts/theme/主题名'
```
:::tip 提示
主题名`dark`不需要引入，官方默认引入
:::

2. 在图表组件名为`theme`的prop中传入'主题名':
  
```js
<ha-line-cate theme="主题名"></ha-line-cate>
```
:::tip 提示
主题名`shine`不需要设置， 这是默认值
:::

3. 可选主题名如下：

|主题名|主题名|主题名|主题名|主题名|
|----:|:----:|:----:|:----:|:----:|:-----|
|dark|vintage|macarons|infographic|roma|

### 自定义主题

1. [**在这里下载自定义主题**](https://www.echartsjs.com/theme-builder/)
2. 引入主题文件
3. 设置名为`theme`的prop为自定义主题名

## 自定义图表