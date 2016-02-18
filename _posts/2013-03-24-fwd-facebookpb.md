--- 
layout: post 
title: Facebook如何实现PB级别数据库自动化备份 
date:'2013-03-24T12:08:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-03-24T12:14:11.790+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-92363025141937092
blogger\_orig\_url: http://binaryware.blogspot.com/2013/03/fwd-facebookpb.html
---
<div dir="ltr" style="text-align: left;" trbidi="on">



<div class="gmail_quote">

<div
style="background-color: #c3d9ff; font-size: 1px!important; line-height: 0px!important; margin: 0px 1px; padding-top: 1px;">

</div>

<div
style="background-color: #c3d9ff; font-size: 1px!important; line-height: 0px!important; margin: 0px 2px; padding-top: 1px;">

</div>

<div
style="font-family: sans-serif; margin: 0px 10px; overflow: auto; width: 100%;">

 {#section style="margin: 0.25em 0 0 0;"}

<div>

[Facebook如何实现PB级别数据库自动化备份](http://blog.jobbole.com/34500/?utm_source=rss&utm_medium=rss&utm_campaign=facebook%25e5%25a6%2582%25e4%25bd%2595%25e5%25ae%259e%25e7%258e%25b0pb%25e7%25ba%25a7%25e5%2588%25ab%25e6%2595%25b0%25e6%258d%25ae%25e5%25ba%2593%25e8%2587%25aa%25e5%258a%25a8%25e5%258c%2596%25e5%25a4%2587%25e4%25bb%25bd)

</div>

<div style="margin-bottom: 0.5em;">

于 13-3-1 通过 [博客 - 伯乐在线](http://blog.jobbole.com/) 作者：

</div>



来源：[InfoQ-郑柯](http://www.infoq.com/cn/news/2013/02/facebook-mysql-backup)

Facebook的MySQL数据库，是世界上最庞大的MySQL数据库之一，在不同地区有数千个数据库服务器。因此，备份对他们来说是个巨大的挑战。为了解决这个问题，他们构建了一个高度自动化、非常有效的备份系统，每周移动多个PB的数据。Facebook数据团队的[Eric
Barrett](http://www.facebook.com/ehb)通过[一篇文章](http://www.facebook.com/notes/facebook-engineering/under-the-hood-automated-backups/10151239431923920)分享了他们的做法。

他们没有采用大量前载（front-loaded）测试，而是强调快速检测失败，并且进行快速、自动化纠正。部署几百个数据库服务器，只需很少人力干预。使用下面的三个措施，他们做到了有节奏的增长，同时具备支持上十亿用户的灵活性。

**措施1：二进制日志和mysqldump**

第一道防线称为"措施1"，或"机架"备份（rack
backup），简称RBU。在每个数据库机架上，不论其类型为何，都有两个RBU存储服务器。以RBU作为数据库服务器放在同一个机架中，这可以保证最大的带宽和最小的延迟，它们同时可以作为缓存，在备份的下个措施使用。

收集[二进制日志](http://dev.mysql.com/doc/refman/5.1/en/binary-log.html)，是这些服务器的工作之一。二进制日志会不断以流形式，通过模拟从进程（simulated
slave
process）输送到RBU主机中。这样一来，不需要运行mysqld，RBU就可以接收到同样的更新作为复制版本。

在RBU上保存同步的二进制日志很重要：如果一个主数据库服务器离线，该服务器上的用户将无法更新状态或是上传照片。出现问题后，他们需要保证修复时间越短越好。有可用的二进制日志，就能让他们在数秒内启动另一个数据库作为主数据库。由于RBU中有秒级的二进制日志，即使某个旧主数据库完全不可用，也没有关系，只要利用将记录下的事务恢复到上一个备份中即可完成立即恢复。

RBU服务器的第二个工作是执行传统备份。MySQL备份有两种方式：二进制和逻辑（mysqldump）。Facebook使用逻辑备份，因为它与版本无关，提供更好的数据完整性，更紧凑，恢复起来更省事。不过，当为某个数据库构建全新复制时，他们仍然使用二进制拷贝。

mysqldump的一个主要好处是：磁盘上的数据损坏不会影响到备份中。如果磁盘某个扇区出现问题，或是写入错误，InnoDB页面校验和就会出错。在组合备份流时，MySQL会从内存中读取正确的内容，或是去磁盘读取，然后遇到错误的校验和，停止备份（以及数据库进程）。mysqldump的问题是：污染用来缓存InnoDB块的LRU缓存。不过，新版本的MySQL中，会将LRU插入操作从扫描时放到缓存结束。

对在自己权限范围内的所有数据库，每个RBU都有一个夜间备份。尽管有着天量级别的数据，Facebook的团队还是可以在几个小时内完成对所有数据的备份。

如果RBU失败，自动化软件会将其职责分配给同一集群中其他系统。当它恢复上线后，职责会自动返回到最初的RBU主机。

Facebook团队不会过分担心单个系统的数据保留问题，因为他们有措施2。

**措施2：Hadoop DFS**

在每个备份和二进制日志收集完成后，他们会马上将其复制到他们的大型定制化Hadoop集群中。这些集群是非常稳定的复制数据集，并有固定的保留时间。因为磁盘大小增长很快，较老的RBU可能不足以保存一到两天的备份。不过他们会按需要增长Hadoop集群，同时不需要担心底层硬件情况。Hadoop的分布式特性让他们有足够带宽，完成快速数据恢复。

不久，他们会把非实时数据分析放到这些Hadoop集群中。这可以降低数据库中非关键读的次数，让Facebook网站的响应速度更快。

**措施3：长期存储**

每周，他们会从Hadoop备份移动到另一个地区的分散存储中。这些系统是最新而且安全的存储系统，在他们的[日常数据管理工具](https://www.facebook.com/note.php?note_id=10150275248698920)流程之外。

**监控**

除常用的系统监控外，他们还会捕捉很多特定的统计数据，比如binlog集合延迟、系统容量等等。

为备份失败打分，是他们最有价值的工具。因为Facebook的数据库和同时运行的维护任务量级，错过某些备份也不奇怪。广泛的失败和多日没有成功的单个备份，这都是他们要注意的重点。因此，某个错过备份的得分会随着时间呈指数级增长，这些得分的不同聚合，让团队能对备份的整体健康度有一个有效而快速的了解。

比如，在一天内，某个数据错失一次备份，得1分，一天错失50次备份，就是50分。但在三天内的一次数据库错失，就是27分（3的3次幂），三天内50次，这是很严重的问题，得分就是1350（50乘以3的3次幂）。这会在他们的监控图上出现一个巨大的波峰，团队会马上对其采取行动。

**恢复**

在系统管理员中有句老话："如果你没有测试过你的备份，就等于没有备份。"

因此，Facebook团队构建了一个测试系统，会持续地从措施2开始，将数据恢复到测试服务器上。恢复完成后，他们会执行多次数据完整性检查。如果有任何反复出现的问题，系统就会报警，提醒相关人员关注、审核。该系统可以发现所有问题，包括MySQL的bug，到备份过程中的纰漏，并可以让他们更灵活地应对备份环境中的变化。

他们构建了一个名为ORC（ORC恢复协调器的递归缩写）的系统，工程师如何需要恢复他们所用工具的数据库的过去版本，就可以以自服务方式使用该系统恢复数据。对于快速开发来说还是挺方便的。

在结尾，Eric Barrett说道：

> 备份不是最迷人的工程工作。它们即是技术活，又是重复性的，如果一切正常，没人会注意。它们也是跨学科和团队的，需要懂得系统、网络和软件等多方面的专业知识。但是，确保你的记忆和联系安全无误，这是无比重要的事情，而且到最后，也是充满回报的事情。

有网友问到：

> 在不运行mysqld的RBU上，你们如何完成二进制日志的流传送？什么是模拟从进程？

Facebook的MySQL性能工程师[Harrison
Fisk](http://www.facebook.com/harrison.fisk)给出了答案：

> 我们使用mysqlbinlog的–never–选项，并有一个用python开发的小包装程序，会监控并保证mysqlbinlog运行成功。

#### 相关文章

-   [![Facebook技术总监：如何管理10亿用户的数据？](){width="150"
    height="150"}](http://blog.jobbole.com/32804/)[Facebook技术总监：如何管理10亿用户的数据？](http://blog.jobbole.com/32804/)
-   [![深入Facebook消息应用服务器]()](http://blog.jobbole.com/740/)[深入Facebook消息应用服务器](http://blog.jobbole.com/740/)
-   [![Facebook Folly源代码分析](){width="150"
    height="121"}](http://blog.jobbole.com/24093/)[Facebook
    Folly源代码分析](http://blog.jobbole.com/24093/)
-   [![ebay](){width="150"
    height="150"}](http://blog.jobbole.com/20330/)[知名网站的技术发展历程](http://blog.jobbole.com/20330/)
-   [![提高软件质量实践――Facebook篇]()](http://blog.jobbole.com/29907/)[提高软件质量实践――Facebook篇](http://blog.jobbole.com/29907/)
-   [![facebook-entrance-sign-4f7c750-intro-thumb-640xauto-32468](){width="150"
    height="150"}](http://blog.jobbole.com/16966/)[Facebook工程发布技术的幕后故事](http://blog.jobbole.com/16966/)
-   [![Facebook的5个假象]()](http://blog.jobbole.com/240/)[Facebook的5个假象](http://blog.jobbole.com/240/)
-   [![Google的社交网络为什么还没有成功]()](http://blog.jobbole.com/87/)[Google的社交网络为什么还没有成功](http://blog.jobbole.com/87/)
-   [![服务管理框架的尝试]()](http://blog.jobbole.com/1227/)[服务管理框架的尝试](http://blog.jobbole.com/1227/)
-   [![如何才能进入Google和斯坦福这样的名企和名校]()](http://blog.jobbole.com/768/)[如何才能进入Google和斯坦福这样的名企和名校](http://blog.jobbole.com/768/)

[Facebook如何实现PB级别数据库自动化备份](http://blog.jobbole.com/34500/)，首发于[博客
- 伯乐在线](http://blog.jobbole.com/)。


</div>




</div>

</div>
