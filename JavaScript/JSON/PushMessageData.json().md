# PushMessageData.json()

https://www.w3.org/TR/push-api/

https://w3c.github.io/push-api/#widl-PushMessageData-json-JSON




https://developer.mozilla.org/zh-CN/docs/Web/API/PushMessageData/json


PushMessageData 接口的 json()方法将推送消息数据提取为 一个 JSON 对象。


https://developer.mozilla.org/zh-CN/docs/Web/API/PushMessageData

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON


```js

self.addEventListener('push', function(event) {
    let jsonObj = event.data.json();
    // do something with your JSON
});

``` 


https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Using_the_Push_API

https://developer.mozilla.org/en-US/docs/Web/API/Push_API



https://developer.mozilla.org/zh-CN/docs/Web/API/Notifications_API



Notifications API 允许网页控制向最终用户显示系统通知 —这些都在顶级浏览上下文视口之外，因此即使用户已经切换标签页或移动到不同的应用程序，也可以显示。该API被设计成与不同平台上的现有通知系统兼容。



https://developer.mozilla.org/zh-CN/docs/Web/API/Notification/Notification

https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API



Service workers 本质上充当位于Web应用程序之间的代理服务器，以及浏览器和网络（如果可用）。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资产是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步API。


https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API 


https://notifications.spec.whatwg.org/



https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API


Service workers 本质上充当位于Web应用程序之间的代理服务器，以及浏览器和网络（如果可用）。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资产是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步API。




















