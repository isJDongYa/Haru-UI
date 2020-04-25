# 5.1 &lt;ha-mask>

- 简介：

  > 遮罩组件

- props:

  - show:

    > 1. 设置遮罩是否显示
    > 2. 值为Boolean, 默认为false

  - position:

    > 1. 与css的position一致
    > 2. 默认为fixed, 如果要在容器中使用, 可设置为absolute

  - duration:

    > 1. 设置此遮罩多少毫秒后自动消失
    > 2. 值为Number, 默认为0

  - clickHide:

    > 1. 设置点击遮罩是否隐藏
    > 2. 值为Boolean, 默认为false

- 注: 

  > 1. 此组件的宽度和高度默认100%
  > 2. 在绑定此组件的show时应使用.sync修饰, 达到该组件内的show和外部传递进来的值保持一致