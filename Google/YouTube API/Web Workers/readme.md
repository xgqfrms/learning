# Web Workers


https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers



http://caniuse.com/#search=Worker


Global 93.28%

Method of running scripts in the background, isolated from the web page

在后台运行脚本的方法，与网页隔离



var myWorker = new Worker("my_task.js");

myWorker.onmessage = function (oEvent) {
    console.log("Called back by the worker!\n");
};





var myWorker = new Worker("my_task.js");

myWorker.addEventListener("message", function (oEvent) {
    console.log("Called back by the worker!\n");
}, false);

myWorker.postMessage(""); // start the worker.






WebSocket


https://developer.mozilla.org/en-US/docs/Web/API/WebSocket


WebSockets

https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API


https://www.w3.org/TR/websockets/

The WebSocket API
W3C Candidate Recommendation 20 September 2012

https://w3c.github.io/websockets/


https://html.spec.whatwg.org/multipage/comms.html#network


http://caniuse.com/#feat=websockets

Bidirectional communication technology for web apps

Global 92.96%  +   0.29%   =   93.25%


ServiceWorker

https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker

https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorker

https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API


http://caniuse.com/#search=ServiceWorker

Global 0%  +   62.1%   =   62.1%


SharedWorker

https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker





Worker



https://developer.mozilla.org/zh-CN/docs/Web/API/Worker




https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html


https://googlechrome.github.io/samples/service-worker/registration-events/


https://googlechrome.github.io/samples/service-worker/registration-events/service-worker.js



https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API


https://developer.mozilla.org/en-US/docs/Web/API/Worker#postMessage()



https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage



Worker.postMessage()

https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/postMessage





https://html.spec.whatwg.org/multipage/comms.html#posting-messages


http://caniuse.com/#search=postMessage


Global 92.89%  +   5.3%    =   98.19%



将信息从一个域上的页面发送到另一个域上的页面的方法（使用postMessage）








