# fetch

## Fetch

> Living Standard — Last Updated 2 June 2017


https://fetch.spec.whatwg.org/


## window.fetch polyfill

> 该项目是一个polyfill，由于Chrome和Firefox本身实现了window.fetch函数，因此这个项目的代码实际上并不会对这些浏览器产生任何影响。

有关详细信息，请参阅浏览器支持。

https://github.com/github/fetch#browser-support

* Chrome
* Firefox
* Safari 6.1+
* Internet Explorer 10+

注意：Chrome，Firefox，Microsoft Edge和Safari等现代浏览器都包含window.fetch的本机实现，因此此polyfill的代码对这些浏览器没有任何影响。

如果您认为在任何这些浏览器中实现了window.fetch的错误，您应该向该浏览器供应商提出问题，而不是该项目。

http://caniuse.com/#search=fetch

??? IE 11+

https://github.com/github/fetch/issues/532




## IE test

> Response metadata

```js

fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
.then((response) => {
    console.log(`response.headers.get('Content-Type') = \n`, response.headers.get('Content-Type'));
    console.log(`response.headers.get('Date') = \n`, response.headers.get('Date'));
    console.log(`response.status = \n`, response.status);
    console.log(`response.statusText = \n`,response.statusText);
    return json = response.json();
})
.then(json => console.log(json));

```





## OPEN CODE OF CONDUCT & 开放行为守则



http://todogroup.org/opencodeofconduct/#fetch/opensource@github.com










https://github.com/github/fetch#json


https://github.com/github/fetch#handling-http-error-statuses



```js

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

const parseJSON = (response) => response.json();

fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
.then(checkStatus)
.then(parseJSON)
.then((data) => {
    console.log('request succeeded with JSON response', data)
}).catch((error) => {
    console.log('request failed', error)
});

```



# node-fetch

https://www.npmjs.com/package/node-fetch



```js
var fetch = require('node-fetch');
 
// if you are on node v0.10, set a Promise library first, eg. 
// fetch.Promise = require('bluebird'); 

// json 

fetch('https://api.github.com/users/github')
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
```
















