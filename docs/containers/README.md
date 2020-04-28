# 2.容器

- 为填充物提供布局和定位

## 2.1 &lt;ha-rectangle>

- 简介：

  提供基本的矩形容器

- props:

  - coor:

    1. 值为一个三维数组, 例如[[[4,4], [42,42]], [[3,3], [19, 44]]], 默认为[[[1, 1], [1, 1]]]
    >
    2. 该三维数组第一维的length表示该组件可用坐标的个数, 理论上应跟距离该组件最近的父级&lt;ha-coordinater>的名为grid的prop的第一维length相同,即"容器的坐标个数应与坐标器的坐标系个数一致".
    3. 该三维数组的第二维有两个一维的数组,第一个表示坐标[x, y], 原点在左上角, 第二个表示[x轴上的长度(即该容器跨越多少的grid-column线), y轴上的长度(即该容器跨越多少的grid-row线) ]

    :::warning 注意
    为保证该值不影响整个坐标系的正常等分, 此组件的默认grid-column-span为2
    :::

  - width:

    1. 与css的width相同
    2. 该prop默认值为"100%", 正常布局时保持默认即可填充完全整个grid-area的宽度, 如果修改此百分比则会在grid-area的宽度下进行计算: 实际宽度 = grid-area的宽度 * 该百分比值
    3. 如果修改为固定长度则grid-area宽度无效, 使用此设定的的宽度, 但是该容器坐标位置不受影响

  - height:

    1. 与css的height相同
    2. 该prop默认值为"100%", 正常布局时保持默认即可填充完全整个grid-area的高度, 如果修改此百分比则会在grid-area的高度下进行计算: 实际高度 = grid-area的高度 * 该百分比值
    3. 如果修改为固定长度则grid-area高度无效, 使用此设定的的高度, 但是该容器坐标位置不受影响

    :::warning 注意 
    为保证该值不影响整个坐标系的正常等分, 此组件的默认grid-row-span为2
    :::

  - border:
  
    1. 与css的border相同
    2. 该prop默认值为undefined

  - padding:

    1. 与css的padding相同
    2. 默认值为undefined

  - z: 

    1. 与css的z-index一致
    2. 默认值为 0
    3. 目的是为了在坐标重叠时调整z轴上的前后关系 

  - overflow: 

    1. 与css的overflow一致
    2. 默认值为hidden, 创建BFC保证容器内的任何内容不影响容器外的内容.

  - hover:

    1. 类型为String
    2. 设置鼠标hover时的表现
    3. 默认值为undefined
    4. 可选填opacity或者

  - haShow:

    1. 设置可视宽度(px)大于该值显示此容器
    2. 值为Number, 默认为undefined

- 注: 

  此组件的默认position为relative

- 示例

  - TODO

- 实例

  - TODO

## 2.2 &lt;ha-card>

- 简介：

  在&lt;ha-rectangle>的基础上提供垂直和水平的三栏布局

- props:

  - 具有跟&lt;ha-rectangle>除overflow外一致的props

  - type:

    1. 值为"Ver"或者"Hor", 默认为"Ver"
    >
    2. 为"Ver"时为垂直的三栏容器, 为"Hor"时为水平的三栏容器

  - hcfHeight:

    1. 当名为type的prop为"Vet"时有效
    2. 值为一个length为3的一维数组, 默认为['0%', '100%', '0%']
    3. 该数组表示[头部名为header的slot的高度, 中间名为content的slot的高度, 底部名为footer的slot的高度]

  - lmrWidth:

    1. 当名为type的prop为"Hor"时有效
    2. 值为一个length为3的一维数组, 默认为['0%', '100%', '0%']
    3. 该数组表示[左边名为left的slot的宽度, 中间名为middle的slot的宽度, 右边名为right的slot的宽度]

  - bgColor: 

    1. 值为一个length为3的一维数组, 例如['blue', 'lightBlue', 'accentBlue'], 分别表示['header或者left的颜色', content或者middle的颜色, footer或者right的颜色]
    2. 默认为'', 即空

- slots: 

  - 当名为type的prop的值为"Ver"时具有header, content, footer的具名插槽, 并且有一个跟content同位置的匿名插槽
  - 当名为type的prop的值为"Hor"时具有left, middle, right的具名插槽, 并且有一个跟middle同位置的匿名插槽

- 注: 

  此组件的默认position为relative

- 示例

  - TODO

- 实例

  - TODO