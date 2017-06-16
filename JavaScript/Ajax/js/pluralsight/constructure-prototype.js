// https://app.pluralsight.com/player?course=structuring-javascript&author=dan-wahlin&name=structuring-javascript-module2&clip=2&mode=live


// constructor 构造函数


var Calculator = function(id) {
    this.selector = document.querySelector(id);
};


Calculator.prototype = {
    add: function(x, y){
        var val = x + y;
        this.selector.innerHTML = val;
        // maybe this caller bugs!
    }
};


var calc = new Calculator('#id');

calc.add(1,2);


Calculator.prototype = {
    var that = this;
    add: function(x, y){
        var val = x + y;
        that.selector.innerHTML = val;
        // maybe this caller bugs!
    }
};



// overwrite for libs, without change the sources codes



Calculator.prototype.add = function(x, y, z){
    var x = x ? x : 0,
        y = y ? y : 0,
        z = z ? z : 0,
        sum = x + y + z;
    console.log(`\nsum = \n${sum}`);
}


//  ES6 
Calculator.prototype.add = (x = 0, y = 0, z = 0) => {
    let sum = x + y + z;
    console.log(`\nsum = \n${sum}`);
}




