--- 
layout: post 
title: Hacker News 排名算法工作原理 
date: '2013-08-22T17:55:00.000+08:00' 
author: Wenh Q
tags: - tech.python
modified\_time: '2013-11-30T12:24:13.768+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-4903260279428836923
blogger\_orig\_url: http://binaryware.blogspot.com/2013/08/hacker-news.html
---
<div style="margin: 10px; padding: 5px;">

<div style="font-size: 18px;">

[

Hacker News
排名算法工作原理](http://www.oschina.net/news/43456/how-hacker-news-ranking-algorithm-works)

</div>

<div style="font-size: 13px;">

Via [开源中国社区最新新闻](http://www.oschina.net/?from=rss)

</div>

</div>

<div style="font-size: 13px; padding: 15px 0 10px 10px;">

![](http://static.oschina.net/uploads/img/201308/22075426_EWfI.jpg)

这篇文章我要向大家介绍[Hacker
News](http://news.ycombinator.com/)网站的文章排名算法工作原理，以及如何在自己的应用里使用这种算法。这个算法非常的简单，但却在突出热门文章和遴选新文章上表现的异常优秀。

### 深入 news.arc 程序代码

Hacker News是用Arc语言开发的，这是一种Lisp方言，由Y
Combinator投资公司创始人[Paul
Graham](http://www.paulgraham.com/)创造。Hacker
News的开源的，你可以在[arclanguage.org](http://arclanguage.org/)找到它的源代码。深入发掘
news.arc 程序，你会找到这段排名算法代码，就是下面这段：

    ; Votes divided by the age in hours to the gravityth power.  ; Would be interesting to scale gravity in a slider.    (= gravity* 1.8 timebase* 120 front-threshold* 1      nourl-factor* .4 lightweight-factor* .3 )    (def frontpage-rank (s (o scorefn realscore) (o gravity gravity*))    (* (/ (let base (- (scorefn s) 1)            (if (> base 0) (expt base .8) base))          (expt (/ (+ (item-age s) timebase*) 60) gravity))       (if (no (in s!type 'story 'poll))  1           (blank s!url)                  nourl-factor*           (lightweight s)                (min lightweight-factor*                                                (contro-factor s))                                          (contro-factor s))))

本质上，这段 Hacker News采用的排名算法的工作原理看起来大概是这个样子：

    Score = (P-1) / (T+2)^G    其中，  P = 文章获得的票数( -1 是去掉文章提交人的票)  T = 从文章提交至今的时间(小时)  G = 比重，news.arc里缺省值是1.8

正如你看到的，这个算法很容易实现。在下面的内容里，我们将会看到这个算法是如何工作的。

### 比重(G)和时间(T)对排名的影响

比重和时间在文章的排名得分上有重大的影响。正常情况下如下面所述：

-   当T增加时文章得分会下降，这就是说越老的文章分数会越底。
-   当比重加大时，老的文章的得分会减的更快

为了能视觉呈现这个算法，我们可以把它绘制到[Wolfram
Alpha](http://www.wolframalpha.com/)。

### 得分随着时间是如何变化的

![Score 24
hours](http://static.oschina.net/uploads/img/201308/22075427_p9rS.gif)

你可以看到，随着时间的流逝，得分骤然下降，例如，24小时前的文章的分数变的非常低——不管它获得了如何多的票数。

[Plot语句](http://goo.gl/ddYe):

    plot(      (30 - 1) / (t + 2)^1.8,       (60 - 1) / (t + 2)^1.8,      (200 - 1) / (t + 2)^1.8  ) where t=0..24

### 比重参数是如何影响排名的

![Gravity
effects](http://static.oschina.net/uploads/img/201308/22075428_opr4.gif)

图中你可以看到，比重越大，得分下降的越快。

[Plot语句](http://goo.gl/AGPN):

    plot(      (p - 1) / (t + 2)^1.8,       (p - 1) / (t + 2)^0.5,      (p - 1) / (t + 2)^2.0  ) where t=0..24, p=10

### Python语言实现

之前已经说了，这个评分算法很容易实现：

<div>

    def calculate_score(votes, item_hour_age, gravity=1.8):      return (votes - 1) / pow((item_hour_age+2), gravity)

</div>

关键是要理解算法中的各个因素对评分的影响，这样你可以在你的应用中进行定制。我希望这篇文章已经向你说明了这些
![:-)](http://static.oschina.net/uploads/img/201308/22075428_2HO1.gif)

祝编程快乐！

编辑：

Paul Graham 分享了修正后的[HN
排名算法](http://news.ycombinator.com/item?id=1781417)：

        (= gravity* 1.8 timebase* 120 front-threshold* 1         nourl-factor* .4 lightweight-factor* .17 gag-factor* .1)        (def frontpage-rank (s (o scorefn realscore) (o gravity gravity*))        (* (/ (let base (- (scorefn s) 1)                (if (> base 0) (expt base .8) base))              (expt (/ (+ (item-age s) timebase*) 60) gravity))           (if (no (in s!type 'story 'poll))  .8               (blank s!url)                  nourl-factor*               (mem 'bury s!keys)             .001                                              (* (contro-factor s)                                                 (if (mem 'gag s!keys)                                                      gag-factor*                                                     (lightweight s)                                                      lightweight-factor*                                                     1)))))



<div>


[英文原文： [How Hacker News ranking algorithm
works](http://amix.dk/blog/post/19574) 
]

</div>

</div>
