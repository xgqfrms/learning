# JSON Formatter 

https://jsonformatter.curiousconcept.com/




// view-source:https://www.google.com/intl/en/chrome/demos/speech.html

langs.json


## INVALID JSON (RFC 4627)

// Error:Strings should be wrapped in double quotes.


// 错误：字符串应该用双引号括起来。






https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON










https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse



JSON.parse() 方法解析一个JSON字符串，构造由字符串描述的JavaScript值或对象。
可以提供可选的reviver函数以在返回之前对所得到的对象执行变换。


JSON.parse(text[, reviver])




JSON.stringify( 
    Object.create(
        null, 
        { 
            x: { value: 'x', enumerable: false }, 
            y: { value: 'y', enumerable: true } 
        }
    )
);


JSON.stringify(
    {[Symbol.for("foo")]: "foo"}, 
    function (k, v) {
        if (typeof k === "symbol"){
            return "a symbol";
        }
    }
);








https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify



JSON.stringify() 方法将JavaScript值转换为JSON字符串，如果指定了replacer函数，则可以替换值，或者如果指定了replacer数组，则可选地仅包括指定的属性。


JSON.stringify(value[, replacer [, space]])










## ECMA-404



ECMA-404

http://wiki.geekdream.com/Specification/json-rpc_2.0.html

http://www.jsonrpc.org/specification#error_object


http://wiki.geekdream.com/




https://github.com/bagder/http2-explained


JSON Web Token(JWT) 是一个应用安全通信规范

http://wiki.geekdream.com/Specification/jwt.html

https://tools.ietf.org/html/rfc7519














## JSON：不是JavaScript子集 ???

ttps://github.com/zeit/next.js#how-to-use


http://timelessrepo.com/json-isnt-a-javascript-subset


JSON：不是JavaScript子集

JSON基于JavaScript脚本语言的一个子集。
所有JSON格式的文本也是语法合法的JavaScript代码。
JSON是JavaScript的一个子集。


这些年来，我们一再听到：“JSON是一个JavaScript子集”。你猜怎么了？他们错了错，错，错

你看，恶魔的细节，没有办法避免它：并不是所有的JSON格式的文本是合法的JavaScript代码：

```

{"JSON": "rocks!"}

```

复制上面的确切代码，并将其粘贴到一个括号中的Firebug或Web Inspector中（为了避免JavaScript语法中的歧义）


{"JSON": "rocks!"}
// Object {JSON: "rocks!"}

({"JSON": "rocks!"})
// Object {JSON: "rocks!"}



Douglas Crockford

http://crockford.com/

http://crockford.com/calendar.html
http://crockford.com/javascript/encyclopedia/

https://github.com/douglascrockford/TheJavaScriptEncyclopedia

https://github.com/douglascrockford/JSON-js/blob/master/json2.js




