--- 
layout: post 
title: "全 Javascript 的 Web 开发架构：MEAN" 
date:'2014-04-03T10:00:00.002+08:00' 
author: Wenh Q
tags:
modified\_time: '2014-04-03T10:00:39.565+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-4412381738537845989
blogger\_orig\_url: http://binaryware.blogspot.com/2014/04/javascript-web-mean.html
---
<div dir="ltr" style="color: #303030;">

[全 Javascript 的 Web
开发架构：MEAN](http://www.oschina.net/news/50332/mean)

</div>

<div style="color: #303030; margin-top: 15px;">

通过 [开源中国社区最新新闻](http://www.oschina.net/?from=rss)

</div>

<div dir="ltr"
style="color: #303030; font-size: 14px; line-height: 20px; margin-top: 15px;">

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

<span
style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: bold; line-height: 36px;">引言</span>

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

最近在Angular社区的原型开发者间，一种全Javascript的开发架构MEAN正突然流行起来。其首字母分别代表的是：(M)ongoDB——NoSQL的文档数据库，使用JSON风格来存储数据，甚至也是使用JS来进行sql查询；(E)xpress——基于Node的Web开发框架；(A)agular——JS的前端开发框架，提供了声明式的双向数据绑定；(N)ode——基于V8的运行时环境（JS语言开发），可以构建快速响应、可扩展的网络应用。

</div>

![](http://raohuaming.github.io/images/mean-stack.png){width="380"
height="361"}

<div
style="font-family: 'Noticia Text', Georgia, serif; font-size: 12px; font-style: italic; text-align: center;">

MEAN架构的示意图

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

MEAN的支持者宣称，如果整个开发栈均能使用JS，必然会大大地提高效率，这一点毋庸置疑是一个很大的卖点。这样一来，开发人员（无论是前端还是后端）不仅能使用一致的数据模型，在其它方面也同样可以获得一致的编程体验。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

例如，拿Mongo来说，你可以使用类JSON格式（BSON，二进制的JSON）来存储数据，然后在Express/Node中调用JSON查询语句，再将结果以JSON格式传给前端的Angular显示，这样，也自然使调试程序容易了很多。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

**注意:
事实上，在MEAN架构中，前端的Angular并不是必须的，你可以将它替换成其他的前端框架，如Backbone、Ember或者Polymer。**

</div>

为何选择MongoDB？ {#为何选择mongodb style="background-color: white; color: #333333; font-family: Arial, sans-serif; font-size: 24px;"}
-----------------

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

如上所提，这个架构最重要的优势在于能使用单一语言，这也是其选择了Mongo的首要原因。
这里就不讨论noSQL的是与非了。一些人对MEAN架构的指责在于，MongoDB可以很好地胜任中小型的应用，但是对于大规模应用（百万级用户）来说可能就捉襟见肘。我想说的是，这完全取决于你如何使用它。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

SQL数据库本身是强类型的，因此可以在很大程度上保证某种层次的一致，从而确保许多类型的脏数据一开始就没办法进入数据库。而NoSQL则是弱类型的数据库，这使得它在数据验证方面力不从心，而只能交给开发人员来实现，基于这样的特性，它尤其适合存储那些不规范的数据，特别是在原型开发阶段，此时数据模型正在经历快速变化。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

SQL和noSQL间的技术差别，归根结底是要在性能和稳定性间作出平衡。有些情况下，对数据的事务处理一旦设定后就不会轻易变化，那么此时使用Mongo就非常合适；然而有时候也会涉及更为复杂的事务处理，会牵扯到许多独立的业务逻辑，由于Mongo并没有提供一个简单的数据模型来支持一定级别的原子操作，因此SQL在这个时候可以派上用场。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

但无论如何，不论你是否选择MEAN中的M，你最终都需要根据自身的需求选择出合适的工具来做正确的事情，

</div>

为何是Express? {#为何是express style="background-color: white; color: #333333; font-family: Arial, sans-serif; font-size: 24px;"}
--------------

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

可以简单地把Express看成是一个在Node平台下搭建Web应用的工具集。在Node的基础上，它提供了许多简洁的接口来创建请求节点、处理cookie等，此外还提供了许多功能来帮助你搭建自己的服务器。总的来说，Express在以下几个方面有优势：

</div>

-   设置REST路由简单致极：

    +--------------------------------------------------------------------------+
    | <div                                                                     |
    | style="border: 0px !important; margin: 0px !important; padding: 0px 1em  |
    | 0px 3px !important; vertical-align: baseline !important;">               |
    |                                                                          |
    | app.get(/account/:id,function(req, res){/
* req.params('id') is          |
    | available 
*/});                                                         |
    |                                                                          |
    | </div>                                                                   |
    +--------------------------------------------------------------------------+

-   支持Jade或Mustache等模板引擎
-   自动HTTP头处理:

    +--------------------------------------------------------------------------+
    | <div                                                                     |
    | style="border: 0px !important; margin: 0px !important; padding: 0px 1em  |
    | 0px 3px !important; vertical-align: baseline !important;">               |
    |                                                                          |
    | app.get('/',function(req,res){ res.json({object:'foo'}); });             |
    |                                                                          |
    | </div>                                                                   |
    +--------------------------------------------------------------------------+

-   支持Connect中间件，可以插入额外请求或响应处理，如用户验证
-   提供辅助函数解析POST请求
-   防范XSS
-   优雅的错误处理

如何快速上手MEAN {#如何快速上手mean style="background-color: white; color: #333333; font-family: Arial, sans-serif; font-size: 24px;"}
----------------

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

如果想要很快上手MEAN，那么[mean.io](http://mean.io/)是一个很不错的选择。该项目旨在解决MEAN架构中一些常见的集成问题,
目前维护得很好，文档也很清楚，而且可以很方便地自行添加第三方库，还能和Yeoman配合使用（通过 [generator-mean](https://github.com/jrcryer/generator-mean) by
James Cryer）。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

在进一步阅读前，先假定我们同意以下观点：（a）Mongo至少非常适合于全Javascript堆栈的原型设计；（b）
承认即使像Angular般如日中天，终有一天也会被其他的一些JS框架给取代，只要它们能帮助我们快速方便地将这个架构快速搭建起来。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

接下来就要介绍[Yeoman](http://yeoman.io/) 了，它由3个你所熟知的工具构成：

</div>

-   Grunt：用于生成，预览和自动化测试你的项目，这要特别感谢由Yeoman和grin
    t-contrib团队创建的许多grunt tasks。
-   Bower：前端的依赖管理工具，有了它你再也不需要手动下载和管理第三方JS库了。
-   YO：快速生成一个新的应用，包括配置好你的Grunt任务以及你极有可能会用到的Bower依赖。

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

笔者在一年以前，曾和其他一些人创建过一个叫[ExpressStack](https://plus.google.com/+AddyOsmani/posts/YDNbxVxi4er)的项目，其想法很简单，就是要提供一些工具能够快速生成构建全JS的Web应用所需要的一切。但是，这个项目夭折了，尽管如此，许多类似的项目却如雨后春笋般涌现出来。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

下面对这些项目作些介绍：

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

**注意: 你可能需要装好Yeomam(npm install -g yo)和以下一些生成器（npm
install -g &lt;generator-name&gt;）。**

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

1. [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

这是一个AngularJS的生成器，集成了Express,可选MongoDB。主要功能如下：

</div>

-   支持客户端和服务端的Livereload。
-   Express server集成了grunt tasks。
-   内建了方便的部署流程。
-   支持Jade。

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

可参考: <http://tylerhenkel.com/creating-apps-with-angular-and-node-using-yeoman/>

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

2. [generator-meanstack](https://github.com/wlepinski/generator-meanstack)

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

另一个MEAN架构的生成器，集成了grunt-express，功能如下：

</div>

-   在generator-angular的基础上，用express取代了Connect。
-   支持客户端和服务端的Livereload。
-   使用app\_grunt.js文件来启动应用，而在app.js中定义路由。
-   目录结构基本沿袭了generator-angular的风格，只作了少许的改动。

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

可参考：<https://github.com/Grievoushead/generator-express-angular>

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

3. [generator-mean-seed](https://github.com/jackrabbitsgroup/generator-mean-seed)

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

集成了Mongo，Express，Angular，Yeoman，Karma和Protractor（作自动测试）。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

4. [generator-klei](https://github.com/klei-dev/generator-klei)

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

和其他的很类似，不过使用的是Mongoose和Stylus，其他的一些功能包括：

</div>

-   其目录结构非常容易扩张（包含了一个TODO List的应用例子）
-   一个配置完整的Gruntfile，集合了livereload, linting,
    concatenation, minification等.
-   使用exctrl来自动挂载API。
-   使用了grunt-injector，从而无需手动修改Html的layout文件，就可以自动装载新添加的js和css。
-   使用Karma, Mocha和Chai来进行前端的单元测试。

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

5. [ultimate-seed-generator](https://github.com/pilwon/ultimate-seed-generator)

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

该生成器非常全面，添加了许多第三方的库，包括Passport用于用户登录，Browserify加载js。

</div>

-   集成了AngularUI,
    Barbeque（用于任务队列管理）和[BootStrap](http://blog.jobbole.com/53961/)
-   集成了Bower, Browserify，Express和Font Awesome
-   集成了Grunt, Handlebars, jQuery, JSHint和Karma/Mocha
-   支持LESS/LESSHat, Livereload和Lodash/Underscore
-   集成了Modernizr, MongoDB/Mongoose和Passport


     {#section style="font-size: 24px;"}

该如何做出选择? {#该如何做出选择 style="background-color: white; color: #333333; font-family: Arial, sans-serif; font-size: 24px; font-style: inherit;"}
---------------

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

看了这么多的生成器，自然要问，我该选择哪一个呢？事实上，以上列表是有顺序的，依据的是其与最新版的Yeoman的兼容性以及维护的活跃度。

</div>

全Javascript的架构是否适合于产品级的应用呢？ {#全javascript的架构是否适合于产品级的应用呢 style="background-color: white; color: #333333; font-family: Arial, sans-serif; font-size: 24px; font-style: inherit;"}
--------------------------------------------

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

不得不承认，如果开发堆栈的每一层都能使用JavaScript将会是一件很棒的事情（至少对于原型开发来说是这样），然而千万要注意，不要为了追求这一目标，而把自己而束缚住了。尽管的确有越来越多的大规模应用都在采用类似的架构，如Walmart、LinkedIn，但并不意味着模仿他们就一定能成功。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

另一个需要注意的是，相对于其他的语言（如Ruby，Python或Java），在Node上搭建后端要困难得多。你可能要自己处理内存泄漏，避免在事件循环中进行耗时运算，还要非常小心异常处理，如果这些处理不当就很有可能会导致整个应用服务器崩溃，但是这些问题在其他平台上却已经处理得很好了。然而，这并不是说，Node不能运用在生产环境下，当然可以，但要格外用心。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

实话实说，想要"一揽子"为Web应用提供一个大而全的解决方案将非常困难，MEAN架构也肯定有其局限性。在前端与后端的[设计模式](http://www.amazon.cn/gp/product/B001130JN8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=vastwork-23&linkCode=as2&camp=536&creative=3200&creativeASIN=B001130JN8)、原则和风格中有大量的演化，如果你觉得PHP或Rails是更明智的选择，那就继续使用下去，否则的话，不妨试试MEAN，至少在当下值得一试。

</div>

<div
style="background-color: white; color: #333333; font-family: Arial, sans-serif;">

//
译文最初发在 [@饶华铭](http://weibo.com/n/%E9%A5%B6%E5%8D%8E%E9%93%AD?from=feed&loc=at) 的个人博客（[原译文](http://raohuaming.github.io/blog/2014/02/09/full-stack-javascript-with-mean-and-yeoman/)）。

</div>

</div>
