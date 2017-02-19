// function declaration and function expression


/*
function showState() {};
// function declaration

var showState = function() {};
// function expression

*/


showState();
// output: Ready

console.log("function declaration");

function showState() {
    console.log("Ready");
}

console.log("function expression");

var showState = function() {
    console.log("Idle");
};

showState();

/*
https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
函数声明完全提升。
这意味着整个函数的主体被移动到顶部。
这允许您在声明之前调用函数：
*/

/*
 
function showState() {
    console.log("Ready");
}
// moved to the top (function declaration)

var showState;
// moved to the top (variable declaration)

showState();

console.log("function declaration");

console.log("function expression");

showState = function() {
    console.log("Idle");
};
// left in place (variable assignment)

showState();

 */



// 变量赋值 (overwrite) > function declaration

var showState = function() {
    console.log("Idle");
};

function showState() {
    console.log("Ready");
} 

showState();
// output: Idle



/*
var > function  ???

变量赋值 (overwrite) > function declaration


 */
