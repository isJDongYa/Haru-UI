---
sidebar: false
---

# 图标

## 使用方法：

- **全部导入**

  1. 先导入：

  ```js
  import HaIcons from 'haru-ui/dist/ha-icons' // 全部导入
  ```

  2. 然后在需要使用图标的地方应用`HaIcons['图标名称']`, 例如在通知组件中：

  ```js {6}
  this.$haru.notify(this, {
    msg: '这是一个haru UI的通知',
    duration: 300000,
    location: 'topRight',
    bgColor: 'bgc-lightBlue',
    icon: HaIcons['address']
  })
  ```
- **按需导入单个图标**

  ```js
  import 图标名 from 'haru-ui/lib/icons/TmallElves/图标名.svg'
  ```


- **图标名称如下所示, 总共182个**：

<doc-result height="auto">
  <ha-icons></ha-icons>
</doc-result>


- 这些图标来自[阿里图标：天猫精灵图标库](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=15640)