# 5. 其它

## 5.1 &lt;ha-mask>

- 简介：

  遮罩组件

- props:

  - show:

    1. 设置遮罩是否显示
    2. 类型为`Boolean`
    3. 默认为`false`

  - position:

    1. 与css的`position`一致
    2. 类型为`String`
    3. 默认为`fixed`, 如果要在容器中使用, 可设置为`absolute`

  - duration:

    1. 设置此遮罩多少毫秒后自动消失
    2. 类型为`Number`
    3. 默认为`0`, 即不会自动消失

  - clickHide:

    1. 设置点击遮罩是否隐藏
    2. 类型为`Boolean`
    3. 默认为`false`
 
:::warning 注意
1. 此组件的宽度和高度默认`100%`
2. 在绑定此组件的show时应使用.sync修饰, 达到该组件内的show和外部传递进来的值保持一致
:::

- 实例：

```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[21,20], [8, 5]]]">
    <ha-button 
      title="点击打开mask" 
      bgColor="bgc-blue" 
      @click="changeShow"
    ></ha-button>
  </ha-rectangle>

  <!-- ha-mask 组件 -->
  <ha-mask 
    :show.sync="show" 
    position="absolute" 
    :clickHide="false" 
    :duration="0"
  >
    <ha-coordinater :grid="[[0, 50, 50]]">
      <ha-rectangle :coor="[[[21,20], [8, 5]]]">
        <ha-button 
          title="点击关闭mask" 
          bgColor="bgc-yellow" 
          @click="changeShow"
        ></ha-button>
      </ha-rectangle>
    </ha-coordinater>
  </ha-mask>
</ha-coordinater>
```

```js
changeShow() {
  this.show = !this.show
} 
```
结果：
<doc-result>
  <others-mask></others-mask>
</doc-result>

## 5.2 &lt;ha-scroll>

- 简介：

  滚动条

- props:

  - toBottom:

    1. 设置到达低部的标识是否显示
    2. 类型为`Boolean`
    3. 默认为`false`

  - toTop:

    1. 设置到达顶部的标识是否显示
    2. 类型为`Boolean`
    3. 默认为`false`

  - bgColor:

    1. 设置颜色
    2. 值为一个length为4的数组, 分别表示:
   
    ```js
    [Y方向滚动条颜色, X方向滚动条的颜色, toBottom的颜色, toTop的颜色]
    ```

    3. 默认为空

:::tip 提示
按住`shift`键同时拖动鼠标滚轮可横向滚动
:::

:::warning 注意
此组件的默认高度和宽度为100%
:::

- 实例：

代码：
```html
<ha-scroll 
  :bgColor="['bgc-blue', 'bgc-black', 'bgc-red', 'bgc-orange']"
  :toTop="true"
  :toBottom="true"
>
    <ha-rectangle height="1000px" width="1000px">
      <ha-card 
        :bgColor="['bgc-grey', 'bgc-grey', 'bgc-grey']"
        :hcfHeight="['10%','70%','20%']"
      >
        <h1 slot="header">狗屁不同文章生成器，主题Haru UI</h1>
        <p slot="content">
          <pre style="color:#fff">
              就我个人来说，Haru UI对我的意义，不能不说非常重大。 而这些并不是完全重要，
          更加重要的问题是， 笛卡儿说过一句富有哲理的话，我的努力求学没有得到别的好处，只
          不过是愈来愈发觉自己的无知。这句话语虽然很短，但令我浮想联翩。 

              Haru UI因何而发生？

              既然如此， 我们不得不面对一个非常尴尬的事实，那就是， 我们一般认为，抓住了
          问题的关键，其他一切则会迎刃而解。 本人也是经过了深思熟虑，在每个日日夜夜思考这
          个问题。 我认为， 鲁巴金曾经提到过，读书是在别人思想的帮助下，建立起自己的思想。
          这启发了我， 富兰克林曾经提到过，你热爱生命吗？那么别浪费时间，因为时间是组成生
          命的材料。这句话语虽然很短，但令我浮想联翩。 要想清楚，Haru UI，到底是一种怎么
          样的存在。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 

              可是，即使是这样，Haru UI的出现仍然代表了一定的意义。 现在，解决Haru UI的
          问题，是非常非常重要的。 所以， 一般来说， 而这些并不是完全重要，更加重要的问题
          是，生活中，若Haru UI出现了，我们就不得不考虑它出现了的事实。 这样看来， 对我个
          人而言， Haru UI不仅仅是一个重大的事件，还可能会改变我的人生。 
          </pre>
        </p>
        <p slot="footer">
          <pre style="color:#fff">
              那么， Haru UI，发生了会如何，不发生又会如何。 我们不得不面对一个非常尴尬的事
          实，那就是， 一般来说， 现在，解决Haru UI的问题，是非常非常重要的。 所以， 每个人
          都不得不面对这些问题。 在面对这种问题时， 总结的来说， 问题的关键究竟为何？ 可是，
          即使是这样，Haru UI的出现仍然代表了一定的意义。 达·芬奇曾经提到过，大胆和坚定的决
          心能够抵得上武器的精良。这句话语虽然很短，但令我浮想联翩。
          </pre>
        </p>
      </ha-card>
    </ha-rectangle>
</ha-scroll>
```

结果：
<doc-result>
  <others-scroll></others-scroll>
</doc-result>

## 5.3 &lt;ha-tooltip>

- 简介：

  提示信息

- props:

  - tip:

    1. 设置要显示的提示信息
    2. 类型为`String`
    3. 默认为`undefined`

  - wait:

    1. 设置鼠标放置后需要多少毫秒才显示tip
    2. 类型为`Number`
    3. 默认为`2000`

  - location:

    1. 设置显示信息的位置
    2. 类型为`String`
    3. 可选值为'top'或'bottom'
    4. 默认为'top'

:::warning 注意
此组件的默认高度和宽度为`100%`
:::

- 实例：

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[9,19], [12, 12]]]">
    <ha-tooltip 
      tip="这是一个top tip" 
      :wait="2000" 
      location="top" 
      bgColor="bgc-red">
      <ha-button title="鼠标放置2秒显示tip" bgColor="bgc-blue"></ha-button>
    </ha-tooltip>
  </ha-rectangle>
  <ha-rectangle :coor="[[[29,19], [12, 12]]]">
    <ha-tooltip 
      tip="这是一个bottom tip" 
      :wait="3000" 
      location="bottom" 
      bgColor="bgc-red">
      <ha-button title="鼠标放置3秒显示tip" bgColor="bgc-yellow"></ha-button>
    </ha-tooltip>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result height="200px">
  <others-tooltip></others-tooltip>
</doc-result>

## 5.4 &lt;ha-detailbox>

- 简介：
  
  详情盒子， 用于鼠标进入某个元素后立即用一个自定义的元素展示其详情

- props:
  
  - location

    1. 设置位置
    2. 类型为`String`
    3. 默认为`'rightBottom'`
    4. 可选值为`'leftBottom'`, `'leftTop'`, `'rightBottom'`, `'rightTop'` 

:::tip 使用方法：
自定义一个具有`data-detailbox`属性、并且其值为`detailbox`的元素，即类似`<div data-detailbox="detailbox">`，放置于`<ha-detailbox>`的同一父节点中， 使它们成为兄弟节点，当鼠标进入`<ha-detailbox>`的范围内时，会将自定义的元素用于展示详情。
:::

:::warning 注意
1. 其中`<ha-detailbox>`的高度和宽带默认为100%。
2. 自定义元素需全部自定义，包括其`css`，也可使用组件
:::

- 实例：

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[19,19], [12, 12]]]">
    <ha-detailbox>
      <ha-button title="鼠标进入显示详情" bgColor="bgc-blue"></ha-button>
    </ha-detailbox>
    <ha-card 
      width="300px" height="300px" 
      :bgColor="['bgc-red','bgc-lightBlue']" 
      data-detailbox="detailbox" 
    >
      这是一个detailBox
    </ha-card>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result height="200px">
  <others-detailbox></others-detailbox>
</doc-result>

## 5.5 $haru.notify()

- 简介：

  显示通知

:::tip 使用方法:

1. 组件直接调用`(this.)$haru.notify(vm, options)`

2. 参数`vm`为一个`vue`实例, 建议直接传入调用时的所在组件实例, 即this

3. 参数`options`为一个对象, 示例如下:

  ```js
  {
    msg: '这是一个haru UI的通知', // 要显示的通知信息, 默认为空
    duration: 4000, // 多少毫秒后该通知消失,默认为4000

    //显示位置,('topRight'|'bottomRight'|'topLeft'|
    //'bottomLeft'|'topMiddle'|'bottomMiddle')的其中之一
    // 默认为'topRight'
    location: 'topRight', 

    bgColor: 'lightBlue',// 设置背景颜色, 默认为undefined
    icon: require('@icons/信息.svg') // 设置要显示的icon, 默认为undefined
  }
  ```
:::

- 实例：

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <!-- 第一行 -->
  <ha-rectangle :coor="[[[9,10], [8, 5]]]">
    <ha-button title="点击发送通知" bgColor="bgc-blue" @click="click1"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[20,10], [8, 5]]]">
    <ha-button title="点击发送通知" bgColor="bgc-red" @click="click2"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[31,10], [8, 5]]]">
    <ha-button title="点击发送通知" bgColor="bgc-green" @click="click3"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[9,20], [8, 5]]]">
    <ha-button title="点击发送通知" bgColor="bgc-yellow" @click="click4"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[20,20], [8, 5]]]">
    <ha-button title="点击发送通知" bgColor="bgc-orange" @click="click5"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[31,20], [8, 5]]]">
    <ha-button title="点击发送通知" bgColor="bgc-purple" @click="click6"></ha-button>
  </ha-rectangle>
</ha-coordinater>
```

其中notify函数为：
```js
click1() {
  this.$haru.notify(this, {
  msg: '这是一个haru UI的通知', 
  duration: 4000, 
  location: 'topLeft', 
  bgColor: 'bgc-blue',
  icon: HaIcons['message_white']
  })
},
click2() {
  this.$haru.notify(this, {
  msg: '这是一个haru UI的通知', 
  duration: 4000, 
  location: 'topMiddle', 
  bgColor: 'bgc-red',
  icon: HaIcons['message_white']
  })
},
click3() {
  this.$haru.notify(this, {
  msg: '这是一个haru UI的通知', 
  duration: 4000, 
  location: 'topRight', 
  bgColor: 'bgc-green',
  icon: HaIcons['message_white']
  })
},
click4() {
  this.$haru.notify(this, {
  msg: '这是一个haru UI的通知', 
  duration: 4000, 
  location: 'bottomLeft', 
  bgColor: 'bgc-yellow',
  icon: HaIcons['message_white']
  })
},
click5() {
  this.$haru.notify(this, {
  msg: '这是一个haru UI的通知', 
  duration: 4000, 
  location: 'bottomMiddle', 
  bgColor: 'bgc-orange',
  icon: HaIcons['message_white']
  })
},
click6() {
  this.$haru.notify(this, {
  msg: '这是一个haru UI的通知', 
  duration: 4000, 
  location: 'bottomRight', 
  bgColor: 'bgc-purple',
  icon: HaIcons['message_white']
  })
}
```

结果：
<doc-result>
  <others-notify></others-notify>
</doc-result>
