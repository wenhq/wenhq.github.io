--- layout: post title: LDA-math-认识Beta/Dirichlet分布(2) date:
'2013-01-26T12:15:00.003+08:00' author: Wenh Q tags: - NLP - tech.nlp
modified\_time: '2013-11-30T12:25:43.998+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-5595609997233136519
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/01/lda-math-betadirichlet2.html ---
[LDA-math-认识Beta/Dirichlet分布(2)](http://feedproxy.google.com/~r/52nlp/~3/2Q3a8rJl7Y0/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%832):\
**2. LDA-math-认识Beta/Dirichlet分布(2)**\
\
**2.2 Beta-Binomial 共轭**\
魔鬼的第二个题目，数学上形式化一下，就是\

1.  \$X\_1,X\_2,\\cdots,X\_n
    {\\stackrel{\\mathrm{iid}}{\\sim}}Uniform(0,1)\$，对应的顺序统计量是
    \$X\_{(1)},X\_{(2)}，\\cdots, X\_{(n)}\$, 我们要猜测
    \$p=X\_{(k)}\$；
2.  \$Y\_1,Y\_2,\\cdots,Y\_m
    {\\stackrel{\\mathrm{iid}}{\\sim}}Uniform(0,1)\$,
    \$Y\_i\$中有\$m\_1\$个比\$p\$小，\$m\_2\$个比\$p\$大；
3.  问 \$P(p|Y\_1,Y\_2,\\cdots,Y\_m)\$ 的分布是什么。

由于\$p=X\_{(k)}\$在 \$X\_1,X\_2,\\cdots,X\_n
\$中是第\$k\$大的，利用\$Y\_i\$的信息，我们容易推理得到 \$p=X\_{(k)}\$
在\$X\_1,X\_2,\\cdots,X\_n,Y\_1,Y\_2,\\cdots,Y\_m
{\\stackrel{\\mathrm{iid}}{\\sim}} Uniform(0,1)\$
这\$(m+n)\$个独立随机变量中是第
\$k+m\_1\$大的，于是按照上一个小节的推理，此时\$p=X\_{(k)}\$
的概率密度函数是
\$Beta(p|k+m\_1,n-k+1+m\_2)\$。按照贝叶斯推理的逻辑，我们把以上过程整理如下：\

1.  \$p=X\_{(k)}\$是我们要猜测的参数，我们推导出 \$p\$ 的分布为 \$f(p) =
    Beta(p|k,n-k+1)\$,称为 \$p\$ 的先验分布；
2.  数据\$Y\_i\$中有\$m\_1\$个比\$p\$小，\$m\_2\$个比\$p\$大，\$Y\_i\$相当于是做了\$m\$次贝努利实验，所以\$m\_1\$
    服从二项分布 \$B(m,p)\$；
3.  在给定了来自数据提供的\$(m\_1,m\_2)\$的知识后，\$p\$ 的后验分布变为
    \$f(p|m\_1,m\_2)=Beta(p|k+m\_1,n-k+1+m\_2)\$

<div style="text-align: center;">

[![coin-toss](http://www.52nlp.cn/wp-content/uploads/2012/12/coin-toss.jpg){width="208"
height="241"}](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831/coin-toss)**贝努利实验**

</div>

\
\
我们知道贝叶斯参数估计的基本过程是\

<div style="text-align: center;">

**先验分布 + 数据的知识 = 后验分布**

</div>

<div style="text-align: left;">

以上贝叶斯分析过程的简单直观的表述就是\
\
\$ Beta(p|k,n-k+1) + Count(m\_1,m\_2) = Beta(p|k+m\_1,n-k+1+m\_2) \$\
\
其中 \$(m\_1,m\_2)\$
对应的是二项分布\$B(m\_1+m\_2,p)\$的计数。更一般的，对于非负实数\$\\alpha,\\beta\$，我们有如下关系\
\
\\begin{equation}\
\
Beta(p|\\alpha,\\beta) + Count(m\_1,m\_2) =
Beta(p|\\alpha+m\_1,\\beta+m\_2)\
\
\\end{equation}\
\
这个式子实际上描述的就是**  Beta-Binomial
共轭**，此处共轭的意思就是，数据符合二项分布的时候，参数的先验分布和后验分布都能保持Beta
分布的形式，这种形式不变的好处是，我们能够在先验分布中赋予参数很明确的物理意义，这个物理意义可以延续到后验分布中进行解释，同时从先验变换到后验过程中从数据中补充的知识也容易有物理解释。

</div>

<div style="text-align: left;">

而我们从以上过程可以看到，Beta
分布中的参数\$\\alpha,\\beta\$都可以理解为物理计数，这两个参数经常被称为伪计数(pseudo-count)。基于以上逻辑，我们也可以把\$Beta(p|\\alpha,\\beta)\$写成下式来理解\
\
\$ Beta(p|1,1) + Count(\\alpha-1,\\beta-1) = Beta(p|\\alpha,\\beta)
 \\quad  (\*\*\*)  \$\
\
其中 \$Beta(p|1,1)\$ 恰好就是均匀分布Uniform(0,1)。

</div>

对于(\*\*\*) 式，我们其实也可以纯粹从贝叶斯的角度来进行推导和理解。
假设有一个不均匀的硬币抛出正面的概率为\$p\$,抛\$m\$次后出现正面和反面的次数分别是\$m\_1,m\_2\$，那么按传统的频率学派观点，\$p\$的估计值应该为
\$\\hat{p}=\\frac{m\_1}{m}\$。而从贝叶斯学派的观点来看，开始对硬币不均匀性一无所知，所以应该假设\$p\\sim
Uniform(0,1)\$, 于是有了二项分布的计数\$(m\_1,m\_2)\$\
\
之后，按照贝叶斯公式如下计算\$p\$ 的后验分布\
\
\\begin{align\*}\
\
P(p|m\_1,m\_2) & = \\frac{P(p)\\cdot P(m\_1,m\_2|p)}{P(m\_1,m\_2)} \\\\\
\
& = \\frac{1\\cdot P(m\_1,m\_2|p)}{\\int\_0\^1 P(m\_1,m\_2|t)dt} \\\\\
\
& = \\frac{\\binom{m}{m\_1}p\^{m\_1}(1-p)\^{m\_2}}{\\int\_0\^1
\\binom{m}{m\_1}t\^{m\_1}(1-t)\^{m\_2}dt} \\\\\
\
& = \\frac{p\^{m\_1}(1-p)\^{m\_2}}{\\int\_0\^1
t\^{m\_1}(1-t)\^{m\_2}dt}\
\
\\end{align\*}\
\
计算得到的后验分布正好是 \$Beta(p|m\_1+1,m\_2+1)\$。\

<div style="text-align: center;">

[![beta-distribution](http://www.52nlp.cn/wp-content/uploads/2012/12/beta-distribution.png){width="911"
height="744"}](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831/beta-distribution)

</div>

<div style="text-align: center;">

**百变星君Beta分布**

</div>

<div style="text-align: left;">

Beta
分布的概率密度我们把它画成图，会发现它是个百变星君，它可以是凹的、凸的、单调上升的、单调下降的；可以是曲线也可以是直线，而均匀分布也是特殊的Beta分布。由于Beta
分布能够拟合如此之多的形状，因此它在统计数据拟合中被广泛使用。

</div>

在上一个小节中，我们从二项分布推导Gamma 分布的时候，使用了如下的等式\
\
\\begin{equation}\
\
\\label{binomial-beta2}\
\
P(C \\le k) = \\frac{n!}{k!(n-k-1)!} \\int\_p\^1 t\^k(1-t)\^{n-k-1} dt,
\\quad C\\sim B(n,p)\
\
\\end{equation}\
\
现在大家可以看到，左边是二项分布的概率累积，右边实际上是\$Beta(t|k+1,n-k)\$
分布的概率积分。这个式子在上一小节中并没有给出证明，下面我们利用和魔鬼的游戏类似的概率物理过程进行证明。\
我们可以如下构造二项分布，取随机变量 \$X\_1, X\_2, \\cdots, X\_n
{\\stackrel{\\mathrm{iid}}{\\sim}}Uniform(0,1)\$,一个成功的贝努利实验就是
\$X\_i&lt;p\$,否则表示失败,于是成功的概率为\$p\$。\$C\$用于计数成功的次数，于是\$C\\sim
B(n,p)\$。\

<div style="text-align: center;">

[![beta-binomial](http://www.52nlp.cn/wp-content/uploads/2012/12/beta-binomial.png){width="434"
height="107"}](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831/beta-binomial)

</div>

<div style="text-align: center;">

**贝努利实验最多成功\$k\$次**

</div>

显然我们有如下式子成立\
\$ P(C \\le k) = P(X\_{(k+1)} &gt; p)\$\
此处\$X\_{(k+1)}\$是顺序统计量，为第\$k+1\$大的数。等式左边表示贝努利实验成功次数最多\$k\$次，右边表示第
\$k+1\$
大的数必然对应于失败的贝努利实验，从而失败次数最少是\$n-k\$次，所以左右两边是等价的。由于\$X\_{(k+1)}
\\sim Beta(t|k+1, n-k)\$, 于是\
\
\\begin{align\*}\
\
P(C \\le k) & = P(X\_{(k+1)} &gt; p) \\\\\
\
&= \\int\_p\^1 Beta(t|k+1, n-k)dt \\\\\
\
&= \\frac{n!}{k!(n-k-1)!} \\int\_p\^1 t\^k(1-t)\^{n-k-1} dt\
\
\\end{align\*}\
最后我们再回到魔鬼的游戏，如果你按出的5个随机数字中，魔鬼告诉你有2个小于它手中第7大的数，那么你应该\
\
按照如下概率分布的峰值做猜测是最好的\
\
\$ Beta(x|9,7) = \\frac{15!}{(8)!(6)!}x\^{8}(1-x)\^{6} \\quad x \\in
\[0,1\] \$\
很幸运的，你这次猜中了，魔鬼开始甩赖了：这个游戏对你来说太简单了，我要加大点难度，我们重新来一次，我按魔盒20下生成20个随机数，你同时给我猜第7大和第13大的数是什么，这时候应该如何猜测呢？\

<div>

相关文章:\
1.  [LDA-math-认识Beta/Dirichlet分布(3)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%833 "LDA-math-认识Beta/Dirichlet分布(3)")
2.  [LDA-math-认识Beta/Dirichlet分布(1)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831 "LDA-math-认识Beta/Dirichlet分布(1)")
3.  [LDA-math-神奇的Gamma函数(3)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b03 "LDA-math-神奇的Gamma函数(3)")
4.  [LDA-math-神奇的Gamma函数(1)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01 "LDA-math-神奇的Gamma函数(1)")
5.  [LDA-math-MCMC 和
    Gibbs Sampling(2)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling2 "LDA-math-MCMC 和 Gibbs Sampling(2)")
6.  [LDA-math-MCMC 和
    Gibbs Sampling(1)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling1 "LDA-math-MCMC 和 Gibbs Sampling(1)")
7.  [LDA-math-神奇的Gamma函数(2)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02 "LDA-math-神奇的Gamma函数(2)")
8.  [正态分布的前世今生(四)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e5%9b%9b "正态分布的前世今生(四)")
9.  [正态分布的前世今生(二)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e4%ba%8c "正态分布的前世今生(二)")
10. [Itenyh版-用HMM做中文分词四：A Pure-HMM
    分词器](http://www.52nlp.cn/itenyh%e7%89%88-%e7%94%a8hmm%e5%81%9a%e4%b8%ad%e6%96%87%e5%88%86%e8%af%8d%e5%9b%9b%ef%bc%9aa-pure-hmm-%e5%88%86%e8%af%8d%e5%99%a8 "Itenyh版-用HMM做中文分词四：A Pure-HMM 分词器")

</div>

![](http://feeds.feedburner.com/~r/52nlp/~4/2Q3a8rJl7Y0){width="1"
height="1"}
