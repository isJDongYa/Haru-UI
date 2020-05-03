---
sidebar: auto
---

# 图表
 
- 声明：

  1. 这些图表依赖于[**ECharts**](https://www.echartsjs.com)
  2. 理论上支持[**ECharts**](https://www.echartsjs.com)的所有图表
  3. 此组件库的目的在于快速提供常见的图表，免于从零开始的各种配置麻烦
  4. 支持自定义，请参照[自定义图表](./README.md#自定义图表)
  5. 为了更好的性能，这些组件默认使用`svg`渲染

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
  |----:|:----:|:----|
  |[**HaLineCate**](./README.md#ha-line-cate)|[**HaLineTime**](./README.md#ha-line-time)|[**HaBarCate**](./README.md#ha-bar-cate)|
  |[**HaPie**](./README.md#ha-pie)|[**HaScatterReg**](./README.md#ha-scatter-reg)|[**HaCustomChart**](./README.md#ha-custom-chart)|

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
      name: 'xName',
      data: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7']
    }
    ```
  - yAxis

    1. y轴的名字
    2. 类型为`String`
    3. 默认为`'yName'`
    4. y轴在此组件中被设置为数值轴， 不提供修改prop，如有需要， 请参见[**自定义图表**](./README.md#自定义图表)

  - pType

    1. 鼠标放置时的样式
    2. 类型为`String`
    3. 默认值为`'line'`
    4. 可选值有：`'line'`, `'cross'`, `'shadow'`, `'none'`

  - smooth

    1. 设置折线是否平滑
    2. 类型为`Boolean`
    3. 默认为`false`

  - series

    1. 所要展示的折线数组
    2. 类型为`Array`
    3. 这个数组的`length`表示折线的数量
    4. 这个数组的每个成员为一个对象
    5. 此对象表示每条折线
    6. 此对象的示例如下：
   
    ```js
    {
      name: 'legend1', //折线的name
      data: [120, 132, 101, 134, 90, 230, 210] //折线的数据
    },
    ```

    7. 该数组默认值为：
    
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

  - setChart

    1. 用来设置图表实例的函数
    2. 类型为`Function`
    3. 此函数有一个参数，表示此图表的实例对象
    4. 该实例对象参见[**EChart:echartsInstance**](https://www.echartsjs.com/zh/api.html#echartsInstance)
    5. 默认值为：

    ```js
    function(Chart) { // 参数 Chart 为此图表的实例对象
      return false
    } 
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

## &lt;ha-line-time>

- 简介：

  简单的时间折线图

- props:
  
  - title

    1. 图表名称
    2. 类型为`String`
    3. 默认值为`'time-line-chart'`

  - theme

    1. 图表的主题
    2. 类型为`String`
    3. 默认为`'shine'`
    4. 使用主题， 参加[**使用主题**](./README.md#使用主题)
  
  - yAxis

    1. y轴的名字
    2. 类型为`String`
    3. 默认为`'yName'`
    4. y轴在此组件中被设置为数值轴， 不提供修改prop，如有需要， 请参见[**自定义图表**](./README.md#自定义图表)

  - pType

    1. 鼠标放置时的样式
    2. 类型为`String`
    3. 默认值为`'cross'`
    4. 可选值有：`'line'`, `'cross'`, `'shadow'`, `'none'`

  - smooth

    1. 设置折线是否平滑
    2. 类型为`Boolean`
    3. 默认为`false`

  - series

    1. 所要展示的折线数组
    2. 类型为`Array`
    3. 这个数组的`length`表示折线的数量
    4. 这个数组的每个成员为一个对象
    5. 此对象表示每条折线
    6. 此对象的示例如下：
   
    ```js
    {
      name: 'legend1', // 必需，折线的legend
      data: [ //必需，折线的数据
        {
          name: new Date().toString() // 可选， 每个数据的名字
          value: [
            [
              now.getFullYear(),
              now.getMonth(), 
              now.getDate()
            ].join('/'), // 必需，1998/08/31等等时间格式的字符串,用来表示x轴的位置
            1000 // 必需，y轴的数值
          ] 
        }
      ] 
    },
    ```
  - setChart

    1. 用来设置图表实例的函数
    2. 类型为`Function`
    3. 此函数有一个参数，表示此图表的实例对象
    4. 该实例对象参见[**EChart:echartsInstance**](https://www.echartsjs.com/zh/api.html#echartsInstance)
    5. 默认值为：

    ```js
    function(Chart) { // 参数 Chart 为此图表的实例对象
      return false
    } 
    ```

- 实例：
  
代码：
```html
<ha-line-time></ha-line-time>
```

结果：
<doc-result>
  <charts-line-time></charts-line-time>
</doc-result>

## &lt;ha-bar-cate>

- 简介：

  简单的类目柱状图

- props:
  
  - title

    1. 图表名称
    2. 类型为`String`
    3. 默认值为`'category-bar-chart'`

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
      name: 'xName',
      data: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7']
    }
    ```
  - yAxis

    1. y轴的名字
    2. 类型为`String`
    3. 默认为`'yName'`
    4. y轴在此组件中被设置为数值轴， 不提供修改prop，如有需要， 请参见[**自定义图表**](./README.md#自定义图表)

  - pType

    1. 鼠标放置时的样式
    2. 类型为`String`
    3. 默认值为`'shadow'`
    4. 可选值有：`'line'`, `'cross'`, `'shadow'`, `'none'`

  - hor

    1. 设置是否横向显示，即x轴和y轴交换
    2. 类型为`Boolean`
    3. 默认值为`false`

  - series

    1. 所要展示的折线数组
    2. 类型为`Array`
    3. 这个数组的`length`表示折线的数量
    4. 这个数组的每个成员为一个对象
    5. 此对象表示每条折线
    6. 此对象的示例如下：
   
    ```js
    {
      name: 'legend1', //折线的name
      data: [120, 132, 101, 134, 90, 230, 210] //折线的数据
    }
    ```

    7. 该数组默认值为：
    
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
  - setChart

    1. 用来设置图表实例的函数
    2. 类型为`Function`
    3. 此函数有一个参数，表示此图表的实例对象
    4. 该实例对象参见[**EChart:echartsInstance**](https://www.echartsjs.com/zh/api.html#echartsInstance)
    5. 默认值为：

    ```js
    function(Chart) { // 参数 Chart 为此图表的实例对象
      return false
    } 
    ```

- 实例：
  
代码：
```html
<ha-bar-cate :hor="true"></ha-bar-cate>
```

结果：
<doc-result>
  <charts-bar-cate></charts-bar-cate>
</doc-result>

## &lt;ha-pie>

- 简介：

  简单的饼图

- props:
  
  - title

    1. 图表名称
    2. 类型为`String`
    3. 默认值为`'pie-chart'`

  - theme

    1. 图表的主题
    2. 类型为`String`
    3. 默认为`'shine'`
    4. 使用主题， 参加[**使用主题**](./README.md#使用主题)

  - roseType

    1. 设置是否为南丁格尔图（玫瑰图）
    2. 类型为`String`
    3. 默认值为`undefined`
    4. 可选值为`'radius'`或者`'area'`
    5. 当值为`'radius'`时， 同时使用角度和半径长度（即面积）表示每项大小
    6. 当值为`'area'`时， 使用半径长度（即面积）表示每项大小

  - itemColor

    1. 设置每个项目的颜色
    2. 类型为`String`
    3. 值为表示颜色的字符串(常见的颜色名词和16进制的颜色值)
    4. 默认为`undefined`

  - series

    1. 所要展示的数据对象
    2. 类型为`Object`
    3. 此对象的示例及默认值如下：
   
    ```js
    {
      name: 'legend1',
      data: [
          {value: 335, name: 'name1'},
          {value: 110, name: 'name2'},
          {value: 203, name: 'name3'},
          {value: 275, name: 'name4'},
          {value: 400, name: 'name5'}
      ].sort(function (a, b) { return (a.value - b.value) })
    }
    ```

  - setChart

    1. 用来设置图表实例的函数
    2. 类型为`Function`
    3. 此函数有一个参数，表示此图表的实例对象
    4. 该实例对象参见[**EChart:echartsInstance**](https://www.echartsjs.com/zh/api.html#echartsInstance)
    5. 默认值为：

    ```js
    function(Chart) { // 参数 Chart 为此图表的实例对象
      return false
    } 
    ```

- 实例：
  
代码：
```html
<ha-pie theme="dark" roseType="radius" itemColor="red"></ha-pie>
```

结果：
<doc-result>
  <charts-pie></charts-pie>
</doc-result>

## &lt;ha-scatter-reg>

- 简介：

  简单的饼图

- props:
  
  - title

    1. 图表名称
    2. 类型为`String`
    3. 默认值为`'scatter-reg-chart'`

  - theme

    1. 图表的主题
    2. 类型为`String`
    3. 默认为`'shine'`
    4. 使用主题， 参加[**使用主题**](./README.md#使用主题)

  - regMethod

    1. 设置回归方法
    2. 类型为`String`
    3. 默认值为`'polynomial'`
    4. 可选值为`'linear'`,`'polynomial'`,`'logarithmic'`,`'exponential'`

  - order

    1. 设置多项式的阶数
    2. 只有在名为`regMethod`的prop设置为`'polynomial'`才有效
    3. 类型为`Number`
    4. 默认为`1`

  - series

    1. 所要展示的数据对象
    2. 类型为`Object`
    3. 此对象的示例及默认值如下：
   
    ```js
    {
      name: 'legend1',
      data: [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]  
      ]
    }
    ```

  - setChart

    1. 用来设置图表实例的函数
    2. 类型为`Function`
    3. 此函数有一个参数，表示此图表的实例对象
    4. 该实例对象参见[**EChart:echartsInstance**](https://www.echartsjs.com/zh/api.html#echartsInstance)
    5. 默认值为：

    ```js
    function(Chart) { // 参数 Chart 为此图表的实例对象
      return false
    } 
    ```

- 实例：
  
代码：
```html
<ha-scatter-reg :order="2" regMethod="polynomial"></ha-scatter-reg>
```

结果：
<doc-result>
  <charts-scatter-reg></charts-scatter-reg>
</doc-result>

## 自定义图表

- 请使用以下组件进行自定义

### &lt;ha-custom-chart>

- 简介：

  自定义图表所用组件，理论上支持[**ECharts**](https://www.echartsjs.com)的所有图表

- props:

  - theme 

    1. 图表的主题
    2. 类型为`String`
    3. 默认为`'shine'`
    4. 使用主题， 参加[**使用主题**](./README.md#使用主题)

  - option

    1. 图表的配置项
    2. 详情参见[**ECharts:option**](https://www.echartsjs.com/zh/option.html)

  - setChart

    1. 用来设置图表实例的函数
    2. 类型为`Function`
    3. 此函数有一个参数，表示此图表的实例对象
    4. 该实例对象参见[**EChart:echartsInstance**](https://www.echartsjs.com/zh/api.html#echartsInstance)
    5. 默认值为：

    ```js
    function(Chart) { // 参数 Chart 为此图表的实例对象
      return false
    } 
    ```

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
