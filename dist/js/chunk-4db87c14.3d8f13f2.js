(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db87c14"],{"0d97":function(s,a,t){},"0fb4":function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Checkbox 复选框")]),t("h2",[s._v("基本用法")]),t("p",[s._v("单个的checkbox,通过v-model绑定一个布尔值(Boolean)")]),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("div",{attrs:{id:"checkbox"}},[t("nt-checkbox",{model:{value:s.zhuge,callback:function(a){s.zhuge=a},expression:"zhuge"}},[s._v("诸葛孔明")]),t("nt-checkbox",{model:{value:s.situ,callback:function(a){s.situ=a},expression:"situ"}},[s._v("王司徒")]),t("p",[s._v("\n    已选择："),s.zhuge?t("span",[s._v("诸葛孔明")]):s._e(),s.zhuge&&s.situ?t("span",[s._v(",")]):s._e(),s.situ?t("span",[s._v("王司徒")]):s._e()])],1)]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checkbox"')]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"zhuge"')]),s._v(">")]),s._v("诸葛孔明"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v("  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"situ"')]),s._v(">")]),s._v("王司徒"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    已选择："),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'zhuge'")]),s._v(">")]),s._v("诸葛孔明"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'zhuge && situ'")]),s._v(">")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'situ'")]),s._v(">")]),s._v("王司徒"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data(){\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("zhuge")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("situ")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        }\n    }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n\n")])])])]),t("h2",[s._v("带边框的复选框")]),t("p",[s._v("只需要传递一个border属性即可")]),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("div",{attrs:{id:"checkbox"}},[t("nt-checkbox",{attrs:{border:""},model:{value:s.yide,callback:function(a){s.yide=a},expression:"yide"}},[s._v("张翼德")]),t("nt-checkbox",{attrs:{border:""},model:{value:s.yunchang,callback:function(a){s.yunchang=a},expression:"yunchang"}},[s._v("关云长")]),t("p",[s._v("\n    已选择："),s.yide?t("span",[s._v("张翼德")]):s._e(),s.yide&&s.yunchang?t("span",[s._v(",")]):s._e(),s.yunchang?t("span",[s._v("关云长")]):s._e()])],1)]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checkbox"')]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yide"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(">")]),s._v("张翼德"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v("  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yunchang"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(">")]),s._v("关云长"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(">")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    已选择："),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yide'")]),s._v(">")]),s._v("张翼德"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yide && yunchang'")]),s._v(">")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yunchang'")]),s._v(">")]),s._v("关云长"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data(){\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("yide")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("yunchang")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        }\n    }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),t("h2",[s._v("禁用复选框")]),t("p",[s._v("只需要传递一个disabled属性即可,可选参数为Boolean值,默认为false")]),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("div",{attrs:{id:"checkbox"}},[t("nt-checkbox",{attrs:{disabled:!0},model:{value:s.yide,callback:function(a){s.yide=a},expression:"yide"}},[s._v("张翼德")])],1)]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checkbox"')]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yide"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("张翼德"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data(){\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("yide")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        }\n    }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),t("h2",[s._v("绑定change事件")]),t("p",[s._v("可以绑定change事件来监听复选框的改变,默认传递参数为新的Boolean值")]),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("div",{attrs:{id:"checkbox"}},[t("nt-checkbox",{on:{change:s.handleChange},model:{value:s.zhuge,callback:function(a){s.zhuge=a},expression:"zhuge"}},[s._v("诸葛孔明(点击试试)")])],1)]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checkbox"')]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"zhuge"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleChange"')]),s._v(">")]),s._v("诸葛孔明(点击试试)"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-checkbox")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data(){\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("zhuge")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(":{\n        handleChange(val){\n            alert("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`您"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${val?"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'选择了'")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'取消了'")]),s._v("}")]),s._v("诸葛孔明`")]),s._v(")\n        }\n    }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),t("h3",[s._v("Attributes")]),s._m(0),t("h3",[s._v("Events")]),s._m(1)],1)},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("参数")]),t("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),t("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),t("th",{staticStyle:{"text-align":"left"}},[s._v("可选值")]),t("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("border")]),t("td",{staticStyle:{"text-align":"left"}},[s._v("是否需要边框")]),t("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",{pre:!0},[s._v("true")]),t("code",{pre:!0},[s._v("false")])]),t("td",{staticStyle:{"text-align":"left"}},[t("code",{pre:!0},[s._v("false")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("disabled")]),t("td",{staticStyle:{"text-align":"left"}},[s._v("按钮是否禁用")]),t("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",{pre:!0},[s._v("true")]),t("code",{pre:!0},[s._v("false")])]),t("td",{staticStyle:{"text-align":"left"}},[t("code",{pre:!0},[s._v("false")])])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),t("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),t("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("chaneg")]),t("td",{staticStyle:{"text-align":"left"}},[s._v("监听复选框改变的事件")]),t("td",{staticStyle:{"text-align":"left"}},[s._v("新是否选中的Boolean值")])])])])}],r={data:function(){return{zhuge:!0,situ:!1,yide:!1,yunchang:!0}},methods:{handleChange:function(s){alert("您".concat(s?"选择了":"取消了","诸葛孔明"))}}},n=r,v=(t("18bd"),t("6691")),p=Object(v["a"])(n,e,l,!1,null,null,null);a["default"]=p.exports},"18bd":function(s,a,t){"use strict";var e=t("0d97"),l=t.n(e);l.a}}]);
//# sourceMappingURL=chunk-4db87c14.3d8f13f2.js.map