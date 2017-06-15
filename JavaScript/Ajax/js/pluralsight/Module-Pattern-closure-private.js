// Module Pattern closure & private




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









var Calculator = function(id) {
    this.selector = document.querrySelector(id);
};




X_NS.Calculator.prototype = {
    var that = this;
    add: function(x, y){
        var val = x + y;
        that.selector.innerHTML = val;
        // maybe this caller bugs!
    }
};































