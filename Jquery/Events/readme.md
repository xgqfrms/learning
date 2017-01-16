# Events  

https://www.sololearn.com/Play/jQuery




Common Events

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



Another way to handle events in jQuery is by using the on() method. 
The on() method is used to attach an event to the selected element. 



The on() method is useful for binding the same handler function to multiple events. You can provide multiple event names separated by spaces as the first argument. For example, you could use the same event handler for the click and dblclick events



.addEventListener()

??? source codes 


    function on(elem, types, selector, data, fn, one) {
        on: function(types, selector, data, fn) {

p 1865 (after formatted)

p2129 


The argument of the off() method is the event name you want to remove the handler for.


$("div").on("click", function() { 
    alert('Hi there!'); 
}); 
$("div").off("click");


        off: function(types, selector, fn) {

p 2123 




The Event Object

Every event handling function can receive an event object, which contains properties and methods related to the event:

pageX, pageY  
    the mouse position (X & Y coordinates) at the time the event occurred, relative to the top left of the page.
type  
the type of the event (e.g. "click").
which  
the button or key that was pressed.
data  
any data that was passed in when the event was bound.
target  
the DOM element that initiated the event.
preventDefault()  
prevent the default action of the event (e.g., following a link).
stopPropagation()  
Stop the event from bubbling up to other elements.



$( "a" ).click(function(event) {
      alert(event.pageX);
      event.preventDefault();
});




.saveLoading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(/Images/playground/saveLoading.gif) no-repeat;
    background-position: center center;
    display: block;
    width: 30px;
    height: 25px;
    margin: auto;
}

https://code.sololearn.com/Images/playground/saveLoading.gif



Trigger Events

我们还可以使用trigger（）方法以编程方式触发事件。例如，您可以触发点击事件，而用户实际上不点击元素：

$("div").click(function() {
    alert("Clicked!");
});
$("div").trigger("click");

The trigger() method cannot be used to mimic native browser events, such as clicking on a file input box or an anchor tag. Only events in the jQuery event system can be handled.




























