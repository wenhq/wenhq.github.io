--- 
layout: post 
title: "使用 Emacs 微博" 
date:'2013-07-22T13:30:00.004+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-10-25T13:55:31.126+08:00' 
thumbnail: https://lh5.googleusercontent.com/0dUlLXO2NoNEBOXTZ82aW9kXNL9iEBnCgAbyp9j84fHh91-USm3EgkXyR1e\_wMrUGHGmsYCCv2lLXc7LhK50Qyqw1OWotrPDb7oUvPew9zfad-t22N8=s72-c
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-2410143258987875953
blogger\_orig\_url: http://binaryware.blogspot.com/2013/07/emacs-qiuwenhutigatbloggercom.html
---

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[

使用 Emacs 微博](http://emacser.com/weibo.htm)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">于 12-5-17 通过
</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[Emacs中文网](http://emacser.com/)</span><span
style="font-family: &quot;Verdana&quot;;"> 作者：bigclean</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="color: blue; font-family: &quot;Verdana&quot;;">作者:
</span><span
style="color: blue; font-family: &quot;Verdana&quot;; font-weight: bold; text-decoration: underline;">[Austin\_\_\_\_\_](http://emacser.com/about.htm#austin)</span>

</div>

### <span style="font-family: &quot;Verdana&quot;;">简介</span> {#简介 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">“使用 Emacs
的微博”（weibo.emacs)是一个在 Emacs 上使用的微博客户端。它使用 Elisp
语言编写，提供了察看时间线，察看微博及评论，察看图片，发表和转发微博，发表评论和回复的功能。它基于
Emacs，可以在 Windows, Linux 和 Mac 上使用。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

### <span style="font-family: &quot;Verdana&quot;;">功能</span> {#功能 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

#### <span style="font-family: &quot;Verdana&quot;;">察看时间线</span> {#察看时间线 style="color: black; direction: ltr; font-family: "Arial"; font-size: 12pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">提供察看以下时间线的功能</span>

</div>

1.  <span style="font-family: &quot;Verdana&quot;;">我的关注</span>
2.  <span style="font-family: &quot;Verdana&quot;;">我的微博</span>
3.  <span style="font-family: &quot;Verdana&quot;;">提到我的</span>
4.  <span style="font-family: &quot;Verdana&quot;;">谁在说</span>
5.  <span style="font-family: &quot;Verdana&quot;;">我的评论</span>
6.  <span style="font-family: &quot;Verdana&quot;;">收到评论</span>

#### <span style="font-family: &quot;Verdana&quot;;">察看微博和评论</span> {#察看微博和评论 style="color: black; direction: ltr; font-family: "Arial"; font-size: 12pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 12.8pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;;">提供察看某一条微博和评论的功能</span>

</div>

#### <span style="font-family: &quot;Verdana&quot;;">发表微博，发表评论和回复评论</span> {#发表微博发表评论和回复评论 style="color: black; direction: ltr; font-family: "Arial"; font-size: 12pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;;">提供发表新微博，对某一条微薄发表评论及回复评论的功能</span>

</div>

### <span style="font-family: &quot;Verdana&quot;;">使用方法</span> {#使用方法 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

#### <span style="font-family: &quot;Verdana&quot;;">安装</span> {#安装 style="color: black; direction: ltr; font-family: "Arial"; font-size: 12pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

##### <span style="font-family: &quot;Verdana&quot;;">下载</span> {#下载 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">从</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[项目主页](https://github.com/austin-----/weibo.emacs)</span><span
style="font-family: &quot;Verdana&quot;;">下载最新的安装包（或者通过 git
更新到最新）。</span>

</div>

##### <span style="font-family: &quot;Verdana&quot;;">安装</span> {#安装-1 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

1.  <span
    style="font-family: &quot;Verdana&quot;;">将安装包解压到某一目录</span>
2.  <span
    style="font-family: &quot;Verdana&quot;;">将该目录添加到load-path:</span>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="color: #99cc00; font-family: &quot;Verdana&quot;; text-decoration: underline; vertical-align: super;">[?](http://www.ericbess.com/ericblog/2008/03/03/wp-codebox/#examples)</span><span
style="font-family: &quot;Verdana&quot;;">View Code LISP</span>

</div>

[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)[](https://www.blogger.com/blogger.g?blogID=4961947611491238191#)


+--------------------------------------+--------------------------------------+
| <div                                 | <div                                 |
| style="color: black; direction: ltr; | style="color: black; direction: ltr; |
|  font-family: &quot;Arial&quot;; fon |  font-family: &quot;Arial&quot;; fon |
| t-size: 11pt; margin: 0; padding: 0; | t-size: 11pt; margin: 0; padding: 0; |
| ">                                   | ">                                   |
|                                      |                                      |
| <span                                | <span                                |
| style="font-family: &quot;Courier Ne | style="color: #66cc66; font-family:  |
| w&quot;;">1
                         | &quot;Verdana&quot;;">(</span><span  |
| 2</span>                             | style="font-family: &quot;Verdana&qu |
|                                      | ot;;">add-to-</span><span            |
| </div>                               | style="color: #b1b100; font-family:  |
|                                      | &quot;Verdana&quot;;">list</span><sp |
|                                      | an                                   |
|                                      | style="font-family: &quot;Verdana&qu |
|                                      | ot;;"> 'load-path                    |
|                                      | </span><span                         |
|                                      | style="color: red; font-family: &quo |
|                                      | t;Verdana&quot;;">"目录路径"</span><span |
|                                      |                                      |
|                                      | style="color: #66cc66; font-family:  |
|                                      | &quot;Verdana&quot;;">)</span><span  |
|                                      | style="font-family: &quot;Verdana&qu |
|                                      | ot;;">
                              |
|                                      | </span><span                         |
|                                      | style="color: #66cc66; font-family:  |
|                                      | &quot;Verdana&quot;;">(</span><span  |
|                                      | style="font-family: &quot;Verdana&qu |
|                                      | ot;;">require                        |
|                                      | 'weibo</span><span                   |
|                                      | style="color: #66cc66; font-family:  |
|                                      | &quot;Verdana&quot;;">)</span>       |
|                                      |                                      |
|                                      | </div>                               |
+--------------------------------------+--------------------------------------+

##### <span style="font-family: &quot;Verdana&quot;;">配置</span> {#配置 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 12.8pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;;">不需要配置，可直接使用</span>

</div>

#### <span style="font-family: &quot;Verdana&quot;;">使用</span> {#使用 style="color: black; direction: ltr; font-family: "Arial"; font-size: 12pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

##### <span style="font-family: &quot;Verdana&quot;;">开始</span> {#开始 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">通过命令 weibo-timeline
开始察看时间线: M-x weibo-timeline</span>

</div>

##### <span style="font-family: &quot;Verdana&quot;;">授权</span> {#授权 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;;">第一次使用时，将会自动跳转到微博应用授权的页面，登录后确认授权，然后将提示的
pin 码输回 Emacs 的 mini-buffer 即可。</span>

</div>

##### <span style="font-family: &quot;Verdana&quot;;">时间线界面</span> {#时间线界面 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">屏幕的最顶端，会出现如下三排提示：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">微博：我的关注(a)
我的微博(i) 提到我的(@) 谁在说(w) 我的评论(o) 收到评论(c)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">命令：发表微博(P)
察看(L) 转发(T) 评论(C) 回复(R)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">操作：新消息(g) 刷新(r)
下一条（空格) 帮助(h) 退出(q)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">微博行包括了不同的时间线及它们的切换方法。括号内的按键将在当前窗口显示对应的时间线：如提到我的(@)，当按下@键时，将切换提到我的时间线。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">命令行包括了可以在时间线中使用的命令。除了发表微博外，其他命令都应将光标移到对应的微博或者评论上使用。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;;">操作行包括了可以在时间线中使用的其他命令，如获取新消息，移到下一条消息，以及退出等等。</span>

</div>

##### <span style="font-family: &quot;Verdana&quot;;">切换时间线</span> {#切换时间线 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;;">使用微博行所提示的按键进行切换。</span>

</div>

##### <span style="font-family: &quot;Verdana&quot;;">察看时间线</span> {#察看时间线-1 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">使用 Emacs
默认的组合键移动光标。此外p，n，b，f键可用来上下左右移动光标。当光标移动到某一条微博或评论时，可按L键察看其对应的微博和最新评论。当微博中有图片时，会在时间线中显示缩略图。将光标移到图片上，按Enter键，会在新窗口中打开原图（按q键退出图片察看）。其他命令如操作中所示。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0; text-align: center;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

![](https://lh5.googleusercontent.com/0dUlLXO2NoNEBOXTZ82aW9kXNL9iEBnCgAbyp9j84fHh91-USm3EgkXyR1e_wMrUGHGmsYCCv2lLXc7LhK50Qyqw1OWotrPDb7oUvPew9zfad-t22N8){width="722"
height="718"}

</div>

##### <span style="font-family: &quot;Verdana&quot;;">发表微博</span> {#发表微博 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">在时间线界面中按P，将出现名为“发表微博”的窗口。在此窗口中编辑你想要发表的微博。完成后，按

C-c

C-c(Ctrl-c,
Ctrl-c)提交微博。如果在编辑中想取消发表，按

C-c

C-d将关闭发表窗口（注意：此时你所编辑的内容将消失）。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0; text-align: center;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

![](https://lh3.googleusercontent.com/2TIqktPuoqgbajyp4Yhj5h74y-Sv1KkANjxrzQ5H5BuBDaLck3b4hFFfq9dvNKmqm09uzuY0FPkXVxakKVYG6MhUL_W39m9c17X7RlFsuvvOBCRza1M){width="722"
height="718"}

</div>

##### <span style="font-family: &quot;Verdana&quot;;">转发微博</span> {#转发微博 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;;">在时间线中，将光标移至某一条微博，按T将出现名为“转发微博”的窗口。此时操作与发表微博类似，完成编辑后，按

C-c

C-c提交微博，按

C-c

C-d取消。</span>

</div>

##### <span style="font-family: &quot;Verdana&quot;;">发表评论和回复</span> {#发表评论和回复 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">在时间线中，按”C”对当前光标所在的微博发表评论。此时将出现“发表评论”窗口，操作与发表微博相似：完成编辑后，按

C-c

C-c提交评论，按

C-c

C-d取消。在微博详情和评论时间线中，按R键可以对评论进行回复。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0; text-align: center;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

![](https://lh3.googleusercontent.com/MRDh2UzT_2Kk2V8TDgjuAwMcDj7Mpo0lGs9RxUZ7_SsRrvlFBjirwyBsGCPcHbaC86ST6AmXEvh5ry-74iQdk4y4fB7qS7VYpGmjC2wKtWMkyQoOlJo){width="722"
height="718"}

</div>

##### <span style="font-family: &quot;Verdana&quot;;">备注</span> {#备注 style="color: black; direction: ltr; font-family: "Arial"; font-size: 9pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span
style="font-family: &quot;Verdana&quot;;">注意并非所有命令都对所有时间线适用。比如你不能对微博进行回复和对评论进行转发。命令行将之包含当前时间线可用的命令。</span>

</div>

### <span style="font-family: &quot;Verdana&quot;;">问题和建议</span> {#问题和建议 style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">如果发现 bug
和有任何建议，请在</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[此处](https://github.com/austin-----/weibo.emacs/issues)</span><span
style="font-family: &quot;Verdana&quot;;">创建 bug
报告或者发邮件给我：</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[austiny.cn](http://austiny.cn/)</span><span
style="font-family: &quot;Verdana&quot;;">(at)</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[gmail.com](http://gmail.com/)</span>

</div>

#### ![](https://lh3.googleusercontent.com/6EswjGzuXKO_U5uFeKsgk_8IzW2j7qTZYBlsIOGfkb5uKyEojNoSUgTiciUBOlOAq2lC0sVf9t9AUgl3QZGmCiHO8sRGCiot3rwzj6lHUPwiceAHtnU){width="103" height="16"}<span style="font-family: &quot;Verdana&quot;;">相关日志</span> {#相关日志 style="color: black; direction: ltr; font-family: "Arial"; font-size: 12pt; font-weight: bold; line-height: 1.0; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 12.8pt; padding-left: 0; padding-right: 0; padding-top: 0pt; text-align: left;"}

1.  <span
    style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[在
    emacs 中使用 bing translate api
    实现高效翻译](http://emacser.com/bing.htm)</span><span
    style="font-family: &quot;Verdana&quot;;"> (6)</span>
2.  <span
    style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[windows
    平台下用 emacs 编辑
    evernote（部署篇）](http://emacser.com/evernote-edit.htm)</span><span
    style="font-family: &quot;Verdana&quot;;"> (2)</span>
3.  <span
    style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[致Emacs初学者](http://emacser.com/to-emacs-beginner.htm)</span><span
    style="font-family: &quot;Verdana&quot;;"> (122)</span>
4.  <span
    style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[用性感的尾巴highlight-tail标记最近的修改](http://emacser.com/highlight-tail.htm)</span><span
    style="font-family: &quot;Verdana&quot;;"> (45)</span>
5.  <span
    style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[用weblogger写WordPress博客](http://emacser.com/weblogger.htm)</span><span
    style="font-family: &quot;Verdana&quot;;"> (101)</span>

