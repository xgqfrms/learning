var xhr = new XMLHttpRequest();
xhr.open("GET", "https://cdn.xgqfrms.xyz/json/honor.json", false);

xhr.setRequestHeader('Content-Type', 'text/json');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);


??? 
JSON.parse()

JSON.stringify(obj);



/*


Instructions
Here we've created a JSON object in demo, which represents the kind of information you might get back from an HTTP request. Reading from demo is just like reading JSON sent by a server.




*/

/*
var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);

*/


