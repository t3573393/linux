webpackJsonp([343],{1507:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p",[t("strong",[e._v("init命令")]),e._v("是Linux下的进程初始化工具，init进程是所有Linux进程的父进程，它的进程号为1。init命令是Linux操作系统中不可缺少的程序之一，init进程是Linux内核引导运行的，是系统中的第一个进程。")]),e._v(" "),t("h3",[e._v("语法")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("init(选项)(参数)\n")])]),e._v(" "),t("h3",[e._v("选项")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("-b：不执行相关脚本而直接进入单用户模式；\n-s：切换到单用户模式。\n")])]),e._v(" "),t("h3",[e._v("参数")]),e._v(" "),t("p",[e._v("运行等级：指定Linux系统要切换到的运行等级。")]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("p",[e._v("几个常用的命令")]),e._v(" "),t("p",[e._v("查看系统进程命令："),t("code",{pre:!0},[e._v('[ps](#/ps "ps命令") -ef | [head](#/head "head命令")')]),t("br"),e._v("\n查看init的配置文件："),t("code",{pre:!0},[e._v('[more](#/more "more命令") /etc/inittab')]),t("br"),e._v("\n查看系统当前运行的级别："),t("code",{pre:!0},[e._v('[runlevel](#/runlevel "runlevel命令")')])]),e._v(" "),t("p",[t("strong",[e._v("运行级别")])]),e._v(" "),t("p",[e._v("到底什么是运行级呢？简单的说，运行级就是操作系统当前正在运行的功能级别。这个级别从0到6 ，具有不同的功能。你也可以在"),t("code",{pre:!0},[e._v("/etc/inittab")]),e._v("中查看它的英文介绍。")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("#0  停机（千万不能把initdefault 设置为0）\n#1  单用户模式\n#2  多用户，没有 NFS(和级别3相似，会停止部分服务)\n#3  完全多用户模式\n#4  没有用到\n#5  x11(Xwindow)\n#6  重新启动（千万不要把initdefault 设置为6）\n")])])])}]}},208:function(e,n,t){e.exports=t(796)},796:function(e,n,t){var r=t(5)(null,t(1507),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=343.755e39471c4ac75764a9.js.map