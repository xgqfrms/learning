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

equal to 

```codes
var state;

console.log(state);
// output: undefined

state = "ready";

``` 





## function declaration and function expression  




