# FileReader



使用FileReader实现前端图片预览

    在FileReader出现之前，前端的图片预览是这样实现的：
    把本地图片上传到服务器，服务器把图片地址返回，并把它替换到图片元素的src属性。
    这种方法的缺点是：
    必须要先把图片上传到服务器。那么问题来了，如果上传的图片很大，而网速又很慢，这就需要等待很久预览图片才会显示出来了，而且，如果用户预览图片后发现不太满意，想重新选择一张图片，这时候还要把已经上传到服务器上的图片给删除掉。

自从有了HTML5的FileReader对象以后，预览图片变得简单多了，不再需要后台的配合，并且JS操作本地文件已经成为了可能。
这种方法的思路是：
    通过FileReader.prototype.readAsDataURL()方法把图片文件转成base64编码，然后把base64编码替换到预览图片的src属性即可。



http://www.cnblogs.com/yugege/p/6367833.html


https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader

FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。








































## window.URL()


https://developer.mozilla.org/zh-CN/docs/Web/API/Window/URL


Window.URL 属性返回一个对象，它提供了用于创建和管理对象URLs的静态方法。
它也可以作为一个构造函数被调用来构造 URL 对象。


Note: 此功能在Web Workers中可用。


调用一个静态方法：

img.src = URL.createObjectURL(blob);

构造一个新对象：

var url = new URL("../cats/", "https://www.example.com/dogs/");




https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL




https://url.spec.whatwg.org/#dom-url

https://url.spec.whatwg.org/#constructors



