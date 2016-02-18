--- layout: post title: Deepin Emacs 的安装和使用 date:
'2013-07-25T19:41:00.002+08:00' author: Wenh Q tags: modified\_time:
'2013-07-25T19:41:28.681+08:00' thumbnail:
https://lh5.googleusercontent.com/dPlEIB8cv3xWHv5jr6WjrOsE6F1FMlhAXVdEHybL1RvGhFux5Msq9D\_zjwMaX3yRGqnF2-YWrVQXeLBJxP5qJVn5VXkf1bazXvbHYMCI8VOp-DCl95c=s72-c
blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-4287459923087398737
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/07/deepin-emacs.html ---

[\
Deepin Emacs
的安装和使用](http://wowubuntu.com/install-and-use-deepin-emacs-under-linux-deepin.html)

于 12-8-1 通过 [Wow! Ubuntu](http://wowubuntu.com/) 作者：Bentutu.com

何为 Emacs？ {style="color: black; direction: ltr; font-family: "Arial"; font-size: 18pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 11.2pt; text-align: left;"}
------------

Emacs 是一个可自编程，自扩展的文本编辑器。Emacs 内置 Elisp
解释器和热替换机制，使它可以在运行时进行自我编程进化。

Emacs 最大的资源库：[EmacsWiki](http://www.emacswiki.org/)

[](http://www.emacswiki.org/)

Emacs 不但是一个文本编辑器，更是一个 Elisp 操作系统。通过 Elisp
扩展，它还具有以下功能：

    编辑器\
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
    ...

Deepin Emacs 特色 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 18pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}
-----------------

默认的 Emacs 的功能很少，Deepin Emacs 是在 Emacs24 开发版基础上集成了
Linux Deepin 开发者和项目负责人 [Andy
Stewart](http://www.emacswiki.org/emacs/AndyStewart) 的 Elisp
扩展而成的。Deepin Emacs
包括了丰富的插件，并且功能和按键都已经过优化调整，方便大家的使用。

您只需调用 deepin-emacs 就可以使用 Emacs 强大的功能，而不用天天折腾
Elisp 细节。

Deepin Emacs 的安装 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 18pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}
-------------------

在 Linux Deepin 上，您可以在 Linux Deepin 软件中心中搜索 deepin-emacs
进行安装，或打开终端，输入如下命令来安装：

sudo apt-get install deepin-emacs

其他 Debian 系列发行版本用户可以下载 .deb
格式安装包([点击下载](http://packages.linuxdeepin.com/deepin/pool/main/d/deepin-emacs/))，同时还需要自行安装
Emacs24 。

![](https://lh5.googleusercontent.com/dPlEIB8cv3xWHv5jr6WjrOsE6F1FMlhAXVdEHybL1RvGhFux5Msq9D_zjwMaX3yRGqnF2-YWrVQXeLBJxP5qJVn5VXkf1bazXvbHYMCI8VOp-DCl95c)常用快捷键 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 18pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 11.2pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

大家可以通过如下步骤来查看常用快捷键列表：

按下 Win 键（徽标键）+y，输入 catkeystoke.el，然后回车即可查看。

提示：查看时最好不要进行任何修改，否则 Deepin Emacs
将无法启动，此时您可以按下 Win 键（徽标键）+Alt+L
将其锁定，进入只读模式。

###  {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

### 全局命令 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

\

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

  ---------------------------- ----------------------------
  快捷键                       功能
  F5                           退出Emacs
  Alt + x                      输入Emacs命令
  F6                           锁屏
  F8                           当前文件位置
  F11                          切换全屏
  Win + y                      全局搜索
  Win + x z                    APT 搜索
  Win + F8                     进程管理器
  Win + n                      终端模拟器
  Ctrl + z y                   翻译当前的单词
  Ctrl + z i                   翻译输入的单词
  Ctrl + z Ctrl + z            W3M 浏览器
  Ctrl + c p d                 播放音乐目录
  Ctrl + c p f                 播放音乐文件
  Ctrl + c i                   登陆IRC
  Ctrl + c c                   日历
  Win + x g                    递归正则表达式搜索当前目录
  Ctrl + c p g                 切换到播放列表
  Win + Alt + x                切换到命令输入栏
  Ctrl + g                     终止Emacs命令
  Ctrl + g Ctrl + g Ctrl + g   强制终止Emacs命令
  ---------------------------- ----------------------------

###  {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

### 编辑命令 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

\

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

  ------------------------ --------------------
  快捷键                   功能
  Ctrl + f                 向右移动一个字符
  Ctrl + b                 向左移动一个字符
  Alt + f                  向右移动一个词
  Alt + b                  向左移动一个词
  Ctrl + n                 向下移动一行
  Ctrl + p                 向上移动一行
  Ctrl + v                 向下滚屏
  Alt + v                  向上滚屏
  Ctrl + m                 换行
  Ctrl + o                 向上插入空行并缩进
  Ctrl + l                 向下插入空行并缩进
  Ctrl + d                 向右删除一个字符
  Alt + o                  向左删除一个字符
  Alt + Shift + n          向左语法删除
  Alt + Shift + m          向右语法删除
  Alt + Shift + h l        删除当前行
  Ctrl + k                 删除光标后面的内容
  Ctrl + /                 撤销
  Ctrl + Shift + /         重做
  Ctrl + Space             开启/关闭 选中状态
  Ctrl + w                 剪切
  Alt + w                  复制
  Ctrl + y                 粘贴
  Alt + y                  在粘贴列表中选择
  Tab                      缩进
  Alt + /                  补全
  Win + Alt + h            高级粘贴拷贝
  Ctrl + Shift + .         记忆当前的位置
  Ctrl + Shift + ,         跳到记忆位置
  Ctrl + s                 向前搜索
  Ctrl + r                 向后搜索
  Alt + Shift + %          替换文本
  Ctrl + Alt + Shift + %   正则替换
  ------------------------ --------------------

### 窗口命令 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

  --------------- ----------------------------
  快捷键          功能
  Ctrl + c v      纵向分屏
  Ctrl + c h      横向分屏
  Ctrl + x o      切换选中窗口
  Ctrl + x ;      关闭除当前窗口外的其他窗口
  Win + Alt + o   单窗口切换隐藏
  --------------- ----------------------------

###  {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

### 标签命令 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

\

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

  ----------------- ------------------------------
  快捷键            功能
  Alt + 7           选择左边的标签
  Alt + 8           选择右边的标签
  Alt + Shift + 7   选择最左边的标签
  Alt + Shift + 8   选择最右边的标签
  Alt + 9           选择上一个模式
  Alt + 0           选择下一个模式
  Ctrl + ;          删除当前标签
  Ctrl + ‘          删除当前标签以及所属的窗口
  Win + q           删除除当前标签以外的其他标签
  Win + Shift + q   删除当前模式的所有标签
  ----------------- ------------------------------

### 文件管理器命令 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

  ----------- ----------------------------------
  快捷键      功能
  j           向下移动
  k           向上移动
  n           下个目录
  p           上个目录
  f           打开文件夹
  ‘           返回上一层目录
  Space       向下滚屏
  e           向上滚屏
  4           批量重命名
  r           重命名
  7           移动到最后一个文件
  8           移动到第一个文件
  E           Touch 命令
  w           打开批量编辑模式
  W           查找文件
  J           跳到某个文件路径
  ;           字母导航模式切换
  ,           比较文件
  Alt + o     切换隐藏文件模式
  f           二进制打开文件
  K           用Emacs程序打开文件
  [           用当前环境打开文件
  t           选择全部文件
  Shift + u   取消所有文件的选中状态
  m           选中当前文件
  u           取消当前选中文件
  \* .        按照输入的正则表达式搜索匹配文件
  C           拷贝选中文件
  R           移动或者重命名文件
  ----------- ----------------------------------

###  {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 12pt; text-align: left;"}

### W3M浏览器命令 {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

\

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)\

  ------------------ -----------------------------------
  快捷键             功能
  j                  向下移动
  k                  向上移动
  Tab                跳到下一个链接
  Shift + Tab        跳到上一个链接
  g                  在当前页面打开链接
  Shift + g          在新标签中打开链接
  f                  在当前标签打开链接
  o                  在新标签中打开链接
  Space              向下滚屏
  e                  向上滚屏
  \<                 向左滚动
  \>                 向右滚动
  Shift + b          后退
  Shift + f          前进
  y                  递归克隆当前光标处的网站
  -                  自动转换当前的网页到 org 笔记格式
  m                  选择右边的标签
  n                  选择左边的标签
  Ctrl + Alt + 7     移动当前标签到左边
  Ctrl + Alt + 8     移动当前标签到右边
  Ctrl + Shift + 7   删除左边的标签
  Ctrl + Shift + 8   删除右边的标签
  6                  保存标签
  7                  恢复标签
  9                  自动安装当前光标处的elisp插件
  /                  下一个表格处
  L                  提交表格内容
  Shift + m          用google浏览器打开链接
  \_                 拷贝选中区域的所有链接
  &                  编辑EmacsWiki页面
  \*                 查看EmacsWiki页面的修改历史
  “                  查看EmacsWiki最近修改记录
  ------------------ -----------------------------------

\#
本文采用[CC协议](http://creativecommons.org/licenses/by/2.5/cn/)进行授权，转载本文请注明[本文链接](http://wowubuntu.com/install-and-use-deepin-emacs-under-linux-deepin.html)。/
1 条留言

* * * * *

- [Twitter](http://twitter.com/ubuntu_tips) /
[微博](http://t.sina.com.cn/utips) / [问答](http://wowubuntu.com/ask) /
[投稿](http://wowubuntu.com/submit) /
[加入我们](http://wowubuntu.com/join) wow0slx6bcs721xo1udcc\

- 高性价比 [Ubuntu VPS](http://wowubuntu.com/vps.html) /
本站架设于[ PhotonVPS](http://www.photonvps.com/billing/aff.php?aff=129) /
定制 [Ubuntu T-Shirt](http://tto.me/kfstee)
