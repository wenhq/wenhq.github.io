--- layout: post title: "【每日一博】使用 ZooKeeper 实现分布式共享锁"
date: '2013-06-06T08:55:00.001+08:00' author: Wenh Q tags:
modified\_time: '2013-06-06T08:55:28.023+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-1184789189139304622
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/06/zookeeper.html ---
[【每日一博】使用 ZooKeeper
实现分布式共享锁](http://my.oschina.net/shenxueliang/blog/135865):\
分布式系统中经常需要协调多进程，多个jvm，或者多台机器之间的同步问题，得益于zookeeper，实现了一个分布式的共享锁，方便在多台服务器之间竞争资源时，来协调各系统之间的协作和同步。
