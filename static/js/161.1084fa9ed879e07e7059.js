webpackJsonp([161],{1553:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement;r._self._c;return r._m(0)},staticRenderFns:[function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("section",[n("p",[n("strong",[r._v("rmdir命令")]),r._v("用来删除空目录。当目录不再被使用时，或者磁盘空间已到达使用限定值，就需要删除失去使用价值的目录。利用rmdir命令可以从一个目录中删除一个或多个空的子目录。该命令从一个目录中删除一个或多个子目录，其中"),n("a",{attrs:{href:"#/dirname",title:"dirname命令"}},[r._v("dirname")]),r._v("佬表示目录名。如果dirname中没有指定路径，则删除当前目录下由dirname指定的目录；如dirname中包含路径，则删除指定位置的目录。删除目录时，必须具有对其父目录的写权限。")]),r._v(" "),n("p",[r._v("注意：子目录被删除之前应该是空目录。就是说，该目录中的所有文件必须用"),n("a",{attrs:{href:"#/rm",title:"rm命令"}},[r._v("rm")]),r._v("命令全部，另外，当前工作目录必须在被删除目录之上，不能是被删除目录本身，也不能是被删除目录的子目录。")]),r._v(" "),n("p",[r._v("虽然还可以用带有"),n("code",{pre:!0},[r._v("-r")]),r._v("选项的rm命令递归删除一个目录中的所有文件和该目录本身，但是这样做存在很大的危险性。")]),r._v(" "),n("h3",[r._v("语法")]),r._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[r._v("rmdir(选项)(参数)\n")])]),r._v(" "),n("h3",[r._v("选项")]),r._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[r._v('-p或--parents：删除指定目录后，若该目录的上层目录已变成空目录，则将其一并删除；\n--ignore-fail-on-non-empty：此选项使rmdir命令忽略由于删除非空目录时导致的错误信息；\n-v或-verboes：显示命令的详细执行过程；\n--[help](#/help "help命令")：显示命令的帮助信息；\n--version：显示命令的版本信息。\n')])]),r._v(" "),n("h3",[r._v("参数")]),r._v(" "),n("p",[r._v("目录列表：要删除的空目录列表。当删除多个空目录时，目录名之间使用空格隔开。")]),r._v(" "),n("h3",[r._v("实例")]),r._v(" "),n("p",[r._v("删除子目录os_1和其父目录bin")]),r._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[r._v('[cd](#/cd "cd命令") /usr/meng/[test](#/test "test命令")\nrmdir -p bin/os_1\n')])])])}]}},394:function(r,e,n){r.exports=n(982)},982:function(r,e,n){var t=n(5)(null,n(1553),null,null,null);r.exports=t.exports}});
//# sourceMappingURL=161.1084fa9ed879e07e7059.js.map