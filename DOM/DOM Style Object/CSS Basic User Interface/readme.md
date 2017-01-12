# CSS Basic User Interface  


https://www.w3.org/TR/css-ui-3/  



CSS Basic User Interface Module Level 3 (CSS3 UI)

W3C Candidate Recommendation, 7 July 2015







## 以下功能存在风险，在CR期间可能会被删除：  


The caret-color property
The <string> value of the text-overflow property
The 2-value syntax of the text-overflow property
Constraints on negative values of the outline-offset property being expressed with MUST rather than with SHOULD




##  Box Model addition  

https://www.w3.org/TR/css-ui-3/#box-sizing  



box-sizing: content-box | border-box;

box-sizing: content-box; (initial)



content-box 这是CSS2.1指定的宽度和高度的行为。

border-box 此元素上的宽度和高度（以及相应的最小/最大属性）的长度和百分比值确定元素的边框。

也就是说，元素上指定的任何填充或边框都会在此指定的宽度和高度内进行布局和绘制。



## Outline properties  

https://www.w3.org/TR/css-ui-3/#outline-props  



Outlines do not take up space.  
Outlines may be non-rectangular.  
UAs often render outlines on elements in the :focus state.


轮廓不占用空间。  
轮廓可以是非矩形的。  
UA经常渲染 :focus状态的元素的轮廓。


outline: outline-color outline-style outline-width 

outline
Value: [ <outline-color> || <outline-style> || <outline-width> ]
Initial: see individual properties


outline-width
Value: <‘border-width’>
Initial: medium


outline-style
Value: auto | <‘border-style’>
Initial: none

http://www.w3.org/TR/css3-background/#border-style  


outline-color
Value: <color> | invert
Initial: invert


outline-offset
Value: <length>
Initial: 0





## Resizing & Overflow  

https://www.w3.org/TR/css-ui-3/#resizing-and-overflow  



resize
Value: none | both | horizontal | vertical
Initial: none

resize: none;


iframe,object[type^="text/"],
object[type$="+xml"],object[type="application/xml"]
{
    overflow:auto;
    resize:both;
}


text-overflow
Value: [ clip | ellipsis | <string> ]{1,2}
Initial: clip









## Pointing Devices and Keyboards  


## Pointer interaction  

https://www.w3.org/TR/css-ui-3/#pointer-interaction  


cursor
Value: [
    [<url> [<x> <y>]?,]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | grab | grabbing | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out ] 
]
Initial: auto

<url>
https://www.w3.org/TR/css3-values/#url-value

background: url("http://www.example.com/pinkish.gif");
background: url(http://www.example.com/pinkish.gif);

https://www.w3.org/TR/css3-images/#image-type


<x> <y> 每个都是一个<number>。光标坐标系中位置的x坐标和y坐标（左/上相对），表示指向的精确位置。





## Keyboard control  

https://www.w3.org/TR/css-ui-3/#keyboard  


nav-up, nav-right, nav-down, nav-left

Value:  auto | <id> [ current | root | <target-name> ]?

Initial: auto


nav-up: auto;
nav-right: auto;
nav-down: auto;
nav-left: auto;



## Insertion caret  

caret-color
Value: auto | <color>
Initial: auto









