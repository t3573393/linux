webpackJsonp([168],{1665:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,v=e._self._c||n;return v("section",[v("p",[v("strong",[e._v("resize2fs命令")]),e._v("被用来增大或者收缩未加载的“ext2/ext3”文件系统的大小。如果文件系统是处于"),v("a",{attrs:{href:"#/mount",title:"mount命令"}},[e._v("mount")]),e._v("状态下，那么它只能做到扩容，前提条件是内核支持在线resize。，linux kernel 2.6支持在mount状态下扩容但仅限于ext3文件系统。")]),e._v(" "),v("h3",[e._v("语法")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("resize2fs(选项)(参数)\n")])]),e._v(" "),v("h3",[e._v("选项")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("-d：打开调试特性；\n-p：打印已完成的百分比进度条；\n-f：强制执行调整大小操作，覆盖掉安全检查操作；\n-F：开始执行调整大小前，刷新文件系统设备的缓冲区。\n")])]),e._v(" "),v("h3",[e._v("参数")]),e._v(" "),v("ul",[v("li",[e._v("设备文件名：增大要调整大小的文件系统所对应的设备文件名；")]),e._v(" "),v("li",[e._v("大小：文件系统的新大小。")])]),e._v(" "),v("h3",[e._v("实例")]),e._v(" "),v("p",[e._v("LV分区重设大小")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v('resize2fs /dev/vbirdvg/vbirdlv\nresize2fs 1.39 (29-May-2006)\nFilesystem [at](#/at "at命令") /dev/vbirdvg/vbirdlv is mounted on /mnt/lvm; on-line resizing \nPerforming an on-line resize of /dev/vbirdvg/vbirdlv to 2191360 (4k) blocks.\nThe filesystem on /dev/vbirdvg/vbirdlv is now 2191360 blocks long.\n')])])])}]}},386:function(e,n,v){e.exports=v(974)},974:function(e,n,v){var r=v(5)(null,v(1665),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=168.1a669d56a404bf93151f.js.map