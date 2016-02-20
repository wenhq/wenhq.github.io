--- layout: post title: "处理 JavaScript 异常的一个想法" date:
'2013-03-18T12:35:00.001+08:00' author: Wenh Q tags: modified\_time:
'2013-03-18T12:35:36.141+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-5427409769961251997
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/03/javascript.html ---

\
  

**处理 JavaScript 异常的一个想法**

Published on [博客 -
伯乐在线](http://blog.jobbole.com/36084/?utm_source=rss&utm_medium=rss&utm_campaign=%25e5%25a4%2584%25e7%2590%2586-javascript-%25e5%25bc%2582%25e5%25b8%25b8%25e7%259a%2584%25e4%25b8%2580%25e4%25b8%25aa%25e6%2583%25b3%25e6%25b3%2595)
| shared via [feedly](http://www.feedly.com)

来源：[Sofish](http://sofish.de/2144)

可能由于网络、[浏览器](http://blog.jobbole.com/12749/ "浏览器")问题、缓存等原因，可能导致线上执行
js 的时候与开发环境并不一样，会抛出异常。js
异常基本上是前端开发工程师的家常便饭。如何记录，并使用它，却很少人关注。最近在考虑一个想法，基本上涉及到两步：收集和使用。

**一、收集**

对于 error
收集这一块，还是比较方便的，因为在各浏览器中都有一个接口：`window.onerror`：

    window.onerror = function(errorMessage, scriptURL, lineNumber) {    alert(errorMessage, scriptURL, lineNumber)  }

甚至中提供了 Stack
Trace，比如在 `try/catch` 中还提供了 `e.stack`（各个浏览器不同，可以使用 [eriwen/javascript-stacktrace](https://github.com/eriwen/javascript-stacktrace) 这个兼容库），试一下下面这段代码：

    try {    fn()  } catch(e) {    alert(e.stack)  }

所以收集这些错误还是比较方便的，这里需要注意的事，使用 `window.addEventListener('error', callback, isBubble)` 中`callback` 的第一个参数并不是 `event`，而是一个 `Error object`。这样的话，为了方便，使用 `window.onerror` 是一个不错的选择，但通过
dot 操作符监听的事件是可以重载的，并且这段监听脚本理论上是放在所有 js
最前面的，所以需要考虑其中的风险。

**二、使用**

之前在支付宝的时候，线上 js 报错会变成一个邮件，发给前端开发
team，每个人自己认领、解决。其实这是一个不错的选择，也解决了最基本的问题：立即响应，修掉。不过也存在着一个问题，如果避免同样的错误？我的初步想法是这样的：

-   以 URL 为单元，记录同一个页面的报错：方便统一解决
-   记录错误包括：Page URL, User Agent, Script URL, Error Message 和
    Line Number
-   每个错误解决后，都可以在一个地方写解决方案，看到的人可以评论、加分，最终会存档起来，作为一个知识库，并用有方便的
    api 可以使用这些知识库的内容
-   在开发的时候，相同页面 `window.onerror` 的时候，通过插件，分析 Error
    Message 识别出类型，加上 URL 的判断，给予开发者提醒前人犯过的错误
-   开发者可以订阅知识库上某些标签，自动接收邮件（当然也可以根据文件注释、mapping
    等方式做更好的配对）

为什么这样做？主要是为了解决下面的一些问题：

-   形成知识库，开发者可以从中得到学习，特别是新人
-   工具保证效率的提升和避免重复错误重复解决
-   订阅保证通知更具针对性

**三、注意点**

**1. 收集的时候使用 POST 发送**

有时候 Error Message 可能会比较长，而浏览器的 URL
长度是有限制的，如果存的错误不多的话，可以考虑用 GET 发送，但通常来说
POST 可以把所有数据都发送到后台。

**2. 何时发送数据**

建议在触发 `onerror` 的时候发送。在第一次有这个想法的时候，尝试着在 `onbeforeonload` 的时候发送，但
POST 请求还没 open 就已经被浏览器中断了。

**3. 存于数据库以哪个作为索引比较好？**

通常来说以 URL 可能会比较适合多数网站。但像百姓网、淘宝等 UGC
比较多的网站，可能需要变通一下以记录 URL。毕竟不同帖子不同 URL
都是同一套代码。

那以 Error 作为索引呢？其实无论是那种，看自己需求选择吧。

**4. 是否记录所有错误**

这个也比较合适根据需求来看。百姓网有各种乱七八糟的报错可能都是来自到
baidu / Google 的 ad 外链。

**四、结语**

目前初步实现了一个收集的工具（[sofish/stacktrace.js](https://github.com/sofish/stacktrace.js)）和[存储方式](http://sofish.de/2144#hash_store)（以
URL 为索引），是否继续，还需要时间和进一步考虑，先发出来，抛砖引玉。

**五、附录**

    <?php     $url = new Url();  $page = $url->post('page');     if(!$page) return;     class ErrorTrace extends MongoData {         // MongoData 中没有，区别 http://stackoverflow.com/a/7958954      public function findOne($obj) {          return $this->connection->findOne($obj);      }  };     $store = new ErrorTrace();  $fields = array(    'url' => $url->post('url'),     'message' => $url->post('message'),   'line' => $url->post('line'),     'ua' => $url->post('ua'),  );     $index = array('page' => $page);  $hash = md5(json_encode($fields));     // 不重复记录一个错误，所有错误记录在同一个 URL 下  if($field = $store->findOne($index)) {      if(isset($field[$hash])) return;      return $store->setAttr(new Query('page', $page), $hash, $fields);  }     $store->page = $page;  $store->$hash = $fields;  $store->save();     ?>

#### 相关文章

-   [![异常处理的最佳实践](http://blog.jobbole.com/wp-content/uploads/2011/11/Java-programming-language-logo.jpg)](http://blog.jobbole.com/18291/)[异常处理的最佳实践](http://blog.jobbole.com/18291/)
-   [![异常的代价](http://blog.jobbole.com/wp-content/plugins/wordpress-23-related-posts-plugin/static/thumbs/14.jpg)](http://blog.jobbole.com/844/)[异常的代价](http://blog.jobbole.com/844/)
-   [![Java异常处理的陋习展播](http://blog.jobbole.com/wp-content/uploads/2013/02/java-black-1-150x150.jpg)](http://blog.jobbole.com/30230/)[Java异常处理的陋习展播](http://blog.jobbole.com/30230/)
-   [![JavaScript需要Blocks](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/12042/)[JavaScript需要Blocks](http://blog.jobbole.com/12042/)
-   [![50个jQuery代码段帮你成为更出色的JS开发者](http://blog.jobbole.com/wp-content/uploads/2012/04/snippets-150x150.jpg)](http://blog.jobbole.com/18513/)[50个jQuery代码段帮你成为更出色的JS开发者](http://blog.jobbole.com/18513/)
-   [![向非程序员解释
    JavaScript](http://blog.jobbole.com/wp-content/uploads/2012/07/Explaining-What-JavaScript-is-to-Non-programmers-150x150.jpg)](http://blog.jobbole.com/24602/)[向非程序员解释
    JavaScript](http://blog.jobbole.com/24602/)
-   [![headtrackr：一个头部/脸部追踪的JavaScript库](http://blog.jobbole.com/wp-content/uploads/2013/02/687474703a2f2f617564756e6f2e6769746875622e636f6d2f68656164747261636b722f6578616d706c65732f6d656469612f66616365747261636b696e675f7468756d626e61696c2e706e67-150x134.)](http://blog.jobbole.com/31213/)[headtrackr：一个头部/脸部追踪的JavaScript库](http://blog.jobbole.com/31213/)
-   [![14个Google地图的JavaScript资源](http://blog.jobbole.com/wp-content/plugins/wordpress-23-related-posts-plugin/static/thumbs/16.jpg)](http://blog.jobbole.com/1313/)[14个Google地图的JavaScript资源](http://blog.jobbole.com/1313/)
-   [![Node.js
    究竟是什么？](http://blog.jobbole.com/wp-content/uploads/2011/11/node.js-logo.png)](http://blog.jobbole.com/1254/)[Node.js
    究竟是什么？](http://blog.jobbole.com/1254/)
-   [![JavaScript初学者应注意的七个细节](http://blog.jobbole.com/wp-content/uploads/2011/06/javascript-logo.png)](http://blog.jobbole.com/8481/)[JavaScript初学者应注意的七个细节](http://blog.jobbole.com/8481/)

[处理 JavaScript
异常的一个想法](http://blog.jobbole.com/36084/)，首发于[博客 -
伯乐在线](http://blog.jobbole.com)。

\

Feedly. Feed your mind.
[http://www.feedly.com](http://www.feedly.com/#mail)
