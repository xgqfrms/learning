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
    var selector = document.querrySelector(id);
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



// private var / func , because it isn't returned;





??? dd app


https://app.pluralsight.com/player?course=structuring-javascript&author=dan-wahlin&name=structuring-javascript-module3&clip=3&mode=live




















