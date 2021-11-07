---
title: java内存模型
date: 2021-10-08 19:46:04
permalink: /pages/a9f94b/
categories:
  - 笔记
  - java
  - jvm
tags:
  - 
---


# 存储器的层次结构

![image-20210404220052192](https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20210404220052192.png)



## 多线程数据一致性硬件层的支持？

1. 给总线加把锁

![image-20210404220213861](https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20210404220213861.png)

2. 通过一致性协议

   一般是 MESI Cache一致性协议

   

   

   

   缓存行:

```
比如读取一个字节的东西，CPU不会只读取一个字节，而是会携带多个字节一起缓存下来，方便下次读取
```



伪共享问题

```
位于同一缓存行的两个不同数据，被两个不同CPU锁定，产生互相影响的伪共享问题

```

乱序问题

```
CPU为了提高指令执行效率，会在一条指令执行过程中（比如去内存读数据（慢100倍）），去同时执行另一条指令，前提是，两条指令没有依赖关系
```



内存屏障

防止指令重排的手段

![image-20210405000035100](https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20210405000035100.png)