// Node style module writ in ES6 syntax:
exports default foo = () => console.log(‘hi’)

// Unfortunately “literally” transpiles to this:
exports.default = function foo() { 
  return console.log(‘hi’) 
}

// Which means this will fail:
var foo = require(‘./foo’)
foo() // object is not a function!

// But this will work:
var foo = require(‘./foo’).default
foo() // outputs 'hi'

// There is a fix!
//
// If we compile with 6to5 we get what we expect!
module.exports = function foo() {
  return console.log(‘hi’) 
}

// call as usual
var foo = require(‘./foo’)
foo() // outputs 'hi'!