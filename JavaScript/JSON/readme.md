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














