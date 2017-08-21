webpackJsonp([506],{1423:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,c=e._self._c||v;return c("section",[c("p",[c("strong",[e._v("bc命令")]),e._v("是一种支持任意精度的交互执行的计算器语言。bash内置了对整数四则运算的支持，但是并不支持浮点运算，而bc命令可以很方便的进行浮点运算，当然整数运算也不再话下。")]),e._v(" "),c("h3",[e._v("语法")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v("bc(选项)(参数)\n")])]),e._v(" "),c("h3",[e._v("选项")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('-i：强制进入交互式模式；\n-l：定义使用的标准数学库；\n-[w](#/w "w命令")：对POSIX bc的扩展给出警告信息；\n-q：不打印正常的GNU bc环境信息；\n-v：显示指令版本信息；\n-h：显示指令的帮助信息。\n')])]),e._v(" "),c("h3",[e._v("参数")]),e._v(" "),c("p",[e._v("文件：指定包含计算任务的文件。")]),e._v(" "),c("h3",[e._v("实例")]),e._v(" "),c("p",[e._v("算术操作高级运算bc命令它可以执行浮点运算和一些高级函数：")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('[echo](#/echo "echo命令") "1.212*3" | bc \n3.636\n\n')])]),e._v(" "),c("p",[e._v("设定小数精度（数值范围）")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('echo "scale=2;3/8" | bc\n0.37\n\n')])]),e._v(" "),c("p",[e._v("参数"),c("code",{pre:!0},[e._v("scale=2")]),e._v("是将bc输出结果的小数位设置为2位。")]),e._v(" "),c("p",[e._v("进制转换")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('#!/bin/bash\nabc=192\necho "obase=2;$abc" | bc\n\n')])]),e._v(" "),c("p",[e._v("执行结果为：11000000，这是用bc将十进制转换成二进制。")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('#!/bin/bash\nabc=11000000\necho "obase=10;ibase=2;$abc" | bc\n\n')])]),e._v(" "),c("p",[e._v("执行结果为：192，这是用bc将二进制转换为十进制。")]),e._v(" "),c("p",[e._v("计算平方和平方根：")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('echo "10^10" | bc\necho "sqrt(100)" | bc\n')])])])}]}},43:function(e,v,c){e.exports=c(631)},631:function(e,v,c){var n=c(5)(null,c(1423),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=506.5eca73ae21f81939c01a.js.map