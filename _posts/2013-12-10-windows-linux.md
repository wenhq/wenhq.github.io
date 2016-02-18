--- 
layout: post 
title: "在 Windows 平台上打造出你的 Linux 开发环境"
date: '2013-12-10T12:42:00.002+08:00' 
author: Wenh Q
tags: linux
modified\_time: '2013-12-10T12:42:36.980+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-6393137154074022017
blogger\_orig\_url: http://binaryware.blogspot.com/2013/12/windows-linux.html
---
<div style="margin: 10px; padding: 5px;">

<div style="font-size: 18px;">

[在 Windows 平台上打造出你的 Linux
开发环境](http://www.oschina.net/news/46712/develop-on-windows-as-if-it-was-unix)

</div>

<div style="font-size: 13px;">

Via [开源中国社区最新新闻](http://www.oschina.net/?from=rss)

</div>

</div>

<div style="font-size: 13px; padding: 15px 0 10px 10px;">

在这篇文章里，我将向大家分享一些软件安装和环境设置方法，这是我最近的实践收获，并对使用效果非常满意。我不能永远待在Linux上开发，但我非
常喜欢Linux终端和Linux环境，在开发一些开源软件时，Linux会让我感觉所有的事情变得更容易，所有工具都很好的相互配合，不需要你手工的用
绷带把它们绑在一起。

下面这种Windows环境配置能让你轻松的完成日常工作中的大部分Linux简单任务。

我假定你的机器上什么都没安装，现在从头开始…

### Linux终端

Windows的cmd基本就是废物…但如果你愿意花时间去找，你能找到很多的可以替代它的软件，最近我就发现了[cmder](http://www.oschina.net/p/cmder)这个东西，它把conemu，msysgit
和 clink
打包在一起，让你无需配置就能使用一个真正干净的Linux终端！它甚至还附带了漂亮的ol'
monokai配色主题。

这是一个款可移植的软件，你可以把它放在系统的任何一个目录里。它里面有一个bin/目录，你可以把想要的任何执行命令、文件都放在这里目录里，从终端里可以执行它们。

有了cmder，你就有了git，有了一个不错的终端和大多数的linux命令((ls, mv,
cp, grep, cat等等。)

### Git

cmder里已经有它了！省了很多事，不是吗？

### Chocolatey软件包管理系统

因为我会大量的使用执行各种命令程序，我就发现[Chocolatey](http://www.oschina.net/p/chocolatey)真是很好用。

要安装它，你只需要执行

@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex
((new-object
net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" &&
SET PATH=%PATH%;%systemdrive%

chocolatey

bin

你需要安装xampp吗？ `cinst xampp.app`
就行了！你还可以选择把它安装到哪里，通常，它会被安装到D:

xampp目录下。

你需要ruby吗？`cinst ruby`

### Wget

这是一个必不能少的好东西，有很多常用的工具(例如composer)需要用它来进行快速的、简易的安装。

安装它，你只需要执行`cinst Wget`。

### Nano文本编辑器

我真的很喜欢这个能执行快速便捷文本的工具。执行`cinst nano`，就是你安装它需要所的所有操作！

你需要注意的重要一点是，`^W`键是关闭tab页，所以，你需要在cmder设置里取消这种快捷键关联。

### Vim

你使用Vim？执行`cinst vim`就行了，当然，所有vim使用者都知道如何安装和配置它…

### 集成XAMPP(Apache+PHP+MySQL+Perl)

毕竟是在Windows平台上，安装这个集成包要比单独安装apache + mysql简单。

XAMPP安装并不往Windows
PATH里添加任何路径信息，所以，如果你想在命令行里运行PHP命令，你需要执行`set PATH=%PATH%;D:
xampp
php`，这是假设你把XAMPP安装到了`D:
xampp`目录里！

这样之后，如果执行`php --version`你就不会看到错误信息，如果有错误，请检查你的
XAMPP 目录。

另外，如果你打算执行PHP里的`pear`命令，你会遇到像下面这样的错误：

    ERROR: failed to mkdir C:
php
pear
data
Auth
Auth
Frontend    ERROR: failed to mkdir C:
php
pear
docs
Benchmark
doc    ERROR: failed to mkdir C:
php
pear
data
Cache
Container    ERROR: failed to mkdir C:
php
pear
docs
Cache_Lite
docs    ERROR: failed to mkdir C:
php
pear
docs
Calendar
docs
examples    ERROR: failed to mkdir C:
php
pear
docs
Config
docs

这是因为XAMPP并没有去主动配置perl，所以，如果你是把XAMPP安装在`D:
xampp`目录下，你需要做这样：

D:，转到这个分区，然后

    cd D:
xampp
php  pear config-set doc_dir d:
xampp
php
pear
docs   pear config-set cfg_dir d:
xampp
php
pear
cfg   pear config-set data_dir d:
xampp
php
pear
data   pear config-set cache_dir d:
xampp
php
pear
cache   pear config-set download_dir d:
xampp
php
pear
download   pear config-set temp_dir d:
xampp
php
pear
temp   pear config-set test_dir d:
xampp
php
pear
tests   pear config-set www_dir d:
xampp
php
pear
www

这就行了。

### 结论

总的来说，我非常喜欢这样改造后的环境，我们会继续的改进它，当然，欢迎提出你的建议


[英文原文：[Develop on Windows as if it was
Unix](http://gosukiwi-blog.tumblr.com/post/68542618062/develop-on-windows-as-if-it-was-unix)

]

</div>
