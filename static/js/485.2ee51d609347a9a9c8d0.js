webpackJsonp([485],{1626:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("section",[r("p",[r("strong",[e._v("chage命令")]),e._v("是用来修改帐号和密码的有效期限。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("chage [选项] 用户名\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('-m：密码可更改的最小天数。为零时代表任何时候都可以更改密码。\n-M：密码保持有效的最大天数。\n-[w](#/w "w命令")：用户密码到期前，提前收到警告信息的天数。\n-E：帐号到期的日期。过了这天，此帐号将不可用。\n-d：上一次更改的日期。\n-i：停滞时期。如果一个密码已过期这些天，那么此帐号将不可用。\n-l：例出当前的设置。由非特权用户来确定他们的密码或帐号何时过期。\n')])]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[e._v("可以编辑"),r("code",{pre:!0},[e._v('/etc/[login](#/login "login命令").defs')]),e._v("来设定几个参数，以后设置口令默认就按照参数设定为准：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("PASS_MAX_DAYS   99999\nPASS_MIN_DAYS   0\nPASS_MIN_LEN    5\nPASS_WARN_AGE   7\n")])]),e._v(" "),r("p",[e._v("当然在"),r("code",{pre:!0},[e._v('/etc/default/[useradd](#/useradd "useradd命令")')]),e._v("可以找到如下2个参数进行设置：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('# useradd defaults [file](#/file "file命令")\nGROUP=100\nHOME=/home\nINACTIVE=-1\nEXPIRE=\nSHELL=/bin/bash\nSKEL=/etc/skel\nCREATE_MAIL_SPOOL=[yes](#/yes "yes命令")\n')])]),e._v(" "),r("p",[e._v("通过修改配置文件，能对之后新建用户起作用，而目前系统已经存在的用户，则直接用chage来配置。")]),e._v(" "),r("p",[e._v("我的服务器root帐户密码策略信息如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("[root@linuxde ~]# chage -l root\n最近一次密码修改时间                    ： 3月 12, 2013\n密码过期时间                            ：从不\n密码失效时间                           ：从不\n帐户过期时间                           ：从不\n两次改变密码之间相距的最小天数          ：0\n两次改变密码之间相距的最大天数          ：99999\n在密码过期之前警告的天数                ：7\n")])]),e._v(" "),r("p",[e._v("我可以通过如下命令修改我的密码过期时间：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("[root@linuxde ~]# chage -M 60 root\n[root@linuxde ~]# chage -l root\n最近一次密码修改时间                          ： 3月 12, 2013\n密码过期时间                                       ： 5月 11, 2013\n密码失效时间                                       ：从不\n帐户过期时间                                       ：从不\n两次改变密码之间相距的最小天数          ：0\n两次改变密码之间相距的最大天数          ：60\n在密码过期之前警告的天数                    ：9\n")])]),e._v(" "),r("p",[e._v("然后通过如下命令设置密码失效时间：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("[root@linuxde ~]# chage -I 5 root\n[root@linuxde ~]# chage -l root\n最近一次密码修改时间                          ： 3月 12, 2013\n密码过期时间                                  ： 5月 11, 2013\n密码失效时间                                  ： 5月 16, 2013\n帐户过期时间                                  ：从不\n两次改变密码之间相距的最小天数          ：0\n两次改变密码之间相距的最大天数          ：60\n在密码过期之前警告的天数                 ：9\n")])]),e._v(" "),r("p",[e._v("从上述命令可以看到，在密码过期后5天，密码自动失效，这个用户将无法登陆系统了。")])])}]}},64:function(e,n,r){e.exports=r(652)},652:function(e,n,r){var _=r(5)(null,r(1626),null,null,null);e.exports=_.exports}});
//# sourceMappingURL=485.2ee51d609347a9a9c8d0.js.map