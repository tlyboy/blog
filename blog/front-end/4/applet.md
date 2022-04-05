---
title: 小程序
date: 2022-3-22
categories:
  - 前端笔记
tags:
  - JavaScript
---

## 1. 起步

### 目标

- 能够知道如何创建小程序项目
- 能够清除小程序项目的基本组成结构
- 能够知道小程序页面由几部分组成
- 能够知道小程序中常见的组件如何使用
- 能够知道小程序如何进行协同开发和发布

### 1. 小程序简介

#### 1. 小程序与普通网页开发的区别

##### 1. 运行环境不同

**网页**运行在**浏览器环境**中

**小程序**运行在**微信环境**中

##### 2. API 不同

由于运行环境的不同，所以小程序中，**无法调用 DOM 和 BOM 的 API**。

但是，小程序中可以调用微信环境提供的各种 API，例如：

- 地理定位
- 扫码
- 支付

##### 3. 开发模式不同

网页的开发模式：**浏览器** + **代码编辑器**

小程序有自己的一套标准开发模式：

- **申请小程序开发账号**
- **安装小程序开发者工具**
- **创建和配置小程序项目**

### 2. 第一个小程序

#### 1. 注册小程序开发账号

##### 1. 点击注册按钮

使用浏览器打开 [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/) 网址，点击右上角的“**立即注册**”即可进入到小程序开发账号的注册流程。

##### 2. 选择注册账号类型

##### 3. 填写账号信息

##### 4. 提示邮箱激活

##### 5. 点击链接激活账号

##### 6. 选择主体类型

##### 7. 主体信息登记

##### 8. 获取小程序的 AppID

#### 2. 安装开发者工具

##### 1. 了解微信开发者工具

**微信开发者工具**是官方推荐使用的小程序开发工具，它提供的主要功能如下：

1. 快速创建小程序项目
2. 代码的查看和编辑
3. 对小程序功能进行调试
4. 小程序的预览和发布

##### 2. 下载

推荐下载和安装最新的**稳定版**（Stable Build）的微信开发者工具，下载页面的链接如下：

[https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)

##### 3. 安装

点击“完成”按钮，完成对微信开发者工具的安装。

##### 4. 扫码登录

##### 5. 设置外观和代理

#### 3. 创建小程序项目

##### 1. 点击“加号”按钮

##### 2. 填写项目信息

##### 3. 项目创建完成

##### 4. 在模拟器上查看项目效果

##### 5. 在真机上预览项目效果

##### 6. 主界面的 5 个组成部分

### 3. 小程序代码的构成

#### 1. 项目结构

##### 1. 了解项目的基本组成结构

1. **pages 用来存放所有小程序的页面**
2. utils 用来存放工具性质的模块（例如：格式化时间的自定义模块）
3. **app.js 小程序项目的入口文件**
4. **app.json 小程序项目的全局配置文件**
5. app.wxss 小程序项目的全局样式文件
6. project.config.json 项目的配置文件
7. sitemap.json 用来配置小程序及其页面是否允许被微信索引

##### 2. 小程序页面的组成部分

小程序官方建议把所有小程序的页面，都存放在 **pages 目录**中，以**单独的文件夹**存在。

其中，每个页面**由 4 个基本文件**组成，它们分别是：

1. **.js** 文件（页面的脚本文件，存放页面的数据，事件处理函数等）
2. **.json** 文件（当前页面的配置文件，配置窗口的外观、表现等）
3. **.wxml** 文件（页面的模板结构文件）
4. **.wxss** 文件（当前页面的样式表文件）

#### 2. JSON 配置文件

##### 1. JSON 配置文件的作用

**JSON 是一种数据格式**，在实际开发中，JSON 总是以**配置文件**的形式出现。小程序项目中也不例外：通过不同的 .json 配置文件，可以对小程序项目进行不同级别的配置。

小程序项目有 4 种 json 配置文件，分别是：

1. 项目根目录中的 **app.json** 配置文件
2. 项目根目录中的 **project.config.json** 配置文件
3. 项目根目录中的 sitemap.json 配置文件
4. **每个页面文件夹中的 .json 配置文件**

##### 2. app.json 文件

app.json 是当前小程序的**全局配置**，包括了小程序的**所有页面路径、窗口外观、界面表现、底部 tab** 等。

Demo 项目里边的 app.json 配置内容如下：

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle": "black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

简单了解下这 4 个配置项的作用：

1. **pages**：用来记录当前小程序所有的页面的路径
2. **widow**：全局定义小程序所有页面的背景色、文字颜色等
3. **style**：全局定义小程序组件所使用的样式版本
4. sitemapLocation：用来指明 sitemap.json 的位置

##### 3. project.config.json 文件

project.config.json 是项目配置文件，用来记录我们**对小程序开发工作所做的个性化配置**，例如：

- **setting** 中保存了**编译相关的配置**
- **projectname** 中保存的是**项目名称**
- **appid** 中保存的是**小程序的账号 ID**

##### 4. sitemap.json 文件

微信现已开放**小程序内搜索**，效果类似于 PC 网页的 SEO。sitemap.json 文件用来**配置小程序页面是否允许微信索引**。

当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面建立索引。当用户的搜索关键字和页面的索引成功匹配的时候，小程序的页面将可能展示在搜索结果中。

```json
{
  "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
  "rules": [
    {
      "action": "allow",
      "page": "*"
    }
  ]
}
```

> 注意：sitemap 的索引提示是默认开启的，如需关闭 sitemap 的索引提示，可在小程序项目配置文件 **project.config.json** 的 **setting** 配置字段 **checkSiteMap** 为 **false**

##### 5. 页面的 .json 配置文件

小程序中的每一个页面，可以使用 .json 文件**对本页面的窗口外观进行配置**，**页面中的配置会覆盖 app.json 的 window 中相同的配置项**。例如：

app.json

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle": "black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

index.json

```json
{
  "usingComponents": {}
}
```

##### 6. 新建小程序页面

只需要在 **app.json** -> **pages** 中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件。

##### 7. 修改项目首页

只需要调整 **app.json** -> **pages** 数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一位的页面，当做项目首页进行渲染。

#### 3. WXML 模板

##### 1. 什么是 WXML

WXML（WeiXin Markup Language）是小程序框架设计的一套**标签语言**，**用来构建小程序页面的结构**，其作用类似于网页开发中的 HTML。

##### 2. WXML 和 HTML

1. **标签名称不同**
   - HTML（div、span、img、a）
   - WXML（view、text、image、navigator）
2. **属性节点不同**
   - \<a href="#"\>超链接\<\a>
   - \<navigator url="/pages/home/home"\>\<navigator\>
3. **提供了类似于 Vue 中的模板语法**
   - 数据绑定
   - 列表渲染
   - 条件渲染

#### 4. WXSS 样式

##### 1. 什么是 WXSS

WXSS（WeiXin Style Sheet）是一套**样式语言**，用于描述 WXML 的组件样式，类似于网页开发中的 CSS。

##### 2. WXSS 和 CSS 的区别

1. **新增了 rpx 尺寸单位**
   - CSS 中需要手动进行像素单位换算，例如 rem
   - WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算
2. **提供了全局的样式和局部样式**
   - 项目根目录中的 app.wxss 会作用于所有小程序页面
   - 局部页面的 .wxss 样式仅对当前页面生效
3. **WXSS 仅支持部分 CSS 选择器**
   - .class 和 #id
   - element
   - 并集选择器、后代选择器
   - ::after 和 ::before 等伪类选择器

#### 5. JS 逻辑交互

小程序中的 JS 文件分为三大类，分别是：

1. app.js
   - 是**整个小程序项目的入口文件**，通过调用 **App() 函数**来启动整个小程序
2. 页面的 .js 文件
   - 是**页面的入口文件**，通过调用 **Page() 函数**来创建并运行页面
3. 普通的 .js 文件
   - 是**普通的功能模块文件**，用来封装**公共的函数或属性**供页面使用

### 4. 小程序的宿主环境

#### 1. 宿主环境简介

##### 1. 什么是宿主环境

**宿主环境**（host environment）指的是**程序运行所必须的依赖环境**。例如：

**Android 系统**和 **iOS 系统**是两个不同的宿主环境。安卓版的微信 App 是不能再 iOS 环境下运行的，所以，Android 是安卓软件的宿主环境，**脱离了宿主环境的软件是没有任何意义的**！

##### 2. 小程序的宿主环境

**手机微信是小程序的宿主环境。**

小程序**借助宿主环境提供的能力**，可以完成许多普通网页无法完成的功能，例如：

微信扫码、微信支付、微信登录、地理定位、etc...

##### 3. 小程序宿主环境包含的内容

1. 通信模型
2. 运行机制
3. 组件
4. API

#### 2. 通信模型

##### 1. 通信的主体

小程序中通信的主体是**渲染层**和**逻辑层**，其中：

1. WXML 模板和 WXSS 样式工作在渲染层
2. JS 脚本工作在逻辑层

##### 2. 小程序的通信模型

小程序中的通信模型分为两部分：

1. **渲染层**和**逻辑层**之间的通信
   - 由微信客户端进行转发
2. **逻辑层**和**第三方服务器**之间的通信
   - 由微信客户端进行转发

#### 3. 运行机制

##### 1. 小程序启动的过程

1. 把小程序的代码包下载到本地
2. 解析 app.json 全局配置文件
3. 执行 app.js 小程序入口文件，**调用 App() 创建小程序实例**
4. 渲染小程序首页
5. 小程序启动完成

##### 2. 页面渲染的过程

1. 加载页面的 .json 配置文件
2. 加载页面的 .wxml 模板和 .wxss 样式
3. 执行页面的 .js 文件，**调用 Page() 创建页面实例**
4. 页面渲染完成

#### 4. 组件

##### 1. 小程序中组件的分类

**小程序中的组件也是由宿主环境提供的**，开发者可以基于组件快速搭建出漂亮的页面结构。官方把小程序的组件分为了 9 大类，分别是：

1. **视图容器**
2. **基础内容**
3. **表单组件**
4. **导航组件**
5. 媒体组件
6. map 地图组件
7. canvas 画布组件
8. 开放能力
9. 无障碍访问

##### 2. 常见的视图容器类组件

1. **view**
   - 普通视图区域
   - 类似于 HTML 中的 div，是一个块级元素
   - 常用来实现页面的布局效果
2. **scroll-view**
   - 可滚动的视图区域
   - 常用来实现滚动列表效果
3. **swiper** 和 **swiper-item**
   - 轮播图容器组件 和 轮播图 item 组件

##### 3. view 组件的基本使用

实现 flex 横向布局效果

```html
<view class="container1">
  <view>A</view>
  <view>B</view>
  <view>C</view>
</view>
```

```css
.container1 view {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}

.container1 view:nth-child(1) {
  background-color: lightgreen;
}

.container1 view:nth-child(2) {
  background-color: lightblue;
}

.container1 view:nth-child(3) {
  background-color: lightpink;
}

.container1 {
  display: flex;
  justify-content: space-around;
}
```

##### 4. scroll-view 组件的基本使用

实现纵向滚动效果：

```html
<!-- scroll-y 属性：允许纵向滚动 -->
<!-- scroll-x 属性：允许横向滚动 -->
<!-- 注意：使用竖向滚动时，必须给 scroll-view 一个固定高度 -->
<scroll-view class="container1" scroll-y>
  <view>A</view>
  <view>B</view>
  <view>C</view>
</scroll-view>
```

```css
.container1 view {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}

.container1 view:nth-child(1) {
  background-color: lightgreen;
}

.container1 view:nth-child(2) {
  background-color: lightblue;
}

.container1 view:nth-child(3) {
  background-color: lightpink;
}

.container1 {
  border: 1px solid red;
  /* 给 scroll-view 固定高度 */
  height: 120px;
  width: 100px;
}
```

##### 5. swiper 和 swiper-item 组件的基本使用

实现轮播图效果：

```html
<!-- 轮播图区域 -->
<!-- indicator-dots 属性：显示面板指示点 -->
<swiper class="swiper-container" indicator-dots>
  <!-- 第1项 -->
  <swiper-item>
    <view class="item">A</view>
  </swiper-item>
  <!-- 第2项 -->
  <swiper-item>
    <view class="item">B</view>
  </swiper-item>
  <!-- 第3项 -->
  <swiper-item>
    <view class="item">C</view>
  </swiper-item>
</swiper>
```

```css
.swiper-container {
  height: 150px; /* 轮播图容器的高度 */
}

.item {
  height: 100%;
  line-height: 150px;
  text-align: center;
}

swiper-item:nth-child(1) .item {
  background-color: lightgreen;
}

swiper-item:nth-child(2) .item {
  background-color: lightblue;
}

swiper-item:nth-child(3) .item {
  background-color: lightcoral;
}
```

##### 6. swiper 组件的常用属性

| 属性                   | 类型    | 默认值            | 说明                 |
| ---------------------- | ------- | ----------------- | -------------------- |
| indicator-dots         | boolean | false             | 是否显示面板指示点   |
| indicator-color        | color   | rgba(0, 0, 0, .3) | 指示点颜色           |
| indicator-active-color | color   | #000000           | 当前选中的指示点颜色 |
| autoplay               | boolean | false             | 是否自动切换         |
| interval               | number  | 5000              | 自动切换事件间隔     |
| circular               | boolean | false             | 是否采用衔接滑动     |

##### 7. 常用的基础内容组件

1. **text**
   - 文本组件
   - 类似于 HTML 中的 span 标签，是一个行内元素
2. **rich-text**
   - 富文本组件
   - 支持把 HTML 字符串渲染为 WXML 结构

##### 8. text 组件的基本使用

通过 text 组件的 **user-select** 属性，实现长按选中文本内容的效果：

```html
<view>
  手机号支持长按选中效果：
  <text user-select>13800005006</text>
</view>
```

##### 9. rich-text 组件的基本使用

通过 rich-text 组件的 **nodes** 属性节点，**把 HTML 字符串渲染为对应的 UI 结构**：

```html
<rich-text nodes="<h1 style='color: red;'>标题</h1>"></rich-text>
```

##### 10. 其它常用组件

1. **button**
   - 按钮组件
   - 功能比 HTML 中的 button 按钮丰富
   - 通过 open-type 属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）
2. **image**
   - 图片组件
   - image 组件默认宽度约 300px、宽度约为 240px
3. **navigator**
   - 页面导航组件
   - 类似于 HTML 中的 a 链接

##### 11. button 按钮的基本使用

```html
<!-- 通过 type 指定按钮类型 -->
<button>默认按钮</button>
<button type="primary">主色调按钮</button>
<button type="warn">警告按钮</button>

<!-- 小尺寸按钮 -->
<button size="mini">默认按钮</button>
<button type="primary" size="mini">主色调按钮</button>
<button type="warn" size="mini">警告按钮</button>

<!-- plain 镂空按钮 -->
<button size="mini" plain>默认按钮</button>
<button type="primary" size="mini" plain>主色调按钮</button>
<button type="warn" size="mini" plain>警告按钮</button>
```

##### 12. image 组件的基本使用

```html
<!-- 1. 空图片 -->
<image></image>
<!-- 2. 使用 src 指向图片路径 -->
<image src="/images/1.jpg"></image>
```

```css
image {
  /* 通过边框线证明 image 有默认的宽和高 */
  border: 1px solid red;
}
```

##### 13. image 组件的 mode 属性

image 组件的 **mode** 属性用来指定图片的**裁剪**和**缩放**模式，常用的 mode 属性值如下：

| mode 值     | 说明                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| scaleToFill | （默认值）缩放模式，**不保持纵横缩放图片**，使图片的宽高完全拉伸至**填满 image 元素**                                                    |
| aspectFit   | 缩放模式，**保持纵横比缩放图片，使图片的长边能完全显示出来**。也就是说，可以完整地将图片显示出来。                                       |
| aspectFill  | 缩放模式，**保持纵横比缩放图片，只保证图片的短边能完全显示出来**。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
| widthFill   | 缩放模式，**宽度不变，高度自动变化**，保持原图宽高比不变                                                                                 |
| heightFix   | 缩放模式，**高度不变，宽度自动变化**，保持原图宽高比不变                                                                                 |

#### 5. API

##### 1. 小程序 API 概述

**小程序中的 API 是由宿主环境提供的**，通过这些丰富的小程序 API，开发者可以方便的调用微信提供的能力，例如：获取用户信息、本地存储、支付功能等。

##### 2. 小程序 API 的 3 大分类

小程序官方把 API 分为了如下 3 大类：

1. **事件监听 API**
   - 特点：以 `on` 开头，`用来监听某些事件的触发`
   - 举例：wx.`onWindowResize`(function callback) 监听窗口尺寸变化的事件
2. **同步 API**
   - 特点 1：以 `Sync` 结尾的 API 都是同步 API
   - 特点 2：同步 API 的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常
   - 举例：wx.`setStorageSync`('key', 'value') 向本地存储中写入内容
3. **异步 API**
   - 特点：类似于 jQuery 中的 `$.ajax(options)` 函数，需要通过 success、fail、complete 接收调用的结果
   - 举例：wx.`request`() 发起网络数据请求，通过 success 回调函数接收数据

### 5. 协同工作和发布

#### 1. 协同工作

##### 1. 了解**权限管理需求**

在中大型的公司里人员的分工非常仔细：同一个小程序项目，一般会有不同岗位、不同角色的员工同时参与设计与开发。

此时出于管理需要，我们**迫切需要对**不同岗位、不同角色的**员工的权限进行边界的划分**，使他们能够高效的进行协同工作。

##### 2. 了解项目成员的组织结构

项目管理者（统筹整个项目的进展和风险把控小程序对外发布的节奏）

- 产品组（提需求）
- 设计组（出设计方案）
- 开发组（代码开发）
- 测试组（项目测试）

##### 3. 小程序的开发流程

提出需求（产品组）——设计（设计组）——开发（开发组）——体验（产品组、设计组）——测试（测试组）——发布（管理者）

#### 2. 小程序成员管理

##### 1. 成员管理的两个方面

小程序成员管理体现在**管理员**对小程序**项目成员**及**体验成员**的管理：

1. **项目成员**：
   - 表示参与小程序开发、运营的成员
   - 可登录小程序管理后台
   - 管理员可以添加、删除项目成员、并设置项目成员的角色
2. **体验成员**：
   - 表示参与小程序内侧体验的成员
   - 可使用体验版小程序，但不属于项目成员
   - 管理员及项目成员均可添加、删除体验成员

##### 2. 不同项目成员对应的权限

| 权限           | 运营者 | 开发者 | 数据分析者 |
| -------------- | :----: | :----: | :--------: |
| 开发者权限     |        | **√**  |            |
| 体验者权限     |   √    | **√**  |     √      |
| 登录           |   √    | **√**  |     √      |
| 数据分析       |        |        |     √      |
| 微信支付       |   √    |        |            |
| 推广           |   √    |        |            |
| 开发管理       |   √    |        |            |
| 开发设置       |        | **√**  |            |
| 暂停服务       |   √    |        |            |
| 解除关联公众号 |   √    |        |            |
| 腾讯云管理     |        | **√**  |            |
| 小程序插件     |   √    |        |            |
| 游戏运营管理   |   √    |        |            |

##### 3. **开发者**的权限说明

1. **开发者权限**：可使用小程序开发者工具及对小程序的功能进行代码开发
2. **体验者权限**：可使用体验版小程序
3. **登录权限**：可登录小程序管理后台，无需管理员确认
4. **开发设置**：设置小程序服务器域名、消息推送及扫描普通链接二维码打开小程序
5. 腾讯云管理：云开发相关设置

##### 4. 添加**项目成员**和**体验成员**

#### 3. 小程序的版本

##### 1. 软件开发过程中的不同版本

在软件开发过程中，根据时间节点的不同，会产出不同的软件版本，例如：

1. 开发者编写代码的同时，对项目代码进行自测（**开发版本**）
2. 直到程序达到一个稳定可体验的状态时，开发者把体验版本给到产品经理和测试人员进行**体验测试**
3. 最后修复完程序的 Bug 后，**发布正式版**供外部用户使用

##### 2. 小程序的版本

| 版本阶段     | 说明                                                                                                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 开发版本     | 使用开发者工具，可将代码上传到开发版本中。开发版本只保留每个人最新的一份上传的代码。<br>点击提交审核，可将代码提交审核。开发版本可删除，不影响线上版本和审核中版本的代码。 |
| 体验版本     | 可以选择某个开发版本作为体验版，并且选取一份体验版。                                                                                                                       |
| 审核中的版本 | 只能有一份代码处于审核中。有审核结果后可以发布到线上，也可直接重新提交审核，覆盖原审核版本。                                                                               |
| 线上版本     | 线上所有用户使用的代码版本，该版本代码在新版本代码发布后被覆盖更新。                                                                                                       |

#### 4. 发布上线

##### 1. 小程序发布上线的整体步骤

一个小程序的发布上线，一般要经过**上传代码** -> **提交审核** -> **发布**这三个步骤。

##### 2. 上传代码

1. 点击开发者工具顶部工具栏中的“**上传**”按钮
2. 填写**版本号**以及**项目备注**

##### 3. 在后台查看上传之后的版本

**登录小程序管理后台** -> **管理** -> **版本管理** -> **开发版本**，即可查看刚才提交上传的版本了。

##### 4. 提交审核

- 为什么需要提交审核：为了保证小程序的质量，以及符合相关的规范，小程序的发布是需要经过腾讯官方审核的。
- 提交审核的方式：在开发版本的列表中，点击“**提交审核**”按钮之后，按照页面提示填写相关的信息，就能把小程序提交到腾讯官方进行审核。

##### 5. 发布

审核通过之后，管理员的微信中会收到小程序通过审核的通知，此时在审核版本的列表中，点击“**发布**”按钮之后，即可把“**审核通过**”的版本发布为“**线上版本**”，供所有小程序用户访问和使用。

##### 6. 基于小程序码进行推广

相对于普通二维码来说，小程序码的优势如下：

1. 在样式上更具**辨识度**和**视觉冲击力**
2. 能够更加清晰地树立小程序的**品牌形象**
3. 可以帮助开发者**更好地推广小程序**

获取小程序码的 5 个步骤：

**登录小程序管理后台** -> **设置** -> **基本信息** -> **小程序码及线下物料下载**

#### 5. 运营数据

##### 1. 查看小程序运营数据的两种方式

1. **在“小程序后台”查看**
   1. 登录小程序管理后台
   2. 点击侧边栏的“统计”
   3. 点击相应的 tab 可以看到相关的数据
2. **使用“小程序数据助手”查看**
   1. 打开微信
   2. 搜索“小程序数据助手”
   3. 查看已发布的小程序相关的数据

### 总结

1. 能够知道如何创建小程序项目
   - 微信小程序开发者工具的使用、appID 的获取
2. 能够清楚小程序项目的基本组成结构
   - app.js、app.json、app.wxss、pages 文件夹
3. 能够知道小程序页面由几部分组成
   - wxml、wxss、json、js
4. 能够知道小程序中常见的组件如何使用
   - view、text、image
5. 能够知道小程序如何进行协同开发和发布
   - 成员管理、发布小程序、查看运营数据

## 2. 模板与配置

### 目标

- 能够使用 WXML 模板语法渲染页面结构
- 能够使用 WXSS 样式美化页面结构
- 能够使用 app.json 对小程序进行全局性配置
- 能够使用 page.json 对小程序页面进行个性化配置
- 能够知道如何发起网络数据请求

### 1. WXML 模板语法

#### 1. 数据绑定

##### 1. 数据绑定的基本原则

1. 在 data 中定义数据
2. 在 WXML 中使用数据

##### 2. 在 data 中定义页面的数据

在页面对应的 .js 文件中，把数据定义到 data 对象中即可：

```javascript
data: {
  // 字符串类型的数据
  info: 'init data',
  // 数组类型的数据
  msgList: [{ msg: 'hello' }, { msg: 'world' }]
},
```

##### 3. Mustache 语法的格式

把 data 中的数据绑定到页面中渲染，使用 **Mustache 语法**（双大括号）将变量包起来即可。语法格式为：

```html
<view>{{ 要绑定的数据名称 }}</view>
```

##### 4. Mustache 语法的应用场景

Mustache 语法的主要应用场景如下：

- 绑定内容
- 绑定属性
- 运行（三元运算、算术运算等）

##### 5. 动态绑定内容

页面的数据如下：

```javascript
Page({
  data: {
    info: 'init data'
  }
})
```

页面的结构如下：

```html
<view> {{ info }} </view>
```

##### 6. 动态绑定属性

页面的数据如下：

```javascript
Page({
  data: {
    imgSrc: 'http://www.itheima.com/images/logo.png'
  }
})
```

页面的结构如下：

```html
<image src="{{imgSrc}}"></image>
```

##### 7. 三元运算

页面的数据如下：

```javascript
Page({
  data: {
    randomNum: Math.random() * 10 // 生成 10 以内的随机数
  }
})
```

页面的结构如下：

```html
<view>{{ randomNum >= 5 ? '随机数大于或等于5' : '随机数字小于5' }}</view>
```

##### 8. 算数运算

页面的数据如下：

```javascript
Page({
  data: {
    randomNum: Math.random().toFixed(2) // 生成一个带两位小数的随机数，例如 0.34
  }
})
```

页面的结构如下：

```html
<view>生成100以内的随机数：{{randomNum * 100}}</view>
```

#### 2. 事件绑定

##### 1. 什么是事件

事件是**渲染层到逻辑层的通讯方式**。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层进行业务的处理。

##### 2. 小程序中常用的事件

| 类型   | 绑定方式                  | 事件描述                                        |
| ------ | ------------------------- | ----------------------------------------------- |
| tap    | bindtap 或 bind:tap       | 手指触摸后马上离开，类似于 HTML 中的 click 事件 |
| input  | bindinput 或 bind:input   | 文本框的输入事件                                |
| change | bindchange 或 bind:change | 状态改变时触发                                  |

##### 3. 事件对象的属性列表

当事件回调触发的时候，会收到一个事件对象 event，它的详细属性如下表所示：

| 属性           | 类型       | 说明                                         |
| -------------- | ---------- | -------------------------------------------- |
| type           | String     | 事件类型                                     |
| timeStamp      | Integer    | 页面打开到触发事件所经过的毫秒数             |
| **target**     | **Object** | **触发事件的组件的一些属性值集合**           |
| currentTarget  | Object     | 当前组件的一些属性值集合                     |
| **detail**     | **Object** | **额外的信息**                               |
| touches        | Array      | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | Array      | 触摸事件，当前变化的触摸点信息的数组         |

##### 4. target 和 currentTarget 的区别

**target** 是**触发该事件的源头组件**，而 **currentTarget** 则是**当前事件所绑定的组件**。举例如下：

```html
<view class="outer-view" bindtap="outerHandler">
  <view type="primary">按钮</view>
</view>
```

点击内部的按钮时，点击事件以**冒泡**的方式向外扩散，也会触发外层 view 的 tap 事件处理函数。

此时，对于外层的 view 来说：

- e.target 指向的是触发事件的源头组件，因此，**e.target 是内部的按钮组件**
- e.currentTarget 指向的是当前正在触发事件的那个组件，因此，**e.currentTarget 是当前的 view 组件**

##### 5. **bindtap 的语法格式**

在小程序中，不存在 HTML 中的 onclick 鼠标点击事件，而是通过 **tap 事件**来响应用户的触摸行为。

1. 通过 **bindtap**，可以为组件绑定 tap 触摸事件，语法如下：

```html
<button type="primary" bindtap="btnTapHandler">按钮</button>
```

2. 在页面的 .js 文件中定义对应的事件处理函数，事件参数通过形参 **event**（一般**简写成 e**）来接收：

```javascript
Page({
  btnTapHandler(e) {
    // 按钮的 tap 事件处理函数
    console.log(e) // 事件参数对象 e
  }
})
```

##### 6. 在事件处理函数中为 data 中的数据赋值

通过调用 **this.setData(dataObject)** 方法，可以给页面 data 中的数据重新赋值，示例如下：

```javascript
// 页面的 .js 文件
Page({
  data: {
    count: 0
  },
  // 修改 count 的值
  changeCount() {
    this.setData({
      count: this.data.count + 1
    })
  }
})
```

##### 7. 事件传参

小程序中的事件传参比较特殊，**不能在绑定事件的同时为时间处理函数传递参数**。例如：下面的代码将不能正常工作：

```html
<button type="primary" bindtap="btnHandler(123)">事件传参</button>
```

因为小程序会把 bindtap 的属性值，统一当作事件名称来处理，相当于要调用一个名称为 **btnHandler(123)** 的事件函数。

可以为组件提供 **data-\*** 自定义属性传参，其中 **\* 代表的是参数的名字**，示例代码如下：

```html
<button type="primary" bindtap="btnHandler" data-info="{{2}}">事件传参</button>
```

最终：

- **info** 会被解析为**参数的名字**
- 数值 **2** 会被解析为**参数的值**

在事件处理函数中，通过 **event.target.dataset.参数名**即可获取到**具体参数的值**，示例代码如下：

```javascript
btnHandler(event) {
  // dataset 是一个对象，包含了所有通过 data-* 传递过来的参数项
  console.log(event.target.dataset)
  // 通过 dataset 可以访问到具体参数的值
  console.log(event.target.dataset.info)
}
```

##### 8. **bindinput 的语法格式**

在小程序中，通过 **input 事件**来响应文本框的输入事件，语法格式如下：

1. 通过 bindinput，可以为文本框绑定输入事件：

```html
<input bindinput="inputHandler"></input>
```

2. 在页面的 .js 文件中定义事件处理函数：

```javascript
inputHandler(e) {
  // e.detail.value 是变化过后，文本框最新的值
  console.log(e.detail.value)
}
```

##### 9. 实现文本框和 data 之间的数据同步

实现步骤：

1. 定义数据
2. 渲染结构
3. 美化结构
4. 绑定 input 事件处理函数

定义数据：

```javascript
Page({
  data: {
    msg: '你好，'
  }
})
```

渲染结构：

```html
<input value="{{msg}}" bindinput="iptHandler"></input>
```

美化样式：

```css
input {
  border: 1px solid #eee;
  padding: 5px;
  margin: 5px;
  border-radius: 3px;
}
```

绑定 input 事件处理函数：

```javascript
// 文本框内容改变的事件
iptHandler(e) {
  this.setData({
    // 通过 e.detail.value 获取到文本框最新的值
    msg: e.detail.value
  })
}
```

#### 3. 条件渲染

##### 1. wx:if

在小程序中，使用 **wx:if="<span v-pre>{{</span>** condition **<span v-pre>}}</span>"** 来判断是否需要渲染该代码块：

```html
<view wx:if="{{condition}}"> True </view>
```

也可以使用 **wx:elif** 和 **wx:else** 来添加 else 判断：

```html
<view wx:if="{{type === 1}}"> 男 </view>
<view wx:elif="{{type === 2}}"> 女 </view>
<view wx:else> 保密 </view>
```

##### 2. 结合 \<block\> 使用 wx:if

如果要**一次性控制多个组件的展示与隐藏**，可以使用一个 \<block\>\</block\> 标签将多个组件包装起来，并在 \<block\> 标签上使用 wx:if 控制属性，实例如下：

```html
<block wx:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

> **注意：**\<block\> **并不是一个组件**，它只是一个包裹性质的容器，**不会在页面中做任何渲染**。

##### 3. hidden

在小程序中，直接使用 **hidden="<span v-pre>{{</span>** condition **<span v-pre>}}</span>"** 也能控制元素的显示与隐藏：

```html
<view hidden="{{ condition }}"> 条件为 true 隐藏，条件为 false 显示</view>
```

##### 4. wx:if 与 hidden 的对比

1. 运行方式不同
   - wx:if 以 动态创建和移除元素的方式，控制元素的展示与隐藏
   - hidden 以**切换样式**的方式（display: none/block;），控制元素的显示与隐藏
2. 使用建议
   - **频繁切换**时，建议使用 **hidden**
   - **控制条件复杂**时，建议使用 **wx:if** 搭配 wx:elif、wx:else 进行展示与隐藏的切换

#### 4. 列表渲染

##### 1. wx:for

通过 wx:for 可以根据指定的数组，循环渲染重复的组件结构，语法示例如下：

```html
<view wx:for="{{array}}"> 索引是：{{index}} 当前项是：{{item}} </view>
```

默认情况下，当前循环项的**索引**用 **index** 表示；**当前循环项**用 **item** 表示。

##### 2. 手动指定索引和当前项的变量名\*

- 使用 **wx:for-index** 可以指定**当前循环项的索引**的变量名
- 使用 **wx:for-item** 可以指定**当前项**的变量名

示例代码如下：

```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  索引是：{{idx}} 当前项是：{{itemName}}
</view>
```

##### 3. wx:key 的使用

类似于 Vue 列表渲染中的 **:key**，小程序在实例列表渲染时，也建议为渲染出来的列表项指定唯一的 key 值，从而**提高渲染的效率**，示例代码如下：

```javascript
// data 数据
data: {
  userList: [
    { id: 1, name: '小红' },
    { id: 1, name: '小黄' },
    { id: 1, name: '小白' }
  ]
}
```

```html
<!-- wxml 结构 -->
<view wx:for="{{userList}}" wx:key="id">{{item.name}}</view>
```

### 2. WXSS 模板样式

#### 1. 什么是 wxss

WXSS(WeiXin Style Sheets) 是一套**样式语言**，用于美化 WXML 的组件样式，类似于网页开发中的 CSS。

#### 2. WXSS 和 CSS 的关系

WXSS 具有 CSS 大部分特性，同时，WXSS 还对 CSS 进行了扩充以及修改，以适应微信小程序的开发。

与 CSS 相比，WXSS 扩展的特性有：

- **rpx** 尺寸单位
- **@import** 样式导入

#### 3. rpx

##### 1. 什么是 rpx 尺寸单位

rpx（responsive pixel）是微信小程序独有的，用来**解决屏幕适配的尺寸单位**。

##### 2. rpx 的实现原理

rpx 的实现原理非常简单：鉴于不同设备屏幕的大小不同，为了实现屏幕的自动适配，rpx 把所有设备的屏幕，在宽度上**等分为 750 份**（即：**当前屏幕的总宽度为 750rpx**）。

- 在**较小**的设备上，**1rpx 所代表的宽度较小**
- 在**较大**的设备上，**1rpx 所代表的宽度较大**

小程序在不同设备上运行的时候，会自动把 rpx 的样式单位换算成对应的像素单位来渲染，从而实现屏幕适配。

##### 3. rpx 与 px 之间的单位换算\*

在 iPhone6 上，屏幕宽度为 **375px**，共有 **750 个物理像素**，等分为 **750rpx**。则：

**750rpx = 375px = 750 物理像素**

**1rpx = 0.5px = 1 物理像素**

| 设备         | rpx 换算 px（屏幕宽度/750） | px 换算 rpx（750/屏幕宽度） |
| ------------ | --------------------------- | --------------------------- |
| iPhone5      | **1rpx** = **0.42px**       | 1px = 2.34rpx               |
| iPhone6      | **1rpx** = **0.5px**        | **1px = 2rpx**              |
| iPhone6 plus | **1rpx** = **0.552px**      | 1px = 1.81rpx               |

官方建议：开发小程序时，设计师可以用 **iPhone6** 作为**视觉搞的标准**。

开发举例：在 iPhone6 上如果要绘制**宽 100px**，**高 20px** 的盒子，换算成 rpx 单位，宽高分别为 **200rpx** 和 **40rpx**。

#### 4. 样式导入

##### 1. 什么是样式导入

使用 WXSS 提供的 **@import** 语法，可以导入外联的样式表。

##### 2. @import 的语法格式

**@import** 后跟需要导入的外联样式表的**相对路径**，用 **;** 表示语句结束。示例如下：

```css
/* common.wxss */
.small-p {
  padding: 5px;
}
```

```css
/* app.wxss */
@import 'common.wxss';
.middle-p {
  padding: 15px;
}
```

#### 5. 全局样式和局部样式

##### 1. 全局样式

定义在 **app.wxss** 中的样式为**全局样式**，作用于每一个页面。

##### 2. 局部样式

在**页面的 .wxss** 文件中定义的样式为**局部样式**，只作用于当前页面。

> 注意：
>
> 1. 当前局部样式和全局样式冲突时，根据**就近原则**，局部样式会**覆盖**全局样式
> 2. 当局部样式的**权重大于或等于**全局样式的权重时，才会覆盖全局的样式

### 3. 全局配置

#### 1. 全局配置文件及常用的配置项

小程序根目录下的 **app.json** 文件是小程序的**全局配置文件**。常用的配置项如下：

1. pages
   - 记录当前小程序所有页面的存放路径
2. **window**
   - 全局设置小程序窗口的外观
3. **tabBar**
   - 设置小程序底部的 tabBar 效果
4. style
   - 是否启用新版的组件样式

#### 2. window

##### 1. 小程序窗口的组成部分

- navigationBar 导航栏区域
- background 背景区域 默认不可见，下拉才显示
- 页面的主体区域 用来显示 WXML 中的布局

##### 2. 了解 window 节点常用的配置项

| 属性名                       | 类型     | 默认值  | 说明                                             |
| ---------------------------- | -------- | ------- | ------------------------------------------------ |
| navigationBarTitleText       | String   | 字符串  | 导航栏标签文字内容                               |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 #000000                       |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜色，仅支持 **black** / **white**     |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                     |
| backgroundTextStyle          | String   | dark    | 下拉 loading 的样式，仅支持 **dark** / **light** |
| enablePullDownRefresh        | Boolean  | false   | 是否全局开启下拉刷新                             |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为 px  |

##### 3. 设置导航栏的**标题**

设置步骤：**app.json** -> **window** -> **navigationBarTitleText**

##### 4. 设置导航栏的**背景色**

设置步骤：**app.json** -> **window** -> **navigationBarBackgroundColor**

##### 5. 设置导航栏的**标题颜色**

设置步骤：**app.json** -> **window** -> **navigationBarTextStyle**

> 注意：navigationBarTextStyle 的可选值只有 **black** 和 **white**

##### 6. 全局开启**下拉刷新**功能

概念：**下拉刷新**是移动端的专有名词，指的是通过手指在屏幕上的下拉滑动操作，从而**重新加载页面数据**的行为。

设置步骤：**app.json** -> **window** -> **enablePullDownRefresh** 的值设置为 **true**

> 注意：在 app.json 中启用下拉刷新功能，会作用于每个小程序页面！

##### 7. 设置下拉刷新时**窗口的背景色**

当全局开启下拉刷新功能之后，默认的窗口背景为白色。如果自定义下拉刷新窗口背景色，设置步骤为：**app.json** -> **window** -> **backgroundColor**。

##### 8. 设置下拉刷新时 **loading 的样式**

当全局开启下拉刷新功能之后，默认窗口的 loading 样式为白色，如果要更改 loading 样式的效果，设置步骤为 **app.json** -> **window** -> **backgroundTextStyle** 指定 **dark** 值。

> 注意：backgroundTextStyle 的可选值只有 **light** 和 **dark**

##### 9. 设置上拉触底的距离

概念：**上拉触底**是移动端的专用名词，通过手指在屏幕上的上拉滑动操作，从而**加载更多数据**的行为。

设置步骤：**app.json** -> **window** -> 为 **onReachBottomDistance** 设置新的值。

> 注意：**默认距离为 50px**，如果没有特殊需求，建议使用默认值即可。

#### 3. tabBar

##### 1. 什么是 tabBar

**tabBar** 是移动端应用常见的页面效果，**用于实现多页面的快速切换**。小程序中通常将其分为：

- 底部 tabBar
- 顶部 tabBar

> 注意：
>
> - tabBar 中只能配置**最少 2 个**、**最多 5 个** tab 页签
> - 当渲染**顶部 tabBar**时，**不显示 icon**，只显示文本

##### 2. tabBar 的 6 个组成部分

1. **backgroundColor**：tabBar 的背景色
2. **selectIconPath**：选中时的图片路径
3. **borderStyle**：tabBar 上边框的颜色
4. **iconPath**：未选中时的图片路径
5. **selectedColor**：tab 上的文字选中时的颜色
6. **color**：tab 上文字的默认（未选中）颜色

##### 3. tabBar 节点的配置项

| 属性            | 类型      | 必填 | 默认值 | 描述                                             |
| --------------- | --------- | ---- | ------ | ------------------------------------------------ |
| position        | String    | 否   | bottom | tabBar 的位置，仅支持 **bottom**/**top**         |
| borderStyle     | String    | 否   | black  | tabBar 上边框的颜色，仅支持 **black**/**white**  |
| color           | HexColor  | 否   |        | tab 上文字的默认（未选中）颜色                   |
| selectedColor   | HexColor  | 否   |        | tab 上的文字选中时的颜色                         |
| backgroundColor | HexColor  | 否   |        | tabBar 的背景色                                  |
| **list**        | **Array** | 是   |        | tab 页签的列表，**最少 2 个**、**最多 5 个 tab** |

##### 4. 每个 tab 项的配置选项

| 属性             | 类型   | 必填   | 描述                                                      |
| ---------------- | ------ | ------ | --------------------------------------------------------- |
| **pagePath**     | String | **是** | **页面路径，页面必须在 pages 中预先定义**                 |
| **text**         | String | **是** | **tab 上显示的文字**                                      |
| iconPath         | String | 否     | **未选中时**的图标路径；当 postion 为 top 时，不显示 icon |
| selectedIconPath | String | 否     | **选中时**的图标路径；当 postion 为 top 时，不显示 icon   |

#### 4. 案例：配置 tabBar

##### 1. 需求描述

根据资料中提供的小图标、在小程序中提供的小图标、在小程序中配置如图所示的 tabBar 效果：

##### 2. 实现步骤

1. 拷贝图标资源
2. 新建 3 个对应的 tab 页面

##### 3. 步骤 1 - 拷贝图标资源

1. 把资料目录中的 **images** 文件夹，**拷贝到小程序项目根目录中**
2. 将需要用到的小图标分为 3 组，每组两个，其中：
   - 图片名称中**包含 - active** 的是选中之后的**图标**
   - 图片名称中**不包含 - active** 的是**默认图标**

##### 3. 步骤 2 - 新建 3 个对应的 tab 页面

通过 app.json 的 pages 节点，快速新建 3 个对应的 tab 页面，示例代码如下：

```json
{
  "pages": ["pages/home/home", "pages/message/message", "pages/contact/contact"]
}
```

其中，**home** 是首页，**message** 是消息页面，**contact** 是联系我们页面。

##### 步骤 3 - 配置 tabBar 选项

1. 打开 **app.json** 配置文件，和 pages、window 平级，新增 **tabBar** 节点
2. tabBar 节点中，新增 **list 数组**，这个数组中存放的，是每个 tab 项的配置对象
3. 在 list 数组中，**新增每一个 tab 项的配置对象**。对象中包含的属性如下：

- **pagePath** 指定当前 tab 对应的页面路径【**必填**】
- **text** 指定当前 tab 上按钮的文字【必填】
- **iconPath** 指定当前 tab 未选中的时候的图片路径【可选】
- **selectedIconPath** 指定当前 tab 被选中后高亮的图片路径【可选】

### 4. 页面配置

#### 1. 页面配置文件的作用

小程序中，每个页面都有自己的 .json 配置文件，用来对**当前页面**的窗口外观、页面效果等进行配置。

#### 2. **页面配置**和**全局配置**的关系

小程序中，app.json 中的 window 节点，可以**全局配置**小程序中**每个页面的窗口表现**。

如果某些小程序页面**想要拥有特殊的窗口表现**，此时，“**页面级别的 .json 配置文件**”就可以实现这种需求。

> 注意：当页面配置与全局配置**冲突**时，根据**就近原则**，最终的效果**以页面配置为准**。

#### 3. 页面配置中常用的配置项

| 属性                         | 类型     | 默认值  | 描述                                                     |
| ---------------------------- | -------- | ------- | -------------------------------------------------------- |
| navigationBarBackgroundColor | HexColor | #000000 | 当前页面导航栏背景颜色，如 #000000                       |
| navigationBarTextStyle       | String   | white   | 当前页面导航栏标题颜色，仅支持 **black** / **white**     |
| navigationBarTitleText       | String   |         | 当前页面导航栏标题文字内容                               |
| backgroundColor              | HexColor | #ffffff | 当前页面窗口的背景色                                     |
| backgroundTextStyle          | String   | dark    | 当前页面下拉 loading 的样式，仅支持 **dark** / **light** |
| **enablePullDownRefresh**    | Boolean  | false   | 是否为当前页面开启下拉刷新的效果                         |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为 px          |

### 5. 网络数据请求

#### 1. 小程序中网络数据请求的限制

处于**安全性**方面的考虑，小程序官方对**数据接口的请求**做出了如下两个限制：

1. 只能请求 **HTTPS** 类型的接口
2. 必须将**接口的域名**添加到**信任列表**中

#### 2. 配置 request 合法域名

需求描述：假设在自己的微信小程序中，希望请求 [https://www.escook.cn/](https://www.escook.cn/) 域名下的接口

配置步骤：**登录微信小程序管理后台** -> **开发** -> **开发设置** -> **服务器域名** -> **修改 request 合法域名**

> 注意事项：
>
> 1. 域名只支持 https 协议
> 2. 域名不能使用 IP 地址 或 localhost
> 3. 域名必须经过 ICP 备案
> 4. 服务器域名一个月内最多可申请 5 次修改

#### 3. 发起 GET 请求

调用微信小程序提供的 wx.**request**() 方法，可以发起 GET 数据请求，示例代码如下：

```javascript
wx.request({
  url: 'https://www.escook.cn/api/get', // 请求的接口地址，必须基于 https 协议
  method: 'GET', // 请求的方式
  data: {
    // 发送到服务器的数据
    name: 'zs',
    age: 22
  },
  success: res => {
    // 请求成功之后的回调函数
    console.log(res)
  }
})
```

#### 4. 发起 POST 请求

调用微信小程序提供的 wx.**request**() 方法，可以发起 POST 数据请求，示例代码如下：

```javascript
wx.request({
  url: 'https://www.escook.cn/api/post', // 请求的接口地址，必须基于 https 协议
  method: 'POST', // 请求的方式
  data: {
    // 发送到服务器的数据
    name: 'ls',
    gender: '男'
  },
  success: res => {
    // 请求成功之后的回调函数
    console.log(res)
  }
})
```

#### 5. 在页面刚加载时请求数据

在很多情况下，我们需要**在页面刚加载的时候**，**自动请求一些初始化的数据**。此时需要在页面的 **onload** 事件中调用获取数据的函数。

#### 6. 跳过 request 合法域名校验

如果后端程序员**仅仅提供了 http 协议的接口**、**暂时没有提供 https 协议的接口**。

此时为了不耽误开发的进度，我们可以在微信开发者工具中，临时开启【**开发环境不校验请求域名**、**TLS 版本及 HTTPS 证书**】选项，跳过 request 合法域名的校验。

> 注意：
>
> 跳过 request 合法域名校验的选项，**仅限**在**开发与调试阶段**使用！

#### 7. 关于**跨域**和 **Ajax** 的说明

跨域问题**只存在于**基于浏览器的 Web 开发中。由于**小程序的宿主环境**不是浏览器，而是**微信客户端**，所以**小程序中不存在跨域的问题**。

Ajax 技术的核心是依赖于浏览器中的 XMLHttpRequest 这个对象，由于**小程序的宿主环境是微信客户端**，所以小程序中**不能叫做**“发起 Ajax 请求”，而是叫做“**发起网络数据请求**”。

### 案例 - 本地生活

#### 1. 实现步骤

1. 新建项目并梳理项目结构
2. 配置**导航栏**效果
3. 配置 **tabBar** 效果
4. 实现**轮播图**效果
5. 实现**九宫格**效果
6. 实现**图片布局**

#### 2. 接口地址

1. 获取**轮播图**数据列表的接口
   - 【GET】[https://www.escook.cn/slides](https://www.escook.cn/slides)
2. 获取**九宫格**数据列表的接口
   - 【GET】[https://www.escook.cn/categories](https://www.escook.cn/categories)

### 总结

1. 能够使用 WXML 模板语法渲染页面结构
   - **wx:if**、wx:elif、wx:else、hidden、**wx:for**、**wx:key**
2. 能够使用 WXSS 样式美化页面结构
   - **rpx 尺寸单位**、@import 样式导入、全局样式和局部样式
3. 能够使用 app.json 对小程序进行全局性配置
   - pages、**window**、**tabBar**、style
4. 能够使用 page.json 对小程序页面进行个性化配置
   - 对单个页面进行个性化配置、**就近原则**
5. 能够知道如何发起网络数据请求
   - **wx.request()** 方法、**onLoad()** 事件

## 3. 视图与逻辑

### 目标

- 能够知道如何实现页面之间的导航跳转
- 能够知道如何实现下拉刷新效果
- 能够知道如何实现上拉加载更多效果
- 能够知道小程序中常用的声明周期函数

### 1. 页面导航

#### 1. 什么是页面导航

页面导航指的是**页面之间的相互跳转**。例如，浏览器中实现页面导航的方式有如下两种：

1. \<a\> 链接
2. location.href

#### 2. 小程序中实现页面导航的两种方式

1. **声明式导航**
   1. 在页面上声明一个 \<navigator\> 导航组件
   2. 通过点击 \<navigator\> 组件实现页面跳转
2. **编程式导航**
   1. 调用小程序的导航 API，实现页面的跳转

#### 3. 声明式导航

##### 1. 导航到 tabBar 页面

**tabBar 页面**指的是被配置为 tabBar 的页面。

在使用 \<navigator\> 组件跳转到指定的 tarBar 页面时，需要指定 **url** 属性和 **open-type** 属性，其中：

- url 表示要跳转的**页面的地址**，必须以 **/** 开头
- open-type 表示**跳转的方式**，必须为 **switchTab**

示例代码如下：

```html
<navigator url="/pages/message/message" open-type="switchTab"
  >导航到消息页面</navigator
>
```

##### 2. 导航到非 tabBar 页面

**非 tabBar 页面**指的是没有被配置为 tabBar 的页面。

在使用 \<navigator\> 组件跳转到普通的非 tarBar 页面时，则需要指定 **url** 属性和 **open-type** 属性，其中：

- url 表示要跳转的**页面的地址**，必须以 **/** 开头
- open-type 表示**跳转的方式**，必须为 **navigate**

示例代码如下：

```html
xxxxxxxxxx <navigator url="/pages/info/info" open-type="navigate"
  >导航到info页面</navigator
>
```

> 注意：为了简便，在导航到非 tabBar 页面时，**open-type="navigate"** 属性**可以省略**。

##### 3. 后退导航

如果要后退到上一页或多级页面，则需要指定 open-type 属性和 delta 属性，其中：

- **open-type** 的值必须是 **navigateBack**，表示要进行后退导航
- **delta** 的值必须是**数字**，表示要后退的层级

示例代码如下：

```html
<navigator open-type="navigateBack" delta="1">返回上一页</navigator>
```

> 注意：为了简便，如果只是后退到上一页面，则**可以省略 delta 属性**，因为其**默认值就是 1**。

#### 4. 编程式导航

##### 1. 导航到 tabBar 页面

调用 **wx.switchTab(**Object object**)** 方法，可以跳转到 tabBar 页面。其中 Object **参数对象**的属性列表如下：

| 属性     | 类型       | 是否必选 | 说明                                             |
| -------- | ---------- | -------- | ------------------------------------------------ |
| **url**  | **string** | **是**   | 需要跳转的 tabBar 页面的路径，路径后不能带参数   |
| success  | function   | 否       | 接口调用成功的回调函数                           |
| fail     | function   | 否       | 接口调用失败的回调函数                           |
| complete | function   | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

示例代码如下：

```html
<!-- 页面结构 -->
<button bindtap="gotoMessage">跳转到消息页面</button>
```

```javascript
// 通过编程式导航，跳转到 message 页面
gotoMessage() {
  wx.switchTab({
    url: '/pages/message/message'
  })
}
```

##### 2. 导航到非 tabBar 页面

示例代码如下：

```html
<!-- 页面结构 -->
<button bindtap="gotoInfo">跳转到info页面</button>
```

```javascript
// 通过编程式导航，跳转到 info 页面
gotoMessage() {
  wx.navigateTo({
    url: '/pages/info/info'
  })
}
```

##### 3. 后退导航

调用 **wx.navigateBack(**Object object**)** 方法，可以返回上一页面或多级页面。其中 Object **参数对象**可选的属性列表如下：

| 属性      | 类型       | 默认值 | 是否必选 | 说明                                                  |
| --------- | ---------- | ------ | -------- | ----------------------------------------------------- |
| **delta** | **number** | **1**  | **否**   | 返回的页面数，如果 delta 大于现有页面数，则返回到首页 |
| success   | function   |        | 否       | 接口调用成功的回调函数                                |
| fail      | function   |        | 否       | 接口调用失败的回调函数                                |
| complete  | function   |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）      |

示例代码如下：

```html
<!-- 页面结构 -->
<button bindtap="gotoBack">后退</button>
```

```javascript
// 编程式导航，后退到上一页面
gotoBack() {
  wx.navigateBack()
}
```

#### 5. 导航传参

##### 1. 声明式导航传参

navigator 组件的 url 属性用来指定将要跳转到的页面的路径，**路径的后面还可以携带参数**：

- **参数**与**路径**之间使用 **?** 分隔
- **参数键**与**参数值**用 **=** 相连
- **不同参数**用 **&** 分隔

代码示例如下：

```html
<navigator url="/pages/info/info?name=zs&age=20">跳转到info页面</navigator>
```

##### 2. 编程式导航传参

调用 **wx.navigatorTo(**Object object**)** 方法跳转页面时，也可以携带参数，代码示例如下：

```html
<!-- 页面结构 -->
```

```javascript
// 通过编程式导航，跳转到 info 页面，并携带参数
gotoInfo2() {
  wx.navigatorTo({
    url: '/pages/info/info?name=ls&gender=男'
  })
}
```

##### 3. 在 onLoad 中接收导航参数

通过**声明式导航传参**或**编程式导航传参**所携带的参数，可以直接在 **onLoad 事件**中直接获取到，示例代码如下：

```javascript
/**
* 生命周期函数--监听页面加载
*/
onLoad:function(options) {
  // options 就是导航传递过来的参数对象
  console.log(options)
}
```

### 2. 页面事件

#### 1. 下拉刷新事件

##### 1. 什么是下拉刷新

**下拉刷新**是移动端的专有名词，指的是通过手指在屏幕上的下拉滑动操作，从而**重新加载也数据**的行为。

##### 2. 启用下拉刷新

启用下拉刷新有两种方式：

1. **全局开启下拉刷新**
   - 在 app.json 的 window 节点中，将 enablePullDownRefresh 设置为 true
2. **局部开启下拉刷新**
   - 在页面的 .json 配置文件中，将 enablePullDownRefresh 设置为 true

在实际开发中，推荐使用第 2 种方式，**为需要的页面单独开启下拉刷新的效果**。

##### 3. 配置下拉刷新窗口的样式

在全局或页面的 .json 配置文件中，通过 **backgroundColor** 和 **backgroundTextStyle** 来配置下拉刷新窗口的样式，其中：

- **backgroundColor** 用来配置下拉刷新**窗口的背景颜色**，仅支持 16 进制的颜色值
- **backgroundTextStyle** 用来配置下拉刷新 **loading 的样式**，仅支持 dark 和 light

##### 4. 监听页面的下拉刷新事件

在页面的 .js 文件中，通过 **onPullDownRefresh()** 函数即可监听当前页面下拉刷新事件。

例如，在页面的 wxml 中有如下的 UI 结构，点击按钮可以让 count 值自增 + 1：

```html
<!-- 页面结构 -->
<view>Count值为：{{count}}</view>
<button bindtap="countAdd">+1</button>
```

```javascript
// +1 按钮的点击事件处理函数
countAdd() {
  this.setData({
    count: this.data.count + 1
  })
}
```

在触发页面的下拉刷新事件的时候，如果要把 count 的值重置为 0，示例代码如下：

```javascript
/**
* 页面相关事件处理函数--监听用户下拉动作
*/
onPullDownRefresh: function() {
  this.setData({
    count: 0
  })
}
```

##### 5. 停止下拉刷新的效果

当处理完下拉刷新后，下拉刷新的 loading 效果会一直显示，**不会主动消失**，所以需要手动隐藏下拉刷新的 loading 效果。此时，调用 **wx.stopPullDownRefresh()** 可以停止当前页面的下拉刷新。示例代码如下：

```javascript
/**
* 页面相关事件处理函数--监听用户下拉动作
*/
onPullDownRefresh: function() {
  this.setData({
    count: 0
  })
  // 当数据重置成功之后，调用此函数，关闭下拉刷新的效果
  wx.stopPullDownRefresh()
}
```

#### 2. 上拉触底事件

##### 1. 什么是上拉触底

**上拉触底**是移动端的专有名词，通过手指在屏幕上的上拉滑动操作，从而**加载更多数据**的行为。

##### 2. 监听页面的上拉触底事件

在页面的 .js 文件中，通过 **onReachBottom()** 函数即可监听当前页面的上拉触底事件。示例代码如下：

```javascript
/**
* 页面上拉触底事件的处理函数
*/
onReachBottom: function() {
  console.log('触发了上拉触底的事件')
}
```

##### 3. 配置上拉触底距离

上拉触底距离指的是**触发上拉触底事件时，滚动条距离页面底部的距离**。

可以在全局或页面的 .json 配置文件中，通过 **onReachBottomDistance** 属性来配置上拉触底的距离。

小程序默认的触底距离是 50px，在实际开发中，可以根据自己的需求修改这个默认值。

#### 3. 上拉触底案例

##### 1. 案例实现步骤

1. 定义获取随机颜色的方法
2. 在页面加载时获取初始数据
3. 渲染 UI 结构并美化页面效果
4. **在上拉触底时调用获取随机颜色的方法**
5. **添加 loading 提示效果**
6. **对上拉触底进行节流处理**

##### 2. 步骤 1 - 定义获取随机颜色的方法

```javascript
data: {
  colorList: [] // 随机颜色的列表
},

getColors() {
  // 获取随机颜色的方法
  wx.request({
    // 发起请求，获取随机颜色值的数组
    url: 'https://www/escook.cn/api/color',
    method: 'GET',
    success: ({ data: res }) => {
      this.setData({
        colorList: [...this.data.colorList, ...res.data]
      })
    }
  })
}
```

##### 2. 步骤 2 - 在页面加载时获取初始数据

```javascript
/**
 * 生命周期函数--监听页面加载
 */
onLoad: function(options) {
  this.getColors()
}
```

##### 2. 步骤 3 - 渲染 UI 结构并美化页面效果

```html
<!-- wxml 的结构 -->
<view
  wx:for="{{colorList}}"
  wx:key="index"
  class="num-item"
  style="background-color:rgba({{item}});"
  >{{item}}</view
>
```

```css
/* wxss 样式 */
.num-item {
  border: 1rpx solid #efefef;
  border-radius: 8rpx;
  line-height: 200rpx;
  margin: 15rpx;
  text-align: center;
  text-shadow: 0rpx 0rpx 5rpx #fff;
  box-shadow: 1rpx 1rpx 6rpx #aaa;
}
```

##### 2. 步骤 4 - 上拉触底时获取随机颜色

```javascript
/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function () {
  // 调用获取随机颜色的方法
  this.getColors()
},
```

##### 2. 步骤 5 - 添加 loading 提示效果

```javascript
getColors() {
  wx.showLoading({ title: '数据加载中...' }) // 1. 展示 loading 效果

  // 发起请求，获取随机颜色值的数组
  wx.request({
    // 省略其它代码...
    complete: () => {
      wx.hideLoading() // 2. 隐藏 loading 效果
    }
  })
},
```

##### 2. 步骤 6 - 对上拉触底进行节流处理

1. **在 data 中定义 isloading 节流阀**
   - false 表示当前没有进行任何数据请求
   - true 表示当前正在进行数据请求
2. **在 getColors() 方法中修改 isloading 节流阀的值**
   - 在刚调用 getColors 时将节流阀设置 true
   - 在网络请求的 complete 回调函数中，将节流阀重置为 false
3. **在 onReachBottom 中判断节流阀的值，从而对数据请求进行节流控制**
   - 如果节流阀的值为 true，则阻止当前请求
   - 如果节流阀的值为 false，则发起数据请求

#### 扩展

##### 自定义编译模式

### 3. 生命周期

#### 1. 什么是生命周期

**生命周期**（Life Cycle）是指一个对象从**创建** -> **运行** -> **销毁**的整个阶段，**强调的是一个时间段**。例如：

- 张三**出生**，表示这个人**生命周期的开始**
- 张三**离世**，表示这个人**生命周期的结束**
- 中间张三的一生，就是张三的生命周期

<br>

我们可以把每个小程序运行的过程，也概括为生命周期：

- 小程序的**启动**，表示**生命周期的开始**
- 小程序的**关闭**，表示**生命周期的结束**
- 中间小程序运行的过程，就是小程序的生命周期

#### 2. 生命周期的分类

在小程序中，生命周期分为两类，分别是：

1. **应用生命周期**
   - 特指小程序从启动 -> 运行 -> 销毁的过程
2. **页面生命周期**
   - 特指小程序中，每个页面的加载 -> 渲染

<br>

其中，页面的生命周期**范围较小**，**应用程序**的生命周期**范围较大**。

小程序启动 ——> 页面 A 的生命周期 ——> 页面 B 的生命周期 ——> 页面 C 的生命周期 ——> etc... ——> 小程序结束

#### 3. 什么是生命周期函数

**生命周期函数**：是小程序框架提供的**内置函数**，会伴随着生命周期，**自动按次序执行**。

<br>

**生命周期函数的作用**：允许程序员**在特定的时间点**，**执行某些特定的操作**。例如，页面刚加载的时候，可以在 onLoad 生命周期函数中初始化页面的数据。

<br>

> 注意：**生命周期**强调的是**时间段**，**生命周期函数**强调的是**时间点**。

#### 4. 生命周期函数的分类

小程序中的生命周期函数分为两类，分别是：

1. **应用的生命周期函数**
   - 特指小程序从启动 -> 运行 -> 销毁期间依次调用的那些函数
2. **页面的生命周期函数**
   - 特指小程序中，每个页面从加载 -> 渲染 -> 销毁期间依次调用的那些函数

#### 5. 应用的生命周期函数

小程序的**应用生命周期函数**需要在 **app.js** 中进行声明，示例代码如下：

```javascript
// app.js 文件
App({
  // 小程序初始化完成时，执行此函数，全局只触发一次，可以做一些初始化的工作。
  onLaunch: function (options) {},
  // 小程序启动，或从后台进入前台显示时触发。
  onShow: function (options) {},
  // 小程序从前台进入后台时触发。
  onHide: function () {}
})
```

#### 6. 页面的生命周期函数

小程序的**页面生命周期函数**需要在页面的 **.js 文件**中进行声明，示例代码如下：

```javascript
// 页面的 .js 文件
Page({
  onLoad: function (options) {}, // 监听页面加载，一个页面只调用 1 次
  onShow: function () {}, // 监听页面显示
  onReady: function () {}, // 监听页面初次渲染完成，一个页面只调用 1 次
  onHide: function () {}, // 监听页面隐藏
  onUnload: function () {} // 监听页面卸载，一个页面只调用 1 次
})
```

### 4. WXS 脚本

#### 1. 什么是 wxs

**WXS**（WeiXin Script）是**小程序独有的一套脚本语言**，结合 WXML，可以构建出页面的结构。

#### 2. wxs 的应用场景

**wxml 中无法调用在页面的 .js 中定义的函数**，但是，wxml 中可以调用 wxs 中定义的函数。因此，小程序中 wxs 的**典型应用场景**就是“**过滤器**”。

#### 3. wxs 和 JavaScript 的关系\*

虽然 wxs 的语法类似于 JavaScript，但是 wxs 和 JavaScript 是完全不同的两种语言：

1. **wxs 有自己的数据类型**
   - `number` 数值类型、`string` 字符串类型、`boolean` 布尔类型、`object` 对象类型
   - `function` 函数类型、`array` 数组类型、`date` 类型、`regexp` 正则
2. **wxs 不支持类似于 ES6 及以上的语法形式**
   - `不支持`：let、const、解构赋值、展开运算符、箭头函数、对象属性简写、etc...
   - `支持`：var 定义变量、普通 function 函数等类似于 ES5 的语法
3. **wxs 遵循 CommonJS 规范**
   - `module` 对象
   - `require()` 函数
   - `module.exports` 对象

#### 4. 基础语法

##### 1. 内嵌 wxs 脚本

wxs 代码可以编写在 wxml 文件中的 **\<wxs\>** 标签内，就像 JavaScript 代码可以编写在 html 文件中的 \<script\> 标签一样。

wxml 文件中的每个 \<wxs\>\</wxs\> 标签，**必须提供 module 属性**，用来指定**当前 wxs 的模块名称**，方便在 wxml 中访问模块中的成员：

```html
<view>{{m1.toUpper(username)}</view>

<wxs module="m1">
  // 将文本转换为大写形式 zs -> ZS module.exports.toUpper = function (str) {
  return str.toUpperCase() }
</wxs>
```

##### 2. 定义外联的 wxs 脚本

wxs 代码还可以编写在**以 .wxs 为后缀名的文件内**，就像 javascript 代码可以编写在以 .js 为后缀名的文件中一样。示例代码如下：

```javascript
// tools.wxs 文件
function toLower(str) {
  return str.toLowerCase()
}

module.exports = {
  toLower: toLower
}
```

##### 3. 使用外联的 wxs 脚本

在 WXML 中引入外联的 wxs 脚本时，**必须**为 \<wxs\> 标签添加 **module** 和 **src** 属性，其中：

- **module** 用来指定模块的名称
- **src** 用来指定要引入的脚本的路径，且**必须是相对路径**

示例代码如下：

```html
<!-- 调用 m2 模块中的方法 -->
<view>{{m2.toLower(country)}}</view>

<!-- 引用外联的 tools.wxs 脚本，并命名为 m2 -->
<wxs src="../../utils/tools.wxs" module="m2"></wxs>
```

#### 5. WXS 的特点

##### 1. 与 JavaScript 不同

为了降低 wxs（**WeiXin Script**）的学习成本，wxs 语言在设计时借鉴了大量的 JavaScript 的语法。但本质上，wxs 和 JavaScript 是完全不同的两种语言！

##### 2. 不能作为组件的事件回调

wxs 的典型的应用场景就是“**过滤器**”，**经常配合 Mustache 语法进行使用**，例如：

```html
<view>{{m2.toLower(country)}}</view>
```

但是，在 wxs 中定义的函数**不能作为组件的事件回调函数**。例如，下面的用法是错误的：

```html
<button bindtap="m2.toLower">按钮</button>
```

##### 3. 隔离性

**隔离性**指的是 wxs 的运行环境和其他 JavaScript 代码是隔离的。体现在如下两方面：

1. wxs 不能调用 js 中定义的函数
2. wxs 不能调用小程序提供的 API

##### 4. 性能好

- 在 **iOS 设备**上，小程序内的 **WXS** 会比 JavaScript 代码**快 2 ~ 20 倍**
- 在 **android 设备**上，二者的运行效率**无差异**

### 案例 - 本地生活（列表页面）

#### 1. 主要功能

- 页面导航并传参
- 上拉触底时加载下一页数据
- 下拉刷新列表数据

#### 2. 列表页面的 API 接口

以**分页**的形式，加载**指定分类下**商铺列表的数据：

1. 接口地址
   - https://www.escook.cn/categories/categories/**:cate_id**/shops
   - URL 地址中的 :cate_id 是动态参数，表示分类的 Id
2. 请求方式
   - GET 请求
3. 请求参数
   - **\_page** 表示请求第几页的数据
   - **\_limit** 表示每页请求几条数据

#### 3. 判断是否还有下一页数据

如果下面的公式成立，则证明没有下一页数据了：

**页码值** \* **每页显示多少条数据** >= **总数据条数**

**page** \* **pageSize** >= **total**

<br>

案例 1：总共有 77 条数据，如果每页显示 10 条数据，则总共分为 8 页，其中第 8 页只有 7 条数据

**page** (7) \* **pageSize** (10) >= **total** (77)

**page** (8) \* **pageSize** (10) >= **total** (77)

<br>

案例 2：总共有 80 条数据，如果每页显示 10 条数据，则总共分为 8 页，其中第 8 页只有 10 条数据

**page** (7) \* **pageSize** (10) >= **total** (80)

**page** (8) \* **pageSize** (10) >= **total** (80)

### 总结

1. 能够知道如何实现页面之间的导航跳转
   - 声明式导航、编程式导航
2. 能够知道如何实现下拉刷新效果
   - enablePullDownRefresh、**onPullDownRefresh**
3. 能够知道如何实现上拉加载更多效果
   - onReachBottomDistance、**onReachBottom**
4. 能够知道小程序中常用的生命周期函数
   - 应用生命周期函数：**onLaunch**，onShow，onHide
   - 页面生命周期函数：**onLoad**，onShow，**onReady**，onHide，onUnload

## 4. 基础加强

### 目标

- 能够知道如何自定义小程序组件
- 能够知道小程序组件中 behaviors 的作用
- 能够知道如何安装和配置 vant-weApp 组件库
- 能够知道如何使用 MobX 实现全局数据共享
- 能够知道如何对小程序的 API 进行 Promise 化

### 1. 自定义组件

#### 1. 组件的创建与使用

##### 1. 创建组件

1. 在项目的根目录中，鼠标右键，创建 **components** -> **test** 文件夹
2. 在新建的 components -> test 文件夹上，鼠标右键，点击“**新建 Component**”
3. 键入组件的名称之后回车，会自动生成组件的对应的 4 个文件，后缀分别为 .js，.json，.wxml 和 .wxss

> 注意：为了保证目录结构的清晰，建议把不同的组件，存放到单独的目录中。

##### 2. 引用组件

组件的引用方式分为“**局部引用**”和“**全局引擎**”，顾名思义：

- 局部引用：组件只能在被引用的页面内使用
- 全局引用：组件可以在每个小程序页面中使用

##### 3. 局部引用组件

在页面的 .json 配置文件中引用组件的方式，叫做“局部引用”。示例代码如下：

```javascript
// 在页面的 .json 文件中，引入组件
{
  "useingComponents": {
    "my-test1": "/components/test1/test1"
  }
}
```

```html
<!-- 在页面的 .wxml 文件中，使用组件 -->
<my-test1></my-test1>
```

##### 4. 全局引用组件

在 app.json 全局配置文件中引用组件的方式，叫做“全局引用”。示例代码如下：

```json
// 在 app.json 文件中，引入组件
{
  "pages": [
    /* 省略不必要的代码 */
  ],
  "window": {
    /* 省略不必要的代码 */
  },
  "usingComponents": {
    "my-test2": "/components/test2/test2"
  }
}
```

```html
<!-- 在页面的 .wxml 文件中，使用组件 -->
<my-test2></my-test2>
```

##### 5. 全局引用 VS 局部引用

根据组件的**使用频率**和**范围**，来选择合适的引用方式：

- 如果某组件**在多个页面中经常被用到** ，建议进行“全局引用”
- 如果某组件**只在特定的页面中被用到** ，建议进行“局部引用”

##### 6. 组件和页面的区别

从表明来看，组件和页面都是由 .js、.json、.wxml 和 .wxss 这四个文件组成的。但是，组件和页面的 .js 与 。json 文件有明显的不同：

- 组件的 .json 文件中需要声明 **"component": true** 属性
- 组件的 .js 文件中调用的是 **Component()** 函数
- 组件的事件处理函数需要定义到 **methods** 节点中

#### 2. 样式

##### 1. 组件样式隔离

默认情况下，自定义组件的样式只对当前组件生效，不会影响到组件之外的 UI 结构：

- 组件 A 的样式**不会影响**组件 C 的样式
- 组件 A 的样式**不会影响**小程序页面的样式
- 小程序页面的样式**不会影响**组件 A 和 C 的样式

<br>

好处：

1. 防止外界的样式影响组件内部的样式
2. 防止组件的样式破坏外界的样式

##### 2. 组件样式隔离的注意点

- app.wxss 中的全局样式对组件无效
- 只有 class 选择器会有样式隔离效果，id 选择器、属性选择器、标签选择器不受样式隔离的影响

<br>

建议：在**组件**和**引用组件的页面**中建议使用 class 选择器，**不要使用 id 、属性、标签选择器**！

##### 3. 修改组件的样式隔离选项

默认情况下，自定义组件的**样式隔离特性**能够**防止组件内外样式互相干扰的问题**。但有时，我们希望在外界能够控制组件内部的样式，此时，可以通过 **styleIsolation** 修改组件的样式隔离选项，用法如下：

```javascript
// 在组件的 .js 文件中新增如下配置
Component({
  options: {
    styleIsolation: 'isolated'
  }
})
```

```json
// 或在组件的 .json 文件中新增如下配置
{
  "styleIsolation": "isolated"
}
```

##### 4. styleIsolation 的可选值

| 可选值       | 默认值 | 描述                                                                                                                           |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| isolated     | 是     | 表示**启用样式隔离**，在自定义组件内外，使用 class 指定的样式将**不会相互影响**                                                |
| apply-shared | 否     | 表示**页面 wxss 样式将影响到自定义组件**，但自定义组件 wxss 中指定的样式不会影响页面                                           |
| **shared**   | 否     | 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件 |

#### 3. 数据、方法和属性

##### 1. data 数据

在小程序中，**用于组件模板渲染**的**私有数据**，需要定义到 **data 节点**中，示例如下：

```javascript
Component({
  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  }
})
```

##### 2. methods 方法

在小程序组件中，**事件处理函数**和**自定义方法**需要定义到 **methods 节点**中，示例代码如下：

```javascript
Component({
  methods: {
    // 组件的方法列表【包含事件处理函数和自定义方法】
    addCount() {
      // 事件处理函数
      this.setData({ count: this.data.count + 1 })
      this._showCount() // 通过 this 直接调用自定义方法
    },
    _showCount() {
      // 自定义方法建议以 _ 开头
      wx.showToast({
        title: 'count 值为：' + this.data.count,
        icon: 'none'
      })
    }
  }
})
```

##### 3. properties 属性

在小程序组件中，properties 是组件的对外属性，**用来接收外界传递到组件中的数据**，示例代码如下：

```javascript
Component({
  // 属性定义
  properties: {
    max: {
      // 完整定义属性的方法【当需要指定属性默认值时，建议使用此方式】
      type: Number, // 属性值的数据类型
      value: 10 // 属性默认值
    },
    max: number // 简化定义属性的方式【不需指定属性默认值时，可以使用简化方式】
  }
})
```

```html
<my-test1 max="10"></my-test1>
```

##### 4. data 和 properties 的区别

在小程序的组件中，properties 属性和 data 数据的用法相同，它们都是**可读可写**的，只不过：

- data 更倾向于**存储组件的私有数据**
- properties 更倾向于**存储外界传递到组件中的数据**

```javascript
Component({
  methods: {
    showInfo() {
      console.log(this.data) // 输出结果：{count: 0, max: 10}
      console.log(this.properties) // 输出结果：{count: 0, max :10}
      // 结果为 true，证明 data 数据和 properties 属性【在本质上是一样的、都是可读可写的】
      console.log(this.data === this.properties)
    }
  }
})
```

##### 5. 使用 setData 修改 properties 的值

由于 **data 数据**和 **properties 属性**在本质上没有任何区别，因此 properties 属性的值也可以用于页面渲染，或使用 setData 为 properties 中的属性重新赋值，示例代码如下：

```html
<!-- 在组件的 .wxml 文件中使用 properties 属性的值 -->
<view>max 属性的值为：{{max}}</view>
```

```javascript
Component({
  properties: { max: Number }, // 定义属性
  methods: {
    addCount() {
      this.setData({ max: this.properties.max + 1 }) // 使用 setData 修改属性的值
    }
  }
})
```

#### 4. 数据监听器

##### 1. 什么是数据监听器

数据监听器用于**监听和响应任何属性和数据字段的变化，从而执行特定的操作**。它的作用类似于 vue 中的 watch 侦听器。在小程序组价中，数据监听器的基本语法格式如下：

```javascript
Component({
  observers: {
    '字段A, 字段B': function (字段A的新值, 字段B的新值) {
      // do something
    }
  }
})
```

##### 2. 数据监听器的基本用法

组价的 UI 结构如下：

```html
<!-- 组件的 UI 结构如下 -->
<view>{{n1}} + {{n2}} = {{sum}}</view>
<button size="mini" bindtap="addN1">n1自增</button>
<button size="mini" bindtap="addN2">n2自增</button>
```

组件的 .js 文件代码如下：

```javascript
Component({
  data: { n1: 0, n2: 0, sum: 0 }, // 数据节点
  methods: {
    // 方法列表
    addN1() {
      this.setData({ n1: this.data.n1 + 1 })
    },
    addN2() {
      this.setData({ n2: this.data.n2 + 1 })
    }
  },
  observers: {
    // 数据监听节点
    'n1, n2': function (n1, n2) {
      // 监听 n1 和 n2 数据的变化
      this.setData({ sum: n1 + n2 })
      // 通过监听器，自动计算 sum 的值
    }
  }
})
```

##### 3. 监听对象属性的变化

数据监听器支持监听对象中**单个**或**多个属性**的变化，示例语法如下：

```javascript
Component({
  observers: {
    '对象.属性A, 对象.属性B': function (属性A的新值, 属性B的新值) {
      // 触发此监听器的 3 种情况，
      // 【为属性A赋值】使用 setData 设置 this.data.对象.属性A 时触发
      // 【为属性B赋值】使用 setData 设置 this.data.对象.属性B 时触发
      // 【直接为对象赋值】使用 setData 设置 this.data 对象 时触发
      // do something...
    }
  }
})
```

#### 5. 数据监听器 - 案例

##### 1. 案例效果

```javascript
Component({
  /**
   * 组件的初始数据
   */
  data: {
    rgb: {
      // rgb 的颜色值对象
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0' // 根据 rgb 对象的三个属性，动态计算 fullColor 的值
  }
})
```

##### 2. 渲染 UI 结构

```html
<!-- .wxml 结构 -->
<view style="background-color: rgb({{fullColor}});" class="colorBox"
  >颜色值：{{fullColor}}</view
>
<button size="mini" bindtap="changeR" type="default">R</button>
<button size="mini" bindtap="changeG" type="primary">G</button>
<button size="mini" bindtap="changeB" type="warn">B</button>
```

```css
/* .wxss 样式 */
.colorBox {
  line-height: 200rpx;
  font-size: 24rpx;
  color: white;
  text-shadow: 0rpx 0rpx 2rpx black;
  text-align: center;
}
```

##### 3. 定义 button 的事件处理函数

```javascript
methods: {
  changeR() {
    // 修改 rbg 对象上 r 属性的值
    this.setData({
      'rgb.r': this.data.rgb.r + 5 > 255 ? 255 : this.data.r + 5
    })
  },
    changeG() {
      // 修改 rbg 对象上 g 属性的值
      this.setData({
        'rgb.g': this.data.rgb.g + 5 > 255 ? 255 : this.data.g + 5
      })
    },
      changeB() {
        // 修改 rbg 对象上 b 属性的值
        this.setData({
          'rgb.b': this.data.rgb.b + 5 > 255 ? 255 : this.data.b + 5
        })
      }
},
```

##### 4. 监听对象中指定属性的变化

```javascript
observers: {
  'rgb.r, rgb.g, rgb.b': function (r, g, b) {
    this.setData({
      // 为 data 中的 fullColor 重新赋值
      fullColor: `${r}, ${g}, ${b}`
    })
  }
}
```

##### 5. 监听对象中所有属性的变化

如果某个对象中需要被监听的属性太多，为了方便，可以使用**通配符 \*\*** 来**监听**对象中**所有属性的变化**，示例代码如下：

```javascript
observers: {
  // 使用 通配符 ** 监听对象上所有属性的变化
  'rgb.**': function (obj) {
    this.setData({
      // 为 data 中的 fullColor 重新赋值
      fullColor: `${obj.r}, ${obj.g}, ${obj.b}`
    })
  }
}
```

#### 6. 纯数据字段

##### 1. 什么是纯数据字段

概念：**纯数据字段**指的是那些**不用于界面渲染的 data 字段**。

<br>

应用场景：例如有些情况下，某些 data 中的字段**既不会展示在界面上，也不会传递给其他组件**，仅仅在当前组件内部使用。带有这种特性的 data 字段适合被设置为纯数据字段。

<br>

好处：纯数据字段**有助于提升页面更新的性能**。

##### 2. 使用规则

在 component 构造器的 options 节点中，指定 pureDataPattern 为一个**正则表达式**，字段名符合这个正则表达式的字段将成为纯数据字段，示例代码如下：

```javascript
Component({
  options: {
    // 指定所有 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },
  data: {
    a: true, // 普通数据字段
    _b: true // 纯数据字段
  }
})
```

##### 3. 使用纯数据字段改造数据监听器案例

```javascript
Component({
  options: {
    // 指定所有 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },
  data: {
    // 将 rbg 改造为以 _ 开头的纯数据字段
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0'
  }
})
```

#### 7. 组件的生命周期

##### 1. 组件**全部的**生命周期函数

小程序组件可用的全部生命周期如下表所示：

| 生命周期函数 | 参数         | 描述说明                                 |
| ------------ | ------------ | ---------------------------------------- |
| **created**  | **无**       | **在组件实例刚刚被创建时执行**           |
| **attached** | **无**       | **在组件实例进入页面节点树时执行**       |
| ready        | 无           | 在组件在视图层布局完成后执行             |
| moved        | 无           | 在组件实例被移动到节点树另一个位置时执行 |
| **detached** | **无**       | **在组件实例被从页面节点树移除时执行**   |
| error        | Object-Error | 每当组件方法抛出错误时执行               |

##### 2. 组件**主要的**生命周期函数

在小程序组件中，最重要的生命周期函数有 3 个，分别是 **created**、**attached**、**detached**。它们各自的特点如下：

1. 组件实例**刚被创建好**的时候，created 生命周期函数会被触发
   - 此时还不能调用 setData
   - 通常在这个生命周期函数中，只应该用于给组件的 this 添加一些自定义的属性字段
2. 在组件**完全初始化完毕、进入页面节点树后**，attached 生命周期函数会被触发
   - 此时，this.data 已被初始化完毕
   - 这个生命周期很有用，绝大多数初始化的工作可以在这个时机进行（例如发请求获取初始数据）
3. 在组件**离开页面节点树后**，detached 生命周期函数会被触发
   - 退出一个页面时，会触发页面内每个自定义组件的 detached 生命周期函数
   - 此时适合做一些清理性质的工作

##### 3. **lifetimes** 节点

在小程序组件中，生命周期函数可以直接定义在 Component 构造器的第一级参数中，可以在 **lifetimes** 字段内进行声明（**这是推荐的方式，其优先级最高**）。示例代码如下：

```javascript
Component({
  // 推荐用法
  lifetimes: {
    attached() {}, // 在组件实例进入页面节点时执行
    detached() {} // 在组件实例被从页面节点树移除时执行
  },
  // 以下是旧式的定义方式
  attached() {}, // 在组件实例进入页面节点树时执行
  detached() {} // 在组件实例被从页面节点树移除时执行
})
```

#### 8. 组件所在页面的生命周期

##### 1. 什么是组件所在页面的生命周期

有时，**自定义组件的行为依赖于页面状态的变化**，此时就需要用到**组件所在页面的生命周期**。

例如：每当触发页面的 show 生命周期函数的时候，我们希望能够重新生成一个随机的 RGB 颜色值。

在自定义组件中，组件所在页面的生命周期函数有如下 3 个，分别是：

| 生命周期函数 | 参数        | 描述                             |
| ------------ | ----------- | -------------------------------- |
| show         | 无          | **组件所在的页面**被展示时执行   |
| hide         | 无          | **组件所在的页面**被隐藏时执行   |
| resize       | Object Size | **组件所在的页面**尺寸变化时执行 |

##### 2. **pageLifetimes** 节点

组件所在页面的生命周期函数，需要定义在 pageLifetimes 节点中，示例代码如下：

```javascript
Component({
  pageLifetimes: {
    show: function () {}, // 页面被展示
    hide: function () {}, // 页面被隐藏
    resize: function (size) {} // 页面尺寸变化
  }
})
```

##### 3. 生成随机的 RGB 颜色值

```javascript
Component({
  pageLifetimes: {
    // 组件所在的页面被展示时，立即调用 _randomColor 生成随机颜色值
    show: function () {
      this._randomColor()
    }
  }
})
```

#### 9.插槽

##### 1. 什么是插槽

在自定义组件的 wxml 结构中，可以提供一个 **\<slot\>** 节点（插槽），**用于承装组件使用者提供的 wxml 结构**。

##### 2. **单个**插槽

在小程序中，默认每个自定义组件中只允许使用一个 \<slot\> 进行占位，这种个数上的限制叫做单个插槽。

```html
<!-- 组件的封装者 -->
<view class="wrapper">
  <view>这里是组件的内部节点</view>
  <!-- 对于不确定的内容，可以使用 <slot> 进行占位，具体的内容由组件的使用者决定 -->
  <slot></slot>
</view>
```

```html
<!-- 组件的使用者 -->
<component-tag-name>
  <!-- 组件的使用者 -->
  <view>这里是插入到组件 slot 中的内容</view>
</component-tag-name>
```

##### 3. **启用**多个插槽

在小程序的自定义组件中，需要使用多 \<slot\> 插槽时，可以在组件的 .js 文件中，通过如下方式进行启用。

示例代码如下：

```javascript
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
  },
  properties: {
    /* ... */
  },
  methods: {
    /*  */
  }
})
```

##### 4. **定义**多个插槽

可以在组件的 .wxml 中使用多个 \<slot\> 标签，以不同的 **name** 来区分不同的插槽。示例代码如下：

```html
<!-- 组件模板 -->
<view class="wrapper">
  <!-- name 为 before 的第一个 slot 插槽 -->
  <slot name="before"></slot>
  <view>这是一段固定的文本内容</view>
  <!-- name 为 after 的第二个 slot 插槽 -->
  <slot name="after"></slot>
</view>
```

##### 5. **使用**多个插槽

在使用**带有多个插槽的自定义组件**时，需要使用 **slot 属性**来将节点插入到不同的 \<slot\> 中。示例代码如下：

```html
<!-- 引用组件的页面模板 -->
<component-tag-name>
  <!-- 这部分内容将被放置在组件 <slot name="before"> 的位置上 -->
  <view slot="before">这里是插入到组件 slot name="before" 中的内容</view>
  <!-- 这部分内容将被放置在组件 <slot name="after"> 的位置上 -->
  <view slot="after">这里是插入到组件 slot name="after" 中的内容</view>
</component-tag-name>
```

#### 10. 父子组件之间的通信

##### 1. 父子组件之间通信的 3 种方式

1. 属性绑定
   - 用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容的数据
2. 事件绑定
   - 用于子组件向父组件传递数据，可以传递任意数据
3. 获取组件实例
   - 父组件还可以通过 this.selectComponent() 获取子组件实例对象
   - 这样就可以直接访问子组件的任意数据和方法

##### 2. 属性绑定

**属性绑定**用于实现**父向子传值**，而且**只能传递普通类型的数据**，无法将方法传递给子组件。父组件的示例代码如下：

```javascript
// 父组件的 data 节点
data: {
  count: 0
}
```

```html
<!-- 父组件的 wxml 结构 -->
<my-test3 count="{{count}}"></my-test3>
<view>~~~~</view>
<view>父组件中，count 值为：{{count}}</view>
```

子组件在 **properties** 节点中**声明对应的属性并使用**。示例代码如下：

```javascript
// 子组件的 properties 节点
properties: {
  count: Number
}
```

```html
<!-- 子组件的 wxml 结构 -->
<test>子组件中，count 值为：{{count}}</test>
```

##### 3. 事件绑定

**事件绑定**用于实现**子向父传值**，可以传递任何类型的数据。使用步骤如下：

1. 在**父组件**的 js 中，定义一个函数，这个函数**即将**通过自定义事件的形式，传递给子组件
2. 在**父组件**的 wxml 中，通过自定义事件的形式，将步骤 1 中定义的函数引用，传递给子组件
3. 在`子组件`的 js 中，通过调用 **this.triggerEvent(**'`自定义事件名称'`, { /\* `参数对象` \*/ }**)**，将数据发送到父组件
4. 在**父组件**的 js 中，通过 **e.detail** 获取到子组件传递过来的数据

步骤 1：在**父组件**的 js 中，定义一个函数，这个函数**即将**通过自定义事件的形式传递给子组件。

```javascript
// 在父组件中定义 syncCount 方法
// 将来，这个方法会被传递给子组件，提供组件进行调用
syncCount() {
  console.log('syncCount')
}
```

步骤 2：在**父组件**的 wxml 中，通过**自定义事件**的形式，将步骤 1 中定义的函数引用，传递给子组件。

```html
<!-- 使用 bind:自定义事件名称（推荐：结构清晰） -->
<my-test3 count="{{count}}" bind:sync="syncCount"></my-test3>
<!-- 或在 bind 后面直接写上自定义事件名称 -->
<my-test3 count="{{count}}" bindsync="syncCount"></my-test3>
```

步骤 3：在`子组件`的 js 中，通过调用 **this.triggerEvent(**'`自定义事件名称`', { /\* `参数对象` \*/ }**)**，将数据发送到父组件。

```html
<!-- 子组件 wxml 结构 -->
<text>子组件中，count 值为：{{count}}</text>
<button type="primary" bindtap="addCount">+1</button>
```

```javascript
// 子组件的 js 代码
methods: {
  addCount() {
    this.setData({
      count: this.properties.count + 1
    })
    this.triggerEvent('sync', { value: this.properties.count })
  }
}
```

步骤 4：在**父组件**的 js 中，通过 **e.detail** 获取到子组件传递过来的数据。

```javascript
syncCount(e) {
  // console.log(e.detail.value)
  this.setData({
    count: e.detail.value
  })
}
```

##### 4. 获取组件实例

可在父组件里调用 **this.selectComponent(**"id 或 class 选择器"**)**，获取子组件的实例对象，从而直接访问子组件的任意数据和方法。调用时需要传入一个**选择器**，例如 this.selectComponent(".my-component")。

```html
<!-- wxml 结构 -->
<my-test3
  count="{{count}}"
  bind:sync="syncCount"
  class="customA"
  id="cA"
></my-test3>
<button bindtap="getChild">获取子组件实例</button>
```

```javascript
getChild() {
  // 按钮的 tap 事件处理函数
  // 切记下面参数不能传递标签选择器 "my-test3"，不然返回的是 null
  const child = this.selectComponent('.customA') // 也可以传递 id 选择器 #cA
  child.setData({ count: child.properties.count + 1 }) // 调用子组件的 setData 方法
  child.addCount() // 调用子组件的 addCount 方法
}
```

#### 11. behaviors

##### 1. 什么是 behaviors

behaviors 是小程序中，**用于实现组件间代码共享**的特性，类似于 Vue.js 中的 "mixins"。

##### 2. behaviors 的工作方式

每个 behavior 可以包含一组**属性**、**数据**、**生命周期函数**和**方法**。组件引用它时，它的属性、数据和方法**会被合并到组件中**。

每个组件可以引用多个 behavior，behavior 也可以引用其它 behavior。

##### 3. 创建 behavior

调用 **Behavior(**Object object**)** 方法即可创建一个**共享的 behavior 实例对象**，供所有的组件使用：

```javascript
// 调用 Behavior() 方法，创建实例对象
// 并使用 module.exports 将 behavior 实例对象共享出去
module.exports = Behavior({
  // 属性节点
  properties: {},
  // 私有数据节点
  data: { username: 'zs' },
  // 事件处理函数和自定义方法节点
  methods：{}
  // 其它节点...
})
```

##### 4. 导入并使用 behavior

在组件中，使用 **require()** 方法导入需要的 behavior，**挂载后即可访问 behavior 中的数据或方法**，示例代码如下：

```javascript
// 1. require() 导入需要的自定义 behavior 模块
const myBehavior = require('../../behaviors/my-behavior')

Component({
  // 2. 将导入的 behavior 示例对象，挂载到 behaviors 数组节点中，即可生效
  behavior: [myBehavior]
  // 组件的其它节点 .
})
```

##### 5. behavior 中所有可用的节点

| 可用的节点     | 类型         | 是否必填 | 描述                |
| -------------- | ------------ | -------- | ------------------- |
| **properties** | Object Map   | 否       | 同组件属性          |
| **data**       | Object       | 否       | 同组件属性          |
| **methods**    | Object       | 否       | 同自定义组件的方法  |
| **behaviors**  | String Array | 否       | 引入其它的 behavior |
| created        | Function     | 否       | 生命周期函数        |
| attached       | Function     | 否       | 生命周期函数        |
| ready          | Function     | 否       | 生命周期函数        |
| moved          | Function     | 否       | 生命周期函数        |
| detached       | Function     | 否       | 生命周期函数        |

##### 6. 同名字段的覆盖和组合规则\*

组件和他引用的 behavior 中**可以包含同名的字段**，此时可以参考如下 3 种同名时的处理规则：

1. 同名的数据字段（**data**）
2. 同名的属性（**properties**）或方法（**methods**）
3. 同名的**生命周期函数**

<br>

关于详细的覆盖和组合规则，大家可以参考微信小程序官方文档给出的说明：

[https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html)

#### 12. 总结

1. 能够创建并引用组件
   - **全局引用**、局部引用、**usingComponents**
2. 能够知道如何修改组件的样式隔离选项
   - options -> **styleIsolation**（isolated，apply-shared，**shared**）
3. 能够知道如何定义和使用数据监听器
   - **observers**
4. 能够知道如何定义和使用纯数据字段
   - options -> **pureDataPattern**
5. 能够知道实现组件父子通信有哪 3 种方式
   - 属性绑定、**事件绑定**、this.selectComponent('id 或 class 选择器')
6. 能够知道如何定义和使用 behaviors
   - 调用 **Behavior()** 构造器方法

### 2. 使用 npm 包

#### 小程序对 npm 的支持与限制

目前，小程序中已经支持使用 npm 安装第三方包，从而来提高小程序的开发效率。但是，在小程序中使用 npm 包有如下 3 个限制：

1. 不支持依赖于 **Node.js 内置库**的包
2. 不支持依赖于**浏览器内置对象**的包
3. 不支持依赖于 **C++ 插件**的包

<br>

总结：虽然 npm 上的包有千千万，但是能提供小程序使用的包却“为数不多”。

#### 1. Vant Weapp

##### 1. 什么是 Vant Weapp

Vant Weapp 是有赞前端团队开源的一套**小程序 UI 组件库**，助力开发者快速搭建小程序应用。它所使用的是 **MIT 开源许可协议**，对商业使用比较友好。

官方文档地址 [https://youzan.github.io/vant-weapp/#/home](https://youzan.github.io/vant-weapp/#/home)

##### 2. 安装 Vant 组件库

在小程序项目中，安装 Vant 组件库主要分为如下 3 步：

1. 通过 npm 安装（建议指定版本为 **@1.3.3**）
2. 构建 npm 包
3. 修改 app.json

<br>

详细的操作步骤，大家可以参考 Vant 官方提供的快速上手教程：

[https://youzan.github.io/vant-weapp/#/quickstart#an-zhuang](https://youzan.github.io/vant-weapp/#/quickstart#an-zhuang)

##### 3. 使用 Vant 组件

安装完 Vant 组件库之后，可以在 **app.json** 的 **usingComponents** 节点中引入需要的组件，即可在 wxml 中直接使用组件。示例代码如下：

```json
// app.json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```

```html
<!-- 页面的 .wxml 结构 -->
<van-button type="primary">按钮</van-button>
```

##### 4. 定制全局主题样式

Vant Weapp 使用 **CSS 变量**来实现定制主题。关于 CSS 变量的基本用法，请参考 MDN 文档：

[https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

##### 5. 定制全局主题样式

在 **app.wxss** 中，写入 CSS 变量，即可对全局生效：

```css
/* app.wxss */
page {
  /* 定制警告按钮的背景颜色和边框颜色 */
  --button-danger-background-color: #c00000;
  --button-danger-border-color: #d60000;
}
```

所有可用的**颜色变量**，请参考 Vant 官方提供的配置文件：

[https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less](https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less)

#### 2. API Promise 化

##### 1. 基于回调函数的异步 API 的缺点

默认情况下，小程序官方提供的**异步 API**都是**基于回调函数**实现的，例如，网络请求的 API 需要按照如下的方式调用：

```javascript
wx.request({
  method: '',
  url: '',
  data: { },
  success: ()={}, // 请求成功的回调函数
  fail: ()={}, // 请求失败的回调函数
  complete: ()={} // 请求完成的回调函数
})
```

缺点：容易造成**回调地狱**的问题，代码的**可读性**、**维护性**差！

##### 2. 什么是 API Promise 化

**API Promise 化**，指的是**通过额外的配置**，将官方提供的、基于回调函数的异步 API，**升级改造为基于 Promise 的异步 API**，从而提高代码的可读性、维护性、避免回调地狱的问题。

##### 3. 实现 API Promise 化

在小程序中，实现 API Promise 化主要依赖于 **miniprogram-api-promise** 这个第三方的 npm 包。它的安装和使用步骤如下：

```bash
$ npm install --save miniprogram-api-promise@1.0.4
```

```javascript
// 在小程序入口文件中（app.js），只需调用一次 promisifyAll() 方法，
// 即可实现异步 APi 的 Promise 化
import { promisifyAll } from 'miniprogram-api-promise'

const wxp = (wx.p = {})
// promisify all wx`s api
promisifyAll(wx, wxp)
```

##### 4. 调用 Promise 化之后的异步 APi

```html
<!-- 页面的 .wxml 结构 -->
<van-button type="danger" bindtap="getInfo">vant 按钮</van-button>
```

```javascript
// 在页面的 .js 文件中，定义对应的 tap 事件处理函数
async getInfo() {
  const { data: res } = await wx.p.request({
    method: 'GET',
    url: 'https://www.escook.cn/api/get',
    data: { name: 'zs', age: 20 }
  })

  console.log(res)
}
```

### 3. 全局数据共享

#### 1. 什么是全局数据共享

**全局数据共享**（又叫做：状态管理）是为了解决**组件之间数据共享**的问题。

开发中常用的全局数据共享方案有：Vuex、Redux、MobX 等。

#### 2. 小程序中的全局数据共享方案

在小程序中，可使用 **mobx-miniprogram** 配合 **mobx-miniprogram-bindings** 实现全局数据共享。其中：

- mobx-miniprogram 用来**创建 Store 实例对象**
- mobx-miniprogram-bindings 用来**把 Store 中的共享数据或方法，绑定到组件或页面中使用**

#### 3. MobX

##### 1. 安装 Mobx 相关的包

在项目中运行如下的命令，安装 Mobx 相关的包：

```bash
$ npm install --save mobx-miniprogram@4.13.2 mobx-miniprogram-bindings@1.2.1
```

> 注意：MobX 相关的包安装完毕之后，记得**删除 miniprogram_npm 目录**后，重新**构建 npm**。

##### 2. 创建 Mobx 的 Store 实例

```javascript
import { observable, action } from 'mobx-miniprogram'

export const strore = observable({
  // 数据字段
  numA: 1,
  numB: 2,
  // 计算属性
  getSum() {
    return this.numA + this.numB
  },
  // actions 方法，用来修改 store 中的数据
  updateNum1: action(function (step) {
    this.numA += step
  }),
  updateNum2: action(function (step) {
    this.numB += step
  })
})
```

##### 3. 将 Store 中的成员**绑定到页面**中

```javascript
// 页面的 .js 文件
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Page({
  onLoad: function () {
    // 生命周期函数--监听页面加载
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['updateNum1']
    })
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    this.storeBindings.destroyStroeBindings()
  }
})
```

##### 4. 在页面上使用 Store 中的成员

```html
<!-- 页面的 .wxml 结构 -->
<view>{{numA}} + {{numB}} = {{sum}}</view>
<van-button type="primary" bindtap="btnHandler1" data-step="{{1}}">
  numA + 1
</van-button>
<van-button type="danger" bindtap="btnHandler1" data-step="{{-1}}">
  numA - 1
</van-button>
```

```javascript
// 按钮 tap 事件的处理函数
btnHandler(e) {
  this.updateNum1(e.target.dataset.step)
}
```

##### 5. 将 Store 中的成员**绑定到组件**中

```javascript
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Component({
  behaviors: [storeBindingsBehavior], // 通过 storeBindingsBehavior 来实现自动绑定

  storeBindings: {
    store, // 指定类型绑定的 Stroe
    fields: {
      // 指定要绑定的字段数据
      numA: () => store.numA, // 绑定自动的第 1 件方式
      numB: store => store.numB, // 绑定自动的第 2 件方式
      sum: 'sum'
    },
    actions: {
      // 指定要绑定的方法
      updateNum2: 'updateNum2'
    }
  }
})
```

##### 6. 在组件中使用 Store 中的成员

```html
<!-- 页面的 .wxml 结构 -->
<view>{{numA}} + {{numB}} = {{sum}}</view>
<van-button type="primary" bindtap="btnHandler2" data-step="{{1}}">
  numA + 1
</van-button>
<van-button type="danger" bindtap="btnHandler2" data-step="{{-1}}">
  numA - 1
</van-button>
```

```javascript
// 组件的方法列表
methods: {
  btnHandler2(e) {
    this.updateNum2(e.target.dataset.step)
  }
}
```

### 4. 分包

#### 1. 基础概念

##### 1. 什么是分包

分包指的是把一个**完整的小程序项目**，按照需要**划分为不同的子包**，在构建时打包成不同的分包，用户在使用时**按需进行加载**。

##### 2. 分包的好处

对小程序进行分包的好处主要有以下两点：

- 可以**优化小程序首次启动的下载时间**
- 在多**团队共同开发**时可以更好的**解耦协作**

##### 3. **分包前**项目的构成

分包前，小程序项目中**所有的页面**和**资源**都被打包到了一起，导致整个**项目体积过大**，影响小程序**首次启动的下载时间**。

##### 4. **分包后**项目的构成

分包后，小程序项目由 **1 个主包** + **多个分包**组成：

- 主包：一般只包含项目的**启动页面**或 **TabBar 页面**、以及所有分包都需要用到的一些**公共资源**
- 分包：只包含和当前分包有关的页面和私有资源

##### 5. 分包的加载规则

1. 在小程序启动时，默认会**下载主包**并**启动主包内页面**
   - tabBar 页面需要放到主包中
2. 当用户进入分包内某个页面时，**客户端会把对应分包下载下来**，下载完成后再进行展示
   - 非 tabBar 页面可以按照功能的不同，划分为不同的分包之后，进行按需下载

##### 6. 分包的体积限制

目前，小程序分包的大小有有以下两个限制：

- 整个小程序所有分包大小不超过 **16M**（主包 + 所有分包）
- 单个分包/主包大小不能超过 **2M**

#### 2. 使用分包

##### 1. 配置方法

小程序的目录结构

```
.
├── app.js
├── app.json
├── app.wxss
├── pages // 主包的所有页面
│   ├── index
│   └── logs
├── packageA // 第一个分包
│   ├── pages // 第一个分包的所有页面
│       ├── cat
│       └── dog
├── packageB // 第二个分包
│   ├── pages // 第二个分包的所有页面
│       ├── apple
│       └── banana
└── utils
```

在 app.json 的 subpackages 节点中声明分包的结构

```json
{
  "pages": [
    // 生包的所有页面
    "pages/index/index",
    "pages/logs/logs"
  ],
  "subPackages": [
    // 通过 subpackages 节点，声明分包的结构
    {
      "root": "packageA", // 第一个分包的目录
      "pages": [
        // 当前分包下，所有页面的相对存放路径
        "pages/cat",
        "pages/dog"
      ]
    },
    {
      "root": "packageB", // 第二个分包的目录
      "name": "pack2", // 分包的别名
      "pages": [
        // 当前分包下，所有页面的相对存放路径
        "pages/apple",
        "pages/banana"
      ]
    }
  ]
}
```

##### 2. 打包原则

1. 小程序会按 **subpackages** 的配置进行分包，subpackages 之外的目录将被打包到主包中
2. 主包也可以有自己的 pages（即最外层的 pages 字段）
3. tabBar 页面必须在主包内
4. 分包之间不能互相嵌套

##### 3. 引用原则

1. 主包**无法引用**分包内的私有资源
2. 分包之间**不能相互引用**私有资源
3. 分包**可以引用**主包内的公共资源

#### 3. 独立分包

##### 1. 什么是独立分包

独立分包**本质上也是分包**，只不过它比较特殊，**可以独立于主包和其他分包而单独运行**。

##### 2. 独立分包和普通分包的区别

最主要的区别：**是否依赖于主包才能运行**

- 普通分包必须依赖于主包才能运行
- 独立分包可以在不下载主包的情况下，独立运行

##### 3. 独立分包的应用场景

开发者可以按需，将某些**具有一定功能独立性的页面**配置到**独立分包**中。原因如下：

- 当小程序从普通的分包页面启动时，需要首先下载主包
- 而独立分包**不依赖主包**即可运行，**可以很大程度上提升分包页面时的启动速度**

> 注意：一个小程序中可以有多个独立分包。

##### 4. 独立分包的配置方法

小程序的目录结构

```
.
├── app.js
├── app.json
├── app.wxss
├── pages // 主包的所有页面
│   ├── index
│   └── logs
├── moduleA // 普通分包
│   ├── pages
│       ├── rabbit
│       └── squirrel
├── moduleB // 独立分包
│   ├── pages
│       ├── pear
│       └── pineapple
└── utils
```

通过 independent 声明独立分包

```json
{
  "pages": ["pages/test/test", "pages/index/index", "pages/logs/logs"],
  "subPackages": [
    {
      "root": "moduleA", // moduleA 为普通分包
      "pages": ["pages/rabbit", "pages/squirrel"]
    },
    {
      "root": "moduleB",
      "pages": ["pages/pear", "pages/pineapple"],
      "independent": true // 通过此节点，声明当前 moduleB
    }
  ]
}
```

##### 5. 引用原则

独立分包和普通分包以及主包之间，是**相互隔绝**的，**不能相互引用彼此的资源**！例如：

1. 主包**无法引用**独立分包内的私有资源
2. 独立分包之间，**不能相互引用**私有资源
3. 独立分包和普通分包之间，**不能相互引用**私有资源
4. **特别注意**：独立分包中不能引用主包内的公共资源

#### 4. 分包预下载

##### 1. 什么是分包预下载

分包预下载指的是：在进入小程序的某个页面时，**由框架自动预下载可能需要的分包**，从而提升进入后续分包页面时的启动速度。

##### 2. 配置分包的预下载

**预下载分包的行为，会在进入指定的页面时触发**。在 app.json 中，使用 **preloadRule** 节点定义分包的预下载规则，示例代码如下：

```json
{
  "preloadRule": {
    // 分包预下载的规则
    "pages/contact/contact": {
      // 触发分包预下载的页面路径
      // network 表示在指定的网络模式下进行预下载，
      // 可选值为：all（不限网络）和 wifi（仅 wifi 模式下进行预下载）
      // 默认值为：wifi
      "network": "all",
      // packages 表示进入页面后，预下载哪些分包
      // 可以通过 root 或 name 指定预下载哪些分包
      "packages": ["pkgA"]
    }
  }
}
```

##### 3. 分包预下载的限制

同一个分包中的页面享有**共同的预下载大小限额 2M**。

### 案例 - 自定义 tabBar

#### 1. 案例效果

在此案例中，用到的主要知识点如下：

- 自定义组件
- Vant 组件库
- MobX 数据共享
- 组件样式隔离
- 组件数据监听器
- 组件的 behaviors
- Vant 样式覆盖

#### 2. 实现步骤

**自定义 tabBar** 分为 3 大步骤，分包是：

1. 配置信息
2. 添加 tabBar 代码文件
3. 编写 tabBar 代码

<br>

详细步骤，可以参考小程序官方给出的文档：

[https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

### 总结

1. 能够知道如何安装和配置 vant-weapp 组件库
   - 参考 Vant 的官方文档
2. 能够知道如何使用 **MobX** 实现全局数据共享
   - 安装包、**创建 Store**、**参考官方文档进行使用**
3. 能够知道如何对小程序的 API 进行 Promise 化
   - 安装包、**在 app.js 中进行配置**
4. 能够知道如何实现**自定义 tabBar** 的效果
   - **Vant 组件库 + 自定义组件 + 全局数据共享**

## 5. uniapp

[https://www.escook.cn/docs-uni-shop/](https://www.escook.cn/docs-uni-shop/)
