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



function ClosureDate(){
    var data = new Date(),
        closure = function(){
            return data.getMilliseconds();
        };
    console.log(`\ndata = \t`,data.getMilliseconds());
    return {
        jsonClosure: closure
    };
}

var closureDate = new ClosureDate();

closureDate.jsonClosure();


// comma separate ,,,

/*


js  ， comma

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator


https://stackoverflow.com/questions/9579546/when-is-the-comma-operator-useful

https://stackoverflow.com/questions/3561043/what-does-a-comma-do-in-javascript-expressions

逗号运算符评估其操作数（从左到右），并返回最后一个操作数的值。

逗号运算符评估每个操作数（从左到右），并返回最后一个操作数的值。




https://javascriptweblog.wordpress.com/2011/04/04/the-javascript-comma-operator/


http://www.jstips.co/en/javascript/comma-operaton-in-js/

https://gist.github.com/isaacs/357981



*/


// standard style
var a = "ape",
    b = "bat",
    c = "cat",
    d = "dog",
    e = "elf",
    f = "fly",
    g = "gnu",
    h = "hat",
    i = "ibu";

// comma-first style
var a = "ape"
    , b = "bat"
    , c = "cat"
    , d = "dog"
    , e = "elf"
    , f = "fly"
    , g = "gnu"
    , h = "hat"
    , i = "ibu"
    ;
