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



let today = new Date;
undefined
today.toLocaleDateString();
"2017/1/28"



{} + []
0
[] + {}
"[object Object]"
[] + []
""
{} + {}
"[object Object][object Object]"



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




















