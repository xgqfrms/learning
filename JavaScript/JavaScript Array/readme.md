# JavaScript Array.prototype.xxx()



http://www.w3schools.com/jsref/jsref_obj_array.asp

http://www.w3schools.com/js/js_arrays.asp



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/












## 访问数组的元素的方式

let objectsArr = [
    { "K1":"A1", "K2":"B1", "K3":"C1"}, 
    { "K1":"B2", "K2":"C2"}, 
    {"K1":"C3"}
];


1. arr[0]

2. arr[0].key

3. for of 


for( let item of objectsArr){
    console.log(item);
}

for( let item of objectsArr){
    console.log(item.K1);
}





## Array.prototype.pop()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop



the pop() method removes the last element from an array and returns that element. This method changes the length of the array.

pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。



```js

var a = [1, 2, 3];
a.pop();
// 3

console.log(a); 
// [1, 2]

console.log(a.length); 
// 2

``` 


## Array.prototype.shift()

http://www.w3schools.com/jsref/jsref_shift.asp

shift() 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。


```js

let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);

fruits.shift();
// "Banana"

console.log(fruits);
// ["Orange", "Apple", "Mango"];

console.log(fruits.length);
// 3

``` 




## Array.prototype.push()

push() 方法将一个或多个元素添加到数组的末尾，并返回数组的新长度。

```js

var numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); 
// [1, 2, 3, 4]

numbers.push(5, 6, 7);

console.log(numbers); 
// [1, 2, 3, 4, 5, 6, 7]

``` 


## Array.prototype.unshift()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift


unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。


```js

let a = [1, 2, 3];
a.unshift(4, 5);

console.log(a); 
// [4, 5, 1, 2, 3]

``` 


## Array.prototype.join() 连接


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join


join() 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中。

PS: join() 方法，不会改变现有数组！



```js
let a = ['Wind', 'Rain', 'Fire'];

a.join(); 
// 默认为 ","
// 'Wind,Rain,Fire'

a.join(""); 
// 分隔符 === 空字符串 ""
// "WindRainFire"

a.join("-"); 
// 分隔符 "-"
// 'Wind-Rain-Fire'

console.log(a);
// ['Wind', 'Rain', 'Fire']
``` 



## Array.prototype.concat() 合并

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

concat() 法用于合并两个或多个数组。
此方法不会更改现有数组，而是返回一个新数组。


```js

let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];

let arr3 = arr1.concat(arr2);

console.log(arr3);

// [ "a", "b", "c", "d", "e", "f" ]

console.log(arr3);
// [ "a", "b", "c" ]

console.log(arr3);
// [ "d", "e", "f" ]


``` 





## Array.prototype.splice()




## Array.prototype.splice()





## Array.prototype.splice()




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort



arr.sort() 

arr.sort(compareFunction)

可选。用来指定按某种顺序进行排列的函数。
如果省略，元素按照转换为的字符串的诸个字符的Unicode位点进行排序。


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every






## Array.prototype.entries()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries


```js

entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next().value); 
// [0, "a"]
console.log(iterator.next().value); 
// [1, "b"]
console.log(iterator.next().value); 
// [2, "c"]

var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
    console.log(e);
}

// [0, "a"] 
// [1, "b"] 
// [2, "c"]

``` 





https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values


Chrome 未实现 






## Array.prototype.keys()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys


keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。


```js

let arr = ["a", "b", "c"];

let iterator = arr.keys();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next()); 
// Object {value: 0, done: false}

console.log(iterator.next()); 
// Object {value: 1, done: false}

console.log(iterator.next()); 
// Object {value: 2, done: false}

console.log(iterator.next()); 
// Object {value: undefined, done: true}


``` 






## Array.prototype.forEach()  



http://www.webhek.com/javascript-loop-foreach-for-in-for-of

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


forEach() 方法对数组的每个元素执行一次提供的函数。

let a = ['a', 'b', 'c'];

a.forEach(function(element) {
    console.log(element);
});

// a
// b
// c



array.forEach(callback[, thisArg])



function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

// 注意索引2被跳过了，因为在数组的这个位置没有项

[2, 5, ,9].forEach(logArrayElements);

// a[0] = 2
// a[1] = 5
// a[3] = 9


[2, 5,"" ,9].forEach(logArrayElements);

// a[0] = 2
// a[1] = 5
// a[2] = 
// a[3] = 9

[2, 5, undefined ,9].forEach(logArrayElements);

// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9


let xxx;
// undefined
[2, 5, xxx ,9].forEach(logArrayElements);

// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9



let a = ['a', 'b', 'c'];

a.forEach(function(element, index, array) {
    console.log("a[" + index + "] = " + element);
});

// a[0] = a
// a[1] = b
// a[2] = c




































Array Properties
Property    Description
constructor Returns the function that created the Array object's prototype
length  Sets or returns the number of elements in an array
prototype   Allows you to add properties and methods to an Array object
Array Methods
Method  Description
concat()    Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()    Copies array elements within the array, to and from specified positions
every() Checks if every element in an array pass a test
fill()  Fill the elements in an array with a static value
filter()    Creates a new array with every element in an array that pass a test
find()  Returns the value of the first element in an array that pass a test
findIndex() Returns the index of the first element in an array that pass a test
forEach()   Calls a function for each array element
indexOf()   Search the array for an element and returns its position
isArray()   Checks whether an object is an array
join()  Joins all elements of an array into a string
lastIndexOf()   Search the array for an element, starting at the end, and returns its position
map()   Creates a new array with the result of calling a function for each array element
pop()   Removes the last element of an array, and returns that element
push()  Adds new elements to the end of an array, and returns the new length
reduce()    Reduce the values of an array to a single value (going left-to-right)
reduceRight()   Reduce the values of an array to a single value (going right-to-left)
reverse()   Reverses the order of the elements in an array
shift() Removes the first element of an array, and returns that element
slice() Selects a part of an array, and returns the new array
some()  Checks if any of the elements in an array pass a test
sort()  Sorts the elements of an array
splice()    Adds/Removes elements from an array
toString()  Converts an array to a string, and returns the result
unshift()   Adds new elements to the beginning of an array, and returns the new length
valueOf()   Returns the primitive value of an array







https://www.bennadel.com/blog/1796-javascript-array-methods-unshift-shift-push-and-pop.htm






https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

