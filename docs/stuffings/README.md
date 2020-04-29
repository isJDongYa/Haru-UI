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