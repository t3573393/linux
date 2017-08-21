webpackJsonp([354],{1529:function(s,p){s.exports={render:function(){var s=this,p=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,p=s.$createElement,v=s._self._c||p;return v("section",[v("p",[v("strong",[s._v("htpasswd命令")]),s._v("是Apache的Web服务器内置工具，用于创建和更新储存用户名、域和用户基本认证的密码文件。")]),s._v(" "),v("h3",[s._v("语法")]),s._v(" "),v("h3",[s._v("htpasswd(选项)(参数)")]),s._v(" "),v("h3",[s._v("选项")]),s._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[s._v("-c：创建一个加密文件；\n-n：不更新加密文件，只将加密后的用户名密码显示在屏幕上；\n-m：默认采用MD5算法对密码进行加密；\n-d：采用CRYPT算法对密码进行加密；\n-p：不对密码进行进行加密，即明文密码；\n-s：采用SHA算法对密码进行加密；\n-b：在命令行中一并输入用户名和密码而不是根据提示输入密码；\n-D：删除指定的用户。\n")])]),s._v(" "),v("h3",[s._v("参数")]),s._v(" "),v("ul",[v("li",[s._v("用户：要创建或者更新密码的用户名；")]),s._v(" "),v("li",[s._v("密码：用户的新密码。")])]),s._v(" "),v("h3",[s._v("实例")]),s._v(" "),v("p",[v("strong",[s._v("利用htpasswd命令添加用户")])]),s._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[s._v('htpasswd -[bc](#/bc "bc命令") .[passwd](#/passwd "passwd命令") www.linuxde.net [php](#/php "php命令")\n')])]),s._v(" "),v("p",[s._v("在bin目录下生成一个.passwd文件，用户名www.linuxde.net，密码：php，默认采用MD5加密方式。")]),s._v(" "),v("p",[v("strong",[s._v("在原有密码文件中增加下一个用户")])]),s._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[s._v("htpasswd -b .passwd Jack 123456\n")])]),s._v(" "),v("p",[s._v("去掉"),v("code",{pre:!0},[s._v("-c")]),s._v("选项，即可在第一个用户之后添加第二个用户，依此类推。")]),s._v(" "),v("p",[v("strong",[s._v("不更新密码文件，只显示加密后的用户名和密码")])]),s._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[s._v("htpasswd -nb Jack 123456\n")])]),s._v(" "),v("p",[s._v("不更新.passwd文件，只在屏幕上输出用户名和经过加密后的密码。")]),s._v(" "),v("p",[v("strong",[s._v("利用htpasswd命令删除用户名和密码")])]),s._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[s._v("htpasswd -D .passwd Jack\n")])]),s._v(" "),v("p",[v("strong",[s._v("利用htpasswd命令修改密码")])]),s._v(" "),v("pre",{pre:!0},[v("code",{attrs:{"v-pre":""}},[s._v("htpasswd -D .passwd Jack\nhtpasswd -b .passwd Jack 123456\n")])]),s._v(" "),v("p",[s._v("即先使用htpasswd删除命令删除指定用户，再利用htpasswd添加用户命令创建用户即可实现修改密码的功能。")])])}]}},197:function(s,p,v){s.exports=v(785)},785:function(s,p,v){var e=v(5)(null,v(1529),null,null,null);s.exports=e.exports}});
//# sourceMappingURL=354.aa897e980cb5480a7d99.js.map