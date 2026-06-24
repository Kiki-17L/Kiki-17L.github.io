---
title: Vue 笔记
excerpt: Vue 学习笔记
author: Louis Liang
tags: [Vue,Js,Technology]
category_bar: true
index_img: /img/pt/vue.svg
date: 2024-5-30 10:00:00
---

# 一、基础



## 1.实例



## 2.模板语法



### 指令

指令，是带有**v-**前缀的特殊**attribute**。



### 指令参数

在指令名后面以 **：**隔开做标识

：后面跟 **[js表达式]**可以做动态参数



### 常用指令

#### v-bind

如果要将组件数据绑定到**DOM**的**Attribute**上，可以使用**v-bind:attribute**指令,简写为**:attribute**。

这个指令是单向数据绑定。从model到view。

#### v-model

这个指令是双向数据绑定。**model的改变影响view；view的改变也可以影响model**。

#### v-if

如果指令值为**false**，则该标签不会被创建，被注释掉。

#### v-show

如果指令值为**false**，该标签会被创建，但是采用css样式的方式不显示。```display: none;``` ，对于频繁切换的，使用**v-show**性能更高。

#### v-for

Vue默认按照 **就地更新** 的策略来更新用```v-for```来渲染的元素列表。

用过给定唯一的```key```属性，给每个元素一个唯一标识，从而重新排序现有的元素。



# 二、组件



### 1、组件导出

### 2、组件引入





# 三、差异

#### Vue2 VS Vue3

1. Vue2中多个组件必须放一个根组件下。
2. Vue3中有了**createApp **API。



# 组合式API



 ## ref

`ref()` 接收参数，并将其包裹在一个带有 `.value` 属性的 ref 对象中返回，Ref 会使它的值具有深层响应性



## reactive

`reactive()`，接受一个对象类型参数，返回该对象的一个代理对象`proxy`，通过`proxy`操作才具有响应性，对象属性结构为本地变量之后，失去响应性连接



## computed



## watch
