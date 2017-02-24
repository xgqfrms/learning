# Namespaces

https://www.typescriptlang.org/docs/handbook/namespaces.html


关于术语的注释：
重要的是要注意，在TypeScript 1.5中，命名法已经改变。
“内部模块”现在是“命名空间”。
“外部模块”现在只是“模块”，以符合ECMAScript 2015的术语，
，(即 module X { 等同于现在优先的命名空间 namespace X {)。


介绍:  

这篇文章概述了使用 TypeScript中的命名空间(以前称为“内部模块”)来组织代码的各种方法。
正如我们在关于术语的注释中所提到的，“内部模块”现在被称为“命名空间”。
此外，在声明一个内部模块时,使用module关键字的任何地方，可以而且应该使用namespace关键字代替。
这避免了混淆新用户,通过用类似命名的术语来重载它们。


第一步:  

让我们从我们将使用的程序开始，作为整个页面的示例。
我们写了一小组的简单化字符串验证器，你可能会写用于检查用户在网页上的表单中的输入，或者检查外部提供的数据文件的格式。


在单个文件中的验证器:  

```ts 
    interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    let lettersRegexp = /^[A-Za-z]+$/;
    let numberRegexp = /^[0-9]+$/;

    class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }

    // Some samples to try
    let strings = ["Hello", "98052", "101"];

    // Validators to use
    let validators: { [s: string]: StringValidator; } = {};
    validators["ZIP code"] = new ZipCodeValidator();
    validators["Letters only"] = new LettersOnlyValidator();

    // Show whether each string passed each validator
    for (let s of strings) {
        for (let name in validators) {
            let isMatch = validators[name].isAcceptable(s);
            console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
        }
    }
``` 


命名空间  


当我们添加更多的验证器时，我们将需要一种组织方案，以便我们可以跟踪我们的类型，而不必担心与其他对象的名称冲突。
代替把很多不同的名称放入全局命名空间，让我们将我们的对象包装到一个命名空间中。

在这个例子中，我们将所有与验证器相关的实体移动到名为 Validation的命名空间中。
因为我们希望这里的接口和类在命名空间之外是可见的，所以我们用前序export来引用它们。
相反，变量 lettersRegexp和 numberRegexp是实现细节，因此它们保持未导出状态，并且对命名空间之外的代码不可见。
在文件底部的测试代码中，我们现在需要限定在命名空间外使用的类型的名称，例如: Validation.LettersOnlyValidator。


命名空间验证器:  

```ts
    namespace Validation {
        export interface StringValidator {
            isAcceptable(s: string): boolean;
        }

        const lettersRegexp = /^[A-Za-z]+$/;
        const numberRegexp = /^[0-9]+$/;

        export class LettersOnlyValidator implements StringValidator {
            isAcceptable(s: string) {
                return lettersRegexp.test(s);
            }
        }

        export class ZipCodeValidator implements StringValidator {
            isAcceptable(s: string) {
                return s.length === 5 && numberRegexp.test(s);
            }
        }
    }

    // Some samples to try
    let strings = ["Hello", "98052", "101"];

    // Validators to use
    let validators: { [s: string]: Validation.StringValidator; } = {};
    validators["ZIP code"] = new Validation.ZipCodeValidator();
    validators["Letters only"] = new Validation.LettersOnlyValidator();

    // Show whether each string passed each validator
    for (let s of strings) {
        for (let name in validators) {
            console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
        }
    }
``` 

跨文件拆分:  

随着应用程序的不断增长，我们希望将代码分割到多个文件中，使其更容易维护。


多文件的命名空间:  

在这里，我们将跨多个文件拆分我们的 Validation命名空间。
即使文件是独立的，它们可以分别贡献给同一个命名空间，并且可以被消费，就像它们在一个地方被定义一样。
因为文件之间有依赖关系，我们将添加引用标记(参考标签)，告诉编译器关于文件之间的关系。
我们的测试代码是不变的。


Validation.ts

```ts
    namespace Validation {
        export interface StringValidator {
            isAcceptable(s: string): boolean;
        }
    }
``` 

LettersOnlyValidator.ts

```ts
    /// <reference path="Validation.ts" />
    namespace Validation {
        const lettersRegexp = /^[A-Za-z]+$/;
        export class LettersOnlyValidator implements StringValidator {
            isAcceptable(s: string) {
                return lettersRegexp.test(s);
            }
        }
    }
``` 

ZipCodeValidator.ts

```ts
    /// <reference path="Validation.ts" />
    namespace Validation {
        const numberRegexp = /^[0-9]+$/;
        export class ZipCodeValidator implements StringValidator {
            isAcceptable(s: string) {
                return s.length === 5 && numberRegexp.test(s);
            }
        }
    }
``` 

Test.ts

```ts
    /// <reference path="Validation.ts" />
    /// <reference path="LettersOnlyValidator.ts" />
    /// <reference path="ZipCodeValidator.ts" />

    // Some samples to try
    let strings = ["Hello", "98052", "101"];

    // Validators to use
    let validators: { [s: string]: Validation.StringValidator; } = {};
    validators["ZIP code"] = new Validation.ZipCodeValidator();
    validators["Letters only"] = new Validation.LettersOnlyValidator();

    // Show whether each string passed each validator
    for (let s of strings) {
        for (let name in validators) {
            console.log(""" + s + "" " + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
        }
    }
``` 

一旦涉及到多个文件，我们需要确保所有编译的代码被加载。有两种方法这样做。


首先/第一: 

我们可以使用 --outFile标志来连接输出，将所有输入文件编译为单个 JavaScript输出文件：

```sh
$ tsc --outFile sample.js Test.ts
``` 

编译器将根据文件中存在的引用标记自动对输出文件进行排序。您还可以单独指定每个文件：

tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts

或者，我们可以使用每个文件的编译（默认）为每个输入文件发出/发射一个JavaScript文件。
如果生成多个JS文件，我们需要在网页上使用 &lt;script&gt;标签，以适当的顺序加载每个发出的文件，例如：

MyTestPage.html (摘抄/节选)  


```html
    <!-- js加载顺序对应 tsc --outFile 编译顺序-->
    <script src="Validation.js" type="text/javascript" />
    <script src="LettersOnlyValidator.js" type="text/javascript" />
    <script src="ZipCodeValidator.js" type="text/javascript" />
    <script src="Test.js" type="text/javascript" />
``` 

别名:  

你可以简化使用命名空间的另一种方法是使用 import q = x.y.z 为常用对象创建较短的名称。
不要混淆与 import x = require("name") 语法用于加载模块，此语法简单地为指定的符号创建别名。
你可以对任何种类的标识符使用这些类型的 imports（通常称为别名），包括从模块import创建的对象。

```ts
    namespace Shapes {
        export namespace Polygons {
            export class Triangle { }
            export class Square { }
        }
    }

    import polygons = Shapes.Polygons;
    let sq = new polygons.Square(); // 与 'new Shapes.Polygons.Square()' 一样
``` 

注意，我们不使用 require关键字;
而是直接从我们要导入的符号的限定名称中分配。
这类似于使用 var，但也适用于导入符号的类型和命名空间含义。
重要的是，对于值，import是与原始符号的不同引用，因此对别名 var的更改不会反映在原始变量中。


工作与其他JavaScript库:  

为了描述不是用TypeScript编写的库的形状，我们需要声明库公开/暴露的API。
因为大多数JavaScript库只暴露了一些顶级对象，所以命名空间是表示它们的好方法。

我们调用没有定义一个“ambient/环境”实现的声明。
通常这些是在 .d.ts文件中定义的。
如果你熟悉 C/C++，你可以认为这些是.h文件。让我们来看几个例子。


环境命名空间:  

流行库 D3在称为 d3的全局对象中定义其功能。
因为这个库是通过 &lt;script&gt; 标签(而不是模块加载器)加载，它的声明使用命名空间来定义它的形状。
为了让TypeScript编译器看到这种形状，我们使用了一个ambient命名空间声明。
例如，我们可以开始写如下：



D3.d.ts (简化的摘抄)

```ts
    declare namespace D3 {
        export interface Selectors {
            select: {
                (selector: string): Selection;
                (element: EventTarget): Selection;
            };
        }

        export interface Event {
            x: number;
            y: number;
        }

        export interface Base extends Selectors {
            event: Event;
        }
    }

    declare var d3: D3.Base;
``` 







