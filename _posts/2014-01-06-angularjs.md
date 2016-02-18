--- 
layout: post 
title: AngularJS 数据建模 
date:'2014-01-06T17:18:00.002+08:00' 
author: Wenh Q
tags:
modified\_time: '2014-01-06T17:25:16.720+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-1734684235340700015
blogger\_orig\_url: http://binaryware.blogspot.com/2014/01/angularjs.html
--- 
[AngularJS
数据建模](http://blog.jobbole.com/54817/)  通过 [博客 -
伯乐在线](http://blog.jobbole.com/)





我们知道，AngularJS并没有自带立等可用的数据建模方案。而是以相当抽象的方式，让我们在controller中使用JSON数据作为模型。但是随着时间的推移和项目的成长，我意识到这种建模的方式不再能满足我们项目的需求。在这篇文章中我会介绍在我的AngularJS应用中处理数据建模的方式。



为Controller定义模型



让我们从一个简单的例子开始。我想要显示一个书本(book)的页面。下面是控制器(Controller)：



BookControllerapp.controller('BookController', 
['
$scope',
function(
$scope) { 
$scope.book = { id: 1, name: 'Harry Potter',
author: 'J. K. Rowling', stores: 
[ { id: 1, name: 'Barnes & Noble',
quantity: 3}, { id: 2, name: 'Waterstones', quantity: 2}, { id: 3, name:
'Book Depository', quantity: 5} 
] }; }
]);





这个控制器创建了一个书本的模型，我们可以在后面的模板中(templage)中使用它。



template for displaying a book

&lt;div ng-controller="BookController"&gt; Id: &lt;span
ng-bind="[book.id](http://book.id/)"&gt;&lt;/span&gt; &lt;br/&gt;
Name:&lt;input type="text" ng-model="[book.name](http://book.name/)"
/&gt; &lt;br/&gt; Author: &lt;input type="text" ng-model="book.author"
/&gt; &lt;/div&gt;







假如我们需要从后台的api获取书本的数据，我们需要使用
$http:



BookController with 
$httpapp.controller('BookController', 
['
$scope',
'
$http', function(
$scope, 
$http) { var bookId = 1;

$http.get('ourserver/books/' + bookId).success(function(bookData) {

$scope.book = bookData; }); }
]);





注意到这里的bookData仍然是一个JSON对象。接下来我们想要使用这些数据做一些事情。比如，更新书本信息，删除书本，甚至其他的一些不涉及到后台的操作，比如根据请求的图片大小生成一个书本图片的url，或者判断书本是否有效。这些方法都可以被定义在控制器中。



BookController with several book actionsapp.controller('BookController',

['
$scope', '
$http', function(
$scope, 
$http) { var bookId = 1;

$http.get('ourserver/books/' + bookId).success(function(bookData) {

$scope.book = bookData; }); 
$scope.deleteBook = function() {

$http.delete('ourserver/books/' + bookId); }; 
$scope.updateBook =
function() { 
$http.put('ourserver/books/' + bookId, 
$scope.book); };

$scope.getBookImageUrl = function(width, height) { return
'our/image/service/' + bookId + '/width/height'; }; 
$scope.isAvailable
= function() { if (!
$scope.book.stores || 
$scope.book.stores.length
=== 0) { return false; } return 
$scope.book.stores.some(function(store)
{ return store.quantity &gt; 0; }); }; }
]);





然后在我们的模板中：



template for displaying a complete book

&lt;div ng-controller="BookController"&gt; &lt;div ng-style="{
backgroundImage: 'url(' + getBookImageUrl(100, 100) + ')'
}"&gt;&lt;/div&gt; Id: &lt;span
ng-bind="[book.id](http://book.id/)"&gt;&lt;/span&gt; &lt;br/&gt;
Name:&lt;input type="text" ng-model="[book.name](http://book.name/)"
/&gt; &lt;br/&gt; Author: &lt;input type="text" ng-model="book.author"
/&gt; &lt;br/&gt; Is Available: &lt;span ng-bind="isAvailable() ? 'Yes'
: 'No' "&gt;&lt;/span&gt; &lt;br/&gt; &lt;button
ng-click="deleteBook()"&gt;Delete&lt;/button&gt; &lt;br/&gt; &lt;button
ng-click="updateBook()"&gt;Update&lt;/button&gt; &lt;/div&gt;







在controllers之间共享Model



如果书本的结构和方法只和一个控制器有关，那我们现在的工作已经可以应付。但是随着应用的增长，会有其他的控制器也需要和书本打交道。那些控制器很多时候也需要获取书本，更新它，删除它，或者获得它的图片url以及看它是否有效。因此，我们需要在控制器之间共享这些书本的行为。我们需要使用一个返回书本行为的factory来实现这个目的。在动手写一个factory之前，我想在这里先提一下，我们创建一个factory来返回带有这些book辅助方法的对象，但我更倾向于使用prototype来构造一个Book类，我觉得这是更正确的选择：



Book model serviceapp.factory('Book', 
['
$http', function(
$http) {
function Book(bookData) { if (bookData) { this.setData(bookData): } //
Some other initializations related to book }; Book.prototype = {
setData: function(bookData) { angular.extend(this, bookData); }, load:
function(id) { var scope = this; 
$http.get('ourserver/books/' +
bookId).success(function(bookData) { scope.setData(bookData); }); },
delete: function() { 
$http.delete('ourserver/books/' + bookId); },
update: function() { 
$http.put('ourserver/books/' + bookId, this); },
getImageUrl: function(width, height) { return 'our/image/service/' +
[this.book.id](http://this.book.id/) + '/width/height'; }, isAvailable:
function() { if (!this.book.stores || this.book.stores.length === 0) {
return false; } return this.book.stores.some(function(store) { return
store.quantity &gt; 0; }); } }; return Book; }
]);





这种方式下，书本相关的所有行为都被封装在Book服务内。现在，我们在BookController中来使用这个亮眼的Book服务。



BookController that uses Book modelapp.controller('BookController',

['
$scope', 'Book', function(
$scope, Book) { 
$scope.book = new
Book(); 
$scope.book.load(1); }
]);





正如你看到的，控制器变得非常简单。它创建一个Book实例，指派给scope，并从后台加载。当书本被加载成功时，它的属性会被改变，模板也随着被更新。记住其他的控制器想要使用书本功能，只要简单地注入Book服务即可。此外，我们还要改变template使用book的方法。



template that uses book instance

&lt;div ng-controller="BookController"&gt; &lt;div ng-style="{
backgroundImage: 'url(' + book.getImageUrl(100, 100) + ')'
}"&gt;&lt;/div&gt; Id: &lt;span
ng-bind="[book.id](http://book.id/)"&gt;&lt;/span&gt; &lt;br/&gt;
Name:&lt;input type="text" ng-model="[book.name](http://book.name/)"
/&gt; &lt;br/&gt; Author: &lt;input type="text" ng-model="book.author"
/&gt; &lt;br/&gt; Is Available: &lt;span ng-bind="book.isAvailable() ?
'Yes' : 'No' "&gt;&lt;/span&gt; &lt;br/&gt; &lt;button
ng-click="book.delete()"&gt;Delete&lt;/button&gt; &lt;br/&gt; &lt;button
ng-click="book.update()"&gt;Update&lt;/button&gt; &lt;/div&gt;







到这里，我们知道了如何建模一个数据，把他的方法封装到一个类中，并且在多个控制器中共享它，而不需要写重复代码。





在多个控制器中使用相同的书本模型



我们定义了一个书本模型，并且在多个控制器中使用了它。在使用了这种建模架构之后你会注意到有一个严重的问题。到目前为止，我们假设多个控制器对书本进行操作，但如果有两个控制器同时处理同一本书会是什么情况呢？



假设我们页面的一块区域我们所有书本的名称，另一块区域可以更新某一本书。对应这两块区域，我们有两个不同的控制器。第一个加载书本列表，第二个加载特定的一本书。我们的用户在第二块区域中修改了书本的名称并且点击"更新"按钮。更新操作成功后，书本的名称会被改变。但是在书本列表中，这个用户始终看到的是修改之前的名称！真实的情况是我们对同一本书创建了两个不同的书本实例——一个在书本列表中使用，而另一个在修改书本时使用。当用户修改书本名称的时候，它实际上只修改了后一个实例中的属性。然而书本列表中的书本实例并未得到改变。



解决这个问题的办法是在所有的控制器中使用相同的书本实例。在这种方式下，书本列表和书本修改的页面和控制器都持有相同的书本实例，一旦这个实例发生变化，就会被立刻反映到所有的视图中。那么按这种方式行动起来，我们需要创建一个booksManager服务（我们没有大写开头的b字母，是因为这是一个对象而不是一个类）来管理所有的书本实例池，并且富足返回这些书本实例。如果被请求的书本实例不在实例池中，这个服务会创建它。如果已经在池中，那么就直接返回它。请牢记，所有的加载书本的方法最终都会被定义在booksManager服务中，因为它是唯一的提供书本实例的组件。



booksManager serviceapp.factory('booksManager', 
['
$http', '
$q',
'Book', function(
$http, 
$q, Book) { var booksManager = { \_pool: {},
\_retrieveInstance: function(bookId, bookData) { var instance =
this.\_pool
[bookId
]; if (instance) { instance.setData(bookData); }
else { instance = new Book(bookData); this.\_pool
[bookId
] = instance;
} return instance; }, \_search: function(bookId) { return
this.\_pool
[bookId
]; }, \_load: function(bookId, deferred) { var scope
= this; 
$http.get('ourserver/books/' + bookId)
.success(function(bookData) { var book =
scope.\_retrieveInstance(bookData.id, bookData); deferred.resolve(book);
}) .error(function() { deferred.reject(); }); }, /
* Public Methods 
*/
/
* Use this function in order to get a book instance by it's id 
*/
getBook: function(bookId) { var deferred = 
$q.defer(); var book =
this.\_search(bookId); if (book) { deferred.resolve(book); } else {
this.\_load(bookId, deferred); } return deferred.promise; }, /
* Use
this function in order to get instances of all the books 
*/
loadAllBooks: function() { var deferred = 
$q.defer(); var scope = this;

$http.get('ourserver/books) .success(function(booksArray) { var books =

[
]; booksArray.forEach(function(bookData) { var book =
scope.\_retrieveInstance(bookData.id, bookData); books.push(book); });
deferred.resolve(books); }) .error(function() { deferred.reject(); });
return deferred.promise; }, /
* This function is useful when we got
somehow the book data and we wish to store it or update the pool and get
a book instance in return 
*/ setBook: function(bookData) { var scope =
this; var book = this.\_search(bookData.id); if (book) {
book.setData(bookData); } else { book =
scope.\_retrieveInstance(bookData); } return book; }, }; return
booksManager; }
]);





下面是我们的EditableBookController和BooksListController两个控制器的代码：



EditableBookController and BooksListController that uses
booksManagerapp.factory('Book', 
['
$http', function(
$http) { function
Book(bookData) { if (bookData) { this.setData(bookData): } // Some other
initializations related to book }; Book.prototype = { setData:
function(bookData) { angular.extend(this, bookData); }, delete:
function() { 
$http.delete('ourserver/books/' + bookId); }, update:
function() { 
$http.put('ourserver/books/' + bookId, this); },
getImageUrl: function(width, height) { return 'our/image/service/' +
[this.book.id](http://this.book.id/) + '/width/height'; }, isAvailable:
function() { if (!this.book.stores || this.book.stores.length === 0) {
return false; } return this.book.stores.some(function(store) { return
store.quantity &gt; 0; }); } }; return Book; }
]);





需要注意的是，模块（template）中还是保持原来使用book实例的方式。现在应用中只持有一个id为1的book实例，它发生的所有改变都会被反映到使用它的各个页面上。



总结



在这片文章中，我建议了AngularJS中建模数据的一种架构。首先，我展示了AngularJS默认的数据模型绑定，然后讲了如何封装模型的方法和操作从而可以在不同的控制其中重用它们，最后我解释了如何管理模型实例从而使得所有的改变都能被反映到应用中各个相关的视图上。



希望这篇文章能在如何实现数据建模上给你一些启示。



相关文章

[七步从AngularJS菜鸟到专家（6）：服务](http://blog.jobbole.com/49745/)

[七步从AngularJS菜鸟到专家（7）：Routing](http://blog.jobbole.com/50533/)

[AngularJS 中的一些坑](http://blog.jobbole.com/52857/)

[2013年AngularJS学习资源精选](http://blog.jobbole.com/54716/)

[构建自己的AngularJS（1）：Scope和Digest](http://blog.jobbole.com/51558/)

[优化AngularJS：1200毫秒到35毫秒的蜕变](http://blog.jobbole.com/51180/)

[七步从Angular.JS菜鸟到专家（3）：数据绑定和AJAX](http://blog.jobbole.com/48780/)

[七步从AngularJS菜鸟到专家（4和5）：指令和表达式](http://blog.jobbole.com/50022/)

[七步从Angular.JS菜鸟到专家（1）：如何开始](http://blog.jobbole.com/46779/)

[七步从Angular.JS菜鸟到专家（2）：Scopes](http://blog.jobbole.com/48593/)



[AngularJS 数据建模](http://blog.jobbole.com/54817/)，首发于[博客 -
伯乐在线](http://blog.jobbole.com/)。
