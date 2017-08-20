在Linux下可以使用**blkid命令**对查询设备上所采用文件系统类型进行查询。blkid主要用来对系统的块设备（包括交换分区）所使用的文件系统类型、LABEL、UUID等信息进行查询。要使用这个命令必须安装e2fsprogs软件包。

### 语法  

```
blkid -L | -U
blkid [-c ] [-ghlLv] [-o] [-s ][-t ] [-[w](https://philipding.github.io/linux-command/w "w命令") ] [ ...]
blkid -p [-s ] [-O ] [-S ][-o] ...
blkid -i [-s ] [-o] ...
```

### 选项  

```
-c <[file](https://philipding.github.io/linux-command/file "file命令")>   指定cache文件(default: /etc/blkid.tab, /dev/null = none)
-d          don't encode non-printing characters
-h          显示帮助信息
-g          garbage collect the blkid cache
-o <format> 指定输出格式
-k          list all known filesystems/RAIDs and [exit](https://philipding.github.io/linux-command/exit "exit命令")
-s <tag>    显示指定信息，默认显示所有信息
-t <token>  [find](https://philipding.github.io/linux-command/find "find命令") device with a specific token (NAME=value pair)
-l          [look](https://philipding.github.io/linux-command/look "look命令") up only first device with token specified by -t
-L <label>  convert LABEL to device name
-U <uuid>   convert UUID to device name
-v          显示版本信息
-w <file>   [write](https://philipding.github.io/linux-command/write "write命令") cache to different file (/dev/null = no write)
<dev>       specify device(s) to probe (default: all devices)
Low-level probing options:
-p          low-level superblocks probing (bypass cache)
-i          gather information about I/O limits
-S <size>   overwrite device size
-O <offset> probe [at](https://philipding.github.io/linux-command/at "at命令") the given offset
-u <list>   filter by "usage" (e.g. -u filesystem,raid)
-n <list>   filter by filesystem [type](https://philipding.github.io/linux-command/type "type命令") (e.g. -n vfat,ext3)
```

### 实例  

1、列出当前系统中所有已挂载文件系统的类型：

```
[sudo](https://philipding.github.io/linux-command/sudo "sudo命令") blkid
```

2、显示指定设备 UUID：

```
sudo blkid -s UUID /dev/sda5
```

3、显示所有设备 UUID：

```
sudo blkid -s UUID
```

4、显示指定设备 LABEL：

```
sudo blkid -s LABEL /dev/sda5
```

5、显示所有设备 LABEL：

```
sudo blkid -s LABEL
```

6、显示所有设备文件系统：

```
sudo blkid -s TYPE
```

7、显示所有设备：

```
sudo blkid -o device
```

8、以列表方式查看详细信息：

```
sudo blkid -o list
```