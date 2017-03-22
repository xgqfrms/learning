# RegExp MDN



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







## 边界（Boundaries）

字符  含义
^   
匹配输入开始。
如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符后的开始处。

例如，/^A/ 不匹配 "an A" 中的 "A"，但匹配 "An A" 中的 "A"。

$   
匹配输入结尾。
如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符的前的结尾处。

例如，/t$/ 不匹配 "eater" 中的 "t"，但匹配 "eat" 中的 "t"。

\b  
匹配一个零宽单词边界（zero-width word boundary），如一个字母与一个空格之间。 （不要和 [\b] 混淆）

例如，/\bno/ 匹配 "at noon" 中的 "no"，/ly\b/ 匹配 "possibly yesterday." 中的 "ly"。

\B  
匹配一个零宽非单词边界（zero-width non-word boundary），如两个字母之间或两个空格之间。

例如，/\Bon/ 匹配 "at noon" 中的 "on"，/ye\B/ 匹配 "possibly yesterday." 中的 "ye"。




^ 开头
[^]字符集
$ 结尾
[$]字符集




m
多行; 将开始和结束字符（^和$）视为在多行上工作（例如，分别匹配每一行的开始和结束（由 \n 或 \r 分割），而不只是只匹配整个输入字符串的最开始和最末尾处。


`abc@xyz
abc@xyz
abc@xyz`.replace(/^.{3}@/g, "$");


"$xyz
abc@xyz
abc@xyz"


`abc@xyz
abc@xyz
abc@xyz`.replace(/^.{3}@/gm, "$");

"$xyz
$xyz
$xyz"




## 数量词（Quantifiers）
字符  含义
x*  
匹配前面的模式 x 0 或多次。

例如，/bo*/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。

x+  
匹配前面的模式 x 1 或多次。等价于 {1,}。

例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。

x*?
x+? 
像上面的 * 和 + 一样匹配前面的模式 x，然而匹配是最小可能匹配。

例如，/".*?"/ 匹配 '"foo" "bar"' 中的 '"foo"'，而 * 后面没有 ? 时匹配 '"foo" "bar"'。

x?  
匹配前面的模式 x 0 或 1 次。

例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。

如果在数量词 *、+、? 或 {}, 任意一个后面紧跟该符号（?），会使数量词变为非贪婪（ non-greedy） ，即匹配次数最小化。反之，默认情况下，是贪婪的（greedy），即匹配次数最大化。

在使用于向前断言（lookahead assertions）时，见该表格中 (?=)、(?!) 和 (?:) 的说明。

x(?=y)  只有当 x 后面紧跟着 y 时，才匹配 x。 例如，/Jack(?=Sprat)/ 只有在 'Jack' 后面紧跟着 'Sprat' 时，才会匹配它。/Jack(?=Sprat|Frost)/ 只有在 'Jack' 后面紧跟着 'Sprat' 或 'Frost' 时，才会匹配它。然而，'Sprat' 或 'Frost' 都不是匹配结果的一部分。
x(?!y)  
只有当 x 后面不是紧跟着 y 时，才匹配 x。例如，/\d+(?!\.)/ 只有当一个数字后面没有紧跟着一个小数点时，才会匹配该数字。

/\d+(?!\.)/.exec("3.141") 匹配 141 而不是 3.141。

x|y 
匹配 x 或 y

例如，/green|red/ 匹配 "green apple" 中的 ‘green'，"red apple." 中的 'red'。

x{n}    
n 是一个正整数。前面的模式 x 连续出现 n 次时匹配。

例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。

x{n,}   
n 是一个正整数。前面的模式 x 连续出现至少 n 次时匹配。

例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。

x{n,m}  
n 和 m 为正整数。前面的模式 x 连续出现至少 n 次，至多 m 次时匹配。

例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。




{n,} >= n

{n, m}  n >= , m =<

{n} = n

? 0/1
+ >= 1
* >= 0



`123456789`.replace(/\d{3,7}/,`xyz`);


`123456789`.replace(/\d{3,7}/,`xyz`);

"xyz89"


`123456789`.replace(/\d{3,7}?/,`xyz`);

"xyz456789"


如果在数量词 *、+、? 或 {}, 任意一个后面紧跟该符号（?），会使数量词变为非贪婪（ non-greedy） ，即匹配次数最小化。
反之，默认情况下，是贪婪的（greedy），即匹配次数最大化。


`123456789`.match(/\d{3,4}/);
["1234"]

`123456789`.match(/\d{3,4}/g);
["1234", "5678"]


`123456789`.match(/\d{3,4}?/);
["123"]

`123456789`.match(/\d{3,4}?/g);
["123", "456", "789"]



## 分组（Grouping）与反向引用（back references）


字符  含义
(x) 
匹配 x 并且捕获匹配项。 这被称为捕获括号（capturing parentheses）。

例如，/(foo)/ 匹配且捕获 "foo bar." 中的 "foo"。被匹配的子字符串可以在结果数组的元素 [1], ..., [n] 中找到，或在被定义的 RegExp 对象的属性 $1, ..., $9 中找到。

捕获组（Capturing groups）有性能惩罚。如果不需再次访问被匹配的子字符串，最好使用非捕获括号（non-capturing parentheses），见下面。

\n  
n 是一个正整数。一个反向引用（back reference），指向正则表达式中第 n 个括号（从左开始数）中匹配的子字符串。

例如，/apple(,)\sorange\1/ 匹配 "apple, orange, cherry, peach." 中的 "apple,orange,"。一个更全面的例子在该表格下面。

(?:x)   匹配 x 不会捕获匹配项。这被称为非捕获括号（non-capturing parentheses）。匹配项不能够从结果数组的元素 [1], ..., [n] 或已被定义的 RegExp 对象的属性 $1, ..., $9 再次访问到。




`123abc456xyz789`.match(/(\d+[a-z]+){2}?/g);
["123abc456xyz"]

`123abc456xyz789`.replace(/(\d+[a-z]+){2}?/g,`smg`);
"smg789"



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match

当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。

str.match(regexp);






x|y 

匹配 x 或 y

例如，/green|red/ 匹配 "green apple" 中的 ‘green'，"red apple." 中的 'red'。


x(?=y)

只有当 x 后面紧跟着 y 时，才匹配 x。 例如，/Jack(?=Sprat)/ 只有在 'Jack' 后面紧跟着 'Sprat' 时，才会匹配它。/Jack(?=Sprat|Frost)/ 只有在 'Jack' 后面紧跟着 'Sprat' 或 'Frost' 时，才会匹配它。然而，'Sprat' 或 'Frost' 都不是匹配结果的一部分。

x(?!y) 

只有当 x 后面不是紧跟着 y 时，才匹配 x。例如，/\d+(?!\.)/ 只有当一个数字后面没有紧跟着一个小数点时，才会匹配该数字。

/\d+(?!\.)/.exec("3.141") 匹配 141 而不是 3.141。




## 反向引用（back reference）


\n  
n 是一个正整数。一个反向引用（back reference），指向正则表达式中第 n 个括号（从左开始数）中匹配的子字符串。

例如，/apple(,)\sorange\1/ 匹配 "apple, orange, cherry, peach." 中的 "apple,orange,"。一个更全面的例子在该表格下面。



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n

非标准$1, $2, $3, $4, $5, $6, $7, $8, $9 属性是包含括号子串匹配的正则表达式的静态和只读属性。


`2017-03-19`.replace(/(\d{4})-(\d{2})-(\d{2})/g, "$2/$3/$1");
"03/19/2017"


`2017-03-19`.replace(/(\d{4})-(\d{2})-(\d{2})/g, `$2/$3/$1`);
"03/19/2017"

`2017-03-19`.replace(/(\d{4})-(\d{2})-(\d{2})/g, `{$2}/{$3}/{$1}`);
"{03}/{19}/{2017}"



`2017-03-19`.replace(/(\d{4})-(\d{2})-(\d{2})/g, `\2/\3/\1`);
VM5620:1 Uncaught SyntaxError: Octal literals are not allowed in template strings.

`2017-03-19`.replace(/(\d{4})-(\d{2})-(\d{2})/g, "\2/\3/\1");
"//"



"apple, orange, cherry, peach.".replace(/apple(,)\sorange\1/, "xyz");
"xyz cherry, peach."



`2017-03-19`.replace(/(\d{4})\1-(\d{2})\2-(\d{2})\3/g, "\2/\3/\1");

`2017-03-19`.replace(/(\d{4}\1)-(\d{2}\2)-(\d{2}\3)/g, "\2/\3/\1");




?:

(?:x)

匹配 x 不会捕获匹配项。
这被称为非捕获括号（non-capturing parentheses）。
匹配项不能够从结果数组的元素 [1], ..., [n] 或已被定义的 RegExp 对象的属性 $1, ..., $9 再次访问到。






在使用于向前断言（lookahead assertions）时，见该表格中 (?=)、(?!) 和 (?:) 的说明


x?  
匹配前面的模式 x 0 或 1 次。

例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。

如果在数量词 *、+、? 或 {}, 任意一个后面紧跟该符号（?），会使数量词变为非贪婪（ non-greedy） ，即匹配次数最小化。反之，默认情况下，是贪婪的（greedy），即匹配次数最大化。

在使用于向前断言（lookahead assertions）时，见该表格中 (?=)、(?!) 和 (?:) 的说明。

x(?=y)  只有当 x 后面紧跟着 y 时，才匹配 x。 例如，/Jack(?=Sprat)/ 只有在 'Jack' 后面紧跟着 'Sprat' 时，才会匹配它。/Jack(?=Sprat|Frost)/ 只有在 'Jack' 后面紧跟着 'Sprat' 或 'Frost' 时，才会匹配它。然而，'Sprat' 或 'Frost' 都不是匹配结果的一部分。
x(?!y)  
只有当 x 后面不是紧跟着 y 时，才匹配 x。例如，/\d+(?!\.)/ 只有当一个数字后面没有紧跟着一个小数点时，才会匹配该数字。

/\d+(?!\.)/.exec("3.141") 匹配 141 而不是 3.141。




(?:x)   匹配 x 不会捕获匹配项。这被称为非捕获括号（non-capturing parentheses）。匹配项不能够从结果数组的元素 [1], ..., [n] 或已被定义的 RegExp 对象的属性 $1, ..., $9 再次访问到。



/\d+(?!\.)/.exec("3.141")
["141"]



\w(?=\d)

positive lookahead 正向前瞻/积极的向前查找

https://regexper.com/#%5Cw(%3F%3D%5Cd)


\w(?!\d)

negative lookahead 负向前瞻/否定,拒绝向前查找

https://regexper.com/#%5Cw(%3F!%5Cd)



断言不会匹配!


## RegExp 实例 属性 (RegExp 属性只读，不可修改赋值)

注意，RegExp 对象的几个属性既有完整的长属性名，也有对应的类 Perl 的短属性名。
两个属性都有着同样的值。
JavaScript 的正则语法就是基于 Perl 的。

RegExp.prototype.constructor
创建该正则对象的构造函数。

RegExp.prototype.global
是否开启全局匹配，也就是匹配目标字符串中所有可能的匹配项，而不是只进行第一次匹配。

RegExp.prototype.ignoreCase
在匹配字符串时是否要忽略字符的大小写。

RegExp.prototype.lastIndex
下次匹配开始的字符串索引位置。

RegExp.prototype.multiline
是否开启多行模式匹配（影响 ^ 和 $ 的行为）。

RegExp.prototype.source
正则对象的源模式文本(RegExp 模式自身)。

RegExp.prototype.sticky 
是否开启粘滞匹配。


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features

废弃和过时的JavaScript特性







let regex = /(\d{4}\1)-(\d{2})-(\d{2})/g;

regex.source
"(\d{4}\1)-(\d{2})-(\d{2})"

regex.ignoreCase
false

regex.multiline
false

regex.sticky
false

regex.lastIndex
0

regex.global
true

regex.flags
"g"







## 方法


RegExp.prototype.exec()
在目标字符串中执行一次正则匹配操作。

RegExp.prototype.test()
测试当前正则是否能匹配目标字符串。

RegExp.prototype.toSource() 
返回一个字符串，其值为该正则对象的字面量形式。
覆盖了Object.prototype.toSource 方法.

RegExp.prototype.toString()
返回一个字符串，其值为该正则对象的字面量形式。
覆盖了Object.prototype.toString() 方法。


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features

废弃和过时的JavaScript特性







let regex = /(\d{4}\1)-(\d{2})-(\d{2})/g;


regex.test("abc123")
false

regex.exec("abc123")
null

regex.toString("abc123")
"/(\d{4}\1)-(\d{2})-(\d{2})/g"


regex.toSource("abc123")

// Uncaught TypeError: regex.toSource is not a function


## lastIndex bug???

http://www.imooc.com/video/12537

g
test()
lastIndex bug??? 执行多次，结果不一致！

let regex = /\w/;

let regexg = /\w/g;

regexg.test("abc");


let regexg = /\w/g;

regexg.test("abc");
true
regexg.test("abc");
true
regexg.test("abc");
true

regexg.test("abc");
false


regexg.test("abc");
true
regexg.test("abc");
true
regexg.test("abc");
true

regexg.test("abc");
false


## lastIndex bug??? (test不要使用g 标志符)

当前匹配结果的的最后一个字符的下一个字符位置，

首先匹配到a，a是当前匹配结果，最后一个字符仍是a，
a的位置是0，true,下一个字符位置是1，
b的位置是1，true,下一个字符位置是2，
c的位置是2，true,下一个字符位置是3，

?的位置是3，false,下一个字符位置是0，





let regex = /\w/;

let regexg = /\w/g;

regexg.test("abc");



## RegExp.prototype.exec()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec


exec() 方法在一个指定字符串中执行一个搜索匹配。
返回一个结果数组或 null。

如果你正在执行一个匹配只是为了找到 true或 false，可以使用 RegExp.test() 方法，或者 String.search() 方法。


regexObj.exec(str)


str 要匹配正则表达式的字符串。

如果成功匹配，exec() 方法返回一个数组并更新正则表达式对象的属性。返回的数组具有匹配的文本作为第一项，然后匹配的每个捕获括号的一个项包含捕获的文本。

如果匹配失败，exec() 方法返回 null。



index   匹配到的字符位于原始字符串的基于0的索引值

input   原始字符串





## String.prototype.split()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split


字符串 => 数组


`a1b2c3d4e5f6g7`.split(/\w/g, ",");

`a1b2c3d4e5f6g7`.split(/\d/g);
["a", "b", "c", "d", "e", "f", "g", ""]

`a1b2c3d4e5f6g7`.split(/[^\d]/g);
["", "1", "2", "3", "4", "5", "6", "7"]




"a,b,c,d,e,f,g,1,2,3,4,5,6,7".split(",");

"a,b,c,d,e,f,g,1,2,3,4,5,6,7".split(",");
["a", "b", "c", "d", "e", "f", "g", "1", "2", "3", "4", "5", "6", "7"]

"a,b,c,d,e,f,g,1,2,3,4,5,6,7".split(/,/g)
["a", "b", "c", "d", "e", "f", "g", "1", "2", "3", "4", "5", "6", "7"]






## String.prototype.match()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match


当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。


str.match(regexp);


regexp

一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp 。如果你未提供任何参数，直接使用 match() ，那么你会得到一个包含空字符串的 Array ：[""] 。


array

一个包含了整个匹配结果以及任何括号捕获的匹配结果的 Array ；如果没有匹配项，则返回 null 。






## Object.prototype.toSource()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource


function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
}

theDog = new Dog("Gabby", "Lab", "chocolate", "girl");

theDog.toSource();









## String.prototype.replace()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace


replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。
模式可以是一个字符串或者一个正则表达式, 替换值可以是一个字符串或者一个每次匹配都要调用的函数。

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


返回值

一个部分或全部匹配由替代模式所取代的新的字符串。




`a1b2c3d4e5f6g7`.replace(/\d/g, (match, index, origin)=>{
    console.log(index);
    return parseInt(match) + 1;
});

"a2b3c4d5e6f7g8"

`a1b2c3d4e5f6g7`.replace(/\d/g, (match, index, origin)=>{
    console.log(index);
    for(match of origin){
        console.log(match);
    }
    return parseInt(match) + 1;
});

"a2b3c4d5e6f7g8"




`a1b2c3d4e5f6g7`.replace(/(\d)(\w)(\d)/g, (match, group1, group2, group3, index, origin)=>{
    console.log(index);
    console.log(match);
    return group1 + group3;
});

1
1b2
5
3d4
9
5f6

"a12c34e56g7"

replace function 删除 group2 



http://www.imooc.com/video/12538





## charAt()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

http://www.imooc.com/video/528





https://github.com/facebook/react/issues/9203#issuecomment-287319766











