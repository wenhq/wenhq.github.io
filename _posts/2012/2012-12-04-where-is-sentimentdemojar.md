--- layout: post title: Where is sentimentDemo.jar？ date:
'2012-12-04T16:30:00.000+08:00' author: Wenh Q tags: - NLP - tech.nlp
modified\_time: '2013-11-30T12:25:43.991+08:00' blogger\_id:
tag:blogger.com,1999:blog-4961947611491238191.post-3258541325304078695
blogger\_orig\_url:
http://binaryware.blogspot.com/2012/12/where-is-sentimentdemojar.html
---

content {#pagetitle}
=======

[Sentiment
Tutorial](http://alias-i.com/lingpipe/demos/tutorial/sentiment/read-me.html)

\
\
Do step by step, but I can't find "sentimentDemo.jar".\
\
Google - https://github.com/Gobaan/Fame-to-Flame/tree/master/sentiment,
the source used lingpipe-3.9.2.jar.\
\
Down resouces - in src dir, and compile with lingpipe-4.1.0.jar, no
errors, last build a new jar.\
\
In linux, the command line like this:\
\
java -cp sentimentDemo.jar***:***lingpipe-4.1.0.jar
***YourPackageName.***PolarityBasic POLARITY\_DIR\
\
Attention: 1)with colon (`:`) classpath separators replacing the
semicolons (`;`) for linux\
2)If forget package, there's an error "cant find main class" .\
\
All right, we can see the result:\

> \
> *BASIC POLARITY DEMO\
> \
> Data Directory=POLARITY\_DIR/txt\_sentoken\
> \
> Training.\
>  \# Training Cases=1800\
>  \# Training Chars=6989652\
> \
> Evaluating.\
>  \# Test Cases=200\
>  \# Correct=163\
>  % Correct=0.815*

Log {#pagetitle}
===

create 2012-12-04 {#pagetitle}
=================

\

