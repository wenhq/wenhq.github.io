--- 
layout: post 
title: javascript必知必会+理解总结 
date: '2013-05-14T13:20:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-05-14T13:20:18.914+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-9133960475139195537
blogger\_orig\_url: http://binaryware.blogspot.com/2013/05/javascript.html
---
[javascript必知必会+理解总结](http://blog.jobbole.com/39571/?utm_source=rss&utm_medium=rss&utm_campaign=javascript%25e5%25bf%2585%25e7%259f%25a5%25e5%25bf%2585%25e4%25bc%259a%25e7%2590%2586%25e8%25a7%25a3%25e6%2580%25bb%25e7%25bb%2593):

英文原文：[What should every JavaScript programmer
know?](http://stackoverflow.com/questions/2628672/what-should-every-javascript-programmer-know) 编译：[西城一隅](http://www.ccforward.net/ "西城一隅")

这是stackoverflow上的一个老问题，却有个干货答案，但是扩展的信息量很大，我只在此抛个砖。

Not jQuery. Not YUI. Not 等等…

js的框架的确很有用，但是它们却常常把一些js的丑陋细节和DOM原理给你隐藏了。如果你的目标是做一个[精通JavaScript](http://click.union.360buy.com/JdClick/?unionId=16231&to=http://book.360buy.com/10138436.html "精通JavaScript")的工程师，那花大把的时间放在框架上可能恰恰背道而驰了。

下面就有javascript这门语言的一些特性，你应该知道并且深谙此道，但是很多人可能还并不清楚。

一、对象属性，object.prop和object
['prop'
]是一回事(所以你能停止使用eval了吗？！3KU)；对象的属性多是String类型（有些也是数组Array）

for…in是什么情况下使用，什么情况慎用？


<div>

方括号可以通过变量来访问属性

    person.name;
    person['name'];
    var propertyName = 'name';
    person[propertyName]; // name

当属性是带空格的string时就只能用方括号了：person
['first name'
];

for…in 循环输出的属性名顺序不可预测,使用之前先检测对象是否为null 或者
undefined

</div>

二、属性检测；undefined和null；为什么鲜为人知的in运算符非常有用，以及它和typeof、undefined的区别；hasOwnProperty；delete作用

undefined好理解一般用来表示未定义，而且不能用delete来删除它。

null 表示一个空对象指针 所以 typeof null返回 object

undefined派生自null alert(null == undefined) 返回true; 但alert(null ===
undefined)就返回false了

关于hasOwnProperty和Object：

**hasOwnProperty是js中唯一一个处理属性但是不查找原型链的函数**


<div>

    Object.prototype.prop = 'propsss';
    var obj = {und:undefined};

    obj.prop; // propsss
    'und' in obj; // true

    obj.hasOwnProperty('prop'); // false
    obj.hasOwnProperty('und'); // true
    //只有hasOwnProperty可以给出正确和期望的结果，尤其在遍历一个对象时
    //除了hasOwnProperty外，没有其他方法可以排除原型链上的属性（不是定义在对象自身上的属性）

    //如果hasOwnProperty被占用呢？来看：
    var obj = {
        hasOwnProperty: function(){
            return false;
        },
        prop: 'this is bad...'
    };
    obj.hasOwnProperty('prop'); // 总是返回false
    //这样解决：
    {}.hasOwnProperty.call(obj,'prop'); // 返回true

var o =new Object();

Object的每个实例都具有下列属性方法：

1.Constructor：保存着用于创建当前对象的函数 上面例子 构造函数就是
Object()

2.hasOwnProperty(prop):检查给定的属性是否在当前对象实例中（而不是在实例的原型中）。作为参数的属性必须以string形式指定

3.isPrototypeOf(object):用于检查传入的对象是否是另一个对象的原型。

4.propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for
in语句

5.toLocaleString():返回对象的字符串表示，与环境的地区对应

6.toString():同上

7.valueOf():
返回对象的字符串、number、Boolean表示。通常与toString()相同

三、Number类型就是浮点类型（64位浮点数）；使用浮点数会遇到语言无关性的问题；避免使用parseInt时的八进制陷阱

ECMAScript5不具有解析八进制的能力，可在IE7和chrome上测试 parseInt(069);

ES3和ES5之间存在分歧

javascript中的乘法问题：

一般可以用 10000 作为基数

31.12 
* 10000 
* 9.7 / 10000

</div>

四、嵌套函数作用域；避免全局变量导致的意外而使用var的必要性；闭包的作用域如何结合使用；在循环与闭包的问题

作用域和var关键字的面试题


<div>

    function(){
    var a=b=10;
    }
    console.log(a);
    console.log(b);

循环中使用闭包

    function createFunctions(){
        var result = new Array();
        for(var i=0;i<10;i++){
            result[i] = fucntion(){
                return i;
            }
        }
        return result;
    }
    //每个函数的作用域链中都保存着createFunctions()函数的活动对象，所以他们引用的都是同一个变量i。
    //当createFunctions()返回后 变量i的值是10
    //所以可以这样写
    for(var i=0;i<10;i++){  
      result[i] = function(num){
        return function(){  
            return num;  
        };  
      }(i);  
    }

之前写过的闭包的理解[关于闭包](http://www.ccforward.net/2013/01/js_closure.html)

五、全局变量和window对象的属性产生冲突怎么办（它们其实是一回事）；全局变量和DOM元素在IE中的冲突；在全局作用域中使用var来避免这些问题

六、
function语句在解析时会被提升（不管function被放置在哪里，它都会被移动到定义时所在作用域的顶层）
函数声明和函数表达式；为什么命名函数表达式不应该使用

关于**函数声明提升**：

解析器会执行一个函数声明提升（function decalaration
hoisting）的过程，读取并将函数声明添加到执行环境中。

对代码求值时js引擎在第一遍会声明函数并将它们放到源代码树的顶部。

</div>

<div>

    alert(sum(10,10))
    function sum(n1,n2){
        return n1+n2;
    }
    //单独使用下面代码时，函数表达式会出错：
    alert(sum(10,10));
    var sum = function (n1,n2){
        return n1+n2;
    }

**关于命名函数表达式**：

1、命名函数表达式即被认为是函数声明也被认为是函数表达式

    typeof g; // "function"
    var f = function g(){};
    //上面这个例子论证了 jScript 是如何把一个命名函数表达式处理成一个函数声明的
    //在函数声明发生之前就把 g 给解析了   【在IE中检测】

2、命名函数表达式还能创建两个不同的函数对象—-这是js的bug

    var f = function g(){};
    f === g;  //false

    f.prop = 'a prop';
    g.prop; // undefined  【在IE中检测】

竟然创建了两个对象，他们之间还不是引用的关系，是不是很有趣。。。我只能说：呵呵
interesting……

3、在条件语句中命名函数表达的声明式仍然会被解析

    var f = function g(){
        return 1;
    };
    if(false){
        f= function g(){
            return 100;
        };
    }
    g(); //猜猜返回什么 【在IE中检测】

    //还有arguments也中枪了
    var f = function g(){
        return [
          arguments.callee == f,
          arguments.callee == g
        ];
      };
    console.log(f()); // [true, false]
    console.log(g()); // [false, true]   【在IE中检测】

注：上面的3条准确的说应该是算是jScript的bug

七、构造函数;prototype属性;new运算符的运行机制;利用这些方法实现一个类-子类-实例的系统;在何时应该考虑使基于闭包的对象来替代原型设计

</div>

<div>

[看看面向对象吧](http://www.ccforward.net/2013/01/javascript_oop.html)

</div>

八、this是在函数调用时才被确定的而不是定义的时候；把函数当做参数传入时不像其他语言那样执行；如何使用闭包或者Function.prototype.bind来解决这些问题呢


<div>

关于this的调用，直接上代码：

    var Dog = {
        toString: function() { return 'dog';},
        fn: function() { alert(this);},
    };
    var Cat = {
        toString: function() { return 'cat';}
    };

    Dog.fn(); // dog
    Dog['fn']() // dog

    Cat.fn = Dog.fn;
    Cat.fn(); // cat

    var func = Dog.fn;
    func(); // window

上面代码很简单 请自行补脑……

    Obj.method = function() {
        var self = this;
        function test() {
            //this 被设置为全局对象（window）
            //self 指向 Obj 对象
        }
    }

    //想到了arguments做个低耦合的递归求阶乘
    function factorial(num) {
        if(num<=1)
            return 1;
        else
            return num*arguments.callee(num-1);
    }
    //callee指向拥有这个arguments对象的函数

[之前写过的关于this的理解](http://www.ccforward.net/2013/01/js_this.html)

**关于Function.prototype.bind(thisArg 
[, arg1 
[, arg2, …
]
])：**

****这是ECMAScript
5中的方法[看看Opera的对它的介绍吧](http://dev.opera.com/articles/view/introducing-ecmascript-5-1/#function-bind)

简单翻译就是：

Function.prototype.bind 返回一个新的函数对象，该对象的 this
绑定到了thisArg参数上。本质就是：这允许你在其他对象链中执行一个函数

但是很多[浏览器](http://blog.jobbole.com/12749/ "浏览器")不支持，通过一个js的hack看看原理吧：

    if(!Object.bind){
        Function.prototype.bind = function(owner){
            var self = this;
            var args = Array.prototype.slice.call(arguments,1);
            return function() {
                return self.allpy(
                    args.length===0 ? arguments : arguments.length===0? args:
                        args.contact(Array.prototype.slice.call(arguments,0))
                );
            };
        };
    }

</div>

九、其他的ES5新特性如indexOf  、 forEach
以及Array使用函数式编程；旧浏览器如何兼容这些新的方法；使用匿名函数调用这些方法来使代码更加紧致具有可读性


<div>

    Array.prototype.indexOf(searchString ,position)
        var data = [1,3,5,7,9];
        console.log(data.indexOf(5)); //2
        console.log(data.indexOf(5,4)); //-1  从4号位开始搜索
        console.log(data.indexOf('7'));  //-1  7!== '7'

    Array.prototype.lastIndexOf //从末尾开始查找
    Array.prototype.some //某些条件符合
        var arr = [1,2,3,4,11];
        function larger(item){
            return item> 10    
        }
        console.log(arr.some(larger)?'ok':'no...');
        //注：只要有一条符合 即返回true 不再执行

    Array.prototype.every // all符合  和some相比就是返回的 true 和 false 调换一下

    Array.prototype.forEach //类似jQ里的each
        [1, 2 ,3, 4].forEach(alert);
        [1, 2 ,3, 4].forEach(console.log);//FF下运行 不知为什么chrome不行。。。。。

    Array.prototype.map //映射 类似forEach 把原数组映射成新数组
        var arr = [1,3,5,7];
        var result = arr.map(function(item){
            return item * item;
        });
        console.log(result); //求各项平方

    Array.prototype.filter //筛选
        var filter = [0,2,3,0,undefined].filter(function(item){
            return item;
        });
        console.log(filter);
        //filter的callback函数需要返回值为 true 或 false。若为false则过滤掉

    Array.prototype.reduce //不是减少  是一种迭代
        var sum = [1,2,3,4,5].reduce(function(pre,current,index,array) {
            return pre + current;
        });
    console.log(sum); //15

    Array.prototype.reduceRight //right 自然是从数组末未开始

这些都是 ES5 中 Array 对象的扩展方法

PS:还是[点此自行补脑](http://dev.opera.com/articles/view/javascript-array-extras-in-detail/)，我也在研究中…..后续会再补充

十、浏览器和js代码之间控制流程的原理；同步和异步执行；事件在运行时触发和事件在控制返回时触发的区别；调用同步执行的方法如alert而引起控制流重新进入的潜在问题（翻译不通，请自行补脑）。

十一、跨window脚本对instanceof的影响
在不同的DOM中跨window脚本对控制流的影响；postMessage怎么解决这个问题

postMessage就是HTML5解决跨域问题引入的API，使得多个iframe/window实现跨域通信。

写了个postMessage跨域通信的demo： [点此查看](http://www.ccforward.net/coding/html5css3/postMessage.html)

最重要的是，你需要批判的去看待javascript，承认因为种种历史原因而导致各种不完美（甚至比其他语言还要糟糕），并要避免各种陷阱。Crockford在这方面的研究很值得学习（虽然我不完全认同他的《[JavaScript语言精粹](http://click.union.360buy.com/JdClick/?unionId=16231&to=http://book.360buy.com/10067180.html "JavaScript语言精粹")》）

</div>

#### 相关文章

-   [![阮一峰：Javascript的10个设计缺陷](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/995/)[阮一峰：Javascript的10个设计缺陷](http://blog.jobbole.com/995/)
-   [![浅谈JavaScript的语言特性](http://blog.jobbole.com/wp-content/plugins/wordpress-23-related-posts-plugin/static/thumbs/3.jpg)](http://blog.jobbole.com/36657/)[浅谈JavaScript的语言特性](http://blog.jobbole.com/36657/)
-   [![网易邮箱前端Javascript编码规范：类规范](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/19203/)[网易邮箱前端Javascript编码规范：类规范](http://blog.jobbole.com/19203/)
-   [![Javascript定义类（class）的三种方法](http://blog.jobbole.com/wp-content/uploads/2012/07/three-methods-of-Javascript-defined-class2-150x150.png){width="150"
    height="150"}](http://blog.jobbole.com/23563/)[Javascript定义类（class）的三种方法](http://blog.jobbole.com/23563/)
-   [![JavaScript：运算符](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/28884/)[JavaScript：运算符](http://blog.jobbole.com/28884/)
-   [![design-patterns-in-javascript](http://blog.jobbole.com/wp-content/uploads/2012/08/design-patterns-in-javascript-150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/25537/)[理解JavaScript中的设计模式](http://blog.jobbole.com/25537/)
-   [![JavaScript:
    数据类型](http://www.jobbole.net/wp-content/uploads/2013/02/javascript-logo-150x150.png)](http://blog.jobbole.com/26859/)[JavaScript:
    数据类型](http://blog.jobbole.com/26859/)
-   [![50个jQuery代码段帮你成为更出色的JS开发者](http://blog.jobbole.com/wp-content/uploads/2012/04/snippets-150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/18513/)[50个jQuery代码段帮你成为更出色的JS开发者](http://blog.jobbole.com/18513/)
-   [![测试：你自认为理解了JavaScript？](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/30468/)[测试：你自认为理解了JavaScript？](http://blog.jobbole.com/30468/)
-   [![Javascript模块化编程（一）：模块的写法](http://blog.jobbole.com/wp-content/uploads/2012/10/javascript-module-01-150x150.jpg){width="150"
    height="150"}](http://blog.jobbole.com/29553/)[Javascript模块化编程（一）：模块的写法](http://blog.jobbole.com/29553/)

[javascript必知必会+理解总结](http://blog.jobbole.com/39571/)，首发于[博客
- 伯乐在线](http://blog.jobbole.com/)。
