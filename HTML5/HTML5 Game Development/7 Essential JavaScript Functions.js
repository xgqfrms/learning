// 7 Essential JavaScript Functions
// https://davidwalsh.name/essential-javascript-functions



// poll

// The polling function
function poll(fn, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    var checkCondition = function(resolve, reject) {
        // If the condition is met, we're done! 
        var result = fn();
        if(result) {
            resolve(result);
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            reject(new Error('timed out for ' + fn + ': ' + arguments));
        }
    };

    return new Promise(checkCondition);
}

// Usage:  ensure element is visible
poll(function() {
    return document.getElementById('lightbox').offsetWidth > 0;
}, 2000, 150).then(function() {
    // Polling done, now do something else!
}).catch(function() {
    // Polling timed out, handle the error!
});



// once

function once(fn, context) { 
    var result;

    return function() { 
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

// Usage
var canOnlyFireOnce = once(function() {
    console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nada




// getAbsoluteUrl


var getAbsoluteUrl = (function() {
    var a;
    return function(url) {
        if(!a) a = document.createElement('a');
        a.href = url;
        return a.href;
    };
})();

// Usage
getAbsoluteUrl('/something'); // https://davidwalsh.name/something



// isNative


;(function() {

  // Used to resolve the internal `[[Class]]` of values
  var toString = Object.prototype.toString;
  
  // Used to resolve the decompiled source of functions
  var fnToString = Function.prototype.toString;
  
  // Used to detect host constructors (Safari > 4; really typed array specific)
  var reHostCtor = /^\[object .+?Constructor\]$/;

  // Compile a regexp using a common native method as a template.
  // We chose `Object#toString` because there's a good chance it is not being mucked with.
  var reNative = RegExp('^' +
    // Coerce `Object#toString` to a string
    String(toString)
    // Escape any special regexp characters
    .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
    // Replace mentions of `toString` with `.*?` to keep the template generic.
    // Replace thing like `for ...` to support environments like Rhino which add extra info
    // such as method arity.
    .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );
  
  function isNative(value) {
    var type = typeof value;
    return type == 'function'
      // Use `Function#toString` to bypass the value's own `toString` method
      // and avoid being faked out.
      ? reNative.test(fnToString.call(value))
      // Fallback to a host object check because some environments will represent
      // things like typed arrays as DOM methods which may not conform to the
      // normal native pattern.
      : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
  }
  
  // export however you want
  module.exports = isNative;
}());

// Usage
isNative(alert); // true
isNative(myCustomFunction); // false




// insertRule



var sheet = (function() {
    // Create the <style> tag
    var style = document.createElement('style');

    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute('media', 'screen')
    // style.setAttribute('media', 'only screen and (max-width : 1024px)')

    // WebKit hack :(
    style.appendChild(document.createTextNode(''));

    // Add the <style> element to the page
    document.head.appendChild(style);

    return style.sheet;
})();

// Usage
sheet.insertRule("header { float: left; opacity: 0.8; }", 1);



// matchesSelector

function matchesSelector(el, selector) {
    var p = Element.prototype;
    var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(el, selector);
}

// Usage
matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]')






// throttle




function throttle (callback, limit) {

  var wait = false;
  return function () {
    if (!wait) {

      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  }
}












