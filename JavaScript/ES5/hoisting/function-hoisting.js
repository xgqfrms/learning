// function hoisting test

/**
 * 
 *
 * 
 */

var showState;

function showState() {
    //console.log("func = " + showState);
    console.log("func = showState");
}

showState = function () {
    //console.log("var = " + showState);
    console.log("var = showState");
};


showState();



/*

function showState() {
    //console.log("func = " + showState);
    console.log("func = showState");
}

var showState;

showState = function () {
    //console.log("var = " + showState);
    console.log("var = showState");
};

showState(); // var = showState

 */



