// keys


/*


<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.

*/



/*

function(person, i)

key={'person_' + i}


*/


var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
  // return statement goes here:
  return <li key={'person_' + i}>{person}</li>;
});

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLIs}</ul>,
  document.getElementById('app')
);

















