---
title: AJAX
date: 2022-3-22
categories:
  - Java 笔记
tags:
  - JavaScript
  - XML
  - AJAX
---

## 1. 概念：异步的 JavaScript 和 XML

### 1. 异步和同步：客户端和服务器端相互通信的基础上

- 客户端必须等待服务器端的响应。在等待期间客户端不能做其他操作。
- 客户端不需要等待服务器端的响应。在服务器处理请求的过程中，客户端可以进行其他操作。

## 2. 实现方式：

### 1. 原生的 JS 实现方式

```javascript
// 定义方法
function fun() {
  // 发送异步请求
  var xmlhttp
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest()
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  // 建立连接
  xmlhttp.open('GET', 'demo', true)

  xmlhttp.send()

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      alert(xmlhttp.responseText)
    }
  }
}
```

### 2. jQuery 实现方式

#### 1. `$.ajax()`

```javascript
function fun() {
  $.ajax({
    url: 'demo',
    type: 'POST',
    data: { username: 'tly', age: 23 },
    success: function (data) {
      alert(data)
    },
    error: function () {
      alert('error')
    },
    dataType: 'text'
  })
}
```

#### 2. `$.get()`：发送 get 请求

```javascript
function fun() {
  $.get(
    'demo',
    { username: '123' },
    function (data) {
      alert(data)
    },
    'text'
  )
}
```

#### 3. `$.post()`：发送 post 请求

```javascript
function fun() {
  $.post(
    'demo',
    { username: '123' },
    function (data) {
      alert(data)
    },
    'text'
  )
}
```
