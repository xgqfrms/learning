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

根据编译期间指定的模块目标，编译器将为 Node.js (CommonJS), require.js (AMD), 同构 (UMD), SystemJS, 或 ECMAScript 2015 native modules (ES6) 模块加载系统生成相应的代码。


有关生成代码中定义，要求和寄存器调用的更多信息，请参阅每个模块加载程序的文档。




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


