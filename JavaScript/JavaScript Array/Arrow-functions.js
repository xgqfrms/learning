/**
 * Title: ES6 Arrow functions
 * Author: xgqfrms
 * Copyright: xgqfrms.xyz 2017-2050
 * Create_Date: 2017.05.17
 * Reference_Links: {
 *     link1: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
 * }
 */


// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions





let pr = (p1) => console.log(`%c (param1, param2, …, paramN) => expression`, `color: red; font-size: 16px;`);

// or (\转义字符)

let pr = (p1) => console.log(`%c \(param1, param2, …, paramN\) => expression`, `color: red; font-size: 16px;`);


let pr = (p1) => {
    console.log(`%c \(param1, param2, …, paramN\) => { statements }`, `color: red; font-size: 16px;`);
}

// 如果只有一个 expression / statements ，函数的 return 是可选的: 
// (param1, param2, …, paramN) => expression === (param1, param2, …, paramN) => { return expression; } 
// (param1, param2, …, paramN) => { statements } === (param1, param2, …, paramN) => { return statements; } 

let pr = (p1) => return console.log(`%c \(param1, param2, …, paramN\) => expression`, `color: green; font-size: 16px;`);

let pr = (p1) => {
    return console.log(`%c \(param1, param2, …, paramN\) => { statements }`, `color: green; font-size: 16px;`);
}




let pr = p1 => console.log(`%c singleParam => { statements }`, `color: blue; font-size: 16px;`);


let pr = p1 => {
    console.log(`%c singleParam => { statements }`, `color: blue; font-size: 16px;`);
}


// 如果只有一个参数，参数的(圆括号)是可选的: 
// (singleParam) => { statements } === singleParam => { statements }

let pr = p1 => {
    return console.log(`%c \(param1, param2, …, paramN\) => expression`, `color:blue; font-size: 16px;`);
}






// 无参数 或者 有多参数的箭头函数, 必须使用使用(圆括号) 或者 _下划线 :

() => { statements } 

_ => { statements }



let af = _ => {
    console.log(`%c _ => {}`, `color: red; font-size: 16px;`);
}

af;
// _ => {console.log(`%c _ => {}`, `color: red; font-size: 16px;`)}

af();
// _ => {}




























