# Javascript 缓存API  



http://www.webhek.com/javascript-cache-api



Javascript缓存API

JavaScript ServiceWorker API






JavaScript ServiceWorker API的好处就是让WEB开发人员轻松的控制缓存。虽然使用ETags等技术也是一种控制缓存的技术，按使用JavaScript让程序来控制缓存功能更强大，更自由。当然，强大有强大的好处，也有弊处——你需要做善后处理，所谓的善后处理，就是要清理缓存。

下面我们来看看如何创建缓存对象、在缓存里添加请求缓存数据，从缓存里删除请求缓存的数据，最后是如何完全的删除缓存。

判断浏览器对缓存对象cache API的支持

检查浏览器是否支持Cache API…

if('caches' in window) {
  // Has support!
}
…检查window里是否存在caches对象。

创建一个缓存对象

创建一个缓存对象的方法是使用caches.open()，并传入缓存的名称：

caches.open('test-cache').then(function(cache) {
  // 缓存创建完成，现在就可以访问了
});
这个caches.open方法返回一个Promise，其中的cache对象新创建出来，如果是以前创建过，就不重新创建。

添加缓存数据

对于这类的缓存，你可以把它想象成一个Request对象数组，Request请求获取的响应数据将会按键值存储在缓存对象里。有两个方法可以往缓存里添加数据：add 和 addAll。用这两个方法将要缓存的请求的地址添加进去。关于Request对象的介绍你可以参考fetch API这篇文章。

使用addAll方法可以批量添加缓存请求：

caches.open('test-cache').then(function(cache) { 
  cache.addAll(['/', '/images/logo.png'])
    .then(function() { 
      // Cached!
    });
});
这个addAll方法可以接受一个地址数组作为参数，这些请求地址的响应数据将会被缓存在cache对象里。addAll返回的是一个Promise。添加单个地址使用add方法：

caches.open('test-cache').then(function(cache) {
  cache.add('/page/1');  // "/page/1" 地址将会被请求，响应数据会缓存起来。
});
add()方法还可以接受一个自定义的Request:

caches.open('test-cache').then(function(cache) {
  cache.add(new Request('/page/1', { /* 请求参数 */ }));
});
跟add()方法很相似，put()方法也可以添加请求地址，同时添加它的响应数据：

fetch('/page/1').then(function(response) {
  return caches.open('test-cache').then(function(cache) {
    return cache.put('/page/1', response);
  });
});
访问缓存数据

要查看已经换的请求数据，我们可以使用缓存对象里的keys()方法来获取所有缓存Request对象，以数组形式：

caches.open('test-cache').then(function(cache) { 
  cache.keys().then(function(cachedRequests) { 
    console.log(cachedRequests); // [Request, Request]
  });
});

/*
Request {
  bodyUsed: false
  credentials: "omit"
  headers: Headers
  integrity: ""
  method: "GET"
  mode: "no-cors"
  redirect: "follow"
  referrer: ""
  url: "http://www.webhek.com/images/logo.png"
}
*/
如果你想查看缓存的Request请求的响应内容，可以使用cache.match()或cache.matchAll()方法：

caches.open('test-cache').then(function(cache) {
  cache.match('/page/1').then(function(matchedResponse) {
    console.log(matchedResponse);
  });
});

/*
Response {
  body: (...),
  bodyUsed: false,
  headers: Headers,
  ok: true,
  status: 200,
  statusText: "OK",
  type: "basic",
  url: "https://www.webhek.com/page/1"
}
*/
关于Response对象的用法和详细信息，你可以参考fetch API这篇文章。

删除缓存里的数据

从缓存里删除数据，我们可以使用cache对象里的delete()方法：

caches.open('test-cache').then(function(cache) {
  cache.delete('/page/1');
});
这样，缓存里将不再有/page/1请求数据。

获取现有的缓存里的缓存名称

想要获取缓存里已经存在的缓存数据的名称，我们需要使用caches.keys()方法：

caches.keys().then(function(cacheKeys) { 
  console.log(cacheKeys); // ex: ["test-cache"]
});
window.caches.keys()返回的也是一个Promise。

删除一个缓存对象

想要删除一个缓存对象，你只需要缓存的键名即可：

caches.delete('test-cache').then(function() { 
  console.log('Cache successfully deleted!'); 
});
大量删除旧缓存数据的方法：

// 假设`CACHE_NAME`是新的缓存的名称
// 现在清除旧的缓存
var CACHE_NAME = 'version-8';

// ...

caches.keys().then(function(cacheNames) {
  return Promise.all(
    cacheNames.map(function(cacheName) {
      if(cacheName != CACHE_NAME) {
        return caches.delete(cacheName);
      }
    })
  );
});
想成为一个service worker专家？上面的这些代码值得放到你的储备库里。火狐浏览器和谷歌浏览器都支持service worker，相信很快就会有更多的网站、app使用这种缓存技术来提高运行速度。









