# Common Events  

The following are the most commonly used events:


## Mouse Events

click  
    occurs when an element is clicked.
dblclick  
    occurs when an element is double-clicked.
mouseenter  
    occurs when the mouse pointer is over (enters) the selected element.
mouseleave  
    occurs when the mouse pointer leaves the selected element.
mouseover  
    occurs when the mouse pointer is over the selected element.

## Keyboard Events

keydown  
    occurs when a keyboard key is pressed down.
keyup  
    occurs when a keyboard key is released.

## Form Events:

submit  
    occurs when a form is submitted.
change  
    occurs when the value of an element has been changed.
focus  
    occurs when an element gets focus.
blur  
    occurs when an element loses focus.

## Document Events: 

ready  
    occurs when the DOM has been loaded.
resize  
    occurs when the browser window changes size.
scroll  
    occurs when the user scrolls in the specified element.




As an example, let's change the content of a div when the user types in an input field.  
To do that, we need to handle the keydown event, which occurs when a key on the keyboard is pressed:

```codes
HTML:

<input type="text" id="name" />
<div id="msg"></div>

JS:

$("#name").keydown(function() {
    $("#msg").html($("#name").val());
});

```








