webpackJsonp([142],{1002:function(e,r,v){var _=v(5)(null,v(1288),null,null,null);e.exports=_.exports},1288:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("section",[v("p",[v("strong",[e._v("seq命令")]),e._v("用于产生从某个数到另外一个数之间的所有整数。")]),e._v(" "),v("h3",[e._v("语法")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("seq [选项]... 尾数\nseq [选项]... 首数 尾数\nseq [选项]... 首数 增量 尾数\n")])]),e._v(" "),v("h3",[e._v("选项")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('-f, --format=格式        使用[printf](#/printf "printf命令") 样式的浮点格式\n-s, --separator=字符串   使用指定字符串分隔数字（默认使用：\\n）\n-[w](#/w "w命令"), --equal-width        在列前添加0 使得宽度相同\n')])]),e._v(" "),v("h3",[e._v("实例")]),e._v(" "),v("p",[v("strong",[e._v("-f选项：指定格式")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('#seq -f"%3g" 9 11\n9\n10\n11\n')])]),e._v(" "),v("p",[v("code",{pre:!0},[e._v("%")]),e._v("后面指定数字的位数 默认是"),v("code",{pre:!0},[e._v("%g")]),e._v("，"),v("code",{pre:!0},[e._v("%3g")]),e._v("那么数字位数不足部分是空格。")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('#[sed](#/sed "sed命令") -f"%03g" 9 11\n#seq -f"str%03g" 9 11\nstr009\nstr010\nstr011\n')])]),e._v(" "),v("p",[e._v("这样的话数字位数不足部分是0，"),v("code",{pre:!0},[e._v("%")]),e._v("前面制定字符串。")]),e._v(" "),v("p",[v("strong",[e._v("-w选项：指定输出数字同宽")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("seq -w 98 101\n098\n099\n100\n101\n")])]),e._v(" "),v("p",[e._v("不能和"),v("code",{pre:!0},[e._v("-f")]),e._v("一起用，输出是同宽的。")]),e._v(" "),v("p",[v("strong",[e._v("-s选项：指定分隔符（默认是回车）")])]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('seq -s" " -f"str%03g" 9 11\nstr009 str010 str011\n')])]),e._v(" "),v("p",[e._v("要指定"),v("code",{pre:!0},[e._v("/t")]),e._v("做为分隔符号：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('seq -s"`[echo](#/echo "echo命令") -e "/t"`" 9 11\n')])]),e._v(" "),v("p",[e._v("指定"),v("code",{pre:!0},[e._v("\\n")]),e._v("作为分隔符号：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('seq -s"`echo -e "\\n"`" 9 11\n19293949596979899910911\n')])]),e._v(" "),v("p",[e._v("得到的是个错误结果，不过一般也没有这个必要，它默认的就是回车作为分隔符。")])])}]}},414:function(e,r,v){e.exports=v(1002)}});
//# sourceMappingURL=142.1edd20fb1a8797407a58.js.map