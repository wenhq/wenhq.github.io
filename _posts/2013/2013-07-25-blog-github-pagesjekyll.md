--- layout: post title: "搭建一个免费的，无限流量的Blog----github
Pages和Jekyll入门" date: '2013-07-25T19:38:00.000+08:00' author: Wenh Q
tags: modified\_time: '2013-07-25T19:38:00.128+08:00' thumbnail:
https://lh4.googleusercontent.com/-XXBW-TjbgmwKI3RgyvQL1aw31wJiuwJCVnJUsnoXkNCv9kDc9CDPajJ1J1FaS4EZ5cEIFVitl5WgZs-GhACmdNrEB7sN8b3cMMkxBmEOxpsIBDpaLw=s72-c
blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-3957427763204375731
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/07/blog-github-pagesjekyll.html ---

[\
搭建一个免费的，无限流量的Blog----github
Pages和Jekyll入门](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)

于 12-8-25 通过 [阮一峰的网络日志](http://www.ruanyifeng.com/blog/)

[](http://www.ruanyifeng.com/blog/)

喜欢写Blog的人，会经历三个阶段。

第一阶段，刚接触Blog，觉得很新鲜，试着选择一个免费空间来写。

第二阶段，发现免费空间限制太多，就自己购买域名和空间，搭建独立博客。

第三阶段，觉得独立博客的管理太麻烦，最好在保留控制权的前提下，让别人来管，自己只负责写文章。

大多数Blog作者，都停留在第一和第二阶段，因为第三阶段不太容易到达：你很难找到俯首听命、愿意为你管理服务器的人。

![](https://lh4.googleusercontent.com/-XXBW-TjbgmwKI3RgyvQL1aw31wJiuwJCVnJUsnoXkNCv9kDc9CDPajJ1J1FaS4EZ5cEIFVitl5WgZs-GhACmdNrEB7sN8b3cMMkxBmEOxpsIBDpaLw)

但是两年前，情况出现变化，一些程序员开始在[ｇithub](https://github.com/)网站上搭建blog。他们既拥有绝对管理权，又享受github带来的便利----不管何时何地，只要向主机提交commit，就能发布新文章。更妙的是，这一切还是免费的，github提供无限流量，世界各地都有理想的访问速度。

今天，我就来示范如何在github上搭建Blog，你可以从中掌握github的Pages功能，以及Jekyll软件的基本用法。更重要的是，你会体会到一种建立网站的全新思路。

![](https://lh6.googleusercontent.com/rhOCffuvEDkzb8W5U4ghiprpiIYeG6Z6xc_oV2rmf1QiXYXZwaEgee7v48W-x28_EImH8cppntKZD1DGmjvWotRaP9PAH6jAI_eQhrAUptzfD32obz4)

一、Github Pages 是什么？

如果你对编程有所了解，就一定听说过[github](https://github.com/)。它号称程序员的Facebook，有着极高的人气，许多重要的项目都托管在上面。

简单说，它是一个具有版本管理功能的代码仓库，每个项目都有一个主页，列出项目的源文件。

![](https://lh3.googleusercontent.com/S4IFqzjd3tNUXGfoLffz7ia7TlzrfXdq6l0hf8rRpUyJV8r-3WFV4Rm2bGZYBA0rsFcpZDWLiAVWU6qiOhZUhxmJDw0kCUkrF8cAc3jqAUEqbb66PSU)

但是对于一个新手来说，看到一大堆源码，只会让人头晕脑涨，不知何处入手。他希望看到的是，一个简明易懂的网页，说明每一步应该怎么做。因此，github就设计了[Pages功能](http://pages.github.com/)，允许用户自定义项目首页，用来替代默认的源码列表。所以，github
Pages可以被认为是用户编写的、托管在github上的静态网页。

![](https://lh4.googleusercontent.com/4Q1LssLdaq54GWx5bgiDZ3c7DDOp53LnuozBLTbYl-qfTiEM7oT0-QzmMWQAKLaNIJZ73ZqRMAQ5PR3KHUtmh8vgbmGWFsrwixsPH2Tcb5rM31JpUIg)

github提供模板，允许[站内生成](https://help.github.com/articles/creating-pages-with-the-automatic-generator)网页，但也允许用户自己编写网页，然后上传。有意思的是，这种上传并不是单纯的上传，而是会经过Jekyll程序的再处理。

二、Jekyll是什么？

[Jekyll](http://jekyllrb.com/)（发音/'dʒiːk
əl/，"杰克尔"）是一个静态站点生成器，它会根据网页源码生成静态文件。它提供了模板、变量、插件等功能，所以实际上可以用来编写整个网站。

![](https://lh4.googleusercontent.com/aNTHWnBMc-nHGCeZaB3F-OVjYcKp-fu1Sauce4rXVzcw3DyGfQW7z3W3bHLPJBkRqjoBNY_HCjuBozCOWGBdniNGRtP5secEbCdbvLK79VI-YwRZJfg)

整个思路到这里就很明显了。你先在本地编写符合Jekyll规范的网站源码，然后上传到github，由github生成并托管整个网站。

这种做法的好处是：

\* 免费，无限流量。

\* 享受git的版本管理功能，不用担心文章遗失。

\*
你只要用自己喜欢的编辑器写文章就可以了，其他事情一概不用操心，都由github处理。

它的缺点是：

\* 有一定技术门槛，你必须要懂一点git和网页开发。

\*
它生成的是静态网页，添加动态功能必须使用外部服务，比如评论功能就只能用[disqus](http://disqus.com/)。

\*
它不适合大型网站，因为没有用到数据库，每运行一次都必须遍历全部的文本文件，网站越大，生成时间越长。

但是，综合来看，它不失为搭建中小型Blog或项目主页的最佳选项之一。

三、一个实例

下面，我举一个实例，演示如何在github上搭建blog，你可以跟着一步步做。为了便于理解，这个blog只有最基本的功能。

在搭建之前，你必须已经安装了[git](http://git-scm.com/book/en/Getting-Started-Installing-Git)，并且有[github](https://github.com/)账户。

第一步，创建项目。

在你的电脑上，建立一个目录，作为项目的主目录。我们假定，它的名称为jekyll\_demo。

\$ mkdir jekyll\_demo

对该目录进行git初始化。

\$ cd jekyll\_demo

\$ git init

然后，创建一个没有父节点的分支gh-pages。因为github规定，只有该分支中的页面，才会生成网页文件。

\$ git checkout --orphan gh-pages

以下所有动作，都在该分支下完成。

第二步，创建设置文件。

在项目根目录下，建立一个名为\_config.yml的文本文件。它是jekyll的设置文件，我们在里面填入如下内容，其他设置都可以用默认选项，具体解释参见[官方网页](https://github.com/mojombo/jekyll/wiki/Configuration)。

baseurl: /jekyll\_demo

目录结构变成：

/jekyll\_demo

|-- \_config.yml

第三步，创建模板文件。

在项目根目录下，创建一个\_layouts目录，用于存放模板文件。

\$ mkdir \_layouts

进入该目录，创建一个default.html文件，作为Blog的默认模板。并在该文件中填入以下内容。

\<!DOCTYPE html\>

\<html\>

\<head\>

\<meta http-equiv="content-type" content="text/html; charset=utf-8" /\>

\<title\>{{ "{{" }} page.title }}\</title\>

\</head\>

\<body\>

{{ "{{" }} content }}

\</body\>

\</html\>

Jekyll使用[Liquid模板语言](https://github.com/shopify/liquid/wiki/liquid-for-designers)，{{
"{{" }} page.title }}表示文章标题，{{ "{{" }} content
}}表示文章内容，更多模板变量请参考[官方文档](https://github.com/mojombo/jekyll/wiki/Template-Data)。

目录结构变成：

/jekyll\_demo

|-- \_config.yml

|-- \_layouts

|   |-- default.html

第四步，创建文章。

回到项目根目录，创建一个\_posts目录，用于存放blog文章。

\$ mkdir \_posts

进入该目录，创建第一篇文章。文章就是普通的文本文件，文件名假定为2012-08-25-hello-world.html。(注意，文件名必须为"年-月-日-文章标题.后缀名"的格式。如果网页代码采用html格式，后缀名为html；如果采用[markdown](http://daringfireball.net/projects/markdown/)格式，后缀名为md。）

在该文件中，填入以下内容：

---

layout: default

title: 你好，世界

---

\<h2\>{{ "{{" }} page.title }}\</h2\>

\<p\>我的第一篇文章\</p\>

\<p\>{{ "{{" }} page.date | date\_to\_string }}\</p\>

每篇文章的头部，必须有一个[yaml文件头](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter)，用来设置一些元数据。它用三根短划线"---"，标记开始和结束，里面每一行设置一种元数据。"layout:default"，表示该文章的模板使用\_layouts目录下的default.html文件；"title:
你好，世界"，表示该文章的标题是"你好，世界"，如果不设置这个值，默认使用嵌入文件名的标题，即"hello
world"。

在yaml文件头后面，就是文章的正式内容，里面可以使用模板变量。{{ "{{" }}
page.title }}就是文件头中设置的"你好，世界"，{{ "{{" }} page.date
}}则是嵌入文件名的日期（也可以在文件头重新定义date变量），"|
date\_to\_string"表示将page.date变量转化成人类可读的格式。

目录结构变成：

/jekyll\_demo

|-- \_config.yml

|-- \_layouts

|   |-- default.html

|-- \_posts

|   |-- 2012-08-25-hello-world.html

第五步，创建首页。

有了文章以后，还需要有一个首页。

回到根目录，创建一个index.html文件，填入以下内容。

---

layout: default

title: 我的Blog

---

\<h2\>{{ "{{" }} page.title }}\</h2\>

\<p\>最新文章\</p\>

\<ul\>

{{ "{%" }} for post in site.posts %}

\<li\>{{ "{{" }} post.date | date\_to\_string }} \<a href="{{ "{{" }}
site.baseurl }}{{ "{{" }} post.url }}"\>{{ "{{" }} post.title
}}\</a\>\</li\>

{{ "{%" }} endfor %}

\</ul\>

它的Yaml文件头表示，首页使用default模板，标题为"我的Blog"。然后，首页使用了{{
"{%" }} for post in site.posts
%}，表示对所有帖子进行一个遍历。这里要注意的是，Liquid模板语言规定，输出内容使用两层大括号，单纯的命令使用一层大括号。至于{{
"{{" }}site.baseurl}}就是\_config.yml中设置的baseurl变量。

目录结构变成：

/jekyll\_demo

|-- \_config.yml

|-- \_layouts

|   |-- default.html

|-- \_posts

|   |-- 2012-08-25-hello-world.html

|-- index.html

第六步，发布内容。

现在，这个简单的Blog就可以发布了。先把所有内容加入本地git库。

\$ git add .

\$ git commit -m "first post"

然后，在github上创建一个名为jekyll\_demo的repo。再将本地内容推送到github。注意，下面命令中的username，要替换成你的username。

\$ git remote add origin
[https://github.com/](https://github.com/)username/jekyll\_demo.git

\$ git push origin gh-pages

上传成功之后，等10分钟左右，访问[http://username.github.com/jekyll\_demo/](http://username.github.com/jekyll_demo/)就可以看到Blog已经生成了（将username换成你的用户名）。

首页：

![](https://lh6.googleusercontent.com/u8bvwJ5QFOiidxzGWooCLn2_CLDSNWjyC6N7A2awUVWsaUfgNMqPIOK1tsY0wXLc368vEZCzbaanaDq6cgVy9PjVrgZcczuNYAlwm_QWTKmIrSgAxcQ)

文章页面：

![](https://lh6.googleusercontent.com/evcPmo-D7SGfJPsCDf8h_5Xy5AvNrCyBL1UG-GKNN8O5zTxkybrlcw8YDDFGxC60dzo6ZslXIMDvlVLVScEb4G6WLEDGZYnaq8RptNsnXjIxMkfoHmM)

第七步，绑定域名。

如果你不想用[http://username.github.com/jekyll\_demo/](http://username.github.com/jekyll_demo/)这个域名，可以换成自己的域名。

具体方法是在repo的根目录下面，新建一个名为CNAME的文本文件，里面写入你要绑定的域名，比如[example.com](http://example.com/)或者[xxx.example.com](http://xxx.example.com/)。

如果绑定的是顶级域名，则DNS要新建一条A记录，指向204.232.175.78。如果绑定的是二级域名，则DNS要新建一条CNAME记录，指向[username.github.com](http://username.github.com/)（请将username换成你的用户名）。此外，别忘了将\_config.yml文件中的baseurl改成根目录"/"。

至此，最简单的Blog就算搭建完成了。进一步的完善，请参考Jekyll创始人的[示例库](https://github.com/mojombo/tpw)，以及其他用Jekyll搭建的[blog](https://github.com/mojombo/jekyll/wiki/Sites)。

（完）

###  {style="color: black; direction: ltr; font-family: "Arial"; font-size: 14pt; font-weight: bold; height: 14pt; line-height: 1.6; margin-bottom: 0; margin-left: 31.5pt; margin-right: 31.5pt; margin-top: 0; padding-bottom: 20.8pt; padding-left: 0; padding-right: 0; padding-top: 4.8pt; text-align: left;"}
