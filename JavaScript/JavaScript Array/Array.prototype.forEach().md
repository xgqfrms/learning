# Array.prototype.forEach()  



http://www.webhek.com/javascript-loop-foreach-for-in-for-of



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach







语法 

array.forEach(callback[, thisArg])

array.forEach(callback(currentValue, index, array){
    //
}, this)

参数

callback
为数组中每个元素执行的函数，该函数接收三个参数：
    currentValue(当前值)
    数组中正在处理的当前元素。

    index(索引)
    数组中正在处理的当前元素的索引。

    array
    forEach()方法正在操作的数组。

    thisArg可选
    可选参数。当执行回调 函数时用作this的值(参考对象)。

返回值
    undefined.





function Counter() {
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add = function(array) {
    console.log(`before === ${this}`);
    console.log(this);
    array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
        console.log(this);
        console.log(`this.count === ${this.count}`);
        console.log(`this.sum === ${this.sum}`);
    }, this);
    console.log(`after === ${this}`);
    console.log(this);
};

var obj = new Counter();
obj.add([1, 3, 5, 7]);

obj.count; 
// 4 === (1+1+1+1)
obj.sum;
// 16 === (1+3+5+7)




// before === [object Object]
// Counter {sum: 0, count: 0}

// Counter {sum: 1, count: 1}
// this.count === 1
// this.sum === 1
// Counter {sum: 4, count: 2}
// this.count === 2
// this.sum === 4
// Counter {sum: 9, count: 3}
// this.count === 3
// this.sum === 9
// Counter {sum: 16, count: 4}
// this.count === 4
// this.sum === 16

// after === [object Object]
// Counter {sum: 16, count: 4}






