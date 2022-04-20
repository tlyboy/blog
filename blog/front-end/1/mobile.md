---
title: 移动 WEB 开发
date: 2022-3-22
categories:
  - 前端笔记
tags:
  - HTML
  - CSS
---

## 1. 流式布局

### 目标

- 能够知道移动 web 的开发现状
- 能够写出标准的 viewport
- 能够使用移动 web 的调试方法
- 能够说出移动端常见的布局方案
- 能够描述流式布局
- 能够独立完成京东移动端首页

### 1. 移动端基础

#### 1. 浏览器现状

##### PC 常见浏览器

360 浏览器、谷歌浏览器、火狐浏览器、QQ 浏览器、百度浏览器、搜狗浏览器、IE 浏览器。

##### 移动端常见浏览器

UC 浏览器，QQ 浏览器，欧朋浏览器，百度手机浏览器，360 安全浏览器，谷歌浏览器，搜狗浏览器，猎豹浏览器，以及其他杂牌浏览器。

国内的 UC 和 QQ，百度等手机浏览器都是根据 Webkit 修改过来的内核，就像国内的手机操作系统都是基于 Android 修改开发的一样。

**总结：兼容移动端主流浏览器，处理 Webkit 内核浏览器即可。**

#### 2. 手机屏幕现状

- 移动端设备屏幕尺寸非常多，碎片化严重。
- Android 设备有多种分辨率：480 \* 800，480 \* 854，540 \* 960，720 \* 1280，1080 \* 1920 等，还有传说中的 2k，4k 屏。
- 近年来，iPhone 的碎片化也加剧了，其设备的主要分辨率有：640 \* 960，640 \* 1136，750 \* 1334，1242 \* 2208 等。
- 作为开发者无需关注这些分辨率，因为我们常用的尺寸单位是 px。

#### 3. 常见移动端屏幕尺寸

| 设备                  | 尺寸（英寸） | 开发尺寸    | 物理像素比 |
| --------------------- | ------------ | ----------- | ---------- |
| iPhone3G              | 3.5          | 320 \* 480  | 1.0        |
| iPhone4/4s            | 3.5          | 320 \* 480  | 2.0        |
| iPhone5/5s/5c         | 4.0          | 320 \* 568  | 2.0        |
| HTC One M8            | 4.5          | 360 \* 640  | 3.0        |
| iPhone6               | 4.7          | 375 \* 667  | 2.0        |
| Nexus 4               | 4.7          | 384 \* 640  | 2.0        |
| Nexus 5x              | 5.2          | 411 \* 731  | 2.6        |
| iPhone6 Plus          | 5.5          | 414 \* 736  | 3.0        |
| Samsung Galaxy Note 4 | 5.7          | 480 \* 853  | 3.0        |
| Sony Xperia Z Ultra   | 6.4          | 540 \* 960  | 2.0        |
| Nexus 7('12)          | 7.0          | 600 \* 960  | 1.3        |
| iPad MiNi             | 7.9          | 768 \* 1024 | 1.0        |

::: warning 注意

作为前端开发，不建议大家去纠结 **dp，dpi，pt，ppi** 等单位。

:::

#### 4. 移动端调试方法

- Chrome DevTools（谷歌浏览器）的模拟手机调试
- 搭建本地 web 服务器，手机和服务器一个局域网内，通过手机访问服务器
- 使用外网服务器，直接 IP 或域名访问

#### 5. 总结

- 移动端浏览器我们主要对 webkit 内核进行兼容
- 我们现在开发的移动端主要针对手机端开发
- 现在移动端碎片化比较严重，分辨率和屏幕尺寸大小不一
- 学会用谷歌浏览器模拟手机界面以及调试

### 2. 视口

**视口（viewport）** 就是浏览器显示页面内容的屏幕区域。视口可以分为布局视口、视觉视口和理想视口

#### 1. 布局视口 **layout viewport**

- 一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的 PC 端页面在手机上显示的问题。
- iOS，Android 基本都将这个视口分辨率设置为 980px，所以 PC 上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。

#### 2. 视觉视口 **visual viewport**

- 字面意思，它是用户正在看到的网站的区域。**注意：是网站的区域。**
- 我们可以通过缩放去操作视口，但不会影响布局视口，布局视口扔保持原来的宽度。

#### 3. 理想视口 **ideal viewport**

- 为了使网站在移动端有最理想的浏览和阅读宽度而设定
- 理想视口，对设备来讲，是最理想的视口尺寸
- 需要通过写 meta 视口标签通知浏览器操作
- meta 视口标签的主要目的：布局视口的宽度应该与理想视口的高度一致，简单理解就是设备有多宽，我们布局的视口就多宽

#### 4. 总结

- 视口就是浏览器显示页面内容的屏幕区域
- 视口分为布局视口、视觉视口和理想视口
- 我们移动端布局想要的是理想视口就是手机屏幕有多宽，我们的布局视口就有多宽
- 想要理想视口，我们需要给我们的移动端页面添加 meta 视口标签

#### 5. meta 视口标签

```html
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0 ,maximum-scale=1.0"
/>
```

| 属性            | 解释说明                                                   |
| --------------- | ---------------------------------------------------------- |
| `width`         | 宽度设置的是 viewport 宽度，可以设置 `device-width` 特殊值 |
| `initial-scale` | 初始缩放比，大于 0 的数字                                  |
| `maximum-scale` | 最大缩放比，大于 0 的数字                                  |
| `minimum-scale` | 最小缩放比，大于 0 的数字                                  |
| `user-scalable` | 用户是否可以缩放，yes 或 no（1 或 0）                      |

#### 6. 标准的 viewport 设置

- 视口宽度和设备保持一致
- 视口的默认缩放比例 1.0
- 不允许用户自行缩放
- 最大允许的缩放比例 1.0
- 最小允许的缩放比例 1.0

### 3. 二倍图

#### 1. 物理像素&物理像素比

- 物理像素点的指的是显示的最小颗粒，是物理真实存在的。这是厂商在出产时就设置好了，比如苹果 6/7/8 是 750 \* 1334
- 我们开发时候的 1px 不是一定等于一个物理像素的
- PC 端页面，1 个 px 等于一个物理像素的，但是移动端不尽相同
- 一个 px 的能显示的物理像素点的个数，称为物理像素比或屏幕像素比
- PC 端 和 早前的手机屏幕/普通手机屏幕：1 CSS 像素 = 1 物理像素点
- Retina（视网膜屏幕）是一种显示技术，可以把更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率，并提高屏幕显示的细腻程度。

#### 2. 多倍图

- 对于一张 50px \* 50px 的图片，在手机 Retina 屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊
- 在标准的 viewport 设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题
- 通常使用二倍图，因为 iPhone 6/7/8 的影响，但是现在还存在 3 倍图 4 倍图的情况，这个看实际开发公司需求
- 背景图片 注意缩放问题

```css
/* 在 iPhone8 下面 */
img {
  /* 原始图片 100 * 100 */
  width: 50px;
  height: 50px;
}
.box {
  /* 原始图片 100 * 100 */
  background-size: 50px 50px;
}
```

#### 3. 背景缩放 background-size

background-size 属性规定背景图像的尺寸

```css
background-size: 背景图片宽度 背景图片高度;
```

- 单位：长度 | 百分比 | cover | contain;
- cover 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
- contain 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域

#### 4. 多倍图切图 cutterman

- @3 \* 3 倍图
- @2 \* 2 倍图
- @1 \* 1 倍图原图

### 4. 移动端开发选择

#### 1. 移动端主流方案

##### 1. 单独制作**移动端**页面（主流）

京东商城手机版

淘宝触屏版

苏宁易购手机版

……

##### 2. **响应式**页面兼容移动端（其次）

三星手机官网

……

#### 2. 单独移动端页面（主流）

通常情况下，网址域名前面加 **m(mobile)**可以打开移动端，通过判断设备，如果是移动设备打开，就跳转到**移动端页面**。

#### 3. 响应式兼容 PC 移动端

三星电子官网：[https://www.samsung.com/cn/](https://www.samsung.com/cn/)，通过判断屏幕宽度来改变样式，以适应不同终端。

缺点：**制作麻烦**，需要花很大精力去调**兼容性**问题

#### 4. 总结

现在市场常见的移动端开发有 单独制作移动端页面 和 响应式页面 两种方案

现在市场主流的选择还是单独制作移动端页面

### 5. 移动端技术解决方案

#### 1. 移动端浏览器

移动端浏览器基本以 webkit 内核为主，因此我们就考虑 webkit 兼容性问题。

我们可以放心使用 H5 标签和 CSS3 样式。

同时我们浏览器的私有前缀我们只需要考虑添加 webkit 即可

#### 2. CSS 初始化 **normalize.css**

移动端 CSS 初始化推荐使用 normalize.css

- Normalize.css：保护了有价值的默认值
- Normalize.css：修复了浏览器的 bug
- Normalize.css：是模块化的
- Normalize.css：拥有详细的文档

官网地址：[https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)

#### 3. CSS3 盒子模型**box-sizing**

- 传统模式宽度计算：盒子宽度 = CSS 中设置的 width + border + padding
- CSS3 盒子模型：盒子宽度 = CSS 中设置的宽度 width 里面包含了 border 和 padding

也就是说，我们的 CSS3 中的盒子模型，padding 和 border 不会撑大盒子了

```css
/* CSS3 盒子模型 */
box-sizing: border-box;
/* 传统盒子模型 */
box-sizing: content-box;
```

##### **传统 or CSS3 盒子模型？**

- 移动端可以全部 CSS3 盒子模型
- PC 端如果完全需要兼容，我们就用传统模式，如果不考虑兼容性，我们就选择 CSS3 盒子模型

#### 4. 特殊样式

```css
/* CSS3 盒子模型 */
box-sizing: border-box;
-webkit-box-sizing: border-box;
/* 点击高亮我们需要清除 设置为 transparent 完成透明 */
-webkit-tap-highlight-color: transparent;
/* 在移动端浏览器默认的外观在 iOS 上加上这个属性才能给按钮和输入框自定义样式 */
-webkit-appearance: none;
/* 禁用长按页面时的弹出菜单 */
img,
a {
  -webkit-touch-callout: none;
}
```

### 6. 移动端常见布局

#### 移动端技术选型

移动端布局和以前我们学习的 PC 端有所区别：

##### 1. 单独制作**移动端**页面（主流）

- 流式布局（百分比布局）
- flex 弹性布局（强烈推荐）
- less + rem + 媒体查询布局
- 混合布局

##### 2. **响应式**页面兼容移动端（其次）

- 媒体查询
- bootstarp

#### 1. 流式布局（百分比布局）

- 流式布局，就是百分比布局，也称非固定像素布局。
- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。
- 流式布局方式是移动 web 开发使用的比较常见的布局方式。
- max-width 最大宽度（max-height 最大高度）
- min-height 最小宽度（min-height 最小高度）

#### **案例：京东移动端首页**

##### 1. 技术选型

方案：我们采取单独制作移动页面方案

技术：布局采用流式布局

##### 2. 搭建相关文件夹结构

| 名称       |
| ---------- |
| css        |
| images     |
| upload     |
| index.html |

##### 3. 设置视口标签以及引入初始化样式

```html
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0 ,maximum-scale=1.0"
/>

<link rel="stylesheet" href="css/normalize.css" />
<link rel="stylesheet" href="css/index.css" />
```

##### 4. 常用初始化样式

```css
body {
  margin: 0 auto;
  min-width: 320px;
  max-width: 640px;
  background: #fff;
  font-size: 14px;
  font-family: -apple-system, Helvetic, sans-serif;
  line-height: 1.5;
  color: #666;
}
```

##### 5. 二倍图精灵图做法

- firework 里面把精灵图等比例缩放为原来的一半
- 之后根据大小 测量坐标
- 注意代码里面 background-size 也要写：精灵图原来宽度的一半

##### 6. 图片格式

###### DPG 图片压缩技术

京东自主研发推出 DPG 图片压缩技术，经测试该技术，可直接节省用户近 50% 的浏览流量，极大的提升了用户的网页打开速度。能够兼容 jpeg，实现全平台、全部浏览器的兼容支持，经过内部和外部上万张图片的人眼浏览测试后发现，压缩后的图片和 webp 的清晰度对比没有差距。

###### webbp 图片格式

谷歌开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有 JPEG 的 2/3，并能节省大量的服务器宽带资源和数据空间

## 2. flex 布局

### 目标

- 能够说出 flex 盒子的布局原理
- 能够使用 flex 布局的常用属性
- 能够独立完成携程移动端首页案例

### 1. flex 布局体验

#### 1. 传统布局与 flex 布局

##### 传统布局

- 兼容性好
- 布局繁琐
- 局限性，不能再移动端很好的布局

##### flex 弹性布局

- 操作方便，布局极为简单，移动端应用很广泛
- PC 端浏览器支持情况较差
- IE 11 或更低版本，不支持或仅部分支持

::: tip 提示

1. 如果是 PC 端页面布局，我们还是传统布局。
2. 如果是移动端或者不考虑兼容性问题的 PC 端页面布局，我们还是使用 flex 弹性布局

:::

#### 2. 初体验

##### 1. 搭建 HTML 结构

```html
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</div>
```

### 2. flex 布局原理

#### 1. 布局原理

flex 是 flexible Box 的缩写，意为“弹性布局“，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。

- 当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效
- 伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 = flex 布局

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称“容器”，它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称“项目”。

- 体验中 div 就是 flex 父容器
- 体验中 span 就是子容器 flex 项目
- 子容器可以横向排列也可以纵向排列

#### **总结 flex 布局原理：**

**就是通过给父盒子添加 flex 属性，来控制子盒子的位置和排列方式。**

### 3. flex 布局父项常见属性

#### 1. 常见父项属性

以下由 6 个属性是相对父元素设置的

- flex-direction：设置主轴的方向
- justify-content：设置主轴上的子元素排列方式
- flex-wrap：设置子元素是否换行
- align-content：设置侧轴上的子元素的排列方式（多行）
- align-items：设置侧轴上的子元素排列方式（单行）
- flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

#### 2. **flex-direction** 设置主轴的方向

##### 1. 主轴与侧轴

在 flex 布局中，是分为主轴和侧轴两个方向，同样的叫法有：行和列、x 轴和 y 轴

- 默认主轴的方向就是 x 轴方向，水平向右
- 默认侧轴的方向就是 y 轴方向，水平向下

##### 2. 属性值

flex-direction 属性决定主轴的方向（即项目的排列方向）

::: warning 注意

主轴和侧轴是会变化的，就看 flex-direction 设置谁为主轴，剩下的就是侧轴。而我们的子元素是跟着主轴来排列的

:::

|      属性值      | 说明               |
| :--------------: | ------------------ |
|      `row`       | **默认值从左到右** |
|  `row-reverse`   | 从右到左           |
|     `column`     | **从上到下**       |
| `column-reverse` | 从下到上           |

#### 3. **justify-content** 设置主轴上的子元素排列方式

justify-content 属性定义了项目在主轴上的对齐方式

::: warning 注意

**使用这个属性之前一定要确定好主轴是哪个**

:::

|     属性值      | 说明                                              |
| :-------------: | ------------------------------------------------- |
|  `flex-start`   | **默认值 从头部开始 如果主轴是 x 轴，则从左到右** |
|   `flex-end`    | 从尾部开始排列                                    |
|    `center`     | **在主轴居中对齐（如果主轴是 x 轴则 水平居中）**  |
| `space-around`  | **平分剩余空间**                                  |
| `space-between` | **先两边贴边 再平分剩余空间（重要）**             |

#### 4. **flex-wrap** 设置子元素是否换行

默认情况下，项目都排在一条线（又称“轴线”）上，flex-wrap 属性定义，flex 布局中默认是不换行的。

| 属性值   | 说明           |
| -------- | -------------- |
| `nowrap` | 默认值，不换行 |
| `wrap`   | **换行**       |

#### 5. **align-items** 设置侧轴上的元素排列方式（单行）

该属性是控制子项在侧轴（默认是 y 轴）上的排列方式 在子项为单项的时候使用

|    属性值    | 说明                         |
| :----------: | ---------------------------- |
| `flex-start` | **从上到下**                 |
|  `flex-end`  | 从下到上                     |
|   `center`   | **挤在一起居中（垂直居中）** |
|  `stretch`   | **拉伸（默认值）**           |

#### 6. **align-content** 设置侧轴上的子元素的排列方式（多行）

设置子元素在侧轴上的排列方式 并且只能用于子项出现**换行**的情况（多行），在单行下是没有效果的。

|     属性值      | 说明                                       |
| :-------------: | ------------------------------------------ |
|  `flex-start`   | **默认值在侧轴的头部开始排列**             |
|   `flex-end`    | 在侧轴的尾部开始排列                       |
|    `center`     | **在侧轴中间显示**                         |
| `space-around`  | **子项在侧轴平分剩余空间**                 |
| `space-between` | **子项在侧轴先分布在两头，再平分剩余空间** |
|    `stretch`    | **设置子项元素高度平分父元素高度**         |

#### 6. **align-content 和 align-items 的区别**

- align-items 适用于单行情况下，只有上对齐、下对齐、居中和拉伸
- align-content 适用于**换行**（多行）的情况下（单行情况下无效），可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。
- 总结就是单行找 align-items 多行找 align-content

#### 7. flex-flow

flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性

```css
flex-flow: row wrap;
```

- flex-direction：设置主轴方向
- justify-content：设置主轴上的子元素排列方式
- flex-wrap：设置子元素是否换行
- align-content：设置侧轴上的子元素的排列方式（多行）
- align-items：设置侧轴上的子元素排列方式（单行）
- flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

### 4. flex 布局子项常见属性

- flex 子项目占的份数
- align-self 控制子项目自己在侧轴的排列方式
- order 属性定义子项的排列顺序（前后顺序）

#### 1. flex 属性

flex 属性定义子项目分配剩余空间，用 flex 来表示占多少**份数**。

```css
.item {
  flex: <number>; /* default 0 */
}
```

#### 2. **align-self** 控制子项自己在侧轴上的排列方式

align-self 属性允许单个项目与其他项目不一样的对齐方式，可覆盖 align-items 属性。

默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```css
span:nth-child(2) {
  /* 设置自己在侧轴上的排列方式 */
  align-self: flex-end;
}
```

#### 3. **order** 属性定义项目的排列顺序

数值越小，排列越靠前，默认为 0。

注意：和 z-index 不一样。

### 5. 携程网首页案例制作

#### **案例：携程网移动端首页**

访问网址：[https://m.ctrip.com/](https://m.ctrip.com/)

#### 1. 技术选型

方案：我们采取单独制作移动端页面方案

技术：布局采取 flex 布局

#### 2. 搭建相关文件夹结构

| 名称       |
| ---------- |
| css        |
| images     |
| upload     |
| index.html |

#### 3. 设置视口标签以及引入初始化样式

```html
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0 ,maximum-scale=1.0"
/>

<link rel="stylesheet" href="css/normalize.css" />
<link rel="stylesheet" href="css/index.css" />
```

#### 4. 常用初始化样式

```css
body {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, 'Lucida Grande', Verdana, 'Microsoft Yahei', STXihei,
    hei;
  color: #000;
  background: #f2f2f2;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}
```

#### 5. 常见模块名

- search-index
- focus
- local-nav
- nav
- subnav-entry

#### 6. 常见 flex 布局思路

1. 默认主轴是 X 轴
2. 把主轴设为 Y 轴
3. 把主轴设为居中对齐

#### 7. 背景线性渐变

<div style="margin-top: 1rem; height: 20px; background: -webkit-linear-gradient(left, red, blue);"></div>

##### 语法

```css
background: linear-gradient(起始方向, 颜色1, 颜色2, ...);
background: -webkit-linear-gradient(left, red, blue);
background: -webkit-linear-gradient(left top, red, blue);
```

背景渐变必须添加浏览器私有前缀

起始方向可以是：方位名词 或者 度数，如果省略默认就是 top

## 3. rem 适配布局

### 目标

- 能够使用 rem 定位单位
- 能够使用媒体查询的基本语法
- 能够使用 Less 的基本语法
- 能够使用 Less 中的嵌套
- 能够使用 Less 中的运算
- 能够使用 2 种 rem 适配方案
- 能够独立完成苏宁移动端首页

### 思考

#### 方案？

1. 页面布局文字能否随着屏幕大小变化而变化？
2. 流式布局和 flex 布局主要针对于宽度布局，那高度如何设置？
3. 怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？

### 1. rem 基础

#### rem 单位

rem（root em）是一个相对单位，类似于 em，em 是父元素字体大小。

不同的是**rem**的基准**是**相对于 html 元素的**字体大小**。

比如，根元素（html）设置 font-size = 12px; 非根元素设置 width: 2rem; 则换成 px 表示就是 24px。

### 2. 媒体查询

#### 1. 什么是媒体查询

媒体查询（**Media Query**）是 CSS3 新语法。

- 使用 @media 查询，可以针对不同的媒体类型定义不同的样式
- **`@media` 可以针对不同的屏幕尺寸设置不同的样式**
- 当你重置浏览器大小的过程中，页面也会根据浏览器的高度和高度重新渲染页面
- 目前针对很多苹果手机、Android 手机、平板等设备都用得到多媒体查询

#### 2. 语法规范

```css
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

- 用 @media 开头 注意 @ 符号
- mediatype 媒体类型
- 关键字 and not only
- media feature 媒体特性 必须有小括号包含

##### 1. mediatype 查询类型

将不同的终端设备划分成不同的类型，称为媒体类型

|   值    | 解释说明                               |
| :-----: | -------------------------------------- |
|  `all`  | 用于所有设备                           |
| `print` | 用于打印机和打印机预览                 |
| `scree` | **用于电脑屏幕，平板电脑，智能手机等** |

##### 2. 关键字

关键字将媒体类型或多个媒体特性连接到一起作为媒体查询的条件。

- and：可以将多个媒体特性连接到一起，相当于“且”的意思。
- not：排除某个媒体类型，相当于“非”的意思，可以省略。
- only：指定某个特定的媒体类型，可以省略。

##### 3. 媒体特性

每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。

::: warning 注意

它们要加小括号包含

:::

|     值     | 解释说明                           |
| :--------: | ---------------------------------- |
|   width    | 定义输出设备中页面可见区域的宽度   |
| min-height | 定义输出设备中页面最小可见区域宽度 |
| max-width  | 定义输出设备中页面最大可见区域宽度 |

#### 3. 媒体查询 + rem 实现元素动态大小变化

rem 单位是跟着 html 来走的，有了 rem 页面元素可以设置不同大小尺寸

媒体查询可以根据不同设备宽度来修改样式

媒体查询 + rem 就可以实现不同设备宽度，实现页面元素大小的动态变化

#### 4. 引入资源（理解）

当样式比较繁多的时候，我们可以针对不同的媒体使用不同的 stylesheets（样式表）。

原理，就是直接在 link 中判断设备的尺寸，然后引用不同的 css 文件。

##### 1. 语法规范

```html
<link
  rel="stylesheet"
  media="mediatype and|not|only(media feature)"
  href="mystylesheet.css"
/>
```

::: tip 提示

媒体查询最好的方法是从小到大

:::

### 3. Less 基础

#### 1. 维护 css 的弊端

CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。

- CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的。
- 不方便维护及扩展，不利于复用。
- CSS 没有很好的计算能力
- 非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目。

#### 2. Less 介绍

Less（Leaner Style Sheets 的缩写）是一门 CSS 扩展语言，也称为 CSS 预处理器。

作为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为 CSS 加入程序式语言的特性。

它在 CSS 语法的基础上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS 的维护成本，就像它的名称所说的那样，Less 可以让我们用更少的代码做更多的事情。

Less 中文网址：[http://lesscss.cn/](http://lesscss.cn/)

常见的 CSS 预处理器：Sass、Less、Stylus

#### 3. Less 使用

我们首先创建一个后缀名为 less 的文件，在这个 less 文件里面书写 less 语句。

- Less 变量
- Less 编译
- Less 嵌套
- Less 运算

#### 4. Less 变量

变量是指没有固定的值，可以改变的。因为我们 CSS 中的一些颜色和数值等经常使用。

```less
@变量名: 值;
```

##### 1. 变量名命名规范

- 必须有 @ 作为前缀
- 不能包含特殊字符
- 不能以数字开头
- 大小写敏感

#### 5. Less 编译

本质上，Less 包含一套自定义的语法以及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。

所以，我们需要把我们的 less 文件，编译称为 css 文件，这样，我们的 html 页面才能使用。

##### vscode Less 插件

Easy Less 插件用来把 less 文件编译为 css 文件

安装完毕插件，重新加载下 vscode。

只需要保存一下 Less 文件，会自动生成 CSS 文件。

#### 6. Less 嵌套

```css
#header .logo {
  width: 300px;
}
```

##### Less 写法

```less
#header {
  .logo {
    width: 300px;
  }
}
```

如果遇见（交集|伪类|伪元素选择器）

- 内层选择器的前面没有&符号，则它被解析为父选择器的后代；
- 如果有&符号，它就被解析为父元素自身或父元素的伪类。

```css
a:hover {
  color: red;
}
```

##### Less 写法

```less
a {
  &:hover {
    color: red;
  }
}
```

#### 7. Less 运算

任何数字、颜色或者变量都可以参与运算。就是 Less 提供了加（ + ）、减（ - ）、乘（ \* ）、除（ / ）算术运算。

```less
/* Less 里面写 */
@width: 10px + 5;
div {
  border: @width solid red;
}
/* 生成的css */
div {
  border: 15px solid red;
}
/* Less 甚至还可以这样 */
width: (@width + 5) * 2;
```

##### **注意：**

- 乘号（**\***）和除号（**/**）的写法
- **运算符中间左右有个空格隔开 1px + 5**
- 对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位
- 如果两个值之间只有一个值有单位，则运算结果就取该单位

### 4. rem 适配方案

#### 思考

##### rem 适配方案

1. 我们适配的目标是什么？
2. 怎么去达到这个目标的？
3. 在实际的开发当中使用？

#### 答案

##### rem 适配方案

1. 让一些不能等比自适应的元素，达到当设备尺寸发生改变的时候，等比例适配当前设备。

2. 使用媒体查询根据不同设备按比例设置 html 的字体大小，

   然后页面元素使用 rem 做尺寸单位，当 html 字体大小变化

   元素尺寸也会发生变化，从而达到等比缩放的适配。

#### 1. rem 实际开发适配方案

1. 按照设计稿与设备宽度的比例，动态计算并设置 html 根标签的 font-size 大小；（媒体查询）
2. CSS 中，设计稿元素的宽、高、相对位置等取值，按照同比例换算为 rem 为单位的值；

#### 2. rem 适配方案技术使用（市场主流）

##### 技术方案 1

- less
- 媒体查询
- rem

##### 技术方案 2（推荐）

- flexible.js
- rem

总结：

1. 两种方案现在都存在。
2. 方案 2 更简单，现阶段大家无需了解里面的 js 代码。

#### 3. rem 实际开发适配方案 1

rem + 媒体查询 + less 技术

##### 1. 设计稿常见尺寸宽度

|      设备      | 常见宽度                                                                                        |
| :------------: | ----------------------------------------------------------------------------------------------- |
|   iPhone 4.5   | 640px                                                                                           |
| **iPhone 678** | **750px**                                                                                       |
|    Android     | 常见 320px、360px、375px、384px、400px、500px、720px<br />**大部分 4.7~5 寸的安卓设备为 720px** |

一般情况下，我们一套或两套效果图适应大部分的屏幕，放弃极端屏或对其优雅降级，牺牲一些效果

**现在基本以 750 为准。**

##### 2. 动态设置 html 标签 font-size 大小

1. 假设设计稿是 750px
2. 假设我们把整个屏幕划分为 15 等份（划分标准不一可以是 20 份也可以是 10 等份）
3. 每一份作为 html 字体大小，这里就是 50px
4. 那么在 320px 设备的时候，字体大小为 320/15 就是 21.33px
5. 用我们页面元素的大小除以不同的 html 字体大小会发现他们比例还是相同的
6. 比如我们以 750 为标准设计稿
7. 一个 100*100 像素的页面元素在 750 屏幕下，就是 100/50 转换为 rem 是 2rem* 2 rem 比例是 1 比 1
8. 320 屏幕下，html 字体大小为 21.33 则 2rem = 42.66px 此时宽和高都是 42.66 但是宽和高的比例还是 1 比 1
9. 但是已经能实现不同屏幕下 页面元素盒子等比例缩放的效果

##### 3. 元素大小取值方法

1. 最后的公式：页面元素的 rem 值 = 页面元素值（px）/（屏幕宽度 / 划分的份数）
2. 屏幕宽度 / 划分的份数 就是 html font-size 的大小
3. 或者：页面元素的 rem 值 = 页面元素值（px）/ html font-size 字体大小

### 5. 苏宁首页案例制作

#### **案例：苏宁网移动端首页**

访问地址：[https://m.suning.com/](https://m.suning.com/)

#### 1. 技术选型

方案：我们采取单独制作移动页面方案

技术：布局采取 rem 适配布局（less + rem + 媒体查询）

设计图：本设计图采用 750px 设计尺寸

#### 2. 搭建相关文件夹结构

| 名称       |
| ---------- |
| css        |
| images     |
| upload     |
| index.html |

#### 3. 设置视口标签以及引入初始化样式

```html
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0 ,maximum-scale=1.0"
/>

<link rel="stylesheet" href="css/normalize.css" />
```

#### 4. 设置公共 common.less 文件

1. 新建 common.less 设置好最常见的屏幕尺寸，利用媒体查询设置不同的 html 字体大小，因为除了首页其他页面也需要
2. 我们关心的尺寸有 320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px
3. 划分的份数我们定为 15 等份
4. 因为我们 pc 端也可以打开我们苏宁移动端首页我们默认 html 字体大小为 50px，**注意这句话写到最上面**

#### 5. 新建 index.less 文件

1. 新建 index.less 这里面写首页的样式
2. 将刚才设置好的 common.less 引入到 index.less 里面语法如下：

   ```less
   // 在 index.less 中导入 common.less 文件
   @import 'common';
   ```

3. 生成 index.css 引入到 index.html 里面

#### 6. body 样式

```less
body {
  min-width: 320px;
  with: 15rem;
  margin: 0 auto;
  line-height: 1.5;
  font-family: Arial, Helvatica;
  background: #f2f2f2;
}
```

### 6. rem 适配方案 2

#### 1. 简介高效的 rem 适配方案 flexible.js

手机淘宝团队出的简洁高效的移动端适配库

我们再也不需要再写不同屏幕的媒体查询，因为里面 js 做了处理

它的原理是把当前设备划分为 10 等份，但是不同设备下，比例还是一致的。

我们要做的，就是确定好我们当前设备的 html 文字大小就可以了

比如当前的设计稿是 750px，那么我们只需要把 html 文字大小设置为 75px（750px / 10）就可以

里面页面元素 rem 值：页面元素的 px 值 / 75

剩余的，让 flexible.js 来去算

GitHub 地址：[https://github.com/amfe/lib-flexible](https://github.com/amfe/lib-flexible)

#### 2. 使用适配方案 2 制作苏宁移动端首页

##### 1. 技术选型

方案：我们采取单独制作移动页面方案

技术：布局采取 rem 适配布局 2（flexible.js + rem）

设计图：本设计图采用 750px 设计尺寸

##### 2. 搭建相关文件夹结构

| 名称       |
| ---------- |
| css        |
| images     |
| js         |
| upload     |
| index.html |

##### 3. 设置视口标签以及引入初始化样式

```html
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0 ,maximum-scale=1.0"
/>

<link rel="stylesheet" href="css/normalize.css" />
<link rel="stylesheet" href="css/index.css" />
```

我们页面需要引入这个 js 文件

```html
在 index.html 中引入 flexible.js 这个文件
<script src="js/flexible.js"></script>
```

##### 4. body 样式

```less
body {
  min-width: 320px;
  max-height: 750px;
  with: 10rem;
  margin: 0 auto;
  line-height: 1.5;
  font-family: Arial, Helvatica;
  background: #f2f2f2;
}
```

#### 3. VSCode px 转换 rem 插件 **cssrem**

这是一个神奇的插件

设置 html 字体大小基准值

1. 打开 设置 快捷键是 Ctrl + 逗号

2. 打开 settings.json 加入以下配置项：

```json
"cssrem.rootFontSize": 75
```

## 4. 黑马面面移动页面布局

### 1. 目的

1. 了解移动端页面开发流程
2. 掌握移动端常见布局思路

#### 1. 技术方案

1. 弹性盒子 + **rem** + **LESS**
2. 最小适配设备为 **iphone5** 320px 最大设配设备为 **iphone8 plus**(**ipad** 能正常查看内容即可)

#### 2. 代码规范

1. 类名语义化，尽量精短、明确，必须以字母开头命名，且全部字母为小写，单词之间统一使用下划线“\_” 连接

2. 类名嵌套层次尽量不超过三层

3. 尽量避免直接使用元素选择器

4. 属性书写顺序

   布局定位属性：`display` / `position` / `float` / `clear` / `visibility` / `overflow`

   尺寸属性：`width` / `height` / `margin` / `padding` / `border` / `background`

   文本属性：`color` / `font` / `text-decoration` / `text-align` / `vertical-align`

   其他属性（CSS3）：`content` / `cursor` / `border-radius` / `box-shadow` / `text-shadow`

5. 避免使用 id 选择器

6. 避免使用通配符 `*` 和 `!important`

#### 3. 目录规范

| 说明             | 名称    |
| ---------------- | ------- |
| 项目文件夹       | heimamm |
| 样式文件夹       | css     |
| 业务类图片文件夹 | images  |
| 样式类图片文件夹 | icons   |
| 字体类文件夹     | fonts   |

### 2. 流程开发

#### 1. 蓝湖/摹客协作平台

- UI 设计师 psd 效果图完成后，会上传到蓝湖/摹客里面，同时会拉前端工程师进入开发
- 大部分情况下，UI 会把图片按照前端设计要求给切好
- UI 设计师 上传蓝湖到或者/摹客（了解）

  1. 摹客官网地址：[https://www.mockplus.cn/](https://www.mockplus.cn/)注册一个账号
  2. 下载 moke ps 插件
  3. PS 安装/摹客/蓝湖插件
  4. 打开 PS/摹客/蓝湖插件
  5. 上传（需要切图，需要先标注切图）
  6. 查看项目
  7. 邀请成员进入（分享按钮，链接地址）

- 前端设计师可以直接/摹客/蓝湖测量取值

#### 2. 适配方案

- flex 布局
- 百分比布局
- rem 布局
- vw/vh 布局
- 响应式布局
- 本次案例 flex + rem + flexible.js + LESS

#### 3. 初始化文件

- 引入 normalize.css
- less 中 初始化 body 样式
- 约束范围

```css
@media screen and (min-width: 750px) {
  html {
    font-size: 37.5px !important;
  }
}
```

#### 4. 布局模块

1. 头部模块 .header 高度为 80px
2. nav 模块制作 多用 flex
3. 充电学习 阴影

```css
box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
```

#### 5. swiper 插件使用

官网地址：[https://www.swiper.com.cn/](https://www.swiper.com.cn/)

- 下载需要的 css 和 js 文件 html 页面中 引入相关文件
- 官网找到类似案例，复制 html 结构，css 样式 js 语法
- 根据需求定制修改模块

#### 6. 图标字体上传下载

上传步骤：

1. 让 UI 美工准备好 图标字体（必须是 svg 格式）

2. 点上传按钮（保留颜色并提交）

3. 生成之后加入购物车即可

4. 点击下载 --- 下载代码

小技巧： 如何批量下载全部字体图标呢？

```javascript
var span = document.querySelectorAll('.icon-cover')
for (var i = 0, len = span.length; i < len; i++) {
  console.log(span[i].querySelector('span').click())
}
```

#### 7. 上传码云并发布部署静态网站

准备工作：需要下载 git 软件 需要码云注册账号

git 可以把我们的本地网站提交上传到远程仓库（码云 gitee）里面 类似以前的 ftp

码云 就是远程仓库， 类似服务器

1. 码云创建新的仓库。 heimamm

2. 利用 git 提交 把本地网站提交到 码云新建的仓库里面

   - 在网站根目录右键-- Git Bash Here

   - 如果是第一次利用 git 提交，请配置好全局选项

   ```bash
   git config --global user.name "用户名"
   git config --global user.email "你的邮箱地址"
   ```

   - 初始化仓库

   ```bash
   git init
   ```

   - 把本地文件放到暂存区

   ```bash
   git add .
   ```

   - 把本地文件放到本地仓库里面

   ```bash
   git commit -m '提交黑马面面网站'
   ```

   - 链接远程仓库

   ```bash
   git remote add origin 你新建的仓库地址
   ```

   - 把本地仓库的文件推送到远程仓库 push

   ```bash
   git push -u origin master
   ```

3. 码云部署发布静态网站

   - 在当前仓库中，点击“服务”菜单

   - 选择 Gitee Pages

   - 选择“启动”按钮

   - 稍等之后，会拿到地址，就可以利用这个地址来预览网页了

   - 当然你也可以利用 草料二维码 生成二维码[https://cli.im/](https://cli.im/)

最后：如果提交网站，你不愿意用 git 提交，可以直接找到仓库，里面有文件，选择上传本地文件即可。

但是，1 个小时内，只能上传 20 个以内的文件， 前端人员，git 必备技能

## 5. 响应式布局

### 目标

- 能够说出响应式原理
- 能够使用媒体查询完成响应式导航
- 能够使用 bootstrap 的栅格系统
- 能够使用 bootstrap 的响应式工具
- 能够独立完成阿里百秀首页案例

### 1. 响应式开发

#### 1. 响应式开发原理

就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。

| 设备划分                 | 尺寸区间            |
| ------------------------ | ------------------- |
| 超小屏幕（手机）         | < 768px             |
| 小屏设备（平板）         | >= 768px ~ < 992px  |
| 中等屏幕（桌面显示器）   | >= 992px ~ < 1200px |
| 宽屏设备（大桌面显示器） | >= 1200px           |

#### 2. 响应式布局容器

响应式需要一个父级作为布局容器，来配合子集元素来实现变化效果。

原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。

#### 平时我们的响应式尺寸划分

- 超小屏幕（手机，小于 768px）：设置宽度为 100%
- 小屏幕（平板，大于等于 768px）：设置宽度为 750px
- 中等屏幕（桌面显示器，大于等于 992px）：设置宽度为 970px
- 大屏幕（大桌面显示器，大于等于 1200px）：宽度设置为 1170px

但是我们也可以根据实际情况自己定义划分

#### **案例：响应式导航栏**

##### **案例：需求分析**

1. 当我们屏幕大于等于 768 像素，我们给布局容器 container 宽度为 750px。
2. container 里面包含 8 个小 li 盒子，每个盒子的宽度定为 93.75px（750 / 8），高度为 30px，浮动一行显示。
3. 当我们屏幕缩放，宽度小于 758 像素的时候，container 盒子宽度修改为 100% 宽度。
4. 此时里面的 8 个小 li，宽度修改为 33.3%，这样一行就只能显示 3 个小 li，剩余下行显示。

### 2. Bootstrap 前端开发框架

Bootstrap 来自 Twitter（推特），是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS 和 JavaScript 的，它简介灵活，**使得 Web 开发更加快捷**。

- 中文官网：[https://www.bootcss.com/](https://www.bootcss.com/)
- 官网：[https://getbootstrap.com/](https://getbootstrap.com/)

**框架**：顾名思义就是一套架构，它有一套比较完整的网页功能解决方案，而且控制器在框架本身，有预制样式库、组件和插件。使用者要按照框架所规定的某种规范进行开发。

#### 1. Bootstrap 简介

##### 1. 优点

- 标准化的 html + css 编码规范
- 提供了一套简洁、直观、强悍的组件
- 有自己的生态圈，不断地更新迭代
- 让开发更简单，提高了开发的效率

##### 2. 版本

- 2.x.x：停止维护，兼容性好，代码不够简洁，功能不够完善。
- 3.x.x：目前使用最多，稳定，但是放弃了 IE6-IE7。对 IE8 支持但是界面效果不好，偏向用于开发响应式布局、**移动设备优先的 WEB 项目**。
- 4.x.x：最新版，目前还不是很流行

#### 2. Bootstrap 使用

在现阶段我们还没有接触 JS 相关课程，所以我们只考虑使用它的样式库。

**控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。**

Bootstrap 使用四步曲：

1. 创建文件夹结构
2. 创建 html 骨架结构
3. 引入相关样式
4. 书写内容

##### 1. 创建文件夹结构

| 名称       |
| ---------- |
| bootstrap  |
| css        |
| images     |
| index.html |

##### 2. 创建 html 骨架结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
      crossorigin="anonymous"
    />

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script
      src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"
      integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ"
      crossorigin="anonymous"
    ></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
      integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

##### 3. 引入相关样式文件

```html
<!-- Bootstrap 核心样式 -->
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
```

##### 4. 书写内容

- 直接拿 Bootstrap 预先定义好的样式来使用
- 修改 Bootstrap 原来的样式，注意权重问题
- 学好 Bootstrap 的关键在于知道**它定义了哪些样式，以及这些样式能实现什么样的效果**

#### 3. 布局容器

Bootstrap 需要为页面内容和栅格系统包裹包裹一个 .container 容器，Bootstrap **预**先**定义**好了这个**类**，叫 .container

它提供了两个作此用处的类。

##### **1. container 类**

- 响应式布局的容器 固定宽度
- 大屏（>= 1200px）宽度定为 1170px
- 中屏（>= 992px）宽度定为 970px
- 小屏（>= 768px）宽度定为 750px
- 超小屏（100%）

##### **2.container-fluid 类**

- 流式布局容器 百分百宽度
- 占据全部视口（viewport）的容器。
- 适合于单独做移动端开发

### 3. Bootstrap 栅格系统

#### 1. 栅格系统简介

**栅格系统**英文为“grid systems”，也有人翻译为“网格系统”，它是指将页面布局划分为等宽的列，然后通过列数的定义来模块化页面布局。

Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕视口（viewport）尺寸的增加，系统会自动分为最多 **12 列**。

Bootstrap 里面 container 宽度是固定的，但是不同屏幕下，container 的宽度不同，我们再把 container 划分为 12 等份

#### 2. 栅格选项参数

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

<table>
    <thead>
        <tr>
            <th></th>
            <th>
                超小屏幕
                <small>手机 (>768px)</small>
            </th>
            <th>
                小屏幕
                <small>平板 (≥768px)</small>
            </th>
            <th>
                中等屏幕
                <small>桌面显示器 (≥992px)</small>
            </th>
            <th>
                大屏幕
                <small>大桌面显示器 (≥1200px)</small>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>栅格系统行为</th>
            <td>总是水平排列</td>
            <td colspan="3">开始是堆叠在一起的，当大于这些阈值时将变为水平排列C</td>
        </tr>
        <tr>
            <th><code>.container</code> 最大宽度</th>
            <td>None （自动）</td>
            <td>750px</td>
            <td>970px</td>
            <td>1170px</td>
        </tr>
        <tr>
            <th>类前缀</th>
            <td><code>.col-xs-</code></td>
            <td><code>.col-sm-</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
        </tr>
        <tr>
            <th>列（column）数</th>
            <td colspan="4">12</td>
        </tr>
        <tr>
            <th>最大列（column）宽</th>
            <td>自动</td>
            <td>~62px</td>
            <td>~81px</td>
            <td>~97px</td>
        </tr>
        <tr>
            <th>槽（gutter）宽</th>
            <td colspan="4">30px （每列左右均有 15px）</td>
        </tr>
        <tr>
            <th>可嵌套</th>
            <td colspan="4">是</td>
        </tr>
        <tr>
            <th>偏移（Offsets）</th>
            <td colspan="4">是</td>
        </tr>
        <tr>
            <th>列排序</th>
            <td colspan="4">是</td>
        </tr>
    </tbody>
</table>

- 行（row）必须放到 container 布局容器里面
- 我们实现列的平均划分 需要给列添加**类前缀**
- xs-extra small：超小；sm-small：小；md-medium：中等；lg-large：大；
- 列（column）大于 12，多余的“列（column）”所在的元素被作为一个整体另起一行排列
- 每一列默认有左右 15 像素的 padding
- 可以同时为一列指定多个设备的类名，以便划分不同的份数 例如 class="col-md-4 col-sm-6"

#### 3. 列嵌套

栅格系统内置的栅格系统将内容再次嵌套。简单理解就是一个列内再分成若干份小列。我们可以通过添加一个新的 .row 元素和一列新的 .col-sm-\* 元素到已经存在的 .col-sm-\* 元素内。

我们列嵌套最好加 1 个行 row 这样可以取消父元素的 padding 值 而且高度自动和父级一样高

```html
<!-- 列嵌套 -->
<div class="col-sm-4">
  <div class="row">
    <div class="col-sm-6">小列</div>
    <div class="col-sm-6">小列</div>
  </div>
</div>
```

#### 4. 列偏移

使用 .col-md-offset-\* 类可以将列向右偏移。这些类实际是通过使用 \* 选择器为当前元素增加了左侧的边距（margin）。

```html
<!-- 列偏移 -->
<div class="row">
  <div class="col-lg-4">1</div>
  <div class="col-lg-4 col-lg-offset-4">2</div>
</div>
```

#### 5. 列排序

通过使用 .col-md-push-\* 和 .col-md-pull-\* 类就可以很容易地改变列（column）的顺序。

```html
<!-- 排序 -->
<div class="row">
  <div class="col-lg-4 col-lg-push-8">左侧</div>
  <div class="col-lg-8 col-lg-push-4">右侧</div>
</div>
```

#### 6. 响应式工具

为了加快对移动设备有好的页面开发工作，利用媒体查询功能，并使用这些工具可以方便针对不同设备展示或隐藏页面内容。

| 类名         | 超小屏 | 小屏 | 中屏 | 大屏 |
| ------------ | :----: | :--: | :--: | :--: |
| `.hidden-xs` |  隐藏  | 可见 | 可见 | 可见 |
| `.hidden-sm` |  可见  | 隐藏 | 可见 | 可见 |
| `.hidden-md` |  可见  | 可见 | 隐藏 | 可见 |
| `.hidden-lg` |  可见  | 可见 | 可见 | 隐藏 |

与之相反的，是 visible-xs visible-sm visible-md visible-lg 是显示某个页面内容

Bootstrap 其他（按钮、表单、表格）请参考 **Bootstrap 文档**。

### 4. 阿里百秀首页案例

#### **案例：阿里百秀移动端首页**

##### 技术选型

方案：我们采取响应式页面开发方案

技术：bootstrap 框架

设计图：本设计图采用 1280px 设计尺寸

#### **案例：需求分析**

##### 1. 页面布局分析

##### 2. 屏幕划分分析

1. 屏幕缩放发现 中屏幕 和 大屏幕 布局是一致的。因此我们列定义为 col-md- 就可以了，md 是大于等于 970 以上的
2. 屏幕缩放发现 小屏幕 布局发生变化，因此我们需要为 小屏幕 根据需求改变布局
3. 屏幕缩放发现 超小屏幕 布局又发生变化，因此我们需要为 超小屏幕 根据需求改变布局
4. 策略︰我们先布局 md 以上的 pc 端布局，最后根据实际需求在修改 小屏幕 和 超小屏幕 的特殊布局样式

#### **案例：页面制作**

Bootstrap 使用四步曲：

1. 创建文件夹结构
2. 创建 html 骨架结构
3. 引入相关样式
4. 书写内容

| 名称       |
| ---------- |
| bootstrap  |
| css        |
| images     |
| index.html |

##### container 宽度修改

因为本效果图采取 1280 宽度，而 Bootstrap 里面 container 宽度 最大为 1170px，因此我们需要手动修改下 container 宽度

### 5. 移动端布局总结

#### 1. 移动端主流方案

##### 1. 单独制作**移动端**页面（主流）

京东商城手机版

淘宝触屏版

苏宁易购手机版

……

##### 2. **响应式**页面兼容移动端（其次）

三星手机官网

……

#### 2. 移动端技术选型

- 流式布局；（百分比布局）
- **flex 弹性布局（推荐）**
- **rem 适配布局（推荐）**
- 响应式布局

::: tip 提示

我们选取一种主要技术选型，其他技术作为辅助，这种混合技术开发

:::

## 6. vw vh 移动端布局

### 1. vw 和 vh

#### 1. 移动端布局

- 移动端布局---flex 布局
- 为了实现可以适配移动端，页面元素可以宽度和高度等比例缩放
- 需要移动端适配有如下方案：

##### rem

市场比较常见：

1. 需要不断修改 html 文字大小
2. 需要媒体查询 media
3. 需要 flexible.js

##### vw/vh

将来（马上）趋势

1. 省去各种判断和修改

代表：

b 站...

#### 2. vw/vh 是什么

- vw/vh 是一个相对单位（类似 em 和 rem 相对单位）
  - vw 是：**v**iewport **w**idth 视口宽度单位
  - vh 是：**v**iewport **h**eight 视口高度单位
- 相对视口的尺寸计算结果
  - 1vw = 1/100 视口宽度
  - 1vh = 1/100 视口高度

例如：

当前屏幕视口是 375 像素，则 1vw 就是 3.75 像素，如果当前屏幕视口为 414，则 1vw 就是 4.14 像素

::: warning 注意

和百分比有区别，百分比是相对于父元素来说的，而 vw 和 vh 总是针对于当前视口来说的。

:::

#### 小结

##### 思考

##### 1. vw 和 vh 是什么？

- 是相对于视口来说的
- 1vw 就是当前视口的 1/100

##### 2. vw 和百分比的区别是什么？

- 百分比 % 是相对于 父元素来说的
- vw/vh 相对于当前视口来说的

#### 3. vw/vh 怎么用

- 超级简单，元素单位直接使用新单位 vw/vh 即可。
- 因为 vw/vh 是相对单位，所以不同视口（屏幕下），宽高一起变化完成适配。

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }

  div {
    width: 10vw;
    height: 10vh;
    background-color: pink;
  }
</style>
```

##### **如何还原设计稿？**

- 前提：我们设计稿按照 iPhone678 来设计，有个盒子是 50 像素 \* 50 像素的，如何使用 vw 呢？

分析：

1. 设计稿参照 iPhone678，所以视口宽度尺寸是 375 像素（**像素大厨切换到 2x 模式**）

2. 那么 1vw 是多少像素？

   375px / 100 = 3.75px

3. 我们元素的目标是多少像素？

   50px \* 50px

4. **那么 50 \*50 是多少个 vw？**

   50 / 3.75 = 13.3333vw

#### 小结

##### 总结

1. 在开发中使用 vw，需要像素大厨有哪些改动？
   - 把模式改为 2x 模式
2. 开发中使用 vw，如何还原设计稿？
   - 确定设计稿视口宽度。比如 375
   - 直接使用测量数值 / （视口宽度 / 100）
   - 比如：50 / （375 / 100）

#### 4. vw 注意事项

- 因为涉及到大量除法，还是适应 LESS 搭配更好点。
- 我们本质是根据视口宽度来等比例缩放页面元素高度和宽度的，所以开发中使用 vw 就基本够用了。vh 很少用。
- 兼容性查询网址：[https://caniuse.com/](https://caniuse.com/)

#### 案例实战-bibi 官网首页

##### **案例：bibi 官网移动端首页布局**

需求：实现在不同宽度设备中等比缩放的网页效果

分析：

1. 准备好项目目录以及文件

2. 准备好字体文件（下载别人网站字体）

   检查元素 ——> iconfont 样式表 ——> 复制字体 URL 到浏览器地址栏 ——>回车

3. 准备好 less 文件

   生成的 css 文件自动放到 css 文件下面

   ```json
   "less.compile": {
       "out": "../css/"
   }
   ```

4. 准备开始项目内容

| 名称       |
| ---------- |
| fonts      |
| images     |
| less       |
| index.html |

1. 头部模块 - suspension-box 悬挂盒子

2. VSCode 转换 vw 插件

```json
"px2vw.width": 375
```
