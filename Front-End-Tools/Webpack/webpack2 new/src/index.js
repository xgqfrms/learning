// webpack 2 cmd test

import App from './App';

// import App from './App.js';


document.onload = (() => {
    const div = document.createElement("div");
    div.innerHTML = `Hello, webpack 3!`;
    document.body.appendChild(div);
    const h1 = document.createElement("h1");
    h1.innerHTML = `Hello, webpack 3!`;
    document.body.appendChild(h1);
})();



document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});


document.onreadystatechange = function () {
    if (document.readyState === "loading") {
        console.log(`document.readyState = ${document.readyState}`);
    }
    if (document.readyState === "interactive") {
        console.log(`document.readyState = ${document.readyState}`);
    }
    if (document.readyState === "complete") {
        // initApplication();
        console.log(`document.readyState = ${document.readyState}`);
    }
};



// this synchronous script is going to delay parsing of the DOM. So the DOMContentLoaded event is going to launch later.

function BAD(){
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
    for(var i = 0; i < arr.length; i++){
        // bad js
    }
}

function SEO(){
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
    let length = arr.length;
    for(let i = 0; i < length; i++){
        // good js
    }
}



// 模拟 DOMContentLoaded/ jquery ready
document.onreadystatechange = function() {
    if (document.readyState === "interactive") {
        // initApplication();
    }
}



// 模拟 load/onload 事件
document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        // initApplication();
    }
}







/*

https://developer.mozilla.org/en-US/docs/Web/Events/load

https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded


https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState

https://developer.mozilla.org/en-US/docs/Web/Events/readystatechange
https://developer.mozilla.org/en-US/docs/DOM/document.readyState

loading
interactive
complete




*/










const func_hello = () => {
    console.log(`hello, webpack 2!`);
};

func_hello();

export default func_hello;









