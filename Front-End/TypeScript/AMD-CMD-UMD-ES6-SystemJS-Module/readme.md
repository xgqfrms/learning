# AMD-CMD-UMD-ES6-SystemJS-Module 模块加载器  


webpack

gulp


Node.js (CommonJS), 
require.js (AMD), 
isomorphic (UMD), 
SystemJS, or 
ECMAScript 2015 native modules (ES6) 







https://www.typescriptlang.org/docs/handbook/modules.html#export

https://www.typescriptlang.org/docs/handbook/modules.html#import

模块之间互相导入使用一个模块加载器。在运行时，模块加载器负责在执行一个模块之前定位和执行模块的所有依赖性。
JavaScript中使用的众所周知的模块加载器是用于 Node.js 的 CommonJS模块加载器和 Web应用程序的 require.js。








模块代码生成:  

根据编译期间指定的模块目标，编译器将为 Node.js (CommonJS), require.js (AMD), 同构 (UMD), SystemJS, 或 ECMAScript 2015 原生模块 (ES6) 模块加载系统生成相应的代码。




http://wiki.commonjs.org/wiki/CommonJS
https://github.com/amdjs/amdjs-api/wiki/AMD
https://github.com/umdjs/umd
https://github.com/systemjs/systemjs
http://www.ecma-international.org/ecma-262/6.0/#sec-modules


有关生成代码中 define, require 和 register 调用的更多信息，请参阅每个模块加载器的文档。



Code Generation for Modules  

Depending on the module target specified during compilation, the compiler will generate appropriate code for 
Node.js (CommonJS), 
require.js (AMD), 
isomorphic (UMD), 
SystemJS, or 
ECMAScript 2015 native modules (ES6) 
module-loading systems. For more information on what the define, require and register calls in the generated code do, consult the documentation for each module loader.






