webpackJsonp([349],{1578:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("p",[t("strong",[e._v("ifconfig命令")]),e._v("被用于配置和显示Linux内核中网络接口的网络参数。用ifconfig命令配置的网卡信息，在网卡重启后机器重启后，配置就不存在。要想将上述的配置信息永远的存的电脑里，那就要修改网卡的配置文件了。")]),e._v(" "),t("h3",[e._v("语法")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("ifconfig(参数)\n")])]),e._v(" "),t("h3",[e._v("参数")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('add<地址>：设置网络设备IPv6的[ip](#/ip "ip命令")地址；\ndel<地址>：删除网络设备IPv6的IP地址；\ndown：关闭指定的网络设备；\n<hw<网络设备类型><硬件地址>：设置网络设备的类型与硬件地址；\nio_addr<I/O地址>：设置网络设备的I/O地址；\nirq<IRQ地址>：设置网络设备的IRQ；\nmedia<网络媒介类型>：设置网络设备的媒介类型；\nmem_start<内存地址>：设置网络设备在主内存所占用的起始地址；\nmetric<数目>：指定在计算数据包的转送次数时，所要加上的数目；\nmtu<字节>：设置网络设备的MTU；\nnetmask<子网掩码>：设置网络设备的子网掩码；\ntunnel<地址>：建立IPv4与IPv6之间的隧道通信地址；\nup：启动指定的网络设备；\n-broadcast<地址>：将要送往指定地址的数据包当成广播数据包来处理；\n-pointopoint<地址>：与指定地址的网络设备建立直接连线，此模式具有保密功能；\n-promisc：关闭或启动指定网络设备的promiscuous模式；\nIP地址：指定网络设备的IP地址；\n网络设备：指定网络设备的名称。\n')])]),e._v(" "),t("h3",[e._v("实例")]),e._v(" "),t("p",[t("strong",[e._v("显示网络设备信息（激活状态的）：")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# ifconfig\neth0      Link encap:Ethernet  HWaddr 00:16:3E:00:1E:51  \n          inet addr:10.160.7.81  Bcast:10.160.15.255  Mask:255.255.240.0\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:61430830 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:88534 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:3607197869 (3.3 GiB)  TX bytes:6115042 (5.8 MiB)\n\nlo        Link encap:Local Loopback  \n          inet addr:127.0.0.1  Mask:255.0.0.0\n          UP LOOPBACK RUNNING  MTU:16436  Metric:1\n          RX packets:56103 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:56103 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:0\n          RX bytes:5079451 (4.8 MiB)  TX bytes:5079451 (4.8 MiB)\n")])]),e._v(" "),t("p",[e._v("说明：")]),e._v(" "),t("p",[t("strong",[e._v("eth0")]),e._v("表示第一块网卡，其中"),t("code",{pre:!0},[e._v("HWaddr")]),e._v("表示网卡的物理地址，可以看到目前这个网卡的物理地址(MAC地址）是"),t("code",{pre:!0},[e._v("00:16:3E:00:1E:51")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("inet addr")]),e._v("用来表示网卡的IP地址，此网卡的IP地址是"),t("code",{pre:!0},[e._v("10.160.7.81")]),e._v("，广播地址"),t("code",{pre:!0},[e._v("Bcast:10.160.15.255")]),e._v("，掩码地址"),t("code",{pre:!0},[e._v("Mask:255.255.240.0")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("lo")]),e._v("是表示主机的回坏地址，这个一般是用来测试一个网络程序，但又不想让局域网或外网的用户能够查看，只能在此台主机上运行和查看所用的网络接口。比如把 "),t("a",{attrs:{href:"#/httpd",title:"httpd命令"}},[e._v("httpd")]),e._v("服务器的指定到回坏地址，在浏览器输入127.0.0.1就能看到你所架WEB网站了。但只是您能看得到，局域网的其它主机或用户无从知道。")]),e._v(" "),t("ul",[t("li",[e._v("第一行：连接类型：Ethernet（以太网）HWaddr（硬件mac地址）。")]),e._v(" "),t("li",[e._v("第二行：网卡的IP地址、子网、掩码。")]),e._v(" "),t("li",[e._v("第三行：UP（代表网卡开启状态）RUNNING（代表网卡的网线被接上）MULTICAST（支持组播）MTU:1500（最大传输单元）：1500字节。")]),e._v(" "),t("li",[e._v("第四、五行：接收、发送数据包情况统计。")]),e._v(" "),t("li",[e._v("第七行：接收、发送数据字节数统计信息。")])]),e._v(" "),t("p",[t("strong",[e._v("启动关闭指定网卡：")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("ifconfig eth0 up\nifconfig eth0 down\n")])]),e._v(" "),t("p",[t("code",{pre:!0},[e._v("ifconfig eth0 up")]),e._v("为启动网卡eth0，"),t("code",{pre:!0},[e._v("ifconfig eth0 down")]),e._v("为关闭网卡eth0。"),t("a",{attrs:{href:"#/ssh",title:"ssh命令"}},[e._v("ssh")]),e._v("登陆linux服务器操作要小心，关闭了就不能开启了，除非你有多网卡。")]),e._v(" "),t("p",[t("strong",[e._v("为网卡配置和删除IPv6地址：")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("ifconfig eth0 add 33ffe:3240:800:1005::2/64    #为网卡eth0配置IPv6地址\nifconfig eth0 del 33ffe:3240:800:1005::2/64    #为网卡eth0删除IPv6地址\n")])]),e._v(" "),t("p",[t("strong",[e._v("用ifconfig修改MAC地址：")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('ifconfig eth0 hw ether 00:AA:BB:CC:[dd](#/dd "dd命令"):EE\n')])]),e._v(" "),t("p",[t("strong",[e._v("配置IP地址：")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("[root@localhost ~]# ifconfig eth0 192.168.2.10\n[root@localhost ~]# ifconfig eth0 192.168.2.10 netmask 255.255.255.0\n[root@localhost ~]# ifconfig eth0 192.168.2.10 netmask 255.255.255.0 broadcast 192.168.2.255\n")])]),e._v(" "),t("p",[t("strong",[e._v("启用和关闭"),t("a",{attrs:{href:"#/arp",title:"arp命令"}},[e._v("arp")]),e._v("协议：")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("ifconfig eth0 arp    #开启网卡eth0 的arp协议\nifconfig eth0 -arp   #关闭网卡eth0 的arp协议\n")])]),e._v(" "),t("p",[t("strong",[e._v("设置最大传输单元：")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("ifconfig eth0 mtu 1500    #设置能通过的最大数据包大小为 1500 bytes\n")])])])}]}},203:function(e,r,t){e.exports=t(791)},791:function(e,r,t){var n=t(5)(null,t(1578),null,null,null);e.exports=n.exports}});
//# sourceMappingURL=349.be7fbbf1b0ec0fb16fa7.js.map