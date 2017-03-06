# JSONP


## JSONP

https://api.jquery.com/jquery.getscript/

https://en.wikipedia.org/wiki/JSONP



HTML <script>元素允许执行从外部源检索的内容。



Services replying with pure JSON data were not able to share the data across domain before the adoption of CORS.

使用纯JSON数据回复的服务在采用CORS之前无法跨域共享数据。



http://api.flickr.com/services/feeds/photos_public.gne?tags=resig&tagmode=all&format=json
&jsoncallback=?


https://en.wikipedia.org/wiki/Ajax_(programming)

https://www.w3schools.com/jquery/ajax_getscript.asp

https://davidwalsh.name/loading-scripts-jquery

http://stackoverflow.com/questions/11803215/how-to-include-multiple-js-files-using-jquery-getscript-method



https://www.tutorialspoint.com/jquery/jquery-ajax.htm

https://www.tutorialspoint.com/jquery/ajax-jquery-getjson.htm

https://www.tutorialspoint.com/jquery/ajax-jquery-getscript.htm





## jQuery.getJSON() 


$.getJSON( url, [data], [callback] )

Load JSON data using an HTTP GET request.

使用HTTP GET请求负载JSON数据。

## jQuery.getScript()

$.getScript( url, [callback] )


Loads and executes a JavaScript file using an HTTP GET request.

使用HTTP GET请求加载并执行JavaScript文件。








{
    "Name": "Foo",
    "Id": 1234,
    "Rank": 7
}


<script type="application/javascript"
    src="http://server.example.com/Users/1234">
</script>


The browser will download the <script> file, evaluate its contents, mis-interpret the raw JSON data as a block, and throw a syntax error.

浏览器将下载<script>文件，评估其内容，将原始JSON数据误解为块，并抛出语法错误。


Even if the data was interpreted as a JavaScript object literal, it could not be accessed by JavaScript running in the browser, since without a variable assignment, object literals are inaccessible.

即使数据被解释为JavaScript对象字面量，它也不能被在浏览器中运行的JavaScript访问，因为没有变量赋值，对象字面量是不可访问的。


In the JSONP usage pattern, the URL request pointed to by the src attribute in the <script> element returns JSON data, with JavaScript code (usually a function call) wrapped around it.

在JSONP使用模式中，<script>元素中的src属性指向的URL请求返回JSON数据，其中包含JavaScript代码（通常是函数调用）。


This "wrapped payload" is then interpreted by the browser. In this way, a function that is already defined in the JavaScript environment can manipulate the JSON data. A typical JSONP request and response are shown below.

这个“包装的有效载荷”然后由浏览器解释。这样，已经在JavaScript环境中定义的函数可以处理JSON数据。典型的JSONP请求和响应如下所示。


Note that for JSONP to work, a server must reply with a response that includes the JSONP function.

请注意，要使JSONP正常工作，服务器必须回复一个包含JSONP函数的响应。

JSONP does not work with JSON-formatted results. The JSONP function invocation that gets sent back, and the payload that the function receives, must be agreed-upon by the client and server.

JSONP不适用于JSON格式的结果。发送回来的JSONP函数调用以及函数接收的有效负载必须由客户端和服务器同意。

By convention, the server providing the JSON data offers the requesuting website to name the JSONP function, typically using the name jsonp or callback as the named query parameter field name, in its request to the server, e.g.,

按照惯例，提供JSON数据的服务器在其对服务器的请求中提供请求网站以命名JSONP函数，通常使用名称jsonp或callback作为命名的查询参数字段名称，

<script type="application/javascript"
    src="http://server.example.com/Users/1234?callback=parseResponse">
</script>


parseResponse({"Name": "Foo", "Id": 1234, "Rank": 7});










JSONP makes sense only when used with a script element. For each new JSONP request, the browser must add a new <script> element, or reuse an existing one.

JSONP仅在与脚本元素一起使用时才有意义。对于每个新的JSONP请求，浏览器必须添加新的<script>元素，或重新使用现有的元素。


The former option—adding a new script element—is done via dynamic DOM manipulation, and is known as script element injection.

前一个选项 - 添加一个新的脚本元素 - 通过动态DOM操作完成，称为脚本元素注入。


The <script> element is injected into the HTML DOM, with the URL of the desired JSONP endpoint set as the "src" attribute.

<script>元素被注入到HTML DOM中，所需的JSONP端点的URL设置为“src”属性。



This dynamic script element injection is usually done by a JavaScript helper library. jQuery and other frameworks have JSONP helper functions; there are also standalone options.

这种动态脚本元素注入通常由JavaScript帮助程序库完成。 jQuery等框架都有JSONP助手函数;还有独立的选项。


An example of using jQuery to dynamically inject script element for a JSONP call looks like this:

使用jQuery动态注入JSONP调用的脚本元素的示例如下所示：



$.getScript("http://server.example.com/Users/1234?callback=parseResponse");





After the element is injected, the browser evaluates the element, and performs an HTTP GET on the src URL, retrieving the content. Then the browser evaluates the return payload as JavaScript. This is typically a function invocation.

在注入元素之后，浏览器评估元素，并对src URL执行HTTP GET，检索内容。然后浏览器将返回的有效内容计算为JavaScript。这通常是函数调用。

In that way, the use of JSONP can be said to allow browser pages to work around the same-origin policy via script element injection.

这样，使用JSONP可以说允许浏览器页面通过脚本元素注入来处理同源策略。







## CORS  
















