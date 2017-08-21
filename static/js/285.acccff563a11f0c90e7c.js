webpackJsonp([285],{1402:function(r,o){r.exports={render:function(){var r=this,o=r.$createElement;r._self._c;return r._m(0)},staticRenderFns:[function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("section",[t("p",[t("strong",[r._v("ls命令")]),r._v("用来显示目标列表，在Linux中是使用率较高的命令。ls命令的输出信息可以进行彩色加亮显示，以分区不同类型的文件。")]),r._v(" "),t("h3",[r._v("语法")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("ls（选项）（参数）\n")])]),r._v(" "),t("h3",[r._v("选项")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('-a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；\n-A：显示除影藏文件“.”和“..”以外的所有文件列表；\n-C：多列显示输出结果。这是默认选项；\n-l：与“-C”选项功能相反，所有输出信息用单列格式输出，不输出为多列；\n-F：在每个输出项后追加文件的类型标识符，具体含义：“*”表示具有可执行权限的普通文件，“/”表示目录，“@”表示符号链接，“|”表示命令管道FIFO，“=”表示sockets套接字。当文件为普通文件时，不输出任何标识符；\n-b：将文件中的不可输出的字符以反斜线“”加字符编码的方式输出；\n-c：与“-lt”选项连用时，按照文件状态时间排序输出目录内容，排序的依据是文件的索引节点中的ctime字段。与“-l”选项连用时，则排序的一句是文件的状态改变时间；\n-d：仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录列表；\n-f：此参数的效果和同时指定“aU”参数相同，并关闭“lst”参数的效果；\n-i：显示文件索引节点号（inode）。一个索引节点代表一个文件；\n--[file](#/file "file命令")-[type](#/type "type命令")：与“-F”选项的功能相同，但是不显示“*”；\n-k：以KB（千字节）为单位显示文件大小；\n-l：以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等；\n-m：用“,”号区隔每个文件和目录的名称；\n-n：以用户识别码和群组识别码替代其名称；\n-r：以文件名反序排列并输出目录内容列表；\n-s：显示文件和目录的大小，以区块为单位；\n-t：用文件和目录的更改时间排序；\n-L：如果遇到性质为符号链接的文件或目录，直接列出该链接所指向的原始文件或目录；\n-R：递归处理，将指定目录下的所有文件及子目录一并处理；\n--full-[time](#/time "time命令")：列出完整的日期与时间；\n--color[=WHEN]：使用不同的颜色高亮显示不同类型的。\n')])]),r._v(" "),t("h3",[r._v("参数")]),r._v(" "),t("p",[r._v("目录：指定要显示列表的目录，也可以是具体的文件。")]),r._v(" "),t("h3",[r._v("实例")]),r._v(" "),t("p",[r._v("显示当前目录下非影藏文件与目录")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('[root@localhost ~]# ls\nanaconda-ks.cfg  [install](#/install "install命令").log  install.log.syslog  satools\n')])]),r._v(" "),t("p",[r._v("显示当前目录下包括影藏文件在内的所有文件列表")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('[root@localhost ~]# ls -a\n.   anaconda-ks.cfg  .bash_logout   .bashrc  install.log         .mysql_history  satools  .tcshrc   .vimrc\n..  .bash_history    .bash_profile  .cshrc   install.log.syslog  .rnd            .[ssh](#/ssh "ssh命令")     .viminfo\n')])]),r._v(" "),t("p",[r._v("输出长格式列表")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost ~]# ls -1\n\nanaconda-ks.cfg\ninstall.log\ninstall.log.syslog\nsatools\n")])]),r._v(" "),t("p",[r._v("显示文件的inode信息")]),r._v(" "),t("p",[r._v("索引节点（index inode简称为“inode”）是Linux中一个特殊的概念，具有相同的索引节点号的两个文本本质上是同一个文件（除文件名不同外）。")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost ~]# ls -i -l anaconda-ks.cfg install.log\n2345481 -rw------- 1 root root   859 Jun 11 22:49 anaconda-ks.cfg\n2345474 -rw-r--r-- 1 root root 13837 Jun 11 22:49 install.log\n")])]),r._v(" "),t("p",[r._v("水平输出文件列表")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost /]# ls -m\n\nbin, boot, data, dev, etc, home, lib, lost+found, media, misc, mnt, opt, proc, root, sbin, selinux, srv, sys, tmp, usr, var\n")])]),r._v(" "),t("p",[r._v("修改最后一次编辑的文件")]),r._v(" "),t("p",[r._v("最近修改的文件显示在最上面。")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost /]# ls -t\n\ntmp  root  etc  dev  lib  boot  sys  proc  data  home  bin  sbin  usr  var  lost+found  media  mnt  opt  selinux  srv  misc\n")])]),r._v(" "),t("p",[r._v("显示递归文件")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('[root@localhost ~]# ls -R\n.:\nanaconda-ks.cfg  install.log  install.log.syslog  satools\n\n./satools:\nblack.txt  freemem.sh  [iptables](#/iptables "iptables命令").sh  lnmp.sh  [mysql](#/mysql "mysql命令")  php502_check.sh  ssh_safe.sh\n\n')])]),r._v(" "),t("p",[r._v("打印文件的UID和GID")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost /]# ls -n\n\ntotal 254\ndrwxr-xr-x   2 0 0  4096 Jun 12 04:03 bin\ndrwxr-xr-x   4 0 0  1024 Jun 15 14:45 boot\ndrwxr-xr-x   6 0 0  4096 Jun 12 10:26 data\ndrwxr-xr-x  10 0 0  3520 Sep 26 15:38 dev\ndrwxr-xr-x  75 0 0  4096 Oct 16 04:02 etc\ndrwxr-xr-x   4 0 0  4096 Jun 12 10:26 home\ndrwxr-xr-x  14 0 0 12288 Jun 16 04:02 lib\ndrwx------   2 0 0 16384 Jun 11 22:46 lost+found\ndrwxr-xr-x   2 0 0  4096 May 11  2011 media\ndrwxr-xr-x   2 0 0  4096 Nov  8  2010 misc\ndrwxr-xr-x   2 0 0  4096 May 11  2011 mnt\ndrwxr-xr-x   2 0 0  4096 May 11  2011 opt\ndr-xr-xr-x 232 0 0     0 Jun 15 11:04 proc\ndrwxr-x---   4 0 0  4096 Oct 15 14:43 root\ndrwxr-xr-x   2 0 0 12288 Jun 12 04:03 sbin\ndrwxr-xr-x   2 0 0  4096 May 11  2011 selinux\ndrwxr-xr-x   2 0 0  4096 May 11  2011 srv\ndrwxr-xr-x  11 0 0     0 Jun 15 11:04 sys\ndrwxrwxrwt   3 0 0 98304 Oct 16 08:45 tmp\ndrwxr-xr-x  13 0 0  4096 Jun 11 23:38 usr\ndrwxr-xr-x  19 0 0  4096 Jun 11 23:38 var\n\n")])]),r._v(" "),t("p",[r._v("列出文件和文件夹的详细信息")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost /]# ls -l\n\ntotal 254\ndrwxr-xr-x   2 root root  4096 Jun 12 04:03 bin\ndrwxr-xr-x   4 root root  1024 Jun 15 14:45 boot\ndrwxr-xr-x   6 root root  4096 Jun 12 10:26 data\ndrwxr-xr-x  10 root root  3520 Sep 26 15:38 dev\ndrwxr-xr-x  75 root root  4096 Oct 16 04:02 etc\ndrwxr-xr-x   4 root root  4096 Jun 12 10:26 home\ndrwxr-xr-x  14 root root 12288 Jun 16 04:02 lib\ndrwx------   2 root root 16384 Jun 11 22:46 lost+found\ndrwxr-xr-x   2 root root  4096 May 11  2011 media\ndrwxr-xr-x   2 root root  4096 Nov  8  2010 misc\ndrwxr-xr-x   2 root root  4096 May 11  2011 mnt\ndrwxr-xr-x   2 root root  4096 May 11  2011 opt\ndr-xr-xr-x 232 root root     0 Jun 15 11:04 proc\ndrwxr-x---   4 root root  4096 Oct 15 14:43 root\ndrwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin\ndrwxr-xr-x   2 root root  4096 May 11  2011 selinux\ndrwxr-xr-x   2 root root  4096 May 11  2011 srv\ndrwxr-xr-x  11 root root     0 Jun 15 11:04 sys\ndrwxrwxrwt   3 root root 98304 Oct 16 08:48 tmp\ndrwxr-xr-x  13 root root  4096 Jun 11 23:38 usr\ndrwxr-xr-x  19 root root  4096 Jun 11 23:38 var\n\n")])]),r._v(" "),t("p",[r._v("列出可读文件和文件夹详细信息")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost /]# ls -lh\n\ntotal 254K\ndrwxr-xr-x   2 root root 4.0K Jun 12 04:03 bin\ndrwxr-xr-x   4 root root 1.0K Jun 15 14:45 boot\ndrwxr-xr-x   6 root root 4.0K Jun 12 10:26 data\ndrwxr-xr-x  10 root root 3.5K Sep 26 15:38 dev\ndrwxr-xr-x  75 root root 4.0K Oct 16 04:02 etc\ndrwxr-xr-x   4 root root 4.0K Jun 12 10:26 home\ndrwxr-xr-x  14 root root  12K Jun 16 04:02 lib\ndrwx------   2 root root  16K Jun 11 22:46 lost+found\ndrwxr-xr-x   2 root root 4.0K May 11  2011 media\ndrwxr-xr-x   2 root root 4.0K Nov  8  2010 misc\ndrwxr-xr-x   2 root root 4.0K May 11  2011 mnt\ndrwxr-xr-x   2 root root 4.0K May 11  2011 opt\ndr-xr-xr-x 235 root root    0 Jun 15 11:04 proc\ndrwxr-x---   4 root root 4.0K Oct 15 14:43 root\ndrwxr-xr-x   2 root root  12K Jun 12 04:03 sbin\ndrwxr-xr-x   2 root root 4.0K May 11  2011 selinux\ndrwxr-xr-x   2 root root 4.0K May 11  2011 srv\ndrwxr-xr-x  11 root root    0 Jun 15 11:04 sys\ndrwxrwxrwt   3 root root  96K Oct 16 08:49 tmp\ndrwxr-xr-x  13 root root 4.0K Jun 11 23:38 usr\ndrwxr-xr-x  19 root root 4.0K Jun 11 23:38 var\n\n")])]),r._v(" "),t("p",[r._v("显示文件夹信息")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('[root@localhost /]# ls -[ld](#/ld "ld命令") /etc/\n\ndrwxr-xr-x 75 root root 4096 Oct 16 04:02 /etc/\n\n')])]),r._v(" "),t("p",[r._v("按时间列出文件和文件夹详细信息")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost /]# ls -lt\n\ntotal 254\ndrwxrwxrwt   3 root root 98304 Oct 16 08:53 tmp\ndrwxr-xr-x  75 root root  4096 Oct 16 04:02 etc\ndrwxr-x---   4 root root  4096 Oct 15 14:43 root\ndrwxr-xr-x  10 root root  3520 Sep 26 15:38 dev\ndrwxr-xr-x  14 root root 12288 Jun 16 04:02 lib\ndrwxr-xr-x   4 root root  1024 Jun 15 14:45 boot\ndrwxr-xr-x  11 root root     0 Jun 15 11:04 sys\ndr-xr-xr-x 232 root root     0 Jun 15 11:04 proc\ndrwxr-xr-x   6 root root  4096 Jun 12 10:26 data\ndrwxr-xr-x   4 root root  4096 Jun 12 10:26 home\ndrwxr-xr-x   2 root root  4096 Jun 12 04:03 bin\ndrwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin\ndrwxr-xr-x  13 root root  4096 Jun 11 23:38 usr\ndrwxr-xr-x  19 root root  4096 Jun 11 23:38 var\ndrwx------   2 root root 16384 Jun 11 22:46 lost+found\ndrwxr-xr-x   2 root root  4096 May 11  2011 media\ndrwxr-xr-x   2 root root  4096 May 11  2011 mnt\ndrwxr-xr-x   2 root root  4096 May 11  2011 opt\ndrwxr-xr-x   2 root root  4096 May 11  2011 selinux\ndrwxr-xr-x   2 root root  4096 May 11  2011 srv\ndrwxr-xr-x   2 root root  4096 Nov  8  2010 misc\n\n")])]),r._v(" "),t("p",[r._v("按修改时间列出文件和文件夹详细信息")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost /]# ls -ltr\n\ntotal 254\ndrwxr-xr-x   2 root root  4096 Nov  8  2010 misc\ndrwxr-xr-x   2 root root  4096 May 11  2011 srv\ndrwxr-xr-x   2 root root  4096 May 11  2011 selinux\ndrwxr-xr-x   2 root root  4096 May 11  2011 opt\ndrwxr-xr-x   2 root root  4096 May 11  2011 mnt\ndrwxr-xr-x   2 root root  4096 May 11  2011 media\ndrwx------   2 root root 16384 Jun 11 22:46 lost+found\ndrwxr-xr-x  19 root root  4096 Jun 11 23:38 var\ndrwxr-xr-x  13 root root  4096 Jun 11 23:38 usr\ndrwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin\ndrwxr-xr-x   2 root root  4096 Jun 12 04:03 bin\ndrwxr-xr-x   4 root root  4096 Jun 12 10:26 home\ndrwxr-xr-x   6 root root  4096 Jun 12 10:26 data\ndr-xr-xr-x 232 root root     0 Jun 15 11:04 proc\ndrwxr-xr-x  11 root root     0 Jun 15 11:04 sys\ndrwxr-xr-x   4 root root  1024 Jun 15 14:45 boot\ndrwxr-xr-x  14 root root 12288 Jun 16 04:02 lib\ndrwxr-xr-x  10 root root  3520 Sep 26 15:38 dev\ndrwxr-x---   4 root root  4096 Oct 15 14:43 root\ndrwxr-xr-x  75 root root  4096 Oct 16 04:02 etc\ndrwxrwxrwt   3 root root 98304 Oct 16 08:54 tmp\n\n")])]),r._v(" "),t("p",[r._v("按照特殊字符对文件进行分类")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('[root@localhost nginx-1.2.1]# ls -F\n\nauto/  CHANGES  CHANGES.ru  conf/  configure*  contrib/  html/  LICENSE  Makefile  [man](#/man "man命令")/  objs/  README  src/\n\n')])]),r._v(" "),t("p",[r._v("列出文件并标记颜色分类")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("[root@localhost nginx-1.2.1]# ls --color=auto\n\nauto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  Makefile  man  objs  README  src\n")])])])}]}},267:function(r,o,t){r.exports=t(855)},855:function(r,o,t){var n=t(5)(null,t(1402),null,null,null);r.exports=n.exports}});
//# sourceMappingURL=285.acccff563a11f0c90e7c.js.map