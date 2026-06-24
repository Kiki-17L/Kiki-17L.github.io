---
title: "最佳安装实践 #1 WSL2"
tags:
  - Installation
index_img: /img/pt/linux.svg
---
>参考于 Windows 官方文档


# 一键安装

> [!NOTE]
>
> 必须运行 Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）或 Windows 11 才能使用以下命令



```powershell
wsl --install
```



这个命令：

1. 启用可选的 WSL 和虚拟机平台组件
2. 下载并安装最新的 Linux 内核
3. 将 WSL 2 设置为默认值

接下来就可以：

- 下载并安装 Ubuntu Linux 发行版 



# 手动安装

（1）通过 Windows 启用功能面板，启用：

1. Windows Subsystem for Linux
1. Virtual Machine Platform

（2）更新到 WSL2

```powershell
wsl --update
```

（3）配置 WSL2 为默认版本

```powershell
wsl --set-default-version 2
```

（4）下载 Linux Distro



# 常用命令

* `wsl --list -online`：查看可下载的发行版
* `wsl --unregistry`：卸载发行版，移除 VHDX 文件，删除相关配置，修改注册表（不可逆）
* `wsl --distrubution`：启动发行版
* `wsl --export <DistroName> <ExportFilePath>`：导出发行版。导出 VHDX 文件等，这个命令只导出文件系统内容，不会导出 WSL 相关的配置或用户设置（比如 `/etc/wsl.conf` 文件、Windows 环境设置等）。一般导出成归档文件。
* `wsl --import <DistroName> <InstallLocation> <ExportFilePath>`：导入发行版。
