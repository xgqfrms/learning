# Array Types  



For every type T, a type representing arrays of a fixed size of type T can be created:

TArray = T.Array(n);
An array type T can be instantiated to construct a typed array:

x = TArray([1, 1, 3, 5, 8, 13, 21, 34]);
The initializer must have the length less than the length of an array. The initializer can be left out:

x = TArray();
[[Initialize]] method for the array’s element type is used to initialize the array elements not specified by the initializer.

Function T.array(n) is a shortcut for T.Array(n)(), so the following

x = T.array(10)
creates an array of 10 Ts. T.array is also overloaded to work from array-like initializer, so that:

x = Point.array([{x : 0, y : 0}, {x : 1, y : 1}]);
creates a pair of Points (a 2-element array of Points). Its type is Point.Array(2).

All arrays of the same element type share the same prototype, accessible by T.Array.prototype.

Multidimensional arrays can be constructed by applying dim to array types:

const TT = T.Array(2).Array(2);
var tt = TT([[1,2],[3,4]])
The prototype relationship still applies, so that

 tt.__proto__ === T.Array.Array.prototype

