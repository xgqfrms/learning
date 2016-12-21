// 


var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', clickedButton());
}

function clickedButton() {
    //console.log('You clicked element #' + i);
    alert('You clicked element #' + i);
};

/*
// let

var nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        //console.log('You clicked element #' + i);
        alert('You clicked element #' + i);
    });
}

// IIFE

var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        //console.log('You clicked element #' + i);
        alert('You clicked element #' + i);
    }(i));
}

// 
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        //console.log('You clicked element #' + i);
        alert('You clicked element #' + i);
    });
}

 */

