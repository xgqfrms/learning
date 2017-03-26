# onload



GlobalEventHandlers.onload

DOMContentLoaded

DOMFrameContentLoaded

https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener

https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onload

https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded


https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded




BeforeUnloadEvent


beforeunload 事件被触发, 在 window、document 和它们的资源将要被卸载时。 

https://developer.mozilla.org/zh-CN/docs/Web/API/BeforeUnloadEvent


window.addEventListener("beforeunload", function( event ) {
  event.returnValue = "\o/";
});

//等同于
window.addEventListener("beforeunload", function( event ) {
  event.preventDefault();
});


https://html.spec.whatwg.org/#prompt-to-unload-a-document


https://developer.mozilla.org/zh-CN/docs/Web/Events/unload



https://developer.mozilla.org/zh-CN/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded



https://developer.mozilla.org/zh-CN/docs/Web/Events/unload


unload

当文档或一个子资源正在被卸载时, 触发 unload事件。

它在下面两个事件后被触发:

beforeunload (可取消默认行为的事件)
pagehide



fetch('module.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(results => {
  // Do something with the compiled results!
});


https://developer.mozilla.org/zh-CN/docs/WebAssembly/Loading_and_running



要在JavaScript中使用WebAssembly，您首先需要在编译/实例化之前将模块拉入内存。模块最初将被捕获为类型化的数组， 例如. 通过 XMLHttpRequest 或 Fetch，但将来可能会有更多的选择。 本文提供了可用于获取WebAssembly字节码的不同机制的参考，以及如何编译/实例化然后运行它。




## Virtual Reality


https://khalid32.github.io/

https://github.com/khalid32





https://stackoverflow.com/insights/survey/2017/
https://stackoverflow.com/insights/survey/2016/
https://stackoverflow.com/insights/survey/2015/



http://www.highcharts.com/



