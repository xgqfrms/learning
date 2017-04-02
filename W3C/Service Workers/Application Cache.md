# Application Cache




https://www.html5rocks.com/zh/tutorials/appcache/beginner/

http://www.w3school.com.cn/html5/html_5_app_cache.asp


```html

<html manifest="demo.appcache">


<!DOCTYPE html>
<html lang="en" manifest="manifest.appcache">
<head>
    <meta charset="UTF-8">
    <title>Application Cache - manifest</title>
</head>
<body>
    <div>
        <h1>Application Cache - manifest</h1>
        <div>
            <pre>
                <!-- Application Cache - manifest -->
            </pre>
        </div>
    </div>
</body>
</html>



``` 



http://html5doctor.com/go-offline-with-application-cache/

https://www.w3.org/TR/2011/WD-html5-20110525/offline.html

## https://www.w3.org/TR/html5/iana.html#iana

12 IANA considerations
12.1 text/html
12.2 multipart/x-mixed-replace
12.3 application/xhtml+xml
12.4 application/x-www-form-urlencoded
12.5 text/cache-manifest
12.6 web+ scheme prefix


https://www.w3.org/TR/html5/iana.html#application/x-www-form-urlencoded


https://www.w3.org/TR/html5/iana.html#text/cache-manifest

https://www.w3.org/TR/html/single-page.html#expiring-application-caches

https://www.w3.org/TR/html/single-page.html#disk-space


https://www.w3.org/TR/html5/infrastructure.html#cors-enabled-fetch

https://www.w3.org/TR/html5/infrastructure.html#cors-settings-attributes

https://www.w3.org/TR/html5/infrastructure.html#encrypted-http-and-related-security-concerns

https://www.w3.org/TR/html5/infrastructure.html#dynamic-changes-to-base-urls

https://www.w3.org/TR/html5/infrastructure.html#fetch



https://www.w3.org/TR/html5/dom.html#metadata-content

https://www.w3.org/TR/html5/dom.html#flow-content

https://www.w3.org/TR/html5/embedded-content-0.html#best-practices-for-implementors-of-media-elements

https://www.w3.org/TR/html5/embedded-content-0.html#best-practices-for-authors-using-media-elements


https://www.w3.org/TR/html5/links.html#link-type-prefetch

https://www.w3.org/TR/html5/links.html#external-resource-link


https://www.w3.org/TR/html5/links.html#rel-icon


https://www.w3.org/TR/html5/forms.html#the-multiple-attribute

https://www.w3.org/TR/html5/forms.html#the-step-attribute

https://www.w3.org/TR/html5/forms.html#the-list-attribute

https://www.w3.org/TR/html5/forms.html#url-encoded-form-data

https://www.w3.org/TR/html5/forms.html#selecting-a-form-submission-encoding

https://www.w3.org/TR/html5/scripting-1.html#the-template-element

https://www.w3.org/TR/html5/browsers.html#the-history-interface

https://www.w3.org/TR/html5/browsers.html#the-location-interface

https://www.w3.org/TR/html5/browsers.html#read-html





https://www.w3.org/TR/html5/browsers.html#appcache

https://www.w3.org/TR/html5/browsers.html#concept-appcache-manifest

https://www.w3.org/TR/html5/browsers.html#concept-appcache-explicit

https://www.w3.org/TR/html5/browsers.html#concept-appcache-fallback

https://www.w3.org/TR/html5/browsers.html#concept-appcache-manifest-explicit

https://www.w3.org/TR/html5/browsers.html#concept-appcache-manifest-fallback


manifest 文件的建议的文件扩展名是：".appcache"。

请注意，manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。


Manifest 文件
manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。
manifest 文件可分为三个部分：
CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

CACHE MANIFEST
NETWORK:
comm.cgi
CACHE:
style/default.css
images/sound-icon.png
images/background.png


CACHE MANIFEST

/main/home
/main/app.js
/settings/home
/settings/app.js
http://img.example.com/logo.png
http://img.example.com/check.png
http://img.example.com/cross.png



CACHE MANIFEST
FALLBACK:
/ /offline.html
NETWORK:
*



## MIME type

https://www.w3.org/TR/html5/infrastructure.html#mime-type

https://www.w3.org/TR/html5/iana.html#text/cache-manifest

应用程序缓存清单是一个文本文件，其文本使用UTF-8进行编码。
应用程序缓存清单中的数据是基于行的。


应用程序缓存清单的第一行必须由字符串“CACHE”组成，单个U + 0020空格字符，字符串“MANIFEST”，以及U + 0020空格字符，“标签”（U + 0009）字符，“LF”（U + 000A）个字符或“CR “（U + 000D）字符。

第一行可以可选地前面有“BOM”（U + FEFF）字符。如果在第一行找到任何其他文本，则会被忽略。


空行必须由零个或多个U + 0020 SPACE和“tab”（U + 0009）字符组成。

注释行必须包含零个或多个U + 0020 SPACE和“tab”（U + 0009）字符，后跟一个单个“＃”（U + 0023）字符，后跟零个或多个字符，而不是“LF”（U + 000A）和“CR”（U + 000D）字符。

评论必须自己一行。如果将它们包含在带有URL的行上，则“＃”将被误认为是片段标识符的一部分。


CACHE:
Switches to the explicit section.
FALLBACK:
Switches to the fallback section.
NETWORK:
Switches to the online whitelist section.
SETTINGS:
Switches to the settings section.




https://www.w3.org/TR/html5/browsers.html#concept-appcache-mode

https://www.w3.org/TR/html5/browsers.html#concept-appcache-mode-prefer-online

https://www.w3.org/TR/html5/browsers.html#concept-appcache-mode-fast


https://www.w3.org/TR/html5/browsers.html#application-cache-download-process



```js

document.getElementById('indicator').textContent


document.getElementById('application-cache-api').textContent

// "5.7.9 Application cache API"

document.getElementById('application-cache-api').style



document.getElementById('application-cache-api').innerText

// "5.7.9 Application cache API"

document.getElementById('application-cache-api').innerHTML

// "<span class="secno">5.7.9 </span>Application cache API"



document.getElementById('application-cache-api').textContent = navigator.onLine ? 'online' : 'offline';

// "online"


``` 



```html

<!DOCTYPE HTML>
<html>
<head>
    <title>Online status</title>
</head>
<body onload="updateIndicator()" ononline="updateIndicator()" onoffline="updateIndicator()">
    <p>The network is: <span id="indicator">(state unknown)</span>
    <script>
        function updateIndicator() {
            document.getElementById('indicator').textContent = navigator.onLine ? 'online' : 'offline';
        }
    </script>
</body>
</html>

```


https://www.w3.org/TR/html5/browsers.html#applicationcache

https://www.w3.org/TR/html5/browsers.html#manifests

https://www.w3.org/TR/html5/browsers.html#application-cache-api


HTML 5 应用程序缓存

























