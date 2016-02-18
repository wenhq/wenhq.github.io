--- layout: post title: Google的Java编码规范 date:
'2014-02-13T10:42:00.002+08:00' author: Wenh Q tags: modified\_time:
'2014-02-13T10:42:14.391+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-4387131833462813994
blogger\_orig\_url:
http://binaryware.blogspot.com/2014/02/googlejava.html ---
[Google的Java编码规范](http://www.infoq.com/cn/news/2014/02/google-java-coding-standards?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) 通过
[Wenhu Qiu的 InfoQ 个性化 RSS Feed](http://www.infoq.com/cn/)\
\
*Google最近发布了一份完整的Java编码规范。规范的内容包括一些切实可行的硬性规定。Google内部均遵守此规范。该规范不仅涵盖了代码格式，还包括其他类型的约定和编码标准。
By Bienvenido David Translated by 梅雪松*

\

Google最近发布了一份完整的[Java编码规范](http://google-styleguide.googlecode.com/svn/trunk/javaguide.html)。规范的内容包括一些切实可行的硬性规定。Google内部均遵守此规范。该规范不仅涵盖了代码格式，还包括其他类型的约定和编码标准。

该规范主要分为6大部分：源文件基本规范、源文件结构、代码格式、命名、编程实践和Javadoc。源文件基本规范说明文件名、文件编码、空格和特殊字符等规范要求。源文件结构说明许可信息、package和import声明、类成员顺序等规范要求。代码格式用于说明源代码中大括号、缩进、换行、空格、括号、枚举、数组、switch语句、注解、注释和修饰符等格式要求。命名说明了标识符（包、类、方法、常量、属性、局部变量和类变量）的命名规范和驼峰大小写定义。编程实践说明@Override、异常、静态成员和终结器的用法。Javadoc说明哪些地方需要Javadoc，以及它的格式要求。

以下是从规范中摘录的一些内容：

-   import中不能有通配符。
-   重载方法应该放在一起连续出现。
-   即使代码块中没有内容，或者只有一行代码，也必须使用大括号。
-   2空格缩进。
-   列宽是80或100个字符。
-   不能使用类似C语言的数组变量声明。
-   switch语句中，必须包含default语句。
-   修饰符的顺序应按照Java语言规范推荐的顺序。
-   常量命名应使用CONSTANT\_CASE格式（译注：所有字母大写，单词使用下划线分隔）。注意，所有常量都必须是static
    final成员，但并不是所有的static final成员都是常量。

更多内容请阅读[Google Java
Style](http://google-styleguide.googlecode.com/svn/trunk/javaguide.html)。Oracle也提供了[官方的Java语言编码规范](http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html)。Google还提供了其它语言的代码风格指南，包括C++、Objective-C、Python、Shell、HTML/CSS、JavaScript和Lisp等等。

**原文英文链接：**[Google's Java Coding
Standards](http://www.infoq.com/news/2014/02/google-java-coding-standards)

* * * * *

感谢[姚琪琳](http://www.infoq.com/cn/author/%E5%A7%9A%E7%90%AA%E7%90%B3)对本文的审校。

给InfoQ中文站投稿或者参与内容翻译工作，请邮件至[editors@cn.infoq.com](mailto:editors@cn.infoq.com)。也欢迎大家通过新浪微博（[@InfoQ](http://www.weibo.com/infoqchina)）或者腾讯微博（[@InfoQ](http://t.qq.com/infoqchina)）关注我们，并与我们的编辑和其他读者朋友交流。
