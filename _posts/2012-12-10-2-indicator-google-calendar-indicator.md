--- layout: post title: '2 个 Indicator: Google-calendar-indicator 及
Indicator-system-monitor' date: '2012-12-10T21:37:00.001+08:00' author:
Wenh Q tags: - linux modified\_time: '2013-09-30T14:48:49.926+08:00'
blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-7762819749591517768
blogger\_orig\_url:
http://binaryware.blogspot.com/2012/12/2-indicator-google-calendar-indicator.html
--- [2 个 Indicator: Google-calendar-indicator 及
Indicator-system-monitor](http://wowubuntu.com/indicator.html):

![enter image description
here](http://screencloud.net/img/screenshots/9f6e1e6b9aaa8feaf678a8ced9e9b3ee.png)

**indicator-system-monitor**

源如下

`sudo add-apt-repository ppa:alexeftimie/ppa`

你可以直接下载:[点此下载](https://launchpad.net/~alexeftimie/+archive/ppa/+files/indicator-sysmonitor_0.4.2_all.deb)

这个可以参考这个文章发过的，不过今天更新了。

用法有点改变

mkdir -p \~/任意位置或文件夹 && cd \~/任意位置或文件夹

wget http://webupd8.googlecode.com/files/sysmon\_0.1.tar.gz

tar -xvf sysmon\_0.1.tar.gz

![如图所示](http://screencloud.net/img/screenshots/ce05ad77a0b32e4f32dfef6079e1f8b0.png)

然后 新建

sensor 可以是你取的名字（必须是英语） 如图我的是 mynet

Description 可以是你的描述 如图我的是 网速浮动条

Command 必须填写 \$HOME/任意位置或文件夹/sysmon

最后保存

然后删除原有的cpu:{cpu}men:{men}

替换成你的 比如我的 {mynet}

+++++++++++++++++++++++++++++

你还可以配置一下脚本，来选择是否要显示 CPU 或 内存使用状态

    gedit /HOME/你的名字/任意位置或文件夹/sysmon

相应选项如下

    #settings:
    netspeed=true
    ram=true
    cpu=true

++++++++++++++++++++

最后几段

---|---|---|---|---|---| The Indicator Sysmonitor actual output -
=================================================================

echo \$(if \[ \$ram = true \]; then echo 比如改成内存:
\$memusedpercent%; fi) \$(if \[ \$cpu = true \]; then echo
比如改成处理器: \$cpuused%; fi) \$(if \[ \$netspeed = true \]; then
echo比如改成上行: \$upkbmb \$upunit 比如改成下行: \$downkbmb \$downunit;
fi)

+++++++++++++++++++++++++

**Google-calendar-indicator**

可以直接整合google calendar到indicator里

源如下

    sudo add-apt-repository ppa:alexeftimie/ppa

你也可以直接下载

[点此下载](https://launchpad.net/~atareao/+archive/atareao/+files/calendar-indicator_0.1.0.0-1ubuntu1_all.deb)

![enter image description
here](http://screencloud.net/img/screenshots/e5ebb1d56075a7bad24d78cc0d17bf6d.png)

-- 在 [微博上关注我们 @utips](http://t.sina.com.cn/utips)\
\

------------------------------------------------------------------------

\
\#
本文采用[CC协议](http://creativecommons.org/licenses/by/2.5/cn/)进行授权，转载本文请注明[本文链接](http://wowubuntu.com/indicator.html "Permalink")[。/
5 条留言\
\
\
-]()[Twitter](http://twitter.com/ubuntu_tips)\
/ [问答](http://wowubuntu.com/ask)\
/ [投稿](http://wowubuntu.com/submit)\
/ [加入我们](http://wowubuntu.com/join) wow0slx6bcs721xo1udcc\
- 高性价比 [Ubuntu VPS](http://wowubuntu.com/vps.html) /
本站架设于[PhotonVPS](http://www.photonvps.com/billing/aff.php?aff=129)
