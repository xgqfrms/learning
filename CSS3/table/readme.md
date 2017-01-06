# table  


http://codepen.io/xgqfrms/pen/jyEgKb  

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


display: table-caption        /* <caption>   */

display: table-column-group   /* <colgroup>  */
display: table-column         /* <col>       */

display: table-footer-group   /* <tfoot>     */
display: table-row-group      /* <tbody>     */
display: table-header-group   /* <thead>     */

display: table                /* <table> ( block-level ) */
display: inline-table         /* <table> ( inline-level ) */
display: table-cell           /* <td>        */
display: table-row            /* <tr>        */









display: inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit

display: inline;



## table-element  
https://css-tricks.com/complete-guide-table-element/  


<table> The table itself
<caption>  The caption for the table. Like a figcaption to a figure.
<thead> The table header
<tbody> The table body
<tfoot> The table footer
<tr>    A table row
<th>    A table cell that is a header
<td>    A table cell that is data
<col>   A column (a no-content element) css ?  
<colgroup>  A group of columns css ?  


## table-element atrributes  
https://css-tricks.com/complete-guide-table-element/  


colspan th, td  extends a cell to be as wide as 2 or more cells
rowspan th, td  extends a cell to be as tall as 2 or more cells
span    col Makes the column apply to more to 2 or more columns
sortable    table   Indicates the table should allow sorting
headers td  space-separated string corresponding to ID's of the <th> elements relevant to the data
scope   th  row | col | rowgroup | colgroup (default) - essentially specifies the axis of the header. The default is that a header is heading a column, which is typical, but a row might start with a header also, where you would scope that header to the row or rowgroup.


https://www.campaignmonitor.com/css/  
https://css-tricks.com/complete-guide-table-element/  
https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout  




<colgroup>
    <col style="background-color: #0f0">
    <col span="2">
</colgroup>


<colgroup span="4"></colgroup>


https://www.w3.org/TR/html5/tabular-data.html#the-colgroup-element  

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}

http://www.w3schools.com/html/html_tables.asp  








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





http://www.w3schools.com/html/html_tables.asp  


Use the HTML <table> element to define a table
Use the HTML <tr> element to define a table row
Use the HTML <td> element to define a table data
Use the HTML <th> element to define a table heading
Use the HTML <caption> element to define a table caption
Use the CSS border property to define a border
Use the CSS border-collapse property to collapse cell borders
Use the CSS padding property to add padding to cells
Use the CSS text-align property to align cell text
Use the CSS border-spacing property to set the spacing between cells
Use the colspan attribute to make a cell span many columns
Use the rowspan attribute to make a cell span many rows
Use the id attribute to uniquely define one table


<table> Defines a table
<th>    Defines a header cell in a table
<tr>    Defines a row in a table
<td>    Defines a cell in a table
<caption>   Defines a table caption
<colgroup>  Specifies a group of one or more columns in a table for formatting
<col>   Specifies column properties for each column within a <colgroup> element
<thead> Groups the header content in a table
<tbody> Groups the body content in a table
<tfoot> Groups the footer content in a table




https://developer.mozilla.org/en/docs/Web/HTML/Element/table  





