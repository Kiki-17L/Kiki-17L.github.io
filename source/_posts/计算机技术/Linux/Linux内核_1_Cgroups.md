---
title: "Linux内核 #1 Cgroups"
date: 2024-12-28 20:09:03
tags: Linux
index_img: /img/pt/linux.svg
---



# What is cgroups?

​	Control Groups，是一个Linux 内核功能，用来限制、控制与分离一个**进程组的**资源。最早的名称为**进程容器（process containers）**。





# Functionality



cgroups 提供

- 资源限制（Resources Limiting）：组可以被设置不超过设定的内存限制、I/O带宽限制、CPU配额限制、最大打开文件数
- 优先级设定（Prioritation）：一些组可能会得到更大的CPU，或磁盘I/O吞吐量
- 结算（Accounting）：衡量一个组的资源使用情况，可用于计费目的
- 控制（Control）：冻结组的进程，运行检查点和重新启动



# cgroup

​	cgroup 是一组受相同条件约束的进程，并与一组参数或限制相关联，这些组可以是层次结构的，意味着每个组都从其父组继承限制。
