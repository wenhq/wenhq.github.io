---
layout: post
title: "利用In-Database Analytics技术在大规模数据上实现机器学习的SGD算法"
date: '2014-03-14T16:51:00.000+08:00'
author: Wenh Q
tags:
modified_time: '2014-03-14T16:51:03.274+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-2017001236040274452
blogger_orig_url: http://binaryware.blogspot.com/2014/03/in-database-analyticssgd.html
---
[文章： 利用In-Database
Analytics技术在大规模数据上实现机器学习的SGD算法](http://www.infoq.com/cn/articles/in-database-analytics-sdg-arithmetic?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)  通过
[Wenhu Qiu的 InfoQ 个性化 RSS Feed](http://www.infoq.com/cn/)


随着应用数据的增长，在大规模数据集上进行统计分析和机器学习越来越成为一个巨大的挑战。目前，适用于统计分析/机器学习的语言/库有很多，如专为数据分析用途而设计的R语言，Python语言的机器学习库Scikits，支持分布式环境扩展的有基于Map-Reduce实现的Mahout，以及分布式内存计算框架Spark上的机器学习库MLlib等等。目前Spark框架也推出了R语言的接口SprakR。但是，本文要讨论的，则是另外一种设计思路，在database中实现统计分析和机器学习算法，即In-Database
Analysis，Madlib库就是这种设计思路的代表。 By 梁堰波 徐伟辰
