// Monkey patching



var Utility = {
   endsWith: function(string, suffix) {
      return string.indexOf(suffix, string.length - suffix.length) !== -1;
   }
};

var isSuffix = Utility.endsWith('hello world', 'ld');


String.prototype.endsWith = function(suffix) {
   return this.indexOf(suffix, this.length - suffix.length) !== -1;
};


var isSuffix = 'hello world'.endsWith('ld');







// Save the original console.log() method

var log = console.log;
console.log = function() {
   // Invoke the original method with an additional parameter
   log.apply(console, [(new Date()).toString()].concat(arguments));
};


// ECMAScript’s 2015 

String.prototype.contains()  // old

String.prototype.includes()  // new

/*
Not too long ago, the use of Monkey patching has caused the rename of ECMAScript’s 2015 method String.prototype.contains() to String.prototype.includes(). 

不久以前，使用Monkey补丁导致ECMAScript的2015方法String.prototype.contains（）重命名为String.prototype.includes（）。
*/






String.prototype.includes(searchString[, position])



String.prototype.includes = function(searchString, position) {
   'use strict';
   if (typeof position !== 'number') {
      start = 0;
   }
 
   if (position + searchString.length > this.length) {
      return false;
   } else {
      return this.indexOf(searchString, position) !== -1;
   }
};


if (!String.prototype.includes) {
   String.prototype.includes = function(searchString, position) {
      // Implementation of the method here...
   };
}



String.prototype.includes = String.prototype.includes || function(searchString, position) {
   // Implementation of the method here...
};





