# 4. 物料

## 4.1 &lt;ha-menu-ver>

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
    
    7. 整个menuList对象的数据结构示例如下:

      ```js
      { // 第一层菜单
        menuTitle: 'ha-menu-ver-title', 
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
    5. [参照全局颜色中的bgColor](../main/README.md#_0-1-颜色)

- 实例：

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-menu-ver 
    :coor="[[[15,1], [16, 50]]]" 
    :bgColor="['bgc-blue', 'bgc-lightBlue']" 
    :menuList="menuList"
  ></ha-menu-ver>
</ha-coordinater>
```

其中的menuList为：

```js
menuList:{ // 第一层菜单
  menuTitle: 'menu-title', 
  menuList: [
    { // 第二层菜单
      groupId: '1', // 必需，该组件以此判断是否为“group”
      menuTitle: 'groupTitle', 
      icon: HaIcons['message_white'],
      menuList: [
        { // 第三层菜单
          groupId: '2', 
          menuTitle: 'g2', 
          menuList: [
            { // 这里是item
              title: 'item', // 必需， 该组件以此判断是否为“item”
              route: '/materials/#_4-1-ha-menu-ver',
              icon: HaIcons['message_white']
            },
            { // 这里是item
              title: 'item', 
              route: '/materials/#_4-1-ha-menu-ver',
              icon: HaIcons['message_white']
            },
            { // 这里是item
              title: 'item',
              route: '/materials/#_4-1-ha-menu-ver',
            },
            { // 这里是item
              title: 'item',
              route: '/materials/#_4-1-ha-menu-ver',
            },
          ] 
        },
        { // 第三层菜单
          groupId: '3',
          menuTitle: 'g3',
          icon: HaIcons['message_white'],
          menuList: [
            { // 这里是item
              title: 'item',
              route: '/materials/#_4-1-ha-menu-ver',
            },
            { // 这里是item
              title: 'item',
              route: '/materials/#_4-1-ha-menu-ver',
            },
            { // 这里是item
              title: 'item',
              route: '/materials/#_4-1-ha-menu-ver',
            },
            { // 这里是item
              title: 'item',
              route: '/materials/#_4-1-ha-menu-ver',
            },
          ] 
        }
      ]
    }
  ]
}
```

结果：
<doc-result>
  <mat-menu-ver></mat-menu-ver>
</doc-result>

## 4.2 &lt;ha-menu-hor>

- 简介：

  一个水平表示的菜单

- props:

  - 与`<ha-menu-ver>`具有一致的props

- 实例：

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-menu-hor 
    :coor="[[[8,15], [32, 5]]]" 
    :bgColor="['bgc-blue', 'bgc-lightBlue']" 
    :menuList="menuList"
  ></ha-menu-hor>
</ha-coordinater>
```

其中的menuList为：

```js
menuList:{ // 第一层菜单
  menuTitle: 'menu-title', 
  menuList: [
    { // 第二层菜单
      groupId: '1', // 必需，该组件以此判断是否为“group”
      menuTitle: 'groupTitle', 
      icon: HaIcons['message_white'],
      menuList: [
        { // 第三层菜单
          groupId: '2', 
          menuTitle: 'g2', 
          menuList: [
            { // 这里是item
              title: 'item', // 必需， 该组件以此判断是否为“item”
              route: '/materials/#_4-2-ha-menu-hor,
              icon: HaIcons['message_white']
            },
            { // 这里是item
              title: 'item', 
              route: '/materials/#_4-2-ha-menu-hor,
              icon: HaIcons['message_white']
            },
            { // 这里是item
              title: 'item',
              route: '/materials/#_4-2-ha-menu-hor,
            },
            { // 这里是item
              title: 'item',
              route: '/materials/#_4-2-ha-menu-hor,
            },
          ] 
        }
      ]
    },
    { // 第三层菜单
      groupId: '3',
      menuTitle: 'g3',
      icon: HaIcons['message_white'],
      menuList: [
        { // 这里是item
          title: 'item',
          route: '/materials/#_4-2-ha-menu-hor,
        },
        { // 这里是item
          title: 'item',
          route: '/materials/#_4-2-ha-menu-hor,
        },
        { // 这里是item
          title: 'item',
          route: '/materials/#_4-2-ha-menu-hor,
        },
        { // 这里是item
          title: 'item',
          route: '/materials/#_4-2-ha-menu-hor,
        },
      ] 
    }
  ]
}
```

结果：
<doc-result>
  <mat-menu-hor></mat-menu-hor>
</doc-result>

## 4.3 &lt;ha-input>

- 简介：

  一个有错误提示的输入框

- props:

  - 具有跟`<ha-rectangle>`除`overflow`外一致的props

  - type:

    1. 表示输入框的类型
    2. 类型为`String`, 
    3. 默认值为'text'
    4. 可选值为：'text','number','password', 'date', 'color'

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
    4. [参照全局颜色中的bgColor](../main/README.md#_0-1-颜色)

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
- 实例：

代码：
```html
  <ha-coordinater :grid="[[0, 50, 50]]">
    <ha-input 
      :coor="[[[4,2], [42, 8]]]" 
      lable="text输入框："
      name="input"
      type='text'
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-blue" 
      :checkFun="checkFun1"
      v-model="value1"
    ></ha-input>
    <ha-input 
      :coor="[[[4,11], [42, 8]]]" 
      lable="密码："
      name="input"
      type="password"
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-yellow" 
      :checkFun="checkFun2"
      v-model="value2"
    ></ha-input>
    <ha-input 
      :coor="[[[4,20], [42, 8]]]" 
      lable="数字："
      name="input"
      type="number"
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-orange" 
      :checkFun="checkFun3"
      v-model="value3"
    ></ha-input>
    <ha-input 
      :coor="[[[4,29], [42, 8]]]" 
      lable="日期："
      name="input"
      type="date"
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-purple" 
      :checkFun="checkFun4"
      v-model="value4"
    ></ha-input>
    <ha-input 
      :coor="[[[4,38], [42, 8]]]" 
      lable="颜色："
      name="input"
      type="color"
      border="solid 1px #ddd"
      radius="5px"
      bgColor="bgc-grey" 
      :checkFun="checkFun5"
      v-model="value5"
    ></ha-input>
  </ha-coordinater>
```
其中各个checkFun为：
```js
checkFun1(val) {
  if(val!=='text') {
    return {
      msg: '不是text',
      bgColor: 'bgc-red'
    }
  }else {
    return {
      msg: '是text',
      bgColor: 'bgc-green'
    }
  }
},
checkFun2(val) {
  if(val!=='1234') {
    return {
      msg: '错误！密码是1234',
      bgColor: 'bgc-red'
    }
  }else {
    return {
      msg: '正确！密码是1234',
      bgColor: 'bgc-green'
    }
  }
},
checkFun3(val) {
  if(val!=='123456') {
    return {
      msg: '错误!不是123456',
      bgColor: 'bgc-red'
    }
  }else {
    return {
      msg: '正确！是123456',
      bgColor: 'bgc-green'
    }
  }
},
checkFun4(val) {
  if(val!=='2020-05-20') {
    return {
      msg: '错误！日期是2020-5-20',
      bgColor: 'bgc-red'
    }
  }else {
    return {
      msg: '正确！日期是2020-5-20',
      bgColor: 'bgc-green'
    }
  }
},
checkFun5(val) {
  return {
    msg: '选择的颜色为' + val,
    bgColor: 'bgc-grey'
  }
}
```

结果：
<doc-result>
  <mat-input></mat-input>
</doc-result>


## 4.4 &lt;ha-table>

- 简介：

  一个基础的表格

- props:

  - 具有跟`<ha-rectangle>`除`overflow`外一致的props

  - hcHeght: 

    1. 设置表格头部和内容的高度
    2. 类型为`Array`
    3. 值为一个`length`为`2`的数组, 分别表示`[头部高度, 内容高度]`
    4. “头部高度”和“内容高度”与css的height一致
    5. 默认为`['15%', '85%']`

  - datas:

    1. 表格的数据
    2. 类型为`Object`
    3. 值为一个对象, 示例如下
    
       ```js
       {
         head:  ['列一','列二','列三','列四', '列5','列6','列7','列8','列9'], // 表头，
         rows: [ 
           {
             bgColor: 'bgc-blue', // 可选，独立设置该行颜色
             row: [1,'这是ha-table的一个单元格',3,4,5,6,7,8,9]
           }, 
           {
             bgColor: 'bgc-red',//可选，独立设置该行颜色
             row: [{
               data: 1,
               bgColor: 'bgc-yellow'// 可选，独立设置该单元格颜色
             },2,3,4,5]
           }, 
           [1,2,3,4,5], 
           [1,2,3,4,5], 
           [{
             data: 0,
             bgColor: 'bgc-blue'
           },0,0,0],
           [0,0,0,0],
           [0,0,0,0]
         ]
       }
       ```

  - bgColor:

    1. 设置背景颜色
    2. 类型为`Array`
    3. 默认为`undefined`
    4. 值为一个`length`为`3`的数组, 分别表示：
   
    ```js
    [表头的颜色, 除去表头行数为奇数的行的颜色,  除去表头行数为偶数的行的颜色]
    ```

    5. [参照全局颜色中的bgColor](../main/README.md#_0-1-颜色)


- 实例

代码：
```html
<ha-coordinater :grid="[[0, 50, 50]]">
  <ha-table 
    :coor="[[[1,1], [50, 50]]]" 
    :hcHeght="['15%', '85%']"
    :bgColor="['bgc-white', 'bgc-lightGrey', 'bgc-white']" 
    :datas="datas"
  ></ha-table>
</ha-coordinater>
```
其中datas为：
```js
datas: {
  head:  ['列一','列二','列三','列四', '列5','列6','列7','列8','列9'], // 表头，
  rows: [ 
    {
      bgColor: 'bgc-lightBlue', // 设置该行颜色
      row: ['这行的颜色是lightBlue',2,3,4,5,6,7,8,9]
    }, 
    {
      bgColor: 'bgc-red',// 设置该行颜色
      row: [{
        data: '黄色格子',
        bgColor: 'bgc-yellow'// 设置该单元格颜色
      },
      2,3,4,'这行的颜色是yellow']
    }, 
    [1,2], 
    [1,2,3,4,5], 
    [{
      data: '蓝色格子',
      bgColor: 'bgc-blue'
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
    [0,0,0,0]
  ]
}
```

结果：
<doc-result>
  <mat-table-base></mat-table-base>
</doc-result>

<!-- ##4.5 $lt;ha-file>

>TODO -->