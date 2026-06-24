---
title: NumPy
date: 2025-3-17 10:00:00 

---



# 一、简介

**NumPy** 是一个Python语言的扩展程序库，前身是 Numeric。

特点：

1. 支持高阶大规模数组 `ndarray`，并提供矩阵运算。
2. 针对数组运算，提供大量的数学函数



# 二、ndarray



## 构成

类似C语言中的结构体，ndarray 对象由以下4部分组成：

1. 一个指向数据的指针
2. 一个dtype对象：描述数组中固定大小的值
3. 一个数组形状（shape）tuple：描述维度数
4. 一个数组跨度（stride）tuple：描述在当前维度，当前元素前进到下一个元素所需”跨越“的字节数



## 创建

- `np.array()` 函数返回一个 `ndarray` 对象

  参数：

  - `object`
  - `dtype`
  - `copy`
  - `order`
  - `subok`
  - `ndmin`

- `np.empty()`
- `np.zeros(shape)`
- `np.ones(shape)`
- `np.full(shape, val)`
- `np.zeros_like()`
- `np.ones_like()`
- `np.eye()`：创建单位矩阵，对角为1

- `np.asarray()`

- `np.frombuffer(buffer)`：从内存缓冲区 `buffer` 创建数组，与缓冲区 `buffer` 共享内存。高效，迅速
- `np.fromiter`



## 数据类型|dtype

- `bool_`
- `int_`：默认类型，与 C 语言中的 `long` 一致
- `intc`：与 C 语言中的 `int` 一致
- `intp`
- `int8`
- `int16`
- `int32`
- `int64`
- `uint8`
- `uint16`
- `uint32`
- `uint64`
- `float_`：`float64` 简写
- `float16`
- `float32` 
- `float64`
- `complex_`：`complex128` 简写
- `complex64`
- `complex128`



## 索引|Indexing



## 切片|Slice



## 广播|Broadcasting




# 三、数据运算



 ## 数学函数

都是**逐项计算**函数，输入`ndarray`，返回也是`ndarray`

- `np.sin()`
- `np.cos()`
- `np.tan()`
- `np.arcsin()`
- `np.arccos()`
- `np.arctan()`
- `np.around(a,decimals)`
- `np.degrees()`
- `np.floor()`
- `np.ceil()`
- `np.exp()`：指数函数
- `np.maximum()`：最大值函数
- `np.minimum()`：最小值函数



## 算术函数

- `np.add()`
- `np.subtract()`
- `np.multiply()`
- `np.divide()`
- `np.reciprocal()`
- `np.power(a,b)`
- `np.mod()`



## 统计函数

- `np.amin()`
- `np.amax()`
- `np.ptp()`
- `np.median()`：返回中值（中位数）
- `np.mean()`：返回算术平均数
- `np.average()`：返回加权平均数
- `np.sum()`：求和





# 四、矩阵计算



`np.dot(a,b,out)`：

对于一维数组，做向量点积；

对于二维数组，做矩阵乘积；

对于多维数组，即结果数组中的每个元素都是：数组a的最后一维上的所有元素与数组b的倒数第二位上的所有元素的乘积和



`np.vdot()`：

返回两个向量的点积，如果第一个参数是复数，那么它的共轭复数会用于计算。 如果参数是多维数组，它会被展开。



`np.inner()`

返回一维数组的向量内积。对于更高的维度，它返回最后一个轴上的和的乘积。



`np.matmul()`

对于二维数组，作矩阵乘积。

如果任一参数的维数大于2，则将其视为存在于最后两个索引的矩阵的栈，并进行相应广播。

如果任一参数是一维数组，则通过在其维度上附加 1 来将其提升为矩阵，并在乘法之后被去除。



`np.det()`

计算矩阵的行列式



`np.inv()`

返回矩阵乘法的逆矩阵



# 五、其他技巧



## 持久化

- `np.save(filename, arr)`：将数组 `arr` 保存到文件
- `np.load(filename)`：从 `filename` 读书数组，返回数组