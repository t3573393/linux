webpackJsonp([372],{1480:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,c=e._self._c||r;return c("section",[c("p",[c("strong",[e._v("grpck命令")]),e._v("用于验证组文件的完整性，在验证之前，需要先锁定（lock）组文件"),c("code",{pre:!0},[e._v("/etc/group")]),e._v("和"),c("code",{pre:!0},[e._v("/etc/shadow")]),e._v("。")]),e._v(" "),c("p",[e._v("grpck命令检查数据是否正确存放，每条记录是否都包含足够的信息，是否有一个唯一的组名，是否包含正确的用户，是否正确设置了组的管理员等。grpck检查发现错误以后，在命令行提示用户是否删除错误的记录。如果用户没有明确回答删除记录，grpck终止运行。")]),e._v(" "),c("h3",[e._v("语法")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v("grpck(选项)\n")])]),e._v(" "),c("h3",[e._v("选项")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('-r：只读模式；\n-s：排序组[id](#/id "id命令")。\n')])]),e._v(" "),c("h3",[e._v("实例")]),e._v(" "),c("p",[e._v("对组账号和影子文件进行验证：")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v("grpck   //必须以管理员身份运行\ngrpck /etc/group /etc/gshadow   //后面两句一样，如果没有输出信息，则表示没有错误。\n")])]),e._v(" "),c("p",[e._v("测试错误的实例：")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('**[echo](#/echo "echo命令") check_user:x: >> /etc/group    //添加一行错误的格式数据\n[cat](#/cat "cat命令") /etc/group | [grep](#/grep "grep命令") check_user**\ncheck_user:x:  //这儿GID字段为空，是错误的。\n\n**grpck /etc/group**\ninvalid group [file](#/file "file命令") entry\ndelete line \'check_user:x:\'? y      //提示是否删除\ngrpck: the files have been updated  //这时已经删除了错误的行，提示文件已经更新。\n\n**cat /etc/group  | grep check_user   //没有查到，已经删除了。**\n')])])])}]}},179:function(e,r,c){e.exports=c(767)},767:function(e,r,c){var p=c(5)(null,c(1480),null,null,null);e.exports=p.exports}});
//# sourceMappingURL=372.c30e89e892d65990194b.js.map