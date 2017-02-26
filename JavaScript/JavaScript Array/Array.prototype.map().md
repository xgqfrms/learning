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

