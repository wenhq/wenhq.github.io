--- 
layout: post 
title: "代码审查不是用来…… ( Code Review )" 
date: '2013-10-24T13:23:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-10-24T13:23:59.164+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-3124047587732460286
blogger\_orig\_url: http://binaryware.blogspot.com/2013/10/code-review.html
---
<div style="margin: 10px; padding: 5px;">

<div style="font-size: 18px;">

[代码审查不是用来…… ( Code Review
)](http://www.oschina.net/news/45315/code-review-is-not-about)

</div>

<div style="font-size: 13px;">

Via [开源中国社区最新新闻](http://www.oschina.net/?from=rss)

</div>

</div>

<div style="font-size: 13px; padding: 15px 0 10px 10px;">

<div>

![Picdump\_Ritemail\_-014](http://static.oschina.net/uploads/img/201310/24072521_t68n.jpg)

</div>

在我们公司里要执行代码审查。这是我们每天的例行工作。事实上，今天的我们正是从这种一直坚持探索的漫长道路上走出来的。我们尝试各种技术、方法和工具，直到我们走到今天的成就(但这并不是说我们就此停步)。

在这旅途中，我们发现了很多的陷阱和危险，它们等待新手们上钩。这篇文章就是关于它们的：代码审查中的陷阱和误解。

### 代码控制：

很
多公司都把代码审查当成控制代码的方法。很多这样的公司都使用预提交策略。这种策略大多时候都是开源项目中使用，因为会有成百上千的提交者。可在一般的公
司里，很少会有这种情况。如果你雇用一个人，这意味这你要完全信任他，允许他将代码提交到代码库里。我知道有些公司会忍不住制定一些规程，要求程序员在提
交代码前必须进行"审查"和"批准"，但这并不能保证代码的质量。而且，程序员很快就会把这种代码审查当作一种"愚蠢"的公司形式过程，会开始抵制它(例
如，每月改一次密码。例如，使用像mypass1,mypass2等的密码)。

![Codebrag](http://static.oschina.net/uploads/img/201310/24072521_3Muc.png){width="400"
height="196"}



### 审判厅：

不
要把代码审查当成寻找替罪羊和追究责任的工具。比如说，这有一个错误，你找到"审查"这段代码的人，并责备他没有发现这个问题。这种事情会给公司里的开发
工作带来严重的影响。人们会挑出每个分号放置不正确的地方，因为他们担心会被当成替罪羊。团队成员开始缺乏信心，并最终失去互信。

![duty](http://static.oschina.net/uploads/img/201310/24072521_Cr9q.jpg){width="270"
height="320"}

### 责任任务：

不要过分要求程序员做代码审查。如果你强迫他们每天做一小时的代码审查，他们很快就会痛恨它，把它当成一种无趣的任务。代码审查是一种学习，是表扬，是获得反馈，是一种十分社交性的活动。代码审查应该是有趣的，不要让它变的无聊。

![wolfs](http://static.oschina.net/uploads/img/201310/24072522_LqBV.jpg){width="320"
height="256"}

### 我和我的代码

如
果你的代码被某人审查，他会留下一些注释(有时是不那么友好的话)，不要生气。他并不是在说你是一个很烂的程序员。这不是他的本意，也不是代码审查的目
的。他的所作所为是在批评代码(而不是作者)。代码审查是针对代码，不是针对你。不要把代码审查当成互相讽刺的论坛和相互批判的工具。当你写审查注释时，
努力保持不要粗鲁，也不要太苛刻。努力站在作者的立场上看待这些代码。

<div>

总结一下，很多种错误都会使代码审查变味。上面4种是我经历过或预料到的，请警惕。我承诺还会写一篇描述"代码审查是来….."的文章。

如果你想尝试一种代码审查工具，请访问[codebrag.com](http://codebrag.com/)，这是我们的经验和实践的成果。![puppet](http://static.oschina.net/uploads/img/201310/24072522_MW6k.jpg){width="240"
height="320"}

</div>

<div>


[英文原文： [Code Review is not
about...](http://blog.zuchos.com/2013/10/what-code-review-is-not-about.html)

]

</div>

</div>
