# Object.is()

Object.is()


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is



Object.is() 方法确定两个值是否是 相同的值。



Object.is(value1, value2);
参数

value1
需要比较的第一个值。
value2
需要比较的第二个值。




返回值

一个 布尔值指示两个参数是否相同的。

描述
Object.is() 会在下面这些情况下认为两个值是相同的：

两个值都是 undefined
两个值都是 null
两个值都是 true 或者都是 false
两个值是由相同个数的字符按照相同的顺序组成的字符串
两个值指向同一个对象

两个值都是数字并且
都是正零 +0
都是负零 -0
都是 NaN
都是除零和 NaN 外的其它同一个数字




https://nodeschool.io/

教你 Web 开发技能的开源课程，自学或者参加一个附近的教学活动。


















