webpackJsonp([192],{1456:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,n=e._self._c||v;return n("section",[n("p",[n("strong",[e._v("pvcreate命令")]),e._v("用于将物理硬盘分区初始化为物理卷，以便LVM使用。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("pvcreate(选项)(参数)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('-f：强制创建物理卷，不需要用户确认；\n-u：指定设备的UUID；\n-y：所有的问题都回答“[yes](#/yes "yes命令")”；\n-Z：是否利用前4个扇区。\n')])]),e._v(" "),n("h3",[e._v("参数")]),e._v(" "),n("p",[e._v("物理卷：指定要创建的物理卷对应的设备文件名。")]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("p",[e._v("查看磁盘信息：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# [fdisk](#/fdisk "fdisk命令") -l\nDisk /dev/hda: 41.1 GB, 41174138880 bytes\n255 heads, 63 sectors/track, 5005 cylinders\nUnits = cylinders of 16065 * 512 = 8225280 bytes\n\n   Device Boot      Start         End      Blocks   [id](#/id "id命令")  System\n/dev/hda1   *           1          13      104391   83  Linux\n/dev/hda2              14        1288    10241437+  83  Linux\n/dev/hda3            1289        1925     5116702+  83  Linux\n/dev/hda4            1926        5005    24740100    5  Extended\n/dev/hda5            1926        2052     1020096   82  Linux swap / Solaris\n/dev/hda6            2053        2235     1469916   8e  Linux LVM\n/dev/hda7            2236        2418     1469916   8e  Linux LVM\n/dev/hda8            2419        2601     1469916   8e  Linux LVM\n/dev/hda9            2602        2784     1469916   8e  Linux LVM\n\n')])]),e._v(" "),n("p",[e._v("检查有无 PV 在系统上，然后将"),n("code",{pre:!0},[e._v("/dev/hda6")]),e._v("到"),n("code",{pre:!0},[e._v("/dev/hda9")]),e._v("建立成为PV格式")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# [pvscan](#/pvscan "pvscan命令")\nNo matching physical volumes found    #找不到任何的 PV 存在！\n')])]),e._v(" "),n("p",[e._v("将6-9分区转成pv，注意大括号的用途：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# pvcreate /dev/hda{6,7,8,9}\n  Physical volume "/dev/hda6" successfully created\n  Physical volume "/dev/hda7" successfully created\n  Physical volume "/dev/hda8" successfully created\n  Physical volume "/dev/hda9" successfully created\n')])]),e._v(" "),n("p",[e._v("这就分別表示每个 PV 的信息与系统所有 PV 的信息：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# pvscan\n  PV /dev/hda6         lvm2 [1.40 GB]\n  PV /dev/hda7         lvm2 [1.40 GB]\n  PV /dev/hda8         lvm2 [1.40 GB]\n  PV /dev/hda9         lvm2 [1.40 GB]\n  Total: 4 [5.61 GB] / in use: 0 [0   ] / in no VG: 4 [5.61 GB]\n")])]),e._v(" "),n("p",[e._v("更详细的列示出系统上面每个 PV 信息：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# [pvdisplay](#/pvdisplay "pvdisplay命令")\n  "/dev/hda6" is a new physical volume of "1.40 GB"\n  --- NEW Physical volume ---\n  PV Name               /dev/hda6  #实际的 partition 分区名称\n  VG Name                          #因为尚未分配出去，所以空白！\n  PV Size               1.40 GB    #就是容量说明\n  Allocatable           NO         #是否已被分配，结果是 NO\n  PE Size (KByte)       0          #在此 PV 內的 PE 大小\n  Total PE              0          #共分割出几个 PE\n  [free](#/free "free命令") PE               0          #沒被 LV 用掉的 PE\n  Allocated PE          0          #尚可分配出去的 PE 数量\n  PV UUID               Z13Jk5-RCls-UJ8B-HzDa-Gesn-atku-rf2biN\n....(底下省略)....\n')])]),e._v(" "),n("p",[e._v("删除物理卷：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# [pvremove](#/pvremove "pvremove命令") /dev/sdb2\nLabels on physical volume "/dev/sdb2" successfully wiped\n\n')])]),e._v(" "),n("p",[e._v("修改物理卷属性：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# [pvchange](#/pvchange "pvchange命令") -x n /dev/sdb1    #禁止分配指定物理卷上的PE\nPhysical volume "/dev/sdb1" changed  \n1 physical volume changed / 0 physical volumes not changed \n')])])])}]}},362:function(e,v,n){e.exports=n(950)},950:function(e,v,n){var a=n(5)(null,n(1456),null,null,null);e.exports=a.exports}});
//# sourceMappingURL=192.b74a95637bd50a55201d.js.map