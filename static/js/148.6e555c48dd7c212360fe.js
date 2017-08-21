webpackJsonp([148],{1284:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("section",[r("p",[r("strong",[e._v("sar命令")]),e._v("是Linux下系统运行状态统计工具，它将指定的操作系统状态计数器显示到标准输出设备。sar工具将对系统当前的状态进行取样，然后通过计算数据和比例来表达系统的当前运行状态。它的特点是可以连续对系统取样，获得大量的取样数据。取样数据和分析的结果都可以存入文件，使用它时消耗的系统资源很小。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("sar(选项)(参数)\n")])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('-A：显示所有的报告信息；\n-b：显示I/O速率；\n-B：显示换页状态；\n-c：显示进程创建活动；\n-d：显示每个块设备的状态；\n-e：设置显示报告的结束时间；\n-f：从指定文件提取报告；\n-i：设状态信息刷新的间隔时间；\n-P：报告每个CPU的状态；\n-R：显示内存状态；\n-u：显示CPU利用率；\n-v：显示索引节点，文件和其他内核表的状态；\n-[w](#/w "w命令")：显示交换分区状态；\n-x：显示给定进程的状态。\n')])]),e._v(" "),r("h3",[e._v("参数")]),e._v(" "),r("ul",[r("li",[e._v("间隔时间：每次报告的间隔时间（秒）；")]),e._v(" "),r("li",[e._v("次数：显示报告的次数。")])]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[r("strong",[e._v("察看内存和交换空间的使用率：")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("sar -r\nLinux 2.4.20-8 (www.linuxde.net)    20130503  \n12:00:01 AM kbmemfree kbmemused  %memused \nkbmemshrd kbbuffers  kbcached  \n12:10:00 AM    240468   1048252     81.34    \n0    133724    485772  \n12:20:00 AM    240508   1048212     81.34   \n0    134172    485600  \n…  \n08:40:00 PM    934132    354588     27.51    \n0     26080    185364  \nAverage:       324346    964374     74.83  \n0     96072    467559 \n")])]),e._v(" "),r("p",[e._v("kbmemfree与kbmemused字段分别显示内存的未使用与已使用空间，后面跟着的是已使用空间的百分比（%memused字段）。kbbuffers与kbcached字段分别显示缓冲区与系统全域的数据存取量，单位为KB。")]),e._v(" "),r("p",[r("strong",[e._v("观察系统部件10分钟，并对数据进行排序：")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("sar -o temp 60 10\n")])])])}]}},406:function(e,n,r){e.exports=r(994)},994:function(e,n,r){var v=r(5)(null,r(1284),null,null,null);e.exports=v.exports}});
//# sourceMappingURL=148.6e555c48dd7c212360fe.js.map