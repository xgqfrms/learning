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






## Array.prototype.unshift()






## Array.prototype.splice()



















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








