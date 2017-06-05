// readystatechange


/*

https://developer.mozilla.org/zh-CN/docs/Web/Events/readystatechange

https://gist.github.com/xgqfrms-GitHub/b0da64ef34e0ba8072de09599aeb4cbf

typeof document.readyState;
// "string"
document.readyState;
// "complete"
document.readyState === "complete";
// true

interactive / 互动

文档已经完成加载，文档已被解析，但是诸如图像，样式表和框架之类的子资源仍在加载。
https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState

document.readyState === "interactive"


*/


// 模拟 ready/ load 事件
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        initApplication();
    }
}



// https://gist.github.com/xgqfrms-GitHub/65b1842e362737b6e89a3669b08eb103


/*

一个document 的 Document.readyState 属性描述了文档的加载状态。
一个文档的 readyState 可以是以下之一：

1. loading / 加载

document 仍在加载。

2. interactive / 互动
文档已经完成加载，文档已被解析，但是诸如图像，样式表和框架之类的子资源仍在加载。

3. complete / 完成
文档和所有子资源已完成加载。状态表示 load 事件即将被触发。

当这个属性的值在 document 对象上更改一个readystatechange 事件时触发。

*/



typeof document.readyState;
// "string"
document.readyState;
// "complete"
document.readyState === "complete";
// true



// 模拟 DOMContentLoaded 事件
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        initApplication();
    }
}




// 不同的准备状态

switch (document.readyState) {
    case "loading":
        // The document is still loading.
        break;
    case "interactive":
        // The document has finished loading.
        // We can now access the DOM elements.
        var span = document.createElement("span");
        span.textContent = "A <span> element.";
        document.body.appendChild(span);
        break;
    case "complete":
        // The page is fully loaded.
        let CSS_rule = document.styleSheets[0].cssRules[0].cssText;
        console.log(`The first CSS rule is: ${CSS_rule }`);
        break;
}



// load



window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
});




window.onload = function() {
    init();
    doSomethingElse();
};














