---
layout: post
title: "使用 Cygwin/mintty 代替 SecureCRT"
date: '2013-04-11T15:43:00.000+08:00'
author: Wenh Q
tags:
modified_time: '2013-04-11T15:44:09.302+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-8291617456949718047
blogger_orig_url: http://binaryware.blogspot.com/2013/04/cygwinmintty-securecrt.html
---


  

**使用 Cygwin/mintty 代替 SecureCRT**

Published on
[LinuxTOY](http://linuxtoy.org/archives/use-cygwin-mintty-instead-of-securecrt.html)
| shared via [feedly](http://www.feedly.com)

[cygwin](http://cygwin.com) 是 MS-Windows 一个程序，它提供一套 POSIX
虚拟环境，包括但不限于： POSIX C API，shell 及大多数著名命令行程序。

通过各种小工具的自由组合使用，它可以替代 SSH 协议远程登录 GUI 工具
SecureCRT 。

原理：

    MS-Windows (win) -- 跳板机 (jumper) -- 目标机器   

-   在踏板机上 启动 openssh server
-   在 win 上运行 autossh ，在 win 和 jumper 之间建一个持久的 TCP
    连接，实现 SOCKS5 代理
-   在 win 上使用 openssh 通过 jumper 连接到目标机器

实施步骤

使用 cygwin setup.exe 安装以下包

    net   - nc   - openssh   - ssh    editors   - vim  

以一个名为 bot 的用户为例，配置 home 目录

    ln -s /cygdrive/c/Users/bot /home/  mkdir -p ~/bin  

ssh 客户端配置 ~/.ssh/config

    GSSAPIAuthentication no  ConnectTimeout 5  KeepAlive yes  ServerAliveInterval 60  Compression yes  CompressionLevel 5  ForwardAgent yes    Host from="*.exmaple.com"    User bot    Port 22    ForwardAgent yes    ProxyCommand /bin/nc -x 127.0.0.1:7070 %h %p  

当使用 ssh 连接以 [exmaple.com](http://exmaple.com)
为域名后缀结束的主机时，它将通过 SOCKS5 代理
[127.0.0.1:7070](http://127.0.0.1:7070) 连接。

配置 bash ~/.bash_profile

    ...  export PATH=$PATH:$HOME/bin    bash ~/bin/auto-start-ssh-agent.sh  source ~/bin/auto-config-ssh-agent-env.sh  

编写实现 SOCKS5 代理脚本 ~/bin/start-jumper-daemon.sh

    #!/usr/bin/env bash  autossh -M20000 -f -C -D 7070 -N -q -A -p 22 跳板机用户@跳板机IP地址  

执行这个脚本会启动两个后台进程，一个进程在 win 和跳板机之间创建一个持久
TCP 连接， 另一个监控，如果出错则自动重连。一般每次开机后执行一次即可。

ssh-agent 配置 ~/bin/auto-start-ssh-agent.sh

    #!/usr/bin/env bash    SSH_AUTH_SOCK_DEFAULT=/tmp/ssh-agent.sock    if ps aux | grep ssh-agent &gt; /dev/null; then    :  else    rm $SSH_AUTH_SOCK_DEFAULT &gt; /dev/null    ssh-agent -a $SSH_AUTH_SOCK_DEFAULT  fi    source ~/bin/auto-config-ssh-agent-env.sh  ssh-add -L &gt; /dev/null || ssh-add  

ssh-agent 配置 II ~/bin/auto-config-ssh-agent-env.sh

    #!/usr/bin/env bash    export SSH_AUTH_SOCK=/tmp/ssh-agent.sock  export SSH_AGENT_PID=`ps aux |grep ssh-agent |awk '{print $1}'`  

说明

-   ssh-agent 启动后，会设置 `SSH_AUTH_SOCK` 和 `SSH_AGENT_PID`
    两个环境变量
-   ssh 通过检测 `SSH_AUTH_SOCK` 和 `SSH_AGENT_PID`
    两个环境变量判断是否存在 ssh-agent 后台进程，如果存在 则使用
    ssh-agent 完成自动认证，否则提示用户输入密码
-   ssh-agent 启动后设置的环境变量仅在 当前 mintty
    窗口会话存在，新启动的窗口不会继承或者自动检测
-   auto-config-ssh-agent-env.sh 通过硬编码 ssh-agent unix domain socket
    路径，实现动态自动设置 环境变量

参考链接

-   [SSH 快速指南 -
    跳板设置](https://github.com/shuge/man/blob/master/tools/ssh-quick-guide.md#using-proxyjumper))

分类: [Cli](http://linuxtoy.org/category/cli "View all posts in Cli"),
[Network](http://linuxtoy.org/category/apps/network "View all posts in Network"),
[Scripts](http://linuxtoy.org/category/apps/scripts "View all posts in Scripts"),
[Terminal
Emulation](http://linuxtoy.org/category/apps/terminal-emulation "View all posts in Terminal Emulation"),
[Tips](http://linuxtoy.org/category/tips "View all posts in Tips"),
[Tools](http://linuxtoy.org/category/apps/tools "View all posts in Tools")
|
[永久链接](http://linuxtoy.org/archives/use-cygwin-mintty-instead-of-securecrt.html)
| [收藏到
del.icio.us](http://delicious.com/save?url=http://linuxtoy.org/archives/use-cygwin-mintty-instead-of-securecrt.html&title=%E4%BD%BF%E7%94%A8%20Cygwin/mintty%20%E4%BB%A3%E6%9B%BF%20SecureCRT)
| [Email
给好友](mailto:?Subject=Check+This+Out&body=I+think+you'll+like+this:+http://linuxtoy.org/archives/use-cygwin-mintty-instead-of-securecrt.html)
|
[无评论](http://linuxtoy.org/archives/use-cygwin-mintty-instead-of-securecrt.html#comments)
| [捐助本站](http://linuxtoy.org/faq/donate)



Feedly. Feed your mind.
[http://www.feedly.com](http://www.feedly.com/#mail)
