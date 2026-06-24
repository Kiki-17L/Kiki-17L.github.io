---
title: "Python #1 速览Guide"
date: 2025-01-03 16:39:12
tags:
index_img: /img/pt/python.svg
---



# 一、标识符

- 由字母、数字、下划线组成
- 以字母或者下划线`_`开头
- 对大小写敏感



# 二、数据类型



## 数字|Number

python 的数字包括：

- int（整数）
- float（浮点数）
- complex（复数）
- bool（布尔值）



## 字符串|String



**特性：**

- 不可改变
- 单引号`''`和双引号`""`的使用完全相同

- 三引号`''' '''`或者`""" """`，表示多行字符
- 反斜杠`\`转义
- `r`（raw）使转义失效
- 加号`+`连结字符串，星号`*`重复
- 两种索引方式：从左往右，`0`开始；从右往左，`-1`开始
- 没有单独的字符类型
- 字符串有切片：`str[start:end]`，结束索引`end`不包含在切片内
- 切片可以配步长：`str[start:end:step]`

**内建函数：**

- `len(str)`
- `max(str)`
- `min(str)`

**内置方法：**

- `count(str,beg=0,end=len(str))`
- `title()`：返回标题化的字符串
- `capitalize()`：第一个字母大写
- `upper()`：返回大写化的字符串
- `lower()`：返回小写化的字符串
- `find(str,beg=0,end=len(str))`：返回指定范围内查找到的字符串的首索引
- `index(str,beg=0,end=len(str))`：同`find`
- `swapcase()`



## 列表|List

> 一个打了激素的数组



**性质：**

- 元素可重复
- 可包含任意数据类型
- 可嵌套
- 可切片
- 具备连接符`+`、重复符`*`

**删除列表：**

```python
del list
```

**内置函数：**

- `len(list)`
- `max(list)`
- `min(list)`
- `list(seq)`：将元组转换成列表

**内置方法**：

- `clear()`
- `copy()`
- `append(obj)`

- `extend(iterable)`：通过`iterable` 的所有项来扩展列表
- `count(obj)`：统计对象出现次数
- `pop([index])`：默认弹出最后一个对象
- `insert(index,obj)`
- `remove(obj)`：移除第一个匹配的值，未找到时触发`ValueError`
- `index(obj)`：返回第一个匹配的值的**零基索引**，也可制定范围
- `reverse()`：翻转列表
- `sort(*,key=None,reverse=False)`：就地排序列表



## 元组|Tuple



**特性：**

- 类似 `List`
- 内存内容不可变



**内建函数：**

- `len(tuple)`
- `max(tup)`
- `min(tup)`
- `tuple(iterable)`：将可迭代系列转换为元组



## 集合|Set



**特性：**

- 是序列（`seq`）
- 元素不重复

- 元素无顺序

**内建函数：**

- `len(set)`：计算集合元素个数

**内置方法：**

- `add(hashable)`：给集合添加一个`hasable`的元素
- `clear()`
- `copy()`
- `pop()`：随机移除一个元素
- `remove(obj)`：移除指定元素
- `discard(obj)`：删除制定元素
- `update(iterable)`：给集合添加可迭代的序列



## 字典|Dictionary



**特性：**

- 键值可以是任意数据类型

- 键不可变

- 键唯一
- 创建空字典用`{}`



**内建函数：**

- `len(dict)`
- `str(dict)`：打印字典



**内置方法：**

- `key in dict`：判断 `key` 是否在词典中
- `copy()`
- `clear()`
- `items()`
- `keys()`
- `values()`
- `fromkeys(seq)`
- `setdefault(key,default=None)`：设置键的默认值，如果键值不存在，则添加键



## 注意

（1）不可变的数据类型：

- Number
- String
- Tuple

（2）可变数据类型

- List
- Set
- Dictionary



# 三、流程控制



python 没有 `switch...case` 语句，



## if 语句

```python
if condition1 :
    statements...
elif condition2 :
    statements...
elif condition3 :
    statements...
else
	statements...
```



## match 语句



- 接受一个 `expression`，将它的 `value` 同一系列的 `pattern` 比较。

- 只运行第一个匹配的代码块
- `pattern` 可以解包赋值（`unpacking`）

```python
match expression :
    case constant1 : 
        statements...
    case constant2 :
        
    case constant3 :
    
    case _ :
        deault statements
```



## for 语句



Pascal 语言在仅仅在**算数过程上**进行迭代

C 语言允许用户自定义**迭代步骤**和**终止条件**

不同于其他高级语言：

- Python 的 `for` 语句是在任何 `iterable` 对象的 `item` 上按顺序进行迭代

- 迭代对象可以是字符串或者 `List`



## range() 函数

**函数重载：**

- `range(end)`
- `range(start,end)`
- `range(start,end,step)`

**特性：**

`range()` 返回的 `object` 表现得像一个 `list` ，但实际上不是 `list` 而是一个 `iterable` 对象。也不是一个 `iterator` ，名叫 `range`对象

`sum()` 函数也是接受一个 `iterable` 对象



## loop 中的 else 子句

loop 中的 `else` 子句与 try 语句中的 `else` 子句有异曲同工之妙：

> a `try` statement’s `else` clause runs when no exception occurs, a loop’s `else` clause runs when no `break` occurs. 



- `loop` 中 `else` 子句一般与 `break` 配对，用于表示 `loop` 顺利结束之后执行的代码块
- 在 `for` 循环中，完成了最后的 `iteration` 后执行 `else`

- 在 `while` 循环中，`loop condition` 变为 `false` 后执行
- `return` 发生不会执行 `else`
- `Exceptions` 发生不会执行 `else`



## pass 语句



- `pass` 语句什么也不干
- 主要用于在需要语法上保持一致，但不需要执行什么任务的地方
- 用在 `busy-wait` 上，如等待键盘输入
- 用在 `create minimal class` 上
- 用在待补全的函数体上，占位

 

# 四、语法功能



## 多行语句

一条语句太长，分行写，用反斜杠 `\`

```python
a=1+2 \
+3 \
+4
print(a)

#输出10
```



## 一行多句

一行写多条语句，用分号`;`分割

```python
a=1;a+=2;print(a)	#输出3
```





## 推导式|Comprehension

> 从一个数据序列构建另一个新的数据序列



**内置支持的推导式：**

- 列表推导式：`[表达式 for 变量 in 列表 if 过滤条件]`
- 元组推导式：`(表达式 for item in seq if 过滤条件)`，返回的是生成器对象
- 集合推导式：`{表达式 for item in seq if 过滤条件}`
- 字典推导式：`{键表达式 : 值表达式 for 值 in 列表 if 过滤条件}`



**嵌套的推导式：**



实现矩阵转置：

```python
matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

t=[ [ row[i] for row in matrix] for i in range(3)]
```



## 迭代器|Iterator

- 迭代是 Python 最强大的功能之一，是访问集合元素的一种方式。

- 迭代器是一个可以记住遍历的位置的对象。

- 迭代器对象从集合的第一个元素开始访问，直到所有的元素被访问完结束。迭代器只能往前不会后退。

- 迭代器有两个基本的方法：**iter()** 和 **next()**。

- 字符串，列表或元组对象都可用于创建迭代器



```python
#!/usr/bin/python3
 
import sys         # 引入 sys 模块
 
list=[1,2,3,4]
it = iter(list)    # 创建迭代器对象
 
while True:
    try:
        print (next(it))
    except StopIteration:
        sys.exit()
```





## 生成器|Generator

代码组内部有 `yield` 语句的函数是一个生成器（generator）

生成器函数是一种特殊的函数，可以在迭代过程中逐步产生值，而不是一次性返回所有结果。

跟普通函数不同的是，生成器是一个返回迭代器的函数，只能用于迭代操作，更简单点理解生成器就是一个迭代器。

当在生成器函数中使用 **yield** 语句时，函数的执行将会暂停，并将 **yield** 后面的表达式作为当前迭代的值返回。

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1
 
# 创建生成器对象
generator = countdown(5)
 
# 通过迭代生成器获取值
print(next(generator))  # 输出: 5
print(next(generator))  # 输出: 4
print(next(generator))  # 输出: 3
 
# 使用 for 循环迭代生成器
for value in generator:
    print(value)  # 输出: 2 1
```



## 切片|Slice

- 切片是一个强大的数据操作方式
- 可用于 `str`，`list`，`tuple`等序列类型
- 实现高效的数据访问、数据修改、数据复制
- 切片返回的是新对象



**切片赋值（仅支持列表）**

```python
list = [0,1,2,3,4]
list[1:3] = [2,1]
print(list)
```

输出：[0, 2, 1, 3, 4]



**切片删除（仅支持列表）**

```python
list = [0,1,2,3,4]
del list[1:3]
print(list)
```

输出：[0, 3, 4]





# 五、函数

- `procedure`：代码块
- `function`：函数有返回值
- `method`：属于 `object` 的 `function`



## 特性

- python 里面的函数都是 `function`，而不是 `procedure` 尽管他没有任何返回值。
- 默认返回值是 `None`



## 形式参数



**默认参数：**

- 默认参数会在函数调用时被共享



**特殊参数（Special Arguments）：**

- `positional-or-keyword`
- `positional-only`：用 `/` 分割
- `keyword-only`：用 `*` 分割

关键字参数后面不能有位置参数



**任意参数（Arbitrary Arguments）：**

- `*`用元组

- `**`用字典

- 在函数定义中，排在任意参数后面的参数，只能用 `keyword arguments` 传入



**解包参数列表（Unpaking Arguments List）：**

- `*` ：解包 `list` 和`tuple`
- `**`：`keyword` 解包 `dictionary`





## lambda 表达式

特征：

- Small
- Anonymous
- a single expression
- 是一个语法糖（syntatics sugar）
- 当需要一个函数对象时，lambda表达式就派上用场
- 可以当参数传入



# 六、数据结构



## List实现栈



两个**内置方法**实现栈的**后进先出**：

- `list.pop([index])`：弹栈，若不指定`index`，默认返回列表最后一个元素
- `list.append(obj)`：进栈，在列表末尾添加元素`obj`



## 队列的实现



用 `collections.deque`实现快速从两端添加或删除元素。

```python
from collections import deque

queue=deque([1,2,3,4])

queue.append(5)    # 5到了
queue.append(6)	   # 6到了
queue.popleft()    # 1出队
queue.popleft()    # 2出队
```



# 七、模块



## 模块导入



**特性：**

- `module` 如果有 `excutable statements`，在导入时执行一次，用来初始化模块
- 以 `_` 开头的函数，不会被导入
- `module` 在每个  `interpreter session` 只会被导入一次

**变种：**

- `import somemodule`：导入整个模块
- `from somemodule import func1,func2`：从某个模块导入函数，（并加入到当前的命名空间）





## 搜索路径



- `sys.builtin_module_names`：内置模块
- `sys.path`：可以被修改，初始化为以下三种
  - `current directory`
  - `PYTHONPATH`
  - `installation dependent default` ：通常包含 `site-packages`



## Compiled Python File



- 存储在 `__pycache__/module.version.pyc`  路径下
- `pyc` 比 `py` 快在装载速度上

 

# 八、输入输出



## 输出格式



**输出的3种方法：**

- `expression statements`
- `print()` 函数
- `fileobject.write()`：文件对象的 `write()` 方法

**格式控制的方法：**

- `formatted string literal`：以`f` 开头
- `str.format()`：可以位置参数给入，也可以关键字参数给入，
- `format % values`

**例子：**

```python
names={"Louis": 20, "John": 30, "Alice": 25}

for name, age in names.items():
    print(f'{name:10} is {age:5.1f}')
```



## 文件读写



**特性：**

- `for statement` 可以迭代文件对象 `f` 

- `open(filename,mode,encoding=None)` 函数返回 `file object`

  `mode` 有 

  - `r`：只读（默认）

  - `w`：只写（会覆盖原有文件）

  - `a`：添加

  - `r+`：读写

  - `a+`：读写（添加）

  - `w+`：读写（覆盖）

- 使用 `with` 关键词操作文件，会在它的 `suite` （代码块）结束后自动正确地关闭文件

```python
with open('workfile', encoding="utf-8") as f:
    # this is suite
    read_data = f.read()

# We can check that the file has been automatically closed.
f.closed
True 	
```

**文件方法：**

- `f.read(size=-1)`：读 `size` 大小的数据（单位是字节），不指定则默认读取整个文件

- `f.readline(size=-1)`：读 `size` 大小的数据（单位是字节），不指定则默认读取整行数据（包括换行符）

- `f.write(str)`：返回写入字数

- `f.tell()`：返回文件对象的当前位置

- `f.seek(offset,whence)`：修改文件对象的 `current position`，由 `whence` 指定相对位置，`offset` 指定偏移量

  `whence` 参数：

  - `0`：开始
  - `1`：当前位置
  - `2`：文件尾部



## JSON支持

- 导入 `json` 库
- `json.dumps(x)`：简单序列化
- `json.dump(x,f)`：序列化到文件 `f`
- `json.load(f)`：从文件 `f` 反序列化



# 九、错误处理

- `except` 语句最多执行一次
- ` break` 、`continue` 、`return`  出现在 ` try` 子句中 ， `finally` 子句先执行，再 `raise`
- ` break` 、`continue` 、`return`  出现在 `finally` 子句中，





# 十、类



## 创建语法

```python
class Class_Name(Base_Class1,Base_Class2):
	attr1="1"
    attr2="2"
    
    def __init__(self,attr1,attr2): 
        self.attr1=attr1
        self.attr2=attr2
    
example=Class_Name(attr_1,attr_2)    
```



## 专有方法

1. `__init__`
2. `__del__`
3. `__repr__`
4. `__setitem__`
5. `__getitem__`
6. `__len__`
7. `__cmp__`
8. `__call__`
9. `__add__`
10. `__sub__`
11. `__mul__`
12. `__truediv__`
13. `__mod__`
14. `__pow__`



# 标准库



## 使用技巧

**查看库的信息：**

- `dir(module)`
- `help(module)`



## random

- `random.choice(seq)`：从非空序列 `seq` 返回一个随机元素
- `random.sample(population, k, *, counts=None)`：从总体，
- `random.random()`：返回 `[0.0,1.0)` 之间的随机浮点数
- `random.randrange()`：
- `random.shuffle(x: MutableSequence)`：将可写的序列随机打乱位置



## struct

- `struct.pack()`

- `struct.unpack(format, buffer)`：将从 `buffer` 读入的数据，转换为python内置的数据类型



## gzip

`gzip.open(path, mode, encoding)`



## pickle

- `pickle.dump(obj, file_obj)`：将对象序列化为字节流，保存到文件
- `pickle.dumps(obj)`：将对象序列化成字节流，返回该字节流
- `pickle.load(data)`：
- `pickle.loads(bytes)`：将字节流反序列化成对象，返回该对象



## json

