--- 
layout: post 
title: jQuery 实验教程：jQuery 简介、语法及事件处理

date: '2013-12-09T11:30:00.001+08:00' 
author: Wenh Q
tags: - tech
modified\_time: '2013-12-09T11:30:18.238+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-2448980918390574695
blogger\_orig\_url: http://binaryware.blogspot.com/2013/12/jquery-jquery.html
---
<div style="margin: 10px; padding: 5px;">

<div style="font-size: 18px;">

[jQuery 实验教程：jQuery
简介、语法及事件处理](http://blog.jobbole.com/52682/)

</div>

<div style="font-size: 13px;">

Via [博客 - 伯乐在线](http://blog.jobbole.com/)

</div>

</div>

<div style="font-size: 13px; padding: 15px 0 10px 10px;">

jQuery 简介：为什么使用 jQuery 用
---------------------------------

jQuery 是一个跨浏览器的免费开源 JavaScript
库。其核心设计思想是"写更少的代码，做更多的事情"(Write Less Do
More)。jQuery 提供了一套易于使用的 API。这些 API
极大地简化了客户端(浏览器)编程过程中的许多方面，包括：

-   HTML DOM 的遍历与操作
-   浏览器事件处理
-   AJAX（Asynchronous JavaScript And XML）编程
-   特效（如动画效果）

在直接使用 JavaScropt+DHTML
的传统客户端编程方式下，开发人员不得不编写冗长的代码。并且，为了使这些代码能够兼容不同的浏览器，我们还得编写额外的代码来处理这些跨浏览器问题。jQuery
的设计目标正是在于简化客户端编程。让我们能够编写简练的代码，节约开发时间，而这些代码却一样可以功能强大，并且兼容多种浏览器。

获取 jQuery：开始使用 jQuery
----------------------------

jQuery
网站上提供了两种方式的发布文件。一种是内容经过压缩的文件；另一种是原始文件。前者文件中不包含代码注释以及代码运行过程中不需要的空白字符，它适合于生产环境(正式使用的环境)中使用，可以减少文件加载所需时间。后者文件中包含详细的代码注释，适合于开发和测试环境中使用。

jQuery 的下载地址：<http://jquery.com/download/>

下载 jQuery 之后，在相应的网页中通过 script 元素引用 jQuery
代码即可使用它。如清单 1 所示：

##### 清单 1. 从本地站点引用 jQuery

<div>

    <html>  <head>  <title>使用 jQuery</title>  <strong><script src="../js/lib/jQuery/1.9.1/jQuery.js"></script></strong>  </head>  <body>  </body>  </html>

</div>

我们还可以通过 Google、Microsoft 等公司提供的 CDN 服务直接获取
jQuery。其方法是在需要使用 jQuery 的网页中直接引用 CDN 服务的
URL。比如，使用 Google 的 CDN 的一个网页清单 2 所示：

##### 清单 2. 从 CDN 引用 jQuery

<div>

    <html>  <head>  <title>使用 jQuery</title>  <script  src='//ajax.googleapis.com/ajax/libs/jQuery/1.9.1/jQuery.min.js'>  </script>  </head>  <body>   </body>  </html>

</div>

Microsoft 提供的 CDN 的 URL 为：
http://ajax.aspnetcdn.com/ajax/jQuery/jQuery-1.9.1.js

Hello World：jQuery 第一个实例
------------------------------

下面的例子中，我们使用 jQuery 实现在页面上显示当前时间的功能。

##### 清单 3. Hello World

<div>

    <html>  <head>  <meta http-equiv="content-type" content="text/html;charset=utf-8">  <script src="../js/lib/jQuery/1.9.1/jQuery.js"></script>  <script>  function <strong>initPage</strong>(){  //jQuery 代码：调用 jQuery 的核心函数－－－$函数  $("#message").html("Hello World, it is now:"+new Date().toLocaleString());  }  </script>  </head>  <body <strong>onload="initPage()"</strong>>  <span id="message"></span>  </body>  </html>

</div>

从上面例子（在线例子：http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=HelloWorld.htm）

的代码中我们可以看到， initPage
这个函数会在页面加载完毕后被调用。而该函数在执行后会在 ID 为 message 的
HTML
结点内添加表示客户端当前时间的字符串。您可以不必急着去理解上面代码的具体意思。下一节将介绍
jQuery 的语法。另外，这个例子中我们使用 body 元素的 onload
属性来绑定事件处理器（initPage）只是为了方便讨论。在本章的后面内容中会介绍
jQuery 中用于处理页面 load 事件绑定的简便 API。

jQuery 语法:温故而知新
----------------------

虽然 jQuery
本身并非一门新的语言。但是，学习其语法有助于我们熟练、灵活地使用它。回顾下我们熟悉的
CSS 语法，不难发现 jQuery 的语法与 CSS 有相似之处。

jQuery 语法的设计思想是"选择元素，对其操作"。这和 CSS
规则的语法非常类似。比如，要将页面中一个 ID 为 message
的元素的字体颜色设置为蓝色、字体大小设置为 17px，则可以定义如清单 4 所示
CSS 规则：

##### 清单 4. CSS 规则例子

<div>

    #message{  color:blue;  font-size:17px;  }

</div>

从上述 CSS
规则中可见，我们期望的对元素外观的操作（字体颜色设置为蓝色、字体大小设置为
17px）是通过" color:blue"和"font-size:17px"这 2
个属性声明指定的。而这些操作要作用于哪些元素，则是通过 CSS
的选择器"
#message"指定为 ID 等于"message"的元素。

总结来说，CSS
规则中属性声明描述了外观属性操作，而选择器则指定了将相应的属性操作应用于哪些元素。如图
1 所示：

<div style="width: 396px;">

[![图 1. CSS
规则示意图](http://cdn2.jobbole.com/2013/12/image003CSS.jpg "图 1. CSS 规则示意图"){width="386"
height="246"}](http://cdn2.jobbole.com/2013/12/image003CSS.jpg "图 1. CSS 规则示意图")

图 1. CSS 规则示意图

</div>

jQuery 的语法其实正是模仿了 CSS 规则的语法。其语法如下：

<div>

    $(selector).action(actionParameter);

</div>

这是个链式语法。因此，上述的语法等效于：

<div>

    var objTargetElements;//要施加操作的目标元素  objTargetElements=$(selector);//指定目标元素  //调用 objTargetElements 的相关方法，对目标元素进行操作  objTargetElements.action(actionParameter);

</div>

上述语法中，


$ ：美元符是 jQuery 核心函数 jQuery 的一个别名。当然，在 JavaScript
中"
$"是一个合法的函数名。 Selector 参数指定了一个 jQuery 选择器。jQuery
选择器类似于 CSS 中的选择器，它告诉 jQuery
我们准备对哪些元素进行操作(action)。并且，CSS 中的各种选择器 jQuery
中都有等同的选择器。

action ：该方法指定了要对 selector
所指定的元素进行什么具体操作。actionParameter
参数是个可选参数，是根据具体所指定的方法来定的，它会随具体方法的变化而变化。

因此，清单 3 中的 jQuery 语句相当于：

##### 清单 5.Query 非链式语法示例

<div>

    /*  $("#message").html("Hello World, it is now:"  +new Date().toLocaleString());  相当于：  */  var objTargetElements;//要施加操作的目标元素  //指定目标元素为 ID 等于 message 的元素，使用基于 ID 的选择器  objTargetElements=$("#message");  //调用 objTargetElements 的 html 方法，设置目标元素的 HTML 内容  objTargetElements.html ("Hello World, it is now:"  +new Date().toLocaleString());

</div>


$ 函数的返回值是一个 jQuery
自定义的类似数组的对象。该对象的各个数字下标表示的属性对应的值为选择器所匹配的各个元素。

比如，清单 3 中的 
$ 函数调用，它为 
$ 函数指定了一个基于元素 ID
的选择器表达式：

<div>

    $("#message")

</div>

其返回值将满足下列条件表达式。因为选择器表达式"
#message"匹配了唯一一个
ID 为 message 的元素：

<div>

    document.getElementById("message")==$("#message")[0]

</div>


$
函数返回的对象还提供了一些方法，通过调用该对象的相关方法可以对选择器所匹配的元素进行相应的操作。比如，清单
3 所示代码中，我们通过调用
$函数返回对象的 html
方法设置选择器表达式"
#message"所匹配的元素的 HTML 内容。

为了更加直观得了解 
$ 函数的返回值，建议您通过 Chrome
浏览器中的开发者工具的表达式监视功能（ Watch
Expressions），观察一个具体的
$函数调用的返回值。如图 2 所示：

<div style="width: 586px;">

[![image005FunctionReturn](http://cdn2.jobbole.com/2013/12/image005FunctionReturn.jpg "图 2.$ 函数返回值示意图"){width="576"
height="494"}](http://cdn2.jobbole.com/2013/12/image005FunctionReturn.jpg "图 2.$ 函数返回值示意图")

图 2.
$ 函数返回值示意图

</div>

jQuery 的语法和清单 3 中的 jQuery 语句的对应关系如图 3 所示：

<div style="text-align: center;">

[![image007HelloWorld](http://cdn2.jobbole.com/2013/12/image007HelloWorld.jpg "图 3. jQuery 语法实例"){width="575"
height="164"}](http://cdn2.jobbole.com/2013/12/image007HelloWorld.jpg "图 3. jQuery 语法实例")

</div>


$ 函数返回的对象提供了一个名为 each 的常用方法。 each
方法接受一个参数，该参数是一个回调函数。 each
方法会针对选择器表达式所匹配的元素中的每个元素逐次调用这个回调函数，并将单个元素及其对应的索引号作为参数传入该函数。下面看一个实例。

假设在页面中有多个链接，现在要将这个页面中所有链接的 URL
显示在浏览器的控制台中。

页面代码如下所示：

##### 清单 6.
$ 函数返回值实例

<div>

    <a href="https://www.ibm.com/developerworks/cn/" target="_blank">  IBM developerWorks 中文站</a><br/>  <a href="https://www.ibm.com/developerworks" target="_blank">  IBM developerWorks</a><br/>  <a href="/" target="_blank">首页</a><br/>

</div>

(在线例子：[http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=
$FuncReturn.htm](http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=%24FuncReturn.htm)）

此时，可以用基于元素名称的选择器来匹配多个元素（页面中所有的链接元素），并调用
$函数返回值的
each 方法。这里，我们定义一个回调函数（
这个回调函数通常是一个匿名函数，方便代码编写），把它作为 each
函数的参数。在这个回调函数中，我们往浏览器控制台中打印每个链接的
URL，如清单 7 代码所示：

##### 清单 7.jQuery 的 each 方法－－－遍历集合型对象的简便方法

<div>

    //用基于元素名称的选择器去匹配页面中的所有链接元素  $("a").each(function(index,ele){//匿名函数作为 each 方法的参数，供其调用  console.log("链接"+index+":"+ele.href);//往控制台中打印链接 URL  });

</div>

现在，您不妨做一个练习，来改变 ID 为 tip
的元素使其能够以粗体显示。我们知道，要让一个元素粗体显示，只要指定其 CSS
属性 font-weight 为 bold
即可。也就是说，实现这样一个功能，我们需要的选择器是"
#tip"，对应的操作是修改
CSS 属性。因此，jQuery 的代码是：

<div>

    $("#tip").css("font-weight","bold");

</div>

您可以使用本教程配套的在线代码编辑器直接编写代码练习上面的代码：

<http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=HelloWorld.htm>

在线代码编辑器效果如下图所示：

<div style="width: 586px;">

[![image009OnlineCode](http://cdn2.jobbole.com/2013/12/image009OnlineCode.jpg "图 4. 在线代码编辑器"){width="576"
height="437"}](http://cdn2.jobbole.com/2013/12/image009OnlineCode.jpg "图 4. 在线代码编辑器")

图 4. 在线代码编辑器

</div>

jQuery 选择器:jQuery 利器
-------------------------

了解 jQuery 的语法后，我们明白选择器是 jQuery 中的核心概念。下面介绍
jQuery 几种常见的选择器。这些选择器我们大都可以从 CSS
中找到它们的影子。

前文讲到 Chrome
浏览器中的开发者工具表达式监视功能可以让我们直观地看到
$函数返回值的各个属性和方法。因此，在我们学习
jQuery 甚至实际工作过程中都可以通过 Chrome
浏览器的表达式监控工具直接观察指定的选择器表达式所匹配的元素，以便实时地确定所要使用的选择器表达式是否正确。

### 基于元素 ID 的选择器

这种选择器可以指定唯一的一个元素。清单 3
的代码就是使用这种选择器。其语法是：

"
#元素 ID"

如果要对一个特定的元素进行操作，那么就可以设置该元素的 ID
属性值，然后使用基于 ID 的选择器指定要进行操作的元素。比如，如下 HTML
片段中的 ID 为 btnTest 的元素，就可以用基于元素 ID
的选择器"
#btnTest"来指定。

<div>

    <input type="button" id="btnTest" value="Test"></input>

</div>

如图 5 所示：

<div style="width: 585px;">

[![image011IDSelection](http://cdn2.jobbole.com/2013/12/image011IDSelection.jpg "图 5. 基于元素 ID 的选择器"){width="575"
height="140"}](http://cdn2.jobbole.com/2013/12/image011IDSelection.jpg "图 5. 基于元素 ID 的选择器")

图 5. 基于元素 ID 的选择器

</div>

（在线例子<http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=IDSelector.htm>）

### 基于元素标签名的选择器

如果要对标签名相同的元素（如都是用标签"A"表示的超链接元素）进行操作，则可以使用基于标签名的选择器。其语法如下：

"元素名"

在 CSS 中，我们可以用元素标签名做选择器。比如，下面的 CSS
规则表示将所有链接的字体尺寸设置为 25 像素。

<div>

    a{  font-size:25px;  }

</div>

通过 jQuery 代码实现上述 CSS
规则的功能，我们可以使用元素标签名作为选择器。代码如清单 8 所示：

##### 清单 8.使用元素标签名作为选择器

<div>

    $("a").each(function(){//选择器表达式是"a"  $(this).css("fontSize","25px");  });

</div>

在线例子：<http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=EleNameSelector.htm>

### 基于 CSS 类名选择器

jQuery 也支持 CSS 所支持的类名选择器。其语法是：

".类名"

假设我们要把页面中所有表示金额的输入框的值都在其前面加一个货币符号前缀。这样的功能实现的时候就可以用基于类名的选择器了：在页面中将所有表示金额的输入框元素的
class 属性值设为"amount"。再通过如下代码实现添加货币符号的功能。

##### 清单 9.使用 CSS 类名作为选择器

<div>

    /*  选择所有类为 amount 的元素  each 方法会针对选择器所匹配的每个元素  调用该方法的参数中所指定的函数。并将该  元素作为函数调用的第二个实际参数。  */  $(".amount").each(function(i,ele){  //设置元素的值为其当前值加上货币符号前缀  $(ele).val('￥'+$(ele).val());  });

</div>

在线例子：<http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=ClsNameSelector.htm>

### 基于元素属性的选择器

jQuery 也支持基于元素属性的选择器。其语法是：

"元素名
[属性名=属性指
]"

比如下面的 CSS 规则描述了将所有的文本框的背景色设为黄色。

<div>

    input[type="text"]{  background-color:yellow;  }

</div>

如上面的页面效果用 jQuery
代码实现，则可以使用属性选择器来编写相应的代码：

##### 清单 10.使用元素属性作为选择器

<div>

    $("input[type=text]").css('background-color','yellow');

</div>

在线例子：[http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=AttrSelctor.htm](http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=AttrSelector.htm)

### 基于 DOM 对象的选择器

jQuery 也支持使用 DOM
对象作为选择器。这种选择器在一些特定情况下会显得非常有用和方便。

比如清单 3 所示的例子中，监听页面加载（load）事件的监听器 initPage
是通过 body 元素的 onload 属性来指定的。jQuery
提供了一种简便的方法来处理页面的 load 事件绑定。其方法就是使用 document
对象作为选择器传递给
$函数。然后调用给函数返回值的 ready
方法。调用时将事件监听器函数作为 ready 方法的参数传入。因此，清单 3
所示例子中的页面 load 事件绑定可以用 jQuery
代码的方式实现，如下代码所示：

##### 清单 11.使用 ready 方法处理页面 load 事件

<div>

    $(document).ready(initPage);//页面加载完毕后，jQuery 会回调 initPage

</div>

页面 load 事件的绑定也可以直接将事件监听器函数作为 
$
函数的参数直接对该函数进行调用。此时，
$ 函数会在页面加载完毕（即 HTML
文档及相关资源文件，如 CSS、图片和 JavaScript
文件，加载完毕后触发）后，回调这个事件监听器。因此，上述代码也可以写作：

##### 清单 12.直接将函数传递给
$函数处理页面 load 事件

<div>

    $(initPage);

</div>

通常，这样的事件监听器可以写成匿名函数。如下代码所示：

##### 清单 13.使用匿名函数

<div>

    $(function(){//该函数在页面加载完毕会被 jQuery 调用  //事件处理代码  });

</div>

### 其它选择器

jQuery
还支持其它类型的选择器，如基于伪类的选择器、基于元素层次关系的选择器等。有关选择器的进一步信息，您可以参考
jQuery 的 API
文档：[http://api.juery.com/category/selectors](http://api.jquery.com/category/selectors)。

jQuery 的架构：支持插件机制
---------------------------

jQuery 支持提供插件的方式扩展其功能。从这个角度来将，当我们提到 jQuery
时，默认就是指 jQuery 内核(Core)，它是由 jQuery
官方组织所开发和维护的。而使用者则可以根据需要开发一些插件。本教程后面会介绍一些常用
jQuery UI 插件，以及如何自定义一个插件。

### jQuery 事件:轻松实现跨浏览器的事件处理

bind
方法可以实现事件监听器的绑定。下面看一个具体的例子。这个例子实现这样一个功能：

按钮被单击后，其下方会显示或者隐藏一段文本。

##### 清单 14.使用 bind 方法绑定事件监听器

<div>

    //当 ID 为 btnDetails 的按钮被单击时，下面的匿名函数会被 jQuery 调用  $("#btnDetails").bind("click",function(){  $("#divDetails").toggle();//显示或者隐藏 ID 为 divDetails 的元素  });

</div>

从上述的例子（在线例子：<http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=EvtBinding.htm>）中可以看出。当选择器所匹配的元素被单击时，
bind 方法的第二个参数所指定的函数会被 jQuery
调用。而负责显示/隐藏` divDetails `块的代码就会随着其所在的函数被调用而被执行，从而实现了预期的页面效果。

bind 方法的语法是：

event ：要处理的事件的名称。该名称不需要加前缀 on。

handler
：事件监听器，即对浏览器事件进行处理的函数。这通常是一个匿名函数。在
event 参数所表示的事件被触发后，jQuery
会调用这个函数（即回调），并向该函数传入一个 jQuery
自定义的事件对象。该事件对象是 jQuery
根据原始的浏览器事件对象创建的。jQuery
这么做是通过一个"中立"的事件对象来规避不同的浏览器所提供的同一个事件的事件对象的属性不同的问题。这使得我们可以用同样的代码处理事件，而不必关心不同浏览器所提供的原始事件对象的差异。

data ：表示需要在事件触发后传递给事件监听器的额外数据。它是作为 jQuery
事件对象的 data 属性传递给事件监听器的。

下面看具体的例子。

### 使用 jQuery 事件对象

对某些事件的处理，我们可能需要从事件对象中获取当前事件的进一步信息。

假设页面上有个输入框只允许输入数字。当用户输入的字符为非数字字符时，页面能够自动将其"过滤"掉，即在输入框中不显示这些无效的字符。实现这样的功能就需要从表示用户输入的
keypress
事件对象中获取用户当前所按的键的键盘编码值，以便找出相应的字符。代码如清单
15 所示：

##### 清单 15.使用 jQuery 事件对象

<div>

    $("#txtVerifyCode").bind("keypress",function(evt){  var keyCode=evt.which;//从事件对象中获取当前按键的编码值  var char=String.fromCharCode(keyCode) ;//将按键的编码转换为相应的字符  if(!/
d/.test(char)){//当前输入的字符不是数字字符  //调用事件对象的 preventDefault 方法，取消事件的默认行为，此处即取消输入。  evt.preventDefault();  }  });

</div>

从上面的例子（在线例子：<http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=JqEvtObj.htm>）可以看出，具体是什么按键触发了
keypress 事件的信息可以从 jQuery 封装的 jQuery 对象的相应属性 keyCode
中获取。而 jQuery
在调用我们的事件监听器时会将其封装的事件对象作为唯一参数传递给事件监听器。

### 向事件监听器传递额外参数

下面看一个向监听器传递额外参数的例子。

假设现在有个能够在页面中显示提示信息的函数，其定义如下：

<div>

    function showTip(msg){  $('#divTips').html(msg);//显示具体的提示内容  }

</div>

页面上有两个按钮，它们被单击的时候页面上分别会显示不同的提示信息。那么，我们可以编写如下的事件监听器：

##### 清单 16.从事件对象中获取额外数据

<div>

    function showTipHandler(evt){  var data=evt.data;//获取额外参数  /*额外参数是一个我们根据需要的自定义对象。这里，我们假设这个对象有个 msg 属性。  它表示希望要显示的提示信息。  */  var msg=data.msg;  showTip(msg);  }

</div>

那么，我们就可以在事件绑定的时候，使用上面定义的事件监听器。并定义其额外参数。代码如下：

##### 清单 17.向事件监听器传递额外数据

<div>

    $('#tip1').bind('click',{msg:'中文提示'},showTipHandler);  $('#tip2').bind('click',{msg:'English tip'},showTipHandler);

</div>

从上面的例子（在线例子：<http://blog.viscenthuang.info/jQuery/page/CodeDemo.htm?code=EvtObjExtraData.htm>）可以看出，在调用
bind 方法绑定事件监听器时指定的额外数据（即 bind 方法的第 2
个参数）可以被事件监听器通过访问事件对象的 data
属性来获取。这个特性在使用统一个事件监听器出来多个元素的事件时显得很有用。

**事件绑定的简便方法**

通过 bind 方法实现事件绑定，需要我们在 bind
方法的第一个参数中指定具体的事件名。

jQuery 也提供一些简便的事件绑定方法。这些方法就以所要处理的事件名命名。

比如，清单 15 中的代码可以写成：

<div>

    $("#txtVerifyCode").keypress(function(evt){  //这里是事件处理代码  });

</div>

### 取消事件绑定

如果要取消某个事件监听器。则可以使用 unbind 方法。

下面的例子演示了取消 ID 为 btnTest 的按钮上的事件监听器 handleClick
。代码如下:

##### 清单 18.取消事件绑定

<div>

    $("#btnEvtBind").click(handleClick);  //按钮 btnTest 被单击后，btnEvtBind 按钮不再能够响应 click 事件  $("#btnTest").click(function(){  //使得 handleClick 监听器不再起作用  $("#btnEvtBind").unbind("click",handleClick);  });

</div>

调用 unbind 方法时，如果不指定第二个参数，则 jQuery
会取消监听第一个参数所指定的事件的所有监听器。若没有指定任何参数，则
jQuery 会取消选择器表达式匹配的所有元素上所有监听器。

总结
----

本文讲解了 jQuery 的语法、选择器及其事件处理 API。这些是 jQuery
的核心，也是使用 jQuery
及学习本系列教程后续内容的基础。虽然这些内容不是很难掌握，但编程毕竟是一种技能，而非知识，技能是需要通过练习才能获得的。因此，建议您利用本教程提供的在线例子，自己动手试着去做一下练习，并在练习过程中体会教程所讲解的内容。

<div>

<div>

### 相关文章

-   [使用 jQuery UI 和 jQuery 插件构建更好的 Web
    应用程序](http://blog.jobbole.com/21866/)
-   [如何忘却jQuery，开始使用JavaScript原生API](http://blog.jobbole.com/52195/)
-   [15个强大的jQuery开发提示和技巧](http://blog.jobbole.com/7026/)
-   [简讯：jQuery 2.0将不再支持IE 6/7/8](http://blog.jobbole.com/22687/)
-   [50个jQuery代码段帮你成为更出色的JS开发者](http://blog.jobbole.com/18513/)
-   [jQuery 1.10.0 和 jQuery 2.0.1 发布](http://blog.jobbole.com/40197/)
-   [HTML5+CSS3+jQuery制作视频播放器完全指南](http://blog.jobbole.com/19321/)
-   [jQuery 2.0 Beta 2 发布](http://blog.jobbole.com/35430/)
-   [我眼中的技术高手](http://blog.jobbole.com/36327/)
-   [如何做到 jQuery-free？](http://blog.jobbole.com/39546/)

</div>

</div>

[jQuery 实验教程：jQuery
简介、语法及事件处理](http://blog.jobbole.com/52682/)，首发于[博客 -
伯乐在线](http://blog.jobbole.com/)。

</div>
