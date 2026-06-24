---
title: "最佳安装实践 #3 ISE 14.7"
archive: true
category: true
---

# 1 官方下载器安装

（1）访问 AMD Xilinx 官网，下载 ISE 14.7 的完整安装包 [Full installer for Linux (TAR/GZIP)](https://www.xilinx.com/member/forms/download/xef.html?filename=Xilinx_ISE_DS_Lin_14.7_1015_1.tar)

（2）将下载好的压缩包 `Xilinx_ISE_DS_Lin_14.7_1015_1.tar` 解压到非中文目录

（3）执行解压好的安装包里面的安装程序

```bash
cd Xilinx_ISE_DS_Lin_14.7_1015_1
sudo chmod +x xsetup     #当前sudo用户下给xsetup文件添加执行权限
sudo ./xsetup            #进行安装
```

> ps：在使用 xsetup 脚本进行安装时，如果出现依赖缺失等错误，请参见步骤4

（4）在弹出的可视化的安装程序中，选择 `ISE Design Suite System Edition`

（5）在官方下载程序里面下载 Cable Driver 通常会失败。

原因：由于ISE的cable driver需要使用windrvr6模块，而该模块不支持较新的linux内核，所以不能使用官方的方式安装驱动。需要使用网上的开源代码安装驱动。

（6）安装完成后，会默认安装在 `/opt/Xilinx/` 目录下



# 2 设置桌面快捷方式

（1）通过官方的 `installer` 安装 ISE 14.7，默认是不会有快捷启动方式的。

（2）编写 ISE 14.7 启动脚本 `ise14.7_start.sh`

```sh
#!/bin/bash
source /opt/Xilinx/14.7/ISE_DS/settings64.sh
export LD_PRELOAD=/opt/Xilinx/usb-driver/libusb-driver.so //替换为你编译好的驱动路径（见解决Cable Driver问题部分）
ise "$2"
```

将其存放到你自定义的目录下（如：`~/Documents/MyScript/ise14.7_start.sh`），并添加执行权限

（3）编辑一个新的 `Desktop Entry` 文件（这是 GNOME 环境，配置桌面快捷启动方式的入口文件）

```
[Desktop Entry]
Name=ISE 14.7
Exec=/path/to/your/ise14.7_start.sh /opt/Xilinx/14.7/ISE_DS/ %f
Icon=/opt/Xilinx/14.7/ISE_DS/ISE/data/images/pn-ise.png
StartupWMClass=_pn			//解决窗口活动问题。只要设置了正确的WMClass，启动应用就会在图标旁边加点来表示活动。
Type=Application
```

> 可以通过`xprop`工具来查询`WMClass`

保存为 `ise.desktop` 文件，可以暂时保存到桌面，然后右键设置该文件的属性，添加执行权限，允许 Launch

如果该文件图标还是不可执行，应该是 `desktop` 文件中的 `Exec` 值中的参数  `/opt/Xilinx/...` 的问题

官方 `installer` 将 ISE 安装在 `/opt/Xilinx` 这个路径下，所有者都是 `root` 

而刚才写的 `ise.desktop` 文件，所有者是你当前登陆的用户。

所以，当然不能在用户级别的 `desktop` 文件中去启动一个系统级的脚本

我的解决办法是，改 `/opt/Xilinx` 的权限（注：如果desktop 文件语法没有问题，但还是无法启动，一般是路径权限问题）

```bash
chown -R /opt/Xilinx username:username
```

当图标状态改变为可执行时，可以 `ise.desktop` 放在 `~/.local/share/applications/` 这个目录下，系统会自动识别

```bash
mv ise.desktop ~/.local/share/applications/
```



# 3 解决Cable Driver问题

> 原因：由于ISE的cable driver需要使用windrvr6模块，而该模块不支持较新的linux内核，所以不能使用官方的方式安装驱动。需要使用网上的开源代码编译并安装驱动。

（1）安装驱动所需的依赖

```bash
sudo apt install libusb-dev libftdi-dev build-essential libc6-dev fxload
```

- libusb-dev
- libftdi-dev
- build-essential：C/C++ 环境，接下来需要编译 git 上找的驱动库
- libc6-dev
- fxload

（2）判断你的下载器类型

- 如果你的FPGA下载器是 Xilinx 自家的 Platform Cable，直接进行步骤（3） 

- 如果你的FPGA下载器是 Digilent 的 JTAG HS3，它是基于 FT232 方案的（开源的一般都是这个）。请仔细阅读 git 库里面的 README 文档。 最后面有基于 FT232 的方案。

如何判断：

下载器连接PC正常后，执行以下命名，

```bash
sudo lsusb
```

然后找到对应的USB端口，后面有公司名称。

（3）下载并编译 Cable Driver（建议 git 到非中文目录，如：我直接拉取在 `/opt/Xilinx/usb-driver`）

git 库地址：[https://github.com/JohnDMcMaster/xilinx-usb-driver](https://github.com/JohnDMcMaster/xilinx-usb-driver)

```bash
git clone git://git.zerfleddert.de/usb-driver
cd /path/to/your/usb-driver
make
```

> 注：编译完成后可能会弹出 Warnning，可以忽略
>
> 编译完成后得到 `libusb-driver.so` 文件
>
> impact 启动前，需要预加载此文件
>
> 所以要在ISE的启动脚本里将此文件的路径设置为变量`LD_PRELOAD`，以确保 impact 能成功识别此驱动

（4）通过安装脚本`setup_pcusb`，安装编译好的驱动

```bash
sudo ./setup_pcusb /opt/Xilinx/14.7/ISE_DS/ISE/
```

（5）使用`udevadm`重新加载规则

```bash
sudo udevadm control --reload-rules
```



# 4 依赖缺失(libncurses5)

> 常见问题如`libncurses.so.5`的缺失
>
> ncurses（new curses）是一个终端库，新版的Ubuntu全面转向ncurses6，只有一些旧程序还依赖ncurses5
>
> ISE14.7依赖`libncurses5`，而`ubuntu20.04`及以上发行版的apt库默认只有`libncurses6`

如果`xsetup`脚本执行后报错：

```
error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file
```

而使用apt去下载这个`libncurses5`，也会报错：

```sh
E:unable to locate libncurses5
```

为了解决这个问题，我们需手动下载`libncurses5`：

（1）下载两个deb包

```sh
wget http://security.ubuntu.com/ubuntu/pool/universe/n/ncurses/libtinfo5_6.3-2ubuntu0.1_amd64.deb http://security.ubuntu.com/ubuntu/pool/universe/n/ncurses/libncurses5_6.3-2ubuntu0.1_amd64.deb 
```

（2）安装deb包

```sh
sudo apt install ./libtinfo5_6.3-2ubuntu0.1_amd64.deb ./libncurses5_6.3-2ubuntu0.1_amd64.deb
```
