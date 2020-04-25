# 5.4 &lt;ha-detailBox>

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