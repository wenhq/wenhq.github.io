--- 
layout: post 
title: Javascript执行效率小结 
date:'2013-04-02T13:06:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-04-02T13:06:15.537+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-4568697744236247333
blogger\_orig\_url: http://binaryware.blogspot.com/2013/04/javascript.html
---
[Javascript执行效率小结](http://blog.jobbole.com/37306/?utm_source=rss&utm_medium=rss&utm_campaign=javascript%25e6%2589%25a7%25e8%25a1%258c%25e6%2595%2588%25e7%258e%2587%25e5%25b0%258f%25e7%25bb%2593):

来源：[逆风之羽](http://www.cnblogs.com/gewei/archive/2013/03/29/2988180.html "逆风之羽")

Javascript是一门非常灵活的语言，我们可以随心所欲的书写各种风格的代码，不同风格的代码也必然也会导致执行效率的差异，开发过程中零零散散地接触到许多提高代码性能的方法，整理一下平时比较常见并且容易规避的问题


Javascript自身执行效率
======================

Javascript中的作用域链、闭包、原型继承、eval等特性，在提供各种神奇功能的同时也带来了各种效率问题，用之不慎就会导致执行效率低下。


1、全局导入
-----------

我们在编码过程中多多少少会使用到一些全局变量（window,document,自定义全局变量等等），了解javascript作用域链的人都知道，在局部作用域中访问全局变量需要一层一层遍历整个作用域链直至顶级作用域，而局部变量的访问效率则会更快更高，因此在局部作用域中高频率使用一些全局对象时可以将其导入到局部作用域中，例如：


    1 //1、作为参数传入模块
     2 (function(window,$){
     3     var xxx = window.xxx;
     4     $("#xxx1").xxx();
     5     $("#xxx2").xxx();
     6 })(window,jQuery);
     7 
     8 //2、暂存到局部变量
     9 function(){
    10     var doc = document;
    11     var global = window.global;
    12 }

2、eval以及类eval问题
---------------------

我们都知道eval可以将一段字符串当做js代码来执行处理，据说使用eval执行的代码比不使用eval的代码慢100倍以上（具体效率我没有测试，有兴趣同学可以测试一下）


> JavaScript
> 代码在执行前会进行类似“预编译”的操作：首先会创建一个当前执行环境下的活动对象，并将那些用
> var 申明的变量设置为活动对象的属性，但是此时这些变量的赋值都是
> undefined，并将那些以 function
> 定义的函数也添加为活动对象的属性，而且它们的值正是函数的定义。但是，如果你使用了“eval”，则“eval”中的代码（实际上为字符串）无法预先识别其上下文，无法被提前解析和优化，即无法进行预编译的操作。所以，其性能也会大幅度降低

其实现在大家一般都很少会用eval了，这里我想说的是两个类eval的场景(`new Function{}`,`setTimeout`,`setInterver`)


    setTimtout("alert(1)",1000);

    setInterver("alert(1)",1000);

    (new Function("alert(1)"))();

上述几种类型代码执行效率都会比较低，因此建议直接传入匿名方法、或者方法的引用给setTimeout方法


3、闭包结束后释放掉不再被引用的变量
-----------------------------------

    var f = (function(){
        var a = {name:"var3"};
        var b = ["var1","var2"];
        var c = document.getElementByTagName("li");
        //****其它变量
        //***一些运算
        var res = function(){
            alert(a.name);
        }
        return res;
    })()

上述代码中变量f的返回值是由一个立即执行函数构成的闭包中返回的方法res，该变量保留了对于这个闭包中所有变量（a,b,c等）的引用，因此这两个变量会一直驻留在内存空间中,尤其是对于dom元素的引用对内存的消耗会很大，而我们在res中只使用到了a变量的值，因此，在闭包返回前我们可以将其它变量释放


    var f = (function(){
        var a = {name:"var3"};
        var b = ["var1","var2"];
        var c = document.getElementByTagName("li");
        //****其它变量
        //***一些运算
        //闭包返回前释放掉不再使用的变量
        b = c = null;
        var res = function(){
            alert(a.name);
            }
        return res;
    })()

Js操作dom的效率
===============

在web开发过程中，前端执行效率的瓶颈往往都是在dom操作上面，dom操作是一件很耗性能的事情，如何才能在dom操作过程中尽量节约性能呢？


1、减少reflow
-------------

### 什么是reflow？

> 当 DOM 元素的属性发生变化 (如 color) 时,
> [浏览器](http://blog.jobbole.com/12749/ "浏览器")会通知 render
> 重新描绘相应的元素, 此过程称为 repaint。

> 如果该次变化涉及元素布局 (如 width), 浏览器则抛弃原有属性,
> 重新计算并把结果传递给 render 以重新描绘页面元素, 此过程称为 reflow。

### 减少reflow的方法

1.  先将元素从document中删除，完成修改后再把元素放回原来的位置（当对某元素及其子元素进行大量reflow操作时，1,2两种方法效果才会比较明显）
2.  将元素的display设置为”none”，完成修改后再把display修改为原来的值
3.  修改多个样式属性时定义class类代替多次修改style属性（for
    certain同学推荐）
4.  大量添加元素到页面时使用documentFragment

例如


    for(var i=0;i<100:i++){
        var child = docuemnt.createElement("li");
        child.innerHtml = "child";
        document.getElementById("parent").appendChild(child);
    }

上述代码会多次操作dom，效率比较低，可以改为下面的形式
创建documentFragment，将所有元素加入到docuemntFragment不会改变dom结构，最后将其添加到页面，只进行了一次reflow


    var frag = document.createDocumentFragment();
    for(var i=0;i<100:i++){
            var child = docuemnt.createElement("li");
            child.innerHtml = "child";
        frag.appendChild(child);
    }
    document.getElementById("parent").appendChild(frag);

2、暂存dom状态信息
------------------

当代码中需要多次访问元素的状态信息，在状态不变的情况下我们可以将其暂存到变量中，这样可以避免多次访问dom带来内存的开销，典型的例子就是：


    var lis = document.getElementByTagName("li");
    for(var i=1;i<lis.length;i++){
        //***
    }
    上述方式会在每一次循环都去访问dom元素，我们可以简单将代码优化如下
    var lis = document.getElementByTagName("li");
    for(var i=1,j=lis.length ;i<j;i++){
        //***
    }

3、缩小选择器的查找范围
-----------------------

查找dom元素时尽量避免大面积遍历页面元素，尽量使用精准选择器，或者指定上下文以缩小查找范围，以jquery为例


-   少用模糊匹配的选择器：例如`$("[name*='_fix']")`，多用诸如id以及逐步缩小范围的复合选择器`$("li.active")`等
-   指定上下文：例如`$("#parent .class")`，`$(".class",$el)`等

4、使用事件委托
---------------

**使用场景：**一个有大量记录的列表，每条记录都需要绑定点击事件，在鼠标点击后实现某些功能，我们通常的做法是给每条记录都绑定监听事件，这种做法会导致页面会有大量的事件监听器，效率比较低下。

**基本原理：**我们都知道dom规范中事件是会冒泡的，也就是说在不主动阻止事件冒泡的情况下任何一个元素的事件都会按照dom树的结构逐级冒泡至顶端。而event对象中也提供了event.target（IE下是srcElement）指向事件源，因此我们即使在父级元素上监听该事件也可以找到触发该事件的最原始的元素，这就是委托的基本原理。废话不多说，上示例


    $("ul li").bind("click",function(){
        alert($(this).attr("data"));
    })

上述写法其实是给所有的li元素都绑定了click事件来监听鼠标点击每一个元素的事件，这样页面上会有大量的事件监听器。

根据上面介绍的监听事件的原理我们来改写一下


    $("ul").bind("click",function(e){
        if(e.target.nodeName.toLowerCase() ==="li"){
            alert($(e.target).attr("data"));
        }
    })

这样一来，我们就可以只添加一个事件监听器去捕获所有li上触发的事件，并做出相应的操作。

当然，我们不必每次都做事件源的判断工作，可以将其抽象一下交给工具类来完成。jquery中的delegate()方法就实现了该功能

语法是这样的`$(selector).delegate(childSelector,event,data,function)`，例如：


    $("div").delegate("button","click",function(){
      $("p").slideToggle();
    });

    <code>参数说明（引自w3school）</code>

  参数              描述
  ----------------- --------------------------------------------------------------------------------
  *childSelector*   必需。规定要附加事件处理程序的一个或多个子元素。
  *event*           必需。规定附加到元素的一个或多个事件。由空格分隔多个事件值。必须是有效的事件。
  *data*            可选。规定传递到函数的额外数据。
  *function*        必需。规定当事件发生时运行的函数。



**Tips:**事件委托还有一个好处就是，即使在事件绑定之后动态添加的元素上触发的事件同样可以监听到哦，这样就不用在每次动态加入元素到页面后都为其绑定事件了


#### 相关文章

-   [![JavaScript
    项目优化总结](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/32572/)[JavaScript
    项目优化总结](http://blog.jobbole.com/32572/)
-   [![对 JavaScript
    进行单元测试的工具](http://blog.jobbole.com/wp-content/uploads/2012/10/jsunit-01-150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/29747/)[对 JavaScript
    进行单元测试的工具](http://blog.jobbole.com/29747/)
-   [![Javascript模块化编程（三）：require.js的用法](http://blog.jobbole.com/wp-content/uploads/2012/11/bg2012110701-150x138.png){width="150"
    height="138"}](http://blog.jobbole.com/30046/)[Javascript模块化编程（三）：require.js的用法](http://blog.jobbole.com/30046/)
-   [![design-patterns-in-javascript](http://blog.jobbole.com/wp-content/uploads/2012/08/design-patterns-in-javascript-150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/25537/)[理解JavaScript中的设计模式](http://blog.jobbole.com/25537/)
-   [![网易邮箱前端Javascript编码规范：类规范](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/19203/)[网易邮箱前端Javascript编码规范：类规范](http://blog.jobbole.com/19203/)
-   [![从 JavaScript
    数组去重谈性能优化](http://blog.jobbole.com/wp-content/uploads/2013/02/js-performance-optimization-150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/33099/)[从 JavaScript
    数组去重谈性能优化](http://blog.jobbole.com/33099/)
-   [![浅谈JavaScript的编码规范](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/1469/)[浅谈JavaScript的编码规范](http://blog.jobbole.com/1469/)
-   [![高效的JavaScript单元测试
    ](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/8861/)[高效的JavaScript单元测试](http://blog.jobbole.com/8861/)
-   [![JavaScript：打破所有规则](http://blog.jobbole.com/wp-content/uploads/2012/10/2012100710575370-150x126.png){width="150"
    height="126"}](http://blog.jobbole.com/29061/)[JavaScript：打破所有规则](http://blog.jobbole.com/29061/)
-   [![如何编写可维护的面向对象JavaScript代码](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/18191/)[如何编写可维护的面向对象JavaScript代码](http://blog.jobbole.com/18191/)

[Javascript执行效率小结](http://blog.jobbole.com/37306/)，首发于[博客 -
伯乐在线](http://blog.jobbole.com/)。
