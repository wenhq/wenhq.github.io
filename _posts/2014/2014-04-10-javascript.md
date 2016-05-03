---
layout: post
title: JavaScript基础工具清单
date: '2014-04-10T12:55:00.000+08:00'
author: Wenh Q
tags:
modified_time: '2014-04-22T18:01:50.978+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-6736146950853526271
blogger_orig_url: http://binaryware.blogspot.com/2014/04/javascript.html
---
[JavaScript基础工具清单](http://blog.jobbole.com/64771/)  通过 [博客 -
伯乐在线](http://blog.jobbole.com/)

在训练营中，我们给学员介绍了一些工具和库，以扩大其代码的能力。目前有位JavaScript学员Kalina，他汇总了这些工具的清单，想分享给其他的代码爱好者。

Ivan
Storck，我们JavaScript训练营的辅导员，利用Kalina的清单，画了一张有帮助的思维导图：

![](http://ww3.sinaimg.cn/large/63918611gw1ef9tv36yxpj20xc0o5jst.jpg)

**通用** {align="left"}
========

脚手架工具（用于启动项目） {align="left"}
--------------------------

-   [Yeoman](http://yeoman.io/) – Yeoman是一个健壮且固定的客户端程序库，包含了工具和框架，有助于开发者快速构建漂亮的web应用。

构建工具（自动化构建） {align="left"}
----------------------

-   [Grunt.js](http://gruntjs.com/) – Grunt生态系统很巨大，且每天成长着。由于有数以百计的插件可供选择，你可以使用Grunt自动化构建，且花费最少的代价。
    -   [Pint.js](http://www.pintjs.com/)(Grunt助手)
        – Pint是一个小型、异步、感知依赖的基于Grunt的封装库，试图解决大规模构建过程中的一些问题。
-   [Gulp.js](http://gulpjs.com/) – Gulp的流式构建方式和代码优于配置理念使构建更简单、更直观。
-   [Browserify.js](http://browserify.org/)([浏览器](http://blog.jobbole.com/12749/ "现代浏览器的工作原理")端)
    – Browserify是一个允许编写、编译[Node.js](http://blog.jobbole.com/1254/ "Node.js 究竟是什么？")风格的模块并将之用于浏览器的开发工具。就像node，我们在单独文件中编写模块，使用module.exports、exports导出外部方法和属性。
-   [Uglify.js](http://marijnhaverbeke.nl//uglifyjs) – Uglify.js是服务于NodeJS的一个JavaScript解析/压缩/美化库。

包管理工具 {align="left"}
----------

-   [Homebrew](http://brew.sh/)(适用于Mac 系统)
    – Homebrew能安装你需要而苹果不提供的东西。
-   [Apt](https://help.ubuntu.com/12.04/serverguide/apt-get.html) (适用于Ubuntu系统)
    – apt-get命令是一个强大的命令行工具，与Ubuntu的高级包装工具(APT)配合使用，提供了安装新软件、升级已有软件、更新软件列表目录，甚至升级整个Ubuntu系统等功能。
-   [NPM](https://www.npmjs.org/) – npm是一个Node.js官方包管理工具。
-   [Bower](http://bower.io/) – Bower是一个web的包管理工具。

**前端** {align="left"}
========

MVC框架 {align="left"}
-------

-   [Backbone.js](http://backbonejs.org/) –
    Backbone.js通过提供进行键值绑定的模块、自定义事件、具有丰富可枚举函数API的集合、能处理已定义事件的视图，搭建了web应用的架构。它通过[RESTful](http://blog.jobbole.com/41233/ "RESTful API 设计最佳实践") JSON接口与其它已存在的API进行通信。
-   [Ember.js](http://emberjs.com/) –
    当底层模块改变时，Ember使得Handlebar模板引擎在保持HTML最新方面做得更好。开始时，你甚至不需要编写任何JavaScript。
-   [Angular.js](http://angularjs.org/) – Angular.js能让你扩展应用的HTML词汇。由此产生的效果是网页极富表现力，代码可读性强，适合快速开发。

模板**** {align="left"}
--------

-   [Handlebars.js](http://handlebarsjs.com/) –
    Handlebars提供了让你顺利、有效地构建语义模板的强大能力。Handlebars兼容Mustache模板，因此你可以在Handlebars中导入Mustache模板，同时享用Handlebars的其他功能。
-   [Mustache.js](http://mustache.github.io/)(比Handlebars更少外置元素)
    – Mustache是一个简单的web模板系统，已有ActionScript、
    C++、Clojure、[CoffeeScript](http://blog.jobbole.com/29190 "初步了解 CoffeeScript")、ColdFusion、D、Erlang、Fantom、
    Go、Java、JavaScript、 Lua、.NET、
    Objective-C、Pharo、Perl、PHP、Python、Ruby、Scala 和
    XQuery语言实现版本的可用。
-   [Jade](http://jade-lang.com/) – Jade
    是一个node模板引擎，主要为node.js的服务器端模板而设计。
-   [Haml-js](https://github.com/creationix/haml-js) –
    Haml-js允许在JavaScript项目中使用[Haml](http://haml.info/)语法，并拥有大部分与原先Haml相同的功能。
-   [Eco](https://github.com/sstephenson/eco) –
    Eco能让你在标记元素中嵌入[CoffeeScript](http://coffeescript.org/) 的逻辑。

测试 {align="left"}
----

-   [Casper.js](http://casperjs.org/) –
    CasperJS是一个Javascript实现的，PhantomJS和SlimerJS的导航脚本和测试工具。
-   [Zombie.js](http://zombie.labnotes.org/) –
    Zombie.js是一个在模拟环境中测试客户端JS代码的轻量级框架。无需浏览器。

**后端** {align="left"}
========

服务器 {align="left"}
------

-   [Express](http://expressjs.com/)  – Express是一个Node的web应用框架。
-   [Node](http://nodejs.org/) – Node.js是一个基于Chrome JavaScript
    运行时建立的平台， 用来方便地搭建快速、 易于扩展的网络应用。

数据库 {align="left"}
------

-   [MongoDB](https://www.mongodb.org/) – MongoDB
    是个开源的文档数据库，引领着[nosql数据库](http://blog.jobbole.com/1344/ "8种Nosql数据库系统对比")。
-   [Postgresql](http://www.postgresql.org/) – PostgreSQL
    是一个强大、开源、对象-关系型数据库系统。
-   [SQL](http://www.sqlcourse.com/intro.html) –
    SQL用于与数据库进行通信。根据美国国家标准学会的定义，它是关系式数据库管理系统的标准语言。

架构风格 {align="left"}
--------

-   RESTful
    – 表现层状态转化是一种架构风格，包含了一组相互协作的架构约束。这些约束应用于分布式超媒体系统之间的组件、连接器和数据元素。

测试 {align="left"}
----

-   [Cucumber.js](https://github.com/cucumber/cucumber-js) – Cucumber.js是一种流行的行为驱动开发工具，并将之应用于你自己的JavaScript程序
-   [Jasmine](http://jasmine.github.io/) –
    Jasmine是JavaScript的一个行为驱动开发测试框架。它不依赖于浏览器、DOM、或任何其他JavaScript框架。因此它适用于网站、Node.js项目、或任何可运行JavaScript的地方。
-   [Mocha](http://visionmedia.github.io/mocha/) – Mocha
    是一个运行于node.js和浏览器的特色丰富的JavaScript测试框架，使得异步测试更简单有趣。
-   [Q-Unit](https://qunitjs.com/) – Q-Unit
    是一个强大，易用的JavaScript单元测试框架。它被用于jQuery、jQuery UI
    和 [jQuery
    Mobile](http://blog.jobbole.com/30216/ "用jQuery Mobile做HTML5移动应用的三个优缺点") 项目，能够测试任何通用的JavaScript代码。

断言库 {align="left"}
------

-   [Chai](http://chaijs.com/) – Chai
    是一个行为驱动开发/[测试驱动开发](http://www.amazon.cn/dp/B0011AP332/?tag=vastwork-23 "测试驱动开发")(BDD
    / TDD
    )断言库，用于node和浏览器，可以愉快地搭配任何JavaScript测试框架。

函数式编程工具 {align="left"}
--------------

-   [Underscore.js](http://underscorejs.org/) –
    Underscore是一个提供了一大堆有用的函数式编程辅助，无须扩展任何内置对象的JavaScript库。
-   [Lo-Dash](http://lodash.com/) –
    Lo-Dash是一个提供了一致性、定制和性能的实用程序库。



**更新：** {align="left"}
==========

****有一个你认为应该在此清单的工具吗？看看这篇文章和[Github](https://github.com/codefellows/jstools)上使用MindNode制作的思维导图(OPML)。请提交一个pull
request，给我们您的建议，以增加新流行工具！
