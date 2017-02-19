var test = "I'm a global variable";

function testScope() {
    test = "I'm a local variable";
    console.log(test);
}

console.log(test); 
// I'm a global variable

testScope(); 
// I'm a local variable (before call the function, the function will not be excuted)

console.log(test); 
// I'm a local variable (the global variable is reassigned)
