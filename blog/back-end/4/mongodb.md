---
title: MongoDB
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - NoSQL
  - MongoDB
---

## MongoDB 快速上手

MongoDB 用起来 - 快速上手\&集群和安全系列

## 课程目标：

- 理解 MongoDB 的业务场景、熟悉 MongoDB 的简介、特点和体系结构、数据类型等。
- 能够在 Windows 和 Linux 下安装和启动 MongoDB、图像化管理界面和 Compass 的安装和使用
- 掌握 MongoDB 基本常用命令实现数据的 CRUD
- 掌握 MongoDB 的索引类型、索引管理、执行计划。
- 使用 Spring Data MongoDB 完成文章评论业务的开发

## 1. MongoDB 相关概念

### 1. 业务应用场景

传统的关系型数据库（如 MySQL），在数据操作的“三高”需求以及应对 Web2.0 的网站需求面前，显得力不从心。

解释：“三高”需求：

- High performance - 对数据库高并发读写的需求。
- Huge Storage - 对海量数据的高效率存储和访问的需求。
- High Scalability && High Availability- 对数据库的高可扩展性和高可用性的需求。

**而 MongoDB 可应对“三高”需求。**

<br>

具体的应用场景如：

1. 社交场景，使用 MongoDB 存储用户信息，以及用户发表的朋友圈信息，通过地理位置索引实现附近的人、地点等功能。
2. 游戏场景，使用 MongoDB 存储游戏用户信息，用户的装备、积分等直接以内嵌文档的形式存储，方便查询、高效率存储访问。
3. 物流场景，使用 MongoDB 存储订单信息，订单状态在运送过程中会不断更新，以 MongoDB 内嵌数组的形式来存储，一次查询就能将订单所有的变更读取出来。
4. 物联网场景，使用 MongoDB 存储所有接入的智能设备信息，以及设备汇报的日志信息，并对这些信息进行多维度的分析。
5. 视频直播，使用 MongoDB 存储用户信息、点赞互动信息等。

<br>

这些应用场景中，数据操作方面的共同特点是：

1. 数据量大
2. 写入操作频繁（读写都很频繁）
3. 价值较低的数据，对事务性要求不高

对于这样的数据，我们更适合使用 MongoDB 来实现数据的存储。

#### 什么时候选择 MongoDB ？

在架构选型上，除了上述的三个特点外，如果你还犹豫是否要选择它？可以考虑以下的一些问题：

应用不需要事务及复杂 join 支持

新应用，需求会变，数据模型无法确定，想快速迭代开发

应用需要 2000-3000 以上的读写 QPS（更高也可以）

应用需要 TB 甚至 PB 级别数据存储

应用发展迅速，需要能快速水平扩展

应用要求存储的数据不丢失

应用需要 99.999% 高可用

应用需要大量的地理位置查询、文本查询

如果上述有 1 个符合，可用考虑 MongoDB，2 个及以上的符合，选择 MongoDB 绝不会后悔。

<br>

思考：如果使用 MySQL 呢？

答：相对 MySQL，可用以更低的成本解决问题（包括学习、开发、运维等成本）

### 2. MongoDB 简介

MongoDB 是一个开源、高性能、无模式的文档型数据库，当初的设计就是用于简化开发和方便扩展，是 NoSQL 数据库产品中的一种。是最像关系型数据库（MySQL）的非关系型数据库。

它支持的数据结构非常松散，是一种类似于 JSON 的格式叫 BSON，所以它既可以存储比较复杂的数据类型，又相当的灵活。

MongoDB 中的记录是一个文档，它是一个由字段和值对（filed:value）组成的数据结构。MongoDB 文档类似于 JSON 对象，即一个文档认为就是一个对象。字段的数据类型是字符型，它的值除了使用基本的一些类型外，还可以包括其他文档、普通数组和文档数组。

### 3. 体系结构

MySQL 和 MongoDB 对比

| 关系型数据库                    | MongoDB 数据库                                |
| ------------------------------- | --------------------------------------------- |
| 1. 数据库<br />2. 表<br />3. 行 | 1. 数据库<br />2. Collection<br />3. Document |
| 数据库（Database）              | 数据库（Database）                            |
| Student（表）                   | Collection（集合）                            |
| 行                              | Document（文档）                              |

| SQL 术语/概念 | MongoDB 术语/概念 | 解释/说明                                |
| ------------- | ----------------- | ---------------------------------------- |
| database      | database          | 数据库                                   |
| table         | collection        | 数据库表/集合                            |
| row           | document          | 数据记录行/文档                          |
| column        | filed             | 数据字段/域                              |
| index         | index             | 索引                                     |
| table joins   |                   | 表连接，MongoDB 不支持                   |
|               | 嵌入文档          | MongoDB 通过嵌入式文档来替代多表连接     |
| primary key   | primary key       | 主键，MongoDB 自动将 \_id 字段设置为主键 |

### 4. 数据模型

MongoDB 的最小存储单位就是文档（document）对象。文档（document）对象对应于关系型数据库的行。数据在 MongoDB 中以 BSON（Binary-JSON）文档的格式存储在磁盘上。

BSON（Binary Serialized Document Format）是一种类 json 的一种二进制形式的存储格式，简称 Binary JSON。BSON 和 JSON 一样，支持内嵌的文档对象和数组对象，但是 BSON 有 JSON 没有的一些数据类型，如 Date 和 BinData 类型。

BSON 采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。

Bson 中，除了基本的 JSON 类型：string，integer，boolean，double，null，array 和 object，mongo 还使用了特殊的数据类型。这些类型包括 date，object id，binary data，regular expression 和 code。每一个驱动都以特定语言的方式实现了这些类型，查看你的驱动的文档来获取详细信息。

BSON 数据类型参考列表：
