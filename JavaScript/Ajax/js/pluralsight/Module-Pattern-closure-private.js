// Module Pattern closure & private




/*

var Calculator = function(id) {
    var private_var;
    //private var
    var private_func = function(){
        // private function
    };
    return {
        // public members
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
    return {
        // expose public members
        add: function(x, y){
            var val = x + y;
            selector.innerHTML = val;
            // maybe this caller bugs!
        }
    };
};


var test = new Calculator(`#id`);

test.add(1, 2);



// private var / func , because it isn't returned;





// ??? dd app

const DOM = {
    add: function(x, y){
        console.log(`add = ${x+y}`);
    },
    func: () => {
        console.log(`func`);
    },
    IIFE_func: (() => {
        return console.log(`IIFE_func`);
    })()
};


DOM.add(1, 2);

DOM.func();

DOM.IIFE_func;
// undefined






















