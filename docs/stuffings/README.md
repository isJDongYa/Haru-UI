# 3. 填充物

- 所有stuffings的默认宽高均为100%, 使用时请给予包裹一个具有宽度和高度的容器, 例如&lt;ha-rectangle>

## 3.1 &lt;ha-button>

- props:

  - icon:

    > 1. button的icon
    > 2. 值为表示路径的字符串, 默认为空

  - title: 

    > 1. button的标题
    > 2. 值为字符串, 默认为空

  - disabled: 

    > 1. 是否禁用button
    > 2. 值为布尔值, 默认为false

  - fontSize:

    > 1. 设置按钮的文字大小
    > 2. 与css的font-size一致

  - bgColor:

    > 1. button的颜色
    > 2. 值为表示颜色的字符串, 默认为空

- events:

  - click:

    > 1. 当button被点击时触发
    > 2. 无传递参数

## 3.2 &lt;ha-number>

- props:

  - num:

    > 1. 要显示的数字
    > 2. 值为Number, 并且为在0 - 9 范围内的个位数, 默认为0

  - dot:

    > 1. 是否显示小数点
    > 2. 值为布尔值, 默认为false

  - fontColor:

    > 1. 设置所显示数字的颜色
    > 2. 值为表示颜色的String, 默认为空

## 3.3 &lt;ha-letter>

- props:

  - capital:

    > 1. 是否大写
    > 2. 值为Boolean, 默认为false

  - letter:

    > 1. 要显示的字母
    > 2. 值为String, 并且为在[a - z] | [A - Z] 范围内的个位数, 默认为a

  - fontColor:

    > 1. 设置所显示字母的颜色
    > 2. 值为表示颜色的String, 默认为空

## 3.4 &lt;ha-avatar>

- props:

  - url:

    > 1. 要显示的图像的url
    > 2. 值为String, 默认为空

  - alt

    > 1. 未显示图像时显示的文字
    > 2. 值为String, 默认为空

## 3.5 &lt;ha-back>

- props:

  - title:

    > 1. 要显示的标题
    > 2. 值为String, 默认为空

  - bgColor:

    > 1. 设置背景颜色
    > 2. 值为表示颜色的String, 默认为空

## 3.6 &lt;ha-page>

- props: 

  - page:

    > 1. 总页数
    > 2. 值为Number, 默认为1

## 3.7 &lt;ha-check>

- props:

  - isCheck:

    > 1. 初始时是否为checked
    > 2. 值为Boolean, 默认为false

  - content

    > 1. 该check的内容
    > 2. 值为String, 默认为空

  - bgColor:

    > 1. 设置选框的颜色
    > 2. 值为String, 默认为空

- events:

  - checked:

    > 1. 当选框被点击时触发
    >
    > 2. 传递的参数为一个对象, 该对象如下
    >
    >    ```js
    >    {
    >      isCheck: 当前选框是否选中, 值为Boolean, 
    >      content:  与名为content的值一致
    >    }
    >    ```
    >
    >    

- 注: 

  > 1. 名为isCheck的prop只做初始化时使用
  > 2. 触发checked事件是并不会改变父组件传递进来的绑定于名为isCheck的prop的值, 请根据事件传递的参数对象中的isCheck值进行判断