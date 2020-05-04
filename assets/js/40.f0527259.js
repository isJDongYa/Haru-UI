(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1132:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-容器"}},[t._v("#")]),t._v(" 2.容器")]),t._v(" "),s("ul",[s("li",[t._v("为填充物提供布局和定位")])]),t._v(" "),s("h2",{attrs:{id:"_2-1-ha-rectangle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-ha-rectangle"}},[t._v("#")]),t._v(" 2.1 <ha-rectangle>")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("简介：")]),t._v(" "),s("p",[t._v("提供基本的矩形容器")])]),t._v(" "),s("li",[s("p",[t._v("示例")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("这里一般用ha-coordinater组件包裹")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-reactangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":coor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" [一个三维数组]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    这里一般放置‘填充物’组件\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-reactangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-coordinater")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("props:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("coor:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("值为一个三维数组, 例如"),s("code",[t._v("[[[4,4], [42,42]], [[3,3], [19, 44]]]")]),t._v(", 默认为"),s("code",[t._v("[[[1, 1], [1, 1]]]")])])]),t._v(" "),s("blockquote"),t._v(" "),s("ol",[s("li",[t._v("该三维数组第一维的"),s("code",[t._v("length")]),t._v("表示该组件可用坐标的个数, 理论上应跟距离该组件最近的父级"),s("code",[t._v("<ha-coordinater>")]),t._v("的名为"),s("code",[t._v("grid")]),t._v("的prop的第一维"),s("code",[t._v("length")]),t._v('相同,即"容器的坐标个数应与坐标器的坐标系个数一致".')]),t._v(" "),s("li",[t._v("该三维数组的第二维有两个一维的数组,第一个表示坐标"),s("code",[t._v("[x, y]")]),t._v(", 原点在左上角, 第二个表示")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("x轴上的长度")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("即该容器跨越多少的"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("grid-column")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("线"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("y轴上的长度")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("即该容器跨越多少的"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("grid-row")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("线"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("width:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("与css的"),s("code",[t._v("width")]),t._v("相同")]),t._v(" "),s("li",[t._v('该prop默认值为"100%", 正常布局时保持默认即可填充完全整个'),s("code",[t._v("grid-area")]),t._v("的宽度, 如果修改此百分比则会在"),s("code",[t._v("grid-area")]),t._v("的宽度下进行计算: 实际宽度 = "),s("code",[t._v("grid-area")]),t._v("的宽度 * 该百分比值")]),t._v(" "),s("li",[t._v("如果修改为固定长度则"),s("code",[t._v("grid-area")]),t._v("宽度无效, 使用此设定的的宽度, 但是该容器坐标位置不受影响")])])]),t._v(" "),s("li",[s("p",[t._v("height:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("与css的"),s("code",[t._v("height")]),t._v("相同")]),t._v(" "),s("li",[t._v('该prop默认值为"100%", 正常布局时保持默认即可填充完全整个'),s("code",[t._v("grid-area")]),t._v("的高度, 如果修改此百分比则会在"),s("code",[t._v("grid-area")]),t._v("的高度下进行计算: 实际高度 = "),s("code",[t._v("grid-area")]),t._v("的高度 * 该百分比值")]),t._v(" "),s("li",[t._v("如果修改为固定长度则"),s("code",[t._v("grid-area")]),t._v("高度无效, 使用此设定的的高度, 但是该容器坐标位置不受影响")])])]),t._v(" "),s("li",[s("p",[t._v("border:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("与css的"),s("code",[t._v("border")]),t._v("相同")]),t._v(" "),s("li",[t._v("默认值为"),s("code",[t._v("undefined")])])])]),t._v(" "),s("li",[s("p",[t._v("radius:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("与css的"),s("code",[t._v("border-radius")]),t._v("相同")]),t._v(" "),s("li",[t._v("默认值为"),s("code",[t._v("undefined")])])])]),t._v(" "),s("li",[s("p",[t._v("padding:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("与css的"),s("code",[t._v("padding")]),t._v("相同")]),t._v(" "),s("li",[t._v("默认值为"),s("code",[t._v("undefined")])])])]),t._v(" "),s("li",[s("p",[t._v("z:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("与css的"),s("code",[t._v("z-index")]),t._v("一致")]),t._v(" "),s("li",[t._v("默认值为 "),s("code",[t._v("0")])]),t._v(" "),s("li",[t._v("目的是为了在坐标重叠时调整z轴上的前后关系")])])]),t._v(" "),s("li",[s("p",[t._v("overflow:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("与css的"),s("code",[t._v("overflow")]),t._v("一致")]),t._v(" "),s("li",[t._v("默认值为"),s("code",[t._v("hidden")]),t._v(", 创建BFC保证容器内的任何内容不影响容器外的内容.")])])]),t._v(" "),s("li",[s("p",[t._v("hover:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("设置鼠标hover时的表现")]),t._v(" "),s("li",[t._v("默认值为undefined")]),t._v(" "),s("li",[t._v("可选填opacity或者")])])]),t._v(" "),s("li",[s("p",[t._v("haShow:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("设置可视宽度(px)大于该值显示此容器")]),t._v(" "),s("li",[t._v("值为Number, 默认为"),s("code",[t._v("undefined")])])])])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意：")]),t._v(" "),s("ol",[s("li",[t._v("为保证名为"),s("code",[t._v("width")]),t._v("的prop不影响整个坐标系的正常等分, 此组件的默认"),s("code",[t._v("grid-column-span")]),t._v("为2")]),t._v(" "),s("li",[t._v("为保证名为"),s("code",[t._v("height")]),t._v("的prop不影响整个坐标系的正常等分, 此组件的默认"),s("code",[t._v("grid-row-span")]),t._v("为2")]),t._v(" "),s("li",[t._v("此组件的默认"),s("code",[t._v("position")]),t._v("为relative")])])]),t._v(" "),s("ul",[s("li",[t._v("实例")])]),t._v(" "),s("p",[t._v("代码:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-coordinater")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":grid")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[[0, 50, 50]]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":coor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[[[9,10], [7, 20]]]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-letter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("letter")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("H"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":capital")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fillColor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-letter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":coor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[[[18,10], [7, 20]]]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-letter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("letter")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fillColor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-letter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":coor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[[[27,10], [7, 20]]]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-letter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("letter")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fillColor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-letter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":coor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[[[36,10], [7, 20]]]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-letter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("letter")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fillColor")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-letter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-coordinater")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("结果：\n"),s("doc-result",[s("containers-rec")],1)],1),t._v(" "),s("h2",{attrs:{id:"_2-2-ha-card"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-ha-card"}},[t._v("#")]),t._v(" 2.2 <ha-card>")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("简介：")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("<ha-rectangle>")]),t._v("的基础上提供垂直和水平的三栏布局")])]),t._v(" "),s("li",[s("p",[t._v("示例")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("这里一般用ha-coordinater组件包裹")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ha-card")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":coor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" [一个三维数组]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    这里一般放置‘填充物’组件\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-card")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ha-coordinater")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("props:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("具有跟"),s("code",[t._v("<ha-rectangle>")]),t._v("除"),s("code",[t._v("overflow")]),t._v("外一致的props")])]),t._v(" "),s("li",[s("p",[t._v("type:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v('值为"Ver"或者"Hor", 默认为"Ver"')]),t._v(" "),s("li",[t._v('为"Ver"时为垂直的三栏容器, 为"Hor"时为水平的三栏容器')])])]),t._v(" "),s("li",[s("p",[t._v("hcfHeight:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("当名为"),s("code",[t._v("type")]),t._v('的prop为"Ver"时有效')]),t._v(" "),s("li",[t._v("值为一个"),s("code",[t._v("length")]),t._v("为3的一维数组, 默认为"),s("code",[t._v("['0%', '100%', '0%']")])]),t._v(" "),s("li",[t._v("该数组表示:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("头部名为header的slot的高度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 中间名为content的slot的高度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 底部名为footer的slot的高度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("lmrWidth:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("当名为"),s("code",[t._v("type")]),t._v('的prop为"Hor"时有效')]),t._v(" "),s("li",[t._v("值为一个"),s("code",[t._v("length")]),t._v("为3的一维数组, 默认为"),s("code",[t._v("['0%', '100%', '0%']")])]),t._v(" "),s("li",[t._v("该数组表示")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("左边名为left的slot的宽度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 中间名为middle的slot的宽度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 右边名为right的slot的宽度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("bgColor:")]),t._v(" "),s("ol",[s("li",[t._v("类型为"),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("值为一个"),s("code",[t._v("length")]),t._v("为3的一维数组, 例如"),s("code",[t._v("['blue', 'lightBlue', 'accentBlue']")]),t._v(", 分别表示:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("header或者left的背景颜色"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content或者middle的背景颜色"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" footer或者right的背景颜色"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("默认为"),s("code",[t._v("undefined")])]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/guide/main/#_0-1-颜色"}},[t._v("参照全局颜色中的bgColor")])],1)])])])]),t._v(" "),s("li",[s("p",[t._v("slots:")]),t._v(" "),s("ul",[s("li",[t._v("当名为"),s("code",[t._v("type")]),t._v('的prop的值为"Ver"时具有header, content, footer的具名插槽, 并且有一个跟content同位置的匿名插槽')]),t._v(" "),s("li",[t._v("当名为"),s("code",[t._v("type")]),t._v('的prop的值为"Hor"时具有left, middle, right的具名插槽, 并且有一个跟middle同位置的匿名插槽')])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意：")]),t._v(" "),s("p",[t._v("此组件的默认"),s("code",[t._v("position")]),t._v("为relative")])])]),t._v(" "),s("li",[s("p",[t._v("实例")])])]),t._v(" "),s("p",[t._v("代码：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n")])])]),s("p",[t._v("结果：\n"),s("doc-result",[s("containers-card")],1)],1)])}),[],!1,null,null,null);a.default=e.exports}}]);