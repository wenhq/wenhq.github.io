---
layout: post
title: Hadoop Pseudo-Distributed
date: '2012-07-27T16:40:00.004+08:00'
author: Wenh Q
tags:
modified_time: '2013-10-11T13:36:02.869+08:00'
blogger_id: tag:blogger.com,1999:blog-4961947611491238191.post-1317080166277636848
blogger_orig_url: http://binaryware.blogspot.com/2012/07/hadoop-pseudo-distributed_27.html
---

Content
-------

### Configuration

Use the following:

conf/core-site.xml:

> <configuration>
>      <property>
>          <name>fs.default.name</name>
>          <value>hdfs://localhost:9000</value>
>      </property>
> </configuration>

conf/hdfs-site.xml:

> <configuration>
>      <property>
>          <name>dfs.replication</name>
>          <value>1</value>
>      </property>
> </configuration>

conf/mapred-site.xml:

> <configuration>
>      <property>
>          <name>mapred.job.tracker</name>
>          <value>localhost:9001</value>
>      </property>
> </configuration>

### Setup passphraseless ssh

Now check that you can ssh to the localhost without a passphrase:

> $ ssh localhost


If you cannot ssh to localhost without a passphrase, execute the
following commands:

> $ ssh-keygen -t dsa -P '' -f ~/.ssh/id_dsa
> $ cat ~/.ssh/id_dsa.pub >> ~/.ssh/authorized_keys

### Execution

Format a new distributed-filesystem:


> $ bin/hadoop namenode -format

Start the hadoop daemons:


> $ bin/start-all.sh

The hadoop daemon log output is written to the ${HADOOP_LOG_DIR}
directory (defaults to ${HADOOP_HOME}/logs).

Browse the web interface for the NameNode and the JobTracker; by default
they are available at:


> NameNode - http://localhost:50070/

> JobTracker - http://localhost:50030/

Copy the input files into the distributed filesystem:


> $ bin/hadoop fs -put conf input

Run some of the examples provided:


> $ bin/hadoop jar hadoop-examples-*.jar grep input output
> 'dfs[a-z.]+'

Examine the output files:

Copy the output files from the distributed filesystem to the local
filesytem and examine them:


> $ bin/hadoop fs -get output output
> $ cat output/*

or

View the output files on the distributed filesystem:


> $ bin/hadoop fs -cat output/*

When you're done, stop the daemons with:


> $ bin/stop-all.sh

### Error

When I exe "bin/start-all.sh", there's an error
"localhost:Error:JAVA_HOME is not set."



> # start-all.sh  
> This script is Deprecated. Instead use start-dfs.sh and
> start-mapred.sh  
> starting namenode, logging to
> /home/chenwq/hadoop/hadoop-0.21.0/bin/../logs/hadoop-root-namenode-ubuntu.out  
>
> localhost: Error: JAVA_HOME is not set.  
> localhost: Error: JAVA_HOME is not set.  
> starting jobtracker, logging to
> /home/chenwq/hadoop/hadoop-0.21.0/bin/../logs/hadoop-root-jobtracker-ubuntu.out  
>
> localhost: Error: JAVA_HOME is not set. 
>


Need to modify conf/hadoop-env.sh


Ref
---

[Pseudo-Distributed
Operation](http://hadoop.apache.org/common/docs/stable/single_node_setup.html#PseudoDistributed)
[localhost: Error: JAVA_HOME is not
set.](http://chenwq.iteye.com/blog/1161530)

Log
---

2012-07-27 Create
