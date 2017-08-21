webpackJsonp([128],{1015:function(e,n,s){var _=s(5)(null,s(1469),null,null,null);e.exports=_.exports},1469:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("section",[s("p",[s("strong",[e._v("slabtop命令")]),e._v("以实时的方式显示内核“slab”缓冲区的细节信息。")]),e._v(" "),s("h3",[e._v("语法")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[e._v("slabtop(选项)\n")])]),e._v(" "),s("h3",[e._v("选项")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[e._v('--delay=n, -d n：每n秒更新一次显示的信息，默认是每3秒；\n--[sort](#/sort "sort命令")=S, -s S：指定排序标准进行排序（排序标准，参照下面或者[man](#/man "man命令")手册）；\n--once, -o：显示一次后退出；\n--version, -V：显示版本；\n--[help](#/help "help命令")：显示帮助信息。\n')])]),e._v(" "),s("p",[e._v("排序标准：")]),e._v(" "),s("ul",[s("li",[e._v("a: sort by number of active objects")]),e._v(" "),s("li",[e._v("b: sort by objects per slab")]),e._v(" "),s("li",[e._v("c: sort by cache size")]),e._v(" "),s("li",[e._v("l: sort by number of slabs")]),e._v(" "),s("li",[e._v("v：sort by number of active slabs")]),e._v(" "),s("li",[e._v("n: sort by name")]),e._v(" "),s("li",[e._v("o: sort by number of objects")]),e._v(" "),s("li",[e._v("p: sort by pages per slab")]),e._v(" "),s("li",[e._v("s: sort by object size")]),e._v(" "),s("li",[e._v("u: sort by cache utilization")])]),e._v(" "),s("h3",[e._v("知识扩展")]),e._v(" "),s("p",[e._v("内核的模块在分配资源的时候，为了提高效率和资源的利用率，都是透过slab来分配的。通过slab的信息，再配合源码能粗粗了解系统的运行情况，比如说什么资源有没有不正常的多，或者什么资源有没有泄漏。linux系统透过/proc/slabinfo来向用户暴露slab的使用情况。")]),e._v(" "),s("p",[e._v("Linux 所使用的 slab 分配器的基础是 Jeff Bonwick 为 SunOS 操作系统首次引入的一种算法。Jeff 的分配器是围绕对象缓存进行的。在内核中，会为有限的对象集（例如文件描述符和其他常见结构）分配大量内存。Jeff 发现对内核中普通对象进行初始化所需的时间超过了对其进行分配和释放所需的时间。因此他的结论是不应该将内存释放回一个全局的内存池，而是将内存保持为针对特定目而初始化的状态。Linux slab 分配器使用了这种思想和其他一些思想来构建一个在空间和时间上都具有高效性的内存分配器。")]),e._v(" "),s("p",[e._v("保存着监视系统中所有活动的 slab 缓存的信息的文件为/proc/slabinfo。")]),e._v(" "),s("h3",[e._v("实例")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[e._v("slabtop\n\n Active / Total Objects (% used)    : 897519 / 1245930 (72.0%)\n Active / Total Slabs (% used)      : 38605 / 38605 (100.0%)\n Active / Total Caches (% used)     : 94 / 145 (64.8%)\n Active / Total Size (% used)       : 129558.22K / 153432.58K (84.4%)\n Minimum / Average / Maximum Object : 0.01K / 0.12K / 128.00K\n\n  OBJS ACTIVE  USE OBJ SIZE  SLABS OBJ/SLAB CACHE SIZE NAME                   \n440136 171471  38%    0.05K   6113       72     24452K buffer_head\n190086 148576  78%    0.05K   2437       78      9748K selinux_inode_security\n151840 146366  96%    0.48K  18980        8     75920K ext3_inode_cache\n144333 144143  99%    0.02K    711      203      2844K avtab_node\n130529 128488  98%    0.13K   4501       29     18004K dentry_cache\n 99214  99071  99%    0.03K    878      113      3512K size-32\n 43834  28475  64%    0.27K   3131       14     12524K radix_tree_node\n 17818   9450  53%    0.06K    302       59      1208K size-64\n  4602   4562  99%    0.05K     59       78       236K sysfs_dir_cache\n  3220   2855  88%    0.08K     70       46       280K vm_area_struct\n  2460   2114  85%    0.12K     82       30       328K size-128\n  1564   1461  93%    0.04K     17       92        68K Acpi-Operand\n  1540   1540 100%    0.33K    140       11       560K inode_cache\n  1524    466  30%    0.01K      6      254        24K anon_vma\n  1440    515  35%    0.05K     20       72        80K avc_node\n  1440   1154  80%    0.19K     72       20       288K filp\n  1170   1023  87%    0.05K     15       78        60K ext3_xattr\n   845    724  85%    0.02K      5      169        20K Acpi-Namespace\n   638    315  49%    0.35K     58       11       232K proc_inode_cache\n   450    434  96%    0.25K     30       15       120K size-256\n   424    386  91%    0.50K     53        8       212K size-512\n   312    107  34%    0.05K      4       78        16K delayacct_cache\n   306    284  92%    0.43K     34        9       136K shmem_inode_cache\n   303    108  35%    0.04K      3      101        12K pid\n   300    261  87%    0.19K     15       20        60K skbuff_head_cache\n   300    300 100%    0.12K     10       30        40K bio\n   260    260 100%   32.00K    260        1      8320K size-32768\n   254      6   2%    0.01K      1      254         4K revoke_table\n   236     55  23%    0.06K      4       59        16K fs_cache\n   216    203  93%    1.00K     54        4       216K size-1024\n   214    214 100%    2.00K    107        2       428K size-2048\n   203     83  40%    0.02K      1      203         4K biovec-1\n")])])])}]}},427:function(e,n,s){e.exports=s(1015)}});
//# sourceMappingURL=128.8e130e63512b3ed84204.js.map