/*

var strings = ['Home', 'Shop', 'About Me'];

var listItems = strings.map(function(string){
  return <li>{string}</li>;
});

<ul>{listItems}</ul>



// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

var liArray = [
  <li>item 1</li>, 
  <li>item 2<li>, 
  <li>item 3</li>
];

<ul>{liArray}</ul>



*/



var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person){
  // return statement goes here:
  return <li>{person}</li>;
});

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLIs}</ul>,
  document.getElementById('app')
);






