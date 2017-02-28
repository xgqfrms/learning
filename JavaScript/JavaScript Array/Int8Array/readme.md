# Int8Array





https://www.zhihu.com/question/41493194


如何不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标？

Object.keys(new Array(10))
// []
Object.keys(new Int8Array(10))
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]







http://www.cnblogs.com/yugege/p/5292612.html



















https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array




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









