---
title: linux小笔记
date: 2021-10-08 19:46:04
permalink: /pages/0382d4/
categories:
  - 笔记
  - linux
tags:
  - 
---
```
ps -eo pmem,pcpu,rss,vsize,args | sort -k 1 -r | less
执行以上命令可查看各个程序进程内存使用的内存情况，如下图所示，第一列为进程占用的内存百分比，可以看到哪些应用程序占的内存比较多，用于排查问题：
```

![img](https://img2018.cnblogs.com/blog/1158674/201903/1158674-20190319134154605-495483923.png)

