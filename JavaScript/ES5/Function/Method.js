/*
在JavaScript中，函数是对象。 JavaScript函数具有属性和方法。

预定义的 JavaScript函数(对象)方法:

call() 
apply()

两个方法都将一个所有者对象(this)作为第一个参数。

 */

function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2); 

// call() === comma-separated arguments 逗号分隔参数

function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);

// apply() === array of arguments 参数数组

/*

```js
## call() === comma-separated arguments (arguments-list)  

.call(this, args1, args2, args3, ...)

## apply() === array of arguments (array-items)  

.apply(this, [arr0, arr1, arr2, ...])

``` 

 */


