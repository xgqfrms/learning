## jQuery源码阅读笔记

虽然随着 Angular、React、Vue 等框架的出现，jQuery 已经慢慢退出了历史舞台，但这并不说明 jQuery 本身不优秀，它是前端发展过程中十分重要的一环，重要性可能高过 Angular。jQuery 本身的架构设计、兼容性设计等都是很棒的，很有学习的价值。因此结合《jQuery技术内幕》一书，看了一下源码，版本是 1.10.1。选择 1.10.1 版本主要是考虑到 jQuery 2.* 版本放弃了对 IE 6-8 的支持，能学到的兼容性知识会少很多。

> 书上用的是 1.7.1，本人看源码的是 1.10.1。因此书上的部分内容和我自己添加的源码分析会有出入。

### 目录

1. [总体架构](./lib/总体架构.md)
2. [构造 jQuery 对象](./lib/构造 jQuery 对象.md)
3. 底层支持模块（底层支持模块写得详细程度会比较低）
   1. [选择器 Sizzle](./lib/选择器 Sizzle.md)
   2. 异步队列 Deferred Object
   3. [数据缓存 Data](./lib/数据缓存 Data.md)
   4. 队列 Queue
   5. [浏览器功能测试](./lib/浏览器功能测试.md)
   6. [番外：标准模式和诡异模式](./lib/标准模式和诡异模式.md)
4. 功能模块
   1. [属性操作](./lib/属性操作.md)
   2. [事件系统](./lib/事件系统 Events.md)
   3. [番外：ready 事件](./lib/ready 事件.md)
   4. [DOM 遍历](./lib/DOM 遍历.md)
   5. [DOM 操作](./lib/DOM 操作.md)
   6. [样式操作](./lib/样式操作.md)
   7. [异步请求 Ajax](./lib/异步请求 Ajax.md)
   8. 动画 Effects
5. [行业专家聊：jQuery还有意义吗？](./lib/jQuery还有意义吗.md)
