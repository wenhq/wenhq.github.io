--- 
layout: post 
title: PostgreSQL 的临时表、全局临时表和 Unlogged 表

date: '2013-12-11T13:25:00.001+08:00' 
author: Wenh Q
tags: - tech
modified\_time: '2013-12-11T13:25:09.748+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-19497900373079041
blogger\_orig\_url: http://binaryware.blogspot.com/2013/12/postgresql-unlogged.html
---
<div style="margin: 10px; padding: 5px;">

<div style="font-size: 18px;">

[PostgreSQL 的临时表、全局临时表和 Unlogged
表](http://www.oschina.net/translate/global-temporary-and-unlogged-tables)

</div>

<div style="font-size: 13px;">

Via [开源中国社区最新新闻](http://www.oschina.net/?from=rss)

</div>

</div>

<div style="font-size: 13px; padding: 15px 0 10px 10px;">

从一个技术立场来说，在PostgreSQL中的临时表有三个不同特性，区别于普通表:



1. 临时表存储在特殊的模式（ schema）中, 以便它们只对后台创建（creating
backend）可见

2. 临时表有本地缓冲区管理器管理，而非由共享缓冲区管理器管理

3. 临时表没有预写式日志

</div>
