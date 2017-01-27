# Undefined, Null, Boolean, String, Symbol, Number, and Object  


http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf


Undefined, Null, Boolean, String, Symbol, Number, and Object


NaN:  
number value that is an IEEE 754+2008 “Not a Number” value



https://www.destroyallsoftware.com/talks/wat



##  ??? + ??? 


+ === plus 加/ concat 连续


联系,联接 contact






{} + []
0
[] + {}
"[object Object]"
[] + []
""
{} + {}
"[object Object][object Object]"




{} === 0/object

[] === ""

undefined === NaN/undefined

??? function

??? typeof 









undefined + undefined
NaN
undefined + 0
NaN
undefined + null
NaN
undefined + {}
"undefined[object Object]"
undefined + []
"undefined"
undefined + ""
"undefined"
undefined + Symbol
"undefinedfunction Symbol() { [native code] }"
0 + undefined
NaN
null + undefined
NaN
{} + undefined
NaN
[] + undefined
"undefined"
Symbol + undefined
"function Symbol() { [native code] }undefined"



Symbol() + undefined
VM717:1 Uncaught TypeError: Cannot convert a Symbol value to a number
    at <anonymous>:1:10
(anonymous) @ VM717:1
undefined + Symbol()
VM721:1 Uncaught TypeError: Cannot convert a Symbol value to a number
    at <anonymous>:1:11


0 + ""
"0"
0 + []
"0"
0 + {}
"0[object Object]"
"" + 0
"0"
"" + []
""
"" + {}
"[object Object]"

































