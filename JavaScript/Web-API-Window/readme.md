# Web/API/Window/open


## window.open

https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open


根据指定的参数，将一个资源加载到一个新的浏览上下文（如一个窗口）或一个已经存在的浏览上下文中。

语法
let windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]); 

// strUrl === 要在新打开的窗口中加载的URL。

// strWindowName === 新窗口的名称。

// strWindowFeatures === 一个可选参数，列出新窗口的特征(大小，位置，滚动条等)作为一个DOMString。




https://gist.github.com/xgqfrms-GitHub/9b71f82c921365fb5a469c280d424fa9


```js
let windowObjectReference;
let strWindowFeatures = `
    menubar=yes,
    location=yes,
    resizable=yes,
    scrollbars=yes,
    status=yes
`;

function openRequestedPopup() {
    windowObjectReference = 
    window.open(
        "https://cdn.xgqfrms.xyz/", 
        "xgqfrms's CDN website", 
        strWindowFeatures
    );
}
```

