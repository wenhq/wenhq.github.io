--- layout: post title: ubuntu下安装配置minicom date:
'2013-07-23T15:47:00.003+08:00' author: Wenh Q tags: modified\_time:
'2013-07-23T15:47:35.595+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-6095485273296364498
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/07/ubuntuminicom.html ---
<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[\
ubuntu下安装配置minicom](http://blog.csdn.net/yinjiabin/article/details/7543111)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding-bottom: 8pt; padding-left: 0; padding-right: 0; padding-top: 0;">

<span style="font-family: &quot;Verdana&quot;;">于 12-5-7 通过
</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[CSDN博客推荐文章](http://blog.csdn.net/)</span><span
style="font-family: &quot;Verdana&quot;;"> 作者：yinjiabin</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">Minicom是linux下串口通信的软件，下面讲下ubuntu
Minicom的安装和配置。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">安装：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">sudo apt－get install
minicom</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">或在新立得软件包管理器中搜索“minicom”，安装搜索到的minicom</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">配置：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">在使用minicom之前,
首先要保证你对串口有读/写的权限. 串口COM1对应ttyS0,
COM2对应ttyS1.</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">使用这个命令来看你对COM1的权限:
 </span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">\$ ls -l
/dev/ttyS0</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">1. 运行\$ sudo
minicom</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">2. 先按下Ctrl + a, 放开,
再按o, 出现配置菜单.</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">3. 选择 Serial port
setup, 此时所示图标在“Change which
setting”中，键入“A”，此时光标移到第A项对应处：串口COM1对应ttyS0,
COM2对应ttyS1.</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">对波特率，数据位和停止位进行配置，键入“E”，波特率选为115200
8N1 (奇偶校验无, 停止位1),</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">硬/软件流控制分别键入“F”“G”并且都选NO.</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">在确认配置正确之后，可键入回车返回上级配置界面，并将其保存为默认配置。（即save
setup as
dfl），之后重启minicom是刚才配置生效，在连上开发板的串口线后，就可在minicom中打印正确的串口信息了。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">发送文件：</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">在MINICOM中使用ZMODem协议发送文件：运行配置好的MINICOM，先按ctrl-a然后按下s键。选择ZMODem协议回车。然后用箭头和双击空格选择要发送的文件，然后按回车发送。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">hursday, May 24th,
2007</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">因为经常用到串口，所以要在Ubuntu下发掘串口终端程序，之前用过gtkterm，印像不错。今天发现minicom，原以为是个简洁好用的终端程序，却发现被它的名字给忽悠了，这个minicom功能多多，设置也多，不过多个选择总归是好事。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">自然是先要sudo apt-get
install minicom</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">运行之，这是字符界面的程序，一上来minicom就把我的串口检测到
/dev/tty8了（不知它怎么检测到这个了），重新运行minicom
-s，进入设置菜单，赫赫，真是丰富的选项。还好，只需要改串口为/dev/ttyS0，设置正确波特率，就ok了，在连接过程中Ctrl-A激活菜单，再按q可以退出（似乎有点麻烦的说）。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; height: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;"></span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span
style="font-family: &quot;Verdana&quot;;">这个程序一定是年代久远，缺省情况下会自动发出modem初始化序列，所以使用minicom
-o来运行比较好，可以跳过这个modem初始化。</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">作者：yinjiabin
发表于2012-5-7 17:09:46 </span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[原文链接](http://blog.csdn.net/yinjiabin/article/details/7543111)</span>

</div>

<div
style="color: black; direction: ltr; font-family: &quot;Arial&quot;; font-size: 11pt; margin-bottom: 0; margin-left: 7.5pt; margin-right: 7.5pt; margin-top: 0; padding: 0;">

<span style="font-family: &quot;Verdana&quot;;">阅读：13 评论：0
</span><span
style="color: #0000ee; font-family: &quot;Verdana&quot;; text-decoration: underline;">[查看评论](http://blog.csdn.net/yinjiabin/article/details/7543111#comments)</span>

</div>
