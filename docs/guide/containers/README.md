# 2.容器

- 为填充物提供布局和定位

## 2.1 &lt;ha-rectangle>

- 简介：

  提供基本的矩形容器

- 示例

```html
<这里一般用ha-coordinater组件包裹>
  <ha-reactangle :coor = [一个三维数组]>
    ...
    这里一般放置‘填充物’组件
    ...
  </ha-reactangle>
</ha-coordinater>
```

- props:

  - coor:

    1. 类型为`Array`
    2. 值为一个三维数组, 例如`[[[4,4], [42,42]], [[3,3], [19, 44]]]`, 默认为`[[[1, 1], [1, 1]]]`
    >
    1. 该三维数组第一维的`length`表示该组件可用坐标的个数, 理论上应跟距离该组件最近的父级`<ha-coordinater>`的名为`grid`的prop的第一维`length`相同,即"容器的坐标个数应与坐标器的坐标系个数一致".
    2. 该三维数组的第二维有两个一维的数组,第一个表示坐标`[x, y]`, 原点在左上角, 第二个表示

    ```js
    [
      x轴上的长度(即该容器跨越多少的`grid-column`线), 
      y轴上的长度(即该容器跨越多少的`grid-row`线) 
    ]
    ```

  - width:

    1. 类型为`String`
    2. 与css的`width`相同
    3. 该prop默认值为"100%", 正常布局时保持默认即可填充完全整个`grid-area`的宽度, 如果修改此百分比则会在`grid-area`的宽度下进行计算: 实际宽度 = `grid-area`的宽度 * 该百分比值
    4. 如果修改为固定长度则`grid-area`宽度无效, 使用此设定的的宽度, 但是该容器坐标位置不受影响

  - height:

    1. 类型为`String`
    2. 与css的`height`相同
    3. 该prop默认值为"100%", 正常布局时保持默认即可填充完全整个`grid-area`的高度, 如果修改此百分比则会在`grid-area`的高度下进行计算: 实际高度 = `grid-area`的高度 * 该百分比值
    4. 如果修改为固定长度则`grid-area`高度无效, 使用此设定的的高度, 但是该容器坐标位置不受影响

  - border:
  
    1. 类型为`String`
    2. 与css的`border`相同
    3. 默认值为`undefined`

  - radius:
  
    1. 类型为`String`
    2. 与css的`border-radius`相同
    3. 默认值为`undefined`

  - padding:

    1. 类型为`String`
    2. 与css的`padding`相同
    3. 默认值为`undefined`

  - z: 

    1. 类型为`String`
    2. 与css的`z-index`一致
    3. 默认值为 `0`
    4. 目的是为了在坐标重叠时调整z轴上的前后关系 

  - overflow: 

    1. 类型为`String`
    2. 与css的`overflow`一致
    3. 默认值为`hidden`, 创建BFC保证容器内的任何内容不影响容器外的内容.

  - hover:

    1. 类型为`String`
    2. 设置鼠标hover时的表现
    3. 默认值为undefined
    4. 可选填opacity或者

  - haShow:

    1. 类型为`String`
    2. 设置可视宽度(px)大于该值显示此容器
    3. 值为Number, 默认为`undefined`

:::warning 注意： 
1. 为保证名为`width`的prop不影响整个坐标系的正常等分, 此组件的默认`grid-column-span`为2
2. 为保证名为`height`的prop不影响整个坐标系的正常等分, 此组件的默认`grid-row-span`为2
3. 此组件的默认`position`为relative
:::

- 实例

代码:
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[9,10], [7, 20]]]">
    <ha-letter letter="H" :capital="true" fillColor="blue"></ha-letter>
  </ha-rectangle>
  <ha-rectangle :coor="[[[18,10], [7, 20]]]">
    <ha-letter letter="a" fillColor="yellow"></ha-letter>
  </ha-rectangle>
  <ha-rectangle :coor="[[[27,10], [7, 20]]]">
    <ha-letter letter="r" fillColor="green"></ha-letter>
  </ha-rectangle>
  <ha-rectangle :coor="[[[36,10], [7, 20]]]">
    <ha-letter letter="u" fillColor="red"></ha-letter>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result>
  <containers-rec></containers-rec>
</doc-result>

## 2.2 &lt;ha-card>

- 简介：

  在`<ha-rectangle>`的基础上提供垂直和水平的三栏布局

- 示例
  
```html
<这里一般用ha-coordinater组件包裹>
  <ha-card :coor = [一个三维数组]>
    ...
    这里一般放置‘填充物’组件
    ...
  </ha-card>
</ha-coordinater>
```

- props:

  - 具有跟`<ha-rectangle>`除`overflow`外一致的props

  - type:

    1. 类型为`String`
    2. 值为"Ver"或者"Hor", 默认为"Ver"
    3. 为"Ver"时为垂直的三栏容器, 为"Hor"时为水平的三栏容器

  - hcfHeight:

    1. 类型为`Array`
    2. 当名为`type`的prop为"Ver"时有效
    3. 值为一个`length`为3的一维数组, 默认为`['0%', '100%', '0%']`
    4. 该数组表示:

    ```js
    [头部名为header的slot的高度, 中间名为content的slot的高度, 底部名为footer的slot的高度]
    ```

  - lmrWidth:

    1. 类型为`Array`
    2. 当名为`type`的prop为"Hor"时有效
    3. 值为一个`length`为3的一维数组, 默认为`['0%', '100%', '0%']`
    4. 该数组表示

    ```js
    [左边名为left的slot的宽度, 中间名为middle的slot的宽度, 右边名为right的slot的宽度]
    ```

  - bgColor: 

    1. 类型为`Array`
    2. 值为一个`length`为3的一维数组, 例如`['blue', 'lightBlue', 'accentBlue']`, 分别表示:

    ```js
    [header或者left的背景颜色, content或者middle的背景颜色, footer或者right的背景颜色]
    ```

    3. 默认为`undefined`
    4. [参照全局颜色中的bgColor](../main/README.md#_0-1-颜色)

- slots: 

  - 当名为`type`的prop的值为"Ver"时具有header, content, footer的具名插槽, 并且有一个跟content同位置的匿名插槽
  - 当名为`type`的prop的值为"Hor"时具有left, middle, right的具名插槽, 并且有一个跟middle同位置的匿名插槽

  :::warning 注意：
  此组件的默认`position`为relative
  :::

- 实例

代码：
```html

```

结果：
<doc-result>
  <containers-card></containers-card>
</doc-result>