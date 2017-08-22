webpackJsonp([108],{1036:function(e,t,r){var n=r(5)(null,r(1544),null,null,null);e.exports=n.exports},1544:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("p",[r("strong",[e._v("strace命令")]),e._v("是一个集诊断、调试、统计与一体的工具，我们可以使用strace对应用的系统调用和信号传递的跟踪结果来对应用进行分析，以达到解决问题或者是了解应用工作过程的目的。当然strace与专业的调试工具比如说"),r("a",{attrs:{href:"#/gdb",title:"gdb命令"}},[e._v("gdb")]),e._v("之类的是没法相比的，因为它不是一个专业的调试器。")]),e._v(" "),r("p",[e._v("strace的最简单的用法就是执行一个指定的命令，在指定的命令结束之后它也就退出了。在命令执行的过程中，strace会记录和解析命令进程的所有系统调用以及这个进程所接收到的所有的信号值。")]),e._v(" "),r("h3",[e._v("语法")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('strace  [  -dffhiqrtttTvxx  ] [ -acolumn ] [ -eexpr ] ...\n    [ -ofile ] [-ppid ] ...  [ -sstrsize ] [ -uusername ]\n    [ -Evar=val ] ...  [ -Evar  ]...\n    [ [command](#/command "command命令") [ arg ...  ] ]\n\nstrace  -c  [ -eexpr ] ...  [ -Ooverhead ] [ -Ssortby ]\n    [ command [ arg...  ] ]\n')])]),e._v(" "),r("h3",[e._v("选项")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('-c 统计每一系统调用的所执行的时间,次数和出错的次数等.\n-d 输出strace关于标准错误的调试信息.\n-f 跟踪由fork调用所产生的子进程.\n-ff 如果提供-o filename,则所有进程的跟踪结果输出到相应的filename.pid中,pid是各进程的进程号.\n-F 尝试跟踪vfork调用.在-f时,vfork不被跟踪.\n-h 输出简要的帮助信息.\n-i 输出系统调用的入口指针.\n-q 禁止输出关于脱离的消息.\n-r 打印出相对时间关于,,每一个系统调用.\n-t 在输出中的每一行前加上时间信息.\n-tt 在输出中的每一行前加上时间信息,微秒级.\n-ttt 微秒级输出,以秒了表示时间.\n-T 显示每一调用所耗的时间.\n-v 输出所有的系统调用.一些调用关于环境变量,状态,输入输出等调用由于使用频繁,默认不输出.\n-V 输出strace的版本信息.\n-x 以十六进制形式输出非标准字符串\n-xx 所有字符串以十六进制形式输出.\n-a column 设置返回值的输出位置.默认 为40.\n-e [expr](#/expr "expr命令") 指定一个表达式,用来控制如何跟踪.格式：[qualifier=][!]value1[,value2]...\nqualifier只能是 trace,abbrev,verbose,raw,signal,[read](#/read "read命令"),[write](#/write "write命令")其中之一.value是用来限定的符号或数字.默认的 qualifier是 trace.感叹号是否定符号.例如:-eopen等价于 -e trace=open,表示只跟踪open调用.而-etrace!=open 表示跟踪除了open以外的其他调用.有两个特殊的符号 all 和 none. 注意有些shell使用!来执行历史记录里的命令,所以要使用\\\\.\n-e trace=[set](#/set "set命令") 只跟踪指定的系统 调用.例如:-e trace=open,close,rean,write表示只跟踪这四个系统调用.默认的为set=all.\n-e trace=[file](#/file "file命令") 只跟踪有关文件操作的系统调用.\n-e trace=process 只跟踪有关进程控制的系统调用.\n-e trace=network 跟踪与网络有关的所有系统调用.\n-e strace=signal 跟踪所有与系统信号有关的 系统调用\n-e trace=ipc 跟踪所有与进程通讯有关的系统调用\n-e abbrev=set 设定strace输出的系统调用的结果集.-v 等与 abbrev=none.默认为abbrev=all.\n-e raw=set 将指定的系统调用的参数以十六进制显示.\n-e signal=set 指定跟踪的系统信号.默认为all.如 signal=!SIGIO(或者signal=!io),表示不跟踪SIGIO信号.\n-e read=set 输出从指定文件中读出 的数据.例如: -e read=3,5\n-e write=set 输出写入到指定文件中的数据.\n-o filename 将strace的输出写入文件filename\n-p pid 跟踪指定的进程pid.\n-s strsize 指定输出的字符串的最大长度.默认为32.文件名一直全部输出.\n-u username 以username的UID和GID执行被跟踪的命令\n')])]),e._v(" "),r("h3",[e._v("实例")]),e._v(" "),r("p",[r("strong",[e._v("追踪系统调用")])]),e._v(" "),r("p",[e._v("现在我们做一个很简单的程序来演示strace的基本用法。这个程序的C语言代码如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('# filename [test](#/test "test命令").c\n#include <stdio.h>\n\nint main()\n{\n    int a;\n    scanf("%d", &a);\n    [printf](#/printf "printf命令")("%09d\\n", a);\n    return 0;\n}\n')])]),e._v(" "),r("p",[e._v("然后我们用"),r("code",{pre:!0},[e._v('[gcc](#/gcc "gcc命令") -o test test.c')]),e._v("编译一下，得到一个可执行的文件test。然后用strace调用执行：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("strace ./test\n")])]),e._v(" "),r("p",[e._v("执行期间会要求你输入一个整数，我们输入99，最后得到如下的结果：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('// 直接执行test的结果\noracle@orainst[orcl]:~ $./test\n\n// 执行的结果\n99\n000000099\n\n// 通过strace执行test的结果\noracle@orainst[orcl]:~ $strace ./test\n\n// strace的trace结果\nexecve("./test", ["./test"], [/* 41 vars */]) = 0\n[uname](#/uname "uname命令")({sys="Linux", node="orainst.desktop.mycompany.com", ...}) = 0\nbrk(0)                                  = 0x8078000\nfstat64(3, {st_mode=S_IFREG|0644, st_size=65900, ...}) = 0\nold_mmap(NULL, 65900, PROT_READ, MAP_PRIVATE, 3, 0) = 0xbf5ef000\nclose(3)                                = 0\nopen("/lib/tls/libc.so.6", O_RDONLY)    = 3\nread(3, "\\177ELF\\1\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0\\3\\0\\1\\0\\0\\0\\200X\\1"..., 512) = 512\nfstat64(3, {st_mode=S_IFREG|0755, st_size=1571692, ...}) = 0\nold_mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xbf5ee000\nold_mmap(NULL, 1275340, PROT_READ|PROT_EXEC, MAP_PRIVATE, 3, 0) = 0xa02000\nold_mmap(0xb34000, 12288, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED, 3, 0x132000) = 0xb34000\nold_mmap(0xb37000, 9676, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0xb37000\nclose(3)                                = 0\nset_thread_area({entry_number:-1 -> 6, base_addr:0xbf5ee740, limit:1048575, seg_32bit:1, contents:0, read_exec_only:0, limit_in_pages:1, seg_not_present:0, useable:1}) = 0\nmunmap(0xbf5ef000, 65900)               = 0\nfstat64(0, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 0), ...}) = 0\nmmap2(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xbf5ff000\nread(0, 99\n"99\\n", 1024)                   = 3\nfstat64(1, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 0), ...}) = 0\nmmap2(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xbf5fe000\nwrite(1, "000000099\\n", 10000000099\n)             = 10\nmunmap(0xbf5fe000, 4096)                = 0\nexit_group(0)                           = ?\n')])]),e._v(" "),r("p",[e._v("从trace结构可以看到，系统首先调用execve开始一个新的进行，接着进行些环境的初始化操作，最后停顿在”read(0,”上面，这也就是执行到了我们的scanf函数，等待我们输入数字呢，在输入完99之后，在调用write函数将格式化后的数值”000000099″输出到屏幕，最后调用exit_group退出进行，完成整个程序的执行过程。")]),e._v(" "),r("p",[r("strong",[e._v("跟踪信号传递")])]),e._v(" "),r("p",[e._v("我们还是使用上面的那个test程序，来观察进程接收信号的情况。还是先"),r("code",{pre:!0},[e._v("strace ./test")]),e._v("，等到等待输入的画面的时候不要输入任何东西，然后打开另外一个窗口，输入如下的命令")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('[killall](#/killall "killall命令") test\n')])]),e._v(" "),r("p",[e._v("这时候就能看到我们的程序推出了，最后的trace结果如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('oracle@orainst[orcl]:~\n$strace ./test\n\nexecve("./test", ["./test"], [/* 41 vars */]) = 0\nuname({sys="Linux", node="orainst.desktop.mycompany.com", ...}) = 0\nbrk(0)                                  = 0x9ae2000\nold_mmap(NULL, 65900, PROT_READ, MAP_PRIVATE, 3, 0) = 0xbf5ef000\nclose(3)                                = 0\nopen("/lib/tls/libc.so.6", O_RDONLY)    = 3\nread(3, "\\177ELF\\1\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0\\3\\0\\1\\0\\0\\0\\200X\\1"..., 512) = 512\nfstat64(3, {st_mode=S_IFREG|0755, st_size=1571692, ...}) = 0\nold_mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xbf5ee000\nold_mmap(NULL, 1275340, PROT_READ|PROT_EXEC, MAP_PRIVATE, 3, 0) = 0x2e9000\nold_mmap(0x41b000, 12288, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED, 3, 0x132000) = 0x41b000\nold_mmap(0x41e000, 9676, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x41e000\nclose(3)                                = 0\nset_thread_area({entry_number:-1 -> 6, base_addr:0xbf5ee740, limit:1048575, seg_32bit:1, contents:0, read_exec_only:0, limit_in_pages:1, seg_not_present:0, useable:1}) = 0\nmunmap(0xbf5ef000, 65900)               = 0\nfstat64(0, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 0), ...}) = 0\nmmap2(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xbf5ff000\nread(0, 0xbf5ff000, 1024)               = ? ERESTARTSYS (To be restarted)\n--- SIGTERM (Terminated) @ 0 (0) ---\n+++ killed by SIGTERM +++\n')])]),e._v(" "),r("p",[e._v("trace中很清楚的告诉你test进程”+++ killed by SIGTERM +++”。")]),e._v(" "),r("p",[r("strong",[e._v("系统调用统计")])]),e._v(" "),r("p",[e._v("strace不光能追踪系统调用，通过使用参数-c，它还能将进程所有的系统调用做一个统计分析给你，下面就来看看strace的统计，这次我们执行带-c参数的strace：")]),e._v(" "),r("p",[e._v("strace -c ./test")]),e._v(" "),r("p",[e._v("最后能得到这样的trace结果：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("oracle@orainst[orcl]:~\n$strace -c ./test\n")])]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('execve("./test", ["./test"], [/* 41 vars */]) = 0\n% [time](#/time "time命令")     seconds  usecs/call     calls    errors syscall\n------ ----------- ----------- --------- --------- ----------------\n 45.90    0.000140           5        27        25 open\n 34.43    0.000105           4        24        21 stat64\n  7.54    0.000023           5         5           old_mmap\n  2.62    0.000008           8         1           munmap\n  1.97    0.000006           6         1           uname\n  1.97    0.000006           2         3           fstat64\n  1.64    0.000005           3         2         1 read\n  1.31    0.000004           2         2           close\n  0.98    0.000003           3         1           brk\n  0.98    0.000003           3         1           mmap2\n  0.66    0.000002           2         1           set_thread_area\n------ ----------- ----------- --------- --------- ----------------\n100.00    0.000305                    68        47 total\n\n')])]),e._v(" "),r("p",[e._v("这里很清楚的告诉你调用了那些系统函数，调用次数多少，消耗了多少时间等等这些信息，这个对我们分析一个程序来说是非常有用的。")]),e._v(" "),r("h3",[e._v("常用参数说明")]),e._v(" "),r("p",[e._v("除了-c参数之外，strace还提供了其他有用的参数给我们，让我们能很方便的得到自己想要的信息，下面就对那些常用的参数一一做个介绍。")]),e._v(" "),r("p",[r("strong",[e._v("重定向输出")])]),e._v(" "),r("p",[e._v("参数-o用在将strace的结果输出到文件中，如果不指定-o参数的话，默认的输出设备是STDERR，也就是说使用”-o filename”和” 2>filename”的结果是一样的。")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("# 这两个命令都是将strace结果输出到文件test.txt中\nstrace -c -o test.txt ./test\nstrace -c ./test  2>test.txt\n")])]),e._v(" "),r("p",[r("strong",[e._v("对系统调用进行计时")])]),e._v(" "),r("p",[e._v("strace可以使用参数-T将每个系统调用所花费的时间打印出来，每个调用的时间花销现在在调用行最右边的尖括号里面。")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('oracle@orainst[orcl]:~\n$strace -T ./test\n\n// 这里只摘录部分结果\nread(0, 1\n"1\\n", 1024)                    = 2 <2.673455>\nfstat64(1, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 0), ...}) = 0 <0.000014>\nmmap2(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xbf5fe000 <0.000017>\nwrite(1, "000000001\\n", 10000000001\n)             = 10 <0.000016>\nmunmap(0xbf5fe000, 4096)                = 0 <0.000020>\nexit_group(0)                           = ?\n')])]),e._v(" "),r("p",[r("strong",[e._v("系统调用的时间")])]),e._v(" "),r("p",[e._v("这是一个很有用的功能，strace会将每次系统调用的发生时间记录下来，只要使用-t/tt/ttt三个参数就可以看到效果了，具体的例子可以自己去尝试。")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("参数名")]),e._v(" "),r("th",[e._v("输出样式")]),e._v(" "),r("th",[e._v("说明")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("-t")]),e._v(" "),r("td",[e._v("10:33:04 exit_group(0)")]),e._v(" "),r("td",[e._v("输出结果精确到秒")])]),e._v(" "),r("tr",[r("td",[e._v("-tt")]),e._v(" "),r("td",[e._v("10:33:48.159682 exit_group(0)")]),e._v(" "),r("td",[e._v("输出结果精确到微妙")])]),e._v(" "),r("tr",[r("td",[e._v("-ttt")]),e._v(" "),r("td",[e._v("1262169244.788478 exit_group(0)")]),e._v(" "),r("td",[e._v("精确到微妙，而且时间表示为unix时间戳")])])])]),e._v(" "),r("p",[r("strong",[e._v("截断输出")])]),e._v(" "),r("p",[e._v("-s参数用于指定trace结果的每一行输出的字符串的长度，下面看看test程序中-s参数对结果有什么影响，现指定-s为20，然后在read的是是很我们输入一个超过20个字符的数字串")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('strace -s 20 ./test\n\nread(0, 2222222222222222222222222      // 我们输入的2一共有25个\n"22222222222222222222"..., 1024) = 26  // 而我们看到的结果中2只有20个\n')])]),e._v(" "),r("p",[r("strong",[e._v("trace一个现有的进程")])]),e._v(" "),r("p",[e._v("strace不光能自己初始化一个进程进行trace，还能追踪现有的进程，参数-p就是取这个作用的，用法也很简单，具体如下。")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("strace -p pid\n")])]),e._v(" "),r("h3",[e._v("综合例子")]),e._v(" "),r("p",[e._v("说了那么多的功能和参数，现在我们来一个实用点的，就是研究下Oracle的lgwr进程，看看这个进程是不是像文档所说的那样没3s钟写一次log文件，考虑到lgwr写日志的触发条件比较多，我们需要找一个空闲的Oracle实例做这个实验。")]),e._v(" "),r("p",[e._v("我们先要得到lgwr进程的pid，运行下面的命令")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('[ps](#/ps "ps命令") -ef|[grep](#/grep "grep命令") lgwr\n\noracle    5912     1  0 Nov12 ?        00:14:56 ora_lgwr_orcl\n')])]),e._v(" "),r("p",[e._v("得到lgwr的pid是5912，现在启动strace，然后将trace的几个输出到lgwr.txt文件中，执行下面的命令")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("strace -tt -s 10 -o lgwr.txt -p 5912\n")])]),e._v(" "),r("p",[e._v("过一会之后停止strace，然后查看结果。由于输出的结果比较多，为了方便我们只看Oracle写入log文件时用的pwrite函数的调用")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("grep pwrite\\(20 lgwr.txt\n")])]),e._v(" "),r("p",[e._v("等等，为什么grep的时候用的是”pwrite(2″呢？，因为我知道我这个机器打开的当前的log文件的句柄编号都是2开始的。具体查找方法是先使用下面的语句找出当前活动的日志文件都有哪些：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("select member, v$log.status from v$log, v$logfile\nwhere v$log.group#=v$logfile.group#;\n")])]),e._v(" "),r("p",[e._v("得到")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("MEMBER                                             STATUS\n-------------------------------------------------- ----------------\n/db/databases/orcl/redo-01-a/redo-t01-g03-m1.log    INACTIVE\n/db/databases/orcl/redo-03-a/redo-t01-g03-m2.log    INACTIVE\n/db/databases/orcl/redo-02-a/redo-t01-g02-m1.log    CURRENT\n/db/databases/orcl/redo-04-a/redo-t01-g02-m2.log    CURRENT\n/db/databases/orcl/redo-01-a/redo-t01-g01-m1.log    INACTIVE\n/db/databases/orcl/redo-03-a/redo-t01-g01-m2.log    INACTIVE\n/db/databases/orcl/redo-02-a/redo-t01-g04-m1.log    INACTIVE\n/db/databases/orcl/redo-04-a/redo-t01-g04-m2.log    INACTIVE\n")])]),e._v(" "),r("p",[e._v("然后到/proc中去找打开文件的句柄：")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("ll /proc/.5912/fd/\n")])]),e._v(" "),r("p",[e._v("得到")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("lrwx------    1 oracle   dba            64 Dec 30 10:55 18 -> /db/databases/orcl/redo-01-a/redo-t01-g01-m1.log\nlrwx------    1 oracle   dba            64 Dec 30 10:55 19 -> /db/databases/orcl/redo-03-a/redo-t01-g01-m2.log\nlrwx------    1 oracle   dba            64 Dec 30 10:55 20 -> /db/databases/orcl/redo-02-a/redo-t01-g02-m1.log\nlrwx------    1 oracle   dba            64 Dec 30 10:55 21 -> /db/databases/orcl/redo-04-a/redo-t01-g02-m2.log\nlrwx------    1 oracle   dba            64 Dec 30 10:55 22 -> /db/databases/orcl/redo-01-a/redo-t01-g03-m1.log\nlrwx------    1 oracle   dba            64 Dec 30 10:55 23 -> /db/databases/orcl/redo-03-a/redo-t01-g03-m2.log\nlrwx------    1 oracle   dba            64 Dec 30 10:55 24 -> /db/databases/orcl/redo-02-a/redo-t01-g04-m1.log\nlrwx------    1 oracle   dba            64 Dec 30 10:55 25 -> /db/databases/orcl/redo-04-a/redo-t01-g04-m2.log\n")])]),e._v(" "),r("p",[e._v("现在能看到我机器当前日志文件的句柄分别是20和21。")]),e._v(" "),r("p",[e._v("现在我们得到如下结果")]),e._v(" "),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v('11:13:55.603245 pwrite(20, "\\1\\"\\0\\0J!"..., 1536, 4363264) = 1536\n11:13:55.603569 pwrite(21, "\\1\\"\\0\\0J!"..., 1536, 4363264) = 1536\n11:13:55.606888 pwrite(20, "\\1\\"\\0\\0M!"..., 1536, 4364800) = 1536\n11:13:55.607172 pwrite(21, "\\1\\"\\0\\0M!"..., 1536, 4364800) = 1536\n11:13:55.607934 pwrite(20, "\\1\\"\\0\\0P!"..., 1536, 4366336) = 1536\n11:13:55.608199 pwrite(21, "\\1\\"\\0\\0P!"..., 1536, 4366336) = 1536\n11:13:55.610260 pwrite(20, "\\1\\"\\0\\0S!"..., 1536, 4367872) = 1536\n11:13:55.610530 pwrite(21, "\\1\\"\\0\\0S!"..., 1536, 4367872) = 1536\n11:14:00.602446 pwrite(20, "\\1\\"\\0\\0V!"..., 1536, 4369408) = 1536\n11:14:00.602750 pwrite(21, "\\1\\"\\0\\0V!"..., 1536, 4369408) = 1536\n11:14:00.606386 pwrite(20, "\\1\\"\\0\\0Y!"..., 1536, 4370944) = 1536\n11:14:00.606676 pwrite(21, "\\1\\"\\0\\0Y!"..., 1536, 4370944) = 1536\n11:14:00.607900 pwrite(20, "\\1\\"\\0\\0\\\\"..., 1024, 4372480) = 1024\n11:14:00.608161 pwrite(21, "\\1\\"\\0\\0\\\\"..., 1024, 4372480) = 1024\n11:14:00.608816 pwrite(20, "\\1\\"\\0\\0^!"..., 1024, 4373504) = 1024\n11:14:00.609071 pwrite(21, "\\1\\"\\0\\0^!"..., 1024, 4373504) = 1024\n11:14:00.611142 pwrite(20, "\\1\\"\\0\\0`!"..., 1536, 4374528) = 1536\n11:14:00.611454 pwrite(21, "\\1\\"\\0\\0`!"..., 1536, 4374528) = 1536\n11:14:05.602804 pwrite(20, "\\1\\"\\0\\0c!"..., 1024, 4376064) = 1024\n11:14:05.603119 pwrite(21, "\\1\\"\\0\\0c!"..., 1024, 4376064) = 1024\n11:14:05.607731 pwrite(20, "\\1\\"\\0\\0e!"..., 1024, 4377088) = 1024\n11:14:05.608020 pwrite(21, "\\1\\"\\0\\0e!"..., 1024, 4377088) = 1024\n11:14:05.608690 pwrite(20, "\\1\\"\\0\\0g!"..., 1024, 4378112) = 1024\n11:14:05.608962 pwrite(21, "\\1\\"\\0\\0g!"..., 1024, 4378112) = 1024\n11:14:05.611022 pwrite(20, "\\1\\"\\0\\0i!"..., 1536, 4379136) = 1536\n11:14:05.611283 pwrite(21, "\\1\\"\\0\\0i!"..., 1536, 4379136) = 1536\n')])])])}]}},448:function(e,t,r){e.exports=r(1036)}});
//# sourceMappingURL=108.784b5b6a6e908567f7e3.js.map