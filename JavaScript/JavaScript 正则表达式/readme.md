# JavaScript 正则表达式


## Regular Expressions

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions



正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、replace、search 和 split 方法。本章介绍 JavaScript正则表达式。

创建一个正则表达式EDIT
你可以使用以下两种方法之一构建一个正则表达式：

使用一个正则表达式字面量，其由包含在斜杠之间的模式组成，如下所示：

```js
const regex = /ab+c/;

const regex = /^[a-zA-Z]+[0-9]+W?_$/gi;

``` 
在加载脚本后，正则表达式字面值提供正则表达式的编译。当正则表达式保持不变时，使用此方法可获得更好的性能。

或者调用RegExp对象的构造函数，如下所示：

```js

let regex = new RegExp("ab+c");

const regex = new RegExp("\/^[a-zA-Z]+[0-9]+W?_$\/gi");
``` 
使用构造函数提供正则表达式的运行时编译。使用构造函数，当你知道正则表达式模式将会改变，或者你不知道模式，并从另一个来源，如用户输入。





正则表达式标志
标志  描述
g   全局搜索。
i   不区分大小写搜索。
m   多行搜索。
y   执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用y标志。






https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp


RegExp 构造函数创建了一个正则表达式对象，用于将文本与模式匹配。

有关正则表达式的介绍，请阅读 JavaScript指南中的正则表达式一章。

语法EDIT
字面量和构造函数都是可以的：

/pattern/flags 

// 模式 标志

new RegExp(pattern [, flags])


参数

pattern
正则表达式的文本。
flags
如果指定，标志可以具有以下值的任意组合：

g
全局匹配;找到所有匹配，而不是在第一个匹配后停止
i
忽略大小写
m
多行; 将开始和结束字符（^和$）视为在多行上工作（例如，匹配每一行的开始和结束（由 \n 或 \r 分割），而不只是整个输入字符串的最开始和最末尾处。
u
Unicode; 将模式视为Unicode序列点的序列
y
黏; 仅匹配目标字符串中此正则表达式的lastIndex属性指示的索引(并且不尝试从任何后续的索引匹配)。
描述EDIT
有两种方法来创建一个RegExp对象：一个字面量和一个构造函数。要指示字符串，字面量的参数不使用引号，而构造函数的参数使用引号。因此，以下表达式创建相同的正则表达式：

/ab+c/i;
new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

## RegExp.prototype.exec()

exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。

如果你正在执行一个匹配只是为了找到 true或 false，可以使用 RegExp.test() 方法，或者 String.search() 方法。

语法 
regexObj.exec(str)

参数

str
要匹配正则表达式的字符串。
返回值

如果成功匹配，exec() 方法返回一个数组并更新正则表达式对象的属性。返回的数组具有匹配的文本作为第一项，然后匹配的每个捕获括号的一个项包含捕获的文本。

如果匹配失败，exec() 方法返回 null。



描述 
思考以下示例：

/* 
    Match "quick brown" followed by "jumps", 
    ignoring characters in between
    Remember "brown" and "jumps"
    Ignore case
*/
let regex = /quick\s(brown).+?(jumps)/ig;
// let regex = new RegExp(/quick\s(brown).+?(jumps)/,"ig");
// let regex = new RegExp("quick\\s(brown).+?(jumps)","ig");
let result = regex.exec('The Quick Brown Fox Jumps Over The Lazy Dog');




```

var regex = new RegExp("quick\\s(brown).+?(jumps)","ig");
var result = regex.exec('The Quick Brown Fox Jumps Over The Lazy Dog');



var regex = new RegExp(/quick\s(brown).+?(jumps)/,"ig");
var result = regex.exec('The Quick Brown Fox Jumps Over The Lazy Dog');


var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

```



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

## RegExp.prototype.test()


test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。
返回 true 或 false。

语法 
regexObj.test(str)
参数

str
用来与正则表达式匹配的字符串
返回值

如果正则表达式与指定的字符串匹配 ，返回true；否则false





























https://msdn.microsoft.com/zh-cn/library/ae5bf541(v=vs.90).aspx



https://msdn.microsoft.com/zh-cn/library/hh334522.aspx



https://docs.microsoft.com/zh-cn/visualstudio/javascript/javascript-in-visual-studio


JavaScript 语言参考

https://msdn.microsoft.com/library/d1et7k7c(v=vs.94).aspx

JavaScript 版本信息

https://msdn.microsoft.com/zh-cn/library/s4esdbwz(v=vs.94).aspx


高级 JavaScript

https://msdn.microsoft.com/zh-cn/library/b9w25k6f(v=vs.94).aspx


原型和原型继承

https://msdn.microsoft.com/zh-cn/library/hh924508(v=vs.94).aspx


JavaScript 方法

https://msdn.microsoft.com/zh-cn/library/c6hac83s(v=vs.94).aspx



https://msdn.microsoft.com/zh-cn/library/55wb2d34(v=vs.94).aspx


for...in 语句 (JavaScript)

为一个对象的每个属性或一个数组的每个元素执行一个或多个语句。


for (let item in this) {
    console.log(`item === ${item}`);
    console.log(`item === ${typeof(item)}`);
    if( item == "document"){
        alert(typeof(item));
        alert(`item === ${item.value}`);
        console.log(`item === ${item.value}`);
    }
}




https://msdn.microsoft.com/zh-cn/library/dn858238(v=vs.94).aspx


for...of 语句 (JavaScript)

对从可迭代对象中获取的迭代器的每个值执行一个或多个语句。


for (let item of this.document) {
    console.log(`item === ${item}`);
    console.log(`item === ${typeof(item)}`);
    if( item == "document"){
        alert(typeof(item));
        alert(`item === ${item.value}`);
        console.log(`item === ${item.value}`);
    }
}

参数
    variable
    必需。可为 object 的任何属性值的变量。
    object
    必需。 Array、Map、Set 等可迭代对象或实现迭代器接口的对象。
    statements
    可选。要为 object 的每个值执行的一个或多个语句。可以是复合语句。


let arr = [ "fred", "tom", "bob" ];

for (let i of arr) {
    console.log(i);
}



var m = new Map();
m.set(1, "black");
m.set(2, "red");

for (var n of m) {
  console.log(n);
}


## 可迭代对象





## 对象 => Array 













