webpackJsonp([365],{1408:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",[n("strong",[e._v("halt命令")]),e._v("用来关闭正在运行的Linux操作系统。halt命令会先检测系统的"),n("a",{attrs:{href:"#/runlevel",title:"runlevel命令"}},[e._v("runlevel")]),e._v("，若runlevel为0或6，则关闭系统，否则即调用"),n("a",{attrs:{href:"#/shutdown",title:"shutdown命令"}},[e._v("shutdown")]),e._v("来关闭系统。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("halt(选项)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('-d：不要在wtmp中记录；\n-f：不论目前的runlevel为何，不调用shutdown即强制关闭系统；\n-i：在halt之前，关闭全部的网络界面；\n-n：halt前，不用先执行[sync](#/sync "sync命令")；\n-p：halt之后，执行[poweroff](#/poweroff "poweroff命令")；\n-[w](#/w "w命令")：仅在wtmp中记录，而不实际结束系统。\n')])]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("halt -p     //关闭系统后关闭电源。\nhalt -d     //关闭系统，但不留下纪录。\n")])])])}]}},186:function(e,t,n){e.exports=n(775)},775:function(e,t,n){var r=n(5)(null,n(1408),null,null,null);e.exports=r.exports}});
//# sourceMappingURL=365.af5e16955f0d60524e6f.js.map