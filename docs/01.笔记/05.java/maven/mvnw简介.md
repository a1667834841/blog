---
title: mvnw简介
date: 2021-10-08 19:46:04
permalink: /pages/7321ff/
categories:
  - 笔记
  - java
  - maven
tags:
  - 
---
# MVNW简介

maven是一款非常流行的java项目构建软件，它集项目的依赖管理、测试用例运行、打包、构件管理于一身，是我们工作的好帮手，maven飞速发展，它的发行版本也越来越多，如果我们的项目是基于maven构件的，那么如何保证拿到我们项目源码的同事的maven版本和我们开发时的版本一致呢，可能你认为很简单，一个公司嘛，规定所有的同事都用一maven版本不就万事大吉了吗？一个组织内部这是可行的，要是你开源了一个项目呢？如何保证你使用的maven的版本和下载你源码的人的maven的版本一致呢，这时候mvnw就大显身手了。
mvnw 全名是maven wrapper,它的原理是在maven-wrapper.properties文件中记录你要使用的maven版本，当用户执行mvnw clean 命令时，发现当前用户的maven版本和期望的版本不一致，那么就下载期望的版本，然后用期望的版本来执行mvn命令，比如刚才的mvn clean。

> mvnw是Maven Wrapper的缩写。因为我们安装Maven时，默认情况下，系统所有项目都会使用全局安装的这个Maven版本。但是，对于某些项目来说，它可能必须使用某个特定的Maven版本，这个时候，就可以使用Maven Wrapper，它可以负责给这个特定的项目安装指定版本的Maven，而其他项目不受影响。

**简单地说，Maven Wrapper就是给一个项目提供一个独立的，指定版本的Maven给它使用。**

作用:

mvnw是一个maven wrapper script,它可以让你在没有安装maven或者maven版本不兼容的条件下运行maven的命令.

原理:

它会寻找maven在你电脑环境变量path中的路径。
如果没有找到这个路径它就会自动下载maven到一个默认的路径下,之后你就可以运行maven命令了。
有时你会碰到一些项目的peoject和你本地的maven不兼容,它会帮你下载合适的maven版本,然后运行。
总结：mvnw是一个maven wrapper script,它可以让你在没有安装maven或者maven版本不兼容的条件下运行maven的命令.

为项目添加mvnw支持很简单，有两种方式：

# 方法一，在Pom.Xml中添加Plugin声明：

```
<plugin>
    <groupId>com.rimerosolutions.maven.plugins</groupId>
    <artifactId>wrapper-maven-plugin</artifactId>
    <version>0.0.4</version>
</plugin>
```

这样当我们执行mvn wrapper:wrapper 时，会帮我们生成mvnw.bat, mvnw, maven/maven-wrapper.jar, maven/maven-wrapper.properties这些文件。
然后我们就可以使用mvnw代替mvn命令执行所有的maven命令，比如mvnw clean package

# 方法二，直接执行Goal

```
#表示我们期望使用的maven的版本为3.3.3
mvn -N io.takari:maven:wrapper -Dmaven=3.3.3
```

产生的内容和第一种方式是一样的，只是目录结构不一样，maven-wrapper.jar和maven-wrapper.properties在".mvn/wrapper"目录下