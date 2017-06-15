// https://app.pluralsight.com/player?course=structuring-javascript&author=dan-wahlin&name=structuring-javascript-module2&clip=2&mode=live


// constructor 构造函数


var Calculator = function(id) {
    this.selector = document.querrySelector(id);
};


Calculator.prototype = {
    add: function(x.y){
        var val = x + y;
        this.selector.innerHTML = val;
        // maybe this caller bugs!
    }
};


var calc = new Calculator('#id');

calc.add(1,2);


Calculator.prototype = {
    var that = this;
    add: function(x.y){
        var val = x + y;
        that.selector.innerHTML = val;
        // maybe this caller bugs!
    }
};








