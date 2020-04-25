# 5.2 &lt;ha-scroll>

- 简介：

  > 滚动条

- props:

  - toBottom:

    > 1. 设置到达低部的标识是否显示
    > 2. 值为Boolean, 默认为false

  - toTop:

    > 1. 设置到达顶部的标识是否显示
    > 2. 值为Boolean, 默认为false

  - bgColor:

    > 1. 设置颜色
    > 2. 值为一个length为4的数组, 分别表示[Y方向滚动条颜色, X方向滚动条的颜色, toBottom的颜色, toTop的颜色], 默认为空

- 注:

  > 1. 此组件的默认高度和宽度为100%