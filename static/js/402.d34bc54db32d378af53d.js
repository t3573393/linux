webpackJsonp([402],{1465:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("p",[r("strong",[e._v("fc命令")]),e._v("自动掉用"),r("a",{attrs:{href:"#/vi",title:"vi命令"}},[e._v("vi")]),e._v("编辑器修改已有历史命令，当保存时立即执行修改后的命令，也可以用来显示历史命令。fc命令编辑历史命令时，会自动调用vi编辑器。fc保存文件后，会自动执行所编辑过的命令。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("fc(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("-l：显示历史命令；\n-n：显示历史命令时，不显示编号；\n-r：反序显示历史命令。\n")])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("ul",[r("li",[e._v("起始指令编号：指定要编辑的起始指令编号；")]),e._v(" "),r("li",[e._v("结尾指令编号：指定要编辑的结尾指令编号。")])]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v("使用该指令显示最近使用的10条历史命令，输入如下命令：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# fc -l -10     #显示10条历史命令\n1039     [type](#/type "type命令") -a [grep](#/grep "grep命令")\n1040     [export](#/export "export命令")\n1041     [history](#/history "history命令") 10\n1042     [ulimit](#/ulimit "ulimit命令") -a\n1043     [shopt](#/shopt "shopt命令")\n1044     [help](#/help "help命令") [ls](#/ls "ls命令")\n1045     help [env](#/env "env命令")\n1046     help short\n1047     help shopt\n1048     showkey -a\n')])]),e._v(" "),r("p",[e._v("第一列信息是历史命令的编号，第二列信息是历史命令的具体格式。若用户需要编辑第1040条历史命令时，则输入如下命令：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("fc 1040                    #编辑第1040条历史命令\n")])]),e._v(" "),r("p",[e._v("命令执行成功后，将自动调用vi编辑器编辑指定的命令，编辑完成后保存，会自动执行修改后的命令。当用户在vi编辑器中修改指令并保存后，被修改的命令会被自动调用并执行。")])])}]}},149:function(e,t,r){e.exports=r(738)},738:function(e,t,r){var v=r(5)(null,r(1465),null,null,null);e.exports=v.exports}});
//# sourceMappingURL=402.d34bc54db32d378af53d.js.map