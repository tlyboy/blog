---
title: Maven
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - Java
  - XML
  - Maven
---

## 1. 修改 Maven 本地仓库的路径

```xml
<localRepository>D:\maven\repository</localRepository>
```

## 2. 配置阿里云公共仓库

```xml
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

## 3. Maven 命令

1. `mvn compile`：编译
2. `mvn clean`：清理
3. `mvn package`：打包
4. `mvn install`：安装到本地仓库

## 3. Maven 坐标

坐标：被 maven 管理的资源的唯一标识

- `groupId`：组织名称
- `atifactId`：模块名称
- `version`：版本号

## 4. IDEA 创建 Java 项目

1. **jar**：Java 项目。默认值
2. **war**：web 项目。
3. **pom**

```xml
<packaging>jar</packaging>
```

> 这是一个缺省值，不写就是默认值

```xml
<plugin>
    <groupId>org.apache.tomcat.maven</groupId>
    <artifactId>tomcat7-maven-plugin</artifactId>
    <version>2.2</version>
    <configuration>
        <port>80</port>
        <path>/</path>
    </configuration>
</plugin>
```

## 5. 添加依赖和插件格式

1. 添加依赖

```xml
<dependencies>
    <dependency>
        <groupId></groupId>
        <artifactId></artifactId>
        <version></version>
    </dependency>
    ……
</dependencies>
```

2. 添加插件

```xml
<build>
    <plugins>
        <plugin>
            <groupId></groupId>
            <artifactId></artifactId>
            <version></version>
        </plugin>
        ……
    </plugins>
</build>
```

> 可以使用 IDEA 的快捷键使用模板

```xml
<plugins>
    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
            <target>1.8</target>
            <source>1.8</source>
        </configuration>
    </plugin>
</plugins>
```

> 可以通过这个插件来配置 Java 版本

## 6. 依赖范围

```xml
<scope>test</scope>
```

| 依赖范围 | 对于编译 ClassPath 有效 | 对于测试 ClassPath 有效 | 对于运行 ClassPath 有效 |            例子             |
| :------: | :---------------------: | :---------------------: | :---------------------: | :-------------------------: |
| compile  |            Y            |            Y            |            Y            |         spring-core         |
|   test   |            -            |            Y            |            -            |            junit            |
| provided |            Y            |            Y            |            -            |         servlet-api         |
| runtime  |            -            |            Y            |            Y            |          JDBC 驱动          |
|  system  |            Y            |            Y            |            -            | 本地的 maven 仓库之外的类库 |
