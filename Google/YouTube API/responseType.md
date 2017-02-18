# responseType




responseType 可以省略 ！


## responseType 省略 OK！

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://cdn.xgqfrms.xyz/json/honor.json", false);
// xhr.setRequestHeader('Content-Type', 'text/json');
// responseType 可以省略 ！
xhr.send();
// xmlDocument = xhr.responseXML;
// console.log(xmlDocument.childNodes['0'].textContent);
var json = JSON.parse(xhr.response);
// for arr in array ???
console.log(json.badges[0].badge);
console.log(json.badges[0].course_url);
console.log(json.badges[0].name);
console.log(json.badges[0]);


## responseType 不省略 Error！

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://cdn.xgqfrms.xyz/json/honor.json", false);
xhr.setRequestHeader('Content-Type', 'text/json');
// responseType 不省略 Error ！
xhr.send();
// xmlDocument = xhr.responseXML;
// console.log(xmlDocument.childNodes['0'].textContent);
var json = JSON.parse(xhr.response);
// for arr in array ???
console.log(json.badges[0].badge);
console.log(json.badges[0].course_url);
console.log(json.badges[0].name);
console.log(json.badges[0]);








