---
title: 搭建cloudreve并选择onedrive作为加载策略
date: 2021-08-30 19:15:16
permalink: /pages/d379bb/
categories:
  - 工具书
  - 操作手册
tags:
  - 
---
# **Cloudreve 是什么？**

> Cloudreve 可以让您快速搭建起公私兼备的网盘系统。Cloudreve 在底层支持不同的云存储平台，用户在实际使用时无须关心物理存储方式。你可以使用 Cloudreve 搭建个人用网盘、文件分享系统，亦或是针对大小团体的公有云系统。

# 安装 cloudreve

官网：`http://cloudreve.org/`

github：`https://github.com/cloudreve/Cloudreve`



```shell
mkdir /www/wwwroot/cloudreve    # 创建一个新文件夹存放程序
cd /www/wwwroot/cloudreve           # 进入这个文件夹
wget https://github.com/cloudreve/Cloudreve/releases/download/3.3.1/cloudreve_3.3.1_linux_amd64.tar.gz # 下载你复制的链接
tar -zxvf cloudreve_3.3.1_linux_amd64.tar.gz   # 解压获取到的主程序
chmod +x ./cloudreve                               # 赋予执行权限
./cloudreve                                        # 启动 Cloudreve
```



```
-- 本地
初始管理员账号：admin@cloudreve.org
初始管理员密码：FPCRNOi6
-- 腾讯云
初始管理员账号：admin@cloudreve.org
初始管理员密码：fxrwlKC7
```

