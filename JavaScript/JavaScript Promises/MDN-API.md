# Promise




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise



Promise 对象用于异步计算。
一个 Promise 表示一个现在、将来或永不可能可用的值。

语法 

```
new Promise(
    /* executor */ 
    function(resolve, reject){...}
);
``` 

参数

executor
一个与参数resolve和 reject一起传递的函数 。
执行器函数由Promise实现立即执行，传递resolve和reject函数. (在Promise构造函数之前调用执行器甚至返回创建的对象)


Promise有以下几种状态:

    pending: 初始状态, 初始状态，未完成或拒绝。
    fulfilled: 意味着操作成功完成。
    rejected: 意味着操作失败。





## Promise.prototype.catch()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch

catch() 方法返回一个Promise，只处理拒绝的情况。
它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。

```
p.catch(onRejected);

p.catch(function(reason) {
    // 拒绝
});
``` 


参数

onRejected
    当Promise 被拒绝时,被调用的一个Function。 该函数拥有一个参数：
reason
    拒绝的原因。




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then


## Promise.prototype.then()



then() 方法返回一个  Promise。
它最多需要有两个参数：Promise的成功和失败情况的回调函数。

注意事项：
如果省略这两个参数，或者提供非函数，那么将创建一个没有其他处理程序的新Promise，只是采用 Promise 的最终状态，then 被调用。
如果省略第一个参数或非函数，创建的新 Promise 简单地采用 Promise 的完成状态，then被调用（如果它变为完成）。
如果省略第二个参数或非函数，创建的新 Promise 简单地采用 Promise 的拒绝状态，then被调用（如果它被拒绝）。


````
p.then(onFulfilled, onRejected);

p.then(
    function(value) {
        // fulfillment
    }, function(reason) {
        // rejection
    }
);
``` 

参数

then 返回一个由输入函数确定的Promise：

    如果 onFulfilled  或者 onRejected 抛出一个错误，或者返回一个拒绝的 Promise ，then 返回一个 rejected Promise。

    如果 onFulfilled  或者 onRejected 返回一个 resolves Promise，或者返回任何其他值，then 返回一个 resolved Promise。

onFulfilled
    一个 Function被调用， 当 Promise 满足时. 该函数有一个参数，即 fulfillment 值。

onRejected
    一个 Function被调用， 当 Promise 被拒绝时. 该函数有一个参数, 拒绝的 reason。


返回值

    一个 Promise.



http://es6-features.org/#PromiseUsage


http://es6-features.org/#PromiseCombination










## TypoPRO-OpenSans

http://es6-features.org/#ExpressionBodies


http://es6-features.org/index.css


https://github.com/rse/es6-support



<div class="slogan">
    See how cleaner and more concise<br>
    your JavaScript code can look and<br>
    <a href="https://github.com/rse/es6-support">start coding</a> in <a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ES6</a> <a href="https://github.com/rse/es6-support">now</a> !!
</div>

.slogan {
    font-family: "TypoPRO Journal";
    font-size: 25pt;
    color: #f0e0d0;
    position: fixed;
    right: 30px;
    bottom: 110px;
    transform: rotate(-4deg);
    -ms-transform: rotate(-4deg);
    -webkit-transform: rotate(-4deg);
    letter-spacing: 1px;
    line-height: 19pt;
}

<div class="statement">
    "A good programming language is a<br>
    conceptual universe for thinking<br>
    about programming." — Alan J. Perlis
</div>


.statement {
    font-family: "TypoPRO Journal";
    font-size: 25pt;
    color: #777777;
    position: fixed;
    right: 100px;
    bottom: 250px;
    transform: rotate(-4deg);
    -ms-transform: rotate(-4deg);
    -webkit-transform: rotate(-4deg);
    letter-spacing: 1px;
    line-height: 19pt;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}



@import "lib/normalize/normalize.css";
@import "lib/typopro/TypoPRO-OpenSans/TypoPRO-OpenSans-Light.css";
@import "lib/typopro/TypoPRO-OpenSans/TypoPRO-OpenSans-Regular.css";
@import "lib/typopro/TypoPRO-OpenSans/TypoPRO-OpenSans-Bold.css";
@import "lib/typopro/TypoPRO-OpenSans/TypoPRO-OpenSans-ExtraBold.css";
@import "lib/typopro/TypoPRO-DejaVu/TypoPRO-DejaVuSansMono-Regular.css";
@import "lib/typopro/TypoPRO-DejaVu/TypoPRO-DejaVuSansMono-Bold.css";
@import "lib/typopro/TypoPRO-DejaVu/TypoPRO-DejaVuSansMono-Oblique.css";
@import "lib/typopro/TypoPRO-DejaVu/TypoPRO-DejaVuSansMono-BoldOblique.css";
@import "lib/typopro/TypoPRO-Journal/TypoPRO-Journal.css";
@import "lib/fontawesome/fontawesome.css";


http://es6-features.org/index.css


http://es6-features.org/lib/typopro/TypoPRO-OpenSans/TypoPRO-OpenSans-Regular.css



/* TypoPRO Open Sans */
@font-face {
    font-family:  'TypoPRO Open Sans';
    src:          url('TypoPRO-OpenSans-Regular.eot');
    src:          local('*'),
                  url('TypoPRO-OpenSans-Regular.eot?#iefix') format('embedded-opentype'),
                  url('TypoPRO-OpenSans-Regular.woff') format('woff'),
                  url('TypoPRO-OpenSans-Regular.ttf') format('truetype');
    font-style:   normal;
    font-weight:  normal;
    font-stretch: normal;
    font-variant: normal;
}


http://es6-features.org/lib/typopro/TypoPRO-Journal/TypoPRO-Journal.css


/* TypoPRO Journal */
@font-face {
    font-family:  'TypoPRO Journal';
    src:          url('TypoPRO-Journal-Regular.eot');
    src:          local('*'),
                  url('TypoPRO-Journal-Regular.eot?#iefix') format('embedded-opentype'),
                  url('TypoPRO-Journal-Regular.woff') format('woff'),
                  url('TypoPRO-Journal-Regular.ttf') format('truetype');
    font-style:   normal;
    font-weight:  normal;
    font-stretch: normal;
    font-variant: normal;
}





http://typopro.org/specimen/


https://www.npmjs.com/package/typopro-web

https://www.versioneye.com/css/rse:typopro-web/3.4.3

https://github.com/rse/typopro




