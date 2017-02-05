---
layout: post
title: 'cannot restore segment prot after reloc: Permission denied'
date: '2012-07-05T20:31:00.002+08:00'
author: Wenh Q
tags:
modified_time: '2013-09-30T14:17:35.688+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-617069962970308870
blogger_orig_url: http://binaryware.blogspot.com/2012/07/cannot-restore-segment-prot-after-reloc.html
---

Log
---

2012-07-05 Create


Content
-------

CentOS下执行java -version竟然报错：

[root@localhost etc]# java -version

> Error: dl failure on line 864
> Error: failed /opt/jdk1.7.0_04/jre/lib/i386/client/libjvm.so, because
> /opt/jdk1.7.0_04/jre/lib/i386/client/libjvm.so: cannot restore
> segment prot after reloc: Permission denied

一开始以为是32bit/64bit版本不对，后来查了一下，原来是SELinux的问题。执行执行：/usr/sbin/setenforce
0 就好了。



解决办法有很多

1.  使用chcon 命令 示例: chcon -t texrel_shlib_t
    /usr/local/rsi/idl_6.1/bin/bin.linux.x86/*.so
2.  禁止掉SELinux 更改/etc/sysconfig/selinux 文件的内容为
    SELINUX=disabled

Ref
---

1.  《[Linux下执行程序时发生错误: cannot restore segment prot after
    reloc: Permission
    denied](http://www.wangchao.net.cn/bbsdetail_243209.html)》
2.  《[动态链接库加载出错:cannot restore segment prot after reloc:
    Permission
    denied](http://www.cnblogs.com/huangpeng/archive/2009/02/18/1393348.html)》
