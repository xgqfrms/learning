# 介绍/引言  

https://docs.mongodb.com/manual/introduction/  


## 文档数据库  

MongoDB中的一个记录是一个文档，它是一个由字段和值对组成的数据结构。  
MongoDB文档类似于JSON对象。字段的值可以包括其他文档，数组和文档数组。  

使用文档的优点是：
    文档 (即对象) 对应于许多编程语言中的本机数据类型。
    嵌入式文档和数组减少了对昂贵联接的需求。
    动态模式支持流畅的多态性。

## 主要特征  

高性能  
MongoDB提供高性能的数据持久化。尤其是，
    支持嵌入式数据模型可减少数据库系统上的 I/O 活动。 
    索引支持更快的查询，并且可以包括嵌入式文档和数组的键。

丰富查询语言  
MongoDB支持丰富的查询语言来支持 [读写操作 CRUD](https://docs.mongodb.com/manual/crud/)以及：
    [数据聚合](https://docs.mongodb.com/manual/core/aggregation-pipeline/)  
    [文本搜索](https://docs.mongodb.com/manual/text-search/)和[地理空间查询](https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/)。  

高可用性  
MongoDB的复制设施, 称为[副本集](https://docs.mongodb.com/manual/replication/) 提供：
    自动故障转移
    数据冗余。

副本集是一组保持相同数据集的MongoDB服务器，提供冗余和增加数据可用性。


水平可扩展性  
MongoDB提供了横向可扩展性作为其核心功能的一部分：
    [分片](https://docs.mongodb.com/manual/sharding/#sharding-introduction)在机器集群上分布数据。
    MongoDB 3.4支持基于[分片键](https://docs.mongodb.com/manual/reference/glossary/#term-shard-key)创建数据区域。在平衡集群中，MongoDB将区域覆盖的读取和写入仅引导到区域内的那些分片。有关详细信息，请参阅[Zones](https://docs.mongodb.com/manual/core/zone-sharding/#zone-sharding)手册页。

支持多存储引擎  
MongoDB支持多种 [存储引擎](https://docs.mongodb.com/manual/core/storage-engines/)，如：
    [WiredTiger](https://docs.mongodb.com/manual/core/wiredtiger/)存储引擎
    [MMAPv1](https://docs.mongodb.com/manual/core/mmapv1/)存储引擎。

此外，MongoDB提供可插入的存储引擎API，允许第三方为MongoDB开发存储引擎。




