(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{483:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"创建第一个枪包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建第一个枪包"}},[t._v("#")]),t._v(" 创建第一个枪包")]),t._v(" "),s("p",[t._v("一个最简单的枪包，需要一个根文件夹、一个命名空间文件夹、一个枪包描述文件。")]),t._v(" "),s("ul",[s("li",[t._v("根文件夹的命名可以随意取。尽量不要使用太过大众的命名，避免与其他枪包产生文件名冲突。")]),t._v(" "),s("li",[t._v("枪包命名空间决定你的枪包中定义的配件、枪械以及各种资源的完整注册名。例如，你的枪包命名空间为 abc，那么在这个枪包中，textures/1.png 这个贴图文件的注册名即为 abc:1。这个枪包中定义的 ak47 注册名为 abc:ak47，与默认枪包的 tac:ak47 有所区分。你也可以使用其他枪包定义的枪械、配件和资源文件，例如，在 def 枪包中，你可以用 abc:1 这个注册名调用 abc 枪包中的 textures/1.png。")]),t._v(" "),s("li",[t._v("枪包描述文件为置于命名空间目录下的名为 pack.json 的文件，此文件名不可以修改。")])]),t._v(" "),s("p",[t._v("作为示范，本教程创建一个根目录为 tutorial_gun_pack，命名空间为 tutorial 的枪包。"),s("br"),t._v("\n文件结构如下:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tutorial_gun_pack\n└─ tutorial\n   └─ pack.json\n")])])]),s("p",[t._v("以下是枪包描述文件的详细定义")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 版本")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 名称，支持在语言文件中定义")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pack.tutorial.name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 描述文本，支持在语言文件中定义")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pack.tutorial.desc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 许可证")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CC BY-NC-ND 4.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作者")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MaydayMemory"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 日期：ISO 8601 标准，即 YYYY-MM-DD")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024-04-20"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以注意到，在枪包描述文件里，我们使用了语言文件来定义枪包名称和描述文本。下一章中，我们将解析如何 "),s("RouterLink",{attrs:{to:"/zh/gunpack/language/"}},[t._v("创建并使用语言文件")])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);