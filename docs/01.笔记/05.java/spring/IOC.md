---
title: IOC
date: 2021-10-08 19:46:04
permalink: /pages/47aa5d/
categories:
  - 笔记
  - java
  - spring
tags:
  - 
---
这里IoC容器就解决了这个问题。**这个容器可以自动对你的代码进行初始化，你只需要维护一个Configuration（可以是xml可以是一段代码），而不用每次初始化一辆车都要亲手去写那一大段初始化的代码**。这是引入IoC Container的第一个好处。

IoC Container的第二个好处是：**我们在创建实例的时候不需要了解其中的细节。**在上面的例子中，我们自己手动创建一个车instance时候，是从底层往上层new的：



作者：Mingqi
链接：https://www.zhihu.com/question/23277575/answer/169698662
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。