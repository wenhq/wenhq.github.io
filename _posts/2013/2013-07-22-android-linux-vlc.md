---
layout: post
title: "如何用 Android 手机远程控制 Linux 桌面 VLC 播放器"
date: '2013-07-22T13:21:00.003+08:00'
author: Wenh Q
tags:
modified_time: '2013-07-22T13:21:29.572+08:00'
thumbnail: https://lh4.googleusercontent.com/p5FJns7vv2ObeMMuV6thwMeZ8RX_YeNFX4N98VUiQuYNe8C_19LgJR7rxzw52SgA7sanQcpONgnqbZNP5becxZmYBxCoxInmgeA40Au_PNhvICNSqBA=s72-c
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-2787814470354551070
blogger_orig_url: http://binaryware.blogspot.com/2013/07/android-linux-vlc.html
---

[
如何用 Android 手机远程控制 Linux 桌面 VLC
播放器](http://linuxtoy.org/archives/howto-remote-control-linux-desktop-vlc-player-from-android-mobile.html)

于 12-6-7 通过 [LinuxTOY](http://linuxtoy.org/) 作者：黑日白月

无需额外添置多媒体遥控器，只需要一台 Android 手机即可远程控制 Linux
桌面上的 VLC 播放器。

准备条件

1.  Android 手机和桌面 Linux
    位于同一无线网络，是否可以访问互联网不重要。
2.  Android 手机上安装免费开源的 [Remote for
    VLC](https://play.google.com/store/apps/details?id=org.peterbaldwin.client.android.vlcremote)（[Code
    首页](http://code.google.com/p/android-vlc-remote/)）
3.  已经在 Linux 桌面环境下安装好 VLC 2.0 播放器。

下文将以 Fedora 17 为例介绍这一过程。

启用 VLC http 远程控制支持

启动
VLC，在主界面上依次点击“工具”-“首选项”-左下角选择“全部”-左侧列表中选择“主界面”-在右侧勾选“Web”。如下图所示：

![](https://lh4.googleusercontent.com/p5FJns7vv2ObeMMuV6thwMeZ8RX_YeNFX4N98VUiQuYNe8C_19LgJR7rxzw52SgA7sanQcpONgnqbZNP5becxZmYBxCoxInmgeA40Au_PNhvICNSqBA)

保存并关闭 VLC。

之后需要编辑 VLC 的 Lua
主机配置文件，允许可以访问的网络段。比如可以用以下命令以 root
用户身份打开配置文件：

su -c 'vim /usr/share/vlc/lua/http/.hosts'

一般正常的人会仅希望局域网内的 Android 手机可以访问并控制桌面上的
VLC，于是取消 # private addresses 下面几行开头的注释即可。

保存更改并退出编辑器。

设置防火墙策略

找到系统设置中的防火墙，或者通过在终端输入 system-config-firewall
的方式启动。

VLC 的远程控制默认通过 8080
端口实现，所以在左侧选择“其他端口”，然后通过右侧依次添加 TCP/UDP 8080
端口。

（可选）Android 手机支持通过 Avahi
的方式自动寻找查找网络中的可用主机，如果需要这个功能的话在左侧选择“可信的服务”，然后在右侧勾选“多点广播
DNS (mDNS)”。如果不用启用该项的话就需要在 Remote for VLC 手动输入 IP
地址和端口。

完成之后点击工具栏上的“应用”保存防火墙配置。

开始使用

再次启动 VLC 播放器，在主界面上选择“视图”-“添加界面”-选择“Web”。

在 Android 手机上启动 Remote for
VLC，稍等一下应该就会显示在网络中找到的所有 VLC 实例，轻触即可链接。

此时你就可以远离键盘和鼠标，坐在沙发上享受 VLC 带来的影音体验了：

1.  支持音量、音轨、字幕轨、全屏模式的调整，显示媒体信息。
2.  支持创建播放列表。
3.  支持浏览桌面 Linux
    上的文件系统（知道为何不建议通过互联网访问了吧……）
4.  试验性的支持 DVD 菜单。
5.  可以在有来电时自动暂停媒体播放。

如果您使用的其他智能手机的话，也可以考虑使用 Hobbyist Software 出品的
[VLC Remote](http://hobbyistsoftware.com/VLC-more)，它在 VLC
及防火墙方面的配置完全一样，不过手机端就是收费且非开源产品了。

[Remote for VLC Code 首页](http://code.google.com/p/android-vlc-remote/)

[](http://code.google.com/p/android-vlc-remote/)

分类: [Embedded](http://linuxtoy.org/category/embedded), [Movie
Player](http://linuxtoy.org/category/apps/movie-player), [Music
Player](http://linuxtoy.org/category/apps/music-player),
[Tutorials](http://linuxtoy.org/category/tutorials) |
[永久链接](http://linuxtoy.org/archives/howto-remote-control-linux-desktop-vlc-player-from-android-mobile.html) |
[收藏到
del.icio.us](http://delicious.com/save?url=http://linuxtoy.org/archives/howto-remote-control-linux-desktop-vlc-player-from-android-mobile.html&title=%E5%A6%82%E4%BD%95%E7%94%A8+Android+%E6%89%8B%E6%9C%BA%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6+Linux+%E6%A1%8C%E9%9D%A2+VLC+%E6%92%AD%E6%94%BE%E5%99%A8) |
[Email
给好友](https://www.blogger.com/blogger.g?blogID=4961947611491238191) |
[9
评论](http://linuxtoy.org/archives/howto-remote-control-linux-desktop-vlc-player-from-android-mobile.html#comments) |
[捐助本站](http://linuxtoy.org/faq/donate)
