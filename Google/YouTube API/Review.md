# Review




REST Constraints & Requirements
Quiz time! Let's see if you remember the major points of HTTP and REST.




// 1. HTTP is a protocol that connects clients and ______.
var answer1 = "servers";

// 2. The four HTTP methods are GET, POST, ___, and DELETE.
var answer2 = "PUT"

// 3. A ___ error means the server goofed up. (200, 300, 400, or 500)
var answer3 = "500";





Requests
All right! Let's see if you can make that request to codecademy.com all on your lonesome.




Go ahead and do three things:

Create a variable called xhr and set it equal to new XMLHttpRequest().
Call open xhr and pass it three arguments: "GET" (the type of request you'd like to make), "https://www.codecademy.com/" (the URL), and false (this means the exercise will wait until it gets a response from the server).
Call .send() on xhr. We've already taken care of the console.log()s for you!



false 
(this means the exercise will wait until it gets a response from the server).



// Add your code below this line!

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();

// Add your code above this line!
console.log(xhr.status);
console.log(xhr.statusText);





Authentication & API Keys
Time for a quick quiz!



// What's an API key?

// A: An alphanumeric string used to identify you to an API
// B: An OAuth token
// C: An All-Purpose Internet key
// D: The tool used to unlock an API gate

var answer = "A";




XML & JSON
Great work! Let's do one last question to round out your knowledge of HTTP and REST.



// What data format is shown below? Set answer equal to 'XML' for XML and 'JSON' for JSON.

{
  "Cartoon Foxes": {
    {
      "Name": "Fox Tall",
      "Job": "Bein' tall"
    },
    {
      "Name": "Fox Small",
      "Job": "Bein' small"
    }
  }
}

var answer = "JSON";






You Did It!
Great work! You now know the basics of HTTP and REST. You're ready to start tackling the Codecademy API projects!






https://www.codecademy.com/courses/javascript-intermediate-en-757J2/0/1?curriculum_id=50ecb8d45f787a6332000042






https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type


https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML



text/xml

application/xml

XMLHttpRequest.overrideMimeType() 



If the server doesn't specify the Content-Type header as "text/xml" or "application/xml", you can use XMLHttpRequest.overrideMimeType() to force XMLHttpRequest to parse it as XML anyway.


https://xhr.spec.whatwg.org/#the-responsetype-attribute


client . responseType [ = value ]
Returns the response type.

Can be set to change the response type. Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".




https://xhr.spec.whatwg.org/#the-response-attribute



https://xhr.spec.whatwg.org/#json-response

https://xhr.spec.whatwg.org/#response-json-object


https://xhr.spec.whatwg.org/#the-responsetext-attribute





https://fetch.spec.whatwg.org/#concept-fetch



https://www.w3.org/TR/FileAPI/
https://w3c.github.io/FileAPI/




XMLHttpRequest.responseXML

https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseXML

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs

Data_URIs


https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response$translate?tolocale=zh-CN


XMLHttpRequest.response


https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/response


XMLHttpRequest.responseText


https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseText


var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);






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


https://github.com/helloqingfeng

GitHub最全的前端资源汇总仓库（包括前端学习、开发资源、求职面试等）


https://github.com/helloqingfeng/Kpop-star-instagram-accounts


韩国明星社交账号大全




https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseType


XMLHttpRequest.responseType



XMLHttpRequest.responseURL


https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseURL



https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseXML


XMLHttpRequest.responseXML




https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy


真值 Truthy


在JavaScript中，真值指的是在Boolean上下文中转换后的值为真的指。所有值都是真值，除非它们被定义为 falsy (即， 除了false 外，0，“”，null，undefined和NaN)




## Using AutoComplete in HTML Forms


https://www.bennadel.com/blog/2307-disabling-auto-correct-and-auto-capitalize-features-on-iphone-inputs.htm

https://gist.github.com/bennadel/9760670#file-code-1-cfm

https://github.com/bennadel/JavaScript-Demos

https://github.com/bennadel/JavaScript-Demos/tree/master/demos


https://msdn.microsoft.com/en-us/library/ms533032%28v=vs.85%29.aspx



spellcheck

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/spellcheck










