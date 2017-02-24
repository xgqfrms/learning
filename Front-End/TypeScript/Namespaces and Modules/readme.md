# Namespaces and Modules

> TypeScript 2.2 is now available. 

https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html


关于术语的注释：
重要的是要注意，在TypeScript 1.5中，命名法已经改变。
“内部模块”现在是“命名空间”。
“外部模块”现在只是“模块”，以符合ECMAScript 2015的术语，
，(即 module X { 等同于现在优先的命名空间 namespace X {)。


引言: 
这篇文章概述了使用TypeScript中的命名空间和模块来组织代码的各种方法。
我们还将讨论如何使用命名空间和模块的一些高级主题，并解决在TypeScript中使用命名空间和模块时的一些常见陷阱。


有关模块的更多信息，请参阅模块文档。
https://www.typescriptlang.org/docs/handbook/modules.html

有关命名空间的更多信息，请参阅命名空间文档。
https://www.typescriptlang.org/docs/handbook/namespaces.html



使用命名空间:  

命名空间是在全局命名空间中简单命名的JavaScript对象。
这使得命名空间是一个非常简单的构造来使用。
它们可以跨越多个文件，并可以使用--outFile连接。
命名空间可以是在Web应用程序中构建代码的好方法，其中所有依赖关系都作为HTML页面中的 &lt;script&gt; 标记。

就像所有全局命名空间污染一样，可能很难识别组件依赖性，特别是在大型应用程序中。


使用模块:  

就像命名空间一样，模块可以包含代码和声明。主要区别是模块声明它们的依赖性。
主要区别是模块声明它们的依赖性。
模块还具有对模块加载器的依赖(例如CommonJs / Require.js)。
对于一个小的JS应用程序，这可能不是最佳的，但对于较大的应用程序，成本伴随着长期模块化和可维护性的好处。
模块提供更好的代码重用，更强的隔离和对捆绑/打包更好的工具支持。

还值得注意的是，对于Node.js应用程序，模块是默认的，并且是推荐的构建代码的方法。
从ECMAScript 2015开始，模块是该语言的原生部分，并且应该由所有兼容的引擎实现支持。
因此，对于新项目模块将是建议的代码组织机制。


命名空间和模块的缺陷:  

在本节中，我们将描述使用命名空间和模块的各种常见缺陷，以及如何避免它们。

/// <reference>-ing 一个模块

一个常见的错误是尝试使用 /// <reference ... /> 语句来引用一个模块文件，而不是使用 import 声明。
为了理解这一区别，我们首先需要了解编译器如何基于一个 import 路径的路径定位一个模模块的类型信息(例如: ... 在 import x from "...";, import x = require("...");, 等等。)。

编译器将尝试使用适当的路径查找一个 .ts，.tsx和然后一个 .d .ts。
如果找不到特定的文件，编译器将寻找一个环境模块声明。
回想一下，这些需要在一个.d.ts文件中声明。


myModules.d.ts

// 在不是一个模块的, 一个 .d.ts文件或一个 .ts文件中：
declare module "SomeModule" {
    export function fn(): string;
}


myOtherModule.ts

/// <reference path="myModules.d.ts" />
import * as m from "SomeModule";


这里的引用标记允许我们定位包含环境模块的声明的声明文件。

这就是 node.d.ts文件是如何被几个TypeScript样本使用的。


无需/不必要命名空间:  

如果你将程序从命名空间转换为模块，可以很容易得到一个文件，如下所示：


shapes.ts

export namespace Shapes {
    export class Triangle { /* ... */ }
    export class Square { /* ... */ }
}

这里的顶层模块 Shapes 包装 Triangle 和 Square 没有理由。
这对你的模块的消费者来说是混乱和恼人的：


shapeConsumer.ts

import * as shapes from "./shapes";
let t = new shapes.Shapes.Triangle(); // shapes.Shapes?


在TypeScript中模块的一个关键特性是两个不同的模块永远不会为同一个作用域贡献名称。
因为一个模块的使用者决定要分配什么名称，所以不需要在一个命名空间中主动包装exported的符号。



为了重申为什么你不应该尝试命名空间你的模块内容，命名空间的一般想法是提供结构的逻辑分组和防止名称冲突。
因为模块文件本身已经是一个逻辑分组，它的顶级名称由导入它的代码定义，所以不必为导出的对象使用附加的模块层。


这里是一个修订的例子:  

shapes.ts

export class Triangle { /* ... */ }
export class Square { /* ... */ }


shapeConsumer.ts

import * as shapes from "./shapes";
let t = new shapes.Triangle();



模块的权衡:

正如JS文件和模块之间一一对应一样，TypeScript在模块源文件和它们发出/发射的JS文件之间有一一对应的关系。
这样做的一个效果是，不可能根据您定位/目标的模块系统连接多个模块源文件。
例如，在定位 commonjs或 umd时，不能使用 outFile选项，但是使用TypeScript 1.8和更高版本，可以在定位 amd或 system时使用outFile。


## bugs fixed: https://github.com/Microsoft/TypeScript/issues/14297

https://www.typescriptlang.org/docs/handbook/release%20notes/typescript-1-8.html#concatenate-amd-and-system-modules-with---outfile

=>

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#concatenate-amd-and-system-modules-with---outfile





http://stackoverflow.com/questions/39560638/why-are-some-typescript-module-names-given-as-strings/42445987#42445987





引用标记(参考标签)

```ts
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

``` 

















