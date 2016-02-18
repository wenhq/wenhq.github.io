--- 
layout: post 
title: nchar，char，varchar 与nvarchar区别 
date:'2014-01-06T17:21:00.000+08:00' 
author: Wenh Q
tags:
modified\_time: '2014-01-06T17:21:46.703+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-1167334926380033006
blogger\_orig\_url: http://binaryware.blogspot.com/2014/01/ncharcharvarchar-nvarchar.html
--- 
[nchar，char，varchar
与nvarchar区别](http://www.cnblogs.com/moss_tan_jun/archive/2010/01/30/1659741.html)  于
10-1-29 通过 [博客园-首页原创精华区](http://www.cnblogs.com/)
作者：moss\_tan\_jun



阅读: 1041 评论: 6 作者:
[moss\_tan\_jun](http://www.cnblogs.com/moss_tan_jun/) 发表于 2010-01-30
11:53
[原文链接](http://www.cnblogs.com/moss_tan_jun/archive/2010/01/30/1659741.html)



char类型：
对英文(ASCII)字符占用1个字节，对一个汉字占用2个字节，CHAR存储定长数据很方便，CHAR字段上的索引效率级高，比如定义
char(10)，那么不论你存储的数据是否达到了10个字节，都要占去10个字节的空间。因为是固定长度，所以速度效率高。



Varchar类型：Varchar
的类型不以空格填满，比如varchar(100)，但它的值只是"qian",则它的值就是"qian"

而char 不一样，比如char(100),它的值是"qian"，而实际上它在数据库中是"qian
"(qian后共有96个空格，就是把它填满为100个字节)。



由于char是以固定长度的，所以它的速度会比varchar快得多!但程序处理起来要麻烦一点，要用trim之类的函数把两边的空格去掉!



VARCHAR存储变长数据，但存储效率没有CHAR高。如
果一个字段可能的值是不固定长度的，我们只知道它不可能超过10个字符，把它定义为
VARCHAR(10)是最合算的。VARCHAR类型的实际长度是它的值的实际长度+1。为什么"+1"呢？这一个字节用于保存实际使用了多大的长度。



Nchar类型和Nvarchar类型是怎么一回事呢？为了与其他多种字符的转换，如中文，音标等，对每个英文(ASCII)字符都占用2个字节，对一个
汉字也占用两个字节，所有的字符都占用2个字节。



例如





varchar(n):变长型字符数据类型，存储最长长度为8,000 个字符。



举个例子：

insert a select '木子a'

--- 存储长度为5个字节，余下的3个字节全部释放

insert a select '木神易

----存储长度为6个字节，余下的2个字节全部释放

---意思是varchar变长字符数据类型与存储数据的实际长度是一致的



nvarchar(n):可变长度 Unicode 数据，其最大长度为 4,000 字符。

字节的存储大小是所输入字符个数的两倍，

就是说它是双字节来存储数据的。

如果存储数据如果存在单字节时，它也是以双字节来占用存储空间的。



varchar一般适用于英文和数字，Nvarchar适用中文和其他字符，其中N表示Unicode常量，可以解决多语言字符集之间的转换问题


