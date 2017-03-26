# Date.prototype.toJSON()



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON



var jsonDate = (new Date()).toJSON();
// undefined
jsonDate;
// "2017-03-26T13:09:33.363Z"

var jsonDate = new Date();
// Sun Mar 26 2017 21:09:42 GMT+0800 (China Standard Time)



var jsonDate = new Date();
// undefined
jsonDate;
// Sun Mar 26 2017 21:10:16 GMT+0800 (China Standard Time)




Date.prototype.toLocaleDateString()
Date.prototype.toTimeString()
Date.prototype.toUTCString()





var jsonDate = new Date();


jsonDate.toLocaleDateString()
"2017/3/26"


jsonDate.toJSON()
"2017-03-26T13:12:57.827Z"

jsonDate.toUTCString()
"Sun, 26 Mar 2017 13:12:57 GMT"









