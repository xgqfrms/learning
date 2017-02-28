# Array.prototype 



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype


Array.prototype  属性表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法。


```js
/*
如果JavaScript本身不提供 first() 方法，
添加一个返回数组的第一个元素的新方法。
*/ 

if(!Array.prototype.first) {
    Array.prototype.first = function() {
        console.log(`如果JavaScript本身不提供 first() 方法，
添加一个返回数组的第一个元素的新方法。`);
        return this[0];
    }
}

Array.prototype.first();
// 如果JavaScript本身不提供 first() 方法，
添加一个返回数组的第一个元素的新方法。
``` 



Array实例继承自 Array.prototype 。
与所有构造函数一样，您可以更改构造函数的原型对象，以对所有 Array 实例进行更改。
例如，可以添加新方法和属性以扩展所有Array对象。
这用于 polyfilling， 例如。


polyfilling: A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

polyfill：polyfill是一段代码（通常是Web上的JavaScript），用于在不原生支持它的旧版本浏览器上提供现代功能。


鲜为人知的事实：Array.prototype 本身也是一个 Array。

```js

Array.isArray(Array.prototype); 
// true

``` 

