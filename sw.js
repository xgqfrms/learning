/**
 * xgqfrms 2017.04.03
 * @copyright [xgqfrms 2017-2050]
 * @version [1.1.1]
 * @website https://learning.xgqfrms.xyz
 * @repo https://github.com/xgqfrms
 */


// 服务工作者 Service Workers

/**
 * demo: http://www.w3school.com.cn/tiy/t.asp?f=html5_webworker
 * http://www.w3school.com.cn/example/html5/demo_workers.js
 */

const sw,
    target = document.getElementById("result"),
    ms = `Sorry, your browser does not support Web Workers...`;

const startWorker = () => {
    // 检测用户的浏览器是否支持 Web Worker 
    if (typeof(Worker) !== "undefined") {
        if (typeof(sw) == "undefined") {
            // 创建 web worker
            sw = new Worker("https://learning.xgqfrms.xyz/sw.js");
        }
        sw.onmessage = function(event) {
           target.innerHTML = event.data;
        };
    } else {
        target.innerHTML = `${ms}`;
    }
}

const stopWorker = () => {
    sw.terminate();
}




let i = 0;
const timedCount = () => {
    i = i + 1;
    postMessage(i, "https://learning.xgqfrms.xyz");
    setTimeout("timedCount()", 500);
}

timedCount();


/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage
 * http://stackoverflow.com/questions/23373376/uncaught-syntaxerror-failed-to-execute-postmessage-on-window-invalid-targe
 * window.postMessage() 方法可以安全地实现跨源通信。
 * 通常，当且仅当执行它们的页面位于具有相同的协议（通常为https），端口号（443为https的默认值），以及主机(模数 Document.domain 由两个页面设置为相同的值)。
 * window.postMessage() 方法提供了一种受控机制，以便在正确使用时以安全的方式规避此限制。
 * https://developer.mozilla.org/zh-CN/docs/Web/API/MessageEvent
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API
 */




// https://html.spec.whatwg.org/multipage/workers.html#dom-worker
// https://w3c.github.io/workers/#dom-worker



// https://cdn.xgqfrms.xyz/plugins/getfullyear.js

const copyRightYear = () => {
    let copyYear = Symbol();
    copyYear = new Date().getFullYear();
    const spanYear = document.getElementById('spanYear');
    spanYear.style.background = "yellow";
    spanYear.style.color = "#000";
    spanYear.innerHTML = `Copyright &copy; ${copyYear} - 2050 xgqfrms`;
    return spanYear;
}
window.onload = copyRightYear();




