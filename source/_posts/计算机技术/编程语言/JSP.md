---
title: JSP 笔记
excerpt: JSP 学习笔记
author: Louis Liang
tags: [JSP,Java,Technology]
category_bar: true
banner_img: /img/bg/inter.jpg
index_img: /img/pt/jsp.svg
date: 2024-5-15 10:00:00
---

# 一、语法


## 0、速览

| 语法      | 格式                                         |
| --------- | -------------------------------------------- |
| 脚本程序  | `<% 代码片段 %>`                             |
| JSP声明   | `<%! declaration; [ declaration; ] + ... %>` |
| JSP表达式 | `<%= 表达式%>`                               |
| JSP注释   | `<%-- 注释 --%>`                             |
| JSP指令   | `<%@ derective attribute="value" %>`         |
| JSP行为   | `<jsp:action_name attribute="value">`        |







## 1、脚本程序



## 2、JSP声明



## 3、JSP表达式



## 4、JSP注解



## 5、JSP指令



## 6、JSP行为

| **语法**        | **描述**                                                   |
| :-------------- | :--------------------------------------------------------- |
| jsp:include     | 用于在当前页面中包含静态或动态资源                         |
| jsp:useBean     | 寻找和初始化一个JavaBean组件                               |
| jsp:setProperty | 设置 JavaBean组件的值                                      |
| jsp:getProperty | 将 JavaBean组件的值插入到 output中                         |
| jsp:forward     | 从一个JSP文件向另一个文件传递一个包含用户请求的request对象 |
| jsp:plugin      | 用于在生成的HTML页面中包含Applet和JavaBean对象             |
| jsp:element     | 动态创建一个XML元素                                        |
| jsp:attribute   | 定义动态创建的XML元素的属性                                |
| jsp:body        | 定义动态创建的XML元素的主体                                |
| jsp:text        | 用于封装模板数据                                           |



## 7、JSP隐含对象

| **对象**    | **描述**                                                     |
| :---------- | :----------------------------------------------------------- |
| request     | **HttpServletRequest**类的实例，代表 HTTP 请求的对象，包含客户端发送到服务器的信息，如表单数据、URL参数等。 |
| response    | **HttpServletResponse**类的实例，代表 HTTP 响应的对象，用于向客户端发送数据和响应。 |
| out         | **JspWriter**类的实例，用于向客户端输出文本内容的对象，通常用于生成HTML。 |
| session     | **HttpSession**类的实例，代表用户会话的对象，可用于存储和检索用户特定的数据，跨多个页面。 |
| application | **ServletContext**类的实例，代表 Web 应用程序的上下文，可以用于存储和检索全局应用程序数据。 |
| config      | **ServletConfig**类的实例，包含有关当前 JSP 页面的配置信息，例如初始化参数。 |
| pageContext | **PageContext**类的实例，提供对JSP页面所有对象以及命名空间的访问 |
| page        | 类似于 Java 类中的 this 关键字，代表当前 JSP 页面的实例，可以用于调用页面的方法。 |
| exception   | **exception** 类的对象，代表发生错误的 JSP 页面中对应的异常对象，用于处理 JSP 页面中的异常情况，可用于捕获和处理页面中发生的异常。 |
