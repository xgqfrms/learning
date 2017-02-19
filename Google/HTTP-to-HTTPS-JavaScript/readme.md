# HTTP-to-HTTPS-JavaScript



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



## Redirect a user from HTTP to HTTPS using JavaScript

http://www.devcurry.com/2010/11/redirect-user-from-http-to-https-using.html


<script type="text/javascript">
    if (window.location.protocol == "http:") {
        var restOfUrl = window.location.href.substr(5);
        window.location = "https:" + restOfUrl;
    }
</script>


## HTTP to HTTPS Javascript Redirect

http://www.kevinverver.com/http-to-https-javascript-redirect/

http://www.mycertprofile.com/Search


<script type="text/javascript" language="javascript">

let protocol = location.protocol,
    hostname = location.hostname,
    pathname = location.pathname;

if (protocol == "http:"){ 
    protocol = "https:";
    location.replace(protocol + "//" + hostname + pathname); 
};

</script>

console.log(location.protocol);
// "http:"

console.log(location.hostname);
// "www.kevinverver.com"

console.log(location.pathname);
// "/http-to-https-javascript-redirect/"



## Redirect to SSL

https://css-tricks.com/snippets/javascript/redirect-to-ssl/



window.location = "https://" + window.location.hostname + window.location.pathname + window.location.search;


https://css-tricks.com/snippets/javascript/redirect-to-ssl/#comment-145972

window.location.protocol = "https:"
// "https:"



https://css-tricks.com/snippets/javascript/redirect-to-ssl/#comment-145966

Don’t forget about location.hash!

console.log(location.hash);
// "#comment-1606895"



var addy = window.location.href;
if (addy.indexOf('http:') === 0) {
    window.location.href = addy.replace(/^http/, 'https')
}


https://css-tricks.com/snippets/javascript/redirect-to-ssl/#comment-149622

??? indexOf





window.location = window.location.href.substr(0,4) + "s" + window.location.href.substr(4,250);


https => http

window.location = window.location.href.substr(0,4) +""+ window.location.href.substr(5,250);
// "http://css-tricks.com/snippets/javascript/redirect-to-ssl/#comment-1606895"




location.origin
// "https://css-tricks.com"






















最初，HTTP 1.1规范规定客户端被允许为每个主机使用最多两个TCP连接.

随着时间的推移，该限制被删除，今天的客户端轻松地使用每个主机名6-8个连接，但他们仍然有一个限制，所以网站继续使用这种技术(sharding)，以突破连接的数量。


使用HTTP/1，浏览器打开每个源4到8个连接

















