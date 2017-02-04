# DOM  


## HTML DOM querySelector() Method

http://www.w3schools.com/jsref/met_document_queryselector.asp


获取文档中class =“example”的第一个元素：

document.querySelector(".example");

document.querySelector("div > p");
document.querySelector("a[target]");



https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

https://developer.mozilla.org/zh-CN/docs/Web/API/Element/querySelector


## HTML DOM querySelectorAll() Method

http://www.w3schools.com/jsref/met_document_queryselectorall.asp




## CSS Syntax and Selectors 

http://www.w3schools.com/css/css_syntax.asp  

http://www.w3schools.com/cssref/css_selectors.asp




## .classList.remove() & .classList.add()


function hide(){
    // var hl = document.getElementById('hl');
    // hl.style.display = "none";
    var hideLoad = document.getElementById('hideLoad');
    var state = "showTure";
    if (state === "showTure") {
        hideLoad.classList.remove('showTure');
        hideLoad.classList.add("hidenTure");
        console.log(`state = "showTure"`);
        hideLoad.style.display = "none";
        // ??? .classList bugs ??? 
    } else {
        //state = "showTure";
        console.log(`state = "hidenTure"`);
    }
}



