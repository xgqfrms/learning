# JavaScript Promises  



https://classroom.udacity.com/courses/ud898/lessons/5972243496/concepts/60869607150923




F:\web-new\udacity


https://cn.udacity.com/course/javascript-promises--ud898


JavaScript Promises 规范

https://classroom.udacity.com/courses/ud898/lessons/5972243496/concepts/60869607150923




https://linux.die.net/man/1/ack

https://github.com/petdance/ack2

http://beyondgrep.com/

http://beyondgrep.com/install/



https://www.youtube.com/watch?v=MGzoRM3Al40

https://csswizardry.com/2017/01/ack-for-css-developers/

https://csswizardry.com/2017/02/code-smells-in-css-revisited/


$ ack --css "\b[0-9]+\.[0-9]+px"


ack + regex 

https://csswizardry.com/2017/01/ack-for-css-developers/



http://codepen.io/xgqfrms/pen/EZdNPg

https://www.realmacsoftware.com/clear/


https://gallery.mailchimp.com/282459d63a019df7bb8ca2e92/images/800d93e4-bfd6-4749-8dd0-f2c4fb784c17.gif


https://bitsofco.de/clear-js/

http://codepen.io/ire/pen/NNPaEQ


http://codepen.io/wesbos/pen/zrLjYq

http://wes.io/f1oa


http://codepen.io/wesbos/pen/JGVryP

http://wes.io/fAks



http://codepen.io/xgqfrms/pen/ggBLLB

Web Speech Demo








https://es6.io/

https://bitsofco.de/3-new-css-features-to-learn-in-2017/

https://bitsofco.de/the-one-css-feature/
















http://caniuse.com/#info_news

Can I use - New feature added: WebVR API


http://caniuse.com/#feat=webvr  
https://w3c.github.io/webvr/  


http://caniuse.com/#feat=url  
https://url.spec.whatwg.org/#api  




http://caniuse.com/#feat=async-functions  
https://tc39.github.io/ecmascript-asyncawait/  













http://taskjs.org/

generators + promises = tasks


http://wiki.commonjs.org/wiki/Promises/A


task.js 是一个用于ES6的实验库，它使用JavaScript的新yield操作符的强大功能，使顺序，阻塞I / O简单而美观。

The power of task.js comes from ES6 generators, which are currently only available in Firefox.

task.js的强大功能来自ES6生成器，目前只能在Firefox中使用。



<script type="application/javascript" src="task.js"></script>

<!-- 'yield' and 'let' keywords require version opt-in -->
<script type="application/javascript;version=1.8">
function hello() {
    let { spawn, sleep } = task;
    spawn(function() {      // Firefox does not yet use the function* syntax
        alert("Hello...");
        yield sleep(1000);
        alert("...world!");
    });
}
</script>



spawn(function*() {
    var data = yield $.ajax(url);
    $('#result').html(data);
    var status = $('#status').html('Download complete.');
    yield status.fadeIn().promise();
    yield sleep(2000);
    status.fadeOut();
});



The spawn function takes a generator function and starts running it as a concurrently-executed task. Every time the task yields a promise, the scheduler blocks the task until the promise is fulfilled.

spawn函数采用生成器函数并开始作为并发执行的任务运行它。每当任务产生一个promise时，调度程序会阻塞任务，直到满足promise。

https://github.com/mozilla/task.js (5 years ago)








https://github.com/mattdesl/promise-cookbook  

https://helloangular.com/observables-vs-promises/  





ttp://caniuse.com/#feat=async-functions  
https://tc39.github.io/ecmascript-asyncawait/  



http://taskjs.org/

generators + promises = tasks


https://github.com/mattdesl/promise-cookbook  

https://helloangular.com/observables-vs-promises/  


http://kosamari.com/notes/the-promise-of-a-burger-party

https://github.com/mattdesl/promise-cookbook/blob/master/README.md

http://liubin.org/promises-book/

https://github.com/liubin/promises-book/

https://developers.google.com/web/fundamentals/getting-started/primers/promises




promises



https://egghead.io/lessons/node-js-use-es6-style-promises-with-node-js#/tab-code



https://egghead.io/lessons/node-js-identify-memory-leaks-with-nodejs-dashboard


https://egghead.io/instructors/will-button









## Promises/A+


https://www.promisejs.org/  

https://promisesaplus.com/  

https://github.com/promises-aplus  

http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects  

http://www.ecma-international.org/ecma-262/7.0/#sec-promise-objects  


https://developers.google.com/web/fundamentals/getting-started/primers/promises


http://caniuse.com/#search=promises  

A promise represents the eventual result of an asynchronous operation.

promise表示异步操作的最终结果。

Global 77.19% +  0.07% = 77.26%


https://davidwalsh.name/promises






https://developers.google.com/web/updates/2016/03/play-returns-promise

https://googlechrome.github.io/samples/play-return-promise/


https://developers.google.com/web/updates/2017/02/media-session

https://developers.google.com/web/updates/tags/notifications




https://developers.google.com/web/

https://developers.google.com/web/updates/

https://developers.google.com/web/updates/tags/

https://developers.google.com/web/updates/tags/es6  

https://developers.google.com/web/updates/tags/es2015  



https://developers.google.com/web/


https://developers.google.com/web/tools/

https://developers.google.com/web/fundamentals/

https://developers.google.com/web/showcase/

https://developers.google.com/web/updates/







https://www.chromestatus.com/features/







https://developers.google.com/web/fundamentals/vr/

Warning: WebVR is still experimental and subject to change.






https://developers.google.com/web/fundamentals/getting-started/primers/promises

https://developers.google.com/web/fundamentals/getting-started/primers/async-functions

https://developers.google.com/web/fundamentals/getting-started/primers/service-workers


https://developers.google.com/web/updates/2015/10/media-devices  
https://webrtc.github.io/samples/src/content/getusermedia/gum/  
https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/gum  










https://wiki.csswg.org/ideas/mistakes

https://wiki.csswg.org/test

https://wiki.csswg.org/ideas







https://github.com/github/fetch  
https://github.github.io/fetch/  

https://davidwalsh.name/fetch  
https://fetch.spec.whatwg.org/  
http://caniuse.com/#search=fetch  

A modern replacement for XMLHttpRequest.

XMLHttpRequest的现代替代品。

Global 63.62% + 0.1% = 63.72%

https://developers.google.com/web/updates/2015/03/introduction-to-fetch

https://davidwalsh.name/xmlhttprequest





https://www.w3.org/TR/audio-output/







https://davidwalsh.name/vibration-api  
https://www.w3.org/TR/vibration/  
https://w3c-html-ig-zh.github.io/vibration/  






https://davidwalsh.name/javascript-battery-api  
https://www.w3.org/TR/battery-status/  
http://caniuse.com/#search=battery  

Method to provide information about the battery status of the hosting device.

提供关于主机设备的电池状态的信息的方法。

Global 62.3% + 9.51% = 71.82%




https://github.com/Fyrd/caniuse/wiki/Third-party-tools

http://www.iwanttouse.com/





https://laracasts.com/series/es6-cliffsnotes

https://laracasts.com/series/es6-cliffsnotes/episodes/16

ES2015 Generators

https://laracasts.com/series/es6-cliffsnotes/episodes/13

Promises 101


A JavaScript Promise represents the result of an operation that hasn't been completed yet, but will at some undetermined point in the future.

JavaScript承诺表示尚未完成但在未来某个未确定点的操作的结果。














http://kosamari.com/notes/the-promise-of-a-burger-party

https://bitsofco.de/javascript-promises-101/





https://laracasts.com/series/es6-cliffsnotes/episodes/13

https://egghead.io/lessons/node-js-use-es6-style-promises-with-node-js#/tab-code




https://developers.google.com/web/updates/tags/es6

https://developers.google.com/web/updates/tags/es2015

https://developers.google.com/web/updates/tags/javascript




https://developers.google.com/web/updates/2016/02/es2015-proxies

https://developers.google.com/web/updates/2012/03/Optimizing-JavaScript






<script>
function escape(input) {
    var stripTagsRE = /<\/?[^>]+>/gi;
    input=input.replace(stripTagsRE, '');
    input=input.replace(/[(]/g, '');
    input=input.replace(/>|on.+?=|focus/gi, '_');
    return '<article>' + input + '</article>';
}     
document.write("<h1>意见反馈预览页</h1>");
//服务端将你的输入转成base64
text=decodeURIComponent(atob("JTI2JTIzeDNDJTNCJTBEJTBBc2NyaXB0JTI2JTIzeDNFJTNCKyUwRCUwQWFsZXJ0JTI2JTIzeDI4JTNCJTIyaGVsbG8lMkMrWFNTJTIxJTIyJTI5KyUwRCUwQSUyNiUyM3gzQyUzQiUwRCUwQSUyNiUyM3gyRiUzQiUwRCUwQXNjcmlwdCUwRCUwQSUyNiUyM3gzRSUzQiUwRCUwQQ=="));
text=text.replace(/[+]/g,' ');
document.write(escape(text));
</script>


http://www.qlcoder.com/train/suggest?text=%26%23x3C%3B%0D%0Ascript%26%23x3E%3B+%0D%0Aalert%26%23x28%3B%22hello%2C+XSS%21%22%29+%0D%0A%26%23x3C%3B%0D%0A%26%23x2F%3B%0D%0Ascript%0D%0A%26%23x3E%3B%0D%0A



http://www.technicalinfo.net/papers/CSS.html

https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
https://www.owasp.org/index.php/Testing_for_Cross_site_scripting



https://www.acunetix.com/websitesecurity/cross-site-scripting/


https://www.veracode.com/security/xss

https://www.youtube.com/watch?v=t161cahMAZc


https://github.com/leizongmin/js-xss



http://www.martani.net/2009/08/xss-steal-passwords-using-javascript.html

https://excess-xss.com/




















http://www.webhek.com/javascript-promise-programming


Promise异步编程模式总结



http://www.webhek.com/javascript-promise-api


JavaScript Promise API






你不需要Lodash或Underscore —— 用JavaScript原生函数替代


https://github.com/kyhwsk/notes/blob/master/underscore%E4%B8%8Elodash.md

http://fordawn.in/

http://www.bootcss.com/p/underscore/


http://www.webhek.com/apps/you-dont-need-lodash-underscore/ 


Lodash和Underscore是两款非常流利的JavaScript工具库，广泛的被程序员用于WEB前端开发。然而，如果你使用的是现代浏览器，你会发现，有很多的方法、函数实际是可以使用原生的JavaScript函数代替，这要感谢ECMAScript5 [ES5]和ECMAScript2015 [ES6]。如果你希望你的项目能有更少的依赖，而且你使用的是现代浏览器，那么，使用下面介绍的方法，你完全不再需要Lodash/Underscore等使用多年的JavaScript工具库。

**需要注意的是，下面的代码例子只是用来展示如何用原生的JavaScript函数替代Lodash/Underscore里的函数执行等效的任务，但Lodash/Underscore可能会提供更丰富的功能特性，所以，不要1:1的比较它们。
















http://www.webhek.com/linux-file-extension-change-shortcut


修改文件后缀是我们经常会遇到的操作，在Windows系统下，这个操作也许很简单。但在Linux下，我们经常需要在命令行执行操作，传统的做法就是将文件移动成另外一个文件，顺便更换了文件名称。但其实我们经常只需要修改的是文件的后缀，虽然多输入整个文件名一次也不是太多的劳动，但如果重复经常做这种事情，也会让人感到懊恼。

直到最近，我才发现一个修改文件名后缀的快捷方法：

# mv filename.{old,new}
mv code.{txt,js}
花括号的语法能让你方便的更换文件的后缀，而避免了重复输入文件名。不错吧！




http://www.webhek.com/7-essential-javascript-functions


WEB开发者必备的7个JavaScript函数



http://www.webhek.com/get-absolute-url


http://www.webhek.com/popup-blocker

用JavaScript检查弹出窗口是否被阻拦的方法



http://www.webhek.com/effective-javascript

前端程序员必须知道的高性能Javascript知识


重绘与重排

浏览器下载完HTMl，CSS，JS后会生成两棵树：DOM树和渲染树。 当Dom的几何属性发生变化时，比如Dom的宽高，或者颜色，position，浏览器需要重新计算元素的几何属性，并且重新构建渲染树，这个过程称之为重绘重排。

bodystyle = document.body.style; 
bodystyle.color = red; 
bodystyle.height = 1000px; 
bodystyke.width = 100%;

上述方式修改三个属性，浏览器会进行三次重排重绘，在某些情况下，减少这种重排可以提高浏览器渲染性能。 推荐方式如下，只进行一次操作，完成三个步骤：

bodystyle = document.body.style; 
bodystyle.cssText 'color:red;height:1000px;width:100%';


http://insights.thoughtworkers.org/effective-javascript/



https://developer.github.com/v3/users/#get-a-single-user



https://api.github.com/users?since=135

https://api.github.com/users/octocat



http://www.webhek.com/block-isp-pop-ad


站长如何屏蔽流氓宽带商在你的页面里面强行插入的广告代码



http://www.webhek.com/css-user-select


使用CSS里的user-select属性控制用户在页面上选中的内容


用纯CSS绘制美国动画片《辛普森一家》中的各种人物

http://www.webhek.com/simpsons-in-css



https://github.com/pattle/simpsons-in-css/




http://www.webhek.com/demo/nudity-detection

http://www.webhek.com/nudity-detection/


https://www.patrick-wied.at/static/nudejs/

https://github.com/pa7/nude.js

http://www.webhek.com/demo/face-detection

JavaScript人脸识别技术

http://www.webhek.com/html5-canvas-clock


http://www.webhek.com/demo-css-triangles


纯CSS绘制的三角形箭头图案效果演示

http://www.webhek.com/demo-css-cube-colorful


http://www.webhek.com/background-animation-css-cloud

https://davidwalsh.name/background-animation-css


http://www.webhek.com/10-amazing-html5-drawing-and-sketching-tools-for-designers

http://www.webhek.com/black-tech-in-css

新手玩CSS中的一些黑科技


http://www.webhek.com/deprecated-html-tags



那些不推荐使用的html标签



http://www.webhek.com/misc/circumscrible


http://www.webhek.com/misc/responsive-web-design





