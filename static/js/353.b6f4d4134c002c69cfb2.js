webpackJsonp([353],{1661:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("section",[c("p",[c("strong",[e._v("hwclock命令")]),e._v("是一个硬件时钟访问工具，它可以显示当前时间、设置硬件时钟的时间和设置硬件时钟为系统时间，也可设置系统时间为硬件时钟的时间。")]),e._v(" "),c("p",[e._v("在Linux中有硬件时钟与系统时钟等两种时钟。硬件时钟是指主机板上的时钟设备，也就是通常可在BIOS画面设定的时钟。系统时钟则是指kernel中的时钟。当Linux启动时，系统时钟会去读取硬件时钟的设定，之后系统时钟即独立运作。所有Linux相关指令与函数都是读取系统时钟的设定。")]),e._v(" "),c("h3",[e._v("语法")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v("hwclock(选项)\n")])]),e._v(" "),c("h3",[e._v("选项")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('--adjust：hwclock每次更改硬件时钟时，都会记录在/etc/adjtime文件中。使用--adjust参数，可使hwclock根据先前的记录来估算硬件时钟的偏差，并用来校正目前的硬件时钟；\n--debug：显示hwclock执行时详细的信息；\n--directisa：hwclock预设从/dev/rtc设备来存取硬件时钟。若无法存取时，可用此参数直接以I/O指令来存取硬件时钟；\n--hctosys：将系统时钟调整为与目前的硬件时钟一致；\n--[set](#/set "set命令") --[date](#/date "date命令")=<日期与时间>：设定硬件时钟；\n--show：显示硬件时钟的时间与日期；\n--systohc：将硬件时钟调整为与目前的系统时钟一致；\n--[test](#/test "test命令")：仅测试程序，而不会实际更改硬件时钟；\n--utc：若要使用格林威治时间，请加入此参数，hwclock会执行转换的工作；\n--version：显示版本信息。\n')])]),e._v(" "),c("h3",[e._v("实例")]),e._v(" "),c("p",[e._v("设置硬件时间要依赖于操作系统时间，具体方法如下：")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v("hwclock –systohc\nhwclock --systohc –-utc\n")])]),e._v(" "),c("p",[e._v("不加任何参数使用hwclock，可以查看当前的硬件日期和时间。")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v("hwclock\n")])]),e._v(" "),c("p",[e._v("查看clock文件，确认是否设置了UTC：")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('[cat](#/cat "cat命令") /etc/default/rcS \nUTC=[yes](#/yes "yes命令")\n')])]),e._v(" "),c("p",[e._v("在其他一些版本的Linux（如RebHat）中可以这样查看：")]),e._v(" "),c("pre",{pre:!0},[c("code",{attrs:{"v-pre":""}},[e._v('cat /etc/sysconfig/clock\nZONE="America/Los_Angeles"\nUTC=false\nARC=false\n')])])])}]}},198:function(e,t,c){e.exports=c(786)},786:function(e,t,c){var n=c(5)(null,c(1661),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=353.b6f4d4134c002c69cfb2.js.map