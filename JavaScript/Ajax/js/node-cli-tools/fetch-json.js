/**
 * fetch
 * $ npm i -S whatwg-fetch
 * http://babeljs.io/repl/
 * $ npm i -S node-fetch
 */



// const fetch = require('whatwg-fetch');

import * from 'whatwg-fetch';

fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
.then((response) => {
    console.log(`response.headers.get('Content-Type') = \n`, response.headers.get('Content-Type'));
    console.log(`response.headers.get('Date') = \n`, response.headers.get('Date'));
    console.log(`response.status = \n`, response.status);
    console.log(`response.statusText = \n`,response.statusText);
    return json = response.json();
})
.then(json => {
    console.log(json.user);
    console.log('json.user:', json.user);
});
