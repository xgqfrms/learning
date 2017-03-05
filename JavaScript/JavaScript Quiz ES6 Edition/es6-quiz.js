// Ready? Here we go.


(function(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
})(1);
// view rawgistfile1.js hosted with ❤ by GitHub
/*
[2, 1, 1]
[2, undefined, 1]
[2, 1, 2]
[2, undefined, 2]
*/

(function() {
    return [
        (() => this.x).bind({ x: 'inner' })(),
        (() => this.x)()
    ]
}).call({ x: 'outer' });
// view rawgistfile1.js hosted with ❤ by GitHub
/*
['inner', 'outer']
['outer', 'outer']
[undefined, undefined]
Error
*/

let x, { x: y = 1 } = { x }; y;
// view rawtest.js hosted with ❤ by GitHub
/*
undefined
1
{ x: 1 }
Error
*/

(function() {
  let f = this ? class g { } : class h { };
  return [
    typeof f,
    typeof h
  ];
})();
// view rawtest.js hosted with ❤ by GitHub
/*
["function", "undefined"]
["function", "function"]
["undefined", "undefined"]
Error
*/

(typeof (new (class { class () {} })))
// view rawtest.js hosted with ❤ by GitHub
/*
"function"
"object"
"undefined"
Error

*/
typeof (new (class F extends (String, Array) { })).substring
// view rawtest.js hosted with ❤ by GitHub
/*
"function"
"object"
"undefined"
Error
*/

[...[...'...']].length
// view rawtest.js hosted with ❤ by GitHub
/*
1
3
6
Error
*/

typeof (function* f() { yield f })().next().next()
// view rawtest.js hosted with ❤ by GitHub
/*
"function"
"generator"
"object"
Error
*/

typeof (new class f() { [f]() { }, f: { } })[`${f}`];
// view rawtest.js hosted with ❤ by GitHub
/*
"function"
"undefined"
"object"
Error
*/

typeof `${{Object}}`.prototype
// view rawtest.js hosted with ❤ by GitHub
/*
"function"
"undefined"
"object"
Error
*/

((...x, xs)=>x)(1,2,3);
// view rawtest.js hosted with ❤ by GitHub
/*
1
3
[1,2,3]
Error
*/

let arr = [ ];
for (let { x = 2, y } of [{ x: 1 }, 2, { y }]) { 
    arr.push(x, y);
}
arr;
// view rawtest.js hosted with ❤ by GitHub
/*
[2, { x: 1 }, 2, 2, 2, { y }]
[{ x: 1 }, 2, { y }]
[1, undefined, 2, undefined, 2, undefined]
Error
*/

(function() {
    if (false) {
        let f = { g() => 1 };
    }
    return typeof f;
})();
// view rawtest.js hosted with ❤ by GitHub
/*

"function"
"undefined"
"object"
Error

*/

/*
Let's see the score!
You've got 0 answers wrong.
Flawless victory.
*/


// answers
/*

01. [2, 1, 1]
02. ['outer', 'outer']
03. 1
04. ["function", "undefined"]
05. "object"
06. "undefined"
07. 3
08. Error
09. Error
10. "undefined"
11. Error
12. Error
13. Error
...

*/


