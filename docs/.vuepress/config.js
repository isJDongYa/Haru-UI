module.exports = {
  bace: "/haru-ui/",
  title: "Haru UI",
  port: 9090,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      ['/start/', '起步'],
      ['/main/', '0. 全局'],
      ['/coordinater/', '1. 坐标器'],
      ['/containers/', '2. 容器'],
      ['/stuffings/', '3. 填充物'],
      ['/materials/', '4. 物料'],
      ['/others/', '5. 其它'],
      
    ],
    repo: 'HydrousDelta/Haru-UI',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: true
  }
}