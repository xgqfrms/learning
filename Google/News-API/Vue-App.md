# Vue App


https://vuejs-templates.github.io/webpack/

https://vue-loader.vuejs.org/en/

https://github.com/vuejs-templates/webpack-simple

https://github.com/vuejs/vue-cli


$ npm install -g vue-cli
$ 
$ cd my-project
$ npm install
$ npm run dev



http://standardjs.com/demo.html

http://airbnb.io/enzyme/

https://github.com/airbnb/javascript

http://jscs.info/

http://vuex.vuejs.org/en/structure.html






ECMA-404

http://wiki.geekdream.com/Specification/json-rpc_2.0.html

http://www.jsonrpc.org/specification#error_object


http://wiki.geekdream.com/

https://http2.github.io/

https://http2.github.io/faq/

https://http2.github.io/faq/#why-just-one-tcp-connection

## Why just one TCP connection?

With HTTP/1, browsers open between four and eight connections per origin. Since many sites use multiple origins, this could mean that a single page load opens more than thirty connections.

使用HTTP/1，浏览器打开每个源4到8个连接。由于许多站点使用多个源，这可能意味着单个页面加载打开超过三十个连接。

One application opening so many connections simultaneously breaks a lot of the assumptions that TCP was built upon; since each connection will start a flood of data in the response, there’s a real risk that buffers in the intervening network will overflow, causing a congestion event and retransmits.

一个应用程序打开这么多连接同时打破了TCP建立的很多假设;因为每个连接将在响应中启动大量数据，所以存在中间网络中的缓冲器将溢出的真实风险，从而导致拥塞事件并重新传输。

Additionally, using so many connections unfairly monopolizes network resources, “stealing” them from other, better-behaved applications (e.g., VoIP).

另外，使用这么多连接不公平地独占网络资源，“窃取”它们与其他更好行为的应用（例如，VoIP）。




https://http2.github.io/faq/#is-it-http20-or-http2

http2


https://http2.github.io/faq/#what-are-the-key-differences-to-http1x


At a high level, HTTP/2:

is binary, instead of textual
is fully multiplexed, instead of ordered and blocking
can therefore use one connection for parallelism
uses header compression to reduce overhead
allows servers to “push” responses proactively into client caches


是二进制，而不是文本

是完全多路复用，而不是有序和阻塞

因此可以使用一个连接用于并行性

使用头压缩​​来减少开销

允许服务器主动将“响应”推送到客户端缓存中


https://http2.github.io/faq/#whats-the-relationship-with-spdy


HTTP/2 was first discussed when it became apparent that SPDY was gaining traction with implementers (like Mozilla and nginx), and was showing significant improvements over HTTP/1.x.

HTTP / 2首先被讨论，当它变得明显SPDY正在获得与实施者（如Mozilla和nginx）的牵引力，并显示重大改进超过HTTP / 1.x。



After a call for proposals and a selection process, SPDY/2 was chosen as the basis for HTTP/2. Since then, there have been a number of changes, based on discussion in the Working Group and feedback from implementers.

在呼叫建议和选择过程之后，选择SPDY / 2作为HTTP / 2的基础。自那时起，根据工作组的讨论和实施者的反馈，出现了一些变化。


Throughout the process, the core developers of SPDY have been involved in the development of HTTP/2, including both Mike Belshe and Roberto Peon. In February 2015, Google announced its plans to remove support for SPDY in favor of HTTP/2.

在整个过程中，SPDY的核心开发人员参与了HTTP / 2的开发，包括Mike Belshe和Roberto Peon。 2015年2月，Google宣布计划取消对SPDY的支持，赞成HTTP / 2。


http://httparchive.org/

http://httparchive.org/websites.php

http://httparchive.org/interesting.php

http://httparchive.org/trends.php

http://httparchive.org/about.php#bigquery

Google BigQuery

How do I use BigQuery to write custom queries over the data?

The HTTP Archive data dumps are also available in Google BigQuery thanks to Ilya Grigorik. This means you can create your own custom queries like How many resources return Last-Modified and/or ETag values? and What is the distribution of 1st party vs 3rd party resources?. For more information see Ilya's blog post HTTP Archive + BigQuery = Web Performance Answers and video. And checkout all the custom queries shared on BigQueri.es.


http://httparchive.org/downloads.php

https://github.com/HTTPArchive/httparchive







https://github.com/bagder/http2-explained


JSON Web Token(JWT) 是一个应用安全通信规范

http://wiki.geekdream.com/Specification/jwt.html

https://tools.ietf.org/html/rfc7519






https://github.com/http2/http2-spec/wiki/Implementations

https://github.com/molnarg/node-http2

https://github.com/indutny/node-spdy




https://http2-explained.haxx.se/content/zh/

https://http2-explained.haxx.se/content/zh/part3.html



最初的HTTP 1.1规范提到一个客户端最多只能对同一主机建立两个TCP连接。因此，为了不和规范冲突，一些聪明的网站使用了新的主机名，这样的话，用户就能和网站建立更多的连接，从而降低载入时间。

后来，两个连接的限制被取消了，现在的客户端可以轻松地和每个主机建立6-8个连接。但由于连接的上限依然存在，所以网站还是会用这种技术来提升连接的数量。而随着资源个数的提升（上面章节的图例），网站会需要更多的连接来保证HTTP协议的效率，从而提升载入速度

https://http2-explained.haxx.se/content/zh/part6.html

一个客户端最多能和同一主机建立的TCP连接数量

客户端可以轻松地和每个主机建立6-8个连接



https://http2-explained.haxx.se/content/en/part3.html

Initially the HTTP 1.1 specification stated that a client was allowed to use maximum of two TCP connections for each host.

最初，HTTP 1.1规范规定客户端被允许为每个主机使用最多两个TCP连接.

So, in order to not violate the spec clever sites simply invented new host names and – voilá - you could get more connections to your site and decreased page load times.

所以，为了不违反规范聪明的网站只是发明了新的主机名和 - 瞧 - 你可以获得更多的连接到您的网站，减少页面加载时间。

Over time, that limitation was removed and today clients easily use 6-8 connections per host name but they still have a limit so sites continue to use this technique to bump the number of connections.


随着时间的推移，该限制被删除，今天的客户端轻松地使用每个主机名6-8个连接，但他们仍然有一个限制，所以网站继续使用这种技术，以突破连接的数量。



<script type="text/javascript">
const https_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='icon'%3E%3C/span%3E%3Cscript src='" + https_protocol + "www.xgqfrms.xyz' type='text/javascript'%3E%3C/script%3E"));
</script>

A Parser-blocking, cross-origin script, http://www.xgqfrms.xyz/, is invoked via document.write.

unescape("%3Cspan id='icon'%3E %3C/span%3E %3Cscript src='" + https_protocol + "www.xgqfrms.xyz' type='text/javascript'%3E %3C/script%3E");

"<span id='icon'></span><script src=' http://www.xgqfrms.xyz' type='text/javascript'></script>"


%3E %3C
<   >


https://stackoverflow.com/questions/4723213/detect-http-or-https-then-force-https-in-javascript





how to redirect http to https javascript


if (location.protocol != 'https:')
{
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

console.log(location.href);

console.log(window.location.href);

console.log(window.location.href.substring());

console.log(window.location.protocol);
// https:

console.log(window.location.protocol.length);
// 6



最初，HTTP 1.1规范规定客户端被允许为每个主机使用最多两个TCP连接.

随着时间的推移，该限制被删除，今天的客户端轻松地使用每个主机名6-8个连接，但他们仍然有一个限制，所以网站继续使用这种技术(sharding)，以突破连接的数量。


使用HTTP/1，浏览器打开每个源4到8个连接


















https://github.com/BlackrockDigital

https://github.com/BlackrockDigital/startbootstrap-freelancer

https://startbootstrap.com/template-overviews/freelancer/

https://github.com/jeromelachaud/freelancer-theme


https://blackrockdigital.github.io/startbootstrap-agency/

https://github.com/BlackrockDigital/startbootstrap-agency

https://github.com/BlackrockDigital/startbootstrap-agency/archive/v4-dev.zip


https://github.com/BlackrockDigital/startbootstrap-sb-admin-2

https://github.com/poormonfared/sb-admin2



https://startbootstrap.com/template-overviews/clean-blog/

https://github.com/BlackrockDigital/startbootstrap-clean-blog

https://blackrockdigital.github.io/startbootstrap-clean-blog 




https://startbootstrap.com/template-overviews/creative/

https://github.com/BlackrockDigital/startbootstrap-creative



https://github.com/BlackrockDigital/startbootstrap-new-age


https://startbootstrap.com/template-overviews/new-age/



















