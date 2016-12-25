function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}
theFunction("John", "fireman");
theFunction.apply(this, ["Susan", "school teacher"]);
theFunction.call(this, "Claude", "mathematician");
theFunction.apply(this, ...["Matthew", "physicist"]); 
// used with the ES6 spread operator

// Output: 

// My name is John and I am a fireman.
// My name is Susan and I am a school teacher.
// My name is Claude and I am a mathematician.
// My name is Matthew and I am a physicist.


function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);


/*

Both methods take an owner object as the first argument. The only difference is that call() takes the function arguments separately, and apply() takes the function arguments in an array.

In JavaScript strict mode, the first argument becomes the value of this in the invoked function, even if the argument is not an object.

In "non-strict" mode, if the value of the first argument is null or undefined, it is replaced with the global object.

 */




var obj = {
    num: 2,
    f: function(arg) {
        console.log(this.num + arg);
    }
}

var add = function(a) {
    return this.num + a;
}

var f = function(s) {
    return this.num + s;
}

add.call(obj, 3);


f.call(obj, ", function arguments");


