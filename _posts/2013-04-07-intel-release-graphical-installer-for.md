--- layout: post title: Intel Release Graphical Installer for Their
Linux Drivers date: '2013-04-07T09:30:00.001+08:00' author: Wenh Q tags:
modified\_time: '2013-04-07T09:30:46.457+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-8268612248024332568
blogger\_orig\_url:
http://binaryware.blogspot.com/2013/04/intel-release-graphical-installer-for.html
---

\
  

**Intel Release Graphical Installer for Their Linux Drivers**

Published on [OMG!
Ubuntu!](http://www.omgubuntu.co.uk/2013/04/intel-release-graphical-installer-for-their-linux-drivers?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+d0od+(OMG!+Ubuntu!))
| shared via [feedly](http://www.feedly.com)

**The Intel Linux Graphics Installer provides a friendly way for
downloading the latest Intel Linux graphics software stack.**

Early in March, Intel –specifically the Intel Open Source Technology
Centre– released a graphical installer providing Linux users with a
friendly way for downloading the latest Intel-related open source Linux
graphics components –for the more technical this includes:

-   the Intel core kernel driver
-   Mesa 3D rendering library, responsible for 3D rendering, OpenGL
    compatibility, GLES, etc.
-   the 2D renderer for the X Window stack (xf86-video-intel), also
    known as DDX.
-   *libdrm* –the "Direct Rendering Manager" library, for communication
    between user applications and the kernel
-   the Cairo graphics library, for 2D rendering and acceleration
-   *vaapi-driver-intel*–the APIs for hardware-accelerated video
    rendering, processing and output
-   initial support for Wayland

#### Getting the Latest and Greatest Intel Linux Drivers

Intel Linux Graphics Installer automatically detects your hardware and
system specifics and adds a software repository to your sources for
keeping you up-to-date. The installer also performs a check to see if
your system is running the latest drivers and, if not, it runs a system
upgrade.

[![intelgraphicsdriverinstaller](http://www.omgubuntu.co.uk/wp-content/uploads/2013/04/intelgraphicsdriverinstaller.png)](http://www.omgubuntu.co.uk/wp-content/uploads/2013/04/intelgraphicsdriverinstaller.png)

However, the installer doesn't automatically add the repository
authentication key to your system but it can manually added by opening a
terminal, and executing:

    wget --no-check-certificate https://download.01.org/gfx/RPM-GPG-KEY-ilg -O - | \  sudo apt-key add -

#### Download & Install for Ubuntu

Supporting both 32 and 64 bit systems, the Intel Linux Graphics
Installer is available for download for Ubuntu 12.04 and 12.10 (as well
as Fedora 17, 18) via their website:

[Download Intel Linux Graphics
Installer ](https://01.org/linuxgraphics/downloads/2013/intel-linux-graphics-installer "Download Intel Linux Graphics Installer")

[Intel Release Graphical Installer for Their Linux
Drivers](http://www.omgubuntu.co.uk/2013/04/intel-release-graphical-installer-for-their-linux-drivers)
[OMG! Ubuntu! - Everything Ubuntu. Daily.](http://www.omgubuntu.co.uk)

[![](http://feeds.feedburner.com/~ff/d0od?i=5GNZDIEmYg4:WH6bas7Z4T0:wBxX2hOkimM)](http://feeds.feedburner.com/~ff/d0od?a=5GNZDIEmYg4:WH6bas7Z4T0:wBxX2hOkimM)
[![](http://feeds.feedburner.com/~ff/d0od?d=I9og5sOYxJI)](http://feeds.feedburner.com/~ff/d0od?a=5GNZDIEmYg4:WH6bas7Z4T0:I9og5sOYxJI)
[![](http://feeds.feedburner.com/~ff/d0od?d=qj6IDK7rITs)](http://feeds.feedburner.com/~ff/d0od?a=5GNZDIEmYg4:WH6bas7Z4T0:qj6IDK7rITs)
[![](http://feeds.feedburner.com/~ff/d0od?i=5GNZDIEmYg4:WH6bas7Z4T0:V_sGLiPBpWU)](http://feeds.feedburner.com/~ff/d0od?a=5GNZDIEmYg4:WH6bas7Z4T0:V_sGLiPBpWU)
[![](http://feeds.feedburner.com/~ff/d0od?i=5GNZDIEmYg4:WH6bas7Z4T0:gIN9vFwOqvQ)](http://feeds.feedburner.com/~ff/d0od?a=5GNZDIEmYg4:WH6bas7Z4T0:gIN9vFwOqvQ)
[![](http://feeds.feedburner.com/~ff/d0od?d=yIl2AUoC8zA)](http://feeds.feedburner.com/~ff/d0od?a=5GNZDIEmYg4:WH6bas7Z4T0:yIl2AUoC8zA)

![](http://feeds.feedburner.com/~r/d0od/~4/5GNZDIEmYg4)

\

Feedly. Feed your mind.
[http://www.feedly.com](http://www.feedly.com/#mail)
