# concatenate-amd-and-system-modules-with---outfile



https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html#Trade-offs-of-Modules


模块的权衡:

正如JS文件和模块之间一一对应一样，TypeScript在模块源文件和它们发出/发射的JS文件之间有一一对应的关系。
这样做的一个效果是，不可能根据您定位/目标的模块系统连接多个模块源文件。
例如，在定位 commonjs或 umd时，不能使用 outFile选项，但是使用TypeScript 1.8和更高版本，可以在定位 amd或 system时使用outFile。


## bugs fixed: https://github.com/Microsoft/TypeScript/issues/14297

https://www.typescriptlang.org/docs/handbook/release%20notes/typescript-1-8.html#concatenate-amd-and-system-modules-with---outfile

=>

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#concatenate-amd-and-system-modules-with---outfile
















