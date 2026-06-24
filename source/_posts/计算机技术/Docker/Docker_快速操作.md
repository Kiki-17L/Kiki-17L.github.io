---
title: Docker_APIs
excerpt: 一些 docker 指令的速查
author: Louis Liang
tags: [Dokcer, Technology]
category_bar: true
index_img: /img/pt/docker.svg
banner_img: /img/pt/docker.svg
date: 2024-5-21 10:00:00
---
# 镜像操作


###  docker pull [选项] [地址] 仓库名 [:tag]

> 拉取指定镜像

* 地址：`<域名/IP>[:端口号]`，默认`docker.io`

* 仓库名：`<用户名>/<软件名>`，无用户名则为`library` 是官方镜像源



### docker run -it  --rm [镜像] [命令]

> 交互式地根据镜像运行一个容器，终止运行后，删除容器

* `--rm`：容器退出后就删除
* `命令`：交互式输入的命令



### docker image ls

> 列出所有镜像



 ###  docker image rm [选项] <镜像1> [<镜像2> ...]

> 删除一个或多个镜像

* `<镜像>`： `镜像短 ID`|`镜像长 ID`|`镜像名` | `镜像摘要`



### docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]]

> 将容器的存储层保存下来成为镜像



### docker build [选项] <上下文路径/URL/->

> 根据指定路径下的 Dockerfile 文件，制作镜像



# Dockerfile



### FROM

> 指定基础镜像



### RUN

> 用来执行命令行命令

* *shell* 格式：`RUN <命令>`
* *exec* 格式：`RUN ["可执行文件", "参数1", "参数2"]`

注：Dockerfile 中每一个指令都会建立一层，`RUN` 也不例外。



### COPY

> 将从构建上下文目录中 `<源路径>` 的文件/目录复制到新的一层的镜像内的 `<目标路径>` 位置。

- `COPY [--chown=<user>:<group>] <源路径>... <目标路径>`
- `COPY [--chown=<user>:<group>] ["<源路径1>",... "<目标路径>"]`



### ADD

> 更高级的复制文件

`<源路径>` 可以是一个 URL，这种情况下，Docker 引擎会试图去下载这个链接的文件放到 `<目标路径>` 去。下载后的文件权限自动设置为 600

如果 `<源路径>` 为一个 `tar` 压缩文件的话，压缩格式为 `gzip`, `bzip2` 以及 `xz` 的情况下，`ADD` 指令将会自动解压缩这个压缩文件到 `<目标路径>` 去。





# 容器操作



### docker container stop

> 终止一个容器



### docker container start

> 启动一个处于终止状态的容器



### docker container ls

> 查看处于运行状态容器



### docker container rm

> 删除一个处于终止状态的容器



###  docker container prune

> 删除所有处于终止状态的容器



### docker attach [容器]

> 连接一个容器，从此 stdin 中 exit，会导致容器停止



### docker exec -it [容器] [命令]

> 在一个正在运行中的容器中执行命令，从此 stdin 中 exit，不会导致容器停止





# 数据管理



###  docker volume create [name]

> 创建一个数据卷



###  docker volume ls

> 查看所有的数据卷



### docker volume inspect [name]

>查看指定的数据卷



### docker volume rm [数据卷]

> 删除一个数据卷



### docker run --mount source=[name],taget=[挂载点]

> 启动一个挂载数据卷的容器



### docker volume prune

> 清除所有无主数据卷



# 网络管理