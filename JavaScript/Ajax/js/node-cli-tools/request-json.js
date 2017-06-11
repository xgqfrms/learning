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
const colors = require('colors');

console.log(`process.argv = \n`.white, process.argv);
console.log(`process.argv[0] = \n`.red, process.argv[0]);
console.log(`process.argv[1] = \n`.green, process.argv[1]);
console.log(`process.argv[2] = \n`.blue, process.argv[2]);

const showjson = (data) => {
    console.log(`\ndata = ${data}`.red);
    console.log(typeof data);
    // string to JSON
    console.log(`\ndata.query = ${data.query}`);
    let db = data.basic,
        dw = data.web;
    console.log(`\ndata.basic = ${data.basic}`);
    console.log(`\ndata.web = ${data.web}`);
    if (db != null) {
        let us = typeof db["us-phonetic"] === 'string'
                ? `美音: [${db["us-phonetic"]}]`
                : '',
            uk = typeof db["uk-phonetic"] === 'string'
                ? `英音: [${db["uk-phonetic"]}]` 
                : ''; 
        if (uk && us) {
            console.log(`\n${us}\t${uk}\n`);
        }
        else if (typeof db["phonetic"] === 'string') {
            console.log(`拼音：`.bold.underline + `[${db["phonetic"]}]\n`);
        }
        console.log(`翻译：`.bold.underline + `${db["explains"]}\n`);
    }
    else if(dw != null) {
        console.log(`网络释义: `.bold.underline);
        for (let i = 0; i < dw.length; i++) {
            temp = dw[i];
            console.log(`\n\t${i+1}.${temp.key}`);
            console.log(`\n\t${temp.value}`);
        }
        console.log(`\ndata.web.length = ${dw.length}`);
    }else {
        console.log(`\n暂无释义!`.bold.underline.red);
    }
};

let query_key = process.argv[2];
let json_url = `
http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=${query_key}
`;

request(json_url, (error, response, body) => {
    if(!error && response.statusCode === 200) {
        console.log(`body =`.rainbow, body);
        console.log(typeof body);
        // string
        let data = JSON.parse(body);
        showjson(data);
    }
    else{
        console.log(`error =`.red, body);
    }
});
