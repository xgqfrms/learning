# javascript variable scope & hoisting  

https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/


## lexical (static) scope  
http://en.wikipedia.org/wiki/Lexical_scoping#Lexical_scoping  



+ All declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.

+ Functions are hoisted first, and then variables.

+ Function declarations have priority over variable declarations, but not over variable assignments.




## variable-scope  

If a local variable is assigned without first being declared with the var keyword, it becomes a global variable. 

+ global scope (Any variable declared outside of a function)  
+ function scope (local scope)  
+ nested scope (function inside another function) 



## same name variables priority



## undeclared same name variable overwrite

undeclared-same-name-local-variable-overwrite-global-variable  

如果分配值了给局部变量而没有使用var关键字先声明，它将成为一个全局变量。

## hoisting  



## strict mode  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode  


注意 - 在严格模式下，如果您在未首先声明变量的情况下将值分配给变量，那么这是一个错误。




##  ECMAScript 6 will support block level scopes via the let keyword.


+ block level scopes 


