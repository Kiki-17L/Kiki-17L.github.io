---
title: "Linux内核 #2 Namespaces"
date: 2024-12-28 20:47:36
tags: Linux
index_img: /img/pt/linux.svg
---



# What is Linux Namespaces?

​	Linux Namespaces 是一个 Linux 内核功能，用于划分内核资源。它允许进程看到不同的视图，隔离其在系统中的资源，使得它们的运行环境对外界看起来像是在独立的操作系统中。通过 namespace，多个进程可以在同一台物理机上共享资源的同时，实现进程间的隔离，从而提高系统的安全性、可管理性和可扩展性。



# Linux 提供的命名空间



- PID Namespace

  > 这样在不同的 PID Namespace 中，同样的 PID 可以对应不同的进程。例如，容器内的进程可以拥有 PID 1，但在宿主机上该 PID 可能是另一个进程。

- Mount Namespace

  > 每个 Namespace 拥有独立的挂载点视图。通过这个 Namespace，容器或进程可以拥有自己独立的文件系统结构，避免与宿主机或其他容器共享文件系统。

- Network Namespace

  > 将网络接口、IP 地址、路由表、端口等网络资源隔离到各个 Namespace 中。每个 Namespace 可以拥有独立的网络栈，从而实现独立的网络配置和通信。

- IPC Namespace

  > 为不同的进程提供独立的 IPC（进程间通信）资源，如消息队列、共享内存和信号量。不同 Namespace 中的进程无法直接访问其他 Namespace 中的 IPC 资源。

- UTS Namespace

  > 允许不同的 Namespace 中拥有独立的主机名（hostname）和域名（domain name）。这意味着每个容器或进程可以在其 Namespace 中设置不同的主机名，而不影响宿主机或其他容器。

- User Namespace

  > 隔离不同 Namespace 中的用户和用户组 ID（UID 和 GID）。在同一个用户 Namespace 中，可以映射不同的用户 ID 和组 ID，从而使得容器内的进程以不同的权限运行，避免与宿主机上的用户 ID 冲突。
  >
  > **用途**: 容器运行时，通过 User Namespace 可以使容器内的用户以非特权用户身份运行，而不需要以 root 身份运行，从而增加安全性。



# 总结

Linux Namespaces 提供了一种轻量级的资源隔离机制，它是实现容器技术的基础。通过不同的 Namespace 类型，Linux 可以将进程、网络、文件系统、用户等资源进行有效的隔离，保证不同应用或服务之间的安全性和独立性。这种隔离机制在虚拟化、容器化以及多租户环境中具有广泛应用。
