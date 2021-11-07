---
title: git问题总结
date: 2021-01-30 00:00:00
tags: 
  - git
categories: 
  - 笔记
permalink: /pages/34383b/
---

# git问题总结

##  1. vscode git pull 本地代码被覆盖

今天git pull 本地代码内覆盖问题，因为git pull 之后本地写的代码没了，写了一天的代码 这一下就没了，快哭了。

我说别急 我帮你查查 ，什么编译器历史啥的都找了 给大家来一个亲测的最好解决的办法。

第一步：git reflog

![img](https://img-blog.csdnimg.cn/20200324180330808.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2OTQwNzQw,size_16,color_FFFFFF,t_70)

第二步：**git reset --hard HEAD@{n}** (HEAD:为版本号，就前面那一串数字，n是你要回退到的引用位置)

![img](https://img-blog.csdnimg.cn/20200324180415193.png)

这一张没留图从其他地方找的。（意思就是把图一查到的那个数字串换成 --herd后面的就可以了。一般用查到的第一个数字串。）

参考：https://blog.csdn.net/weixin_42416812/article/details/88810173



## 2. git回退操作

1. 在Gitlab页面通过history查看要项目历史版本:

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xNTA1MDUtN2Y2Nzc4ODMyNWI0OWI2MS5wbmc_aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC9zdHJpcCU3Q2ltYWdlVmlldzIvMi93LzEwMDAvZm9ybWF0L3dlYnA)

 

通过查看提交记录,确认回退的版本.

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xNTA1MDUtZjMyMDVjODliZGZhOGEwNi5wbmc_aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC9zdHJpcCU3Q2ltYWdlVmlldzIvMi93LzEwMDAvZm9ybWF0L3dlYnA)

 

查找到历史版本对应的id:

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xNTA1MDUtNWI2MWI0NTNkMDlmMTlhYi5wbmc_aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC9zdHJpcCU3Q2ltYWdlVmlldzIvMi93LzEwMDAvZm9ybWF0L3dlYnA)

2. 进入git cmd页面

2.1 进入项目工程所在的文件夹,切换到对应的回退分支(develop)

2.2 从remote拉去(pull)最新的代码,同时也是将线上的提交合并记录拉去下来

2.3 通过鼠标右键选中Git Bash Here进入git cmd页面

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xNTA1MDUtZjlkOTI4YjQ3Y2Y5MGFkMy5wbmc_aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC9zdHJpcCU3Q2ltYWdlVmlldzIvMi93Lzg0Ny9mb3JtYXQvd2VicA)

3. 使用git log命令查看所有的历史版本,获取某个历史版本id(核对刚才自己找到的id)

4. 通过指令进行回退到指定的历史版本.

假如要回退的历史版本id为46b66217d92af8c64bcd1d796fe67695022c9d54;

CTRL + C 退出git log状态;

```
git reset --hard 46b66217d92af8c64bcd1d796fe67695022c9d54
```

5. 将修改push到远程服务器develop分支上

git push -f -u origin develop

6. 进入gitlab页面确认是否成功回退

注意：这种回退版本的做法会把之前提交的记录清除掉，请慎用！！！！！！


