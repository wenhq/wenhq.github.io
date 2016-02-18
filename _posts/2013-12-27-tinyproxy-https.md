--- layout: post title: "利用 Tinyproxy 搭建 HTTP(S) 代理" date:
'2013-12-27T16:37:00.001+08:00' author: Wenh Q tags: modified\_time:
'2013-12-27T16:37:44.942+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-3291973444784695463
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/12/tinyproxy-https.html ---
<div dir="ltr">

<div class="gmail_quote">

<div style="font-family: Arial,sans-serif; width: 100%;">

+--------------------------------------------------------------------------+
| <div align="center">                                                     |
|                                                                          |
| +----------------------------------------------------------------------- |
| ---+                                                                     |
| | <div dir="ltr">                                                        |
|    |                                                                     |
| |                                                                        |
|    |                                                                     |
| | [利用 Tinyproxy 搭建 HTTP(S)                                             | |
|                                                                          |
| | 代理](https://linuxtoy.org/archives/tinyproxy.html)                      |
|  |                                                                       |
| |                                                                        |
|    |                                                                     |
| | </div>                                                                 |
|    |                                                                     |
| |                                                                        |
|    |                                                                     |
| | <div style="margin-top: 15px;">                                        |
|    |                                                                     |
| |                                                                        |
|    |                                                                     |
| | 通过 [LinuxTOY](https://linuxtoy.org/)                                   |
|  |                                                                       |
| |                                                                        |
|    |                                                                     |
| | </div>                                                                 |
|    |                                                                     |
| |                                                                        |
|    |                                                                     |
| | <div dir="ltr"                                                         |
|    |                                                                     |
| | style="font-size: 14px; line-height: 20px; margin-top: 15px;">         |
|    |                                                                     |
| |                                                                        |
|    |                                                                     |
| | 在天朝每月总有那么几天访问网站不够顺畅，你懂的。虽然 可以使用 [Google    | |
|                                                                          |
| | Translate](http://toy.linuxtoy.org/2013/11/13/proxy-web-page-with-goog |
| le |                                                                     |
| | -translate.html)                                                       |
|    |                                                                     |
| | 来应个急，但并非 100% 有效，比如最近我在访问                             | |
|                                                                          |
| | [wireshark.org](http://wireshark.org/) 时就遇到了问题。\                 | |
|                                                                          |
| | 好在我们还能搭建 HTTP(S) 代理。目前市面上有许多 HTTP(S) 代理             | |
|                                                                          |
| | 软件可以选择，我们将使用                                                 | |
|                                                                          |
| | [Tinyproxy](https://banu.com/tinyproxy/)。我们选择 Tinyproxy，           | |
|                                                                          |
| | 是因为它足够简单、小巧，且无需过多的配置。\                              | |
|                                                                          |
| | #### 安装 Tinyproxy                                                      |
|  |                                                                       |
| |                                                                        |
|    |                                                                     |
| | 在 Debian 中，通过执行以下指令可以安装 Tinyproxy：\                      | |
|                                                                          |
| | apt-get install tinyproxy\                                             |
|    |                                                                     |
| | #### 配置 Tinyproxy                                                      |
|  |                                                                       |
| |                                                                        |
|    |                                                                     |
| | Tinyproxy 的配置文件默认位于 `/etc/tinyproxy.conf`。在此，你             | |
|                                                                          |
| | 可以配置其使用的端口号（默认是 8888）、超时、允许的最大客户              | |
|                                                                          |
| | 端等等。如果你希望在任意位置都能访问代理服务器，那么可以将 默认的        | |
|                                                                          |
| | `Allow` 行注释掉。\                                                      | |
|                                                                          |
| | 注意更新配置后，需要 reload 服务才会生效。另外，如果开了 iptables        | |
|                                                                          |
| | 防火墙的话，需要添加如下规则：\                                          | |
|                                                                          |
| | iptables -I INPUT -p tcp --dport 8888 -j ACCEPT\                       |
|    |                                                                     |
| | #### 浏览器设置                                                          | |
|                                                                          |
| |                                                                        |
|    |                                                                     |
| | 以 Firefox 为例，在"首选项 &gt; 高级 &gt; 网络 &gt; 设置"中，选择"       | |
|                                                                          |
| | 手动代理配置"，接着在"HTTP 代理"中填入服务器 IP，"端口"中 填入           | |
|                                                                          |
| | 8888，再确定就可以了。\                                                  | |
|                                                                          |
| | 分类:                                                                    |
|  |                                                                       |
| | [Apps](https://linuxtoy.org/category/apps "查看 Apps 中的全部文章") |    | |
|                                                                          |
| | [永久链接](https://linuxtoy.org/archives/tinyproxy.html) | [收藏到       | |
|                                                                          |
| | del.icio.us](http://delicious.com/save?url=https://linuxtoy.org/archiv |
| es |                                                                     |
| | /tinyproxy.html&title=%E5%88%A9%E7%94%A8%20Tinyproxy%20%E6%90%AD%E5%BB |
| %B |                                                                     |
| | A%20HTTP(S)%20%E4%BB%A3%E7%90%86)                                      |
|    |                                                                     |
| | | [Email                                                               |
|    |                                                                     |
| | 给好友](mailto:?Subject=Check%20This%20Out&body=I%20think%20you'll%20like |
| %2 |                                                                     |
| | 0this:%20https://linuxtoy.org/archives/tinyproxy.html)                 |
|    |                                                                     |
| | | [1 评论](https://linuxtoy.org/archives/tinyproxy.html#comments) |      |
|  |                                                                       |
| | [捐助本站](http://linuxtoy.org/faq/donate)                               | |
|                                                                          |
| |                                                                        |
|    |                                                                     |
| | </div>                                                                 |
|    |                                                                     |
| +----------------------------------------------------------------------- |
| ---+                                                                     |
|                                                                          |
| </div>                                                                   |
+--------------------------------------------------------------------------+

</div>

</div>

\

</div>
