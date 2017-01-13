# CSS Display/Visibility Properties  

http://www.w3schools.com/css/css_display_visibility.asp  

display:none and visiblity: hidden

http://www.w3schools.com/css/tryit.asp?filename=trycss_display  



## CSS display Property  

http://www.w3schools.com/cssref/pr_class_display.asp


inline  
    Default value. Displays an element as an inline element (like <span>)  
inline-block  
    Displays an element as an inline-level block container. The inside of this block is formatted as block-level box, and the element itself is formatted as an inline-level box  
block  
    Displays an element as a block element (like <p>)  

flex  
    Displays an element as an block-level flex container.  
    New in CSS3   
inline-flex  
    Displays an element as an inline-level flex container.  
    New in CSS3  

inline-table  
    The element is displayed as an inline-level table    
list-item  
    Let the element behave like a <li> element  
run-in  
    Displays an element as either block or inline, depending on context  
table  
    Let the element behave like a <table> element   
table-caption  
    Let the element behave like a <caption> element 
table-column-group  
    Let the element behave like a <colgroup> element    
table-header-group  
    Let the element behave like a <thead> element   
table-footer-group  
    Let the element behave like a <tfoot> element   
table-row-group  
    Let the element behave like a <tbody> element   
table-cell  
    Let the element behave like a <td> element  
table-column  
    Let the element behave like a <col> element 
table-row  
    Let the element behave like a <tr> element  
none  
    The element will not be displayed at all (has no effect on layout)  
initial  
    Sets this property to its default value.  
inherit  
    Inherits this property from its parent element.  




## CSS visibility Property  


http://www.w3schools.com/cssref/pr_class_visibility.asp




visibility: visible|hidden|collapse|initial|inherit;



visible  
    (Default value). The element is visible  
hidden  
    The element is invisible (but still takes up space)  
collapse  
    Only for table elements. collapse removes a row or column, but it does not affect the table layout. The space taken up by the row or column will be available for other content.
    If collapse is used on other elements, it renders as "hidden"
initial  
    Sets this property to its default value.  
inherit  
    Inherits this property from its parent element.  






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





