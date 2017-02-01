// http://www.jikexueyuan.com/course/1282.html



<img src=0 onerror=alert(5); />


<div class="entry-image-bg"

background-image (css)

backgroundImage (js)

/*
Uncaught SyntaxError: Identifier 'XSS' has already been declared

未捕获的语法错误：标识符'XSS'已经被声明
*/

// <img src=0 onerror=alert(5); />
element = document.querySelector('div.entry-image-bg');
console.log(element.src);
// element.style.background-image = 0;
element.style.backgroundImage = 0;
console.log(element.src);
let XSS = () => {
    setTimeout(function(){
        alert("XSS test OK!");
    }, 1000);
}
if(!element.src === false){
    XSS();
}






lements = document.querySelectorAll('div.entry-image-bg');



for(let i of elements){elements[0].style.backgroundImage = 0;}
0
for(let i=0; i < elements.length; i++){elements[i].style.backgroundImage = 0;}
0
