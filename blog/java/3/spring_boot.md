---
title: Spring Boot
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - Java
  - XML
  - YAML
  - Spring Boot
---

## 1. 导学

### 1. 为什么学习 Spring Boot？

简化 spring 的开发

### 2. 适用人群

1. 有一点的 Java 基础知识
2. 有 Spring、SpringMVC、Mybatis 框架知识
3. 对目前职业有进一步提升需求，希望从互联网行业高薪工作的在职人员。

### 3. 课程安排

基础篇——高级篇

### 4. 后期学习路径

Spring Boot —— Spring Cloud —— 各种解决方案

## 2. Spring Boot 概述

### 1.概述

Spring Boot 提供了一种快速使用 Spring 的方式，基于约定优于配置的思想，可以让开发人员不必在配置与逻辑业务之间进行思维的切换，全身心的投入到逻辑业务的代码编写中，从而大大提高了开发的效率，一定程度上缩短了项目周期。2014 年 4 月，Spring Boot 1.0.0 发布。Spring 的顶级项目之一(https://spring.io)。

### 2. Spring 缺点

1. 配置繁琐

2. 依赖繁琐

### 3. Spring Boot 功能

1. 自动配置
2. 起步依赖：依赖传递
3. 辅助功能

::: tip
Spring Boot 并不是对 Spring 功能上的增强，而是提供了一种快速使用 Spring 的方式。
:::

## 3. Spring Boot 快速入门

### 1.案例

#### 1. 需求：

搭建 Spring Boot 工程，定义 HelloController.hello() 方法，返回”Hello Spring Boot!”。

#### 2. 实现步骤：

1. 创建 Maven 项目
2. 引入 Spring Boot 起步依赖
3. 定义 Controller
4. 编写引导类
5. 启动测试

#### 3. 小结

- Spring Boot 在创建项目时，使用 jar 的打包方式。
- Spring Boot 的引导类，是项目入口，运行 main 方法就可以启动项目。
- 使用 Spring Boot 和 Spring 构建的项目，业务代码编写方式完全一样。

### 2. 快速构建 Spring Boot 工程

编写 controller 类

```java
@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String hello() {
        return "hello spring boot";
    }
}
```

## 4. Spring Boot 起步依赖原理分析

### 1. spring-boot-starter-parent

### 2. spring-boot-starter-web

### 3. 小结

- 在 spring-boot-starter-parent 中定义了各种技术的版本信息，组合了一套最优搭配的技术版本。

- 在各种 starter 中，定义了完成该功能需要的坐标合集，其中大部分版本信息来自于父工程。

- 我们的工程继承 parent，引入 starter 后，通过依赖传递，就可以简单方便获得需要的 jar 包，并且不会存在版本冲突等问题。

## 5. Spring Boot 配置

### 1. 配置文件分类

Spring Boot 是基于约定的，所以很多配置都有默认值，但如果想使用自己的配置替换默认配置的话，就可以使用 application.properties 或者 application.yml （application.yaml）进行配置。

- properties：

```properties
server.port=8080
```

- yml：

```yaml
server:
  port: 8080
```

### 2. 读取配置文件内容

### 3. profile

### 4. 内部配置加载顺序

### 5. 外部配置加载顺序

## 6. Spring Boot 整合其他框架
