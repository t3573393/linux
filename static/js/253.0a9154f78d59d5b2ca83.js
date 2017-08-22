webpackJsonp([253],{1572:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,p=e._self._c||v;return p("section",[p("p",[p("strong",[e._v("mkswap命令")]),e._v("用于在一个文件或者设备上建立交换分区。在建立完之后要使用sawpon命令开始使用这个交换区。最后一个选择性参数指定了交换区的大小，但是这个参数是为了向后兼容设置的，没有使用的必要，一般都将整个文件或者设备作为交换区。")]),e._v(" "),p("h3",[e._v("语法")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("mkswap(选项)(参数)\n")])]),e._v(" "),p("h3",[e._v("选项")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("-c：建立交换区前，先检查是否有损坏的区块；\n-f：在SPARC电脑上建立交换区时，要加上此参数；\n-v0：建立旧式交换区，此为预设值；\n-v1：建立新式交换区。\n")])]),e._v(" "),p("h3",[e._v("参数")]),e._v(" "),p("p",[e._v("设备：指定交换空间对应的设备文件或者交换文件。")]),e._v(" "),p("h3",[e._v("实例")]),e._v(" "),p("p",[p("strong",[e._v("查看系统swap space大小：")])]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v('[free](#/free "free命令") -m\ntotal used free shared buffers cached\nMem: 377 180 197 0 19 110\n-/+ buffers/cache: 50 327\nSwap: 572 0 572\n')])]),e._v(" "),p("p",[p("strong",[e._v("查看当前的swap空间("),p("a",{attrs:{href:"#/file",title:"file命令"}},[e._v("file")]),e._v("(s)/partition(s))：")])]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v('[swapon](#/swapon "swapon命令") -s\n\n等价于\n\n[cat](#/cat "cat命令") /proc/swaps\n')])]),e._v(" "),p("p",[p("strong",[e._v("添加交换空间")])]),e._v(" "),p("p",[e._v("添加一个"),p("strong",[e._v("交换分区")]),e._v("或添加一个"),p("strong",[e._v("交换文件")]),e._v("。推荐你添加一个交换分区；不过，若你没有多少空闲空间可用，则添加交换文件。")]),e._v(" "),p("p",[e._v("添加一个交换分区，步骤如下：")]),e._v(" "),p("p",[e._v("使用"),p("a",{attrs:{href:"#/fdisk",title:"fdisk命令"}},[e._v("fdisk")]),e._v("来创建交换分区（假设 /dev/sdb2 是创建的交换分区），使用 mkswap 命令来设置交换分区：")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("mkswap /dev/sdb2\n")])]),e._v(" "),p("p",[e._v("启用交换分区：")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("swapon /dev/sdb2\n")])]),e._v(" "),p("p",[e._v("写入"),p("code",{pre:!0},[e._v("/etc/fstab")]),e._v("，以便在引导时启用：")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("/dev/sdb2 swap swap defaults 0 0\n")])]),e._v(" "),p("p",[e._v("添加一个交换文件，步骤如下：")]),e._v(" "),p("p",[e._v("创建大小为512M的交换文件：")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v('[dd](#/dd "dd命令") if=/dev/zero of=/swapfile1 bs=1024 count=524288\n')])]),e._v(" "),p("p",[e._v("使用mkswap命令来设置交换文件：")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("mkswap /swapfile1\n")])]),e._v(" "),p("p",[e._v("启用交换分区：")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("swapon /swapfile1\n")])]),e._v(" "),p("p",[e._v("写入"),p("code",{pre:!0},[e._v("/etc/fstab")]),e._v("，以便在引导时启用：")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("/swapfile1 swap swap defaults 0 0\n")])]),e._v(" "),p("p",[e._v("新添了交换分区并启用它之后，请查看"),p("code",{pre:!0},[e._v("cat /proc/swaps")]),e._v("或free命令的输出来确保交换分区已被启用了。")]),e._v(" "),p("p",[p("strong",[e._v("删除交换空间：")])]),e._v(" "),p("p",[e._v("禁用交换分区：")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v('[swapoff](#/swapoff "swapoff命令") /dev/sdb2\n')])]),e._v(" "),p("p",[e._v("从"),p("code",{pre:!0},[e._v("/etc/fstab")]),e._v("中删除项目，使用fdisk或yast工具删除分区。")])])}]}},300:function(e,v,p){e.exports=p(888)},888:function(e,v,p){var r=p(5)(null,p(1572),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=253.0a9154f78d59d5b2ca83.js.map