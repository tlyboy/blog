---
title: TypeScript
date: 2022-3-22
categories:
  - 前端笔记
tags:
  - JavaScript
  - TypeScript
---

## 1. TypeScript 介绍

### 1. TypeScript 是什么

**TypeScript**（简称：TS）是 JavaScript 的**超集**（JS 有的 TS 都有）。

TypeScript = **Type** + JavaScript（在 JS 基础之上，为 JS 添加了**类型支持**）。

TypeScript 是微软开发的开源编程语言，可以在任何运行 JavaScript 的地方运行。

```typescript
// TypeScript 代码：有明确的类型，即：number（数据类型）
let age1: number = 18
// JavaScript 代码：无明确的类型
let age2 = 18
```

### 2. TypeScript 为什么要为 JS 添加类型支持？

背景：JS 的类型系统存在“先天缺陷”，JS 代码中绝大部分错误都是**类型**错误（Uncaught **Type**Error）。

问题：增加了找 Bug、改 Bug 的时间，严重影响开发效率。

<br>

从编程语言的动静来区分，TypeScript 属于静态类型的编程语言，JS 属于动态类型的编程语言。

静态类型：编译期做类型检查；动态类型：执行期间做类型检查。

代码编译和代码执行的顺序：1 编译 2 执行。

<br>

对于 JS 来说：需要等到代码真正去**执行**的时候才能**发现错误**（晚）。

对于 TS 来说：在代码**编译**的时候（代码执行前）就可以**发现错误**（早）。

并且，配合 VSCode 等开发工具，TS 可以**提前到在编写代码的同时**就发现代码中的错误，**减少找 Bug、改 Bug 时间**。

### 3. TypeScript 相比 JS 的优势

1. 更早（写代码的同时）发现错误，**减少找 Bug、改 Bug 时间**，提高开发效率。
2. 程序中任何位置的代码都有**代码提示**，随时随地的安全感，增强了开发体验。
3. 强大的**类型系统**提升了代码的可维护性，使得**重构代码更加容易**。
4. 支持**最新的 ECMAScript 语法**，优先体验最新的语法，让你走在前端技术的最前沿。
5. TS **类型推断**机制，**不需要**在代码中的**每个地方都显示标注类型**，让你在享受优势的同时，尽量降低了成本。

<br>

除此之外，Vue 3 源码使用 TS 重写、Angular 默认支持 TS、React 与 TS 完美配合，TypeScript 已成为大中型前端项目的首选编程语言。

## 2. TypeScript 初体验

### 1. 安装编译 TS 的工具包

问题：为什么要安装编译 TS 的工具包？

回答：Node.js/浏览器，只认识 JS 代码，不认识 TS 代码。需要先将 TS 代码转化为 JS 代码，然后才能运行。

安装命令：npm i -g **typescript**。

typescript 包：用来编译 TS 代码的包，提供了 **tsc** 命令，实现了 TS -> JS 的转化。

验真是否安装成功：tsc -v（查看 typescript 的版本）。

### 2. 编译并运行 TS 代码

1. 创建 hello**.ts** 文件（注意：TS 文件的后缀名为 **.ts**）。
2. 将 TS 编译为 JS：在终端中输入命令，**tsc** hello.ts（此时，在同级目录中会出现一个同名的 JS 文件）。
3. 执行 JS 代码：在终端中输入命令，node hello.js。

<br>

1 创建 ts 文件 ——> 2 编译 TS ——> 3 执行 JS

<br>

说明：所有合法的 JS 代码都是 TS 代码，有 JS 基础只需要学习 TS 的类型即可。

注意：由 TS 编译生成的 **JS 文件**，代码中就**没有类型信息**了。

### 3. 简化运行 TS 的步骤

问题描述：每次修改代码后，都要重复执行两个命令，才能运行 TS 代码，太繁琐。

简化方式：使用 **ts-node** 包，直接在 Node.js 中执行 TS 代码。

安装命令：npm i -g **ts-node**（ts-node 包提供了 ts-node 命令）。

使用方式：**ts-node** hello.ts。

解释：ts-node 命令在内部偷偷的将 TS -> JS，然后，再运行 JS 代码。

## 3. TypeScript 常用类型

### 概述

TypeScript 是 JS 的超集，TS 提供了 JS 的所有功能，并且额外的增加了：**类型系统**。

- 所有的 JS 代码都是 TS 代码。
- JS 有类型（比如，number/string 等），但是 **JS 不会检查变量的类型是否发生变化**。而 **TS 会检查**。

TypeScript 类型系统的主要优势：可以**显示标记出代码中的意外行为**，从而降低了发生错误的可能性。

1. 类型注解
2. 常用基础类型

### 1. 类型注解

示例代码：

```typescript
let age: number = 18
```

说明：代码中的 **: number** 就是类型注解。

作用：为变量**添加类型约束**。比如：上述代码中，约定变量 age 为 number（数值类型）。

解释：**约定了什么类型，就只能给变量赋值该类型的值**，否则，就会报错。

### 2. 常用基础类型概述

可以将 TS 中的常用基础类型细分为两类：1 JS 已有类型 2 TS 新增类型。

1. JS 已有类型
   - 原始类型：number/string/boolean/null/underfind/symbol。
   - 对象类型：object（包括，数据、对象、函数等对象）。
2. TS 新增类型：联合类型、自定义类型（类型别名）、接口、元组、字面量模型、枚举、void、any 等。

### 3. 原始类型

1. 原始类型：number/string/boolean/null/underfind/symbol。

特点：**简单**。这些类型，完全按照 JS 中类型的名称来书写。

```typescript
let age: number = 18
let myName: string = '刘老师'
let isLoading: boolean = false
// 等等
```

### 4. 数组类型

2. 对象类型：object（包括，数组、对象、函数等对象）

特点：对象类型，在 TS 中更加细化，每个具体的对象都有自己的类型语法。

- **数组类型**的两种写法：（推荐使用 **number[]** 写法）

```typescript
let numbers: number[] = [1, 2, 3]
let strings: Array<string> = ['a', 'b', 'c']
```

需求：数组中既有 number 类型，又有 string 类型，这个数组的类型应该如何写？

```typescript
let arr: (number | string)[] = [1, 'a', 3, 'b']
```

解释：**|**（竖线）在 TS 中叫做**联合类型**（由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种）。

> 注意：这是 TS 中联合类型的语法，只有一根竖线，不要与 JS 中的或（||）混淆了。

### 5. 类型别名

**类型别名**（自定义类型）：为任意类型起别名。

使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名，**简化该类型的使用**。

```typescript
type CustomArrary = (number | string)[]
let arr1: CustomArrary = [1, 'a', 3, 'b']
let arr2: CustomArrary = ['x', 'y', 6, 7]
```

解释：

1. 使用 **type** 关键字来创建类型别名。
2. 类型别名（比如，此处的 CustomArray），可以是任意合法的变量名称。
3. 创建类型别名后，直接**使用该类型别名作为变量的类型注解**即可。

### 6. 函数类型

函数的类型实际上指的是：函数参数和返回值的类型。

为函数指定类型的两种方式：1 单独指定参数、返回值的类型 2 同时指定参数、返回值的类型。

1. 单独指定参数、返回值的类型：

```typescript
function add(num1: number, num2: number): number {
  return num1 + num2
}
```

```typescript
const add = (num1: number, num2: number): number => {
  return num1 + num2
}
```

2. 同时指定参数、返回值的类型：

```typescript
const add: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
```

解释：当函数作为表达式时，可以通过**类似箭头函数形式的语法**来为函数添加类型。

> 注意：这种形式只适用于函数表达式。

如果函数没有返回值，那么，函数返回值为：**void**。

```typescript
function greet(name: string): void {
  console.log('Hello', name)
}
```

使用函数实现某个功能时，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到**可选参数**了。

比如，数组的 slice 方法，可以 slice() 也可以 slice(1) 还可以 slice(1, 3)。

可选参数：在可传不可传的参数名称后面添加 **?**（问号）。

```typescript
function mySlice(start?: number, end?: number): void {
  console.log('起始索引：', start, '结束索引：', end)
}
```

> 注意：**可选参数只能出现在参数列表的最后**，也就是说可选参数后面不能再出现必选参数。

### 7. 对象类型

JS 中对象是由属性和方法构成的，而 TS 中**对象的类型**就是在**描述对象的结构**（有什么类型的属性和方法）。

对象类型的写法：

```typescript
let person: { name: string; age: number; sayHi(): void } = {
  name: 'jack',
  age: 19,
  sayHi() {}
}
```

解释：

1. 直接使用 {} 来描述对象结构。属性采用**属性名: 类型**的形式；方法采用方法名(): 返回值类型的形式。
2. 如果方法有参数，就在方法后面的小括号中指定参数类型（比如：**greet(name: string): void**）。
3. 在一行代码中指定对象的多个属性类型时，使用 ;（分号）来分隔。

- 如果一行代码只指定一个属性类型（通过换行来分隔多个属性类型），可以去掉 ;（分号）。
- 方法的类型也可以使用箭头函数形式（比如：{ sayHi: () => void }）。

对象的属性或方法，也是可选的，此时就用到**可选属性**了。

比如，我们在使用 axios({ ... }) 时，如果发生 GET 请求，method 属性就可以省略。

```typescript
function myAxios(config: { url: string; method?: string }) {
  console.log(config)
}
```

**可选属性**的语法与函数可选参数的语法一致，都使用 **?**（问号）来表示。

### 8. 接口

当一个对象类型被多次使用时，一般会使用**接口**（**interface**）来描述对象的类型，达到**复用**的目的。

解释：

1. 使用 **interface** 关键字来声明接口。
2. 接口名称（比如，此处的 IPerson），可以是任意合法的变量名称。
3. 声明接口后，直接**使用接口名称作为变量的类型**。
4. 因为每一行只有一个属性类型，因此，属性类型后没有 ;

```typescript
interface IPerson {
  name: string
  age: number
  sayHi(): void
}

let person: IPerson = {
  name: 'jack',
  age: 19,
  sayHi() {}
}
```

interface（接口）和 type（类型别名）的对比：

- 相同点：都可以给对象指定的类型。
- 不同点：
  - 接口，只能为对象指定类型。
  - 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名。

```typescript
interface IPerson {
  name: string
  age: number
  sayHi(): void
}
```

```typescript
type IPerson = {
  name: string
  age: number
  sayHi(): void
}
```

```typescript
type NumStr = number | string
```

如果两个接口之间有相同的属性和或方法，可以**将公共的属性或方法抽离出来**，**通过继承类实现复用**。

比如，这两个接口都有 x、y 两个属性，重复写两次，可以，但很繁琐。

```typescript
interface Point2D {
  x: number
  y: number
}

interface Point3D {
  x: number
  y: number
  z: number
}
```

解释：

1. 使用 **extends**（继承）关键字实现了接口 Point3D 继承 Point2D。
2. 继承后，Point3D 就有了 Point3D 继承 Point2D。

### 9. 元组

场景：在地图中，使用经纬度坐标来标记位置信息。

可以使用数组来记录坐标，那么，该数组中只有两个元素，并且这两个元素都是数值类型。

```typescript
let position: number[] = [39.5427, 116.2317]
```

使用 number[] 的缺点：不严谨，因为该类型的数组中可以出现任意多个数字。

更好的方式：**元组**（**Tuple**）。

元组类型是另一种类型的数组，它**确切地知道包含多少个元素，以及特点索引对应的类型**。

```typescript
let position: [number, number] = [39.5427， 116.2317]
```

解释：

1. 元组类型可以确切地标记出多少个元素，以及每个的类型。
2. 该示例中，元素有两个元素，每个元素的类型都是 number。

### 10. 类型推断

在 TS 中，某些没有明确指出类型的地方，TS 的**类型推论机制会帮助提供类型**。

换句话说：由于类型推论的存在，这些地方，类型注解可以**省略**不写！

发生类型推论的 2 种常见场景：1 声明变量并初始化时 2 决定函数返回值时。

```typescript
let age = 18
```

```typescript
function add(num1: number, num2: number) {
  return num1 + num2
}
```

> 注意：这两种情况下，类型注解可以省略不写！
>
> 推荐：**能省略类型注解的地方就省略**（偷懒，充分利用 TS 的类型推断能力，提示开发效率）。
>
> 技巧：如果不知道类型，可以通过鼠标放在变量名称上，利用
>
> VSCode 的提示来查看类型。

### 11. 类型断言

有时候你会比 TS 更加明确一个值的类型，此时，可以使用**类型断言**来指定更具体的类型。

比如。

```html
<a href="http://www.itcast.cn/" id="link">传智教育</a>
```

```typescript
const aLink = document.getElementById('link')
```

> 注意：getElementById 方法返回的值的类型是 HTMLElement，该类型只包含所有标签公共的属性或方法，不包含 a 标签特有的 href 等属性。

因此，这个类型太宽泛（不具体），无法操作 href 等 a 标签特有的属性或方法。

解决方式：这种情况下就需要**使用类型断言指定更加具体的类型**。

使用类型断言：

```typescript
const aLink = document.getElementById('link') as HTMLAnchorElement
```

解释：

1. 使用 **as** 关键字实现类型断言。
2. 关键字 **as** 后面的类型是一个更加具体的类型（HTMLAnchorElement 是 HTMLElement 的子类型）。
3. 通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了。

另一种语法，使用 \< \> 语法，这种语法形式不常用知道即可：

```typescript
const aLink = <HTMLAnchorElement>document.getElementById('link')
```

### 12. 字面量类型

思考以下代码，两个变量的类型分别是什么？

```typescript
let str1 = 'Hello TS'
const str2 = 'Hello TS'
```

通过类型推断机制，可以得到答案：

1. 变量 str1 的类型为：**string**。
2. 变量 str2 的类型为：**'Hello TS'**。

解释：

1. str1 是一个变量（let），它的值可以是任意字符串，所以类型为：**string**。
2. str2 是一个常量（const），它的值不能变化只能是 'Hello TS'，所以，它的类型为：'**Hello TS**'。

> 注意：此处的 **'Hello TS'**，就是一个**字面量类型**。也就是说**某个特定的字符串也可以作为 TS 中的类型**。

除字符串外，任意的 JS 字面量（比如、对象、数字等）都可以作为类型使用。

使用模式：**字面量类型配合联合类型一起使用**。

使用场景：用来**表示一组明确的可选值的列表**。

比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上、下、左、右中的任意一个。

```typescript
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction)
}
```

解释：参数 direction 的值只能是 up/down/left/right 中的一个。

优势：相比于 string 类型，使用字面量类型更加精确、严谨。

### 13. 枚举

枚举的功能类似于字面量类型 + 联合类型组合的功能，也可以**表示一组明确的可选值**。

**枚举：定义一组命名常量**。它描述一个值，该值可以是这些命名常量中的一个。

```typescript
enum Direction {
  up,
  Down,
  Left,
  Right
}

function changeDirection(direction: Direction) {
  console.log(direction)
}
```

解释：

1. 使用 **enum** 关键字定义枚举。
2. 约定枚举名称、枚举中的值以大小写字母开头。
3. 枚举中的多个值之间通过，（逗号）分隔。
4. 定义好枚举后，直接使用枚举名称作为类型注解。

> 注意：形参 direction 的**类型为枚举 Direction**，那么，实参的**值就应该是枚举 DIrection 成员的任意一个**。

**访问枚举成员：**

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}

function changeDirection(direction: Direction) {
  console.log(direction)
}

changeDirection(Direction.Up)
```

解释：类似于 JS 中的对象，直接通过**点（.）语法**访问枚举的成员。

问题：我们把枚举成员作为了函数的实参，它的值是什么呢？

```typescript
changeDirection(Direction.Up)
```

解释：通过将鼠标移入 DIrection.Up，可以看到枚举成员 Up 的值为 0.

注意：**枚举成员是有值的**，默认为：**从 0 开始自增的数值**。

我们把 , 枚举成员的值为数字的枚举，称为：**数字枚举**。

当前，也可以给枚举中的成员初始化值。

```typescript
// Down -> 11、Left -> 12、Right -> 13
enum Direction {
  Up = 10,
  Down,
  Left,
  Right
}
```

```typescript
enum Direction {
  Up = 2,
  Down = 4,
  Left = 8,
  Right = 16
}
```

**字符串枚举**：枚举成员的值是字符串。

```typescript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
```

> 注意：字符串枚举没有自增长行为，因此，**字符串枚举的每个成员必须有初始值**。

枚举 TS 为数不多的非 JavaScript 类型级扩展（不仅仅是类型）特征之一。

因为：其他类型仅仅被当做类型，而**枚举不仅作用类型，还提供值**（枚举成员都是有值的）。

也就是说，其他的类型会在编译为 JS 代码时自动移除。

```typescript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
```

```javascript
var Direction
;(function (Direction) {
  Direction['Up'] = 'UP'
  Direction['Down'] = 'DOWN'
  Direction['Left'] = 'LEFT'
  Direction['Right'] = 'RIGHT'
})(Direction || (Direction = {}))
```

说明：枚举与前面讲到的字面量类型+联合类型组合的功能类似，都用来表示一组明确的可选值列表。

一般情况下，**推荐使用字面量类型 + 联合类型组合的方式**，因为相比枚举，这种方式更加直观、简洁、高效。

### 14. any 类型

**原则：不推荐使用 any ！**这会让 TypeScript 变为“AnyScript”（失去 TS 类型保护的优势）。

因为当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示。

```typescript
let obj: any = { x: 0 }

obj.bar = 100
obj()
const n: number = obj
```

解释：以上操作都不会有任何类型错误提示，即使可能存在错误！

尽可能的避免使用 any 类型，除非**临时使用 any** 来“避免”书写很长、很复杂的类型！

其他可能的避免使用 any 类型的情况：1 声明变量不提供类型也不提供默认值 2 函数参数不加类型。

> 注意：因为不推荐使用 any，所以，这两种情况下都应该提供类型！

### 15. typeof

众所周知，JS 中提供了 typeof 操作符，用来在 JS 中获取数据的类型。

```javascript
console.log(typeof 'Hello world') // 打印 string
```

实际上，**TS 也提供了 typeof 操作符**：可以在**类型上下文**中引用变量或属性的类型（类型查询）。

使用场景：根据已有的变量的值，获取该值的类型，来简化类型书写。

```typescript
let p = { x: 1, y: 2 }
function formartPoint(point: { x: number; y: number }) {}
formartPoint(p)
```

```typescript
function formartPoint(point: typeof p) {}
```

解释：

1. 使用 **typeof** 操作符来获取变量 p 的类型，结果与第一种（对象字面量形式的类型）相同。
2. typeof 出现在**类型注解的位置**（参数名称的冒号后面）**所处的环境就在类型上下文**（区别于 JS 代码）。
3. 注意：typeof 只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）。

## 4. TypeScript 高级类型

### 概述

TS 中的高级类型有很多，重点学习以下高级类型：

1. class 类
2. 类型兼容性
3. 交叉类型
4. 泛型和 keyof
5. 索引签名类型和索引查询类型
6. 映射类型

### 1. class 类

TypeScript 全面支持 ES2015 中引入的 **class** 关键字，并为其添加了类型注解和其他语法（比如，可见性修饰符等）。

```typescript
class Person {}

const p = new Person()
```

解释：

1. 根据 TS 中的类型推断，可以知道 Person 类的实例对象 p 的类型是 Person。
1. TS 中的 **class，不仅提供了 class 的语法功能，也作为一种类型存在**。

<br>

实例属性初始化：

```typescript
class Person {
  age: number
  gender = '男'
  // gender : string = '男'
}
```

解释：

1. 声明成员 age，类型为 number（没有初始值）。
2. 声明成员 gender，并设置初始值，此时，可省略类型注解（TS 类型推论为 string 类型）。

<br>

构造函数：

```typescript
class Person {
  age: number
  gender: string

  constructor(age: number, gender: string) {
    this.age = age
    this.gender = gender
  }
}
```

解释：

1. 成员初始化（比如，age: number）后，才可以通过 this.age 来访问示例成员。
2. 需要为构造函数指定类型注解，否则会被隐式推断为 any；构造函数不需要返回值类型。

<br>

实例方法：

```typescript
class Point {
  x = 10
  y = 10

  scale(n: number): void {
    this.x *= n
    this.y *= n
  }
}
```

解释：方法的类型注解（参数和返回值）与函数用法相同。

<br>

该继承的两种方式：1 **extends**（继承父类）2 implements（实现接口）。

说明：JS 中只有 extends，而 implements 是 TS 提供的。

```typescript
class Animail {
  move() {
    console.log('Moving along!')
  }
}

class Dog extends Animail {
  bark() {
    console.log('汪！')
  }
}

const dog = new Dog()
```

解释：

1. 通过 **extends** 关键字实现**继承**。
2. 子类 Dog 继承父类 Animal，则 Dog 的实例对象 dog 就同时具有了父类 Animal 和 子类 Dog 的所有属性和方法。

<br>

类继承的两种方式：1 extends（继承父类）2 **implements（实现接口）**。

```typescript
interface Singable {
  sing(): void
}

class Person implements Singable {
  sing(): void {
    console.log('你是我的小呀小苹果儿')
  }
}
```

解释：

1. 通过 **implements** 关键字让 class 实现接口。
2. Person 类实现接口 Singable 意味着，Person 类中必须提供 Singable 接口中指定的所有方法和属性。

<br>

类成员可见性：可以使用 TS 来**控制 class 的方法或属性对于 class 外的代码是否可见**。

可见性修饰符包括：1 **public（公有的）**2 protected（受保护的）3 private（私有的）。

1. public：表示公有的、公开的，**公有成员可以被任何地方访问**，默认可见性。

```typescript
class Animal {
  public move() {
    console.log('Moving along!')
  }
}
```

解释：

1. 在类属性或方法前面添加 **public** 关键字，来修饰该属性或方法是共有的。
2. 因为 **public** 是默认可见性，所以，**可以直接省略**。

<br>

2. **protected**：表示**受保护的**，仅对其声明所在类和子类中（非实例对象）可见。

```typescript
class Animal {
  protected move() {
    console.log('Moving along!')
  }
}

class Dog extends Animal {
  bark() {
    console.log('汪！')
    this.move()
  }
}
```

解释：

1. 在类属性或方法前面添加 **protected** 关键字，来修饰该属性或方法是受保护的。
2. 在子类的方法内部可以通过 this 来访问父类中受保护的成员，但是，**对实例不可见**！

<br>

3. **private**：表示**私有的**，**只在当前类中可见**，对实例对象以及子类也是不可见的。

```typescript
class Animal {
  private move() {
    console.log('Moving along!')
  }

  walk() {
    this.move()
  }
}
```

解释：

1. 在类属性或方法前面添加 **private** 关键字，来修饰该属性或方法是私有的。
2. 私有的属性或方法只在当前类中可见，对子类和实例对象也都是不可见的！

<br>

除了可见修饰性之外，还有一个常见修饰符就是：**readonly（只读修饰符）**。

**readonly**：表示**只读**，**用来防止在构造函数之外对属性进行赋值**。

```typescript
class Person {
  readonly age: number = 18

  constructor(age: number) {
    this.age = age
  }
}
```

解释：

1. 使用 **readonly** 关键字修饰该属性是只读的，注意**只能修饰属性不能修饰方法**。
2. 注意：属性 age 后面的类型注解（比如，此处的 number）如果不加，则 age 的类型为 18（字面量类型）。
3. **接口或者 {} 表示的对象类型，也可以使用 readonly**。

### 2. 类型兼容性

两种类型系统：1 Structural Type System（结构化类型系统）2 Nominal Type System（表明类型系统）。

**TS 采用的是结构化类型系统**，也叫做 duck typing（鸭子类型），**类型检查关注的是值所具有的形状**。

也就是说，在结构系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。

```typescript
class Point {
  x: number
  y: number
}

class Point2D {
  x: number
  y: number
}

const p: Point = new Point2D()
```

解释：

1. Point 和 Point2D 是两个名称不同的类。
2. 变量 p 的类型被显示标注为 Point 类型，但是，它的值却是 Point2D 的实例，并且没有类型错误。
3. 因为 TS 是结构化类型系统，只检查 Point 和 Point2D 的结构是否相同（相同，都具有 x 和 y 两个属性，属性类型也相同）。
4. 但是，如果在 Nominal Type System 中（比如，C#、Java 等），它们是不同的类，类型无法兼容。

<br>

> 注意：在结构化类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型，这种说法并不准确。

**更准确的说法：对于对象来说，y 的成员至少与 x 相同，则 x 兼容 y（成员多的可以赋值给少的）。**

```typescript
class Point {
  x: number
  y: number
}

class Point3D {
  x: number
  y: number
  z: number
}

const p: Point = new Point3D()
```

解释：

1. Point3D 的成员**至少**与 Point 相同，则 Point 兼容 Point3D。
2. 所以，成员多的 Point3D 可以赋值给成员少的 Point。

<br>

除了 class 之外，TS 中的其他类型也存在相互兼容的情况，包括：1 **接口兼容性** 2 函数兼容性 等。

- **接口之间的兼容性，类似于 class**。并且，class 和 interface 之间也可以兼容。

```typescript
interface Point {
  x: number
  y: number
}

interface Point2D {
  x: number
  y: number
}

let p1: Point
let p2: Point2D = p1

interface Point3D {
  x: number
  y: number
  z: number
}

let p3: Point3D

p2 = p3
```

```typescript
class Point3D {
  x: number
  y: number
  z: number
}

let p3: Point2D = new Point3D()
```

## 5. TypeScript 类型声明文件

## 6. 在 React 中使用 TypeScript
