---
layout: post
title: LDA-math-认识Beta/Dirichlet分布(1)
date: '2013-01-26T12:15:00.001+08:00'
author: Wenh Q
tags:
modified_time: '2013-11-30T12:25:43.985+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-1330979154263466412
blogger_orig_url: http://binaryware.blogspot.com/2013/01/lda-math-betadirichlet1.html
---

[LDA-math-认识Beta/Dirichlet分布(1)](http://feedproxy.google.com/~r/52nlp/~3/xMiO0GR_5M4/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831):

**2. 认识Beta/Dirichlet分布**

**2.1 魔鬼的游戏—认识Beta 分布**
统计学就是猜测上帝的游戏,当然我们不总是有机会猜测上帝，运气不好的时候就得揣度魔鬼的心思。有一天你被魔鬼撒旦抓走了，撒旦说：”你们人类很聪明，而我是很仁慈的，和你玩一个游戏，赢了就可以走，否则把灵魂出卖给我。游戏的规则很简单，我有一个魔盒，上面有一个按钮，你每按一下按钮，就均匀的输出一个[0,1]之间的随机数，我现在按10下，我手上有10个数，你猜第7大的数是什么，偏离不超过0.01就算对。“
你应该怎么猜呢？
从数学的角度抽象一下，上面这个游戏其实是在说随机变量$X_1,X_2,cdots,X_n
{stackrel{mathrm{iid}}{sim}} Uniform(0,1)$，把这$n$
个随机变量排序后得到顺序统计量 $X_{(1)},X_{(2)}，cdots, X_{(n)}$,
然后问 $X_{(k)}$ 的分布是什么。
对于不喜欢数学的同学而言，估计每个概率分布都是一个恶魔，那在概率统计学中，均匀分布应该算得上是潘多拉魔盒，几乎所有重要的概率分布都可以从均匀分布$Uniform(0,1)$中生成出来;尤其是在统计模拟中，所有统计分布的随机样本都是通过均匀分布产生的。

[![pandora](http://www.52nlp.cn/wp-content/uploads/2012/12/pandora.jpg)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831/pandora)潘多拉魔盒Uniform(0,1)



对于上面的游戏而言 $n=10,k=7$, 如果我们能求出 $X_{(7)}$
的分布的概率密度，那么用概率密度的极值点去做猜测就是最好的策略。对于一般的情形，$X_{(k)}$
的分布是什么呢？那我们尝试计算一下$X_{(k)}$ 落在一个区间 $[x,
x+Delta x]$ 的概率，也就是求如下概率值

$ P( x le X_{(k)} le x+Delta x) = ? $
把 [0,1] 区间分成三段 $[0,x), [x,x+Delta x], (x+Delta
x,1]$,我们先考虑简单的情形，假设$n$ 个数中只有一个落在了区间 $[x,
x+Delta
x]$内，则因为这个区间内的数$X_{(k)}$是第$k$大的，则$[0,x)$中应该有
$k-1$ 个数，$(x,1]$ 这个区间中应该有$n-k$
个数。不失一般性，我们先考虑如下一个符合上述要求的事件$E$
begin{align*}

E = { & X_1 in [x, x+Delta x],

& X_i in [0,x)quad (i=2,cdots,k),

& X_j in (x+Delta x,1] quad (j=k+1,cdots,n)}

end{align*}

[![beta-game-1](http://www.52nlp.cn/wp-content/uploads/2012/12/beta-game-1.png)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831/beta-game-1)**事件
$E$**

则有

begin{align*}

P(E) & = prod_{i=1}^nP(X_i)

& = x^{k-1}(1-x-Delta x)^{n-k}Delta x

& = x^{k-1}(1-x)^{n-k}Delta x + o(Delta x)

end{align*}
$o(Delta x)$表示$Delta x
$的高阶无穷小。显然，由于不同的排列组合，即$n$个数中有一个落在 $[x,
x+Delta
x]$区间的有$n$种取法，余下$n-1$个数中有$k-1$个落在$[0,x)$的有$binom{n-1}{k-1}$种组合，所以和事件$E$等价的事件一共有
$nbinom{n-1}{k-1}$个。继续考虑稍微复杂一点情形，假设$n$
个数中有两个数落在了区间 $[x, x+Delta x]$，
begin{align*}

E’ = { & X_1,X_2in [x, x+Delta x],

& X_i in [0,x) quad (i=3,cdots,k),

& X_j in (x+Delta x,1] quad (j=k+1,cdots,n)}

end{align*}

[![beta-game-2](http://www.52nlp.cn/wp-content/uploads/2012/12/beta-game-2.png)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831/beta-game-2)**事件E’**

则有

$ P(E’) = x^{k-2}(1-x-Delta x)^{n-k}(Delta x)^2 = o(Delta
x)$

从以上分析我们很容易看出，只要落在$[x, x+Delta
x]$内的数字超过一个，则对应的事件的概率就是 $o(Delta x)$。于是

begin{align*}

& P( x le X_{(k)} le x+Delta x)

& = nbinom{n-1}{k-1}P(E) + o(Delta x)

& = nbinom{n-1}{k-1}x^{k-1}(1-x)^{n-k}Delta x + o(Delta x)

end{align*}

所以，可以得到$X_{(k)}$的概率密度函数为

begin{align*}

f(x) & = lim_{Delta x rightarrow 0} frac{P( x le X_{(k)}
le x+Delta x)}{Delta x}

& = nbinom{n-1}{k-1}x^{k-1}(1-x)^{n-k}

& = frac{n!}{(k-1)!(n-k)!}x^{k-1}(1-x)^{n-k} quad x in [0,1]

end{align*}

利用Gamma 函数，我们可以把 $f(x)$ 表达为

$ f(x) =
frac{Gamma(n+1)}{Gamma(k)Gamma(n-k+1)}x^{k-1}(1-x)^{n-k} $
还记得神奇的 Gamma
函数可以把很多数学概念从整数集合延拓到实数集合吧。我们在上式中取$alpha=k,
beta=n-k+1$, 于是我们得到

begin{equation}

f(x) =
frac{Gamma(alpha+beta)}{Gamma(alpha)Gamma(beta)}x^{alpha-1}(1-x)^{beta-1}

end{equation}

这个就是一般意义上的 Beta
分布！可以证明，在$alpha,beta$取非负实数的时候，这个概率密度函数也都是良定义的。
好，我们回到魔鬼的游戏，这$n=10,k=7$这个具体的实例中，我们按照如下密度分布的峰值去猜测才是最有把握的。

$ f(x) = frac{10!}{(6)!(3)!}x^{6}(1-x)^{3} quad x in [0,1] $
然而即便如此，我们能做到一次猜中的概率也不高，很不幸，你第一次没有猜中，魔鬼微笑着说：“我再仁慈一点，再给你一个机会，你按5下这个机器，你就得到了5个[0,1]之间的随机数，然后我可以告诉你这5个数中的每一个，和我的第7大的数相比，谁大谁小，然后你继续猜我手头的第7大的数是多少。”这时候我们应该怎么猜测呢？


相关文章:

1.  [LDA-math-认识Beta/Dirichlet分布(3)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%833 "LDA-math-认识Beta/Dirichlet分布(3)")
2.  [LDA-math-认识Beta/Dirichlet分布(2)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%832 "LDA-math-认识Beta/Dirichlet分布(2)")
3.  [LDA-math-神奇的Gamma函数(3)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b03 "LDA-math-神奇的Gamma函数(3)")
4.  [LDA-math-神奇的Gamma函数(1)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01 "LDA-math-神奇的Gamma函数(1)")
5.  [LDA-math-神奇的Gamma函数(2)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02 "LDA-math-神奇的Gamma函数(2)")
6.  [LDA-math-MCMC 和 Gibbs
    Sampling(2)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling2 "LDA-math-MCMC 和 Gibbs Sampling(2)")
7.  [LDA-math-MCMC 和 Gibbs
    Sampling(1)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling1 "LDA-math-MCMC 和 Gibbs Sampling(1)")
8.  [正态分布的前世今生(四)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e5%9b%9b "正态分布的前世今生(四)")
9.  [HMM学习最佳范例七：前向-后向算法5](http://www.52nlp.cn/hmm-learn-best-practices-seven-forward-backward-algorithm-5 "HMM学习最佳范例七：前向-后向算法5")
10. [正态分布的前世今生(二)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e4%ba%8c "正态分布的前世今生(二)")

![](http://feeds.feedburner.com/~r/52nlp/~4/xMiO0GR_5M4)
