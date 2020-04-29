# 4. 物料

## 4.1 &lt;ha-menu-vertical>

- 简介：

  一个垂直的菜单

- props:

  - 具有跟`<ha-rectangle>`除`overflow`外一致的props

  - singleOpen:

    1. 是否在打开一个子菜单时关闭其他同级的子菜单
    2. 类型为`Boolean`
    3. 默认为`false`

  - menuList:

    1. 该菜单要显示的内容的数据对象
    2. 类型为`Object` 
    3. 默认为空对象`{}`
    4. 该对象由两种对象组成,一种的表示“group”, 一种表示“item”
    5. “group”对象示例: 
    
       ```js
       {
         //在打开组时相同`groupId`的组会一起打开, 所以一般设置为独有值。
         groupId: '由任意字符串组成',  // 必需，该组件以此判断是否为“group”         
         menuTitle: '该group的标题', // 可选，但一般有
         menuList: [一个由group或item对象组成的数组], // 可选，但一般有
         icon: '一个表示图标的url' // 可选
       }
       ```
    
    6. “item”对象示例:
    
       ```js
       {
         title: 'item的标题', // 必需， 该组件以此判断是否为“item”
         route: '与`vue-router`的路由一致', // 可选，但一般有
         icon: '一个表示图标的url' // 可选
       }
       ```
    
    7. 该对象的数据结构示例如下:

      ```js
      { // 第一层菜单
        menuTitle: 'ha-menu-vertical-title', 
        menuList: [
          { // 第二层菜单
            groupId: '1', // 必需，该组件以此判断是否为“group”
            menuTitle: 'groupTitle', 
            icon: '一个表示图标的url',
            menuList: [
              { // 第三层菜单
                groupId: '2', 
                menuTitle: 'g2', 
                menuList: [
                  { // 这里是item
                    title: 'list1', // 必需， 该组件以此判断是否为“item”
                    route: '与`vue-router`的路由一致',
                    icon: '一个表示图标的url'
                  },
                  { // 这里是item
                    title: 'list1', 
                    route: '与`vue-router`的路由一致'
                    icon: '一个表示图标的url'
                  },
                  { // 这里是item
                    title: 'list1',
                    route: '与`vue-router`的路由一致'
                  },
                  { // 这里是item
                    title: 'list1',
                    route: '与`vue-router`的路由一致'
                  },
                ] 
              },
              { // 第三层菜单
                groupId: '3',
                menuTitle: 'g3',
                icon: '一个表示图标的url',
                menuList: [
                  { // 这里是item
                    title: 'list1',
                    route: '与`vue-router`的路由一致'
                  },
                  { // 这里是item
                    title: 'list1',
                    route: '与`vue-router`的路由一致'
                  },
                  { // 这里是item
                    title: 'list1',
                    route: '与`vue-router`的路由一致'
                  },
                  { // 这里是item
                    title: 'list1',
                    route: '与`vue-router`的路由一致'
                  },
                ] 
              }
            ]
          }
        ]
      }
      ```

  - bgColor: 

    1. 表示“group”和“item”的颜色
    2. 类型为`Array`
    3. 值为一个`length=2`的数组, 分别表示`[group的背景颜色, item的背景颜色]`, 
    4. 默认值为`undefined`
    5. [参照全局颜色中的bgColor](../main/README.md#0.1颜色)

## 4.2 &lt;ha-menu-horizontal>

- 简介：

  一个水平表示的菜单

- props:

  - 与`<ha-menu-vertical>`具有一致的props

## 4.3 &lt;ha-input>

- 简介：

  一个有错误提示的输入框

- props:

  - 具有跟`<ha-rectangle>`除`overflow`外一致的props

  - type:

    1. 表示输入框的类型
    2. 类型为`String`, 
    3. 默认值为'text'
    4. 该值不能为'file'

  - value: 

    1. 该输入框的值
    2. 类型为`String`
    3. 默认为`undefined`
    4. 支持`v-model`指令

  - labe

    1. 表示该输入框的lable
    2. 类型为`String`,
    3. 默认为`undefined`

  - name:

    1. 该输入框的名字
    2. 类型为`String`,
    3. 默认为`undefined`
    4. 为`<input>`标签的name属性使用
    5. 为`<lable>`标签的for属性使用

  - bgColor:

    1. 设置背景颜色
    2. 类型为`String`
    3. 默认为`undefined`
    4. [参照全局颜色中的bgColor](../main/README.md#0.1颜色)

  - checkFun:

    1. 一个检验名为`value`的prop的值的函数,
    2. 类型为`Function`
    3. 默认为:
  
       ```js
       function(val) {
         return {
           msg: undefined,
           bgColor: this.bgColor
         }
       }
       ```
    
    4. 该函数需要返回一个对象:
    
       ```js
       {
         msg: '一个提示的字符串',
         bgColor: '提示时的背景颜色'
       }
       ```

## 4.4 &lt;ha-table>

- 简介：

  一个具有'base'和'advance'两种状态的表格

- props:

  - 具有跟`<ha-rectangle>`除`overflow`外一致的props

  - type: 

    1. 设置表格状态为'base'或者'advance'
    2. 类型为`String`
    3. 可选值为'base'或'advance'
    4. 默认为'base'

  - datas:

    1. 表格的数据
    2. 值为一个对象, 示例如下
    
       ```js
       {
         head:  ['列一','列二','列三','列四', '列5','列6','列7','列8','列9'], // 表头，
         rows: [ 
           {
             bgColor: 'blue', // 设置该行颜色,如果名为`type`的prop值为'base', 此项无效
             row: [1,'这是ha-table的一个单元格',3,4,5,6,7,8,9]
           }, 
           {
             bgColor: 'red',// 设置该行颜色,如果名为`type`的prop值为base, 此项r无效
             row: [{
               data: 1,
               bgColor: 'yellow'// 设置该单元格颜色,如果名为`type`的prop值为base, 此项无效
             },2,3,4,5]
           }, 
           [1,2,3,4,5], 
           [1,2,3,4,5], 
           [{
             data: 0,
             bgColor: 'blue'
           },0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0]
         ]
       }
       ```
    
       

  - perPage:

    1. 如果名为`type`的prop值为'base', 该prop无效
    2. 设置每页展示的行数
    3. 类型为Number
    4. 默认为10

  - colNoShow:

    1. 如果名为`type`的prop值为'base', 该prop无效
    2. 设置初始化时不展示的列
    3. 类型为`Array`
    4. 值为一个一维数组, 数组的每个元素为名为`datas`的prop的对象的`head`里面之一, 默认为`[]`

  - bgColor:

    1. 设置背景颜色
    2. 类型为`Array`
    3. 默认为`undefined`
    4. 值为一个`length`为`3`的数组, 分别表示：
   
    ```js
    [表头的颜色, 除去表头行数为奇数的行的颜色,  除去表头行数为偶数的行的颜色]
    ```

- events:

  - pageError:

    1. 当名为`type`的prop为'advance'时有效
    2. 当页面输入框输入数字跳转时, 该数字小于或大于总页数时触发
    3. 传递的参数为输入的数字, 此参数的类型为`String`

- 实例

1. 基础表格

代码：
```vue

```

结果：
<doc-result>
  <mat-table-base></mat-table-base>
</doc-result>

2. 进阶表格

代码：
```vue

```

结果：
<doc-result>
  <mat-table-ad></mat-table-ad>
</doc-result>

<!-- ##4.5 $lt;ha-file>

>TODO -->