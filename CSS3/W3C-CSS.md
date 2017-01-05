# CSS  

https://www.w3.org/TR/CSS/#css  


https://www.w3.org/TR/CSS21/  
Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification  
W3C Recommendation 07 June 2011, edited in place 12 April 2016 to point to new work

https://www.w3.org/TR/CSS22/  
Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification  
W3C First Public Working Draft 12 April 2016



# CSS basic box model  

W3C Working Draft 9 August 2007

https://www.w3.org/TR/css3-box/  
https://www.w3.org/TR/css3-box/#CSS21  


https://www.w3.org/TR/css3-box/#rotating  
https://www.w3.org/TR/css3-box/#floating0  
https://www.w3.org/TR/css3-box/#line-box.  
https://www.w3.org/TR/css3-box/#block-level  

https://www.w3.org/TR/css3-box/#display




## display  

```sh

inline | block | inline-block | none |  

list-item | run-in | compact |  

table | inline-table | table-row-group | table-header-group |  table-footer-group | table-row | table-column-group | table-column |  table-cell | table-caption | 

ruby | ruby-base | ruby-text | ruby-base-group | ruby-text-group |  

<template> |  

flex |  

grid |  

float |  

position |  

``` 

## display  

https://developer.mozilla.org/en-US/docs/Web/CSS/display  


```css

/* <display-outside> values */
display: block;
display: inline;
display: run-in;

/* <display-inside> values */
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;
display: subgrid;

/* <display-outside> plus <display-inside> values */
display: block flow;
display: inline table;
display: flex run-in;

/* <display-listitem> values */
display: list-item;
display: list-item block;
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;

/* <display-internal> values */
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

/* <display-box> values */
display: contents;
display: none;

/* <display-legacy> values */
display: inline-block;
display: inline-list-item;
display: inline-table;
display: inline-flex;
display: inline-grid;

/* Global values */
display: inherit;
display: initial;
display: unset;

``` 

