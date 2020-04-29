# 3. 填充物

- 为容器提供填充物

:::warning 注意
所有stuffings的默认宽高均为`100%`, 使用时请给予包裹一个具有宽度和高度的容器, 例如`<ha-rectangle>`
:::

## 3.1 &lt;ha-button>

- 示例

```html
<这里一般用ha-coordinater组件包裹提供坐标系>
  ...
  <这里一般用ha-rectangle或者ha-card的容器组件包裹提供定位和宽高>
    <ha-button title="这里是标题"></ha-button>
  </ha-rectangle>
  ...
</ha-coordinater>
```

- props:

  - icon:

    1. button的图标
    2. 类型为`String`
    3. 值为表示路径的url, 默认为`undefined`

  - title: 

    1. button的标题
    2. 类型为`String`
    3. 默认为空

  - disabled: 

    1. 是否禁用button
    2. 类型为`Boolean`
    3. 默认为`false`

  - fontSize:

    1. 设置按钮的文字大小
    2. 类型为`String`
    3. 与css的`font-size`一致

  - bgColor:

    1. button的颜色
    2. 类型为`String`
    3. 值为表示颜色的字符串, 默认为`undefined`
    4. [参照全局颜色中的bgColor](../main/README.md#0.1颜色)

- events:

  - click:

    1. 当button被点击时触发
    2. 无传递参数
    3. 使用`v-on`指令接收该事件， 即`v-on:click=处理函数`

- 实例

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <!-- 第一行 -->
  <ha-rectangle :coor="[[[9,10], [6, 4]]]">
    <ha-button title="蓝色按钮" bgColor="bgc-blue"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[16,10], [6, 4]]]">
    <ha-button title="红色按钮" bgColor="bgc-red"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[23,10], [6, 4]]]">
    <ha-button title="绿色按钮" bgColor="bgc-green"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[30,10], [6, 4]]]">
    <ha-button title="黄色按钮" bgColor="bgc-yellow"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[37,10], [6, 4]]]">
    <ha-button title="橘色按钮" bgColor="bgc-orange"></ha-button>
  </ha-rectangle>
  <!-- 第二行 -->
  <ha-rectangle :coor="[[[9,19], [6, 4]]]" radius="5px">
    <ha-button title="圆角按钮" bgColor="bgc-blue"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[17,18], [6, 6]]]" radius="50%">
    <ha-button title="圆形按钮" bgColor="bgc-red"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[24,18], [8, 6]]]">
    <ha-button title="大按钮" bgColor="bgc-green"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[33,19], [4, 3]]]">
    <ha-button title="小按钮" bgColor="bgc-yellow"></ha-button>
  </ha-rectangle>
  <!-- 第三行 -->
  <ha-rectangle :coor="[[[9,28], [6, 4]]]">
    <ha-button title="禁用按钮" bgColor="bgc-orange" :disabled="true"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[17,28], [14, 8]]]" radius="10px">
    <ha-button title="两倍字体" bgColor="bgc-blue" fontSize="2em"></ha-button>
  </ha-rectangle>
  <ha-rectangle :coor="[[[32,28], [6, 4]]]" radius="10px">
    <ha-button title="0.5倍字体" bgColor="bgc-blue" fontSize="0.5em"></ha-button>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result>
  <stuff-button></stuff-button>
</doc-result>

## 3.2 &lt;ha-number>

- 示例

```html
<这里一般用ha-coordinater组件包裹提供坐标系>
  ...
  <这里一般用ha-rectangle或者ha-card的容器组件包裹提供定位和宽高>
    <ha-number :num="8"></ha-number>
  </ha-rectangle>
  ...
</ha-coordinater>
```

- props:

  - num:

    1. 要显示的数字
    2. 类型为`Number`
    3. 值为在0 - 9 范围内的个位数, 默认为0

  - dot:

    1. 是否显示小数点
    2. 类型为`Boolean`
    3. 值为布尔值, 默认为`false`

  - fillColor:

    1. 设置所显示数字的颜色
    2. 类型为`String`
    3. 默认为`undefined`
    4. [参照全局颜色中的fillColor](../main/README.md#0.1颜色)

- 实例

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[5,12], [7, 20]]]">
    <ha-number :num="2" :capital="true" fillColor="blue"></ha-number>
  </ha-rectangle>
  <ha-rectangle :coor="[[[12,12], [7, 20]]]">
    <ha-number :num="0" fillColor="yellow"></ha-number>
  </ha-rectangle>
  <ha-rectangle :coor="[[[19,12], [7, 20]]]">
    <ha-number :num="2" fillColor="green"></ha-number>
  </ha-rectangle>
  <ha-rectangle :coor="[[[26,12], [7, 20]]]">
    <ha-number :num="0" fillColor="red" :dot="true"></ha-number>
  </ha-rectangle>
  <ha-rectangle :coor="[[[33,12], [7, 20]]]">
    <ha-number :num="0" fillColor="purple"></ha-number>
  </ha-rectangle>
  <ha-rectangle :coor="[[[40,12], [7, 20]]]">
    <ha-number :num="4" fillColor="orange"></ha-number>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result>
  <stuff-num></stuff-num>
</doc-result>

## 3.3 &lt;ha-letter>

- 示例

```html
<这里一般用ha-coordinater组件包裹提供坐标系>
  ...
  <这里一般用ha-rectangle或者ha-card的容器组件包裹提供定位和宽高>
    <ha-letter letter="H"></ha-letter>
  </ha-rectangle>
  ...
</ha-coordinater>
```

- props:

  - capital:

    1. 是否大写
    2. 类型为`Boolean`
    3. 默认为`false`

  - letter:

    1. 要显示的字母
    2. 类型为`String`
    3. 值为在`[a - z]`或者`[A - Z]`范围内的一个字母, 默认为a

  - fillColor:

    1. 设置所显示字母的颜色
    2. 类型为`String`
    3. 默认为`undefined`
    4. [参照全局颜色中的fillColor](../main/README.md#0.1颜色)

- 实例

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[5,12], [7, 20]]]">
    <ha-letter letter="L" :capital="true" fillColor="blue"></ha-letter>
  </ha-rectangle>
  <ha-rectangle :coor="[[[12,12], [7, 20]]]">
    <ha-letter letter="e" fillColor="yellow"></ha-letter>
  </ha-rectangle>
  <ha-rectangle :coor="[[[19,12], [7, 20]]]">
    <ha-letter letter="t" fillColor="green"></ha-letter>
  </ha-rectangle>
  <ha-rectangle :coor="[[[26,12], [7, 20]]]">
    <ha-letter letter="t" fillColor="red"></ha-letter>
  </ha-rectangle>
  <ha-rectangle :coor="[[[33,12], [7, 20]]]">
    <ha-letter letter="e" fillColor="purple"></ha-letter>
  </ha-rectangle>
  <ha-rectangle :coor="[[[40,12], [7, 20]]]">
    <ha-letter letter="r" fillColor="orange"></ha-letter>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result>
  <stuff-letter></stuff-letter>
</doc-result>

## 3.4 &lt;ha-avatar>

- 示例

```html
<这里一般用ha-coordinater组件包裹提供坐标系>
  ...
  <这里一般用ha-rectangle或者ha-card的容器组件包裹提供定位和宽高>
    <ha-avatar url="这里是图片的url"></ha-avatar>
  </ha-rectangle>
  ...
</ha-coordinater>
```

- props:

  - url:

    1. 显示图像
    2. 类型为`String`
    3. 默认为`undefined`

  - alt

    1. 未显示图像时显示的文字
    2. 类型为`String`
    3. 默认为`undefined`

:::warning 注意
该组件的名为`url`的prop传入的地址是静态资源地址, 这意味着打包工具并不会对其进行处理,
如果要让打包工具对其处理的话, 需要使用`import`语句导入资源并传给名为`url`的prop
:::

- 实例

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[5,16], [40, 16]]]">
    <ha-avatar url="/haru-ui.png" alt="一张图片"></ha-avatar>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result>
  <stuff-avatar></stuff-avatar>
</doc-result>

## 3.5 &lt;ha-back>

- 示例

```html
<这里一般用ha-coordinater组件包裹提供坐标系>
  ...
  <这里一般用ha-rectangle或者ha-card的容器组件包裹提供定位和宽高>
    <ha-back title="这里是标题"></ha-back>
  </ha-rectangle>
  ...
</ha-coordinater>
```

- props:

  - title:

    1. 要显示的标题
    2. 类型为`String`
    3. 默认为`undefined`

  - bgColor:

    1. 设置背景颜色
    2. 类型为`String`, 
    3. 默认为`undefined`
    4. [参照全局颜色中的bgColor](../main/README.md#0.1颜色)

- events:

  - back:
  
    1. 返回的图标被点击时触发
    2. 使用`v-on`指令接收处理

- 实例

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[5,5], [40, 5]]]">
    <ha-back title="这是蓝色的`<ha-back>`组件" bgColor="bgc-blue"></ha-back>
  </ha-rectangle>
  <ha-rectangle :coor="[[[5,13], [40, 5]]]">
    <ha-back title="这是红色的`<ha-back>`组件" bgColor="bgc-red"></ha-back>
  </ha-rectangle>
  <ha-rectangle :coor="[[[5,21], [40, 5]]]">
    <ha-back title="这是绿色的`<ha-back>`组件" bgColor="bgc-green"></ha-back>
  </ha-rectangle>
  <ha-rectangle :coor="[[[5,29], [40, 5]]]">
    <ha-back title="这是黄色的`<ha-back>`组件" bgColor="bgc-yellow"></ha-back>
  </ha-rectangle>
  <ha-rectangle :coor="[[[5,37], [40, 5]]]">
    <ha-back title="这是紫色的`<ha-back>`组件" bgColor="bgc-purple"></ha-back>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result>
  <stuff-back></stuff-back>
</doc-result>

## 3.6 &lt;ha-page>

- 示例

```html
<这里一般用ha-coordinater组件包裹提供坐标系>
  ...
  <这里一般用ha-rectangle或者ha-card的容器组件包裹提供定位和宽高>
    <ha-page title="这里是标题" @pageChange="这里是处理函数(isPage)"></ha-page>
  </ha-rectangle>
  ...
</ha-coordinater>
```

- props: 

  - page:

    1. 总页数
    2. 类型为`String`
    3. 默认为`1`

- events:

  - pageChange:

    1. 页面更改时触发该事件
    2. 传递一个名为`isPage`的参数,该参数为该组件当前所处的页面 

  - pageError: 

    1. 当页面输入框输入数字跳转时, 该数字小于或大于总页数时触发
    2. 传递的参数为输入的数字, 此参数的类型为`String`

- 实例

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[5,15], [40, 15]]]" border="solid 1px">
    <ha-page :page="20"></ha-page>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result height="200px">
  <stuff-page></stuff-page>
</doc-result>

## 3.7 &lt;ha-check>

- 示例

```html
<这里一般用ha-coordinater组件包裹提供坐标系>
  ...
  <这里一般用ha-rectangle或者ha-card的容器组件包裹提供定位和宽高>
    <ha-check 
      content="这里是内容" 
      :isChheck="false"  这里为false表示初始时不打✔ 
      @checked="这里是处理函数({传递的参数对象})"
    ></ha-check>
  </ha-rectangle>
  ...
</ha-coordinater>
```

- props:

  - isCheck:

    1. 初始时是否为checked状态
    2. 类型为`Boolean`, 
    3. 默认为`false`

  - content

    1. 要显示的内容
    2. 类型为`String`
    3. 默认为`undefined`

  - bgColor:

    1. 设置选框的颜色
    2. 类型为`String`
    3. 默认为`undefined`
    4. [参照全局颜色中的bgColor](../main/README.md#0.1颜色)

- events:

  - checked:

    1. 当选框被点击时触发
    2. 传递的参数为一个对象, 该对象如下：
    ```js
    {
      isCheck: 当前选框是否选中, 值为Boolean, 
      content:  与名为content的prop的值一致
    }
    ```
       
:::warning 注意
1. 名为isCheck的prop只做初始化时使用
2. 触发checked事件是并不会改变父组件传递进来的绑定于名为isCheck的prop的值, 请根据事件传递的参数对象中的isCheck值进行判断
:::

- 实例

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-rectangle :coor="[[[5,20], [12, 10]]]" border="solid 1px">
    <ha-check :isCheck="false" content="蓝色的check" bgColor="bgc-blue"></ha-check>
  </ha-rectangle>
  <ha-rectangle :coor="[[[19,20], [12, 10]]]" border="solid 1px">
    <ha-check :isCheck="true" content="红色的check" bgColor="bgc-red"></ha-check>
  </ha-rectangle>
  <ha-rectangle :coor="[[[33,20], [12, 10]]]" border="solid 1px">
    <ha-check :isCheck="true" content="黄色的check" bgColor="bgc-yellow"></ha-check>
  </ha-rectangle>
</ha-coordinater>
```

结果：
<doc-result height="200px">
  <stuff-check></stuff-check>
</doc-result>