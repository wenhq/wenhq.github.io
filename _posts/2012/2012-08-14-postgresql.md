--- layout: post title: PostgreSQL资源 date:
'2012-08-14T16:23:00.000+08:00' author: Wenh Q tags: - tech
modified\_time: '2013-10-11T13:37:43.238+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-8605611648784509120
blogger\_orig\_url:
http://binaryware.blogspot.com/2012/08/postgresql.html ---

Content
-------

### 下载与安装

#### Ubuntu

Ubuntu中已经默认包含PostgreSQL，执行命令：\

> apt-get install postgresql-9.1

重要的依赖包如下：\

-   postgresql-client-9.1 - client libraries and client binaries
-   postgresql-9.1 - core database server
-   postgresql-contrib-9.1 - additional supplied modules
-   libpq-dev - libraries and headers for C language frontend
    development
-   postgresql-server-dev-9.1 - libraries and headers for C language
    backend development
-   pgadmin3 - pgAdmin III graphical administration utility

安装其他版本的PostgreSQL，需要增加源\

> sudo add-apt-repository ppa:pitti/postgresql

Ref
---

​1. [Linux downloads
(Ubuntu)](http://www.postgresql.org/download/linux/ubuntu/)\

Log
---

2012-08-14 Create. Add something about download and install.
