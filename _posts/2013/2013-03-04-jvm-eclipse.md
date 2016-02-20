--- layout: post title: JVM优化-缩短eclipse的启动时间 date:
'2013-03-04T09:17:00.001+08:00' author: Wenh Q tags: - tech
modified\_time: '2013-10-11T13:37:04.766+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-5631755872772175621
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/03/jvm-eclipse.html ---
[JVM优化-缩短eclipse的启动时间](http://blog.jobbole.com/34536/?utm_source=rss&utm_medium=rss&utm_campaign=jvm%25e4%25bc%2598%25e5%258c%2596-%25e7%25bc%25a9%25e7%259f%25adeclipse%25e7%259a%2584%25e5%2590%25af%25e5%258a%25a8%25e6%2597%25b6%25e9%2597%25b4):
\
来源：[xpbug](http://my.oschina.net/xpbug/blog/111250)\
最近自从eclipse安装了很多插件以后,启动变得非常的慢,每次启动,要消耗近半分钟.这是不正常的.
今天决定好好优化一下.\
我所使用的eclipse是Eclipse Java EE IDE for Web Developers 3.8版本.
跑在MAC OSX上, SSD+8G RAM, 这么高性能的机器竟然不能秒开eclipse,
这太说不过去了. 哦,还有我使用的JVM是Oracle的HotSpot,来自于JDK1.6 64bit.\
首先,在优化前,让我们看看eclipse启动时,JVM的各项性能指标.
因为我并不能准确的判定eclipse的启动完成时间, 所以我只能说大约事件.\
首先启动JDK自带的JVM性能监视工具,在java\\bin的目录下,有一个jvisualvm,它是绑定在JDK中的visualvm.双击启动visualvm.
然后启动eclipse, 在eclipse启动完成以后,使用visualvm的查看eclipse的Visual
GC情况, 如图:\
[![](http://blog.jobbole.com/wp-content/uploads/2013/03/221900_U9uq_2546891.png "JVM优化-缩短eclipse的启动时间")](http://blog.jobbole.com/wp-content/uploads/2013/03/221900_U9uq_2546891.png "JVM优化-缩短eclipse的启动时间")\
上图中说明在eclipse的启动过程中,JIT对字节码进行了向机器码的编译,花去了22秒的时间.Class加载花去了10秒的时间,Minor
GC发生了72次,花去0.64秒,Full GC发生了12次,仅仅花去了61毫秒.\
我们再去MBean选项查看,发现新生代使用ParNew垃圾收集器,而老年代使用的是CMS垃圾收集器.\
[![](http://static.oschina.net/uploads/space/2013/0301/223335_3oIb_254689.png)](http://static.oschina.net/uploads/space/2013/0301/223335_3oIb_254689.png "JVM优化-缩短eclipse的启动时间")\
总上情况看出,由于MAC的性能比较好,所以垃圾回收并没有消耗太多的时间,并且CMS+ParNew本身就是并行垃圾回收,不会造成用户程序太多的停顿.
时间主要消耗在了JIT的即时编译和Class加载上了.\
首先要优化的就是class加栽.因为eclipse这个工具是一个成熟的工具,经过了这么多人的验证,所以我充分信任eclipse的代码,允许eclipse的代码在加载的时候,跳过字节码验证.
关闭字节码验证的方法是在vm的args中加入参数 -Xverify:none.
对于eclipse来说,找到eclipse.ini, 加入-Xverify:none.
让我们再重启一下eclipse,看看class加载时间是否减小.
再次启动,发现class加载事件缩小到7秒,比之前少了3秒.\
然后优化的是JIT的时间.
在使用eclipse编写程序时,主要是文本编辑,编译和运行,JIT虽然可以带给我们高性能,但是JIT在编译机器码的时候,却要消耗很多的时间.
eclipse对项目的编译和运行本身就很慢,切运行时是启动一个新的java进程,跟eclipse本身无关,所以,我可以接受抛弃JIT编译器,而只是用JVM解释器执行字节码所带来的效率降低.
这样可以去除JIT编译的时间. 做法如下,在eclipse.ini中加入vm的参数 -Xint,
意思是只使用解释器. 让我们来看看结果:\
[![](http://static.oschina.net/uploads/space/2013/0301/230258_MkFf_254689.png)](http://static.oschina.net/uploads/space/2013/0301/230258_MkFf_254689.png "JVM优化-缩短eclipse的启动时间")\
JVM编译器时间变成了0, 一下减掉20秒.
但是,由于缺少了运行时的即时编译优化方案,代码的运行时间变长了,
eclipse的整体启动时间慢了更多,超过了30秒.
由此可见,JIT是多么有用的一项技术.所以禁止JIT的尝试失败了.我们把之前的参数-Xint去掉.\
哦,对了,我还装了很多的插件,尤其是android开发插件.启动的时候对插件的激活也会花去很多时间.
屏蔽插件激活的方法: Windows -\> Preferences, 输入 “startup”, 点击
“Startup and Shutdown”, 把不需要的插件勾掉.
此外,还需要关掉不必要的validation,方法为:Windows -\> Preferences -\>
Validation. 只选你需要的.\
做完以上工作,我发现eclipse启动稍微快了一些. 掐着秒表计算的花了大约15秒.\
最后,再优化一下GC和堆栈吧.虽然说,GC已经表现的很好了,都没有超过1秒,但是GC的频率如此高,说明JVM的内存的分配是不合理的.为此,我们需要重新对JVM内存进行划分.
为了对JVM的内存进行合理分配,我们需要了解eclipse启动过程中,GC到底发生了什么事情.
打开gc log的方法如下:\
想eclipse.ini的vm参数中添加\
\
-XX:+PrintGCDetails\
\
-Xloggc:/users/joey/Documents/gc.log\
启动eclipse,生成gc.log, 打开log,进行分析.\
第一次Minor GC发现,新生代的大小约为20M. 堆的大小约为40M.
再接下来的GC中,新生代始终没有扩容.这说明,新生代的大小合适.\
\
0.720: [GC 0.720: [ParNew: 17024K-\>2112K(19136K), 0.0099529 secs]
17024K-\>2324K(38848K), 0.0100285 secs] [Times: user=0.03 sys=0.00,
real=0.01 secs]\
第一次发生Full GC时,发现老年代已经扩容到约93M,而永生代扩容到约128M\
\
67.213: [Full GC (System) 67.213: [CMS: 57969K-\>57877K(93124K),
0.3563491 secs] 62179K-\>57877K(112260K), [CMS Perm :
80490K-\>80392K(128708K)], 0.3565176 secs] [Times: user=0.36 sys=0.00,
real=0.36 secs]\
而直到最后一次GC, 老年代占用也没超过125M,永生带占用也没有超过125M.
但他们的占用空间均超过了100M. 由此,我们有理由规定一个初始堆大小.
最终,通过分析,我给eclipse.ini添加了如下几个参数:\
-server\
\
-Xverify:none\
\
-XX:PermSize=128m\
\
-XX:MaxPermSize=256m\
\
-Xms256m\
\
-Xmx512m\
\
-Xmn40m\
\
-Xss2m\
-server是让JVM以server模式运行,加重JIT的优化作用,由于eclipse是经常开着不关,在server模式下,JIT会随着运行的时间,把字节码更深刻的变成成机器代码.加快运行速度.\
\
-Xverify:none, 跳过对字节码的验证.\
\
PermSize永生带设置为128M,堆的初始大小设置为256M,新生代站了40M.
每个线程栈大小设为2M.\
在这种设置下,Full GC已经完全消失,但还是剩下了20次左右的Minor
GC,大约花掉0.3秒, 这是可以接受的.
如果为了完全消除GC而把新生代的空间设大,那也是一种内存的浪费.
重启eclipse,启动时间已经落在了15秒之内.如图:\
[![](http://static.oschina.net/uploads/space/2013/0302/002356_C7Tx_254689.png)](http://static.oschina.net/uploads/space/2013/0302/002356_C7Tx_254689.png "JVM优化-缩短eclipse的启动时间")\
\

#### 相关文章

-   [![Eclipse Orion
    Example](http://blog.jobbole.com/wp-content/uploads/2012/03/Orion-Example-150x150.png)](http://blog.jobbole.com/16318/)[Eclipse基金会将于7月发布Orion
    1.0版](http://blog.jobbole.com/16318/)
-   [![eclipse
    logo](http://blog.jobbole.com/wp-content/uploads/2012/04/eclipse-logo-150x150.jpg)](http://blog.jobbole.com/16127/)[25个让Java程序员更高效的Eclipse插件](http://blog.jobbole.com/16127/)
-   [![探索Java语言与JVM中的Lambda表达式](http://blog.jobbole.com/wp-content/uploads/2013/02/Java-programming-language-logo3-150x150.jpg)](http://blog.jobbole.com/31860/)[探索Java语言与JVM中的Lambda表达式](http://blog.jobbole.com/31860/)
-   [![走进JVM，浅水也能捉鱼](http://blog.jobbole.com/wp-content/uploads/2012/12/jvm-01-150x150.jpg)](http://blog.jobbole.com/31545/)[走进JVM，浅水也能捉鱼](http://blog.jobbole.com/31545/)
-   [![JVM程序员的阅读清单](http://blog.jobbole.com/wp-content/uploads/2011/11/book-logo.jpg)](http://blog.jobbole.com/15342/)[JVM程序员的阅读清单](http://blog.jobbole.com/15342/)
-   [![《深入理解JAVA虚拟机》笔记](http://blog.jobbole.com/wp-content/uploads/2012/11/deep_into_JVM_001-150x150.jpg)](http://blog.jobbole.com/30257/)[《深入理解JAVA虚拟机》笔记](http://blog.jobbole.com/30257/)
-   [![开发人员眼中最好的代码编辑器](http://blog.jobbole.com/wp-content/uploads/2012/07/Which-is-the-Best-Code-Editor-150x150.jpg)](http://blog.jobbole.com/24594/)[开发人员眼中最好的代码编辑器](http://blog.jobbole.com/24594/)
-   [![Java程序员应该知道的10个调试技巧](http://blog.jobbole.com/wp-content/uploads/2012/09/156_120903163734_1-150x150.png)](http://blog.jobbole.com/26435/)[Java程序员应该知道的10个调试技巧](http://blog.jobbole.com/26435/)
-   [![groovy
    logo](http://blog.jobbole.com/wp-content/uploads/2012/07/groovy-logo-150x150.jpg)](http://blog.jobbole.com/23546/)[Groovy
    2.0静态类型检查及编译功能介绍](http://blog.jobbole.com/23546/)
-   [![WordPress
    logo](http://blog.jobbole.com/wp-content/uploads/2011/11/WordPress-logo-150x150.jpg)](http://blog.jobbole.com/31329/)[2012年Linux
    Journal读者选择奖结果公布](http://blog.jobbole.com/31329/)

[JVM优化-缩短eclipse的启动时间](http://blog.jobbole.com/34536/)，首发于[博客
- 伯乐在线](http://blog.jobbole.com/)。
