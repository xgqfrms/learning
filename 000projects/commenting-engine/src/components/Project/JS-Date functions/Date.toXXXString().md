# Date.to???String()


/*

// Date.toXXXString()


const now = new Date();

Locale OK:

now.toLocaleTimeString()

Local Error:

now.toLocalTimeString()

*/


```js
const now = new Date();


now.toLocaleDateString();
"2017/2/5"

now.toDateString();
"Sun Feb 05 2017"

now.toGMTString();
"Sat, 04 Feb 2017 17:51:44 GMT"

now.toISOString();
"2017-02-04T17:51:44.225Z"

now.toJSON();
"2017-02-04T17:51:44.225Z"

now.toLocaleDateString();
"2017/2/5"

now.toLocaleString();
"2017/2/5 上午1:51:44"

now.toLocaleTimeString();
"上午1:51:44"

now.toString();
"Sun Feb 05 2017 01:51:44 GMT+0800 (China Standard Time)"

now.toTimeString();
"01:51:44 GMT+0800 (China Standard Time)"

now.toUTCString();
"Sat, 04 Feb 2017 17:51:44 GMT"



``` 











