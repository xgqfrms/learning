// Request



/*

const request = require('request');

request('https://cdn.xgqfrms.xyz/json/badges.json', (error, response, body) => {
    console.log('error:', error); 
    // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); 
    // Print the response status code if a response was received 
    console.log('body:', body); 
    // Print body. 
    console.log('body.user:', body.user); 
    // Print body.user
    }
);


*/

const request = require('request');

let json_url = `http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=test`;

request(json_url, (error, response, body) => {
    if(!error && response.statusCode === 200) {
        console.log(body);
    }
});
