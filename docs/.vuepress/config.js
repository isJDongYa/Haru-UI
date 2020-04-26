module.exports = {
  base: "/Haru-UI/docs/",
  title: "Haru UI",
  port: 9090,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
  ],
  themeConfig: {
    sidebar: [
      ['/start/', '起步'],
      ['/main/', '0. 全局'],
      ['/coordinater/', '1. 坐标器'],
      ['/containers/', '2. 容器'],
      ['/stuffings/', '3. 填充物'],
      ['/materials/', '4. 物料'],
      ['/others/', '5. 其它'],
      ['/epologue/', '后记']
      
    ],
    repo: 'HydrousDelta/Haru-UI',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我完善此文档!',

    lastUpdated: 'Last Updated',
    searchPlaceholder: 'Search...',
    smoothScroll: true
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  }
}