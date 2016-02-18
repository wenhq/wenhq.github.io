--- layout: post title: POST与GET的区别及RESTful date:
'2013-12-11T13:30:00.001+08:00' author: Wenh Q tags: - tech
modified\_time: '2013-12-11T13:30:15.604+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-7053163565343584486
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/12/postgetrestful.html ---
<div style="margin: 10px; padding: 5px;">

<div style="font-size: 18px;">

[POST与GET的区别及RESTful](http://feedproxy.google.com/~r/biaodianfu/~3/kXR4QZcVSLI/post-get-restful.html)

</div>

<div style="font-size: 13px;">

Via [标点符](http://www.biaodianfu.com/)

</div>

</div>

<div style="font-size: 13px; padding: 15px 0 10px 10px;">

在网站开发的时候通常会对POST和GET产生混淆，让人混淆的主要原因是基本上POST能解决的问题GET都能解决，反之亦然。今天就来说说者两者的区别。\
<div>

GET：字面理解就是获取资源

</div>

<div>

-   GET请求标准上是幂等的（用户应该认为请求是安全的-资源不会被修改，这里所以说应该是服务器端并不保证资源不会被修改）
-   GET请求可以被浏览器缓存；响应也可以被缓存（根据缓存头信息来处理）
-   GET请求可以保存在浏览器历史记录中，也可以作为链接分发或分享，可以收藏为书签
-   GET请求的数据都在URL中，可以方便都从浏览器中获取数据（因此不能携带诸如密码的明文数据）
-   GET请求的长度会有限制（比如IE的路径总长度需小于2048个字符）
-   GET请求的数据只能包含ASCII字符

</div>

<div>

POST：字面理解就是发布新资源

</div>

<div>

-   POST请求标准上不是幂等的（用户应该认为请求是有副作用的-可能会导致资源修改）
-   POST请求URL可以被浏览器缓存，但是POST数据不会被缓存；响应可以被缓存（根据缓存头信息来处理）
-   POST请求不便于分发或分享，因为POST数据会丢失，不能收藏为书签。
-   POST请求没有长度限制，可以用来处理"请求数据"很大的场景（只要不超过服务器端的处理能力）
-   POST请求的数据不限于ASCII字符，可以包含二进制数据

</div>

上面两者区别的解释中幂等可能不太好理解，幂等（idempotent、idempotence）其实是一个数学或计算机学概念，常见于抽象代数中。幂等具体表现为：\
-   对于单目运算，如果一个运算对于在范围内的所有的一个数多次进行该运算所得的结果和进行一次该运算所得的结果是一样的，那么我们就称该运算是幂等的。比如绝对值运算就是一个例子，在实数集中，有abs(a)=abs(abs(a))。
-   对于双目运算，则要求当参与运算的两个值是等值的情况下，如果满足运算结果与参与运算的两个值相等，则称该运算幂等，如求两个数的最大值的函数，即max(x,x) = x。

通俗的讲幂等的意味着对同一URL的多个请求应该返回同样的结果。但其实也不不是非常的严格，比如新闻站点的头版不断更新。虽然第二次请求会返回不同的一批新闻，该操作仍然被认为是和幂等的，因为它总是返回当前的新闻。从根本上说，如果目标是当用户打开一个链接时，他可以确信从自身的角度来看没有改变资源即可。\
事实上Http定义了与服务器交互的不同方法，最基本的方法有4种，分别是GET，POST，PUT，DELETE。URL全称是资源描述符，我们可以这样认为：一个URL地址，它用于描述一个网络上的资源，而HTTP中的GET，POST，PUT，DELETE就对应着对这个资源的查，改，增，删4个操作。也就是说GET一般用于获取/查询资源信息，而POST一般用于更新资源信息。所以GET在信息修改层面，GET比POST安全。GET
请求一般不应产生副作用。它仅仅是获取资源信息，就像数据库查询一样，不会修改，增加数据，不会影响资源的状态。\
在说过了GET、POST实际用法后，我们发现很多人都没有按照HTTP规范（<http://www.ietf.org/rfc/rfc2616.txt>）去做。导致这个问题的原因有很多，比如说：\
1.  很多人贪方便，更新资源时用了GET，因为用POST必须要到FORM（表单），这样会麻烦一点。
2.  对资源的增，删，改，查操作，其实都可以通过GET/POST完成，不需要用到PUT和DELETE。
3.  早期的Web
    MVC框架设计者们并没有有意识地将URL当作抽象的资源来看待和设计，所以导致一个比较严重的问题是传统的Web
    MVC框架基本上都只支持GET和POST两种HTTP方法，而不支持PUT和DELETE方法。

以上3点都是没有严格遵守HTTP规范，随着架构的发展，出现了REST(Representational
State Transfer)，一套支持HTTP规范的RESTful架构。\
REST这个词，是Roy Thomas
Fielding在他2000年的博士论文中提出的。REST即Representational State
Transfer的缩写。直接翻译是"表现层状态转化"。具体请查看：<http://zh.wikipedia.org/wiki/REST>\
<div>

Related posts:\
1.  [如何建立一套邮件发送系统](http://www.biaodianfu.com/how-to-build-a-mail-delivery-system.html "如何建立一套邮件发送系统")
2.  [百度遵守的蜘蛛访问协议](http://www.biaodianfu.com/baidu-robots.html "百度遵守的蜘蛛访问协议")
3.  [Cookie与Session的区别](http://www.biaodianfu.com/cookie-vs-session.html "Cookie与Session的区别")

</div>

</div>
