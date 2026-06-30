---
index_img: /img/pt/docker.svg
title: "最佳安装实践 #2 Docker"
tags:
  - Installation
excerpt:
  - Windows 11 下安装 Docker
date: 2025-01-01 15:00:00
---

# 命令行安装（推荐）

打开**cmd**（**not PowerShell**），输入以下命令：

```cmd
"Docker Desktop Installer.exe" install
```



一些值得注意的自定义安装选项：

- `--installation-dir=<path>`: Changes the default installation
- `--windows-containers-default-data-root=<path>`: Specifies the default location for the Windows containers.设置 Windows 容器默认存储路径
- `--wsl-default-data-root=<path>`: Specifies the default location for the WSL distribution disk.设置 WSL 发行版的磁盘路径

- `--backend=<backend name>`: Selects the default backend to use for Docker Desktop, `hyper-v`, `windows` or `wsl-2` **(default)**

