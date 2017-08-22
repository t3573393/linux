webpackJsonp([420],{132:function(e,v,_){e.exports=_(720)},1659:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("section",[_("p",[_("strong",[e._v("echo命令")]),e._v("用于在shell中打印shell变量的值，或者直接输出指定的字符串。linux的echo命令，在shell编程中极为常用, 在终端下打印变量value的时候也是常常用到的，因此有必要了解下echo的用法echo命令的功能是在显示器上显示一段文字，一般起到一个提示的作用。")]),e._v(" "),_("h3",[e._v("语法")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v("echo(选项)(参数)\n")])]),e._v(" "),_("h3",[e._v("选项")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v("-e：激活转义字符。\n")])]),e._v(" "),_("p",[e._v("使用"),_("code",{pre:!0},[e._v("-e")]),e._v("选项时，若字符串中出现以下字符，则特别加以处理，而不会将它当成一般文字输出：")]),e._v(" "),_("ul",[_("li",[e._v("\\a 发出警告声；")]),e._v(" "),_("li",[e._v("\\b 删除前一个字符；")]),e._v(" "),_("li",[e._v("\\c 最后不加上换行符号；")]),e._v(" "),_("li",[e._v("\\f 换行但光标仍旧停留在原来的位置；")]),e._v(" "),_("li",[e._v("\\n 换行且光标移至行首；")]),e._v(" "),_("li",[e._v("\\r 光标移至行首，但不换行；")]),e._v(" "),_("li",[e._v("\\t 插入tab；")]),e._v(" "),_("li",[e._v("\\v 与\\f相同；")]),e._v(" "),_("li",[e._v("\\ 插入\\字符；")]),e._v(" "),_("li",[e._v("\\nnn 插入nnn（八进制）所代表的ASCII字符；")])]),e._v(" "),_("h3",[e._v("参数")]),e._v(" "),_("p",[e._v("变量：指定要打印的变量。")]),e._v(" "),_("h3",[e._v("实例")]),e._v(" "),_("p",[e._v("用echo命令打印带有色彩的文字：")]),e._v(" "),_("p",[_("strong",[e._v("文字色：")])]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v('echo -e "\\e[1;31mThis is red text\\e[0m"\nThis is red text\n')])]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("\\e[1;31m")]),e._v(" 将颜色设置为红色")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("\\e[0m")]),e._v(" 将颜色重新置回")])]),e._v(" "),_("p",[e._v("颜色码：重置=0，黑色=30，红色=31，绿色=32，黄色=33，蓝色=34，洋红=35，青色=36，白色=37")]),e._v(" "),_("p",[_("strong",[e._v("背景色")]),e._v("：")]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v('echo -e "\\e[1;42mGreed Background\\e[0m"\nGreed Background\n')])]),e._v(" "),_("p",[e._v("颜色码：重置=0，黑色=40，红色=41，绿色=42，黄色=43，蓝色=44，洋红=45，青色=46，白色=47")]),e._v(" "),_("p",[_("strong",[e._v("文字闪动：")])]),e._v(" "),_("pre",{pre:!0},[_("code",{attrs:{"v-pre":""}},[e._v('echo -e "\\033[37;31;5mMySQL Server Stop...\\033[39;49;0m"\n\n')])]),e._v(" "),_("p",[e._v("红色数字处还有其他数字参数：0 关闭所有属性、1 设置高亮度（加粗）、4 下划线、5 闪烁、7 反显、8 消隐")])])}]}},720:function(e,v,_){var r=_(5)(null,_(1659),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=420.33517b604abdf7d287b3.js.map