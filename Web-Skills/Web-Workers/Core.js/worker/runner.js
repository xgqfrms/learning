/*
https://github.com/ufo-github/core-js/blob/master/tests/worker/test.js

https://github.com/ufo-github/core-js/blob/master/tests/worker/runner.js
*/


importScripts('../../client/core.js');

postMessage(typeof core != 'undefined');

setImmediate(_ => postMessage('setImmediate'));

Promise.resolve().then(_ => postMessage('Promise.resolve'));
