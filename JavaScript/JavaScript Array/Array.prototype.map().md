# Array.prototype.map()


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map




string map ???



let numbers = [1, 5, 10, 15];
let roots = numbers.map(function(x) {
    return x * 2;
});
// roots is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

let numbers = [1, 4, 9];
// let roots = numbers.map(Math.sqrt);
let roots = numbers.map(function(x){
    return Math.sqrt(x);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]





let str = "abcdefg";
let strmap = str.map(function(x){
    return (x + ", ");
});




let str = "abcdefg";
// undefined
let strobj = ({}).valueOf.call("abcdefg");
// String {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", length: 7, [[PrimitiveValue]]: "abcdefg"}




## How to convert string to object in javascript?


https://www.codeproject.com/answers/1102986/how-to-convert-string-to-object-in-javascript#answer1


http://www.webdeveloper.com/forum/showthread.php?164607-converting-a-string-to-object-literal-object

http://www.2ality.com/2011/04/javascript-converting-any-value-to.html

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse




## How to convert string to Array in javascript?


http://stackoverflow.com/questions/13272406/javascript-string-to-array-conversion

http://stackoverflow.com/questions/2858121/convert-comma-separated-string-to-array



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


https://www.sitepoint.com/community/t/jquery-convert-string-to-javascript-array/6986


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from



const bar = "a,b,c,d,e,f";
Array.from(bar);

// ["a", ",", "b", ",", "c", ",", "d", ",", "e", ",", "f"]


const foo = "abcdefg";
Array.from(foo);

// ["a", "b", "c", "d", "e", "f", "g"]


Array.from()





Object.keys(Array.apply(null,{length:100}));




Array.apply(null,{length:10})

// [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]


Object.keys(Array.apply(null,{length:10}));

// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]





Object.keys(Array.apply(null,{length:10}));
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

Object.keys(Array.apply(0,{length:10}));
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

Object.keys(Array.apply(1,{length:10}));
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

Object.keys(Array.apply(Number,{length:10}));
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

Object.keys(Array.apply(true, {length:10}));
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

Object.keys(Array.apply({length:10}));
// []


Object.keys(Array.apply(NaN,{length:10}));
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]





Object.keys(Array.from({length:10}));
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


Array.from({length:10});
[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]


Array.from(Array(10).keys()) 
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

[...Array(10).keys()]
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


Number.prototype[Symbol.iterator] = function() {
    return {
        v: 0,
        e: this,
        next() {
            return {
                value: this.v++,
                done: this.v > this.e
            }
        }
    }
}

[...100]


递归

function reduce(prev, curr) {
    if (curr >= 100) {
        return prev
    }
    prev.push(curr)
    return reduce(prev, curr + 1)
}

reduce([], 0);



Object.keys(new Array(10))
// []
Object.keys(new Int8Array(10))
// ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]







(1<<24).toString(2)
"1000000000000000000000000"
(1<<24)
16777216
(1<<24).toString()
"16777216"
(1<<24).toString(1)


toString() radix参数必须介于2和36之间

(1<<24).toString(2)
// "1000000000000000000000000"
"1000000000000000000000000".length
// 25
(1<<24).toString(2).replace(/\d/g, '1111')
// "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111".length
// 100

"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111".split('')
// ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]

"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111".split('').map((x, i) => i);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]






["1", "1", "1"].map((x, i) => i);





https://www.zhihu.com/question/41493194


如何不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标？






var test = (
    function(a) {
        console.log(`a = ${a}`);
        console.log(`this.a = ${this.a}`);
        this.a = a;
        return function(b) {
            console.log(`b = ${b}` );
            console.log(`this.a = ${this.a}`);
            return this.a + b;
        }
    } (function(a, b) {
            console.log(`IIFE a = ${a}`);
            console.log(`IIFE b = ${b}`);
            return a;
        }(1, 2))
); 

// IIFE a = 1
// IIFE b = 2
// a = 1
// this.a = 1

console.log(test(4)); //输出什么 ?

test(4);
// b = 4
// this.a = 1
// 5




http://www.cnblogs.com/yugege/p/5292612.html

阿里前端笔试总结


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

继承与原型链


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype



JavaScript对于有基于类的语言经验的开发人员来说有点令人困惑 (如Java或C ++) ，因为它是动态的，并且本身不提供类实现.。(在ES2015/ES6中引入了class关键字，但是只是语法糖，JavaScript 仍然是基于原型的)。

当谈到继承时，Javascript 只有一种结构：对象。每个对象都有一个内部链接到另一个对象，称为它的原型 prototype。该原型对象有自己的原型，等等，直到达到一个以null为原型的对象。根据定义，null没有原型，并且作为这个原型链 prototype chain中的最终链接。


http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000




https://www.cnblogs.com/TomXu/archive/2012/01/05/2305453.html



https://blog.oyanglul.us/javascript/understand-prototype.html








