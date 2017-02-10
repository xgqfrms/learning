# scrollbar style  


http://stackoverflow.com/questions/9251354/css-customized-scroll-bar-in-div/14150577#14150577

http://stackoverflow.com/questions/7725652/css-scrollbar-style-cross-browser

https://deliciousthemes.com/how-to-customize-browser-scrollbars-using-css3/

http://stackoverflow.com/questions/16670931/hide-scroll-bar-but-still-being-able-to-scroll/16671476#16671476




http://jamesflorentino.github.io/nanoScrollerJS/

https://github.com/jamesflorentino/nanoScrollerJS/issues/332

https://github.com/wieringen/tinyscrollbar








## how to change the browser default scrollbar style  



https://css-tricks.com/almanac/properties/s/scrollbar/

## scrollbar - JANUARY 5, 2017







::-webkit-scrollbar
{
    width: 12px;  /* for vertical scrollbars */
    height: 12px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track
{
    background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb
{
    background: rgba(0, 0, 0, 0.5);
}




body::-webkit-scrollbar {
    width: 1em;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
}






https://codepen.io/xgqfrms/pen/rjQONm 
https://codepen.io/xgqfrms/full/rjQONm/  




*******************************************************************************

## IE Scrollbar


http://codemug.com/html/custom-scrollbars-using-css/

http://scriptgenerator.net/html-css-custom-scrollbar-code-generator/

http://www.gaijin.at/en/olsbarcss.php


<style type="text/css">
body { 
    scrollbar-arrow-color: #008000;
    scrollbar-base-color: #FF0000;
    scrollbar-track-color: #FF0000;
    scrollbar-face-color: #FFA500;
    scrollbar-highlight-color: #C0C0C0;
    scrollbar-3dlight-color: #F5F5DC;
    scrollbar-darkshadow-color: #800080;
    scrollbar-shadow-color: #00008B;
}
</style>


*******************************************************************************


## Webkit Scrollbar Generator

http://mikethedj4.github.io/Webkit-Scrollbar-Generator/



<style type="text/css">
    ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    }
    ::-webkit-scrollbar-button {
    width: 23px;
    height: 23px;
    }
    ::-webkit-scrollbar-thumb {
    background: #80ffff;
    border: 36px dashed #ffff00;
    border-radius: 39px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #0000ff;
    }
    ::-webkit-scrollbar-thumb:active {
    background: #000000;
    }
    ::-webkit-scrollbar-track {
    background: #cb1b01;
    border: 23px none #ff8000;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
    background: #c409a8;
    }
    ::-webkit-scrollbar-track:active {
    background: #106204;
    }
    ::-webkit-scrollbar-corner {
    background: transparent;
    }
</style>


? ::-webkit-scrollbar-track-piece 

? ::-webkit-resizer

*******************************************************************************


https://css-tricks.com/custom-scrollbars-in-webkit/

## Custom Scrollbars in WebKit - MAY 2, 2011

## Shadow DOM

https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/

伪元素

::-webkit-scrollbar              { /* 1 */ } 滚动条
::-webkit-scrollbar-button       { /* 2 */ } 滚动条按钮
::-webkit-scrollbar-track        { /* 3 */ } 滚动条轨道
::-webkit-scrollbar-track-piece  { /* 4 */ } 滚动条轨道件
::-webkit-scrollbar-thumb        { /* 5 */ } 滚动条
::-webkit-scrollbar-corner       { /* 6 */ } 滚动条角落
::-webkit-resizer                { /* 7 */ } 调整大小


伪类选择器

:horizontal
:vertical
:decrement
:increment
:start
:end 
:double-button
:single-button
:no-button
:corner-present
:window-inactive


https://webkit.org/blog/363/styling-scrollbars/  

https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html  


::-webkit-scrollbar-track-piece:start {
   /* Select the top half (or left half) or scrollbar track individually */
}

::-webkit-scrollbar-thumb:window-inactive {
   /* Select the thumb when the browser window isn't in focus */
}

::-webkit-scrollbar-button:horizontal:decrement:hover {
   /* Select the down or left scroll button when it's being hovered by the mouse */
}


::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

*******************************************************************************


















*******************************************************************************










*******************************************************************************





