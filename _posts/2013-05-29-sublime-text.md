--- 
layout: post 
title: Sublime Text 使用体验 
date: '2013-05-29T20:16:00.000+08:00' 
author: Wenh Q
tags:
modified\_time: '2013-05-29T20:16:21.938+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-5623246908423316105
blogger\_orig\_url: http://binaryware.blogspot.com/2013/05/sublime-text.html
---
<div>

[Sublime Text
使用体验](http://www.oschina.net/news/40902/the-sublime-text-experiment)

</div>

<div
style="font-family: sans-serif; margin: 0px 10px; overflow: auto; width: 100%;">

<div style="margin-bottom: 0.5em;">

于 13-5-28 通过
[开源中国社区最新新闻](http://www.oschina.net/?from=rss){.f}

</div>



![Edit side by side in
widescreen](http://static.oschina.net/uploads/img/201201/27115500_4ZUk.png)

说服我使用一种新编辑器是很难的，但鉴于听到[Sublime
Text](http://www.sublimetext.com/)获得如此多的赞扬，我最终决定试一下。毕竟，比起我的又老又生硬的[Vim](http://www.vim.org/)，Sublime
Text界面好看的多，布局更顺手——我是对界面很挑剔的。于是，在tuts+上看了几篇资料后，我就开始在工作中试用起来。下面就是我的一些体验。

### 先说Sublime Text的优点：

-   Sublime
    Text**跨平台**。如果一种编辑器只能运行在一种平台上，我是绝对不会考虑它的，跨平台是必要条件。
-   Sublime
    Text不仅跨平台，而且在所有平台上看起来都很漂亮。很流畅，响应灵敏，很吸引眼球。
-   Sublime
    Text的一个独特的功能是支持**多光标**操作：它能让你对文本中的多个地方同时做修改，你可以看到多个地方在你输入的时候同时发生变化。重构时用它很方便，比如修改一个变量名。
-   Sublime Text的**command
    palette**能够让你轻松的做任何操作，勉去了记忆众多快捷键的痛苦。你只需要打开command
    palette ，输入几个字母，Sublime
    Text会用模糊查询给你提供建议和选项。跟直接使用快捷键几乎没区别。
-   所有的操作和选项都很直观的放在菜单里。虽然我并不是很多的使用菜单(感谢command
    palette)，但你可以在里面查找你想要的操作，学会这个编辑器里有哪些功能。
-   打开文件很快，而且可以通过**Go to
    anything**弹出面板转到文件中任何地方。我使用Vim时一直使用[ctrlp](http://www.vim.org/scripts/script.php?script_id=3736)来做这种事情，但Sublime
    Text支持转到某个位置和某行，非常方便。
-   编辑文件的同时你可以启动**编译**，看到输出结果，这种交互能让你快速发现编译错误。这点集成的非常好，非常顺滑，比Vim要好。
-   在Sublime
    Text里你可以使用**Vim命令**进行光标移到和编辑文本，很显然，如果你习惯Vim，你可以在Sublime
    Text了进行闪电般的快速编辑。
-   当然，Sublime
    Text里还提供了很多非常有用的文本操作命令，你可以设定快捷键绑定这些操作。
-   Sublime
    Text扩展性很好，它使用了Python式的插件系统。这显然是一个很大和活跃的社区，可以为它提供丰富的插件，这也意味着你可以在网上找的任何你想要的插件来集成你想要的功能。

### 不幸的是，Sublime Text也有不少缺点：

-   尽管Sublime
    Text是跨平台的，但它看起来并不是为同时在多个平台上的用户设计的。比如，快捷键在各个平台上都不同，这比由*Cmd*变成*Ctrl*要严重的多。这可能是由于Sublime
    Text的设计倾向于平台本地化。在不同的平台上记忆不同的快捷键无疑是讨厌的，经常切换平台时常会弄错。
-   Sublime
    Text的配置文件是存在固定格式、平台特定的文件里的。可能同样是因为Sublime
    Text希望最大化的和操作系统本地集成的原因。然而，这就使得你将配置文件存放在Git版本库里变得很麻烦，在不同的机器，不同的操作系统上不能共享。
-   Sublime
    Text使用JSON格式存放配置参数，这适合是无可非议，但确有个很大的缺点：设置的每一行结尾都需要一个逗号，除非最后一行。很多在我修改配置时都忘
    了这一点。使用JSON的另外一个缺点是，这种格式不是很强大：因为它基本上都是key/value值，你无法添加条件依赖(比如，在不同的机器上不同的
    配置)，或引用其它文件。
-   Sublime
    Text没有命令行界面。我经常需要编辑远程系统上的文件，通常只有一个命令行终端。这种情况下，我只能用其它编辑器。
-   Sublime
    Text很明显的另外一个缺点：它不开源，而且收费版的价格也不便宜。我并不是反对任何闭源软件，而且如果一个编辑器我需要天天使用它，我很愿意花钱买
    它。然而，有一些现实问题：我工作的那台机器无法运行Sublime
    Text，因为Sublime
    Text引用了一些旧的程序库，我机器上没有。我无法自己重新编译它，它就毫无用处了。而且，有一点我需要说的是，我不喜欢这种一个编辑器的生命依赖于某
    个人的专注和贡献，万一他被车撞了呢。如果他的开发终止了，也许会人能克隆一个来支持现有用户们，这是个未知数。

我只是试用了 一下Sublime Text
2，因为我说的这些问题都是根本性的，我不认为在未来的版本上在这方面会有所改进。我对这些事情不是很习惯，一次又一次的在使用时犯错，我最终决定重回
Vim。然而，我认为Sublime
Text是个很不错的编辑器，我认为它是至今为止发现的最有可能替代Vim的编辑器。

<div>


[英文原文：[The Sublime Text
Experiment](http://el-tramo.be/blog/sublime-text-experiment/) 
]

</div>

</div>
