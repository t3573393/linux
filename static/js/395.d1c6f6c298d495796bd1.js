webpackJsonp([395],{157:function(e,r,n){e.exports=n(745)},1575:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("section",[n("p",[n("strong",[e._v("finger命令")]),e._v("用于查找并显示用户信息。包括本地与远端主机的用户皆可，帐号名称没有大小写的差别。单独执行finger指令，它会显示本地主机现在所有的用户的登陆信息，包括帐号名称，真实姓名，登入终端机，闲置时间，登入时间以及地址和电话。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("finger(选项)(参数)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("-l：列出该用户的帐号名称，真实姓名，用户专属目录，登入所用的Shell，登入时间，转信地址，电子邮件状态，还有计划文件和方案文件内容；\n-m：排除查找用户的真实姓名；\n-s：列出该用户的帐号名称，真实姓名，登入终端机，闲置时间，登入时间以及地址和电话；\n-p：列出该用户的帐号名称，真实姓名，用户专属目录，登入所用的Shell，登入时间，转信地址，电子邮件状态，但不显示该用户的计划文件和方案文件内容。\n")])]),e._v(" "),n("p",[e._v("不指定finger的选项如果提供操作者的话，缺省设为"),n("code",{pre:!0},[e._v("-l")]),e._v("输出风格，否则为"),n("code",{pre:!0},[e._v("-s")]),e._v("风格，注意在两种格式中，如果信息不足，都有一些域可能丢失，如果没有指定参数finger会为当前登录的每个用户打印一个条目。")]),e._v(" "),n("h3",[e._v("参数")]),e._v(" "),n("p",[e._v("用户名：指定要查询信息的用户。")]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("p",[e._v("在计算机上使用finger：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost root]# finger\n[login](#/login "login命令") Name Tty Idle Login [time](#/time "time命令") Office Office Phone\nroot root tty1 2 Dec 18 13\nroot root pts/0 1 Dec 18 13\nroot root *pts/1 Dec 18 13\n')])]),e._v(" "),n("p",[e._v("如果要查询远程机上的用户信息，需要在用户名后面接"),n("code",{pre:!0},[e._v("@主机名")]),e._v("，采用"),n("code",{pre:!0},[e._v("用户名@主机名")]),e._v("的格式，不过要查询的网络主机需要运行finger守护进程的支持。")])])}]}},745:function(e,r,n){var t=n(5)(null,n(1575),null,null,null);e.exports=t.exports}});
//# sourceMappingURL=395.d1c6f6c298d495796bd1.js.map