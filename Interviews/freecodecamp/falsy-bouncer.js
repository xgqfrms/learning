/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

https://www.freecodecamp.com/challenges/falsy-bouncer



var x = new Boolean("false");
if (x) {
  // . . . 这里的代码仍会被执行
}


new Boolean([value])
// Boolean {[[PrimitiveValue]]: false}
​​​​​​​// Boolean {[[PrimitiveValue]]: true}
// return a boolean object which value is (true/false).

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.



*/


function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    function xfilter(value){
        return Boolean(value);
    }

    var filtered = arr.filter(xfilter);
    // filtered is [12, 130, 44]
    return filtered;
}

bouncer([7, "ate", "", false, 9]);
