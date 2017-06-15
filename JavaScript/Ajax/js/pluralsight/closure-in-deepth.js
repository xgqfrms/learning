// pluralsight

/*

https://app.pluralsight.com/player?course=structuring-javascrip

*/

// non-closure function

function nonClosureDate(){
    var data = new Date();
    console.log(`\ndata = \t`,data.getMilliseconds());
    return data.getMilliseconds();
}

nonClosureDate();

// ES6

const nonClosureDate = () => {
    let data = new Date();
    console.log(`\ndata = \t`,data.getMilliseconds());
    return data.getMilliseconds();
}

nonClosureDate();









// closure function

function ClosureDate(){
    var data = new Date();
    console.log(`\ndata = \t`,data.getMilliseconds());
    return function(){
        return data.getMilliseconds();
    };
}

ClosureDate()();


// ES6

const ClosureDate = () => {
    let data = new Date();
    console.log(`\ndata = \t`,data.getMilliseconds());
    return () => data.getMilliseconds();
}

ClosureDate()();








function ClosureDate(){
    var data = new Date();
    console.log(`\ndata = \t`,data.getMilliseconds());
    var closure = function(){
        return data.getMilliseconds();
    };
    return {
        jsonClosure: closure
    };
}

var closureDate = new ClosureDate();

closureDate.jsonClosure();



// local var function, function call error, without return!
// VM2163:1 Uncaught TypeError: closureDate.closure is not a function


/*

function ClosureDate(){
    var data = new Date();
    console.log(`\ndata = \t`,data.getMilliseconds());
    var closure = function(){
        return data.getMilliseconds();
    };
}

var closureDate = new ClosureDate();

closureDate.closure();


*/







