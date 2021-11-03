---
title: centos安装jdk9
date: 2021-10-08 19:46:04
permalink: /pages/7195c5/
categories:
  - 笔记
  - linux
tags:
  - 
---
## ***\**\*1.先下载jdk9的包\*\**\***

```

wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie"  http://download.oracle.com/otn-pub/java/jdk/9.0.4+11/c2514751926b4512b076cc82f959763f/jdk-9.0.4_linux-x64_bin.tar.gz
```

## ***\**\*2.下载完成后解压\*\**\***

```

```

下载的文件直接解压在/usr/local/jdk中

tar -zxvf jdk-9.0.4_linux-x64_bin.tar.gz -C /usr/local/jdk9/



## ***\**\*3.编辑配置文件，配置环境变量\*\**\***

```

vim /etc/profile
添加如下内容：JAVA_HOME根据实际目录来
#set java environment
JAVA_HOME=/usr/local/jdk9/jdk-9.0.4
CLASSPATH=$JAVA_HOME/lib/
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME CLASSPATH
```





***\**\*4.重启机器或执行命令：\*\**\***

```
source /etc/profile
 或者sudo shutdown -r now
```

***\**\*5.查看安装情况\*\**\***

```
java -version

java version "9.0.4"
Java(TM) SE Runtime Environment (build 9.0.4+11)
Java HotSpot(TM) 64-Bit Server VM (build 9.0.4+11, mixed mode)
```