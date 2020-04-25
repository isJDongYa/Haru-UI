# 5. 其它

## 5.1 &lt;ha-mask>

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

## 5.2 &lt;ha-scroll>

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

## 5.3 &lt;ha-tooltip>

- 简介：

  > 提示信息

- props:

  - tip:

    > 1. 设置要显示的提示信息
    > 2. 值为String, 默认为空

  - wait:

    > 1. 设置鼠标放置后需要多少毫秒才显示tip
    > 2. 值为Number, 默认为2000

  - location:

    > 1. 设置显示信息的位置
    > 2. 值为top或者bottom

- 注:

  > 1. 此组件的默认高度和宽度为100%

## 5.4 &lt;ha-detailBox>

- 简介：
- 
  > 详情盒子， 用于鼠标进入某个元素后立即用一个自定义的元素展示其详情

- props:
  
  > 无porps

- 使用方法：

  >  自定义一个具有data-detailBox属性， 并且其值为detailBox的元素，即类似&lt;div data-detailBox="detailBox">，放置于&lt;ha-detailBox>的同一父节点中， 使它们成为兄弟节点，当鼠标进入&lt;ha-detailBox>的范围内时，会将自定义的元素用于展示详情。

- 注：

  > 1. 其中&lt;ha-detailBox>的高度和宽带默认为100%。
  > 2. 自定义元素需全部自定义，包括其css，也可使用组件

## 5.5 $haru.notify()

- 简介：

  > 显示通知

- 使用方法:

  > 1. 组件直接调用(this.)$haru.notify(vm, options)
  >
  > 2. 参数vm为一个vue实例, 通知组件将挂载到此实例的$root.$el上, 建议直接传入调用时的所在组件实例, 即this
  >
  > 3. 参数options为一个对象, 示例如下:
  >
  >    ```js
  >    {
  >      msg: '这是一个haru UI的通知', // 要显示的通知信息, 默认为空
  >      duration: 4000, // 多少毫秒后该通知消失,默认为4000
  >
  >      //显示位置,('topRight'|'bottomRight'|'topLeft'|
  >      //'bottomLeft'|'topMiddle'|'bottomMiddle')的其中之一
  >      // 默认为'topRight'
  >      location: 'topRight', 
  >
  >      bgColor: 'lightBlue',// 设置背景颜色, 默认为空
  >      icon: require('@icons/信息.svg') // 设置要显示的icon, 默认为欸空
  >    }
  >    ```
