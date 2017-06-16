// prototype namespace


var X_NS = X_NS || {};


/*

var xxx = xxx | {};

xxx;
// 0;

var xxx = xxx || {};

xxx;
// Object {}


*/



X_NS.Calculator = function(id) {
    this.selector = document.querySelector(id);
};


// VM1199:1 Uncaught TypeError: Cannot set property 'prototype' of undefined


X_NS.Calculator.prototype = {
    add: function(x, y){
        var val = x + y;
        this.selector.innerHTML = val;
        // maybe this caller bugs!
    }
};


var calc = new X_NS.Calculator('#id');

calc.add(1,2);


X_NS.Calculator.prototype = {
    var that = this;
    add: function(x, y){
        var val = x + y;
        that.selector.innerHTML = val;
        // maybe this caller bugs!
    }
};























// overwrite for libs, without change the sources codes



X_NS.Calculator.prototype.add = function(x, y, z){
    var x = x ? x : 0,
        y = y ? y : 0,
        z = z ? z : 0,
        sum = x + y + z;
    console.log(`\nsum = \n${sum}`);
}


//  ES6 
X_NS.Calculator.prototype.add = (x = 0, y = 0, z = 0) => {
    let sum = x + y + z;
    console.log(`\nsum = \n${sum}`);
}























