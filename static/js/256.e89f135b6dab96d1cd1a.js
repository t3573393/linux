webpackJsonp([256],{1252:function(i,n){i.exports={render:function(){var i=this,n=i.$createElement;i._self._c;return i._m(0)},staticRenderFns:[function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("section",[e("p",[e("strong",[i._v("mkinitrd命令")]),i._v("建立要载入ramdisk的映像文件，以供Linux开机时载入ramdisk。")]),i._v(" "),e("p",[i._v("这个是重新封包核心的命令，例如你自己修改了一个设备的驱动，如果这个驱动要加入核心级别的话，就需要对核心进行重新封包，把新加的配置编译到核心内部去！")]),i._v(" "),e("h3",[i._v("语法")]),i._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[i._v("mkinitrd(选项)(参数)\n")])]),i._v(" "),e("h3",[i._v("选项")]),i._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[i._v("-f：若指定的映像问家名称与现有文件重复，则覆盖现有的文件；\n-v：执行时显示详细的信息；\n--omit-scsi-modules：不要载入SCSI模块；\n--preload=<模块名称>：指定要载入的模块；\n--with=<模块名称>：指定要载入的模块；\n--version：显示版本信息。\n")])]),i._v(" "),e("h3",[i._v("参数")]),i._v(" "),e("ul",[e("li",[i._v("映像文件：指定要创建的映像文件；")]),i._v(" "),e("li",[i._v("内核版本：指定内核版本。")])]),i._v(" "),e("h3",[i._v("实例")]),i._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[i._v('[root@localhost tmp]# mkinitrd -v -f myinitrd.img $([uname](#/uname "uname命令") -r)\nCreating initramfs\nWARNING: using /tmp for temporary files\nLooking for deps of module ide-disk\nLooking for deps of module ext3  jbd\nLooking for deps of module jbd\nUsing modules:  ./kernel/fs/jbd/jbd.ko ./kernel/fs/ext3/ext3.ko\n/sbin/nash -> /tmp/initrd.Vz3928/bin/nash\n/sbin/[insmod](#/insmod "insmod命令").static -> /tmp/initrd.Vz3928/bin/insmod\n/sbin/udev.static -> /tmp/initrd.Vz3928/sbin/udev\n/etc/udev/udev.conf -> /tmp/initrd.Vz3928/etc/udev/udev.conf\ncopy from /lib/modules/2.6.9-5.EL/./kernel/fs/jbd/jbd.ko(elf32-i386) to /tmp/initrd.Vz3928/lib/jbd.ko(elf32-i386)\ncopy from /lib/modules/2.6.9-5.EL/./kernel/fs/ext3/ext3.ko(elf32-i386) to /tmp/initrd.Vz3928/lib/ext3.ko(elf32-i386)\nLoading module jbd\nLoading module ext3\n\n[root@localhost tmp]# [file](#/file "file命令") myinitrd.img\nmyinitrd.img: [gzip](#/gzip "gzip命令") compressed data, from Unix, max compression\n\n[root@localhost tmp]# [mv](#/mv "mv命令") myinitrd.img  myinitrd.img.gz\n[root@localhost tmp]# gzip -d myinitrd.img.gz\n[root@localhost tmp]# file myinitrd.img\nmyinitrd.img: ASCII [cpio](#/cpio "cpio命令") archive (SVR4 with no CRC)\n')])])])}]}},297:function(i,n,e){i.exports=e(885)},885:function(i,n,e){var o=e(5)(null,e(1252),null,null,null);i.exports=o.exports}});
//# sourceMappingURL=256.e89f135b6dab96d1cd1a.js.map