// function hoisting test

/**
 * 
 *
 * 
 */

function showState() {
    //console.log("func = " + showState);
    console.log("func = showState");
}

var showState;

showState = function () {
    //console.log("var = " + showState);
    console.log("var = showState");
};

showState();




function showState() {
    console.log("func = " + showState);
};

var showState;

showState();

showState = 1;

console.log("showState0 = " + showState);





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



