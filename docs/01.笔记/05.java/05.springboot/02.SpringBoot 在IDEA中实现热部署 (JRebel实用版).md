---
title: SpringBoot 在IDEA中实现热部署 (JRebel实用版)
date: 2021-01-30 00:00:00
tags: 
  - idea
categories: 
  - 笔记
permalink: /pages/b0c93f/
---

# SpringBoot 在IDEA中实现热部署 (JRebel实用版)

## JRebel插件安装步骤:

1. 在`setting` - `Plugins` 里面搜索  `JReble` 

   ![20200508144912520](https://gitee.com/zxqzhuzhu/imgs/raw/master/20200508144912520.png)  

**激活链接**:

```java
System.out.println("https://jrebel.qekang.com/6f540b75-a1f5-4ccc-ae32-d00e12eda632");
System.out.println("xyqierkang@163.com");
```

## 准备条件

**File–>Serrings–>Compiler–>找到Build project automatically**勾选上，代表自动编译

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190321230705470.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzOTIyOTgw,size_16,color_FFFFFF,t_70)

快捷键Ctrl,Alt.Shift,/,打开这个页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190321230851432.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190321230935865.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzOTIyOTgw,size_16,color_FFFFFF,t_70)

添加对应项目 热部署

![image-20201112203504432](https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20201112203504432.png)

## 热更新方式

1. `ctrl+shift+f9` 快捷键 热部署

2. 设置idea失去焦点,自动 热部署

   ![image-20201112203025450](https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20201112203025450.png)

![image-20201112203049789](https://gitee.com/zxqzhuzhu/imgs/raw/master/image-20201112203049789.png)