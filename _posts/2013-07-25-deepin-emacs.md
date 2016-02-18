--- layout: post title: Deepin Emacs 的安装和使用 date:
'2013-07-25T19:41:00.002+08:00' author: Wenh Q tags: modified\_time:
'2013-07-25T19:41:28.681+08:00' thumbnail:
https://lh5.googleusercontent.com/dPlEIB8cv3xWHv5jr6WjrOsE6F1FMlhAXVdEHybL1RvGhFux5Msq9D\_zjwMaX3yRGqnF2-YWrVQXeLBJxP5qJVn5VXkf1bazXvbHYMCI8VOp-DCl95c=s72-c
blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-4287459923087398737
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/07/deepin-emacs.html ---

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[\
Deepin Emacs
的安装和使用](http://wowubuntu.com/install-and-use-deepin-emacs-under-linux-deepin.html)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">于 12-8-1 通过
</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Wow!
Ubuntu](http://wowubuntu.com/)</span><span
style="font-family: &quot;Verdana&quot;;"> 作者：Bentutu.com</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<span style="font-family: &quot;Verdana&quot;;">何为 Emacs？</span> {#何为-emacs style="color: black; direction: ltr; font-family: "Arial"; font-size: 18pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 11.2pt; text-align: left;"}
-------------------------------------------------------------------

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">Emacs
是一个可自编程，自扩展的文本编辑器。Emacs 内置 Elisp
解释器和热替换机制，使它可以在运行时进行自我编程进化。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">Emacs
最大的资源库：</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[EmacsWiki](http://www.emacswiki.org/)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[](http://www.emacswiki.org/)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">Emacs
不但是一个文本编辑器，更是一个 Elisp 操作系统。通过 Elisp
扩展，它还具有以下功能：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">    编辑器\
   调试器\
   浏览器\
   音乐播放器\
   文件管理器\
   终端模拟器\
   IRC 客户端\
   邮件客户端\
   新闻阅读器\
   电子书阅读器\
   图片浏览器\
   进程管理器\
   Wiki 编辑器\
   Debian 包管理器\
   Elisp 安装管理器\
   英文翻译助手\
   英文编写助手\
   代数计算系统\
   日历\
   GTD 客户端\
   电驴客户端\
   下载管理器\
   代码画图\
   Vi 模式\
   正则表达式学习助手\
   代码自动补全\
   代码搜索\
   实时语法检测\
   Anything 超强搜索\
   键盘宏\
   ...</span>

</div>

<span style="font-family: &quot;Verdana&quot;;">Deepin Emacs 特色</span> {#deepin-emacs-特色 style="color: black; direction: ltr; font-family: "Arial"; font-size: 18pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}
------------------------------------------------------------------------

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">默认的 Emacs
的功能很少，Deepin Emacs 是在 </span><span
style="font-family: &quot;Verdana&quot;; font-weight: bold;">Emacs24</span><span
style="font-family: &quot;Verdana&quot;;"> 开发版基础上集成了 Linux
Deepin 开发者和项目负责人 </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Andy
Stewart](http://www.emacswiki.org/emacs/AndyStewart)</span><span
style="font-family: &quot;Verdana&quot;;"> 的 Elisp 扩展而成的。Deepin
Emacs
包括了丰富的插件，并且功能和按键都已经过优化调整，方便大家的使用。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">您只需调用 deepin-emacs
就可以使用 Emacs 强大的功能，而不用天天折腾 Elisp 细节。</span>

</div>

<span style="font-family: &quot;Verdana&quot;;">Deepin Emacs 的安装</span> {#deepin-emacs-的安装 style="color: black; direction: ltr; font-family: "Arial"; font-size: 18pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}
--------------------------------------------------------------------------

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">在 Linux Deepin
上，您可以在 Linux Deepin 软件中心中搜索 deepin-emacs
进行安装，或打开终端，输入如下命令来安装：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">sudo apt-get install
deepin-emacs</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">其他 Debian
系列发行版本用户可以下载 .deb 格式安装包(</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[点击下载](http://packages.linuxdeepin.com/deepin/pool/main/d/deepin-emacs/)</span><span
style="font-family: &quot;Verdana&quot;;">)，同时还需要自行安装 Emacs24
。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

![](https://lh5.googleusercontent.com/dPlEIB8cv3xWHv5jr6WjrOsE6F1FMlhAXVdEHybL1RvGhFux5Msq9D_zjwMaX3yRGqnF2-YWrVQXeLBJxP5qJVn5VXkf1bazXvbHYMCI8VOp-DCl95c){width="300" height="252"}<span style="font-family: &quot;Verdana&quot;;">常用快捷键</span> {#常用快捷键 style="color: black; direction: ltr; font-family: "Arial"; font-size: 18pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">大家可以通过如下步骤来查看常用快捷键列表：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">按下 Win
键（徽标键）+y，输入 catkeystoke.el，然后回车即可查看。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;; font-style: italic;">提示：</span><span
style="font-family: &quot;Verdana&quot;;">查看时最好不要进行任何修改，否则
Deepin Emacs 将无法启动，此时您可以按下 Win 键（徽标键）+Alt+L
将其锁定，进入只读模式。</span>

</div>

### <span style="font-family: &quot;Verdana&quot;;"></span> {#section style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

### <span style="font-family: &quot;Verdana&quot;;">全局命令</span> {#全局命令 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

\

</div>

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">快捷键</span>                  | ot;;">功能</span>                    |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">F5</span>                      | ot;;">退出Emacs</span>               |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">输入Emacs命令</span>           |
| + x</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">F6</span>                      | ot;;">锁屏</span>                    |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">F8</span>                      | ot;;">当前文件位置</span>            |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">F11</span>                     | ot;;">切换全屏</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">全局搜索</span>                |
| + y</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">APT                            |
| + x z</span>                         | 搜索</span>                          |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">进程管理器</span>              |
| + F8</span>                          |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">终端模拟器</span>              |
| + n</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">翻译当前的单词</span>          |
| + z y</span>                         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">翻译输入的单词</span>          |
| + z i</span>                         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">W3M                            |
| + z Ctrl + z</span>                  | 浏览器</span>                        |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">播放音乐目录</span>            |
| + c p d</span>                       |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">播放音乐文件</span>            |
| + c p f</span>                       |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">登陆IRC</span>                 |
| + c i</span>                         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">日历</span>                    |
| + c c</span>                         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">递归正则表达式搜索当前目录</span> |
| + x g</span>                         |                                      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">切换到播放列表</span>          |
| + c p g</span>                       |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">切换到命令输入栏</span>        |
| + Alt + x</span>                     |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">终止Emacs命令</span>           |
| + g</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">强制终止Emacs命令</span>       |
| + g Ctrl + g Ctrl + g</span>         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+

### <span style="font-family: &quot;Verdana&quot;;"></span> {#section-1 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

### <span style="font-family: &quot;Verdana&quot;;">编辑命令</span> {#编辑命令 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

\

</div>

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">快捷键</span>                  | ot;;">功能</span>                    |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向右移动一个字符</span>        |
| + f</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向左移动一个字符</span>        |
| + b</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">向右移动一个词</span>          |
| + f</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">向左移动一个词</span>          |
| + b</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向下移动一行</span>            |
| + n</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向上移动一行</span>            |
| + p</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向下滚屏</span>                |
| + v</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">向上滚屏</span>                |
| + v</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">换行</span>                    |
| + m</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向上插入空行并缩进</span>      |
| + o</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向下插入空行并缩进</span>      |
| + l</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向右删除一个字符</span>        |
| + d</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">向左删除一个字符</span>        |
| + o</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">向左语法删除</span>            |
| + Shift + n</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">向右语法删除</span>            |
| + Shift + m</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">删除当前行</span>              |
| + Shift + h l</span>                 |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">删除光标后面的内容</span>      |
| + k</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">撤销</span>                    |
| + /</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">重做</span>                    |
| + Shift + /</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">开启/关闭                      |
| + Space</span>                       | 选中状态</span>                      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">剪切</span>                    |
| + w</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">复制</span>                    |
| + w</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">粘贴</span>                    |
| + y</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">在粘贴列表中选择</span>        |
| + y</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Tab</span>                     | ot;;">缩进</span>                    |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">补全</span>                    |
| + /</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">高级粘贴拷贝</span>            |
| + Alt + h</span>                     |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">记忆当前的位置</span>          |
| + Shift + .</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">跳到记忆位置</span>            |
| + Shift + ,</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向前搜索</span>                |
| + s</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">向后搜索</span>                |
| + r</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">替换文本</span>                |
| + Shift + %</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">正则替换</span>                |
| + Alt + Shift + %</span>             |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+

### <span style="font-family: &quot;Verdana&quot;;">窗口命令</span> {#窗口命令 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">快捷键</span>                  | ot;;">功能</span>                    |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">纵向分屏</span>                |
| + c v</span>                         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">横向分屏</span>                |
| + c h</span>                         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">切换选中窗口</span>            |
| + x o</span>                         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">关闭除当前窗口外的其他窗口</span> |
| + x ;</span>                         |                                      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">单窗口切换隐藏</span>          |
| + Alt + o</span>                     |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+

### <span style="font-family: &quot;Verdana&quot;;"></span> {#section-2 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

### <span style="font-family: &quot;Verdana&quot;;">标签命令</span> {#标签命令 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

\

</div>

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">快捷键</span>                  | ot;;">功能</span>                    |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">选择左边的标签</span>          |
| + 7</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">选择右边的标签</span>          |
| + 8</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">选择最左边的标签</span>        |
| + Shift + 7</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">选择最右边的标签</span>        |
| + Shift + 8</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">选择上一个模式</span>          |
| + 9</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">选择下一个模式</span>          |
| + 0</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">删除当前标签</span>            |
| + ;</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">删除当前标签以及所属的窗口</span> |
| + ‘</span>                           |                                      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">删除除当前标签以外的其他标签</span> |
| + q</span>                           |                                      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Win                            | ot;;">删除当前模式的所有标签</span>  |
| + Shift + q</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+

### <span style="font-family: &quot;Verdana&quot;;">文件管理器命令</span> {#文件管理器命令 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">快捷键</span>                  | ot;;">功能</span>                    |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">j</span>                       | ot;;">向下移动</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">k</span>                       | ot;;">向上移动</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">n</span>                       | ot;;">下个目录</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">p</span>                       | ot;;">上个目录</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">f</span>                       | ot;;">打开文件夹</span>              |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">‘</span>                       | ot;;">返回上一层目录</span>          |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Space</span>                   | ot;;">向下滚屏</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">e</span>                       | ot;;">向上滚屏</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">4</span>                       | ot;;">批量重命名</span>              |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">r</span>                       | ot;;">重命名</span>                  |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">7</span>                       | ot;;">移动到最后一个文件</span>      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">8</span>                       | ot;;">移动到第一个文件</span>        |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">E</span>                       | ot;;">Touch                          |
|                                      | 命令</span>                          |
| </div>                               |                                      |
|                                      | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">w</span>                       | ot;;">打开批量编辑模式</span>        |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">W</span>                       | ot;;">查找文件</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">J</span>                       | ot;;">跳到某个文件路径</span>        |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">;</span>                       | ot;;">字母导航模式切换</span>        |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">,</span>                       | ot;;">比较文件</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Alt                            | ot;;">切换隐藏文件模式</span>        |
| + o</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">f</span>                       | ot;;">二进制打开文件</span>          |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">K</span>                       | ot;;">用Emacs程序打开文件</span>     |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">\[</span>                      | ot;;">用当前环境打开文件</span>      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">t</span>                       | ot;;">选择全部文件</span>            |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Shift                          | ot;;">取消所有文件的选中状态</span>  |
| + u</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">m</span>                       | ot;;">选中当前文件</span>            |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">u</span>                       | ot;;">取消当前选中文件</span>        |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">\*                             | ot;;">按照输入的正则表达式搜索匹配文件</span> |
| .</span>                             |                                      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">C</span>                       | ot;;">拷贝选中文件</span>            |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">R</span>                       | ot;;">移动或者重命名文件</span>      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+

### <span style="font-family: &quot;Verdana&quot;;"></span> {#section-3 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

### <span style="font-family: &quot;Verdana&quot;;">W3M浏览器命令</span> {#w3m浏览器命令 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

\

</div>

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">快捷键</span>                  | ot;;">功能</span>                    |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">j</span>                       | ot;;">向下移动</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">k</span>                       | ot;;">向上移动</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Tab</span>                     | ot;;">跳到下一个链接</span>          |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Shift                          | ot;;">跳到上一个链接</span>          |
| + Tab</span>                         |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">g</span>                       | ot;;">在当前页面打开链接</span>      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Shift                          | ot;;">在新标签中打开链接</span>      |
| + g</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">f</span>                       | ot;;">在当前标签打开链接</span>      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">o</span>                       | ot;;">在新标签中打开链接</span>      |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Space</span>                   | ot;;">向下滚屏</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">e</span>                       | ot;;">向上滚屏</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">&lt;</span>                    | ot;;">向左滚动</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">&gt;</span>                    | ot;;">向右滚动</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Shift                          | ot;;">后退</span>                    |
| + b</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Shift                          | ot;;">前进</span>                    |
| + f</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">y</span>                       | ot;;">递归克隆当前光标处的网站</span> |
|                                      |                                      |
| </div>                               |                                      |
|                                      | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">-</span>                       | ot;;">自动转换当前的网页到           |
|                                      | org 笔记格式</span>                  |
| </div>                               |                                      |
|                                      | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">m</span>                       | ot;;">选择右边的标签</span>          |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">n</span>                       | ot;;">选择左边的标签</span>          |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">移动当前标签到左边</span>      |
| + Alt + 7</span>                     |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">移动当前标签到右边</span>      |
| + Alt + 8</span>                     |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">删除左边的标签</span>          |
| + Shift + 7</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Ctrl                           | ot;;">删除右边的标签</span>          |
| + Shift + 8</span>                   |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">6</span>                       | ot;;">保存标签</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">7</span>                       | ot;;">恢复标签</span>                |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">9</span>                       | ot;;">自动安装当前光标处的elisp插件</span> |
|                                      |                                      |
| </div>                               |                                      |
|                                      | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">/</span>                       | ot;;">下一个表格处</span>            |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">L</span>                       | ot;;">提交表格内容</span>            |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">Shift                          | ot;;">用google浏览器打开链接</span>  |
| + m</span>                           |                                      |
|                                      | </div>                               |
| </div>                               |                                      |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">\_</span>                      | ot;;">拷贝选中区域的所有链接</span>  |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">&</span>                       | ot;;">编辑EmacsWiki页面</span>       |
|                                      |                                      |
| </div>                               | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">\*</span>                      | ot;;">查看EmacsWiki页面的修改历史</span> |
|                                      |                                      |
| </div>                               |                                      |
|                                      | </div>                               |
+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Verdana&qu | style="font-family: &quot;Verdana&qu |
| ot;;">“</span>                       | ot;;">查看EmacsWiki最近修改记录</span> |
|                                      |                                      |
| </div>                               |                                      |
|                                      | </div>                               |
+--------------------------------------+--------------------------------------+

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">\# 本文采用</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[CC协议](http://creativecommons.org/licenses/by/2.5/cn/)</span><span
style="font-family: &quot;Verdana&quot;;">进行授权，转载本文请注明</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[本文链接](http://wowubuntu.com/install-and-use-deepin-emacs-under-linux-deepin.html)</span><span
style="font-family: &quot;Verdana&quot;;">。/ 1 条留言</span>

</div>

------------------------------------------------------------------------

<span style="font-family: &quot;Verdana&quot;;">- </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Twitter](http://twitter.com/ubuntu_tips)</span><span
style="font-family: &quot;Verdana&quot;;"> / </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[微博](http://t.sina.com.cn/utips)</span><span
style="font-family: &quot;Verdana&quot;;"> / </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[问答](http://wowubuntu.com/ask)</span><span
style="font-family: &quot;Verdana&quot;;"> / </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[投稿](http://wowubuntu.com/submit)</span><span
style="font-family: &quot;Verdana&quot;;"> / </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[加入我们](http://wowubuntu.com/join)</span><span
style="font-family: &quot;Verdana&quot;;"> wow0slx6bcs721xo1udcc</span>\

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">- 高性价比 </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Ubuntu
VPS](http://wowubuntu.com/vps.html)</span><span
style="font-family: &quot;Verdana&quot;;"> / 本站架设于</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[ PhotonVPS](http://www.photonvps.com/billing/aff.php?aff=129)</span><span
style="font-family: &quot;Verdana&quot;;"> / 定制 </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Ubuntu
T-Shirt](http://tto.me/kfstee)</span>

</div>
