webpackJsonp([476],{1256:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("section",[r("p",[r("strong",[e._v("chsh命令")]),e._v("用来更换登录系统时使用的shell。若不指定任何参数与用户名称，则chsh会以应答的方式进行设置。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("chsh(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('-s<shell 名称>或--shell<shell 名称>：更改系统预设的shell环境。；\n-l或--list-shells：列出目前系统可用的shell清单；\n-u或--[help](#/help "help命令")：在线帮助；\n-v或-version：显示版本信息。\n')])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("p",[e._v("用户名：要改变默认shell的用户。")]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[r("strong",[e._v("查看系统安装了哪些shell的两种方法：")])]),e._v(" "),r("p",[e._v("第一种：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('[rocrocket@localhost ~]$ chsh -l\n/bin/sh\n/bin/bash\n/sbin/[nologin](#/nologin "nologin命令")\n/bin/zsh\n')])]),e._v(" "),r("p",[e._v("第二种：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('[rocrocket@localhost ~]$ [cat](#/cat "cat命令") /etc/shells\n/bin/sh\n/bin/bash\n/sbin/nologin\n/bin/zsh\n')])]),e._v(" "),r("p",[e._v("其实"),r("code",{pre:!0},[e._v("chsh -l")]),e._v("也是来查看这个文件。")]),e._v(" "),r("p",[r("strong",[e._v("查看当前正在使用的shell：")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('[rocrocket@localhost ~]$ [echo](#/echo "echo命令") $SHELL\n/bin/bash\n')])]),e._v(" "),r("p",[e._v("注意SHELL一定要是大写。可以看到，目前使用的shell是"),r("code",{pre:!0},[e._v("/bin/bash")])]),e._v(" "),r("p",[r("strong",[e._v("把我的shell改成zsh：")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("[rocrocket@localhost ~]$ chsh -s /bin/zsh\nChanging shell for rocrocket.\nPassword:\nShell changed.\n[rocrocket@localhost ~]$\n")])]),e._v(" "),r("p",[e._v("使用chsh加选项"),r("code",{pre:!0},[e._v("-s")]),e._v("就可以修改登录的shell了！你会发现你现在执行"),r("code",{pre:!0},[e._v("echo $SHELL")]),e._v("后仍然输出为"),r("code",{pre:!0},[e._v("/bin/bash")]),e._v("，这是因为你需要重启你的shell才完全投入到zsh怀抱中去。"),r("code",{pre:!0},[e._v("chsh -s")]),e._v("其实修改的就是"),r("code",{pre:!0},[e._v('/etc/[passwd](#/passwd "passwd命令")')]),e._v("文件里和你的用户名相对应的那一行。现在来查看下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('[rocrocket@localhost ~]$ cat /etc/passwd|[grep](#/grep "grep命令") ^rocrocket\nrocrocket:x:500:500:rocrocket,China:/rocrocket/PSB/home:/bin/zsh\n')])]),e._v(" "),r("p",[e._v("你可以发现输出内容的最后部分已经变成了"),r("code",{pre:!0},[e._v("/bin/zsh")]),e._v("了，下次重启的时候，linux就会读取这一命令来启动shell了！")]),e._v(" "),r("p",[r("strong",[e._v("把shell修改回/bin/bash：")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("[rocrocket@localhost ~]$ chsh -s /bin/bash\nChanging shell for rocrocket.\nPassword:\nShell changed.\n")])])])}]}},663:function(e,s,r){var o=r(5)(null,r(1256),null,null,null);e.exports=o.exports},75:function(e,s,r){e.exports=r(663)}});
//# sourceMappingURL=476.f30ed8ec1ab8c64e44a3.js.map