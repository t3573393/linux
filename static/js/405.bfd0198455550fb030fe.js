webpackJsonp([405],{147:function(e,r,n){e.exports=n(735)},1588:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("section",[n("p",[n("strong",[e._v("export命令")]),e._v("用于将shell变量输出为环境变量，或者将shell函数输出为环境变量。")]),e._v(" "),n("p",[e._v("一个变量创建时，它不会自动地为在它之后创建的shell进程所知。而命令export可以向后面的shell传递变量的值。当一个shell脚本调用并执 行时，它不会自动得到原为脚本（调用者）里定义的变量的访问权，除非这些变量已经被显式地设置为可用。export命令可以用于传递一个或多个变量的值到任何后继脚本。")]),e._v(" "),n("h3",[e._v("语法")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("export(选项)(参数)\n")])]),e._v(" "),n("h3",[e._v("选项")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("-f：代表[变量名称]中为函数名称；\n-n：删除指定的变量。变量实际上并未删除，只是不会输出到后续指令的执行环境中；\n-p：列出所有的shell赋予程序的环境变量。\n")])]),e._v(" "),n("h3",[e._v("参数")]),e._v(" "),n("p",[e._v("变量：指定要输出或者删除的环境变量。")]),e._v(" "),n("h3",[e._v("实例")]),e._v(" "),n("p",[e._v("一般来说，配置交叉编译工具链的时候需要指定编译工具的路径，此时就需要设置环境变量。查看已经存在的环境变量：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('[root@localhost ~]# export\n[declare](#/declare "declare命令") -x G_BROKEN_FILENAMES="1"\ndeclare -x HISTSIZE="1000"\ndeclare -x HOME="/root"\ndeclare -x [hostname](#/hostname "hostname命令")="localhost"\ndeclare -x INPUTRC="/etc/inputrc"\ndeclare -x LANG="zh_CN.UTF-8"\ndeclare -x LESSOPEN="|/usr/bin/lesspipe.sh %s"\ndeclare -x [logname](#/logname "logname命令")="root"\ndeclare -x LS_COLORS="no=00:fi=00:di=01;34:[ln](#/ln "ln命令")=01;36:pi=40;33:so=01;35:bd=40;33;01:[cd](#/cd "cd命令")=40;33;01:or=01;05;37;41:mi=01;05;37;41:[ex](#/ex "ex命令")=01;32:*.cmd=01;32:*.exe=01;32:*.com=01;32:*.btm=01;32:*.bat=01;32:*.sh=01;32:*.csh=01;32:*.[tar](#/tar "tar命令")=01;31:*.tgz=01;31:*.[arj](#/arj "arj命令")=01;31:*.taz=01;31:*.lzh=01;31:*.[zip](#/zip "zip命令")=01;31:*.z=01;31:*.Z=01;31:*.gz=01;31:*.bz2=01;31:*.bz=01;31:*.tz=01;31:*.[rpm](#/rpm "rpm命令")=01;31:*.[cpio](#/cpio "cpio命令")=01;31:*.jpg=01;35:*.gif=01;35:*.bmp=01;35:*.xbm=01;35:*.xpm=01;35:*.png=01;35:*.tif=01;35:"\ndeclare -x [mail](#/mail "mail命令")="/var/spool/mail/root"\ndeclare -x OLDPWD\ndeclare -x PATH="/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin"\ndeclare -x [pwd](#/pwd "pwd命令")="/root"\ndeclare -x SHELL="/bin/bash"\ndeclare -x SHLVL="1"\ndeclare -x SSH_CLIENT="192.168.2.111 2705 22"\ndeclare -x SSH_CONNECTION="192.168.2.111 2705 192.168.2.2 22"\ndeclare -x SSH_TTY="/dev/pts/0"\ndeclare -x TERM="linux"\ndeclare -x USER="root"\n')])])])}]}},735:function(e,r,n){var l=n(5)(null,n(1588),null,null,null);e.exports=l.exports}});
//# sourceMappingURL=405.bfd0198455550fb030fe.js.map