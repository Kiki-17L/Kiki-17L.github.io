---
title: Shell 笔记
excerpt: Shell 学习笔记
author: Louis Liang
tags: [Shell,Technology]
category_bar: true
banner_img: /img/bg/inter.jpg
index_img: /img/pt/ps.svg
date: 2024-7-14 10:00:00
---
# Shell 历史

🧠 Shell 是命令解释执行器（Command Interpreter），

（1）接收用户输入（命令）

（2）解释（命令）

（3）调用操作系统内核 API（执行）

（4）返回结果给用户（给 Terminal）



1. Ken Tompson Shell

   `sh `是第一个 Unix Shell 

2. Bourne Shell

3. Bourne Again Shell

   > /bin/bash

4. C Shell

   是一种比 Bourne Shell更适合的变种 Shell，它的语法与 C 语言很相似。

   > /usr/bin/csh

5. Korn Shell

   集合了 C Shell 和 Bourne Shell 的优点并且和 Bourne Shell 完全兼容。

   > /usr/bin/ksh



# 常见 Shell

Windows 平台

- cmd.exe
- Windows Power Shell
- Power Shell

Linux 平台

- sh

- bash
- Zsh
- Fish

图形 Shell

- explorer

# 变量

## 定义

变量名和等号之间不能有空格

```bash
your_name="Louis"
```

除了显式地直接赋值，还可以用语句给变量赋值

```bash
for file in $('ls /etc')
```



## 使用变量

使用一个定义过的变量，只要在变量名前面加美元符号，花括号是可选的

```bash
echo ${your_name}
echo $your_name
```



## 只读变量

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。

```bash
myUrl="test"
readonly myUrl
```



## 删除变量

```bash
unset variable_name
```



## 类型

1. 字符串

   - 单引号字符串，只会输出字符串内的原内容，单引号里面的单引号可以拼接字符窜
   - 双引号字符串

2. 整数

   使用 **declare** 或 **typeset** 命令来声明整数变量。

   如果尝试将非整数值赋给它，Shell会尝试将其转换为整数

   ```bash
   declare -i myint=1
   ```

3. 数组

   * 整数索引数组

     ```bash
     my_array=(1 2 3 4 5)
     ```

   * 关联数组

     ```bash
     declare -A associative_array
     associative_array["name"]="John"
     associative_array["age"]=30
     ```

4. 环境变量

5. 特殊变量

   - `$0` ：脚本名称
   - `$1,$2...`：脚本参数
   - `$#`：脚本参数数量
   - `$?`：上一条命令退出状态



## 字符串

### 字符串长度

```bash
echo ${#my_str}
```

### 提取字符串

输出从 1 开始的 4 个字符

```bash
echo ${my_str:1:4}
```



# 比较命令

## test

$[...] 用于数值计算

1. 比较整数
   - -eq
   - -ne
   - -gt
   - -lt
2. 比较字符串
3. 比较文件
   - -e：文件是否存在
   - -f：文件是否存在且为普通文件
   - -d：文件是否存在且为目录

## [

与test 命令相似
