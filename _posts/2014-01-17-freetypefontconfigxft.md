--- 
layout: post 
title: "一个详细的汉化美化方案(freetype/fontconfig/xft)" 
date: '2014-01-17T10:54:00.001+08:00' 
author: Wenh Q
tags:
modified\_time: '2014-01-17T10:54:09.695+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-6365652472592938158
blogger\_orig\_url: http://binaryware.blogspot.com/2014/01/freetypefontconfigxft.html
---
<div dir="ltr">

<http://www.linuxsir.org/bbs/showthread.php?s=&threadid=81056>

<div class="gmail_quote">



写在前面:

每一个刚刚把Linux装上的朋友面对的第一个问题就是汉化，美化。linux默认的字体实在是不怎么漂亮，特别是对

中文更是如此。我开始用了两三个月美化一直不是很好，正在心灰意懒，准备滚回Windowz的时候，偶然看到一篇美化的文章，照着做了

而且竟然成功了(至少是我想要的效果),从那以后就慢慢的爱上了linux直到把Windowz彻底仍进厕所。

网上关于美化的文章其实已经很多了，但大多是告诉你第一步如何如何，第二步如何如何，至于其中的简单道理很少有涉及。结果

造成知其然不知其所以然，一旦照着文章做下来没有成功，那就等于白做了。以后遇到问题，还是束手无策。

我写这个的目的就是希望结合我自己实际中遇到的种种情况，结合我自己的经验，写一篇文章帮助那些既想美化成功，而又想大概

知道"为什么要这么做"的朋友。当然我只是能讲一些我自己所理解的很浅显的道理，更高深的道理我是不懂的，呵呵。有说错的地方还

请大家多多指教。**<span
style="color: red;">本文所介绍的是基于freetype/Fontconfig/Xft的，xtt我没用，使用的字体都是TrueType。</span>**

下面我们开始。



**<span
style="color: red;">强烈建议你把下面这段仔细看一下，这样对接下来的具体操作有很大帮助！！</span>**



linux下常见的GUI程序有三种，GTK1、GTK2和QT，基于这三种图形库的程序在美化上是有不同要求的。XFree86下常用的字体绘制

方案有xtt,freetype/Fontconfig/Xft。下面分别来看看



1.GTK1的程序是不支持Fontconfig的。所以有点麻烦。拿到一个字体，你首先要让X找到它对吧？这一步就是在<span
style="color: green;">/etc/X11/XF86config</span>的Section
"files"段里面的Fontpath属性里说明的详细后面会讲。好了，X现在知道字体在哪里了。那gtk1的程序还不能直接使用它们，因为我们还没有给它们"注册",这就需要在前面设定的Fontpath里生成两个文件<span
style="color: green;">fonts.dir
fonts.scale</span>这两个文件里有Fontpath下所有字体的列表信息，就是一个"索引"。有了这个"索引"，gtk1的程序就可以找到相应的字体了。生成这两个文件的工具有<span
style="color: red;">mkfontdir,mkfontscale,ttmkfdir</span>等等。好了，上面两步如果正确完成了，你的gtk1程序现在就可以正常显示汉字了。

常见的gtk1程序有xmms，gimp.....



2.GTK2和QT程序可以使用Fontconfig。Fontconfig是一个把字体选择出来，并且决定怎么显示这些字体的东东。类似于前面提到的

XF86config里的Fontpath属性以及fonts.dir和fonts.scale的功能，就是让程序找到这些字体。所以，对于GTK2和QT程序XF86config和

fonts.dir就没有用了。所以对于这类程序来说，主要的配置文件是<span
style="color: green;">/etc/fonts/fonts.conf</span>。

Fontconfig的高级功能有很多，详细的说明可以参考这里:[http://www.linuxfans.org/nuke/module...wtopic&t=48331](http://www.linuxfans.org/nuke/modules.php?name=Forums&file=viewtopic&t=48331)

GTK2和QT的程序就很多了，KDE，GNOME，Firebird............



上面的两段提到的只是让程序找到字体，并不负责具体的显示工作。它们只能保证你的程序能找到字体不会出现乱码现象，也就是所谓的<span
style="color: red;">"汉化"</span>

至于freetype/Xft或者xtt是什么？我的理解它们是负责具体把字体显示到屏幕上的东西，决定了你看到的字体是个什么效果。著名的"firefly美化包"就做了很多改善中文显示效果的工作。也就是所谓的<span
style="color: red;">"美化"</span>



到此你应该对汉化，美化有了一个大概的概念。接下来就是具体的操作

**<span style="color: red;">具体在Slackware
9.1上实现freetype/fontconfig/xft汉化美化工作</span>**



我用的是Slackware
9.1，但是对其它发行版，美化汉化的原理都是大同小异的。看了文章再通过实践加以理解，应该能够灵活应用其它发行版上的。

以下命令以
#开头表示是以root身份操作，
$开头则是以普通用户身份操作。



Step1.

准备TrueType字体，常用的如simsun.ttf tahoma.ttf
verdana.ttf等等。然后决定你要把字体放在哪个目录里。这个目录随你喜欢，我把它们放在<span
style="color: blue;">/usr/X11R6/lib/X11/fonts/TTF/</span>里。

比如你下载来的的ttf字体都在/home/username/myfonts/下面，就做如下操作




#cp /home/username/myfonts/
*.ttf /usr/X11R6/lib/X11/fonts/TTF/



Step2.

让GTK1程序找到你刚才放进去的字体。上面说的方法你还没有忘吧？让我们先修改XF86config




#vi /etc/X11/XF86config



找到

Section "Files"

.................

这一段，在里面加上一个Fontpath属性



FontPath "/usr/X11R6/lib/X11/fonts/TTF/"



当然，如果里面已经有了你放字体的路径就不用加了，如果你的路径和我不一样，那就写你的路径，你也可以随时添加自己的字体路径，道理都一样。

如果你在XF86config里发现了 Load "xtt"这行，把它注释掉。我是不用xtt的



接下来当然是准备fonts.dir
和fonts.scale了。生成这两个的文件工具前面说了。Slackware自带的是mkfontdir和mkfontscale，我个人强烈不推荐
这两个工具，它们生成的fonts.dir很不爽，simsun.ttf里找不出gbk的encoding。你可以去下载一个叫<span
style="color: red;">ttmkfdir</span>的工具:[ftp://216.254.0.38/linux/rawhide/1.0...0.9-7.i386.rpm](ftp://216.254.0.38/linux/rawhide/1.0/i386/Fedora/RPMS/ttmkfdir-3.0.9-7.i386.rpm)

假设你已经装上了这个工具,就做如下操作




#ttmkfdir /usr/X11R6/lib/X11/fonts/TTF/ -o
/usr/X11R6/lib/X11/fonts/TTF/fonts.scale



现在检查一下这个文件




#vi /usr/X11R6/lib/X11/fonts/TTF/fonts.scale



如果里面有 :1:simsun.ttfxxxxxxxxxxxxxxxxxxxx 这样以
:1:开头的行，把它们都删掉,freetype不需要这个东西，而且可能会导致一些问题。特别再注意一下是不是生成了
simsun.ttf -misc-SimSun-medium-r-normal--0-0-0-0-c-0-gb2312.1980-0
simsun.ttf -misc-SimSun-medium-r-normal--0-0-0-0-c-0-gbk-0
这两行，因为encoding是很重要的，mkfontdir生成的fonts.dir很可能没有-gbk-0的编码，这样也会导致一些问题。所以我用
ttmkfdir

确保无误后




#cp /usr/X11R6/lib/X11/fonts/TTF/fonts.scale
/usr/X11R6/lib/X11/fonts/TTF/fonts.dir （这两个文件其实是一样的)



你的gtk1程序已经可以使用字体了，但是在gtk1程序里当然还要指定你究竟要使用什么字体。对gtk1程序使用什么字体有一个全局配置文件<span
style="color: green;">/etc/gtk/gtkrc.zh\_CN</span>

把我的配置文件贴一下



<span style="font-family: times new roman;"><span style="color: blue;">




# This file defines the fontsets for Chinese language (zh) using


# the simplified chinese standard GuoBiao as in mainland China (CN)


#


# 1999, Pablo Saratxaga &lt;<pablo@mandrakesoft.com>&gt;


#



style "gtk-default-zh-cn" {

fontset = "-
*-bitstream vera
sans-medium-r-normal-
*-
*-120-
*-
*-p-
*-microsoft-cp1252,



-
*-simsun-medium-r-normal-
*-12-
*-
*-
*-
*-
*-gbk-0"

}

class "GtkWidget" style "gtk-default-zh-cn"

</span></span>



这个文件告诉程序，对于英文字体优先使用bitstream vera
sans字体，对于中文由于bitstream vera
sans没有中文字体，就使用后面的simsun字体。



至此，gtk1程序的汉化全部完成。

现在可以startx

运行一个xmms看看，界面如何？至于xmms列表显示中文可以搜索其它文章。也很简单



<span style="color: red;">补充几点技巧和说明:</span>

1. -
*-bitstream vera
sans-medium-r-normal-
*-
*-120-
*-
*-p-
*-microsoft-cp1252
这种字体表示方法是不是很复杂？有个小技巧帮你选择自己想要的字体,/usr/X11R6/bin/下有一个程序<span
style="color: red;">xfontsel</span>
,运行它。自己摆弄一下你就明白了。在这里你可以看到gtk1程序所能找到的ttf字体，有一些就是从你刚才生成的fonts.dir里读出来的。通过它你还可以得到你需要的字体的正确表达格式。

2.Slackware 9.1有了bitstream vera sans
等一系列优秀的ttf字体。它们默认也的都在/usr/X11R6/lib/X11/fonts/TTF/目录下，那些Veraxx.ttf的字体都是。
可是那个目录下的fonts.dir没有把它们列进去。如果你前面都是按照我的方法做了，刚才那步ttmkfdir已经把它们收录进去了。如果你刚才操作
的是别的目录，那就在这个/usr/X11R6/lib/X11/fonts/TTF下ttmkfdir
一次了，方法和前面的一样。

3.ttmkfdir生成的fonts.dir
和fonts.scale可能会有一些多余的编码，比如那些以ascii-0和adobe
standard-0结束的行，在我这里引起了一些问题，如果你觉得有什么异常，先把这样的行都删掉。





Step3

搞定gtk2和QT程序。

基于fontconfig选择字体的程序就容易配置多，fontconfig也提供了一些更高级的功能。

类似gtk1，现让这些程序找到这些字体。前面已经说过XF86config里的Fontpath和fonts.dir文件已经没有必要了。fontconfig的核心配置文件是<span
style="color: green;">/etc/fonts/fonts.conf</span>用vi打开这个文件

开始就有这么一段



<span style="font-family: times new roman;"><span style="color: blue;">

&lt;!-- Font directory list configured on Wed Apr 23 11:40:17 CST 2003
--&gt;



&lt;dir&gt;/usr/X11R6/lib/X11/fonts&lt;/dir&gt;

&lt;dir&gt;
~/.fonts&lt;/dir&gt;

&lt;dir&gt;/usr/share/fonts&lt;/dir&gt;



</span></span>

这段是告诉fontconfig去这些目录包括它们的子目录里面去找字体。是不是比Fontpath和fonts.dir省事多了？

你要做的就是把你放字体的路径加上，我刚才放自己的路径已经被包括在里面了。所以不用修改它。



运行


#fc-cache

更新字体信息。

好了，现在gtk2和qt的程序就可以使用你添加的字体了，太简单了吧？而且对fonts.conf的修改马上就可以生效。不像gtk1程序修改gtkrc后还要重新运行，修改XF86config甚至还要restart
X等等。



类似gtk1程序，gtk2和qt程序都有一个全局字体配置。

gtk2程序的全局配置文件是<span
style="color: green;">/etc/gtk-2.0/gtkrc</span>

也把我的内容贴上来



<span style="font-family: times new roman;"><span style="color: blue;">

style "user-font" {

font\_name="Bitstream Vera Sans 9" }

class "
*" style "user-font"

</span></span>



是告诉程序使用Bitstream Vera Sans ,字体大小是 9



qt程序的默认字体配置




$/usr/lib/qt-3.2.1/bin/qtconfig



出来一个图形界面，在里面就可以方便选择你要的字体了



<span style="color: red;">补充几点技巧和说明:</span>

1.刚才提到的xfontsel可以帮你查看gtk1可用的字体，那么fontconfig究竟找到了哪些字体呢?也有一个程序叫<span
style="color: red;">fc-list</span>,默认在/usr/X11R6/bin/下面，运行它，会显示一个列表。里面的字体名称就是可以使用的字体。比如我刚才的gtk2配置文件的字体名字就在里面。

2./etc/fonts/fonts.conf的强大的功能有很多，其实也很复杂。详细的设置可参考本文开头给出的文章连接。

3.你应该会发现。比如在kde控制中心里选择字体的时候，你可以选择所有字体都是Tahoma,Vera
sans什么的，我的gtkrc里写的也是一个英文字体，这样英文字体看起来很pp，而中文字体又是如何决定的呢？为什么我选择了英文字体而中文字体还能
正常显示呢？这就是fontconfig的功劳，在我的fonts.config里有这么两段:



<span style="color: blue;">

&lt;!--

Sans-serif faces

--&gt;

&lt;alias&gt;

&lt;family&gt;Bitstream Vera Sans&lt;/family&gt;

&lt;family&gt;Tahoma&lt;/family&gt;

&lt;family&gt;Verdana&lt;/family&gt;

&lt;family&gt;Arial&lt;/family&gt;

&lt;family&gt;Helvetica&lt;/family&gt;

&lt;family&gt;Nimbus Sans L&lt;/family&gt;

&lt;family&gt;Luxi Sans&lt;/family&gt;

&lt;family&gt;Kochi Gothic&lt;/family&gt;

&lt;family&gt;AR PL KaitiM GB&lt;/family&gt;

&lt;family&gt;AR PL KaitiM Big5&lt;/family&gt;

&lt;family&gt;Baekmuk Dotum&lt;/family&gt;

&lt;family&gt;SimSun&lt;/family&gt;

&lt;default&gt;&lt;family&gt;sans-serif&lt;/family&gt;&lt;/default&gt;

&lt;/alias&gt;



和

&lt;alias&gt;

&lt;family&gt;sans-serif&lt;/family&gt;

&lt;prefer&gt;

&lt;family&gt;Bitstream Vera Sans&lt;/family&gt;

&lt;family&gt;Tahoma&lt;/family&gt;

&lt;family&gt;Verdana&lt;/family&gt;

&lt;family&gt;Arial&lt;/family&gt;

&lt;family&gt;Helvetica&lt;/family&gt;

&lt;family&gt;Nimbus Sans L&lt;/family&gt;

&lt;family&gt;Luxi Sans&lt;/family&gt;

&lt;family&gt;Kochi Gothic&lt;/family&gt;

&lt;family&gt;AR PL KaitiM GB&lt;/family&gt;

&lt;family&gt;AR PL KaitiM Big5&lt;/family&gt;

&lt;family&gt;Baekmuk Dotum&lt;/family&gt;

&lt;family&gt;SimSun&lt;/family&gt;

&lt;/prefer&gt;

&lt;/alias&gt;

</span>



这段告诉程序，遇到要显示sans-serif的字体，优先使用列表里在前面的字体，这里就是Bitstream
Vera
Sans,如果该字体不能显示需要的字符就继续在下面找，对于中文，就找到最后的SimSun(宋体)了。你如果想用其它默认的中文，就可以把你需要的中
文字体摞在&lt;family&gt;SimSun&lt;/family&gt;上面。就优先使用你要的字体了。





<span
style="color: red;">**到此为止，其实汉化已经结束了，如果你觉得这个效果还不错，那就此打住吧。如果你觉得还有些不完美，如中文细节显示的还不是很好，那就可以求助于firefly的美化包**</span>



安装这些包就很简单了，我简要说一下这些包的功能。

fontconfig-2.2.1-i486-1.Firefly.tgz
会替换你现在的/etc/fonts/fonts.conf,加上了一些firefly修改的属性。



freetype-2.1.5-i486-1.Firefly.tgz xft-2.1.2-i486-1.Firefly.tgz
这两个是字体绘制的核心部分，装上他们可以使中文显示的更完美，具体的原理我就不懂了，呵呵，也没功夫去研究。



xfree86-4.3.0-i486-5.Firefly.tgz也能改善字体显示效果，我这里不装它，任务栏和标题栏的中文粗体显示不出来。如果你网络不是很好，这个包也挺大，你可以不装它，没什么大碍。



qt-3.2.1-i486-1.Firefly.tgz
这个包装不装无所谓，还挺大的.我觉得除了让你的qt程序选择字体的时候可以显示一个中文字体名(SimSun显示为"宋体")以外没什么更有价值的功能，可以不装。





以上几步都做完了，如果不出以外的话，你gtk2和qt程序显示的英文是又粗又黑的，看起来就像用了粗体一样。如果你觉得这样挺好那就罢了。如果你和我一样，觉得脏兮兮的很难看，可以在你的<span
style="color: green;">/etc/fonts/fons.conf</span>上加上这么一段



<span style="font-family: times new roman;"><span style="color: blue;">

&lt;!--

This expression is added by Akito Hirai&lt;<akito@kde.gr.jp>&gt; for
convenience.

It can be used to make artificial bold versions in client
libraries/applications.

--&gt;

&lt;match target="font"&gt;

&lt;test name="weight"&gt;

&lt;const&gt;medium&lt;/const&gt;

&lt;/test&gt;

&lt;test target="pattern" name="weight" compare="more"&gt;

&lt;const&gt;medium&lt;/const&gt;

&lt;/test&gt;

&lt;edit name="weight" mode="assign"&gt;

&lt;if&gt;

&lt;more&gt;

&lt;name&gt;spacing&lt;/name&gt;

&lt;const&gt;proportional&lt;/const&gt;

&lt;/more&gt;

&lt;const&gt;demibold&lt;/const&gt;

&lt;const&gt;bold&lt;/const&gt;

&lt;/if&gt;

&lt;/edit&gt;

&lt;/match&gt;

&lt;match target="font"&gt;

&lt;test name="pixelsize" compare="less\_eq"&gt;

&lt;double&gt;16&lt;/double&gt;

&lt;/test&gt;

&lt;test name="pixelsize" compare="more\_eq"&gt;

&lt;double&gt;8&lt;/double&gt;

&lt;/test&gt;

&lt;edit name="antialias" mode="assign"&gt;

&lt;bool&gt;f&lt;/bool&gt;

&lt;/edit&gt;

&lt;/match&gt;



</span></span>



这样一来，Tahoma，Verdana，等Windowz下几个主要的ttf字体效果就和Windows下没什么区别了。不过对于Bitstream
Vera Sans来说似乎有点"少肉",但总体来说效果是不错的，请选择使用

</div>




</div>
