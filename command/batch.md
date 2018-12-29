**batch命令**用于在指定时间，当系统不繁忙时执行任务，用法与[at](#/at "at命令")相似。

### 语法  

```
batch(选项)(参数)
```

### 选项  

```
-f：指定包含具体指令的任务文件；
-q：指定新任务的队列名称；
-m：任务执行完后向用户发送E-[mail](#/mail "mail命令")。
```

### 参数  

日期时间：指定任务执行的日期时间。

### 实例  

```
batch 
at> [echo](#/echo "echo命令") 1234
at> <EOT>
job 5 at Sun Apr 28 08:49:00 2013
```