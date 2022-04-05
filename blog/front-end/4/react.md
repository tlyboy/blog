---
title: React
date: 2022-3-22
categories:
  - 前端笔记
tags:
  - JavaScript
  - React
---

## 1. React 基础

### 目标

- 能够说出 React 是什么
- 能够说出 React 的特点
- 能够掌握 React 的基本使用
- 能够使用 React 脚手架

### 1. React 概述

#### 1. 什么是 React

**React** 是一个用于**构建用户界面**的 **JavaScript 库**。

用户界面：HTML 页面（前端）

React 主要用来写 HTML 页面，或**构建 Web 应用**

如果从 MVC 的角度来看，React 仅仅是视图层（V），也就是只负责视图的渲染，而并非提供了完整的 M 和 C 的功能。

React 起源于 Facebook 的内部项目，后来用来架设 Instagram 的网站，并于 2013 年 5 月开源

#### 2. React 的特点

- 声明式
- 基于组件
- 学习一次，随处使用

##### 1. 声明式

你只需要描述 UI（HTML）看起来是什么样，就跟写 HTML 一样

React 负责渲染 UI，并在数据变化时更新 UI

```jsx
const jsx = (
  <div className="app">
    <h1>Hello React！动态变化数据：{count}</h1>
  </div>
)
```

##### 2. 基于组件

- 组件是 React **最重要**的内容
- 组件表示页面中的部分内容
- 组件、复用多个组件，可以实现完整的页面功能

##### 3. 学习一次，随处使用

- 使用 React 可以开发 Web 应用
- 使用 React 可以开发移动端原生应用（react-native）
- 使用 React 可以开发 VR（虚拟现实）应用（react 360）

### 2. React 的基本使用

#### 1. React 的安装

安装命令：**npm i react react-dom**

- react 包是核心，提供创建元素、组件等功能
- react-dom 包提供 DOM 相关功能等

#### 2. React 的使用

1. 引入 react 和 react-dom 两个 js 文件

```html
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
```

2. 创建 React 元素

```html
<script>
  const title = React.createElement('h1', null, 'Hello React')
  ReactDOM.render(title, document.getElementById('root'))
</script>
```

#### 3. 方法说明

- React.createElement() 说明（知道）

```javascript
// 返回值：React 元素
// 第一个参数：要创建的 React 名称
// 第二个参数：该 React 元素的属性
// 第三个及其以后的参数：该 React 元素的子节点
const el = React.createElement('h1', { title: '标题' }, 'Hello React')
```

- **ReactDOM.render()** 说明

```javascript
// 第一个参数：要渲染的 React 元素
// 第二个参数：DOM 对象，用于指定渲染到页面中的位置
ReactDOM.render(el, document.getElementById('root'))
```

### 3. React 脚手架的使用

#### 1. React 脚手架意义

1. 脚手架是开发现代 Web 应用的必备。
2. 充分利用 Webpack、Babel、ESLint 等工具辅助项目开发。
3. 零配置，无需手动配置繁琐的工具即可使用。
4. 关注业务，而不是工具配置。

#### 2. 使用 React 脚手架初始化项目

1. 初始化项目，命令：**npx create-react-app my-app**
1. 启动项目，在项目根目录执行命令：**npm start**

##### npx 命令介绍

- `npm v5.2.0` 引入的一条命令
- 目的：提升包内提供的命令行工具的使用体验
- 原来：先安装脚手架包，再使用这个包中提供的命令
- 现在：**无需安装脚手架包**，就可以直接使用这个包提供的命令

##### 补充说明

1. 推荐使用：**npx create-react-app my-app**
2. npm init react-app my-app
3. yarn create react-app my-app

- yarn 是 Facebook 发布的包管理器，可以看做是 npm 的替代品，功能与 npm 相同
- yarn 具有快速、可靠和安全的特点
- 初始化新项目：**yarn init**
- 安装包：**yarn add 包名称**
- 安装项目依赖项：**yarn**
- 其他命令，请参考 [yarn 文档](https://classic.yarnpkg.com/lang/en/)

#### 3. 在脚手架中使用 React

1. 导入 react 和 react-dom 两个包。

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
```

2. 调用 `React.createElement()` 方法创建 react 元素。
3. 调用 **ReactDOM.render()** 方法渲染 react 元素到页面中。

### 总结

#### React 基础

1. React 是构建用户界面的 JavaScript 库
2. 使用 react 时，**推荐使用脚手架方式**。
3. 初始化项目命令：**npx create-react-app my-app**。
4. 启动项目命令：**yarn start**（或 **npm start**）。
5. React.createElement() 方法用于创建 react 元素（知道）。
6. ReactDOM.render() 方法负责渲染 react 元素到页面中。

## 2. JSX

### 目标

- 能够知道什么是 JSX
- 能够知道使用 JSX 创建 React 元素
- 能够在 JSX 中使用 JavaScript 表达式
- 能够使用 JSX 的条件渲染和列表渲染
- 能够给 JSX 添加样式

### 1. JSX 的基本使用

#### 1. createElement() 的问题

1. 繁琐不简洁。
2. 不直观，无法一眼看出所描述的结构。
3. 不优雅，用户体验不爽。

```js
React.createElement(
  'div',
  { className: 'shopping-list' },
  React.createElement('h1', null, 'Shopping List'),
  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Instagram'),
    React.createElement('li', null, 'WhatsApp')
  )
)
```

```jsx
<div className="shopping-list">
  <h1>Shopping List</h1>
  <ul>
    <li>Instagram</li>
    <li>WhatsApp</li>
  </ul>
</div>
```

#### 2. JSX 简介

**JSX** 是 **JavaScript XML** 的简写，表示在 JavaScript 代码中写 XML（HTML）格式的代码。

优势：声明式语法更加直观、与 HTML 结构相同，降低了学习成本、提升开发效率

**JSX 是 React 的核心内容。**

```jsx
<div className="shopping-list">
  <h1>Shopping List</h1>
  <ul>
    <li>Instagram</li>
    <li>WhatsApp</li>
  </ul>
</div>
```

```js
React.createElement(
  'div',
  { className: 'shopping-list' },
  React.createElement('h1', null, 'Shopping List'),
  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Instagram'),
    React.createElement('li', null, 'WhatsApp')
  )
)
```

#### 3. 使用步骤

1. 使用 JSX 语法创建 react 元素

```jsx
// 使用 JSX 语法，创建 react 元素：
const title = <h1>Hello JSX</h1>
```

2. 使用 ReactDOM.render() 方法渲染 react 元素到页面中

```jsx
// 渲染创建好的 React 元素
ReactDOM.render(title, root)
```

#### 小结

1. 推荐使用 JSX 语法创建 React 元素
2. 写 JSX 就跟写 HTML 一样，更加直观、友好
3. JSX 语法更能体现 React 的声明式特点（描述 UI 长什么样子）
4. 使用步骤：

```jsx
// 1. 使用 JSX 创建 react 元素
const title = <h1>Hello JSX</h1>
// 2. 渲染创建 react 元素
ReactDOM.render(title, root)
```

#### 思考

##### 为什么脚手架中可以使用 JSX 语法？

1. JSX 不是标准的 ECMAScript 语法，它是 ECMAScript 的语法扩展。
2. 需要使用 babel 编译处理后，才能在浏览器环境中使用。
3. create-react-App 脚手架中已经默认又该配置，无需手动配置。
4. 编译 JSX 语法的包为：[@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react/)。

#### 4. 注意点

1. React 元素的属性名使用驼峰命名法
2. 特殊属性名：class -> **className**、for -> htmlFor、tabindex -> tabIndex。
3. 没有子节点的 React 元素可以用 **/\>** 结束。
4. 推荐：使用**小括号包裹 JSX**，从而避免 JS 中的自动插入分号陷阱。

```jsx
// 使用小括号包裹 JSX
const dv = <div>Hello JSX</div>
```

### 2. JSX 中使用 JavaScript 表达式

#### 嵌入 JS 表达式

- 数据存储在 JS 中
- 语法：\{ JavaScript 表达式 \}

```jsx
const name = 'Jack'
const dv = <div>你好，我叫：？？？</div>
```

```jsx
const name = 'Jack'
const dv = <div>你好，我叫：{name}</div>
```

#### 注意点

- **单大括号**中可以使用任意的 JavaScript 表达式
- JSX 自身也是 JS 表达式
- 注意：JS 中的对象是一个例外，一般只会出现在 style 属性中
- 注意：**不能再 \{\} 中出现语句**（比如：if/for 等）

```jsx
const h1 = <h1>我是 JSX</h1>

const dv = <div>嵌入表达式：{h1}</div>
```

### 3. JSX 的条件渲染

- 场景：loading 效果
- 条件渲染：根据条件渲染特定的 JSX 结构
- 可以使用 **if/else** 或**三元运算符**或**逻辑运算符**来实现

```jsx
const loadData = () => {
  if (isLoading) {
    return <div>数据加载中，请稍后...</div>
  }
  return <div>数据加载完成，此处显示加载后的数据</div>
}
const dv = <div>{loadData()}</div>
```

### 4. JSX 的列表渲染

- 如果要渲染一组数据，应该使用数组的 **map()** 方法
- 注意：渲染列表时应该添加 key 属性，**key 属性的值要保证唯一**
- 原则：map() 遍历谁，就给谁添加 key 属性
- 注意：**尽量避免使用索引号作为 key**

```jsx
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]
```

```jsx
const list = (
    <ul>
        {songs.map(item) => <li key={item.id}>item</li>}
    </ul>
)
```

### 5. JSX 的样式处理

1. 行内样式——style

```jsx
<h1 style={{ color: 'red', backgroundColor: 'skyblue' }}>JSX的样式处理</h1>
```

2. **类名——className（推荐）**

```jsx
<h1 className="title">JSX的样式处理</h1>
```

### 总结

#### JSX

1. JSX 是 React 的核心内容。
2. JSX 表示在 JS 代码中写 HTML 结构，是 React 声明式的体现。
3. 使用 JSX 配合嵌入的 JS 表达式、条件渲染、列表渲染，可以描述任意 UI 结构。
4. 推荐使用 className 的方式给 JSX 添加样式。
5. React 完全利用 JS 语言自身的能力来编写 UI，而不是造轮子增强 HTML 功能。

## 3. React 组件基础

### 目标

- 能够使用函数创建组件
- 能够使用 class 创建组件
- 能够给 React 元素绑定事件
- 能够使用 state 和 setState()
- 能够处理事件中的 this 指向问题
- 能够使用受控组件方式处理表单

### 1. React 组件介绍

### 2. React 组件的两种创建方式

### 3. React 事件处理

### 4. 有状态组件和无状态组件

### 5. 组件中的 state 和 setState()

### 6. 事件绑定 this 指向

### 7. 表单处理
