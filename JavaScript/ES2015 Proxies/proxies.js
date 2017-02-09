// Proxies


/*
https://developers.google.com/web/updates/tags/es2015



*/



// Proxying a normal object


var target = {};

var handler = {
    get(reciver, name=`xgqfrms`){
        return `hello, ${name}!`;
    }
};


var p = new Proxy(target, handler);

p.world























