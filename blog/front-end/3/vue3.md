---
title: Vue3
date: 2022-3-22
categories:
  - 前端笔记
tags:
  - JavaScript
  - Vue
---

## 1. ES6 模块化与异步编程高级用法

### 目标

- 能够使用如何使用 ES6 的模块化语法
- 能够知道如何使用 Promise 解决回调地狱的问题
- 能够知道如何使用 async/await 简化 Promise 的调用
- 能够说出什么是 EventLoop
- 能够说出宏任务和微任务的执行顺序

### 1. ES6 模块化

#### 1. 回顾：node.js 中如何实现模块化

node.js 遵循了 **CommonJS** 的模块化规范。其中：

- 导入其它模块使用 **require()** 方法
- 模块对外共享成员使用 **module.exports** 对象

<br>

模块化的好处：

大家都遵守同样的模块化规范写代码，**降低了沟通的成本，极大方便了各个模块之间的相互调用**，利人利己。

#### 2. 前端模块化规范的分类

在 **ES6 模块化规范**诞生之前，JavaScript 社区已经尝试并提出了 **AMD、CMD、CommonJS** 等模块化规范。

<br>

但是，这些社区提出的模块化标准，还是存在一定的**差异性与局限性**、**并不是**浏览器与服务器**通用的模块化标准**，例如：

- AMD 和 CMD 适用于**浏览器端**的 JavaScript 模块化
- CommonJS 适用于**服务器端**的 JavaScript 模块化

<br>

太多的模块化规范给开发者增加了**学习的难度**和**开发的成本**。因此，**大一统的 ES6 模块化规范诞生了**！

#### 3. 什么是 ES6 模块化规范

**ES6 模块化规范**是**浏览器端**与**服务器端**通用的模块化开发规范。它的出现极大的降低了前端开发者的模块化学习成本，开发者不需要再额外学习 AMD、CMD 或 CommonJS 等模块化规范。

<br>

ES6 模块化规范中定义：

- 每个 js 文件都是一个独立的模块
- 导入其它模块成员使用 **import** 关键字
- 向外共享模块成员使用 **export** 关键字

#### 4. 在 node.js 中体验 ES6 模块化

node.js 中**默认仅支持 CommonJS 模块规范**，若想基于 node.js 体验与学习 ES6 的模块化语法，可以按照如下两个步骤进行配置：

1. 确保安装了 **v14.15.1** 或更高版本的 node.js
2. 在 package.json 的根节点中添加 **"type": "module"** 节点

#### 5. 模块化的基本语法

ES6 的模块化主要包含如下 3 种语法：

1. **默认导出**与**默认导入**
2. **按需导出**与**按需导入**
3. **直接导入**并**执行**模块中的代码

##### 1. 默认导出

默认导出的语法：**export default** `默认导出的成员`

```javascript
let n1 = 10 // 定义模块私有成员 n1
let n2 = 20 // 定义模块私有成员 n2（外界访问不到 n2，因为它没有被共享出去）
function show() {} // 定义模块化私有方法 show

export default {
  // 使用 export default 默认导出语法，向外共享 n1 和 show 两个成员
  n1,
  show
}
```

##### 1. 默认导入

默认导入的语法：**import** `接收名称` **from** '`模块标识符`'

```javascript
// 从 01_m1.js 模块中导入 export default 向外共享的成员
// 并使用 m1 成员进行接收
import m1 from './01_m1.js'

// 打印输出的结果为：
// { n1: 10, show:[Function: show] }
console.log(m1)
```

##### 1. 默认导出的**注意事项**

每个模块中，**只允许使用唯一的一次** export default，否则会报错！

```javascript
let n1 = 10 // 定义模块私有成员 n1
let n2 = 20 // 定义模块私有成员 n2（外界访问不到 n2，因为它没有被共享出去）
function show() {} // 定义模块化私有方法 show

export default { // 使用 export default 默认导出语法，向外共享 n1 和 show 两个成员
  n1,
  show
}

// SyntaxError: Identifier '.default' has already been declared
export default {
  n2
}
```

##### 1. 默认导入的**注意事项**

默认导入的**接收名称**可以任意名称，**只要是合法的成员名称即可**：

```javascript
// m1 是合法的名称
import m1 from './01_m1.js'

// 123m 是不合法的名称，因为成员名称不能以数字开头
import 123m from './01_m1.js'
```

##### 2. 按需导出

按需导出的语法：**export** 按需导出的成员

```javascript
// 当前模块为 03_m2.js

// 向外按需导出变量
export let s1 = 'aaa'
// 向外按需导出变量 s2
export let s2 = 'ccc'
// 向外按需导出方法 say
export function say() {}
```

##### 2. 按需导入

按需导入的语法：**import** { `s1` } **from** '模块标识符'

```javascript
// 导入模块成员
import { s1, s2, say } from './03_m2.js'

console.log(s1) // 打印输出 aaa
console.log(s2) // 打印输出 ccc
console.log(say) // 打印输出 [Function: say]
```

##### 2. 按需导出与按需导入的**注意事项**

1. 每个模块中可以使用**多次**按需导出
2. 按需**导入的成员名称**必须和**按需导出的名称**保持一致
3. 按需导入时，可以使用 **as 关键字**进行重命名
4. 按需导入可以和默认导入一起使用

##### 3. 直接导入并执行模块中的代码

如果**只想单纯地执行某个模块中的代码**，并不需要得到模块中向外共享的成员。此时，可以直接导入并执行模块代码，示例代码如下：

```javascript
// 当前文件为 05_m3.js

// 当前模块中执行一个 for 循环操作
for (let i = 0; i < 3; i++) {
  console.log(i)
}
```

```javascript
// 直接导入并执行模块代码，不需要得到模块向外共享的成员
import './05_m3.js'
```

### 2. Promise

#### 1. 回调地狱

**多层回调函数的相互嵌套**，就形成了**回调地狱**。示例代码如下：

```javascript
setTimeout(() => {
  // 第 1 层回调函数
  console.log('延时 1 秒后输出')

  setTimeout(() => {
    // 第 2 层回调函数
    console.log('延时 2 秒后输出')

    setTimeout(() => {
      // 第 3 层回调函数
      console.log('延时 3 秒后输出')
    }, 3000)
  }, 2000)
}, 1000)
```

回调地狱的缺点：

- 代码耦合性太强，牵一发而动全身，**难以维护**
- 大量冗余的代码相互嵌套，代码**可读性变差**

##### 1. 如何解决回调地狱的问题

为了解决回调地狱的问题，**ES6**（ECMAScript 2015 ）中新增了 **Promise** 的概念。

##### 2. Promise 的基本概念

1. **Promise 是一个构造函数**
   - 我们可以创建的 Promise 的实例 `const p = new Promise`
   - new 出来的 Promise 实例对象，`代表一个异步操作`
2. **Promise.prototype 上包含一个 .then() 方法**
   - 每一次 new Promise() 构造函数得到的实例对象
   - 都可以`通过原型链的方式`访问到 .then() 方法，例如 `p.then()`
3. **.then() 方法用来预先指定成功和失败的回调函数**
   - p.then(`成功的回调函数`, `失败的回调函数`)
   - p.then(`result` => {}, `error` => {})
   - 调用 .then() 方法时，成功的回调函数是必选的、失败的回调函数是可选的

#### 2. **基于回调函数**按顺序读取文件内容

```javascript
// 读取文件 1.txt
fs.readFile('./files/1.txt ', 'utf8', (err1, r1) => {
  if (err1) return console.log(err1.message) // 读取文件 1 失败
  console.log(r1) // 读取文件 1 成功
  // 读取文件 2.txt
  fs.readFile('./files/2.txt ', 'utf8', (err2, r2) => {
    if (err2) return console.log(err2.message) // 读取文件 2 失败
    console.log(r2) // 读取文件 2 成功
    // 读取文件 3.txt
    fs.readFile('./files/3.txt ', 'utf8 ', (err3, r3) => {
      if (err3) return console.log(err3.message) // 读取文件 3 失败
      console.log(r3) // 读取文件 3 成功
    })
  })
})
```

#### 3. 基于 then-fs 读取文件内容

由于 node.js 官方提供的 fs 模块**仅支持**以**回调函数的方式**读取文件，**不支持 Promise 的调用方式**。因此，需要先允许如下的命令，安装 **then-fs** 这个第三方包，从而支持我们基于 Promise 的方式读取文件的内容：

```bash
npm install then-fs
```

##### 1. then-fs 的基本使用

调用 then-fs 提供的 **readFile()** 方法，可以异步读取文件的内容，**它的返回值是 Promise 的实例对象**。因此可以**调用 .then() 方法**为每个 Promise 异步操作指定**成功**和**失败**之后的回调函数。示例代码如下：

```javascript
/**
 * 基于 Promise 的方式读取文件
 */
import thenFs from 'then-fs'
// 注意：.then() 中的失败回调是可选的，可以被省略
thenFs.readFile('./files/1.txt', 'utf8').then(
  r1 => {
    console.log(r1)
  },
  err1 => {
    console.log(err1.message)
  }
)
thenFs.readFile('./files/2.txt', 'utf8').then(
  r2 => {
    console.log(r2)
  },
  err2 => {
    console.log(err2.message)
  }
)
thenFs.readFile('./files/3.txt', 'utf8').then(
  r3 => {
    console.log(r3)
  },
  err3 => {
    console.log(err3.message)
  }
)
```

::: warning 注意

上述的代码**无法保证文件的读取顺序**，需要进一步的改进！

:::

##### 2. .then() 方法的特性

如果上一个 .then() 方法中**返回了一个新的 Promise 实例对象**，则可以通过下一个 .then() 继续进行处理。通过 .then() 方法的**链式调用**，就解决了回调地狱的问题。

##### 3. **基于 Promise** 按顺序读取文件的内容

**Promise 支持链式调用**，从而来解决回调地狱的问题。示例代码如下：

```javascript
thenFs
  .readFile('./files/1.txt', 'utf8') // 1. 返回的是 Promise 的实例对象
  .then(r1 => {
    // 2. 通过 。then 为第一个 Promise 实例指定成功之后的回调函数
    console.log(r1)
    return thenFs.readFile('./files/2.txt', 'utf8') // 3. 在第一个 .then 中返回一个新的 Promise 实例对象
  })
  .then(r2 => {
    // 4. 继续调用 .then，为上一个 .then 的返回值（新的 Promise 实例）指定成功之后的回调函数
    console.log(r2)
    return thenFs.readFile('./files/3.txt', 'utf8') // 5. 在第二个 .then 中再返回一个新的 Promise 实例对象
  })
  .then(r3 => {
    // 6. 继续调用 .then，为上一个 .then 的返回值（新的 Promise 实例）指定成功之后的回调函数
    console.log(r3)
  })
```

##### 4. 通过 .catch 捕获错误

在 Promise 的链式操作中如果发生了错误，可以使用 Promise.prototype.**catch** 方法进行捕获和处理：

```javascript
thenFs
  .readFile('./files/1.txt', 'utf8') // 文件不存在奇数获取失败，后面 3 个 .then 都不执行
  .then(r1 => {
    console.log(r1)
    return thenFs.readFile('./files/2.txt', 'utf8')
  })
  .then(r2 => {
    console.log(r2)
    return thenFs.readFile('./files/3.txt', 'utf8')
  })
  .then(r3 => {
    console.log(r3)
  })
  .catch(err => {
    // 捕获第 1 行发生的错误，并输出错误的消息
    console.log(err.message)
  })
```

如果不希望前面的错误导致后续的 .then 无法正常执行，则**可以将 .catch 的调用提前**，示例代码如下：

```javascript
thenFs
  .readFile('./files/1.txt', 'utf8') // 文件不存在奇数获取失败，后面 3 个 .then 都不执行
  .catch(err => {
    // 捕获第 1 行发生的错误，并输出错误的消息
    console.log(err.message) // 由于错误已被及时处理，不影响后续 .then 的正常执行
  })
  .then(r1 => {
    console.log(r1) // 输出 undefined
    return thenFs.readFile('./files/2.txt', 'utf8')
  })
  .then(r2 => {
    console.log(r2) // 输出 222
    return thenFs.readFile('./files/3.txt', 'utf8')
  })
  .then(r3 => {
    console.log(r3) // 输出 333
  })
```

##### 5. **Promise.all()** 方法

Promise.all() 方法会发起并行的 Promise 异步操作，等**所有的异步操作全部结束后**才会执行下一步的 .then 操作（等待机制）。示例代码如下：

```javascript
// 1. 定义一个数组，存放 3 个读文件的异步操作
const promiseArr = [
  thenFs.readFile('./files/1.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/3.txt', 'utf8')
]

// 2. 将 Promise 的数值，作为 Promise.all() 的参数
Promise.all(promiseArr)
  .then(([r1, r2, r3]) => {
    // 2.1 所有文件读取成功（等待机制）
    console.log(r1, r2, r3)
  })
  .catch(err => {
    // 2.2 捕获 Promise 异步操作中的结果
    console.log(err.message)
  })
```

::: warning 注意

数组中 Promise 示例的顺序，就是最终结果的顺序！

:::

##### 6. **Promise.race()** 方法

Promise.race() 方法会发起并行的 Promise 异步操作，**只要任何一个异步操作完成，就立即执行下一步的 .then 操作**（赛跑机制）。代码示例如下：

```javascript
const promiseArr = [
  thenFs.readFile('./files/1.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/3.txt', 'utf8')
]

// 2. 将 Promise 的数值，作为 Promise.race() 的参数
Promise.race(promiseArr)
  .then(result => {
    // 2.1 所有文件读取成功（等待机制）
    console.log(result)
  })
  .catch(err => {
    // 2.2 捕获 Promise 异步操作中的结果
    console.log(err.message)
  })
```

#### 4. 基于 Promise 封装读文件的方法

方法的封装要求：

1. 方法的名称要定义为 **getFile**
2. 方法接收一个**形参 fpath**，表示要读取的文件的路径
3. 方法的**返回值**为 Promise 实例对象

##### 1. getFIle 方法的基本定义

```javascript
// 1. 方法的名称为 getFile
// 2. 方法接收一个形参 fpath，表示要读取的文件的路径
function getFile(fpath) {
  // 3. 方法的返回值为 Promise 的实例对象
  return new Promise()
}
```

::: warning 注意

第 5 行代码中的 **new Promise()** 只是创建了一个**形式上的异步操作**。

:::

##### 2. 创建具体的异步操作

如果想要创建**具体的异步操作** ，则需要在 new Promise() 构造函数期间，**传递一个 function 函数**，**将具体的异步操作定义到 function 函数内部**。示例代码如下：

```javascript
// 1. 方法的名称为 getFile
// 2. 方法接收一个形参 fpath，表示要读取的文件的路径
function getFile(fpath) {
  // 3. 方法的返回值为 Promise 的实例对象
  return new Promise(function () {
    // 4. 下面这行代码，表示这是一个具体的，读文件的异步操作
    rs.rendFIle(fpath, 'utf8', (err, dataString) => {})
  })
}
```

##### 3. 获取 .then 两个实参

通过 .then() 指定的**成功**和**失败**的回调函数，可以在 function 的**形参中**进行接收，示例代码如下：

```javascript
// 1. 方法的名称为 getFile
// 2. 方法接收一个形参 fpath，表示要读取的文件的路径
function getFile(fpath) {
  // 3. 方法的返回值为 Promise 的实例对象
  return new Promise(function () {
    // 4. 下面这行代码，表示这是一个具体的，读文件的异步操作
    rs.rendFIle(fpath, 'utf8', (err, dataString) => {})
  })
}

// getFile 方法的调用过程：
getFile('./files/1.txt').then(成功的回调函数, 失败的回调函数)
```

##### 4. 调用 resolve 和 reject 回调函数

Promise **异步操作的结果**，可以调用 **resolve** 或 **reject** 回调函数进行处理。示例代码如下：

```javascript
function getFile(fpath) {
  // resolve 是"成功的"回调函数，reject 是"失败的"回调函数
  return new Promise(function () {
    rs.rendFile(fpath, 'utf8', (err, dataStr) => {
      if (err) return reject(err) // 如果读取失败，则调用"失败的回调函数"
      resolve(dataStr) // 如果读取成功，则调用"成功的回调函数"
    })
  })
}

// getFile 方法的调用过程：
getFile('./files/1.txt').then(成功的回调函数, 失败的回调函数)
```

### 3. async/await

#### 1. 什么是 async/await

**async/await** 是 **ES8**（ECMAScript 2017）引入的新语法，用来**简化 Promise 异步操作**。在 async/await 出现之前，开发者只能通过**链式 .then() 的方式**处理 Promise 异步操作。示例代码如下：

```javascript
thenFs.readFile('./files/1.txt', 'utf8').then(
  r1 => {
    console.log(r1)
  },
  err1 => {
    console.log(err1.message)
  }
)
thenFs.readFile('./files/2.txt', 'utf8').then(
  r2 => {
    console.log(r2)
  },
  err2 => {
    console.log(err2.message)
  }
)
thenFs.readFile('./files/3.txt', 'utf8').then(
  r3 => {
    console.log(r3)
  },
  err3 => {
    console.log(err3.message)
  }
)
```

.then 链式调用的**优点**：解决了回调地狱的问题

.then 链式调用的**缺点**：代码冗余、阅读性差、不易理解

#### 2. async/await 的基本使用

使用 async/await 简化 Promise 异步操作的示例代码如下：

```javascript
import thenFs from 'then-fs'

// 按照顺序读取文件 1, 2, 3 的内容
async function getAllFile() {
  const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
  console.log(r1)
  const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
  console.log(r2)
  const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
  console.log(r3)
}

getAllFile()
```

#### 3. async/await 的**使用注意事项**

1. 如果在 function 中使用了 await，则 function **必须**被 async 修饰
2. 在 async 方法中，**第一个 await 之前的代码会同步执行**，await 之后的代码会异步执行

```javascript
console.log('A')
async function getAllFile() {
  console.log('B')
  const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
  const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
  const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
  console.log(r1, r2, r3)
  console.log('D')
}

getAllFile()
console.log('C')
```

### 4. EventLoop

#### 1. JavaScript 是单线程的语言

JavaScript 是一门**单线程执行**的语言。也就是说，同一时间只能做一件事情。

单线程执行任务队列的问题：

如果**前一个任务非常耗时**，则后续的任务就不得不一直等待，从而导致**程序假死**的问题。

#### 2. 同步任务和异步任务

为了防止某个**耗时任务**导致**程序假死**的问题，JavaScript 把待执行的任务分为了两类：

1. **同步任务**（synchronous）
   - 又叫做**非耗时任务**，指的是在主线程上排队执行的那些任务
   - 只有前一个任务执行完毕，才能执行后一个任务
2. 异步任务（asynchronous）
   - 又叫做**耗时任务**，异步任务由 JavaScript **委托给**宿主环境进行执行
   - 当异步任务执行完成后，会**通知 JavaScript 主线程**执行异步任务的**回调函数**

#### 3. 同步任务和异步任务的执行过程

1. 同步任务由 JavaScript 主线程次序执行
2. 异步任务**委托给**宿主环境执行
3. 已完成的异步任务**对应的回调函数**，会被加入到任务队列中等待执行
4. JavaScript 主线程的**执行栈**被清空后，会读取任务队列中的回调函数，次序执行
5. **JavaScript 主线程不断重复上面的第 4 步**

#### 4. EventLoop 的基本概念

**JavaScript 主线程从“任务队列”中读取异步任务的回调函数，放到执行栈中依次进行**。这个过程是循环不断的，所以整个的这种运行机制又称为 **EventLoop**（事件循环）。

#### 5. 结合 EventLoop 分析输出的顺序

```javascript
import thenFs from 'then-fs'

console.log('A')
thenFs.readFile('./files/1.txt', 'utf8').then(dataStr => {
  console.log('B')
})
setTimeout(() => {
  console.log('C')
}, 0)
console.log('D')
```

正确的输出结果：ADCB。其中：

- A 和 D 属于**同步任务**。会根据代码的先后顺序**依次被执行**
- C 和 B 属于**异步任务**。它们的回调函数会被加入到任务队列中，等待主线程空闲时再执行

### 5. 宏任务和微任务

#### 1. 什么是宏任务和微任务

JavaScript 把异步任务又做了进一步的划分，异步又分为两类，分别是：

1. **宏任务**（macrotask）
   - 异步 Ajax 请求
   - setTimeout、setInterval
   - 文件操作
   - 其他宏任务
2. **微任务**（microtask）
   - Promise.then、.catch 和 .finally
   - process.nextTick
   - 其他微任务

#### 2. 宏任务和微任务的执行顺序

每一个宏任务执行完之后，都会检查**是否存在待执行的微任务**，如果有，则执行完所有微任务之后，再继续执行下一个宏任务。

#### 3. 去银行办业务的场景

1. 小云和小腾去银行办业务。首先，需要**取号之后进行排队**
   - 宏任务队列
2. 假设当前银行网点只有一个柜员，小云在办理存款业务时，**小腾只能等待**
   - **单线程**，宏任务**按次序执行**
3. 小云办完存款业务后，柜员询问他 是否还想办理其它业务 ？
   - 当前宏任务执行完， **检查是否有微任务**
4. 小云告诉柜员：想要买理财产品、再办个信用卡、最后再兑换点马年纪念币？
   - 执行微任务，后续**宏任务被推迟**
5. 小云离开柜台后，柜员开始为小腾办理业务
   - **所有微任务执行完毕**，开始**执行下一个宏任务**

#### 4. 分析如下代码输出的顺序

```javascript
setTimeout(function () {
  console.log('1')
})

new Promise(function (resolve) {
  console.log('2')
  resolve()
}).then(function () {
  console.log('3')
})

console.log('4')
```

正确的输出顺序是：2431

分析：

1. 先执行所有的**同步任务**
   - 执行第 6 行、第 12 行代码
2. 再执行**微任务**
   - 执行第 9 行代码
3. 再执行**下一个宏任务**
   - 执行第 2 行代码

#### 5. 经典面试题

请分析以下代码输出的顺序

```javascript
console.log('1')
setTimeout(function () {
  console.log('2')
  new Promise(function (resolve) {
    console.log('3')
    resolve()
  }).then(function () {
    console.log('4')
  })
})

new Promise(function (resolve) {
  console.log('5')
  resolve()
}).then(function () {
  console.log('6')
})

setTimeout(function () {
  console.log('7')
  new Promise(function (resolve) {
    console.log('8')
    resolve()
  }).then(function () {
    console.log('9')
  })
})
```

正确的输出顺序是：156234789

### 6. API 接口案例

#### 1. 案例需求

基于 **MySQL 数据库 + Express** 对外提供**用户列表**的 API 接口服务。用到的技术点如下：

- 第三方包 express 和 mysql2
- ES6 模块化
- Promise
- async/await

#### 2. 主要的实现步骤

1. 搭建项目的基本结构
2. 创建基本的服务器
3. 创建 **db** 数据库操作模块
4. 创建 **user_ctrl** 业务模块
5. 创建 **user_router** 路由模块

#### 3. 搭建项目的基本结构

1. 启用 ES6 模块化支持
   - 在 package.json 中声明 **"type": "module"**
2. 安装第三方依赖包
   - 运行 npm install **express**@4.17.1 **mysql2**@2.2.5

#### 4. 创建基本的服务器

```javascript
// 使用 ES6 的默认导入语法
import express from 'express'
const app = express()

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
```

#### 5. 创建 db 数据库操作模块

```javascript
import mysql from 'mysql2'

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  database: 'my_db_01', // 请填写要操作的数据库的名称
  user: 'root', // 请填写登录数据库的用户名
  password: 'admin123' // 请填写登录数据库的密码
})

// 默认导出一个支持 Promise API 的 pool
export default pool.promise()
```

#### 6. 创建 user_ctrl 模块

```javascript
import db from '../db/index.js'

// 获取所有用户的列表数据
export async function getAllUser(req, res) {
  // db.query() 函数的返回值是 Promise 的实例对象，因此，可以使用 async/await 进行简化
  const [rows] = await db.query('select id, username, nickname from ev_users')
  res.send({
    status: 0,
    message: '获取用户列表数据成功！',
    data: rows
  })
}
```

#### 7. 创建 user_router 模块

```javascript
import express from 'express'
// 从 user_ctrl.js 模块中按需导入 getAllUser 函数
import { getAllUser } from '../controller/user_ctrl.js'

// 创建路由对象
const router = new express.Router()
// 挂载路由规则
router.get('/user', getAllUser)

// 使用 ES6 的默认导出语法，将路由对象共享出去
export default router
```

#### 8. 导入并挂载路由模块

```javascript
import express from 'express'
// 使用默认导入语法，导入路由对象
import userRouter from '/router/user_router.js'
const app = express()

// 2. 挂载用户路由模块
app.use('/api', userRouter)

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
```

#### 9. 使用 try...catch 捕获异常

```javascript
export async function getAllUser(req, res) {
  // 使用 try...catch 捕获 Promise 异步任务中产生的异常错误，并在 catch 块中进行处理
  try {
    // ev_users 表中没有 xxx 字段，所以此 SQL 语句会"执行异常"
    const [rows] = await db.query('select id, username, nickname from ev_users')
    res.send({ status: 0, message: '获取用户列表数据成功！', data: rows })
  } catch (e) {
    res.send({ status: 1, message: '获取用户列表数据失败！', data: e.message })
  }
}
```

### 7. 总结

1. 能够知道如何**使用 ES6 的模块化语法**
   - 默认导出与默认导入、按需导出与按需导入
2. 能够知道如何**使用 Promise 解决回调地狱问题**
   - promise.**then**()、promise.**catch**()
3. 能够使用 **async/await** 简化 Promise 的调用
   - 方法中用到了 await，则方法需要被 async 修饰
4. 能够说出什么是 EventLoop
   - **EventLoop 示意图**
5. 能够说出宏任务和微任务的执行顺序
   - 在执行下一个宏任务之前，**先检查是否有执行的微任务**
