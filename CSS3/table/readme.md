# table  


## W3C TR  

https://www.w3.org/TR/  

https://www.w3.org/TR/#tr_CSS  

https://developer.mozilla.org/en-US/docs/Web/CSS/display  

https://css-tricks.com/complete-guide-table-element/  


## Table rows Collection (DOM )  
http://www.w3schools.com/jsref/coll_table_rows.asp  

http://www.w3schools.com/cssref/pr_class_display.asp  


https://www.w3.org/TR/CSS2/tables.html#propdef-table-layout  
https://www.w3.org/TR/CSS2/visuren.html#block-level  
https://www.w3.org/TR/CSS2/visuren.html#inline-level  
https://www.w3.org/TR/CSS2/visuren.html#block-formatting  
https://www.w3.org/TR/CSS2/visuren.html#inline-formatting  

https://css-tricks.com/fixing-tables-long-strings/  



display: table                /* <table> ( block-level ) */
display: inline-table         /* <table> ( inline-level ) */
display: table-cell           /* <td>        */
display: table-row            /* <tr>        */
display: table-row-group      /* <tbody>     */
display: table-column         /* <col>       */
display: table-column-group   /* <colgroup>  */
display: table-footer-group   /* <tfoot>     */
display: table-header-group   /* <thead>     */





display: inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit

display: inline;



## table-element  
https://css-tricks.com/complete-guide-table-element/  


<table> The table itself
<caption>   The caption for the table. Like a figcaption to a figure.
<thead> The table header
<tbody> The table body
<tfoot> The table footer
<tr>    A table row
<th>    A table cell that is a header
<td>    A table cell that is data
<col>   A column (a no-content element)
<colgroup>  A group of columns


## table-element atrributes  
https://css-tricks.com/complete-guide-table-element/  


colspan th, td  extends a cell to be as wide as 2 or more cells
rowspan th, td  extends a cell to be as tall as 2 or more cells
span    col Makes the column apply to more to 2 or more columns
sortable    table   Indicates the table should allow sorting
headers td  space-separated string corresponding to ID's of the <th> elements relevant to the data
scope   th  row | col | rowgroup | colgroup (default) - essentially specifies the axis of the header. The default is that a header is heading a column, which is typical, but a row might start with a header also, where you would scope that header to the row or rowgroup.







http://www.w3schools.com/cssref/pr_tab_table-layout.asp  
https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout  

https://www.w3.org/TR/CSS2/tables.html#width-layout  
https://www.w3.org/TR/CSS2/tables.html#propdef-table-layout  


/* Keyword values */
table-layout: auto;
table-layout: fixed;

/* Global values */
table-layout: inherit;
table-layout: initial;
table-layout: unset;








##  display: table-column;  

https://css-tricks.com/almanac/properties/d/display/  


```css
    display: table;
    display: table-cell;
    display: table-column;
    display: table-colgroup;
    display: table-header-group;
    display: table-row-group;
    display: table-footer-group;
    display: table-row;
    display: table-caption;
``` 



http://www.mattboldt.com/kicking-ass-with-display-table/  

http://www.mattboldt.com/demos/typed-js/  
https://www.xgqfrms.xyz/  





