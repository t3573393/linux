webpackJsonp([74],{1071:function(e,n,t){var s=t(5)(null,t(1507),null,null,null);e.exports=s.exports},1507:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p",[t("strong",[e._v("tune2fs命令")]),e._v("允许系统管理员调整“ext2/ext3”文件系统中的可该参数。Windows下面如果出现意外断电死机情况，下次开机一般都会出现系统自检。Linux系统下面也有文件系统自检，而且是可以通过tune2fs命令，自行定义自检周期及方式。")]),e._v(" "),t("h3",[e._v("语法")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("tune2fs(选项)(参数)\n")])]),e._v(" "),t("h3",[e._v("选项")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("-c：调整最大加载次数；\n-C：设置文件系统已经被加载的次数；\n-e：设置内核代码检测到错误时的行为；\n-f：强制执行修改，即使发生错误；\n-i：设置相邻两次文件系统检查的相隔时间；\n-j：为“ext2”文件系统添加日志功能，将其转换为“ext3”文件系统；\n-l：显示文件超级块内容；\n-L：设置文件系统卷标；\n-m：显示文件保留块的百分比；\n-M：设置文件系统最后被加载到的目录；\n-o：设置或清除文件系统加载的特性或选项；\n-O：设置或清除文件系统的特性或选项；\n-r：设置文件系统保留块的大小；\n-T：设置文件系统上次被检查的时间；\n-u：设置可以使用文件系统保留块的用户；\n-U：设置文件系统的UUID。\n")])]),e._v(" "),t("h3",[e._v("参数")]),e._v(" "),t("p",[e._v("文件系统：指定调整的文件系统或者其对应的设备文件名。")]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("tune2fs -c 30 /dev/hda1      设置强制检查前文件系统可以挂载的次数\ntune2fs -c -l /dev/hda1      关闭强制检查挂载次数限制。\ntune2fs -i 10 /dev/hda1      10天后检查\ntune2fs -i 1d /dev/hda1      1天后检查\ntune2fs -i 3w /dev/hda1      3周后检查\ntune2fs -i 6m /dev/hda1      半年后检查\ntune2fs -i 0 /dev/hda1       禁用时间检查\ntune2fs -j /dev/hda1         添加日志功能，将ext2转换成ext3文件系统\ntune2fs -r 40000 /dev/hda1   调整/dev/hda1分区的保留空间为40000个磁盘块\ntune2fs -o acl,user_xattr /dev/hda1       设置/dev/hda1挂载选项，启用Posix Access Control Lists和用户指定的扩展属性\n")])])])}]}},483:function(e,n,t){e.exports=t(1071)}});
//# sourceMappingURL=74.2e5b5b6ab6ece111c419.js.map