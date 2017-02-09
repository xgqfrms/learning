// ES6 Proxies


/*
https://developers.google.com/web/updates/tags/es2015

https://developers.google.com/web/updates/tags/javascript

https://developers.google.com/web/updates/tags/es6

*/


let target = {};

let handler = {
    get(reciver, name=`xgqfrms`){
        return `hello, ${name}!`;
    }
};


// var p = new Proxy(target={name: "xyz"}, handler);
let p = new Proxy(target={name: "xyz"}, handler);


p;

// 

p.world;

// 





let target = {};

let handler = {
    get(reciver, name=`xgqfrms`) => {
        return `hello, ${name}!`;
    }
};


// var p = new Proxy(target={name: "xyz"}, handler);
let p = new Proxy(target={name: "xyz"}, handler);





// let reciver = {};

let handler = {
    get: (reciver, name=`xgqfrms`) => {
        return `hello, ${name}!`;
    }
};

typeof(handler.get.reciver);

// "undefined"



let get = (reciver, name=`xgqfrms`) => {
    return `hello, ${name}!`;
}
