--- 
layout: post 
title: "使用 Byzanz 录制 Gif 动画或 Ogv 视频" 
date: '2013-01-26T12:19:00.001+08:00' 
author: Wenh Q
tags: linux
modified\_time: '2013-09-30T14:23:48.783+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-8635698685332347617
blogger\_orig\_url: http://binaryware.blogspot.com/2013/01/byzanz-gif-ogv.html
--- 
[使用
Byzanz 录制 Gif 动画或 Ogv
视频](http://linuxtoy.org/archives/byzanz.html):

想要录制 Linux 桌面？Byzanz 是一个不错的选择。Byzanz
简单小巧，容易使用，既能录制 Gif 动画，又可录制 Ogv 视频。



![byzanz](http://lt-file.b0.upaiyun.com/files/2012/12/byzanz-demo.gif)



**安装 Byzanz**



可执行下列指令来安装 Byzanz，注意需要 root 权限：




    aptitude install byzanz # Debian/Ubuntu
    yum install byzanz # Fedora
    emerge -av byzanz # Gentoo/Funtoo



Arch Linux 用户可在 AUR 中找到 Byzanz。如果你不能在自己所用的 Linux
发行版包仓库中找到
Byzanz，那么可以获取其[源代码](http://git.gnome.org/browse/byzanz/)，自行编译。



**Byzanz 用法**



以本文的 byzanz-demo.gif 为例，你可以通过如下命令来完成录制过程：




    byzanz-record -d 40 -x 0 -y 0 -w 400 -h 320 byzanz-demo.gif



其中：




-   `-d 40` 为录制的时长为 40 秒
-   `-x 0` 录制区域的横坐标
-   `-y 0` 录制区域的纵坐标，记住：屏幕右上角为原点（0,0）
-   `-w 400` 录制区域的宽度
-   `-h 320` 录制区域的高度
-   `byzanz-demo.gif` 保存的文件名



BTW: Byzanz 还带有一个 GNOME panel applet，感兴趣的同学可自行尝试。

分类:
[Apps](http://linuxtoy.org/category/apps "View all posts in Apps"),
[Tools](http://linuxtoy.org/category/apps/tools "View all posts in Tools")
|

[永久链接](http://linuxtoy.org/archives/byzanz.html) |

[收藏到
del.icio.us](http://delicious.com/save?url=http://linuxtoy.org/archives/byzanz.html&title=%E4%BD%BF%E7%94%A8%20Byzanz%20%E5%BD%95%E5%88%B6%20Gif%20%E5%8A%A8%E7%94%BB%E6%88%96%20Ogv%20%E8%A7%86%E9%A2%91)
|

[Email
给好友](mailto:?Subject=Check+This+Out&body=I+think+you'll+like+this:+http://linuxtoy.org/archives/byzanz.html)
|

[17 评论](http://linuxtoy.org/archives/byzanz.html#comments) |

[捐助本站](http://linuxtoy.org/faq/donate)
