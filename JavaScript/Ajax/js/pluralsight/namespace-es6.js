// namespace-es6  & ..rest & ...spread




/*

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters

*/



var ns = ns || {};

ns;
// Object {}

window.ns;
// Object {}


const newNS = newNS || {};


// Object ??? 解构赋值

/*

let obj = {a:1, b:2, c:3};

const {...rest} = {a:1, b:2, c:3};

*/



const abc = (a, b, ...rest) => {
    console.log(a, b, rest);
};

abc(1,2,3,4,5);
// 1 2 (3) [3, 4, 5]

abc(1,2,3);
// 1 2 [3]

abc(1,2);
// 1 2 []

abc(1);
// 1 undefined []

abc();
// undefined undefined []



/* 

...rest can't set default value 


const xyz = (a = `A`, b = `B`, ...rest = `ABC`) => {
    console.log(a, b, rest);
};

// ERROR


*/

const xyz = (a = `A`, b = `B`, ...rest) => {
    console.log(a, b, rest);
};

xyz();
// A B []







// Array OK 解构赋值

const [...spread] = [1, 3, 5, 7, 9];

spread;
// (5) [1, 3, 5, 7, 9]

window.spread;

// undefined






const [x, y, ...spread] = [1, 3, 5, 7, 9];


const [x, ...spread, y] = [1, 3, 5, 7, 9];


const [...spread, x, y] = [1, 3, 5, 7, 9];





