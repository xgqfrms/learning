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



http://caniuse.com/#feat=ping  
https://html.spec.whatwg.org/multipage/semantics.html#ping  

When used on an anchor, this attribute signifies that the browser should a ping request the resource the attribute points to.

当在锚点上使用时，此属性表示浏览器应该ping请求属性指向的资源。


http://caniuse.com/#feat=form-submit-attributes  


Attributes for form submission that may be specified on submit buttons. The attributes are: formaction, formenctype, formmethod, formnovalidate, and formtarget

可以在提交按钮上指定的表单提交的属性。属性是：formaction，formenctype，formmethod，formnovalidate和formtarget


http://caniuse.com/#feat=web-app-manifest  
https://www.w3.org/TR/appmanifest/  


The web app manifest provides information about an application (such as name, author, icon, and description) in a JSON file, which browsers can use to give richer offline experiences.

网络应用清单在JSON文件中提供有关应用程序的信息（例如名称，作者，图标和说明），浏览器可以使用这些信息来提供更丰富的离线体验。



http://caniuse.com/#feat=http-live-streaming  
https://tools.ietf.org/html/draft-pantos-http-live-streaming-19  



HTTP-based media streaming communications protocol

基于HTTP的媒体流通信协议



http://caniuse.com/#feat=passive-event-listener  
https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive  


Event listeners created with the passive: true option cannot cancel (preventDefault()) the events they receive.

使用passive：true选项创建的事件侦听器无法取消（preventDefault（））其接收的事件。

Primarily intended to be used with touch events and wheel events. Since they cannot prevent scrolls, passive event listeners allow the browser to perform optimizations that result in smoother scrolling.

主要用于触摸事件和车轮事件。由于无法阻止滚动，被动事件侦听器允许浏览器执行优化，导致更平滑的滚动。



http://caniuse.com/#feat=comparedocumentposition  
https://dom.spec.whatwg.org/#dom-node-comparedocumentposition  


Compares the relative position of two nodes to each other in the DOM tree.

比较DOM树中两个节点之间的相对位置。




http://caniuse.com/#feat=mutationobserver  


Method for observing and reacting to changes to the DOM. Replaces MutationEvents, which is deprecated.

用于观察和反应DOM变化的方法。替换MutationEvents，它已被弃用。



http://caniuse.com/#feat=mutation-events

Deprecated mechanism for listening to changes made to the DOM, replaced by Mutation Observers.

用于监听对DOM所做更改的已弃用机制，由Mutation Observers替代。



http://caniuse.com/#feat=css-paged-media  


CSS at-rule (@page) to define page-specific rules when printing web pages, such as margin per page and page dimensions.

CSS规则（@page）用于在打印网页时定义页面特定的规则，例如页面边距和页面尺寸。



