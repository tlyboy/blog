---
title: NodeJS
date: 2022-3-22
categories:
  - 前端笔记
tags:
  - JavaScript
  - NodeJS
---

## 1. 初识 Node.js 与内置模块

### 目标

- 能够知道什么是 Node.js
- 能够知道 Node.js 可以做什么
- 能够说出 Node.js 中的 JavaScript 的组成部分
- 能够使用 fs 模块读写操作文件
- 能够使用 path 模块处理路径
- 能够使用 http 模块写一个基本的 web 服务器

### 1. 初识 Node.js

#### 1. 回顾与思考

##### 1. 已经掌握了哪些技术

HTML、CSS、JavaScript

##### 2. 浏览器中的 JavaScript 的组成部分

浏览器中的 JavaScript

- JS 核心语法
  - 变量、数据类型
  - 循环、分支、判断
  - 函数、作用域、this
  - etc...
- WebAPI
  - DOM 操作
  - BOM 操作
  - 基于 XMLHttpRequest 的 Ajax 操作
  - etc...

##### 3. **思考**：为什么 JavaScript 可以在浏览器中被执行

不同的浏览器使用不同的 JavaScript 解析引擎：

- Chrome 浏览器 => V8
- Firefox 浏览器=> OdinMonkey(奥丁猴)
- Safri 浏览器=> JSCore
- IE 浏览器=> Chakra(查克拉)
- etc...

其中，Chrome 浏览器的 V8 解析引擎性能最好!

##### 4. **思考**：为什么 JavaScript 可以操作 DOM 和 BOM

每个浏览器都**内置了** DOM、BOM 这样的 API 函数，因此，浏览器中的 JavaScript 才可以调用它们。

##### 5. 浏览器中的 JavaScript 运行环境

**运行环境**指的是**代码正常运行所需的必要环境**。

总结：

1. V8 引擎负责解析和执行 JavaScript 代码。
2. 内置 API 是由**运行环境**提供的特殊接口，**只能在所属的运行环境中被调用**。

###### 6. 思考：JavaScript 能否做后端开发

Java、Python、PHP

Node.js

#### 2. Node.js 简介

##### 1. 什么是 Node.js

Node.js® is a **JavaScript runtime** built on Chrome's V8 JavaScript engine.

**Node.js 是**一个基于 Chrome V8 引擎的 **JavaScript 运行环境**。

Node.js 的官网地址：[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)

##### 2. Node.js 中的 JavaScript 运行环境

::: warning 注意

- **浏览器是** JavaScript 的**前端运行环境**。（浏览器是客户端安装的软件）
- Node.js 是 JavaScript 的**后端运行环境**。（正常情况下，Nodejs 要安装到服务器上）
- Node.js 中**无法调用** DOM 和 BOM 等**浏览器内置 API**。

:::

##### 3. Node.js 可以做什么

Node.js 作为一个 JavaScript 的运行环境，仅仅提供了基础的功能和 API。然而，基于 Node.js 提供的这些基础功能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了 Node.js，可以让前端程序员胜任更多的工作和岗位：

1. 基于 Express 框架([http://www.expressjs.com.cn/](http://www.expressjs.com.cn/))，可以快速构建 Web 应用

2. 基于 Electron 框架([https://electronjs.org/](https://electronjs.org/))，可以构建跨平台的桌面应用

3. 基于 restify 框架([http://restify.com/](http://restify.com/))，可以快速构建 API 接口项目
4. 读写和操作数据库、创建实用的命令行工具辅助前端开发、etc...

总之：Node.js 是**大前端时代**的“大宝剑”，有了 Node.js 这个超级 buff 的加持，前端程序员的**行业竞争力**会越来越强！

##### 4. Node.js 好学吗

`好学！`

**会 JavaScript，就能够学会 Node.js！！！**

##### 5. Node.js 怎么学

浏览器中 JavaScript 学习路径：

JavaScript 基础语法 + 浏览器内置 API（DOM + BOM）+ 第三方库（jQuery、art、template 等）

Node.js 的学习路径：

`JavaScript 基础语法` + **Node.js 内置 API 模块**（fs、path、http 等） + **第三方 API 模块**（express、mysql 等）

#### 3. Node.js 环境的安装

如果希望通过 Node.js 来运行 Javascript 代码，则必须在计算机上安装 Node.js 环境才行。

安装包可以从 Node.js 的官网首页直接下载，进入到 Node.js 的官网首页（[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)），点 击绿色的按钮，下载所需的版本后，双击直接安装即可。

##### 1. 区分 **LTS** 版本和 **Current** 的不同

1. LTS 为长期稳定版、对于**追求稳定性**的**企业级项目**来说，推荐安装 LTS 版本的 Node.js。
2. Current 为新特性尝鲜版，对**热衷于尝试新特性**的用户来说，推荐安装 Current 版本的 Node.js。但是，Current 版本中可能存在隐藏的 Bug 或安全性漏洞，因此不推荐在企业级项目中使用 Current 版本的 Node.js。

##### 2. 查看已安装的 Node.js 版本号

打开`终端`，在终端输入命令 **node -v** 后，按下回车键，即可查看已安装的 Node.js 的版本号。

Windows 系统快速打开终端的方式：

使用快捷键（**Windows 徽标键 + R**）打开运行面板，输入 **cmd** 后直接回车，即可打开终端。

##### 3. 什么是终端

终端（英文：Terminal）是专门为开发人员设计的，**用于实现人机交互**的一种方式。

作为一门合格的程序员，我们有必要记一些**常用的终端命令**，来辅助我们更好的操作与使用计算机。

#### 4. 在 Node.js 环境中执行 JavaScript 代码

1. 打开终端
2. 输入 **node** `要执行的 js 文件的路径`

##### 1. 终端中的**快捷键**

在 Windows 的 powershell 或 cmd 终端中，我们可以通过如下快捷键，来提高终端的操作效率：

1. 使用 **↑** 键，可以快速定位到上一次执行的命令
2. 使用 **tab** 键，能够快速补全路径
3. 使用 **esc** 键，能够快速清空当前已输入的命令
4. 输入 **cls** 命令，可以清空终端

### 2. fs 文件系统模块

#### 1. 什么是 fs 文件系统模块

**fs 模块**是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

例如：

- `fs.readFile()` 方法，用来**读取**指定文件中的内容
- `fs.writeFile()` 方法，用来指向指定的文件中**写入**内容

如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它：

```javascript
const fs = require('fs')
```

#### 2. 读取指定文件中的内容

##### 1. fs.readFile() 的语法格式

使用 fs.readFile() 方法，可以读取指定文件中的内容，语法格式如下：

```javascript
fs.readFile(path[, options], callback)
```

参数解读：

- 参数 1：**必选**参数，字符串，表示文件的路径。
- 参数 2：可选参数，表示以什么**编码格式**来读取文件。
- 参数 3：**必选**参数，文件读取完成后，通过回调函数拿到读取的结果。

##### 2. fs.readFile() 的实例代码

以 utf8 的编码格式，读取指定文件的内容，并打印 err 和 datastr 的值：

```javascript
const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function (error, datastr) {
  console.log(error)
  console.log('---')
  console.log(datastr)
})
```

##### 3. 判断文件是否读取成功

可以判断 err 对象是否为 null，从而知晓文件读取的结果：

```javascript
const fs = require('fs')
fs.readFile('./files/1.txt', 'utf8', function (err, result) {
  if (err) {
    return console.log('文件读取失败！' + err.message)
  }
  console.log('文件读取成功，内容是：' + result)
})
```

#### 3. 向指定的文件中**写入内容**

##### 1. fs.writeFile() 的语法格式

使用 fs.writeFile() 方法，可以向指定的文件中写入内容，语法格式如下：

```javascript
fs.writeFile(file, data[, options], callback)
```

参数解读：

- 参数 1：**必选**参数，需要指定一个**文件路径的字符串**，表示文件的存放路径。
- 参数 2：**必选**参数，表示写入的内容。
- 参数 3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
- 参数 4：**必选**参数，文件写入完成后的回调函数。

##### 2. fs.writeFile() 的实例代码

向指定的文件路径中，写入文件内容：

```javascript
const fs = require('fs')
fs.writeFile('./files/2.txt', 'Hello Node.js', function (err) {
  console.log(err)
})
```

##### 3. 判断文件是否写入成功

可以判断 err 对象是否为 null，从而知晓文件写入的结果：

```javascript
const fs = require('fs')
fs.writeFile('./files/2.txt', 'Hello Node.js', function (err) {
  if (err) {
    return console.log('文件写入失败！' + err.message)
  }
  console.log('文件写入成功！')
})
```

#### 4. 练习 - 考试成绩整理

使用 fs 文件系统模块，将素材目录下 `成绩.txt` 中的考试数据，整理到 **成绩-ok.txt** 文件中。

整理前，`成绩.txt` 文件中的数据如下：

```
小红=99 小白=100 小黄=70 小黑=66 小绿=88
```

整理完成之后，希望得到的 **成绩-ok.txt** 文件中的数据格式如下：

```
小红：99
小白：100
小黄：70
小黑：66
小绿：88
```

##### 核心实现步骤

1. 导入需要的 fs 文件系统模块
2. 使用 **fs.readFile()** 方法，读取素材目录下的 `成绩.txt` 文件
3. 判断文件是否读取失败
4. 文件读取成功后，处理成绩数据
5. 将处理完成后的成绩数据，调用 **fs.writeFile()** 方法，写入到新文件 `成绩-ok.txt` 中

```javascript
const fs = require('fs')

fs.readFile('./files/成绩.txt', 'utf8', function (err, datastr) {
  if (err) {
    return console.log('读取文件失败' + err.message)
  }

  const arrOld = datastr.split(' ')
  const arrNew = []

  arrOld.forEach(item => {
    arrNew.push(item.replace('=', '：'))
  })

  const newStr = arrNew.join('\r\n')

  fs.writeFile('./files/成绩-ok.txt', newStr, function (err) {
    if (err) {
      return console.log('写入文件失败' + err.message)
    }
    console.log('成绩写入成功！')
  })
})
```

#### 5. fs 文件 模块 - 路径动态拼接的问题

在使用 fs 操作文件时，如果提供的路径操作是以 `./` 或 `../` 开头的**相对路径**时，很容易出现路径动态拼接错误的问题。

原因：代码在运行的时候，**会以执行 node 命令时所处的目录**，动态拼接出被操作文件的完整路径。

解决方案：在使用 fs 模块操作文件时，**直接提供完整的路径**，不要提供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题。

\_\_dirname 表示当前文件所处的目录

### 3. path 路径模块

#### 1. 什么是 path 路径模块

**path 模块**是 Node.js 官方提供的、用来**处理路径**的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

例如：

- `path.join()` 方法，用来**将多个路径片段拼接成一个完整的路径字符串**
- `path.basename()` 方法，用来从路径字符串中，将文件名解析出来

如果要在 JavaScript 代码中，使用 path 模块来处理路径，则需要使用如下的方式先导入它：

```javascript
const path = require('path')
```

#### 2. **path.join()** 的代码实例

使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串：

```javascript
const path = require('path')
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr) // 输入 \a\b\d\e

const pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2) // 输出 当前文件所处目录\files\1.txt
```

::: warning 注意

**今后凡是涉及到路径拼接的操作吗，都要使用 path.join() 方法进行处理**。不要直接使用 + 进行字符串的拼接。

:::

#### 3. 获取路径中的文件名

##### 1. path.basename() 的语法格式

使用 path.basename() 方法，可以获取路径的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：

```javascript
path.basename(path[, ext])
```

##### 2. path.basename() 的代码实例

使用 path.basename() 方法，可以从一个文件路径中，获取到文件的名称部分：

```javascript
const path = require('path')

const fpath = '/a/b/c/index.html' // 文件的存放路径
const fullName = path.basename(fpath)

console.log(fullName) // 输出 index.html

const nameWithoutExt = path.basename(fpath, '.html')

console.log(nameWithoutExt) // 输出 index
```

#### 4. 获取路径中的文件扩展名

##### 1. path.extname() 语法格式

使用 path.extname() 方法，可以获取路径中的扩展名部分，语法格式如下：

```javascript
path.extname(path)
```

参数解读：

- path \<string\> 必选参数，表示一个路径的字符串
- 返回：\<string\> 返回得到的扩展名字符串

##### 2. path.extname() 的代码示例

使用 path.extname() 方法，可以获取路径中的扩展名部分：

```javascript
const fpath = '/a/b/c/index.html' // 路径字符串

const fext = path.extname(fpath)
console.log(fext) // 输出 .html
```

#### 5. 综合案例 - 拆分 HTML 文件案例

##### 1. 案例要实现的功能

将 src 目录下的 index.html 页面，拆分成三个文件，分别是：

- index.css
- index.js
- index.html

并且将拆分出来的 3 个文件，存放到 dist 目录中。

##### 2. 案例的实现步骤

1. 创建两个正则表达式，分别用来匹配 \<style\> 和 \<script\> 标签
2. 使用 fs 模块，读取需要被处理的 HTML 文件
3. 自定义 resolveCSS 方法，来写入 index.css 样式文件
4. 自定义 resolveJS 方法，来写入 index.js 脚本文件
5. 自定义 resolveHTML 方法，来写入 index.html 文件

##### 3. 步骤 1 - 导入需要的模块并创建正则表达式

```javascript
// 1.1 导入 fs 文件系统模块
const fs = require('fs')
// 1.2 导入 path 文件系统模块
const path = require('path')

// 1.3 匹配 <style></style> 标签的正则
// 其中 \s 表示空白字符； \S 表示非空白字符； * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
// 1.4 匹配 <style></style> 标签的正则
const regScript = /<script>[\s\S]*<\/script>/
```

##### 3. 步骤 2 - 使用 fs 模块读取需要被处理的 html 文件

```javascript
// 2.1 读取需要被处理的 HTML 文件
fs.readFile(
  (path.join(__dirname), './src/index.html'),
  'utf8',
  (err, dataStr) => {
    // 2.2 读取 HTML 文件失败
    if (err) return console.log('读取 HTML 文件失败！' + err.message)

    //2.3 读取 HTML 文件成功后，调用对应的方法，拆解出 css、js 和 html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
  }
)
```

##### 3. 步骤 3 - 自定义 resolveCSS 方法

```javascript
// 3.1 处理 css 样式
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取页面中的 <style></style> 标签
  const r1 = regStyle.exec(htmlStr)
  // 3.3 将提取出来的样式字符串，做进一步的处理
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // 3.4 将提取出来的 css 样式，写入到 index.css 文件中
  fs.writeFile(path.join(__dirname, './dist/index.css'), newCSS, err => {
    if (err) return console.log('写入 CSS 样式文件失败！' + err.message)
    console.log('写入 CSS 样式文件成功！')
  })
}
```

##### 3. 步骤 4 - 自定义 resolveJS 方法

```javascript
// 4.1 处理 js 脚本
function resolveJS(htmlStr) {
  // 4.2 使用正则提取页面中的 <script></script> 标签
  const r2 = regScript.exec(htmlStr)
  // 4.3 将提取出来的脚本字符串，做进一步的处理
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  // 4.4 将提取出来的 js 脚本，写入到 index.js 文件中
  fs.writeFile(path.join(__dirname, './dist/index.js'), newJS, err => {
    if (err) return console.log('写入 JS 脚本文件失败！' + err.message)
    console.log('写入 JS 脚本文件成功！')
  })
}
```

##### 3. 步骤 5 - 自定义 resolveHTML 方法

```javascript
// 5.1 处理 html 文件
function resolveHTML(htmlStr) {
  // 5.2 使用字符串的 replace 方法，把内嵌的 <script> 和 </script> 标签，替换为外联的 <link> 和 <script> 标签
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
    .replace(regScript, '<script src="./index.js"></script>')
  // 5.3 将替换完之后的 html 代码，写入到 index.html 文件中
  fs.writeFile(path.join(__dirname, './dist/index.html'), newHTML, err => {
    if (err) return console.log('写入 HTML 页面文件成功！')
    console.log('写入 HTML 页面文件成功！')
  })
}
```

##### 4. 案例的**两个注意点**

1. fs.writeFile() 方法用来创建文件，不能用来创建路径
2. 直接调用 fs.writeFire() 写入同一个文件，新写入的文件会覆盖之前的旧内容

### 4. http 模块

#### 1. 什么是 http 模块

回顾：什么是`客户端`、什么是`服务器`？

在网络资源中，负责消费资源的电脑，叫做客户端；**负责对外提供网络资源**的电脑，叫做服务器。

**http 模块**是 Node.js 官方提供的、用来**创建 web 服务器**的模块。通过 http 模块提供的 `http.createServer()` 方法，就能吧一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

如果要希望使用 http 模块创建 Web 服务器，则需要先导入它：

```javascript
const http = require('http')
```

#### 2. 进一步理解 http 模块的作用

服务器和普通电脑的**区别**在于，服务器上安装了 **web 服务器软件**，例如：IIS、`Apache` 等。通过安装这些服务器软件，就能把一台普通的电脑变成一台 web 服务器。

在 Node.js 中，我们`不需要使用` IIS、Apache 等这些`第三方 web 服务器软件`。因此我们可以基于 Node.js 提供的 http 模块，**通过几行简单的代码，就能轻松的手写一个服务器软件**，从而对外提供 web 服务。

#### 3. 服务器相关的概念

##### 1. IP 地址

**IP 地址**就是互联网上**每台计算机的唯一地址**，因此 IP 地址具有唯一性。如果把“个人电脑”比作“一台电话”，那么“IP 地址”就相当于“电话号码”，只有在知道对方 IP 地址的前提下，才能与对应的电脑之间进行数据通信。

IP 地址的格式：通常用“`点分十进制`”表示成（**a.b.c.d**）的形式，其中，a, b, c, d 都是 0 ~ 255 之间的十进制整数：例如：用点分十进制表示的 IP 地址（192.168.1.1）

::: warning 注意

1. **互联网中每台 Web 服务器，都有自己的 IP 地址**，例如：大家可以在 Windows 的终端中运行 **ping** `www.baidu.com` 命令，即可查看到百度服务器的 IP 地址。
2. 在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入 127.0.0.1 这个 IP 地址，就能把自己的电脑当做一台服务器进行访问了。

:::

##### 2. **域名**和**域名服务器**

尽管 IP 地址能够唯一地标记网络上的计算机，但是 IP 地址是一长串数字，`不直观`，而且`不便于记忆`，于是人们又发明了另一套**字符型**的**地址方案**，即所谓的**域名（Domain Name）地址**。

`IP地址`和`域名`是**一一对应的关系**，这份对应关系存放在一种叫做**域名服务器**（DNS，Domain name server）的电脑中。使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，**域名服务器就是提供 IP 地址和域名之间的转换服务的服务器**。

::: warning 注意

1. 单纯使用 IP 地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便。
2. 在开发测试期间，**127.0.0.1** 对应的域名是 **localhost**，它们都代表我们自己的这台电脑，在使用效果上没有任何区别。

:::

##### 3. 端口号

计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你的手中。

同样的道理，在一台电脑中，可以运行成百上千 web 服务。每个 web 服务器都对应一个唯一的端口号。客户端发送过来的网络请求，通过端口号，可以被准确地交给**对应的 web 服务**进行处理。

::: warning 注意

1. 每个端口号不能同时被多个 web 服务占用。
2. 在实际应用中，URL 中的 **80 端口可以被省略**。

:::

#### 4. 创建最基本的 web 服务器

##### 1. 创建 web 服务器的基本步骤

1. 导入 http 模块
2. 创建 web 服务器实例
3. 为服务器绑定 **request** 事件，`监听客户端的请求`
4. 启动服务器

##### 2. 步骤 1 - 导入 http 模块

如果希望在自己电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块：

```javascript
const http = require('http')
```

##### 2. 步骤 2 - 创建 web 服务器实例

调用 **http.createServer()** 方法，即可快速创建一个 web 服务器实例：

```javascript
const server = http.createServer()
```

##### 2. 步骤 3 - 为服务器绑定 request 事件，即可监听客户端发送过来的网络请求：

```javascript
// 使用服务器实例的 .on() 方法，为服务器绑定一个 request 事件
server.on('request', (req, res) => {
  // 只要有客户端来请求我们自己的服务器，就会触发 request 事件，从而调用这个事件处理函数
  console.log('Someone visit our web server.')
})
```

##### 2. 步骤 4 - 启动服务器

调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例：

```javascript
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})
```

##### 3. **req** 请求对象

只要服务器接收到了客户端的请求，就会调佣通过 **server.on()** 为服务器绑定的 `request 事件处理函数`。

如果想在事件处理函数中，`访问与客户端相关的`**数据**`或`**属性**，可以使用如下的方式：

```javascript
server.on('request', (req, res) => {
  // req 是请求对象，它包含了与客户端相关的数据和属性，例如：
  // req.url 是客户端请求的 URL 地址
  // req.method 是客户端的 method 请求类型
  const str = `Your request url is ${req.url}, and request method is ${req.method}`
  console.log(str)
})
```

##### 4. **res** 响应对象

在服务器的 request 事件处理函数中，如果想`访问与服务器相关的`**数据**`或`**属性**，可以使用如下的方式：

```javascript
server.on('request', (req, res) => {
  // res 是响应对象，它包含了与服务器相关的数据和属性，例如：
  // 要发送到客户端的字符串
  const str = `Your request url is ${req.url}, and request method is ${req.method}`
  // res.end() 方法的作用：
  // 向客户端发送指定的内容，并结束这次请求的处理过程
  res.end(str)
})
```

##### 5. 解决**中文乱码**问题

当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动**设置内容的编码格式**：

```javascript
server.on('request', (req, res) => {
  // 发送的内容包含中文
  const str = `您请求的 url 地址是 ${req.url}，请求的 method 类型是 ${req.method}。`
  // 为了防止中文显示乱码的问题，需要设置响应头 Content-Type 的值为 text/html; charset=utf-8
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 把包含中文的内容，响应给客户端
  res.end(str)
})
```

#### 5. 根据不同的 url 响应不同的 html 内容

##### 1. 核心实现步骤

1. 获取**请求的 url 地址**
2. 设置**默认的响应内容**为 404 Not found
3. 判断用户请求的是否为 **/** 或 **/index.html** 首页
4. 判断用户的请求的是否为 **/about.html** 关于页面
5. 设置 **Content-Type 响应头**，防止中文乱码
6. 使用 **res.end()** 把内容响应给客户端

##### 2. 动态响应内容

```javascript
server.on('request', (req, res) => {
  const url = req.url // 1. 获取请求的 url 地址
  let content = '<h1>404 Not found!</h1>' // 2. 设置默认的内容为 404 Not found
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>' // 3. 用户请求的是首页
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>' // 4. 用户请求的是关于页面
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8') // 5. 设置 Content-Type 响应头，防止中文乱码
  res.end(content) // 6. 把内容发送给客户端
})
```

#### 6. 案例 - 实现 web 服务器

##### 1. 核心思路

把文件的`实际存放路径`，**作为**每个资源的`请求 url 地址`。

##### 2. 实现步骤

1. 导入需要的模块
2. 创建基本的 web 服务器
3. 将资源的请求 url 地址映射为文件的存放路径
4. 读取文件内容并响应给客户端
5. 优化资源的请求路径

##### 3. 步骤 1 - 导入需要的模块

```javascript
// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 模块
const fs = require('fs')
// 1.3 导入 path 模块
const path = require('path')
```

##### 3. 步骤 2 - 创建基本的 web 服务器

```javascript
// 2.1 创建 web 服务器
const server = http.createServer()

// 2.2 监听 web 服务器的 request 事件
server.on('request', (req, res) => {})

// 2.3 启动 web 服务器
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})
```

##### 3. 步骤 3 - 将资源的请求 url 地址映射为文件的存放路径

```javascript
// 3.1 获取到客户端请求的 url 地址
const url = req.url

// 3.2 把请求的 url 地址，映射为本地文件的存放路径
const fpath = path.join(__dirname, url)
```

##### 3. 步骤 4 - 读取文件的内容并响应给客户端

```javascript
// 4.1 根据"映射"过来的文件路径读取文件
fs.readFile(fpath, 'utf8', (err, dataStr) => {
  // 4.2 读取文件失败后，向客户端响应固定的"错误消息"
  if (err) return res.end('404 Not found')

  // 4.3 读取文件成功后，将"读取成功的内容"响应给客户端
  res.end(dataStr)
})
```

##### 3. 步骤 5 - 优化资源的请求路径

```javascript
// 将 3.2 的实现方式，改为如下代码：
// 5.1 预定义空白的文件存放路径
let fpath = ''
if (url === '/') {
  // 5.2 如果请求的路径是否为 / ，则手动指定文件的存放路径
  fpath = path.join(__dirname, './server/index.html')
} else {
  // 5.3 如果请求的路径部位 / ，则动态拼接文件的存放路径
  fpath = path.join(__dirname, './server', url)
}
```

## 2. 模块化

### 目标

- 能够说出模块化的好处
- 能够知道 CommonJS 规定了哪些内容
- 能够说出 Node.js 中模块的三大分类各自是什么
- 能够使用 npm 管理包
- 能够了解什么是规范的包结构
- 能够了解模块的加载机制

### 1. 模块化的基本概念

#### 1. 什么是模块化

**模块化**是解决一个`复杂问题`时，自顶向下逐层**把系统划分成若干模块的过程**。对于整个系统来说，`模块是可组合、分解和更换的单元`。

##### 1. 现实中的模块化

游戏机中的游戏卡

##### 2. 编程领域中的模块化

编程领域中的模块化，就是**遵守固定的规则**，把一个**大文件**拆成`独立并互相依赖`的**多个小模块**。

把代码进行模块化拆分的好处：

1. 提高了代码的**复用性**
2. 提高了代码的**可维护性**
3. 可实现**按需加载**

#### 2. 模块化规范

**模块化规范**就是对代码进行模块化的拆分与组合时，需要遵守哪些规则。

例如：

- 使用什么样的语法格式来`引用模块`
- 在模块中使用什么样的语法格式`向外暴露成员`

**模块化规范的好处**：大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己。

### 2. Node.js 中的模块化

#### 1. Node.js 中模块的分类

Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是：

- **内置模块**（内置模块是 Node.js 官方提供的，例如 fs、path、http 等）
- **自定义模块**（用户创建的每个 .js 文件，都是自定义模块）
- **第三方模块**（`由第三方开发出来的模块`，并非官方提供的内置模块，也不是用户创建的自定义模块，`使用前需要先下载`）

#### 2. **加载**模块

使用强大的 **require()** 方法，可以加载需要的`内置模块`、`用户自定义模块`、`第三方模块`进行使用。例如：

```javascript
// 1. 加载内置的 fs 模块
const fs = require('fs')

// 2. 加载用户自定义模块
const custom = require('./custom.js')

// 3. 加载第三方模块
const moment = require('moment')
```

::: warning 注意

使用 require() 方法加载其它模块时，会执行被加载模块中的代码。

:::

#### 3. Node.js 中的模块作用域

##### 1. 什么是**模块作用域**

**和函数作用域**类似，在自定义模块中定义的`变量`、`方法`等，**只能在当前模块内被访问**，这种**模块级别的访问限制**，叫做**模块作用域**。

##### 2. 模块作用域的**好处**

防止了全局变量污染的问题

#### 4. 向外共享模块作用域中的成员

##### 1. **module** 对象

在每个 .js 自定义模块中都有一个 module 对象，它里面**存储了和当前模块有关的信息**，打印如下：

##### 2. **module.exports** 对象

在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。

外界用 **require() 方法**导入自定义模块时，得到的就是 module.exports 所指向的对象。

##### 3. 共享成员时的**注意点**

使用 require() 方法导入模块时，导入的结果，**永远以 module.exports 指向的对象为准**。

##### 4. **exports 对象**

由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 `exports` 对象。**默认情况下，exports 和 module.exports 指向同一个对象**。最终共享的结果，还是以 module.exports 指向的对象为准。

##### 5. exports 和 module.exports 的使用误区

时刻谨记，require() 模块时，得到的永远是 **module.exports** 指向的对象：

#### 5. Node.js 中的模块化规范

Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了**模块的特性**和**各模块之间如何相互依赖**。

CommonJS 规定：

1. 每个模块内部，**module 变量**代表当前模块。
2. module 变量是一个对象，它的 exports 属性（即 **module.exports**）**是对外的接口**。
3. 加载某个模块，其实是加载该模块的 module.exports 属性。**require() 方法用于加载模块**。

### 3. npm 与包

#### 1. 包

##### 1. 什么是包

Node.js 中的**第三方模块**又叫做**包**。

就像`电脑`和`计算机`指的是相同的东西。`第三方模块`和`包`指的是同一个概念，只不过叫法不同。

##### 2. 包的来源

不同于 Node.js 中的内置模块与自定义模块，**包是由第三方个人或团队开发出来的**，免费供所有人使用。

::: warning 注意

Node.js 中的包都是免费且开源的，不需要付费即可免费下载使用。

:::

##### 3. 为什么需要包

由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发时，效率很低。

**包是基于内置模块封装出来的**，提供了更高级、更方便的 API，**极大的提高了开发效率**。

**包**和`内置模块`之间的关系，类似于 **jQuery** 和`浏览器内置API`之间的关系。

##### 4. 从哪里下载包

国外有一家 IT 公司，叫做 **npm, Inc.** 这家公司旗下有一个非常著名的网站：[https://www.npmjs.com/](https://www.npmjs.com/)，它是**全球最大的包共享平台**，你可以从这个网站上搜索到任何你需要的包，只要你有足够的耐心！

到目前为止，全球约 `1100 多万`开发人员，通过这个包共享平台，开发并共享超过 `120 多万个包`供我们使用。

**npm, Inc. 公司**提供了一个地址为 [https://registry.npmjs.org/](https://registry.npmjs.org/) 的服务器，来对外共享所有的包，我们可以从这个服务器上下载自己所需要的包。

::: warning 注意

- 从 [https://www.npmjs.com/](https://www.npmjs.com/) 网站上搜索自己所需要的包
- 从 [https://registry.npmjs.org/](https://registry.npmjs.org/) 服务器上下载自己需要的包

:::

##### 5. 如何下载包

**npm, Inc. 公司**提供了一个包管理工具，我们使用这个包管理工具，从 [https://registry.npmjs.org/](https://registry.npmjs.org/) 服务器把需要的包下载到本地使用。

这个包管理工具名字叫做 `Node Package Manager`（简称 npm **包管理工具**），这个包管理工具随着 Node.js 的安装包一起被安装到了用户的电脑上。

大家可以在终端中执行 **npm -v** 命令，来查看自己电脑上所安装的 npm 包管理工具的版本号：

#### 2. npm 初体验

##### 1. 格式化时间的传统做法

1. 创建格式化时间的自定义模块
2. 定义格式化时间的方法
3. 创建补零函数
4. 从自定义模块中导出格式化时间的函数
5. **导入格式化时间的自定义模块**
6. **调用格式化时间的函数**

##### 2. 格式化时间的高级做法

1. **使用 npm 包管理工具，在项目中安装格式化时间的包 moment**
2. 使用 require() 导入格式化时间的包
3. 参考 moment 的官方 API 文档对时间进行格式化

```javascript
// 1. 导入 moment 包
const moment = require('moment')

// 2. 参考 moment 官方 API 文档，调用对应的方法，对时间进行格式化
// 2.1 调用 moment() 方法，得到当前的时间
// 2.2 针对文档的时间，调用 format() 方法，安装指定的格式进行时间的格式化
const dt = moment().format('YYYY-MM-DD HH:mm:ss')

console.log(dt) // 输出 2020-01-12 17:23:48
```

##### 3. 在项目中按照包的命令

如果想在项目中按照指定名称的包，需要运行如下的命令：

```bash
$ npm install 包的完整名称
```

上诉的装包命令，可以简写成如下格式：

```bash
$ npm i 完整的包名称
```

##### 4. 初次装了包后**多了哪些文件**

初次装完包后，在项目文件夹下多了一个叫做 **node_modules** 的文件夹和 **package-lock.json** 的配置文件。

其中：

`node_modules 文件夹`用来**存放所有已安装到项目中的包**。require() 导入第三方包时，就是这个目录中查找并加载包。

`package-lock.json 配置文件`用来**记录 node_modules 目录下的每一个包的下载信息**，例如包的名字、版本号、下载地址等。

##### 5. 安装指定版本的包

默认情况下，使用 npm install 命令安装包的时候，**会自动安装最新版本的包**。如果需要安装指定版本的包，可以在包名之后，通过 **@ 符号**指定具体的版本，例如：

```bash
$ npm i moment@2.22.2
```

##### 6. 包的**语义化版本规范**

包的版本是以“点分十进制”形式进行定义的，总共有三位数字，例如 **2.24.0**

其中每一位数字所代表的含义如下：

第 1 位数字：**大版本**

第 2 位数字：`功能版本`

第 3 位数字：Bug 修复版本

**版本号提升的规则**：只要前面的版本号增长了，则后面的版本号**归零**。

#### 3. 包管理配置文件

npm 规定，在**项目根目录**中，**必须**提供一个叫做 **package.json** 的包管理配置文件。用来记录与项目有关的一些配置信息。例如：

- 项目的名称、版本号、描述等
- 项目中都用到了哪些包
- 哪些包只在**开发期间**会用到
- 哪些包在**开发**和**部署**时需要用到

##### 1. 多人协作的问题

整个项目的体积是 30.4M

第三方包的体积是 **28.8M**

项目源代码的体积 `1.6M`

遇到的问题：**第三方包的体积过大**，不方便团队成员之间共享项目源代码。

##### 2. 如何记录项目中安装了哪些包

在**项目根目录**中，创建一个叫做 **package.json** 的项目配置文件，即可用来记录项目中安装了哪些包。从而方便剔除 node_modules 目录之后，在团队成员之间共享项目的源代码。

::: warning 注意

今后在项目开发中，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中。

:::

##### 3. 快速创建 package.json

npm 包管理工具提供了一个**快捷命令**，可以在**执行命令时所处的目录中**，快速创建 package.json 这个包管理配置文件：

```bash
# 作用：在执行命令所在处的目录中，快速新建 package.json 文件
$ npm init -y
```

注意：

1. 上述命令**只能在英文的目录下成功运行**！所以，项目文件夹一定要用英文命名，**不要使用中文**，**不能出现空格**。
2. 运行 npm install 命令安装包的时候，npm 包的时候，npm 包管理工具会自动把**包的名称**和**版本号**，记录到 package.json 中。

##### 4. **dependencies** 节点

package.json 文件中，有一个 **dependencies** 节点，专门用来记录您使用 npm install 命令安装了哪些包。

##### 5. **一次性**安装所有的包

当我们拿到了一个剔除了 **node_modules** 的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来。

否则会报类似于下面的错误：

```bash
# 由于项目运行依赖于 moment 这个包，如果没有提前安装好这个包，就会报如下的错误：
Error: Cannot find module 'moment'
```

可以运行 **npm install** 命令（或 `npm i`）一次性安装所有的依赖包：

```bash
# 执行 npm install 命令时，npm 包管理工具会先读取 package.json 中的 dependencies 节点，
# 读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性下载到项目中
$ npm install
```

##### 6. 卸载包

可以运行 **npm uninstall** 命令，来卸载指定的包：

```bash
# 使用 npm uninstall 具体的包名 来卸载包
$ npm uninstall moment
```

::: warning 注意

npm uninstall 命令执行成功后，会把卸载的包，自动从 package.json 的 dependencies 中移除掉。

:::

##### 7. **devDependencies** 节点

如果某些包**只在项目开发阶段**会用到，在**项目上线之后不会用到**，则建议把这些包记录到 devDependencies 节点中。

与之对应的，如果某些包在`开发`和`项目上线之后`都需要用到，则建议把这些包记录到 dependencies 节点中。

您可以使用如下的命令：将包记录到 devDependencies 节点中：

```bash
# 安装指定的包，并记录到 devDependencies 节点中
$ npm i 包名 -D
# 注意：上述命令是简写形式，等价于下面完整的写法：
$ npm install 包名 --save-dev
```

#### 4. 解决下包速度慢的问题

##### 1. 为什么下包速度慢

在使用 npm 下包的时候，默认从国外的 [https://registry.npmjs.org/](https://registry.npmjs.org/) 服务器进行下载，此时，网络的传输要经过漫长的海底光缆，因此下包速度会很慢。

扩展阅读 - 海底光缆：

- [https://baike.baidu.com/item/%E6%B5%B7%E5%BA%95%E5%85%89%E7%BC%86/4107830](https://baike.baidu.com/item/%E6%B5%B7%E5%BA%95%E5%85%89%E7%BC%86/4107830)
- [https://baike.baidu.com/item/%E4%B8%AD%E7%BE%8E%E6%B5%B7%E5%BA%95%E5%85%89%E7%BC%86/10520363](https://baike.baidu.com/item/%E4%B8%AD%E7%BE%8E%E6%B5%B7%E5%BA%95%E5%85%89%E7%BC%86/10520363)
- [https://baike.baidu.com/item/APG/23647721?fr=aladdin](https://baike.baidu.com/item/APG/23647721?fr=aladdin)

##### 2. 淘宝 NPM 镜像服务器

淘宝在国内搭建了一个服务器，专门把国外官方服务器上的包**同步**到国内的服务器，然后再国内提供下包的服务，从而极大的提高了下包的速度。

扩展：

**镜像**（Mirroring）是一种文件存储形式，一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像。

##### 3. **切换** npm 的下载镜像源

下包的镜像源，指的就是**下包的服务器地址**。

```bash
# 查看当前的下包镜像源
$ npm config get registry
# 将下包的镜像源切换为淘宝镜像源
$ npm config set registry=https://registry.npm.taobao.org/
# 检查镜像源是否下载成功
$ npm config get registry
```

##### 4. nrm

为了更方便的切换下包的镜像源，我们可以安装 **nrm** 这个小工具，利用 nrm 提供的终端命令，可以快速查看和切换下包镜像源。

```bash
# 通过 npm 包管理器，将 nrm 安装为全局可用的工具
$ npm i nrm -g
# 查看所有可用的镜像源
$ nrm ls
# 将下包的镜像源切换为 taobao 镜像
$ nrm use taobao
```

#### 5. 包的分类

##### 1. 项目包

那些被安装到**项目**的 `node_modules 目录`中的包，都是项目包。

项目包又分为两类，分别是：

- **开发依赖包**（被记录到 `devDependencies` 节点中的包，只在开发期间会用到）
- **核心依赖包**（被记录到 `dependencies` 节点中的包，在开发期间和项目上线之后都会用到）

```bash
$ npm i 包名 -D # 开发依赖包（会被记录到 devDependencies 节点下）
$ npm i 包名 # 核心依赖包（会被记录到 dependencies 节点下）
```

##### 2. 全局包

在执行 npm install 命令时，如果提供了 -**g** 参数，则会把包安装为**全局包**。

全局包会被安装到 `C:\Users\TLY\AppData\Roaming\npm\node_modules` 目录下。

::: warning 注意

1. 只有**工具性质的包**，才有全局安装的必要性。因为它们提高了好用的终端命令。
2. 判断某个包是否需要全局安装后才能使用，可以**参考官方提供的使用说明**即可。

:::

##### 3. i5ting_toc

i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具，使用步骤如下：

```bash
# 将 i5ting_toc 安装为全局包
$ npm install -g i5ting_toc
# 调用 i5ting_toc，轻松实现 md 转 html 的功能
$ i5ting_toc -f 要转换的 md 文件路径 -o
```

#### 6. 规范的包结构

在清除了包的概念、以及如何下载使用包之后，接下来，我们深入了解一下**包的内部结构**。

一个规范的包，它的组成结构，必须符合以下 3 点要求：

1. 包必须以**单独的目录**而存在
2. 包的顶级目录下要必须包含 **package.json** 这个包管理配置文件
3. package.json 中必须包含 **name**，**version**，**main** 这三个属性，分别代表`包的名字`、`版本号`、`包的入口`。

::: warning 注意

以上 3 点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考如下网址：

[https://yarn.bootcss.com/docs/package-json](https://yarn.bootcss.com/docs/package-json)

:::

#### 7. 开发属于自己的包

##### 1. 需要实现的功能

1. **格式化日期**
2. **转义** HTML 中的**特殊字符**
3. **还原** HTML 中的**特殊字符**

```javascript
// 1. 导入自己的包
const guanyUtils = require('guany-utils')

// 功能1：格式化日期
const dt = guanyUtils.dataFormat(new Date())

// 输出 2020-01-20 10:09:45
console.log(dt)
```

```javascript
// 1. 导入自己的包
const guanyUtils = require('guany-utils')

// 功能2：转义 HTML 中的特殊字符
const htmlStr = '<h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>'
const str = guanyUtils.htmlEscape(htmlStr)
// &lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

```javascript
// 1. 导入自己的包
const guanyUtils = require('guany-utils')

// 功能3：还原 HTML 中的特殊字符
const rawStr = guanyUtils.htmlUnEscape(str)
// 输出 <h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>
console.log(rawStr)
```

##### 2. 初始化的基本结构

1. 新建项目文件夹，作为**包的根目录**
2. 在 guany-tools 文件夹中，新建如下三个文件：
   - package.json（包管理配置文件）
   - index.js（包的入口文件）
   - README.md（包的说明文档）

##### 3. 初始化 package.json

```json
{
    "name": "guany-tools",
    "version": "1.0.0",
    "main": "index.js",
    "description": "提供了格式化时间，HTMLEscape的功能",
    "keywords":["guany","dataFormat","escape"]
    "license": "ISC"
}
```

##### 4. 在 index.js 中定义格式化时间的方法

```javascript
// 格式化时间的方法
function dataFormat(dataStr) {
  /* 省略其余代码 */
}

// 补零的方法
function padZero(n) {
  return n > 9 ? n : '0' + n
}

module.exports = {
  dataFormat
}
```

##### 5. 在 index.js 中定义转义 HTML 的方法

```javascript
function htmlEcape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, match => {
    switch (match) {
      case '<':
        return '&gtl;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}
```

##### 6. 在 index.js 中定义还原 HTML 的方法

```javascript
function htmlUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}
```

##### 7. 将不同的功能进行模块化的拆分

1. 将格式化时间的功能，拆分到 src -> **dataFormat.js** 中
2. 将处理 HTML 字符串的功能，拆分到 src -> **htmlEcape.js** 中
3. 在 index.js 中，导入两个模块，得到需要向外共享的方法
4. 在 index.js 中，使用 module.exports 把对应的方法共享出去

##### 8. 编写包的说明文档

包根据目录中的 **README.md** 文件，是**包的使用说明文档**。通过它，我们可以事先把包的使用说明，以 markdown 的格式写出来，方便用户参考。

RAEDME 文件中具体写什么内容，没有强制性的要求，只要能够清晰的地把包的作用、用法、注意事项等描述清除即可。

我们所创建的这个包的 README.md 文档中，会包含以下 6 项内容：

安装方式、导入方式、格式化时间、转义 HTML 中的特殊字符、还原 HTML 中的特殊字符、开源协议

#### 8. 发布包

##### 1. 注册 npm 账号

1. 访问 [https://www.npmjs.com/](https://www.npmjs.com/) 网站，点击 **sign up** 按钮，进入注册用户界面
2. 填写账号相关的信息：Full Name、**Public Email**、**Username**、**Password**
3. 点击 **Create an Account** 按钮，注册账号

##### 2. 登录 npm 账号

npm 账号注册完成后，可以在终端中执行 **npm login** 命令，依次输入用户名、密码、邮箱后，即可登录成功。

::: warning 注意

在运行 npm login 命令之前，必须先把**下包的服务器**地址切换为 **npm 的官方服务器**。否则会导致发布包失败！

:::

##### 3. 把包发布到 npm 上

将终端切换到包的根目录之后，运行 **npm publish** 命令，即可将包发布到 npm 上（注意：**包名不能雷同**）。

##### 4. 删除已发布的包

运行 **npm unpublish** `包名` **--force** 命令，即可从 npm 删除已发布的包。

::: warning 注意

1. npm unpublish 命令只能删除 **72 小时以内**发布的包
2. npm unpublish 删除的包，在 **24 小时内**不允许重复发布
3. 发布包的时候要慎重，**尽量不要往 npm 上发布没有意义的包**！

:::

### 4. 模块的加载机制

#### 1. 优先从缓存中加载

**模块在第一次加载后会被缓存**。这也意味着多次调用 `require()` 不会导致模块的代码被执行多次。

::: warning 注意

不论是内置模块、用户自定义模块、还是第三方模块，它们都会从优先从缓存中加载，从而**提高模块的加载效率**。

:::

#### 2. **内置模块**的加载机制

内置模块是由 Node.js 提供的模块，**内置模块的加载优先级最高**。

例如，require('fs') 始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs。

#### 3. **自定义模块**的加载机制

使用 require() 加载自定义模块时，必须指定以 `./` 或 `../` 开头的**路径标识符**。在加载自定义模块时，如果没有指定 ./ 或 ../ 这样的路径标识符，则 node 会把它当做`内置模块`或`第三方模块`进行加载。

同时，在使用 require() 导入自定义模块时，如果省略了文件的扩展名，则 Node.js 会**按顺序**分别尝试加载以下的文件：

1. 安装**确切的文件名**进行加载
2. 补全 **.js** 扩展名进行加载
3. 补全 **.json** 扩展名进行加载
4. 补全 **.node** 扩展名进行加载
5. 加载失败，终端报错

#### 4. **第三方模块**的加载机制

如果传递给 require() 的模块标识符不是一个内置模块，也没有以 './' 或 '../' 开头，则 Node.js 会从当前模块的父目录开始，尝试从 /node_modules 文件夹中加载第三方模块。

**如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。**

例如，假设在 **C:\\Users\\itheima\\project**\\foo.js 文件里调用了 `require('tools')`，则 Node.js 会按以下顺序查找：

1. **C:\\Users\\itheima\\project\\**`node_modules\`tools
2. **C:\\Users\\itheima\\**`node_modules\`tools
3. **C:\\Users\\**`node_modules\`tools
4. **C:\\**`node_modules\`tools

#### 5. **目录**作为模块

当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：

1. 在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
2. 如果目录里面没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会视图加载目录下的 **index.js 文件**。
3. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error: Cannot find module 'xxx'

## 3. Express

### 目标

- 能够使用 express.static() 快速托管静态资源
- 能够使用 express 路由精简项目结构
- 能够使用常见的 express 中间件
- 能够使用 express 创建 API 接口
- 能够在 express 中启用 cors 跨域资源共享

### 1. 初识 Express

#### 1. Express 简介

##### 1. 什么是 Express

官方给出的概念：Express 是**基于 Node.js 平台**，`快速`、`开放`、`极简`的 **Web 开发框架**。

通俗的理解：Express 的作用和 Node.js 内置的 http 模块类似，**是专门用来创建 Web 服务器的**。

**Express 的本质**：就是一个 npm 上的第三方包，提高了快速创建 Web 服务器的便捷方法。

Express 的中文官网：[https://www.expressjs.com.cn/](https://www.expressjs.com.cn/)

##### 2. 进一步理解 Express

**思考**：不使用 Express 能否创建 Web 服务器？

`答案`：能，使用 Node.js 提供的原生 http 模块即可。

<br>

**思考**：既生瑜何生亮（有了 http 模块，为什么还要用 Express？）

`答案`：http 内置模块使用起来很复杂，开发效率低；Express 是基于内置的 http 模块进一步封装出来的，能够极大的提高开发效率。

<br>

**思考**：http 内置模块与 Express 是什么关系？

`答案`：类似于浏览器中 Web API 和 jQuery 的关系。后者是基于前者进一步封装出来的。

##### 3. Express 能做什么

对于前端程序员来说，最常见的`两种`服务器，分别是：

- **Web 网站服务器**：专门对外提供 Web 网页资源的服务器。
- **API 接口服务器**：专门对外提供 API 接口的服务器。

使用 Express，我们可以方便、快速的创建 `Web 网站`的服务器或 `API 接口`的服务器。

#### 2. Express 的基本使用

##### 1. 安装

在项目所处的目录中，运行如下的终端命令，即可将 express 安装到项目中使用：

```bash
$ npm i express
```

##### 2. 创建基本的 Web 服务器

```javascript
// 1. 导入 express
const express = require('express')

// 2. 创建 web 服务器
const app = express()

// 3. 调用 app.listen(端口号, 启动成功后的回调函数)，启动服务器
app.listen(80, () => {
  console.log('express server running at http:127.0.0.1')
})
```

##### 3. 监听 **GET 请求**

通过 app.get() 方法，可以监听客户端的 GET 请求，具体语法格式如下：

```javascript
// 参数1：客户端请求的 URL 地址
// 参数2：请求对应的处理函数
// req：请求对象（包含了与请求相关的属性与方法）
// res：响应对象（包含了与响应相关的属性与方法）
app.get('请求 URL', function (req, res) {
  /* 处理函数 */
})
```

##### 4. 监听 **POST 请求**

通过 app.post() 方法，可以监听客户端的 POST 请求，具体的语法格式如下：

```javascript
// 参数1：客户端请求的 URL 地址
// 参数2：请求对应的处理函数
// req：请求对象（包含了与请求相关的属性与方法）
// res：响应对象（包含了与响应相关的属性与方法）
app.post('请求 URL', function (req, res) {
  /* 处理函数 */
})
```

##### 5. 把内容**响应**给客户端

通过 **res.send()** 方法，可以把处理好的内容，发送给客户端：

```javascript
app.get('/user', (req, res) => {
  // 向客户端发送 JSON 对象
  res.send({ name: 'zs', age: 20, gender: '男' })
})

app.post('/user', (req, res) => {
  // 向客户端发送文本内容
  res.send('请求成功')
})
```

##### 6. 获取 URL 中携带的查询参数

通过 **req.query** 对象，可以访问到客户端通过**查询字符串**的形式，发送到服务器的参数：

```javascript
app.get('/', (req, res) => {
  // req.query 默认是一个空对象
  // 客户端使用 ?name=zs%age=20 这种查询字符串形式，发送到服务器的参数，
  // 可以通过 req.query 对象访问到，例如：
  // req.query.name req.query.age
  console.log(req.query)
})
```

##### 7. 获取 URL 中的**动态参数**

通过 **req.params** 对象，可以访问到 URL 中，通过 **:** 匹配到的**动态参数**：

```javascript
// 在 URL 地址中，可以通过 : 参数名 的形式，匹配动态参数值
app.get('/user/:id', (req, res) => {
  // req.params 默认是一个空对象
  // 里面存放着通过 : 匹配到的参数值
  console.log(req.params)
})
```

#### 3. 托管静态资源

##### 1. express.static()

express 提供了一个非常好用的函数，叫做 **express.static()**，通过它，我们可以**非常方便地创建**一个**静态资源服务器**，例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：

```javascript
app.use(express.static('public'))
```

现在，你就可以访问 public 目录中的所有文件了：

http://localhost:3000`/images/bg.jpg`

http://localhost:3000`/css/style.css`

http://localhost:3000`/js/login.js`

::: warning 注意

Express 在**指定的**静态目录中查找文件，并对外提供资源的访问路径。因此，**存放静态文件的目录名不会出现在 URL 中**。

:::

##### 2. 托管多个静态资源目录

如果要托管多个静态资源目录，请多次调用 express.static() 函数：

```javascript
app.use(express.static('public'))
app.use(express.static('files'))
```

访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件。

##### 3. 挂载**路径前缀**

如果希望在托管的**静态资源访问路径**之前，**挂载路径前缀**，则可以使用如下的方式：

```javascript
app.use('/public', express.static('public'))
```

#### 4. nodemon

##### 1. 为什么要是用 nodemon

在编写调式 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐。

现在，我们可以使用 nodemon（[https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)）这个工具，它能够**监听项目文件的变动**，当代码被修改后，nodemon 会**自动帮我们重启项目**，极大方便了开发和调式。

##### 2. 安装 nodemon

在终端中，运行如下命令，即可将 nodemon 安装为全局可用的工具：

```bash
$ npm install -g nodemon
```

### 2. Express 路由

#### 1. 路由的概念

##### 1. 什么是路由

广义上来讲，路由就是**映射关系**。

##### 2. 现实生活中的路由

运营商的电话服务按键（业务办理请按 1，宽带办理请按 2……）

在这里，路由是`按键`与`服务`之间的**映射关系**

##### 3. Express 中的路由

在 Express 中，路由指的是**客户端的请求**与**服务器处理函数**之间的`映射关系`。

Express 中的路由分 3 部分组成，分别是**请求的类型**、**请求的 URL 地址**、**处理函数**，格式如下：

```javascript
app.METHOD(PATH, HANDLER)
```

##### 4. Express 中路由的例子

```javascript
// 匹配 GET 请求，且请求 URL 为 /
app.get('/', function (req, res) {
  res.send('hello world!')
})

// 匹配 POST 请求，且请求 URL 为 /
app.get('/', function (req, res) {
  res.send('Got a POST request')
})
```

##### 5. 路由的匹配过程

每当一个请求到达服务器之后，**需要先经过路由的匹配**，只有匹配成功之后，才会调用对应的处理函数。

在匹配时，会按照路由的顺序进行匹配，如果**请求类型**和**请求的 URL** 同时匹配成功，则 Express 会将这次请求，转交给对应的 function 函数进行处理。

::: warning 注意

1. 按照定义的**先后顺序**进行匹配
2. **请求类型**和**请求的 URL** 同时匹配成功，才会调用对应的处理函数

:::

#### 2. 路由的使用

##### 1. 最简单的用法

在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上，示例代码如下：

```javascript
const express = require('express')
// 创建 Web 服务器，命名为 app
const app = express()

// 挂载路由
app.get('/', (req, res) => {
  res.send('Hello world.')
})

app.post('/', (req, res) => {
  res.send('Post Request.')
})

// 启动 Web 服务器
app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
```

##### 2. **模块化**路由

为了`方便对路由进行模块化的管理`，Express **不建议**将路由直接挂载到 app 上，而是**推荐将路由抽离为单独的模块**。

将路由抽离为单独模块的步骤如下：

1. 创建路由模块对应的 .js 文件
2. 调用 **express.Router()** 函数创建路由对象
3. 向路由对象上挂载具体的路由
4. 使用 **modules.exports** 向外共享路由对象
5. 使用 **app.use()** 函数注册路由模块

##### 3. 创建路由模块

```javascript
const express = require('express') // 1. 导入 express

const router = express.Router() // 2. 创建路由对象

router.get('/user/list', function (req, res) {
  // 3. 挂载获取用户列表的路由
  res.send('Get user list.')
})

router.post('/user/add', function (req, res) {
  // 4. 挂载添加用户的路由
  res.send('Add new user.')
})

module.exports = router // 5. 向外导出路由对象
```

##### 4. 注册路由模块

```javascript
// 1. 导入路由模块
const userRouter = require('./router/user')

// 2. 使用 app.use() 注册路由模块
app.use(userRouter)
```

##### 5. 为路由模块**添加前缀**

类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单：

```javascript
// 1. 导入路由模块
const userRouter = require('./router/user')

// 2. 使用 app.use() 注册路由模块，并添加统一的访问前缀 /api
app.use('/api', userRouter)
```

### 3. Express 中间件

#### 1. 中间件的概念

##### 1. 什么是中间件

中间件（Middleware），特指`业务流程`的**中间处理环节**。

##### 2. 现实生活中的例子

在处理污水的时候，一般都要经过**三个处理环节**，从而保证处理过后的废水，达到排放标准。

处理污水的这三个中间处理环节，就可以叫做中间件。

##### 3. Express 中间件的**调用流程**

当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行**预处理**。

##### 4. Express 中间件的**格式**

Express 的中间件，**本质**上就是一个 **function 处理函数**，Express 中间件的格式如下：

```javascript
const express = require('express')

const app = express()

app.get('/', function (req, res, next) {
  next()
})

app.listen(3000)
```

::: warning 注意

中间件函数的形参列表中，**必须包含 next 参数**。而路由处理函数中只包含 req 和 res。

:::

##### 5. next 函数的作用

**next 函数**是实现**多个中间件连续调用**的关键，它表示把流转关系**转交**给下一个`中间件`或`路由`。

#### 2. Express 中间件的初体验

##### 1. **定义**中间件函数

可以通过如下的方式，定义一个简单的中间件函数：

```javascript
// 常量 mw 所指向的，就是一个中间件函数
const mw = function (req, res, next) {
  console.log('这是一个简单的中间件函数')
  // 注意：在当前中间件的业务处理完毕后，必须调用 next() 函数
  // 表示把流转关系交给下一个中间件或路由
  next()
}
```

##### 2. **全局生效**的中间件

客户端发起的**任何请求**，到达服务器之后，**都会触发的中间点**，叫做全局生效的中间件。

通过调用 **app.use(`中间件函数`)**，即可定义一个**全局生效**的中间件，示例代码如下：

```javascript
// 常量 mw 所指向的，就是一个中间件函数
const mw = function (req, res, next) {
  console.log('这是一个简单的中间件函数')
  next()
}

// 全局生效的中间件
app.use(mw)
```

##### 3. 定义**全局中间件**的`简化形式`

```javascript
// 全局生效的中间件
app.use(function (req, res, next) {
  console.log('这是一个简单的中间件函数')
  next()
})
```

##### 4.中间件的**作用**

多个中间件之间，**共享同一份 `req` 和 `res`**。基于这样的特性。我们可以在**上游**的中间件中，**统一**为 req 或 res 对象添加`自定义`的`属性`或`方法`，供**下游**的中间件或路由进行使用。

##### 5. 定义**多个**全局中间件

可以使用 app.use() **连续定义多个**全局中间件。客户端请求到达服务器之后，会按照中间件**定义的先后顺序**依次进行调用，示例代码如下：

```javascript
app.use(function (req, res, next) {
  // 第1个全局中间件
  console.log('调用了第1个中间件')
  next()
})

app.use(function (req, res, next) {
  // 第2个全局中间件
  console.log('调用了第2个中间件')
  next()
})

app.get('/user', (req, res) => {
  // 请求这个路由，会依次触发上述两个全局中间件
  res.send('Home page.')
})
```

##### 6. **局部生效**的中间件

**不使用** `app.use()` 定义的中间件叫做**局部生效的中间件**，示例代码如下：

```javascript
// 定义中间件函数 mw1
const mw1 = function (req, res, next) {
  console.log('这是中间件函数')
  next()
}

// 这个中间件只在"当前路由中生效"，这种用法属于"局部生效的中间件"
app.get('/', mw1, function (req, res) {
  res.send('Home page.')
})

// mw1 这个中间件不会影响下面这个路由
app.get('/user', function (req, res) {
  res.send('User page.')
})
```

##### 7. 定义**多个**局部中间件

可以在路由中，通过如下两种**等价**的方式，**使用多个局部中间件**：

```javascript
// 以下两种写法是"完全等价"的，可根据自己的喜好，选择任意一种方式进行使用
app.get('/', mw1, mw2, function (req, res) {
  res.send('Home page.')
})

app.get('/', [mw1, mw2], function (req, res) {
  res.send('Home page.')
})
```

##### 8. 了解中间件的**5 个使用注意事项**

1. 一定要在**路由之前**注册中间件
2. 客户端发送过来的请求，**可以连续调用多个**中间件进行处理
3. 执行完中间件的业务代码之后，**不要忘记调用 next() 函数**
4. 为了**防止代码逻辑混乱**，调用 next() 函数以后不要再写额外的代码
5. 连续调用多个中间件时，多个中间件之间，**共享** req 和 res 对象

#### 3. 中间件的分类

为了方便大家**理解**和**记忆**中间件的使用，Express 官方把**常见的中间件用法**，分成了 **5 大类**，分别是：

1. **应用级别**的中间件
2. **路由级别**的中间件
3. **错误级别**的中间件
4. **Express 内置**的中间件
5. **第三方**的中间件

##### 1. **应用级别**的中间件

通过 `app.use()` 或 `app.get()` 或 `app.post()`，**绑定到 app 实例上的中间件**，叫做应用级别的中间件，代码示例如下：

```javascript
// 应用级别的中间件（全局中间件）
app.use((req, res, next) => {
  next()
})

// 应用级别的中间件（局部中间件）
app.get('/', mw1, (req, res) => {
  res.send('Home page.')
})
```

##### 2. **路由级别**的中间件

绑定到 **express.Router()** 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别的中间件没有任何区别。只不过，**应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上**，示例代码如下：

```javascript
const app = express()
const router = express.Router()

// 路由级别的中间件
router.use(function (req, res, next) {
  console.log('Time:' + Date.now())
  next()
})

app.use('/', router)
```

##### 3. **错误级别**的中间件

错误级别中间件的**作用**：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。

**格式**：错误级别中间件的 function 处理函数中，**必须有 4 个形参**，分别是 (**err**, req, res, next)。

```javascript
app.get('/', function (req, res) {
  // 1. 路由
  throw new Error('服务器内部发生了错误！') // 1.1 抛出自定义的错误
  res.send('Home Page.')
})

app.use(function (err, req, res, next) {
  // 2. 错误级别的中间件
  console.log('发生了错误：' + err.message) // 2.1 在服务器打印错误消息
  res.send('Error！' + err.message) // 2.2 向客户端响应错误相关的内容
})
```

##### 4. **Express 内置**的中间件

自 Express 4.16.0 版本开始，Express 内置了 **3 个**常用的中间件，极大的提高了 Express 项目的开发效率和体验：

1. **express.static** 快速托管静态资源的内置中间件，例如：HTML 文件、图片、CSS 样式等（无兼容性）
2. **express.json** 解析 JSON 格式的请求数据（`有兼容性`，仅在 4.16.0+ 版本中可用）
3. **express.urlencoded** 解析 URL-encoded 格式的请求体数据（`有兼容性`，仅在 4.16.0+ 版本可用）

```javascript
// 配置解析 application/json 格式数据的内置中间件
app.use(express.json())
// 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
app.use(express.urlencoded({ extended: false }))
```

##### 5. **第三方**的中间件

非 Express 官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以**按需下载**并**配置**第三方中间件，从而提高项目的开发效率。

例如：在 express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求数据。使用步骤如下：

1. 运行 `npm install` **body-parser** 安装中间件
2. 使用 **require** 导入中间件
3. 调用 **app.use()** 注册并使用中间件

::: warning 注意

Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。

:::

#### 4. 自定义中间件

##### 1. **需求描述**与**实现步骤**

自己**手动模拟**一个类似于 express.urlencoded 这样的中间件，来`解析 POST 提交到服务器的表单数据`。

实现步骤：

1. 定义中间件
2. 监听 req 的 data 事件
3. 监听 req 的 end 事件
4. 使用 querystring 模块解析请求体数据
5. 将解析出来的数据挂载为 req.body
6. 将自定义中间件封装为模块

##### 2. 定义中间件

使用 app.use() 来定义全局生效的中间件，代码如下：

```javascript
app.use(function (req, res, next) {
  // 中间件的业务逻辑
})
```

##### 3. 监听 req 的 **data** 事件

在中间件中，要监听 req 对象的 data 事件，来获取客户端发送到服务器的数据。

如果数据量比较大，无法一次性发送完毕，则客户端会**把数据切割后**，**分批发送到服务器**。所以 data 事件可能会触发多次，每一次触发 data 事件时，`获取到的数据只是完整数据的一部分`，需要手动对接收到的数据进行拼接。

```javascript
// 定义变量，用来存储客户端发送过来的请求数据
let str = ''
// 监听 req 对象的 data 事件（客户端发送过来的新的请求数据）
req.on('data', chunk => {
  // 拼接请求体数据，隐式转换为字符串
  str += chunk
})
```

##### 4. 监听 req 的 **end** 事件

当请求体数据**接收完毕**之后，会自动触发 req 和 end 事件。

因此，我们可以在 req 的 end 事件中，**拿到并处理完整的请求体数据**。示例代码如下：

```javascript
// 监听 req 对象的 end 事件（请求体发送完毕后自动触发）
req.on('end', () => {
  // 打印完整的请求体数据
  console.log(str)
  // TODO: 把字符串格式的请求体数据，解析成对象格式
})
```

##### 5. 使用 querystring 模块解析请求体数据

Node.js 内置了一个 **querystring** 模块，**专门用来处理查询字符串**。通过这个模块提供的 **parse()** 函数，可以轻松把查询字符串，解析成对象的格式。示例代码如下：

```javascript
// 导入处理 querystring 的 Node.js 内置模块
const qs = require('querystring')

// 调用 qs.parse() 方法，把查询字符串解析为对象
const body = qs.parse(str)
```

##### 6. 将解析出来的数据对象挂载为 **req.body**

**上游**的`中间件`和**下游**的`中间件及路由`之间，**共享同一份 req 和 res**。因此，我们可以将解析出来的数据，挂载为 req 的自定义属性，命名为 **req.body**，供下游使用。示例代码如下：

```javascript
req.on('end', () => {
  // 调用 qs.parse() 方法，把查询字符串解析为对象
  const body = qs.parse(str) // 将对象解析出来的请求体对象，挂载为 req.body 属性
  req.body = body // 最后，一定要调用 next() 函数，执行后续的业务逻辑
  next()
})
```

##### 7. 将自定义中间件**封装**为模块

为了优化代码的结构，我们可以把自定义的中间件函数，**封装为独立的模块**，示例代码如下：

```javascript
// custom-body-parser.js 模块中的代码
const qs = require('querystring')

function bodyParser(req, res, next) {
  /* 省略其它代码*/
}

module.exports = bodyParser // 向外导出解析请求体数据的中间件函数
```

```javascript
// 1. 导入自定义的中间件模块
const myBodyParser = require('custom-body-parser')

// 2. 注册自定义的中间件模块
app.use(myBodyParser)
```

### 4. 使用 Express 写接口

#### 1. 创建基本的服务器

```javascript
// 导入 express 模块
const express = require('express')

// 创建 express 的服务器实例
const app = express()

// write your code here...

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
```

#### 2. 创建 API 路由模块

```javascript
// apiRouter.js 【路由模块】
const express = require('express')

const apiRouter = express.Router()

// bind your router here...

module.exports = apiRouter
```

```javascript
// app.js 【导入并注册路由模块】
const apiRouter = require('./apiRouter')
app.use('/api', apiRouter)
```

#### 3. 编写 GET 接口

```javascript
apiRouter.get('/get', (req, res) => {
  // 1. 获取客户端通过查询字符串，发生到服务器的数据
  const query = req.query

  // 2. 调用 res.send() 方法，把数据响应给客户端
  res.send({
    status: 0, // 状态，0 表示成功，1 表示失败
    msg: 'GET 请求成功！', // 状态描述
    data: query // 需要响应给客户端的具体数据
  })
})
```

#### 4. 编写 POST 接口

```javascript
apiRouter.post('/post', (req, res) => {
  // 1. 获取客户端通过请求体，发送到服务器的 URL-encoded 数据
  const body = req.body

  // 2. 调用 res.send() 方法，把数据响应给客户端
  res.send({
    status: 0, // 状态，0 表示成功，1 表示失败
    msg: 'POST 请求成功！', // 状态秒速
    data: body // 需要响应给客户端的具体数据
  })
})
```

#### 5. CORS 跨域资源共享

##### 1. 接口的**跨域问题**

刚才编写的 GET 和 POST 接口，存在一个很严重的问题：**不支持跨域请求**。

1. **CORS**（主流的解决方案，`推荐使用`）
2. **JSONP**（有缺陷的解决方案：只支持 GET 请求）

##### 2. 使用 **cors 中间件**解决跨域问题

cors 是 Express 的一个第三方中间件。通过安装和配置 cors 中间件，可以很方便地解决跨域问题。

使用步骤分为如下 3 步：

1. 运行 `npm install cors` **安装中间件**
2. 使用 `const cors = require('cors')` **导入中间件**
3. 在路由之前调用 `app.use(cors())` **配置中间件**

##### 3. 什么是 CORS

CORS（Cross-Origin Resource Sharing，跨域资源共享）由一些列 **HTTP 响应头**组成，**这些 HTTP 响应头决定浏览器是否阻止前端 JS 代码跨域获取资源**。

浏览器的`同源安全策略`默认会阻止网页“跨域”获取资源。但如果接口服务器**配置了 CORS 相关的 HTTP 响应头**，就可以**解除浏览器端的跨域访问限制**。

##### 4. CORS 的注意事项

1. CORS 主要在**服务器端**进行配置。客户端浏览器**无须做任何额外的配置**，即可请求开启了 CORS 的接口。
2. CORS 在浏览器中**有兼容性**。只有支持 XMLHttpRequest Level 2 的浏览器，才能正常访问开启了 CORS 的服务端接口（例如：IE10+、Chrome4+、Firefox3.5+）。

##### 5. CORS 响应头 - Access-Control-Allow-**Orgin**

响应头部中可以携带一个 **Access-Control-Allow-Orgin** 字段，其语法如下：

```http
Access-Control-Allow-Orgin: <orgin> | *
```

其中，orgin 参数的值指定了**允许访问资源的外域 URL**。

例如：下面的字段值将**只允许**来自 [https://www.baidu.com](https://www.baidu.com) 的请求：

```javascript
res.setHeader('Access-Control-Allow-Orgin', 'https://www.baidu.com')
```

如果指定了 Access-Control-Allow-Orgin 字段的值为`通配符` **\***，表示允许来自任何域的请求，示例代码如下：

```javascript
res.setHeader('Access-Control-Allow-Orgin', '*')
```

##### 6. CORS 响应头部 - Access-Control-Allow-**Headers**

默认情况下，CORS **仅**支持`客户端服务器`发送如下的 9 个**请求头**：

Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type（值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一）

如果客户端向服务器**发生了额外的请求头信息**，则需要在**服务器端**，通过 Access-Control-Allow-Headers **对额外的请求头进行声明**，否则这次请求会失败！

```javascript
// 允许客户端额外向服务器发送 content-Type 请求头和 X-Custom-Header 请求头
// 注意：多个请求头之间使用英文逗号进行分隔
res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'X-Custom-Header')
```

##### 7. CORS 响应头部 - Access-Control-Allow-**Methods**

默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。

如果客户端希望通过 **PUT**、**DELETE** 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Allow-Methods 来指明**指明实际请求所允许使用的 HTTP 方法**。

示例代码如下：

```javascript
// 只允许 POST、GET、DELETE、HEAD 请求方法
res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
// 允许所有的 HTTP 请求方法
res.setHeader('Access-Control-Allow-Methods', '*')
```

##### 8. CORS 请求的分类

客户端在请求 CORS 接口时，根据**请求方式**和**请求头**的不同，可以将 CORS 的请求分为**两大类**，分别是：

1. 简单请求头
2. 预检请求

##### 9. **简单请求**

同时满足以下两大条件的请求，就属于简单请求：

1. **请求方式**：GET、POST、HEAD 三者之一
2. **HTTP 头部信息**不超过以下几种字段：`无自定义头部字段`、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type（只有三个值 application/x-www-for
   urlencoded、multipart/form-data、text/plain）

##### 10. **预检请求**

只要符合以下任何一个条件的请求，都需要进行预检请求：

1. 请求方式为 `GET、POST、HEAD 之外的请求 Method 类型`
2. 请求头中`包含自定义头部字段`
3. 向服务器发送了 `application/json 格式的数据`

在浏览器与服务器正式通信之前，浏览器会**先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求**，所以这一次的 OPTION 请求称为“预检请求”。**服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据**。

##### 11. **简单请求**和**预检请求**的区别

**简单请求的特点**：客户端与服务器之间`只会发生一次请求`。

**预检请求的特点**：客户端与服务器之间会发生两次请求，`OPTION 预检请求之后，才会发起真正的请求`。

#### 6. JSONP 接口

##### 1. 回顾 JSONP 的**概念**与**特点**

**概念**：浏览器通过 \<script\> 标签的 src 属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做 JSONP。

**特点**：

1. JSONP 不属于真正的 Ajax 请求，因为它没有使用 XMLHttpRequest 这个对象。
2. JSONP 仅支持 GET 请求，不支持 POST、PUT、DELETE 等请求。

##### 2. 创建 JSONP 接口的注意事项

如果项目中**已经配置了 CORS** 跨域资源共享，为了**防止冲突**，**必须在配置 CORS 中间件之前声明 JSONP 的接口**。否则 JSONP 接口会被处理成开启了 CORS 的接口。示例代码如下：

```javascript
// 优先创建 JSONP 接口【这个接口不会被处理成 CORS 接口】
app.get('/api/jsonp', (req, res) => {})

// 再配置 CORS 中间件【后续的所有接口，都会被处理成 CORS 接口】
app.use(cors())

// 这是一个开启了 CORS 的接口
app.get('/api/get', (req, res) => {})
```

##### 3. 实现 JSONP 接口的步骤

1. **获取**客户端发送过来的**回调函数的名字**
2. **得到要**通过 JSONP 形式**发送给客户端的数据**
3. 根据前两步得到的数据，**拼接出一个函数调用的字符串**
4. 把上一步拼接得到的字符串，响应给客户端的 \<script\> 标签进行解析执行

##### 4. 实现 JSONP 接口的具体代码

```javascript
app.get('/api/jsonp', (req, res) => {
  // 1.获取客户端发送过来的回调函数的名字
  const funcName = req.query.callback
  // 2. 得到要通过 JSONP 形势发送给客户端的数据
  const data = { name: 'zs', age: 22 }
  // 3. 根据前两步得到的数据，拼接出一个函数调用的字符串
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4. 把上一步拼接得到的字符串，响应给客户端的 <script> 标签进行解析执行
  res.send(scriptStr)
})
```

##### 5. 在网页中使用 jQuery 发起 JSONP 请求

调用 $ajax() 函数，**提供 JSONP 的配置选项**，从而发起 JSONP 请求，实例代码如下：

```javascript
$('#btnJSONP').on('click', function () {
  $.ajax({
    method: 'GET',
    url: 'http://127.0.0.1/api/jsonp',
    dataType: 'jsonp', // 表示要发起 JSONP 的请求
    success: function (res) {
      console.log(res)
    }
  })
})
```

## 4. 数据库与身份认证

### 目标

- 能够知道如何配置 MySQL 数据库环境
- 能够认识并使用常见的 SQL 语句操作数据库
- 能够在 Express 中操作 MySQL 数据库
- 能够了解 Session 的实现原理
- 能够了解 JWT 的实现原理

### 1. 数据库的基本概念

#### 1. 什么是数据库

数据库（database）是用来**组织**、**存储**和**管理**数据的仓库。

当今世界是一个充满着数据的**互联网世界**，**充斥着大量的数据**。`数据的来源`有很多，比如出行记录、消费记录、浏览的网页、发送的消息等等。除了文本类型的数据、图像、音乐、声音都是数据。

为了方便管理互联网世界中的数据，就有了**数据库管理系统**的概念（简称：数据库）。用户可以对数据库中的数据进行`新增`、`查询`、`更新`、`删除`等操作。

#### 2. 常见的数据库及分类

市面上的数据库有很多种，最常见的数据库有如下几个：

- **MySQL** 数据库（目前**使用最广泛**、**流行度最高**的开源免费数据库：Community + Enterprise）
- Oracle 数据库（免费）
- SQL Server 数据库（收费）
- MongoDB 数据库（Community + Enterprise）

<br>

其中，MySQL、Oracle、SQL Server 属于**传统型数据库**（又叫做：`关系型数据库` 或 `SQL 数据库`）这三者的设计理念相同，用法比较类似。

而 MongoDB 属于**新型数据库**（又叫做：`非关系型数据库` 或 `NoSQL 数据库`），它在一定程度上弥补了传统型数据库的缺陷。

#### 3. 传统型数据库的**数据组织结构**

数据的组织结构：指的就是数据以什么样的结构进行存储。

传统型数据库的数据组织结构，与 Excel 中数据的组织结构比较类似。

因此，我们可以对比着 Excel 来了解和学习传统型数据集的数据组织结构。

##### 1. Excel 的数据组织结构

每个 Excel 中，数据的组织结构分别为**工作簿**、**工作表**、**数据行**、**列**这 4 大部分组成。

1. 整个 Excel 叫做`工作簿`
2. users 和 books 是`工作表`
3. users 工作表中有 3 行数据
4. 每行数据由 6 列信息组成
5. 每列信息都有对应的`数据类型`

##### 2. 传统型数据库的数据组织结构

在传统型数据库中，数据的组织结构分为**数据库（database）**、**数据表（table）**、**数据行（row）**、**字段（field）** 这 4 大部分组成。

1. **数据库**类似于 Excel 的`工作簿`
2. **数据表**类似于 Excel 的`工作表`
3. **数据行**类似于 Excel 的`每一行数据`
4. **字段**类似于 Excel 的`列`
5. 每个字段都有对应的数据类型

##### 3. 实际开发中库、表、字段的关系

1. 在实际项目开发中，一般情况下，每个项目都对应独立的**数据库**。
2. 不同的数据，要存储到数据库的不同表中，例如：用户数据存储到 users 表中，图书数据库存储到 books 表中。
3. 每个表中具体存储哪些信息，由字段来决定，例如：我们可以为 users 表设计 id、username、password 这 3 个字段。
4. 表中的行，代表每一条具体的数据。

### 2. 安装并配置 MySQL

#### 1. 了解需要安装哪些 MySQL 相关的软件

对于开发人员来说，只需要安装 `MySQL Server` 和 `MySQL Workbench` 这两个软件，就能满足开发的需求了。

- MySQL Server：**专门用来提供数据存储和服务的软件**。
- MySQL Workbench：**可视化的 MySQL 管理工具**，通过它，可以方便的操作存储在 MySQL Server 中的数据。

#### 2. MySQL 在 Mac 环境下的安装

在 Mac 环境下安装 MySQL 的过程比 Windows 环境下的步骤简单很多：

1. 先运行 **mysql-8.0.19-macos10.15-x86_64.dmg** 这个安装包，将 MySQL Server 安装到 Mac 系统
2. 再运行 **mysql-workbench-community-8.0.19-macos-x86_64.dmg** 这个安装包，将可视化的 MySQL Workbench 工具安装到 Mac 系统

#### 3. MySQL 在 Windows 环境下的安装

在 Windows 环境下安装 MySQL，只需要运行 **mysql-installer-community-8.0.19.0.msi** 这个安装包，就能一次性将 MySQL Server 和 MySQL Workbench 安装到自己的电脑上。

### 3. MySQL 的基本使用

#### 1. 使用 MySQL Workbench 管理数据库

##### 1. **连接**数据库

##### 2. 了解主界面的**组成部分**

##### 3. 创建数据库

##### 4. 创建数据表

DataType 数据类型：

1. **int** 整数
2. **varchar**(`len`) 字符串
3. **tinyint**(`1`) 布尔值

字段的特殊标识：

1. **PK**（Primary Key）`主键、唯一标识`
2. **NM**（Not Null）`值不允许为空`
3. **UQ**（Unique）`值唯一`
4. **AI**（Auto increment）`值自动增长`

##### 5. 向表中**写入数据**

#### 2. 使用 SQL 管理数据库

##### 1. 什么是 SQL

SQL（英文全称：Structured Query Language）是**结构化查询语言**，专门用来**访问和处理数据库**的编程语言。能够让我们**以编程的形式**，**操作数据库里面的数据**。

<br>

三个关键点：

1. SQL 是一门**数据库编程语言**
2. 使用 SQL 语言编写出来的代码，叫做 **SQL 语句**
3. SQL 语言**只能在关系型数据库中使用**（例如 MySQL、Oracle、SQL Server）。非关系型数据库（例如 Mongodb）不支持 SQL 语言

##### 2. SQL 能做什么

1. 从数据库中**查询数据**
2. 向数据库中**插入新的数据**
3. **更新**数据库中的**数据**
4. 从数据库**删除数据**
5. 可以创建新数据库
6. 可以在数据库中创建新表
7. 可以在数据库中创建存储过程、视图
8. etc...

##### 3. SQL 的学习目标

重点掌握如何使用 SQL 从数据表中：

**查询数据**（select）、**插入数据**（insert into）、**更新数据**（update）、**删除数据**（delete）

<br>

额外需要掌握的 4 中 SQL 语法：

`where 条件、and 和 or 运算符、order by 排序、count(*) 函数`

#### 3. SQL 的 SELECT 语句

##### 1. 语法

SELECT 语句用于**从表中查询数据**。执行的结果被存储在一个**结果表**中（称为`结果集`）。语法格式如下：

```sql
-- 这是注释
-- 从 FROM 指定的【表中】，查询出【所有的】数据。* 表示【所有列】
SELECT * FROM 表名称

-- 从 FROM 指定的【表中】，查询出指定 列名称（字段）的数据。
SELECT 列名称 FROM 表名称
```

::: warning 注意

SQL 语句中的`关键字`对**大小写不敏感**。SELECT 等效于 select，FROM 等效于 from。

:::

##### 2. **SELECT \*** 示例

我们希望从 users 表中选取所有的列，可以使用**符号 \***取代列的名称，示例如下：

```sql
-- 注意：型号 * 是选取所有列的快捷方式
SELECT * FROM users
```

##### 3. **SELECT 列名称** 示例

如需获取名为 "**username**" 和 "**password**" 的列的内容（从名为 "users" 的数据表），请使用下面的 SELECT 语句：

```sql
-- 注意：多个列之间，使用英文逗号进行分隔
SELECT username,password FROM users
```

#### 4. SQL 的 INSERT INTO 语句

##### 1. 语法

**INSERT INTO** 语句用于`向数据表中`**插入新的数据行**，语法格式如下：

```sql
-- 语法解读：向指定的表中，插入如下几列数据，列的值通过 values 一一指定
-- 注意：列和值要一一对应，多个列和多个值之间，使用英文逗号分隔
INSERT INTO table_name(列1, 列2, ...) VALUES (值1, 值2, ...)
```

##### 2. **INSERT INTO** 示例

向 users 表中，插入一条 **username** 为 `tony stark`，**password** 为 `098123` 的用户数据，示例如下：

```sql
INSERT INTO users (username, password) VALUES ('tony stark', '098123')
```

#### 5. SQL 的 UPDATE 语句

##### 1. 语法

**UPDATE** 语句用于**修改表中的数据**。语法格式如下：

```sql
-- 语法解读：
-- 1. 用 UPDATE 指定要更新哪个表中的数据
-- 2. 用 SET 指定列对应的新值
-- 3. 用 WHERE 指定更新的条件
UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
```

##### 2. UPDATE 示例 - **更新某一行中的一个列**

把 users 表中 **id** 为 `7` 的用户密码，更新为 **888888**。示例如下：

```sql
UPDATE users SET password = '888888' WHERE id = 7
```

##### 3. UPDATE 示例 - **更新某一行中的若干列**

把 users 表中 **id** 为 `2` 的`用户密码`和`用户状态`，分别更新为 **admin123** 和 **1**。示例如下：

```sql
-- 多个被更新的列之间，使用英文的逗号进行分隔
-- WHERE 后面跟着的是更新的条件
-- 注意：初学者经常忘记提供更新的 WHERE 条件。
-- 这样会导致整张表的数据都被更新，一定要慎重！
UPDATE users SET password = 'admin123', status = 1 WHERE id = 2
```

#### 6. SQL 的 DELETE 语句

##### 1. 语法

**DELETE** 语句用于删除表中的行。语法格式如下：

```sql
-- 语法解读：
-- 从指定的表中，根据 WHERE 条件，删除对应的数据行
DELETE FROM 表名称 WHERE 列名称 = 值
```

##### 2. DELETE 示例

从 users 表中，删除 **id** 为 `4` 的用户，示例如下：

```sql
-- 注意：对于初学者来说，经常忘记提供 WHERE 条件，
-- 从而导致误删整张表的数据！一定要慎重！
DELETE FROM users WHERE id = 4
```

#### 7. SQL 的 **WHERE 子句**

##### 1. 语法

WHERE 子句用于**限定选择的标准**。在 `SELECT、UPDATE、DELETE` 语句中，**皆可使用** WHERE 子句来限定选择的标准。

```sql
-- 查询语句中的 WHERE 条件
SELECT 列名称 FROM 表名称 WHERE 列 运算符 值
-- 更新语句中的 WHERE 条件
UPDATE 表名称 SET 列 = 新值 WHERE 列 运算符 值
-- 删除语句中的 WHERE 条件
DELETE FROM 表名称 WHERE 列 运算符
```

#### 8. SQL 的 **AND** 和 **OR** 运算符

##### 1. 语法

AND 和 OR 可`在 WHERE 子语句`中**把两个或多个条件结合起来**。

AND 表示**必须同时满足多个条件**，相当于 JavaScript 中的 \&\& 运算符，例如 `if(a! == 10` **&&** `a! == 20)`

OR 表示**只要满足任意一个条件即可**，相当于 JavaScript 中的 || 运算符，例如 `if(a! == 10` **||** `a! == 20)`

##### 2. **AND 运算符**示例

使用 AND 来显示所有 **status** 为 `0`，并且 **id** `小于 3` 的用户：

```sql
SELECT * FROM users WHERE status = 0 AND id < 3
```

##### 3. **OR 运算符**示例

使用 OR 来显示所有 **status** 为 `1`，或者 **username** 为 `zs` 的用户：

```sql
SELECT * FROM users WHERE status = 1 OR username = 'zs'
```

#### 9. SQL 的 ORDER BY 子句

##### 1. 语法

ORDER BY 语句用于`根据指定的列`**对结果集进行排序**。

ORDER BY 语句**默认**按照**升序**对记录进行排序。

如果您希望按照**降序**对记录进行排序，可以使用 **DESC** 关键字。

##### 2. ORDER BY 子句 - **升序排序**

对 users 表中的数据，按照 status 字段进行升序排序，示例如下：

```sql
-- 注意：如下两条 SQL 语句是等价的，
-- 因为 ORDER BY 默认进行升序排序；
-- 其中，ASC 关键字代表升序排序
SELECT * FROM users ORDER BY status;
SELECT * FROM users ORDER BY status ASC;
```

##### 3. ORDER BY 子句 - **降序排序**

对 users 表中的数据，按照 id 字段进行排序，示例如下：

```sql
-- 注意：DESC 代表降序排序
SELECT * FROM users ORDER BY id DESC
```

##### 4. ORDER BY 子句 - **多重排序**

对 uses 表中的数据，先按照 **status** 字段进行`降序排序`，再按照 **username** 的**字母顺序**，进行`升序排序`，示例如下：

```sql
-- 注意：DESC 代表降序排序
SELECT * FROM users ORDER BY status DESC, username ASC
```

#### 10. SQL 的 COUNT(\*) 函数

##### 1. 语法

**COUNT(\*)** 函数用于返回`查询结果的`**总数据条数**，语法格式如下：

```sql
SELECT COUNT(*) FROM 表名称
```

##### 2. COUNT(\*) 示例

查询 users 表中 **status** 为 **0** 的总数据条数：

```sql
SELECT COUNT(*) FROM users WHERE status = 0
```

##### 3. 使用 **AS** 为列**设置别名**

如果希望给查询出来的列名称设置别名，可以使用 **AS** 关键字，示例如下：

```sql
-- 将列名称从 COUNT(*) 修改为 total
SELECT COUNT(*) AS total FROM users WHERE status = 0
```

### 4. 在项目中操作 MySQL

#### 1. 在项目中操作数据库的步骤

1. 安装操作 MySQL 数据库的第三方模块（**mysql**）
2. 通过 mysql 模块**连接到 MySQL 数据库**
3. 通过 mysql 模块**执行 SQL 语句**

#### 2. 安装与配置 mysql 模块

##### 1. **安装** mysql 模块

mysql 模块是托管于 npm 上的**第三方模块**。它提供了在 Node.js 项目中**连接**和**操作** MySQL 数据库的能力。

想要在项目中使用它，需要先运行如下命令，将 mysql 安装为项目的依赖包：

```bash
$ npm install mysql
```

##### 2. 配置 mysql 模块

在使用 mysql 模块操作 MySQL 数据库之前，**必须先对 mysql 模块进行必要的配置**，主要的配置步骤如下：

```javascript
// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 建立与 MySQL 数据库的连接
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的 IP 地址
  user: 'root', // 登录数据库的账号
  password: 'admin123', // 登录数据库的密码
  database: 'my_db_01' // 指定要操作哪个数据库
})
```

##### 3. 测试 mysql 模块能否正常工作

调用 db.query() 函数，指定要执行的 SQL 语句，通过回调函数拿到执行的结果：

```javascript
// 检测 mysql 模块能否正常工作
db.query('SELECT 1', (err, results) => {
  if (err) return console.log(err.message)
  // 只要能打印出 [RowDataPacket { '1', 1 }] 的结果，就证明数据库连接正常
  console.log(results)
})
```

#### 3. 使用 mysql 模块操作 MySQL 数据库

##### 1. 查询数据

查询 users 表中所有的数据：

```javascript
// 查询 users 表中所有的用户数据
db.query('SELECT * FROM users', (err, results) => {
  // 查询失败
  if (err) return console.log(err.message)
  // 查询成功
  console.log(results)
})
```

##### 2. 插入数据

向 users 表中新增数据，其中 **username** 为 `Spider-Man`，**password** 为 `pcc321`。示例代码如下：

```javascript
// 1. 要插入到 users 表中的数据对象
const user = { username: 'Spider-Man', password: 'pcc321' }
// 2. 待执行的 SQL 语句，其中英文的 ? 表示占位符
const SQLStr = 'INSERT INTO users (username, password) VALUES (?, ?)'
// 3. 使用数组的形式，依次为 ? 占位符指定具体的值
db.query(sqlStr, [user.username, user.password], (err, results) => {
  if (err) return console.log(err.message) // 失败
  if (results.affectedRows === 1) {
    console.log('插入数据成功')
  } // 成功
})
```

##### 3. 插入数据的**便捷方式**

向表中新增数据时，如果`数据对象的每个属性`和`数据表的字段`**一一对应**，则可以通过如下方式快速插入数据：

```javascript
// 1. 要插入到 users 表中的数据对象
const user = { username: 'Spider-Man', password: 'pcc321' }
// 2. 待执行的 SQL 语句，其中英文的 ? 表示占位符
const SQLStr = 'INSERT INTO users SET ?'
// 3. 直接将数据对象当作占位符的值
db.query(sqlStr, user, (err, results) => {
  if (err) return console.log(err.message) // 失败
  if (results.affectedRows === 1) {
    console.log('插入数据成功')
  } // 成功
})
```

##### 4. 更新数据

可以通过如下方式，更新表中的数据：

```javascript
// 1. 要更新的数据对象
const user = { id: 7, username: 'aaa', password: '000' }
// 2. 要执行的 SQL 语句
const SQLStr = 'UPDATE users SET username = ?, password = ? WHERE id = ?'
// 3. 调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if (err) return console.log(err.message) // 失败
  if (results.affectedRows === 1) {
    console.log('更新数据成功')
  } // 成功
})
```

##### 5. 更新数据的**快捷方式**

更新表数据时，如果`数据对象的每个属性`和`数据表的字段`**一一对应**，则可以通过如下方式快速更新表数据：

```javascript
// 1. 要更新的数据对象
const user = { id: 7, username: 'aaa', password: '000' }
// 2. 要执行的 SQL 语句
const SQLStr = 'UPDATE users SET ? WHERE id = ?'
// 3. 调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlStr, [user, user.id], (err, results) => {
  if (err) return console.log(err.message) // 失败
  if (results.affectedRows === 1) {
    console.log('更新数据成功')
  } // 成功
})
```

##### 6. 删除数据

在删除数据时，推荐根据 id 这样唯一标识，来删除对应的数据。示例如下：

```javascript
// 1. 要执行的 SQL 语句
const sqlStr = 'DELETE FROM users WHERE id = ?'
// 2. 调用 db.query() 执行 SQL 语句的同时，为占位符指定具体的值
// 注意：如果 SQL 语句中有多个占位符，必须使用数组为每个占位符指定具体的值
// 如果 SQL 语句中只有一个占位符，则可以省略数组
db.query(sqlStr, 7, (err, results) => {
  if (err) return console.log(err.message) // 失败
  if (results.affectedRows === 1) {
    console.log('更新数据成功')
  } // 成功
})
```

##### 7. **标记删除**

使用 DELETE 语句，会把真正的数据从表中删除掉。为了保险起见，**推荐使用**`标记删除`的形式，来**模拟删除的动作**。

所谓的标记删除，就是在表中设置类似于 **status** 这样的**状态字段**，来`标记`这条数据是否被删除。

当用户执行了删除的动作时，我们并没有执行 DELETE 语句把数据删掉，而是执行了 UPDATE 语句，将这条数据对应的 status 字段标记为删除即可。

```javascript
// 标记删除：使用 UPDATE 语句替代 DELETE 语句，只更新数据的状态，并没有真正删除
db.query('UPDATE users SET status = 1 WHERE id = ?', 6, (err, results) => {
  if (err) return console.log(err.message) // 失败
  if (results.affectedRows === 1) {
    console.log('更新数据成功')
  } // 成功
})
```

### 5. 前后端的身份认证

#### 1. Web 开发模式

目前主流的 Web 开发模块有两种，分别是：

1. 基于**服务器渲染**的传统 Web 开发模式
2. 基于**前后端分离**的新型 Web 开发模式

##### 1. **服务端渲染**的 Web 开发模式

**服务器渲染的概念**：服务器`发送给客户端的 HTML 页面`，是**在服务器通过字符串的拼接，动态生成的**。因此，客户端不需要使用 Ajax 这样的技术额外请求页面的数据。代码示例如下：

```javascript
app.get('/index.html ', (req, res) => {
  // 1．要渲染的数据
  const user = { name: 'zs', age: 20 }
  // 2．服务器端通过字符串的拼接，动态生成HTML内容
  const html = `<h1>姓名:${user.name}，年龄:${user.age}</h1>`
  // 3．把生成成的页面内容响应给客户端。因此，客户端拿到的是带有真实数据的HTML页面
  res.send(htm1)
})
```

##### 2. 服务端渲染的优缺点

优点：

1. **前端耗时少。** 因为服务器负责动态生成 HTML 内容，浏览器只需要直接渲染页面即可。尤其是移动端，更省电。
2. **有利于 SEO**。 因为服务器端响应的是完整的 HTML 页面内容，所以爬虫更容易爬取获得信息，更有利于 SEO。

<br>

缺点：

1. **占用服务器资源。** 即服务器完成 HTML 页面内容的拼接，如果请求较多，会对服务器造成一定的访问压力。
2. **不利于前后端分离，开发效率低。** 使用服务器端渲染，则`无法进行分工合作`，尤其对于`前端复杂度高`的项目，不利于项目高效开发。

##### 3. **前后端分离**的 Web 开发模式

前后端分离的概念：前后端分离的开发模式，**依赖于 Ajax 技术的广泛应用**。简而言之，前后端分离的 Web 开发模式，就是后**端只负责提供 API 接口，前端使用 Ajax 调用接口**的开发模式。

##### 4. 前后端分离的优缺点

优点：

1. **开发体验好。** 前端专注于 UI 页面的开发，后端专注于 api 的开发，且前端有更多的选择性。
2. **用户体验好。** Ajax 技术的广泛应用，极大的提高了用户体验，可以轻松实现页面的局部刷新。
3. **减轻了服务端的渲染压力。** 因为页面最终是在每个用户的浏览器中生成的。

<br>

缺点：

1. **不利于 SEO**。因为完整的 HTML 页面需要在客户端动态拼接完成，所以爬虫对无法爬取页面的有效信息。（解决方案：利用 Vue、React 等框架的 **SSR**（server side render）技术能够很好的解决 SEO 问题！）

##### 5. 如何选择 Web 开发模式

**不谈业务场景而盲目选择使用何种开发模式都是耍流氓。**

- 比如企业级网站，主要功能是展示而没有复杂的交互，并且需要良好的 SEO ，则这时我们就需要使用服务器端渲染
- 而类似后台管理项目，交互性比较强，不需要考虑 SEO ，那么就可以使用前后端分离的开发模式。

<br>

另外，具体使用何种开发模式并不是绝对的，为了**同时兼顾**了`首页的渲染速度`和`前后端分离的开发效率` ，一些网站采用了首屏服务器端渲染 + 其他页面前后端分离的开发模式。

#### 2. 身份认证

##### 1. 什么是**身份认证**

**身份认证**（Authentication ）又称“身份验证”、“鉴权”，**是指通过一定的手段，完成对用户身份的确认** 。

- 日常生活中的身份认证随处可见，例如：高铁的验票乘车，手机的密码或指纹解锁，支付宝或微信的支付密码等。
- 在 Web 开发中，也涉及到用户身份的认证，例如：**各大网站的手机验证码登录**、**邮箱密码登录**、**二维码登录**等。

##### 2.为什么需要身份认证

身份认证的目的，是为了**确认当前所声称为某种身份的用户，确实是所声称的用户** 。例如，你去找快递员取快递，你要怎么证明这份快递是你的。

在互联网项目开发中，如何对用户的身份进行认证，是一个值得深入探讨的问题。例如，如何才能保证网站不会错误的将“马云的存款数额”显示到“马化腾的账户”上。

##### 3. 不同开发模式下的**身份认证**

对于**服务端渲染**和**前后端分离**这两种开发模式来说，分别有着不同的身份认证方案：

1. **服务端渲染**推荐使用 `Session 认证机制`
2. **前后端分离**推荐使用 **JWT 认证机制**

#### 3. Session 认证机制

##### 1. HTTP 协议的**无状态性**

了解 HTTP 协议的无状态性是进一步学习 Session 认证机制的必要前提。

HTTP 协议的的无状态性，指的是客户端`的每次 HTTP 请求都是独立的`，连续多个请求之间没有直接的关系，**服务器不会主动保留每次 HTTP 请求的状态**。

##### 2. **如何突破** HTTP 无状态的限制

对于超市来说，为了方便收银员在进行结算时给 VIP 用户打折，超市可以为每个 VIP 用户发放会员卡。

::: warning 注意

现实生活中的**会员卡身份认证方式** ，在 Web 开发中的`专业术语`叫做 **Cookie**。

:::

##### 3. 什么是 **Cookie**

Cookie 是**存储在用户浏览器中的一段不超过 4 KB 的字符串**。它由一个**名称** Name ）、一个**值** Value ）和其它几个用于控制 Cookie `有效期`、安全性、`使用范围`的**可选属性**组成。

不同域名下的 Cookie 各自独立，每当客户端发起请求时，会**自动**把**当前域名下**所有**未过期的 Cookie** 一同发送到服务器。

**Cookie 的几大特性**

1. 自动发送
2. 域名独立
3. 过期时限
4. 4kb 限制

##### 4. Cookie 在身份认证中的作用

客户端第一次请求服务器的时候，服务器**通过响应头的形式**，向客户端发送一个身份认证的 Cookie，客户端会自动将 Cookie 保存在浏览器中。

随后，当客户端浏览器每次请求服务器的时候，浏览器会**自动**将身份认证相关的 Cookie，**通过请求头的形式**发送给服务器，服务器即可验明客户端的身份。

##### 5. Cookie **不具有**安全性

由于 Cookie 是存储在浏览器中的，而且**浏览器也提供了读写 Cookie 的 API**，因此 **Cookie 很容易被伪造**，不具有安全性。因此不建议服务器将重要的隐私数据，通过 Cookie 的形式发送给浏览器。

::: warning 注意

`千万不要使用 Cookie 存储重要且隐私的数据！`比如用户的身份信息、密码等。

:::

##### 6. **提高**身份认证的**安全性**

为了防止客户伪造会员卡，收营员在拿到客户出示的会员卡后，可以**在收银机上进行刷卡认证**。只有收银机确认存在的会员卡，才能被正常使用。

这种“`会员卡` + **刷卡认证** ”的设计理念，就是 Session 认证机制的精髓。

#### 4. 在 Express 中使用 Session 认证

##### 1. **安装** express-session 中间件

在 Express 项目中，只需安装 `express-session` 中间件，即可在项目中使用 Session 认证：

```bash
$ npm install express-session
```

##### 2. **配置** express-session 中间件

express-session 中间件安装成功后，需要通过 `app.use()` 来**注册 session 中间件**，示例代码如下：

```javascript
// 1. 导入 session 中间件
const session = require('express-session')

// 2. 配置 session 中间件
app.use(
  session({
    secret: 'keyboard cat', // secret 属性的值可以为任意字符串
    resave: false, // 固定写法
    saveUninitialized: true // 固定写法
  })
)
```

##### 3. 向 session 中**存数据**

当 express-session 中间件配置成功后，即可通过 **req.session** 来访问和使用 session 对象，从而存储用户的关键信息：

```javascript
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  req.session.user = req.body // 将用户的信息，存储到 Session 中
  req.session.islogin = true // 将用户的登录状态，存储到 Session 中

  res.send({ status: 0, msg: '登录成功' })
})
```

##### 4. 从 session 中**取数据**

可以直接从 **req.session** 对象上获取之前存储的数据，示例代码如下：

```javascript
// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // 判断用户是否登录
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: 'fail' })
  }
  res.send({ status: 0, msg: 'success', username: req.session.username })
})
```

##### 5. 清空 session

调用 **req.session.destroy()** 函数，接口清空服务器保存的 session 信息。

```javascript
// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // 清空当前客户端对应的 session 信息
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功'
  })
})
```

#### 5. JWT 认证机制

##### 1. 了解 Session 认证的**局限性**

Session 认证机制**需要配合 Cookie 才能实现**。由于 Cookie 默认不支持跨域访问，所以，当涉及到`前端跨域请求后端接口`的时候，**需要做很多额外的配置**，才能实现跨域 Session 认证。

<br>

::: warning 注意

- 当前端请求后端接口**不存在跨域问题**的时候，**推荐使用 Session** 身份认证机制。
- 当前端需要跨域请求后端接口的时候，不推荐使用 Session 身份认证机制，推荐使用 JWT 认证机制。

:::

##### 2. 什么是 JWT

JWT（英文全称：JSON Web Token）是目前`最流行`的**跨域认证解决方案**。

##### 3. JWT 的**工作原理**

总结：用户的信息通过 Token 字符串的形式保存在客户端浏览器中。服务器通过还原 Token 字符串的形式来认证用户的身份。

##### 4. JWT 的**组成部分**

JWT 通常由三部分组成，分别是 **Header**（头部）、**Payload**（有效荷载）、**Signature**（签名）。

三者之间使用英文的“.”分隔，格式如下：

```
Header.Payload.Signature
```

##### 5. JWT 的**三个部分各自代表的含义**

JWT 的三个组成部分，从前到后分别是 Header、Payload、Signature。

其中：

- **Payload** 部分**才是真正的用户信息**。它是用户信息经过加密之后生成的字符串。
- Header 和 Signature 是`安全性相关`的部分，只是为了保证 Token 的安全性。

##### 6. JWT 的**使用方式**

客户端收到服务器返回的 JWT 之后，通常会将它存储在 `localStorage` 或 `sessionStorage` 中。

此后，客户端每次与服务器通信，都要带上这个 JWT 的字符串，从而进行身份认证。推荐的做法是**把 JWT 放在 HTTP 请求头的 Authorization 字段中**，格式如下：

```
Authorization: Bearer <token>
```

### 6. 在 Express 中使用 JWT

##### 1. **安装** JWT 相关的包

运行如下命令，安装如下两个 JWT 相关的包：

```bash
$ npm install jsonwebtoken express-jwt
```

其中：

- **jsonwebtoken** 用于`生成 JWT 字符串`
- **express-jwt** 用于`将 JWT 字符串解析还原成 JSON 对象`

##### 2. **导入** JWT 相关的包

使用 **require()** 函数，分别导入 JWT 相关的两个包：

```javascript
// 1. 导入用于生成 JWT 字符串的包
const jwt = require('jsonwebtoken')
// 2. 导入用于将客户端发送过来的 JWT 字符串，解析还原成 JSON 对象的包
const expressJWT = require('express-jwt')
```

##### 3. 定义 secret 密钥

为了**保证 JWT 字符串的安全性**，防止 JWT 字符串在网络传输过程中被别人破解，我们需要专门定义一个用于**加密**和**解密**的 secret 密钥：

1. 当生成 JWT 字符串的时候，需要使用 secret 密钥对用户的信息**进行加密**，最终得到加密好的 JWT 字符串
2. 当把 JWT 字符串解析还原成 JSON 对象的时候，需要使用 secret 密钥**进行解密**

```javascript
// 3. secret 密钥的本质：就是一个字符串
const secretKey = ''
```

##### 4. 在登录成功**后生成 JWT 字符串**

调用 `jsonwebtoken` 包提供的 **sign()** 方法，将用户的信息加密成 JWT 字符串，响应给客户端：

```javascript
// 登录接口
app.post('/api/login', function (req, res) {
  // ... 省略登录失败情况下的代码
  // 用户登录成功之后，生成 JWT 字符串，通过 token 属性响应给客户单
  res.send({
    status: 200,
    message: '登录成功！',
    // 调用 jwt.sign() 生成 JWT 字符串,三个参数分别是：用户信息对象、加密密钥、配置对象
    token: jwt.sign({ username: userInfo.username }, secretKey, {
      expiresIn: '30s'
    })
  })
})
```

##### 5. 将 `JWT 字符串`**还原为** `JSON 对象`

客户端每次在访问那些有权限接口的时候，都需要主动通过**请求头中的 Authentication 字段**，将 Token 字符串法送到服务器进行身份认证。

此时，服务器可以通过 `express-jwt` 这个中间件，自动将客户端发送过来的 Token 解析还原成 JSON 对象：

```javascript
// 使用 app.use() 来注册中间件
// expressJWT({ secret: secretKey })
// .unless({ path:[/^\/api\//] }) 用来指定那些接口不需要访问权限
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))
```

##### 6. 使用 req.user 获取用户信息

当 express-jwt 这个中间件配置成功之后，即可在那些有权限的接口中，使用 **req.user** 对象，来访问从 JWT 字符串中解析出来的用户信息了，示例代码如下：

```javascript
//这是一个有权限的API接口
app.get(' ladmin/getinfo ', function (req, res) {
  console.log(req.user)
  res.send({
    status: 200,
    message: '获取用户信息成功! ',
    data: req.user
  })
})
```

##### 7. 捕获解析 JWT 失败后产生的错误

当使用 express jwt 解析 Token 字符串时，如果客户端发送过来的 Token 字符串**过期**或**不合法**，会产生一个**解析失败**的错误，影响项目的正常运行。我们可以通过 **Express 的错误中间件**，捕获这个错误并进行相关的处理，示例代码如下：

```javascript
app.use((err, req, res, next) => {
  // token解析失败导致的错误
  if (err.name === 'UnauthorizedError ') {
    return res.send({ status: 401, message: '无效的token' })
  }
  //其它原因导致的错误
  res.send({ status: 500, message: '未知错误' })
})
```
