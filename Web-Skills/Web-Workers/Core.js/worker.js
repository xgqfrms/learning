/*
https://github.com/ufo-github/core-js/blob/master/tests/worker/test.js

https://github.com/ufo-github/core-js/blob/master/tests/worker/runner.js

*/

var worker = new Worker('./worker/runner.js');

worker.addEventListener('error', function(e){
    console.error(e);
});

worker.addEventListener('message', function(message){
    console.log(message.data);
});
