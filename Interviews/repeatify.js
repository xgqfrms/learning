/*
repeatify
*/

/*
Typed:
    str: String,
    num: Number,

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity

let big = Infinity;

*/

let str = '',
    num = 0,// [0, + ∞)
    repeatify = Symbol();

repeatify = (str, num) => {
    // let b1 = false , b2 = false;
     // let b1 = b2 = false;
    let b1 = true;
    let result = null;
    if(num < 0 || num === Infinity){
        b1 = false;
        result = "RangeError";
        // throw a RangeError.???
    }
    if(b1 === true ){
        str.repeat(num);
    }
    return result;
}










