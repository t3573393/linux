webpackJsonp([171],{1144:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement;o._self._c;return o._m(0)},staticRenderFns:[function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("section",[r("p",[r("strong",[o._v("rename命令")]),o._v("用字符串替换的方式批量改变文件名。")]),o._v(" "),r("h3",[o._v("语法")]),o._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[o._v("rename(参数)\n")])]),o._v(" "),r("h3",[o._v("参数")]),o._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[o._v("原字符串：将文件名需要替换的字符串；\n目标字符串：将文件名中含有的原字符替换成目标字符串；\n文件：指定要改变文件名的文件列表。\n")])]),o._v(" "),r("h3",[o._v("实例")]),o._v(" "),r("p",[o._v("将main1.c重命名为main.c")]),o._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[o._v("rename main1.c main.c main1.c\n")])]),o._v(" "),r("p",[r("strong",[o._v("rename支持通配符")])]),o._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[o._v("?  可替代单个字符\n*  可替代多个字符\n[charset]  可替代charset集中的任意单个字符\n")])]),o._v(" "),r("p",[o._v("文件夹中有这些文件foo1, ..., foo9, foo10, ..., foo278")]),o._v(" "),r("p",[o._v("如果使用"),r("code",{pre:!0},[o._v("rename foo foo0 foo?")]),o._v("，会把foo1到foo9的文件重命名为foo01到foo09，重命名的文件只是有4个字符长度名称的文件，文件名中的foo被替换为foo0。")]),o._v(" "),r("p",[o._v("如果使用"),r("code",{pre:!0},[o._v("rename foo foo0 foo??")]),o._v("，foo01到foo99的所有文件都被重命名为foo001到foo099，只重命名5个字符长度名称的文件，文件名中的foo被替换为foo0。")]),o._v(" "),r("p",[o._v("如果使用"),r("code",{pre:!0},[o._v("rename foo foo0 foo*")]),o._v("，foo001到foo278的所有文件都被重命名为foo0001到foo0278，所有以foo开头的文件都被重命名。")]),o._v(" "),r("p",[o._v("如果使用"),r("code",{pre:!0},[o._v("rename foo0 foo foo0[2]*")]),o._v("，从foo0200到foo0278的所有文件都被重命名为foo200到foo278，文件名中的foo0被替换为foo。")]),o._v(" "),r("p",[r("strong",[o._v("rename支持正则表达式")])]),o._v(" "),r("p",[o._v("字母的替换")]),o._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[o._v('rename "s/AA/aa/" *  //把文件名中的AA替换成aa\n')])]),o._v(" "),r("p",[o._v("修改文件的后缀")]),o._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[o._v('rename "s//.html//.[php](#/php "php命令")/" *     //把.html 后缀的改成 .php后缀\n')])]),o._v(" "),r("p",[o._v("批量添加文件后缀")]),o._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[o._v('rename "s/$//.txt/" *     //把所有的文件名都以txt结尾\n')])]),o._v(" "),r("p",[o._v("批量删除文件名")]),o._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[o._v('rename "s//.txt//" *      //把所有以.txt结尾的文件名的.txt删掉\n')])])])}]}},384:function(o,e,r){o.exports=r(972)},972:function(o,e,r){var v=r(5)(null,r(1144),null,null,null);o.exports=v.exports}});
//# sourceMappingURL=171.eec575509ea5f6af2b6d.js.map