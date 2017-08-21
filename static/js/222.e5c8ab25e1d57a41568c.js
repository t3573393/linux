webpackJsonp([222],{1364:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p",[t("strong",[e._v("objdump命令")]),e._v("是用查看目标文件或者可执行的目标文件的构成的"),t("a",{attrs:{href:"#/gcc",title:"gcc命令"}},[e._v("gcc")]),e._v("工具。")]),e._v(" "),t("h3",[e._v("选项")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('--archive-headers \n-a \n显示档案库的成员信息,类似[ls](#/ls "ls命令") -l将lib*.a的信息列出。 \n\n-b bfdname \n--target=bfdname \n指定目标码格式。这不是必须的，objdump能自动识别许多格式，比如： \n\nobjdump -b oasys -m vax -h fu.o \n显示fu.o的头部摘要信息，明确指出该文件是Vax系统下用Oasys编译器生成的目标文件。objdump -i将给出这里可以指定的目标码格式列表。 \n\n-C \n--demangle \n将底层的符号名解码成用户级名字，除了去掉所开头的下划线之外，还使得C++函数名以可理解的方式显示出来。 \n\n--debugging \n-g \n显示调试信息。企图解析保存在文件中的调试信息并以C语言的语法显示出来。仅仅支持某些类型的调试信息。有些其他的格式被[readelf](#/readelf "readelf命令") -[w](#/w "w命令")支持。 \n\n-e \n--debugging-tags \n类似-g选项，但是生成的信息是和ctags工具相兼容的格式。 \n\n--disassemble \n-d \n从objfile中反汇编那些特定指令机器码的section。 \n\n-D \n--disassemble-all \n与 -d 类似，但反汇编所有section. \n\n--prefix-addresses \n反汇编的时候，显示每一行的完整地址。这是一种比较老的反汇编格式。 \n\n-EB \n-EL \n--endian={big|little} \n指定目标文件的小端。这个项将影响反汇编出来的指令。在反汇编的文件没描述小端信息的时候用。例如S-records. \n\n-f \n--[file](#/file "file命令")-headers \n显示objfile中每个文件的整体头部摘要信息。 \n\n-h \n--section-headers \n--headers \n显示目标文件各个section的头部摘要信息。 \n\n-H \n--[help](#/help "help命令") \n简短的帮助信息。 \n\n-i \n--[info](#/info "info命令") \n显示对于 -b 或者 -m 选项可用的架构和目标格式列表。 \n\n-j name\n--section=name \n仅仅显示指定名称为name的section的信息 \n\n-l\n--line-numbers \n用文件名和行号标注相应的目标代码，仅仅和-d、-D或者-r一起使用使用-[ld](#/ld "ld命令")和使用-d的区别不是很大，在源码级调试的时候有用，要求编译时使用了-g之类的调试编译选项。 \n\n-m machine \n--architecture=machine \n指定反汇编目标文件时使用的架构，当待反汇编文件本身没描述架构信息的时候(比如S-records)，这个选项很有用。可以用-i选项列出这里能够指定的架构. \n\n--reloc \n-r \n显示文件的重定位入口。如果和-d或者-D一起使用，重定位部分以反汇编后的格式显示出来。 \n\n--dynamic-reloc \n-R \n显示文件的动态重定位入口，仅仅对于动态目标文件意义，比如某些共享库。 \n\n-s \n--full-contents \n显示指定section的完整内容。默认所有的非空section都会被显示。 \n\n-S \n--source \n尽可能反汇编出源代码，尤其当编译的时候指定了-g这种调试参数时，效果比较明显。隐含了-d参数。 \n\n--show-raw-insn \n反汇编的时候，显示每条汇编指令对应的机器码，如不指定--prefix-addresses，这将是缺省选项。 \n\n--no-show-raw-insn \n反汇编时，不显示汇编指令的机器码，如不指定--prefix-addresses，这将是缺省选项。 \n\n--start-address=address \n从指定地址开始显示数据，该选项影响-d、-r和-s选项的输出。 \n\n--stop-address=address \n显示数据直到指定地址为止，该项影响-d、-r和-s选项的输出。 \n\n-t \n--syms \n显示文件的符号表入口。类似于[nm](#/nm "nm命令") -s提供的信息 \n\n-T \n--dynamic-syms \n显示文件的动态符号表入口，仅仅对动态目标文件意义，比如某些共享库。它显示的信息类似于 nm -D|--dynamic 显示的信息。 \n\n-V \n--version \n版本信息 \n\n--all-headers \n-x \n显示所可用的头信息，包括符号表、重定位入口。-x 等价于-a -f -h -r -t 同时指定。 \n\n-z \n--disassemble-zeroes \n一般反汇编输出将省略大块的零，该选项使得这些零块也被反汇编。 \n\n@file 可以将选项集中到一个文件中，然后使用这个@file选项载入。\n')])]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("p",[e._v("首先，在给出后面大部分测试所基于的源代码以及编译指令。 源代码如下：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('[root@localhost [test](#/test "test命令")]# [nl](#/nl "nl命令") mytest.cpp \n')])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("void printTest() {\n    char a;\n    a = 'a';\n}\n\nvoid printTest2() {\nint a = 2;\na+=2;\n} \n")])]),e._v(" "),t("p",[e._v("对以上源代码进行编译，如下：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# g++ -c -g mytest.cpp \n")])]),e._v(" "),t("p",[e._v("这里，生成的文件是mytest.o，为了方便测试包含了调试的信息，对可执行文件的测试，显示的结果类似。")]),e._v(" "),t("p",[e._v("**查看当前使用的objdump的版本号： **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('[root@localhost test]# objdump -V \nGNU objdump 2.17.50.0.6-14.el5 20061020 \nCopyright 2005 [free](#/free "free命令") Software Foundation, Inc. \nThis program is free software; you may redistribute it under the terms of \nthe GNU General Public License.  This program has absolutely no warranty. \n')])]),e._v(" "),t("p",[e._v("**查看档案库文件中的信息： **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# objdump -a libmy2.a \nIn archive libmy2.a: \nmyfile.o:     file format elf32-i386 \nrwxrwxrwx 0/0   2724 Nov 16 16:06 2009 myfile.o \nmytest.o:     file format elf32-i386 \nrw-r--r-- 0/0    727 Jul 13 15:32 2011 mytest.o \n")])]),e._v(" "),t("p",[e._v("*"),t("em",[e._v("这里，libmy2.a是一个使用ar命令将多个")]),e._v(".o目标文件打包而生成的静态库。命令的输出类似"),t("code",{pre:!0},[e._v("ar -tv")]),e._v("，相比较"),t("code",{pre:!0},[e._v("ar -tv")]),e._v("输出如下： **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# ar -tv libmy2.a \nrwxrwxrwx 0/0   2724 Nov 16 16:06 2009 myfile.o \nrw-r--r-- 0/0    727 Jul 13 15:32 2011 mytest.o \n")])]),e._v(" "),t("p",[e._v("显示可用的架构和目标结构列表：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# objdump -i \nBFD header file version 2.17.50.0.6-14.el5 20061020 \nelf32-i386 \n(header little endian, data little endian) \n  i386 \na.out-i386-linux \n(header little endian, data little endian) \n  i386 \nefi-app-ia32 \n(header little endian, data little endian) \n  i386 \nelf64-x86-64 \n(header little endian, data little endian) \n  i386 \nelf64-little \n(header little endian, data little endian) \n  i386 \nelf64-big \n(header big endian, data big endian) \n  i386 \nelf32-little \n(header little endian, data little endian) \n  i386 \nelf32-big \n(header big endian, data big endian) \n  i386 \nsrec \n(header endianness unknown, data endianness unknown) \n  i386 \nsymbolsrec \n(header endianness unknown, data endianness unknown) \n  i386 \ntekhex \n(header endianness unknown, data endianness unknown) \n  i386 \nbinary \n(header endianness unknown, data endianness unknown) \n  i386 \nihex \n(header endianness unknown, data endianness unknown) \n  i386 \ntrad-core \n(header endianness unknown, data endianness unknown) \n\n              elf32-i386 a.out-i386-linux efi-app-ia32 elf64-x86-64 \n          i386 elf32-i386 a.out-i386-linux efi-app-ia32 elf64-x86-64 \n\n              elf64-little elf64-big elf32-little elf32-big srec symbolsrec \n          i386 elf64-little elf64-big elf32-little elf32-big srec symbolsrec \n\n              tekhex binary ihex trad-core \n          i386 tekhex binary ihex --------- \n")])]),e._v(" "),t("p",[e._v("这里，显示的信息是相对于 -b 或者 -m 选项可用的架构和目标格式列表。")]),e._v(" "),t("p",[e._v("**显示mytest.o文件中的text段的内容： **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# objdump --section=.text -s mytest.o \nmytest.o:     file format elf32-i386 \nContents of section .text: \n0000 5589e583 ec10c645 ff61c9c3 5589e583  U......E.a..U... \n0010 ec10c745 fc020000 008345fc 02c9c3    ...E......E.... \n")])]),e._v(" "),t("p",[e._v("这里注意，不能单独使用-j或者--section，例如"),t("code",{pre:!0},[e._v("objdump --section=.text mytest.o")]),e._v("是不会运行成功的。")]),e._v(" "),t("p",[e._v("**反汇编mytest.o中的text段内容，并尽可能用源代码形式表示： **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# objdump -j .text -S mytest.o \nmytest.o:     file format elf32-i386 \nDisassembly of section .text: \n00000000 <_Z9printTestv>: \nvoid printTest() \n   0:   55                      push   %ebp \n   1:   89 e5                   mov    %esp,%ebp \n   3:   83 ec 10                sub    $0x10,%esp \n{ \n        char a; \n        a = 'a'; \n   6:   c6 45 ff 61             movb   $0x61,0xffffffff(%ebp) \n} \n   a:   c9                      leave  \n   b:   c3                      ret    \n\n000000c <_Z10printTest2v>: \nvoid printTest2() \n   c:   55                      push   %ebp \n   d:   89 e5                   mov    %esp,%ebp \n   f:   83 ec 10                sub    $0x10,%esp \n{ \n        int a = 2; \n  12:   c7 45 [fc](#/fc \"fc命令\") 02 00 00 00    movl   $0x2,0xfffffffc(%ebp) \n        a+=2; \n  19:   83 45 fc 02             addl   $0x2,0xfffffffc(%ebp) \n} \n  1d:   c9                      leave  \n  1e:   c3                      ret    \n")])]),e._v(" "),t("p",[e._v("这里注意，不能单独使用-j或者--section，例如"),t("code",{pre:!0},[e._v("objdump -j .text mytest.o是不会运行成功的")]),e._v("。另外-S命令对于包含调试信息的目标文件，显示的效果比较好，如果编译时没有指定g++的-g选项，那么目标文件就不包含调试信息，那么显示效果就差多了。")]),e._v(" "),t("p",[e._v("**反汇编出mytest.o的源代码: **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# objdump -S mytest.o \nmytest.o:     file format elf32-i386 \n\nDisassembly of section .text: \n\n00000000 <_Z9printTestv>: \nvoid printTest() \n   0:   55                      push   %ebp \n   1:   89 e5                   mov    %esp,%ebp \n   3:   83 ec 10                sub    $0x10,%esp \n{ \n        char a; \n        a = 'a'; \n   6:   c6 45 ff 61             movb   $0x61,0xffffffff(%ebp) \n} \n   a:   c9                      leave  \n   b:   c3                      ret    \n\n0000000c <_Z10printTest2v>: \nvoid printTest2() \n   c:   55                      push   %ebp \n   d:   89 e5                   mov    %esp,%ebp \n   f:   83 ec 10                sub    $0x10,%esp \n{ \n       int a = 2; \n  12:   c7 45 fc 02 00 00 00    movl   $0x2,0xfffffffc(%ebp) \n        a+=2; \n  19:   83 45 fc 02             addl   $0x2,0xfffffffc(%ebp) \n} \n  1d:   c9                      leave  \n  1e:   c3                      ret    \n")])]),e._v(" "),t("p",[e._v("这里，尤其当编译的时候指定了-g这种调试参数时，反汇编的效果比较明显。隐含了-d参数。")]),e._v(" "),t("p",[e._v("**显示文件的符号表入口: **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('[root@localhost test]# objdump -t mytest.o \nmytest.o:     file format elf32-i386 \n\nSYMBOL TABLE: \n00000000 l    [df](#/df "df命令") *ABS*  00000000 mytest.cpp \n00000000 l    d  .text  00000000 .text \n00000000 l    d  .data  00000000 .data \n00000000 l    d  .bss   00000000 .bss \n00000000 l    d  .debug_abbrev  00000000 .debug_abbrev \n00000000 l    d  .debug_info    00000000 .debug_info \n00000000 l    d  .debug_line    00000000 .debug_line \n00000000 l    d  .debug_frame   00000000 .debug_frame \n00000000 l    d  .debug_loc     00000000 .debug_loc \n00000000 l    d  .debug_pubnames        00000000 .debug_pubnames \n00000000 l    d  .debug_aranges 00000000 .debug_aranges \n00000000 l    d  .note.GNU-stack        00000000 .note.GNU-stack \n00000000 l    d  .comment       00000000 .comment \n00000000 g     F .text  0000000c _Z9printTestv \n00000000         *UND*  00000000 __gxx_personality_v0 \n0000000c g     F .text  00000013 _Z10printTest2v \n')])]),e._v(" "),t("p",[e._v("这里，输出的信息类似"),t("code",{pre:!0},[e._v("nm -s")]),e._v("命令的输出，相比较之下，nm命令的输出如下：")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# nm -s mytest.o \n0000000c T _Z10printTest2v \n00000000 T _Z9printTestv \n         U __gxx_personality_v0 \n")])]),e._v(" "),t("p",[e._v("**显示文件的符号表入口，将底层符号解码并表示成用户级别: **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# objdump -t -C mytest.o \nmytest.o:     file format elf32-i386 \nSYMBOL TABLE: \n00000000 l    df *ABS*  00000000 mytest.cpp \n00000000 l    d  .text  00000000 .text \n00000000 l    d  .data  00000000 .data \n00000000 l    d  .bss   00000000 .bss \n00000000 l    d  .debug_abbrev  00000000 .debug_abbrev \n00000000 l    d  .debug_info    00000000 .debug_info \n00000000 l    d  .debug_line    00000000 .debug_line \n00000000 l    d  .debug_frame   00000000 .debug_frame \n00000000 l    d  .debug_loc     00000000 .debug_loc \n00000000 l    d  .debug_pubnames        00000000 .debug_pubnames \n00000000 l    d  .debug_aranges 00000000 .debug_aranges \n00000000 l    d  .note.GNU-stack        00000000 .note.GNU-stack \n00000000 l    d  .comment       00000000 .comment \n00000000 g     F .text  0000000c printTest() \n00000000         *UND*  00000000 __gxx_personality_v0 \n0000000c g     F .text  00000013 printTest2() \n")])]),e._v(" "),t("p",[e._v("这里，和没-C相比，printTest2函数可读性增加了。")]),e._v(" "),t("p",[e._v("**反汇编目标文件的特定机器码段： **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# objdump -d mytest.o \nmytest.o:     file format elf32-i386 \nDisassembly of section .text: \n\n00000000 <_Z9printTestv>: \n   0:   55                      push   %ebp \n   1:   89 e5                   mov    %esp,%ebp \n   3:   83 ec 10                sub    $0x10,%esp \n   6:   c6 45 ff 61             movb   $0x61,0xffffffff(%ebp) \n   a:   c9                      leave  \n  b:   c3                      ret    \n\n0000000c <_Z10printTest2v>: \n   c:   55                      push   %ebp \n   d:   89 e5                   mov    %esp,%ebp \n   f:   83 ec 10                sub    $0x10,%esp \n  12:   c7 45 fc 02 00 00 00    movl   $0x2,0xfffffffc(%ebp) \n  19:   83 45 fc 02             addl   $0x2,0xfffffffc(%ebp) \n  1d:   c9                      leave  \n  1e:   c3                      ret    \n")])]),e._v(" "),t("p",[e._v("这里，对text段的内容进行了反汇编。")]),e._v(" "),t("p",[e._v("**反汇编特定段，并将汇编代码对应的文件名称和行号对应上： **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost test]# objdump -d -l mytest.o\nmytest.o:     file format elf32-i386 \nDisassembly of section .text: \n\n00000000 <_Z9printTestv>: \n_Z9printTestv(): \n/root/test/04_libraryTest/mytest.cpp:1 \n   0:   55                      push   %ebp \n   1:   89 e5                   mov    %esp,%ebp \n   3:   83 ec 10                sub    $0x10,%esp \n/root/test/04_libraryTest/mytest.cpp:4 \n   6:   c6 45 ff 61             movb   $0x61,0xffffffff(%ebp) \n/root/test/04_libraryTest/mytest.cpp:5 \n   a:   c9                      leave  \n   b:   c3                      ret    \n\n0000000c <_Z10printTest2v>: \n_Z10printTest2v(): \n/root/test/04_libraryTest/mytest.cpp:6 \n   c:   55                      push   %ebp \n   d:   89 e5                   mov    %esp,%ebp \n   f:   83 ec 10                sub    $0x10,%esp \n/root/test/04_libraryTest/mytest.cpp:8 \n  12:   c7 45 fc 02 00 00 00    movl   $0x2,0xfffffffc(%ebp) \n/root/test/04_libraryTest/mytest.cpp:9 \n  19:   83 45 fc 02             addl   $0x2,0xfffffffc(%ebp) \n/root/test/04_libraryTest/mytest.cpp:10 \n  1d:   c9                      leave  \n  1e:   c3                      ret    \n")])]),e._v(" "),t("p",[e._v('这里，项"-d"从objfile中反汇编那些特定指令机器码的section，而使用"-l"指定用文件名和行号标注相应的目标代码，仅仅和-d、-D或者-r一起使用，使用-ld和使用-d的区别不是很大，在源码级调试的时候有用，要求编译时使用了-g之类的调试编译选项。')]),e._v(" "),t("p",[e._v("**显示目标文件各个段的头部摘要信息： **")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('[root@localhost test]# objdump -h mytest.o \nmytest.o:     file format elf32-i386 \n\nSections: \nIdx Name          Size      VMA       LMA       File off  Algn \n  0 .text         0000001f  00000000  00000000  00000034  2**2 \n                  CONTENTS, ALLOC, LOAD, [readonly](#/readonly "readonly命令"), CODE \n  1 .data         00000000  00000000  00000000  00000054  2**2 \n                  CONTENTS, ALLOC, LOAD, DATA \n  2 .bss          00000000  00000000  00000000  00000054  2**2 \n                  ALLOC \n  3 .debug_abbrev 00000046  00000000  00000000  00000054  2**0 \n                  CONTENTS, READONLY, DEBUGGING \n  4 .debug_info   000000ed  00000000  00000000  0000009a  2**0 \n                  CONTENTS, RELOC, READONLY, DEBUGGING \n  5 .debug_line   0000003e  00000000  00000000  00000187  2**0 \n                  CONTENTS, RELOC, READONLY, DEBUGGING \n  6 .debug_frame  00000044  00000000  00000000  000001c8  2**2 \n                  CONTENTS, RELOC, READONLY, DEBUGGING \n  7 .debug_loc    00000058  00000000  00000000  0000020c  2**0 \n                  CONTENTS, READONLY, DEBUGGING \n  8 .debug_pubnames 0000002f  00000000  00000000  00000264  2**0 \n                  CONTENTS, RELOC, READONLY, DEBUGGING \n  9 .debug_aranges 00000020  00000000  00000000  00000293  2**0 \n                  CONTENTS, RELOC, READONLY, DEBUGGING \n10 .comment      0000002e  00000000  00000000  000002b3  2**0 \n                  CONTENTS, READONLY \n11 .note.GNU-stack 00000000  00000000  00000000  000002e1  2**0 \n                  CONTENTS, READONLY \n')])]),e._v(" "),t("p",[e._v("这里，更多的内容参见"),t("code",{pre:!0},[e._v('[man](#/man "man命令") objdump')]),e._v("中的这个选项。")])])}]}},332:function(e,n,t){e.exports=t(920)},920:function(e,n,t){var s=t(5)(null,t(1364),null,null,null);e.exports=s.exports}});
//# sourceMappingURL=222.e5c8ab25e1d57a41568c.js.map