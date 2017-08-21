webpackJsonp([273],{1462:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("section",[r("p",[r("strong",[e._v("lvreduce命令")]),e._v("用于减少LVM逻辑卷占用的空间大小。使用lvreduce命令收缩逻辑卷的空间大小有可能会删除逻辑卷上已有的数据，所以在操作前必须进行确认。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("lvreduce(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("-L：指定逻辑卷的大小，单位为“kKmMgGtT”字节；\n-l：指定逻辑卷的大小（LE数）。\n")])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("p",[e._v("逻辑卷：指定要操作的逻辑卷对应的设备文件。")]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v("使用lvreduce命令减少指定的逻辑卷的空间大小。在命令行中输入下面的命令：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# lvreduce -L -50M /dev/vg1000/lvol0     #将逻辑卷的空间大小减少50M\n")])]),e._v(" "),r("p",[e._v("输出信息如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("......省略部分输出内容......  \nDo you really want to reduce lvol0? [y/n]: y  #确认操作  \n  Reducing logical volume lvol0 to 252.00 MB  \n  Logical volume lvol0 successfully resized\n")])])])}]}},279:function(e,v,r){e.exports=r(867)},867:function(e,v,r){var l=r(5)(null,r(1462),null,null,null);e.exports=l.exports}});
//# sourceMappingURL=273.abae0d1d53cf20a31d10.js.map