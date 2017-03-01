# Function  

## Function constructor  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function  


## call()  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call  


## apply()  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply  


## The Difference Between Call() and Apply()  

http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply  

http://hangar.runway7.net/javascript/difference-call-apply  

## ES6 (Spread syntax)  

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator  


## demo codes  

```js
## call() === comma-separated arguments (arguments-list)  

.call(this, args1, args2, args3, ...)

## apply() === array of arguments (array-items)  

.apply(this, [arr0, arr1, arr2, ...])

``` 

## this === the target object  

## 两个方法都将一个所有者对象(this)作为第一个参数。  


```js
var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var sayHello = function(){
    alert('Hello, ' + this.name);
};

var sayGoodbye = function(){
    alert('Goodbye, ' + this.name);
};

sayHello();
sayGoodbye();

sayHello.call(person1);
sayGoodbye.call(person2);

sayHello.apply(person1);
sayGoodbye.apply(person2);


var say = function(greeting){
    alert(greeting + ', ' + this.name);
};

say.call(person1, 'Hello');
say.call(person2, 'Goodbye');

var update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
};

update.call(person1, 'Slarty', 200, '1xM');


var dispatch = function(person, method, args){
    method.apply(person, args);
};

dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Slarty', 200, '1xM']);

``` 


http://www.w3schools.com/js/js_function_invocation.asp  



## javaScript call apply and bind  


https://www.youtube.com/watch?v=c0mLRpw-9rI  



## IIFE 

a JavaScript function can be invoked without being called.  

https://en.wikipedia.org/wiki/Immediately-invoked_function_expression  
http://www.w3schools.com/js/js_function_invocation.asp  

```js

(function(){
    console.log('this is an IIFE function!');
})();

(function(){
    console.log("this is an IIFE \(Douglas Crockford's style \) function!");
}());

``` 

## w3schools.com JS Functions

http://www.w3schools.com/js/js_function_definition.asp  
http://www.w3schools.com/js/js_function_invocation.asp  
http://www.w3schools.com/js/js_function_parameters.asp  
http://www.w3schools.com/js/js_function_closures.asp  

http://www.w3schools.com/js/js_functions.asp  






## arguments.callee


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee


arguments.callee 属性包含当前正在执行的函数。。

callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。

警告：
在严格模式下，第5版 ECMAScript (ES5) 禁止使用 arguments.callee()。
当一个函数必须调用自身的时候, 避免使用 arguments.callee(), 通过要么给函数表达式一个名字，，要么使用一个函数声明.


## Javascrpt 高级程序设计(第3版).pdf

> 22.3 高级定时器 613  

setTimeout(function(){
    //取出下一个条目并处理
    var item = array.shift();
    process(item);
    //若还有条目，再设置另一个定时器
    if(array.length > 0){
        setTimeout(arguments.callee, 100);
    }
}, 100);







