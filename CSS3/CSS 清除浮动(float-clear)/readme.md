# float and clear  


http://www.w3schools.com/css/css_float.asp

## CSS Layout - float and clear  



## clearfix Hack  

http://www.w3schools.com/css/css_float.asp


/* old clearfix */

.clearfix {
    overflow: auto;
}


/* new clearfix */

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}


https://learning.xgqfrms.xyz/CSS3/float%20&%20position/overfloat.html

https://learning.xgqfrms.xyz/CSS3/float%20&%20position/absolute-center.html






/* clearfix */

overflow: auto;


overflow: hidden;



## CSS clear Property  

http://www.w3schools.com/cssref/pr_class_clear.asp  



clear: none| left| right| both| initial| inherit;

clear: none;



none  
    (Default). Allows floating elements on both sides
left  
    No floating elements allowed on the left side
right  
    No floating elements allowed on the right side
both  
    No floating elements allowed on either the left or the right side
initial  
    Sets this property to its default value. Read about initial
inherit  
    Inherits this property from its parent element. Read about inherit




## CSS float Property  


http://www.w3schools.com/cssref/pr_class_float.asp  


float: none| left| right| initial| inherit;

float: none;


none  
    (Default value: none) The element is not floated, and will be displayed just where it occurs in the text.  
    The element floats to the left  
right  
    The element floats the right  
initial  
    Sets this property to its default value. Read about initial  
inherit  
    Inherits this property from its parent element. Read about inherit




## clearfix


https://www.sitepoint.com/clearing-floats-overview-different-clearfix-methods/



清除浮动

https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear


/* new clearfix */
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

/* old clearfix */

.clearfix:after {
    content: "";
    display: block;
    clear: both;
}




CSS3 Animations(@keyframes)

https://codepen.io/xgqfrms/full/pevGrG/


https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

盒模型


在一个文档中，每个元素都被表示为一个矩形的盒子。
确定尺寸, 属性 - 像它的颜色，背景，边框方面 - 和这些盒子的位置是渲染引擎的目标。

在CSS中，使用标准盒个模型描述这些矩形盒子中的每一个。这个模型描述了元素所占空间的内容。每个盒子有四个边：外边距边, 边框边, 内填充边 与 内容边。 


外边距塌陷

https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

块的顶部外边距和底部外边距有时被组合(折叠)为单个外边距，其大小是组合到其中的最大外边距，这种行为称为外边距塌陷(margin collapsing)。



清除浮动

https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear




https://github.com/haocity/Tplayer

html5+css3弹幕播放器

https://www.haotown.cn/



.clearfix:after {
    content: "";
    display: table;
    clear: both;
}



.container {
    min-height: contain-floats;
}

http://caniuse.com/#search=contain-floats
https://www.w3.org/TR/css-sizing-3/#the-contain-floats-value
https://drafts.csswg.org/css-sizing/#the-contain-floats-value




