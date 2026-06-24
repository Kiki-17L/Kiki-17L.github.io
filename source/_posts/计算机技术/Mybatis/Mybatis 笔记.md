---
title: Mybatis 笔记
excerpt: Mybatis 学习笔记
author: Louis Liang
tags:
  - Mybatis
  - ORM
  - Technology
category_bar: true
index_img: /img/pt/mybatis.jpeg
date: 2024-5-8 10:00:00
archive: true
---
# 一、介绍



## 1.1 ORM

ORM(Object Relationship Mapping)对象关系映射，是为了解决面向对象和关系型数据库存在互不匹配现象的一种技术



ORM 通过使用描述对象和数据库之间映射的元数据将程序中的对象自动持久化到关系数据库中。



## 1.2 Mybatis

Mybatis 是一个**持久层(Persistence)**ORM框架。



# 二、快速开始





## 2.1 依赖导入

```xml
<!--MybatisPlus 依赖-->
<dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-spring-boot3-starter</artifactId>
            <version>LATEST</version>
</dependency>
<!--Mysql 依赖-->
<dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.32</version>
</dependency>
<!--数据库连接池 依赖-->
<dependency>
  <groupId>com.alibaba</groupId>
  <artifactId>druid-spring-boot-3-starter</artifactId>
  <version>1.2.20</version>
</dependency>
```



## 2.2 数据库相关配置

```properties
server.port=8080
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=mysql:jdbc://localhost:3307/test?useSSL=false
spring.datasource.username=root
spring.datasource.password=0417
#指定日志输出格式
mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```



## 3.3 启动类加注解







# 三、基础



## 3.1 基本注解

### 1.@MapperScan

> 这个注解，指定Mapper的扫描包

* 修饰对象：启动类

* 默认值：映射器Mapper组件所在的包

### 2.@Mapper

> 声明一个映射器（Mapper）组件。

* 修饰对象：映射器接口





## 3.2 CRUD

### 1.增

```@Insert("insert into user values( #{id},#{username},#{password})")```

### 2.删

```@Delete("delete from user where id = #{id} ")```

### 3.改

```@Update("update user set username= #{username}, password = #{password} where id = #{id}")```

### 4.查

```@Select("Select * from user")```



```#{arg}```这个字符串格式是从被修饰方法的参数列表拿到参数。



## 3.3 Mybatis-Plus

**MP**（Mybatis-Plus）是一个Mybatis的增强工具，在Mybatis的基础上**只做增强不做改变**。



### 基本配置

通过继承**BaseMapper**接口来使用Mybatis-Plus



### 常用注解

#### 1.@TableName

在实体类名与表名不一致时，映射实体类与表名。

#### 2.@TableField

在实体类字段名与表中字段名不一致时，映射实体类属性与表中字段。

#### 3.@TableId

描述主键字段属性。



```java
@TableId(value="id",type = IdType.AUTO)
```



