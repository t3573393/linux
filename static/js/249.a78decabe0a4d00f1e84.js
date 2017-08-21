webpackJsonp([249],{1350:function(r,o){r.exports={render:function(){var r=this,o=r.$createElement;r._self._c;return r._m(0)},staticRenderFns:[function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("section",[t("p",[t("strong",[r._v("mount命令")]),r._v("用于加载文件系统到指定的加载点。此命令的最常用于挂载cdrom，使我们可以访问cdrom中的数据，因为你将光盘插入cdrom中，Linux并不会自动挂载，必须使用Linux mount命令来手动完成挂载。")]),r._v(" "),t("h3",[r._v("语法")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("mount(选项)(参数)\n")])]),r._v(" "),t("h3",[r._v("选项")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v("-V：显示程序版本；\n-l：显示已加载的文件系统列表；\n-h：显示帮助信息并退出；\n-v：冗长模式，输出指令执行的详细信息；\n-n：加载没有写入文件“/etc/mtab”中的文件系统；\n-r：将文件系统加载为只读模式；\n-a：加载文件“/etc/fstab”中描述的所有文件系统。\n")])]),r._v(" "),t("h3",[r._v("参数")]),r._v(" "),t("ul",[t("li",[r._v("设备文件名：指定要加载的文件系统对应的设备名；")]),r._v(" "),t("li",[r._v("加载点：指定加载点目录。")])]),r._v(" "),t("h3",[r._v("实例")]),r._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[r._v('mount -t auto /dev/cdrom /mnt/cdrom\nmount: mount point /mnt/cdrom does not exist           /mnt/cdrom目录不存在，需要先创建。\n\n[cd](#/cd "cd命令") /mnt\n-bash: cd: /mnt: No such [file](#/file "file命令") or directory\n\n[mkdir](#/mkdir "mkdir命令") -p /mnt/cdrom    创建/mnt/cdrom目录\n[ls](#/ls "ls命令")\nbin   dev  home    lib         media  mnt  proc  sbin     srv  tmp  var\nboot  etc  initrd  lost+found  misc   opt  root  selinux  sys  usr\n\nmount -t auto /dev/cdrom /mnt/cdrom     挂载cdrom\nmount: block device /dev/cdrom is [write](#/write "write命令")-protected, mounting [read](#/read "read命令")-only     挂载成功\n\nll /mnt/cdrom    查看cdrom里面内容\ntotal 859\ndr-xr-xr-x  4 root root   2048 Sep  4  2005 CentOS\n-r--r--r--  2 root root   8859 Mar 19  2005 centosdocs-[man](#/man "man命令").css\n-r--r--r--  9 root root  18009 Mar  1  2005 GPL\ndr-xr-xr-x  2 root root 241664 May  7 02:32 headers\ndr-xr-xr-x  4 root root   2048 May  7 02:23 images\ndr-xr-xr-x  2 root root   4096 May  7 02:23 isolinux\ndr-xr-xr-x  2 root root  18432 May  2 18:50 NOTES\n-r--r--r--  2 root root   5443 May  7 01:49 RELEASE-NOTES-en.html\ndr-xr-xr-x  2 root root   2048 May  7 02:34 repodata\n-r--r--r--  9 root root   1795 Mar  1  2005 [rpm](#/rpm "rpm命令")-GPG-KEY\n-r--r--r--  2 root root   1795 Mar  1  2005 RPM-GPG-KEY-centos4\n-r--r--r--  1 root root 571730 May  7 01:39 yumgroups.xml\n')])])])}]}},303:function(r,o,t){r.exports=t(891)},891:function(r,o,t){var n=t(5)(null,t(1350),null,null,null);r.exports=n.exports}});
//# sourceMappingURL=249.a78decabe0a4d00f1e84.js.map