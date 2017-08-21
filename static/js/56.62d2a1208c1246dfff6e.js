webpackJsonp([56],{1088:function(e,r,v){var _=v(5)(null,v(1630),null,null,null);e.exports=_.exports},1630:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("section",[v("p",[v("strong",[e._v("userdel命令")]),e._v("用于删除给定的用户，以及与用户相关的文件。若不加选项，则仅删除用户帐号，而不删除相关文件。")]),e._v(" "),v("h3",[e._v("语法")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("userdel(选项)(参数)\n")])]),e._v(" "),v("h3",[e._v("选项")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("-f：强制删除用户，即使用户当前已登录；\n-r：删除用户的同时，删除与用户相关的所有文件。\n")])]),e._v(" "),v("h3",[e._v("参数")]),e._v(" "),v("p",[e._v("用户名：要删除的用户名。")]),e._v(" "),v("h3",[e._v("实例")]),e._v(" "),v("p",[e._v("userdel命令很简单，比如我们现在有个用户linuxde，其家目录位于"),v("code",{pre:!0},[e._v("/var")]),e._v("目录中，现在我们来删除这个用户：")]),e._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[e._v("userdel linuxde       //删除用户linuxde，但不删除其家目录及文件；\nuserdel -r linuxde    //删除用户linuxde，其家目录及文件一并删除；\n")])]),e._v(" "),v("p",[e._v("请不要轻易用"),v("code",{pre:!0},[e._v("-r")]),e._v("选项；他会删除用户的同时删除用户所有的文件和目录，切记如果用户目录下有重要的文件，在删除前请备份。")]),e._v(" "),v("p",[e._v("其实也有最简单的办法，但这种办法有点不安全，也就是直接在"),v("code",{pre:!0},[e._v('/etc/[passwd](#/passwd "passwd命令")')]),e._v("中删除您想要删除用户的记录；但最好不要这样做，"),v("code",{pre:!0},[e._v("/etc/passwd")]),e._v("是极为重要的文件，可能您一不小心会操作失误。")])])}]}},500:function(e,r,v){e.exports=v(1088)}});
//# sourceMappingURL=56.62d2a1208c1246dfff6e.js.map