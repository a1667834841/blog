---
title: 搭建tensorFlow环境
date: 2021-10-08 19:46:04
permalink: /pages/1e3bc3/
categories:
  - 笔记
  - tensorFlow
tags:
  - 
---
docker安装带有jupyter notebook的版本

```
docker pull tensorflow/tensorflow:latest-py3-jupyter
```

启动

```
-- 2.0

docker run -it --name tensorflow2.0  -v D:\project\py\tensorFlow\notebooks\data:/tf/notebooks -p 8888:8888 tensorflow/tensorflow:nightly-jupyter
-- 1.0
docker run -it --name tensorflow1.0   -p 8888:8888 tensorflow/tensorflow:1.13.0rc1-py3-jupyter

```

注意：这里映射容器里的路径必须为 `/tf/` 下面的，否则notebooke 打开会找不到对应宿主机的路径。

![屏幕快照 2019-11-18 01.35.52.png](https://segmentfault.com/img/bVbAqUM)

![屏幕快照 2019-11-18 01.35.00.png](https://segmentfault.com/img/bVbAqUH)

参考文章 [官方文档](