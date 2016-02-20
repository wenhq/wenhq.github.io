--- layout: post title: PostgreSQL口令认证 date:
'2012-10-01T11:35:00.000+08:00' author: Wenh Q tags: - tech
modified\_time: '2013-10-11T13:37:43.235+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-2324439459364683185
blogger\_orig\_url:
http://binaryware.blogspot.com/2012/09/postgresql.html ---
Redhat上新装PostgreSQL9.1.3, 用psql连不上, 报错:\
 psql.bin: FATAL:  password authentication failed for user "postgres"\
 明明添加了postgres这个用户, 口令也简单的不得了,不可能记错的,
怎么就连不上呢?\
 \
 上网查,有人说修改pg\_hba.conf,
把local一行的md5改成trust。一试，果然好使。\
 \

后来，客户机远程登录，出现同样问题，于是咱如法炮制，再把md5改成了trust，也能登录了，\
 \
 只要获取对方的信任（trust），问题真的就不是问题了，呵。\
 \

但这种做法对于服务器而言，相当于把自家的锁砸了：设置成trust后，根本就不需要口令。\
 \

我再google，中间突然打不开链接，于是只好耐心地等了5分钟。来火，但是没办法。网络封锁和网络搜索，一不小心就成了一对冤家。\
 \
 终于，老天有眼，让我找到了下面一段话：\
 \
 PostgreSQL
数据库口令与任何操作系统用户口令无关。各个数据库用户的口令是存储在
pg\_authid 系统表里面。口令可以用 SQL 语言命令 [*CREATE
USER*](http://www.blogger.com/blogger.g?blogID=4961947611491238191) 和
[*ALTER
USER*](http://www.blogger.com/blogger.g?blogID=4961947611491238191)
等管理(比如 CREATE USER foo WITH PASSWORD 'secret';
。缺省时，如果没有明确设置口令，那么存储的口令是空并且该用户的口令认证总会失败。\
 《PostgreSQL 8.2.3 中文文档，20.2 认证方法》\
 \
 原来是这样啊，pg\_authid表里的postgres用户的口令还是空的呢！\
 我再改，好了，这回是真好了。\
\
来源：http://zxggmail.iteye.com/blog/1481278 \

