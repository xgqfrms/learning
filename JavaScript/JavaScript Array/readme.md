# JavaScript Array.prototype.xxx()


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

console.log(a); // [1, 2]

``` 








## Array.prototype.pop()





















