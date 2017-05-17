https://gist.github.com/xgqfrms-GitHub/f39cb465a0033b4c9b146a806256d0cc


# Array vs Object

![image](https://cloud.githubusercontent.com/assets/18028768/26140940/069f06b0-3b0c-11e7-99b4-bf365a740080.png)


```js

    var a = {
        "Hydrogen": "x",
        "Helium": "x",
        "Lithium": "x",
        "Beryl_lium": "x"
    };
    a;
    /*
    Object {
        Hydrogen: "x", 
        Helium: "x", 
        Lithium: "x", 
        Beryl_lium: "x"
    }
        Beryl_lium: "x"
        Helium: "x"
        Hydrogen: "x"
        Lithium: "x"
    __proto__: Object
    var b = [
        "Hydrogen",
        "Helium",
        "Lithium",
        "Beryl_lium"
    ];
    */
    b;
    /*
    (4) ["Hydrogen", "Helium", "Lithium", "Beryl_lium"]
        0: "Hydrogen"
        1: "Helium"
        2: "Lithium"
        3: "Beryl_lium"
        length: 4
    __proto__: Array(0)
    */
    typeof(a);
    // "object"

    typeof(b);
    // "object"
    a instanceof Array;
    //false
    a instanceof Object;
    //true

    b instanceof Array;
    //true
    b instanceof Object;
    //true

```


# `Array.isArray`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

> Array.isArray() 用于确定传递的值是否是一个 Array。


```js
Array.isArray([1, 2, 3]);  
// true
Array.isArray({foo: 123}); 
// false
Array.isArray("foobar");   
// false
Array.isArray(undefined);  
// false
```



# stackoverflow.

https://stackoverflow.com/questions/8834126/how-to-efficiently-check-if-variable-is-array-or-object-in-nodejs-v8


```js
isArray()

isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};
console.log(isArray(        )); // false
console.log(isArray(    null)); // false
console.log(isArray(    true)); // false
console.log(isArray(       1)); // false
console.log(isArray(   'str')); // false
console.log(isArray(      {})); // false
console.log(isArray(new Date)); // false
console.log(isArray(      [])); // true
isObject()

isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};
console.log(isObject(        )); // false
console.log(isObject(    null)); // false
console.log(isObject(    true)); // false
console.log(isObject(       1)); // false
console.log(isObject(   'str')); // false
console.log(isObject(      [])); // false
console.log(isObject(new Date)); // false
console.log(isObject(      {})); // true
```

# Check if object is array?

https://stackoverflow.com/questions/4775722/check-if-object-is-array

```js

// The method given in the ECMAScript standard to find the class of Object is to use the toString method from Object.prototype.

if( Object.prototype.toString.call( someVar ) === '[object Array]' ) {
    alert( 'Array!' );
}

// Or you could use typeof to test if it is a String:

if( typeof someVar === 'string' ) {
    someVar = [ someVar ];
}

// Or if you're not concerned about performance, you could just do a concat to a new empty Array.

someVar = [].concat( someVar );

```




# Airbnb JavaScript Style Guide

https://github.com/airbnb/javascript/blob/master/README.md#strings--line-length

https://gist.github.com/xgqfrms-GitHub/b95f1824f2ea5a2e28b09dff6fd191bc



# 前端异常解决方案
https://github.com/ouvens/ouvens.github.io/issues/3

http://jixianqianduan.com/frontend-weboptimize/2017/05/04/front-end-react-error-capture.html

http://jixianqianduan.com/frontend-javascript/2016/12/11/future-front-end.html







