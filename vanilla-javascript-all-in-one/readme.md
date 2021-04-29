# vanilla-javascript-all-in-one


## just using vanilla JavaScript implements a mini lodash library

> denounce & throttle,

```sh

function debounce (callback, timer = 1000) {
    if(typeof cb === 'function') {
        let timerId = null;
        return function() {
            clearTimeout(timerId);
            id = setTimeout(() => {
                callback();
            }, timerId);
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
