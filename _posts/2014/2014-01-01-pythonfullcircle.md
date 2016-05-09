---
layout: post
title: Python教程一【来源FullCircle杂志中文社区】
date: '2014-01-01T14:07:00.000+08:00'
author: Wenh Q
tags:
modified_time: '2014-01-01T14:07:01.548+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-4304053195690559100
blogger_orig_url: http://binaryware.blogspot.com/2014/01/pythonfullcircle.html
---

 {style="margin: 0.25em 0px 0px;"}

[Python教程一【来源FullCircle杂志中文社区】](http://houge-langley.livejournal.com/4249.html)

于 10-12-30 通过 [houge_langley](http://houge-langley.livejournal.com/)


== Python 编程——第一部分 ==


历数我们目前能使用上的计算机编程语言，可谓数以万计、多不胜数，但Python可以算得上是最易于学习的语言之一了。Python语言的发展史可以追溯到上个世纪八十年代末，并逐步走向成熟。但尽管它被预装在大多数的Linux发行版之中，可每当人们想学习编程时，却往往忽视了这个最显而易见的编程语言。我们现在暂且抛开华丽的图形化界面，先来讲讲如何编写一个最基础的命令行程序。再循序渐进，相信大家在读完本教程后，都能轻松的驾驭图形化界面编程。纸上谈兵终觉浅，得知此事要躬行，让我们现在就开始设计一个Python程序，一起领略Python的世界！

===第一个我们自己的程序===

打开gedit一类的文本编辑器，让我们以下短短四行的代码，然后，我们再分析一下每行代码分别的意义和作用：


    #!/usr/bin/env python  print 'Hello. I am a python program.'  name = raw_input("What is your name? ")  print "Hello there, " + name + "!"  



好了，就这么简单。保存文件hello.py到你喜欢的地方。但为了便于今后的调用，我建议你将它保存在Home分区的python_examples目录里。麻雀虽小，五脏俱全，这几行代码虽短，却相当完整，这足以证明Python的易用性。在我们运行程序之前，需要在终端中切换到当前目录并输入输入"chmod
+x
hello.py"赋予它可执行权限<译者注：这是Linux的提权命令，其中的参数"x"意指给该文件赋予可执行权限。如下文的译注所言，Linux是根据操作权限来判断是否为可执行文件。如果不执行该命令，则不能直接执行下一条命令>。现在让我们开始执行程序：


    greg@earth:~/python_examples$ ./hello.py  Hello. I am a python program.   What is your name? Ferd Burphel  Hello there, Ferd Burphel!  greg@earth:~/python_examples$  



就怎么简单，我们再分析一下每行代码所表示的意义：


    #!/usr/bin/env python  



这行代码告诉系统，这是一个Python程序，应该用Python解释器来运行。<译者注：如果你将文件的扩展名定为py，那么这一行的存在并不重要。这和Linux对文件的管理机制有关，当一个文件无扩展名时，将会根据文件的内容自动判断文件的类型。当然，如果你是在Windows下运行执行，这一行代码可以说是毫无意义。>


    print 'Hello. I am a python program.'   



不难看出，这行代码使用print命令将"Hello. I am a python
program."打印到了终端模拟器中。


    name = raw_input("What is your name? ")  



这一行相对来说就难理解些了，这行代码可以分成"name = "和"raw_input("What
is your name? ")"两部分。我们先来看第二部分，"raw_input"函数将打印"What
is your
name?"到终端模拟器中，接着等待用户键入相关内容。再看看第一部分的"name =
"将你所输入的内容定义为"name"变量的值。那么，什么是变量呢？打个比方，尽管把变量当成一个盒子，你可以在随心所欲的在里面装自己想装的东西——鞋子、电脑零配件、纸张……总而言之，具体盒子装些什么，只要它能装得下，都问题不大。回到这个例子，你想将变量定义为什么，这都是你自己的事情，例如我的输入的是"Ferd
Burphel"。在这个例子中，Python只是简单地把它装进变量"name"这个"盒子"里，以备接下来使用。

我们再一次执行这个命令将内容打印到屏幕上，这次，我们将"Hello there,
"和"name"变量中的内容，以及后面的感叹号这三个小部分并置在一起，并打印出来<译者注：大家可能会注意到，"Hello
there,
"和"!"都有一组双引号，而"name"没有，是前两者是文本而后者是变量的缘故>。

好了，这个例程的讲解到此结束。

在进行下一个例程之前，我们花上一小片刻的时间，讨论研究一个稍复杂的问题。让我们打开一个终端模拟器，输入命令"python"。如果不出意外，返回的内容是这样的：


    greg@earth:~/python_examples$ python   Python 2.5.2 (r252:60911, Oct 5 2008, 19:24:49)   [GCC 4.3.2] on linux2   Type "help", "copyright", "credits" or "license" for more information.   >>>  



我们现在已经进入了Python
Shell中了。各种各样的内容便可以直接在这里完成。首先，你应该注意到的是Python的版本号，我使用的2.5.2版，而且这里提到了如何获得相关的英文帮助。现在我放手让你输入"print
2+2"<译者注：这里的print可以省略，直接输入2＋2亦可获得同样的结果>：


    >>> print 2+2   4  >>>  



当你输入单词"print"时，你可能会有一些困惑了，如果把首字母改为大写会怎么样呢？Python解释器只会返回如下的结果：


    >>> Print 2+2    File "", line 1      Print 2+2            ^  SyntaxError: invalid syntax  >>>  



这是因为"print"是一个已知的命令，但"Print"不是。因为Python在这方面极其严格，明白了这个问题非常重要。

好的，这个暂且搁置一旁，我们再更深层次的认识变量，输入"var =
2+2"，你会发现解释器没有返回任何结果，但是这并不能代表这个命令毫无用处。Python已经悄悄地在后台新建了一个叫"var"的变量，并赋值为"2＋2"。看看现在"var"这个"盒子"里面装了些什么：


    >>> print var  4   >>>  



好的，我们再在原有变量的基础上进行一些运算：


    >>> print var * 2  8  >>>  



如果我们再次输入原有的命令"print var"，我们得到的还是原来的赋值：


    >>> print var  4   >>>  



看到了吧，刚才的变量值毫无变化，还是"2＋2"的值或"4"。如我们所说的那样，在刚才的讲解中，我们选取的是相当简单的例程，现在，我们要向更加复杂的问题进军，但在此之前，我们再看一些关于变量的例子：

在终端模拟器中输入：


    >>> strng = 'The time has come for all good men to come to the aid of the party!'   >>> print strng   The time has come for all good men to come to the aid of the party!   >>>  



我可以新建一个名为"strng"的变量，并赋值为"The time has come for all good
men to come to the aid of the
party！"除非你再次改动它，我们的变量"strng"始终都是不变的。但我们再突发奇想，看看这个乘于4后会怎么样：


    >>> print strng * 4  The time has come for all good men to come to the aid of the party!The time has come for all good men to come to the aid of the party!The time has come for all good men to come to the aid of the party!The time has come for all good men to come to the aid of the party!   >>>  



哦，结果就是怎样。在我们的意料之外，对吗？它反复打印的"strng"变量四次。这是为什么呢？因为解释器只会将它理解为一个字符串，而非一个数值，你不可能对一个字符串执行数学运算。

我们再像以前的例子一样，赋值"s"为"4"：


    >>> s = '4'  >>> print s  4  



我们想当然的认为变量s的值为整数4，但事实并非如此。实际上变量s的值是字符串形式的"4"。所以，当我们输入"print
s * 4"时，我们看到的是…


    >>> print s*4  4444  >>>  



和以前的例子一样，解释器将它读作字符串，原因在于我们在为s赋值的时候，给"4"加上了引号。

我接着上面的例子输入"print
type(s)"<译者注：这条命令中的type函数是用于查看变量的类型，故输出"str"，即String类型,字符串>，看看系统对此的输出：


    >>> print type(s)   

[**Error:** Irreparable invalid markup ('<type 'str'>') in entry.
Owner must fix manually. Raw contents below.]


== Python 编程——第一部分 ==


历数我们目前能使用上的计算机编程语言，可谓数以万计、多不胜数，但Python可以算得上是最易于学习的语言之一了。Python语言的发展史可以追溯到上个世纪八十年代末，并逐步走向成熟。但尽管它被预装在大多数的Linux发行版之中，可每当人们想学习编程时，却往往忽视了这个最显而易见的编程语言。我们现在暂且抛开华丽的图形化界面，先来讲讲如何编写一个最基础的命令行程序。再循序渐进，相信大家在读完本教程后，都能轻松的驾驭图形化界面编程。纸上谈兵终觉浅，得知此事要躬行，让我们现在就开始设计一个Python程序，一起领略Python的世界！

===第一个我们自己的程序===

打开gedit一类的文本编辑器，让我们以下短短四行的代码，然后，我们再分析一下每行代码分别的意义和作用：

<pre>
#!/usr/bin/env python
print 'Hello. I am a python program.'
name = raw_input("What is your name? ")
print "Hello there, " + name + "!"
</pre>

好了，就这么简单。保存文件hello.py到你喜欢的地方。但为了便于今后的调用，我建议你将它保存在Home分区的python_examples目录里。麻雀虽小，五脏俱全，这几行代码虽短，却相当完整，这足以证明Python的易用性。在我们运行程序之前，需要在终端中切换到当前目录并输入输入"chmod
+x
hello.py"赋予它可执行权限<译者注：这是Linux的提权命令，其中的参数"x"意指给该文件赋予可执行权限。如下文的译注所言，Linux是根据操作权限来判断是否为可执行文件。如果不执行该命令，则不能直接执行下一条命令>。现在让我们开始执行程序：

<pre>
greg@earth:~/python_examples$ ./hello.py
Hello. I am a python program.
What is your name? Ferd Burphel
Hello there, Ferd Burphel!
greg@earth:~/python_examples$
</pre>

就怎么简单，我们再分析一下每行代码所表示的意义：

<pre>
#!/usr/bin/env python
</pre>

这行代码告诉系统，这是一个Python程序，应该用Python解释器来运行。<译者注：如果你将文件的扩展名定为py，那么这一行的存在并不重要。这和Linux对文件的管理机制有关，当一个文件无扩展名时，将会根据文件的内容自动判断文件的类型。当然，如果你是在Windows下运行执行，这一行代码可以说是毫无意义。>

<pre>
print 'Hello. I am a python program.'
</pre>

不难看出，这行代码使用print命令将"Hello. I am a python
program."打印到了终端模拟器中。

<pre>
name = raw_input("What is your name? ")
</pre>

这一行相对来说就难理解些了，这行代码可以分成"name = "和"raw_input("What
is your name? ")"两部分。我们先来看第二部分，"raw_input"函数将打印"What
is your
name?"到终端模拟器中，接着等待用户键入相关内容。再看看第一部分的"name =
"将你所输入的内容定义为"name"变量的值。那么，什么是变量呢？打个比方，尽管把变量当成一个盒子，你可以在随心所欲的在里面装自己想装的东西——鞋子、电脑零配件、纸张……总而言之，具体盒子装些什么，只要它能装得下，都问题不大。回到这个例子，你想将变量定义为什么，这都是你自己的事情，例如我的输入的是"Ferd
Burphel"。在这个例子中，Python只是简单地把它装进变量"name"这个"盒子"里，以备接下来使用。

我们再一次执行这个命令将内容打印到屏幕上，这次，我们将"Hello there,
"和"name"变量中的内容，以及后面的感叹号这三个小部分并置在一起，并打印出来<译者注：大家可能会注意到，"Hello
there,
"和"!"都有一组双引号，而"name"没有，是前两者是文本而后者是变量的缘故>。

好了，这个例程的讲解到此结束。

在进行下一个例程之前，我们花上一小片刻的时间，讨论研究一个稍复杂的问题。让我们打开一个终端模拟器，输入命令"python"。如果不出意外，返回的内容是这样的：

<pre>
greg@earth:~/python_examples$ python
Python 2.5.2 (r252:60911, Oct 5 2008, 19:24:49)
[GCC 4.3.2] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>>
</pre>

我们现在已经进入了Python
Shell中了。各种各样的内容便可以直接在这里完成。首先，你应该注意到的是Python的版本号，我使用的2.5.2版，而且这里提到了如何获得相关的英文帮助。现在我放手让你输入"print
2+2"<译者注：这里的print可以省略，直接输入2＋2亦可获得同样的结果>：

<pre>
>>> print 2+2
4
>>>
</pre>

当你输入单词"print"时，你可能会有一些困惑了，如果把首字母改为大写会怎么样呢？Python解释器只会返回如下的结果：

<pre>
>>> Print 2+2
File "<stdin>", line 1
Print 2+2
^
SyntaxError: invalid syntax
>>>
</pre>

这是因为"print"是一个已知的命令，但"Print"不是。因为Python在这方面极其严格，明白了这个问题非常重要。

好的，这个暂且搁置一旁，我们再更深层次的认识变量，输入"var =
2+2"，你会发现解释器没有返回任何结果，但是这并不能代表这个命令毫无用处。Python已经悄悄地在后台新建了一个叫"var"的变量，并赋值为"2＋2"。看看现在"var"这个"盒子"里面装了些什么：

<pre>
>>> print var
4
>>>
</pre>

好的，我们再在原有变量的基础上进行一些运算：

<pre>
>>> print var * 2
8
>>>
</pre>

如果我们再次输入原有的命令"print var"，我们得到的还是原来的赋值：

<pre>
>>> print var
4
>>>
</pre>

看到了吧，刚才的变量值毫无变化，还是"2＋2"的值或"4"。如我们所说的那样，在刚才的讲解中，我们选取的是相当简单的例程，现在，我们要向更加复杂的问题进军，但在此之前，我们再看一些关于变量的例子：

在终端模拟器中输入：

<pre>
>>> strng = 'The time has come for all good men to come to the aid of
the party!'
>>> print strng
The time has come for all good men to come to the aid of the party!
>>>
</pre>

我可以新建一个名为"strng"的变量，并赋值为"The time has come for all good
men to come to the aid of the
party！"除非你再次改动它，我们的变量"strng"始终都是不变的。但我们再突发奇想，看看这个乘于4后会怎么样：

<pre>
>>> print strng * 4
The time has come for all good men to come to the aid of the party!The
time has come for all good men to come to the aid of the party!The time
has come for all good men to come to the aid of the party!The time has
come for all good men to come to the aid of the party!
>>>
</pre>

哦，结果就是怎样。在我们的意料之外，对吗？它反复打印的"strng"变量四次。这是为什么呢？因为解释器只会将它理解为一个字符串，而非一个数值，你不可能对一个字符串执行数学运算。

我们再像以前的例子一样，赋值"s"为"4"：

<pre>
>>> s = '4'
>>> print s
4
</pre>

我们想当然的认为变量s的值为整数4，但事实并非如此。实际上变量s的值是字符串形式的"4"。所以，当我们输入"print
s * 4"时，我们看到的是…

<pre>
>>> print s*4
4444
>>>
</pre>

和以前的例子一样，解释器将它读作字符串，原因在于我们在为s赋值的时候，给"4"加上了引号。

我接着上面的例子输入"print
type(s)"<译者注：这条命令中的type函数是用于查看变量的类型，故输出"str"，即String类型,字符串>，看看系统对此的输出：

<pre>
>>> print type(s)
<type 'str'>
>>>
</pre>

经确认，此时变量s的类型一个字符串类型。如果你确实想把它当作一个数值，可以输入以下代码：

<pre>
>>>
print int(s) * 4
16
>>>
</pre>

看到了吧，我们已经把字符串"s"转换为一个数值，自然输出的是16。
好了到此为止，我们已经初步认识了"print"命令和"raw_input"函数，变量的赋值以及一些字符串与数值之间的关系。
我们又向Python的奇妙世界迈进了一大步，我们输入"quit()"<译者注：其实也可以按快捷键Ctrl＋D>，退出Python
Shell。

===循环的例程===
现在让我们探讨一下关于循环的问题。打开文本编辑器，输入以下代码：
<pre>
#! /usr/bin/env python
for cntr in range(0,10):
print cntr
</pre>

确认你已经在"print
cntr"的行首缩进了。这在Python中相当重要，因为它并不像其他编程语言一样，使用小、大括号来识别程序块。至于空多少格，要求并不苛刻。只要在行首空了格就行，具体空多少格关系不大。但是如果有多行要缩进，一定要保证每行的空格统一。还有一点要切切记住，尽量不要使用Tab键缩进。一般为了方便，Python会将Tab翻译为四个空格后再进行解释，但这并不是完全通行的办法。所以要尽量养成好的编程习惯。然后保存以上代码为"for_loop.py"文件，然后运行它，看看发生了什么。

循环指在一序列的对象上递归使用队列中的每个项目。在我们的例程中，循环十次，并打印变量"cntr"的数值。如果要我们用平常的语言组织其思路便是"先将变量"cntr"赋值为0－10以内的整数，并打印出来。"先看到代码的"range(0,10)"这一部分，意思是从0开始增加，当达到10时结束。

在运行前，可以先执行这条刚才的提权命令:

<pre>
chmod +x for_loop.py
</pre>

然后运行它：

<pre>
greg@earth:~/python_examples$ ./for_loop.py
0
1
2
3
4
5
6
7
8
9
greg@earth:~/python_examples$
</pre>

正如我们所看到的，它开始工作了，但为什么它只是循环到9就结束了呢？大家可能会想：0－9已经足够有10个数字了，这不正是我们所让它做的吗？把"range(0,10)"的10改为11，不就输出10个数了吗？可真的是我们所想的那样吗？我们应该透过现象看本质，让编程的原理一目了然。如果你确实要弄懂你到底让系统做些什么，这依然是很复杂的。如果你修改代码为"range(1,10)"，它还是只输出1－9，总是在将要达到10时循环就停止了。所以在循环中，包含我们给出的第一个数，但不包括最后一个。
在编程过程中，我们一定要注意语法的正确。总结刚才的代码，我们得出这样一条式子："for
变量 in
range(第一个数,最后一个数):"其中的冒号表示，以下还有一个程序块，这在Python编程中相当重要，而且还不要忘记在下面的程序块中缩进。
我们再在上文的例子的基础上，把代码改为：

<pre>
#! /usr/bin/env python
for cntr in range(0,10):
print cntr
print 'All Done'
</pre>

于是当循环结束后，在末尾出现了一个"结束语"：

<pre>
greg@earth:~/python_examples$ ./for_loop.py
1
2
3
4
5
6
7
8
9
All Done
greg@earth:~/python_examples$
</pre>

记住，请在编程的时候再三确认程序块缩进的正确。关于这些，我们会在今后的教程中细细讲解。

好了，今天的讲解到此结束了，下期我们将继续遨游在Python编程的奇妙世界中。同时，大家可能需要考虑使用新立得包管理器安装一个类似于Dr.
Python或SPE这类的Python编辑器。

中文稿：
看完了刚才的Python教程，你是否开始举一反三了？你可能会把刚才例子中"print
'Hello. I am a python
program.'"这行代码的"Hello"换成中文"你好"。可按照文中的方法输出，却无情地得到了错误信息。
这是怎么回事？原因在于如果在代码中含义非ASCLL字符就需要在开头加入代码"#
coding=utf8"或"# coding: utf8"。
好了，这一问题就这么简单，祝你能遨游在Python的奇妙世界中！



###
 {style="font-family: sans-serif; margin: 0px 3px;"}
