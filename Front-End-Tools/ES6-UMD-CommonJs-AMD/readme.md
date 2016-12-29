# Modules ,Module Loaders , Module Formats   

https://github.com/systemjs/systemjs/blob/master/docs/es6-modules-overview.md 
https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md  









ES6 > UMD > CJS > AMD  SystemJS



http://davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/  



http://expressjs.com/en/resources/frameworks.html

https://medium.com/@brianleroux/es6-modules-amd-and-commonjs-c1acefbe6fc0#.lveus4f1n

https://github.com/brianleroux/echo-string

http://www.commonjs.org/  
http://wiki.commonjs.org/wiki/CommonJS  

Asynchronous Module Design (AMD)


// this is an AMD module
define(function () {
  return something
})

// and this is CommonJS
module.exports = something

Asynchronous Module Design (AMD) accounts for the async nature of JS but some felt the aesthetics were harder to read with a wrapper function.


CommonJS (CJS) is synchronous, thus blocking, but generally understood to be an easier read.





## SystemJS  
https://github.com/systemjs/systemjs  
https://github.com/systemjs/systemjs/blob/master/docs/es6-modules-overview.md  
https://github.com/systemjs/systemjs/blob/master/docs/overview.md  
https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md  
https://github.com/systemjs/systemjs/blob/master/docs/system-api.md  

Dynamic ES module loader  


## AMD  
https://github.com/amdjs/amdjs-api  
https://github.com/amdjs/amdjs-api/wiki/AMD  

https://github.com/amdjs/amdjs-api/wiki/AMD-(中文版)  
https://github.com/amdjs/amdjs-api/wiki/require-(中文版)  
https://github.com/amdjs/amdjs-api/wiki/Loader-Plugins(中文版)  

https://en.wikipedia.org/wiki/Asynchronous_module_definition  






## RequireJS (AMD)  
http://requirejs.org/  
https://github.com/requirejs/requirejs  



Asynchronous Module Definition (AMD) has gained traction on the frontend, with RequireJS being the most popular implementation.  

RequireJS is a JavaScript file and module loader.

RequireJS是一个JavaScript文件和模块加载器。



> WHY AMD?  
http://requirejs.org/docs/whyamd.html  








## CommonJS (CJS)  
http://wiki.commonjs.org/wiki/CommonJS  

## Browserify, Node (CJS)  

CommonJS is a style you may be familiar with if you’re written anything in Node (which uses a slight variant). It’s also been gaining traction on the frontend with Browserify.



## UMD: Universal Module Definition  


http://davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/ 





## ES6 Module  

https://github.com/nodejs/node/wiki/ES6-Module-Detection-in-Node

https://github.com/nodejs/help/issues/53  

## ECMAScript 2015 (ES6) and beyond  

https://nodejs.org/en/docs/es6/  

https://fhinkel.github.io/six-speed/  

https://nodesource.com/blog/es-modules-and-node-js-hard-choices/  



## Transpiling ES6 Modules to AMD & CommonJS Using Babel & Gulp  

https://www.sitepoint.com/transpiling-es6-modules-to-amd-commonjs-using-babel-gulp/  


ES6 Modules ==> CommonJS (Babel & Gulp, Browserify)  

ES6 Modules ==> AMD (Require.js)   


## Understanding ES6 Modules  


https://www.sitepoint.com/understanding-es6-modules/ 



https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.j59zkv6h9


module bundlers vs. module loaders
Webpack vs. Browserify
AMD vs. CommonJS
Gulp vs Grunt
Sassvs. Less


https://addyosmani.com/writing-modular-js/  


https://github.com/xgqfrms-GitHub/requirejs  




## JavaScript Module Systems Showdown: CommonJS vs AMD vs ES2015  


https://auth0.com/blog/javascript-module-systems-showdown/



