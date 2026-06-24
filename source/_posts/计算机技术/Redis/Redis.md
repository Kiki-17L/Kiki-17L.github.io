---
title: "Redis #0 学习笔记"
excerpt: Redis 学习笔记
author: Louis Liang
tags: [Redis,Technology]
category_bar: true
index_img: /img/pt/redis.svg
date: 2024-5-8 10:00:00
---

# 一、数据类型

| 数据类型 | 描述                             | 阈值                |
| -------- | -------------------------------- | ------------------- |
| String   | 基本类型，二进制安全的字符串     | 最大 512MB          |
| Hash     | String类型的键值对集合，存储对象 | $2^{32}-1$ 个键值对 |
| List     | String类型的列表，按插入顺序排序 | $2^{32}-1$ 个元素   |
| Set      | String类型的无序集合             | $2^{32}-1$ 个成员   |
| Zset     | String类型的有序集合             | $2^{32}-1$ 个成员   |



# 二、SpringBoot 集成



## 2.1 RedisTemplate<K,V>



### 2.1.2 Operations

| 操作类                | 获取                | 作用                                 |
| --------------------- | ------------------- | ------------------------------------ |
| ValueOperations       | opssForValue()      | 提供 Redis String API 操作           |
| HashOperations        | opsForHash()        | 提供 Redis Hash API 操作             |
| ListOperations        | opsForList()        | 提供 Redis List API 操作             |
| SetOperations         | opsForSet()         | 提供 Redis Set API 操作              |
| ZsetOperations        | opsForZset()        | 提供 Redis ZSet(Sorted Set) API 操作 |
| GeoOperations         | opsForGeo()         | 提供 Redis Geo API 操作              |
| HyperLogLogOperations | opsForHyperLogLog() | 提供 Redis HyperLogLog API 操作      |



## 2.2 RedisSerializer

| 序列化方式                         | 备注                                                         | 获取                     |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------ |
| JdkSerializationRedisSerializer    | jdk序列化，是默认的序列化方式                                | RedisSerializer.java()   |
| StringRedisSerializer              | String序列化，**StringRedisTemplate**的key和value采用的就是这种序列化方案。 | RedisSerializer.string() |
| GenericJackson2JsonRedisSerializer | JSON序列化，对所有类通用                                     | RedisSerializer.json()   |

