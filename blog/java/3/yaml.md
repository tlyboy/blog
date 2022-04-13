---
title: YAML
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - YAML
---

## 1. YAML 简介

YAML 全称是 YAML Ain't Markup Language。YAML 是一种直观的能够被电脑识别的的数据数据序列化格式，并且容易被人类阅读，容易和脚本语言交互的，可以被支持 YAML 库的不同的编程语言程序导入，比如：C/C++，Ruby，Python，Java，Perl，C#，PHP 等。YML 文件是以数据为核心的。比传统的 xml 方式更加简洁。

YAML 文件的扩展名可以使用 .yml 或者 .yaml。

- properties

```properties
server.port=8080
server.address=127.0.0.1
```

- xml

```xml
<server>
	<port>8080</port>
    <address>127.0.0.1</address>
</server>
```

- yml

```yaml
server:
  port: 80
  address: 127.0.0.1
```

::: tip

**简洁，以数据为核心**

:::

## 2. YAML：基本语法

- 大小写敏感
- 数据值前边必须有空格，作为分隔符
- 使用缩进表示层级关系
- 缩进时不允许使用 Tab 键，只允许使用空格（各个系统对应的空格数可能不同，导致层次混乱）。
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
- \# 表示注释，从这个字符一直到行尾，都会被解析器忽略。

```yaml
server:
  address: 127.0.0.1
  port: 80
name:abc
```

## 3. YAML：数据格式

- 对象（map）：键值对的集合

```yaml
person:
  name: zhangsan
#行内写法
person: {name: z}
```
