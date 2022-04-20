---
title: Vue2
date: 2022-3-22
categories:
  - 前端笔记
tags:
  - JavaScript
  - Vue
---

## 1. 前端工程化与 webpack

### 1. 前端工程化与 webpack

#### 1. 小白眼中的前端开发 vs 实际的前端开发

小白眼中的前端开发：

- 会写 HTML + CSS + JavaScript 就会前端开发
- 需要美化页面样式，就拽一个 bootstrap 过来
- 需要操作 DOM 或发起 Ajax 请求，再拽一个 jQuery 过来
- 需要快速实现网页布局效果，就拽一个 Layui 过来

实际的前端开发：

- **模块化**（js 的模块化、css 的模块化、资源的模块化）
- **组件化**（复用现有的 UI 结构、样式、行为）
- **规范化**（目录结构的划分、编码规范化、接口规范化、文档规范化、Git 分支管理）
- **自动化**（自动化构建、自动部署、自动化测试）

#### 2. 什么是前端工程化

前端工程化指的是：在**企业级的前端项目开发**中，把前端开发所需的**工具**、**技术**、**流程**、**经验**等进行规范化、标准化。

企业中的 Vue 项目 和 React 项目，都是基于**工程化的方式**进行开发的。

好处：前端开发**自成体系**，有一套**标准的开发方案和流程**。

#### 3. 前端工程化的解决方案

早期的前端工程化解决方案：

- **grunt**（[https://www.gruntjs.net/](https://www.gruntjs.net/)）
- **gulp**（[https://www.gulpjs.com.cn/](https://www.gulpjs.com.cn/)）

目前主流的前端工程化解决方案：

- **webpack**（[https://www.webpackjs.com/](https://www.webpackjs.com/)）
- **parcel**（[https://zh.parceljs.org/](https://zh.parceljs.org/)）

### 2. webpack 的基本使用

#### 1. 什么是 webpack

概念：webpack 是**前端项目工程化的具体解决方案**。

主要功能：它提供了友好的**前端模块化开发**支持，以及**代码压缩混淆、处理浏览器端 JavaScript 的兼容性、性能优化**等强大的功能。

好处：让程序员把**工作的重心**放到具体功能的实现上，提高了前端**开发效率**和项目的**可维护性**。

::: warning 注意

目前 Vue，React 等前端项目，基本上都是基于 webpack 进行工程化开发的。

:::

#### 2. 创建列表隔行变色项目

1. 新建项目空白目录，并**运行** `npm init -y` 命令，初始化包管理配置文件 **package.json**
2. 新建 **src** 源代码目录
3. 新建 **src** —> **index.html** 首页和 **src** —> **index.js** 脚本文件
4. 初始化首页基本结构
5. 运行 `npm install jquery -S` 命令，安装 **jQuery**
6. 通过 ES6 模块化的方式导入 **jQuery**，实现列表隔行变色效果

#### 3. 在项目中安装 webpack

在终端中运行如下命令，安装 webpack 相关的两个包：

```bash
npm install webpack@5.42.1 webpack-cli@4.7.2 -D
```

#### 4. 在项目中配置 webpack

1. 在根目录中，创建名为 **webpack.config.js** 的 webpack 配置文件，并初始化如下的基本配置：

   ```javascript
   module.exports = {
     mode: 'development' // mode 用来指定构建模式。可选值有 development 和 production
   }
   ```

2. 在 package.json 的 scripts 节点下，新增 **dev 脚本** 如下：

   ```json
   "scripts": {
       "dev": "webpack" // script 节点下的脚本，可以通过 npm run 执行。例如 npm run dev
   },
   ```

3. 在终端中运行 `npm run dev` 命令，启动 webpack 进行项目的打包构建

##### 1. mode 的可选值

**mode 节点**的可选值有两个，分别是：

1. development
   - **开发环境**
   - **不会**对打包生成的文件进行代码压缩和性能优化
   - 打包**速度快**，适合在**开发阶段**使用
2. production
   - **生产环境**
   - **会**对打包生成的文件进行**代码压缩**和**性能优化**
   - 打包**速度很慢**，仅适合在项目**发布阶段**使用

##### 2. webpack.config.js 文件的作用

webpack.config.js 是 webpack 的配置文件。webpack 在真正开始打包之前，会**先读取这个配置文件**，从而基于给定的配置，对项目进行打包。

::: warning 注意

由于 webpack 是**基于 node.js 开发出来的**打包工具，因此在它的配置文件中，支持使用 node.js 相关的语法和模块进行 webpack 的个性化配置。

:::

##### 3. webpack 中 的默认约定

在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：

1. 默认的打包入口文件为 **src** —> **index.js**
2. 默认的输出文件路径为 **dist** —> **main.js**

::: warning 注意

可以在 **webpack.config.js** 中修改打包的默认约定

:::

##### 4. 自定义打包的入口与出口

在 webpack.config.js 配置文件中，通过 **entry 节点**指定**打包的入口**。通过 **output 节点**指定**打包的出口**。示例代码如下：

```javascript
const path = require('path') // 导入 nodejs 中专门操作路径的模块

module.exports = {
  entry: path.join(__dirname, './src/index.js'), // 打包入口的文件路径
  output: {
    path: path.join(__dirname, './dist'), // 输出文件的存放路径
    filename: 'bundle.js' // 输出文件的名称
  }
}
```

### 3. webpack 中的插件

#### 1.webpack 插件的作用

通过安装和配置第三方的插件，可以**拓展 webpack 的能力**，从而让 webpack 用**起来更方便**。最常用的 webpack 插件有如下两个：

1. **webpack-dev-server**
   - 类似于 node.js 阶段用到的 nodemon 工具
   - 每当修改了源代码，webpack 会自动进行项目的打包构建
2. **html-webpack-plugin**
   - webpack 中的 HTML 插件（类似于一个模板引擎插件）
   - 可以通过此插件自定制 index.html 页面的内容

#### 2. webpack-dev-server

**webpack-dev-server** 可以让 webpack **监听项目源代码的变化**，从而进行**自动打包构建**。

##### 1. 安装 webpack-dev-server

运行如下的命令，即可在项目中安装此插件：

```bash
npm install webpack-dev-server@3.11.2 -D
```

##### 2. 配置 webpack-dev-sever

1. 修改 **package.json** -> **scripts** 中的 **dev** 命令如下：

   ```json
   "scripts": {
       "dev": "webpack serve" // scrip 节点下的脚本，可以通过 npm run 执行
   }
   ```

2. 再次运行 `npm run dev` 命令，重新进行项目的打包
3. 在浏览器中访问地址[http://localhost:8080/](http://localhost:8080/)，查看自动打包效果

::: warning 注意

webpack-dev-server 会启动一个**实时打包的 http 服务器**

:::

##### 3. 打包生成的文件哪去了？

1. 不配置 webpack-dev-server 的情况下，webpack 打包生成的文件，会存放到**实际的物理磁盘上**
   - 严格遵守开发者在 webpack.conf.js 中指定配置
   - 根据 **output**节点 指定路径进行存放
2. 配置了 webpack-dev-server 之后，打包生成的文件**存放到了内存中**
   - 不再根据 output 节点指定的路径，存放到实际的物理磁盘上
   - **提高了**实时打包输出的**性能**，因为内存比物理磁盘速度快很多

##### 4. 生成到内存中的文件该如何访问？

webpack-dev-server 生成到内存中的文件，默认**放到了项目的根目录中**，而且是 **虚拟的** 、**不可见的** 。

- 可以直接用 `/` 表示**项目根目录**，**后面跟上要访问的文件名称**，即访问内存中的文件
- 例如 **/bundle.js** 就表示要访问 webpack-dev-server 生成到内存中的 bundle.js 文件

#### 3. html-webpack-plugin

html-webpack-plugin 是 **webpack 中的 HTML 插件**，可以通过此插件 **自定制** index.html **页面的内容**。

**需求**：通过 html-webpack-plugin 插件，将 src 目录下的 index.html 首页，**复制到项目根目录中一份**！

##### 1. 安装 html-webpack-plugin

运行如下的命令，即可在项目中安装此插件：

```bash
npm install html-webpack-plugin@5.3.2 -D
```

##### 2.配置 html-webpack-plugin

```javascript
// 1. 导入 HTML 插件，得到一个构造函数
const HTMLPlugin = require('html-webpack-plugin')

// 2. 创建 HTML 插件的实例对象
const htmlPlugin = new HTMLPlugin({
  template: './src/index.html', // 指定原文件存放路径
  filename: './index.html' // 指定生成的文件存放路径
})

module.exports = {
  mode: 'development',
  plugins: [htmlPlugin] // 通过 plugins 节点，使 htmlPlugin 插件生效
}
```

##### 3. 解惑 html-webpack-plugin

1. 通过 HTML 插件复制到项目根目录中的 index.html 页面，**也被放到了内存中**
2. HTML 插件生成的 index.html **页面**，**自动注入**了打包的 bundle.js 文件

#### 4. devServer 节点

在 webpack.config.js 配置文件中，可以通过 **devServer** 节点对 webpack-dev-server 插件进行更多的配置，

示例代码如下：

```javascript
devServer: {
    open: true, // 初次打完包后，自动打开浏览器
    host: '127.0.0.1', // 实时打包所使用的主机地址
    port: 80 // 实时打包所使用的端口号
}
```

::: warning 注意

凡是修改了 webpack.config.js 配置文件，或修改了 package.json 配置文件，**必须重启实时打包的服务器**，否则最新的配置文件无法生效！

:::

### 4. webpack 中的 loader

#### 1. loader 概述

在实际开发过程中，webpack 默认只能打包处理以 .js 后缀结尾的模块。其他**非 .js 后缀名结尾的模块**，webpack 默认处理不了，**需要调用 loader 加载器才可以正常打包**，否则会报错！

loader 加载器的作用：**协助 webpack 打包处理特定的文件模块**。比如：

- css-loader：可以打包处理 .css 相关的文件
- less-loader：可以打包处理 .less 相关的文件
- babel-loader：可以打包处理 webpack 无法处理的高级 JS 语法

#### 2. 打包处理 css 文件

1. 运行命令，安装处理 css 文件的 loader

   ```bash
   npm i style-loader@3.0.0 css-loader@5.2.6 -D
   ```

2. 在 webpack.config.js 的 **module** -> **rules** 数组中添加 loader 规则如下：

   ```javascript
   module: {
     // 所有第三方文件模块的匹配规则
     rules: [
       // 文件后缀名的匹配规则
       { test: /\.css$/, use: ['style-loader', 'css-loader'] }
     ]
   }
   ```

其中，**test** 表示匹配的**文件类型**，**use** 表示对应**要调用的 loader**

::: warning 注意

- use 数组中指定的 loader **顺序是固定的**
- 多个 loader 的调用顺序是：**从后往前调用**

:::

#### 3. 打包处理 less 文件

1. 运行命令

   ```bash
   npm i less-loader@10.0.1 less@4.1.1 -D
   ```

2. 在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

   ```javascript
   module: {
     // 所有第三方文件模块的匹配规则
     rules: [
       // 文件后缀名的匹配规则
       { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
     ]
   }
   ```

#### 4.打包处理样式表中与**url 路径相关**的文件

1. 运行命令

   ```bash
   npm i url-loader@4.1.1 file-loader@6.2.0 -D
   ```

2. 在 webpack.config.js 的 **module** -> **rules** 数组中添加 loader 规则如下：

   ```javascript
   module: {
     // 所有第三方文件模块的匹配规则
     rules: [
       // 文件后缀名的匹配规则
       { test: /\.jpg|png|gif$/, use: ['url-loader?limit=22229'] }
       // { test: /\.jpg|png|gif$/, use: "url-loader?limit=22229" }
     ]
   }
   ```

其中 **?** 之后是 **loader 的参数项**：

- limit 用来指定**图片的大小**，单位是字节（bype）
- 只有 **≤** limit 大小的图片，才会被转化为 base64 格式的图片

#### 5. 打包处理 js 文件中的高级语法

webpack 只能打包处理**一部分**高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借助于 **babel-loader** 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码：

```javascript
// 1. 定义了名为 info 的装饰器
function info(target) {
  // 2. 为目标添加静态属性 info
  target.info = 'Person info'
}

// 3. 为 Person 类应用 info 装饰器
@info
class Person {}

// 4. 打印 Person 的静态属性 info
console.log(Person.info)
```

##### 1. 安装 babel-loader 相关的包

运行如下的命令安装对应的依赖包

```bash
npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
```

在 webpack.config.js 的 **module** -> **rules** 数组中添加 loader 规则如下：

```javascript
// 注意:必须使用 exclude 指定排除项;因为 node_modules 目录下的第三方包不需要被打包
{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
```

##### 2. 配置 babel-loader

在根目录下，创建名为 **babel.config.js** 的配置文件，定义 **Babel 的配置项**如下：

```javascript
module.exports = {
  // 声明 babel 可用的插件
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}
```

详情请参考 Babel 的官网 [https://babeljs.io/docs/en/babel-plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)

### 5. 打包发布

#### 1. 为什么要打包发布

**项目开发完成之后**，需要使用 webpack **对项目进行打包发布**，主要原因有以下两点：

1. 开发环境下，打包生成的文件**存放与内存中**，无法获取到最终生成的文件
2. 开发环境下，打包生成的文件**不会进行代码压缩和性能优化**

**为了让项目能够在生成环境中高性能的运行**，因此需要对项目进行打包发布。

#### 2. 配置 webpack 的打包发布

在 **package.json** 文件的 **scripts** 节点下，新增 build 命令如下：

```json
"scripts": {
    "dev": "webpack serve", // 开发环境中，运行dev命令
    "build": "webpack --mode production" // 项目发布时，运行build命令
},
```

**--model** 是一个参数项，用来指定 webpack 的**运行模式**。production 代表生产环境，会对打包生成的文件进行**代码压缩**和**性能优化**。

::: warning 注意

通过 --model 指定的参数项，会**覆盖** webpack.config.js 中的 model 选项。

:::

#### 3. 把 JavaScript 文件统一生成到 js 目录中

在 **webpack.confg.js** 配置文件的 **output** 节点中，进行如下的配置

```javascript
output: {
    path: path.join(__dirname, 'dist'),
        // 明确告诉 webpack 把生成的 bundle.js 文件存放到 dist 目录下的 js 子目录中
        filename: 'js/main.js'
}
```

#### 4. 把图片文件统一生成到 image 目录中

修改 webpack.confg.js 中的 **url-loader** 配置项，新增 **outputPath** 选项即可指定图片文件的输出路径：

```javascript
{
    test: /\.jpg|png|gif$/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 22228,
            // 明确指定把打包生成的图片文件，存储到 dist 目录下的 image 文件夹中
            outputPath: 'img'
        }
    }
},
```

#### 5. 自动清理 dist 目录下的旧文件

为了在每次打包发布的时**自动清理掉 dist 目录中的旧文件**，可以安装并配置 **clean-webpack-plugin** 插件

```bash
# 1. 安装清理 dist 目录的 webpack 插件
$ npm install clean-webpack-plugin@3.0.0 -D
```

```javascript
// 2. 按需导入插件、得到插件的构造函数之后，创建插件的实例对象
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanPlugin = new CleanWebpackPlugin();
// 3. 把创建的 cleanPlugin 插件实例对象，挂载到 plugins 节点中
plugins: [htmlPlugin, cleanPlugin], // 挂载插件
```

### 6. SourceMap

#### 1. 生产环境遇到的问题

前端项目在投入生产环境之前，都需要对 JavaScript 源代码进行**压缩混淆**，从而减小文件的体积，提高文件的加载效率。此时就不可避免的产生了另一个问题：

**对压缩混淆之后的代码除错（debug）** 是一件及其困难的事情

- 变量被替换成**没有任何语义**的名称
- 空行和注释被剔除

#### 2. 什么是 SourceMap

**SourceMap 就是一个信息文件，里面存着位置信息。**也就是说，SourceMap 文件中存储着压缩混淆后的代码，所对应的**准换前的位置**。

有了它，出错的时候，除错工具将**直接显示原始代码，而不是转换后的代码**，能够极大的方便后期的调试。

#### 3. webpack **开发环境下的** Source Map

在**开发环境下**，webpack **默认启用了** Source Map 功能。当程序运行出错时，可以直接在控制台提示**错误行的位置**，并**定位到具体的源代码**：

##### 1. 默认 SourceMap 的问题

开发环境下默认生成的 SourceMap，记录的是**生成后的代码的位置**。会导致**运行时报错的行数**与**源代码的行数**不一致的问题。

##### 2. 解决默认 SourceMap 的问题

开发环境下，推荐在 **webpack.config.js** 中添加如下的配置，即可保证**运行时报错的行数**与**源代码的行数**保持一致：

```javascript
module.exports = {
  mode: 'development',
  // eval-source-map 仅限在"开发模式"下使用，不建议在"生产模式"下使用。
  // 此选项生成的 Source Map 能够保证"运行时报错的行数"与"源代码的行数"保持一致
  devtool: 'eval-source-map'
  // 省略其它配置项...
}
```

#### 4. webpack **生成环境下单的** SourceMap

在**生产环境下**，如果**省略了 devtool 选项**，则最终生成的文件中**不包含 SourceMap**。这能够**防止原始代码**通过 SourceMap 的形式**暴露**给别有所图之人。

##### 1. 只定位行数不暴露源码

在生产环境下，如果**只想定位报错的具体行数**，且**不想暴露源码**。此时可以将 **devtool** 的值设置为 `nosources-source-map`。

##### 2. 定位行数且暴露源码

在生产环境下，如果**想在定位报错行数的同时，展示具体报错的源码**。此时可以将 **devtool** 的值设置为 `source-map`。

采用此选项后：你应该将你的服务器配置为，**不允许普通用户访问 source map 文件**！

#### 5. Source Map 的最佳实战

1. 开发环境下：
   - 建议把 devtool 的值设置为 `eval-source-map`
   - 好处：可以精准定位到具体错误行
2. 生产环境下：
   - 建议**关闭 Source Map** 或将 devtool 的值设置为 `nosources-source-map`
   - 好处：防止源码泄露，提高网站的安全性

### 7. 实际开发中需要自己配置 webpack 吗？

答案：**不需要**！

- 实际开发中会使命令行工具
- 开箱即用，所有 webpack 配置项都是现成的！
- 我们只需要知道 webpack 中的基本概念即可！

### 总结

1. 能够掌握 webpack 的基本使用
   - 安装、**webpack.config.js**、修改打包入口
2. 了解常用的 plugin 的基本使用
   - **webpack-dev-server**、html-webpack-plugin
3. 了解常用的 loader 的基本使用
   - loader 的作用、**loader 的调用过程**
4. 能够说出 Source Map 的作用
   - 精准定位到**错误行**并**显示对应的源码**
   - 方便开发者调试源码中的错误

## 2. vue 基础入门

### 1. vue 简介

#### 1. 什么是 vue

官方给出的概念：Vue（读音 /vjuː/，类似于 view）是一套**用于构建用户界面**的前端**框架**。

#### 2. vue 的特性

vue 框架的特性，主要体现在如下两方面：

1. **数据驱动视图**
2. **双向数据绑定**

##### 1. 数据驱动视图

在使用了 vue 的页面中，vue 会**监听数据的变化**，从而**自动**重新渲染页面的结构。

好处：当页面数据发生变化时，页面会自动重新渲染！

::: warning 注意

数据驱动视图是**单向的数据绑定**。

:::

##### 2. 双向数据绑定

在**填写表单**时，双向数据绑定可以辅助开发者在**不操作 DOM 的前提下，自动**把用户填写的内容**同步到**数据源中。

好处：开发者不再需要手动操作 DOM 元素，来获取表单元素最新的值！

##### 3. MVVM

**MVVM** 是 vue **实现数据驱动视图**和**双向数据绑定**的核心原理。MVVM 值的是 **M**odel、**V**iew 和 **V**iew**M**odel，它把每个 HTML 页面都拆分成了这三个部分。

在 MVVM 概念中：

**Model** 表示当前页面渲染时所依赖的数据源。

**View** 表示当前页面所渲染的 DOM 结构。

**ViewModel** 表示 vue 的实例，它是 MVVM 的核心。

##### 4. MVVM 的工作原理

**ViewModel 作为 MVVM 的核心**，是它把当前页面的**数据源**（Model）和**页面的结构**（View）连接在了一起。

当**数据源发生变化**时，会被 ViewModel 监听到，VM 会根据最新的数据源**自动更新**页面的结构

当**表单元素的值发生变化**时，也会被 VM 监听到，VM 会把变化过后最新的值**自动同步**到 Model 数据源中

#### 3. vue 的版本

当前，vue 共有 3 个大版本，其中：

**2.x 版本的 vue 是目前企业级项目开发中的主流版本**

3.x 版本的 vue 于 2020-09-19 发布，生态还不完善，尚未在企业级项目开发中普及和推广

1.x 版本的 vue 几乎被淘汰，不再建议学习与使用

<br />

总结：

**3.x 版本的 vue 是未来企业级项目开发的趋势；**

2.x 版本的 vue 在未来（1 ~ 2 年内）会被逐渐淘汰；

### 2. vue 的基本使用

#### 1. 基本使用步骤

1. 导入 vue.js 的 script 脚本文件
2. 在页面中声明一个将要被 vue 控制的 DOM 区域
3. 创建 vm 实例对象（vue 实例对象）

```html
<body>
  <div id="app">{{ username }}</div>
  <script src="lib/vue.js"></script>
  <script>
    const vm = new Vue({
      el: '#app',
      data: {
        username: 'Guany'
      }
    })
  </script>
</body>
```

#### 2. 基本代码与 MVVM 的对应关系

```vue
<div id="app">{{ username }}</div>
<!-- View 视图区域 -->
```

```javascript
const vm = new Vue({
  el: '#app', // el 指向的选择器，就是 View 视图区域
  data: {
    username: 'Guany' // data 指向的对象，就是 Model 数据源
  }
}) // new Vue() 构造函数，得到的 vm 实例对象，就是 ViewModel
```

### 3. vue 的调试工具

#### 1. 安装 vue-devtools 调试工具

vue 官方提供的 vue-devtools 调试工具，能够方便开发者对 vue 项目进行调试与开发。

Chrome 浏览器在线安装 vue-devtools：

[https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

FireFox 浏览器在线安装 vue-devtools：

[https://addons.mozilla.org/zh-CN/firefox/addon/vue-js-devtools/](https://addons.mozilla.org/zh-CN/firefox/addon/vue-js-devtools/)

#### 2. 配置 Chrome 浏览器中的 vue-devtools

点击 Chrome 浏览器右上角的的按钮，选择 **更多工具** -> **扩展程序** -> **Vue.js devtools** 详细信息，勾选如下两个选项：

- 允许此扩展程序读取和更改您在所访问的网站上留存的所有数据：**在所有网站上**

- 允许访问文件地址

#### 3. 使用 vue-devtools 调试 vue 页面

在浏览器中**访问了一个使用了 vue 的页面**，打开浏览器的**开发者工具，切换到 Vue 面板**，即可使用 vue-devtools 调试当前页面。

### 4. vue 的指令与过滤器

#### 1. 指令的概念

**指令（DIrectives）**是 vue 为开发者提供的**模板语法**，用于**辅助开发者渲染页面的基本结构**。

vue 中的指令**按照不同的用途**可以分为如下 6 大类：

1. **内容渲染**指令
2. **属性绑定**指令
3. **事件绑定**指令
4. **双向绑定**指令
5. **条件渲染**指令
6. **列表渲染**指令

::: warning 注意

指令是 vue 开发中最基础、最常用、最简单的知识点。

:::

##### 1. 内容渲染指令

**内容渲染指令**用来辅助开发者**渲染 DOM 元素的文本内容**。常用的内容渲染指令有如下 3 个：

- v-text
- <span v-pre>{{ }}</span>
- v-html

###### v-text

语法示例：

```html
<p v-text="username"></p>
<p v-text="gender">性别</p>
```

::: warning 注意

v-text 指令会**覆盖元素内默认的值**。

:::

###### <span v-pre>{{ }}</span> 语法

vue 提供的 **<span v-pre>{{ }}</span>** 语法，专门用来解决 v-text 会覆盖默认文本内容的问题。这种 {{ }} 语法的专业名称是**插值表达式**（英文名为：**Mustache**）。

```html
<p>姓名：{{username}}</p>
<p>性别：{{gender}}</p>
```

::: warning 注意

相对于 v-text 指令来说，**插值表达式在开发中更常用一些**！因为它不会覆盖元素中默认的文本内容。

:::

###### v-html

**v-text** 指令和**插值表达式**只能渲染**纯文本内容**。如果把**包含 HTML 标签的字符串**渲染为页面的 HTML 元素，则需要用到 v-html 这个指令：

```html
<p v-html="description"></p>
```

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    description: '<h1>Guany的文档</h1>'
  }
})
```

##### 2. 属性绑定指令

如果需要为**元素的属性**动态绑定**属性值**，则需要用到 **v-bind** 属性绑定指令。用法示例如下：

```html
<div id="app">
  <input type="text" v-bind:placeholder="inputValue" />
  <br />
  <img v-bind:src="imgSrc" alt="" />
</div>
```

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    inputValue: '请输入用户名',
    imgSrc: 'https://cn.vuejs.org/images/logo.svg'
  }
})
```

###### 属性绑定指令的简写形式

由于 **v-bind 指令**在开发中使用频率非常高，因此，vue 官方为其提供了**简写形式**（简写为英文的 **:**）。

```html
<input type="text" :placeholder="inputValue" />
<br />
<img :src="imgSrc" alt="" />
```

###### 使用 Javascript 表达式

在 vue 提供的模板渲染语法中，除了支持**绑定简单的数据值**之外，还**支持 Javascript 表达式的运算**，例如：

```html
{{ number + 1 }} {{ ok ? 'YES' : 'NO' }} {{ message.split('').reverse().join('')
}}

<div v-bind:id="'list-' + id"></div>
```

##### 3. 事件绑定指令

vue 提供了 **v-on 事件绑定**指令，用来辅助程序员为 DOM 元素绑定事件监听。语法格式如下：

```html
<h3>count 的值为：{{count}}</h3>
<button v-on:click="addCount">+1</button>
```

::: warning 注意

原生 DOM 对象有 `onclick`、`oninput`、`onkeyup` 等原生事件，替换为 vue 的事件绑定形式后，分别为：**v-on:click**、**v-on:input**、**v-on:keyup**

:::

通过 v-on 绑定的事件处理函数，需要**在 method 节点**中进行声明：

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    addCount() {
      this.count += 1
    }
  }
})
```

###### 事件绑定的简写形式

由于 **v-on 指令**在开发中使用频率非常高，因此，vue 官方为其提供了**简写形式**（简写为英文的 **@**）。

```html
<div id="app">
  <h3>count 的值为：{{count}}</h3>

  <!-- 完整写法 -->
  <button v-on:click="addCount">+1</button>

  <!-- 简写形式，把 v-on : 简写为 @ 符号 -->
  <!-- 如果事件处理函数中的代码足够简单，只有一行代码，则可以写到行内 -->
  <button @click="count += 1">+1</button>
</div>
```

###### 事件参数对象

在原生的 DOM 事件绑定中，可以在事件处理函数的形参处，接收事件参数对象 event。同理，在 **v-on** 指令 （简写为 **@**）所绑定的事件处理函数中，**同样可以接收到事件参数对象 event**，示例代码如下：

```html
<h3>count 的值为：{{count}}</h3>
<button v-on:click="addCount">+1</button>
```

```javascript
methods: {
    addCount(e) { // 接收事件参数对象 event，简写为 e
        const nowBgColor = e.target.style.backgroundColor
        e.target.style.backgroundColor = nowBgColor === 'red' ? '' : 'red'
        this.count += 1
    }
}
```

###### 绑定事件并传参

在使用 v-on 指令绑定事件时，可以使用 **( )** 进行传参，示例代码如下：

```html
<h3>count 的值为：{{count}}</h3>
<button v-on:click="addNewCount(2)">+2</button>
```

```javascript
methods: {
    // 在形参处用 step 接收传递过来的参数值
    addNewCount(step) {
        this.count += step
    }
}
```

###### $event

**$event** 是 vue 提供的**特殊变量**，用来表示**原生的事件参数对象 event**。$event 可以解决事件参数对象 event 被覆盖的问题。示例用法如下：

```html
<h3>count 的值为：{{count}}</h3>
<button v-on:click="addNewCount(2, $event)">+2</button>
```

```javascript
methods: {
    // 在形参处用 e 接收传递过来的原生事件参数对象 $event
    addNewCount(step, e) {
        const nowBgColor = e.target.style.backgroundColor
        e.target.style.backgroundColor = nowBgColor === 'red' ? '' : 'red'
        this.count += step
    }
}
```

###### 事件修饰符

在处理事件数据中调用 **event.preventDefault()** 或 **event.stopPropagation()** 是非常常见的需求。因此，vue 提供了**事件修饰符**的概念，来辅助程序员更方便的**对事件的触发进行控制**。常用的 5 个事件修饰符如下：

| 事件修饰符   | 说明                                                          |
| ------------ | ------------------------------------------------------------- |
| **.prevent** | **阻止默认行为**（例如：阻止 a 连接的跳转、阻止表单的提交等） |
| **.stop**    | **阻止事件冒泡**                                              |
| .capture     | 以捕获模式触发当前的事件处理函数                              |
| .once        | 绑定的事件只触发 1 次                                         |
| .self        | 只有在 event.target 是当前元素自身时触发事件处理函数          |

```html
<!-- 触发 click 点击事件时，阻止 a 链接的默认跳转行为 -->
<a href="https://www.baidu.com/" @click.prevent="onLickClick">百度首页</a>
```

###### 按键修饰符

在监听**键盘事件**时，我们经常需要**判断详细的按键**。此时，可以为**键盘相关的事件**添加**按键修饰符**，例如：

```html
<input @key.enter="submit" /> <input @key.esc="clearInput" />
```

##### 4. 双向绑定指令

vue 提供了 **v-model 双向数据绑定**指令，用来辅助开发者在**不操作 DOM** 的前提下，**快速获取表单数据**。

```html
<p>用户名是：{{username}}</p>
<input type="text" v-model="username" />

<p>选中的省份是：{{province}}</p>
<select v-model="province">
  <option value="">请选择</option>
  <option value="1">北京</option>
  <option value="2">河北</option>
  <option value="3">黑龙江</option>
</select>
```

###### v-model 指令的修饰符

**为了方便对用户输入的内容进行处理**，vue 为 v-model 指令提供了 3 个修饰符，分别是：

| 修饰符  | 作用                              | 示例                           |
| ------- | --------------------------------- | ------------------------------ |
| .number | 自动将用户的输入值转为数值类型    | `<input v-model.number="age">` |
| .trim   | 自动过滤用户输入的首尾空白字符    | `<input v-model.trim="age">`   |
| .lazy   | 在 "change" 时而非 "input" 时更新 | `<input v-model.lazy="age">`   |

示例用法如下：

```html
<input type="text" v-model.number="n1" />
<input type="text" v-model.number="n2" />
<span>{{n1 + n2}}</span>
```

##### 5. 条件渲染指令

**条件渲染指令**用来辅助开发者**按需控制 DOM 的显示与隐藏**。条件渲染指令有如下两个，分别是：

- v-if
- v-show

示例用法如下：

```html
<div id="app">
  <p v-if="networkState === 200">请求成功 --- 被 v-if 控制</p>
  <p v-show="networkState === 200">请求成功 --- 被 v-show 控制</p>
</div>
```

###### v-if 和 v-show 的区别

实现原理不同：

- v-if 指令会**动态地创建或移除 DOM 元素**，从而控制元素在页面上的显示与隐藏；
- v-show 指令会动态为元素**添加或移除 style="display: none;" 样式**，从而控制元素的显示与隐藏；

性能消耗不同：

**v-if** 有更高的**切换开销**，而 **v-show** 有更高的 **初始渲染开销**。因此：

- 如果需要**非常频繁地切换**，则使用 v-show 较好
- 如果在**运行时条件很少改变**，则使用 v-if 较好

###### v-else

v-if 可以单独使用，或配合 v-else 指令一起使用：

```html
<div v-if="Math.random() > 0.5">随机数大于 0.5</div>
<div v-else>随机数小于或等于 0.5</div>
```

::: warning 注意

v-else 指令**必须配合** v-if 指令一起使用，否则它将不会被识别！

:::

###### v-else-if

v-else-if 指令，顾名思义，充当 v-if 的 "else-if 块"，可以连续使用：

```html
<div v-if="type === 'A'">优秀</div>
<div v-else-if="type === 'B'">良好</div>
<div v-else-if="type === 'C'">一般</div>
<div v-else>差</div>
```

::: warning 注意

v-else-if 指令**必须配合** v-if 指令一起使用，否则它将不会被识别！

:::

##### 6. 列表渲染指令

vue 提供了 **v-for** 列表渲染指令，用来辅助开发者**基于一个数组来渲染一个列表结构**。v-for 指令需要使用 **item in items** 形式的特殊语法，其中：

- items 是**待循环的数组**
- item 是**被循环的每一项**

```html
<ul>
  <li v-for="item in list">姓名是：{{item.name}}</li>
</ul>
```

```javascript
data: {
  list: [
    // 列表数据
    { id: 1, name: 'zs' },
    { id: 2, name: 'ls' }
  ]
}
```

###### v-for 中的索引

v-for 指令还支持一个**可选的**第二个参数，即**当前的索引**。语法格式为 **(item, index) in items**，示例代码如下：

```html
<li v-for="(item, index) in list">索引是：{{index}}，姓名是：{{item.name}}</li>
```

```javascript
data: {
  list: [
    // 列表数据
    { id: 1, name: 'zs' },
    { id: 2, name: 'ls' }
  ]
}
```

::: warning 注意

v-for 指令中的 **item** 项和 **index 索引**都是形参，可以根据需要进行**重命名**。例如 **(user, i)** in userlist

:::

###### 使用 key 维护列表的状态

当**列表的数据变化**时，默认情况下，vue 会**尽可能的复用**已存在的 DOM 元素，从而**提升渲染的性能**。但这种默认的性能优化策略，会导致**有状态的列表无法被正确更新**。

为了给 vue 一个提示，以便它能跟踪每个节点的身份，从而在保证**有状态的列表被正确更新**的前提下，**提升渲染的性能**。此时，需要为每项提供一个**唯一的 key 属性**：

```html
<!-- 用户列表区域 -->
<ul>
  <!-- 加 key 属性的好处： -->
  <!-- 1. 正确维护列表的状态 -->
  <!-- 2. 复用现有的 DOM 元素，提升渲染的性能 -->
  <li v-for="(user, index) in userlist" :key="user.id">
    <input type="checkbox" />
    姓名：{{user.name}}
  </li>
</ul>
```

###### key 的注意事项

1. key 的值只能是**字符串**或**数字**类型
2. key 的值**必须具有唯一性**（即：key 的值不能重复）
3. 建议把**数据项 id 属性的值**作为 key 的值（因为 id 属性的值具有唯一性）
4. 使用 **index 的值**当作 key 的值**没有任何意义**（因为 index 的值不具有唯一性）
5. 建议使用 v-for 指令时**一定要指定 key 的值**（既提升性能、又防止列表状态紊乱）

#### 2. 过滤器

**过滤器**（**Filters**）是 vue 为开发者提供的功能，常用于**文本的格式化**。过滤器可以用在两个地方：**插值表达式**和 **v-bind 属性绑定**。

过滤器应该被添加在 JavaScript 表达式的**尾部**，由“**管道符**”进行调用，示例代码如下：：

```html
<!-- 在 双花括号中通过 "管道符" 调用 capitalize 过滤器，对 message 的值进行格式化 -->
<p>{{ message | capitalize }}</p>

<!-- 在 v-bind 中通过 "管道符" 调用 formatId 过滤器，对 rawId 的值进行格式化 -->
<div v-bind:id="rawId | formatId"></div>
```

##### 1. 定义过滤器

在创建 vue 实例期间，可以在 filters 节点中定义过滤器，示例代码如下：

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js',
    info: 'tltle info'
  },
  filters: {
    // 在 filters 节点下定义 "过滤器"
    capitalize(str) {
      // 把首字母转为大写的过滤器
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
})
```

##### 2. **私有过滤器**和**全局过滤器**

在 filters 节点定义的过滤器，称为 "**私有过滤器**"，因为它**只能在当前 vm 实例所控制的 el 区域内使用**。

如果希望**在多个 vue 实例之间共享过滤器**，则可以按照如下的格式定义**全局过滤器**：

```javascript
Vue.filter('capitalize', str => {
  return str.charAt(0).toUpperCase() + str.slice(1) + '~~'
})
```

##### 3. 连续调用多个过滤器

过滤器可以串联地进行调用，例如：

```html
<!-- 把 message 的值，交给 filterA 进行处理 -->
<!-- 把 filterA 处理的结果，再交给 filterB 进行处理 -->
<!-- 最终把 filterB 处理的结果，作为最终的值渲染到页面上 -->
{{ message | filterA | filterB }}
```

示例代码如下：

```html
<!-- 串联调用多个过滤器 -->
<p>{{text | capitalize | maxLength}}</p>
```

```javascript
// 全局过滤器 - 首字母大写
Vue.filter('capitalize', str => {
  return str.charAt(0).toUpperCase() + str.slice() + '~~'
})

// 全局过滤器 - 控制文本的最大长度
Vue.filter('maxLength', str => {
  if (str.length <= 10) return str
  return str.slice(0, 11) + '...'
})
```

##### 4. 过滤器传参

过滤器的**本质**是 **JavaScript 函数**，因此可以接收参数，格式如下：

```html
<!-- arg1 和 arg2 是传递给 filterA 的参数 -->
<p>{{ message | filterA(arg1, arg2) }}</p>
```

```javascript
// 过滤器处理函数的形参列表中：
// 第一个参数：永远都是 "管道符" 前面待处理的值
// 从第二个参数开始，才是调用过滤器时传递过来的 arg1 和 arg2 参数
Vue.filter('filterA', (msg, arg1, arg2) => {
  // 过滤器的代码逻辑...
})
```

示例代码如下：

```html
<!-- 调用 maxLength 过滤器时传参 -->
<p>{{text | capitalize | maxLength(5)}}</p>
```

```javascript
// 全局过滤器 - 首字母大写
Vue.filter('capitalize', str => {
  return str.charAt(0).toUpperCase() + str.slice() + '~~'
})

// 全局过滤器 - 控制文本的最大长度
Vue.filter('maxLength', (str, len = 10) => {
  if (str.length <= len) return str
  return str.slice(0, len) + '...'
})
```

##### 5. 过滤器的兼容性

过滤器仅在 vue 2.x 和 1.x 中受支持，在 **vue 3.x** 的版本**剔除了过滤器**相关的功能。

在企业级项目开发中：

- 如果使用的是 2.x 版本的 vue，则依然可以使用过滤器相关的功能
- 如果项目已经升级到了 3.x 版本的 vue，官方建议是**计算机属性**或**方法**代替被剔除过滤器功能

具体的迁移指南，请参考 vue 3.x 的官方文档给出的说明：

```http
https://v3.cn.vuejs.org/guide/migration/filters.html
```

### 品牌列表案例

#### 整体实现步骤

1. 创建基本的 vue 实例
2. 基于 vue **渲染表格数据**
3. 实现**添加品牌**的功能
4. 实现**删除品牌**的功能
5. 实现**修改品牌状态**的功能

### 总结

1. 能够知道 vue 的**基本使用步骤**
   - 导入 vue.js 文件
   - new Vue() 构造函数，得到 vm 实例对象
   - 声明 el 和 data 数据节点
   - MVVM 的对应关系
2. 掌握 vue 中常见**指令**的基本用法
   - 插值表达式、v-bind、v-on、v-if 和 v-else
   - v-for 和 :key、v-model
3. 掌握 vue 中**过滤器**的基本用法
   - 全局过滤器 Vue.filter('过滤器名称', function)
   - 私有过滤器 filters 节点

### 5. 侦听器

#### 1. 什么是 watch 侦听器

**watch 侦听器**允许开发者监视数据的变化，从而**针对数据的变化做特定的操作**。

语法格式如下：

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    username: ''
  },
  watch: {
    // 监听 username 值的变化
    // newVal 是"变化后的新值", oldVal 是"变化之前的旧值"
    username(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
})
```

#### 2. 使用 watch 检测用户名是否可以

监听 username 值的新变化，并使用 axios 发起 Ajax 请求，**检测当前输入的用户名是否可用**：

```javascript
// 监听 username 值的变化
async username(newVal) {
    if (newVal === '') return
    // 使用 axios 发起请求，判断用户名是否可用
    const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
    console.log(res)
}
```

#### 3. immediate 选项

默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器**立即被调用**，则需要使用 **immediate** 选项。示例代码如下：

```javascript
watch: {
    username: {
        // handler 是固定写法，表示当 username 的值变化时，自动调用 handler 处理函数
        handler: async function (newVal) {
            if (newVal === '') return
            const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
            console.log(res)
        },
            // 表示页面初次渲染好之后，就立即触发当前的 watch 侦听器
            immediate: true
    }
}
```

#### 4. deep 选项

如果 **watch 侦听的是一个对象**，如果**对象中的属性值发生了变化**，则**无法被监听到**。此时需要使用 **deep 选项**，代码示例如下：

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    info: { username: '' }
  },
  watch: {
    info: {
      handler(newVal) {
        console.log(newVal.username)
      },
      deep: true
    }
  }
})
```

#### 5. 监听对象单个属性的变化

如果**只想监听对象中单个属性的变化**，则可以按照如下的方式定义 watch 侦听器：

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    info: { username: '' }
  },
  watch: {
    'info.username': {
      handler(newVal) {
        console.log(newVal)
      }
    }
  }
})
```

### 6. 计算属性

#### 1. 什么是计算属性

计算属性指的是**通过一些列运算**之后，最终得到一个**属性值**。

**这个动态计算出来的属性值**可以被模板结构或 methods 方法使用。示例代码如下：

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    r: 0,
    g: 0,
    b: 0
  },
  computed: {
    rgb() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
  },
  methods: {
    show() {
      console.log(this.rgb)
    }
  }
})
```

#### 2. 计算属性的特点

1. 虽然计算属性在**声明的时候**被定义为**方法**，但是计算属性的**本质是一个属性**
2. 计算属性会**缓存计算的结果**，只有计算属性**依赖的数据变化时**，才会重新进行运算

### 7. axios

axios（发音：艾克 C 奥斯）是前端圈最火的、**专注于数据请求**的库。

在后面的 Vue、React 课程中都会用到 axios 来请求数据。

中文官网地址：[http://www.axios-js.com/](http://www.axios-js.com/)

英文官网地址：[https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

#### axios 的基础语法

1. 发起 GET 请求：

   ```javascript
   axios({
     // 请求方式
     method: 'GET',
     // 请求的地址
     url: 'http://www.liulongbin.top:3006/api/getbooks',
     // URL 中的查询参数
     params: {
       id: 1
     }
   }).then(function (result) {
     console.log(result)
   })
   ```

2. 发起 POST 请求：

   ```javascript
   document
     .querySelector('#btnPost')
     .addEventListener('click', async function () {
       // 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！
       // await 只能用在被 async "修饰"的方法中
       const { data: res } = await axios({
         method: 'POST',
         url: 'http://www.liulongbin.top:3006/api/post',
         data: {
           name: 'zs',
           age: 20
         }
       })

       console.log(res)
     })
   ```

### 8. vue-cli

#### 1. 什么是单页面应用程序

**单页面应用程序**（英文名：**S**ingle **P**age **A**pplication）简称 SPA，顾名思义，指的是**一个 Web 网站中只有唯一的一个 HTML 页面**，所有的功能与交互都在这唯一的一个页面内完成。

#### 2. 什么是 vue-cli

**vue-cli 是 Vue.js 开发的标准工具**。它简化了程序员基于 webpack 创建工程化的 Vue 项目的过程。

引用子 vue-cli 官网上的一句话：

程序员可以**专注在撰写应用上**，而不必**花好几天**去**纠结** webpack 配置的问题。

中文官网：[https://cli.vuejs.org/zh/](https://cli.vuejs.org/zh/)

#### 3. 安装和使用

vue-cli 是 npm 上的一个**全局包**，**使用 npm install** 命令，即可方便的把它安装到自己的电脑上：

```bash
npm install -g @vue/cli
```

基于 vue-cli 快速生成工程化的 Vue 项目：

```bash
vue create 项目的名称
```

#### 4. vue 项目的运行流程

在工程化的项目中，vue 要做的事情很单纯：通过 **main.js** 把 **App.vue** 渲染到 **index.html** 的指定区域中。

其中：

1. **App.vue** 用来编写待渲染的**模板结构**
2. **index.html** 中需要预留一个 **el 区域**
3. **main.js** 把 App.vue 渲染到了 index.html 所预留的区域中

### 9. vue 组件

#### 1. 什么是组件化开发

**组件化开发**指的是：根据**封装**的思想，**把页面上可重用的 UI 结构封装为组件**，从而方便项目的开发和维护。

#### 2. vue 中的组件化开发

vue 是一个**支持组件化开发**的前端框架。

vue 中规定：**组件的后缀名**是 **.vue**。之前接触到的 App.vue 文件本质上就是一个 vue 的组件。

#### 3. vue 组件的三个组成部分

每个 .vue 组件都由 3 部分构成，分别是：

- **template** -> 组件的**模板结构**
- **script** -> 组件的 **JavaScript 行为**
- style -> 组件的**样式**

其中，**每个组件中必须包含 template 模板结构**，而 **script 行为**和 **style 样式**是可选的组成部分。

##### 1. template

vue 规定：每个组件对应的**模板结构**，需要定义到 **\<template\> 节点**中。

::: warning 注意

- template 是 Vue 提供的**容器标签**，它起到**包裹性质的作用**，它不会被渲染为真正的 DOM 元素
- template 只能包含唯一的根节点

:::

##### 2. script

vue 规定：开发者可以在 \<script\> 节点中**封装组件的 JavaScript 业务逻辑**。

\<script\> 节点的基本结构如下：

```vue
<script>
// 今后，组件相关的 data 数据、methods 方法等，
// 都需要定义到 export default 所导出的对象中，
export default {}
</script>
```

###### .vue 组件中的 data 必须是函数

vue 规定：.vue 组件中的 data **必须是一个函数**，**不能**直接**指向一个数据对象**。

因此在组件中定义 data 数据节点时，下面的方式是**错误的**：

```javascript
data: {
  // 组件中，不能直接让 data 指向一个数据对象（会报错）
  count: 0
}
```

会导致**多个组件实例**共用**同一份数据**的问题，请参考官方给出的示例：

[https://cn.vuejs.org/v2/guide/components.html#data](https://cn.vuejs.org/v2/guide/components.html#data)-必须是一个函数

##### 3. style

vue 规定：组件内的 \<style\> 节点是**可选的**，开发者可以在 \<style> 节点中**编写样式美化当前组件的 UI 结构**。

\<style\> 节点的基本结构如下：

```vue
<style>
h1 {
  font-weight: normal;
}
</style>
```

###### 让 style 中支持 **less 语法**

让 \<style\> 标签上添加 **lang="less"** 属性，即可使用 less 语法编写组件样式：

```vue
<style lang="less">
h1 {
  font-weight: normal;
  span {
    color: red;
  }
}
</style>
```

#### 4. 组件之间的**父子关系**

组件在被封装好了之后，**彼此之间是相互独立的**，不存在父子关系

在**使用组件**的时候，**根据彼此的嵌套关系**，形成了父子关系、兄弟关系

##### 1. 使用组件的**三个步骤**

步骤 1：使用 import 语法**导入需要的组件**

步骤 2：使用 **components** 节点注册组件

步骤 3：**以标签形式**使用刚才注册的组件

##### 2. 通过 components 注册的是**私有子组件**

例如：

在**组件 A**的 components 节点下，注册了**组件 F**。

则组件 F 只能在组件 A 中；不能被用在**组件 C** 中。

请大家思考两个问题：

1. 为什么 F 不能再组件 C 中？
2. 怎样才能在组件 C 中使用 F？

##### 3. 注册**全局组件**

在 vue 项目的 **main.js** 入口文件中，通过 **vue.component()** 方法，可以注册全局组件。示例代码如下：

```javascript
// 导入需要全局注册的组件
import Count from '@/components/Count.vue'

// 参数1：字符串格式，表示组件的"注册名称"
// 参数2：需要被全局注册的那个组件
Vue.component('MyCount', Count)
```

#### 5. 组件的 **props**

props 是组件的**自定义属性**，在**封装通用组件**的时候，合理地使用 props 可以极大的**提高组件的复用性**！
它的语法格式如下

```javascript
export default {
  // 组件的自定义
  props: ['自定义属性A', '自定义属性B', '其它自定义属性...'],

  // 组件的私有数据
  data() {
    return {}
  }
}
```

##### 1. props 是只读的

vue 规定：组件中封装的自定义属性是**只读的**，程序员**不能直接修改** props 的值。否则会直接报错：

想要修改 props 的值，可以**把 props 的值转存到 data 中**，因为 data 中的数据是刻可读可写的！

```javascript
export default {
  props: ['init'],

  data() {
    return {
      count: this.init // 把 this.init 的值转存到 count
    }
  }
}
```

##### 2. props 的 **default** 默认值

在声明自定义属性时，可以通过 **default** 来**定义属性的默认值**。示例代码如下：

```javascript
export default {
  props: {
    init: {
      // 用 default 属性定义属性的默认值
      default: 0
    }
  }
}
```

##### 3. props 的 **type** 值类型

在声明自定义属性时，可以通过 **type** 来**定义属性的值类型**。示例代码如下：

```javascript
export default {
  props: {
    init: {
      // 用 default 属性定义属性的默认值
      default: 0,
      // 用 type 属性定义属性的值类型，
      // 如果传递过来的值不符合此类型，则会在终端报错
      type: Number
    }
  }
}
```

##### 4. props 的 **required** 必填项

在声明自定义属性时，可以通过 **required** 选项，将属性设置为**必填项**，强制用户必须传递属性的值。示例代码如下：

```javascript
export default {
  props: {
    init: {
      // 值类型为 Number 数字
      default: 0,
      // 必填项检验
      required: true
    }
  }
}
```

#### 6. 组件之间的样式冲突问题

默认情况下，**写在 .vue 组件中的样式会全局生效**，因此很容易造成**多个组件之间的样式冲突问题**。

导致组件之间样式冲突的根本原因是：

1. 单页面应用程序中，所有的 DOM 结构，都是基于**唯一的 index.html** 页面进行呈现的
2. 每个组件中的样式，都会**影响整个 index.html 页面**中的 DOM 元素

##### 1. **思考**：如何解决组件样式冲突的问题

为每个组件**分配唯一的自定义属性**，在编写组件样式时，通过**属性选择器**来控制**样式的作用域**，示例代码如下：

```vue
<template>
  <div class="container" data-v-001>
    <h3 data-v-001>轮播图组件</h3>
  </div>
</template>

<style>
/* 通过中括号"属性选择器"，来防止组件之间的"样式冲突问题"，
   因为每个组件分配的自定义属性是唯一的 */
.container[data-v-001] {
  border: 1px solid red;
}
</style>
```

##### 2. style 节点的 scoped 属性

为了提高开发效率和开发体验，vue 为 **style 节点**提供了 **scoped** 属性，从而防止组件之间的样式冲突问题：

```vue
<template>
  <div class="container">
    <h3>轮播图组件</h3>
  </div>
</template>

<style scoped>
/* style 节点的 scoped 属性，用来自动为每个组件分配唯一的"自定义属性"，
   并自动为当前组件的 DOM 标签和 style 样式应用这个自定义属性，防止组件的样式冲突问题 */
.container {
  border: 1px solid red;
}
</style>
```

##### 3. **/deep/** 样式穿透

如果给当前组件的 style 节点添加了 scoped 属性，则**当前组件的样式对其子组件是不生效的**。如果想让某些样式对子组件生效，可以使用 **/deep/ 深度选择器**。

```vue
<style lang="less" scoped>
.title {
  color: blue; /* 不加 /deep/ 时，生成的选择器格式为 .title[data-v-052242de] */
}

/deep/.title {
  color: blue; /* 加上 /deep/ 时，生成的选择器格式为 [data-v-052242de] .title */
}
</style>
```

## 3. 生命周期 & 数据共享

### 1. 组件的生命周期

#### 1. 生命周期 & 生命周期函数

**生命周期**（Life Cycle）是指一个组件从**创建** -> **运行** -> **销毁**的整个阶段，**强调的是一个时间段**。

**生命周期函数**：是由 vue 框架提供的**内置函数**，会伴随着组件的生命周期，**自动按次序执行**。

::: warning 注意

**生命周期**强调的是**时间段**，**生命周期函数**强调的是**时间点**。

:::

#### 2. 组件生命周期函数的分类

##### 组件创建阶段

new Vue() ——> beforeCreate ——> created ——> beforeMount ——> mounted

##### 组件运行阶段

beforeUpdate ——> updated

##### 组件销毁阶段

beforeDestroy ——> destroyed

#### 3. 生命周期图示

可以参考 Vue 官方文档给出的“生命周期图示”，进一步理解组件生命周期执行的过程：

[https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

### 2. 组件之间的数据共享

#### 1. 组件之间的关系

在项目开发中，组件之间的**最常见的关系**分为如下两种：

1. **父子关系**
2. **兄弟关系**

#### 2. 父子之间的数据共享

父子组件之间的数据共享又分为：

1. **父** -> **子**共享数据
2. **子** -> **父**共享数据

##### 1. 父组件向子组件共享数据

父组件向子组件共享数据需要使用**自定义属性**。示例代码如下：

父组件：

```vue
<Son :msg="message" :user="userinfo"></Son>
```

```javascript
import Son from './components/Son.vue'

export default {
  data() {
    return {
      message: 'hello vue.js',
      userinfo: { name: 'zs', age: 20 }
    }
  }
}
```

子组件：

```vue
<template>
  <div>
    <h5>Son 组件</h5>
    <p>父组件传递过来的 msg 值是：{{ msg }}</p>
    <p>父组件传递过来的 user 值是：{{ user }}</p>
  </div>
</template>
```

```javascript
props: ['msg', 'user']
```

##### 2. 子组件向父组件共享数据

子组件向父组件共享数据使用**自定义事件**。示例代码如下：

子组件：

```javascript
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count += 1
      // 修改参数时，通过 $emit() 触发自定义事件
      this.$emit('numchange', this.count)
    }
  }
}
```

父组件：

```vue
<Son @numchange="getNewCount"></Son>
```

```javascript
export default {
  name: 'App',
  data() {
    return {
      countFromSon: 0
    }
  },
  methods: {
    getNewCount(val) {
      this.countFromSon = val
    }
  }
}
```

##### 3. 兄弟组件之间的数据共享

在 **vue2.X** 中，兄弟组件之间数据共享的方案是 **EventBus**。

兄弟组件 A（数据发送方）：

```javascript
import bus from './eventBus.js'

export default {
  data() {
    return {
      msg: 'hello vue.js'
    }
  },
  methods: {
    sendMsg() {
      bus.$emit('share', this.msg)
    }
  }
}
```

eventBus.js：

```javascript
import Vue from 'vue'

// 向外共享 vue 的实例对象
export default new Vue()
```

兄弟组件 C（数据接收方）：

```javascript
import bus from './eventBus.js'

export default {
  data() {
    return {
      msgFormLeft: ''
    }
  },
  created() {
    bus.$on('share', val => {
      this.msgFormLeft = val
    })
  }
}
```

##### EventBus 的使用步骤

1. 创建 **eventBus.js** 模块，并向外共享一个 **Vue 的实例对象**
2. 在数据**发送方**，调用 **bus.$emit**('事件名称', 要发生的数据) 方法**触发自定义事件**
3. 在数据**接收方**，调用 **bus.$on**('事件名称', 事件处理函数) 方法**注册一个自定义事件**

### 3. ref 引用

#### 1. 什么是 ref 引用

ref 用来辅助开发者在**不依赖于 jQuery 的情况下**，获取 DOM 元素或组件的引用。

每个 vue 的组件实例上，都包含一个 **$refs 对象**，里面村存储着对应的 DOM 元素或组件的引用。默认情况下，**组件的 $refs 指向一个空对象**。

```vue
<template>
  <div>
    <h3>MyRef 组件</h3>
    <button @click="getRef">获取 $refs 引用</button>
  </div>
</template>
```

```javascript
export default {
  methods: {
    getRef() {
      console.log(this) // this 是当前组件的实例对象，this.$refs 默认指向空对象
    }
  }
}
```

#### 2. 使用 ref 引用 DOM 元素

如果想要使用 ref **引用页面上的 DOM 元素**，则可以安装如下的方式进行操作：

```vue
<!-- 使用 ref 属性，为对应的 DOM 添加引用名称 -->
<h3 ref="myh3">MyRef组件</h3>
<button @click="getRef">获取 $refs 引用</button>
```

```javascript
methods: {
    getRef() {
        // 通过 this.$refs 引用的名称 可以获取到 DOM 元素的引用
        console.log(this.$refs.myh3);
        // 操作 DOM 元素，把文本颜色改为红色
        this.$refs.myh3.style.color = "red";
    },
},
```

#### 3. 使用 ref 引用组件实例

如果想要使用 ref **引用页面上的组件实例**，则可以按照如下的方式进行操作：

```javascript
methods: {
    getRef() {
        // 通过 this.$refs 引用的名称 可以引用组件的实例
        console.log(this.$refs.counterRef);
        // 引用到组件的实例之后，就可以调用组件上的 methods 方法
        this.$refs.counterRef.add();
    },
},
```

#### 4. 控制文本框和按钮的按需切换

通过布尔值 **inputVisible** 来控制组件中的文本框与按钮的按需切换。示例代码如下：

```vue
<template>
  <input type="text" v-if="inputVisible" />
  <button v-else @click="showInput">展示输入框</button>
</template>
```

```vue
<script>
export default {
  data() {
    return {
      // 控制文本框和按钮的按需切换
      inputVisible: false
    }
  },
  methods: {
    showInput() {
      // 切换布尔值，显示文本框
      this.inputVisible = true
    }
  }
}
</script>
```

#### 5. 让文本框自动获得焦点

当文本框展示出来之后，如果希望它立即获得焦点，则可以为其添加 ref 引用，并调用原生 DOM 对象的 **.focus()** 方法即可。示例代码如下：

```vue
<template>
  <input type="text" v-if="inputVisible" ref="ipt" />
  <button v-else @click="showInput">展示输入框</button>
</template>
```

```javascript
methods: {
    showInput() {
        this.inputVisible = true;
        // 获取文本框的 DOM 引用，并调用 .focus() 使其自动获得焦点
        this.$refs.ipt.focus();
    },
},
```

#### 6. this.**$nextTick(cb)** 方法

组件的 **this.$nextTick(cb)** 方法，会把 cb 回调**推迟下一个 DOM 更新周期之后执行**。通俗的理解是：等组件的 DOM 更新完之后，再执行 cb 回调函数。从而保证 cb 回调函数可以操作到最新的 DOM 元素。

```vue
<input type="text" v-if="inputVisible" ref="ipt" />
<button v-else @click="showInput">展示输入框</button>
```

```javascript
methods: {
    showInput() {
        this.inputVisible = true;
        // 把对 input 文本框的操作，推迟到 下次 DOM 更新之后，否则页面上根本不存在文本框元素
        this.$nextTick(() => {
            this.$refs.ipr.focus();
        });
    },
},
```

### 购物车案例

#### 1. 实现步骤

1. 初始化项目基本结构
2. 封装 **MyHeader** 组件
3. 基于 axios 请求商品列表数据（GET 请求，地址为 [https://www.escook.cn/api/cart](https://www.escook.cn/api/cart)）
4. 封装 **MyFooter** 组件
5. 封装 **MyGoods** 组件
6. 封装 **MyCounter** 组件

### 总结

1. 能够知道 vue 中常用的生命周期函数
   - 创建阶段、运行阶段、销毁阶段
   - **created**、mounted
2. 能够知道如何实现组件之间的数据共享
   - 父 -> 子（**自定义属性**）
   - 子 -> 父（**自定义事件**）
   - 兄弟组件（**EventBus**）
3. 能够知道如何使用 ref 引用 DOM 元素组件
   - 给元素或组件添加 **ref**=**"**xxx**"** 的引用名称
   - 通过 **this.$refs**.xxx 获取元素组件的实例
   - **$nextTick()** 函数的执行时机

## 4. 动态组件 & 插槽 & 自定义指令

### 1. 动态组件

#### 1. 什么是动态组件

动态组件指的是**动态切换组件的显示与隐藏**。

#### 2. 如何实现动态组件渲染

vue 提供了一个内置的 **\<component\>** 组件，**专门用来实现动态组件的渲染**。示例代码如下：

```javascript
data() {
    return {
        // 1. 当前要渲染的组件名称
        comName: "Left",
    };
},
```

```vue
<!-- 2. 通过 is 属性，动态指定要渲染的组件 -->
<component :is="comName"></component>
```

#### 3. 使用 keep-alive 保持状态

默认情况下，切换动态组价时**无法保持组件的状态**。此时可以使用 vue 内置的 **\<keep-alive\>** 组件保持动态组件的状态。示例代码如下：

```vue
<keep-alive>
    <component :is="comName"></component>
</keep-alive>
```

#### 4. keep-alive 对应的声明周期函数

当组件**被缓存**时，会自动触发组件的 **deactivated** 生命周期函数。

当组件**被激活**时，会自动触发组件的 **activated** 生命周期函数。

```javascript
export default {
  created() {
    console.log('组件被创建了')
  },
  destroyed() {
    console.log('组件被销毁了')
  },

  activated() {
    console.log('Left 组件被激活了！')
  },
  deactivated() {
    console.log('Left 组件被缓存了！')
  }
}
```

#### 5. keep-alive 的 **include** 属性

include 属性用来指定：只有**名称匹配的组件**会被缓存。多个组件之间使用**英文的逗号**分隔：

```vue
<keep-alive include="MyLeft,MyRight">
    <component :is="comName"></component>
</keep-alive>
```

### 2. 插槽

#### 1. 什么是插槽

**插槽**（**Slot**）是 vue 为**组件的封装者**提供的能力。允许开发者在封装组件时，把**不确定的**、**希望由用户指定的部分**定义为插槽。

可以把插槽认为是组件封装期间，为用户预留的**内容占位符**。

#### 2. 体验插槽的基础用法

在封装组件时，可以通过 **\<slot\>** 元素**定义插槽**，从而**为用户预留内容占位符**。示例代码如下：

```vue
<template>
  <p>这是 MyCom1 组件的第 1 个 p 标签</p>
  <!-- 通过 solt 标签，为用户预留内容占位符（插槽） -->
  <slot></slot>
  <p>这是 MyCom1 组件最后一个 p 标签</p>
</template>
```

```vue
<my-com-1>
    <!-- 在使用 MyCom1 组件时，为插槽指定具体的内容 -->
    <p>---用户自定义的内容---</p>
</my-com-1>
```

##### 1. 没有预留插槽的内容会被丢弃

如果在封装组件时**没有预留任何 \<slot\> 插槽**，则用户提供的任何**自定义内容**都**会被丢弃**，示例代码如下：

```vue
<template>
  <p>这是 MyCom1 组件的第 1 个 p 标签</p>
  <!-- 封装组件时，没有预留任何插槽 -->
  <p>这是 MyCom1 组件最后一个 p 标签</p>
</template>
```

```vue
<my-com-1>
    <!-- 自定义的内容会被丢弃 -->
    <p>---用户自定义的内容---</p>
</my-com-1>
```

##### 2. 后备内容

封装组件时，可以为预留的 \<slot\> 插槽提供**后备内容**（默认内容）。如果组件的使用者没有为插槽提供任何内容，则后备内容会生效。示例代码如下：

```vue
<template>
  <p>这是 MyCom1 组件的第 1 个 p 标签</p>
  <slot>这是后备内容</slot>
  <p>这是 MyCom1 组件最后一个 p 标签</p>
</template>
```

#### 3. 具名插槽

如果在封装组件时**需要预留多个插槽节点**，则需要为每个 \<slot\> 指定**具体的 name 名称**。这种**带有具体名称**的插槽叫做“具名插槽”。示例代码如下：

```vue
<div class="container">
    <header>
        <!-- 我们希望把页头放这里 -->
        <slot name="header"></slot>
    </header>
    <main>
        <!-- 我们希望把主要内容放这里 -->
        <slot></slot>
    </main>
    <footer>
        <!-- 我们希望把页脚放这里 -->
        <slot name="footer"></slot>
    </footer>
</div>
```

::: warning 注意

没有指定 name 名称的插槽，会有隐含的名称叫做“**default**”。

:::

##### 1. 为具名插槽提供内容

在向具名插槽提供内容的时候，我们可以在一个 **\<template\>** 元素上使用 **v-slot** 指令，并以 v-slot 参数的形式提供其名称。示例代码如下：

```vue
<my-com-2>
    <template v-slot:header>
  <h1>滕王阁序</h1>
    </template>

    <template v-slot:default>
        <p>豫章故郡，洪都新府。</p>
        <p>星分翼轸，地接衡庐。</p>
        <p>襟三江而带五湖，控蛮荆而引瓯越。</p>
    </template>

    <template v-slot:footer>
        <p>落款：王勃</p>
    </template>
</my-com-2>
```

##### 2. 具名插槽的简写形式

跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容（**v-slot:**）替换为字符 **#**。例如：**v-slot**:header 可以被重写为 `#header`：

```vue
<my-com-2>
    <template #header>
        <h1>滕王阁序</h1>
    </template>

    <template #default>
        <p>豫章故郡，洪都新府。</p>
        <p>星分翼轸，地接衡庐。</p>
        <p>襟三江而带五湖，控蛮荆而引瓯越。</p>
    </template>

    <template #footer>
        <p>落款：王勃</p>
    </template>
</my-com-2>
```

#### 4. 作用域插槽

在封装过程中，可以为预留的 \<slot\> 插槽绑定 props 数据，这种**带有 props 数据的 \<slot\>** 叫做“**作用域插槽**”。示例代码如下：

```vue
<tbody>
    <!-- 下面的 slot 是一个作用域插槽 -->
    <slot v-for="item in list" :user="item"></slot>
</tbody>
```

##### 1. 使用作用域插槽

可以使用 **v-slot:** 的形式，接收作用域插槽对外提供的数据。示例代码如下：

```vue
<my-com-3>
    <!-- 1. 接收作用域对外提供的数据 -->
    <template s-slot:default="scope">
  <tr>
      <!-- 2. 使用作用域插槽的数据 -->
      <td>{{ scope }}</td>
        </tr>
    </template>
</my-com-3>
```

##### 2. 解构插槽 Prop

作用域插槽对外提供的数据对象，可以使用**解构赋值**简化数据的接收过程。示例代码如下：

```vue
<my-com-3>
    <!-- v-slot: 可以简写成 # -->
    <!-- 作用域对外提供的数据对象，可以通过“解构函数”简化接收的过程 -->
    <template #default="{ user }">
  <tr>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.state }}</td>
        </tr>
    </template>
</my-com-3>
```

### 3. 自定义指令

#### 1. 什么是自定义指令

vue 官方提供了 v-text、v-for、v-model、v-if 等常用的指令。除此之外 vue 还允许开发者自定义指令。

#### 2. 自定义指令的分类

vue 中的自定义指令分为两类，分别是：

- **私有**自定义指令
- **全局**自定义指令

#### 3. 私有自定义指令

在每个 vue 组件中，可以在 **directives** 节点下声明**私有自定义指令**。示例代码如下：

```javascript
directives: {
    // 为绑定到的 HTML 元素设置红色的文字
    color: {
        bind(el) {
            // 形参中的 el 是绑定了此指令的、原生的 DOM 对象
            el.style.color = "red";
        },
    },
},
```

#### 4. 使用自定义指令

在使用自定义指令时，需要加上 **v-** 前缀。示例代码如下：

```vue
<!-- 声明自定义指令时，指令的名字是 color -->
<!-- 使用自定义指令时，需要加上 v- 指令前缀 -->
<h1 v-color>App 组件</h1>
```

#### 5. 为自定义指令**动态绑定参数值**

在 template 结构中**使用自定义指令**时，可以通过等号（**=**）的方式，为当前指令**动态绑定参数值**：

```javascript
data() {
    return {
        color: "red", // 定义 color 颜色值
    };
},
```

```vue
<!-- 在使用指令时，动态为当前指令绑定参数的值 color -->
<h1 v-color="color">App 组件</h1>
```

#### 6. 通过 **binding** 获取指令的参数值

在声明自定义指令时，可以通过形参中的**第二个参数**，来接收指令的参数值：

```javascript
directives: {
    color: {
        bind(el, binding) {
            // 通过 binding 对象的 .value 属性，获取动态的参数值
            el.style.color = binding.value;
        },
    },
},
```

#### 7. update 函数

bind 函数**只能调用 1 次**：当指令第一次绑定到元素时调用，**当 DOM 更新时 bind 函数不会被触发**。**update** 函数会在**每次 DOM 更新时**被调用。示例代码如下：

```javascript
directives: {
    color: {
        // 当指令第一次绑定到元素时被调用
        bind(el, binding) {
            el.style.color = binding.value;
        },
        // 每次 DOM 更新时被调用
        update(el, binding) {
            el.style.color = binding.value;
       },
    },
},
```

#### 8. 函数简写

如果 **insert** 和 **update** 函数中的**逻辑完全相同**，则**对象格式**的自定义指令可以简写成**函数格式**：

```javascript
directives: {
    // 在 insert 和 update 时，会触发相同的业务逻辑
    color(el, binding) {
        el.style.color = binding.value;
    },
},
```

#### 9. 全局自定义指令

全局共享的自定义指令需要通过“**Vue.directive()**”进行声明，示例代码如下：

```javascript
// 参数1：字符串，表示全局自定义指令的名字
// 参数2：对象，用来接收指令的参数值
Vue.directive('color', function (el, binding) {
  el.style.color = binding.value
})
```

### 总结

1. 能够掌握 **keep-alive** 元素的基本使用
   - \<keep-alive\> 标签、include 属性
2. 能够掌握**插槽**的基本使用
   - \<slot\> 标签、具名插槽、**作用域插槽**、后备内容
3. 能够知道如何**自定义指令**
   - 私有自定义指令 directives:{}
   - **全局自定义指令 Vue.directive()**

## 5. 路由

### 1. 前端路由的概念与原理

#### 1. 什么是路由

路由（英文：router）就是**对应关系**。

#### 2. SPA 与前端路由

SPA 指的是一个 web 网站只有唯一的一个 HTML 页面，**所有组件的展示与切换**都在这唯一的一个页面内完成。

此时，不同组件之间的切换需要通过**前端路由**来实现。

结论：在 SPA 项目中，**不同功能之间的切换**，要**依赖于前端路由**来完成！

#### 3. 什么是前端路由

通俗易懂的概念：**Hash 地址**与**组件**之间的**对应关系**。

#### 4. 前端路由的工作方式

1. 用户**点击了**页面上的**路由链接**
2. 导致了 **URL 地址栏**中的 **Hash 值**发送了变化
3. **前端路由监听到了 Hash 地址的变化**
4. 前端把当前 **Hash 地址对应的组件**渲染到浏览器中

结论：前端路由，指的是 **Hash 地址**与**组件之间**的**对应关系**！

#### 5. 实现简易的前端路由

步骤 1：通过 **\<component\>** 标签，结合 **comName** 动态渲染组件。示例代码如下：

```vue
<!-- 通过 is 属性，指定要展示的组件的名称 -->
<component :is="comName"></component>
```

```javascript
export default {
  name: 'App',
  data() {
    return {
      // 要展示组件的名称
      comName: 'Home'
    }
  }
}
```

步骤 2：在 App.vue 组件中，为 **\<a\> 链接**添加对应的 **hash 值**：

```vue
<a href="#/home">Home</a>
&nbsp;
<a href="#/movie">Movie</a>
&nbsp;
<a href="#/about">About</a>
```

步骤 3：在 **created** 生命周期函数中，监听浏览器地址中 **hash 地址的变化**，动态切换要展示的组件的名称：

```javascript
created() {
  window.onhashchange = () => {
    switch (location.hash) {
      case '#/home': // 点击了“首页按钮的链接”
        this.comName = 'Home'
        break
      case '#/movie': // 点击了“电影”的链接
        this.comName = 'Movie'
        break
      case '#/about': // 点击了“关于”的链接
        this.comName = 'About'
        break
    }
  }
},
```

### 2. vue-router 的基本使用

#### 1. 什么是 vue-router

**vue-router** 是 vue.js 官方给出的**路由解决方案**。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目中组件的切换。

vue-router 的官方文档地址：[https://router.vuejs.org/zh/](https://router.vuejs.org/zh/)

#### 2. vue-router 安装和配置步骤

1. 安装 vue-router 包
2. **创建路由模块**
3. 导入并挂载路由模块
4. 声明**路由链接**和**占位符**

##### 1. 在项目中安装 vue-router

在 vue2 的项目中，安装 vue-router 的命令如下：

```bash
npm i vue-router@3.5.2 -S
```

##### 2. 创建路由模块

在 **src** 源代码目录下，新建 **router/index.js** 路由模块，并初始化如下的代码：

```javascript
// 1. 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2. 调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter()

// 4. 向外共享路由的实例对象
export default router
```

##### 3. 导入并挂载路由模块

在 src/**main.js** 入口文件中，导入挂载路由模块。示例代码如下：

```javascript
import Vue from 'vue'
import App from './App.vue'
// 1. 导入路由模块
import router from '@/router'

new Vue({
  render: h => h(App),
  // 2. 挂载路由
  router: router
}).$mount('#app')
```

##### 4. 声明**路由链接**和**占位符**

在 src/App.vue 组件中，使用 vue-router 提供的 **\<router-link\>** 和 **\<router-view\>** 声明路由链接和占位符：

```vue
<template>
  <div class="app-container">
    <h1>App 组件</h1>
    <!-- 1. 定义路由连接 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movice">电影</router-link>
    <router-link to="/about ">关于</router-link>

    <hr />

    <!-- 2. 定义路由的占位符 -->
    <router-view></router-view>
  </div>
</template>
```

```javascript
// 导入需要使用路由切换展示的组件
import Home from '@/components/Home.vue'
import Movice from '@/components/Movice.vue'
import About from '@/components/About.vue'

// 2. 创建路由的实例对象
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/movice', component: Movice },
    { path: '/about', component: About }
  ]
})
```

### 3. vue-router 的常见用法

#### 1. 路由重定向

**路由重定向**指的是：用户在访问**地址 A** 的时候，**强制用户调转**到地址 C，从而展示特定的组件页面。

通过路由规则的 **redirect** 属性，指定一个新的路由地址，可以很方便地设置路由的重定向：

```javascript
const router = new VueRouter({
  // 在 routes 数组中，声明路由的匹配规则
  routes: [
    // 当用户访问 / 的时候，通过 redirect 属性跳转到 /home 对应的路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
    { path: '/about', component: About }
  ]
})
```

#### 2. 嵌套路由

通过路由实现**组件的嵌套展示**，叫做嵌套路由。

<br />

点击**父级路由链接**显示模板内容

<br />

1. 模板内容中又有**子级路由链接**
2. 点击**子级路由链接**显示**子级模板内容**

##### 1. 声明**子路由链接**和**子路由占位符**

在 **About.vue** 组件中，声明 tab1 和 tab2 的**子路由链接**以及**子路由占位符**。示例代码如下：

```vue
<template>
  <div class="about">
    <h3>About 组件</h3>
    <!-- 1. 在关于页面中，声明两个字路由链接 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <hr />

    <!-- 2. 在关于页面中，声明字路由的占位符 -->
    <router-view></router-view>
  </div>
</template>
```

##### 2. 通过 **children** 属性声明**子路由规则**

在 src/router/index.js 路由模块中，导入需要的组件，并使用 **children 属性**声明子路由规则：

```javascript
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

const router = new VueRouter({
  routes: [
    {
      // about 页面的路由规则（父级路由规则）
      path: '/about',
      component: About,
      children: [
        // 1. 通过 children 属性，嵌套声明子集路由规则
        { path: 'tab1', component: Tab1 }, // 2. 访问 /about/tab1 时，展示 Tab1 组件
        { path: 'tab2', component: Tab2 } // 2. 访问 /about/tab2 时，展示 Tab2 组件
      ]
    }
  ]
})
```

#### 3. 动态路由匹配

思考：有如下 3 个路由链接：

```vue
<router-link to="/movie/1">电影1</router-link>
<router-link to="/movie/2">电影2</router-link>
<router-link to="/movie/3">电影3</router-link>
```

定义如下 3 个路由规则，是否可行？？？

```javascript
{ path: '/movie/1', component: Movie }
{ path: '/movie/2', component: Movie }
{ path: '/movie/3', component: Movie }
```

缺点：路由规则的**复用性差**。

##### 1. 动态路由的概念

动态路由指的是：把 Hash 地址中的**可变的部分**定义为**参数项**，从而**提高路由规则的复用性**。

在 vue-router 中使用**英文的冒号**（**:**）来定义路由的参数项。示例代码如下：

```javascript
// 路由中的动态参数以 : 进行声明，冒号后面的是动态路由参数的名称
{ path: '/movie/:id', component: Movie }
// 将以下 3 个路由规则，合并成了一个，提高了路由规则的复用性
{ path: '/movie/1', component: Movie }
{ path: '/movie/2', component: Movie }
{ path: '/movie/3', component: Movie }
```

##### 2. **$route.params** 参数对象

在动态路由渲染出来的组件中，可以使用 **this.$route.params** 对象访问到**动态匹配的参数值**。

```vue
<template>
  <div id="movie-container">
    <!-- this.$route 是路由的“参数对象” -->
    <h3>Movie 组件 -- {{ this.$route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Movie'
}
</script>
```

##### 3. 使用 props 接收路由参数

**为了简化路由参数的获取形式**，vue-router 允许在**路由规则**中**开启 props 传参**。示例代码如下：

```javascript
// 1. 定义路由规则时，声明 props: true 选项，即可在 Movie 组件中，以 props 的形式接收路由规则匹配到的参数项
{ path: '/movie/:id', name: 'Movie', component: Movie, props: true }
```

```vue
<template>
  <div class="movie-container">
    <!-- 3. 直接用 props 中接收的路由参数 -->
    <h3>MyMovie 组件 --- {{ id }}</h3>
  </div>
</template>

<script>
export default {
  props: ['id'] // 2. 使用 props 接收路由规则中匹配的参数项
}
</script>
```

#### 4. 声明式导航 & 编程式导航

在浏览器中，**点击链接**实现导航的方式，叫做**声明式导航**。例如：

- 普通网页中点击 **\<a\> 链接**、vue 项目中点击 **\<router-link\>** 都属于声明式导航

<br />

在浏览器中，**调用 API 方法**实现导航的方式，叫做**编程式导航**。例如：

- 普通网页中调用 **location.href** 跳转到新页面的方式，属于编程式导航

##### 1. vue-router 中的编程式导航 API

vue-router 提供了许多编程式导航的 API，其中最常用的导航 API 分别是：

1. this.$router.**push**('bash 地址')
   - 跳转到指定 hash 地址，并**增加**一条历史记录
2. this.$router.**replace**('hash 地址')
   - 跳转到指定的 hash 地址，并**替换掉当前**的历史记录
3. this.$router.**go**(数值 n)
   - 实现导航历史前进、后退

##### 2. $router.**push**

调用 this.**$router**.**push**() 方法，可以跳转到指定的 hash 地址，从而展示对应的组件页面。示例代码如下：

```vue
<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <button @click="gotoMovie">跳转到 Movie 页面</button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoMovie() {
      this.$router.push('/movie/1')
    }
  }
}
</script>
```

##### 3.$router.**replace**

调用 this.**$router**.**replace**() 方法，可以跳转到指定的 hash 地址，从而展示对应的组件页面。

<br />

push 和 replace 区别：

- push 会**增加一条历史记录**
- replace 不会增加历史记录，而是**替换掉当前的历史记录**

##### 4. $router.**go**

调用 this.**$router**.**go**() 方法，可以在浏览历史中前进和后退。示例代码如下：

```vue
<template>
  <div class="movie-container">
    <h3>MyMovie 组件 --- {{ id }}</h3>
    <button @click="goBack">后退</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    goBack() {
      this.$router.go(-1) // 后退到之前的组件页面
    }
  }
}
</script>
```

##### 5. $router.**go** 的简化用法

在实际开发中，一般只会前进和后退一层页面。因此 vue-router 提供了如下两个便捷方法：

1. $router.**back**()
   - 在历史记录中，**后退**到上一页页面
2. $router.**forward**()
   - 在历史记录中，**前进**到下一个页面

#### 5. 导航守卫

**导航守卫**可以**控制路由的访问权限**。示意图如下：

`<router-link to="/main">主页</router-link>`（Home 首页）：**未登录**的情况下，**访问后台主页** —— 无法控制访问权限 用户可以直接访问后台主页 ——> Main 后台主页

`<router-link to="/main">主页</router-link>`（Home 首页）：**未登录**的情况下，**访问后台主页** —— 导航守卫（检测到未登录 **强制跳转到登录页**） ——> Login 登录页面

##### 1. 全局前置守卫

每次发生路由的**导航跳转**时，都会触发**全局前置守卫**。因此，在全局前置守卫中，程序员可以对每个路由进行**访问权限**的控制：

```javascript
// 创建路由实例对象
const router = new VueRouter({ ... })


// 调用路由实例对象的 beforeEach 方法，即可声明“全局前置守卫”
// 每次发生路由导航跳转的时候，都会自动触发 fn 这个“回调函数”
router.beforeEach(fn)
```

##### 2. 守卫方法的 3 个形参

**全局前置守卫**的回调函数中接收 3 个形参，格式为：

```javascript
// 创建路由实例对象
const router = new VueRouter({ ... })

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // to 是将要访问的路由的信息对象
    // from 是将要离开的路由的信息对象
    // next 是一个函数，调用 next() 表示放行，允许这次路由导航
})
```

##### 3. next 函数的 3 中调用方式

当前用户**拥有**后台主页的访问权限，直接放行：next()

当前用户**没有**后台主页的访问权限，**强制其跳转到登录页面**：next('**/login**')

当前用户**没有**后台主页的访问权限，**不允许跳转到后台主页**：next(**false**)

##### 4. 控制后台主页的访问权限

```javascript
router.beforeEach((to, from, next) => {
  if (to.path === '/main') {
    const token = localStorage.getItem('token')
    if (token) {
      next() // 访问的是后台主页，且有 token 的值
    } else {
      next('/logn') // 访问的是后台主页，但是没有 token 的值
    }
  } else {
    next() // 访问的不是后台主页，直接放行
  }
})
```

### 4. 后台管理案例

#### 案例用到的知识点

- 命名路由
- 路由重定向
- 导航守卫
- 嵌套路由
- 动态路由匹配
- 编程式导航

### 总结

1. 能够知道如何在 vue 中配置路由
   - createRouter、app.**use**(router)
2. 能够知道如何使用嵌套路由
   - 如果 **children** 属性进行嵌套
3. 能够知道如何实现动态路由匹配
   - 使用**冒号**声明参数项、this.**$route**.params、**props: true**
4. 能够知道如何使用编程式导航
   - this.$router.push、this.$router.go
5. 能够知道如何使用导航守卫
   - 路由实例.beforeEach((to, from, **next**) => { /\* 必须调 next 函数 \*/ })

## 6. Vuex

### 目标

- 能够说出 Vuex 的基本使用步骤
- 能够说出 Vuex 的核心概念
- 能够基于 Vuex 实现业务功能

### 1. Vuex 的概述

#### 1. 组件之间共享数据的方式

父向子传值：**v-bind 属性绑定**

子向父传值：**v-on 事件绑定**

兄弟组件之间共享数据：**EventBus**

- $on 接收数据的那个组件
- $emit 发送数据的那个组件

#### 2. Vuex 是什么

**Vuex** 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享。

#### 3. 使用 Vuex 统一管理状态的好处

1. 能够在 vuex 中集中管理共享的数据，易于开发和后期维护
2. 能够高效地实现组件之间的数据共享，提高开发效率
3. 存储在 vuex 中的数据都是响应式的，能够实时保持数据与页面的同步

#### 4. 什么样的数据适合存储到 Vuex 中

一般情况下，只有组件之间共享的数据，才有必要存储到 vuex 中；对于组件中的私有数据，依旧存储在组件自身的 data 中即可。

### 2. Vuex 的基本使用

#### 1. 安装 vuex 依赖包

```bash
npm install vuex --save
```

#### 2. 导入 vuex 包

```javascript
import Vuex from 'vuex'
Vue.use(Vuex)
```

#### 3. 创建 store 对象

```javascript
const store = new Vuex.store({
  // state 中存放的就是全局共享的数据
  state: { count }
})
```

#### 4. 将 store 对象挂载到 vue 实例中

```javascript
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  // 将创建的共享数据对象，挂载到 vue 实例中
  // 所有的组件，就可以直接从 store 中获取全局的数据了
  store
})
```

### 3. Vuex 的核心概念

#### 1. 核心概念概述

- State
- Mutation
- Action
- Getter

#### 2. State

State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。

```javascript
// 创建 store 数据源，提供唯一公共数据
const store = new Vuex.Store({
  state: { count: 0 }
})
```

组件访问 State 中数据的**第一种方式**：

```javascript
this.$store.state.全局数据名称
```

组件访问 State 中数据的**第二种方式**：

```javascript
// 1. 从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'
```

通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性：

```javascript
// 2. 将全局数据，映射为当前组件的计算属性
computed: {
  ...mapState(['count'])
}
```

#### 3. Mutation

Mutation 用于变更 Store 中的数据。

1. 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据。
2. 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。

```javascript
// 定义 Mutation
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      // 变更状态
      state.count++
    }
  }
})
```

```javascript
// 触发 mutation
methods: {
  handle1() {
    // 触发 mutations 的第一种方式
    this.$store.commit('add')
  }
}
```

可以在触发 mutations 时传递参数：

```javascript
// 定义 Mutation
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addN(state, step) {
      // 变更状态
      state.count += step
    }
  }
})
```

```javascript
// 触发 mutation
methods {
  handle2() {
    // 在调用 commit 函数，
    // 触发 mutations 时携带参数
    this.$store.commit('addN', 3)
  }
}
```

this.$store.commit() 是触发 mutations 的第一种方式，触发 mutations 的**第二种方式**：

```javascript
// 1. 从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'
```

通过刚才导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法：

```javascript
// 2. 将指定的 mutations 函数，映射为当前组件的 methods 函数
methods: {
  ...mapMutations(['add', 'addN'])
}
```

#### 4. Action

Action 用于处理异步任务。

如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。

```javascript
// 定义 Action
const store = new Vuex.store({
  // ...省略其他代码
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    }
  }
})
```

```javascript
// 触发 Action
methods: {
  handle() {
    // 触发 actions 的一种方式
    this.$store.dispatch('addAsync')
  }
}
```

触发 actions 异步任务时携带参数：

```javascript
// 定义 Action
const store = new Vuex.store({
  // ...省略其他代码
  mutations: {
    add(state, step) {
      state.count += step
    }
  },
  actions: {
    addAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    }
  }
})
```

```javascript
// 触发 Action
methods: {
  handle() {
    // 在调用 dispatch 函数，
    // 触发 actions 时携带参数
    this.$store.dispatch('addAsync', 5)
  }
}
```

this.$store.dispatch() 是触发 actions 的第一种方式，触发 actions 的**第二种方式**：

```javascript
// 1. 从 vuex 中按需导入 mapActions 函数
import { mapActions } from 'vuex'
```

通过刚才导入的 mapActions 函数，将需要的 actions 函数，映射为当前组件的 methods 方法：

```javascript
// 2. 将指定的 mapActions 函数，映射为当前组件的 methods 函数
methods: {
  ...mapActions(['addAsync', 'addNAsync'])
}
```

#### 5. Getter

Getter 用于对 Store 中的数据进行加工处理形成新的数据。

1. Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
2. Store 中数据发生变化，Getter 的数据也会跟着变化。

```javascript
// 定义 Getter
const store = new Vuex.store({
  state: {
    count: 0
  },
  getters: {
    showNum: state => {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
```

使用 getters 的**第一种方式**：

```javascript
this.$store.getters.名称
```

使用 getters 的**第二种方式**：

```javascript
import { mapGetters } from 'vuex'

computed: {
  ...mapGetters(['showNum'])
}
```

### 基于 Vuex 的案例

#### 1. 初始化项目

1. 通过 vue ui 命令打开可视化面板，创建新项目 **vuex-demo2**
2. 安装 vuex 依赖包 npm install vuex axios ant-design-vue -S
3. 实现 Todos 基本布局（基于已有样式模板）
