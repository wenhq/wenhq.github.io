--- 
layout: post 
title: MapReduce与自然语言处理 
date:'2014-01-16T15:53:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2014-01-16T15:53:12.350+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-8013847468455065492
blogger\_orig\_url: http://binaryware.blogspot.com/2014/01/mapreduce.html
---
[MapReduce与自然语言处理](http://feedproxy.google.com/~r/52nlp/~3/6u5MY5p6iSs/mapreduce%e4%b8%8e%e8%87%aa%e7%84%b6%e8%af%ad%e8%a8%80%e5%a4%84%e7%90%86)  于
11-1-16 通过 [我爱自然语言处理](http://www.52nlp.cn/) 作者：52nlp



　　我接触MapReduce时间不长，属于初学者的级别，本没有资格在这里谈"MapReduce与自然语言处理"的，不过这两天刚好看了IBM
developerWorks上的《[用 MapReduce 解决与云计算相关的 Big Data
问题](http://www.ibm.com/developerworks/cn/cloud/library/cl-bigdata/)》，觉得这篇文章有两大好处：第一，它有意或无意的给了读者不仅有价值而且有脉络的关于MapReduce的参考资料；第二，虽然文中没有直接谈"自然语言处理"，但是在最后的"下一步"引申中，它给关注MapReduce在文本处理的读者列出了一份与自然语言处理相关的参考资料，这些资料，相当的有价值。因此对于"MapReduce或者并行算法与自然语言处理"，结合这篇文章以及自己的一点点经验，我尝试在这里"抛砖引玉"一把，当然，仅仅是抛砖引玉。

　　[MapReduce](http://en.wikipedia.org/wiki/MapReduce)是Google定义的一套并行程序设计模式(parallel
programming paradigm)，由两名Google的研究员[Jeffrey
Dean](http://research.google.com/people/jeff/index.html)和[Sanjay
Ghemawat](http://research.google.com/people/sanjay/index.html)在2004年时提出，二人目前均为Google
Fellow。所以两位Google研究员当年的论文是MapReudce学习者的必读：



'Google 工程师发表的文章 "[MapReduce: Simplified Data Processing on
Large Clusters](http://labs.google.com/papers/mapreduce-osdi04.pdf)"
清楚地解释了 MapReduce 的工作方式。这篇文章导致的结果是，从 2004
年到现在出现了许多开放源码的 MapReduce 实现。'



　　同时在[Google
Labs](http://labs.google.com/papers/mapreduce.html)上，有这篇文章的摘要和[HTML
Slides](http://labs.google.com/papers/mapreduce-osdi04-slides/index.html)：





MapReduce is a programming model and an associated implementation for
processing and generating large data sets. Users specify a map function
that processes a key/value pair to generate a set of intermediate
key/value pairs, and a reduce function that merges all intermediate
values associated with the same intermediate key. Many real world tasks
are expressible in this model, as shown in the paper.





　　MapReduce的发明者Jeff DeanJeffrey Dean和Sanjay
Ghemawat在2008年时重新整理了这篇论文，并发表在"Communications of the
ACM"上，有兴趣的读者可以在Portal ACM上找到：[MapReduce: simplified data
processing on large
clusters](http://portal.acm.org/citation.cfm?id=1327452.1327492&coll=GUIDE&dl=&idx=J79&part=magazine&WantType=Magazines&title=Communications%20of%20the%20ACM)。

　　另外，在Google Code University上，有一个比较正式的Mapreduce
Tutorial： [Introduction to Parallel Programming and
MapReduce](http://code.google.com/edu/parallel/mapreduce-tutorial.html)，写得稍微理论一些，不过也很值得参考。

　　关于MapReduce的开源实现，最有名的莫过于开源的[Hadoop](http://hadoop.apache.org/)了。Hadoop是仅次于Google
MapReduce系统的最早出现的MapReduce实现，它是几个Google工程师离开Google后用Java开发的。
如果读者对学习Hadoop感兴趣，除了参考Hadoop官方文档外，另外就是《[Hadoop:
The Definitive Guide: MapReduce for the
Cloud](http://book.douban.com/subject/3220004/)》这本书了，我所见的一些资料里都推荐过这本书，另外包括IBM的这篇文章的参考资料里也列出了这本书，感觉的确不错！这本书的电子版也可以Google的出来，读者自助吧！

　　接下来就是"MapReduce与自然语言处理"了，IBM的这篇文章列出了如下的"自然语言处理"方面的参考资料：

　　· [Natural Language Processing with
Python](http://www.nltk.org/book)以非常通俗的方式介绍自然语言处理。

　　· 在
[NLP](http://www.cloudera.com/blog/2010/03/natural-language-processing-with-hadoop-and-python/)
上也有一篇文章。

　　· PDF 文档 [how to do large-scale NLP with NLTK and
Dumbo](http://us.pycon.org/media/2010/talkdata/PyCon2010/098/large-scale-nlp-pycon-2010.pdf)。

　　· 在 "[可爱的 Python:
自然语言工具包入门](http://www.ibm.com/developerworks/linux/library/l-cpnltk.html)"
中，David Mertz 讲解如何使用 Python 进行计算语言学处理。

　　我额外再推荐一本书：[Data-Intensive Text Processing with
MapReduce](http://www.umiacs.umd.edu/~jimmylin/book.html)，作者[Jimmy
Lin](http://www.umiacs.umd.edu/~jimmylin/)是马里兰大学的associate
professor，目前结合MapReduce利用Hadoop在NLP领域发了一些paper，没有paper的读者可要抓紧了，"并行算法与自然语言处理"这个切入点不错——开个玩笑！当然这本书的电子版Jimmy
Lin已经在这个页面里提供了。

　　最后就是引用IBM所列的其他学习参考资料了，这些资料，很有价值，也为自己做个备份：

　　· developerWorks 文章 "[在云中使用 MapReduce
和负载平衡](http://www.ibm.com/developerworks/cn/cloud/library/cl-mapreduce/)"
提供关于在云中使用 MapReduce 的更多信息并讨论了负载平衡。

　　· [how to install a distribution for Hadoop on a single Linux
node](https://docs.cloudera.com/display/DOC/Hadoop+%28CDH3%29+Quick+Start+Guide)教程讨论如何在单一
Linux 节点上安装 Hadoop 发行版。

　　· "[A Comparison of Approaches to Large-Scale Data
Analysis](http://database.cs.brown.edu/sigmod09/benchmarks-sigmod09.pdf)"
详细对比 MapReduce 和并行 SQL DBMS 的基本控制流。

　　· developerWorks 上的 "[用 Hadoop
进行分布式数据处理](http://www.ibm.com/developerworks/cn/views/linux/libraryview.jsp?view_by=search&sort_by=Date&sort_order=desc&view_by=Search&search_by=%E7%94%A8+Hadoop+%E8%BF%9B%E8%A1%8C%E5%88%86%E5%B8%83%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86&dwsearch.x=21&dwsearch.y=15&dwsearch=GoH)"
系列帮助您开始开发应用程序，从支持单一节点到支持多个节点。

　　· 进一步了解本文中的主题：

　　　　o [Erlang overview](http://www.erlang.org/white_paper.html)

　　　　o [MapReduce and parallel
programming](http://code.google.com/edu/parallel/mapreduce-tutorial.html)

　　　　o [Amazon Elastic
MapReduce](http://aws.amazon.com/elasticmapreduce/)

　　　　o [Hive and Amazon Elastic
MapReduce](http://aws.amazon.com/articles/2855)

　　　　o [Writing parallel applications (for thread
monkeys)](http://oreilly.com/catalog/9780596521547)

　　　　o [10 minutes to parallel MapReduce in
Python](http://mikecvet.wordpress.com/2010/07/02/parallel-mapreduce-in-python/)

　　　　o [Implementing MapReduce in
multiprocessing](http://www.doughellmann.com/PyMOTW/multiprocessing/mapreduce.html)

　　　　o [Disco, an alternative to
Hadoop](http://discoproject.org/doc/faq.html)

　　　　o [Hadoop: The Definitive Guide: MapReduce for the
Cloud](http://oreilly.com/catalog/9780596521981)

　　　　o [Business intelligence: Crunch data with Hadoop
(MapReduce)](http://www.ibm.com/developerworks/web/library/wa-dojohadoop1/)

　　· 在 developerWorks
[云开发人员参考资料](https://www.ibm.com/developerworks/cn/cloud/index.html)
中，寻找应用程序和服务开发人员构建云部署项目的知识和经验，并分享自己的经验。



注：原创文章，转载请注明出处"[我爱自然语言处理](http://www.52nlp.cn/)"：[http://www.52nlp.cn](http://www.52nlp.cn/)



本文链接地址：[http://www.52nlp.cn/mapreduce与自然语言处理](http://www.52nlp.cn/mapreduce%E4%B8%8E%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86)
