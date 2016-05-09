---
layout: post
title: linux 打造man中文帮助手册图解(man-pages-zh帮助页)
date: '2014-01-04T12:35:00.003+08:00'
author: Wenh Q
tags:
modified_time: '2014-01-04T12:35:52.067+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-8980702230127942038
blogger_orig_url: http://binaryware.blogspot.com/2014/01/linux-manman-pages-zh.html
---
[linux
打造man中文帮助手册图解(man-pages-zh帮助页)](http://www.cnblogs.com/chengmo/archive/2010/10/27/1862553.html)于
10-10-26 通过 [博客园-首页原创精华区](http://www.cnblogs.com/)
作者：程默

刚学习linux有一份中文帮助手册该是多好事情。linux自带的帮助尽管有多种语言，目前各种发行版的linux基本没有中文帮助手册。打造个适合自己中文手册还是很有意义的。配置过程其实比较简单，只需要知道中文包，然后放到man可以搜索到的目录中，基本就可以了。
下面将分一下几步：
下载开源的man-pages 中文手册包
配置解压手册包
测试安装中文包一、在个人工作目录安装中文帮助手册

这样优点是每个用户，登陆进去都可以有自己的语言版帮助手册。大家直接手册不会被相互调用，独立而且灵活

1、下载开源man中文手册包(man-pages手册页)
现在准备下载开源帮助手册包：
1.打开[http://code.google.com/p/manpages-zh/](http://code.google.com/p/manpages-zh/)
点击下方的：[manpages-zh-1.5.tar.gz](http://manpages-zh.googlecode.com/files/manpages-zh-1.5.tar.gz)

[![](https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fimages.cnblogs.com%2Fcnblogs_com%2Fchengmo%2FWindowsLiveWriter%2Flinuxmanmanpageszh_AA92%2Fimage_thumb_1.png&container=blogger&gadget=a&rewriteMime=image%2F*)](http://images.cnblogs.com/cnblogs_com/chengmo/WindowsLiveWriter/linuxmanmanpageszh_AA92/image_4.png)2、通过linux
wget下载开发包
[chengmo@centos5 ~]$ wget
[http://manpages-zh.googlecode.com/files/manpages-zh-1.5.tar.gz](http://manpages-zh.googlecode.com/files/manpages-zh-1.5.tar.gz)输入即可
[![](https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fimages.cnblogs.com%2Fcnblogs_com%2Fchengmo%2FWindowsLiveWriter%2Flinuxmanmanpageszh_AA92%2Fimage_thumb_2.png&container=blogger&gadget=a&rewriteMime=image%2F*)](http://images.cnblogs.com/cnblogs_com/chengmo/WindowsLiveWriter/linuxmanmanpageszh_AA92/image_6.png)



2、解压man中文手册包
只要在自己工作目录下面建立man/zh_CN
目录，将压缩包解压，按照规格目录中。man命令就可以搜索到。
特别说明下,下面的安装保证你的语言环境设置为中文：
[chengmo@centos5 ~]$ echo $LANG
zh_CN.GB2312
如果不是：通过 export LANG=zh_CN.GB2312
如果你发现上面执行不通过，你可以运行：locale -a
查一下你系统支持的字符集
[chengmo@centos5 ~]$ cd ~ #进入当前目录 [chengmo@centos5 ~]$ mkdir
-p man/zh_CN #建立目录man 以及子目录zh_CN [chengmo@centos5 ~]$ tree
man man `-- zh_CN
#目录以及子目录已经可以了，现在只需要将压缩包解压到zh_CN 中文目录即可
[chengmo@centos5 ~]$ tar -xzvf manpages-zh-1.5.tar.gz
manpages-zh-1.5/src/mann/expr.n manpages-zh-1.5/src/mann/fblocked.n
manpages-zh-1.5/src/mann/fconfigure.n manpages-zh-1.5/src/mann/fcopy.n
manpages-zh-1.5/src/mann/file.n manpages-zh-1.5/src/mann/fileevent.n
manpages-zh-1.5/src/mann/filename.n manpages-zh-1.5/src/mann/flush.n
manpages-zh-1.5/src/mann/focusNext.n manpages-zh-1.5/src/mann/for.n
manpages-zh-1.5/src/mann/foreach.n #......解压数据包 [chengmo@centos5
~]$ cd manpages-zh-1.5 [chengmo@centos5 manpages-zh-1.5]$ ls COPYING
debian DOCS Makefile man-pages-zh_CN.spec raw README
[README.GB](http://readme.gb/) src utils #该目录结构
支持make安装的,可以通过make命令生成编译文件，也可以直接复制里面src目录安装
[chengmo@centos5 manpages-zh-1.5]$ make mkdir UTF-8 cp -r src/man*
UTF-8/
#已经生成了：UTF-8目录下面文件，只需要将该目录复制到~/man/zh_CN下面即可
[chengmo@centos5 manpages-zh-1.5]$ cp -r UTF-8/* ~/man/zh_CN/
 通过上面几步已经将帮助手册安装到自己的工作目录下面的man/zh_CN下面了。

3、测试man中文帮助手册是否安装成功

下面检查下，看man中文手册是否加入到man路径里面了。
[chengmo@centos5 manpages-zh-1.5]$ man -w
/usr/kerberos/man:/usr/local/share/man:/usr/share/man/zh_CN:/usr/share/man:/home/chengmo/man/zh_CN:/home/chengmo/man:/usr/local/man
#发现已经在MANPATH路径加入了：/home/chengmo/man
以及：/home/chengmo/man/zh_CN [chengmo@centos5 ~]$ man -aw passwd
/usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz
/home/chengmo/man/zh_CN/man5/passwd.5 #发现已经找到中文手册了
[chengmo@centos5 ~]$ man 5 -aw passwd /usr/share/man/man5/passwd.5.gz
/home/chengmo/man/zh_CN/man5/passwd.5
#读取领域5限定类型，这样系统原先的英文也保留了，看中英文也很方便
[chengmo@centos5 ~]$ man 5 -a passwd
#显示英文的，按q就会出来中文文档了

[![](https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fimages.cnblogs.com%2Fcnblogs_com%2Fchengmo%2FWindowsLiveWriter%2Flinuxmanmanpageszh_AA92%2Fimage_thumb_3.png&container=blogger&gadget=a&rewriteMime=image%2F*)](http://images.cnblogs.com/cnblogs_com/chengmo/WindowsLiveWriter/linuxmanmanpageszh_AA92/image_8.png)


二、所有用户公用中文帮助手册
这里原理跟个人用户基本一样，只是手册放到大家公用目录，而不是个人目录即可。
[chengmo@centos5 ~]$ tree /usr/share/man/zh_CN /usr/share/man/zh_CN
|-- man1 | `-- newgrp.1.gz `-- man8 |-- adduser.8.gz |-- chpasswd.8.gz
|-- groupadd.8.gz |-- groupdel.8.gz |-- groupmod.8.gz |-- useradd.8.gz
|-- userdel.8.gz `-- usermod.8.gz

系统默认公共手册页地址一般在：/usr/share/man下面，放到下面的zh_CN目录即可。
[chengmo@centos5 manpages-zh-1.5]$ make mkdir UTF-8 cp -r src/man*
UTF-8/
#已经生成了：UTF-8目录下面文件，只需要将该目录复制到~/man/zh_CN下面即可
[chengmo@centos5 manpages-zh-1.5]$ cp -r UTF-8/*
/usr/share/man/zh_CN/
 其它的man.config配置不需要修改。 检查一下：
[chengmo@centos5 ~]$ man 5 -aw passwd
 /usr/share/man/man5/passwd.5.gz
 /user/share/man/zh_CN/man5/passwd.5
 说明手册已经安装好了。
这里2种方法安装介绍了一下，感觉中文手册很不错，可以试试，我个人比较喜欢还是安装到再的工作目录比较好，因为现在linux版本很多，而且命令有很多看似一样，但是实际还有些差别，这种中文手册更新没有相应软件更新快。当使用时候发现命令不一致时候，还是得考究考究原版英文。
保持中英文手册都存在，也是个不错法子。

作者：[chengmo](http://www.cnblogs.com/chengmo) QQ:8292669
出处：[http://www.cnblogs.com/chengmo](http://www.cnblogs.com/chengmo)本文版权归作者和博客园共有，欢迎转载，请务必添加原文链接。
![](https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fwww.cnblogs.com%2Fchengmo%2Faggbug%2F1862553.html%3Ftype%3D1&container=blogger&gadget=a&rewriteMime=image%2F*)
作者: [程默](http://www.cnblogs.com/chengmo/) 发表于 2010-10-27 13:49
[原文链接](http://www.cnblogs.com/chengmo/archive/2010/10/27/1862553.html)评论:
0　[查看评论](http://www.cnblogs.com/chengmo/archive/2010/10/27/1862553.html#pagedcomment)　[发表评论](http://www.cnblogs.com/chengmo/archive/2010/10/27/1862553.html#commentform)最新新闻：
·
[微软浏览器选择界面并没有对IE造成伤害](http://news.cnblogs.com/n/78832/)(2010-10-27
21:08)
· [谷歌今终止华东7家代理商合同
谈判仍在进行中](http://news.cnblogs.com/n/78831/)(2010-10-27 20:49)
 · [Gmail
实验室增加新功能，帮助用户节约时间](http://news.cnblogs.com/n/78830/)(2010-10-27
20:49)
·
[iDOS模拟器进入苹果App商店，随后被驱逐](http://news.cnblogs.com/n/78829/)(2010-10-27
20:45)
 ·
[海纳百川——人人网海量存储系统Nuclear开发手记](http://news.cnblogs.com/n/78827/)(2010-10-27
20:38)
编辑推荐：[PDC将于北京时间10月29-30日举行
微软将在博客园同步中文直播](http://news.cnblogs.com/n/78727/)
