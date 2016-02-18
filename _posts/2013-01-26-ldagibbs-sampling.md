--- layout: post title: "概率语言模型及其变形系列-LDA及Gibbs Sampling"
date: '2013-01-26T12:22:00.003+08:00' author: Wenh Q tags: - NLP -
tech.nlp modified\_time: '2013-11-30T12:25:43.987+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-1513058333118890707
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/01/ldagibbs-sampling.html ---
[概率语言模型及其变形系列-LDA及Gibbs
Sampling](http://feedproxy.google.com/~r/52nlp/~3/H8T0pgA8Jvg/%e6%a6%82%e7%8e%87%e8%af%ad%e8%a8%80%e6%a8%a1%e5%9e%8b%e5%8f%8a%e5%85%b6%e5%8f%98%e5%bd%a2%e7%b3%bb%e5%88%97-lda%e5%8f%8agibbs-sampling):\
本系列博文介绍常见概率语言模型及其变形模型，主要总结PLSA、LDA及LDA的变形模型及参数Inference方法。初步计划内容如下\
第一篇：[PLSA及EM算法](http://blog.csdn.net/yangliuy/article/details/8330640)\
第二篇：[LDA及Gibbs
Samping](http://blog.csdn.net/yangliuy/article/details/8302599)\
第三篇：LDA变形模型-Twitter
LDA，TimeUserLDA，ATM，Labeled-LDA，MaxEnt-LDA等\
第四篇：基于变形LDA的paper分类总结\
第二篇 LDA及Gibbs Sampling\
\[Update 2012/12/21
为了解决部分朋友反映的网页图片无法显示的问题，更新PDF版本\
下载地址 [LDA及Gibbs
Sampling-yangliuy](http://www.52nlp.cn/%e6%a6%82%e7%8e%87%e8%af%ad%e8%a8%80%e6%a8%a1%e5%9e%8b%e5%8f%8a%e5%85%b6%e5%8f%98%e5%bd%a2%e7%b3%bb%e5%88%97-lda%e5%8f%8agibbs-sampling/lda%e5%8f%8agibbs-sampling-yangliuy)\]\
1 LDA概要\
LDA是由Blei,Ng, Jordan
2002年发表于JMLR的概率语言模型，应用到文本建模范畴，就是对文本进行“隐性语义分析”（LSA），目的是要以无指导学习的方法从文本中发现隐含的语义维度-即“Topic”或者“Concept”。隐性语义分析的实质是要利用文本中词项(term)的共现特征来发现文本的Topic结构，这种方法不需要任何关于文本的背景知识。文本的隐性语义表示可以对“一词多义”和“一义多词”的语言现象进行建模，这使得搜索引擎系统得到的搜索结果与用户的query在语义层次上match，而不是仅仅只是在词汇层次上出现交集。\
\
\
\
2 概率基础\
2.1 随机生成过程及共轭分布\
要理解LDA首先要理解随机生成过程。用随机生成过程的观点来看，文本是一系列服从一定概率分布的词项的样本集合。最常用的分布就是Multinomial分布，即多项分布，这个分布是二项分布拓展到K维的情况，比如投掷骰子实验，N次实验结果服从K=6的多项分布。相应的，二项分布的先验Beta分布也拓展到K维，称为Dirichlet分布。在概率语言模型中，通常为Multinomial分布选取的先验分布是Dirichlet分布，因为它们是共轭分布，可以带来计算上的方便性。什么是共轭分布呢？在[文本语言模型的参数估计-最大似然估计、MAP及贝叶斯估计](http://blog.csdn.net/yangliuy/article/details/8296481)一文中我们可以看到，当我们为二项分布的参数p选取的先验分布是Beta分布时，以p为参数的二项分布用贝叶斯估计得到的后验概率仍然服从Beta分布，由此我们说二项分布和Beta分布是共轭分布。这就是共轭分布要满足的性质。在LDA中，每个文档中词的Topic分布服从Multinomial分布，其先验选取共轭先验即Dirichlet分布；每个Topic下词的分布服从Multinomial分布，其先验也同样选取共轭先验即Dirichlet分布。\
2.2 Multinomial分布和 Dirichlet分布\
上面从二项分布和Beta分布出发引出了Multinomial分布和Dirichlet分布。这两个分布在概率语言模型中很常用，让我们深入理解这两个分布。Multinomial分布的分布律如下\
![](http://img.my.csdn.net/uploads/201212/17/1355727082_3093.JPG)\
多项分布来自N次独立重复实验，每次实验结果可能有K种，式子中[![](http://latex.codecogs.com/gif.latex?%5Cvec%7Bn%7D "\vec{n}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7Bn%7D)为实验结果向量，N为实验次数，[![](http://latex.codecogs.com/gif.latex?%5Cvec%7Bp%7D "\vec{p}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7Bp%7D)为出现每种实验结果的概率组成的向量，这个公式给出了出现所有实验结果的概率计算方法。当K=2时就是二项分布，K=6时就是投掷骰子实验。很好理解，前面的系数其实是枚举实验结果的不同出现顺序，即\
[![](http://latex.codecogs.com/gif.latex?%5Cfrac%7BN!%7D%7B%5Cprod_%7Bi=1%7D%5EK%20n%5E%7B(k)%7D!%7D "\frac{N!}{\prod_{i=1}^K n^{(k)}!}")](http://www.codecogs.com/eqnedit.php?latex=%5Cfrac%7BN!%7D%7B%5Cprod_%7Bi=1%7D%5EK%20n%5E%7B(k)%7D!%7D)\
后面表示第K种实验结果出现了[![](http://latex.codecogs.com/gif.latex?n%5E%7B(k)%7D "n^{(k)}")](http://www.codecogs.com/eqnedit.php?latex=n%5E%7B(k)%7D)次，所以是概率的相应次幂再求乘积。但是如果我们不考虑文本中词出现的顺序性，这个系数就是1。
本文后面的部分可以看出这一点。显然有[![](http://latex.codecogs.com/gif.latex?%5Cvec%7Bp%7D "\vec{p}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7Bp%7D)各维之和为1，所有[![](http://latex.codecogs.com/gif.latex?n%5E%7B(k)%7D "n^{(k)}")](http://www.codecogs.com/eqnedit.php?latex=n%5E%7B(k)%7D)之和为N。\
Dirichlet分布可以看做是“分布之上的分布”，从Dirichlet分布上Draw出来的每个样本就是多项分布的参数向量[![](http://latex.codecogs.com/gif.latex?%5Cvec%7Bp%7D "\vec{p}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7Bp%7D)。其分布律为\
![](http://img.my.csdn.net/uploads/201212/17/1355728632_2900.JPG)\
[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Calpha%7D "\vec{\alpha}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Calpha%7D)为Dirichlet分布的参数，在概率语言模型中通常会根据经验给定，由于是参数向量[![](http://latex.codecogs.com/gif.latex?%5Cvec%7Bp%7D "\vec{p}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7Bp%7D)服从分布的参数，因此称为“hyperparamer”。[![](http://latex.codecogs.com/gif.latex?%5CDelta(%5Cvec%7B%5Calpha%7D) "\Delta(\vec{\alpha})")](http://www.codecogs.com/eqnedit.php?latex=%5CDelta(%5Cvec%7B%5Calpha%7D))是Dirichlet
delta函数，可以看做是Beta函数拓展到K的情况，但是在有的文献中也直接写成[![](http://latex.codecogs.com/gif.latex?B(%5Cvec%7B%5Calpha%7D) "B(\vec{\alpha})")](http://www.codecogs.com/eqnedit.php?latex=B(%5Cvec%7B%5Calpha%7D))。根据Dirichlet分布在[![](http://latex.codecogs.com/gif.latex?%5Cvec%7Bp%7D "\vec{p}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7Bp%7D)上的积分为1（概率的基本性质），我们可以得到一个重要的公式\
[![](http://latex.codecogs.com/gif.latex?%5Cint_%7B%5Cvec%7Bp%7D%7D%5Cprod_%7Bk=1%7D%5EKp_k%5E%7B%5Calpha_k%20-%201%7Dd%5Cvec%7Bp%7D%20=%20%5CDelta(%5Cvec%7B%5Calpha%7D) "\int_{\vec{p}}\prod_{k=1}^Kp_k^{\alpha_k - 1}d\vec{p} = \Delta(\vec{\alpha})")](http://www.codecogs.com/eqnedit.php?latex=%5Cint_%7B%5Cvec%7Bp%7D%7D%5Cprod_%7Bk=1%7D%5EKp_k%5E%7B%5Calpha_k%20-%201%7Dd%5Cvec%7Bp%7D%20=%20%5CDelta(%5Cvec%7B%5Calpha%7D))\
这个公式在后面LDA的参数Inference中经常使用。下图给出了一个Dirichlet分布的实例\
\
![](http://img.my.csdn.net/uploads/201212/17/1355729841_8724.JPG)\
在许多应用场合，我们使用对称Dirichlet分布，其参数是两个标量：维数K和参数向量各维均值[![](http://latex.codecogs.com/gif.latex?%5Calpha%20=%20%5Cfrac%7B%5Csum%5Calpha_k%7D%7BK%7D "\alpha = \frac{\sum\alpha_k}{K}")](http://www.codecogs.com/eqnedit.php?latex=%5Calpha%20=%20%5Cfrac%7B%5Csum%5Calpha_k%7D%7BK%7D).
其分布律如下\
![](http://img.my.csdn.net/uploads/201212/17/1355730281_5010.JPG)\
关于Dirichlet分布，维基百科上有一张很有意思的图如下\
[![LogDirichletDensity-alpha\_0.3\_to\_alpha\_2.0](http://www.52nlp.cn/wp-content/uploads/2012/12/LogDirichletDensity-alpha_0.3_to_alpha_2.0-300x300.gif){width="300"
height="300"}](http://www.52nlp.cn/%e6%a6%82%e7%8e%87%e8%af%ad%e8%a8%80%e6%a8%a1%e5%9e%8b%e5%8f%8a%e5%85%b6%e5%8f%98%e5%bd%a2%e7%b3%bb%e5%88%97-lda%e5%8f%8agibbs-sampling/logdirichletdensity-alpha_0-3_to_alpha_2-0)\
这个图将Dirichlet分布的概率密度函数取对数,并且使用对称Dirichlet分布，取K=3，也就是有两个独立参数 ![x\_1,
x\_2](http://upload.wikimedia.org/math/9/8/6/9865b118af4cfc107929ec116ab9eb80.png) ，分别对应图中的两个坐标轴，第三个参数始终满足[![111](http://www.52nlp.cn/wp-content/uploads/2012/12/111.png){width="140"
height="18"}](http://www.52nlp.cn/%e6%a6%82%e7%8e%87%e8%af%ad%e8%a8%80%e6%a8%a1%e5%9e%8b%e5%8f%8a%e5%85%b6%e5%8f%98%e5%bd%a2%e7%b3%bb%e5%88%97-lda%e5%8f%8agibbs-sampling/attachment/111)且[![222](http://www.52nlp.cn/wp-content/uploads/2012/12/222.png){width="152"
height="13"}](http://www.52nlp.cn/%e6%a6%82%e7%8e%87%e8%af%ad%e8%a8%80%e6%a8%a1%e5%9e%8b%e5%8f%8a%e5%85%b6%e5%8f%98%e5%bd%a2%e7%b3%bb%e5%88%97-lda%e5%8f%8agibbs-sampling/attachment/222) ，图中反映的是![\\alpha](http://upload.wikimedia.org/math/b/c/c/bccfc7022dfb945174d9bcebad2297bb.png)从0.3变化到2.0的概率对数值的变化情况。\
3 unigram model\
我们先介绍比较简单的unigram model。其概率图模型图示如下\
\
![](http://img.my.csdn.net/uploads/201212/17/1355731084_6463.JPG)\
\
关于概率图模型尤其是贝叶斯网络的介绍可以参见[ Stanford概率图模型（Probabilistic
Graphical Model）— 第一讲
贝叶斯网络基础](http://blog.csdn.net/yangliuy/article/details/8067261)一文。简单的说，贝叶斯网络是一个有向无环图，图中的结点是随机变量，图中的有向边代表了随机变量的条件依赖关系。unigram
model假设文本中的词服从Multinomial分布，而Multinomial分布的先验分布为Dirichlet分布。图中双线圆圈[![](http://latex.codecogs.com/gif.latex?w_n "w_n")](http://www.codecogs.com/eqnedit.php?latex=w_n)表示我们在文本中观察到的第n个词，[![](http://latex.codecogs.com/gif.latex?n%5Cin%20%5B1,N%5D "n\in [1,N]")](http://www.codecogs.com/eqnedit.php?latex=n%5Cin%20%5B1,N%5D)表示文本中一共有N个词。加上方框表示重复，就是说一共有N个这样的随机变量[![](http://latex.codecogs.com/gif.latex?w_n "w_n")](http://www.codecogs.com/eqnedit.php?latex=w_n)。[![](http://latex.codecogs.com/gif.latex?%5Cvec%7Bp%7D "\vec{p}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7Bp%7D)和[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Calpha%7D "\vec{\alpha}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Calpha%7D)是隐含未知变量，分别是词服从的Multinomial分布的参数和该Multinomial分布的先验Dirichlet分布的参数。一般[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Calpha%7D "\vec{\alpha}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Calpha%7D)由经验事先给定，[![](http://latex.codecogs.com/gif.latex?%5Cvec%7Bp%7D "\vec{p}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7Bp%7D)由观察到的文本中出现的词学习得到，表示文本中出现每个词的概率。\
4 LDA\
理解了unigram
model之后，我们来看LDA。我们可以假想有一位大作家，比如莫言，他现在要写m篇文章，一共涉及了K个Topic，每个Topic下的词分布为一个从参数为[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cbeta%7D "\vec{\beta}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cbeta%7D)的Dirichlet先验分布中sample出来的Multinomial分布（注意词典由term构成，每篇文章由word构成，前者不能重复，后者可以重复）。对于每篇文章，他首先会从一个泊松分布中sample一个值作为文章长度，再从一个参数为[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Calpha%7D "\vec{\alpha}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Calpha%7D)的Dirichlet先验分布中sample出一个Multinomial分布作为该文章里面出现每个Topic下词的概率；当他想写某篇文章中的第n个词的时候，首先从该文章中出现每个Topic下词的Multinomial分布中sample一个Topic，然后再在这个Topic对应的词的Multinomial分布中sample一个词作为他要写的词。不断重复这个随机生成过程，直到他把m篇文章全部写完。这就是LDA的一个形象通俗的解释。用数学的语言描述就是如下过程\
![](http://img.my.csdn.net/uploads/201212/17/1355734279_8366.JPG)\
转化成概率图模型表示就是\
![](http://img.my.csdn.net/uploads/201212/17/1355734495_2955.JPG)\
图中K为主题个数，M为文档总数，[![](http://latex.codecogs.com/gif.latex?N_m "N_m")](http://www.codecogs.com/eqnedit.php?latex=N_m)是第m个文档的单词总数。[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cbeta%7D "\vec{\beta}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cbeta%7D) 是每个Topic下词的多项分布的Dirichlet先验参数， ![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Calpha%7D "\vec{\alpha}") 
是每个文档下Topic的多项分布的Dirichlet先验参数。[![](http://latex.codecogs.com/gif.latex?z_%7Bm,n%7D "z_{m,n}")](http://www.codecogs.com/eqnedit.php?latex=z_%7Bm,n%7D)是第m个文档中第n个词的主题，[![](http://latex.codecogs.com/gif.latex?w_%7Bm,n%7D "w_{m,n}")](http://www.codecogs.com/eqnedit.php?latex=w_%7Bm,n%7D)是m个文档中的第n个词。剩下来的两个隐含变量[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Ctheta%7D_m "\vec{\theta}_m")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Ctheta%7D_m)和[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_k "\vec{\phi}_k")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_k)分别表示第m个文档下的Topic分布和第k个Topic下词的分布，前者是k维(k为Topic总数)向量，后者是v维向量（v为词典中term总数）。\
给定一个文档集合，[![](http://latex.codecogs.com/gif.latex?w_%7Bm,n%7D "w_{m,n}")](http://www.codecogs.com/eqnedit.php?latex=w_%7Bm,n%7D)是可以观察到的已知变量，![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Calpha%7D "\vec{\alpha}")和[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cbeta%7D "\vec{\beta}")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cbeta%7D)是根据经验给定的先验参数，其他的变量[![](http://latex.codecogs.com/gif.latex?z_%7Bm,n%7D "z_{m,n}")](http://www.codecogs.com/eqnedit.php?latex=z_%7Bm,n%7D)，[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Ctheta%7D_m "\vec{\theta}_m")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Ctheta%7D_m)和[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_k "\vec{\phi}_k")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_k)都是未知的隐含变量，也是我们需要根据观察到的变量来学习估计的。根据LDA的图模型，我们可以写出所有变量的联合分布\
![](http://img.my.csdn.net/uploads/201212/17/1355736164_2629.JPG)\
那么一个词[![](http://latex.codecogs.com/gif.latex?w_%7Bm,n%7D "w_{m,n}")](http://www.codecogs.com/eqnedit.php?latex=w_%7Bm,n%7D)初始化为一个term
t的概率是\
![](http://img.my.csdn.net/uploads/201212/17/1355736410_5560.JPG)\
也就是每个文档中出现topic k的概率乘以topic k下出现term
t的概率，然后枚举所有topic求和得到。整个文档集合的似然函数就是\
![](http://img.my.csdn.net/uploads/201212/17/1355736621_3206.JPG)\
5 用Gibbs Sampling学习LDA\
5.1   Gibbs Sampling的流程\
从第4部分的分析我们知道，LDA中的变量[![](http://latex.codecogs.com/gif.latex?z_%7Bm,n%7D "z_{m,n}")](http://www.codecogs.com/eqnedit.php?latex=z_%7Bm,n%7D)，[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Ctheta%7D_m "\vec{\theta}_m")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Ctheta%7D_m)和[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_k "\vec{\phi}_k")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_k)都是未知的隐含变量，也是我们需要根据观察到的文档集合中的词来学习估计的，那么如何来学习估计呢？这就是概率图模型的Inference问题。主要的算法分为exact
inference和approximate inference两类。尽管LDA是最简单的Topic Model，
但是其用exact inference还是很困难的，一般我们采用approximate
inference算法来学习LDA中的隐含变量。比如LDA原始论文Blei02中使用的mean-field
variational expectation maximisation 算法和Griffiths02中使用的Gibbs
Sampling，其中Gibbs Sampling 更为简单易懂。\
Gibbs Sampling 是Markov-Chain Monte
Carlo算法的一个特例。这个算法的运行方式是每次选取概率向量的一个维度，给定其他维度的变量值Sample当前维度的值。不断迭代，直到收敛输出待估计的参数。可以图示如下\
![](http://img.my.csdn.net/uploads/201212/17/1355737951_6237.JPG)\
初始时随机给文本中的每个单词分配主题[![](http://latex.codecogs.com/gif.latex?z%5E%7B(0)%7D "z^{(0)}")](http://www.codecogs.com/eqnedit.php?latex=z%5E%7B(0)%7D),然后统计每个主题z下出现term
t的数量以及每个文档m下出现主题z中的词的数量，每一轮计算![](http://img.my.csdn.net/uploads/201212/17/1355738243_2467.JPG)，即排除当前词的主题分配，根据其他所有词的主题分配估计当前词分配各个主题的概率。当得到当前词属于所有主题z的概率分布后，根据这个概率分布为该词sample一个新的主题[![](http://latex.codecogs.com/gif.latex?z%5E%7B(1)%7D "z^{(1)}")](http://www.codecogs.com/eqnedit.php?latex=z%5E%7B(1)%7D)。然后用同样的方法不断更新下一个词的主题，直到发现每个文档下Topic分布[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Ctheta%7D_m "\vec{\theta}_m")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Ctheta%7D_m)和每个Topic下词的分布[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_k "\vec{\phi}_k")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_k)收敛，算法停止，输出待估计的参数[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Ctheta%7D_m "\vec{\theta}_m")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Ctheta%7D_m)和[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_k "\vec{\phi}_k")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_k)，最终每个单词的主题[![](http://latex.codecogs.com/gif.latex?z_%7Bm,n%7D "z_{m,n}")](http://www.codecogs.com/eqnedit.php?latex=z_%7Bm,n%7D)也同时得出。实际应用中会设置最大迭代次数。每一次计算![](http://img.my.csdn.net/uploads/201212/17/1355738243_2467.JPG)的公式称为Gibbs
updating rule.下面我们来推导LDA的联合分布和Gibbs updating rule。\
5.2   LDA的联合分布\
由LDA的概率图模型，我们可以把LDA的联合分布写成\
![](http://img.my.csdn.net/uploads/201212/17/1355743482_7395.JPG)\
第一项和第二项因子分别可以写成\
![](http://img.my.csdn.net/uploads/201212/17/1355744327_7872.JPG)![](http://img.my.csdn.net/uploads/201212/17/1355744468_9478.JPG)\
可以发现两个因子的展开形式很相似，第一项因子是给定主题Sample词的过程，可以拆分成从Dirichlet先验中SampleTopic
Z下词的分布[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_z "\vec{\phi}_z")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_z)和从参数为[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_z "\vec{\phi}_z")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_z)的多元分布中Sample词这两个步骤，因此是Dirichlet分布和Multinomial分布的概率密度函数相乘，然后在[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_z "\vec{\phi}_z")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_z)上积分。注意这里用到的多元分布没有考虑词的顺序性，因此没有前面的系数项。[![](http://latex.codecogs.com/gif.latex?n_z%5E%7B(t)%7D "n_z^{(t)}")](http://www.codecogs.com/eqnedit.php?latex=n_z%5E%7B(t)%7D)表示term
t被观察到分配topic
z的次数，[![](http://latex.codecogs.com/gif.latex?n_m%5E%7B(k)%7D "n_m^{(k)}")](http://www.codecogs.com/eqnedit.php?latex=n_m%5E%7B(k)%7D)表示topic
k分配给文档m中的word的次数.此为这里面还用到了2.2部分中导出的一个公式\
[![](http://latex.codecogs.com/gif.latex?%5Cint_%7B%5Cvec%7Bp%7D%7D%5Cprod_%7Bk=1%7D%5EKp_k%5E%7B%5Calpha_k%20-%201%7Dd%5Cvec%7Bp%7D%20=%20%5CDelta(%5Cvec%7B%5Calpha%7D) "\int_{\vec{p}}\prod_{k=1}^Kp_k^{\alpha_k - 1}d\vec{p} = \Delta(\vec{\alpha})")](http://www.codecogs.com/eqnedit.php?latex=%5Cint_%7B%5Cvec%7Bp%7D%7D%5Cprod_%7Bk=1%7D%5EKp_k%5E%7B%5Calpha_k%20-%201%7Dd%5Cvec%7Bp%7D%20=%20%5CDelta(%5Cvec%7B%5Calpha%7D))\
因此这些积分都可以转化成Dirichlet
delta函数，并不需要算积分。第二个因子是给定文档，sample当前词的主题的过程。由此LDA的联合分布就可以转化成全部由Dirichlet
delta函数组成的表达式\
![](http://img.my.csdn.net/uploads/201212/17/1355746124_2862.JPG)\
这个式子在后面推导Gibbs updating rule时需要使用。\
5.3   Gibbs updating rule\
得到LDA的联合分布后，我们就可以推导Gibbs updating
rule，即排除当前词的主题分配，根据其他词的主题分配和观察到的单词来计算当前词主题的概率公式\
![](http://img.my.csdn.net/uploads/201212/17/1355746368_5899.JPG)\
里面用到了伽马函数的性质\
[![333](http://www.52nlp.cn/wp-content/uploads/2012/12/333.png){width="152"
height="21"}](http://www.52nlp.cn/%e6%a6%82%e7%8e%87%e8%af%ad%e8%a8%80%e6%a8%a1%e5%9e%8b%e5%8f%8a%e5%85%b6%e5%8f%98%e5%bd%a2%e7%b3%bb%e5%88%97-lda%e5%8f%8agibbs-sampling/attachment/333)\
同时需要注意到\
![](http://img.my.csdn.net/uploads/201212/17/1355746691_5068.JPG)\
这一项与当前词的主题分配无关，因为无论分配那个主题，对所有k求和的结果都是一样的，区别只在于拿掉的是哪个主题下的一个词。因此可以当成常量，最后我们只需要得到一个成正比的计算式来作为Gibbs
updating rule即可。\
5.4 Gibbs sampling algorithm\
当Gibbs sampling
收敛后，我们需要根据最后文档集中所有单词的主题分配来计算[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Ctheta%7D_m "\vec{\theta}_m")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Ctheta%7D_m)和[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_k "\vec{\phi}_k")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_k)，作为我们估计出来的概率图模型中的隐含变量。每个文档上Topic的后验分布和每个Topic下的term后验分布如下\
![](http://img.my.csdn.net/uploads/201212/17/1355747474_1762.JPG)\
可以看出这两个后验分布对应的先验分布一样，仍然为Dirichlet分布，这也是共轭分布的性质决定的。\
我们可以得到两个Multinomial分布的参数[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Ctheta%7D_m "\vec{\theta}_m")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Ctheta%7D_m)和[![](http://latex.codecogs.com/gif.latex?%5Cvec%7B%5Cphi%7D_k "\vec{\phi}_k")](http://www.codecogs.com/eqnedit.php?latex=%5Cvec%7B%5Cphi%7D_k)的计算公式如下\
![](http://img.my.csdn.net/uploads/201212/17/1355747879_8581.JPG)\
综上所述，用Gibbs Sampling 学习LDA参数的算法伪代码如下\
![](http://img.my.csdn.net/uploads/201212/17/1355748092_8082.JPG)\
关于这个算法的代码实现可以参见\
\* [Gregor Heinrich’s LDA-J](http://www.arbylon.net/projects/)\
\
\* [Yee Whye Teh’s Gibbs LDA Matlab
codes](http://www.gatsby.ucl.ac.uk/teaching/courses/ml1-2008.html)\
\
\* [Mark Steyvers and Tom Griffiths’s topic modeling matlab
toolbox](http://psiexp.ss.uci.edu/research/programs_data/toolbox.htm)\
\
\* [GibbsLDA++](http://gibbslda.sourceforge.net/)\
6 参考文献及推荐Notes\
本文部分公式及图片来自 Parameter estimation for text
analysis，感谢Gregor Heinrich详实细致的Technical report。
看过的一些关于LDA和Gibbs Sampling 的Notes，
这个是最准确细致的，内容最为全面系统。下面几个Notes对Topic
Model感兴趣的朋友也推荐看一看。\
\[1\] Christopher M. Bishop. Pattern Recognition and Machine Learning
(Information Science and Statistics). Springer-Verlag New York, Inc.,
Secaucus, NJ, USA, 2006.\
\
\[2\] Gregor Heinrich. Parameter estimation for text analysis. Technical
report, 2004.\
\
\[3\] Wang Yi. Distributed Gibbs Sampling of Latent Topic Models: The
Gritty Details Technical report, 2005.\
\[4\] Wayne Xin Zhao, Note for pLSA and LDA, Technical report, 2011.\
\[5\] Freddy Chong Tat Chua. Dimensionality reduction and clustering of
text documents.Technical report, 2009.\
\[6\] Wikipedia, Dirichlet
distribution , http://en.wikipedia.org/wiki/Dirichlet\_distribution\
更多语言模型相关文章见http://blog.csdn.net/yangliuy/\
<div>

相关文章:\
1.  [概率语言模型及其变形系列-PLSA及EM算法](http://www.52nlp.cn/%e6%a6%82%e7%8e%87%e8%af%ad%e8%a8%80%e6%a8%a1%e5%9e%8b%e5%8f%8a%e5%85%b6%e5%8f%98%e5%bd%a2%e7%b3%bb%e5%88%971-plsa%e5%8f%8aem%e7%ae%97%e6%b3%95 "概率语言模型及其变形系列-PLSA及EM算法")
2.  [LDA-math-MCMC 和
    Gibbs Sampling(2)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling2 "LDA-math-MCMC 和 Gibbs Sampling(2)")
3.  [LDA-math-MCMC 和
    Gibbs Sampling(1)](http://www.52nlp.cn/lda-math-mcmc-%e5%92%8c-gibbs-sampling1 "LDA-math-MCMC 和 Gibbs Sampling(1)")
4.  [“眼泪”与“门外汉”——向自然语言处理的大牛们学习](http://www.52nlp.cn/tears-and-uninitiated-learn-from-natural-language-processing-heros "“眼泪”与“门外汉”——向自然语言处理的大牛们学习")
5.  [贝叶斯模型文献阅读指南](http://www.52nlp.cn/bayesian-modeling-for-language-tutorial-reading "贝叶斯模型文献阅读指南")
6.  [MIT自然语言处理第三讲：概率语言模型（第六部分）](http://www.52nlp.cn/mit-nlp-third-lesson-probabilistic-language-modeling-sixth-part "MIT自然语言处理第三讲：概率语言模型（第六部分）")
7.  [最大熵模型文献阅读指南](http://www.52nlp.cn/maximum-entropy-model-tutorial-reading "最大熵模型文献阅读指南")
8.  [LDA-math-神奇的Gamma函数(3)](http://www.52nlp.cn/lda-math-%e7%a5%9e%e5%a5%87%e7%9a%84gamma%e5%87%bd%e6%95%b03 "LDA-math-神奇的Gamma函数(3)")
9.  [中文翻译技术沙龙第九次活动](http://www.52nlp.cn/%e4%b8%ad%e6%96%87%e7%bf%bb%e8%af%91%e6%8a%80%e6%9c%af%e6%b2%99%e9%be%99%e7%ac%ac%e4%b9%9d%e6%ac%a1%e6%b4%bb%e5%8a%a8 "中文翻译技术沙龙第九次活动")
10. [转载:　Topic modeling made just simple
    enough](http://www.52nlp.cn/%e8%bd%ac%e8%bd%bd-topic-modeling-made-just-simple-enough "转载:　Topic modeling made just simple enough")

</div>

![](http://feeds.feedburner.com/~r/52nlp/~4/H8T0pgA8Jvg){width="1"
height="1"}
