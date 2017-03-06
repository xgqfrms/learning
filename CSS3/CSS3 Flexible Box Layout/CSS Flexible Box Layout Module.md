# CSS Flexible Box Layout Module



CSS Flexible Box Layout Module Level 1
W3C Candidate Recommendation, 26 May 2016

https://www.w3.org/TR/css-flexbox-1/



CSS Writing Modes Level 3
W3C Candidate Recommendation, 15 December 2015

https://www.w3.org/TR/css-writing-modes-3/#abstract-box



CSS Box Alignment Module Level 3
W3C Working Draft, 15 February 2017

https://www.w3.org/TR/css-align-3/




## Applies to:  flex containers


display : flex;
display : inline-flex;

// 初始值：row
flex-direction : row;
flex-direction : row-reverse;
flex-direction : column;
flex-direction : column-reverse;


// 初始值：nowrap
flex-wrap : nowrap;
flex-wrap : wrap;
flex-wrap : wrap-reverse;


// 初始值：row nowrap
flex-flow : row nowrap;
flex-flow : row wrap;
flex-flow : row wrap-reverse;

flex-flow : row-reverse nowrap;
flex-flow : row-reverse wrap;
flex-flow : row-reverse wrap-reverse;

flex-flow : column nowrap;
flex-flow : column wrap;
flex-flow : column wrap-reverse;

flex-flow : column-reverse nowrap;
flex-flow : column-reverse wrap;
flex-flow : column-reverse wrap-reverse;

flex-flow : <flex-direction> || <flex-wrap>;





## Applies to:  flex items

flex: none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’>

flex: initial;
flex: 0 1 auto;

flex: auto;
flex: 1 1 auto;

flex: none;
flex: 0 0 auto;

flex: <positive-number>;
flex: <positive-number> 1 0;






margin: auto;
margin-*: auto;


## Applies to:  flex containers

// 初始值：flex-start
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;


// 初始值：stretch
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
align-items: stretch;


## Applies to:  multi-line flex containers

// 初始值：stretch
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: stretch;


## Applies to:  flex items

// 初始值：auto
align-self: auto;
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: baseline;
align-self: stretch;

















