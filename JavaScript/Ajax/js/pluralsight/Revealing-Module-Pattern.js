// Revealing-Module-Pattern.js



/*


cleaner expose public members

更清洁的公开会员


singleton 单例模式

*/




/*

var Calculator = function(id) {
    var selector = document.querySelector(id);
    console.log(`selector = \n ${selector}`);
    // private var
    var private_func = function(){
        // private function
    };
    return {
        // expose public members
        add: function(x, y){
            var val = x + y;
            selector.innerHTML = val;
            // maybe this caller bugs!
        }
    };
};


*/


var Calculator = function(id) {
    var selector = document.querySelector(id);
    console.log(`selector = \n ${selector}`);
    // private var
    var private_func = function(){
        // private function
    };
    var Add = function(x, y){
        var val = x + y;
        selector.innerHTML = val;
        // maybe this caller bugs!
    }
    return {
        // expose public members
        add: Add
    };
}();





/*

IIFE === function(){}();

IIFE === (function(){})();

IIFE === (function(){}());

*/



var calculator = function(id) {
    console.log(`\nselector = ${id}`);
    // private var
    var Add = function(x, y){
        var sum = x + y;
        console.log(`sum = ${sum}\n `);
        // maybe this caller bugs!
    };
    // private function
    return {
        // expose public members
        add: Add
    };
}(`#id`);


calculator.add(3, 4);

// sum = 7






var calculator = (function(id) {
    console.log(`\nselector = ${id}`);
    // private var
    var Add = function(x, y){
        var sum = x + y;
        console.log(`sum = ${sum}\n `);
        // maybe this caller bugs!
    };
    // private function
    return {
        // expose public members
        add: Add
    };
})(`#id`);


calculator.add(3, 4);

// sum = 7



const calculator = (id) => {
    console.log(`\nselector = ${id}`);
    // private var
    let Add = (x, y) => {
        let sum = x + y;
        console.log(`sum = ${sum}\n `);
        // maybe this caller bugs!
    };
    // private function
    return {
        // expose public members
        addAlias: Add
    };
}(`#id`);


// sum = 7

window.onload = ()=>{
    // no needs new Object , singleton 单例模式
    calculator.add(3, 4);
}




var calculator = (function(id) {
    console.log(`\nselector = ${id}`);
    // private var
    var Add = function(x, y){
        var sum = x + y;
        console.log(`sum = ${sum}\n `);
        // maybe this caller bugs!
    };
    // private function
    return {
        // expose public members
        add: Add
    };
}(`#id`));





