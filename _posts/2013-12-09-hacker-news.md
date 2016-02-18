--- 
layout: post 
title: Hacker
News排名算法是怎样工作的：得分、争议和罚分 
date: '2013-12-09T11:25:00.002+08:00' 
author: Wenh Q
tags: - tech
modified\_time: '2013-12-09T11:25:54.380+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-524435317054292796
blogger\_orig\_url: http://binaryware.blogspot.com/2013/12/hacker-news.html
---
<div style="margin: 10px; padding: 5px;">

<div style="font-size: 18px;">

[Hacker
News排名算法是怎样工作的：得分、争议和罚分](http://blog.jobbole.com/52575/)

</div>

<div style="font-size: 13px;">

Via [博客 - 伯乐在线](http://blog.jobbole.com/)

</div>

</div>

<div style="font-size: 13px; padding: 15px 0 10px 10px;">

**译者注：**根据维基百科相关词条，Hacker
News是一家关于计算机黑客和创业公司的社会化新闻网站，与其它社会化新闻网站不同的是，
Hacker News
没有踩或反对一条提交新闻的选项；只可以赞成或是完全不投票。简而言之，Hacker
News 允许提交任何可以被理解为"任何满足人们求知欲"的新闻。

更新（11/18）：关于罚分机制的文章被罚分了

十分讽刺的是，这篇文章在Hacker
News上被罚分了。这篇文章被放到首页后的几分钟，就被罚了0.2分，直接导致这篇文章从网站首页消失。下图中的黑色线，描绘了这篇文章在所有Hacker
News文章中的排名情况。你可以看到，在被罚分之后，它的排名明显下跌。灰色线显示的是如果不被罚分，这篇文章可能的排名情况。如果没有被罚分，这名文章可以排进前五，但是被罚分之后，这篇文章甚至没能回到首页（排进前30）。下方的绿色线描绘了这篇文章的初步评分。（11/26：我被告知，这个罚分是由于"投票探测"程序被错误出发引起的）。

![](http://ww1.sinaimg.cn/large/7cc829d3gw1eb6vqlcacjj20dw0e93z8.jpg)

Hacker
News排名的基本公式已经公开好几年了，但是人们依然对此有所疑惑。公开的代码是不是实现了真正的算法？排名仅仅与投票有关，还是也受到一些不可见因素的影响？在排名中，关于美国国家安全局的新闻是不是会被降低排名？为什么你评论了首页的文章之后，那篇热门文章就忽然从首页消失？

根据几天来对HN上排名前60的新闻的仔细分析，我可以回答这些问题。公开的计算公式基本上是精确的。对于排名的调整工作比你想象的还要多，首页上20%的文章会被以各种方式罚分。所有标题中含有"美国国家安全局"的新闻都会被罚分并且排名迅速下跌。一则"有争议"的新闻在被评论了40次之后，被严厉地罚分。这篇文章详细解释了得分和罚分的机制。



**排名机制是怎样工作的**

****文章的得分是基于他们提交以来，获得的赞成投票数，同时通过下列公示计算出得分。****

![](http://ww2.sinaimg.cn/mw690/7cc829d3gw1eb6vqk21zyg207s01dgld.gif)

由于在这个公式中时间的指数比投票的指数更大，因此，一篇文章的得分最终会降到0分。所以，没有一篇文章会长期在首页出现。这个指数称为重力因子。

你可能认为每当你浏览HackerNews网站的时候，每则新闻都通过上面的公式计算了得分，并且排序来决定它们在网页上的最终顺序。但是为了高效，新闻只是偶尔被重新排序。当有新闻被用户赞成时，它被重新排序，在列表中上移或下移调整到适当的排序位置，并不改变其他新闻的得分和相对顺序。这样，重新排序的工作就被大大减少了。但是，有可能一则新闻不再获得投票并且最终停留在一个较高位置。为了避免这种情况的出现，每隔30秒，随机选出前50则新闻中的一则进行重新排序。结果是，一则新闻如果一直没有获得投票，那么这则新闻可能在很长时间里被"错误"排序。同时，网页可以被缓存90秒。



**原始得分和11月11日的头条新闻**

****下图展示了在11.11日当天HN网站上排名前六十的文章的原始得分（不考虑罚分）。每一条线对应一篇文章，不同颜色代表了文章在网页中的位置。比如，红色表示在HN中的头条新闻文章。值得注意的是，由于罚分，获得最高原始得分的文章往往不是网页上的头条新闻。

![](http://ww2.sinaimg.cn/large/7cc829d3gw1eb6vqmvi0sj20p00haq6w.jpg)

这幅图中有一些有意思的现象。一篇文章的得分会很快增长并且在未来的几小时中缓慢降低。这一现象的主要原因是计算得分的公式：一篇文章得到连续的赞成投票后，得分会迅速到达峰值，然后得分逐步减小。但是，观察到的峰值增长更快——因为一篇文章在发布的一两个小时内会获得很多的赞成投票，然后投票的速度会减慢。由于这两个原因，出现了上图所示的陡峭曲线。

有一小部分文章每天的得分远远高于其他文章，同时，很多文章的得分处在所有文章的在中等水平。一些文章的得分很高，但是不幸的是，它们比一些更加受欢迎的文章得分稍低。当目前得分第一的文章得分逐渐降低，而后来的文章得分正在上升的空隙时间内，其他文章很容易获得暂时的第一名位置。

仔细观察原始得分最高的文章（上图所示）和红线所示的排名最好文章的差别，你会发现罚分规则的应用。早上，《[Getting
website registration completely
wrong](https://news.ycombinator.com/itemid=6710916)》一文获得了第一名，但是由于争议它被罚分并且排名迅速下降到了首页底部。因此，《[Linux
ate my RAM](http://news.ycombinator.com/itemid=6711069)》就在《[Simpsons
in
CSS](https://news.ycombinator.com/itemid=6710863)》获得第一之前，轻松占领了第一的位置。过了一会儿，在《[Apple
Maps](https://news.ycombinator.com/itemid=6711551)》达到了第一之后，也被罚分，导致它失去了第一的位置并且在排名上迅速下滑。《[Snapchat](http://news.ycombinator.com/itemid=6711869)》也排到过第一名的位置，但是，在上午8:22分，这篇文章被罚分，然后排名迅速下跌，完全消失在�
��中。《[Why you should never use
MongoDB](http://news.ycombinator.com/itemid=6712703)》一文非常受欢迎，并且在11月11日这一天的大部分时间里，名列第一，除了它被罚分后下滑到左右第七的位置。《[Severing
ties with the
NSA](http://news.ycombinator.com/itemid=6714585)》一文在一开始就由于标题中的美国国家安全局被罚分，但是因为它非常受欢迎，因此在罚分之后依然获得了第一名的位置。但是，它很快被强加了更严厉的罚分，迫使这篇文章下滑至首页的底部。最后，在这一天即将结束的时候《[
$4.1m
goes
missing](http://news.ycombinator.com/itemid=6715702)》一文被罚分。事实表明，即使没有被罚分，它第一的位置也会被《FTL》一文取代。

图中绿色的三角形和文字说明了争议罚分的应用。蓝色的三角形和文字表示文章由于罚分而被遗忘，跌出了前60的排名。这里没有展示较为温和的罚分。

显然，HN网站上第一名的内容并不是"自然"形成的，而是持续对很多文章应用罚分机制造成的。目前不清楚的是，这些罚分是由于HN管理员还是来自已标记文章。



**获得自动罚分的提交**

****一些文章，由于标题会在提交时被自动罚分，还有一些文章由于涉及的领域也会被自动罚分。比如：任何在标题中含有NSA美国国家安全局的文章会被自动罚0.4分。我试图找了一些会被自动罚分的关键词，比如：可怕的，比特币和泡沫，但是它们没有被罚分。

我注意到，很多网站引用的文章会被自动罚分0.25—0.8分，比如：arstechnica.com,
businessinsider.com, easypost.com, github.com, imgur.com, medium.com,
quora.com, qz.com, reddit.com, rt.com, stackexchange.com,
theguardian.com, theregister.com, theverge.com, torrentfreak.com,
youtube.com.我确定，实际的名单比这个更长。（这是"禁用"网站的一部分）

一项有趣的理论是：从流行网站上获得的新闻会被许多人并行提交，因此会比其他文章获得更多的赞成投票。对于来自于流行网站的新闻自动罚分，有助于抵消这样的作用。



**罚分的影响**

****采用得分计算公式，可以计算罚分的影响。如果一篇文章被罚了0.4分，那么这篇文章获得的每一个赞成投票，被算成0.3票。或者，这篇文章会以比正常下降速度快66%的速度在排名中下滑。0.1分的罚分，相当于每一个赞成投票，被算为0.05票，或者是，文章以3.6倍下滑速度在排名中下降。因此，0.4分的罚分影响很大，而0.1分的罚分可以认为是相当严厉的。



**争议**

****为了防止在HN上发生网络论战，当文章有"过多"评论是会由于"争议"被狠狠罚分。在公开的代码中，控制因子被设置在一篇文章多余20条评论，以及评论多余赞成投票。满足这两个条件的文章，会被以（赞成/评论）
^2的比例计算得分。但是，实际应用的公式并不如此——文章获得的评论多于赞成投票，同时评论数多余40则会被罚分。根据历史数据，我猜测公式中指数为3，而不是2，但是我还没有证明。

争议罚分会忽然发生并且给文章的排名带来灾难性的后果，一篇文章在一分钟内排名很高，但是当评论数达到40时排名迅速下滑。如果你很疑惑为什么一篇很受关注的文章忽然从首页小时了，那么可能的原因就是争议罚分。比如《[Why
the Chromebook pundits are out of touch with
reality](http://news.ycombinator.com/itemid=6713211)》一文在评论数达到40时，忽然从第5名下滑至22名，《[Show
HN: Get your health records from any
doctor'](http://news.ycombinator.com/itemid=6713065)》原来的排位是17，但是当评论数达到40时，它迅速从前60中消失了。



**我的方法**

****我每分钟抓取一次/news和/news2中的网页。我用BeautifulSoup工具解析（有时丑陋的）HTML，并且通过大量的Python脚本语言处理结果，并且利用难以理解但是功能强大的matplotlib将结果绘制为图。

分析的基本思想是：利用公式生成初始得分，然后寻找异常情况。在某一个时间点上（比如：11/09
8:46），我们可以计算出排名前十的新闻对应的初始得分：

-   2.802 Pyret: A new programming language from the creators of Racket
-   1.407 The Big Data Brain Drain: Why Science is in Trouble
-   1.649 The NY Times endorsed a secretive trade agreement that the
    public can't read
-   0.785 S.F. programmers build alternative to HealthCare.gov (warning:
    autoplay video)
-   0.844 Marelle: logic programming for devops
-   0.738 Sprite Lamp
-   0.714 Why Teenagers Are Fleeing Facebook
-   0.659 NodeKnockout is in Full Tilt. Checkout some demos
-   0.805 ISO 1
-   0.483 Shopify accepts Bitcoin.
-   0.452 Show HN: Understand closures

我们注意到，其中有三则新闻的排名低于他们得分的排名：*The NY
Times*,*Marelle*and*ISO 1*.因为NY
Times的排名在1.407到0.785之间，因此它的罚分在0.47到0.85之间。同样的，其他两者的罚分分别在0.87到0.93,0.60到0.82之间。

我注意到，大部分的新闻是根据它们的得分排序的，同时，异常的表现都是比排名预期要低，暗示着新闻被罚分。这说明实际使用的算分公式与公开的代码基本相符。如果两个公式不同，比如重力因子的指数较大，那么我会发现随着他们投票数目的增加或是时间的推移，他们会从"预期"的排名中消失，但是我没有见到这种情况。

这样的方法可以证明罚分机制的存在，并且给出罚分的范围。但是确定精准的罚分是很困难的。你可以预定一个时间范围，并且希望罚分值会收敛到一个明确的数值上。但是，不同的错误来源使得罚分很混乱。首先，相邻的新闻可能也被罚分，或者采用不同方式算分（比如：招聘启事）。其次，因为文章不是随时被重新排序的，一篇文章的位置只是暂时的。第三，随着时间的变化，对一篇文章的罚分可能有变化。第四，得到的投票数目可能并不是真正意义上的投票数，因为没有"不赞成"投票。结果是，我试图确定罚分的估计值，但是数值极不稳定。



**一整天的罚分分布**

****下图展示了一天中统计的罚分值。每一条线，代表一篇特定的文章。每一条线的初始值为1（没有罚分），当文章被罚分时，线条随之下降。当文章不在前60的时候，这条线就不存在了。罚分可能是0.2和0.4分，也有很多在0.8到0.9的范围内。看起来，一整天中，早上9点的罚分比较多。由于图中的噪声太多，我试验了不同的算法来改善这幅图。

![](http://ww3.sinaimg.cn/large/7cc829d3gw1eb6vqiozthj20jg0dzad2.jpg)

平均有20%的首页文章，38%的第二页文章被罚分。（由于某种定义，首页被罚分的文章出现在首页的概率较小，因此首页的罚分比例较低）相比于你的估计，可能有更多的文章被罚分。

下面列举了11/11页中被罚分的文章（不包含如果不被罚分，会出现在该页的文章）。这个列表比预期要长得多。

[Why the Climate Corporation Sold Itself to
Monsanto](http://news.ycombinator.com/itemid=6710023),[Facebook
Publications](http://news.ycombinator.com/itemid=6707776),[Bill Gates:
What I Learned in the Fight Against
Polio](http://news.ycombinator.com/itemid=6707666),[McCain says NSA
chief Keith Alexander 'should resign or be
fired'](http://news.ycombinator.com/itemid=6709468),[You are not a
software engineer](http://news.ycombinator.com/itemid=6708647),[What is
a y-combinator](http://news.ycombinator.com/itemid=6710450),[Typhoon
Haiyan kills 10,000 in
Philippines](http://news.ycombinator.com/itemid=6706011),[To Persuade
People, Tell Them a
Story](http://news.ycombinator.com/itemid=6707812),[Tetris and The Power
Of CSS](http://news.ycombinator.com/itemid=670%20%20%209466),[Microsoft
Research
Publications](http://news.ycombinator.com/itemid=6709901),[Moscow subway
sells free tickets for 30
sit-ups](http://news.ycombinator.com/itemid=6708758),[The secret world
of cargo ships](http://news.ycombinator.com/itemid=6710031),[These weeks
in Rust](http://news.ycombinator.com/itemid=6708537),[Empty-Stomach
Intelligence](http://news.ycombinator.com/itemid=6709791),[Getting
website registration completely
wrong](http://news.ycombinator.com/itemid=6710916),[The Six Most Common
Species Of Code](http://news.ycombinator.com/itemid=6711192),[Amazon to
Begin Sunday Deliveries, With Post Office's
Help](http://news.ycombinator.com/itemid=6710232),[Linux ate my
RAM](http://news.ycombinator.com/itemid=6711069),[Simpsons in
CSS](http://news.ycombinator.com/itemid=6710863),[Apple maps: how Google
lost when everyone thought it had
won](http://news.ycombinator.com/itemid=67%20%20%2011551),[Docker and
Go: why did we decide to write Docker in
Go](http://news.ycombinator.com/itemid=6709517),[Amazon Code
Ninjas](http://news.ycombinator.com/itemid=6710481),[Last Doolittle
Raiders make final
toast](http://news.ycombinator.com/itemid=6711708),[Linux Voice – A new
Linux magazine that gives
back](http://news.ycombinator.com/itemid=6711908),[Want to download
anime Just made a program for
that](http://news.ycombinator.com/itemid=6712223),[Commit 15 minutes to
explain to a stranger why you love your
job.](http://news.ycombinator.com/itemid=6710854),[Why You Should Never
Use MongoDB](http://news.ycombinator.com/itemid=6712703),[Show HN:
SketchDeck – build slides
faster](http://news.ycombinator.com/itemid=6712899),[Zero to Peanut
Butter Docker Time in 78 Second
s](http://news.ycombinator.com/itemid=6712961),[NSA's Surveillance
Powers Extend Far Beyond
Counterterrorism](http://news.ycombinator.com/itemid=6713409),[How
Sentry's Open Source Service Was
Born](http://news.ycombinator.com/itemid=6713324),[Real World
OCaml](http://news.ycombinator.com/itemid=6711348),[Show HN: Get your
health records from any
doctor](http://news.ycombinator.com/itemid=6713065),[Why the Chromebook
pundits are out of touch with
reality](http://news.ycombinator.com/itemid=6713211),[Towards a More
Modular Future for JavaScript
Libraries](http://news.ycombinator.com/itemid=6711362),[Why is
virt-builder written
in](http://news.ycombinator.com/itemid=6711893)[OCaml](http://news.ycombinator.com/itemid=6711893),[IOS:
End of an Era](http://news.ycombinator.com/itemid=6713612),[The craziest
things you can plug into your iPhone's audio
jack](http://news.ycombinator.com/itemid=6714128),[RFC: Replace Java
with Go in default
languages](http://news.ycombinator.com/itemid=6713295),[Show HN: Find
your health plan on Health
Sherpa](http://news.ycombinator.com/itemid=6714641),[Web Latency
Benchmark: A new kind of browser
benchmark](http://news.ycombinator.com/itemid=6713201),[Why are Amazon,
Facebook and Yahoo copying Microsoft's stack ranking
system](http://news.ycombinator.com/itemid=6712717),[Severing Ties with
the NSA](http://news.ycombinator.com/itemid=6714585),[Doctor performs
surgery using Google
Glass](http://news.ycombinator.com/itemid=6713361),[Duplicity + S3:
Easy, cheap, encrypted, automated full-disk
backups](http://news.ycombinator.com/itemid=6712244),[Bitcoin's UK
future looks bleak](http://news.ycombinator.com/itemid=6711863),[Amazon
Redshift's New
Features](http://news.ycombinator.com/itemid=6714215),[You're only
getting the nice
feedback](http://news.ycombinator.com/itemid=6712289),[Software is Easy,
Hardware is of Medium
Difficulty](http://news.ycombinator.com/itemid=6714681),[Facebook Warns
Users After Adobe
Breach](http://news.ycombinator.com/itemid=6714105),[International Space
Station Infected With USB Stick
Malware](http://news.ycombinator.com/itemid=6712323),[Tidbit:
Client-Side Bitcoin
Mining](http://news.ycombinator.com/itemid=6713537),[Go: "I have already
used the name for 
*MY
* programming
language"](http://news.ycombinator.com/itemid=6715000),[Multi-Modal
Drone: Fly, Swim &
Drive](http://news.ycombinator.com/itemid=6715171),[The Daily Go
Programming Newspaper](http://news.ycombinator.com/itemid=6715085),["We
have no food, we need water and other things to
survive."](http://news.ycombinator.com/itemid=6715432),[Introducing the
Humble Store](http://news.ycombinator.com/itemid=6713350),[The Six Most
Common Species Of
Code](http://news.ycombinator.com/itemid=6715976),[
$4.1m goes missing
as Chinese bitcoin trading platform GBL
vanishes](http://news.ycombinator.com/itemid=6715702),[Could Bitcoin Be
More Disruptive than the
Internet](http://news.ycombinator.com/itemid=6715744),[Apple Store is
updating](http://news.ycombinator.com/itemid=6716160).



**得分计算公式的代码**

****HN服务器上提供了得分算法的一种实现，以及更新的得分计算公式：

      (= gravity* 1.8 timebase* 120 front-threshold* 1         nourl-factor* .4 lightweight-factor* .17 gag-factor* .1)        (def frontpage-rank (s (o scorefn realscore) (o gravity gravity*))        (* (/ (let base (- (scorefn s) 1)                (if (> base 0) (expt base .8) base))              (expt (/ (+ (item-age s) timebase*) 60) gravity))           (if (no (in s!type 'story 'poll))  .8               (blank s!url)                  nourl-factor*               (mem 'bury s!keys)             .001                                              (* (contro-factor s)                                                 (if (mem 'gag s!keys)                                                      gag-factor*                                                     (lightweight s)                                                      lightweight-factor*                                                     1)))))

以防你不会阅读Arc代码，上面的代码中定义了一些变量：gravity
* =
1.8,timebase
* = 120(minutes), etc.
然后定义了一种首页排名方法，对于新闻s排名主要考虑了赞成投票（realsocore）和存在时间（item-age）。

罚分的情况由一组if定义的各种case定义。如果一篇文章中没有"内容（story）"或者"投票",那么罚分为0.8。如果URL为空，那么参数为norl-factor
*.如果内容被标记为"隐藏（bury）"，那么参数为0.001同时文章被遗忘。最后，默认的情况考虑了争议和遗传算法/轻便的因素。争议因素contro-factor用来压制可能引起网络论战的文章，这一因素稍后会详细说明。

如果文章被标记为恶作剧（joke）那么参数值为0.1，同时一篇"轻量级"的文章会有0.17的参数值。实际应用的罚分系统比公开代码中还要复杂的多。



**结论**

Hacker News主页上的文章位置并不是严格按照你的估计。经过对Hacker
News网页上的文章的仔细计算，我们可以对实际应用的算分公式有深入了解。虽然，赞成投票显然是影响排名的因素，但是，同时还有一个复杂的"罚分"系统使得文章排名下降或是彻底消失。这不仅仅是为了阻止垃圾信息，也会影响一些很流行的文章。如果一篇文章的评论数多余赞成投票，不要评论那篇文章，否则你会让它彻底消失！

<div>

<div>

### 相关文章

-   [基于用户投票的排名算法：Delicious和Hacker
    News](http://blog.jobbole.com/15713/)
-   [弱智错误第一篇：为什么Hacker
    News昨晚一夜宕机](http://blog.jobbole.com/35918/)
-   [霍夫曼编码压缩算法](http://blog.jobbole.com/20091/)
-   [基于用户投票的排名算法：牛顿冷却定律](http://blog.jobbole.com/16327/)
-   [张洋：浅析PageRank算法](http://blog.jobbole.com/23286/)
-   [缓存、缓存算法和缓存框架简介](http://blog.jobbole.com/30940/)
-   [骰子作画的算法](http://blog.jobbole.com/8563/)
-   [迪斯尼新图像算法，二维照片转三维模型](http://blog.jobbole.com/46210/)
-   [NoSQL数据库的分布式算法](http://blog.jobbole.com/43891/)
-   [Zookeeper与paxos算法](http://blog.jobbole.com/45721/)

</div>

</div>

[Hacker
News排名算法是怎样工作的：得分、争议和罚分](http://blog.jobbole.com/52575/)，首发于[博客
- 伯乐在线](http://blog.jobbole.com/)。

</div>
