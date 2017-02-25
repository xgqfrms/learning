# Modules


https://www.typescriptlang.org/docs/handbook/modules.html


关于术语的注释:  
重要的是要注意，在TypeScript 1.5中，命名法已经改变。
“内部模块”现在是“命名空间”。
“外部模块”现在只是“模块”，以符合ECMAScript 2015的术语，
，(即 module X { 等同于现在优先的命名空间 namespace X {)。



介绍:  

从ECMAScript 2015开始，JavaScript有一个模块的概念。TypeScript共享这个概念

模块在它们自己的范围内执行，而不是在全局范围内执行;
这意味着在模块中声明的变量，函数，类等在模块外部不可见，除非它们使用其中一种导出形式显式的导出。
相反，要使用从不同模块导出的变量，函数，类，接口等，必须使用其中一导入形式导入。


https://www.typescriptlang.org/docs/handbook/modules.html#export

https://www.typescriptlang.org/docs/handbook/modules.html#import


模块是声明性的;模块之间的关系按照文件级别的导入和导出来指定。

模块之间互相导入使用一个模块加载器。在运行时，模块加载器负责在执行一个模块之前定位和执行模块的所有依赖性。
JavaScript中使用的众所周知的模块加载器是用于 Node.js 的 CommonJS模块加载器和 Web应用程序的 require.js。


在TypeScript中，与ECMAScript 2015中一样，包含一个顶级 import 或 export 的任何文件都被视为模块。



Export:  

导出一个声明:  

可以通过添加 export关键字来导出任何声明 (例如变量，函数，类，类型别名或接口)。


Validation.ts

```ts
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
``` 

ZipCodeValidator.ts

```ts
    // 导出一个声明
    export const numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
``` 

导出语句:  

当导出需要为消费者重命名时，导出语句很方便，所以上面的例子可以写成：


```ts
    class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    // 导出语句
    export { ZipCodeValidator };
    export { ZipCodeValidator as mainValidator };
``` 


重新导出:

通常模块扩展/继承其他模块，并部分暴露其某些功能。一个重新导出不会在本地导入，或引入本地变量。

ParseIntBasedZipCodeValidator.ts

```ts
    export class ParseIntBasedZipCodeValidator {
        isAcceptable(s: string) {
            return s.length === 5 && parseInt(s).toString() === s;
        }
    }

    // 导出原始的验证器，但将其重命名
    export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
``` 


或者，一个模块可以包装一个或多个模块，并合并其所有导出,使用 export * from "module" 语法。

AllValidators.ts

```ts
    export * from "./StringValidator"; 
    // exports interface 'StringValidator'

    export * from "./LettersOnlyValidator"; 
    // exports class 'LettersOnlyValidator'

    export * from "./ZipCodeValidator";  
    // exports class 'ZipCodeValidator'
``` 

Import: 


导入就像从一个模块导出一样简单。导入一个导出的声明通过使用下面的 import形式之一来完成：


从一个模块导入单个导出:  

```ts
    import { ZipCodeValidator } from "./ZipCodeValidator";

    let myValidator = new ZipCodeValidator();
``` 

导入也可以重命名:  

```ts
    import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
    let myValidator = new ZCV();
``` 

将整个模块导入单个变量，并使用它访问模块所有导出:  

```ts
    import * as validator from "./ZipCodeValidator";
    let myValidator = new validator.ZipCodeValidator();
``` 


导入一个模块仅用于副作用:  

虽然不推荐的做法，一些模块设置了一些可以被其他模块使用的全局状态。
这些模块可能没有任何出口，或消费者对他们的任何出口不感兴趣。要导入这些模块，请使用：


```ts
    import "./my-module.js";
``` 

默认导出:  


每个模块可以选择导出一个 default导出。
默认导出使用关键字 default标记; 并且每个模块只能有一个默认导出。
default 导出使用一个不同的导入形式导入。

default 导出真的很方便。

例如，像 JQuery这样的库可能默认导出 jQuery或 $，我们也可能导入在名称 $或 jQuery下。


JQuery.d.ts

```ts
    declare let $: JQuery;
    export default $;
``` 

App.ts

```ts
    import $ from "JQuery";
    $("button.continue").html( "Next Step..." );
``` 


类和函数声明可以直接创建为默认导出。
默认导出类和函数声明名称是可选的。


ZipCodeValidator.ts


```ts
    export default class ZipCodeValidator {
        static numberRegexp = /^[0-9]+$/;
        isAcceptable(s: string) {
            return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
        }
    }
``` 

Test.ts

```ts
    import validator from "./ZipCodeValidator";
    let myValidator = new validator();
``` 

StaticZipCodeValidator.ts

```ts
    const numberRegexp = /^[0-9]+$/;
    export default function (s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
``` 

Test.ts

```ts
    import validate from "./StaticZipCodeValidator";
    let strings = ["Hello", "98052", "101"];
    // Use function validate
    strings.forEach(s => {
        console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
    });
``` 

default 导出也可以只是值:  


OneTwoThree.ts

```ts
    export default "123";
``` 

Log.ts

```ts
    import num from "./OneTwoThree";
    console.log(num); 
    // "123"
``` 

export = 和 import = require()

CommonJS 和 AMD通常都有一个 exports对象的概念，它包含一个模块的所有输出。
它们还支持使用一个自定义单个对象替换 exports对象。
默认导出用于替代这种行为;但是，两者不兼容。
TypeScript支持 export = 模型化传统的 CommonJS和 AMD工作流。

export =语法指定从模块导出的一个单个对象。
这可以是类，接口，命名空间，函数或枚举。

当使用 export =导入一个模块时，必须使用 TypeScript专用的 import let = require("module") 来导入模块。


ZipCodeValidator.ts


```ts
    let numberRegexp = /^[0-9]+$/;
    class ZipCodeValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    export = ZipCodeValidator;
``` 

Test.ts

```ts
    import zip = require("./ZipCodeValidator");
    // Some samples to try
    let strings = ["Hello", "98052", "101"];
    // Validators to use
    let validator = new zip();
    // Show whether each string passed each validator
    strings.forEach(s => {
        console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
    });
``` 


模块代码生成:  

根据编译期间指定的模块目标，编译器将为 Node.js (CommonJS), require.js (AMD), 同构 (UMD), SystemJS, 或 ECMAScript 2015 原生模块 (ES6) 模块加载系统生成相应的代码。




http://wiki.commonjs.org/wiki/CommonJS
https://github.com/amdjs/amdjs-api/wiki/AMD
https://github.com/umdjs/umd
https://github.com/systemjs/systemjs
http://www.ecma-international.org/ecma-262/6.0/#sec-modules


有关生成代码中 define, require 和 register 调用的更多信息，请参阅每个模块加载器的文档。




这个简单的例子显示在导入和导出期间使用的名称如何转换为/被翻译成模块加载代码。


SimpleModule.ts

```ts
    import m = require("mod");
    export let t = m.something + 1;
``` 


AMD / RequireJS SimpleModule.js

```ts
    define(["require", "exports", "./mod"], function (require, exports, mod_1) {
        exports.t = mod_1.something + 1;
    });
``` 

CommonJS / Node SimpleModule.js

```ts
    var mod_1 = require("./mod");
    exports.t = mod_1.something + 1;
``` 

UMD SimpleModule.js

```ts
    (function (factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
            var v = factory(require, exports); if (v !== undefined) module.exports = v;
        }
        else if (typeof define === "function" && define.amd) {
            define(["require", "exports", "./mod"], factory);
        }
    })(function (require, exports) {
        var mod_1 = require("./mod");
        exports.t = mod_1.something + 1;
    });
``` 


System SimpleModule.js


```ts
    System.register(["./mod"], function(exports_1) {
        var mod_1;
        var t;
        return {
            setters:[
                function (mod_1_1) {
                    mod_1 = mod_1_1;
                }],
            execute: function() {
                exports_1("t", t = mod_1.something + 1);
            }
        }
    });
``` 


Native ECMAScript 2015 modules SimpleModule.js


```ts
    import { something } from "./mod";
    export var t = something + 1;
``` 


简单示例： 



下面，我们整合了前面示例中使用的Validator实现，只从每个模块导出单个命名导出。

要编译，我们必须在命令行上指定一个模块目标。
对于 Node.js，使用 --module commonjs; 对于 require.js，使用 --module amd。
例如：

```sh
$ tsc --module commonjs Test.ts
``` 

当编译时，每个模块将成为一个单独的 .js文件。
与参考标签一样，编译器将遵循 import语句来编译依赖的文件。

Validation.ts

```ts
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
``` 

LettersOnlyValidator.ts

```ts
    import { StringValidator } from "./Validation";

    const lettersRegexp = /^[A-Za-z]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
``` 

ZipCodeValidator.ts

```ts
    import { StringValidator } from "./Validation";

    const numberRegexp = /^[0-9]+$/;

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
``` 

Test.ts

```ts
    import { StringValidator } from "./Validation";
    import { ZipCodeValidator } from "./ZipCodeValidator";
    import { LettersOnlyValidator } from "./LettersOnlyValidator";

    // Some samples to try
    let strings = ["Hello", "98052", "101"];

    // Validators to use
    let validators: { [s: string]: StringValidator; } = {};
    validators["ZIP code"] = new ZipCodeValidator();
    validators["Letters only"] = new LettersOnlyValidator();

    // Show whether each string passed each validator
    strings.forEach(s => {
        for (let name in validators) {
            console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
        }
    });
``` 

可选模块加载和其他高级加载方案/场景:  


在某些情况下，您可能只想在某些条件下加载模块。
在TypeScript中，我们可以使用下面显示的模式来实现这种和其他高级加载方案，直接调用模块加载器而不会损失类型安全性。


编译器检测每个模块是否在发出/发射的JavaScript中被使用。
如果模块标识符只是作为类型注释的一部分使用，而不是作为表达式，那么不会为该模块发出 require调用。
这种未使用的引用的精确性是良好的性能优化，并且还允许可选地加载那些模块。


模式的核心思想是 import id = require("...") 给我们访问模块公开的类型
模块加载器被动态调用 (通过require)，如下面的if块所示。
这利用了参考精度优化，以便模块仅在需要时加载。

要使此模式正常工作，通过一个 import导入定义的符号仅用于类型位置很重要 (即, 从不处于将被发射到JavaScript中的位置)

为了保持类型安全，我们可以使用 typeof关键字。
typeof 关键字在类型位置中使用时会生成值的类型，在这种情况下是模块的类型。



Dynamic Module Loading in Node.js

```ts
    declare function require(moduleName: string): any;

    import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

    if (needZipValidation) {
        let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
        let validator = new ZipCodeValidator();
        if (validator.isAcceptable("...")) { /* ... */ }
    }
``` 

Sample: Dynamic Module Loading in require.js


```ts
    declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

    import  * as Zip from "./ZipCodeValidator";

    if (needZipValidation) {
        require(["./ZipCodeValidator"], (ZipCodeValidator: typeof Zip) => {
            let validator = new ZipCodeValidator.ZipCodeValidator();
            if (validator.isAcceptable("...")) { /* ... */ }
        });
    }
``` 

Sample: Dynamic Module Loading in System.js

```ts
    declare const System: any;

    import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

    if (needZipValidation) {
        System.import("./ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {
            var x = new ZipCodeValidator();
            if (x.isAcceptable("...")) { /* ... */ }
        });
    }
``` 


与其他JavaScript库共同工作 / 与其他JavaScript库协作


为了描述不是用 TypeScript编写的库的形状，我们需要声明库公开的API。


我们调用没有定义实现  “ambient”的声明。通常，这些文件在.d.ts文件中定义。
如果你熟悉 C / C ++，你可以认为这些是.h文件。
让我们来看几个例子。

环境模块:  

在Node.js中，大多数任务是通过加载一个或多个模块来完成的。
我们可以使用顶级导出声明在每个模块的自己的.d.ts文件中定义每个模块，但是将它们写为一个较大的.d.ts文件更方便。

我们可以在每个模块自己的.d.ts文件中用顶级导出声明定义每个模块，但更方便的是将它们写为一个较大的.d.ts文件。

为此，我们使用类似于 ambient命名空间的构造，但是我们使用 module关键字和模块的引用名称，以便稍后导入。例如：


node.d.ts (简化的摘抄)

```ts
    declare module "url" {
        export interface Url {
            protocol?: string;
            hostname?: string;
            pathname?: string;
        }
        export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
    }
    declare module "path" {
        export function normalize(p: string): string;
        export function join(...paths: any[]): string;
        export var sep: string;
    }
``` 

现在我们可以 /// <reference> node.d.ts 然后加载模块使用 import url = require("url");

```ts
    /// <reference path="node.d.ts"/>
    import * as URL from "url";
    let myUrl = URL.parse("http://www.typescriptlang.org");
``` 



速记环境模块:  

如果你不想花时间在使用新模块之前写出声明，可以使用简写声明快速开始。


declarations.d.ts

```ts
    declare module "hot-new-module";
``` 
从速记模块导入的所有内容都将具有 any类型。

```ts
    import x, {y} from "hot-new-module";
    x(y);
``` 

通配符模块声明:


某些模块加载程序 (如 SystemJS和 AMD) 允许导入非JavaScript内容。

这些通常使用前缀或后缀来指示特殊加载语义。

通配符模块声明可用于覆盖这些情况。


```ts
    declare module "*!text" {
        const content: string;
        export default content;
    }
    // Some do it the other way around.
    declare module "json!*" {
        const value: any;
        export default value;
    }
``` 


现在您可以导入匹配 "*!text" 或 "json!* 的内容。


```ts
    import fileContent from "./xyz.txt!text";
    import data from "json!http://example.com/data.json";
    console.log(data, fileContent);
``` 


UMD 模块

一些库设计为在许多模块加载器中使用，或者没有模块加载(全局变量)。
这些称为 UMD或 同构模块。


```notes
    同构 JavaScript  

    http://isomorphic.net/

    Isomorphic JavaScript应用程序是可以运行客户端和服务器端的JavaScript应用程序。 后端和前端共享相同的代码。
``` 



math-lib.d.ts


```ts
    export const isPrime(x: number): boolean;
    export as namespace mathLib;
``` 

然后可以将库用作模块中的导入：

```ts
    import { isPrime } from "math-lib";
    isPrime(2);
    mathLib.isPrime(2); 
    // //错误：不能从一个模块的内部使用全局定义
``` 

它也可以用作一个全局变量，但只在脚本内。(脚本是没有导入或导出的文件。)

```ts
    mathLib.isPrime(2);
``` 


结构化模块的指导:  

您的模块的消费者在使用您导出的东西时应该尽可能少的摩擦。
添加太多层次的嵌套往往是麻烦的，所以仔细思考你想要如何构造事物。

从模块导出命名空间是添加太多嵌套层的示例。
虽然命名空间有时有它们的用途，但是当使用模块时，它们增加了一个额外的间接层。
这可能很快成为用户的痛点，通常是不必要的。

导出类上的静态方法有一个类似的问题 - 类本身添加了一层嵌套。
除非它以明显有用的方式增加表达力或意图，否则可以考虑简单地导出帮助函数。


如果您只导出单个 class 或 function，请使用export default


正如“在顶层附近导出”减少了模块的消费者的摩擦，所以引入默认导出。
如果模块的主要目的是容纳一个特定导出，则应考虑将其导出为默认导出。
这使得导入和实际使用导入更容易一些。
例如：


MyClass.ts

```ts
    export default class SomeType {
        constructor() { ... }
    }
``` 

MyFunc.ts

```ts
    export default function getThing() { return "thing"; }
``` 

Consumer.ts

```ts
    import t from "./MyClass";
    import f from "./MyFunc";
    let x = new t();
    console.log(f());
``` 

这对消费者是最佳的。
他们可以为你的类型命名任何他们想要的 (t 在这个情况下)，并不需要做任何过多的 dotting/点击 来找到你的对象。


如果您要导出多个对象，请将它们全部置于顶级


MyThings.ts

```ts
    export class SomeType { /* ... */ }
    export function someFunc() { /* ... */ }
``` 

反过来/相反，在导入时：


显式列出导入的名称

Consumer.ts

```ts
    import { SomeType, someFunc } from "./MyThings";
    let x = new SomeType();
    let y = someFunc();
``` 



```ts
``` 



```ts
``` 


```ts
``` 




```ts
``` 
导入导出



```ts
``` 


```ts
``` 



```ts
``` 



```ts

``` 



```ts
``` 


```ts

``` 



```ts
``` 


