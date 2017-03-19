# JavaScript 正则表达式





https://regexper.com

https://regexper.com/documentation.html


https://regexper.com/#%5E(%5Ba-zA-Z0-9_-%5D)%2B%40(%5Ba-zA-Z0-9_-%5D)%2B((%5C.%5Ba-zA-Z0-9_-%5D%7B2%2C3%7D)%7B1%2C2%7D)%24


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp


字面量, 构造函数和工厂符号都是可以的：

/pattern/flags 

// 字面量: 模式 标志

new RegExp(pattern [, flags])

// 构造函数: 模式 标志

​​​​​​​RegExp(pattern [, flags])

// 工厂符号:​​​​​​​ 模式 标志​​​​​​​




^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$

email


https://regexper.com/#%5E(%5Ba-zA-Z0-9_-%5D)%2B%40(%5Ba-zA-Z0-9_-%5D)%2B((%5C.%5Ba-zA-Z0-9_-%5D%7B2%2C3%7D)%7B1%2C2%7D)%24


正则表达式中的特殊字符含义

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions


## 字符集合（Character Sets）

[one of]

一个字符集合，也叫字符组。
匹配集合中的任意一个字符。
你可以使用连字符'-'指定一个范围。

例如，[abcd] 等价于 [a-d]。
匹配"brisket"中的'b'和"chop"中的'c'。


[^None of]
[^xyz]  
一个反义或补充字符集，也叫反义字符组。
也就是说，它匹配任意不在括号内的字符。
你也可以通过使用连字符 '-' 指定一个范围内的字符。

例如，[^abc] 等价于 [^a-c]。 
第一个匹配的是 "bacon" 中的'o' 和 "chop" 中的 'h'。



\w  
匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。
等价于 [A-Za-z0-9_]。

例如，/\w/ 匹配 "apple" 中的 'a'，"$5.28" 中的 '5' 和 "3D" 中的 '3'。

\W  
匹配任意不是基本拉丁字母表中单词（字母数字下划线）字符的字符。
等价于 [^A-Za-z0-9_]。

例如，/\W/ 或 /[^A-Za-z0-9_]/ 匹配 "50%" 中的 '%'。




[A-Za-z0-9-] , [^A-Za-z0-9-] 匹配 中的 - 


`2017-03-19`.replace(/[0-9-]/, `X`);
"X017-03-19"
`2017-03-19`.replace(/[0-9-]/g, `X`);
"XXXXXXXXXX"


`2017-03-19`.replace(/[0-9]/, `X`);
"X017-03-19"
`2017-03-19`.replace(/[0-9]/g, `X`);
"XXXX-XX-XX"




## 字符类别（Character Classes）

字符  含义

. (点号，小数点)匹配任意单个字符，但是回车\r换行\n符除外：\n \r \u2028 或 \u2029。

. 匹配除了行终止符(回车\r换行\n)之外的任何单个字符：

. === [^\r\n]


. (点号，小数点) 匹配任意单个字符，但是回车\r换行\n符除外：\n \r \u2028 或 \u2029。

在字符集中，点( . )失去其特殊含义，并匹配一个字面点( . )。


需要注意的是，m 多行（multiline）标志不会改变点号的表现。因此为了匹配多行中的字符集，可使用[^] （当然你不是打算用在旧版本 IE 中），它将会匹配任意字符，包括换行符。

例如，/.y/ 匹配 "yes make my day" 中的 "my" 和 "ay"，但是不匹配 "yes"。

\d  
匹配基本拉丁字母表（basic Latin alphabet）中的一个数字字符。等价于[0-9]。

例如，/\d/ 或 /[0-9]/ 匹配 "B2 is the suite number." 中的 '2'。 

\D  
匹配任意一个不是基本拉丁字母表中数字的字符。等价于[^0-9]。

例如，/\D/ 或 /[^0-9]/ 匹配 "B2 is the suite number." 中的 'B'。

\w  
匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。等价于 [A-Za-z0-9_]。

例如，/\w/ 匹配 "apple" 中的 'a'，"$5.28" 中的 '5' 和 "3D" 中的 '3'。

`2017-03-19_abc.xyz`.replace(/[\w]/g, `X`);
"XXXX-XX-XXXXXX.XXX"


\W  
匹配任意不是基本拉丁字母表中单词（字母数字下划线）字符的字符。等价于 [^A-Za-z0-9_]。

例如，/\W/ 或 /[^A-Za-z0-9_]/ 匹配 "50%" 中的 '%'。


`2017-03-19_abc.xyz`.replace(/[\W]/g, `X`);
"2017X03X19_abcXxyz"




\s  
匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格。

等价于 [ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​ \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​ \u3000]。

例如 /\s\w*/ 匹配 "foo bar" 中的 ' bar'。

\S  
匹配一个非空白符。等价于 [^ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​ \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000]。

例如，/\S\w*/ 匹配 "foo bar" 中的 'foo'。

\t  匹配一个水平制表符（tab）
\r  匹配一个回车符（carriage return）
\n  匹配一个换行符（linefeed）
\v  匹配一个垂直制表符（vertical tab）
\f  匹配一个换页符（form-feed）
[\b]    匹配一个退格符（backspace）（不要与 \b 混淆）
\0  匹配一个 NUL 字符。不要在此后面跟小数点。
\cX 
X 是 A - Z 的一个字母。匹配字符串中的一个控制字符。

例如，/\cM/ 匹配字符串中的 control-M。

\xhh    匹配编码为 hh （两个十六进制数字）的字符。
\uhhhh  匹配 Unicode 值为 hhhh （四个十六进制数字）的字符。
\   
对于那些通常被认为字面意义的字符来说，表示下一个字符具有特殊用处，并且不会被按照字面意义解释。

例如 /b/ 匹配字符 'b'。在 b 前面加上一个反斜杠，即使用 /\b/，则该字符变得特殊，以为这匹配一个单词边界。

或

对于那些通常特殊对待的字符，表示下一个字符不具有特殊用途，会被按照字面意义解释。

例如，* 是一个特殊字符，表示匹配某个字符 0 或多次，如 /a*/ 意味着 0 或多个 "a"。 为了匹配字面意义上的 * ，在它前面加上一个反斜杠，例如，/a\*/匹配 'a*'。
























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





当你想要知道一个模式是否存在于一个字符串中时，就可以使用 test()（类似于 String.prototype.search() 方法），差别在于test返回一个布尔值，而 search 返回索引（如果找到）或者-1（如果没找到）；若想知道更多信息（然而执行比较慢），可使用exec() 方法（类似于 String.prototype.match() 方法）。 和 exec() (或者组合使用),一样，在相同的全局正则表达式实例上多次调用test将会越过之前的匹配。



## String.prototype.match()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match


当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。

语法 
str.match(regexp);
参数

regexp
一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp 。如果你未提供任何参数，直接使用 match() ，那么你会得到一个包含空字符串的 Array ：[""] 。


## String.prototype.search()


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search


search() 方法执行正则表达式和 String对象之间的一个搜索匹配。

语法 
str.search(regexp)
参数

regexp
一个正则表达式（regular expression）对象。如果传入一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象。
返回值

如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。





## String.prototype.replace()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace


replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式, 替换值可以是一个字符串或者一个每次匹配都要调用的函数。

语法 
str.replace(regexp|substr, newSubStr|function)
参数

regexp (pattern)
一个 RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
substr (pattern)
一个要被 newSubStr 替换的字符串。其被视为一整个字符串，而不是一个正则表达式。仅仅是第一个匹配会被替换。
newSubStr (replacement)
 用于替换掉第一个参数在原字符串中的匹配部分的 字符串。该字符串中可以内插一些特殊的变量名。参考下面的使用字符串作为参数。
function (replacement)
一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。参考下面的指定一个函数作为参数。




## String.prototype.split()

split() 方法将一个String对象分割成字符串数组，通过将字符串分成子串。


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split

str.split([separator][, limit])


参数

separator
指定用来分割字符串的字符（串）。separator 可以是一个字符串或正则表达式。 如果忽略 separator，则返回整个字符串的数组形式。如果 separator 是一个空字符串，则 str 将会把原字符串中每个字符的数组形式返回。
limit
一个整数，限定返回的分割片段数量。split 方法仍然分割每一个匹配的 separator，但是返回的数组只会截取最多 limit 个元素。
















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





http://www.runoob.com/regexp/regexp-syntax.html


https://msdn.microsoft.com/zh-cn/library/dn858238(v=vs.94).aspx

for...of 语句 (JavaScript)

对从可迭代对象中获取的迭代器的每个值执行一个或多个语句。



Labeled 语句 (JavaScript)

https://msdn.microsoft.com/zh-cn/library/d3666y5k(v=vs.94).aspx

 label :
statements 


try...catch...finally 语句 (JavaScript)

https://msdn.microsoft.com/zh-cn/library/4yahc5d8(v=vs.94).aspx




https://msdn.microsoft.com/zh-cn/ms704300

https://msdn.microsoft.com/zh-cn/library/az24scfc(v=vs.110).aspx













