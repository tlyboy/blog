---
title: Linux
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - Linux
---

## 1. Linux 的概述

### 1. 学习 Linux 之前先了解 Unix

Unix 是一个强大的多用户、多任务操作系统。于 1969 年在 AT&T 的贝尔实验室开发。Unix 的商标权由国际开放组织（The Open Group）所拥有。Unix 操作系统是商业版，需要收费，价格比 Microsoft Windows 正版要贵一些。

### 2. Linux 的概述

Linux 是基于 Unix 的

Linux 是一种自由和开放源代码的操作系统，存在着许多不同的 Linux 版本，但它们都使用了 Linux 内核。

Linux 可安装在各种计算机硬件设备中，比如手机、平板电脑、路由器、台式计算机

诞生于 1991 年 10 月 5 日。是由芬兰赫尔辛基大学学生 Linus Torvalds 和后来加入的众多爱好者共同开发完成

### 3. Linux 的历史

Linux 最初是由芬兰赫尔辛基大学学生 Linus Torvalds 由于自己不满意教学中使用的 MINIX 操作系统，所以在 1990 年底由于个人爱好设计出了 LINUX 系统核心。后来发布于芬兰最大的 ftp 服务器上，用户可以免费下载，所以它的周边的程序越来越多，Linux 本身也逐渐发展壮大起来，之后 Linux 在不到三年时间里成为了一个功能完善，稳定可靠的操作系统

### 4. Linux 系统的应用

**服务器** Web 应用服务器、数据库服务器、接口服务器、DNS、FTP 等等；

嵌入式系统路由器、防火墙、手机、PDA、IP 分享器、交换器、家电用品的微电脑控制器等等，

高性能运算、计算密集型应用 Linux 有强大的运算能力。

桌面应用系统

移动手持系统

### 5. Linux 的版本

Linux 的版本分为两种：**内核版本**和**发行版本**；内核版本是指在 Linus 领导下的内核小组开发维护的系统内核的版本号；

### 6. Linux 的主流版本

CentOS……

## 2. Linux 的安装

### 1. 虚拟机安装

#### 1. 什么是虚拟机

虚拟机：使用软件模拟一台虚拟的电脑。

**虚拟机软件：**

- VMware：收费的
- VirtualBox

#### 2. 安装 VMware

官网链接：[https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

### 2. CentOS 的安装

官网：[https://www.centos.org/](https://www.centos.org/)

### 3 Linux 的远程访问

#### 1. 安装一个远程访问的软件：CRT

官网链接：[https://www.vandyke.com/products/securecrt/index.html](https://www.vandyke.com/products/securecrt/index.html)

#### 2. 连接 Linux

需要输入主机名和用户名。

## 3. Linux 的目录结构

| 目录 | 说明                                               |
| ---- | -------------------------------------------------- |
| bin  | 存放二进制可执行文件                               |
| sbin | 存放二进制可执行文件，只有 root 才能访问           |
| etc  | 存放系统配置文件                                   |
| usr  | 用于存放共享的系统资源                             |
| home | 存放用户文件的根目录                               |
| root | 超级用户目录                                       |
| dev  | 用于存放设备文件                                   |
| lb   | 存放跟文件系统中的程序运行所需要的共亨库及内核模块 |
| mnt  | 系统管理员安装临时文件系统的安装点                 |
| boot | 存放用于系统引导时使用的各种文件                   |
| tmp  | 用于存放各种临时文件                               |
| var  | 用于存放运行时需要改变数据的文件                   |

::: tip
root 管理员的 home 目录 root

其他用户的 home 目录 home 目录中
:::

## 4. Linux 的常用命令

### 1. 切换目录命令：`cd`

使用 `cd 目录名` 切换到该目录

切换到上一层目录 `cd ..`

切换到系统根目录 `cd /`

切换到用户主目录 `cd ~`

切换到上一个所在目录 `cd -`

### 2. 列出文件列表：ls，ll

ls（list）是一个非常有用的命令，用来显示当前目录下的内容。配合参数的使用，能以不同的方式显示目录内容。

格式：`1s [参数] [路径或文件名]`

常用：

在 linux 中以 . 开头的文件都是隐藏的文件

- `ls`
- `ls - a`：显示所有文件或目录（包含隐藏的文件）
- `ls - l`：缩写成`ll`

### 3. 创建目录和移动目录：mkdir，rmdir

mkdir（make directory）命令可用来创建子目录

`mkdir 目录名`：在当前目录下创建目录

`mkdir -p 目录1/目录2`：级联创建目录

rmdir（remove directory）命令可用来删除“空”的子目录：

`rmdir 目录名`：删除目录

### 4. 浏览文件

#### cat、more、less

cat 用于显示文件的内容。

格式：`cat [参数] <文件名>`

**more** 一般用于要显示的内容会超过一个画面长度的情况。

- 按 空格键 会显示下一页数据。

- 回车 显示下一行数据
- 按 q 键 退出查看

less 用法和 more 类似，不同的是 less 可以通过 PgUp、PgDn 键来控制。

- PgUp 和 PgDn 进行上下翻页

#### **tail**

tail 命令是在实际使用过程中最多的一个命令，它的功能是：**用于显示文件后几行的内容**。

**用法：**

`tail -10 /etc/passwd` ：查看后 10 行数据

`tail -f catalina.log`：动态查看日志

Ctrl + c 结束查看

### 5. 文件操作

#### rm

rm 删除文件

用法：`rm [选项] ... 文件 ...`

删除需要用户确认，y/nrm 删除不询问

`rm -f a.txt`：不询问，直接删除 rm 删除目录

`rm -f a`：递归删除**不询问递归删除（慎用）**

`rm -rf a`：不询问递归删除

`rm -rf *`：删除所有文件

`rm -rf /*`：**自杀**

#### cp、mv

cp（copy）命令可以将文件从一处复制到另一处。一般在使用 cp 命令时将一个文件复制成另一个文件或复制到目录时，需要指定源文件名或目录。

`cp a.txt b.txt`：将 a.txt 复制为 b.txt 文件

`cp a.txt ../`：将 a.txt 文件复制到上一层目录中

mv 移动或者重命名

`mv a.txt ../`：将 a.txt 移动到上一层目录中

`mv a.txt b.txt`：将 a.txt 文件重命名为 b.txt

#### tar 命令（**打包或解压**）

tar 命令位于/bin 目录下，它能够将用户所指定的文件或目录**打包成一个文件，但不做压缩**。一般 Linux 上常用的压缩方式是选用 tar 将许多文件打包成一个文件，再以 gzip 压缩命令压缩成 xxx.tar.gz（或称为 xxx.tgz）的文件。

常用参数：

`-c`：创建一个新 tar 文件

`-v`：显示运行过程的信息

`-f`：指定文件名

`-z`：调用 gzip 压缩命令进行压缩

`-t`：查看压缩文件的内容

`-x`：解开 tar 文件

打包：

`tar -cvf xxx.tar ./`

打包并且压缩：

`tar -zcvf xxx.tar.gz ./`

解压：

`tar -xvf xxx.tar`

`tar -zxvf xxx.tar.gz -C /usr/aaa`

#### find 命令

find 指令用于查找符合条件的文件

实例：

`find / -name "ins*"`：查找名称是以 ins 开头的文件

`find / -name "ins*" -ls`

`find / -user itcast -ls`：查找用户 itcast 的文件

`find / -user itcast -type d -ls 查找用户 itcast 的目录`

`find / -perm -777 -type d -ls`：查找权限是 777 的文件

#### grep 命令

查找文件里符合条件的字符串。

用法：`grep [选项] ... PATTERN [FILE] ...`

实例：

`grep lang anaconda-ks.cfg`：在文件中查找 lang

`grep lang anaconda-ks.cfg -color`：高亮显示

`grep debug yum.conf --color`

`grep debug yum.conf --color -A5`

`grep debug yum.conf --color -A5 -B5`

### 6. 其他常用命令

#### pwd

显示当前所在目录

#### touch

创建一个空文件

touch a.txt

#### clear/Ctrl + L

清屏

## 5. Vi 和 Vim 编辑器

### 1. Vim 编辑器

在 Linux 下一般使用 vi 编辑器来编辑文件。vi 既可以查看文件也可以编辑文件。三种模式：命令行、插入、底行模式。

切换到命令行模式：按 ESC 键

切换到插入模式：按 i、o、a 键

- i：在当前位置前插入
- I：在当前首行插入
- a：在当前位置后插入
- A：在当前行尾插入
- o：在当前行之后插入一行
- O：在当前行之前插入一行

切换到底行模式：按 `:` （冒号）

打开文件：vim file

退出：ESC ——> `:q`

修改文件：输入 i 进入插入模式

保存并退出：ESC——>`:wq`

不保存退出：ESC——>`:q!`

三种进入插入模式：

i：在当前的光标所在处插入

o：在当前光标所在的下一行插入

a：在光标所在的下一个字符插入

快捷键：

dd - 快速删除一行

yy - 复制当前行

nyy - 从当前行向后复制几行

p - 粘贴

R - 替换

### 2. 重定向输出 > 和 >>

\> 重定向输出，覆盖原有内容

\>\> 重定向输出，又追加功能

示例：

`cat /etc/passwd > a.txt`：将输出定向到 a.txt 中

`cat /etc/passwd >> a.txt`：输出并且追加

`ifconfig > ifconfig.txt`

### 3. 系统管理命令

ps 正在运行的某个进程状态

`ps -ef`：查看所有进程

`ps -ef | grep ssh`：查找某一进程

`kill 2868`：杀掉 2868 编号的进程

`kill -9 2868`：强制杀死进程

### 4. 管道 |

管道是 Linux 命令中重要的一个概念，其作用是将**一个命令的输出作用另一个命令的输入**。

示例

`ls --help | more`：分页查询帮助信息

`ps -ef | grep java`：查询名称中包含 java 的进程

`ifconfig | more`

`cat index.html | more`

`ps -ef | grep aio`

## 6. Linux 的权限命令

### 1. 文件权限

\- rwx rwx rwx

1. 代表文件类型

   - \- 表示文件
   - d 表示文件夹
   - l 表示链接

2. 当前用户具有该文件的权限
   - r：read 读
   - w：write 写
   - x：execute 执行
3. 当前组内其他用户具有该文件的权限
   - r：read 读
   - w：write 写
   - x：execute 执行
4. 其他组的用户具有该文件的权限
   - r：read 读
   - w：write 写
   - x：execute 执行

| 属主（user） | 属组（group） | 其他用户 |
| ------------ | ------------- | -------- |
| r、w、x      | r、w、x       | r、w、x  |
| 4、2、1      | 4、2、1       | 4、2、1  |

r：对文件是指可读取内容 对目录是可以 ls

w：对文件是指可修改文件内容，对目录是指可以在其中创建或删除子节点（目录或文件）

x：对文件是指是否可以运行这个文件，对目录是指是否可以 cd 进入这个目录

### 2. Linux 三种文件类型

普通文件：包括文本文件、数据文件、可执行的二进制程序文件等。

目录文件：Linux 系统把目录看成是一种特殊的文件，利用它构成文件系统的树形结构。

设备文件：Linux 系统把每一个设备都看成是一个文件。

### 3. 文件类型标识

**普通文件（-）**

**目录（d）**

**符号链接（l）**

- **进入 etc 可以查看，相对于快捷方式**
- 字符设备文件（c）
- 块设备文件（b）
- 套接字（s）
- 命名管道（p）

### 4. 文件权限管理：

chmod 变更文件或目录的权限。

`chmod 755 a.txt`

`chmod u=rwx,g=rx,o=rx a.txt`

## 7. Linux 上常用网络操作

### 1. 主机名配置

`hostname`：查看主机名

`hostname xxx`：修改主机名 重启后无效

如果想永久生效，可以修改 /etc/sysconfig/network 文件

### 2. IP 地址配置

`ipconfig`：查看（修改）ip 地址（重启后无效）

`ipconfig eth0 192.168.12.22`：修改 ip 地址

如果想要永久生效

修改 /etc/sysconfig/network-scripts/ifcfg-eth0 文件

```bash
DEVICE=eth0 # 网卡名称
BOOTPROTO=static # 获取ip的方式（static/dhcp/bootp/none）
HWADDR=00:0C:29:B5:B2:69 # MAC地址
IPADDR=12.168.177.129 # IP地址
NETMASK=255.255.255.0 # 子网掩码
NETWORK=192.168.177.0 # 网络地址
BROADCAST=192.168.0.255 # 广播地址
NBOOT=yes # 系统启动时是否设置此网络接口，设置为yes时，系统启动时激活此设备。
```

### 3. 域名映射

/etc/hosts 文件用于在通过主机名进行访问时做 ip 地址解析之用，相当于 Windows 系统的 C:\Windows\System32\drivers\etc\hosts 文件的功能

### 4. 网络服务管理

```bash
$ service network status # 查看指定服务的状态
$ service network stop # 停止指定服务
$ service network start # 启动指定服务
$ service network restart # 重启指定服务

$ service --status-all # 查看系统中所有后台服务
$ netstat -nltp # 查看系统中网络进程的端口监听情况
```

防火墙设置

防火墙根据配置文件 /etc/sysconfig/iptables 来控制本机的“出”、“入”网络访问行为。

```bash
$ service iptables status # 查看防火墙状态
$ service iptables stop # 关闭防火墙
$ service iptables start # 启动防火墙
$ service iptables off # 禁止防火墙自启
```

## 8. Linux 上软件的安装

- Linux 上的软件安装有以下几种常见方式介绍

  1. 二进制发布包

     软件已经对具体平台编译打包发布，只要解压，修改配置即可

  2. RPM 包

     软件已经按照 redhat 的包管理工具规范 RPM 进行打包发布，需要获取到相应的软件 PRM 发布包，然后用 RPM 命令进行安装

  3. Yum 在线安装

     软件已经以 RPM 规范打包，但发布在了网络上的一些服务器上，可用 yum 在线安装服务器上的 rpm 软件，并且会自动解决软件安装过程中的库依赖问题

  4. 源码编译安装

     软件以源码工程的形式发布，需要获取到源码工程后用相应开发工具进行编译打包部署。

- 上传与下载工具介绍

  1. FileZilla

     官网：[https://filezilla-project.org/](https://filezilla-project.org/)

     中文网：[https://www.filezilla.cn/](https://www.filezilla.cn/)

  2. lrzsz

     我们可以使用 yum 安装方式安装 yum install lrzsz

     注意：必须有网络

     可以在 crt 中设置上传与下载目录

  3. sftp

     使用 Alt + p 组合键打开 sftp 窗口

### 1. 在 Linux 上安装 JDK

#### 1. 上传 JDK 到 Linux 服务器

- 上传 JDK
- 卸载 open-JDK

```bash
# 查看 JDK 版本
$ java -version
# 查看安装的 jdk 信息
$ rpm -qa | grep java
# 卸载 jdk
$ rpm -e --nodeps openjdk
```

#### 2. 在 Linux 服务器上安装 JDK

- 通常将软件安装到 /usr/local
- 直接解压就可以

```bash
$ tar -xvf jdk.tar.gz -C 目标路径
$ tar -xvf jdk.tar.gz -C ./jdk
```

#### 3. 配置 JDK 的环境变量

配置环境变量

1. 编辑 /etc/profile 文件

```bash
$ vi /etc/profile
```

2. 在末尾行添加

```bash
# set java environment
JAVA_HOME=/usr/local/jdk
JAVA_HOME=.:$JAVA_HOME/lib/tools.jar
PATH=$JAVA_HOME/bin:$PATH
export JAVA_HOME JAVA_HOME PATH
```

保存退出

3. source /etc/profile 使更改的配置立即生效

### 2. 在 Linux 上安装 MySQL

#### 1. 将 mysql 的安装文件上传到 Linux 的服务器

将 mysql 的 tar 解压

将系统自带的 mysql 卸载

```bash
$ rpm -qa | grep mysql
$ rpm -e --nodeps mysql
```

#### 2. 安装 MySQL 服务端

```bash
$ rpm -ivh mysql-server.rpm
```

下面的提示告诉我们 root 用户的密码第一次是随机生成的，它保存在 /root/.mysql_secret 中，第一次登录需要 root 密码

#### 3. 安装 MySQL 客户端

```bash
$ rpm -ivh mysql-client.rpm
```

查看生成的 root 密码

```bash
$ cat /root/.mysql_secret
```

```bash
$ mysql -uroot -p
```

报错：原因是没有启动 mysql 服务

需要开启 mysql 服务

```bash
$ service mysql start
```

执行下面操作报错，原因是第一次操作 mysql 必须修改 root 用户的密码

设置 root 用户的密码

```bash
set password=password('root');
```

- MySQL 服务加入到系统服务并自动启动操作

```bash
$ chkconfig --add mysql
```

mysql 自动启动：

```bash
$ chkconfig mysql on
```

查询列表：

```bash
$ chkconfig
```

- 关于 mysql 远程访问设置

```bash
grant all privileges on *.* to 'root' @'%' identified by 'root';
```

```bash
flush privileges;
```

在 Linux 中很多软件的端口都被“防火墙”限制，我们需要将防火墙关闭

防火墙打开 3306 端口

```bash
/sbin/iptables -I  INPUT -p tcp --dport 3306 -j ACCEPT
/etc/rc.d/init.d/iptables save
/etc/int.d/iptables status
```

学习阶段我们也可以直接将防火墙关闭

```bash
$ service iptables stop
```

### 3. 在 Linux 上安装 tomcat

1. Tomcat 上传到 Linux 上
2. 将上传的 tomcat 解压
3. 在 tomcat/bin 目录下执行 startup.sh（注意防火墙）
4. 查看目标 tomcat/logs/catalina.out

### 4. 在 Linux 上安装 redis

#### 1. 安装 gcc-c++

redis 是 C 语言开发，安装 redis 需要先将官网下载的源码进行编译，编译依赖 gcc 环境。

输入命令：

```bash
$ yum install gcc-c++
```

输入 y 确认下载

输入 y 确认安装

安装 gcc 成功！

#### 2. 安装 redis

1. 下载 redis

```bash
$ wget https://download.redis.io/releases/redis.tar.gz
```

2. 解压

```bash
$ tar -xzvf redis.tar.gz
```

3. 编译安装

   切换至程序目录，并执行 make 命令编译

```bash
$ cd redis
$ make
```

执行安装命令

```bash
$ make PREFIX=/usr/local/redis install
```

make install 安装完成后，会在 /usr/local/bin 目录下生成下面几个可执行文件，它们的作用分别是：

redis-server：Redis 服务器端启动程序

redis-cli：Redis 客户端操作工具。也可以用 telnet 根据其纯文本协议来操作

redis-benchmark：Redis 性能检测工具

redis-check-aof：数据修复工具

redis-check-dump：检查导出工具

#### 3. 配置 redis

1. 复制配置文件到 /usr/local/redis/bin 目录：

```bash
$ cd redis
$ cp redis.conf /usr/local/redis/bin
```

#### 4. 启动 redis

1. 进入 redis/bin 目录

```bash
$ cd redis/bin
```

启动 redis 服务端

```bash
$ ./redis-server redis.conf
```

2. 克隆新窗口，启动 redis 客户端

```bash
$ ./redis-cli
```

### 5. 部署项目到 Linux

1. 修改 pom 配置

在 pom.xml 中添加 \<finalName\>

修改 jdk 版本

2. 修改项目
   1. druid.properties
   2. hearder.html
   3. route_detail.html
3. 使用 package 命令打包
4. 将 travel.war 上传到 tomcat 中的 webapps 目录
5. 重启 tomcat
6. 导出本地 mysql 数据，并导入 Linux 中的 mysql
