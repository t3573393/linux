webpackJsonp([451],{1417:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p",[t("strong",[e._v("df命令")]),e._v("用于显示磁盘分区上的可使用的磁盘空间。默认显示单位为KB。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息。")]),e._v(" "),t("h3",[e._v("语法")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("df(选项)(参数)\n")])]),e._v(" "),t("h3",[e._v("选项")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('-a或--all：包含全部的文件系统；\n--block-size=<区块大小>：以指定的区块大小来显示区块数目；\n-h或--human-readable：以可读性较高的方式来显示信息；\n-H或--si：与-h参数相同，但在计算时是以1000 Bytes为换算单位而非1024 Bytes；\n-i或--inodes：显示inode的信息；\n-k或--kilobytes：指定区块大小为1024字节；\n-l或--local：仅显示本地端的文件系统；\n-m或--megabytes：指定区块大小为1048576字节；\n--no-[sync](#/sync "sync命令")：在取得磁盘使用信息前，不要执行sync指令，此为预设值；\n-P或--portability：使用POSIX的输出格式；\n--sync：在取得磁盘使用信息前，先执行sync指令；\n-t<文件系统类型>或--[type](#/type "type命令")=<文件系统类型>：仅显示指定文件系统类型的磁盘信息；\n-T或--print-type：显示文件系统的类型；\n-x<文件系统类型>或--exclude-type=<文件系统类型>：不要显示指定文件系统类型的磁盘信息；\n--[help](#/help "help命令")：显示帮助；\n--version：显示版本信息。\n')])]),e._v(" "),t("h3",[e._v("参数")]),e._v(" "),t("p",[e._v("文件：指定文件系统上的文件。")]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("p",[e._v("查看系统磁盘设备，默认是KB为单位：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@LinServ-1 ~]# df\n文件系统               1K-块        已用     可用 已用% 挂载点\n/dev/sda2            146294492  28244432 110498708  21% /\n/dev/sda1              1019208     62360    904240   7% /boot\ntmpfs                  1032204         0   1032204   0% /dev/shm\n/dev/sdb1            2884284108 218826068 2518944764   8% /data1\n")])]),e._v(" "),t("p",[e._v("使用"),t("code",{pre:!0},[e._v("-h")]),e._v("选项以KB以上的单位来显示，可读性高：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@LinServ-1 ~]# df -h\n文件系统              容量  已用 可用 已用% 挂载点\n/dev/sda2             140G   27G  106G  21% /\n/dev/sda1             996M   61M  884M   7% /boot\ntmpfs                1009M     0 1009M   0% /dev/shm\n/dev/sdb1             2.7T  209G  2.4T   8% /data1\n")])]),e._v(" "),t("p",[e._v("查看全部文件系统：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@LinServ-1 ~]# df -a\n文件系统               1K-块        已用     可用 已用% 挂载点\n/dev/sda2            146294492  28244432 110498708  21% /\nproc                         0         0         0   -  /proc\nsysfs                        0         0         0   -  /sys\ndevpts                       0         0         0   -  /dev/pts\n/dev/sda1              1019208     62360    904240   7% /boot\ntmpfs                  1032204         0   1032204   0% /dev/shm\n/dev/sdb1            2884284108 218826068 2518944764   8% /data1\nnone                         0         0         0   -  /proc/sys/fs/binfmt_misc\n")])])])}]}},687:function(e,n,t){var s=t(5)(null,t(1417),null,null,null);e.exports=s.exports},99:function(e,n,t){e.exports=t(687)}});
//# sourceMappingURL=451.275adbd93bb93120036c.js.map