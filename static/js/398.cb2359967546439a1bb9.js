webpackJsonp([398],{1523:function(l,o){l.exports={render:function(){var l=this,o=l.$createElement;l._self._c;return l._m(0)},staticRenderFns:[function(){var l=this,o=l.$createElement,t=l._self._c||o;return t("section",[t("p",[t("strong",[l._v("file命令")]),l._v("用来探测给定文件的类型。file命令对文件的检查分为文件系统、魔法幻数检查和语言检查3个过程。")]),l._v(" "),t("h3",[l._v("语法")]),l._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[l._v("file(选项)(参数)\n")])]),l._v(" "),t("h3",[l._v("选项")]),l._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[l._v("-b：列出辨识结果时，不显示文件名称；\n-c：详细显示指令执行过程，便于排错或分析程序执行的情形；\n-f<名称文件>：指定名称文件，其内容有一个或多个文件名称时，让file依序辨识这些文件，格式为每列一个文件名称；\n-L：直接显示符号连接所指向的文件类别；\n-m<魔法数字文件>：指定魔法数字文件；\n-v：显示版本信息；\n-z：尝试去解读压缩文件的内容。\n")])]),l._v(" "),t("h3",[l._v("参数")]),l._v(" "),t("p",[l._v("文件：要确定类型的文件列表，多个文件之间使用空格分开，可以使用shell通配符匹配多个文件。")]),l._v(" "),t("h3",[l._v("实例")]),l._v(" "),t("p",[l._v("显示文件类型")]),l._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[l._v('[root@localhost ~]# file [install](#/install "install命令").log\ninstall.log: UTF-8 Unicode text\n\n[root@localhost ~]# file -b install.log      <== 不显示文件名称\nUTF-8 Unicode text\n\n[root@localhost ~]# file -i install.log      <== 显示MIME类别。\ninstall.log: text/plain; charset=utf-8\n\n[root@localhost ~]# file -b -i install.log\ntext/plain; charset=utf-8\n\n')])]),l._v(" "),t("p",[l._v("显示符号链接的文件类型")]),l._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[l._v('[root@localhost ~]# [ls](#/ls "ls命令") -l /var/[mail](#/mail "mail命令")\nlrwxrwxrwx 1 root root 10 08-13 00:11 /var/mail -> spool/mail\n\n[root@localhost ~]# file /var/mail\n/var/mail: symbolic link to `spool/mail\'\n\n[root@localhost ~]# file -L /var/mail\n/var/mail: directory\n\n[root@localhost ~]# file /var/spool/mail\n/var/spool/mail: directory\n\n[root@localhost ~]# file -L /var/spool/mail\n/var/spool/mail: directory\n\n')])])])}]}},154:function(l,o,t){l.exports=t(742)},742:function(l,o,t){var n=t(5)(null,t(1523),null,null,null);l.exports=n.exports}});
//# sourceMappingURL=398.cb2359967546439a1bb9.js.map