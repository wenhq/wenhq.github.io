--- layout: post title: "谁说设计师不会写代码？—Photoshop脚本语言简介"
date: '2013-09-29T10:27:00.002+08:00' author: Wenh Q tags: - F2E
modified\_time: '2013-09-30T15:04:31.421+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-5837403228366478707
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/09/photoshop.html ---

[谁说设计师不会写代码？—Photoshop脚本语言简介](http://www.oschina.net/news/44619/introduction-to-photoshop-scripting)

Via [开源中国社区最新新闻](http://www.oschina.net/?from=rss)

原文出处：
[smashingmagazine](http://www.smashingmagazine.com/2013/07/25/introduction-to-photoshop-scripting/)   译文出处：
[腾讯MXD](http://mxd.tencent.com/%E8%B0%81%E8%AF%B4%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%B8%8D%E4%BC%9A%E5%86%99%E4%BB%A3%E7%A0%81%EF%BC%9F-photoshop%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80%E7%AE%80%E4%BB%8B%E3%80%90%E8%AF%91%E3%80%91)\
自动化对每个设计师的工作来说是很有用的。它可以在重复的任务上节省宝贵的时间，还能够帮我们更快捷、更容易的解决一系列问题。\
你可以使用photoshop的动作来使工作流程自动化，这是很流行的，大多数人都知道并且已经在使用的方法。今天，我们将介绍给你一种高级的自动化技巧：脚本语言。所有的这一切仅仅需要你有一点点关于JavaScript的基本知识，这对于我们中的一些网页设计师往往都是具备的。\
我很多年前就知道Photoshop的脚本语言，但是我几个月前才开始决定研究它。我忽视了它是因为我认为那是聪明的具有数学思维能力的程序员的领域。但是我错了，今天我将要来告诉大家，尽管它需要一些基本的程序技巧，脚本语言并不是那么难掌握。\
但是，一开始，我们得回答以下这几个明显的问题：\
为什么我们需要脚本语言？\
为什么我们在Photoshop已经有了很棒的动作之后还要需要学习脚本语言？答案是交互性！当你使用动作时，你不能真正的控制它在不同的情况下的表现，就像录像带不停的一遍又一遍的播放而没有任何改变。\
![no-2
(1)](http://static.oschina.net/uploads/img/201309/29075805_A748.png)\
一个脚本语言更灵活，它表现形式的改变取决于你输入的参数或者是应用程序的内容。听起来很有用？不是么？\

要求
====

你不需要是一个会写脚本语言的高级的程序员。我就仅仅是一个平面设计师，就像你们大多数人一样。但是你需要对JavaScript至少有一个基本的了解,以及一些属性和方法的经验去领悟这篇文章的大部分内容。\
![no-3](http://static.oschina.net/uploads/img/201309/29075805_ancE.png)\
如果你对JavaScript一点都不了解，别害怕！有很多地方你可以了解程序的一些基本知识。例如：[Codecademy](http://www.codecademy.com/en/tracks/javascript)，有很棒的完整的交互式课程。\
我使用CS5，但是这篇文章中讲的也同样适用于新版本。Adobe从CS5开始已经没有对其脚本API进行更新。我会选择看最新的脚本文档版本，虽然它是cs6的.\

开整
====

当你开始在PS中记录动作的时候，你设定了一个达到某一结果的步骤顺序，这就是你的算法。然后你按下开始动作，在PS里面就一个接一个的重复你刚才的动作。脚本也差不多，但是不会一步一步的在PS中完成，而是你把它们一条一条的写出来。在PS里面大多数你想要完成的动作都有相同的功能按钮可以完成。\
![no-4](http://static.oschina.net/uploads/img/201309/29075805_bMlm.png)\
如果你需要创造一个动作将你的文件从原始大小放大到150%，你需要完成以下几步：\
１，打开图像-图像大小\
２，长宽输入１５０％\
３，点击确定。\
同样的脚本语言会是这样写：\
１，为这个应用命名为：app\
２，选中文件：activeDocument\
３，把这个属性命名为重设图像大小：resizeImage(width,height)\
代码就是这样：\

    app.activeDocument.resizeImage("150%", "150%");

语言
====

有三种方式在PS里面写脚本：在mac上用AppleScript,
Windows用VBScript，或者用JavaScript在两者上都可以。我使用第三种方式，因为它可以跨平台，并且我有一定JavaScript的基础。\

工具
====

Adobe有它自己的写脚本的工具，叫做：ExtendedScript　Toolkit.\
![no6](http://static.oschina.net/uploads/img/201309/29075805_X9BB.png)\
这个工具包在PS里面，你可以在这个文件夹中中找到：\
Mac OSX: /Applications/Utilities/Adobe Utilities CS6/ExtendScript
ToolkitCS6/\
Windows: C:\\Program Files\\Adobe\\Adobe
Utilities-CS6\\ExtendScriptToolkit CS6(64位的Program Files(x86))\
ExtendedScript　Toolkit的用户界面非常的简单。开始写代码，第一步就是要在下拉菜单中选择目标应用。如果PS已经在运行，就可以看下下拉菜单旁边的绿色链接图标：\
![no-7](http://static.oschina.net/uploads/img/201309/29075805_5Q63.png)\
这个时候，你可以像这样写：\

    alert("Hello Photoshop!");

按cmd+R(或者直接在工具栏上点击"播放"按钮)来运行你写的代码。ExtendedScript　Toolkit将会转换到PS里面然后弹出提示框：\
![no-9](http://static.oschina.net/uploads/img/201309/29075805_GN4g.png)\
ExtendedScript　Toolkit　有一些其他的调试代码的不错特性，但是这一段代码就这样就够了。你可以通过：帮助-JavaScript
Tools Guide学到更多如何使用它。\
你可以使用任何文本编辑来写代码，只需要保存为.jsx格式文件就好了。你必须在PS里通过File-Scripts-Browse来找到并运行它。
或者是，在PS里面打开脚本文件。你也可以在脚本的前面加上一行代码，这样这个代码就会常在PS里面打开：\

    #target photoshop

直接保存你的代码在　Photoshop/Presets/Scripts/，然后通过File-Scripts访问它们。你也可以设定一个快捷键，前往Edit-Keyboard
Shortcuts，链接到
File-Script-[你的代码名称],然后选择一个你想要设定的快捷键。\
ExtendedScript　Toolkit可以在整合的开发环境下运行和调试代码，同时它还有一个目标模型指示器来安装，这是很有用的。所以我推荐使用toolkit来写脚本。不幸的是，Mac版本的有时候会崩溃，所以要记住这一点。\

Photoshop对象模型
=================

为了使脚本写起来简单些，你需要懂得在Photoshop文件对象模型（DOM）中事件是怎样互相联系的。如果你观察PS本身，理解起来并不困难。PS的DOM里面最主要的对象就是应用程序。在应用程序里面，我们有一个文件夹在PS里面是当前打开的。\
每一个文件包含一些元素：例如图层（被称为Artlayers）,图层组（layerSets）,通道，历史记录等等–就像一个普通的PSD文件。\
下面就是一个简单的可视化的PS的DOM。更详细的包含层级的可以在"[Adobe
Photoshop CS6 Scripting
Guide"Pdf](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/photoshop/pdfs/cs6/Photoshop-CS6-Scripting-Guide.pdf)文件中１２页里找到。\
![no-11](http://static.oschina.net/uploads/img/201309/29075805_yyX8.png)\
一个简单的可视化的Photoshop　DOM\
这里面的每一个目标都有它自己的属性和方法你可以编辑它。例如，在一个文件中改变所选图层的透明度，你就可以前往Application-Document-layer-Opacity然后选择你的期望值。代码就是这样写：\

    app.activeDocument.activeLayer.opacity = 50;

你应该可以猜到，activeDocument和activelayer决定了当前选择的文件和图层。\
你可以在"[Adobe Photoshop CS6 JavaScript Scripting
Reference"PDF](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/photoshop/pdfs/cs6/Photoshop-CS6-JavaScript-Ref.pdf)文件中找到大部分的目标和它们的属性和方法的说明，或者在ExtendedScript　Toolkit中通过前往help-object
Model Viewer.\
让我们来看看在一个真实的例子中是如何运行的。在接下来的段落中，我们将会基于一个动作写一段我们自己的代码。\
用代码来重现自我旋转动作\
几年前的圣诞节，我有一个想法就是用动作帮助我画一个雪花。\

画雪花
======

１，首先画一支雪花的图案。\
![no-13](http://static.oschina.net/uploads/img/201309/29075805_na40.png)\
２，复制这一支，同时旋转一定的角度。\
![no14](http://static.oschina.net/uploads/img/201309/29075805_j5hp.png)\
3，重复第二步直到一个完整的圆。\
![no-15](http://static.oschina.net/uploads/img/201309/29075805_TwLQ.png)\
手动去复制和旋转每一个元素非常麻烦，所以我想出了一个自动的动作([an
action to automate
it](http://blog.kam88.com/en/rotateme-photoshop-actions.html))去完成它。算法是这样的：\
１，复制元素。\
２，使用变化工具按照你所选择的角度去旋转这个元素。\
３，复制图层。\
４，使用"重复变换"功能。\
５，重复动作４和５直到一个完整的圆。\
非常不错！但是这个动作有一个缺点：根据你在第三步设定的角度数值的算法，你只能设定一定数量的雪花的分支。\
回到当我还不是很熟悉脚本的时候，我做了几个版本的动作，每一种产生的雪花都是不同的分支数。\
今天，我们将用你输入分支的数值的动态脚本来重绘这个动作，让我们开始吧。\

算法
====

当你开始写脚本的时候，在挖掘代码本身之前先设定算法是个不错的主意。在我们的情况下，算法将会是这样的：\
１，询问用户输入分支的数目。\
２，计算旋转的角度。\
３，通过第一步设定的数目来复制并旋转图层。\
首先让我们从把当前或选定的图层作为变量保存起来，为了将来使用：\

    // Save selected layer to variable:  var originalStem = app.activeDocument.activeLayer;

\
在JavaScript
中注意，你可以标记两条双斜线(//)做注解。注解被用来为未来相关部分的代码做解释但是不影响脚本的运行。\
现在让我们回到我们的算法上。\
1，要求用户输入\
我们通过prompt(message,defaultvalue[,tittle])这个功能来获取用户的输入信息：。这个功能表明一个有着"message"对话框和一个包含这"fefault
value"的输入框。当用户点击"确定"，这个给你功能就回到输入值；因此，我们需要保存它为一个可是用的变量。\

    // Ask user for input by showing prompt box and save inputted value to variable:  var stemsAmount = prompt("Processing \""+originalStem.name+"\"\nHow many stems do you need?", 12);

注意我使用了"orginalStem.name"在这段信息里面。所以对话框会现实所选择图层的名称。\
在Mac OS
X中，在信息中的第一行是宽的，作用是标题。因此，我们主要的信息应该在第二行。另起一行，输入"\\n".\
在Windows中，你可以在功能中指定第三种参数来设定一个标题：\

    // Ask user for input by showing prompt box and save inputted value to variable:  var stemsAmount = prompt("How many stems do you need?", 12, "Processing "+originalStem.name);

如果我们在PS中运行这个代码，将会看到这样一个对话框：\
![no-19](http://static.oschina.net/uploads/img/201309/29075806_VbEc.png)\
当用户点击"确定"，输入值将会保存到stemsAmount变量中。如果用去点击"取消"，这个功能将会返回一个无效值。这个我们后面要使用到。\
2，计算旋转的角度\
为了计算旋转的角度，我们需要通过分支的数目来分３６０度（一个整圆）：\

    // Calculate the rotation angle  var angle = 360 / stemsAmount;

3，复制和旋转\
现在我们已经有了我们需要复制的分支的一切。为了这样去做，我们将使用"for"循环。它可以让我们按照我们想要的次数来反复的运行一段代码。我们的循环将会是这样的：\

    for(var i = 1; i < stemsAmount; i++){   // This code will run "stemAmount - 1" of times  };

注意第一个在程序中的对象例子已经有了值为0,但是因为我们第一个图层已经在画布上了，我们从１开始这个循环。\
为了辅助和旋转我们的图层，我们将会使用：duplicate()和rotate(angle,AnchorPosition)函数：在angle里面被旋转图层的数目通过复制的指数相乘而得。
Anchorposition决定了哪个图层将会旋转的点。当你在PS中使用旋转工具的时候你可以看到这个点—它看起来是一个小小的加了十字的圆圈。在脚本中，它仅有９个指定的值-i.e.９个位置的锚点：\
![no-22](http://static.oschina.net/uploads/img/201309/29075806_bJO9.png)\
在我们这个情况下，它是这个图层按钮的中心。BOTTOMCENTER.
PS在这里或那里的一些功能上使用了很多其他的一些常量，你可以在"[Adobe
Photoshop CS6JavaScript
Reference"PDF](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/photoshop/pdfs/cs6/Photoshop-CS6-JavaScript-Ref.pdf)文件中的１９７页找到。因此我们的循环就是这个样子：\

    // Duplicate and rotate layers:  for(var i = 1; i < stemsAmount; i++){   // Duplicate original layer and save it to the variable    var newStem = originalStem.duplicate();     // Rotate new layer   newStem.rotate(angle * i, AnchorPosition.BOTTOMCENTER);  };

完整的代码就是下面这个样子，你可以试着运行：\

    // Save selected layer to variable:  var originalStem = app.activeDocument.activeLayer;    // Ask user for input by showing prompt box and save inputted value to variable:  var stemsAmount = prompt("Processing \""+originalStem.name+"\"\nHow many stems do you need?", 12);    // Calculate the rotation angle:  var angle = 360 / stemsAmount;    // Duplicate and rotate layers:  for(var i = 1; i < stemsAmount; i++){   // Duplicate original layer and save it to the variable   var newStem = originalStem.duplicate();     // Rotate new layer   newStem.rotate(angle * i, AnchorPosition.BOTTOMCENTER);   };

最后的润色
==========

我通常会试着使用脚本来完成我的主要目的。当一切都正确的运行起来的时候，我将会开始优化代码。在我们这种情况下，我们需要确保用户在提示框中输入一个有效的数值—i.e.一个正整数，而且要大于１。\
当然，为了不让PS疯掉，我们会限制分支的书目，我们规定，小于１００.为了这么做，
当他们提交了一个无效的数值的时候
，我们需要使用一个"while"循环来告诉用户一个错误的信息。而且这个提示框将会一直存在，直到用户输入一个有效值或者点击"取消"按钮。（记住如果用户点击取消将会提示无效值）。\
新的代码将会是这样的：\

    // Save selected layer to variable:  var originalStem = app.activeDocument.activeLayer;    // Ask user for input by showing prompt box and save inputted value to variable:  var stemsAmount = prompt ("Processing \""+originalStem.name+"\"\nHow many stems do you need? (From 2 to 100)", 12);    // Check that user entered a valid number and, if invalid, show error message and ask for input again  while(isNaN(stemsAmount) || stemsAmount <= 0 || stemsAmount > 100){   // If user clicks "Cancel" button, then exit loop   if(stemsAmount == null) break;     // Show error message…   alert("Please enter number in range from 2 to 100");   // …and ask for input again   stemsAmount = prompt("Processing \""+originalStem.name+"\"\nHow many stems do you need? (From 2 to 100)", 12);  };    // Run the copying process  if(stemsAmount != null){    // Calculate the rotation angle   var angle = 360 / parseInt(stemsAmount);     // Duplicate and rotate layers:   for(var i = 1; i < stemsAmount; i++){    // Duplicate original layer and save it to the variable    var newStem = originalStem.duplicate();      // Rotate new layer    newStem.rotate(angle * i, AnchorPosition.BOTTOMCENTER);   };  };

你可能注意到：我们使用了"isNaN(value)"这个功能，它返回 "true"如果
"value"不是一个数字，同时当我们计算旋转的角度的时候，"parseInt(value)"把"value"转换成一个整数。\
接下来我们要做的事情是管理图层，通过为它们增加一个索引来重命名我们的图层。同事也要确保我们不会把文件的图层搞乱，让我们把我们的分支编组。\
为图层重命名不是一个很难的事情。我们只需要使用图层的"name"属性，然后为它们增加一个索引数字：\

    // Add index to new layers  newStem.name = originalStem.name + " " + (i+1);

PS应用程序界面里的编组被称为"LayerSet",我们通过"layerSets"属性可以进入文件的所有编组。为了给文件增加一个新的组，我们需要称"layerSet"方法为"add()"：\

    // Create a group for stems  var stemsGroup = app.activeDocument.layerSets.add();   stemsGroup.name = originalStem.name + " ("+stemsAmount+" stems)";

然后，为了把一个图层增加到组里面，我们会使用"move(relativeobject,ElementPlacement)"函数。请注意，"move()"函数只是把图层移动到图层堆，而不是移动到画布上。（你可以用"trabslate(deltaX[,deltaY])"函数把图层移动到画布上）\
ElementPlacement是另外一个常量，这个常量决定我们怎样把的图层跟
relativeobject
关联在一起。在我们的案例里，我们使用ElementPlacement.INSIDE　把一个普通图层放进一个组里面：\

    // Place original layer in group  originalStem.move(stemsGroup, ElementPlacement.INSIDE);

我们使用
ElementPlacement.PLACEATEND.把每一个拷贝的新图层放在所有图层租的底部。结果就是我们的所有图层都是以上升的顺序排列，第一个图层在顶部，最后一个图层在底部：\

    // Place new layer inside stems group  newStem.move(stemsGroup, ElementPlacement.PLACEATEND);

你可以在"[Adobe Photoshop CS6 Scripting
Guide"Pdf](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/photoshop/pdfs/cs6/Photoshop-CS6-JavaScript-Ref.pdf)文件中２０２页里\
找到更多关于"ElementPlacement"的内容。\

最终代码
========

就是它，RotateMe.jsx搞定！　我们最终的代码就是这样：\

    // Save selected layer to variable:  var originalStem = app.activeDocument.activeLayer;    // Ask user for input by showing prompt box and save inputted value to variable:  var stemsAmount = prompt ("Processing \""+originalStem.name+"\"\nHow many stems do you need? (From 2 to 100)", 12);    // Check that user entered a valid number and, if invalid, show error message and ask for input again  while(isNaN(stemsAmount) || stemsAmount <= 0 || stemsAmount > 100){   // If user clicks "Cancel" button, then exit loop   if(stemsAmount == null) break;     // Show error message…   alert("Please enter number in range from 2 to 100");   // …and ask for input again   stemsAmount = prompt("Processing \""+originalStem.name+"\"\nHow many stems do you need? (From 2 to 100)", 12);  };    // Run the copying process  if(stemsAmount != null){    // Calculate the rotation angle   var angle = 360 / parseInt(stemsAmount);     // Create a group for stems   var stemsGroup = app.activeDocument.layerSets.add();    stemsGroup.name = originalStem.name + " ("+stemsAmount+" stems)";   // Place original layer in group   originalStem.move(stemsGroup, ElementPlacement.INSIDE);     // Duplicate and rotate layers:   for(var i = 1; i < stemsAmount; i++){    // Duplicate original layer and save it to the variable    var newStem = originalStem.duplicate();      // Rotate new layer    newStem.rotate(angle * i, AnchorPosition.BOTTOMCENTER);      // Add index to new layers    newStem.name = originalStem.name + " " + (i+1);      // Place new layer inside stems group    newStem.move(stemsGroup, ElementPlacement.PLACEATEND);   };     // Add index to the original layer   originalStem.name += " 1";  };

没那么难，哈？\
![no-32](http://static.oschina.net/uploads/img/201309/29075806_7jno.png)\
现在，你可以把这个保存在photoshop/presets/Scripts/文件夹里面，然后前\
往File-Script运行。使用不同的形状和不同的赋值可以产生有趣的结果：\
![no-33](http://static.oschina.net/uploads/img/201309/29075806_AuIz.png)\

总结
====

你可以从在后面的资源包里面链接序号看到，除了文章中介绍的之外还有很多想要讲的。但是我希望我们今天所讲的能够激发你的兴趣，向你展示了脚本的作用和巨大潜力。\
![no-34](http://static.oschina.net/uploads/img/201309/29075806_ktuq.png)\
如果你想下水试试，让我们一起来学习和交流经验吧。你在后面的评论中提出问题或者分享你所做的。如果你不是一个程序员，可以考虑留下一个关于脚本编写的好主意吧！或许其他的读者会实现它。让我们一起来使PS更加有用吧！\

资源
====

１，[Adobe Photoshop
Scripting](http://www.adobe.com/devnet/photoshop/scripting.html)，Adobe　Developer
Connection\
所有的脚本文件和实用功能\
２，[Adobe Introduction to
Scripting](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/indesign/pdfs/Adobe_Intro_to_Scripting1.pdf)
,(PDF)，Adobe\
这个是一些Adobe应用程序的基本代码。不错的是PS的脚本可以适用于所有的其他Adobe产品，你只需要学习应用的DOM，你就可以上路了。\
３，[Adobe Photoshop　CS6 Scripting
Guid](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/photoshop/pdfs/cs6/Photoshop-CS6-Scripting-Guide.pdf)e
，Adobe\
在这个PS脚本介绍指南里面，你可以学到写脚本的基本知识。\
４， [Adobe Photoshop　JavaScript
Reference](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/photoshop/pdfs/cs6/Photoshop-CS6-JavaScript-Ref.pdf),(PDF)，Adobe\
这个文件描述了你可以在PS里面用到的所有的对象和他们的函数以及方法。这也是我在写脚本的时候用的最多的文件。\
5,
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?redirectlocale=en-US&redirectslug=JavaScript),
Mozilla Developer Network\
这里面有关于一般的JavaScript函数和用法的各种问题的答案。\
６,[JavaScript Tools
Guide](http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/products/indesign/pdfs/JavaScriptToolsGuide_CS5.pdf),
PDF,Adobe\
这里面有一些关于"ExtendedScript Toolkit"的基本信息，和一些高级技\
巧。例如文件系统的存取，ScriptUI， XML的使用，sockets等等。\
７，[PS-Script](http://ps-scripts.com/bb/index.php)\
一个独立的关于PS脚本的论坛。我不能注册参与讨论（因为某些未适应系统），但是它有很多可以被发现的解决问题的答案。\
８，
[Photoshop　Scripting](http://forums.adobe.com/community/photoshop/photoshop_scripting),Adobe
Community\
Adobe的PS脚本官方论坛，有一些很好的在用户使用的过程中遇到的问题的讨论。
