// Revealing Prototype Pattern



/*


Revealing Prototype Pattern : Revealing Prototype Structure


揭示原型模式：揭示原型结构



*/



var Calculator = function(id) {
    // states
    this.selector = document.querySelector(id);
};



Calculator.prototype = () => {
    // private members
    var add = function(x, y){
        var val = x + y;
        this.selector.innerHTML = val;
        // maybe this caller bugs!
    };
    return {
        // public members
        // Revealing Prototype Pattern
        add: add
    };
}();



/*

https://app.pluralsight.com/player?course=structuring-javascript&author=dan-wahlin&name=structuring-javascript-module5&clip=3&mode=live



this, changes context a function call another function


这个，改变上下文 一个函数调用另一个函数

*/







