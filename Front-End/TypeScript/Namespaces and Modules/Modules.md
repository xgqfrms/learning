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


```ts
``` 







```ts

``` 



```ts
``` 





