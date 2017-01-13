<!-- display: table -->




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


## display: table;  















