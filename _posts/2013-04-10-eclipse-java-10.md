--- 
layout: post 
title: "使用 Eclipse 调试 Java 程序的 10 个技巧" 
date: '2013-04-10T14:53:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-04-10T14:53:46.568+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-2154865067026802734
blogger\_orig\_url: http://binaryware.blogspot.com/2013/04/eclipse-java-10.html
---
<div
style="margin: 0px 2px; padding-top: 1px;    background-color: #c3d9ff; font-size: 1px !important;    line-height: 0px !important;">

 

</div>

<div
style="margin: 0px 1px; padding-top: 1px;    background-color: #c3d9ff; font-size: 1px !important;    line-height: 0px !important;">

 

</div>

<div style="padding: 4px; background-color: #c3d9ff;">

### Quantum 通过 Google 阅读器发送给您的内容： {#quantum-通过-google-阅读器发送给您的内容 style="margin:0px 3px;font-family:sans-serif"}

</div>

<div
style="margin: 0px 1px; padding-top: 1px;    background-color: #c3d9ff; font-size: 1px !important;    line-height: 0px !important;">

 

</div>

<div
style="margin: 0px 2px; padding-top: 1px;    background-color: #c3d9ff; font-size: 1px !important;    line-height: 0px !important;">

 

</div>

<div
style="font-family:sans-serif;overflow:auto;width:100%;margin: 0px 10px">

 {#section style="margin: 0.25em 0 0 0"}

<div>

[使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/37893/?utm_source=rss&utm_medium=rss&utm_campaign=%25e4%25bd%25bf%25e7%2594%25a8-eclipse-%25e8%25b0%2583%25e8%25af%2595-java-%25e7%25a8%258b%25e5%25ba%258f%25e7%259a%2584-10-%25e4%25b8%25aa%25e6%258a%2580%25e5%25b7%25a7)

</div>

<div style="margin-bottom: 0.5em">

于 13-4-9 通过 [博客 - 伯乐在线](http://blog.jobbole.com){.f}
作者：童海波

</div>



英文原文： [Again! – 10 Tips on Java Debugging with
Eclipse](http://blog.codecentric.de/en/2013/04/again-10-tips-on-java-debugging-with-eclipse/)
来源[ oschina](http://www.oschina.net/translate/again-10-tips-on-java-debugging-with-eclipse)

你应该看过一些如《关于调试的N件事》这类很流行的帖子
。假设我每天花费1小时在调试我的应用程序上的话，那累积起来的话也是很大量的时间。由于这个原因，用这些时间来重视并了解所有使我们调试更方便的功能。那能为你省下一些时间，也将会使你的生活更安逸、轻松。同时也表明其它关于此主题的帖子也是很有价值的。

**第1条：不要调试太多**

一个关于调试的疯狂声明作为开头。但它必须是要说的！尝试切分一下你那复杂的逻辑成多个独立的单元，并编写单元测试来检测你代码的正确性。我想像如下这样的流程应该是发生得非常频繁的—-一些人通过大型web应用程序点击、填写多个表单、切换到不同的页面、正在最后的页面上检测工个计算逻辑和实现这个调试视图中的大部分逻辑。在启动你的tomcat之前总是问你自己：有没有方法使用一个单元测试来检测这些行为？你在过去这些时间可以不知道或已忘记这些，但从现在开始，我们将要关注一些eclipse的调试技巧，你会发现有大量的关于良好代码设计的好东西。

**- 断点视图 ： 条件断点**

如果你只对应用中的某部分感兴趣的话，这个功能非常有用。例如，如果你要在第13次循环的时候检查程序，或者在一个抽象父类中调试某些功能，而你只关注其中一个具体的实现。你可以在断点视图中设置条件，或者通过代码旁边的蓝色断点标记的右键菜单（"Breakpoint
Properties"）设置。你可以在条件代码片段为true的时候暂停程序，或者当代码片段的值改变的时候挂起程序。

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211426_5OGf.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211426_5OGf.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211427_RZNd.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211427_RZNd.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

**- 变量视图：展示逻辑结构**

如果你需要在变量视图查看一个Map对象或者List对象的值，对于eclipse的默认设置，一般并不是那么容易。假设，你使用的是HashMap，你需要点击遍历各个实体条目，并面临各种HashMap的实现细节。但是，在变量视图上面有一个叫做"Show
Logical
Structure"的按钮。它非常有用，尤其当你的对象的toString()方法所展示的信息并不友好的时候。我的老大在几周前为我展示了这个功能。你知道，他经常跟PowerPoint或者Excel打交道。对于我这么一个开发人员，多丢脸哦 ![;-)](http://static.oschina.net/uploads/img/201304/08211425_V3u4.gif)

未开启"Show Logical Structure"

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211429_x6RR.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211429_x6RR.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

开启"Show Logical Structure"

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211430_GNOo.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211430_GNOo.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

**- 变量视图：更改变量值…**

当你需要稍微更改输入信息的时候，不需要重新开始调试会话，只需在一个表格中输入新的信息，你可以在调试阶段直接修改你的变量的值。有写时候，你可以节省一些时间，你可以通过这个功能，更加简单的模拟一些怪异的情况。

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211431_WWty.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211431_WWty.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

**- Display视图**

你知道"Display视图"吗？你可以在调试过程中，通过"Window" -&gt; "Show
View" -&gt;
"Display"来激活它。现在，你的eclipse应该是一个空白的新视图。你可以使用这个视图，输入或者演算一些新的代码。这些代码在当前的调试位置的上下文环境中被执行，这意味着，你可以使用所有变量甚至是内容助手。要执行你的代码的话，只需标记它，并使用右键菜单或者CTRL+U(执行)或者 CTRL+SHIFT+I
(检查).

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211433_VzXt.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211433_VzXt.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

#### - 导航: Drop to Frame

我想任何人都知道"Step Into", "Step over"，而且可能也知道"Step return".
这些是调试时的基本导航功能。我想提两个我非常喜欢的导航的高级方法。第一个是"Drop
to Frame".
使用这个特性你可以及时回退 ![;-)](http://static.oschina.net/uploads/img/201304/08211425_V3u4.gif) 
你可以直接回退到运行过的java堆栈帧中某一帧。当我调试时，一不小心错过了某个关注的代码行时，我常常用这个回退一帧。使用"Drop
to Frame"这个特性我可以简单的重新运行某帧代码。

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211435_mwS1.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211435_mwS1.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

#### - 导航: Step into Selection

第二个是"Step into Selection".
这也是很简单,但很多人使用的一个。要使用它，你只需要按 Ctrl+Alt
同时点击一个你想运行到的方法名。非常方便，非常快速。相比"Step
Into"这个非常方便，想想你像跟踪进一个有很多参数的函数，如果用"Step
Into"你必须进入，退出每个参数计算过程，才能进入到你真正想进的函数。"Run
to
line"也是很棒的特性。只需要把光标放在你想运行到的哪一行前面，然后按"CTRL+R"就可以了。

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211437_FeyO.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211437_FeyO.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

**- 导航器：使用键盘**

如果避免使用鼠标的话，你的操作速度会更快。你至少应该如下的快捷键：

-   F5 – "单步进入"
-   F6 – "单步执行并跳过"
-   F7 – "单步执行并返回"
-   F8 – "继续执行"
-   Ctrl+Shift+B – "添加断点"
-   Ctrl+Shift+I – "检查"

**- 断点视图：Watchpoints**

如果改变这个变量会有什么结果?!
有时候创建一个watchpoint对于调试会非常有用。调试器会停止，不管这个被观察的字段是被修改还是被读取
–
你可以自己来配置决定。你只需双击一个字段，然后你就可以在断点视图中看到watchpoint，并且可以编辑它的属性。你甚至可以一个访问次数，这意味着当变量被访问的次数达到这个数量的时候，调试器会停止。这对于普通的断点也适用。

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211438_hQ0N.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211438_hQ0N.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

**- 友好的可读的对象**

变量视图是使用对象的toString方法来现实对应的值。因为这个原因，如果提供友好的toString方法实现，对调试来说会非常有用。在javadoc中关于java.lang.Object的默认toString实现，也是这样推荐的：

> 返回一个表示该对象的字符串。通常&lt;code&gt;toString&lt;/code&gt;方法返回这么一个字符串，"字面表示"该对象。返回结果必须是一个简洁却富含可表示该对象的信息，并且友好可读取。我们推荐所有的子类都覆盖这个方法。

你可以参考commons-lang中的 [ToStringBuilder](http://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/builder/ToStringBuilder.html)。它提供一些功能来编写
（引用自javadoc ） "良好并连贯" 的toString方法。

默认的ToString

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211440_eUhn.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211440_eUhn.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

默认的ToStringBuilder例子

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211441_AsCq.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211441_AsCq.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

ToStringBuilder例子 – 多行文本风格

[![使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/wp-content/uploads/2013/04/08211443_5U7e.png "使用 Eclipse 调试 Java 程序的 10 个技巧")](http://blog.jobbole.com/wp-content/uploads/2013/04/08211443_5U7e.png "使用 Eclipse 调试 Java 程序的 10 个技巧")

如果你不能修改toString实现，例如你现在使用框架或者一个外部的API，你可以有另外一个选择，在Eclipse中创建一个"Detail
Formatter"。你需要在变量视图中右击一个对象，并点击"New Detail
Formatter…"。然后你就可以输入一些代码，用于展现这个对象。

#### 相关文章

-   [![Java程序员应该知道的10个调试技巧](http://blog.jobbole.com/wp-content/uploads/2012/09/156_120903163734_1-150x150.png){width="150"
    height="150"}](http://blog.jobbole.com/26435/)[Java程序员应该知道的10个调试技巧](http://blog.jobbole.com/26435/)
-   [![eclipse
    logo](http://blog.jobbole.com/wp-content/uploads/2012/04/eclipse-logo-150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/16127/)[25个让Java程序员更高效的Eclipse插件](http://blog.jobbole.com/16127/)
-   [![Eclipse Orion
    Example](http://blog.jobbole.com/wp-content/uploads/2012/03/Orion-Example-150x150.png){width="150"
    height="150"}](http://blog.jobbole.com/16318/)[Eclipse基金会将于7月发布Orion
    1.0版](http://blog.jobbole.com/16318/)
-   [![JVM优化-缩短eclipse的启动时间](http://blog.jobbole.com/wp-content/uploads/2013/03/002356_C7Tx_254689-150x150.png){width="150"
    height="150"}](http://blog.jobbole.com/34536/)[JVM优化-缩短eclipse的启动时间](http://blog.jobbole.com/34536/)
-   [![善用 Web
    调试代理工具](http://blog.jobbole.com/wp-content/uploads/2013/03/22-150x150.png){width="150"
    height="150"}](http://blog.jobbole.com/34457/)[善用 Web
    调试代理工具](http://blog.jobbole.com/34457/)
-   [![调试器工作原理之二——实现断点](http://blog.jobbole.com/wp-content/plugins/wordpress-23-related-posts-plugin/static/thumbs/6.jpg)](http://blog.jobbole.com/23632/)[调试器工作原理之二——实现断点](http://blog.jobbole.com/23632/)
-   [![在线本地调试大观](http://blog.jobbole.com/wp-content/plugins/wordpress-23-related-posts-plugin/static/thumbs/16.jpg)](http://blog.jobbole.com/1147/)[在线本地调试大观](http://blog.jobbole.com/1147/)
-   [![开发人员眼中最好的代码编辑器](http://blog.jobbole.com/wp-content/uploads/2012/07/Which-is-the-Best-Code-Editor-150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/24594/)[开发人员眼中最好的代码编辑器](http://blog.jobbole.com/24594/)
-   [![11个强大的Visual
    Studio调试小技巧](http://www.hanselman.com/images/vs2010logo_transparent_large.png)](http://blog.jobbole.com/33865/)[11个强大的Visual
    Studio调试小技巧](http://blog.jobbole.com/33865/)
-   [![java
    black](http://blog.jobbole.com/wp-content/uploads/2012/02/java-black--150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/13373/)[Java堆内存的10个要点](http://blog.jobbole.com/13373/)

[使用 Eclipse 调试 Java 程序的 10
个技巧](http://blog.jobbole.com/37893/)，首发于[博客 -
伯乐在线](http://blog.jobbole.com)。

</div>



<div
style="margin: 0px 2px; padding-top: 1px;    background-color: #c3d9ff; font-size: 1px !important;    line-height: 0px !important;">

 

</div>

<div
style="margin: 0px 1px; padding-top: 1px;    background-color: #c3d9ff; font-size: 1px !important;    line-height: 0px !important;">

 

</div>

<div style="padding: 4px; background-color: #c3d9ff;">

### 可从此处完成的操作： {#可从此处完成的操作 style="margin:0px 3px;font-family:sans-serif"}

-   使用 **Google 阅读器**[订阅博客 -
    伯乐在线](http://www.google.com/reader/view/feed%2Fhttp%3A%2F%2Fblog.jobbole.com%2Ffeed%2F?source=email)
-   [开始使用 Google
    阅读器](http://www.google.com/reader/?source=email)，轻松地与**您喜爱的所有网站**保持同步更新

</div>

<div
style="margin: 0px 1px; padding-top: 1px;    background-color: #c3d9ff; font-size: 1px !important;    line-height: 0px !important;">

 

</div>

<div
style="margin: 0px 2px; padding-top: 1px;    background-color: #c3d9ff; font-size: 1px !important;    line-height: 0px !important;">

 

</div>
