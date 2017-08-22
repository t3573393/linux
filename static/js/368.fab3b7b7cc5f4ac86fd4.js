webpackJsonp([368],{1373:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,p=e._self._c||t;return p("section",[p("p",[p("strong",[e._v("gunzip命令")]),e._v("用来解压缩文件。gunzip是个使用广泛的解压缩程序，它用于解开被"),p("a",{attrs:{href:"#/gzip",title:"gzip命令"}},[e._v("gzip")]),e._v("压缩过的文件，这些压缩文件预设最后的扩展名为.gz。事实上gunzip就是gzip的硬连接，因此不论是压缩或解压缩，都可通过gzip指令单独完成。")]),e._v(" "),p("h3",[e._v("语法")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("gunzip(选项)(参数)\n")])]),e._v(" "),p("h3",[e._v("选项")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v('-a或——ascii：使用ASCII文字模式；\n-c或--stdout或--to-stdout：把解压后的文件输出到标准输出设备；\n-f或-force：强行解开压缩文件，不理会文件名称或硬连接是否存在以及该文件是否为符号连接；\n-h或——[help](#/help "help命令")：在线帮助；\n-l或——list：列出压缩文件的相关信息；\n-L或——license：显示版本与版权信息；\n-n或--no-name：解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其忽略不予处理；\n-N或——name：解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其回存到解开的文件上；\n-q或——quiet：不显示警告信息；\n-r或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；\n-S或<压缩字尾字符串>或----suffix<压缩字尾字符串>：更改压缩字尾字符串；\n-t或——[test](#/test "test命令")：测试压缩文件是否正确无误；\n-v或——verbose：显示指令执行过程；\n-V或——version：显示版本信息；\n')])]),e._v(" "),p("h3",[e._v("参数")]),e._v(" "),p("p",[e._v("文件列表：指定要解压缩的压缩包。")]),e._v(" "),p("h3",[e._v("实例")]),e._v(" "),p("p",[e._v("首先将"),p("code",{pre:!0},[e._v("/etc")]),e._v("目录下的所有文件以及子目录进行压缩，备份压缩包etc."),p("a",{attrs:{href:"#/zip",title:"zip命令"}},[e._v("zip")]),e._v("到"),p("code",{pre:!0},[e._v("/opt")]),e._v("目录，然后对etc.zip文件进行gzip压缩，设置gzip的压缩级别为9。")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("zip –r /opt/etc.zip /etc\ngzip -9v /opt/etc.zip\n")])]),e._v(" "),p("p",[e._v("查看上述etc.zip.gz文件的压缩信息。")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("gzip -l /opt/etc.zip.gz\ncompressed        uncompressed ratio uncompressed_name\n11938745            12767265   6.5% /opt/etc.zip\n")])]),e._v(" "),p("p",[e._v("解压上述etc.zip.gz文件到当前目录。")]),e._v(" "),p("pre",{pre:!0},[p("code",{attrs:{"v-pre":""}},[e._v("[root@mylinux ~]#gzip –d /opt/etc.zip.gz \n或者执行\n[root@mylinux ~]#gunzip /opt/etc.zip.gz\n")])]),e._v(" "),p("p",[e._v("通过上面的示例可以知道"),p("code",{pre:!0},[e._v("gzip –d")]),e._v("等价于"),p("code",{pre:!0},[e._v("gunzip")]),e._v("命令。")])])}]}},184:function(e,t,p){e.exports=p(772)},772:function(e,t,p){var n=p(5)(null,p(1373),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=368.fab3b7b7cc5f4ac86fd4.js.map