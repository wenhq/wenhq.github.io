--- layout: post title: "解密 JavaScript 中的 this" date:
'2014-01-03T12:47:00.003+08:00' author: Wenh Q tags: modified\_time:
'2014-01-04T13:11:35.010+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-6210862791440909805
blogger\_orig\_url:
http://binaryware.blogspot.com/2014/01/javascript-this.html --- [解密
JavaScript 中的 this](http://blog.jobbole.com/54267/)  通过 [博客 -
伯乐在线](http://blog.jobbole.com/)\
\
\
我想在本文解释JavaScript中的this，希望有助你理解this的工作机制。作为JavaScript程序员，学习this对于你的发展有很大帮助，可以说利大于弊。这篇文章的灵感来自于我最近的工作——我即将完成的书的最后章节——《JavaScript
应用程序设计 | [JavaScript Application
Design](http://bevacqua.io/buildfirst)》（注意：现在你可以购买[早期版本](http://bevacqua.io/bf/book)），我写的是关于scope工作原理的方面。\
\
似是而非，这可能就是你对this的感觉：\
\
![](https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fimages.cnitblog.com%2Fblog%2F460220%2F201312%2F27170841-6f4bb80eada740c4928ecfabb5d23c7e.gif&container=blogger&gadget=a&rewriteMime=image%2F*)\
\
很疯狂，不是吗？在这篇短文，我想揭开它的神秘面纱。\
\
\
\
this的工作原理\
\
如果一个函数被作为一个对象的方法调用，那么this将被指派为这个对象。var
parent = { method: function () { console.log(this); } };
parent.method(); // &lt;- parent\
\
\
注意这种行为非常"脆弱"，如果你获取一个方法的引用并且调用，那么this的值不会是parent了，而是window全局对象。这让大多数开发者迷惑。var
parentless = parent.method; parentless(); // &lt;- Window\
\
\
底线是你应该查看调用链，以理解被调用函数是一个对象的属性还是它自己。如果它被作为属性调用，那么this的值将变成该属性的对象，否则this的值将被指派为全局对象或window。如果在严格模式下，this的值将是undefined。\
\
在被当作构造函数的情况下，当使用new关键字时，this将被指派为被创建的实例对象。function
ThisClownCar () { console.log(this); } new ThisClownCar(); // &lt;-
ThisClownCar {}\
\
\
注意，在这种情况下没有办法识别出一个函数是否应该被用作构造函数，因此省略new关键字导致this的结果将是全局对象，就像我们上面看到的没有用parent调用的例子。ThisClownCar();
// &lt;- Window\
\
篡改this\
\
.call、 .apply 和.bind
方法用来操作调用函数的方式，帮我们定义this的值和传递给函数的参数值。\
\
Function.prototype.call
可以有任意数量的参数，第一个参数被分配给this，剩下的被传递给调用函数。Array.prototype.slice.call(\[1,
2, 3\], 1, 2) // &lt;- \[2\]\
\
\
Function.prototype.apply
的行为和.call类似，但它传递给函数的参数是一个数组，而不是任意参数。String.prototype.split.apply('13.12.02',
\['.'\]) // &lt;- \['13', '12', '02'\]\
\
\
Function.prototype.bind
创建一个特殊的函数，该函数将永远使用传递给.bind的参数作为this的值，以及能够分配部分参数，创建原函数的珂里化（curride）版本。var
arr = \[1, 2\]; var add = Array.prototype.push.bind(arr, 3); //
effectively the same as arr.push(3) add(); // effectively the same as
arr.push(3, 4) add(4); console.log(arr); // &lt;- \[1, 2, 3, 3, 4\]\
\
作用域链中的this\
\
在下面的例子，this将无法在作用域链中保持不变。这是规则的缺陷，并且常常会给业余开发者带来困惑。function
scoping () { console.log(this); return function () { console.log(this);
}; } scoping()(); // &lt;- Window // &lt;- Window\
\
\
有一个常见的方法，创建一个局部变量保持对this的引用，并且在子作用域中不能有同命变量。子作用域中的同名变量将覆盖父作用域中对this的引用。function
retaining () { var self = this; return function () { console.log(self);
}; } retaining()(); // &lt;- Window\
\
\
除非你真的想同时使用父作用域的this,以及当前this值，由于某些莫名其妙的原因,我更喜欢是使用的方法.bind函数。这可以用来将父作用域的this指定给子作用域。\
function bound () { return function () { console.log(this);
}.bind(this); } bound()(); // &lt;- Window\
\
其他问题？\
\
你是否有任何关于this的问题？关于this怎样？请让我知道如果你认为我错过了任何其他边界情况或优雅的解决方案。\
\
如果你喜欢这篇文章,一定要看看我即将到来的书JavaScript应用程序设计:构建第一种方法（
[JavaScript Application Design: A Build First
Approach](http://bevacqua.io/buildfirst)），您可以访问购买[早期版本](http://bevacqua.io/bf/book)的链接。\
\
相关文章\
[测试：你自认为理解了JavaScript？](http://blog.jobbole.com/30468/)\
[JavaScript的性能优化：加载和执行](http://blog.jobbole.com/47304/)\
[JavaScript中有趣的反柯里化](http://blog.jobbole.com/32059/)\
[JavaScript内存管理](http://blog.jobbole.com/50566/)\
[你若触发，我就处理——浅谈JavaScript的事件响应](http://blog.jobbole.com/51889/)\
[从 JavaScript 数组去重谈性能优化](http://blog.jobbole.com/33099/)\
[对 JavaScript 进行单元测试的工具](http://blog.jobbole.com/29747/)\
[JavaScript 编写的迷你 Lisp 解释器](http://blog.jobbole.com/44163/)\
[JavaScript instanceof 运算符深入剖析](http://blog.jobbole.com/41611/)\
[JavaScript：打破所有规则](http://blog.jobbole.com/29061/)\
\
[解密 JavaScript 中的 this](http://blog.jobbole.com/54267/)，首发于[博客
- 伯乐在线](http://blog.jobbole.com/)。
