var colors = require('colors');


const showjson = require('./a');

let data = {a: "1", b: "2", c: "3"};

console.log('data = '.red, JSON.stringify(data).white); 


showjson(data);




