---
title: "Docker #1 架构"
date: 2024-12-26 12:58:54
tags: Docker
index_img: /img/pt/docker.svg
---

# 一、Docker 架构

Docker 是一个 client-server 架构的应用软件，包含：

1. docker-daemon：`dockerd`
2. APIs
3. docker-client



client 可以连接 local-daemon，也可以连接 remote-daemon



# 二、Docker与Linux内核



在 0.9 之前，Docker 一直用的 LXC 技术来利用 Linux 内核的虚拟化功能。

在 0.9 版本之后，Docker 采用自研的 libcontainer 来使用 Linux 内核提供的虚拟化功能，并且也可以选择其它接口。



Docker 可选的接口

1. libcontainer
2. libvirt
3. LXC
4. systemd_nspawn



![Docker 底层接口](/img/dockerinterfaces.svg)



