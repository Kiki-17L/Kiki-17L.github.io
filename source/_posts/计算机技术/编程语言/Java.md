---
title: "Java #1 基础"
excerpt: Java 学习笔记
author: Louis Liang
tags: [Java,Technology]
category_bar: true
index_img: /img/pt/java.svg
date: 2024-10-10 10:00:00
---

# 一、历史



## 1.1 历史版本



1. **JDK Alpha 和 Beta**

2. **JDK 1.0**

   > **Released: January 23, 1996**

3. **JDK 1.1**

   > **Released: February 19, 1997**

4. **J2SE 1.2**

   > **Released: December 8, 1998**
   >
   > **Codename: Playground**
   >
   > The release on December 8, 1998 and subsequent releases through J2SE 5.0 were rebranded retrospectively **Java 2** and the version name "J2SE"  replaced JDK to distinguish the base platform from J2EE and J2ME. 
   >
   > This was a very significant release of Java as it tripled the size of the Java platform to 1520 classes in 59 packages.

5. **J2SE 1.3**

   > **Released: May 8, 2000**
   >
   > **Codename: Kestrel**

6. **J2SE 1.4**

   > **Released: February 6, 2002**
   >
   > **Codename: Merlin**

7. **J2SE 5.0**

   > **Released: September 30, 2004**
   >
   > **Codename: Tiger**
   >
   > The release on September 30, 2004 was originally numbered 1.5, which is still used as the internal version number. 
   >
   > The number was changed to "better reflect the level of maturity, stability, scalability and security of the J2SE"
   >
   > Both version numbers "1.5.0" and "5.0" are used to identify this release of the Java 2 Platform Standard Edition. 
   >
   > Version "5.0" is the product version, while "1.5.0" is the developer version. 
   >
   > 
   >
   > This correspondence continued through later releases (Java 6 = JDK 1.6, Java 7 = JDK 1.7, and so on).

8. **Java SE 6**

   > **Released: November 11, 2006**
   >
   > **Codename: Mustang**
   >
   > As of the version released on December 11, 2006, Sun replaced the name "J2SE" with **Java SE** and dropped the ".0" from the version number.
   >
   > Internal numbering for developers remains 1.6.0.

9. **Java SE 7**

   > **Released: July 28, 2011**
   >
   > **Codename: Dolphin**
   >
   > Lambda (Java's implementation of lambda functions), Jigsaw (Java's implementation of modules), and part of Coin were dropped from Java 7, and released as part of Java 8 

10. **Java SE 8**

    > **Released: March 18, 2014**
    >
    > Java 8 was released on March 18, 2014, and included some features that were planned for Java 7 but later deferred.





# 二、基础



## 2.1 Java 基本类型

> [!NOTE]
>
> 从 Java 7 开始，可以给数字字面量加下划线，编译器会去除这些下划线。

Java 有**8**种基本类型（primitive type）

- **整型**
  
  1. int
  2. long
  3. short
  4. byte
  
- **浮点型**
  
  1. float
  2. double
  
- **字符型**
  - char
  
    > [!NOTE]
    >
    > 转义序列 `\u` 除了可以出现在单双引号内，还可以出现在其外，Unicode 转义序列会在解析代码之前得到处理
  
    
  
- **布尔型**
  - boolean
  
    > [!WARNING]
    >
    > C++ 中值 0 相当于 false，非 0 值相当于 true
    >
    > ```java
    > if( x=0 )
    > ```
    >
    > C++ 可以通过编译运行，而 Java 中整型表达式不能转换成布尔值
  
    



## 2.2 字符串

> [!NOTE]
>
> java 没有提供内置的字符串数据类型，但是标准库提供了一个预定义类 `String` ，每一个用双引号引起来的字符串都是该类的一个对象。



### 子串

String 类提供了一个方法 `substring`，第二个参数是不想复制的第一个位置，优点是容易计算子串长度。



### 拼接

1. 静态方法 `String.join()`：将多个字符串用界定符拼接起来
2. 实例方法 `repeat()`：重复拼接字符串该实例，由 Java 11提供



### 不可变字符串

> [!IMPORTANT]
>
> 优点：编译器可以让字符串共享，在复制一个字符串变量时，原始字符串和复制字符串共享相同的字符

> [!NOTE]
>
> ANSI C++ 定义了 String 类型，也可以自动进行内存分配和回收，但可以修改字符串中的单个字符。



### 检测字符串是否相等



1. 实例方法 `equals()`，判断两个字符串是否相等
2. 忽略大小写 `equalsIgnoreCase()`
3. 实例方法 `compareTo()`



> [!WARNING]
>
>  `==` 只能确定两个字符串是否放在同一位置上，事实上，只有字符串字面量是共享的
>
> `+` 和 `substring` 得到的都不是共享的
>
> 但在 c++ 中，重载了运算符 `==`，可以用它进行相等性测试

> [!NOTE]
>
> C 程序员用 `==` 进行字符串内容相等性检测，而是用 `strcmp()` 函数，java 的 `compareTo` 方法完全类似于它。





### 构建字符串

每次字符串拼接时，都会构建一个新的 `String` 对象，既耗时，又费空间

`StringBuilder` 类（在 Java 5 引入）可以避免这个问题

```java
StringBuilder builder=new StringBuilder();
builder.add(ch);
builder.add(str);
String completedString=builder.toString();
```



## 输入输出流



