---
layout: post
title: "利用 Bootstrap 进行快速 Web 开发"
date: '2013-12-25T13:18:00.001+08:00'
author: Wenh Q
tags:
modified_time: '2013-12-25T13:18:33.905+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-1947392026576198852
blogger_orig_url: http://binaryware.blogspot.com/2013/12/bootstrap-web.html
---
[利用
Bootstrap 进行快速 Web 开发](http://blog.jobbole.com/53961/):

了解如何使用 Bootstrap 快速开发网站和 Web
应用程序（包括移动友好型应用程序）。Bootstrap 以 LESS 项目为基础，由
Twitter 的内部工程师开发，它为 Web 应用程序 UI 提供了一致的框架。
浏览器开发人员最后将其支持全都聚集在标准上，比如 HTML5、级联样式表 2 级
(CSS2) 和 CSS3。这些标准减少了浏览器行为自 Web
全面启动开始以来困扰开发人员和设计人员的许多不合理变化。为了掩盖遗留问题并适应遗留浏览器，一些开发人员创作出了
Web 页面框架。这类工具使得即使是普通人也可以开发适合大多数用户的网站。
其中一个最受欢迎的 Web 页面框架来自一个预料之外的来源。Twitter
的开发人员厌倦了设法解决用于网页开发的许多不同组件。他们创建了单一的框架来提供
Web 页面设计中的最常见元素，同时支持合理的灵活性。他们以
Bootstrap（一种开源项目）的形式与全世界共享这一工具包。
Bootstrap 以 LESS 项目为基础，增强了 CSS 语言。Bootstrap 还包括基本的
CSS
元素，这些元素用于排印、表单、按钮、表格、网格、导航、警告等。Bootstrap
的主要目标是帮助 Web 开发人员加快其项目。这也是目前 GitHub
软件库中最受欢迎的项目。个人、小型团队，甚至大型组织都在使用
Bootstrap。
本文将向您介绍如何使用 Bootstrap
快速开发网站和应用程序，包括移动友好型应用程序。本文反映了开发人员的观点，而不是设计人员的观点。要想从本文和
Bootstrap 中获益，您需要掌握 HTML 和 CSS 的应用知识。我在 “[在 CSS
中使用 LESS
实现更多的功能](http://www.ibm.com/developerworks/cn/web/wa-less/)”
中介绍的 LESS 项目的一些基本知识可帮助您了解本文的主要代码示例。

入门
----

下载已编译的 Bootstrap
数据包（参见 [参考资料](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#resources)）。我在本文中使用的是
V2.3.2。下载内容包括 Bootstrap 的关键元素 CSS，以及一些有用的图像和
JavaScript 文件。您可以根据我在文中的描述为 Web 页面提供
HTML。（参见 [下载](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#download) 部分，获取本文的样例代码。）Bootstrap
文档中不包含框架支持的许多设计选项的样例 HTML。但是 Bootstrap
文档页面（尽管其本身已说明了 Bootstrap
的灵活性）还不足以解释真正起作用的基本设计原则。

响应式 Web 设计
---------------

查看 Web
页面的设备包括小型移动电话，以及大于普通台式计算机外形规格的显示器。在*响应式设计* 中，一开始就在
Web
页面中构建了灵活性，这样用户就可以通过所有设备查看页面。响应式设计的核心是
CSS3 *媒体查询*，这是根据设备性质（尤其是用户的显示器大小）来调用 CSS
规则的一种标准方法。

对于典型开发人员启动的各种项目，我建议首先使用启用了响应特性的固定布局。固定布局更易于组织，而且响应特性支持从一开始就培养考虑网站如何在移动设备上运行的良好习惯。如果项目要应用于生产环境中，而且您正在与设计人员合作，那么设计人员应能够使您的文件适用于更加适合的其他任何模型。

### 针对 Bootstrap 的 HTML

清单 1 是一个有用的框架 HTML 文件，用于结合使用 Bootstrap
与一个固定布局和响应特性：

##### 清单 1. 用于 Bootstrap 项目的基本框架 HTML 文件 (listing1.html)

~~~~ {style="max-width: 946px; overflow: auto; width: 946px;"}
<!doctype html><html>  <head>    <title>Bootstrap 101 Template</title>    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">  </head>  <body>    <h1>Hello world!</h1>    <div>    ... <!-- The main HTML will go here -->    </div>    <script src="http://code.jquery.com/jquery.js"></script>    <script src="js/bootstrap.min.js"></script>  </body></html>
~~~~

缩小版本
--------

在 Bootstrap 下载中，请注意，每个 CSS 和 JavaScript
文件有两个版本可用（例如 bootstrap.js 和
bootstrap.min.js）。第一种形式是一个常规文件，第二种形式是压缩文件或
“缩小文件”。就像在本文中一样，使用缩小版本即可实现最有效的页面加载。

listing1.html 的开始之处的 `DOCTYPE` 声明将其标记为一个 HTML5
文件。`head` 元素内的 `meta`标记控制移动的小屏幕布局。（为方便起见，我将它们称作 `meta/viewport` 标记。）默认情况下，大多数移动设备按比例缩小
Web
页面，使之适应屏幕大小，就像在桌面浏览器窗口中一样。这就是为什么许多网站上的文本和图像在手机浏览器中看起来很小的原因。`meta/viewport` 声明中的 `initial-scale=1.0` 部分禁用了这一行为，告诉设备要保持页面的原有尺寸。该声明表示
Web 设计人员（在本例中为
Bootstrap）已经完成了实现较小屏幕的响应式设计这一任务，所以在默认情况下，没必要采用蛮力方法。
稍后，[清单
1](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#listing1) 的 `head` 标记是
Bootstrap CSS 的链接。在文件的末尾，加载 jQuery 和 Bootstrap 实用程序
JavaScript。这些脚本在末尾运行可实现最佳性能。

### 设置代码

当使用 Bootstrap（或任何 Web
支持文件集）时，您可以从多种方法中选择用来设置 HTML
和其他代码的方法。我建议您创建一个文件夹来存储自己的项目，然后将
Bootstrap 文件及其完整的文件夹结构复制到项目文件夹中。将您自己的 HTML
文件放在最顶层，并将您自己的 CSS、JavaScript 和图像文件放在相应的
Bootstrap 子文件夹中（这些文件夹的名称分别为 css、js 和
img）。然后，整体结构如下所示：

~~~~ {style="max-width: 946px; overflow: auto; width: 946px;"}
.|—— index.html|—— [Also any other site HTML]|—— css|   |—— bootstrap.min.css|   |—— bootstrap-responsive.min.css|   |—— [Also nonminimized Bootstrap files plus site-specific CSS]|—— js|   |—— bootstrap.min.js|   |—— [Also nonminimized Bootstrap files plus site-specific JavaScript]|—— img    |—— [The PNGs that come with Bootstrap plus site-specific images]
~~~~

### CSS 设备调整

`meta/viewport` 标记是当前的约定，用于将页面调整为设备的可视浏览器空间。万维网联盟
(World Wide Web Consortium, W3C) 正在准备一种替换机制，该机制以一种新的
CSS
规则的形式出现（参见 [参考资料](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#resources)）。[清单
1](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#listing1) 中 `meta/viewport` 声明的等效
CSS 是：

~~~~ {style="max-width: 946px; overflow: auto; width: 946px;"}
@viewport {  width: extend-to-zoom 100%;  zoom: 1.0;}
~~~~

目前，您可以将这个代码包含在您的 CSS 中，并在 HTML
中保留 `meta/viewport` 标记。当 CSS
形式受到广泛支持时，您就可以删除`meta/viewport` 声明。

网格系统
--------

[清单
1](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#listing1) 中的主要容器 `div` 表示使用
Bootstrap 的固定布局。放入该容器中的 HTML 合并到了 Bootstrap
的*网格系统* 中。
如果还能想起曾经看到过的大部分 Web
页面，那么您就会认识到它们被分成了一系列的块。位于页面顶部的块可能拥有一个徽标。导航可能位于左边或右边的块中，而内容索引可能也适合放在那个位置。甚至可能出现另一个块包含一个脚注的情况。主要内容本身可能被划分成多个面板或块。过去，Web
设计人员通过使用 CSS 盒子模型（box model）手工设置所有这些块。
网格系统是将盒子布置（比如刚刚描述的）抽象为行和列的一种方法。Bootstrap
为此类网格提供了一个核心的
CSS。您可以通过使用特殊的类，通过嵌入 `div` 元素将内容放置在任何布局的盒子中。
图 1 显示了一个有用的模板，这个模板最初由 Aaron K. White
开发，用于可视化 Bootstrap
的网格系统并规划如何安排您的内容（参见 [参考资料](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#resources)）。在本文中，我做了一些修改，以便在本文中更容易读取文本。

##### 图 1. Aaron K. White 的 Bootstrap 网格系统模板

[![120131224102929](http://cdn2.jobbole.com/2013/12/120131224102929.jpg)](http://cdn2.jobbole.com/2013/12/120131224102929.jpg "利用 Bootstrap 进行快速 Web 开发")
Bootstrap 网格系统的每一行最多有 12
块，每两个块之间留有小槽来提供间隔。您可以拥有无限数量的行，每一行的高度任您设置。每个块是
70 像素宽，小槽是 30 像素宽。Bootstrap 还为页面正文设置一个 30
像素的左边距。网格系统的设计目标是进行基本的布置并为您分配空间，因此，在理想情况下，您只需关注要在网格中放入什么即可。

### 填充 HTML 模板

在 “[在 CSS 中使用 LESS
实现更多的功能](http://www.ibm.com/developerworks/cn/web/wa-less/)”
中，我使用了一个响应式设计示例（根据 developerWorks 博主 Bob Leah
的 [示例](https://www.ibm.com/developerworks/community/blogs/bobleah/entry/code_example_of_responsive_web_design_using_css3_media_queries13?lang=en)）来展示
LESS 工具如何增强 CSS 语法。Bootstrap
是一种功能强大的工具，可简化来自该代码的许多关注。清单 2
是来自这篇文章的
HTML（代码 [下载](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#download) 中的
responsive.html），重写该 HTML（如 listing2.html），以便在 Bootstrap
的固定布局网格系统中运行它，并使用 Bootstrap 的响应特性进行补充：

##### 清单 2. 用于 Bootstrap (listing2.html) 的示例 HTML 文件

~~~~ {style="max-width: 946px; overflow: auto; width: 946px;"}
<!doctype html><html lang="en-US">  <head>    <title>Responsive Bootstrap page</title>    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">  </head>  <body>    <div>      <h1>Hello world!</h1>      <div>        <div id="banner">          <!-- Photo by Jake Sutton          http://www.flickr.com/photos/44124405407@N01/510899838 -->          <img src="img/sky-slim.jpg">        </div>        </div>      <div>        <div id="main-content">          <p>Humpts dumptus in muro sedet          </p>          <p>Veni vidi vici          </p>          <p>Alea iacta est          </p>          <hr>        </div>        <div>          <div>One</div>          <div>            The quick brown fox jumps...          </div>          <div>            <div>Two</div>            <div>              Over the lazy dog...            </div>          </div>            <div>            <div>Three</div>            <div>              To get to the other side            </div>          </div>        </div>        </div>      <div>        <div id="footer">          © Nobody! This document is placed in the public domain.        </div>        </div>    </div>    <script src="http://code.jquery.com/jquery.js"></script>    <script src="js/bootstrap.min.js"></script>  </body></html>
~~~~

在 [清单
2](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#listing2) 中，Bootstrap
删除了我需要在较旧的响应式设计代码中手动完成的任务。因为页面使用了
Bootstrap 的网格系统，所以我不再需要使用专门的 CSS
来操作或调整盒子大小。仔细安排可视空间的 CSS 也不需要专门的 CSS，因为
Bootstrap 网格在各个块之间设置了很好的默认值。此外，我不需要任何 CSS
来进行媒体查询（media query）并在设计参数中设置响应，因为 Bootstrap
的响应特性会负责完成这些任务。
您可以在清单 2 中看到 `div` 标记的嵌套。嵌套的 `div` 使用了 Bootstrap
网格类。具有 `container` 类的 `div` 是整个固定网格布局的包装程序。具有 `row` 类的每个 `div` 在网格中定义了盒子的一行。具有 `span4` 类的 `div` 定义了一个横跨
4 个盒子的块。具有 `span12` 类的 `div` 定义横跨 12 个盒子的块 —
页面的整个宽度。Bootstrap 有一个 `spanN` 类，可横跨从 1 到 12
的任意数量 *N* 的盒子。
图 2 显示了所生成的页面在移动浏览器中的外观（运行 Android 4.1.1 的
Samsung Galaxy S3 上的 Google Chrome）：

##### 图 2. 清单 2 中的浏览器输出

[![220131224102954](http://cdn2.jobbole.com/2013/12/220131224102954.jpg)](http://cdn2.jobbole.com/2013/12/220131224102954.jpg "利用 Bootstrap 进行快速 Web 开发")

### 特定于站点的 CSS

[图
2](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#fig2) 中所示页面的主要元素的布置是正确的。但是页面缺少让其更吸引眼球的样式元素，所以我将添加一些
CSS（[样例代码](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#download) 中的
main.css）来实现这一目标。Bootstrap CSS 本身是使用 LESS
编写的，但我通常高度推荐使用 LESS 而不是纯文本的
CSS。但在这个简单示例中，清单 3 中的纯文本的 CSS 就足够用了：

##### 清单 3. 向示例 HTML (main.css) 中添加基本设计的 CSS

~~~~ {style="max-width: 946px; overflow: auto; width: 946px;"}
.widget-content {  margin: 10px;  padding: 1px;  background-color: #DDDDDD;}    .widget-title {  font-weight: bold;  padding: 10px;  background-color: #EEEEEE;}    .widget-text {  padding: 10px;  background-color: #FCFCFC;}    #footer {  text-align: center;  font-size: small;}
~~~~

当然，[清单
2](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#listing2) 中的
HTML 现在需要 [清单
3](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#listing3) 中的特定于站点的
CSS
的一个附加链接。在 [样例代码](http://www.ibm.com/developerworks/cn/web/wa-bootstrap/index.html#download) 中，包含
main.css 链接的已更新的 HTML 位于 main.html 文件中。图 3
显示了结果页面，其中的 main.css 更为美观：

##### 图 3. 来自 main.html 的浏览器输出

[![320131224103039](http://cdn2.jobbole.com/2013/12/320131224103039.jpg)](http://cdn2.jobbole.com/2013/12/320131224103039.jpg "利用 Bootstrap 进行快速 Web 开发")

结束语
------

对于我和其他许多人来说，我们的优势是代码和数据，而不是视觉和其他感官设计，所以
Bootstrap 就是一个极其宝贵的工具。我可以关注一个 Web
项目的基本代码和数据，并将其绘成初始形状，然后与设计人员合作来美化页面。Bootstrap
对一些特别微妙的领域很有帮助，比如移动设备设计和其他小屏幕设置。它还附带了一个库，其中包含按钮、导航样式和其他可重用工具。最重要的是，Bootstrap
包含的大量代码可减少 Web 浏览器和平台之间的许多令人烦恼的变化。
如此多的项目都在使用 Bootstrap，以至于许多人现在可以立即识别出基于的
Bootstrap
的站点。这种识别有时候可以创建一种非独创性的效果。一名优秀的设计人员不仅可以给使用
Bootstrap
生成的站点提供自己的不同字符，而且还可以确保该站点的基本元素和响应元素都专用于其内容和使用。但是，只有少数几个项目开始研究这些考虑因素。Bootstrap
尤其适用于将思想的闪光点快速转变为 Web 项目。

下载
----

描述

名字

大小

样例代码

[wa-bootstrapcode.zip](http://www.ibm.com/developerworks/apps/download/index.jsp?contentid=956819&filename=wa-bootstrapcode.zip&method=http&locale=zh_CN)

41KB

参考资料
--------

### 学习

-   [CSS Device
    Adaptation](http://dev.w3.org/csswg/css-device-adapt/)：关注 W3C
    建议的 CSS 设备适配标准。
-   “[在 CSS 中使用 LESS
    实现更多的功能](http://www.ibm.com/developerworks/cn/web/wa-less/)”（作者：Uche
    Ogbuji，developerWorks，2013 年 7 月）：了解 LESS 项目以及响应式 Web
    设计的基础知识。
-   “[使用 CouchDB 和 Bootstrap 设计 Web
    应用程序原型](http://www.ibm.com/developerworks/cn/web/wa-couchdb-bootstrap/)”（作者：Uche
    Ogbuji，developerWorks，2013 年 6 月）：了解如何结合使用 Apache
    CouchDB 和 Bootstrap，以一种完全分离展示和数据库层的方式快速启动 Web
    应用程序开发。
-   “[Get started with
    CSS](http://www.ibm.com/developerworks/cn/web/wa-getstartedcss/)”（作者：Daniel
    J. Lewis，developerWorks，2011 年 5 月）：了解标准化的 CSS
    样式设计技术，包括 CSS 2.1 和跨浏览器的 CSS3。
-   “[使用 CSS
    媒体查询创建响应式网站](http://www.ibm.com/developerworks/cn/web/wa-cssqueries/)”（作者：Jeff
    Ball，developerWorks，2012 年 10
    月）：了解如何对桌面网站、移动电话和模板使用 CSS 媒体查询。
-   “[响应式 Web
    设计](http://alistapart.com/article/responsive-web-design)”（作者：Ethan
    Marcotte，A List Apart，2010 年 5
    月）：了解有关响应式设计的更多信息。
-   [Code example of Responsive web design using CSS3 Media
    Queries](https://www.ibm.com/developerworks/community/blogs/bobleah/entry/code_example_of_responsive_web_design_using_css3_media_queries13?lang=en)：查看由
    Bob Leah 编写的适用于本文的响应式设计的代码示例。
-   关注 [Twitter 上的
    developerWorks](http://www.twitter.com/developerworks/)。
-   [developerWorks
    演示中心](http://www.ibm.com/developerworks/cn/offers/lp/demos/)：观看演示，从为初学者准备的产品安装，到为经验丰富的开发人员准备的高级功能。

### 获得产品和技术

-   [Bootstrap](http://twitter.github.com/bootstrap/)：深入研究
    Bootstrap 并在官方项目页面上获取代码。
-   [Bootstrap Illustrator
    Template](http://aaronkwhite.com/2012/artwork/bootstrap-illustrator-template/)：借助
    Aaron K. White 提供的模板来绘制 Bootstrap 设计的网格。
-   以最适合您的方式 [评估 IBM
    产品](http://www.ibm.com/developerworks/cn/downloads/)：下载产品试用版，在线试用产品，在云环境中使用产品。或者在 [SOA
    沙盒](http://www.ibm.com/developerworks/cn/downloads/soasandbox/index.html) 中花费几小时来了解如何高效地实现面向服务的架构。

### 相关文章

-   [码农如何快速打造一个有设计感的网站](http://blog.jobbole.com/38418/)
-   [十大前端开发框架（上）](http://blog.jobbole.com/41950/)
-   [简讯：Bootstrap 3 版本计划](http://blog.jobbole.com/31474/)
-   [Bootstrap 2.3 有哪些改进？](http://blog.jobbole.com/33650/)
-   [BootStrap的色盲无障碍性](http://blog.jobbole.com/40597/)
-   [浏览器的重绘与重排](http://blog.jobbole.com/46722/)
-   [Web前端：11个让你代码整洁的原则](http://blog.jobbole.com/23617/)
-   [10个优秀的移动Web应用开发框架](http://blog.jobbole.com/1436/)
-   [Google Chrome中的高性能网络](http://blog.jobbole.com/51014/)
-   [对Web开发人员和设计师有用的10个流程图](http://blog.jobbole.com/17787/)

[利用 Bootstrap 进行快速 Web
开发](http://blog.jobbole.com/53961/)，首发于[博客 -
伯乐在线](http://blog.jobbole.com/)。
