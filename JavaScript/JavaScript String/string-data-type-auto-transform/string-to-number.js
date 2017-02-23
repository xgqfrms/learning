// string to number


"5" + 3;
// "53"
3 + "5";
// "35"
"5" - 3;
// 2
3 - "5";
// -2
"5" - "3";
// 2
"5" + "3";
// "53"



"5" + []
// "5"
"5" - []
// 5

[] + "5"
// "5"
[] - "5"
// -5


"5" + {}
// "5[object Object]"
"5" - {}
// NaN

{} + "5"
// 5
{} - "5"
// -5

{key:"value"} + "5"
// 5
{key:"value"} - "5"
// -5


/*

Object !== JSON  

*/

{"key": "value"} - "5"
// Uncaught SyntaxError: Unexpected token :
























