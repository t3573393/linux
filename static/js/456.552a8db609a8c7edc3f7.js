webpackJsonp([456],{1190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("p",[n("strong",[t._v("cut命令")]),t._v("用来显示行中的指定部分，删除文件中指定字段。cut经常用来显示文件的内容，类似于下的"),n("a",{attrs:{href:"#/type",title:"type命令"}},[t._v("type")]),t._v("命令。")]),t._v(" "),n("p",[t._v("说明：该命令有两项功能，其一是用来显示文件的内容，它依次读取由参数"),n("a",{attrs:{href:"#/file",title:"file命令"}},[t._v("file")]),t._v("所指 明的文件，将它们的内容输出到标准输出上；其二是连接两个或多个文件，如"),n("code",{pre:!0},[t._v("cut fl f2 > f3")]),t._v("将把文件fl和几的内容合并起来，然后通过输出重定向符“>”的作用，将它们放入文件f3中。")]),t._v(" "),n("p",[t._v("当文件较大时，文本在屏幕上迅速闪过（滚屏），用户往往看不清所显示的内容。因此，一般用"),n("a",{attrs:{href:"#/more",title:"more命令"}},[t._v("more")]),t._v("等命令分屏显示。为了控制滚屏，可以按Ctrl+S键，停止滚屏；按Ctrl+Q键可以恢复滚屏。按Ctrl+C（中断）键可以终止该命令的执行，并且返回Shell提示符状态。")]),t._v(" "),n("h3",[t._v("语法")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("cut(选项)(参数)\n")])]),t._v(" "),n("h3",[t._v("选项")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('-b：仅显示行中指定直接范围的内容；\n-c：仅显示行中指定范围的字符；\n-d：指定字段的分隔符，默认的字段分隔符为“TAB”；\n-f：显示指定字段的内容；\n-n：与“-b”选项连用，不分割多字节字符；\n--complement：补足被选择的字节、字符或字段；\n--out-delimiter=<字段分隔符>：指定输出内容是的字段分割符；\n--[help](#/help "help命令")：显示指令的帮助信息；\n--version：显示指令的版本信息。\n')])]),t._v(" "),n("h3",[t._v("参数")]),t._v(" "),n("p",[t._v("文件：指定要进行内容过滤的文件。")]),t._v(" "),n("h3",[t._v("实例")]),t._v(" "),n("p",[t._v("例如有一个学生报表信息，包含No、Name、Mark、Percent：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('[root@localhost text]# [cat](#/cat "cat命令") [test](#/test "test命令").txt \nNo Name Mark Percent\n01 tom 69 91\n02 jack 71 87\n03 alex 68 98\n\n')])]),t._v(" "),n("p",[t._v("使用 "),n("strong",[t._v("-f")]),t._v(" 选项提取指定字段：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("[root@localhost text]# cut -f 1 test.txt \nNo\n01\n02\n03\n")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("[root@localhost text]# cut -f2,3 test.txt \nName Mark\ntom 69\njack 71\nalex 68\n\n")])]),t._v(" "),n("p",[n("strong",[t._v("--complement")]),t._v(" 选项提取指定字段之外的列（打印除了第二列之外的列）：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("[root@localhost text]# cut -f2 --complement test.txt \nNo Mark Percent\n01 69 91\n02 71 87\n03 68 98\n\n")])]),t._v(" "),n("p",[t._v("使用 "),n("strong",[t._v("-d")]),t._v(" 选项指定字段分隔符：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("[root@localhost text]# cat test2.txt \nNo;Name;Mark;Percent\n01;tom;69;91\n02;jack;71;87\n03;alex;68;98\n")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('[root@localhost text]# cut -f2 -d";" test2.txt \nName\ntom\njack\nalex\n\n')])]),t._v(" "),n("h3",[t._v("指定字段的字符或者字节范围")]),t._v(" "),n("p",[t._v("cut命令可以将一串字符作为列来显示，字符字段的记法：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("N-")]),t._v("：从第N个字节、字符、字段到结尾；")]),t._v(" "),n("li",[n("strong",[t._v("N-M")]),t._v("：从第N个字节、字符、字段到第M个（包括M在内）字节、字符、字段；")]),t._v(" "),n("li",[n("strong",[t._v("-M")]),t._v("：从第1个字节、字符、字段到第M个（包括M在内）字节、字符、字段。")])]),t._v(" "),n("p",[t._v("上面是记法，结合下面选项将摸个范围的字节、字符指定为字段：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("-b")]),t._v(" 表示字节；")]),t._v(" "),n("li",[n("strong",[t._v("-c")]),t._v(" 表示字符；")]),t._v(" "),n("li",[n("strong",[t._v("-f")]),t._v(" 表示定义字段。")])]),t._v(" "),n("p",[n("strong",[t._v("示例")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("[root@localhost text]# cat test.txt \nabcdefghijklmnopqrstuvwxyz\nabcdefghijklmnopqrstuvwxyz\nabcdefghijklmnopqrstuvwxyz\nabcdefghijklmnopqrstuvwxyz\nabcdefghijklmnopqrstuvwxyz\n\n")])]),t._v(" "),n("p",[t._v("打印第1个到第3个字符：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("[root@localhost text]# cut -c1-3 test.txt \nabc\nabc\nabc\nabc\nabc\n\n")])]),t._v(" "),n("p",[t._v("打印前2个字符：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('[root@localhost text]# cut -c-2 test.txt \n[ab](#/ab "ab命令")\nab\nab\nab\nab\n\n')])]),t._v(" "),n("p",[t._v("打印从第5个字符开始到结尾：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("[root@localhost text]# cut -c5- test.txt \nefghijklmnopqrstuvwxyz\nefghijklmnopqrstuvwxyz\nefghijklmnopqrstuvwxyz\nefghijklmnopqrstuvwxyz\nefghijklmnopqrstuvwxyz\n")])])])}]}},683:function(t,e,n){var r=n(5)(null,n(1190),null,null,null);t.exports=r.exports},95:function(t,e,n){t.exports=n(683)}});
//# sourceMappingURL=456.552a8db609a8c7edc3f7.js.map