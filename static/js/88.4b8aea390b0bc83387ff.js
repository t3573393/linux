webpackJsonp([88],{1057:function(n,e,t){var r=t(5)(null,t(1441),null,null,null);n.exports=r.exports},1441:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("p",[t("strong",[n._v("telnet命令")]),n._v("用于登录远程主机，对远程主机进行管理。telnet因为采用明文传送报文，安全性不好，很多Linux服务器都不开放telnet服务，而改用更安全的"),t("a",{attrs:{href:"#/ssh",title:"ssh命令"}},[n._v("ssh")]),n._v("方式了。但仍然有很多别的系统可能采用了telnet方式来提供远程登录，因此弄清楚telnet客户端的使用方式仍是很有必要的。")]),n._v(" "),t("h3",[n._v("语法")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("telnet(选项)(参数)\n")])]),n._v(" "),t("h3",[n._v("选项")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v('-8：允许使用8位字符资料，包括输入与输出；\n-a：尝试自动登入远端系统；\n-b<主机别名>：使用别名指定远端主机名称；\n-c：不读取用户专属目录里的.telnetrc文件；\n-d：启动排错模式；\n-e<脱离字符>：设置脱离字符；\n-E：滤除脱离字符；\n-f：此参数的效果和指定"-F"参数相同；\n-F：使用Kerberos V5认证时，加上此参数可把本地主机的认证数据上传到远端主机；\n-k<域名>：使用Kerberos认证时，加上此参数让远端主机采用指定的领域名，而非该主机的域名；\n-K：不自动登入远端主机；\n-l<用户名称>：指定要登入远端主机的用户名称；\n-L：允许输出8位字符资料；\n-n<记录文件>：指定文件记录相关信息；\n-r：使用类似[rlogin](#/rlogin "rlogin命令")指令的用户界面；\n-S<服务类型>：设置telnet连线所需的[ip](#/ip "ip命令") TOS信息；\n-x：假设主机有支持数据加密的功能，就使用它；\n-X<认证形态>：关闭指定的认证形态。\n')])]),n._v(" "),t("h3",[n._v("参数")]),n._v(" "),t("ul",[t("li",[n._v("远程主机：指定要登录进行管理的远程主机；")]),n._v(" "),t("li",[n._v("端口：指定TELNET协议使用的端口号。")])]),n._v(" "),t("h3",[n._v("实例")]),n._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[n._v("telnet 192.168.2.10\nTrying 192.168.2.10...\nConnected to 192.168.2.10 (192.168.2.10).\nEscape character is '^]'.\n\n    localhost (Linux release 2.6.18-274.18.1.el5 #1 SMP Thu Feb 9 12:45:44 EST 2012) (1)\n\n[login](#/login \"login命令\"): root\nPassword: \nLogin incorrect\n")])])])}]}},469:function(n,e,t){n.exports=t(1057)}});
//# sourceMappingURL=88.4b8aea390b0bc83387ff.js.map