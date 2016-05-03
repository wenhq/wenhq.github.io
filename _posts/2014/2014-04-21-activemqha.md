---
layout: post
title: ActiveMQ基于共享文件系统的HA方案
date: '2014-04-21T11:05:00.001+08:00'
author: Wenh Q
tags:
modified_time: '2014-04-21T11:05:47.894+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-3839166468941213081
blogger_orig_url: http://binaryware.blogspot.com/2014/04/activemqha.html
---
基于共享文件系统的原理还是比较简单的，因为activemq在启动的时候会锁住lock文件，当Master起来了之后，slaver自然就在那里等待了

[![](https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fstatic.oschina.net%2Fuploads%2Fspace%2F2014%2F0420%2F145302_HsmL_1048767.png&container=blogger&gadget=a&rewriteMime=image%2F*)](http://static.oschina.net/uploads/space/2014/0420/145302_HsmL_1048767.png)

来源：[ActiveMQ基于共享文件系统的HA方案](http://my.oschina.net/wenhaowu/blog/224295)  通过 [开源中国社区最新新闻](http://www.oschina.net/?from=rss)
