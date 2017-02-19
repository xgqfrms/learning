# location

console.log(this.location);



Location

ancestorOrigins: DOMStringList
assign: ()

hash: "#comment-1606895"

host: "css-tricks.com"

hostname: "css-tricks.com"

href: "https://css-tricks.com/snippets/javascript/redirect-to-ssl/#comment-1606895"

origin: "https://css-tricks.com"

pathname: "/snippets/javascript/redirect-to-ssl/"

port: ""

protocol: "https:"

reload: reload()
replace: ()

search: ""

toString: toString()
valueOf: valueOf()

__proto__: Location



https://css-tricks.com/snippets/javascript/redirect-to-ssl/?x#comment-1606895



location.search
// ""


location.port
// ""


location.protocol
// "https:"



location.hostname
// "css-tricks.com"



location.pathname
// "/snippets/javascript/redirect-to-ssl/"


location.hash
// "#comment-1606895"


location.origin
// "https://css-tricks.com"





location.href
// 

typeof(location.href);
// "string"



location.href.replace()

location.href = location.href.replace("http://", "https://"); 


ocation.href.substr / location.href.substring

location = location.href.substr(0,4) +""+ location.href.substr(5,250);
location = location.href.substr(0,4) +"s"+ location.href.substr(4,250);

location = location.href.substring(0,4) +""+ location.href.substring(5,250);
location = location.href.substring(0,4) +"s"+ location.href.substring(4,250);







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




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr


String.prototype.substr()




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring

String.prototype.substring()


substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

str.substring(indexStart[, indexEnd])


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


























