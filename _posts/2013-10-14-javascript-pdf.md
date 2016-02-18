--- 
layout: post 
title: "使用 JavaScript 实现对 PDF 的全文索引" 
date: '2013-10-14T14:13:00.001+08:00' 
author: Wenh Q
tags: - tech
modified\_time: '2013-10-14T14:13:46.024+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-7663199152112631072
blogger\_orig\_url: http://binaryware.blogspot.com/2013/10/javascript-pdf.html
---
<div style="margin: 10px; padding: 5px;">

<div style="font-size: 18px;">

[使用 JavaScript 实现对 PDF
的全文索引](http://www.oschina.net/translate/building-a-full-text-index-in-javascript)

</div>

<div style="font-size: 13px;">

Via [开源中国社区最新新闻](http://www.oschina.net/?from=rss)

</div>

</div>

<div style="font-size: 13px; padding: 15px 0 10px 10px;">

我曾今在一个售卖法律和财务数据库访问方案（他们称之为"智能信息"）的公司工作。大多数法庭记录都是通过PACER以PDF形式提供的，一
个站点被特地开发出来用于发布法庭记录。基于这个数据集的一个意义重大的数据库产品需要建立一条处理管道，它能够从超过两亿分份PDF文档中提取文本并对
其进行索引，展示美国超过20年的诉讼记录。这些处理过程将花费数月的机器时间，使得软件工作组在构建它们时的面临很大的压力。在这一处理过程中的早期有
个一步骤是从电子文档化的PDF中提取出内容，其在稍后的将会被送入一个NLP处理阶段——显示关键字，标注部分词类，识别实体，而然后发出报告（如果你
对此感兴趣，可以检索
[Python中的自然语言处理](http://www.amazon.com/gp/product/0596516495/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeAS%20%20%20IN=0596516495&linkCode=as2&tag=thesecrelifeo-20)
作为入门 - 再读一读
[这里我的评论](http://www.garysieling.com/blog/book-review-natural-language-processing-with-python)
） 

</div>
