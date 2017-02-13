# FileReader API  




http://www.webhek.com/filereader-api


http://www.webhek.com/javascript-upload-file-api





https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications


HTML5文件上传FileReader API





文件上传功能现在是越来越普遍，所有的社交网站，媒体网站，比如优酷视频，微博等，都提供了上传图片，上传视频等功能。但过去WEB程序员都很清楚，用HTML表单上传文件是很麻烦的事情，特别是你想了解一下用户上传的文件的一些属性，必须等它上传完成后才能知道。

未知的东西上传到服务器上，有可能产生安全问题，也有可能体积太大，超过允许，浪费空间。现在好了，WEB技术在进步，HTML5带来了很多好东西。这个FileReader API就能让你在用户上传之前就能获取上传文件的一些基本属性。

这个FileReader API 的工作原理和 File API 一样，需要使用input[type="file"] 元素：


在File API这篇文章里有详细的关于能读取到的文件的相关信息，比如地址，体积，尺寸大小，文件类型等等。





我们使用 FileReader 里的 readAsDataURL 方法将图片内容转换成base64编码的字符串，
然后使用图片的data URI方式显示它。

其它的 FileReader 读取方法还有 readAsText, readAsArrayBuffer 和 readAsBinaryString 等



有了这个FileReader API，我们就可以避免用户先将文件上传到服务器，
在浏览器客户端我们就可以进行操作。

这些在上传到服务器前的预处理是很有必要的






http://www.webhek.com/javascript-upload-file-api


JavaScript里的文件上传API

对于Web程序员来说，在网页上处理文件上传，总是一件很麻烦的事情。在过去，我们不能够通过拖拽上传图片，也没有复杂Ajax上传技术，很少处理多文件批量上传。我们也无法获取上传过程中的信息，除非上传完成后从服务器端获得。有时候，等你上传完毕后才发现上传的文件不合适——真该死！

如今，HTML5的革命，现代浏览器的诞生，JavaScript的升级，这些给我们提供了使用Javascript和input[type=file]元素获取上传文件过程信息的能力。下面就来看看这些上传文件API是如何使用的！

访问要上传的文件列表信息

如果要获得所有input[type=file]里要上传的文件列表，你需要使用files属性：

// Assuming <input type="file" id="upload" multiple>

var uploadInput = document.getElementById('upload');

uploadInput.addEventListener('change', function() {
    console.log(uploadInput.files) // File listing!
});


不幸的是，这个FileList并没有一个叫做forEach的方法，所以我们只能使用老式的循环技巧对FileList进行循环操作：

for (var i = 0, fileCount = uploadInput.files.length; i < fileCount; i++) {
  console.log(files[i]);
}


很重要的一点，FileList里是有一个length属性的。



获取单个上传文件的信息

FileList里的每个文件对象里都保存着大量的关于这个文件的信息，包括文件的体积大小，文件MIME类型，最后修改时间，文件名称等：




{
    lastModified: 1428005315000,
    lastModifiedDate: Thu Apr 02 2015 15:08:35 GMT-0500 (CDT),
    name: "profile.pdf",
    size: 135568,
    type: "application/pdf",
    webkitRelativePath: ""
}



这些基础信息对我们来说最大的用处就是，我们可以在上传文件之前校验它们。例如，你可以校验文件的类型和体积大小：



var maxAllowedSize = 500000;

for (var i = 0, fileCount = uploadInput.files.length, totalSize = 0; i < fileCount; i++) {
    totalSize += files[i].size;
    if(totalSize > maxAllowedSize) {
        // Notify the user that their file(s) are too large
    }

    if(files[i].type != 'application/pdf') {
        // Notify of invalid file type for file in question
    }
}


如果用户上传的文件的体积太大，超过了允许范围，或上传的类型不对，你可以阻止用户上传，然后给予他们必要的提示，是什么原因不能上传成功。

今天就对文件上传API做这么多简单的介绍。这是一个很好的API，帮助我们放置在上传文件时浪费大量的时间。这个文件上传API里很有很多这里没有介绍的知识，你可以到MDN上进心详细阅读。





http://www.webhek.com/window-postmessage-api



window.postMessage





http://www.webhek.com/postmessage-cross-domain-post


使用HTML5中postMessage实现Ajax中的POST跨域问题













