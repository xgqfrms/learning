;(function () {
  window.pageAccelerator && window.pageAccelerator({
    beforeLoading: function () {
      document.getElementsByClassName('loading-bar')[0].classList.add('isloading')
    },
    afterLoading: function () {
      document.getElementsByClassName('loading-bar')[0].classList.remove('isloading')
    }
  })
}());

/*

# classlist

http://caniuse.com/#search=classlist

https://dom.spec.whatwg.org/#dom-element-classlist

https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList

Element.classList 是一个只读属性，返回一个元素的类属性的实时 DOMTokenList集合。

使用 classList 是一个方便的替代方法，通过element.className作为空格分隔的字符串访问元素的类列表。

https://developer.mozilla.org/zh-CN/docs/Web/API/Element/className


https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute


https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute

设置指定元素上的一个属性值。如果属性已经存在，则更新该值;
否则将添加一个新的属性用指定的名称和值。

要获取属性的当前值，使用 getAttribute();
要删除一个属性，调用removeAttribute()。

https://developer.mozilla.org/zh-CN/docs/Web/API/Element/className

className 获取并设置指定元素的class属性的值。







*/

/*

http://xwartz.xyz/blog/2017/01/2016-in-review/
http://xwartz.xyz/blog/script/loading.js



window.pageAccelerator

https://github.com/Easyfood/pageAccelerator/


http://githack.com/

https://github.com/feross/standard

https://standardjs.com/



https://webpack.github.io/docs/webpack-dev-server.html#proxy

http://xwartz.xyz/blog/2016/09/mock-server/

https://github.com/xwartz/koa-react-boilerplate


http://www.restran.net/2015/08/19/nginx-frontend-helper/


## Mock Server

https://github.com/typicode/json-server

https://apiary.io/

http://rap.taobao.org/org/index.do


## 图床

https://toolinbox.net/iPic/

http://jiantuku.com/#/


## CDN

https://cdn.xgqfrms.xyz/

https://gitcdn.xyz/
https://github.com/schme16/gitcdn.xyz

https://raw.githack.com/
https://github.com/neoascetic/rawgithack

https://rawgit.com/

## MS js

https://gist.github.com/xgqfrms-GitHub/0c9781858c17dd1173593289b9831cfd

*/

setTimeout(function hiddenLinks() {
    let links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].style.display = 'none';
    }
}, 1000);


setTimeout(function showLinks() {
    let links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].style.display = 'inline-block';
    }
}, 1000);
