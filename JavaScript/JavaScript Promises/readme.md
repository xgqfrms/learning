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









