# Int8Array





https://www.zhihu.com/question/41493194


如何不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标？

Object.keys(new Array(10))
// []
Object.keys(new Int8Array(10))
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]







http://www.cnblogs.com/yugege/p/5292612.html

https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

Fisher-Yates shuffle是用于生成有限集合的随机置换的算法，该算法对该集合进行洗牌。

https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming













https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array


Int8Array 类型数组表示二进制补码8位有符号整数的数组。
内容初始化为0。
 一旦建立，你可以使用对象的方法引用数组中的元素，或使用标准数组索引语法( 即，使用括号注释)。



http://www.javascripture.com/Int8Array

https://github.com/nkronlage/JavaScripture


创建一个新的指定长度的Int8Array，其中每个项目开始为0


let test = new Int8Array(2);
console.log(test[0]);
console.log(test[1]);
console.log(test.length);

// 0
// 0
// 2




https://msdn.microsoft.com/en-us/library/br212462(v=vs.94).aspx




