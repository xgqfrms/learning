// Proxies


/*
https://developers.google.com/web/updates/tags/es2015

https://developers.google.com/web/updates/tags/javascript

https://developers.google.com/web/updates/tags/es6

*/



// Proxying a normal object


var target = {};

var handler = {
    get(reciver, name=`xgqfrms`){
        return `hello, ${name}!`;
    }
};


// var p = new Proxy(target={name: "xyz"}, handler);
var p = new Proxy(target={name: "xyz"}, handler);


p;

// Proxy {name: "xyz"}

p.world;

// "hello, world!"



















