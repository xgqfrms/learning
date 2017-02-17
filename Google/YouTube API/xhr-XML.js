var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);



/*

It's very similar to our earlier request, but specifically asks for an XML document in return. 

<pet>
    <name>Jeffrey</name>
    <species>Giraffe</species>
</pet>

*/
