webpackJsonp([526],{1666:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("section",[n("p",[n("strong",[e._v("apropos命令")]),e._v("在一些特定的包含系统命令的简短描述的数据库文件里查找关键字，然后把结果送到标准输出。")]),e._v(" "),n("p",[e._v("如果你不知道完成某个特定任务所需要命令的名称，可以使用一个关键字通过Linux apropos实用程序来搜索它。该实用程序可以搜索关键字并且显示所有包含匹配项的"),n("a",{attrs:{href:"#/man",title:"man命令"}},[e._v("man")]),e._v("页面的简短描述。另外，使用man实用程序和-k（关键字）选项，可以得到和用Linux apropos实用程序相同的结果（实际上是相同的命令）。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('apropos [-dalhvV] [-e|-[w](#/w "w命令")|-r] [-s section] [-m system[,...]] [-M path] [-L locale] [-C [file](#/file "file命令")] keyword ...\n')])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('-d, --debug：输出调试信息。\n-v, --verbose：输出详细的警告信息。\n-r, -- regex：将每个keyword作为正则表达式解释。这是默认行为。每个keyword将匹配手册页和描述。\n-w, --wildcard：将每个keyword作为shell样式的通配符解释。\n-e, --exact：每个keyword将精确匹配手册页名字和描述。\n-a, --and：只显示匹配所有keyword的手册页和描述。默认显示匹配任何keyword的项。\n-l, --long：不根据终端宽度缩减输出。\n-s section, --section section：只查找指定的手册section。\n-m system[,...], --systems=system[,...]：用于查找其它操作系统的手册页。\n-M path, --manpath=path：指定从其它以冒号分隔的手册页层次查找。默认使用$MANPATH环境变量。这个选项覆盖$MANPATH的内容。\n-L locale, --locale=locale：apropos调用C函数setlocale来得到当前本地化信息，包括$LC_MESSAGE和$LANG。使用该选项提供一个locale字符串来临时更改本地化信息。\n-C file, --config-file=file：使用这个用户配置文件而不是默认的~/.manpath。\n-h, --[help](#/help "help命令")：打印帮助信息并退出。\n-V, --version：打印版本信息并退出。\n')])]),e._v(" "),n("h3",[e._v("返回值")]),e._v(" "),n("p",[e._v("返回0表示成功，1表示用法、语法或配置文件错误，2表示操作错误，16表示没有找到匹配的内容。")]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# man -k [who](#/who "who命令")\n[at](#/at "at命令").allow [at]        (5)  - determine who can submit [jobs](#/jobs "jobs命令") via at or [batch](#/batch "batch命令")\nat.deny [at]         (5)  - determine who can submit jobs via at or batch\n[jwhois](#/jwhois "jwhois命令")               (1)  - client for the whois [service](#/service "service命令")\njwhois              ([rpm](#/rpm "rpm命令")) - Internet whois/nicname client.\nNet::LDAP::Extension::[whoami](#/whoami "whoami命令") (3pm)  - LDAP Who am I? Operation\nw                    (1)  - Show who is logged on and what they are doing\nwho                  (1p)  - display who is on the system\nwho                  (1)  - show who is logged on\nwhoami               (1)  - print effective userid\n\n[root@localhost ~]# apropos who\nat.allow [at]        (5)  - determine who can submit jobs via at or batch\nat.deny [at]         (5)  - determine who can submit jobs via at or batch\njwhois               (1)  - client for the whois service\njwhois              (rpm) - Internet whois/nicname client.\nNet::LDAP::Extension::WhoAmI (3pm)  - LDAP Who am I? Operation\nw                    (1)  - Show who is logged on and what they are doing\nwho                  (1p)  - display who is on the system\nwho                  (1)  - show who is logged on\nwhoami               (1)  - print effective userid\n')])]),e._v(" "),n("p",[e._v("查找手册页名字和描述中包含"),n("a",{attrs:{href:"#/emacs",title:"emacs命令"}},[e._v("emacs")]),e._v("和"),n("a",{attrs:{href:"#/vi",title:"vi命令"}},[e._v("vi")]),e._v("的手册页：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("apropos -a emacs vi\n")])])])}]}},22:function(e,o,n){e.exports=n(610)},610:function(e,o,n){var t=n(5)(null,n(1666),null,null,null);e.exports=t.exports}});
//# sourceMappingURL=526.44325aed58eedbbd3fbe.js.map