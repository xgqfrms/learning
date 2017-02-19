# Object Methods  

http://www.w3schools.com/js/js_object_methods.asp  


## Function  

在JavaScript中，函数是对象, JavaScript函数具有属性和方法。

预定义的JavaScript函数(对象)方法:

call() 
apply()

两个方法都将一个所有者对象(this)作为第一个参数。


## Methods  

方法是作为对象属性存储的函数。

```codes
# 创建一个对象方法  

methodName : function() { code lines }  

# 访问对象方法  

objectName.methodName()

``` 

fullName 属性将在使用()调用时被执行(作为函数)。

## Function Invocation  


函数定义 === functionName  
函数调用 === functionName()  

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

## 内置方法  













