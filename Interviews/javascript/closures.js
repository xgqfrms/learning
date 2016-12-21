// 


var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        //console.log('You clicked element #' + i);
        alert('You clicked element #' + i);
    });
}




/*
// let

var nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        //console.log('You clicked element #' + i);
        alert('You clicked element #' + i);
    });
}

// IIFE & closure

var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', (function(i) {
        return function() {
            // console.log('You clicked element #' + i);
            alert('You clicked element #' + i);
        }
    })(i));
}



// global function & clousure function

var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', clickedButton(i));
}

function clickedButton(i) {
    return function() {
         //console.log('You clicked element #' + i);
         alert('You clicked element #' + i);
    }
};


 */

