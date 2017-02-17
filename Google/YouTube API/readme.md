# YouTube API


https://www.codecademy.com/en/tracks/youtube


## XMLHttpRequest

https://xhr.spec.whatwg.org/#interface-xmlhttprequest

https://github.com/whatwg/xhr

https://w3c-test.org/XMLHttpRequest/

https://github.com/w3c/web-platform-tests/


https://github.com/whatwg/xhr/issues/115

https://github.com/whatwg/fetch

https://fetch.spec.whatwg.org/




The XMLHttpRequest Standard defines an API that provides scripted client functionality for transferring data between a client and a server.

XMLHttpRequest标准定义了一个API，它提供了用于在客户端和服务器之间传输数据的脚本化客户端功能。



var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);

Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. 
For more help, check https://xhr.spec.whatwg.org/.





