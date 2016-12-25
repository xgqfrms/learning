//  Floating point numbers 

/*
All numbers in JavaScript are stored as 64-bits Floating point numbers (Floats). 

所有的编程语言，包括JavaScript，都有精确的浮点值的困难：

*/

// 0.3 error ???

var x = 0.1,
    y = 0.2,
    z = x + y;
// 0.30000000000000004

var x = 0.1 + 1,
    y = 0.2 + 1,
    z = x + y;
// partly OK !


// multiply and divide:

var x = 0.1,
    y = 0.2,
    z = (x * 10 + y * 10) / 10;
// 0.3



/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt  

http://www.ecma-international.org/ecma-262/6.0/#sec-parseint-string-radix

parseInt (string , radix) 


parseInt(z, 10);

*/







