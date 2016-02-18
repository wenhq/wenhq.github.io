--- layout: post title: ubuntu通过 LXC 容器搭建Java环境 date:
'2013-12-19T15:54:00.001+08:00' author: Wenh Q tags: - tech
modified\_time: '2013-12-19T15:54:20.467+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-9034108143106024123
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/12/ubuntu-lxc-java.html ---
  ------------------------------------------------------------------------
  [【每日一博】ubuntu通过 LXC
  容器搭建Java环境](http://my.oschina.net/voyage1314/blog/185342)
  Via [开源中国社区最新新闻](http://www.oschina.net/?from=rss)
  最近做云平台，和另一个小伙伴一起，他做php我做java。网站那块差不多弄好了，现在开始搭建java环境，最

  初想了很多方案，由于需要沙箱隔离，cpu，内存限制和一些资源共享，最终决定采用lxc，所谓lxc就是系统级别上的隔离，无须再硬件上做任何配置，就

  可以达到虚拟机的效果，当然在隔离程度上不及vmware之类，不过这样亦能满足我的云平台各种需求。\

  **![](http://static.oschina.net/uploads/space/2013/1217/165410_OPkP_1424
  330.jpg)**
  ------------------------------------------------------------------------


