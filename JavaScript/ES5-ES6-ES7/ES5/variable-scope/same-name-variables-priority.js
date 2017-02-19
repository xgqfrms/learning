var test = "I'm a global variable";

function testScope() {
    var test = "I'm a local variable";
    console.log(test);
}

testScope();
// I'm a local variable

console.log(test);
// I'm a global variable


