# 4. 物料

## 4.1 &lt;ha-menu-vertical>

- 简介：

  1. 一个垂直的菜单

- props:

  - 具有跟&lt;ha-rectangle>除overflow外一致的props

  - singleOpen:

    1. 是否在打开一个子菜单时关闭其他同级的子菜单
    2. 值为Boolean, 默认为false

  - menuList:

    1. 该菜单要显示的内容对象
    
    2. 值为一个具有树状结构的对象, 默认为空对象{}
    
    3. 该对象由两种对象组成,一种的表示子菜单的对象, 一种是表示item的对象
    
    4. 子菜单对象示例: 
    
       ```js
       {
         menuTitle: '该子菜单的标题',
         menuList: [一个由子菜单对象或item对象组成的数组],
         icon: '一个表示图标的url'
       }
       ```
    
    5. item对象示例:
    
       ```js
       {
         title: 'item的标题',
         route: '点击时的vue-router的跳转路由',
         icon: '一个表示图标的url'
       }
       ```
    
    6. 该对象的数据结构示例如下:

       ```js
       {
         menuTitle: 'ha-menu-vertical-title',
         menuList: [
           {
             groupId: '1',
             menuTitle: 'groupTitle',
             icon: '一个表示图标的url',
             menuList: [
               {
                 groupId: '2',
                 menuTitle: 'g2',
                 menuList: [
                   {
                     title: 'list1',
                     route: '/list1',
                     icon: '一个表示图标的url'
                   },
                   {
                     title: 'list1',
                     route: '/list1'
                     icon: '一个表示图标的url'
                   },
                   {
                     title: 'list1',
                     route: '/list1'
                   },
                   {
                     title: 'list1',
                     route: '/list1'
                   },
                 ] 
               },
               {
                 groupId: '3',
                 menuTitle: 'g3',
                 icon: '一个表示图标的url',
                 menuList: [
                   {
                     title: 'list1',
                     route: '/list1'
                   },
                   {
                     title: 'list1',
                     route: '/list1'
                   },
                   {
                     title: 'list1',
                     route: '/list1'
                   },
                   {
                     title: 'list1',
                     route: '/list1'
                   },
                 ] 
               }
             ]
           }
         ]
       }
       ```

  - bgColor: 

    1. 表示子菜单和item的颜色
    2. 值为一个length为2的数组, 分别表示[group的背景颜色, item的背景颜色], 默认值为空

## 4.2 &lt;ha-menu-horizontal>

- 简介：

  1. 一个水平表示的菜单

- props:

  - 与&lt;ha-menu-vertical>具有一致的props

## 4.3 &lt;ha-input>

- 简介：

  1. 一个有错误提示的输入框

- props:

  - 具有跟&lt;ha-rectangle>除overflow外一致的props

  - type:

    1. 表示输入框的类型
    2. 值为String, 默认为'text'
    3. 不能为'file'

  - value: 

    1. 该输入框的值
    2. 值为String, 默认为空
    3. 支持v-model

  - labe

    1. 表示该输入框的lable
    2. 值为String, 默认为空

  - name:

    1. 该输入框的名字, 为lable和input的for属性使用
    2. 值为String, 默认为空

  - bgColor:

    1. 设置默认背景颜色
    2. 值为表示颜色的String, 默认为空

  - checkFun:

    1. 一个检验value的函数,
    
    2. 值为Function, 默认为
    
       ```js
       function(val) {
         return {
           msg: '',
           bgColor: this.bgColor
         }
       }
       ```
    
    3. 该函数返回一个对象:
    
       ```js
       {
         msg: '一个提示的字符串',
         bgColor: '提示时的背景颜色'
       }
       ```

## 4.4 &lt;ha-table>

- 简介：

  1. 一个具有base和advance两种状态的表格

- props:

  - 具有跟&lt;ha-rectangle>除overflow外一致的props

  - type: 

    1. 设置类型为base或者advance
    2. 值为base或者advance, 默认为base

  - datas:

    1. 表格的数据
    
    2. 值为一个对象, 示例如下
    
       ```js
       {
         head:  ['列一','列二','列三','列四', '列5','列6','列7','列8','列9'], // 表头，
         rows: [ 
           {
             bgColor: 'blue', // 设置该行颜色,如果名为type的prop值为base, bgColor无效
             row: [1,'这是ha-table的一个单元格',3,4,5,6,7,8,9]
           }, 
           {
             bgColor: 'red',// 设置该行颜色,如果名为type的prop值为base, bgColor无效
             row: [{
               data: 1,
               bgColor: 'yellow'// 设置该单元格颜色,如果名为type的prop值为base, 则无效
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

    1. 如果名为type的prop值为base, 该prop无效
    2. 设置每页展示的行数
    3.  值为Number, 默认为10

  - colNoShow:

    1. 如果名为type的prop值为base, 该prop无效
    2. 设置初始化时不展示的列
    3. 值为一个一维数组, 数组的每个元素为名为datas的prop的对象的head里面之一, 默认为空

  - bgColor:

    1. 设置颜色
    2. 值为一个length为3的数组, 分别表示[表头的颜色, 除去表头行数为奇数的行的颜色,  除去表头行数为偶数的行的颜色], 默认为空

- events:

  - pageError:

    1. 当名为type的prop为advance时有效
    2. 当页面输入框输入数字跳转时, 该数字小于或大于总页数时触发
    3. 传递的参数为输入的数字字符串

<!-- ##4.5 $lt;ha-file>

>TODO -->