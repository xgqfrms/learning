// Revealing Prototype Pattern



/*


Revealing Prototype Pattern : Revealing Prototype Structure


揭示原型模式：揭示原型结构



*/



var Calculator = function(id) {
    this.selector = document.querySelector(id);
};



Calculator.prototype = () => {
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














