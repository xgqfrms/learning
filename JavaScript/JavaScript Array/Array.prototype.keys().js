// Array.prototype.keys()


// keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。

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










