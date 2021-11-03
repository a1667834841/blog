---
title: JVM入门
date: 2021-10-08 19:46:04
permalink: /pages/5917b5/
categories:
  - 笔记
  - java
  - jvm
tags:
  - 
---
# java从编码到执行

![image-20210404000301492](https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20210404000301492.png)



# 什么是编译性语言？

程序在执行之前需要有一个专门的编译过程，把程序编译成机器可以理解的文件，这样运行时机器不需要重新翻译这个程序文件，直接使用编译后的程序文件。

> **特点：执行效率高，依赖编译器，跨平台性差。**

```cpp
有哪些编译型语言：
C/C++、Pascal/Object Pascal（Delphi）、Golang
```

# 什么是解释型语言

程序不需要编译，程序只有在运行的时候才会被翻译成机器语言，每次执行都会被翻译一次，所以执行效率比较低。

> **特点：执行效率低，依赖解释器，跨平台性高**

```bash
有哪些解释型语言：Java、C#、PHP、JavaScript、VBScript、  
Perl、Python、Ruby、MATLAB 等等
```



# java是编译型语言还是解释型语言？

答：两者都是，Java文件需要被编译成.class文件，字节码解释器负责解释.class文件为机器能理解的语言