--- layout: post title: PHOTOSHOP中改进IOS设计流程的30个诀窍 date:
'2013-03-07T12:25:00.001+08:00' author: Wenh Q tags: modified\_time:
'2013-03-07T12:25:49.292+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-2443032917728184349
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/03/photoshopios30.html ---
[PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/34981/?utm_source=rss&utm_medium=rss&utm_campaign=photoshop%25e4%25b8%25ad%25e6%2594%25b9%25e8%25bf%259bios%25e8%25ae%25be%25e8%25ae%25a1%25e6%25b5%2581%25e7%25a8%258b%25e7%259a%258430%25e4%25b8%25aa%25e8%25af%2580%25e7%25aa%258d):
\
[英文原文](http://radesign.in/30-tips-to-improve-your-ios-design-workflow-in-photoshop/)，翻译：[飞鸟分享](http://share.9ikblog.com/archives/30-tips-to-improve-your-ios-design-workflow-in-photoshop.html)\
在本文中我（英文原作者）总结了在photoshop中设计ios软件时所遵守的方法。许多的技巧适用于一般的UI设计。注意：文中所提到的快捷键针对于Windows；Mac
用户可，Cmd对应Crtl键，Opt对应Alt键。\
**1.保持尺寸为偶数**\
你是首先针对Retina屏幕设计然后再对标准分辨率的进行缩小是吧？为了在标准分辨率下像素仍然保持完美的呈现，你需要保证大小和距离为偶数。具体的做法便是：基于2ps的网格设计。在**编辑（Edit）〉首选项（Preference）〉参考线、网格和切片（Cuides,Grids&Slices）**。更改**网格线间隔（Gridline）和子网格（Subdivisions）**来是使得网格间隔线为2px。例如：设置网格线间隔为64px，子网格为32。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/23.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/23.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**2.混合模式只使用正常模式**\
****在设置直接处于其他元素上面的图层效果时，混合模式只使用**正常**（例如：在混合选项中**投影和外发光**）。使用其他的混合模式或许在Photoshop中看起来很好，但是也可能会在在保存为PNG格式之后出现不良的效果。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/31.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/31.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**3.更方便的改变渐变颜色**\
想要更改渐变按钮的色调（色相），而不必每次都去改变渐变的起始颜色值？下面介绍两个方法，均可达到完全一样的效果。\
**方法1：在渐变图层混合选项中使用颜色叠加**\

1.  创建一个**渐变图层**。起始颜色设为浅灰和深灰色，也可以在之后调整。
2.  为按钮创建**矢量蒙版**。
3.  **复制**矢量蒙版**粘贴**到渐变图层（**选择矢量蒙版〉Ctrll+
    C〉选择渐变图层〉Ctrl + V**）
4.  设置**图层〉矢量蒙版〉当前路径**
5.  设置渐变图层**混合选项〉颜色叠加**更改混合模式为**颜色**。
6.  现在便可以只是更改此处的颜色来更改渐变。

[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/41.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/41.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**方法2：在纯色图层使用渐变叠加**\

1.  用你想要的颜色，创建一个纯色的图层。
2.  和方法1相同。
3.  和方法1相同。
4.  和方法1相同。
5.  在纯色模版混合选项〉渐变叠加，设置混合模式为明度（Luminosity）。
6.  现在只是改变纯色模版的颜色即可改变渐变。

[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/51.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/51.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
译者注：上述使用了矢量蒙版，其实使用剪切蒙版也可达到相应的效果，个人认为还简单点。\
**4.更多的使用径向渐变**\
在导航条上叠加径向渐变层，让导航栏变得更为有趣。\
**方法1：径向渐变工具**\

1.  在导航条图层上方**新建图层**。
2.  复制导航条图层的矢量蒙版到刚才新建的图层(按住**Ctrl +
    Alt同时按鼠标左键拖动**矢量蒙版到新图层)。
3.  选择**径向渐变**工具（设置渐变为中心白色末端全透明）。
4.  在图层中从中心到边缘绘制渐变。
5.  改变图层混合模式为**叠加（Overlay）**设置**不透明度为25%**。

[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/6.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/6.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**方法2：斜面和浮雕**\
同样也可以使用图层混合选项中的斜面和浮雕。可以按下图所示来设置。通过调整设置来达到你想要的效果。通常调整的越为精妙效果也越为好看。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/7.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/7.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**5.更多的使用阴影变形**\
Photoshop中阴影（任何的其他图层效果）和它对应图层可以分开。这样便可独立操作阴影。\

1.  选择**图层〉图层样式〉创建图层**（译者注：必须在对图层使用了混合选项中的效果才能使用此命令，此步目的即是将效果和图层分离）。
2.  **转换图层为智能对象**（在混合选项中勾选透明形状图层。右击图层〉选择转换为智能对象），这样你就可以在之后编辑效果。
3.  **Ctrl + T** 选择**变形**。
4.  **点击和拖动**手柄来改变形状。手柄不会对其网格，但可以使用网格作为参考对其他的手柄进行重复同样的拖动。
5.  往上**轻移**图层直到像下图效果。

[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/8.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/8.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/9.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/9.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/101.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/101.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**6.使用内发光更容易的增加精细的纹理**\
像下图所示通过内发光快速的增加纹理。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/111.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/111.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**7.隐藏路径**\
Photoshop
cs6中比较恼人的一点是当你选中一个形状图层的时候形状的路径会显示出来，并且在你操作该图层的时候路径会一直存在，譬如在更改图层混合选项的时候。你和使用Ctrl
+ H 来隐藏所有的辅助工具（路径、网格线和参考线），当然你可以按**Ctrl +
Shift + H** 只隐藏路径。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/121.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/121.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**8.使用对齐像素网格来使形状像素完美**\
这算是cs6中最好的改进之一了。按**Ctrl +
K** 打开首选选面板选择将**矢量工具与变换与像素网格对其（Snap Vector
Tools and Transforms to Pixel
Grid）**勾选。在cs5中只有形状（没有变换）与像素网格对齐。像下图示在首选项〉常规中勾选最下面一项。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/131.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/131.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/141.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/141.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
cs5中只有形状对齐\
**9.使用电子表格来计算缩略图的尺寸**\
想要创建一个iPad
app来展示大量的缩略图？使用电子表格来计算缩略图的尺寸和之间的尺寸。电子表格实时的计算并展示了在改变一个尺寸之后对其他元素的影响以及它们是否适用于屏幕。下载（[iPad-Grid-Calculator](http://static.9ikblog.com/blog/2013/01/iPad-Grid-Calculator.xlsx)）我在创建iPad
app使用创建的微软Excel 表格（文件中包含了4个表格，6×6, 5×5, 4×4
和3×3）。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/151.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/151.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**10.自动导出资源文件**\
如果你必须创建图片资源，选择**文件（File）〉脚本(Script)〉将图层导出到文件（Export
Layers to Files）**。\
**11.图层复制的时避免给图层名添加后缀同时避免图层效果得到扩张**\
对每次复制图层都在图层名称后面添加“副本（copy）”的字眼很是恼火？同时恼火的是每次复制粘贴图层效果的时候图层效果就会扩张？可以图层面板选项中将两者关闭。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/161.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/161.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**12.以15°的步长旋转**\
在自由旋转的时候，可以按住**Shift**以15°的倍数旋转。\
**13.保存样式**\
保存多次使用的样式到样式面板，这样免去每次都复制粘贴的麻烦。\
**14.在打开的两个文件之间移动图层**\
按下**V**选择移动工具〉**选中**想要移动的**图层**〉在当前**文件内**（不是图层面板）**左击不松开**〉**拖动**光标到目标文件的名称**标签**上〉当文件切换之后将**光标拖动到文件内**，然后**松开鼠标**。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/171.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/171.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**15.设置全局光为90°**\
当光源在90°的时候高光、阴影以及其他图层效果看起来最好。为了避免重复设置，在混合选项中（斜面和浮雕、内发光和阴影）勾选**使用全局光**。或者选择**图层〉图层样式〉使用全局光**。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/181.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/181.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**16.在你创建图层的时候你便对它进行命名**\
在将设计文档发给开发人员之前对图层命名是件令人头痛的事情。因此不妨形成在创建图层的同时就给它命名的习惯。\
**17.使用自定义快捷键**\
注意哪些工具和任务是你最常用到的，为它们创建快捷键。例如，如果你发现将一个文件发送给开发人员处理的时候你需要重命名大量的图层，我使用功能键F2作为快捷键。\
**18.使用径向渐变**\
使用径向渐变有时候会看起来有点扁平。试试用径向渐变作为背景，还可以用内发光来强调。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/191.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/191.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**19.努力做到非破坏的编辑**\
通过使用智能对象和调整图层来做到一个非破坏性的工作流程。当你发发现自己需要重复编辑同样东西的时候这会帮你减少很多痛苦。\
**20.在对文件作重大改变之前备份文件**\
当你发现保存了自己不想要的变化，或者在撤销更改之前意外地关闭了文件（译者注：这样会导致丢失历史记录），备份文件会大大减少你的痛苦。\
**21.使用快捷键给形状图层和文本填色**\
你可能知道使用**Alt/Ctrl +
Delete** 给图层或者选区填充前景色/背景色。它同样适用于**形状图层**和**文本**。\
**22.Photoshop的怪异之处——投影和内阴影尺寸**\
还记得诀窍1中关于保证尺寸和图层效果为偶数像素吗？你或许在对所有的都设置了偶数之后，仍然迷惑于为什么按钮的高度仍然是奇数。罪魁祸首便是Photoshop的怪异之处，投影增加了尺寸。投影的大小（size）值设置为1px或者2px，投影将会产生同样的尺寸，如下图所示。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/201.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/201.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/211.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/211.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**23.使用智能参考线来进行更为完美的对齐**\
来让Photoshop对你的元素进行智能对齐。在**视图（View）〉显示（Show）〉智能参考线（Smart
Guides）**处打开。一旦你使用过智能参考线，你会再也离不开它了。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/221.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/221.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**24.使用图层复合在同一文件中展示不同的显示屏**\
你是将app的所有屏幕都创建在一个PSD中然后对图层可视进行打开和关闭来查看？此时图层复合（Layer
Comps）就可帮助解决这个问题。勾选**窗口（Window）〉图层复合（Layer
Comps）**即可打开图层复合面板。在你新建app屏幕的时候你可以通过**单击面板底部创建新的图层复合按钮**来创建一个新的图层复合。这个图层复合面板包含了所有图层的可见性和位置作为一个屏幕（译者注：可以理解为一个快照）。现在你便可以在同样的图层上更改其可见性和位置来作为下一个屏幕并把它保存为另一个图层复合。\
通过使用同样的工具去创建不同的屏幕，这样就保证了文件数量和大小达到了最小。并且，你和开发人员可以简单的通过单击图层复合名称前面的小盒子或者点击面板底部的**往前/往后**箭头来循环切换图层复合来展示不同的屏幕。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/231.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/231.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**25.在设备上预览你的设计**\
你的设计桌面设备上看起来很好，但是当你放到真正的设备上或许会暴漏问题，因此，保证经常的在显示器上预览你的设计。对Mac来说有像LiveView、Scala
Preview等工具，对Windows来则有[WiFileSync](http://itunes.apple.com/us/app/wifilesync-wireless-data-transfer/id554449286?mt=8)和[Photoshop
Display](http://itunes.apple.com/us/app/photoshop-display/id489161163)。我使用免费的Polkast，它允许你在IOS设备上通过wifi预览你桌面设备上的文件。\
**26.保持icon设计的一致性**\
在icon的选用上要保证其大小和风格一致。可以阅读[Why consistency is
important](http://radesign.in/why-consistency-in-icons-is-important-and-how-to-achieve-it/)这篇文章。\
[![PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/wp-content/uploads/2013/03/24.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")](http://blog.jobbole.com/wp-content/uploads/2013/03/24.png "PHOTOSHOP中改进IOS设计流程的30个诀窍")\
**27.给客户发送全尺寸的预览图**\
客户许愿在他们的设备上常看设计。因此，可以考虑给他们一个全尺寸的PNG设计组合。\
**28.避免过于像素完美的线框图**\
不要在线框图软件上浪费时间去创建一个漂亮的线框图。我发现客户一旦理解这会节省时间他们便更倾向于审查草图而不是漂亮的线框图。向客户解释为什么减少线框图会节省项目的整体时间，他们一旦同意便发给他们草图的照片。同时别忘了让草图尽量易读。\
**29.首先设计Retina屏然后再缩小到标准尺寸**\
是从1x（译者注：指设备像素比）放大到2x的顺序还是2x缩小到1x现在仍有[争论](http://bjango.com/articles/designingforretina2/)。1x大小尺寸的手机将会在未来几年逐渐淘汰并且将来只会剩下Retina屏的。因此最好是从Retina屏来开始设计，同时你可以早早的便在你的设计中添加针对Retina屏的特殊细节。\
**30.创建一个icon库**\
任何时候你针对工具栏或者标签栏创建了矢量的icon，保存一份icon（保存完好无损的尺寸以便于编辑）到单独的PSD文件中，这样，你便不必下次再使用这些icon时到处寻找了，这样也就形成了我[ikonic](http://radesign.in/ikonic-150-vector-icons-25-free/)项目的基础。\
**31.使用一个批量重命名的软件**\
使用批量重命名软件来给文件增加或者移除@2x。我使用免费的[Bulk Rename
Utility](http://www.bulkrenameutility.co.uk/Main_Intro.php)。\

#### 相关文章

-   [![23个实用的Photoshop绘图教程](http://blog.jobbole.com/wp-content/plugins/wordpress-23-related-posts-plugin/static/thumbs/6.jpg)](http://blog.jobbole.com/648/)[23个实用的Photoshop绘图教程](http://blog.jobbole.com/648/)
-   [![分享30个优秀的Photoshop网页设计教程](http://blog.jobbole.com/wp-content/uploads/2013/02/119-150x150.png)](http://blog.jobbole.com/590/)[分享30个优秀的Photoshop网页设计教程](http://blog.jobbole.com/590/)
-   [![Photoshop爱好者应该收藏的42个网站](http://blog.jobbole.com/wp-content/uploads/2013/02/photoshop_resourses_10_thumb2-150x150.jpg)](http://blog.jobbole.com/1509/)[Photoshop爱好者应该收藏的42个网站](http://blog.jobbole.com/1509/)
-   [![推荐给 iOS
    设计师的工具和资源](http://blog.jobbole.com/wp-content/uploads/2011/11/iOS-logo.jpg)](http://blog.jobbole.com/14517/)[推荐给
    iOS 设计师的工具和资源](http://blog.jobbole.com/14517/)
-   [![为什么Android没有iOS那么顺滑](http://blog.jobbole.com/wp-content/uploads/2011/10/Android-logo.jpg)](http://blog.jobbole.com/9692/)[为什么Android没有iOS那么顺滑](http://blog.jobbole.com/9692/)
-   [![fresh ui kit
    smartphone](http://blog.jobbole.com/wp-content/uploads/2012/10/preview-large-40freshuikitsmartphone-150x150.jpg)](http://blog.jobbole.com/29270/)[40个免费的智能手机UI素材PSD资源](http://blog.jobbole.com/29270/)
-   [![当ios游戏开发像做份沙拉那么简单](http://blog.jobbole.com/wp-content/uploads/2011/12/ios-game-develope-like-sala1-150x150.jpg)](http://blog.jobbole.com/9124/)[当ios游戏开发像做份沙拉那么简单](http://blog.jobbole.com/9124/)
-   [![icon-template](http://blog.jobbole.com/wp-content/uploads/2012/09/icon-template-150x150.jpg)](http://blog.jobbole.com/26093/)[25个免费的iOS设计资源](http://blog.jobbole.com/26093/)
-   [![7178415856\_92e71d5e8e\_z](http://blog.jobbole.com/wp-content/uploads/2012/06/7178415856_92e71d5e8e_z-150x150.jpg)](http://blog.jobbole.com/21037/)[MGTileMenu：一个开源iOS控件的诞生](http://blog.jobbole.com/21037/)
-   [![WWDC 2012 ios
    6](http://blog.jobbole.com/wp-content/uploads/2012/06/WWDC-2012-ios-6-150x150.jpg)](http://blog.jobbole.com/21447/)[信息图：iOS
    6操作系统新功能一览](http://blog.jobbole.com/21447/)

[PHOTOSHOP中改进IOS设计流程的30个诀窍](http://blog.jobbole.com/34981/)，首发于[博客
- 伯乐在线](http://blog.jobbole.com/)。
