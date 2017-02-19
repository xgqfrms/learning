# function declaration and function expression  


https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/  

https://repl.it/Euze/7 

https://twitter.com/intent/tweet?text=Check+out+my+code+on+Repl.it%3A+&url=https%3A%2F%2Frepl.it%2FEuze%2F7&related=replit



函数声明完全提升。  

这意味着整个函数的主体被移动到顶部。  

这允许您在声明之前调用函数：  



只有函数声明被提升，但函数表达式不提升。  

> 函数声明优先于变量声明。 ???  


# 变量声明 > 函数声明, 变量赋值 (overwrite) > function declaration



# hoisting  

https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/  


无论哪个变量在特定范围内被声明，所有变量声明都被移动到其范围的顶部（全局或局部）。  

变量声明被提升到作用域的顶部。  


Note that hoisting only moves the declaration. Any assignments are left in place.  



注意，提升只移动声明。任何分配值都留在原地。


```codes

console.log(state);
// output: undefined

var state = "ready";

``` 

> equal to 

```codes
var state;

console.log(state);
// output: undefined

state = "ready";

``` 

