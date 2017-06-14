#!/usr/bin/env node

const colors = require('colors');

/*

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString


https://nodejs.org/api/buffer.html

https://stackoverflow.com/questions/16965281/node-js-tostring-encoding

https://stackoverflow.com/questions/34476754/what-encodings-does-buffer-tostring-support/34476785



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify



JSON.stringify() 方法将一个JavaScript值转换为一个JSON字符串，如果指定了一个replacer函数，则可以替换值，或者如果指定了一个replacer数组，可选地仅包括指定的属性。

语法
JSON.stringify(value[, replacer [, space]])



# how to stringify object in node.js

https://www.npmjs.com/package/stringify-object

https://www.npmjs.com/package/node-stringify


http://timelessrepo.com/json-isnt-a-javascript-subset

https://stackoverflow.com/questions/16005091/node-js-javascript-stringify


https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string


https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object








*/


console.log(`\n\n\n******************************\n\n\n`);

console.log(`\nprocess = \n`.red, typeof(process));
// object & JSON.stringify() 


// let xxx = JSON.stringify(process);


console.log(`\nprocess = \n`.rainbow, process);

console.log(`\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n`);
console.log(`\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n`);


// console.log(`\nprocess = \n`.rainbow, JSON.stringify(process, null, 4));
// TypeError: Converting circular structure to JSON

// https://gist.github.com/xgqfrms-GitHub/92aa2b00249f15084d24aa2e0a5d0300#gistcomment-2122041
/*

TypeError：将循环结构转换为JSON

1. 这意味着你在请求中传递的对象有一个循环引用

2. 使用 JSON.stringify与自定义 replacer。

*/

console.log(`\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n`);
console.log(`\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n`);



console.log(`\n\n\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n\n\n`);



console.log(`\nprocess.argv = \n`.rainbow, typeof(process.argv));
// object & JSON.stringify() 


console.log(`\nprocess.argv = \n`, process.argv);


console.log(`\n\n\n++++++++++++++++++++++++++++++++++++++\n\n\n`);



console.log(`\nprocess.env = \n`.white, typeof(process.env));
// object & JSON.stringify() 


console.log(`\nprocess.env = \n`, process.env);

console.log(`\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n`);

console.log(`\nprocess.env = \n`, JSON.stringify(process.env, null, 4));
// object object ??? OK

console.log(`\n\n\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n\n\n`);



console.log(`\nprocess.config = \n`, process.config);


console.log(`\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n`);

console.log(`\nprocess.config = \n`, JSON.stringify(process.config, null, 4));

// https://stackoverflow.com/a/10729284/5934465
// array object ??? OK


console.log(`\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n`);

console.log(`\nprocess.argv = \n`.rainbow, typeof(process.argv));
// array object & JSON.stringify() 


console.log(`\nprocess.argv = \n`, process.argv);

console.log(JSON.stringify(process.argv, null, 4));


