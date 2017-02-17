var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);



/*


Instructions
Here we've created a JSON object in demo, which represents the kind of information you might get back from an HTTP request. Reading from demo is just like reading JSON sent by a server.




*/

/*
var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);

*/
