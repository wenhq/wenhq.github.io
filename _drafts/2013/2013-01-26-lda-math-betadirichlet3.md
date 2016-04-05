--- layout: post title: LDA-math-认识Beta/Dirichlet分布(3) date:
'2013-01-26T12:16:00.001+08:00' author: Wenh Q tags: - NLP - tech.nlp
modified\_time: '2013-11-30T12:25:43.989+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-2528886975400260080
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/01/lda-math-betadirichlet3.html ---
[LDA-math-认识Beta/Dirichlet分布(3)](http://feedproxy.google.com/~r/52nlp/~3/QmrqEcQikDc/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%833):
\
**2. LDA-math-认识Beta/Dirichlet分布(3)**\
\
**2.3 Dirichlet-Multinomial 共轭**\
对于魔鬼变本加厉的新的游戏规则，数学形式化如下：\

1.  \$X\_1,X\_2,\\cdots,X\_n {\\stackrel{\\mathrm{iid}}
    {\\sim}}Uniform(0,1)\$，
2.  排序后对应的顺序统计量 \$X\_{(1)},X\_{(2)}，\\cdots, X\_{(n)}\$,
3.  问 \$(X\_{(k\_1)}, X\_{(k\_1+k\_2)})\$的联合分布是什么；

**游戏3**

完全类似于第一个游戏的推导过程，我们可以进行如下的概率计算(为了数学公式的简洁对称，我们取\$x\_3\$满足\$x\_1+x\_2+x\_3
= 1\$,但只有\$x\_1,x\_2\$是变量)\
\
\

[![dirichlet-game](http://www.52nlp.cn/wp-content/uploads/2013/01/dirichlet-game.png)](http://www.52nlp.cn/5165/dirichlet-game)
[\
\
](http://www.52nlp.cn/5165/dirichlet-distribution)\$(X\_{(k\_1)},
X\_{(k\_1+k\_2)})\$**的联合分布推导**

\\begin{align\*}\
\
& P\\Bigl(X\_{(k\_1)}\\in(x\_1,x\_1+\\Delta
x),X\_{(k\_1+k\_2)}\\in(x\_2,x\_2+\\Delta x)\\Bigr) \\\\\
\
& =
n(n-1)\\binom{n-2}{k\_1-1,k\_2-1}x\_1\^{k\_1-1}x\_2\^{k\_2-1}x\_3\^{n-k\_1-k\_2}(\\Delta
x)\^2 \\\\\
\
& =
\\frac{n!}{(k\_1-1)!(k\_2-1)!(n-k\_1-k\_2)!}x\_1\^{k\_1-1}x\_2\^{k\_2-1}x\_3\^{n-k\_1-k\_2}(\\Delta
x)\^2\
\
\\end{align\*}\
\
于是我们得到 \$(X\_{(k\_1)}, X\_{(k\_1+k\_2)})\$的联合分布是\
\
\\begin{align\*}\
\
f(x\_1,x\_2,x\_3) & =
\\frac{n!}{(k\_1-1)!(k\_2-1)!(n-k\_1-k\_2)!}x\_1\^{k\_1-1}x\_2\^{k\_2-1}x\_3\^{n-k\_1-k\_2}
\\\\\
\
& =
\\frac{\\Gamma(n+1)}{\\Gamma(k\_1)\\Gamma(k\_2)\\Gamma(n-k\_1-k\_2+1)}x\_1\^{k\_1-1}x\_2\^{k\_2-1}x\_3\^{n-k\_1-k\_2}\
\
\\end{align\*}\
\
熟悉 Dirichlet的同学一眼就可以看出，上面这个分布其实就是3维形式的
Dirichlet 分布\$Dir(x\_1,x\_2,x\_3|k\_1,k\_2,n-k\_1-k\_2+1)\$。令
\$\\alpha\_1=k\_1,\\alpha\_2=k\_2,\\alpha\_3=n-k\_1-k\_2+1\$,于是分布密度可以写为\
\
\\begin{equation}\
\
\\displaystyle f(x\_1,x\_2,x\_3) = \\frac{\\Gamma(\\alpha\_1 +
\\alpha\_2 + \\alpha\_3)}\
\
{\\Gamma(\\alpha\_1)\\Gamma(\\alpha\_2)\\Gamma(\\alpha\_3)}x\_1\^{\\alpha\_1-1}x\_2\^{\\alpha\_2-1}x\_3\^{\\alpha\_3-1}\
\
\\end{equation}\
这个就是一般形式的3维 Dirichlet 分布，即便
\$\\overrightarrow{\\alpha}=(\\alpha\_1,\\alpha\_2, \\alpha\_3)\$
延拓到非负实数集合，以上概率分布也是良定义的。\

从形式上我们也能看出，Dirichlet 分布是Beta
分布在高维度上的推广，他和Beta
分布一样也是一个百变星君，密度函数可以展现出多种形态。

[![dirichlet-distribution](http://www.52nlp.cn/wp-content/uploads/2013/01/dirichlet-distribution.png)](http://www.52nlp.cn/5165/dirichlet-distribution)**不同
\$\\alpha\$ 下的Dirichlet 分布**

类似于魔鬼的游戏2，我们也可以调整一下游戏3，从魔盒中生成\$m\$个随机数\$Y\_1,Y\_2,\\cdots,Y\_m
{\\stackrel{\\mathrm{iid}}{\\sim}}Uniform(0,1)\$
并让魔鬼告诉我们\$Y\_i\$和\$(X\_{(k\_1)},
X\_{(k\_1+k\_2)})\$相比谁大谁小。于是有如下游戏4\

1.   \$X\_1,X\_2,\\cdots,X\_n
    {\\stackrel{\\mathrm{iid}}{\\sim}}Uniform(0,1)\$，排序后对应的顺序统计量
    \$X\_{(1)},X\_{(2)}，\\cdots, X\_{(n)}\$
2.  令\$p\_1=X\_{(k\_1)}, p\_2=X\_{(k\_1+k\_2)},p\_3 =
    1-p\_1-p\_2\$(加上\$p\_3\$是为了数学表达简洁对称),我们要猜测
    \$\\overrightarrow{p}=(p\_1,p\_2,p\_3)\$；
3.  \$Y\_1,Y\_2,\\cdots,Y\_m
    {\\stackrel{\\mathrm{iid}}{\\sim}}Uniform(0,1)\$,
    \$Y\_i\$中落到\$[0,p\_1),[p\_1,p\_2),[p\_2,1]\$ 三个区间的个数分别为
    \$m\_1,m\_2,m\_3\$，\$m=m\_1+m\_2+m3\$；
4.   问后验分布 \$P(\\overrightarrow{p}|Y\_1,Y\_2,\\cdots,Y\_m)\$
    的分布是什么。

**游戏4**

为了方便，我们记\
\
\$ \\overrightarrow{m}=(m\_1,m\_2,m\_3),\\quad
\\overrightarrow{k}=(k\_1,k\_2,n-k\_1-k\_2+1) \$\
\
由游戏中的信息，我们可以推理得到 \$p\_1,
p\_2\$在\$X\_1,X\_2,\\cdots,X\_n,\$ \$Y\_1,Y\_2,\\cdots,Y\_m\$
\${\\stackrel{\\mathrm{iid}}{\\sim}} Uniform(0,1)\$这
\$m+n\$个数中分别成为了第 \$k\_1+m\_1, k\_2+m\_2\$大的数，于是后验分布
\$P(\\overrightarrow{p}|Y\_1,Y\_2,\\cdots,Y\_m)\$ 应该是
\$Dir(\\overrightarrow{p}|k\_1+m\_1,k\_1+m\_2,n-k\_1-k\_2+1+m\_3)\$,即\$Dir(\\overrightarrow{p}|\\overrightarrow{k}+\\overrightarrow{m})\$。按照贝叶斯推理的逻辑，我们同样可以把以上过程整理如下：\

1.   我们要猜测参数
    \$\\overrightarrow{p}=(p\_1,p\_2,p\_3)\$，其先验分布为\$Dir(\\overrightarrow{p}|\\overrightarrow{k})\$；
2.   数据\$Y\_i\$落到\$[0,p\_1),
    [p\_1,p\_2),[p\_2,1]\$三个区间的个数分别为
    \$m\_1,m\_2,m\_3\$，所以\$\\overrightarrow{m}=(m\_1,m\_2,m\_3)\$
    服从多项分布\$Mult(\\overrightarrow{m}|\\overrightarrow{p})\$
3.   在给定了来自数据提供的知识\$\\overrightarrow{m}\$后，\$\\overrightarrow{p}\$
    的后验分布变为
    \$Dir(\\overrightarrow{p}|\\overrightarrow{k}+\\overrightarrow{m})\$

**贝叶斯推理过程**

以上贝叶斯分析过程的简单直观的表述就是\
\
\$ Dir(\\overrightarrow{p}|\\overrightarrow{k}) +
MultCount(\\overrightarrow{m}) =
Dir(\\overrightarrow{p}|\\overrightarrow{k}+\\overrightarrow{m}) \$\
\
令
\$\\overrightarrow{\\alpha}=\\overrightarrow{k}\$,把\$\\overrightarrow{\\alpha}\$从整数集合延拓到实数集合，更一般的可以证明有如下关系\
\
\\begin{equation}\
\
Dir(\\overrightarrow{p}|\\overrightarrow{\\alpha}) +
MultCount(\\overrightarrow{m})\
\
= Dir(p|\\overrightarrow{\\alpha}+\\overrightarrow{m})\
\
\\end{equation}\
\
以上式子实际上描述的就是 **Dirichlet-Multinomial
共轭**，而我们从以上过程可以看到，Dirichlet
分布中的参数\$\\overrightarrow{\\alpha}\$都可以理解为物理计数。类似于
Beta 分布，我们也可以把
\$Dir(\\overrightarrow{p}|\\overrightarrow{\\alpha})\$作如下分解\
\
\$ Dir(\\overrightarrow{p}|\\overrightarrow{1}) +
MultCount(\\overrightarrow{m}-\\overrightarrow{1})\
\
= Dir(\\overrightarrow{p}|\\overrightarrow{\\alpha}) \$\
\
此处\$\\overrightarrow{1}=(1,1,\\cdots,1)\$。自然，上式我们也可以类似地用纯粹贝叶斯的观点进行推导和解释。\
以上的游戏我们还可以往更高的维度上继续推，譬如猜测
\$X\_{(1)},X\_{(2)}，\\cdots, X\_{(n)}\$
中的4、5、…等更多个数，于是就得到更高纬度的 Dirichlet 分布和
Dirichlet-Multinomial 共轭。一般形式的 Dirichlet 分布定义如下\
\
\\begin{equation}\
\
\\displaystyle Dir(\\overrightarrow{p}|\\overrightarrow{\\alpha}) =\
\
\\displaystyle \\frac{\\Gamma(\\sum\_{k=1}\^K\\alpha\_k)}\
\
{\\prod\_{k=1}\^K\\Gamma(\\alpha\_k)} \\prod\_{k=1}\^K
p\_k\^{\\alpha\_k-1}\
\
\\end{equation}\
\
对于给定的 \$\\overrightarrow{p}\$和 \$N\$,多项分布定义为\
\
\\begin{equation}\
\
\\displaystyle Mult(\\overrightarrow{n} |\\overrightarrow{p},N) =
\\binom{N}{\\overrightarrow{n}}\\prod\_{k=1}\^K p\_k\^{n\_k}\
\
\\end{equation}\
\
而 \$Mult(\\overrightarrow{n} |\\overrightarrow{p},N)\$ 和
\$Dir(\\overrightarrow{p}|\\overrightarrow{\\alpha})\$这两个分布是共轭关系。\
Beta-Binomail 共轭和 Dirichlet-Multinomail
共轭都可以用纯粹数学的方式进行证明，我们在这两个小节中通过一个游戏来解释这两个共轭关系，主要是想说明这个共轭关系是可以对应到很具体的概率物理过程的。\
**2.4 Beta/Dirichlet 分布的一个性质**\
如果 \$p\\sim Beta(t|\\alpha,\\beta)\$, 则\
\
\\begin{align\*}\
\
E(p) & = \\int\_0\^1 t\*Beta(t|\\alpha,\\beta)dt \\\\\
\
& = \\int\_0\^1 t\*
\\frac{\\Gamma(\\alpha+\\beta)}{\\Gamma(\\alpha)\\Gamma(\\beta)}
t\^{\\alpha-1}(1-t)\^{\\beta-1}dt \\\\\
\
& = \\frac{\\Gamma(\\alpha+\\beta)}{\\Gamma(\\alpha)\\Gamma(\\beta)}
\\int\_0\^1 t\^{\\alpha}(1-t)\^{\\beta-1}dt\
\
\\end{align\*}\
\
上式右边的积分对应到概率分布
\$Beta(t|\\alpha+1,\\beta)\$，对于这个分布，我们有\
\
\$\
\
\\int\_0\^1
\\frac{\\Gamma(\\alpha+\\beta+1)}{\\Gamma(\\alpha+1)\\Gamma(\\beta)}
t\^{\\alpha}(1-t)\^{\\beta-1}dt = 1\
\
\$\
\
把上式带入\$E(p)\$的计算式，得到\
\
\\begin{align}\
\
E(p) & =
\\frac{\\Gamma(\\alpha+\\beta)}{\\Gamma(\\alpha)\\Gamma(\\beta)}\
\
\\cdot
\\frac{\\Gamma(\\alpha+1)\\Gamma(\\beta)}{\\Gamma(\\alpha+\\beta+1)}
\\notag \\\\\
\
& =
\\frac{\\Gamma(\\alpha+\\beta)}{\\Gamma(\\alpha+\\beta+1)}\\frac{\\Gamma(\\alpha+1)}{\\Gamma(\\alpha)}
\\notag \\\\\
\
& = \\frac{\\alpha}{\\alpha+\\beta}\
\
\\label{beta-mean}\
\
\\end{align}\
\
这说明，对于Beta
分布的随机变量，其均值可以用\$\\frac{\\alpha}{\\alpha+\\beta}\$来估计。Dirichlet
分布也有类似的结论，如果\$\\overrightarrow{p} \\sim
Dir(\\overrightarrow{t}|\\overrightarrow{\\alpha})\$，同样可以证明\
\
\\begin{equation}\
\
E(\\overrightarrow{p}) =
\\Bigl(\\frac{\\alpha\_1}{\\sum\_{i=1}\^K\\alpha\_i},\\frac{\\alpha\_2}{\\sum\_{i=1}\^K\\alpha\_i},\\cdots,
\\frac{\\alpha\_K}{\\sum\_{i=1}\^K\\alpha\_i} \\Bigr)\
\
\\label{dir-mean}\
\
\\end{equation}\
\
以上两个结论很重要，因为我们在后面的 LDA 数学推导中需要使用这个结论。\

相关文章:\

1.  [LDA-math-认识Beta/Dirichlet分布(1)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%831 "LDA-math-认识Beta/Dirichlet分布(1)")
2.  [LDA-math-认识Beta/Dirichlet分布(2)](http://www.52nlp.cn/lda-math-%e8%ae%a4%e8%af%86betadirichlet%e5%88%86%e5%b8%832 "LDA-math-认识Beta/Dirichlet分布(2)")
3.  [LDA-math-神奇的Gamma函数(3)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b03 "LDA-math-神奇的Gamma函数(3)")
4.  [LDA-math-神奇的Gamma函数(1)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b01 "LDA-math-神奇的Gamma函数(1)")
5.  [LDA-math-神奇的Gamma函数(2)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b02 "LDA-math-神奇的Gamma函数(2)")
6.  [LDA-math-MCMC 和 Gibbs
    Sampling(2)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling2 "LDA-math-MCMC 和 Gibbs Sampling(2)")
7.  [LDA-math-MCMC 和 Gibbs
    Sampling(1)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling1 "LDA-math-MCMC 和 Gibbs Sampling(1)")
8.  [正态分布的前世今生(四)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e5%9b%9b "正态分布的前世今生(四)")
9.  [正态分布的前世今生(二)](http://www.52nlp.cn/%e6%ad%a3%e6%80%81%e5%88%86%e5%b8%83%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f%e4%ba%8c "正态分布的前世今生(二)")
10. [HMM学习最佳范例七：前向-后向算法5](http://www.52nlp.cn/hmm-learn-best-practices-seven-forward-backward-algorithm-5 "HMM学习最佳范例七：前向-后向算法5")

![](http://feeds.feedburner.com/~r/52nlp/~4/QmrqEcQikDc)
