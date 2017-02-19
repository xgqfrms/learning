// Function.prototype.bind()  


/*

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind  

https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/

http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/


*/

/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


 */

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects  

 */


// https://www.youtube.com/watch?v=c0mLRpw-9rI 





var obj = {
    num: 1
}

var add = function(a, b, c) {
    return this.num + a + b + c;
}


var xcall = add.call(obj, 1, 2, 3);

var xapply = add.apply(obj, [1, 2, 3]);

var xbind = add.bind(obj);

xbind(1, 2, 3)

// console.dir(bind);

console.log(xcall);
console.log(xapply);
console.log(xbind(1, 2, 3));



//  https://www.youtube.com/channel/UCbGZKLIHpox2l0whz6_RYyg  
//  https://www.youtube.com/watch?v=s6SH72uAn3Q  