# display: table;




## clearfix Hack  

http://www.w3schools.com/css/css_float.asp

https://www.sitepoint.com/clearing-floats-overview-different-clearfix-methods/




```css

/* old clearfix */

.clearfix:after {
    overflow: auto;
}


/* new clearfix */

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}


  

``` 













