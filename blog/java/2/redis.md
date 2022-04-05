---
title: Redis
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - NoSQL
  - Redis
---

## 1. Redis 存储的是：

`key`，`value` 格式的数据，其中 `key` 都是字符串，`value` 有 5 种不同的数据结构

## 2. value 的数据结构：

1. 字符串类型 **string**
2. 哈希类型 **hash**：map 格式
3. 列表类型 **list**：linkedlist 格式
4. 集合类型 **set**
5. 有序集合类型 **sortedset**

### 1. 字符串类型 `string`

1. 存储：`set key value`
2. 获取：`get key`
3. 删除：`del key`

### 2. 哈希类型 `hash`

1. 存储：`hset key field value`
2. 获取：
3. `hget key field`：获取指定的 field 对应的值
4. `hgetall key`：获取所有的 field 和 value
5. 删除：`hdel key field`

### 3. 列表类型 `list`：可以添加一个元素到列表的头部（左边）或者尾部（右边）

#### 1. 添加：

1. `lpush key value`：将元素加入列表左边
2. `rpush key value`：将元素加入列表右边

#### 2. 获取：

1. `lrange key start end`：范围获取
2. `lrange key 0 -1`：获取全部

#### 3. 删除：

1. `lpop key`：删除列表最左边的元素，并将元素返回
2. `rpop key`：删除列表最右边的元素，并将元素返回

### 4. 集合类型 `set`：不允许重复元素

1. 存储：`sadd key value`
2. 获取：`smembers key`：获取 set 集合中所有的元素
3. 删除：`srem key value`：删除 set 集合中的某个元素

### 5. 有序集合类型 `sortedset`：不允许重复元素，但元素有顺序

1. 存储：`zadd key score value`：
2. 获取：`zrange key start end`：
3. 删除：`zren key val`：

### 6. 通用命令

1. `keys *`：查询所有的键
2. `type key`：获取键对应的 value 的类型
3. `del key`：删除指定的 key value

## 3. 持久化操作

### 1. 概述

Redis 是一个内存数据库当 Redis 服务器重启，或者电脑重启，数据会丢失，我们可以将 Redis 内存中的数据持久化保存到硬盘的文件中。

### 2. Redis 持久化机制：

#### 1. RDB：默认方式，不需要进行配置，默认就是使用这种机制

在一定的间隔时间中，检测 key 的变化情况，然后持久化数据

1. 编辑 **redis.windows.conf** 文件

   `save 900 1`

2. 重新启动 redis 服务器，并指定配置文件名称

   `redis-server.exe redis.windows.conf`

#### 2. AOF：

日志记录的方式，可以记录每一条命令的操作。可以每一次命令操作后，持久化数据。

1. 编辑 **redis.windows.conf** 文件

   `appendfsync no`（关闭 aof）->`appendfsync yes`（开启 aof）

   `appendfsync always`：每一次操作都进行持久化

   `appendfsync always`：每隔一秒进行一次持久化

## 4. 使用 Java 客户端操作 Redis

### 1. jedis：

一款 Java 操作 redis 数据库的工具。

### 2. 使用步骤：

1. 下载 jedis 的 jar 包

2. 使用

```java
public void test() {
    Jedis jedis = new Jedis("localhost", 6379);
    jedis.set("username", "tly");
    jedis.close();
}
```
