// scroll height


let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;


/*
http://www.w3schools.com/jsref/prop_element_scrolltop.asp

http://www.w3schools.com/jsref/prop_document_documentelement.asp

https://drafts.csswg.org/cssom-view/#dom-element-scrolltop


https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop


http://www.cnblogs.com/xgqfrms/p/6288299.html


http://www.imooc.com/video/6458

http://stackoverflow.com/questions/20514596/document-documentelement-scrolltop-return-value-differs-in-chrome/41663343#41663343


*/

let __getScrollHeight = () => {
    let sh = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(`sh = ${sh}\n`);
}

window.onscroll = __getScrollHeight();

let html = document.getElementsByTagName('html');

html[0].addEventListener('onscroll', __getScrollHeight());

html[0].addEventListener('scroll', __getScrollHeight());


setTimeout(__getScrollHeight, 1000);



let scrollHeight = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
console.log(`scrollHeight = ${scrollHeight}`);


// ??? IIFE 



(() => {
    console.log(`es6 = ${this}`);
})();


// ??? 
let html = document.getElementsByTagName('html');

html[0].clinetWidth;