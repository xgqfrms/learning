/**
 * copyright 2017 xgqfrms
 * 2017.05.16
 * fetch-api
 */



/*

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions



*/



let x1 = (param1, param2, ...) => {
    console.log(`%c {statements}`, `color: red;`);
}
// Uncaught SyntaxError: Unexpected token )

x1 = (param1, ..., paramn) => {
    console.log(`%c {statements}`, `color: red;`);
}
// Uncaught SyntaxError: Unexpected token ,




x1 = (param1, ... , paramn) => {
    console.log(`%c {statements}`, `color: red;`);
}
// Uncaught SyntaxError: Unexpected token ,



x1 = (param1, ...rest , paramn) => {
    console.log(`%c {statements}`, `color: red;`);
}
// Uncaught SyntaxError: Rest parameter must be last formal parameter


x1 = (param1, paramn, ...rest ) => {
    console.log(`%c {statements}`, `color: red;`);
}



x1 = (param1, paramn) => {
    console.log(`%c {statements}`, `color: red;`);
}

x1();

// {statements}

