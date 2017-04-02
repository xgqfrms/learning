# manifest



https://docs.learnosity.com/assessment/questions/knowledgebase/offline



https://gist.github.com/xgqfrms-GitHub/f49d24795143821122f7ce82c6053da1



https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers


https://developer.mozilla.org/zh-CN/docs/Web/API/Cache


## Service Workers



## 前端埋点技术实现方案，技术难点，解决方案



https://github.com/getlantern/lantern/issues/new

```sh
http://localhost:6067/?1

```

what's wrong with this ?


why, it didn't work at all now!







# Service workers

https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers

https://github.com/mdn/sw-test/blob/gh-pages/app.js#L31-L34

https://github.com/mdn/sw-test/blob/gh-pages/app.js#L60-L64




Service-workers.md


https://gist.github.com/


https://github.com/mdn/sw-test/blob/master/app.js



https://gist.github.com/xgqfrms-GitHub/e6f6ed08bf5dbec070b9a83ce3432551


https://gist.github.com/xgqfrms-GitHub/f49d24795143821122f7ce82c6053da1



## 服务人员解释

https://github.com/w3c/ServiceWorker/blob/master/explainer.md


https://github.com/ufo-github/ServiceWorker


https://github.com/NekR/offline-plugin



## MDN node


https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore

https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild

Node.appendChild

Node.removeChild

Node.replaceChild

Node.insertBefore

Node.hasChildNodes



https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement


Document.createElement()

 
在一个 HTML 文档中， Document.createElement() 方法创建由tagName 或一个HTMLUnknownElement 如果tagName不被识别, 指定的HTML元素。

在一个 XUL 文档中，它创建指定的XUL元素。在其他文档中，它创建一个具有null命名空间URI的元素。

要显式指定元素的命名空间URI，请使用 document.createElementNS()。


https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElementNS

Document.createElementNS()

创建一个具有指定的命名空间URI和限定名称的元素。

要创建一个元素而不指定命名空间URI，请使用  createElement 方法。



https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL 


URL.createObjectURL()


URL.createObjectURL() 静态方法会创建一个 DOMString 包含一个表示参数中给定的对象的URL。


objectURL = URL.createObjectURL(blob);


https://developer.mozilla.org/zh-CN/docs/Web/API/Blob

一个 Blob对象表示一个不可变的, 原始数据的类似文件对象。

Blob表示的数据不一定是一个JavaScript原生格式。
File 接口基于Blob，继承 blob功能并将其扩展为支持用户系统上的文件。


https://developer.mozilla.org/zh-CN/docs/Web/API/File

File 接口提供有关文件的信息，并允许网页中的JavaScript访问其内容。




















## 使用 Service Workers

https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers


ServiceWorkerContainer.register()


https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorkerContainer/register


ServiceWorkerContainer 接口的 register() 方法创建或更新一个给定scriptURL的ServiceWorkerRegistration 。

如果成功，一个服务工作者注册将提供的脚本URL与一个范围进行关联，后者用于导航匹配。如果该方法无法返回一个 ServiceWorkerRegistration，则返回一个 Promise。

您可以从受控页无条件调用此方法, 即, 您不需要首先检查是否有一个有效的注册。



Navigator.serviceWorker

https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/serviceWorker 

Navigator.serviceWorker 只读属性，返回 关联文件 的 ServiceWorkerContainer 对象，它提供对ServiceWorker 的注册，删除，升级和通信的访问。。

https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window





























