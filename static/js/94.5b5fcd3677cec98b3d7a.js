webpackJsonp([94],{1050:function(e,n,l){var t=l(5)(null,l(1623),null,null,null);e.exports=t.exports},1623:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("section",[l("p",[l("strong",[e._v("tail命令")]),e._v("用于输入文件中的尾部内容。tail命令默认在屏幕上显示指定文件的末尾10行。如果给定的文件不止一个，则在显示的每个文件前面加一个文件名标题。如果没有指定文件或者文件名为“-”，则读取标准输入。")]),e._v(" "),l("p",[e._v("注意：如果表示字节或行数的N值之前有一个”+”号，则从文件开头的第N项开始显示，而不是显示文件的最后N项。N值后面可以有后缀：b表示512，k表示1024，m表示1 048576(1M)。")]),e._v(" "),l("h3",[e._v("语法")]),e._v(" "),l("pre",{pre:!0},[l("code",{attrs:{"v-pre":""}},[e._v("tail(选项)(参数)\n")])]),e._v(" "),l("h3",[e._v("选项")]),e._v(" "),l("pre",{pre:!0},[l("code",{attrs:{"v-pre":""}},[e._v('--retry：即是在tail命令启动时，文件不可访问或者文件稍后变得不可访问，都始终尝试打开文件。使用此选项时需要与选项“——follow=name”连用；\n-c<N>或——bytes=<N>：输出文件尾部的N（N为整数）个字节内容；\n-f<name/descriptor>或；--follow<nameldescript>：显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。“-f”与“-fdescriptor”等效；\n-F：与选项“-follow=name”和“--retry"连用时功能相同；\n-n<N>或——line=<N>：输出文件的尾部N（N位数字）行内容。\n--pid=<进程号>：与“-f”选项连用，当指定的进程号的进程终止后，自动退出tail命令；\n-q或——quiet或——silent：当有多个文件参数时，不输出各个文件名；\n-s<秒数>或——[sleep](#/sleep "sleep命令")-interal=<秒数>：与“-f”选项连用，指定监视文件变化时间隔的秒数；\n-v或——verbose：当有多个文件参数时，总是输出各个文件名；\n--[help](#/help "help命令")：显示指令的帮助信息；\n--version：显示指令的版本信息。\n')])]),e._v(" "),l("h3",[e._v("参数")]),e._v(" "),l("p",[e._v("文件列表：指定要显示尾部内容的文件列表。")]),e._v(" "),l("h3",[e._v("实例")]),e._v(" "),l("pre",{pre:!0},[l("code",{attrs:{"v-pre":""}},[e._v('tail [file](#/file "file命令") （显示文件file的最后10行）\ntail +20 file （显示文件file的内容，从第20行至文件末尾）\ntail -c 10 file （显示文件file的最后10个字符）\n')])])])}]}},462:function(e,n,l){e.exports=l(1050)}});
//# sourceMappingURL=94.5b5fcd3677cec98b3d7a.js.map