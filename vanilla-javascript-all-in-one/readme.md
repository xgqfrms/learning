# vanilla-javascript-all-in-one


## just using vanilla JavaScript implements a mini lodash library

> denounce & throttle,

```js

"use strict";

/**
 * 
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2021-04-29
 * 
 * @description debounce & throttle
 * @augments 
 * @example 
 * @link https://www.cnblogs.com/xgqfrms/p/13849487.html
 * @link https://www.cnblogs.com/xgqfrms/p/13849482.html
 * 
 */

// const log = console.log;

function debounce (callback, timer = 1000) {
    if(typeof cb === 'function') {
        let timerId = null;
        return function() {
            clearTimeout(timerId);
            id = setTimeout(() => {
                callback();
            }, timer);
        };
    } else {
        throw new Error('请传入 function 作为回调函数!');
    }
}

function throttle (callback, timer = 1000) {
    if(typeof cb === 'function') {
        let timerId = null;
        let flag = true;
        return function() {
            if(!timerId && flag) {
                timerId = setTimeout(() => {
                    callback();
                    clearTimeout(timerId);
                    // flag = true;
                }, timer);
            } else {
                flag = false;
            }
        };
    } else {
        throw new Error('请传入 function 作为回调函数!');
    }
}

const miniLodash = {
    debounce,
    throttle,
}

export {
    debounce,
    throttle,
};

export default miniLodash;



```
