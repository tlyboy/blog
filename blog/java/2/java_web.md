---
title: Java Web
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - Java
---

## 1. Java Web 介绍

### 1. 什么是 Java Web ？

- Web：全球广域网，也称为万维网（www），能够通过浏览器访问的**网站**
- Java Web：使用 Java 技术来解决相关 web 互联网领域的技术栈

1. 网页：展现数据
2. 数据库：存储和管理数据
3. Java Web 程序：逻辑处理

网页 <——> Java Web 程序 <——> 数据库

- Java Web 课程安排

| 课程     | 技术                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------- |
| 数据库   | MySQL<br />JDBC<br />Maven<br />MyBatis                                                                             |
| 前端     | HTML + CSS<br />JavaScript<br />Ajax + Vue + ElementUI                                                              |
| web 核心 | Tomcat + HTTP + Servlet<br />Request + Response<br />JSP<br />Cookie + Session<br />Filter + Listener<br />综合案例 |

## 2. 数据库

### 1. 数据库相关概念

#### 1. 数据库相关概念

- 数据库
- 数据库管理系统
- SQL
- 常见的关系型数据库管理系统

**数据库**

- 存储数据的仓库，数据库是由组织的进行存储
- 英文：DataBase，检测 DB

**数据库管理系统**

- 管理数据库的大型软件
- 英文：DataBase Management System，简称 DBMS

**SQL**

- 英文：Structured Query Language，简称 SQL，结构化查询语言
- 操作关系型数据库的编程语言
- 定义操作所有关系型数据库的统一标准

#### 2. 常见的关系型数据库管理系统

- Oracle：收费的大型数据库，Oracle 公司的产品
- **MySQL**：开源免费的中小型数据库。后来 Sun 公司收购了 MySQL，而 Sun 公司又被 Oracle 收购
- SQL Server：Microsoft 公司收费的中型的数据库。C #、.net 等语言常使用
- PostgreSQL：开源免费中小型的数据库
- DB2：IBM 公司的大型收费数据库产品
- SQLite：嵌入的微型数据库。如：作为 Android 内置数据库
- MariaDB：开源免费中小型的数据库

### 2. MySQL 数据库

- MySQL 安装
- MySQL 卸载
- MySQL 配置
- MySQL 登录、退出
- MySQL 数据模型

#### 1. MySQL 安装

::: tip
**安装环境：Win10 64 位**

**软件版本：MySQL 5.7.24 解压版**
:::

##### 1. 下载

点开下面的链接：

https://downloads.mysql.com/archives/community/

选择选择和自己**系统位数**相对应的版本点击右边的`Download`，此时会进到另一个页面。

不用理会上面的登录和注册按钮，直接点击`No thanks, just start my download.`就可以下载。

##### 2. 安装（解压）

下载完成后我们得到的是一个压缩包，将其解压，我们就可以得到 MySQL 5.7.24 的软件本体了（就是一个文件夹），我们可以把它放在你想安装的位置。

##### 3. 配置

###### 1. 添加环境变量

::: tip
环境变量里面有很多选项，这里我们只用到`Path`这个参数。为什么在初始化的开始要添加环境变量呢？

在黑框（即 CMD）中输入一个可执行程序的名字，Windows 会先在环境变量中的`Path`所指的路径中寻找一遍，如果找到了就直接执行，没找到就在当前工作目录找，如果还没找到，就报错。我们添加环境变量的目的就是能够在任意一个黑框直接调用 MySQL 中的相关程序而不用总是修改工作目录，大大简化了操作。
:::

右键`此电脑`→`属性`，点击`高级系统设置`

点击`环境变量`

在`系统变量`中新建 MYSQL_HOME

在`系统变量`中找到并**双击**`Path`

点击`新建`

最后点击确定。

**如何验证是否添加成功？**

右键开始菜单（就是屏幕左下角），选择`命令提示符（管理员）`，打开黑框，敲入`mysql`，回车。
如果提示`Can't connect to MySQL server on 'localhost'`则证明添加成功；
如果提示`mysql不是内部或外部命令，也不是可运行的程序或批处理文件`则表示添加添加失败，请重新检查步骤并重试。

###### 2. 新建配置文件

新建一个文本文件，内容如下：

```ini
[mysql]
default-character-set=utf8

[mysqld]
character-set-server=utf8
default-storage-engine=INNODB
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

把上面的文本文件另存为，在保存类型里选`所有文件（*.*）`，文件名叫`my.ini`，存放的路径为 MySQL 的`根目录`（例如我的是`D:\software\mysql-5.7.24-winx64`,根据自己的 MySQL 目录位置修改）。

上面代码意思就是配置数据库的默认编码集为 utf-8 和默认存储引擎为 INNODB。

###### 3. 初始化 MySQL

在刚才的黑框中敲入`mysqld --initialize-insecure`，回车，稍微等待一会，如果出现没有出现报错信息(如下图)则证明 data 目录初始化没有问题，此时再查看 MySQL 目录下已经有 data 目录生成。

```bash
$ mysqld --initialize-insecure
```

tips：如果出现如下错误

是由于权限不足导致的，去`C:\Windows\System32` 下以管理员方式运行 cmd.exe

###### 4. 注册 MySQL 服务

在黑框里敲入`mysqld -install`，回车。

```bash
$ mysqld -install
```

现在你的计算机上已经安装好了 MySQL 服务了。

MySQL 服务器

###### 5. 启动 MySQL 服务

在黑框里敲入`net start mysql`，回车。

```bash
$ net start mysql # 启动 mysql 服务

$ net stop mysql # 停止 mysql 服务
```

###### 6. 修改默认账户密码

在黑框里敲入`mysqladmin -u root password 1234`，这里的`1234`就是指默认管理员（即 root 账户）的密码，可以自行修改成你喜欢的。

```bash
$ mysqladmin -u root password 1234
```

**至此，MySQL 5.7 解压版安装完毕！**

##### 4. 登录 MySQL

右键开始菜单，选择`命令提示符`，打开黑框。
在黑框中输入，`mysql -uroot -p1234`，回车，出现下图且左下角为`mysql>`，则登录成功。

```bash
$ mysql -uroot -p1234
```

**到这里你就可以开始你的 MySQL 之旅了！**

退出 mysql：

```bash
$ exit
$ quit
```

登陆参数：

```bash
$ mysql -u 用户名 -p 密码 -h 要连接的 mysql 服务器的 ip 地址（默认 127.0.0.1） -P 端口号（默认 3306）
```

##### 5. 卸载 MySQL

如果你想卸载 MySQL，也很简单。

右键开始菜单，选择`命令提示符（管理员）`，打开黑框。

1. 敲入`net stop mysql`，回车。

```bash
$ net stop mysql
```

2. 再敲入`mysqld -remove mysql`，回车。

```bash
$ mysqld -remove mysql
```

3. 最后删除 MySQL 目录及相关的环境变量。

**至此，MySQL 卸载完成！**

#### 2. MySQL 数据模型

**关系型数据库**

关系型数据库都是建立在关系模型基础上的数据库，简单说，关系型数据库是由多张能互相连接的**二维表**组成的数据库

- 优点
  1. 都是使用表结构，格式一致，易于维护。
  2. 使用通用的 SQL 语言操作，使用方便，可用于复杂查询。
  3. 数据存储在磁盘中，安全。

### 3. SQL

- SQL 简介
- SQL 通用语法
- SQL 分类
- DDL
- DML
- DQL

#### 1. SQL 简介

- 英文：Structured Query Language，简称 SQL
- 结构化查询语言，一门操作关系型数据库的编程语言
- 定义操作所有关系型数据库的统一标准
- 对于同一个需求，每一种数据库操作的方式可能会存在一些不一样的地方，我们称为“方言”

#### 2. SQL 通用语法

1. SQL 语法可以单行或多行书写，以分号结尾。
2. MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。
3. 注释
   - 单行注释：-- 注释内容 或 # 注释内容（MySQL 特有）
   - 多行注释： /\* 注释 \*/

#### 3. SQL 分类

- **DDL**（Data Definition Language）数据定义语言，用来定义数据库对象：数据库，表，列等
- **DML**（Data Manipulate Language）数据操作语言，用来对数据库中表的数据进行增删改
- **DQL**（Data Query Language）数据查询语言，用来查询数据库中表的记录（数据）
- **DCL**（Data Control Language）数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户

#### 4. DDL

- **DDL**：操作数据库，表等
- **DML**：对表中的数据进行增删改
- **DQL**：对表中的数据进行查询
- **DCL**：对数据库进行权限控制

##### 1. 操作数据库

###### 1. 查询

```sql
SHOW DATABASES;
```

###### 2. 创建

- 创建数据库

```sql
CREATE DATABASE 数据库名称;
```

- 创建数据库（判断，如果不存在则创建）

```sql
CREATE DATABASE IF NOT EXISIS 数据库名称;
```

###### 3. 删除

- 删除数据库

```sql
DROP DATABASE 数据库名称;
```

- 删除数据库（判断，如果存在则删除）

```sql
DROP DATABASE IF EXISTS 数据库名称;
```

###### 4. 使用数据库

- 查看当前使用的数据库

```sql
SELECT DATABASE();
```

- 使用数据库

```sql
USE 数据库名称;
```

##### 2. 操作表

- 创建（**C**reate）
- 查询（**R**etrieve）
- 修改（**U**pdate）
- 删除（**D**elete）

###### 1. 查询表

- 查询当前数据库下所有表名称

```sql
SHOW TABLES;
```

- 查询表结构

```sql
DESC 表名称;
```

###### 2. 创建表

```sql
CREATE TABLE 表名 (
	字段名1 数据类型1,
    字段名2 数据类型2,
    ...
    字段名n 数据类型n
);
```

::: warning 注意
最后一行末尾，不能加逗号
:::
