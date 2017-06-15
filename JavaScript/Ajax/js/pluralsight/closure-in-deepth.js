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


https://stackoverflow.com/a/44572636/5934465


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

// https://gist.github.com/xgqfrms-GitHub/26262fe2e54cef341d94041a8fabd716



// JSON.stringify style

var o = {
        a : "ape",
        b : "bat",
        c : "cat",
        d : "dog",
        e : "elf",
        f : "fly",
        g : "gnu",
        h : "hat",
        i : "ibu"
    },
    a = [
        [ "ape", "bat" ],
        [ "cat", "dog" ],
        [ "elf", "fly" ],
        [ "gnu", "hat" ],
        [ "ibu" ]
    ];


// JSON.stringify style


//附录：对 return语句的影响。 
//它不会破坏



return [ 
    1
    , 2
    , 3
];
// returns [1,2,3]

return { 
    a : "ape"
    , b : "bat"
};
// returns {a:"ape",b:"bat"}

// even just separating two values by commas is fine,
// though a bit silly
return 1
     , 2
     , 3
     , 4 // returns the last value, 4

// this, however is wrong:
return
    1
  , 2 // returns undefined, because of semicolon-insertion.

// so is this. otb == fail.
return
  { a : "ape"
  , b : "bat"
  } // returns undefined,
    // then creates a block with two named statements.

// this is ok:
return ( 1
       , 2
       ) // returns 2

// so is this:
return (
  { a : "ape"
  , b : "bat"
  }
) // returns {a:"ape",b:"bat"}


// Addendum 2: A function call

doSomething( aPrettyLongVariableName
           , "A string, which has some useful information"
           , "If you put these all together, it'd be too long"
           , { a: "is for antelope", b: "is for bat" }
           , 42
           )

// Addendum 3: More realistic error in standard style:

// leaks FIVE globals!
var a = "ape eat banana",
    b = "bat, allowed to fly",
    c = "cat toy",
    d = "dog chasing the mailman,"
    e = "elf lord",
    f = "fly through the air",
    g = "gnu is not unix",
    h = "hat goes on your head",
    i = "ibu isn't a cow";

// Error: Can't call method 'forEach' of undefined.
// not passing in undefined as an argument!??
mergeLists([ apple, [ penelope, granger ] ],
           [ fun ],
           [ 1, 2, 3, 4, 5, 6, 7, 8 ]
           [ "mary's store has many pies, and cookies, and eggs," ]
           [ function() { doSomething() } ]);




