---
title: "CSS #1 布局"
excerpt: CSS 学习笔记
author: Louis Liang
tags: [CSS,Technology]
category_bar: true
index_img: /img/pt/css3.svg
date: 2024-5-8 18:15:00
---
## 1. flex 布局



### 1.1 容器属性

| 容器属性        | 默认值     | 可选值                                                       | 描述             |
| --------------- | ---------- | ------------------------------------------------------------ | ---------------- |
| flex-direction  | row        | row \| row-reverse \| column \| column-reverse               | 主轴的方向       |
| flex-wrap       | nowrap     | nowrap(不换行) \| wrap(第一行在上方) \| wrap-reverse(第一行在下方) | 如何换行         |
| flex-flow       | row nowrap | flex-direction\|\| flex-wrap                                 | 属性简写         |
| justify-content | flex-start | flex-start \| flex-end \| center \| space-between \| space-around; | 主轴对齐方式     |
| align-items     | stretch    | flex-start \| flex-end \| center \| baseline(第一行文字的基线对齐)\| stretch(未设置高度，自动占满) | 交叉轴对齐方式   |
| align-content   | stretch    | flex-start \| flex-end \| center \| space-between \| space-around \| stretch; | 多根轴线对齐方式 |



### 2.1 项目属性

| 项目属性    | 默认值                          | 可选值                | 描述                                   |
| ----------- | ------------------------------- | --------------------- | -------------------------------------- |
| order       | 0                               | <number>              | 项目的排列顺序                         |
| flex-grow   | 0（如果存在剩余空间，也不放大） | <number>              | 项目的放大比例                         |
| flex-shrink | 1（如果空间不足，该项目将缩小） | <number> \| 0(不缩小) | 项目的缩小比例                         |
| flex-basis  | auto（项目的本来大小）          | <length> \| auto      | 在分配多余空间之前，项目占据的主轴空间 |
| flex        | 0 1 auto                        |                       | flex-grow，shrink，-basis简写          |
| align-self  | auto（继承父元素）              |                       | 单个项目对齐方式，覆盖align-items      |

