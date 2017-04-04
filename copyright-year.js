/**
 * xgqfrms 2017.01.01
 * @copyright xgqfrms 2017-2050
 * @version 1.1.1
 * @link https://cdn.xgqfrms.xyz/plugins/getfullyear.js
 */

const copyRightYear = () => {
    let copyYear = Symbol();
    copyYear = new Date().getFullYear();
    const spanYear = document.getElementById('spanYear');
    spanYear.style.background = "yellow";
    spanYear.style.color = "#000";
    spanYear.innerHTML = `Copyright &copy; ${copyYear} - 2050 xgqfrms`;
    return spanYear;
}
window.onload = copyRightYear();


/*
https://cdn.xgqfrms.xyz/plugins/getfullyear.js
*/



const justForTesting = () => {
    const xcpy20xx = document.getElementById('xcpy20xx');
    let xcpy = new Date().getFullYear();
    xcpy20xx.innerHTML = `copyright &copy xgqfrms ${xcpy}`;
    xcpy20xx.style.color = "rgba(0,255,0,0.7)";
    xcpy20xx.style.background = "rgba(0,0,0,1)";
    console.log(xcpy);
    return xcpy20xx;
}


/*

document.nodeValue
document.textContent


# HTML DOM

## HTML DOM Document Object  
http://www.w3schools.com/jsref/dom_obj_document.asp

## HTML DOM Element Object  
http://www.w3schools.com/jsref/dom_obj_all.asp

## HTML DOM Attribute Object  
http://www.w3schools.com/jsref/dom_obj_attributes.asp 

## HTML DOM Style Object  
http://www.w3schools.com/jsref/dom_obj_style.asp

## HTML DOM Events  
http://www.w3schools.com/jsref/dom_obj_event.asp

*/

