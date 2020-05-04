(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1131:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"haru-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haru-ui"}},[t._v("#")]),t._v(" Haru UI")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("一个实验性质的组件库")])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(770),alt:"主图"}})]),t._v(" "),e("h2",{attrs:{id:"简介及特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介及特点"}},[t._v("#")]),t._v(" 简介及特点")]),t._v(" "),e("ul",[e("li",[t._v("名为“Haru UI”的组件库")]),t._v(" "),e("li",[t._v('实现了类似"坐标系统"的坐标器')]),t._v(" "),e("li",[t._v("使用grid和flex布局实现自适应")]),t._v(" "),e("li",[t._v("颜色可高度自定义")]),t._v(" "),e("li",[t._v("物料 = 容器 + 填充物")]),t._v(" "),e("li",[t._v("应用 = 坐标系 + 容器 + 填充物 = 坐标系 + 物料")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("npm install haru"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ui "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save\n")])])]),e("ul",[e("li",[e("strong",[t._v("全局")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Haru "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'haru-ui'")]),t._v("\n\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Haru"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("ol",[e("li",[t._v("全局引入并不会引入HaIcons和HaCharts")]),t._v(" "),e("li",[t._v("要使用HaIcons，请参照"),e("RouterLink",{attrs:{to:"/icons/"}},[e("strong",[t._v("HaIcons")])])],1),t._v(" "),e("li",[t._v("要使用HaCharts，请参照"),e("RouterLink",{attrs:{to:"/charts/"}},[e("strong",[t._v("HaCharts")])])],1)])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("单组件按需引入")])])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),e("ol",[e("li",[t._v("单组件引入时引用的是源码， 故在打包时需要支持"),e("code",[t._v("vue")]),t._v("和"),e("code",[t._v("sass")]),t._v("，以及"),e("code",[t._v("vue")]),t._v("的"),e("code",[t._v("jsx")]),t._v("语法的编译")]),t._v(" "),e("li",[t._v("本组件库使用"),e("code",[t._v("webpack")]),t._v("打包编译")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'haru-ui/style'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//导入样式表")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入各个组件，组件名[类目]如下表所示")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("组件名")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PascalCase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'haru-ui/lib/components/类目/组件名(kebab-case)'")]),t._v(" \n\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("组件名")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PascalCase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("组件名[类目]")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("组件名[类目]")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("组件名[类目]")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("RouterLink",{attrs:{to:"/guide/coordinater/#_1-1-ha-coordinater"}},[e("strong",[t._v("HaCoordinater[coordinater]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/containers/#_2-1-ha-rectangle"}},[e("strong",[t._v("HaRectangle[containers]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/guide/containers/#_2-2-ha-card"}},[e("strong",[t._v("HaCard[containers]")])])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("RouterLink",{attrs:{to:"/guide/stuffings/#_3-1-ha-button"}},[e("strong",[t._v("HaButton[struffings]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/stuffings/#_3-4-ha-avatar"}},[e("strong",[t._v("HaAvatar[struffings]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/guide/stuffings/#_3-7-ha-check"}},[e("strong",[t._v("HaCheck[struffings]")])])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("RouterLink",{attrs:{to:"/guide/stuffings/#_3-2-ha-number"}},[e("strong",[t._v("HaNumber[struffings]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/stuffings/#_3-3-ha-letter"}},[e("strong",[t._v("HaLetter[struffings]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/guide/stuffings/#_3-5-ha-back"}},[e("strong",[t._v("HaBack[struffings]")])])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("RouterLink",{attrs:{to:"/guide/stuffings/#_3-6-ha-page"}},[e("strong",[t._v("HaPage[struffings]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/materials/#_4-4-ha-table"}},[e("strong",[t._v("HaTable[materials]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/guide/materials/#_4-1-ha-menu-ver"}},[e("strong",[t._v("HaMenuVer[materials]")])])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("RouterLink",{attrs:{to:"/guide/materials/#_4-2-ha-menu-hor"}},[e("strong",[t._v("HaMenuHor[materials]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/materials/#_4-3-ha-input"}},[e("strong",[t._v("HaInput[materials]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/guide/others/#_5-5-haru-notify"}},[e("strong",[t._v("HaNotify[others]")])])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("RouterLink",{attrs:{to:"/guide/others/#_5-3-ha-tooltip"}},[e("strong",[t._v("HaTooltip[others]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/others/#_5-2-ha-scroll"}},[e("strong",[t._v("HaScroll[others]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("RouterLink",{attrs:{to:"/guide/others/#_5-1-ha-mask"}},[e("strong",[t._v("HaMask[others]")])])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("RouterLink",{attrs:{to:"/guide/others/#_5-4-ha-detailbox"}},[e("strong",[t._v("HaDetailBox[others]")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("特别的，还有:")]),t._v(" "),e("RouterLink",{attrs:{to:"/guide/icons/"}},[e("strong",[t._v("HaIcons")])]),t._v(", "),e("RouterLink",{attrs:{to:"/charts/"}},[e("strong",[t._v("HaCharts")])])],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v('本组件库未经严格测试, 只作为为实验"坐标系统"的概念在前端中的应用所产生的组件库,如果要使用请自行测试.同时有bug的话也欢迎提交'),e("a",{attrs:{href:"https://github.com/HydrousDelta/Haru-UI/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),e("OutboundLink")],1)])]),t._v(" "),e("hr")])}),[],!1,null,null,null);a.default=r.exports},770:function(t,a,s){t.exports=s.p+"assets/img/haru-ui.f582dc3b.png"}}]);