# javascript 数据类型自动转换



http://javascript.ruanyifeng.com/grammar/conversion.html



http://harttle.com/2013/10/18/github-homepage-tutorial.html



{} + {}
"[object Object][object Object]"
{} + []
0
[] + {}
"[object Object]"
[] + []
""


Number(true);
1
Number(false);
0

Number([])
0
Number([1,2,3]);
NaN

Number({})
NaN
Number({1:"abc"})
NaN
Number({key: "abc"})
NaN

Number("")
0
Number("xyz")
NaN
Number(123)
123

let symbol = Symbol();
undefined
Number(symbol)
// Uncaught TypeError: Cannot convert a Symbol value to a number






let s = Symbol();

http://kamranahmed.info/blog/2016/04/04/es6-in-depth/


https://developer.mozilla.org/zh-CN/docs/Same-origin_policy_for_file:_URIs

文件同源策略

http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html

window.postMessage

JSONP
WebSocket
CORS

https://www.w3.org/TR/CSP3/
https://www.w3.org/TR/CSP2/

https://www.w3.org/TR/CSP2/#policy-delivery

http://www.w3.org/TR/SRI/

This specification defines a mechanism by which user agents may verify that a fetched resource has been delivered without unexpected manipulation.

该规范定义了一种机制，用户代理可以通过该机制来验证所提取的资源是否在没有意外操作的情况下被传递。


new Array(3+1)*'*'
NaN
new Array(3+1)
[undefined × 4]
let aaa = new Array(3+1);
undefined
aaa
[undefined × 4]length: 4__proto__: Array[0]
aaa[0]
undefined

new Array(3+1).join('*')
"***"
https://www.audero.it/blog/2016/12/16/from-javascript-developer-to-javascript-engineer-re-implementing-ecmascript-2015s-string-prototype-repeat-method/








