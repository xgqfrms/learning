# javascript-interview  

https://www.sitepoint.com/5-javascript-interview-exercises/  
https://www.sitepoint.com/javascript-closures-demystified/  

https://developer.mozilla.org/en/DOM/window.setTimeout  
https://developer.mozilla.org/en/DOM/window.setInterval  


## Closures  

```js
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
    });
}
`` 

