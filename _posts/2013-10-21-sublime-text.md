--- layout: post title: "开源中国：编码神器 Sublime Text
包管理工具及扩展大全" date: '2013-10-21T15:55:00.002+08:00' author: Wenh
Q tags: - tech modified\_time: '2013-10-21T15:55:36.083+08:00'
blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-7052857559617414173
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/10/sublime-text.html ---

[编码神器 Sublime Text
包管理工具及扩展大全](http://www.oschina.net/news/45219/sublime-text-package-manager)

Via [开源中国社区最新新闻](http://www.oschina.net/?from=rss)

Sublime Text
是程序员们公认的编码神奇，拥有漂亮的用户界面和强大的功能，例如代码缩略图，多重选择，快捷命令等。还可自定义键绑定，菜单和工具栏。Sublime
Text 的主要功能包括：拼写检查，书签，即时项目切换，多选择，多窗口等等。\
更重要的是，Sublime Text
易于扩展，众多开发人员为其贡献插件，而且通过包管理工具——Package Control
可以方便安装和管理。这里分享的这个网站([https://sublime.wbond.net/](https://sublime.wbond.net/)
)是 Package Control 的作者整理的 Sublime Text
插件集合，前端开发的民工们再也不用去网上一个个找了。赶紧收藏起来吧。\
[![ttt2](http://static.oschina.net/uploads/img/201310/21071720_X609.jpg)](http://cdn2.jobbole.com/2013/10/ttt2.jpg "编码神器 Sublime Text 包管理工具及扩展大全")\
\
**Package Control 安装方法**\
首先通过快捷键 ctrl+\` 或者 View \> Show Console
打开控制台，然后粘贴相应的 Python 安装代码。\
Sublime Text 2 安装代码：\

    import urllib2,os;   pf='Package Control.sublime-package';   ipp = sublime.installed_packages_path();   os.makedirs( ipp ) if not os.path.exists(ipp) else None;   urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( )));   open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read());   print( 'Please restart Sublime Text to finish installation')

\
Sublime Text 3 安装代码：\

    import urllib.request,os;   pf = 'Package Control.sublime-package';   ipp = sublime.installed_packages_path();   urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) );   open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

\
**常用扩展推荐**\

1.  **[Emmet](https://sublime.wbond.net/packages/Emmet)——**Emmet
    官方提供的 Sublime Text 扩展；
2.  [**Sublime​Linter**](http://github.com/SublimeLinter/SublimeLinter)——代码校验插件，支持
    HTML、CSS、JS、PHP、Java、C++ 等16种语言；
3.  [**HTML5**](https://github.com/mrmartineau/HTML5)——HTML5 bundle for
    Sublime Text 2；
4.  **[Alignment](https://sublime.wbond.net/packages/Alignment)——**代码对齐插件；
5.  **[Bracket​Highlighter](https://sublime.wbond.net/packages/BracketHighlighter)——**括号高亮匹配；
6.  **[Git](https://sublime.wbond.net/packages/Git)——**整合 Git
    功能的插件；
7.  [**jQuery**](https://sublime.wbond.net/packages/jQuery)——代码智能提示插件；
8.  **[LESS](https://sublime.wbond.net/packages/LESS)——**LESS
    代码高亮插件；
9.  **[Js​Format](https://sublime.wbond.net/packages/JsFormat)——**JavaScript
    代码格式化插件；**\
    **
10. **[Tag](https://sublime.wbond.net/packages/Tag)——**HTML/XML
    标签缩进、补全和校验；
11. **[LiveReload](https://sublime.wbond.net/packages/LiveReload)——**让页面即时刷新；
12. **[Pretty
    JSON](https://sublime.wbond.net/packages/Pretty%20JSON)——**JSON美化扩展；
13. **[Can I
    Use](https://sublime.wbond.net/packages/Can%20I%20Use)——**查询 CSS
    属性兼容情况；
14. **[Coffee​Script](https://sublime.wbond.net/packages/CoffeeScript)——**Coffee​Script
    代码高亮，校验和编译等；
15. **[Color​Picker](https://sublime.wbond.net/packages/ColorPicker)——**跨平台取色器插件；

