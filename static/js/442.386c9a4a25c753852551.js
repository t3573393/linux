webpackJsonp([442],{108:function(e,r,n){e.exports=n(696)},1192:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("section",[n("p",[n("strong",[e._v("dmesg命令")]),e._v("被用于检查和控制内核的环形缓冲区。kernel会将开机信息存储在ring buffer中。您若是开机时来不及查看信息，可利用dmesg来查看。开机信息保存在"),n("code",{pre:!0},[e._v("/var/log/dmesg")]),e._v("文件里。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("dmesg(选项)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("-c：显示信息后，清除ring buffer中的内容；\n-s<缓冲区大小>：预设置为8196，刚好等于ring buffer的大小；\n-n：设置记录信息的层级。\n")])]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# dmesg | [head](#/head "head命令")\nLinux version 2.6.18-348.6.1.el5 (mockbuild@builder17.centos.org) ([gcc](#/gcc "gcc命令") version 4.1.2 20080704 (Red Hat 4.1.2-54)) #1 SMP Tue May 21 15:34:22 EDT 2013\nBIOS-provided physical RAM map:\n BIOS-e820: 0000000000010000 - 000000000009f400 (usable)\n BIOS-e820: 000000000009f400 - 00000000000a0000 (reserved)\n BIOS-e820: 00000000000f0000 - 0000000000100000 (reserved)\n BIOS-e820: 0000000000100000 - 000000007f590000 (usable)\n BIOS-e820: 000000007f590000 - 000000007f5e3000 (ACPI NVS)\n BIOS-e820: 000000007f5e3000 - 000000007f5f0000 (ACPI data)\n BIOS-e820: 000000007f5f0000 - 000000007f600000 (reserved)\n BIOS-e820: 00000000e0000000 - 00000000e8000000 (reserved)\n')])])])}]}},696:function(e,r,n){var s=n(5)(null,n(1192),null,null,null);e.exports=s.exports}});
//# sourceMappingURL=442.386c9a4a25c753852551.js.map