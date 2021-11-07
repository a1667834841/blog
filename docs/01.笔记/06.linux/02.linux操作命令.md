---
title: linux操作命令
date: 2021-01-30 00:00:00
tags: 
  - linux
categories: 
  - 笔记
permalink: /pages/b25bcf/
---

[toc]



# liunx端口c操作

1、开启防火墙 

```sh
 systemctl start firewalld
```

2、开放指定端口

```sh
firewall-cmd --zone=public --add-port=5601/tcp --permanent
   
命令含义：
--zone #作用域
--add-port=1935/tcp  #添加端口，格式为：端口/通讯协议
--permanent  #永久生效，没有此参数重启后失效
```



3、重启防火墙

```sh
	firewall-cmd --reload 
```

4、查看端口号

```sh
netstat -ntlp   //查看当前所有tcp端口·
netstat -ntulp |grep 9200   //查看所有1935端口使用情况·
```



5、查看开放的端口号

```sh
firewall-cmd --list-all
```

6、用于查看指定端口号的进程情况

```sh
netstat -tunlp | grep 端口号
```



端口

4567  网易云解锁



# 文件操作

## 删除文件

### linux删除某个文件下的所有文件

进入这个文件夹
			然后用命令 rm -rf *



## 根据文件名查找

find 搜索目录 -name 目标名字

find / -name file名

/代表是全盘搜索,也可以指定目录搜索

 

find 搜索文件的命令格式：

find [搜索范围] [匹配条件]

选项：

  -name 根据名字查找

  -size  根据文件大小查找, +,-:大于设置的大小,直接写大小是等于

  -user  查找用户名的所有者的所有文件

  -group 根据所属组查找相关文件

  -type  根据文件类型查找(f文件,d目录,l软链接文件)

  -inum  根据i节点查找

  -amin  访问时间access

  -cmin  文件属性change

  -mmin  文件内容modify

## 查看目录文件大小

1、最简单的查看方法可以使用ls -ll、ls-lh命令进行查看，当使用ls -ll，会显示成字节大小，而ls- lh会以KB、MB等为单位进行显示，这样比较直观一些。

[![img](D:\project\vscode\vuepress-theme-reco-demo\my-blog\blogs\笔记\linux\linux操作命令.assets\d52a2834349b033b0f1b3a661bce36d3d439bdff)](https://iknow-pic.cdn.bcebos.com/d52a2834349b033b0f1b3a661bce36d3d439bdff?x-bce-process=image/quality,q_85)

2、通过命令du -h –max-depth=1 *，可以查看当前目录下各文件、文件夹的大小，这个比较实用。

[![img](D:\project\vscode\vuepress-theme-reco-demo\my-blog\blogs\笔记\linux\linux操作命令.assets\203fb80e7bec54e74933dca2b7389b504ec26aab)](https://iknow-pic.cdn.bcebos.com/203fb80e7bec54e74933dca2b7389b504ec26aab?x-bce-process=image/quality,q_85)

3、查询当前目录总大小可以使用du -sh，其中s代表统计汇总的意思，即只输出一个总和大小。

[![img](D:\project\vscode\vuepress-theme-reco-demo\my-blog\blogs\笔记\linux\linux操作命令.assets\024f78f0f736afc38f1afed9bd19ebc4b745127c)](https://iknow-pic.cdn.bcebos.com/024f78f0f736afc38f1afed9bd19ebc4b745127c?x-bce-process=image/quality,q_85)

4、同样，通过命令du -h –max-depth=0 *，可以只显示直接子目录文件及文件夹大小统计值。

[![img](D:\project\vscode\vuepress-theme-reco-demo\my-blog\blogs\笔记\linux\linux操作命令.assets\3b292df5e0fe99252b39a8ec3aa85edf8db17151)](https://iknow-pic.cdn.bcebos.com/3b292df5e0fe99252b39a8ec3aa85edf8db17151?x-bce-process=image/quality,q_85)

5、如果只想查看指定目录的总大小，可以使用du -sh 目录名称。

[![img](D:\project\vscode\vuepress-theme-reco-demo\my-blog\blogs\笔记\linux\linux操作命令.assets\4afbfbedab64034f8bc103baa1c379310a551d7a)](https://iknow-pic.cdn.bcebos.com/4afbfbedab64034f8bc103baa1c379310a551d7a?x-bce-process=image/quality,q_85)

6、对于指定文件夹也可以指定显示层次深度，如du -h --max-depth=0 software/及du -h --max-depth=1 software/

[![img](D:\project\vscode\vuepress-theme-reco-demo\my-blog\blogs\笔记\linux\linux操作命令.assets\500fd9f9d72a60596b2220a62634349b033bba58)](https://iknow-pic.cdn.bcebos.com/500fd9f9d72a60596b2220a62634349b033bba58?x-bce-process=image/quality,q_85)

# 查看哪个目录占用过高
使用 du -h -x --max-depth=1  查看哪个目录占用过高，对于过高目录中的内容适当删减腾出一些空间



# systemctl操作

## 列出系统所有服务

```
#systemctl list-units --all --type=service
```

### 查找指定服务

```
systemctl list-units | grep mysql
```

