--- layout: post title: "字符串匹配的Boyer-Moore算法" date:
'2013-05-06T18:28:00.001+08:00' author: Wenh Q tags: modified\_time:
'2013-05-06T18:28:40.233+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-6930804465515370454
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/05/boyer-moore.html ---
[字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/39132/?utm_source=rss&utm_medium=rss&utm_campaign=%25e5%25ad%2597%25e7%25ac%25a6%25e4%25b8%25b2%25e5%258c%25b9%25e9%2585%258d%25e7%259a%2584boyer-moore%25e7%25ae%2597%25e6%25b3%2595):
\
来源：[阮一峰](http://www.ruanyifeng.com/blog/2013/05/boyer-moore_string_search_algorithm.html)\
上一篇文章，我介绍了[KMP算法](http://blog.jobbole.com/39066/)。\
但是，它并不是效率最高的算法，实际采用并不多。各种文本编辑器的”查找”功能（Ctrl+F），大多采用[Boyer-Moore算法](http://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm)。\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/1.jpg "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/1.jpg "字符串匹配的Boyer-Moore算法")\
Boyer-Moore算法不仅效率高，而且构思巧妙，容易理解。1977年，德克萨斯大学的Robert
S. Boyer教授和J Strother Moore教授发明了这种算法。\
下面，我根据Moore教授自己的[例子](http://www.cs.utexas.edu/~moore/best-ideas/string-searching/fstrpos-example.html)来解释这种算法。\
1.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/2.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/2.png "字符串匹配的Boyer-Moore算法")\
假定字符串为”HERE IS A SIMPLE EXAMPLE”，搜索词为”EXAMPLE”。\
2.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/3.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/3.png "字符串匹配的Boyer-Moore算法")\
首先，”字符串”与”搜索词”头部对齐，从尾部开始比较。\
这是一个很聪明的想法，因为如果尾部字符不匹配，那么只要一次比较，就可以知道前7个字符肯定不是要找的结果。\
我们看到，”S”与”E”不匹配。这时，**“S”就被称为”坏字符”（bad
character），即不匹配的字符。**我们还发现，”S”不包含在搜索词”EXAMPLE”之中，这意味着可以把搜索词直接移到”S”的后一位。\
3.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/4.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/4.png "字符串匹配的Boyer-Moore算法")\
依然从尾部开始比较，发现”P”与”E”不匹配，所以”P”是”坏字符”。但是，”P”包含在搜索词”EXAMPLE”之中。所以，将搜索词后移两位，两个”P”对齐。\
4.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/5.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/5.png "字符串匹配的Boyer-Moore算法")\
我们由此总结出**“坏字符规则”**：\

> 　　后移位数 = 坏字符的位置 – 搜索词中的上一次出现位置

如果”坏字符”不包含在搜索词之中，则上一次出现位置为 -1。\
以”P”为例，它作为”坏字符”，出现在搜索词的第6位（从0开始编号），在搜索词中的上一次出现位置为4，所以后移
6 – 4 = 2位。再以前面第二步的”S”为例，它出现在第6位，上一次出现位置是
-1（即未出现），则整个搜索词后移 6 – (-1) = 7位。\
5.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/6.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/6.png "字符串匹配的Boyer-Moore算法")\
依然从尾部开始比较，”E”与”E”匹配。\
6.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/7.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/7.png "字符串匹配的Boyer-Moore算法")\
比较前面一位，”LE”与”LE”匹配。\
7.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/8.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/8.png "字符串匹配的Boyer-Moore算法")\
比较前面一位，”PLE”与”PLE”匹配。\
8.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/9.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/9.png "字符串匹配的Boyer-Moore算法")\
比较前面一位，”MPLE”与”MPLE”匹配。**我们把这种情况称为”好后缀”（good
suffix），即所有尾部匹配的字符串。**注意，”MPLE”、”PLE”、”LE”、”E”都是好后缀。\
9.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/10.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/10.png "字符串匹配的Boyer-Moore算法")\
比较前一位，发现”I”与”A”不匹配。所以，”I”是”坏字符”。\
10.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/11.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/11.png "字符串匹配的Boyer-Moore算法")\
根据”坏字符规则”，此时搜索词应该后移 2 – （-1）= 3
位。问题是，此时有没有更好的移法？\
11.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/12.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/12.png "字符串匹配的Boyer-Moore算法")\
我们知道，此时存在”好后缀”。所以，可以采用**“好后缀规则”**：\

> 　　后移位数 = 好后缀的位置 – 搜索词中的上一次出现位置

计算时，位置的取值以”好后缀”的最后一个字符为准。如果”好后缀”在搜索词中没有重复出现，则它的上一次出现位置为
-1。\
所有的”好后缀”（MPLE、PLE、LE、E）之中，只有”E”在”EXAMPLE”之中出现两次，所以后移
6 – 0 = 6位。\
12.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/13.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/13.png "字符串匹配的Boyer-Moore算法")\
可以看到，”坏字符规则”只能移3位，”好后缀规则”可以移6位。所以，**Boyer-Moore算法的基本思想是，每次后移这两个规则之中的较大值。**\
更巧妙的是，这两个规则的移动位数，只与搜索词有关，与原字符串无关。因此，可以预先计算生成《坏字符规则表》和《好后缀规则表》。使用时，只要查表比较一下就可以了。\
13.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/14.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/14.png "字符串匹配的Boyer-Moore算法")\
继续从尾部开始比较，”P”与”E”不匹配，因此”P”是”坏字符”。根据”坏字符规则”，后移
6 – 4 = 2位。\
14.\
[![字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/wp-content/uploads/2013/05/15.png "字符串匹配的Boyer-Moore算法")](http://blog.jobbole.com/wp-content/uploads/2013/05/15.png "字符串匹配的Boyer-Moore算法")\
从尾部开始逐位比较，发现全部匹配，于是搜索结束。如果还要继续查找（即找出全部匹配），则根据”好后缀规则”，后移
6 – 0 = 6位，即头部的”E”移到尾部的”E”的位置。\

#### 相关文章

-   [![K-均值聚类分析](http://www.jobbole.net/wp-content/uploads/2013/02/kmeans_thumb2-150x150.gifimgmax800)](http://blog.jobbole.com/16048/)[K-均值聚类分析](http://blog.jobbole.com/16048/)
-   [![the
    godfather](http://blog.jobbole.com/wp-content/uploads/2012/05/the-godfather-150x150.jpg)](http://blog.jobbole.com/20692/)[浅谈网页搜索排序中的投票模型](http://blog.jobbole.com/20692/)
-   [![张洋：浅析PageRank算法](http://blog.jobbole.com/wp-content/uploads/2012/07/google-pagerank.png)](http://blog.jobbole.com/23286/)[张洋：浅析PageRank算法](http://blog.jobbole.com/23286/)
-   [![Simhash算法原理和网页查重应用](http://blog.jobbole.com/wp-content/uploads/2012/06/Simhash-algorithm-principle-and-web-pages-to-check-for-re-application1-150x150.png)](http://blog.jobbole.com/21928/)[Simhash算法原理和网页查重应用](http://blog.jobbole.com/21928/)
-   [![字符串匹配的KMP算法](http://blog.jobbole.com/wp-content/uploads/2013/05/kmp-01-150x150.jpg)](http://blog.jobbole.com/39066/)[字符串匹配的KMP算法](http://blog.jobbole.com/39066/)
-   [![霍夫曼编码压缩算法](http://blog.jobbole.com/wp-content/uploads/2012/05/Huffman-encoding-compression-algorithm1-150x150.png)](http://blog.jobbole.com/20091/)[霍夫曼编码压缩算法](http://blog.jobbole.com/20091/)
-   [![基数估计算法概览](http://blog.jobbole.com/wp-content/uploads/2012/11/cardinality-estimation-150x150.jpg)](http://blog.jobbole.com/30671/)[基数估计算法概览](http://blog.jobbole.com/30671/)
-   [![蚂蚁觅食和互联网算法](http://blog.jobbole.com/wp-content/uploads/2012/08/anternet_thumb-150x150.jpg)](http://blog.jobbole.com/26123/)[蚂蚁觅食和互联网算法](http://blog.jobbole.com/26123/)
-   [![Google
    按图搜索的原理](http://blog.jobbole.com/wp-content/uploads/2012/05/What-is-the-principle-of-Google-Image-Search1-150x150.jpg)](http://blog.jobbole.com/20536/)[Google
    按图搜索的原理](http://blog.jobbole.com/20536/)
-   [![基于用户投票的排名算法（二）：Reddit](http://blog.jobbole.com/wp-content/uploads/2012/03/ranking-algorithm-based-on-users-vote201-150x150.jpg)](http://blog.jobbole.com/15727/)[基于用户投票的排名算法：Reddit](http://blog.jobbole.com/15727/)

[字符串匹配的Boyer-Moore算法](http://blog.jobbole.com/39132/)，首发于[博客
- 伯乐在线](http://blog.jobbole.com/)。
