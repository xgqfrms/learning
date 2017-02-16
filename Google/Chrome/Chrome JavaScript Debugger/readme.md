# Chrome JavaScript Debugger


http://discover-devtools.codeschool.com/



## Explore and Master Chrome DevTools



http://discover-devtools.codeschool.com/?locale=en



What You'll Learn in This Course:

Chapter 1: Getting Started & Basic DOM and Styles

Chapter 2: Advanced DOM and Styles

Chapter 3: Working With the Console

Chapter 4: Debugging JavaScript

Chapter 5: Improving Network Performance

Chapter 6: Improving Performance

Chapter 7: Memory Profiling




## Chrome 开发者工具

https://developers.google.com/web/tools/chrome-devtools

快捷键 Ctrl+Shift+I (Windows)




Chrome 开发者工具

Chrome 开发者工具是一套内置于Google Chrome中的Web开发和调试工具，可用来对网站进行迭代、调试和分析。

Dogfood: 寻找最新版本的Chrome 开发者工具, Chrome Canary 总是有最新的DevTools.
打开Chrome 开发者工具


https://www.google.com/intl/en/chrome/browser/canary.html

https://github.com/googlechrome










Ctrl+Shift+I



TL;DR

too long not read



Ctrl+Shift+J





All Shows all console output

Errors  Only show output from console.error().
Warnings    Only show output from console.warn().
Info    Only show output from console.info().
Logs    Only show output from console.log().
Debug   Only show output from console.timeEnd() and console.debug().



## Keyboard Shortcuts Reference 键盘快捷键参考

https://developers.google.com/web/tools/chrome-devtools/shortcuts




## Custom Object Formatters in Chrome DevTools



https://developers.google.com/web/tools/chrome-devtools/console/



## Set Up Persistence with DevTools Workspaces

https://developers.google.com/web/tools/setup/setup-workflow





## Measure Performance with the RAIL Model

https://developers.google.com/web/fundamentals/performance/rail



16ms (1000ms / 60 frames per second = 16.66ms per frame).

60fps





RAIL Step   Key Metric  User Actions

Response    Input latency (from tap to paint) < 100ms.  User taps a button (for example, opening navigation).

Animation   Each frame's work (from JS to paint) completes < 16ms.  User scrolls the page, drags a finger (to open a menu, for example), or sees an animation. When dragging, the app's response is bound to the finger position, such as pulling to refresh, or swiping a carousel. This metric applies only to the continuous phase of drags, not the start.

Idle    Main thread JS work chunked no larger than 50ms.    User isn't interacting with the page, but main thread should be available enough to handle the next user input.

Load    Page considered ready to use in 1000ms. User loads the page and sees the critical path content.



## 渲染性能

https://developers.google.com/web/fundamentals/performance/rendering/




像素渲染流水线

在编写web页面时，你需要理解你所写的页面代码是如何被转换成屏幕上显示的像素的。
这个转换过程可以归纳为这样的一个流水线，包含五个关键步骤：

JavaScript(DOM) > Style > Layout > Paint > Composite

JS DOM > 样式 CSSOM > 布局 > 绘制 > 合成




JavaScript。

一般来说，我们会使用JavaScript来实现一些视觉变化的效果。比如用jQuery的animate函数做一个动画、对一个数据集进行排序、或者往页面里添加一些DOM元素等。当然，除了JavaScript，还有其他一些常用方法也可以实现视觉变化效果，比如：CSS Animations, Transitions和Web Animation API。

计算样式。style

这个过程是根据CSS选择器，比如.headline或.nav > .nav_item，对每个DOM元素匹配对应的CSS样式。这一步结束之后，就确定了每个DOM元素上该应用什么CSS样式规则。

布局。

上一步确定了每个DOM元素的样式规则，这一步就是具体计算每个DOM元素最终在屏幕上显示的大小和位置。web页面中元素的布局是相对的，因此一个元素的布局发生变化，会联动地引发其他元素的布局发生变化。比如，<body>元素的宽度的变化会影响其子元素的宽度，其子元素宽度的变化也会继续对其孙子元素产生影响。因此对于浏览器来说，布局过程是经常发生的。

绘制。

绘制，本质上就是填充像素的过程。包括绘制文字、颜色、图像、边框和阴影等，也就是一个DOM元素所有的可视效果。一般来说，这个绘制过程是在多个层上完成的。


渲染层合并。

由上一步可知，对页面中DOM元素的绘制是在多个层上进行的。在每个层上完成绘制过程之后，浏览器会将所有层按照合理的顺序合并成一个图层，然后显示在屏幕上。对于有位置重叠的元素的页面，这个过程尤其重要，因为一旦图层的合并顺序出错，将会导致元素显示异常。



rasterize 光栅化 光栅化 rasterization


Note: 你可能听说过 "rasterize" 这个术语，它通常被用在绘制过程中。
绘制过程本身包含两步: 
：1）创建一系列draw调用
；2）填充像素。 

第二步的过程被称作 "rasterization" 。
因此当你在DevTools中查看页面的paint记录时，你可以认为它已经包含了 rasterization。
（有些浏览器会使用不同的线程来完成这两步，不过这也不是web开发者能控制的了）

虽然在理论上，页面的每一帧都是经过上述的流水线处理之后渲染出来的，但并不意味着页面每一帧的渲染都需要经过上述五个步骤的处理。
实际上，对视觉变化效果的一个帧的渲染，有这么三种 常用的 流水线：


1. JS / CSS > 计算样式 > 布局 > 绘制 > 渲染层合并


2. JS / CSS > 计算样式 > 绘制 > 渲染层合并


3. JS / CSS > 计算样式 > 渲染层合并


如果你修改一个非样式且非绘制的CSS属性，那么浏览器会在完成样式计算之后，跳过布局和绘制的过程，直接做渲染层合并。

第三种方式在性能上是最理想的，对于动画和滚动这种负荷很重的渲染，我们要争取使用第三种渲染流程。

Note: 如果你想对哪些属性会触发CSS Triggers和高性能动画方面了解更多，请参考：使用渲染层合并属性。

http://csstriggers.com/


ayout Paint Composite
 
涂料 合成 布局

Blink
Gecko
WebKit
EdgeHTML

眨眼睛 壁虎 WebKit 边缘HTML

Chrome Firefox Safari Edge

Change from default

从默认更改

Subsequent updates

后续更新

https://github.com/ufo-github/css-triggers/blob/master/src/templates/index.hbs



https://csstriggers.com/transform

transformClose
Changing transform does not trigger any geometry changes or painting, which is very good. This means that the operation can likely be carried out by the compositor thread with the help of the GPU.

更改变换不会触发任何几何更改或绘画，这是非常好的。这意味着操作可能由合成器线程在GPU的帮助下执行。

https://csstriggers.com/float

Changing float alters the geometry of the element. That means that it may affect the position or size of other elements on the page, both of which require the browser to perform layout operations.

Once those layout operations have completed any damaged pixels will need to be painted and the page must then be composited together.

更改浮动将更改元素的几何。这意味着它可能会影响页面上其他元素的位置或大小，这两个元素都需要浏览器执行布局操作。

一旦这些布局操作完成，任何损坏的像素将需要被绘制，然后该页必须被合成在一起。



https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count



性能优化是一门做减法的艺术。我们首要要尽力简化页面渲染过程，然后要使渲染过程的每一步都尽量高效。在很多时候，我们需要跟浏览器一起努力来创建高性能web应用，而不是跟浏览器对着干。要记住，以上列举的流水线中的每一步，在时间消耗上是各不相同的，有些步骤是相对更费时的。

接下来，让我们深入到这个流水线中的每一步去看看。我们会以一些常见问题为例，阐述如何发现和分析这些问题，并尝试去解决它们。



浏览器渲染优化

 
想深入了解渲染性能吗？快看看这堂课程吧 它能帮助你了解浏览器是如何把HTML/CSS/JavaScript代码转换成屏幕上你看到的一个个像素的 如何使用DevTools来测量页面性能、以及如何优化你的页面渲染速度。


https://udacity.com/ud860






## How to Use the Timeline Tool 如何使用时间轴工具


https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool



## Inspect and Manage Storage, Databases, and Caches 检查和管理存储，数据库和高速缓存  


https://developers.google.com/web/tools/chrome-devtools/manage-data/local-storage


https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage


key-value pairs (KVPs), 键值对


https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache



## Understand Security Issues 了解安全问题

https://developers.google.com/web/tools/chrome-devtools/security


https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https


HTTPS 



https://en.wikipedia.org/wiki/TL;DR

TL;DR

too long; didn't read.

https://en.wikipedia.org/wiki/Same-origin_policy



## Speed Up JavaScript Execution 加快JavaScript执行


https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution


Identify expensive functions using the Chrome DevTools CPU Profiler.

使用Chrome DevTools CPU Profiler识别昂贵的功能。




## Command Line API Reference

https://developers.google.com/web/tools/chrome-devtools/debug/command-line/command-line-reference#profilename-and-profileendname




## Get Started with Debugging JavaScript in Chrome DevTools

https://developers.google.com/web/tools/chrome-devtools/javascript/


https://googlechrome.github.io/devtools-samples/debug-js/get-started


breakpoints

断点


Conditional breakpoints that are only triggered when the condition that you provide is true. 
Breakpoints on caught or uncaught exceptions. 
XHR breakpoints that are triggered when the requested URL matches a substring that you provide.

仅当您提供的条件为真时触发条件断点。 
捕获或未捕获异常的断点。 
当请求的URL与您提供的子字符串匹配时触发的XHR断点。


https://developers.google.com/web/tools/chrome-devtools/javascript/

https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints

## Pause Your Code With Breakpoints 使用断点暂停代码




https://developers.google.com/web/tools/chrome-devtools/javascript/step-code#stepping_in_action


https://developers.google.com/web/tools/chrome-devtools/javascript/reference#stepping


## JavaScript Debugging Reference













https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache

已废弃
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

在此刻使用这里描述的应用程序缓存功能高度不鼓励; 它正在处于从Web平台中被删除的过程。请改用Service Workers 代替。
事实上，在Firefox 44中，当AppCache用于为页面提供离线支持时，控制台中现在显示一条警告消息，建议开发人员改用 Service workers 代替


https://developers.google.com/web/tools/service-worker-libraries/

https://developers.google.com/web/fundamentals/getting-started/primers/service-workers













## 关键呈现路径

https://developers.google.com/web/fundamentals/performance/critical-rendering-path/


网站性能优化 关键渲染路径
https://cn.udacity.com/course/website-performance-optimization--ud884/  
https://udacity.com/ud860  

https://classroom.udacity.com/courses/ud884/lessons/1464158641/concepts/4222787770923#



















































## old 



https://www.youtube.com/watch?v=nOEw9iiopwI

https://www.html5rocks.com/en/tutorials/developertools/part1/













