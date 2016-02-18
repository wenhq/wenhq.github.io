--- 
layout: post 
title: "配置linux(apache) + mono 下运行 asp.net" 
date:'2014-01-16T15:45:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2014-01-16T15:45:12.619+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-4269311475308142938
blogger\_orig\_url: http://binaryware.blogspot.com/2014/01/linuxapache-mono-aspnet.html
---
<div dir="ltr">

<div class="gmail_quote">

<div style="margin: 0px 10px; overflow: auto; width: 100%;">

[配置linux(apache) + mono 下运行
asp.net](http://www.cnblogs.com/hcl0208/archive/2010/10/25/1860173.html) 
 于 10-10-24 通过 [博客园-首页原创精华区](http://www.cnblogs.com/)
作者：sun.Lei
<div style="font-family: sans-serif;">




</div>





前言: 最近公司在HK接了个单,对方想用自已服务器,但不想买windows
server,想用linux 与 mysql做为平台,因为在HK必需用正版系统，microsoft
server产品贵的有些吓人.但公司php这块完全不行，但又不想放弃这单生意,所以就想在linux平台上来运行asp.net.于是就有了这篇文章,
我是刚刚才接触linux
server,是一个名副其实的linux菜鸟,如果下面有说错或者不合理的地方，请大家指出.



**这篇文章适合像我这种需求，对linux又不太熟悉的朋友阅读.**



测试环境: VMware + Ubuntu Server 10.0.4 32bit + MONO 2.4.4 +MySql 5.1



首先安装Ubuntu,大家可以去Ubuntu官方网站下载,具体安装过程不多说了，非常简单.



安装过程中会提示你选择需要安装的服务或软件，这里我没有选，后面在系统中手动安装.



**注意:我们主题是通过mono运行[asp.net](http://asp.net/),测试中我们以root帐户,所以完全忽略安全问题，关于linux安全配置大家可以去找相关资料.**
<div style="font-family: sans-serif;">




</div>

<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/install2.jpg){width="640"
height="436"}

</div>

<div style="font-family: sans-serif;">




</div>

安装完成后，系统会提示登陆,我们以安装过程中设定的帐户登陆.



登陆成功后，我们来设定root帐户密码,root拥有最高权限,因为我们测试，所以下面所有操作都以root帐户



输入命令:

> sudo passwd root

修改完成后，我们以root登陆

> su root 

ok，下面我们来安装一些基本的软件或服务





配置网络，因为我当前是VM安装的，VM网络选项设置为NAT,安装过程中Ubuntu已经分配到ip地址了，并已经可以连接上网.





你可以使用

> ifconfig 

来查看网络配置信息.





如果是你独立安装，或者采用其它网络模式，那么你可能需要手动设置ip,这里简单说明一下，具体的大家可以去google.



修改网络配置文件

> sudo vi /etc/network/interfaces



增加或修改auto eth0部分内容:

> auto eth0

> iface eth0 inet static

> address 192.168.3.90 
#固定ip

> gateway 192.168.3.1 
#默认网关

> netmask 255.255.255.0 
#子网掩码

将上面内容替换成你自已的



修改dns

> sudo vi /etc/resolv.conf

修改其中 nameserver 的值



网络设置修改完成后，请使用

> sudo /etc/init.d/networking restart



来使网络设置立即生效



好了，这些部分我们不多说了，不明白的大家可以去google.



下面我们来安装open
ssh,它非常重要，能够让我们远程管理我们服务器,安装非常简单:

> sudo apt-get install openssh-server

<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/installopenssh.jpg){width="640"
height="253"}

</div>

<div style="font-family: sans-serif;">




</div>

安装成功，现在我们可以通过open ssh客户端来连接了.



我这里用的是 PuTTy.



连接成功后，可以远程控制ubuntu server,并执行shell



<span
style="font-family: sans-serif;">![](http://images.cnblogs.com/cnblogs_com/hcl0208/putty.jpg)</span>





<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/putty1.jpg){width="640"
height="404"}


</div>

<div style="font-family: sans-serif;">




</div>

说到这里我给大家提供两个工具，后面有下载,一个就是上面说的到PuTTy,用来管理linux和执行shell一个就是winscp,它可以管理linux上的文件.



使用winscp可以管理服务器文件

</div>

<div style="margin: 0px 10px; overflow: auto; width: 100%;">



<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/winscp1.jpg) 

</div>

<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/winscp.jpg){width="640"
height="375"} 

</div>





我们接着安装apache

> sudo apt-get install apache2

安装完成后，我们立即就可以在浏览器中测试,输入服务器ip:

</div>

<div style="margin: 0px 10px; overflow: auto; width: 100%;">



<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/web.jpg){width="640"
height="301"} 

</div>

<div style="font-family: sans-serif;">

</div>

<div style="font-family: sans-serif;">




</div>

安装mono

> sudo apt-get install mono-gmcs mono-xsp2 libapache2-mod-mono
> mono-apache-server2

> sudo a2enmod mod\_mono

这里遇到一个问题，在安装libapache2-mod-mono后会出现很久无法返回状况，每次都是重启来解决，重启后

执行下一个命令时系统会提示

> E:dpkg was interrupted ,you must manually run 'sudo dpkg --configure
> -a' to correct the problem

造成这种提示原因就是刚才的安装被中断了,但是执行libapache2-mod-mono等好久都无法返回，所以只有重启.不过没关系，按他说的执行

> sudo dpkg --configure -a

不知道是软件bug还是操作错误，有知道的朋友可以提示一下.



Ok，到了这里，差不多了,于是上传了一个help.aspx文件到
/var/www/下面.运行时发现

.net代码根本没执行,服务端控件基本无效，如下图

</div>

<div style="margin: 0px 10px; overflow: auto; width: 100%;">



 
<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/error.jpg) 

</div>

<div style="font-family: sans-serif;">




</div>

最后找到原因，mono[没有正确配置.net](http://xn--8ovu0hh1al03a9pij21a.net/)引擎目录，当然不会执行.于是找到
/etc/apache2/mods-available/mod\_mono.conf 文件.



使用命令编辑

> sudo vim /etc/apache2/mods-available/mod\_mono.conf

修改为如图:
<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/mono2.jpg) 

</div>



编辑完成后，重启apache

> sudo /etc/init.d/apache2 restart 

我们再刷新刚才页面,正常了，简单服务端控件,事件回发都没有问题.

</div>

<div style="margin: 0px 10px; overflow: auto; width: 100%;">



<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/testok.jpg) 

</div>



我们可以用下面命令来查看mono版本信息

> mono -V

</div>

<div style="margin: 0px 10px; overflow: auto; width: 100%;">



<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/monover.jpg)


</div>

<div style="font-family: sans-serif;">




</div>



Ok,现在我们的apache+mono已经可以执行[asp.net](http://asp.net/)文件了.后面我们将进行稍复杂的测试.



下面我们来安装配置 mysql,这部分简单说明一下，网上有很多教程

> sudo apt-get install mysql-server

安装过程中会提示你输入root帐户密码.



安装完成后，登陆mysql,我们以root登陆.

> mysql -u root -p 

创建一个测试用户AAA,密码123456,该只对数据库Test有全部权限

> grant all privileges on Test.
* to AAA@localhost identified by
> "123456"

至于mysql的管理命令，大家去网上搜吧,这里不多说了.



现在我们用客户端(windows)来连接mysql,我用的是Navicat
Lite(免费版),基本操作感觉够用了.

</div>

<div style="margin: 0px 10px; overflow: auto; width: 100%;">



<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/tables.jpg)


</div>

<div style="font-family: sans-serif;">




</div>

<div style="font-family: sans-serif;">




</div>

如需要允许外部连接，则需要修改mysql下的配置文件/etc/mysql/my.cnf,将bind-networking去掉



如果还是无法连接请采用下面方法:(摘录)



1。
改表法。可能是你的帐号不允许从远程登陆，只能在localhost。这个时候只要在localhost的那台电脑，登入mysql后，更改
"mysql" 数据库里的 "user" 表里的 "host" 项，从"localhost"改称"%"

> mysql -u root -p

> mysql&gt;use mysql;

> mysql&gt;update user set host = '%' where user = 'root';

> mysql&gt;select host, user from user; 

2.
授权法。例如，你想myuser使用mypassword从任何主机连接到mysql服务器的话。

> GRANT ALL PRIVILEGES ON 
*.
* TO 'myuser'@'%' IDENTIFIED BY
> 'mypassword' WITH GRANT OPTION; 

如果你想允许用户myuser从ip为192.168.1.3的主机连接到mysql服务器，并使用mypassword作为密码

> GRANT ALL PRIVILEGES ON 
*.
* TO 'root'@'192.168.1.3' IDENTIFIED BY
> 'mypassword' WITH GRANT OPTION;

> GRANT ALL PRIVILEGES ON 
*.
* TO 'root'@'10.10.40.54' IDENTIFIED BY
> '123456' WITH GRANT OPTION;

OK,差不多就结束了，弄了一个简单web项目，里面包含了普通了c
#逻辑代码,外部dll,httphandler,cookies,session,upload,调用webservice并用vs2008正常编译，然后上传到apache目录下.经测试完全正常，大家需要注意了,linux下是区分大小写的，所以大家在输入url时，大小写一定要批配.至于让apache忽略大小写，大家自已去搜吧.

</div>

<div style="margin: 0px 10px; overflow: auto; width: 100%;">



 
<div style="font-family: sans-serif;">

 ![](http://images.cnblogs.com/cnblogs_com/hcl0208/testtest.jpg)

</div>



ubuntu server 10.0.4 默认是shell界面,没有图形界面.


</div>

<div style="margin: 0px 10px; overflow: auto; width: 100%;">

如果需要图形界面可以另外安装,重新启动即可进入图形界面

> sudo apt-get install xinit

> sudo apt-get install gdm

> sudo apt-get install Ubuntu-desktop

> sudo apt-get install language-support-zh 
#中文语言包

<div style="font-family: sans-serif;">

![](http://images.cnblogs.com/cnblogs_com/hcl0208/gui.jpg){width="640"
height="486"}


</div>

<div style="font-family: sans-serif;">




</div>



好了，希望对需要的朋友有帮助.欢迎大家批评指正. [PuTTy+winscp
下载](http://files.cnblogs.com/hcl0208/Tools_linux.rar)



转载请注名出处!

![](https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fwww.cnblogs.com%2Fhcl0208%2Faggbug%2F1860173.html%3Ftype%3D1&container=blogger&gadget=a&rewriteMime=image%2F*)



作者: [sun.Lei](http://www.cnblogs.com/hcl0208/) 发表于 2010-10-25 12:56
[原文链接](http://www.cnblogs.com/hcl0208/archive/2010/10/25/1860173.html)

</div>

</div>

</div>
