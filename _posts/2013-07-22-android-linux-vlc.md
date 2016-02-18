--- 
layout: post 
title: "如何用 Android 手机远程控制 Linux 桌面 VLC
播放器" 
date: '2013-07-22T13:21:00.003+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-07-22T13:21:29.572+08:00' 
thumbnail: https://lh4.googleusercontent.com/p5FJns7vv2ObeMMuV6thwMeZ8RX\_YeNFX4N98VUiQuYNe8C\_19LgJR7rxzw52SgA7sanQcpONgnqbZNP5becxZmYBxCoxInmgeA40Au\_PNhvICNSqBA=s72-c
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-2787814470354551070
blogger\_orig\_url: http://binaryware.blogspot.com/2013/07/android-linux-vlc.html
---

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[

如何用 Android 手机远程控制 Linux 桌面 VLC
播放器](http://linuxtoy.org/archives/howto-remote-control-linux-desktop-vlc-player-from-android-mobile.html)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">于 12-6-7 通过
</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[LinuxTOY](http://linuxtoy.org/)</span><span
style="font-family: &quot;Verdana&quot;;"> 作者：黑日白月</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">无需额外添置多媒体遥控器，只需要一台
Android 手机即可远程控制 Linux 桌面上的 VLC 播放器。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;; font-weight: bold;">准备条件</span>

</div>

1.  <span style="font-family: &quot;Verdana&quot;;">Android 手机和桌面
    Linux 位于同一无线网络，是否可以访问互联网不重要。</span>
2.  <span style="font-family: &quot;Verdana&quot;;">Android
    手机上安装免费开源的 </span><span
    style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Remote
    for
    VLC](https://play.google.com/store/apps/details?id=org.peterbaldwin.client.android.vlcremote)</span><span
    style="font-family: &quot;Verdana&quot;;">（</span><span
    style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Code
    首页](http://code.google.com/p/android-vlc-remote/)</span><span
    style="font-family: &quot;Verdana&quot;;">）</span>
3.  <span style="font-family: &quot;Verdana&quot;;">已经在 Linux
    桌面环境下安装好 VLC 2.0 播放器。</span>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">下文将以 Fedora 17
为例介绍这一过程。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;; font-weight: bold;">启用
VLC http 远程控制支持</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">启动
VLC，在主界面上依次点击“工具”-“首选项”-左下角选择“全部”-左侧列表中选择“主界面”-在右侧勾选“Web”。如下图所示：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

![](https://lh4.googleusercontent.com/p5FJns7vv2ObeMMuV6thwMeZ8RX_YeNFX4N98VUiQuYNe8C_19LgJR7rxzw52SgA7sanQcpONgnqbZNP5becxZmYBxCoxInmgeA40Au_PNhvICNSqBA){width="782"
height="535"}

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">保存并关闭 VLC。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">之后需要编辑 VLC 的 Lua
主机配置文件，允许可以访问的网络段。比如可以用以下命令以 root
用户身份打开配置文件：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">su -c 'vim
/usr/share/vlc/lua/http/.hosts'</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">一般正常的人会仅希望局域网内的
Android 手机可以访问并控制桌面上的 VLC，于是取消 
# private addresses
下面几行开头的注释即可。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">保存更改并退出编辑器。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;; font-weight: bold;">设置防火墙策略</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">找到系统设置中的防火墙，或者通过在终端输入
system-config-firewall 的方式启动。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">VLC 的远程控制默认通过
8080 端口实现，所以在左侧选择“其他端口”，然后通过右侧依次添加 TCP/UDP
8080 端口。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">（可选）Android
手机支持通过 Avahi
的方式自动寻找查找网络中的可用主机，如果需要这个功能的话在左侧选择“可信的服务”，然后在右侧勾选“多点广播
DNS (mDNS)”。如果不用启用该项的话就需要在 Remote for VLC 手动输入 IP
地址和端口。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">完成之后点击工具栏上的“应用”保存防火墙配置。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;; font-weight: bold;">开始使用</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">再次启动 VLC
播放器，在主界面上选择“视图”-“添加界面”-选择“Web”。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">在 Android 手机上启动
Remote for VLC，稍等一下应该就会显示在网络中找到的所有 VLC
实例，轻触即可链接。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">此时你就可以远离键盘和鼠标，坐在沙发上享受
VLC 带来的影音体验了：</span>

</div>

1.  <span
    style="font-family: &quot;Verdana&quot;;">支持音量、音轨、字幕轨、全屏模式的调整，显示媒体信息。</span>
2.  <span
    style="font-family: &quot;Verdana&quot;;">支持创建播放列表。</span>
3.  <span style="font-family: &quot;Verdana&quot;;">支持</span><span
    style="font-family: &quot;Verdana&quot;; font-weight: bold;">浏览桌面
    Linux 上的文件系统</span><span
    style="font-family: &quot;Verdana&quot;;">（知道为何不建议通过互联网访问了吧……）</span>
4.  <span style="font-family: &quot;Verdana&quot;;">试验性的支持 DVD
    菜单。</span>
5.  <span style="font-family: &quot;Verdana&quot;;">可以在有</span><span
    style="font-family: &quot;Verdana&quot;; font-weight: bold;">来电时自动暂停媒体播放</span><span
    style="font-family: &quot;Verdana&quot;;">。</span>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">如果您使用的其他智能手机的话，也可以考虑使用
Hobbyist Software 出品的 </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[VLC
Remote](http://hobbyistsoftware.com/VLC-more)</span><span
style="font-family: &quot;Verdana&quot;;">，它在 VLC
及防火墙方面的配置完全一样，不过手机端就是收费且非开源产品了。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Remote
for VLC Code 首页](http://code.google.com/p/android-vlc-remote/)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[](http://code.google.com/p/android-vlc-remote/)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">分类: </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Embedded](http://linuxtoy.org/category/embedded)</span><span
style="font-family: &quot;Verdana&quot;;">, </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Movie
Player](http://linuxtoy.org/category/apps/movie-player)</span><span
style="font-family: &quot;Verdana&quot;;">, </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Music
Player](http://linuxtoy.org/category/apps/music-player)</span><span
style="font-family: &quot;Verdana&quot;;">, </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Tutorials](http://linuxtoy.org/category/tutorials)</span><span
style="font-family: &quot;Verdana&quot;;"> | </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[永久链接](http://linuxtoy.org/archives/howto-remote-control-linux-desktop-vlc-player-from-android-mobile.html)</span><span
style="font-family: &quot;Verdana&quot;;"> | </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[收藏到
del.icio.us](http://delicious.com/save?url=http://linuxtoy.org/archives/howto-remote-control-linux-desktop-vlc-player-from-android-mobile.html&title=%E5%A6%82%E4%BD%95%E7%94%A8+Android+%E6%89%8B%E6%9C%BA%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6+Linux+%E6%A1%8C%E9%9D%A2+VLC+%E6%92%AD%E6%94%BE%E5%99%A8)</span><span
style="font-family: &quot;Verdana&quot;;"> | </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Email
给好友](https://www.blogger.com/blogger.g?blogID=4961947611491238191)</span><span
style="font-family: &quot;Verdana&quot;;"> | </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[9
评论](http://linuxtoy.org/archives/howto-remote-control-linux-desktop-vlc-player-from-android-mobile.html#comments)</span><span
style="font-family: &quot;Verdana&quot;;"> | </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[捐助本站](http://linuxtoy.org/faq/donate)</span>

</div>
