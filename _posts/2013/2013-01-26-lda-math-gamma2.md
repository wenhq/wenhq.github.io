---
layout: post
title: LDA-math-神奇的Gamma函数(2)
date: '2013-01-26T12:20:00.007+08:00'
author: Wenh Q
tags:
modified_time: '2013-11-30T12:25:43.996+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-5335359380992184459
blogger_orig_url: http://binaryware.blogspot.com/2013/01/lda-math-gamma2.html
---
[LDA-math-神奇的Gamma函数(2)](http://feedproxy.google.com/~r/52nlp/~3/ySDla8SGaAE/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02):

**1. 神奇的Gamma函数

1.2 Gamma 函数欣赏**

*Each generation has found something of interest to say about the gamma
function. Perhaps the next generation will also. *

*—Philip J.Davis*

Gamma
函数从它诞生开始就被许多数学家进行研究，包括高斯、勒让德、威尔斯特拉斯、柳维尔等等。这个函数在现代数学分析中被深入研究，在概率论中也是无处不在，很多统计分布都和这个函数相关。Gamma
函数作为阶乘的推广，首先它也有和 Stirling 公式类似的一个结论

$ Gamma(x) sim sqrt{2pi}e^{-x}x^{x-frac{1}{2}}$

另外， Gamma 函数不仅可以定义在实数集上，还可以延拓到整个复平面上。

[![gamma-complex](http://www.52nlp.cn/wp-content/uploads/2012/12/gamma-complex-300x216.png)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02/gamma-complex)复平面上的Gamma
函数

Gamma 函数有很多妙用，它不但使得 (1/2)!
的计算有意义，还能扩展很多其他的数学概念。比如导数，我们原来只能定义一阶、二阶等整数阶导数，有了Gamma
函数我们可以把函数导数的定义延拓到实数集，从而可以计算 1/2
阶导数,同样的积分作为导数的逆运算也可以有分数阶。我们先考虑一下 $x^n$
的各阶导数

[![derivatives](http://www.52nlp.cn/wp-content/uploads/2012/12/derivatives.png)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02/derivatives)由于k阶导数可以用阶乘表达，于是我们用Gamma
函数表达为

$ frac{Gamma{(n+1)}}{Gamma{(n-k+1)}} x^{n-k} $

于是基于上式，我们可以把导数的阶从整数延拓到实数集。例如，取$n=1,
k=frac{1}{2}$我们可以计算 $x$ 的 $frac{1}{2}$阶导数为

$ frac{Gamma{(1+1)}}{Gamma{(1-1/2+1)}} x^{1-1/2} =
frac{2sqrt{x}}{sqrt{pi}}$



很容易想到对于一般的函数 $f(x)$ 通过 Taylor
级数展开可以表达为幂级数，于是借用 $x^n$
的分数阶导数，我们可以尝试定义出任意函数的分数阶导数。不过有点遗憾的是这种定义方法并非良定义的，不是对所有函数都适用，但是这个思想却是被数学家广泛采纳了，并由此发展了数学分析中的一个研究课题：Fractional
Calculus,在这种微积分中，分数阶的导数和积分都具有良定义，而这都依赖于
Gamma 函数。
Gamma 函数和欧拉常数$gamma$ 有密切关系，可以发现

$ gamma = -frac{dGamma(x)}{dx}|_{x=1} =lim_{nrightarrow
infty}(1+frac{1}{2} + frac{1}{3}+cdots+frac{1}{n} – log n)
$
进一步还可以发现 Gamma 函数和黎曼函数$zeta(s)$有密切联系，

$ zeta(s) = 1+frac{1}{2^s} + frac{1}{2^s} + cdots $

而$zeta$
函数涉及了数学中著名的黎曼猜想和素数的分布定理。希尔伯特曾说，如果他在沉睡1000年后醒来,他将问的第一个问题便是:黎曼猜想得到证明了吗？

[![digamma-func](http://www.52nlp.cn/wp-content/uploads/2012/12/digamma-func-300x233.png)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02/digamma-func)

$log Gamma(x)$

从Gamma 函数的图像我们可以看到它是一个凸函数, 不仅如此,
$logGamma(x)$ 也是一个凸函数，数学上可以证明如下定理:

**[Bohr-Mullerup定理]**  如果 $f:(0,infty)rightarrow
(0,infty)$,且满足

1.   $f(1) = 1$
2.   $f(x+1) = xf(x)$
3.   $log f(x)$ 是凸函数

那么 $f(x) = Gamma(x)$, 也就是
$Gamma(x)$是唯一满足以上条件的函数。
如下函数被称为 Digamma 函数，

$Psi(x) = frac{dlogGamma(x)}{dx}$

这也是一个很重要的函数，在涉及求Dirichlet
分布相关的参数的极大似然估计时，往往需要使用到这个函数。Digamma
函数具有如下一个漂亮的性质

$ Psi(x+1) = Psi(x) + frac{1}{x} $

函数$Psi(x)$和欧拉常数$gamma$ 以及 $zeta$
函数都有密切关系，令

$Psi_n(x) = frac{d^{n+1}logGamma(x)}{dx^{n+1}}$

则 $Psi_0(x) = Psi(x)$,可以证明

$Psi(1) = -gamma, Psi(2) = 1-gamma$

$Psi_1(1) = zeta(2) = frac{pi^2}{6}, Psi_2(1) =
-2zeta(3)$
所以Gamma
函数在数学上是很有魅力的，它在数学上应用广泛，不仅能够被一个理科本科生很好的理解，本身又足够的深刻，具有很多漂亮的数学性质，历史上吸引了众多一流的数学家对它进行研究。美国数学家
Philip J.Davis 写了篇很有名的介绍 Gamma 函数的文章：“Leonhard Euler’s
Integral:A Historical Profile of the Gamma Function”，文中对 Gamma
函数一些特性发现的历史进行了很详细的描述，这篇文章获得了 Chauvenet
Prize(美国数学会颁发的数学科普最高奖)。[

](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02/digamma-func)
(本小节主要是数学欣赏，如果对某些概念不熟悉，就略过吧:-))

相关文章:

1.  [LDA-math-神奇的Gamma函数(1)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01 "LDA-math-神奇的Gamma函数(1)")
2.  [LDA-math-神奇的Gamma函数(3)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b03 "LDA-math-神奇的Gamma函数(3)")
3.  [LDA-math-认识Beta/Dirichlet分布(3)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%833 "LDA-math-认识Beta/Dirichlet分布(3)")
4.  [LDA-math-认识Beta/Dirichlet分布(1)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831 "LDA-math-认识Beta/Dirichlet分布(1)")
5.  [LDA-math-MCMC 和 Gibbs
    Sampling(1)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling1 "LDA-math-MCMC 和 Gibbs Sampling(1)")
6.  [LDA-math-认识Beta/Dirichlet分布(2)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%832 "LDA-math-认识Beta/Dirichlet分布(2)")
7.  [LDA-math-MCMC 和 Gibbs
    Sampling(2)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling2 "LDA-math-MCMC 和 Gibbs Sampling(2)")
8.  [正态分布的前世今生(一)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e4%b8%80 "正态分布的前世今生(一)")
9.  [正态分布的前世今生(五)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e4%ba%94 "正态分布的前世今生(五)")
10. [WordPress中的公式编辑器插件](http://www.52nlp.cn/wordpress-equation-editor-plugin "WordPress中的公式编辑器插件")

![](http://feeds.feedburner.com/~r/52nlp/~4/ySDla8SGaAE)
