# str.substring() & str.substr()








location.href
// 

typeof(location.href);
// "string"



location.href.replace()

location.href = location.href.replace("http://", "https://"); 


ocation.href.substr / location.href.substring

location = location.href.substr(0,4) +""+ location.href.substr(5,250);
location = location.href.substr(0,4) +"s"+ location.href.substr(4,250);


substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。

str.substr(start[, length])

开始索引， 字符数/长度



location = location.href.substring(0,4) +""+ location.href.substring(5,250);
location = location.href.substring(0,4) +"s"+ location.href.substring(4,250);


substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

str.substring(indexStart[, indexEnd])

开始索引， 结束索引



























https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr


String.prototype.substr()


substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。

str.substr(start[, length])

开始索引， 字符数/长度



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring

String.prototype.substring()


substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

str.substring(indexStart[, indexEnd])

开始索引， 结束索引


??? 循环

const anyString = "Mozilla";

console.log(anyString.length);
// 7
// 0,1,2,3,4,5,6,
// M o z i l l a


// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));


??? 循环











## String Methods  


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String

字符串泛型方法 已废弃






https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sub

String.prototype.sub()

已废弃 sub()方法创建一个 &lt;sub&gt; HTML元素，使字符串展示为下标。

str.sub()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sup

String.prototype.sup()

已废弃 sup()方法创建一个 &lt;sub&gt; HTML元素，使字符串显示为上标。

str.sup()




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

String.prototype.indexOf()

indexOf() 方法返回指定值的第一次出现的调用 String 对象中的索引，开始在fromIndex进行搜索。如果未找到该值，则返回-1。


str.indexOf(searchValue[, fromIndex])




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace


String.prototype.replace()

replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式, 替换值可以是一个字符串或者一个每次匹配都要调用的函数。

str.replace(regexp|substr, newSubstr|function)









