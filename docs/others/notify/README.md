# 5.5 $haru.notify()

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