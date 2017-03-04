# DOMContentLoaded



https://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded




当初始HTML文档已完全加载和解析时，将触发DOMContentLoaded事件，而无需等待样式表，图像和子框架完成加载。
一个非常不同的事件load 应该仅用于检测完全加载的页面。

这是一个令人难以置信的流行的错误使用 load , DOMContentLoaded将是更适当的，所以要谨慎。


加速 
如果您希望DOM在用户请求页面后尽可能快地解析，你可以做的一些事情是将你的JavaScript异步和优化样式表的加载，如果像通常一样使用，由于并行加载的页面加载减慢，“窃取”来自主html文档的流量。




hasOwnProperty




当一个资源及其依赖资源已完成加载时，将触发load事件。


https://developer.mozilla.org/zh-CN/docs/Web/Events/load



## window.onhashchange



https://developer.mozilla.org/zh-CN/docs/Web/Events/hashchange
















