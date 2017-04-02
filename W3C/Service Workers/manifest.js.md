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




清单文件必须以 text/cache-manifest MIME 类型提供。您可能需要向网络服务器或 .htaccess 配置添加自定义文件类型。

例如，要在 Apache 中提供此 MIME 类型，请在您的配置文件中添加下面一行内容：

Apache 

AddType text/cache-manifest .appcache


要在 Google App Engine 的 app.yaml 文件中提供此 MIME 类型，则添加以下内容：

- url: /mystaticdir/(.*\.appcache)
  static_files: mystaticdir/\1
  mime_type: text/cache-manifest
  upload: mystaticdir/(.*\.appcache)



```js

CACHE MANIFEST
# 2010-06-18:v2

# Explicitly cached 'master entries'.

CACHE:
/favicon.ico
index.html
stylesheet.css
images/logo.png
scripts/main.js

# Resources that require the user to be online.

NETWORK:
login.php
/myapi
http://api.twitter.com

# static.html will be served if main.py is inaccessible
# offline.jpg will be served in place of all images in images/large/
# offline.html will be served in place of all other .html files

FALLBACK:
/main.py /static.html
images/large/ images/offline.jpg
*.html /offline.html

```



以“#”开头的行是注释行，但也可用于其他用途。
应用缓存只在其清单文件发生更改时才会更新。
例如，如果您修改了图片资源或更改了 JavaScript 函数，这些更改不会重新缓存。
您必须修改清单文件本身才能让浏览器刷新缓存文件。

使用生成的版本号、文件哈希值或时间戳创建注释行，可确保用户获得您的软件的最新版。

https://www.html5rocks.com/zh/tutorials/appcache/beginner/#toc-updating-cache

更新缓存

应用在离线后将保持缓存状态，除非发生以下某种情况：

用户清除了浏览器对您网站的数据存储。
清单文件经过修改。
请注意：更新清单中列出的某个文件并不意味着浏览器会重新缓存该资源。
清单文件本身必须进行更改。
应用缓存通过编程方式进行更新。


```js
var appCache = window.applicationCache;

switch (appCache.status) {
  case appCache.UNCACHED: // UNCACHED == 0
    return 'UNCACHED';
    break;
  case appCache.IDLE: // IDLE == 1
    return 'IDLE';
    break;
  case appCache.CHECKING: // CHECKING == 2
    return 'CHECKING';
    break;
  case appCache.DOWNLOADING: // DOWNLOADING == 3
    return 'DOWNLOADING';
    break;
  case appCache.UPDATEREADY:  // UPDATEREADY == 4
    return 'UPDATEREADY';
    break;
  case appCache.OBSOLETE: // OBSOLETE == 5
    return 'OBSOLETE';
    break;
  default:
    return 'UKNOWN CACHE STATUS';
    break;
};

```


window.applicationCache


window.applicationCache.status


window.applicationCache.update()


window.applicationCache.swapCache() 



```js

var appCache = window.applicationCache;

appCache.update(); // Attempt to update the user's cache.

...

if (appCache.status == window.applicationCache.UPDATEREADY) {
  appCache.swapCache();  // The fetch was successful, swap in the new cache.
}

```


Application Cache Checking event
Application Cache NoUpdate event


window.applicationCache

ApplicationCache {
    status: 1,
    onchecking: null,
    onerror: null,
    onnoupdate: null,
    ondownloading: null
    …
}
oncached: null
onchecking: null
ondownloading: null
onerror: null
onnoupdate: null
onobsolete: null
onprogress: null
onupdateready: null
status: 1
__proto__: 
ApplicationCache



```js
// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);


``` 



AppCache 事件

正如您所预期的那样，附加事件会用于监听缓存的状态。浏览器会对下载进度、应用缓存更新和错误状态等情况触发相应事件。以下代码段为每种缓存事件类型设置了事件监听器：


```js



function handleCacheEvent(e) {
  //...
}

function handleCacheError(e) {
  alert('Error: Cache failed to update!');
};

// Fired after the first cache of the manifest.
appCache.addEventListener('cached', handleCacheEvent, false);

// Checking for an update. Always the first event fired in the sequence.
appCache.addEventListener('checking', handleCacheEvent, false);

// An update was found. The browser is fetching resources.
appCache.addEventListener('downloading', handleCacheEvent, false);

// The manifest returns 404 or 410, the download failed,
// or the manifest changed while the download was in progress.
appCache.addEventListener('error', handleCacheError, false);

// Fired after the first download of the manifest.
appCache.addEventListener('noupdate', handleCacheEvent, false);

// Fired if the manifest file returns a 404 or 410.
// This results in the application cache being deleted.
appCache.addEventListener('obsolete', handleCacheEvent, false);

// Fired for each resource listed in the manifest as it is being fetched.
appCache.addEventListener('progress', handleCacheEvent, false);

// Fired when the manifest resources have been newly redownloaded.
appCache.addEventListener('updateready', handleCacheEvent, false);

``` 






https://html.spec.whatwg.org/#applicationcache



https://html.spec.whatwg.org/#toc-workers



switch

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch











































































https://www.tutorialspoint.com/javascript/javascript_void_keyword.htm

void是JavaScript中的一个重要关键字，可以用作在其单个操作数之前出现的一元运算符，该运算符可能是任何类型的。此运算符指定要求值而不返回值的表达式。




https://www.tutorialspoint.com/javascript/javascript_cookies.htm


Cookies












