---
title: docker使服务器硬盘挤满
date: 2021-01-30 00:00:00
tags: 
  - docker
categories: 
  - 笔记
permalink: /pages/e23d09/
---

```
使用 命令
df -ik 查看 内存占用情况

后面发现 是 退出容器后 很多容器都没有删除 导致overlay 占用100%
-- 容器和镜像 存在 overlay 这里
// 删除状态为Exited的容器
docker ps -a | grep "Exited" | awk '{print $1 }'|xargs docker rm
// 删除镜像tag为null的镜像
docker rmi -f $(docker images | grep "none" | awk '{print $3}')
解决！
```



# [Docker 空间使用分析与清理](https://developer.aliyun.com/article/272173)

**简介：** 用户在使用 Docker 部署业务一段时间后，可能会发现宿主节点的磁盘容量持续增长，甚至将磁盘空间耗尽进而引发宿主机异常，进而对业务造成影响。 本文先对 Docker 的空间分析与清理进行说明，然后对容器的磁盘容量限制与使用建议做简要说明。

用户在使用 Docker 部署业务一段时间后，可能会发现宿主节点的磁盘容量持续增长，甚至将磁盘空间耗尽进而引发宿主机异常，进而对业务造成影响。 本文先对 Docker 的空间分析与清理进行说明，然后对容器的磁盘容量限制与使用建议做简要说明。

# 典型问题场景

用户发现 Docker 宿主机的磁盘空间使用率非常高。通过 du 逐层分析，发现是 Volume 或 overlay2 等目录占用了过高空间。示例如下：

```
# 根据使用的存储驱动的不同，相应目录会有所不同：
[root@node3 docker]# du -h --max-depth=1 |sort
104K    ./network
13M    ./image
20K    ./plugins
24G    ./overlay2   # 这个目录占用了非常高的磁盘磁盘空间
25G    .
283M    ./volumes
4.0K    ./swarm
4.0K    ./tmp
4.0K    ./trust
518M    ./containers
```

# 空间使用分析

遇到此类问题，可以参阅如下步骤进行空间分析，定位占用过高空间的业务来源。

## 分析 Docker 空间分布

Docker 的内置 CLI 指令 `docker system df` ，可用于查询镜像（Images）、容器（Containers）和本地卷（Local Volumes）等空间使用大户的空间占用情况。 示例输出如下：

```
[root@node3 docker]# docker system df
TYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE
Images              17                  12                  2.713 GB            1.144 GB (42%)
Containers          15                  12                  10.75 GB            0 B (0%)
Local Volumes       8                   4                   282.9 MB            241.8 MB (85%)
```

## 查看空间占用细节

可以进一步通过 `-v` 参数查看空间占用细节，以确定具体是哪个镜像、容器或本地卷占用了过高空间。示例输出如下：

```
[root@node3 docker]# docker system df -v
# 镜像的空间使用情况
Images space usage:

REPOSITORY                                                   TAG                 IMAGE ID            CREATED             SIZE                SHARED SIZE         UNIQUE SIZE         CONTAINERS
busybox                                                      latest              6ad733544a63        5 days ago          1.129 MB            0 B                 1.129 MB            1
nginx                                                        latest              b8efb18f159b        3 months ago        107.5 MB            107.5 MB            0 B                 4
ubuntu                                                       latest              14f60031763d        3 months ago        119.5 MB            0 B                 119.5 MB            0
alpine                                                       3.3                 606fed0878ec        4 months ago        4.809 MB            0 B                 4.809 MB            0
tutum/curl                                                   latest              01176385d84a        3 years ago         224.4 MB            0 B                 224.4 MB            1

# 容器的空间使用情况
Containers space usage:

CONTAINER ID        IMAGE                                                                    COMMAND                  LOCAL VOLUMES       SIZE                CREATED             STATUS                     NAMES
d1da451ceeab        busybox                                                                  "ping 127.0.0.1"         0                   10.7 GB             About an hour ago   Up About an hour           dstest
956ae1d241e8        nginx:latest                                                             "nginx -g 'daemon ..."   0                   26 B                3 months ago        Up 3 months                localTest_restserver_2
74973d237a06        nginx:latest                                                             "nginx -g 'daemon ..."   0                   2 B                 3 months ago        Up 3 months                

# 本地卷的空间使用情况
Local Volumes space usage:

VOLUME NAME                                                        LINKS               SIZE
83ba8747f4172a3c02a15f85b71e1565affca59f01352b4a94e0d28e65c26d1c   0                   830 B
a479c303b278f1442f66644f694a554aac630e72b7a27065a11ef85c4d87b648   0                   22.16 MB
79a25b6376e0d6587d8f4f24e08f9467981f04daad14bf3353a12d727d065503   1                   18.83 MB
```

# 空间清理

## 自动清理

可以通过 Docker 内置的 CLI 指令 `docker system prune` 来进行自动空间清理。

> **Tips** ：
>
> **不同状态的镜像**
>
> - **已使用镜像（used image）**： 指所有已被容器（包括已停止的）关联的镜像。即 docker ps -a 看到的所有容器使用的镜像。
> - **未引用镜像（unreferenced image）**：没有被分配或使用在容器中的镜像，但它有 Tag 信息。
> - **悬空镜像（dangling image）**：未配置任何 Tag （也就无法被引用）的镜像，所以悬空。这通常是由于镜像 build 的时候没有指定 -t 参数配置 Tag 导致的。比如:

```
REPOSITORY                                                   TAG                 IMAGE ID            CREATED             SIZE
<none>                                                      <none>              6ad733544a63        5 days ago          1.13 MB   # 悬空镜像（dangling image）
```

> **挂起的卷（dangling Volume)**
> 类似的，dangling=true 的 Volume 表示没有被任何容器引用的卷。

**docker system prune 自动清理说明**：

- 该指令默认会清除所有如下资源：
  - 已停止的容器（container）
  - 未被任何容器所使用的卷（volume）
  - 未被任何容器所关联的网络（network）
  - 所有悬空镜像（image）。
- 该指令默认只会清除悬空镜像，未被使用的镜像不会被删除。
- 添加 `-a 或 --all` 参数后，可以一并清除所有未使用的镜像和悬空镜像。
- 可以添加 `-f 或 --force` 参数用以忽略相关告警确认信息。
- 指令结尾处会显示总计清理释放的空间大小。

操作示例：

```
[root@node3 docker]# docker system prune --help

Usage:    docker system prune [OPTIONS]

Remove unused data

Options:
  -a, --all     Remove all unused images not just dangling ones
  -f, --force   Do not prompt for confirmation
      --help    Print usage
[root@node3 docker]# docker system prune -a
WARNING! This will remove:
    - all stopped containers
    - all volumes not used by at least one container
    - all networks not used by at least one container
    - all images without at least one container associated to them
Are you sure you want to continue? [y/N] y
Deleted Containers:
c09c31c49491ee7f2324160e43947917940221b4e6cc1274906def640a7a631f
2aa0180e1a0f4c2c64349a6ed969651052373e7a9471050dce9015701cf1b957
6d18003b06823c5d76d807a319387b06680fc93d0a32bc29c1cea4c07e8d515d

Deleted Volumes:
a479c303b278f1442f66644f694a554aac630e72b7a27065a11ef85c4d87b648
79a25b6376e0d6587d8f4f24e08f9467981f04daad14bf3353a12d727d065503

Deleted Images:
untagged: tutum/curl:latest
untagged: tutum/curl@sha256:b6f16e88387acd4e6326176b212b3dae63f5b2134e69560d0b0673cfb0fb976f
deleted: sha256:01176385d84aeb1d40ed18c6d3f952abf40d2d2b4aa98fcf0a8a4b01010fb9a9
deleted: sha256:c84f85637212412c1d46d1dd50f789df2c3b44678ee3fee6a820888e734f9b5a
untagged: test:lastest
deleted: sha256:794ff09332586a091514eb3d1c44990244e57e34adc71d4b4334c0674a1377e9
deleted: sha256:636a1e7769d2242556243e9a21fb96bb878ab5b94c41ff485667252c968b375e

Total reclaimed space: 1.565 GB
```

## 手工清理

### 网络清理

网络配置通常占用的空间非常低，略过。

### 镜像清理

如果通过 docker system df 分析，是镜像占用了过高空间。则可以根据业务情况，评估相关镜像的使用情况。对于悬空和未使用的镜像， 可以使用如下指令手工清理：

```
# 删除所有悬空镜像，但不会删除未使用镜像：
docker rmi $(docker images -f "dangling=true" -q)

# 删除所有未使用镜像和悬空镜像。
# 【说明】：轮询到还在被使用的镜像时，会有类似"image is being used by xxx container"的告警信息，所以相关镜像不会被删除，忽略即可。
docker rmi $(docker images-q)
```

### 卷清理

如果通过 docker system df 分析，是卷占用了过高空间。则可以根据业务情况，评估相关卷的使用情况。对于未被任何容器调用的卷（-v 结果信息中，"LINKS" 显示为 0），可以使用如下指令手工清理：

```
# 删除所有未被任何容器关联引用的卷：
docker volume rm $(docker volume ls -qf dangling=true)

# 也可以直接使用如下指令，删除所有未被任何容器关联引用的卷（但建议使用上面的方式）
# 【说明】轮询到还在使用的卷时，会有类似"volume is in use"的告警信息，所以相关卷不会被删除，忽略即可。
docker volume rm $(docker volume ls -q)
```

### 容器清理

如果通过 docker system df 分析，是某个容器占用了过高空间。则可以根据业务情况，评估相关容器的业务归属并进行处理。对于已停止或其它异常状态的容器，可以结合 `-f 或 --filter `筛选器，使用类似如下指令来手工清理：

```
# 删除所有已退出的容器
docker rm -v $(docker ps -aq -f status=exited)
# 删除所有状态为 dead 的容器
docker rm -v $(docker ps -aq -f status=dead)
```

> 更多关于 ps 指令支持的筛选器信息，可以参阅[官方文档](https://docs.docker-cn.com/engine/reference/commandline/ps/#filtering)。

# 在用空间资源分析

对于还在使用的空间资源，可以参阅如下说明做进一步排查分析。

## 镜像空间分析

如果某个镜像占用了过高空间，则可以通过如下方式做进一步空间分析：

1. 通过 docker system df 获取占用过高空间的镜像信息。
2. 基于相应镜像创建测试容器。
3. exec 进入容器后，结合 du 等 shell 指令做进一步空间分析，定位出占用最高空间的目录或文件。
4. 结合业务情况做进一步处理，重新 build 镜像。

示例：

```
[root@node3]# docker exec -it dstest sh
/ # du -h | head
8.0K    ./root
32.0K    ./etc
4.0K    ./usr/sbin
8.0K    ./usr
10.0G    ./home/java/logs
10.0G    ./home/java
10.0G    ./home
1.1M    ./bin
0    ./dev/shm
0    ./dev/mqueue
```

## 容器空间分析

如果某个运行中的容器占用了过高空间，则可以通过如下方式做进一步空间分析：

> **Tips** ：
>
> **容器的只读层与镜像层的空间占用情况**
> 一个容器的占用的总空间，包含其最顶层的读写层（writable layer）和底部的只读镜像层（base image layer，read-only）。更多相关说明，可以参阅[官方文档](https://docs.docker-cn.com/engine/userguide/storagedriver/imagesandcontainers/#container-and-layers)。
> 可以通过 docker ps 的 `-s` 参数来分别显示二者的空间占用情况，进而判断相应容器的空间占用主要是来自原始镜像，还是运行中产生。
>
> ![容器空间占用示意图](D:\project\vscode\vuepress-theme-reco-demo\my-blog\blogs\笔记\docker\docker使服务器硬盘挤满.assets\82ce6b220fe5aef04c051db37c20460d.png)
> 示例：

```
# 如下容器的原始镜像占用了 422MB 空间，实际运行过程中只占用了 2B 空间：
CONTAINER ID        IMAGE                                                                                                                                COMMAND                  CREATED             STATUS              PORTS                                           NAMES                                                                                    SIZE
ac39128ccbc0        registry.aliyuncs.com/acs-sample/wordpress:4.6                                                                                       "/entrypoint.sh ap..."   3 months ago        Up 11 days          0.0.0.0:32779->80/tcp                           Web_web_4                                                                                2 B (virtual 422 MB)
```

容器空间占用的分析步骤：

1. 通过 docker system df 获取占用过高空间的容器信息。
2. 通过前述 `-s` 参数确认到底是底层镜像，还是运行过程中产生的数据占用了过高空间。
3. exec 进入容器，结合 du 等 shell 指令做进一步空间分析，定位出占用最高空间的目录或文件。
4. 结合业务情况做进一步处理。

# 引申：Docker 磁盘空间限制与使用建议

## 磁盘空间限制

### 使用 Device Mapper 存储驱动限制容器磁盘空间

如果使用 Device Mapper 作为底层存储驱动，则可以通过 Docker daemon 的如下参数来全局限制单个容器占用空间的大小：

- `--storage-opt dm.basesize=20G` 表示限制单个容器最多占用 20G 空间，将应用于任何新建容器。

更多关于 Device Mapper 存储驱动的说明，可以参阅[官方文档](https://docs.docker-cn.com/engine/userguide/storagedriver/device-mapper-driver/)。

### 使用 btrfs 存储驱动限制容器磁盘空间

btrfs 驱动主要使用 btrfs 所提供的 subvolume 功能来实现。一个容器会对应一个 subvolume。针对容器对应的 subvolume 启用并配置 quota 即可限制其磁盘空间。示例配置：

```
btrfs qgroup limit -e 50G /var/lib/docker/btrfs/subvolumes/<CONTAINER_ID>
```

btrfs 还有其它很好的特性，比如可以在线扩容（在线加入一块新的块设备，来扩充整个文件系统的大小）。更多关于 btrfs 存储驱动的说明，可以参阅[官方文档](https://docs.docker-cn.com/engine/userguide/storagedriver/btrfs-driver/)。

### 外挂 LVM 卷

如果使用的是其它不支持对单个容器的磁盘容量进行限制的存储驱动，则可以考虑如下通用方案：

- 通过 LVM 方式创建一个指定容量的卷,然后挂载到宿主操作系统上特定目录。最后通过 --volume 参数来让容器来挂载使用相应目录。

**注意**：该方案的前提条件是，容器中所有落盘操作要全部落到上述 "--volume" 参数指定的卷中，否则容器还会占用默认 aufs 所在盘的空间,进而造成统计不准。

## Docker 存储使用建议

细化的存储使用最佳实践与采用的存储驱动（storage driver）类型强相关，您可以参阅[官方文档](https://docs.docker-cn.com/engine/userguide/storagedriver/)做相关了解，本文不做进一步细化说明。
通用的存储使用建议如下：

- 容器内的业务日志务必配置轮询覆写，或者使用日志驱动将日志输出到外部存储。避免日志文件持续增长，占用过高磁盘空间。
- 结合外部监控对宿主机的磁盘空间使用情况进行监控和告警。
- 可以参阅文档 [如何给容器服务的Docker增加数据盘](https://yq.aliyun.com/articles/53313)来扩容默认 Docker 存储空间。