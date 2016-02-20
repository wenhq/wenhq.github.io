--- layout: post title: "出色的 JavaScript API 设计秘诀" date:
'2013-03-18T18:11:00.001+08:00' author: Wenh Q tags: modified\_time:
'2013-03-18T18:11:21.787+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-2625372320798664487
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/03/javascript-api.html ---

\
  

**出色的 JavaScript API 设计秘诀**

Published on [博客 -
伯乐在线](http://blog.jobbole.com/36136/?utm_source=rss&utm_medium=rss&utm_campaign=%25e5%2587%25ba%25e8%2589%25b2%25e7%259a%2584-javascript-api-%25e8%25ae%25be%25e8%25ae%25a1%25e7%25a7%2598%25e8%25af%2580)
| shared via [feedly](http://www.feedly.com)

英文原文：[Secrets of Awesome JavaScript API
Design](http://webstandardssherpa.com/reviews/secrets-of-awesome-javascript-api-design/)，编译：[oschina](http://www.oschina.net/translate/secrets-of-awesome-javascript-api-design)

设计是一个很普遍的概念，一般是可以理解为为即将做的某件事先形成一个计划或框架。 ([牛津英语词典](http://oxforddictionaries.com/definition/american_english/design))中，设计是一种将艺术，体系，硬件或者更多的东西编织到一块的主线。软件设计，特别是作为软件设计的次类的API设计，也是一样的。但是API设计常常很少关注软件发展，因为为其他[程序员](http://blog.jobbole.com/821/ "程序员的本质")写代码的重要性要次于应用UI设计和最终用户体验。

但是API设计，作为我们自己写的库中提供的公共接口，能够向调用我们代码的开发者表现出我们库的一些特点和功能，所以API设计和UI设计一样重要。事实上，两者都是为应用可以提供更好的用户体验具有基本的方式。应用UI在用户UX中占有很重要的位置，应用API是开发者的UX。因此，应用API设计应该被给予和我们提供给用户的接口相同水平的考虑和关注。正像我们关注UI的功效，简洁性和优美，我们也应该同样的评估API的功效，简洁性和代码的优美性！

API设计——javascript
API设计的内容，呈现了唯一的挑战对所有的开发者，不管是否你正在开发一个公共的库或者一个内部的库。javascript的动态性，库使用者的匿名和需求的模棱两可都给API设计者呈现了一个令人畏惧的挑战。然而对于一个好的API设计是没有捷径的，但是可以从现代流行的一些javascript库中提取出一些设计准则是可能的！

API设计: 天使和恶魔的斗争
-------------------------

javascript
API中差的设计会给使用你API的开发者和你带来高的花费。差的设计会导致浪费，使用你API的开发者会因为设法搞弄明白你接口而浪费时间，而API的开发者会因为处理不断增加的需求和解决使用者的困惑而浪费时间。然而几乎所有的API当初被开发的时候，都是为了能够提取相同的功能，方便调用并节约时间。但设计不好的API会使你的库使用者和你产生疑惑，这些库真的能节约时间吗？

优秀的API设计，一方面，完成了[提取](http://en.wikipedia.org/wiki/Abstraction_%28computer_science%29)的目标，同时也实现了[自我描述](http://en.wikipedia.org/wiki/Self-documenting)。当一个API被良好的设计，使用者可以快速地和直观地完成工作，完全不用不停的使用文档或者持续的访问支持或者解答网站。你也可以通过封装一些开发者需要自己花大量时间开发的一些特征来节约库开发者的时间。好的设计不仅节约开发者的时间，可以使他们看起来更加聪明和有责任。同样帮助你的用户看起来聪明和能干也会使你看起来更加的牛逼！

对于javascript来说，API设计特别重要
-----------------------------------

不管什么[编程语言](http://blog.jobbole.com/tag/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/ "如何选择语言和编程语言排名相关文章")或者框架，API设计是重要的，API设计的重要性对于javascript来说是高于其它许多语言的。首先，作为一个动态的和后期绑定的语言，javascript没有编译器可以实现一个安全网或者检测单元功能，所以javascript不可以发现你代码中的错误。[Linting](http://en.wikipedia.org/wiki/Lint_%28software%29) 或检验框架 如 [JSLint](http://jslint.com/) 和[JSHint](http://jshint.com/) 可以帮助我们。这些框架的功能可以指出javascript中的一些普遍的错误，但是当我们使用API时，他们却不能发现javascript的错误。

这一切都取决于你，你可以开发一个具有良好设计的API，这个API可以帮助你的用户掉进众所周知的"成功坑"，这就意味着你的库对于开发者来说是舒服的和熟悉的，同时也提供了积极的强化和当开发者和你的代码交互时建立的信心。

"掉进成功的坑里"最好的例子是[jQuery](http://www.oschina.net/p/jquery) 通过CSS选择器语法获取DOM元素的运用。例如，如果我想要获取所有带有类名的article元素，我可以运用jQuery这样做:

    $("article.blogPost").fadeIn();

选择器article.blogPost和下面展现使用完全一样的语法，这绝不是偶然的！

    article.blogPost {  border-radius: 10px;  background-color: salmon;  box-shadow: 0px 0px 10px 2px #ccc;  }

jQuery的选择器引擎被设计为了使我和其他开发者能够使我对CSS选择器的理解和它的引擎进行交互。结果可想而知，如果jQuery需要我用一种新的，为特定目的形成的语法，我将失去快速，明显和高效。

我们可以获得灵感从这些框架中，如jQuery,或者其他框架，并应用这些灵感到我们的设计中。然而，获得灵感并不是抄袭，有个度的问题，任何设计过API的人如果是仅仅的基于别人的想法，不管好与坏，他都将继承。如果我们将在好的javascript中获得的准则运用到其他领域中，我们能开发拥有好的API的框架，这些API设计能被运用在任何情况下。

出色的Javascript APIs设计秘诀
-----------------------------

虽然软件不具有与绘画或建筑类似的视觉评价标准，我们仍倾向于使用与物理实体一样的形容词来描述软件质量。例如，使用"优雅的"与"漂亮的"来赞美软件并不罕见。如果用与物理实体相似的形容词描述软件接口是合理的话，那么当然也可以使用与之相同的原则来评价软件设计。

在本节，将四个来自艺术领域的[流行设计原则](http://en.wikipedia.org/wiki/Principles_of_art)扩展至API设计中：

-   和谐一致
-   平衡
-   对称
-   重点突出

对每一个原则，将列出一到多个实例来说明，这些例子表明流行的Javascript库API设计是怎样遵循这些原则的。

原则1：一致性&协调性
--------------------

在艺术作品中，一致性是一个作品背后不可缺少的观念，或者说设计者如何把一些事物组成连贯的一个整体。协调性，从另一方面来说，是一个作品相似元素的布局，这会在考虑整体时产生一种简洁的感觉。

对于API的设计者，这些原则可以通过在类库使用类似的和（或者）统一的元素来实现。就拿[Kendo UI](http://www.kendoui.com/)来说吧，一个创建富web应用程序的javascript框架。Kendo UI提供了一系列的UI控件和工具，这些都可以通过一个简单的语法初始化。比如，如果我想从一个无序列表创建一个树形控件（[TreeView](http://demos.kendoui.com/web/treeview/index.html)），我只需调用以下方法:

    $("ul.tree").kendoTreeView({ /* Configuration goes here */ });

[![出色的 JavaScript API
设计秘诀](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-01.png "出色的 JavaScript API 设计秘诀")](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-01.png "出色的 JavaScript API 设计秘诀")

Kendo UI树形组件

如果我想通过一个列表创建一个面板[PanelBar](http://demos.kendoui.com/web/panelbar/index.html)，我只需稍微改成不同的调用方法.

    $("ul.panel").kendoPanelBar({ /* Configuration goes here */ });

[![出色的 JavaScript API
设计秘诀](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-02.png "出色的 JavaScript API 设计秘诀")](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-02.png "出色的 JavaScript API 设计秘诀")

Kendo UI 面板组件

Kendo UI
对所有组件使用一致的kendoX语法，促进整体的协调。更重要的，这样的设计依赖jQuery对象为DOM元素封装了统一的一层，使设计有利于所有熟悉jQuery开发者。数百万开发者使用类似的"土语"(jQuery语法)，Kendo
UI可以顺利地跨库使用。

另一个协调的案例是[Backbone](http://backbonejs.org/)的[object].extend语法创建对象，继承和扩展Backbone的[Models](http://backbonejs.org/#Model),[Views](http://backbonejs.org/#View),[Collections](http://backbonejs.org/#Collection)和[Routers](http://backbonejs.org/#Router)的功能。用如下代码就可以创建一个Backbone
Model，带有Backbone的完整支持，也可以自定义我需要的功能：

    var Book = Backbone.Model.extend({    initialize: function() { ... },    author: function() { ... },    pubDate: function() { ... },  });

统一和协调的目的是让API新手感觉熟悉和舒服。通过虽然功能不同，但是语法相同或相似，使API变得熟悉，大大减轻了开发者使用新工具的负担。

原则 2 ：平衡
-------------

下一条原则是平衡，组织元素时不会让某个部分过于重量级而盖过其它部分，使用时不稳定。艺术作品里，平衡就是视觉权重。即使不对称，作品中仍能感觉到不对称下的平衡，因为它遵循某种模式。上下文中的API设计的平衡，我特指代码的视觉权重和可预测性（看得出功能）。
平衡的API让人觉得其组成部分属于彼此，他们行为相同，或互补地完成一个目标。通过扩展，APIs也可以感觉平衡，它们允许开发人员简单的预测其他API并使用。如[Modernizr](http://modernizr.com/)的[属性测试](http://modernizr.com/docs/#howitworks)，它们的平衡性在两个方面，a)属性名对应HTML5和CSS术语和API名称，b)每个属性测试统一地返回true或false值。

    // All of these properties will be 'true' or 'false' for a given browser    Modernizr.geolocation    Modernizr.localstorage    Modernizr.webworkers    Modernizr.canvas    Modernizr.borderradius    Modernizr.boxshadow    Modernizr.flexbox

[![出色的 JavaScript API
设计秘诀](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-03.png "出色的 JavaScript API 设计秘诀")](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-03.png "出色的 JavaScript API 设计秘诀")

访问一个单一的属性来告诉开发者需要了解到的相关属性，以便通过它访问每一个其他属性，一个高质量API的强大之处就在于它的简单。平衡性也保证了我写和Modernizr交互的代码在每次读写时具有相同的视觉加权。如何在我使用和访问API时看起来和感觉上一样，而不顾我的惯例。另一方面，如果Modernizr添加了一个polyfill
Canvas的API，不仅仅是类库的视觉加权受到新API的影响，Modernizr的范围和用途也将大大扩大，并且我在和API交互时可预测性也受到了限制。

达到平衡的另一种方式是通过依靠开发人员对概念的熟悉获得可预测性的结果。一个典型的例子就是[jQuery's
selector
syntax](http://api.jquery.com/category/selectors/)（jquery选择器的语法），它映射css1-3的选择器到自己的DOM选择器引擎:

    $("#grid") // Selects by ID  $("ul.nav > li") // All LIs for the UL with class "nav"  $("ul li:nth-child(2)") // Second item in each list

通过使用一个熟悉的概念并且映射到自己的类库，jquery避免了新的选择器语法，同事也创建了一个机制让新用户通过一个可预测的API快速的把类库应用到生产。

原则 3: 相称性
--------------

接下来的原则是相称性，它是用来衡量一个作品中元素的大小和数量的。与其说一个好的API是一个小的api，相称性是相对于用途的大小。一个相称的API它的API表面和它的能力范围相匹配。

例如，[Moment.js](http://momentjs.com/)，一个流行的日期转换和格式化类库，可以把它视为具有相称性，因为它的API表层是紧凑的，它和类库的目的明确的匹配。Moment.js用于处理日期，它的API提供了便利的功能用来处理javascript
Date对象:

    moment().format('dddd');  moment().startOf('hour').fromNow();

[![出色的 JavaScript API
设计秘诀](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-04.png "出色的 JavaScript API 设计秘诀")](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-04.png "出色的 JavaScript API 设计秘诀")

对于一个有针对性的类库，像Moment.js，保持API的专注和简单是非常重要的。对于更大和更广阔的类库，API的大小应当能够反映出类库自身的能力。

拿[Underscore](http://underscorejs.org/)来说，作为一个多种用途功效的库，它提供大量便利的函数，这些被设计的函数是用来帮助开发者处理javascript集合，数组，函数和对象。它的API量远远超过像Moment.js这样的库，但是Underscore也是成比例的，因为库中每个函数都有自己的功效目的。考虑下面的例子，前两个例子用Underscore来处理数组，最后一个来处理字符串。

    _.each(["Todd", "Burke", "Derick"], function(name){     alert(name);   });    _.map([1, 2, 3], function(num){     return num * 3;   });    _.isNumber("ten"); // False

[![出色的 JavaScript API
设计秘诀](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-05.png "出色的 JavaScript API 设计秘诀")](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-05.png "出色的 JavaScript API 设计秘诀")

当一个库逐渐成长的过程中，维持比例的挑战变的更加具有严峻。为了确保添加进库的每个功能和函数都能加强库的目的，需要更多的考虑投入。对于一个大的库像kendo
UI,易扩展性的目的并不是意味着我们需要往库中添加每个特性。对于一个像kendo一样大的库，功能对象和特性应该证明它们的价值才能被库包含。例如， [Kendo UI's](http://www.kendoui.com/) JavaScript
基于[DataSource](http://docs.kendoui.com/getting-started/framework/datasource/overview), 它能够被用来查询和处理远程数据。

    var dataSource = new kendo.data.DataSource({    transport: {      read: {        url: "http://search.twitter.com/search.json",          dataType: "jsonp",          data: { q: "API Design" }        }      },    schema: { data: "results" }  });

初看第一眼，它好像一个习以为常的数据源，感觉超出了库本身的基本目的。然而今天网站的装饰都需要动态数据的支持。数据源的引入允许Kendo
UI可以使用一个稳定，并舒适的范式在整个库范围内来解决远程数据。

让一个API转变为一个名符其实的javascript垃圾抽屉，对于一个库的扩展这是危险的，但对于库来说，这也不是唯一的危险。掉入一个不让你的API伴随着库的成长圈套，或者由于某些人为原因，限制你库的大小，这些同样都是危险的！

不处理API增长最好的一个例子是jQuery的 [jQuery or \$
function](http://api.jquery.com/jQuery/)。和我一样有成千上万的开发者喜欢jQurey,
但它的门户方法是有点乱的，从DOM选择到在jQuery对象中包含DOM元素，这个方法提供了超过11个独立超负荷选择方式。

就大部分而言，有些不是十分相关的特性被硬塞进同一个API。从全局看，jQuery是一个大的库并且能被认为库比例是合理的。另一方面，当我们尝试将一个功能硬塞进一个单一接口并且不考虑库比例，jQuery方法也可以实现这样的功能。

如果你发现你正在将一个不相干的特性强塞进已经存在的方法，或者正在想法设法使一个并不适合API的函数的添加合理化，你需要做的改变是松开皮带并且让库呼吸。你的用户在调用一个新的可以自我描述名字的函数时，将会更加节省时间，并且不会给另一个已经存在的方法添加负担。

原则 4: 强调性
--------------

在艺术作品中，强调是利用对比来使作品中某一方面脱颖而出形成一个焦点。在许多API中，焦点可能是一个通道或者类库主要方法的锚点。另外一个关于强调性的例子可以参考"链接"方式或者[fluent API](http://en.wikipedia.org/wiki/Fluent_interface)，它通过增加强调性效果突出了类库中心对象。jquery倾向于从许多功能演示中的强调这个对象:

    $('ul.first').find('.overdue')    .css('background-color','red')    .end()    .find('.due-soon')    .css('background-color', 'yellow');

对于许多现代的类库，另一个关于强调的例子是可扩展性：类库创建者没有提供的那部分，会为你提供一个工具你可以自己完成相关扩展。

一个典型的例子可以参考 [jQuery'sfn(pronounced "effin")
namespace](http://docs.jquery.com/Plugins/Authoring),
一般的扩展点可以通过数不清的插件和补充的类库来完成:

    (function($) {    $.fn.kittehfy = function() {      return this.each(function(idx, el) {                var width = el.width,          height = el.height;        var src= "http://placekitten.com/";        el.src= src + width + "/" + height;      });    };  })(jQuery);

另一个扩展性的例子是Backbone的"extend"的函数，我们已经在本文中看到过:

    var DocumentRow = Backbone.View.extend({    tagName: "li",    className: "row",    events: {      "click .icon": "open",      "click .button.edit": "openEditDialog"    },    render: function() { ... }  });

[![出色的 JavaScript API
设计秘诀](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-06.png "出色的 JavaScript API 设计秘诀")](http://blog.jobbole.com/wp-content/uploads/2013/03/awesome-js-api-design-06.png "出色的 JavaScript API 设计秘诀")

可扩展作为强调性的一方面是因为它让我们意识到这样的一个事实，已有的类库并不意味着一切是完美的，同时也鼓励我们扩展适合自己的类库。当类库支持扩展时，它们不仅开启了新的用途，也使无数开发者受益于一般的用途。一个最好的例子是[Backbone.Marionette](http://marionettejs.com/)框架，一个扩展于Backbone的类库，它的目标是"简化大型的javascript应用程序的结构"。如果不是像Backbone那样的类库扩展，Marionette之类的类库将变得非常复杂，甚至不可能实现。

API 设计：不只为库代码编写者
----------------------------

如果你不是一位 JavaScript 库的编写者，而是一位 JavaScript
应用开发者或库的实现者，你可能会认为本文中的原则并不适用于你。毕竟，我们大多数人在听到"API"的时候，往往想到的是第三方库，一如我在本文中的示例一样

事实是，API ，如同其定义所言，无非就是一个提供给他人利用的隔离功能的接口。
现在，让我用一句老话来强调很重要的一点：编写模块化的 JS
代码是为了实用，使用的次数并不重要。

正如本文中引用的类库，你可以把自己的javascript代码公开接口给其他人。即使你的代码的用户是一小部分或内部团队——甚至你构建自己的一个私有类库——你不必像一个公开类库的作者那样考虑本文中API设计原则和这些原则的实现。利用API设计的好处是即使只针对一个使用者，也要像对数百万使用者一样设计。

因为API的设计代表着对开发者的用户体验，它就像UI设计对于最终用户的重要性一样。正如我们可以通过学习一些原则和参考一些好的或者坏的例子来开发出优秀的UI一样，我们也可以通过同样的方式学习到更好的API设计。应用文中提到的四个原则，以及其他你自己发现的原则，可以帮助你建立出优秀的API，并且让用户得到良好的体验。

#### 相关文章

-   [![2013年影响Web发展的五类API](http://blog.jobbole.com/wp-content/uploads/2012/12/QQ%E6%88%AA%E5%9B%BE20121206190505-150x150.jpg)](http://blog.jobbole.com/31080/)[2013年影响Web发展的五类API](http://blog.jobbole.com/31080/)
-   [![oracle-v-google-1308942960](http://blog.jobbole.com/wp-content/uploads/2012/06/oracle-v-google-1308942960-150x150.jpg)](http://blog.jobbole.com/21190/)[亲爱的Oracle:
    Java API不是艺术品](http://blog.jobbole.com/21190/)
-   [![如何编写优质的API文档](http://blog.jobbole.com/wp-content/plugins/wordpress-23-related-posts-plugin/static/thumbs/28.jpg)](http://blog.jobbole.com/14836/)[如何编写优质的API文档](http://blog.jobbole.com/14836/)
-   [![Java API
    设计清单](http://blog.jobbole.com/wp-content/uploads/2011/11/Java-programming-language-logo.jpg)](http://blog.jobbole.com/12958/)[Java
    API 设计清单](http://blog.jobbole.com/12958/)
-   [![彭博社开放其市场数据API](http://blog.jobbole.com/wp-content/uploads/2012/02/Bloomberg-market-data-API-made-public-150x150.jpg)](http://blog.jobbole.com/12631/)[Bloomberg公司开放其市场数据API](http://blog.jobbole.com/12631/)
-   [![为什么](http://blog.jobbole.com/wp-content/uploads/2011/12/api1-150x150.gif)](http://blog.jobbole.com/10197/)[为什么"开发人员友好性"是API设计的核心](http://blog.jobbole.com/10197/)
-   [![简讯：W3C 发布 CSS 选择器 API
    规范](http://blog.jobbole.com/wp-content/uploads/2012/07/W3C-NEWS-ARCHIVE.jpg)](http://blog.jobbole.com/23223/)[简讯：W3C
    发布 CSS 选择器 API 规范](http://blog.jobbole.com/23223/)
-   [![Javascript编程风格](http://blog.jobbole.com/wp-content/uploads/2012/04/JavaScript-coding-style1-150x150.jpg)](http://blog.jobbole.com/18443/)[Javascript编程风格](http://blog.jobbole.com/18443/)
-   [![ProgrammableWeb预言：所有公司都将拥有自己的API](http://blog.jobbole.com/wp-content/uploads/2012/02/programmableweb-predicts-that-every-company-will-have-apis-150x150.png)](http://blog.jobbole.com/12886/)[ProgrammableWeb预言：所有公司都将拥有自己的API](http://blog.jobbole.com/12886/)
-   [![JavaScript
    游戏中的面向对象的设计](http://blog.jobbole.com/wp-content/uploads/2013/02/javascript-logo7-150x150.png)](http://blog.jobbole.com/31683/)[JavaScript
    游戏中的面向对象的设计](http://blog.jobbole.com/31683/)

[出色的 JavaScript API
设计秘诀](http://blog.jobbole.com/36136/)，首发于[博客 -
伯乐在线](http://blog.jobbole.com)。

\

Feedly. Feed your mind.
[http://www.feedly.com](http://www.feedly.com/#mail)
