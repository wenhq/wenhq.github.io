--- 
layout: post 
title: GNOME 的 Wayland 迁移计划 
date:'2013-03-16T17:41:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-03-16T17:41:26.262+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-6994863851094697453
blogger\_orig\_url: http://binaryware.blogspot.com/2013/03/gnome-wayland.html
---


 
<div class="article">

<div class="header">

**GNOME 的 Wayland 迁移计划**

</div>

<div class="source">

Published on
[LinuxTOY](http://linuxtoy.org/archives/gnome-to-wayland-roadmap.html) |
shared via [feedly](http://www.feedly.com)

</div>

<div>

在 GNOME 3.8 发布前夕和 Canonical 公布 Mir 计划以后，红帽员工 Matthias
Clasen 在 GNOME 开发者列表和红帽内部的 GNOME 列表上，公布了 GNOME 向
Wayland 迁移的路线图。

<span></span>

Matthias 在邮件中说道，Wayland 最近发布了 1.0 版本。大伙们都默默地认定了
Wayland 作为 Linux 图形显示系统。为了取得完满的胜利，GNOME
需要一个完整的桌面移植计划。Matthias 表示他很自信 X 社区和 Wayland
社区会帮助他们取得最后的成功。

Matthias 提到当前有两大任务，一是移植 GNOME Shell 让其作为 Wayland
Compositor 运行，重点是 Mutter 能够移植到 Wayland；二是 GTK+ Wayland
后端要达到 X 后端一样可用可靠水平，同时也会保持 X
的兼容性。他表示，GNOME Shell 需要六个月时间移植到
Wayland，另外再需要六个时间 GNOME 会提供一个完整移植到 Wayland
的桌面环境。而应用程序的移植，则取决于该应用程序自身的安排。依赖 X
的第三方应用程序依然可以通过 xwayland 无缝地与 Wayland 兼容。

根据 GNOME 的路线图：

-   GNOME 3.10（2013 年秋季）

1.  X 依然是默认选择。
2.  GNOME Shell 作为试验性质可以在 Wayland 上运行。
3.  GTK+ Wayland 后端达到日常使用阶段。
4.  并不是所有的桌面组件会完成向 Wayland 的移植。
5.  所有不兼容 Wayland 的应用程序，则无缝地通过 xwayland 运行。

-   GNOME 3.12 （2014 年春季）

1.  完成 GNOME 向 Wayland 移植，Wayland 成为默认选择，但依然可以运行在 X
    上。
2.  大部分 GNOME 组件会同时兼容 X 和 Wayland。（但部分组件注定无法同时在
    X 和 Wayland 上运行）
3.  所有 GNOME 核心程序能够兼容 Wayland。
4.  第三方依赖 X 的应用程序依然可以通过 xwayland 运行。

在 GNOME 移植到 Wayland 后，GNOME 组件将会默认依赖 Wayland
相关的组件和库。所以 Linux 发行版如果需要 GNOME，则需要保证 Wayland
在他们的软件源。但具体是否使用 Wayland 运行
GNOME，则由发行版自身决定。至于跨桌面环境的兼容性问题，GNOME 会连同
Wayland 社区和其他桌面社区（比如 KDE
）一同努力，提供所需的接口和文档，以确保可操作性。
显示驱动对 Wayland 的兼容性：

-   开源驱动工作良好（Intel，Radeon，Nouveau）
-   Gallium 驱动工作正常
-   Android 驱动可以 libhybris 与 NDIS-like wrapper 一并工作
-   NVIDIA 专有驱动现在不能在 Wayland 上运行
-   AMD 专有驱动被遗忘？？？

消息来源：[Matthias Clasen
的邮件](https://mail.gnome.org/archives/desktop-devel-list/2013-March/msg00059.html) [GNOME
的 Wayland 专页](https://live.gnome.org/Wayland)

分类: [Desktop
Environment](http://linuxtoy.org/category/apps/desktop-environment "View all posts in Desktop Environment"),
[News](http://linuxtoy.org/category/news "View all posts in News") |
[永久链接](http://linuxtoy.org/archives/gnome-to-wayland-roadmap.html) |
[收藏到
del.icio.us](http://delicious.com/save?url=http://linuxtoy.org/archives/gnome-to-wayland-roadmap.html&title=GNOME%20%E7%9A%84%20Wayland%20%E8%BF%81%E7%A7%BB%E8%AE%A1%E5%88%92)
| [Email
给好友](mailto:?Subject=Check+This+Out&body=I+think+you'll+like+this:+http://linuxtoy.org/archives/gnome-to-wayland-roadmap.html)
|
[无评论](http://linuxtoy.org/archives/gnome-to-wayland-roadmap.html#comments)
| [捐助本站](http://linuxtoy.org/faq/donate)

</div>




</div>

<div class="footer">

Feedly. Feed your mind.
[http://www.feedly.com](http://www.feedly.com/#mail)

</div>
