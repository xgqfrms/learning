// jquery.removeClass()



/*
https://stackoverflow.com/questions/1424981/how-to-remove-all-css-classes-using-jquery


https://stackoverflow.com/questions/1485647/removing-multiple-classes-jquery

*/



var nameClass=document.getElementsByClassName("clase1");
console.log("after", nameClass[0]);



$(".clase1").removeClass();
var nameClass=document.getElementsByClassName("clase1");
console.log("before", nameClass[0]);





I like native js!





const ps = document.querySelectorAll('p');

for (let i = 0; i < ps.length; i++) {
    ps[i].className = '';
}


const p = document.querySelector('p');

p.className = '';


document.getElementById("item").removeAttribute("class");




// https://stackexchange.com/users/7367105/xgqfrms

// https://stackoverflow.com/a/44512106/5934465
// https://stackoverflow.com/a/44512184/5934465

// I like using native js do this, belive it or not!

// remove all items all class  
const items = document.querySelectorAll('item');
for (let i = 0; i < items.length; i++) {
    items[i].className = '';
}

// only remove all class of first item
const item1 = document.querySelector('item');
item1.className = '';

//jQuery ways

$("#item").removeClass();
$("#item").removeClass("class1 ... classn");


/*

https://api.jquery.com/removeclass/

https://api.jqueryui.com/removeclass/



$(document).ready(function(){
    $("button").click(function(){
        const ps = document.querySelectorAll('p');
        for (let i = 0; i < ps.length; i++) {
            ps[i].className = '';
        }
    });
});





https://www.w3schools.com/jquery/html_removeclass.asp

https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_removeclass


*/



/*


https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute


getAttribute() 返回元素上一个指定的属性值。如果指定的属性不存在，则返回  null 或 "" （空字符串）；


https://developer.mozilla.org/zh-CN/docs/Web/API/Element/removeAttribute


removeAttribute() 从指定的元素中删除一个属性。


https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute


设置指定元素上的一个属性值。如果属性已经存在，则更新该值;否则将添加一个新的属性用指定的名称和值。

要获取属性的当前值，使用 getAttribute(); 
要删除一个属性，调用 removeAttribute()。


*/


let div1 = document.getElementById("div1");
let align = div1.getAttribute("align");



let d = document.getElementById("d1"); 
d.setAttribute("align", "center");





















