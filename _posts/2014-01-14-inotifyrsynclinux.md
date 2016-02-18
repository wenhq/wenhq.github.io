--- 
layout: post 
title: Inotify+Rsync实现linux文件实时同步 
date: '2014-01-14T10:46:00.003+08:00' 
author: Wenh Q
tags:
modified\_time: '2014-01-14T10:46:37.554+08:00' 
blogger\_id: tag:blogger.com,1999:blog-4961947611491238191.post-3973714558311486987
blogger\_orig\_url: http://binaryware.blogspot.com/2014/01/inotifyrsynclinux.html
---



公司一套系统的同步使用的donotify，不能实现子目录的实时同步，通过查资料，发现inotify可以实现子目录的实时同步，以下为笔记。





　　一、介绍



　　Inotify 是文件系统事件监控机制，作为 dnotify 的有效替代。dnotify
是较早内核支持的文件监控机制。Inotify
是一种强大的、细粒度的、异步的机制，它满足各种各样的文件监控需要，不仅限于安全和性能。



　　inotify 可以监视的文件系统事件包括：



　　IN\_ACCESS，即文件被访问



　　IN\_MODIFY，文件被 write



　　IN\_ATTRIB，文件属性被修改，如 chmod、chown、touch 等



　　IN\_CLOSE\_WRITE，可写文件被 close



　　IN\_CLOSE\_NOWRITE，不可写文件被 close



　　IN\_OPEN，文件被 open



　　IN\_MOVED\_FROM，文件被移走,如 mv



　　IN\_MOVED\_TO，文件被移来，如 mv、cp



　　IN\_CREATE，创建新文件



　　IN\_DELETE，文件被删除，如 rm



　　IN\_DELETE\_SELF，自删除，即一个可执行文件在执行时删除自己



　　IN\_MOVE\_SELF，自移动，即一个可执行文件在执行时移动自己



　　IN\_UNMOUNT，宿主文件系统被 umount



　　IN\_CLOSE，文件被关闭，等同于(IN\_CLOSE\_WRITE |
IN\_CLOSE\_NOWRITE)



　　IN\_MOVE，文件被移动，等同于(IN\_MOVED\_FROM | IN\_MOVED\_TO)



　　注：上面所说的文件也包括目录。



　　二、为能在shell下使用inotify特性，需要安装inotify-tools



　　1、inotify-tools：The general purpose of this package is to allow
inotify's features to be used from within shell scripts.



　　下载地址：<http://inotify-tools.sourceforge.net/>



　　编译安装



　　./configure



　　make



　　make install



　　完成后，注意查看manpage，man inotify 、 man inotifywait



　　 1）inotifywait 仅执行阻塞，等待 inotify
事件。您可以监控任何一组文件和目录，或监控整个目录树(目录、子目录、子目录的子目录等等)。在
shell 脚本中使用 inotifywait。



　　 2）inotifywatch 收集关于被监视的文件系统的统计数据，包括每个
inotify 事件发生多少次。



　　2、inotify的系统相关参数：



　　/proc interfaces



　　The following interfaces can be used to limit the amount of kernel
memory consumed by inotify:



　　/proc/sys/fs/inotify/max\_queued\_events



　　The value in this file is used when an application calls
inotify\_init(2) to set an upper limit on the number of events that can
be queued to the corresponding inotify instance. Events in excess of
this limit are dropped, but an IN\_Q\_OVERFLOW event is always
generated.



　　/proc/sys/fs/inotify/max\_user\_instances



　　This specifies an upper limit on the number of inotify instances
that can be created per real user ID.



　　/proc/sys/fs/inotify/max\_user\_watches



　　This specifies a limit on the number of watches that can be
associated with each inotify instance.



　　3、inotifywait 相关的参数(更多，查看manpage)：



　　inotifywait



　　This command simply blocks for inotify events, making it appropriate
for use in shell scripts. It can watch any set of files and directories,
and can recursively watch entire directory trees.



　　-m, --monitor



　　Instead of exiting after receiving a single event, execute
indefinitely. The default behaviour is to exit after the first event
occurs.



　　-r, --recursive



　　Watch all subdirectories of any directories passed as arguments.
Watches will be set up recursively to an unlimited depth. Symbolic links
are not



　　traversed. Newly created subdirectories will also be watched.



　　-q, --quiet



　　If specified once, the program will be less verbose. Specifically,
it will not state when it has completed establishing all inotify
watches.



　　-e , --event



　　Listen for specific event(s) only. The events which can be listened
for are listed in the EVENTS section. This option can be specified more
than once. If omitted, all events are listened for. use"，"separate
multi events









　　三、使用



　　1.查看是否支持inotify，从kernel
2.6.13开始正式并入内核，RHEL5已经支持。看看是否有
/proc/sys/fs/inotify/目录，以确定内核是否支持inotify






[root@RHEL5 Rsync
]
# ll /proc/sys/fs/inotify

total 0

-rw-r--r-- 1 root root 0 Oct 9 09:36 max\_queued\_events

-rw-r--r-- 1 root root 0 Oct 9 09:36 max\_user\_instances

-rw-r--r-- 1 root root 0 Oct 9 09:36 max\_user\_watches



　　2.关于递归：



　　inotifywait



　　This command simply blocks for inotify events, making it appropriate
for use in shell scripts. It can watch any set of files and directories,
and can recursively watch entire directory trees.



　　3.使用：






#!/bin/sh

src=/opt/webmail

des=/tmp

ip=192.168.7.192

/usr/local/bin/inotifywait -mrq --timefmt '%d/%m/%y %H:%M' --format '%T
%w%f' 



-e modify,delete,create,attrib 




${src} 



| while read file

do

rsync -avz --delete --progress 
${src} root@
${ip}:
${des} &&

echo "
${src} was rsynced"

echo
"---------------------------------------------------------------------------"

done



　　注：当要排出同步某个目录时，为rsync添加--exculde=PATTERN参数，注意，路径是相对路径。详细查看man
rsync



　　当要排除都某个目录的事件监控的处理时，为inotifywait添加--exclude或--excludei参数。详细查看man
inotifywait



　　另：/usr/local/bin/inotifywait -mrq --timefmt '%d/%m/%y %H:%M'
--format '%T %w%f' 





　　-e modify,delete,create,attrib 





　　
${src} 





　　上面的命令返回的值类似于：



　　10/03/09 15:31 /wwwpic/1



　　这3个返回值做为参数传给read，关于此处，有人是这样写的：



　　inotifywait -mrq -e create,move,delete,modify 
$SRC | while read D E
F;do细化了返回值。



　　注：要取得监控文件发生的事件，在--format处指定%e参数，同时，使用--event参数来指定要监控的事件即可，如--format
'%T %w%f %e' --event modify,delete,create,attrib



　　说明：当文件系统发现指定目录下有如上的条件的时候就触发相应的指令，是一种主动告之的而非我用循环比较目录下的文件的异动，该程序在运行时，更改目录内的文件时系统内核会发送一个信号，这个信号会触发运行rsync命令，这时会同步源目录和目标目录。



　　--timefmt：指定输出时的输出格式



　　--format： '%T %w%f'指定输出的格式，上面的输出类似于：12/10/08 06:34
/opt/webmail/dovecot-1.1.2/src/test/1



　　小脚本，同步到多台主机：





文件:

inotify\_rsync.tar.gz

大小:

1KB

下载:

下载



　　更改后，更简单，适用于同步到相同的目录，监控多目录，多文件，同步到多台服务器






#!/bin/sh


#set -x


#var

src="/usr/local/nginx/html/lib /usr/local/nginx/html/www
/usr/local/nginx/html/var/www.work.com.conf.php"

des\_ip="172.18.1.35 172.18.1.36 172.18.1.37 172.18.1.38"


#function

inotify\_fun ()

{

/usr/local/bin/inotifywait -mrq --timefmt '%d/%m/%y-%H:%M' --format '%T
%w%f' 



-e modify,delete,create,move 
$1|while read time file

do

for ip in 
$des\_ip

do

echo "
`date +%Y%m%d-%T
`: rsync -avzq --delete --progress 
$1

$ip:
`dirname 
$1
`"

rsync -avzq --delete --progress 
$1 
$ip:
`dirname 
$1
`

echo

done

done

}


#main

for a in 
$src

do

inotify\_fun 
$a &

done



　　参考：<http://www.ibm.com/developerworks/cn/linux/l-ubuntu-inotify/index.html>









　　关于减少rsync的遍历，未完：考虑到被监测的目录每次有一下时间时都会触发rsync，modify,
delete,create,move每次rsync都会遍历源目录，当被监测目录内文件特别多时，会造成系统资源的严重消耗，所以，让rsync每次只
同步修改的文件。因为，如果从监控目录mv走一个目录，那么rsync只会报告找不到你移走的目录而无法删除备份机的应该删除的目录。所以，对于删除这个
事件，没有办法了，只能同步被删除文件或目录的上级目录了。将事件分为两部分，modify,
create,
move事件，触发rsync，只同步修改了的文件。delete事件，同步被删除文件或目录的上级目录(不能越过要同步的根目录)。



　　关于脚本内容的一些说明：



　　rsync.conf里的目录格式一定要注意，没有最后的"/"



　　boot.sh



　　对于rsync命令的目标地址，是由两部分组成的：



　　1、rsync.conf里的dest



　　des=
`grep '
^dest' 
${basedir}/rsync.conf| cut -d '=' -f 2 
`



　　2、被修改了的文件的完全路径，去掉源目录部分，去掉被修改的文件的文件名。



　　mb=
`echo 
$file|awk -F "/" '{NF=NF-1;OFS="/";print 
$0}'|sed
"s
#
$src
#
#g"
`



　　boot.sh



　　
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#



　　先做个记录，脚本在delete部分还有问题




#!/bin/sh


#

basedir=/home/jason/Rsync

destNum=
`grep -c '
^dest' 
${basedir}/rsync.conf
`

src=
`grep 'local directory=' 
${basedir}/rsync.conf|cut -d '=' -f 2
`

des=
`grep '
^dest' 
${basedir}/rsync.conf| cut -d '=' -f 2 
`


#

inotifywait -mrq --timefmt '%d/%m/%y %H:%M' --format '%T %w%f %e' 



--event modify,create,move,delete 
${src} | while read date time file
event

do

echo 
$event

for i in 
$des

do

case 
$event in

MODIFY|CREATE|MOVE|MODIFY,ISDIR|CREATE,ISDIR|MODIFY,ISDIR)


#echo 
$src

no\_src\_root\_file\_name=
`echo 
$file|sed "s
#
$src
#
#g"
`

final\_target\_dest=
$i
$no\_src\_root\_file\_name



echo rsync -avz --delete --progress 
$file 
$final\_target\_dest

rsync -avz --delete --progress 
$file 
$final\_target\_dest

;;

DELETE|DELETE,ISDIR)

src\_file\_up\_dir=
`echo 
$file|awk -F"/" '{NF=NF-1;OFS="/";print

$0}'
`

no\_root\_src\_file\_up\_dir=
`echo 
$file|awk -F"/"
'{NF=NF-2;OFS="/";print 
$0}'|sed "s
#
$src
#
#g"
`

final\_target\_dest\_up\_dir=
$i
$no\_root\_src\_file\_up\_dir

echo rsync -avz --delete --progress 
$src\_file\_up\_dir

$final\_target\_dest\_up\_dir

rsync -avz --delete --progress 
$src\_file\_up\_dir

$final\_target\_dest\_up\_dir

;;

esac

done

done


#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#

rsync.conf

local directory=/EBS/www/projects


#dest\_here

dest=root@174.129.219.40:/EBS/www

20090723：

--format '%T %w%f'



　　其中的%f参数： %f When an event occurs within a directory, this will
be replaced with the name of the File which caused he event to occur.
Otherwise, this will be replaced with an empty string.



　　如果不加%f参数，当一个文件夹里的文件发生变化时，不会输出文件名(需要自己echo脚本里read的变量)，而时输出发生变化的文件的文件夹名，可以将这一点用于减少rsync遍历中的delete事件。



　　另外，%w是用于输出发生变化的文件的。



　　%w This will be replaced with the name of the Watched file on which
an event occurred.


