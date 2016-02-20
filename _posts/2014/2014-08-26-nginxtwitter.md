--- layout: post title: nginx反向代理twitter镜像站 date:
'2014-08-26T16:19:00.002+08:00' author: Wenh Q tags: modified\_time:
'2014-08-26T16:19:18.414+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-150849671501659319
blogger\_orig\_url:
http://binaryware.blogspot.com/2014/08/nginxtwitter.html ---
自己用nginx反向代理做一个twitter
mobile的镜像站，这样就不用每次都翻墙啦。\
\
\
location /twitter {\
\
proxy\_set\_header Accept-Encoding "";\
\
proxy\_redirect https://mobile.twitter.com/ https://jude.me/twitter/;\
\
proxy\_pass https://mobile.twitter.com/;\
\
subs\_filter mobile.twitter.com jude.me/twitter;\
\
subs\_filter 'href="/' 'href="https://jude.me/twitter/';\
\
subs\_filter '\<form action="/' '\<form
action="https://jude.me/twitter/';\
\
subs\_filter 't.co' 'jude.me/t.co';\
\
}\
\
用subs\_filter把网页中的相对地址替换为绝对的，t.co也替换一下，因为t.co也同样被封了，所以再建一个t.co的反向代理：\
\
\
location /t.co {\
\
proxy\_pass http://t.co/;\
\
}\
\
现在就可以访问[https://jude.me/twitter/](https://jude.me/twitter/)，和正常的twitter
mobile一样。\
\
\
\
\
引用 地址：https://jude.me/2012/12/31/twitter-mirror.html
来源：[nginx反向代理twitter镜像站](http://feedproxy.google.com/~r/chinagfwblog/~3/T6Jb1acfgHM/nginxtwitter.html)  通过 [中国数字时代
»
编辑推荐](http://pipes.yahoo.com/pipes/pipe.info?_id=4ebbe79f06d4342d785a0cab9913dc0c)
