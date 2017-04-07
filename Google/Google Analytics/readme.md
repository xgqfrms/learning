# GA


https://developers.google.com/analytics/devguides/collection/analyticsjs/#the_javascript_tracking_snippet

## 将 analytics.js 添加到网站中

Analytics.js 库是一种可用于衡量用户与您网站的互动情况的 JavaScript 库。

### JavaScript 跟踪代码段



```js

<!-- Google Analytics -->
<script>
// IIFE 立即调用函数表达式
/* 
https://zh.wikipedia.org/wiki/%E7%AB%8B%E5%8D%B3%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F

https://zh.wikipedia.org/wiki/立即调用函数表达式
*/

(function(i,s,o,g,r,a,m){
    // i = window
    // s= document
    // o= script
    // g= https://www.google-analytics.com/analytics.js
    // r = ga
    // a = ?
    // m = ?
    i['GoogleAnalyticsObject']=r;
    // window['GoogleAnalyticsObject'] = ga;
    i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)
    },
    i[r].l=1*new Date();
    /*
    window[ga] = window[ga] || function(){
        (window[ga].q=window[ga].q||[]).push(arguments);
    },
    window[ga].l=1*new Date();
     */
    a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];
    /*
    a=document.createElement("script"),
    m=document..getElementsByTagName("script")[0];
    */
    a.async=1;
    // document.createElement("script").async=1;
    a.src=g;
    // document.createElement("script").src="https://www.google-analytics.com/analytics.js";
    m.parentNode.insertBefore(a,m);
    // document.getElementsByTagName("script")[0].parentNode.insertBefore(a,m);;
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->

```

> 以上代码进行了以下四项操作：

1. 创建了一个 <script> 元素，并开始从 https://www.google-analytics.com/analytics.js 异步下载 analytics.js JavaScript 库。

2. 初始化了一个全局函数 ga（也称为 ga() 命令队列），您可以通过该函数来安排要在 analytics.js 库加载完毕可供使用时执行的命令。

3. 在 ga() 命令队列中添加一条命令，为通过 'UA-XXXXX-Y' 参数指定的媒体资源创建一个新的跟踪器对象。

4. 在 ga() 命令队列中添加另一条命令，为当前页面向 Google Analytics（分析）发送网页浏览数据。

自定义实现时可能需要修改 JavaScript 跟踪代码段的最后两行（create 和 send 命令）或添加更多代码来跟踪更多互动。
但不应该更改加载 analytics.js 库或初始化 ga() 命令队列函数的代码。


## 备用异步跟踪代码段

虽然上述 JavaScript 跟踪代码段可以确保该脚本在所有浏览器中加载和异步执行，但不足之处是不能让新型浏览器预加载该脚本。

```js
<!-- Google Analytics -->
<script>
    window.ga=window.ga||function(){
        (ga.q=ga.q||[]).push(arguments)
    };
    ga.l=+new Date;
    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');
</script>

<script async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->

```


### 跟踪代码段可以捕获哪些数据？

当您在网站中添加了上述任何一种跟踪代码段之后，就会针对用户访问的每个页面发送网页浏览数据。

Google Analytics（分析）通过处理此数据可以推导出大量信息，其中包括：

+ 用户总共在您网站上停留了多少时间。

+ 用户在每个网页上停留的时间以及用户查看这些网页的次序。

+ 用户点击了哪些内部链接（根据下一个网页浏览的网址得到）。

此外，IP 地址、用户代理字符串以及 analytics.js 在创建新跟踪器时查看的初始网页可用于确定以下这类信息：

+ 用户的地理位置。

+ 用户使用的浏览器和操作系统。

+ 屏幕尺寸以及是否安装了 Flash 或 Java。

+ 引荐网站。



## analytics.js 的工作原理 


https://developers.google.com/analytics/devguides/collection/analyticsjs/how-analyticsjs-works


您需要使用 analytics.js 进行的所有跟踪几乎都可以使用 ga() 命令队列完成。
本指南介绍什么是命令队列、其工作原理以及如何执行命令来跟踪用户互动。


ga 命令队列

JavaScript 跟踪代码段定义了一个称为“命令队列”的全局函数 ga。之所以称其为命令队列，是因为该函数不会立即执行其中的命令，而是将这些命令加入到队列中，将这些命令的执行被延迟 analytics.js 库加载完成后进行。

在 JavaScript 中，函数也是对象，这意味着函数中也可以包含属性。跟踪代码段在 ga 函数对象上定义了一个值为空数据的 q 属性。在 analytics.js 库尚未加载完成之前，调用 ga() 函数会将传递给 ga() 函数的参数列表附加到 q 数组的尾部。

例如，如果您运行跟踪代码段并立即将 ga.q 中的内容写入控制台日志，就会看到一个数组，其中有两个元素，分别包含已传递给 ga() 函数的两组参数：

```js
    console.log(ga.q);

    // Outputs the following:
    // [
    //   ['create', 'UA-XXXXX-Y', 'auto'],
    //   ['send', 'pageview']
    // ]

```
analytics.js 加载完成后，会立即查看 ga.q 数组的内容并依次执行每条命令。然后，ga() 函数将被重新定义以立即执行之后的调用。

在这种模式下，开发者在使用 ga() 命令队列时无需担心 analytics.js 库是否已完成加载。该模式提供了一种类似于同步代码的简单接口，规避了异步代码的诸多复杂性。




将命令添加到队列

对 ga() 命令队列的所有调用都使用同一个签名。第一个参数，“命令”，是一个标识特定 analytics.js 方法的字符串。其他参数是要传递给该方法的参数。

特定命令所使用的方法可以是全局方法（例如 ga 对象的 create 方法），也可以是跟踪对象的实例方法（例如 send）。如果 ga() 命令队列收到一条它无法识别的命令，会直接将其忽略，因此，在调用 ga() 函数时请仔细慎重，因为这些调用几乎不可能报错。

要查看可通过命令队列执行的所有命令的详尽列表，请参阅 ga() 命令队列参考。

命令参数

大多数 analytics.js 命令（及其相应方法）都接受多种不同格式的参数。这是为了便于向特定方法传递常用字段。

以下面的 JavaScript 跟踪代码段中的两条命令为例：

```js
    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');

```
在第一条命令中，create 接受了通过第二个、第三个和第四个可选参数指定的相应 trackingId、cookieDomain 和 name 字段。send 命令接受通过第二个可选参数指定的 hitType。

所有命令均接受普遍适用的 fieldsObject 参数，该这种参数可用于指定任何字段。例如，可将上述跟踪代码段中的两条命令改写为：

```js
    ga('create', {
        trackingId: 'UA-XXXXX-Y',
        cookieDomain: 'auto'
    });
    ga('send', {
        hitType: 'pageview'
    });

```
要查看每个命令所允许的可选参数的详尽列表，请参阅 ga() 命令队列参考。





















