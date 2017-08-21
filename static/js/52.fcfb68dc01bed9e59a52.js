webpackJsonp([52],{1092:function(t,e,n){var o=n(5)(null,n(1471),null,null,null);t.exports=o.exports},1471:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("p",[n("strong",[t._v("vdfuse命令")]),t._v("是VirtualBox软件挂载VDI分区文件的一个工具，VirtualBox是一款能创建虚拟机的开源软件，vdi是它的默认磁盘格式。")]),t._v(" "),n("h3",[t._v("什么是VirtualBox")]),t._v(" "),n("p",[t._v("VirtualBox是一款功能强大的x86虚拟机软件，它不仅具有丰富的特色，而且性能也很优异。更可喜的是，VirtualBox于数日前走向开源，成为了一个发布在GPL许可之下的自由软件。VirtualBox可以在Linux和Windows主机中运行，并支持在其中安装Windows (NT 4.0、2000、XP、Server 2003、Vista)、DOS/Windows 3.x、Linux (2.4 和 2.6)、OpenBSD等系列的客户操作系统。")]),t._v(" "),n("p",[n("strong",[t._v("在Ubuntu中安装vdfuse，打开终端，输入：")])]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('[sudo](#/sudo "sudo命令") [apt-get](#/apt-get "apt-get命令") [install](#/install "install命令") virtualbox-fuse\n')])]),t._v(" "),n("h3",[t._v("语法")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('vdfuse [options] -f image-[file](#/file "file命令") [mountpoint](#/mountpoint "mountpoint命令")\n')])]),t._v(" "),n("h3",[t._v("选项")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('-h 帮助\n-r 只读\n-t 类型 (VDI, VMDK, VHD, or raw; default: auto)\n-f 镜像文件\n-a 允许所有用户读取\n-[w](#/w "w命令") 允许所有用户都写\n-g 前台运行\n-v 输出反馈\n-d debug模式\n')])]),t._v(" "),n("p",[t._v("注意：必须编辑一下"),n("code",{pre:!0},[t._v("/etc/fuse.confand")]),t._v('，去掉 "user_allow_other" 前面的注释符号（#），否则不能正确运行。')]),t._v(" "),n("h3",[t._v("实例")]),t._v(" "),n("p",[t._v("使用如下如下语句挂载.vdi文件：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v("sudo vdfuse -f /path/to/file.vdi /path/to/mountpoint\n")])]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("/path/to/mountpoint")]),t._v("应该包含如下文件EntireDisk、Partition1等，如果只有一个文件，你可能需要这样挂载：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[t._v('[mount](#/mount "mount命令") /path/to/mountpoint/Partition1 /path/to/someother/mountpoint\n')])]),t._v(" "),n("p",[t._v("文件系统就挂载到"),n("code",{pre:!0},[t._v("/path/to/someother/mountpoint")]),t._v("了。")])])}]}},504:function(t,e,n){t.exports=n(1092)}});
//# sourceMappingURL=52.fcfb68dc01bed9e59a52.js.map