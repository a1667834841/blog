---
title: skyWalking搭配springboot应用 
date: 2021-08-30 19:15:16
permalink: /pages/f61663/
categories:
  - 工具书
  - 操作手册
tags:
  - 
---


## 上传springboot的jar包

```
cd /opt/jar
```

![image-20210616225104486](skyWalking搭配springboot应用 .assets/image-20210616225104486.png)

## 修改agent配置

```shell
cd /opt/software/skywalking/apache-skywalking-apm-bin
mkdir /opt/software/skywalking/apache-skywalking-apm-bin/agent-mysql-boot
cp /opt/software/skywalking/apache-skywalking-apm-bin/agent/* /opt/software/skywalking/apache-skywalking-apm-bin/agent-mysql-boot
# 修改应用名称
vim /opt/software/skywalking/apache-skywalking-apm-bin/agent-mysql-boot/config/agent.config


```

![image-20210616230243851](skyWalking搭配springboot应用 .assets/image-20210616230243851.png)



## 启动应用

```
java -javaagent:/opt/software/skywalking/apache-skywalking-apm-bin/agent-mysql-boot/skywalking-agent.jar -jar /opt/jar/mysql-boot.jar 
```

![image-20210616230937487](skyWalking搭配springboot应用 .assets/image-20210616230937487.png)

> 请求一下项目 sky-walking-ui就有记录了！

![image-20210616230954510](skyWalking搭配springboot应用 .assets/image-20210616230954510.png)

