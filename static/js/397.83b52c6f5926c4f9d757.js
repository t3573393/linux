webpackJsonp([397],{1520:function(e,v){e.exports={render:function(){var e=this,v=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("section",[t("p",[t("strong",[e._v("find命令")]),e._v("用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。")]),e._v(" "),t("h3",[e._v("语法")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find(选项)(参数)\n")])]),e._v(" "),t("h3",[e._v("选项")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('-amin<分钟>：查找在指定时间曾被存取过的文件或目录，单位以分钟计算；\n-anewer<参考文件或目录>：查找其存取时间较指定文件或目录的存取时间更接近现在的文件或目录；\n-atime<24小时数>：查找在指定时间曾被存取过的文件或目录，单位以24小时计算；\n-cmin<分钟>：查找在指定时间之时被更改过的文件或目录；\n-cnewer<参考文件或目录>查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录；\n-ctime<24小时数>：查找在指定时间之时被更改的文件或目录，单位以24小时计算；\n-daystart：从本日开始计算时间；\n-depth：从指定目录下最深层的子目录开始查找；\n-expty：寻找文件大小为0 Byte的文件，或目录下没有任何子目录或文件的空目录；\n-[exec](#/exec "exec命令")<执行指令>：假设find指令的回传值为True，就执行该指令；\n-false：将find指令的回传值皆设为False；\n-fls<列表文件>：此参数的效果和指定“-[ls](#/ls "ls命令")”参数类似，但会把结果保存为指定的列表文件；\n-follow：排除符号连接；\n-fprint<列表文件>：此参数的效果和指定“-print”参数类似，但会把结果保存成指定的列表文件；\n-fprint0<列表文件>：此参数的效果和指定“-print0”参数类似，但会把结果保存成指定的列表文件；\n-fprintf<列表文件><输出格式>：此参数的效果和指定“-[printf](#/printf "printf命令")”参数类似，但会把结果保存成指定的列表文件；\n-fstype<文件系统类型>：只寻找该文件系统类型下的文件或目录；\n-gid<群组识别码>：查找符合指定之群组识别码的文件或目录；\n-group<群组名称>：查找符合指定之群组名称的文件或目录；\n-[help](#/help "help命令")或——help：在线帮助；\n-ilname<范本样式>：此参数的效果和指定“-lname”参数类似，但忽略字符大小写的差别；\n-iname<范本样式>：此参数的效果和指定“-name”参数类似，但忽略字符大小写的差别；\n-inum<inode编号>：查找符合指定的inode编号的文件或目录；\n-ipath<范本样式>：此参数的效果和指定“-path”参数类似，但忽略字符大小写的差别；\n-iregex<范本样式>：此参数的效果和指定“-regexe”参数类似，但忽略字符大小写的差别；\n-links<连接数目>：查找符合指定的硬连接数目的文件或目录；\n-iname<范本样式>：指定字符串作为寻找符号连接的范本样式；\n-ls：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出；\n-maxdepth<目录层级>：设置最大目录层级；\n-mindepth<目录层级>：设置最小目录层级；\n-mmin<分钟>：查找在指定时间曾被更改过的文件或目录，单位以分钟计算；\n-[mount](#/mount "mount命令")：此参数的效果和指定“-xdev”相同；\n-mtime<24小时数>：查找在指定时间曾被更改过的文件或目录，单位以24小时计算；\n-name<范本样式>：指定字符串作为寻找文件或目录的范本样式；\n-newer<参考文件或目录>：查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录；\n-nogroup：找出不属于本地主机群组识别码的文件或目录；\n-noleaf：不去考虑目录至少需拥有两个硬连接存在；\n-nouser：找出不属于本地主机用户识别码的文件或目录；\n-ok<执行指令>：此参数的效果和指定“-exec”类似，但在执行指令之前会先询问用户，若回答“y”或“Y”，则放弃执行命令；\n-path<范本样式>：指定字符串作为寻找目录的范本样式；\n-perm<权限数值>：查找符合指定的权限数值的文件或目录；\n-print：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出。格式为每列一个名称，每个名称前皆有“./”字符串；\n-print0：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出。格式为全部的名称皆在同一行；\n-printf<输出格式>：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出。格式可以自行指定；\n-prune：不寻找字符串作为寻找文件或目录的范本样式;\n-regex<范本样式>：指定字符串作为寻找文件或目录的范本样式；\n-size<文件大小>：查找符合指定的文件大小的文件；\n-true：将find指令的回传值皆设为True；\n-typ<文件类型>：只寻找符合指定的文件类型的文件；\n-uid<用户识别码>：查找符合指定的用户识别码的文件或目录；\n-used<日数>：查找文件或目录被更改之后在指定时间曾被存取过的文件或目录，单位以日计算；\n-user<拥有者名称>：查找符和指定的拥有者名称的文件或目录；\n-version或——version：显示版本信息；\n-xdev：将范围局限在先行的文件系统中；\n-xtype<文件类型>：此参数的效果和指定“-[type](#/type "type命令")”参数类似，差别在于它针对符号连接检查。\n')])]),e._v(" "),t("h3",[e._v("参数")]),e._v(" "),t("p",[e._v("起始目录：查找文件的起始目录。")]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("h4",[e._v("根据文件或者正则表达式进行匹配")]),e._v(" "),t("p",[e._v("列出当前目录及子目录下所有文件和文件夹")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find .\n")])]),e._v(" "),t("p",[e._v("在"),t("code",{pre:!0},[e._v("/home")]),e._v("目录下查找以.txt结尾的文件名")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find /home -name "*.txt"\n')])]),e._v(" "),t("p",[e._v("同上，但忽略大小写")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find /home -iname "*.txt"\n')])]),e._v(" "),t("p",[e._v("当前目录及子目录下查找所有以.txt和.pdf结尾的文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . \\( -name "*.txt" -o -name "*.pdf" \\)\n\n或\n\nfind . -name "*.txt" -o -name "*.pdf"\n')])]),e._v(" "),t("p",[e._v("匹配文件路径或者文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find /usr/ -path "*local*"\n')])]),e._v(" "),t("p",[e._v("基于正则表达式匹配文件路径")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . -regex ".*\\(\\.txt\\|\\.pdf\\)$"\n')])]),e._v(" "),t("p",[e._v("同上，但忽略大小写")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . -iregex ".*\\(\\.txt\\|\\.pdf\\)$"\n')])]),e._v(" "),t("h4",[e._v("否定参数")]),e._v(" "),t("p",[e._v("找出/home下不是以.txt结尾的文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find /home ! -name "*.txt"\n')])]),e._v(" "),t("h4",[e._v("根据文件类型进行搜索")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type 类型参数\n")])]),e._v(" "),t("p",[e._v("类型参数列表：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("f")]),e._v(" 普通文件")]),e._v(" "),t("li",[t("strong",[e._v("l")]),e._v(" 符号连接")]),e._v(" "),t("li",[t("strong",[e._v("d")]),e._v(" 目录")]),e._v(" "),t("li",[t("strong",[e._v("c")]),e._v(" 字符设备")]),e._v(" "),t("li",[t("strong",[e._v("b")]),e._v(" 块设备")]),e._v(" "),t("li",[t("strong",[e._v("s")]),e._v(" 套接字")]),e._v(" "),t("li",[t("strong",[e._v("p")]),e._v(" Fifo")])]),e._v(" "),t("h4",[e._v("基于目录深度搜索")]),e._v(" "),t("p",[e._v("向下最大深度限制为3")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -maxdepth 3 -type f\n")])]),e._v(" "),t("p",[e._v("搜索出深度距离当前目录至少2个子目录的所有文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -mindepth 2 -type f\n")])]),e._v(" "),t("h4",[e._v("根据文件时间戳进行搜索")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f 时间戳\n")])]),e._v(" "),t("p",[e._v("UNIX/Linux文件系统每个文件都有三种时间戳：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("访问时间")]),e._v("（-atime/天，-amin/分钟）：用户最近一次访问时间。")]),e._v(" "),t("li",[t("strong",[e._v("修改时间")]),e._v("（-mtime/天，-mmin/分钟）：文件最后一次修改时间。")]),e._v(" "),t("li",[t("strong",[e._v("变化时间")]),e._v("（-ctime/天，-cmin/分钟）：文件数据元（例如权限等）最后一次修改时间。")])]),e._v(" "),t("p",[e._v("搜索最近七天内被访问过的所有文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -atime -7\n")])]),e._v(" "),t("p",[e._v("搜索恰好在七天前被访问过的所有文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -atime 7\n")])]),e._v(" "),t("p",[e._v("搜索超过七天内被访问过的所有文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -atime +7\n")])]),e._v(" "),t("p",[e._v("搜索访问时间超过10分钟的所有文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -amin +10\n")])]),e._v(" "),t("p",[e._v("找出比"),t("a",{attrs:{href:"#/file",title:"file命令"}},[e._v("file")]),e._v(".log修改时间更长的所有文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -newer file.log\n")])]),e._v(" "),t("h4",[e._v("根据文件大小进行匹配")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -size 文件大小单元\n")])]),e._v(" "),t("p",[e._v("文件大小单元：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("b")]),e._v(" —— 块（512字节）")]),e._v(" "),t("li",[t("strong",[e._v("c")]),e._v(" —— 字节")]),e._v(" "),t("li",[t("strong",[t("a",{attrs:{href:"#/w",title:"w命令"}},[e._v("w")])]),e._v(" —— 字（2字节）")]),e._v(" "),t("li",[t("strong",[e._v("k")]),e._v(" —— 千字节")]),e._v(" "),t("li",[t("strong",[e._v("M")]),e._v(" —— 兆字节")]),e._v(" "),t("li",[t("strong",[e._v("G")]),e._v(" —— 吉字节")])]),e._v(" "),t("p",[e._v("搜索大于10KB的文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -size +10k\n")])]),e._v(" "),t("p",[e._v("搜索小于10KB的文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -size -10k\n")])]),e._v(" "),t("p",[e._v("搜索等于10KB的文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -size 10k\n")])]),e._v(" "),t("h4",[e._v("删除匹配文件")]),e._v(" "),t("p",[e._v("删除当前目录下所有.txt文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . -type f -name "*.txt" -delete\n')])]),e._v(" "),t("h4",[e._v("根据文件权限/所有权进行匹配")]),e._v(" "),t("p",[e._v("当前目录下搜索出权限为777的文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -perm 777\n")])]),e._v(" "),t("p",[e._v("找出当前目录下权限不是644的"),t("a",{attrs:{href:"#/php",title:"php命令"}},[e._v("php")]),e._v("文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . -type f -name "*.php" ! -perm 644\n')])]),e._v(" "),t("p",[e._v("找出当前目录用户tom拥有的所有文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -user tom\n")])]),e._v(" "),t("p",[e._v("找出当前目录用户组sunk拥有的所有文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -type f -group sunk\n")])]),e._v(" "),t("h4",[e._v("借助"),t("code",{pre:!0},[e._v("-exec")]),e._v("选项与其他命令结合使用")]),e._v(" "),t("p",[e._v("找出当前目录下所有root的文件，并把所有权更改为用户tom")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find .-type f -user root -exec [chown](#/chown "chown命令") tom {} \\;\n')])]),e._v(" "),t("p",[e._v("上例中，"),t("strong",[e._v("{}")]),e._v(" 用于与**-exec**选项结合使用来匹配所有文件，然后会被替换为相应的文件名。")]),e._v(" "),t("p",[e._v("找出自己家目录下所有的.txt文件并删除")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find $HOME/. -name "*.txt" -ok [rm](#/rm "rm命令") {} \\;\n')])]),e._v(" "),t("p",[e._v("上例中，"),t("strong",[e._v("-ok")]),e._v("和**-exec**行为一样，不过它会给出提示，是否执行相应的操作。")]),e._v(" "),t("p",[e._v("查找当前目录下所有.txt文件并把他们拼接起来写入到all.txt文件中")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . -type f -name "*.txt" -exec [cat](#/cat "cat命令") {} \\;> all.txt\n')])]),e._v(" "),t("p",[e._v("将30天前的.log文件移动到old目录中")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . -type f -mtime +30 -name "*.log" -exec [cp](#/cp "cp命令") {} old \\;\n')])]),e._v(" "),t("p",[e._v("找出当前目录下所有.txt文件并以“File:文件名”的形式打印出来")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . -type f -name "*.txt" -exec printf "File: %s\\n" {} \\;\n')])]),e._v(" "),t("p",[e._v("因为单行命令中-exec参数中无法使用多个命令，以下方法可以实现在-exec之后接受多条命令")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("-exec ./text.sh {} \\;\n")])]),e._v(" "),t("h4",[e._v("搜索但跳出指定的目录")]),e._v(" "),t("p",[e._v("查找当前目录或者子目录下所有.txt文件，但是跳过子目录sk")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('find . -path "./sk" -prune -o -name "*.txt" -print\n')])]),e._v(" "),t("h4",[e._v("find其他技巧收集")]),e._v(" "),t("p",[e._v("要列出所有长度为零的文件")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("find . -empty\n")])])])}]}},155:function(e,v,t){e.exports=t(743)},743:function(e,v,t){var n=t(5)(null,t(1520),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=397.83b52c6f5926c4f9d757.js.map