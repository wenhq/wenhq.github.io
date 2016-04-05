--- layout: post title: Android ，在争议中逃离 Linux 内核的 GPL 约束
date: '2013-07-22T13:24:00.001+08:00' author: Wenh Q tags:
modified\_time: '2013-07-22T13:24:20.914+08:00' thumbnail:
https://lh4.googleusercontent.com/v6N\_jEpeOf8f7tIXTVOf1yg85yUpFsZND\_Aml0ysbFY4fxCSQ04bcVrxu-FGwqqbIv\_P2Xz5LHv6UXR3moJzILvjGw8B-35hrKXDshm7mnKfllid3Sk=s72-c
blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-460394171941045202
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/07/android-linux-gpl.html ---

[\
Android ，在争议中逃离 Linux 内核的 GPL
约束](http://www.ifanr.com/92261)

于 12-5-27 通过 [爱范儿 · Beats of
Bits](http://www.ifanr.com/) 作者：shallon

![](https://lh4.googleusercontent.com/v6N_jEpeOf8f7tIXTVOf1yg85yUpFsZND_Aml0ysbFY4fxCSQ04bcVrxu-FGwqqbIv_P2Xz5LHv6UXR3moJzILvjGw8B-35hrKXDshm7mnKfllid3Sk)

为这个题材起名，我思考了许久，GPL 是著名的开放源代码许可协议，Linux
内核开源项目正是在 GPL 的庇佑之下，十多年来在服务器、PC
端以及各种嵌入式设备上成绩斐然，是当之无愧的当代计算机软件的基石，说 GPL
代表着 Linux 的开源精神，毫不为过。然而，现实世界中，GPL
开源乌托邦和商业社会的丛林法则之间存在剧烈的冲突，其中犬牙交错，艰难成长，从中引发的思考，与大家共享。

### Linux 内核的 GPL 约束 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

总所周知，Linux 内核以 GNU 通用公共许可证第二版（GPL
V2）的授权使用协议下发行。GNU 通用公共许可证是一种 “Copyleft”
形式的“版权”，保障任何人都能够对 Linux
内核以及其衍生产品的使用、修改和重新发布的权力，前题是不能修改发布条款。什么意思呢，任何
Linux 内核的衍生产品（Derived Work）必须遵循 GPL
协议进行发布。然而问题的核心在于什么是 Linux
内核的衍生产品，其中有几个致命问题，业界争论了十年有多。

1、使用 Linux
内核的头文件定义，进行系统调用的程序是否会被定性为衍生产品？

2、链接使用了其他 GPL 的类库的程序是否会被定性为衍生产品？

3、Linux 内核动态载入的模块 LKM（[Loadable Kernel
Modules](http://en.wikipedia.org/wiki/Loadable_kernel_module)）是否会被定性为衍生产品，以
LKM 形式开发的 Linux 驱动程序是不是衍生产品？

如果上述问题答案均为“是”，GPL 将为 Linux
打造一个的“封闭”的开源世界，什么意思呢？一个 Linux
GPL的操作系统核心运行在 “ 内核空间 ”
，上层的类库、框架、服务、应用运行在 “ 用户空间 ”
。用户空间上的任何服务不可避免的需要Linux
内核的头文件，进行系统调用，因此，中间层服务必须遵循 GPL
进行开放源代码。调用中间服务层的框架或者其他服务使用了 GPL
的类库，因此，也必须是 GPL 的。同理，上层应用也被 “ 传染 ” ，必须是 GPL
的。于是，从内核到驱动到中间服务到上层应用，形成了一个 GPL
一体化软件授权的软件发布整体。可以认为，这个整体上任何开发成果都是 GPL
的，除非极少数的例外程序能够证明自身独立于系统的GPL环境。这样的一个“软件闭包”排斥的商业化的软件模块以及“想要钱”普通开发者，将整个软件世界划分为“
GPL 与 GPL 兼容的”的和非 GPL 的，每个开发从业者面临着选择，要么
Linux+GPL ，要么 Linux 与你无关。

重新回到这三个问题，第一个问题，曾经被 Linux 内核的作者 Linus
Torvalds 以及内核开发人员多次澄清普通系统调用为非 GPL
的作用范围，甚至固化在 Linux 内核的源码 COPYING 文档中，为 Linux
用户空间的程序采用非 GPL 的授权许可证打下了基础。

![](https://lh6.googleusercontent.com/2Ki0pfkB5cEKx8WEpDgy-LxsyxugMfyl0l0jPeKCKEh9UUmNr7UWiyNjl1ZMhNFA37Zea9Kb9z7MZYe4pBXmkSlVellMaIJWvEdcCX3Q2aMWBVt9Sbk)

第二个问题，具有明确的答案，是。这也是为何 GPL
被抨击为具有“病毒感染”的特性，一旦程序使用了 GPL
的模块，本身即被传染，程序必须成为 GPL。如果主程序与 GPL
类库是静态链接（Static Link）的关系，业界一般认为主程序必须限定为
GPL。而对主程序动态链接（Dynamic
Link）GPL类库主程序一般认为也必须是GPL的，若要打赢官司，必须证明主程序与GPL模块之间具有“独立性和可区分性”（Separate
and Independent），才能逃离 GPL
的约束。[GPL](http://www.gnu.org/licenses/gpl-faq.htm)官方网站上的有这样的
FAQ：

If a library is released under the GPL (not the LGPL), does that mean
that any software which uses it has to be under the GPL or a
GPL-compatible license? (\#IfLibraryIsGPL)

Yes, because the software as it is actually run includes the library.

 如果一个类库以 GPL 的许可证授权进行发布（不是
LGPL），是否意味着任何使用该类库的软件必须以 GPL 或者 GPL
兼容的许可证下进行发布？

是，因为软件包含了该类库才能运作。

第三个问题，是硬件厂商和 Linux
内核开发社区之间一场旷日持久的争论的中心。最著名的，莫过与图形显示设备厂商
AMD/ATI、NVidia
出自硬件规格保密以及知识产权的考虑，长期以二进制软件包的方式独立发布图形驱动，涉嫌违反了Linux内核开放源代码的软件授权协议
GPL，至今仍是 Unity 与 Gnome 3
等依赖于硬件图形加速的新型桌面技术发展上的一大阴影。主要的 Linux
内核维护者 Greg Kroah-Hartman
曾经严厉的批判过，内核中的二进制软件包发布的模块是非法的、不道德的。

![](https://lh4.googleusercontent.com/VKc72ll6g1vgGV74QSKNI4JoyO1G9THertEO2RcYFF8b4TxfUyPyBY5xFINYAwj6efwwFQkFwWnT0r_UB1Lv-rFDU5sRyehe4IgWGaDnQ1Si69_-Vkc)

说到此处，可以看到 GPL 下的
Linux，存在着开源精神和商业机密以及知识产权保护相关的商业精神存在尖锐对立，对硬件厂商以及其他商业软件开发者来说，既不能忽视Linux广阔的商业市场，也不能放弃产品规格以及知识产权保护，两者都会伤害其立命之本。在早年的一份嵌入式操作系统选型的研究报告指出，Linux
相对于其他的 BSD 的 Unix Like 操作系统，由于 GPL
的约束限制，不具有商业优势。（参见引用3）。一言以蔽之，业界有 GPL
的恐惧症。

然而，在移动互联网蓬勃发展的今天，一个 Linux 的发布版本，Android
在各种智能嵌入式设备上面大放异彩。据说，Android 之父 Andy Rubin 极度厌恶
GPL（James Bottomley，Linux SCSI 子系统的维护者说其人“Working from an
extreme dislike of the GPL”），然而 Android 向世人展示了采用 GPL
授权代码的手机也能获得巨大的市场成功。

### Android：把 GPL 局限在内核空间 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

下图是[ Openfoundry](http://www.openfoundry.org/) 绘制的 Android
的授权许可证结构，可以看到在 Android 多层软件栈中，仅仅最核心的 Linux
内核使用了 GNU 通用公共许可证，在这个层次上，Google 对 Linux
内核的所有修改必须反馈回 Linux 主版本树（Android 的内核将在 Linux 3.3
版本进行回归，两个版本的 Linux 内核进行融合）。

其上层的类库以及应用框架以及所谓用户空间部分，大部分使用了“ 温和 ”的
Apache-2.0 软件许可授权，允许 Android 上的开发商基于 Android
的源代码进行开发而不向社区反馈。基于上文讨论 GPL
的第一个问题，用户空间的类库以及程序使用 Linux
内核的系统调用不被视为是Linux内核的衍生产品，因而得以自由采用 Apache-2.0
的软件授权进行发布。GPL 世界和非GPL世界的分界线在于一个叫做 Bionic Libc
的类库。Bionic Libc 的关键之处在于如果 Bionic Libc 受到内核 GPL
的“感染”，将会波及非 GPL 的用户空间的各个模块。

![](https://lh3.googleusercontent.com/yFx3ds3krYv1h9fw-Jo9eEjIPo09zqDJlO0qVj1AB2QwQ_95JyDbaEQTFb2kLzWtSPGcnjSf2yCppiSQlgvxtU3B0pTLl-EFoa-34z36Qnfi6hmzhO0)

Android 的 Bionic Libc 的类库，采用 BSD 的许可证授权。在 2008 年 Google
IO大会上，一份著名的 PPT：“ Android Anatomy And Physiology ”讲到 Android
使用 Bionic Libc 类库替换Linux常用的 Gnu glibc ，其中一个主要原因是 “ We
want to keep GPL out of user-space ”。（这其实有点难理解，毕竟 Gnu glibc
采用的是 LGPL 而非 GPL，并基于上文 GPL
第一点的讨论，使用系统调用的程序不再被视为 Linux
内核的衍生产品，并不需要遵循
GPL，有兴趣者请看下文用户空间驱动部分的分析） 。Bionic Libc
充满着非议，Bionic Libc
拷贝内核头文件的行为，并在源码中声明的版权信息均遭到了 “ 侵犯 Linux 内核
GPL 约束 ” 的质疑。这是 Bionic 头文件的版权信息，许多人认为是非法的：

“This header was automatically generated from a Linux kernel header of
the same name, to make information necessary for userspace to call into
the kernel available to libc. It contains only constants, structures,
and macros generated from the original header, and thus, contains no
copyrightable information.”

头文件由Linux内核的同名头文件自动生成，用来获取完成用户空间系统调用的必要的信息。它只包含原头文件中的常数、结构和宏定义，因此，不包含版权信息。

不管如何，从目前的情况看，让 GPL
止步于内核空间的做法是成功的，并已经得到很大一部分内核开发者的认同。James
Bottomley，Linux SCSI 子系统的维护者在 2011年 LinuxCon 大会日本站上谈到
 Android 的商业成功与 GPL 恐惧的时候说：

We should also design more “bright line” systems which make the question
of GPL compliance clear. The kernel’s user-space ABI is one such system;
developers know that user-space code is not considered to be derived
from the kernel. Making the boundary easy to understand helps to make
the GPL less scary.

在遵守 GPL 的问题上，我们必须澄清一些界线。内核的用户空间
ABI（应用二进制接口）就是一种 GPL
的作用边界，能让开发者意识到用户空间的代码，不被定性为内核的衍生产品，如果
GPL 的界线清晰而易懂，可以帮助大家消除对 GPL 的恐惧。

### 缓解 Linux 驱动的 GPL 困境 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

Android 的发展离不开硬件设备厂商的支持，硬件设备厂商最关注的是 Linux
驱动的 GPL
约束问题，公开驱动程序源代码将会泄漏设备的硬件规格和泄漏核心知识产权，这是硬件厂商
GPL 恐惧的缘由。Google
不遗余力的为硬件设备厂家排忧艰难，保驾护航。上文提到的 “ Android Anatomy
And Physiology  ”，文中清晰的讲到 Android
在用户空间与内核空间之间存在着硬件抽象层  HAL（Hardware Abstraction
Layer），HAL 类库本质上一种用户空间的驱动，其中的主要用途之一：规避
GPL。

### 用户空间的驱动 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

Linux
是单内核宏内核操作系统（Macrokernel），这种操作系统的一大特点是驱动存活在内核，优点是驱动与系统内核共生在相同的地址空间，运作的效率比较高，缺点是当驱动有问题的时候，容易危及内核的工作安全。用户区间驱动的思路是将驱动的主要业务逻辑剥离出来放到用户空间的主驱动模块中，内核中的驱动是个“影子”驱动，只有透传控制命令和数据的功能。

![](https://lh6.googleusercontent.com/l7y24pAU8NLDa5hmnoG6fLr2uVoB2AeeMURyBGCURGspby5F8WGPWHnhauduY4sqtiZ4OCtwU9fFFvIcMXqzTk107nty1A_v-jDEqI9ACMnADXqhcPg)

Android 的 HAL
相当于上图中的主驱动，其在内核中的驱动相当于上图中的影子驱动。规避 GPL
的硬件厂家把需要保护的商业机密以及知识产权相关的逻辑放在 HAL
层，以二进制包的方式发布，不需要公开源代码。

![](https://lh5.googleusercontent.com/w4pGR3A-xsoShxOHxcgcyefeQRJXQg0uZxR6Kz9hooanNVVvVxzUj3fLy4tzfIXvP9Rcb9-zOmavdetCHvvoK59G3i4cgneHBtLaU47Dkdmb8jAPhNk)

这种机制看上去很美，然而，同样面临着巨大的争议。HAL
类库与内核驱动之间通过普通的系统调用能够完成么？如果不是普通的系统调用，用户空间的驱动就违反了上文中的第一条，用户空间的驱动不能获得
GPL 例外的豁免。Edward J. Naughton 2011 年 3
月撰文认为，普通的系统调用应被理解为 gnu glibc
向外暴露的系统调用接口，而 Android 通过 Bionic libc
类库暴露了更多的接口，包括原来在内核空间才能使用的接口，其目的是为了让用户空间的驱动能够充分的利用内核和硬件资源。如果情况果真如此，Bionic
libc类库是 Google 的后门，这也可能 Android 抛弃使用 gnu glibc 重写
Bionic libc 的其中一个主要原因。Edward J. Naughton 说：

Some of the calls exposed by Bionic are ordinarily not available to
userspace because they’re excluded by the use of the \#ifdef
\_\_KERNEL\_\_ … \#endif guards. If Google can define any call to the
kernel from userspace as a “normal system call” (even those system calls
ostensibly guarded by kernel matainers) simply by including it in its
new C library, then a “normal system call” becomes whatever Google (or
Oracle or Microsoft) wants it to be.

Bionic 暴露了原来在用户空间不能使用的函数调用，这些调用原本在代码中被
\_\_KERNEL\_\_ 的宏定义保护其运行在内核状态。如果Google 只要将在 Bionic
添加暴露的接口就可以自由的暴露 Linux 系统调用（这些系统调用明显应该由
Linux 内核社区维护），那么难免被其他人效仿。

### 总结 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

总得说来，Android 为 GPL 下的 Linux
如何与商业社会并存与共赢提供了一个成功的范本，尝试为 Linux
生态系统上的各种角色划清彼此的作用范围，梳理了各方在版权上的权利和义务，目前看来获得了惊人的商业成功。然而，这种工作模式也面临着巨大的版权争议，理论上存在一种可能，一旦版权模式被否决，将面临被全盘否定的灾难。

\

题图来自
[bzatreeza](http://www.google.com.hk/imgres?hl=zh-CN&newwindow=1&safe=strict&biw=1280&bih=675&gbv=2&tbm=isch&tbnid=tE4DDon6qS6WlM:&imgrefurl=http://bzatreeza.blogspot.com/2011/02/blog-post_01.html&docid=k39m-TY_V5CVKM&imgurl=http://1.bp.blogspot.com/_fH9hVf7s3sQ/TUkLy-9-w7I/AAAAAAAAAOo/UbGpclZsijc/s1600/Walk_Away____by_thesaintdevil.jpg&w=600&h=600&ei=h7nCT8PlFouOsALUuODJCQ&zoom=1&iact=hc&vpx=680&vpy=271&dur=2142&hovh=225&hovw=225&tx=117&ty=62&sig=116401412468440993346&page=1&tbnh=138&tbnw=136&start=0&ndsp=21&ved=1t:429,r:18,s:0,i:113)

[](http://www.google.com.hk/imgres?hl=zh-CN&newwindow=1&safe=strict&biw=1280&bih=675&gbv=2&tbm=isch&tbnid=tE4DDon6qS6WlM:&imgrefurl=http://bzatreeza.blogspot.com/2011/02/blog-post_01.html&docid=k39m-TY_V5CVKM&imgurl=http://1.bp.blogspot.com/_fH9hVf7s3sQ/TUkLy-9-w7I/AAAAAAAAAOo/UbGpclZsijc/s1600/Walk_Away____by_thesaintdevil.jpg&w=600&h=600&ei=h7nCT8PlFouOsALUuODJCQ&zoom=1&iact=hc&vpx=680&vpy=271&dur=2142&hovh=225&hovw=225&tx=117&ty=62&sig=116401412468440993346&page=1&tbnh=138&tbnw=136&start=0&ndsp=21&ved=1t:429,r:18,s:0,i:113)

![](https://lh6.googleusercontent.com/7eUPUc2YU1CGI-cbOu7NVBNEBWlvyVbR5PPbLjHd_taacGWVNAkA2VLyH3gcOKbB803byQUi5P2eeIdLSUuoiir-U6NyWn5gDehJf5ez289YdvcW-9M)

[](http://www.google.com.hk/imgres?hl=zh-CN&newwindow=1&safe=strict&biw=1280&bih=675&gbv=2&tbm=isch&tbnid=tE4DDon6qS6WlM:&imgrefurl=http://bzatreeza.blogspot.com/2011/02/blog-post_01.html&docid=k39m-TY_V5CVKM&imgurl=http://1.bp.blogspot.com/_fH9hVf7s3sQ/TUkLy-9-w7I/AAAAAAAAAOo/UbGpclZsijc/s1600/Walk_Away____by_thesaintdevil.jpg&w=600&h=600&ei=h7nCT8PlFouOsALUuODJCQ&zoom=1&iact=hc&vpx=680&vpy=271&dur=2142&hovh=225&hovw=225&tx=117&ty=62&sig=116401412468440993346&page=1&tbnh=138&tbnw=136&start=0&ndsp=21&ved=1t:429,r:18,s:0,i:113)

[](http://www.google.com.hk/imgres?hl=zh-CN&newwindow=1&safe=strict&biw=1280&bih=675&gbv=2&tbm=isch&tbnid=tE4DDon6qS6WlM:&imgrefurl=http://bzatreeza.blogspot.com/2011/02/blog-post_01.html&docid=k39m-TY_V5CVKM&imgurl=http://1.bp.blogspot.com/_fH9hVf7s3sQ/TUkLy-9-w7I/AAAAAAAAAOo/UbGpclZsijc/s1600/Walk_Away____by_thesaintdevil.jpg&w=600&h=600&ei=h7nCT8PlFouOsALUuODJCQ&zoom=1&iact=hc&vpx=680&vpy=271&dur=2142&hovh=225&hovw=225&tx=117&ty=62&sig=116401412468440993346&page=1&tbnh=138&tbnw=136&start=0&ndsp=21&ved=1t:429,r:18,s:0,i:113)

[shallon](http://www.ifanr.com/author/shallon5)

“阅读、记录、总结和分享”是我尝试理解现时世界如何演变成未来的一种方式。

* * * * *

[邮箱](mailto:shallon5@ifanr.com) [新浪微博](http://weibo.com/shallonluo) [知乎](http://www.ifanr.com/shallon.luo@gmail.com) [Google+](http://www.ifanr.com/shallon.luo@gmail.com)

[爱范儿 · Beats of Bits](http://www.ifanr.com/) |
[原文链接](http://www.ifanr.com/92261) · [40
热评](http://www.ifanr.com/92261#comments) ·
[新浪微博](http://www.weibo.com/ifanr) ·
[订阅全文](http://www.ifanr.com/feed) ·
[Google+](https://plus.google.com/114725869543399343504/) ·
[\#ifanrlive](http://live.ifanr.com/) ·
[加入爱范社区！](http://bbs.ifanr.com/)
