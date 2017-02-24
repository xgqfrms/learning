# namespace vs module


??? namespace vs module

https://www.w3.org/TR/REC-xml-names/

http://rollupjs.org/

Rollup是下一代JavaScript模块包。

AMD  CommonJS  ES2015  Globals  UMD  



Tree-shaking?

树摇？



https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/

https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-1-a12e1833fdc#.s9j3hzegz


https://github.com/facebookincubator/create-react-app


import React from 'react';

class App extends React.Component{}


import React, { Component } from 'react';

class App extends Component {}



https://github.com/facebookincubator/create-react-app/issues/1631


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

MDN import

注意：此功能目前无法在任何浏览器中实现。它在许多转换器中实现，例如 Traceur Compiler ， Babel ， Rollup 或 Webpack。


https://www.chromestatus.com/feature/5365692190687232

https://developer.microsoft.com/en-us/microsoft-edge/platform/status/moduleses6/




http://caniuse.com/#search=export

Import/export modules in JavaScript in ES6

导入/导出用JavaScript模块ES6

Global  0%


http://stackoverflow.com/questions/33956201/how-to-import-and-export-components-using-react-es6-webpack






ECMAScript 2015 Features (Math + Number + String + Object APIs)?


http://stackoverflow.com/questions/40178656/ecmascript-2015-features-math-number-string-object-apis


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from 

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols

可迭代协议和迭代器协议。

http://www.ecma-international.org/ecma-262/6.0/#sec-iteration

https://tc39.github.io/ecma262/#sec-iteration


Array.from()


浅复制

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys


keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values

values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries


Array.prototype.entries()


target, start, end

arr.copyWithin(目标索引, [源开始索引], [结束源索引])

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin


["alpha", "beta", "copy", "delta"].copyWithin(1, 2, 3);
// 0:"alpha" 1:"beta" 2:"copy" 3:"delta"
// ["alpha", "copy", "copy", "delta"]
// 0:"alpha" 1:"copy" 2:"copy" 3:"delta"

// target === 1:"beta"
// start === 2:"copy", 
// end === 3:"delta"

// 1:"beta" => 1:"copy"

copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
