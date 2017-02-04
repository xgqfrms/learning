





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

## DOM  

G:\wwwRoot\learning\JavaScript\DOM


## HTML DOM querySelector() Method

http://www.w3schools.com/jsref/met_document_queryselector.asp  

## HTML DOM querySelectorAll() Method

http://www.w3schools.com/jsref/met_document_queryselectorall.asp  

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector  
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/querySelector  


## CSS Syntax and Selectors 

http://www.w3schools.com/css/css_syntax.asp  

http://www.w3schools.com/cssref/css_selectors.asp




# DOM & ES6 

querySelector() & querySelectorAll() 

```js

const ES6 = () => {
    const abc = { language: "english"};
    let xyz = `xyz === ${abc}`;
    console.log(xyz);
    let newxyz = `newxyz === ${abc.length}`;
    console.log(newxyz);
}

ES6();

const ES7 = () => {
    const abc = { language: "english"};
    let xyz = `xyz === ${abc}`;
    console.log(xyz);
    let newxyz = `newxyz === ${abc.language}`;
    console.log(newxyz);
}

ES7();

``` 

