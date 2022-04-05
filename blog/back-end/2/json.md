---
title: JSON
date: 2022-3-22
categories:
  - 后端笔记
tags:
  - JavaScript
  - JSON
---

## 1. 基本规则

### 1. 单个对象

```javascript
let person = { name: 'tly', age: 21 }
```

### 2. 对象数组

```javascript
let persons = {
  persons: [
    { name: 'tly', age: 21 },
    { name: 'tly', age: 21 }
  ]
}
```

## 2. 获取数据

### 1. person 获取 name 值

```javascript
person['name']
```

### 2. persons 获取一个值

```javascript
persons.persons['name']
```

## 3. JSON 数据和 Java 对象的相互转换

### 1. JSON 解析器：常见的解析器：

- Jsonlib，Gson，fastjson，**jackson**

### 2. JSON 转为 Java 对象

1. 导入 jackson 的相关 jar 包
2. 创建 Jackson 核心对象 ObjectMapper
3. 调用 ObjectMapper 的相关方法进行转换
   1. `readValue（json字符串数组，Class）`:

### 3. Java 对象转换 JSON

#### 1. 转换方法：

- `writeValue（参数1，obj）`:参数 1：File、Writer、OutputStream

- `writeValueAsString（obj）`:将对象转换为 json 字符串

#### 2. 注解：

1. `@JsonIgnore`：排除属性
2. `@JsonFormat`：属性值得格式化
   - `@JsonFormat(pattern = "yy-MM-dd")`

#### 3. 复杂 Java 对象转换

1. **List**：数组
2. **Map**：对象格式一致

```java
@Test
public void test1() {
    Person person = new Person();
    person.setName("tly");
    person.setAge(21);

    ObjectMapper mapper = new ObjectMapper();
    try {
        String s = mapper.writeValueAsString(person);
        System.out.println(s);
    } catch (JsonProcessingException e) {
        e.printStackTrace();
    }
}
```

## 3. 案例

### 1. 校验用户名是否存在

#### 1. 服务器响应的数据，在客户端使用时要想当作 **json** 数据格式使用

1. `$.get(type)`：将最后一个参数 type 修改为 **json**

2. 在服务器端设置 MIME 类型

   ```java
   response.setContentType("application/json; charset=utf-8");
   ```
