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

