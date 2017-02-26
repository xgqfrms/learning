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





























