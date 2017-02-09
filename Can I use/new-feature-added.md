# new 

http://caniuse.com/#info_news

http://caniuse.com/

https://github.com/fyrd/caniuse  
https://twitter.com/Fyrd  





## New feature added


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
https://drafts.csswg.org/css-page-3/  
https://www.w3.org/TR/css3-page/  



CSS at-rule (@page) to define page-specific rules when printing web pages, such as margin per page and page dimensions.

CSS规则（@page）用于在打印网页时定义页面特定的规则，例如页面边距和页面尺寸。



http://caniuse.com/#feat=wasm  
https://github.com/WebAssembly/spec  


WebAssembly or "wasm" is a new portable, size- and load-time-efficient format suitable for compilation to the web.

WebAssembly或“wasm”是一种新的便携式，大小和加载时间高效的格式，适合于编译到Web。


http://caniuse.com/#feat=urlsearchparams  
https://url.spec.whatwg.org/#urlsearchparams  

he URLSearchParams interface defines utility methods to work with the query string of a URL.

URLSearchParams接口定义了使用URL的查询字符串的实用程序方法。




http://caniuse.com/#feat=css-font-rendering-controls  
https://tabatkins.github.io/specs/css-font-display/  

@font-face descriptor (currently defined as font-display) that allows control over how a downloadable font renders before it is fully loaded.


@ font-face描述符（当前定义为字体显示），允许控制可下载字体在完全加载之前如何呈现。


http://caniuse.com/#feat=shadowdomv1  
https://www.w3.org/TR/shadow-dom/  


Method of establishing and maintaining functional boundaries between DOM trees and how these trees interact with each other within a document, thus enabling better functional encapsulation within the DOM & CSS.

建立和维护DOM树之间的功能边界以及这些树在文档中如何彼此交互的方法，从而能够在DOM和CSS中更好地实现功能封装。


http://caniuse.com/#feat=custom-elementsv1  
https://html.spec.whatwg.org/multipage/scripting.html#custom-elements  


Method of defining new HTML tags.

定义新HTML标签的方法。




http://caniuse.com/#feat=credential-management  
https://www.w3.org/TR/credential-management-1/  


API that provides a programmatic interface to the browser's credential manager.

API，为浏览器的凭据管理器提供一个编程接口。

In short, an origin can request a user's credentials to sign them in, or can ask the browser to save credentials on the user's behalf. Both of these requests are user-mediated.

简而言之，起源可以请求用户的凭证来签署他们，或者可以请求浏览器代表用户保存凭证。这两个请求都是用户调用的。



http://caniuse.com/#feat=selection-api  
https://www.w3.org/TR/selection-api/  



API for accessing selected content of a document, including the window.getSelection() method, as well as the selectstart & selectionchange events on document.

用于访问文档的选定内容的API，包括window.getSelection（）方法，以及文档上的selectstart＆selectionchange事件。



http://caniuse.com/#feat=dom-range  
https://dom.spec.whatwg.org/#ranges  

A contiguous range of content in a Document, DocumentFragment or Attr

Document，DocumentFragment或Attr中的内容的一个连续范围


http://caniuse.com/#feat=once-event-listener  
https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-once  


Causes an event listener to be automatically removed after it gets invoked, so that it only gets invoked once. Similar to jQuery's $.one() feature.

导致事件侦听器在被调用后被自动删除，因此它只被调用一次。类似于jQuery的$ .one（）特性。




http://caniuse.com/#feat=css-featurequeries  
https://www.w3.org/TR/css3-conditional/#at-supports

CSS Conditional Rules Module Level 3

W3C Candidate Recommendation 4 April 2013


CSS Feature Queries allow authors to condition rules based on whether particular property declarations are supported in CSS using the @supports at rule

CSS功能查询允许作者使用@supports at rule基于CSS中是否支持特定的属性声明来调整规则


https://bitsofco.de/the-one-css-feature/











http://codepen.io/xgqfrms/pen/qRJRbM


http://www.lensco.be/

https://caniuse.bitsofco.de/

https://ireaderinokun.com/

https://github.com/ireade

https://github.com/ireade/ireaderinokun.com/tree/gh-pages  
https://github.com/ireade/app.bitsofco.de  
https://speakerdeck.com/ireade/building-modern-progressive-web-apps  
https://speakerd.s3.amazonaws.com/presentations/819e191e579142be8ad67347fb8f1c5d/Developing_PWA_Today.pdf

https://bitsofco.de/



<script src="//cdn.jsdelivr.net/caniuse-embed/1.0.1/caniuse-embed.min.js"></script>


<p class="ciu_embed" data-feature="once-event-listener" data-periods="future_3,future_2,future_1,current,past_1,past_2,past_3,past_5">
    <a href="http://caniuse.com/#feat=once-event-listener">
        Can I Use once-event-listener?
    </a> 
    Data on support for the once-event-listener feature across the major browsers from caniuse.com.
</p>



<p class="ciu_embed" data-feature="webworkers" data-periods="future_3,future_2,future_1,current,past_1,past_2,past_3,past_4,past_5">
    <a href="http://caniuse.com/#feat=webworkers">
        Can I Use webworkers?
    </a>
    Data on support for the webworkers feature across the major browsers from caniuse.com.
</p>


https://www.webcomponents.org/element/ireade/caniuse-embed-polymer


https://helloangular.com/

https://bitsofco.de/javascript-promises-101/  


https://helloangular.com/observables-vs-promises/




http://velocityjs.org/  
https://github.com/julianshapiro/velocity



http://prismjs.com/  
http://prismjs.com/download.html  

https://github.com/PrismJS/prism  
https://github.com/PrismJS/prism/graphs/contributors  
https://github.com/PrismJS/prism/tree/master  
https://github.com/PrismJS/prism/tree/gh-pages  

http://lea.verou.me/2012/07/introducing-prism-an-awesome-new-syntax-highlighter/#more-1841







http://alistapart.com/article/creating-intrinsic-ratios-for-video



http://lea.verou.me/  

https://github.com/LeaVerou/duoload  
http://duoload.verou.me/  










