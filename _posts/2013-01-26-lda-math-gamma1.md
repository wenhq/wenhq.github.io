--- 
layout: post 
title: LDA-math-神奇的Gamma函数(1) 
date: '2013-01-26T12:20:00.005+08:00' 
author: Wenh Q
tags: - NLP - tech.nlp
modified\_time: '2013-11-30T12:25:44.002+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-6937092084467915183
blogger\_orig\_url: http://binaryware.blogspot.com/2013/01/lda-math-gamma1.html
---
[LDA-math-神奇的Gamma函数(1)](http://feedproxy.google.com/~r/52nlp/~3/vcsVkaS6zRU/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01):

**1. 神奇的Gamma函数**



**1.1 Gamma 函数诞生记**



学高等数学的时候，我们都学习过如下一个长相有点奇特的Gamma函数




$ 

Gamma(x)=

int\_0
^{

infty}t
^{x-1}e
^{-t}dt 
$



通过分部积分的方法，可以推导出这个函数有如下的递归性质




$

Gamma(x+1) = x 

Gamma(x)
$



于是很容易证明，
$

Gamma(x)
$
函数可以当成是阶乘在实数集上的延拓，具有如下性质




$

Gamma(n) = (n-1)! 
$

学习了Gamma 函数之后，多年以来我一直有两个疑问：

-   这个长得这么怪异的一个函数，数学家是如何找到的；
-   为何定义
    
$

Gamma
$ 函数的时候，不使得这个函数的定义满足
$

Gamma(n) = n! 
$
    而是 
$

Gamma(n) = (n-1)! 
$

最近翻了一些资料，发现有不少文献资料介绍 Gamma
函数发现的历史，要说清楚它需要一定的数学推导，这儿只是简要的说一些主线。

1728年，哥德巴赫在考虑数列插值的问题，通俗的说就是把数列的通项公式定义从整数集合延拓到实数集合，例如数列

$1,4,9,16,

cdots
$ 可以用通项公式 
$n
^2
$ 自然的表达，即便 
$n
$
为实数的时候，这个通项公式也是良好定义的。直观的说也就是可以找到一条平滑的曲线
$y=x
^2
$通过所有的整数点
$(n,n
^2)
$，从而可以把定义在整数集上的公式延拓到实数集合。一天哥德巴赫开始处理阶乘序列

$1,2,6,24,120,720,

cdots
$,我们可以计算 
$2!,3!
$, 是否可以计算

$2.5!
$呢？我们把最初的一些

$(n,n!)
$的点画在坐标轴上，确实可以看到，容易画出一条通过这些点的平滑曲线。

[



](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01/euler)
[![factorial](http://www.52nlp.cn/wp-content/uploads/2012/12/factorial-300x59.png){width="300"
height="59"}](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01/factorial)
[



](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01/gamma-func)
[![factorial-curve](http://www.52nlp.cn/wp-content/uploads/2012/12/factorial-curve.png){width="251"
height="183"}](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01/factorial-curve)

但是哥德巴赫无法解决阶乘往实数集上延拓的这个问题，于是写信请教尼古拉斯.贝努利和他的弟弟丹尼尔.贝努利，由于欧拉当时和丹尼尔.贝努利在一块，他也因此得知了这个问题。而欧拉于1729
年完美的解决了这个问题，由此导致了
$

Gamma
$
函数的诞生，当时欧拉只有22岁。



<span></span>



事实上首先解决
$n!
$的插值计算问题的是丹尼尔.贝努利，他发现，



如果 
$m,n
$都是正整数，如果 
$m 

rightarrow 

infty
$，有




$ 

frac{1

cdot 2

cdot 3 

cdots m}{(1+n)(2+n)

cdots
(m-1+n)}(m+

frac{n}{2})
^{n-1} 

rightarrow n! 
$



于是用这个无穷乘积的方式可以把
$n!
$的定义延拓到实数集合。例如，取

$n=2.5
$, 
$m
$ 足够大，基于上式就可以近似计算出 
$2.5!
$。

欧拉也偶然的发现 
$n!
$ 可以用如下的一个无穷乘积表达





begin{equation}





label{euler-series}





Bigl
[

Bigl(

frac{2}{1}

Bigr)
^n

frac{1}{n+1}

Bigr
]





Bigl
[

Bigl(

frac{3}{2}

Bigr)
^n

frac{2}{n+2}

Bigr
]





Bigl
[

Bigl(

frac{4}{3}

Bigr)
^n

frac{3}{n+3}

Bigr
] 

cdots =
n!





quad  (
*)





end{equation}

用极限形式，这个式子整理后可以写为





begin{equation}





label{euler-series2}





lim\_{m 

rightarrow 

infty} 

frac{1

cdot 2

cdot 3 

cdots
m}{(1+n)(2+n)

cdots (m+n)}(m+1)
^{n} = n!





quad  (
*
*)





end{equation}



左边可以整理为





begin{align
*}



& 

frac{1

cdot 2

cdot 3 

cdots m}{(1+n)(2+n)

cdots (m+n)}(m+1)
^{n}








= & 1

cdot 2

cdot 3 

cdots n 

cdot 

frac{(n+1)(n+2)

cdots
m}{(1+n)(2+n)

cdots m }





cdot 

frac{(m+1)
^{n}}{(m+1)(m+2)

cdots (m+n)} 







= & n! 

frac{(m+1)
^{n}}{(m+1)(m+2)

cdots (m+n)} 







= & n!

prod\_{k=1}
^{n} 

frac{m+1}{m+k} 

rightarrow n! 

qquad
(m

rightarrow 

infty)





end{align
*}



所以 (
*)、(
*
*)式都成立。

欧拉开始尝试从一些简单的例子开始做一些计算，看看是否有规律可循，欧拉极其擅长数学的观察与归纳。当

$n=1/2
$ 的时候，带入(
*)式计算，整理后可以得到




$

Bigl(

frac{1}{2}

Bigr)! = 

sqrt{

frac{2

cdot4}{3

cdot3} 

cdot


frac{4

cdot6}{5

cdot5}

cdot 

frac{6

cdot8}{7

cdot7} 

cdot


frac{8

cdot10}{9

cdot9} 

cdots}
$



然而右边正好和著名的 Wallis 公式关联。Wallis
在1665年使用插值方法计算半圆曲线 
$y = 

sqrt{x(1-x)}
$
下的面积(也就是直径为1的半圆面积)的时候，得到关于
$

pi
$的如下结果，




$ 

frac{2

cdot4}{3

cdot3} 

cdot 

frac{4

cdot6}{5

cdot5}

cdot


frac{6

cdot8}{7

cdot7} 

cdot 

frac{8

cdot10}{9

cdot9} 

cdots =


frac{

pi}{4}
$



于是，欧拉利用 Wallis 公式得到了如下一个很漂亮的结果




$ 

Bigl(

frac{1}{2}

Bigr)! = 

frac{

sqrt{

pi}}{2} 
$

[![euler](http://www.52nlp.cn/wp-content/uploads/2012/12/euler.jpg){width="189"
height="220"}](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01/euler)大数学家欧拉

欧拉和高斯都是具有超凡直觉的数学家，但是欧拉和高斯的风格迥异。高斯是个老狐狸，数学上非常严谨，发表结果的时候却都把思考的痕迹抹去，只留下漂亮的结果，这招致了一些数学家对高斯的批评；而欧拉的风格不同，经常通过经验直觉做大胆的猜测，而他的文章中往往留下他如何做数学猜想的痕迹，而文章有的时候论证不够严谨。
拉普拉斯曾说过：”读读欧拉,他是所有人的老师。”波利亚在他的名著《数学与猜想》中也对欧拉做数学归纳和猜想的方式推崇备至。

欧拉看到 
$ (

frac{1}{2})!
$ 中居然有 
$

pi
$,
对数学家而言，有
$

pi
$ 的地方必然有和圆相关的积分。由此欧拉猜测 
$n!
$
一定可以表达为某种积分形式，于是欧拉开始尝试把 
$n!
$
表达为积分形式。虽然Wallis 的时代微积分还没有发明出来，Wallis
是使用插值的方式做推导计算的，但是Wallis
公式的推导过程基本上就是在处理积分 
$

int\_0
^1
x
^

frac{1}{2}(1-x)
^

frac{1}{2}dx
$，受 Wallis
的启发，欧拉开始考虑如下的一般形式的积分




$ J(e,n) = 

int\_0
^1 x
^e(1-x)
^ndx
$



此处n 为正整数，
$e
$ 为正实数。利用分部积分方法，容易得到




$ J(e,n) = 

frac{n}{e+1}J(e+1,n-1) 
$



重复使用上述迭代公式，最终可以得到




$ J(e,n) = 

frac{1

cdot2

cdots n}{(e+1)(e+2)

cdots(e+n+1)} 
$



于是欧拉得到如下一个重要的式子




$ n! = (e+1)(e+2)

cdots(e+n+1)

int\_0
^1 x
^e(1-x)
^ndx 
$



接下来，欧拉使用了一点计算技巧，取 
$e=f/g
$ 并且令 
$f 

rightarrow 1,
g 

rightarrow 0
$,



然后对上式右边计算极限(极限计算的过程此处略去，推导不难，有兴趣的同学看后面的参考文献吧)，于是欧拉得到如下简洁漂亮的结果：




$ n! = 

int\_0
^1 (-

log t)
^ndt 
$



欧拉成功的把
$n!
$表达为了积分形式！如果我们做一个变换

$t=e
^{-u}
$,就可以得到我们常见的Gamma 函数形式




$ n! = 

int\_0
^{

infty} u
^ne
^{-u}du 
$



于是,利用上式把阶乘延拓到实数集上，我们就得到 Gamma 函数的一般形式




$ 

Gamma(x) = 

int\_0
^1 (-

log t)
^{x-1}dt = 

int\_0
^{

infty}
t
^{x-1}e
^{-t}dt 
$

[![gamma-func](http://www.52nlp.cn/wp-content/uploads/2012/12/gamma-func-300x211.png){width="300"
height="211"}](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01/gamma-func)

Gamma 函数找到了，我们来看看第二个问题，为何 Gamma 函数被定义为

$

Gamma(n)=(n-1)!
$, 这看起来挺别扭的。如果我们稍微修正一下，把Gamma
函数定义中的 
$t
^{x-1}
$ 替换为
$t
^x
$




$ 

Gamma(x) = 

int\_0
^{

infty} t
^{x}e
^{-t}dt 
$



这不就可以使得

$

Gamma(n)=n!
$了嘛。欧拉最早的Gamma函数定义还真是如上所示，选择了
$

Gamma(n)=n!
$，可是欧拉不知出于什么原因，后续修改了
Gamma 函数的定义，使得
$

Gamma(n)=(n-1)!
$。
而随后勒让德等数学家对Gamma
函数的进一步深入研究中，认可了这个定义，于是这个定义就成为了既成事实。有数学家猜测，一个可能的原因是欧拉研究了如下积分




$ B(m, n) = 

int\_0
^1 x
^{m-1}(1-x)
^{n-1}dx 
$



这个函数现在称为Beta 函数。如果Gamma 函数的定义选取满足

$

Gamma(n)=(n-1)!
$, 那么有




$ B(m,n) = 

frac{

Gamma(m)

Gamma(n)}{

Gamma(m+n)} 
$



非常漂亮的对称形式。可是如果选取
$

Gamma(n)=n!
$ 的定义，令




$ E(m, n) = 

int\_0
^1 x
^{m}(1-x)
^{n}dx 
$



则有




$ E(m,n) = 

frac{

Gamma(m)

Gamma(n)}{

Gamma(m+n+1)} 
$



这个形式显然不如 
$B(m,n)
$优美，而数学家总是很在乎数学公式的美感的。

要了解更多的 Gamma 函数的历史，推荐阅读

-   Philip J. Davis, Leonhard Euler’s Integral: A Historical Profile of
    the Gamma Function
-   Jacques Dutka, The Early History of the Factorial Function
-   Detlef Gronnau, Why is the gamma function so as it is?

<div>

相关文章:

1.  [LDA-math-神奇的Gamma函数(3)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b03 "LDA-math-神奇的Gamma函数(3)")
2.  [LDA-math-认识Beta/Dirichlet分布(3)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%833 "LDA-math-认识Beta/Dirichlet分布(3)")
3.  [LDA-math-神奇的Gamma函数(2)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02 "LDA-math-神奇的Gamma函数(2)")
4.  [LDA-math-认识Beta/Dirichlet分布(2)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%832 "LDA-math-认识Beta/Dirichlet分布(2)")
5.  [LDA-math-认识Beta/Dirichlet分布(1)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831 "LDA-math-认识Beta/Dirichlet分布(1)")
6.  [LDA-math-MCMC 和
    Gibbs Sampling(1)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling1 "LDA-math-MCMC 和 Gibbs Sampling(1)")
7.  [LDA-math-MCMC 和
    Gibbs Sampling(2)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling2 "LDA-math-MCMC 和 Gibbs Sampling(2)")
8.  [正态分布的前世今生(四)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e5%9b%9b "正态分布的前世今生(四)")
9.  [WordPress中的公式编辑器插件](http://www.52nlp.cn/wordpress-equation-editor-plugin "WordPress中的公式编辑器插件")
10. [正态分布的前世今生(一)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e4%b8%80 "正态分布的前世今生(一)")

</div>

![](http://feeds.feedburner.com/~r/52nlp/~4/vcsVkaS6zRU){width="1"
height="1"}
