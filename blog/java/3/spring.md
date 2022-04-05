---
title: Spring
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - Java
  - XML
  - Spring
---

## 1. Spring 是什么

Spring 是分层的 Java SE/EE 应用 full-stack 轻量级开源框架，以 **IoC**（反转控制）和 **AOP**（面向切面编程）为内核。

提供了**展现层 SpringMVC** 和**持久层 Spring JDBCTemplate** 以及**业务层事务管理**等众多的企业级应用技术，还能整合开源世界众多著名的第三方框架和类库，逐渐成功使用最多的 Java EE 企业应用开源框架。

## 2. Spring 的优势

1. 方便解耦，简化开发
2. AOP 的编程支持
3. 声明式事务的支持
4. 方便程序的调试
5. 方便集成各种优秀框架
6. 降低 JavaEE API 的使用难度
7. Java 源码是经典学习范例

## 3. Spring 程序开发步骤

### 1. 导入坐标

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.2.12.RELEASE</version>
</dependency>
```

### 2. 编写 Dao 接口和实现类

#### 1. 接口：

```java
package com.tlyboy.dao;

public interface UserDao {
    void save();
}
```

#### 2. 实现类：

```java
package com.tlyboy.dao.impl;

import com.tlyboy.dao.UserDao;

public class UserDaoImpl implements UserDao {
    @Override
    public void save() {
        System.out.println("save running……");
    }
}
```

### 3. 创建 applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

</beans>
```

### 4. 在配置文件中进行配置

```xml
<bean id="userDao" class="com.tlyboy.dao.impl.UserDaoImpl" scope="singleton"></bean>
```

### 5. 创建 ApplicationContext 对象 getBean

```java
package com.tlyboy.dao.test;

import com.tlyboy.dao.UserDao;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UserDaoTest {
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserDao userDao = (UserDao) app.getBean("userDao");
        userDao.save();
    }
}
```

## 4. Spring 配置文件

### 1. Bean 标签基本设置

- 用于配置对象由 **Spring** 来创建。
- 默认情况下调用的是类中的**无参构造**，如果没有无参构造则不能创建成功。

#### 基本属性：

- `id`：Bean 实例在 Spring 容器中的唯一标识
- `class`：Bean 的全限定名称（全包名）

### 2. Bean 标签范围配置

scope：指定对象的作用范围，取值如下：

```xml
<bean id="userDao" class="com.tlyboy.dao.impl.UserDaoImpl" scope="singleton"></bean>
```

|    取值范围    | 说明                                                                                       |
| :------------: | ------------------------------------------------------------------------------------------ |
|  `singleton`   | **默认值，单例的**                                                                         |
|  `prototype`   | **多例的**                                                                                 |
|    request     | WEB 项目中，Spring 创建一个 Bean 的对象，将对象存入到 request 域中                         |
|    session     | WEB 项目中，Spring 创建一个 Bean 的对象，将对象存入到 session 域中                         |
| global session | WEB 项目中，应用在 Portlet 环境，如果没有 Portlet 环境，那么 global session 相当于 session |

#### 1. 当 scope 的取值为 `singleton` 时

Bean 的实例化个数：1 个

Bean 的实例化时机：当 Spring 核心文件被加载时，实例化配置的 Bean 实例

Bean 的生命周期：

- 对象创建：当应用加载，创建容器时，对象就被创建了
- 对象运行：只要容器在，对象一直活着
- 对象销毁：当应用卸载，销毁容器时，对象就被销毁了

#### 2. 当 scope 的取值为`prototype`时

Bean 的实例化个数：多个

Bean 的实例化时机：当调用 `getBean()` 方法时实例化 Bean

Bean 的生命周期：

- 对象创建：当使用对象时，创建新的对象实例
- 对象运行：只对象在使用中，对象一直活着
- 对象销毁：当对象长时间不用时，被 Java 的垃圾回收器回收了

### 3. Bean 生命周期配置

- `init-method`：指定类中的初始化方法名称
- `destroy-method`：指定类中销毁方法名称

### 4. Bean 的实例化三种方式

- 无参**构造**方法实例化
- 工厂**静态**方法实例化
  - `factory-method`
- 工厂**实例**方法实例化
  - `factory-bean`
  - `factory-method`

### 5. Bean 的依赖注入

依赖注入：它是 Spring 框架核心 IOC 的具体实现。

#### 1.构造方法

```xml
<constructor-arg name="userDao" ref="userDao"/>
```

#### 2. set 方法

```xml
<property name="userDao" ref="userDao"></property>
```

#### 3. P 命名空间注入：

```xml
<beans xmlns:p="http://www.springframework.org/schema/p"></beans>
```

```xml
<bean id="userService" class="com.tlyboy.service.impl.UserServiceImpl" p:userDao-ref="userDao"/>
```

### 6. Bean 的依赖注入的数据类型

注入数据的三种数据类型

#### 1. 普通数据类型

1. 在 UserDaoImpl 中加入 name 和 age 属性并设置 setter

```java
private String username;
private int age;

public void setName(String username) {
    this.username = username;
}

public void setAge(int age) {
    this.age = age;
}
```

2.在 applicationContext 中加入配置

```xml
<bean id="userService" class="com.tlyboy.service.impl.UserServiceImpl">
    <property name="username" value="zhangsan"></property>
    <property name="age" value="18"></property>
</bean>
```

#### 3. 引用数据类型

#### 4. 集合数据类型

### 7. 引入其他配置文件（分模块开发）

实际开发中，Spring 的配置内容非常多，这就导致 Spring 配置很繁杂且体积很大，所以，可以将部分配置拆解到其他配置文件中，而在 Spring 主配置文件通过 import 标签进行加载。

```xml
<import resource="applicationContext-xxx.xml" />
```

### 8. 知识要点

**Spring 的重点配置**

- \<bean\>标签

  - id 属性：在容器中 Bean 实例的唯一标识，不允许重复
  - class 属性：要实例化的 Bean 的全限定名
  - scope 属性：Bean 的作用范围，常用是 singleton (默认) 和 prototype
  - \<property\> 标签：属性注入
    - name 属性：属性名称
    - value 属性：注入的普通属性值
    - ref 属性：注入的对象引用值
    - \<list\> 标签
    - \<map\> 标签
    - \<properties\> 标签
  - \<constructor-arg\> 标签

  \<import\> 标签：导入其他的 spring 的分文件

## 5. Spring 相关 API

### 1. ApplicationContext 的继承体系

`applicationContext`：接口类型，代表应用上下文，可以通过其实例获得 Spring 容器中的 Bean 对象。

### 2. ApplicationContext 的实现类

1. `ClassPathXmlApplicationContext`

   它是从类的根路径下加载配置文件推荐使用这种。

2. `FileSystemXmlApplicationContext`

   它是从磁盘路径上加载配置文件，配置文件可以在磁盘的任意位置。

3. `AnnotationConfigApplicationContext`

   当使用注解配置容器对象时，需要使用此类来创建 spring 容器。它用来读取注解。

### 3. getBean() 方法的使用

其中，当参数的数据类型是字符串时，表示根据 Bean 的 id 从容器中获得 Bean 实例，返回是 Object，需要强转。当参数的数据类型是 Class 类型时，表示根据类型从容器中匹配 Bean 实例，当容器中相同类型的 Bean 有多个时,则此方法会报错。

### 4. 知识要点

**Spring 重点 API**

```java
Applicationcontext app = new classpathxmlApplicationcontext("xml文件");
app.getBean("id");
app.getBean(Class);
```

## 6. Spring 配置数据源

### 1. 数据源（连接池）的作用

- 数据源(连接池)是提高程序性能如出现的

- 事先实例化数据源，初始化部分连接资源

- 使用连接资源时从数据源中获取

- 使用完毕后将连接资源归还给数据源

常见的数据源（连接池）：**DBCP、C3P0、BoneCP、Druid** 等

### 2. 数据源的开发步骤

#### 1. 导入数据源的坐标和数据库驱动坐标

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.49</version>
</dependency>
<dependency>
    <groupId>c3p0</groupId>
    <artifactId>c3p0</artifactId>
    <version>0.9.1.2</version>
</dependency>
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.2.6</version>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
```

#### 2. 创建数据源对象

1. c3p0

```java
ComboPooledDataSource dataSource = new ComboPooledDataSource();
```

2. Druid

```java
DruidDataSource dataSource = new DruidDataSource();
```

#### 3. 设置数据源的基本连接数据

1. c3p0

```java
dataSource.setDriverClass("com.mysql.jdbc.Driver");
dataSource.setJdbcUrl("jdbc:mysql:///demo?useSSL=false");
dataSource.setUser("root");
dataSource.setPassword("1265");
```

2. Druid

```java
dataSource.setDriverClassName("com.mysql.jdbc.Driver");
dataSource.setUrl("jdbc:mysql:///demo?useSSL=false");
dataSource.setUsername("root");
dataSource.setPassword("1265");
```

#### 4. 使用数据源获取连接资源和归还连接资源

1. c3p0

```java
Connection connection = dataSource.getConnection();
System.out.println(connection);
connection.close();
```

2. Druid

```java
DruidPooledConnection connection = dataSource.getConnection();
System.out.println(connection);
connection.close();
```

### 3. Spring 配置数据源

可以将 DataSource 的创建权交由 Spring 容器去完成

1. ApplicationContext 配置文件加入

```xml
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="com.mysql.jdbc.Driver"/>
    <property name="jdbcUrl" value="jdbc:mysql:///demo?useSSL=false"/>
    <property name="user" value="root"/>
    <property name="password" value="1265"/>
</bean>
```

2. 编写测试方法

```java
ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
DataSource dataSource = app.getBean(DataSource.class);
Connection connection = dataSource.getConnection();
System.out.println(connection);
connection.close();
```

### 4.抽取 jdbc 配置文件

applicationContext.xml 加载 jdbc.properties 配置文件获得连接信息。

首先，需要引入 context 命名空间和约束路径：

#### 命名空间：

```
xmlns:context="http://www.springframework.org/schema/context"
```

#### 约束路径：

[http://www.springframework.org/schema/context](http://www.springframework.org/schema/context)

[http://www.springframework.org/schema/context/spring-context.xsd](http://www.springframework.org/schema/context/spring-context.xsd)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
    <context:property-placeholder location="classpath:jdbc.properties"/>
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"/>
        <property name="jdbcUrl" value="${jdbc.url}"/>
        <property name="user" value="${jdbc.user}"/>
        <property name="password" value="${jdbc.password}"/>
    </bean>
</beans>
```

### 5. 知识要点

**Spring 容器加载 properties**

```xml
<context:property-placeholder location="classpath:jdbc.properties"/>
<property name="" value="${key}"/>
```

**最简单的读取 properties 的方法**

```java
ResourceBundle rb = ResourceBundle.getBundle("jdbc");
```

## 7. Spring 注解开发

Spring 是轻量而重配置的框架，配置比较繁重，影响开发效率，所以注解开发是一种趋势，注解代替 xml 配合文件可以简化配置，提高开发效率。

### 1. Spring 原始注解

Spring 原始注解主要是替代 \<Bean\> 的配置

| 注解           | 说明                                             |
| -------------- | ------------------------------------------------ |
| `@Component`   | 使用在类上用于实例化 Bean                        |
| `@Controller`  | 使用在 web 层类上用于实例化 Bean                 |
| `@Service`     | 使用在 service 层类上用于实例化 Bean             |
| `@Repository`  | 使用在 dao 层类上用于根据类型依赖注入            |
| `@Autowired`   | 使用在字段上用于根据类型依赖注入                 |
| `@Qualifier`   | 结合 @Autowired 一起使用用于根据名称进行依赖注入 |
| `@Resource`    | 相当于 @Autowired + @Qualifier，按照名称进行注入 |
| `@Value`       | 注入普通属性                                     |
| `@Scope`       | 标注 Bean 的作用范围                             |
| @PostConstruct | 使用在方法上标注该方法是 Bean 的初始化方法       |
| @PreDestroy    | 使用在方法上标注该方法是 Bean 的销毁方法         |

**注意：**

使用注解进行开发时，需要在 ApplicationContext.xml 中配置组件扫描，作用是指定哪个包及其子包下的 Bean 需要进行扫描以便识别使用注解配置的类、字段和方法。

```xml
<!-- 注解的组件扫描 -->
<context:component-scan base-package="com.tlyboy"></context:component-scan>
```

### 2. Spring 新注解

使用上面的注解还不能全部替代 xml 配置文件，还需要使用注解替代的配置如下：

- 非自定义的 Bean 配置：`<bean>`
- 加载 properties 文件的配置：`<context:property-placeholder>`
- 组件扫描的配置：`<context:component-scan>`
- 引入其他文件：`<import>`

#### 1. Spring 新注解

| 注解            | 说明                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| @Configuration  | 用于指定当前类是一个 Spring 配置类，当创建容器时会从该类上加载注解                                                                      |
| @ComponentScan  | 用于指定 Spring 在初始化容器时要扫描的包。作用和在 Spring 的 xml 配置文件中的\<context:component-scan base-package="com.tlyboy" /\>一样 |
| @Bean           | 使用在方法上，标注将该方法的返回值存储到 Spring 中                                                                                      |
| @PropertySource | 用于加载 .properties 文件中的配置                                                                                                       |
| @Import         | 用于导入其他配置类                                                                                                                      |

## 8. Spring 集成 Junit

### 1. 原始 Junit 测试 Spring 的问题

在测试类中，每个测试方法都有以下两行代码：

```java
Applicationcontext ac = new classPathXmlApplicationcontext("bean.xml");
IAccountservice as = ac.getBean("accountservice", IAccountservice.class);
```

这两行代码的作用是获取容器，如果不写的话，直接会提示空指针异常。所以又不能轻易删掉。

### 2. 上述问题解决思路

- 让 SpringJunit 负责创建 Spring，但是需要将配置文件的名称告诉它。
- 将需要进行测试 Bean 直接在测试类中进行注入

### 3. Spring 集成 Junit 步骤

#### 1. 导入 Spring 集成 Junit 的坐标

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.3.8</version>
</dependency>
```

#### 2. 使用 @Runwith 注解替换原来的运行期

```java
@RunWith(SpringJUnit4ClassRunner.class)
```

#### 3. 使用 @ContextConfiguration 指定配置文件或配置类

1. 配置文件

```java
@ContextConfiguration("classpath:applicationContext.xml")
```

2. 注解

```java
@ContextConfiguration(classes={SpringConfiguration.class})
```

#### 4. 使用 @Autowired 注入需要测试的对象

```java
@Autowired
private UserService UserService;
```

#### 5. 创建测试方法进行测试

```java
@Test
public void test1(){
    userService.save();
}
```
