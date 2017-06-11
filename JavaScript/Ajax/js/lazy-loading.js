/**
 * xgqfrms
 * lazy-loading.js
 * 2017-06-09
 */


/*

1px size placeholder.png

cdn

<img src="placeholder.png" class="lazy" data-src="https://cdn.xgqfrms.xyz/statics/images/lagersizeimage.jpg" width="240" height="152">


base64

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" class="lazy" data-src="https://cdn.xgqfrms.xyz/statics/images/lagersizeimage.jpg" width="240" height="152


placeholder.png === base64 image



fetch('http://localhost:3000/tasks/')
.then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(ex) {
    console.log('parsing failed: ', ex)
});


*/



!function(window){
    let $q = (q, res) => {
            if (document.querySelectorAll) {
                res = document.querySelectorAll(q);
            } else {
                let d = document, 
                a = d.styleSheets[0] || d.createStyleSheet();
                a.addRule(q,'f:b');
                for(let l = d.all, b=0, c=[]; b < l.length; b++){
                    l[b].currentStyle.f && c.push(l[b]);
                }
                a.removeRule(0);
                res = c;
            }
            return res;
        },
        addEventListener = (evt, fn) => {
            window.addEventListener
            ?
            this.addEventListener(evt, fn, false)
            :
            (window.attachEvent) 
            ? 
            this.attachEvent('on' + evt, fn)
            :
            this['on' + evt] = fn;
        },
         _has = (obj, key) => {
            return Object.prototype.hasOwnProperty.call(obj, key);
        },
        loadImage = (el, fn) => {
            let img = new Image(),
                src = el.getAttribute('data-src');
            img.onload = () => {
                if (!! el.parent){
                    el.parent.replaceChild(img, el);
                }
                else{
                    el.src = src;
                }
                fn ? fn() : null;
            }
            img.src = src;
        },
        elementInViewport = (el) => {
            let rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 
                && 
                rect.left >= 0 
                && 
                rect.top <= (window.innerHeight || document.documentElement.clientHeight)
            );
        };
    let images = new Array(),
        query = $q('img.lazy'),
        processScroll = () => {
            for (let i = 0; i < images.length; i++) {
                if (elementInViewport(images[i])) {
                    loadImage(images[i], () => {
                        images.splice(i, i);
                    });
                }
            }
        };
        // Array.prototype.slice.call is not callable under our lovely IE8 
        for (let i = 0; i < query.length; i++) {
            images.push(query[i]);
        };
    processScroll();
    addEventListener('scroll', processScroll);
}(this);

